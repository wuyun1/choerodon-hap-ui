import React, { ReactNode } from 'react';
import { observer } from 'mobx-react';
import { computed } from 'mobx';
import omit from 'lodash/omit';
import isNil from 'lodash/isNil';
import { FormField, FormFieldProps } from '../field/FormField';
import autobind from '../_util/autobind';
import processFieldValue from '../field/utils';

export interface OutputProps extends FormFieldProps {
}

@observer
export default class Output extends FormField<OutputProps> {
  static displayName = 'Output';

  static defaultProps = {
    ...FormField.defaultProps,
    suffixCls: 'output',
  };

  @computed
  get editable(): boolean {
    return false;
  }

  @autobind
  handleChange() {
  }

  getOtherProps() {
    return omit(super.getOtherProps(), ['name']);
  }

  getText(): ReactNode {
    return this.processText(this.processValue(this.getValue()));
  }

  processValue(value) {
    if (!isNil(value)) {
      value = super.processValue(value);
      const { field, lang } = this;
      if (field) {
        return processFieldValue(value, field, lang);
      }
    }
    return value;
  }

  getRenderedValue(): ReactNode {
    const { field } = this;
    if (field) {
      const multiple = field.get('multiple');
      if (multiple) {
        return this.renderMultipleValues(true);
      }
    }
    return this.getText();
  }

  renderWrapper(): ReactNode {
    return (
      <span {...this.getMergedProps()}>{this.getRenderedValue()}</span>
    );
  }
}
