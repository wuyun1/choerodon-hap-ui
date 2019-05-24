---
order: 1
title:
  zh-CN: 多值
  en-US: Multiple
---

## zh-CN

通过属性`multiple`设置为多值。

## en-US

Multiple values via property `multiple`.

````jsx
import { DataSet, Lov } from 'choerodon-ui/pro';

function handleDataSetChange({ record, name, value, oldValue }) {
  console.log('[dataset multiple]', value, '[oldValue]', oldValue, `[record.get('${name}')]`, record.get(name));
}

class App extends React.Component {
  ds = new DataSet({
    autoCreate: true,
    fields: [
      { name: 'code', type: 'object', lovCode: 'LOV_CODE', multiple: true, required: true, defaultValue: [{}] },
    ],
    events: {
      update: handleDataSetChange,
    },
  });

  render() {
    return <Lov dataSet={this.ds} name="code" placeholder="复选LOV" />;
  }
}

ReactDOM.render(
  <App />,
  mountNode
);
````
