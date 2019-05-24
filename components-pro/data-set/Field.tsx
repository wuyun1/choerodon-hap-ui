import { action, computed, get, observable, ObservableMap, reaction, runInAction, set } from 'mobx';
import { MomentInput } from 'moment';
import isObject from 'lodash/isObject';
import merge from 'lodash/merge';
import noop from 'lodash/noop';
import DataSet from './DataSet';
import Record from './Record';
import Validator, { CustomValidator } from '../validator/Validator';
import { DataSetEvents, FieldType, SortOrder } from './enum';
import lookupStore from '../stores/LookupCodeStore';
import lovCodeStore from '../stores/LovCodeStore';
import localeContext from '../locale-context';
import { findInvalidField, processValue } from './utils';
import Validity from '../validator/Validity';
import ValidationResult from '../validator/ValidationResult';
import { getConfig } from 'choerodon-ui/lib/configure';
import { LovConfig } from '../lov/Lov';

export type Fields = ObservableMap<string, Field>;

export type FieldProps = {
  /**
   * 字段名
   */
  name?: string;
  /**
   * 字段类型
   */
  type?: FieldType;
  /**
   * 排序类型
   * 可选值： asc | desc
   */
  order?: SortOrder;
  /**
   * 字段标签
   */
  label?: string;
  /**
   * 日期类型字段值格式化
   */
  format?: string;
  /**
   * 正则
   */
  pattern?: string | RegExp;
  /**
   * 最小长度
   */
  minLength?: number;
  /**
   * 最大长度
   */
  maxLength?: number;
  /**
   * 步距
   */
  step?: number;
  /**
   * 最大值
   */
  max?: MomentInput;
  /**
   * 最小值
   */
  min?: MomentInput;
  /**
   * 校验器
   */
  validator?: CustomValidator;
  /**
   * 是否必选
   * @default false
   */
  required?: boolean;
  /**
   * 是否只读
   * @default false
   */
  readOnly?: boolean;
  /**
   * 1.当type为object时需要显示的字段名
   * 2.值列表的文本字段，当有lookupCode时，默认值为`meaning`
   */
  textField?: string;
  /**
   * 值列表的值字段，当有lookupCode时，默认值为`value`
   */
  valueField?: string;
  /**
   *  类型为boolean时，true对应的值
   */
  trueValue?: string | number | boolean;
  /**
   *  类型为boolean时，false对应的值
   */
  falseValue?: string | number | boolean;
  /**
   * 下拉框组件的菜单数据集
   */
  options?: DataSet | string;
  /**
   * 是否分组
   * 如果是number，则为分组的顺序
   */
  group?: number | boolean;
  /**
   * 默认值
   */
  defaultValue?: any;
  /**
   * 是否为值数组
   * 当为字符串时，作为数据分隔符，查询时会将字符串分割成数组，提交时会将数组拼接成字符串
   * @default false
   */
  multiple?: boolean | string;
  /**
   * 唯一索引或联合唯一索引组名
   */
  unique?: boolean | string;
  /**
   * LOV代码
   */
  lovCode?: string;
  /**
   * LOV查询参数
   */
  lovPara?: object;
  /**
   * 值列表代码
   */
  lookupCode?: string;
  /**
   * 值列表请求的Url
   */
  lookupUrl?: string | ((code: string) => string);
  /**
   * 内部字段别名绑定
   */
  bind?: string;
  /**
   * 动态属性
   */
  dynamicProps?: (props: { dataSet: DataSet, record: Record, name: string }) => any;
  /**
   * 快码和LOV查询时的级联参数映射
   * @example
   * cascadeMap: { parentCodeValue: 'city' }
   * 其中'city'是当前所在数据源的其他字段名，parentCodeValue是关联父级的查询字段
   */
  cascadeMap?: object;
  /**
   * 货币代码
   */
  currency?: string;
}

export default class Field {

  static defaultProps: FieldProps = {
    type: FieldType.auto,
    required: false,
    readOnly: false,
    group: false,
    textField: 'meaning',
    valueField: 'value',
    trueValue: true,
    falseValue: false,
  };

  dataSet?: DataSet;

  record?: Record;

  pristineProps: FieldProps;

  validator: Validator = new Validator();

  lookUpPending?: Promise<object[] | undefined>;
  lovPending?: Promise<LovConfig | undefined>;

  @observable props: FieldProps & { [key: string]: any };

  @observable modified: boolean;

  @computed
  get dirty(): boolean {
    if (this.modified) {
      return true;
    }
    const { record } = this;
    const bind = this.get('bind');
    if (record) {
      if (bind) {
        const field = record.getField(bind);
        if (field) {
          return field.dirty;
        }
      }
      if (record.tlsDataSet && this.type === FieldType.intl) {
        const { current } = record.tlsDataSet;
        if (current) {
          return Object.keys(localeContext.supports).some(lang => {
            const langField = current.getField(`${this.name}.${lang}`);
            return langField ? langField.dirty : false;
          });
        }
      }
    }
    return false;
  }

  set dirty(dirty: boolean) {
    const { record } = this;
    const bind = this.get('bind');
    if (bind && record) {
      const field = record.getField(bind);
      if (field) {
        field.dirty = dirty;
      }
    }
    this.modified = dirty;
  }

  get name(): string {
    return this.props.name!;
  }

  get order(): string | undefined {
    return this.get('order');
  }

  set order(order: string | undefined) {
    this.set('order', order);
  }

  private reactions: any = {};

  constructor(props: FieldProps = {}, dataSet?: DataSet, record?: Record) {
    runInAction(() => {
      this.dataSet = dataSet;
      this.record = record;
      this.props = this.pristineProps = props;
      this.modified = false;
      reaction(() => this.fetchLookup(), noop);
      reaction(() => this.fetchLovConfig(), noop);
    });
  }

  /**
   * 获取所有属性
   * @return 属性对象
   */
  getProps(): FieldProps & { [key: string]: any } {
    const dsField = this.findDataSetField();
    return merge(
      { lookupUrl: getConfig('lookupUrl') },
      Field.defaultProps,
      dsField && dsField.props,
      this.props,
    );
  }

  /**
   * 根据属性名获取属性值
   * @param propsName 属性名
   * @return {any}
   */
  get(propsName: string): any {
    if (propsName !== 'dynamicProps') {
      const dynamicProps = this.get('dynamicProps');
      if (typeof dynamicProps === 'function') {
        let { dataSet, record, name } = this;
        if (dataSet && dataSet.tlsRecord) {
          record = dataSet.tlsRecord;
          dataSet = record.dataSet;
        }
        if (record && !record.data) {
          record = new Record(record.initData);
          record.dataSet = dataSet;
        }
        if (dataSet && record) {
          const props = dynamicProps({ dataSet, record, name });
          if (props && propsName in props) {
            const reactor = this.reactions[propsName];
            if (!reactor) {
              this.reactions[propsName] = reaction(() => this.get(propsName), () => {
                this.validator.reset();
                this.checkValidity();
              });
            }
            return props[propsName];
          }
        }
      }
    }
    const value = get(this.props, propsName);
    if (value !== void 0) {
      return value;
    }
    const dsField = this.findDataSetField();
    if (dsField) {
      return dsField.get(propsName);
    }
    if (propsName === 'lookupUrl') {
      return getConfig(propsName);
    }
    return Field.defaultProps[propsName];
  }

  /**
   * 设置属性值
   * @param propsName 属性名
   * @param value 属性值
   * @return {any}
   */
  @action
  set(propsName: string, value: any): void {
    const oldValue = this.get(propsName);
    if (oldValue !== value) {
      set(this.props, propsName, value);
      const { record, dataSet } = this;
      if (record) {
        if (propsName === 'type') {
          record.set(this.name, processValue(record.get(this.name), this));
        }
      }
      if (dataSet) {
        dataSet.fireEvent(DataSetEvents.fieldChange, { dataSet, record, field: this, propsName, value, oldValue });
      }
    }
  }

  /**
   * 根据lookup值获取lookup对象
   * @param value lookup值
   * @return {object}
   */
  getLookupData(value: any = this.getValue()): object {
    const valueField = this.get('valueField');
    const lookupKey = lookupStore.getKey(this);
    const data = {};
    if (lookupKey) {
      return lookupStore.getByValue(lookupKey, value, valueField) || data;
    }
    return data;
  }

  getValue(): any {
    const { dataSet, name } = this;
    const record = this.record || dataSet && dataSet.current;
    if (record) {
      return record.get(name);
    }
  }

  /**
   * 根据lookup值获取lookup含义
   * @param value lookup值
   * @return {string}
   */
  getText(value: any = this.getValue()): string | undefined {
    const textField = this.get('textField');
    const valueField = this.get('valueField');
    const lookupKey = lookupStore.getKey(this);
    if (lookupKey) {
      return lookupStore.getText(lookupKey, value, valueField, textField);
    }
    const options = this.getOptions();
    if (options) {
      const found = options.find((record) => record.get(valueField) === value);
      if (found) {
        return found.get(textField);
      }
    }
    if (textField && isObject(value)) {
      return value[textField];
    }
    return value;
  }

  setOptions(options: DataSet): void {
    this.set('options', options);
  }

  getOptions(): DataSet | undefined {
    return this.get('options');
  }

  /**
   * 重置设置的属性
   */
  @action
  reset(): void {
    this.props = this.pristineProps;
  }

  @action
  commit(): void {
    this.dirty = false;
    this.validator.reset();
  }

  /**
   * 是否必选
   * @return true | false
   */
  get required(): boolean {
    return this.get('required');
  }

  /**
   * 设置是否必选
   * @param required 是否必选
   */
  set required(required: boolean) {
    this.set('required', required);
  }

  /**
   * 是否只读
   * @return true | false
   */
  get readOnly(): boolean {
    return this.get('readOnly');
  }

  /**
   * 设置是否只读
   * @param readOnly 是否只读
   */
  set readOnly(readOnly: boolean) {
    this.set('readOnly', readOnly);
  }

  /**
   * 获取字段类型
   * @return 获取字段类型
   */
  get type(): FieldType {
    return this.get('type');
  }

  /**
   * 设置字段类型
   * @param type 字段类型
   */
  set type(type: FieldType) {
    this.set('type', type);
  }

  /**
   * 设置Lov的查询参数
   * @param {String} name
   * @param {Object} value
   */
  setLovPara(name, value) {
    const p = this.get('lovPara') || {};
    if (value === null) {
      delete p[name];
    } else {
      p[name] = value;
    }
    this.set('lovPara', p);
  }

  /**
   * 校验字段值
   * 只有通过record.getField()获取的field才能校验
   * @return true | false
   */
  async checkValidity(): Promise<boolean> {
    let valid = true;
    const { record, dataSet, validator, name, type, required } = this;
    if (record) {
      const customValidator = this.get('validator');
      const max = this.get('max');
      const min = this.get('min');
      const pattern = this.get('pattern');
      const step = this.get('step');
      const minLength = this.get('minLength');
      const maxLength = this.get('maxLength');
      const value = record.get(name);
      validator.setProps({
        type,
        required,
        record,
        dataSet,
        name,
        unique: this.dirty ? this.get('unique') : false,
        customValidator,
        pattern,
        max,
        min,
        step,
        minLength,
        maxLength,
      });
      valid = await validator.checkValidity(value);
    }
    return valid;
  }

  async fetchLookup() {
    const lookupKey = lookupStore.getKey(this);
    if (lookupKey) {
      try {
        await (this.lookUpPending = lookupStore.fetchLookupData(lookupKey));
      } finally {
        this.lookUpPending = void 0;
      }
    }
  }

  async fetchLovConfig() {
    const lovCode = this.get('lovCode');
    if (lovCode) {
      try {
        const config = await (this.lovPending = lovCodeStore.fetchConfig(lovCode));
        if (config) {
          const { textField, valueField } = config;
          if (textField) {
            this.set('textField', textField);
            this.pristineProps.textField = valueField;
          }
          if (valueField) {
            this.set('valueField', valueField);
            this.pristineProps.valueField = valueField;
          }
        }
      } finally {
        this.lovPending = void 0;
      }
    }
  }

  isValid() {
    return findInvalidField(this).validator.validity.valid;
  }

  getValidationMessage() {
    return findInvalidField(this).validator.validationMessage;
  }

  getValidityState(): Validity {
    return findInvalidField(this).validator.validity;
  }

  getValidationErrorValues(): ValidationResult[] {
    return findInvalidField(this).validator.validationErrorValues;
  }

  async ready(): Promise<any> {
    const { lookUpPending, lovPending } = this;
    const result = await Promise.all([this.lookUpPending, this.lovPending]);
    if ((this.lookUpPending && this.lookUpPending !== lookUpPending) || (this.lovPending && this.lovPending !== lovPending)) {
      return this.ready();
    }
    return result;
  }

  private findDataSetField(): Field | undefined {
    const { dataSet, name, record } = this;
    if (record && dataSet && name) {
      return dataSet.getField(name);
    }
  }

}
