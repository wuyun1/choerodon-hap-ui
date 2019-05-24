import React from 'react';
import { observer } from 'mobx-react';
import omit from 'lodash/omit';
import isNumber from 'lodash/isNumber';
import C7NProgress, { ProgressProps as C7NProgressProps } from 'choerodon-ui/lib/progress';
import DataSet from '../data-set/DataSet';
import { FormField } from '../field/FormField';

export interface ProgressProps extends C7NProgressProps {
  dataSet?: DataSet;
  name?: string;
}

@observer
export default class Progress extends FormField<ProgressProps> {
  static displayName = 'Progress';

  getValue() {
    const value = super.getValue();
    if (isNumber(value)) {
      return value;
    }
    return this.props.percent;
  }

  render() {
    return (
      <C7NProgress {...omit(this.props, ['dataSet', 'showHelp', 'renderer'])} percent={this.getValue()} />
    );
  }
}
