---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
---

## zh-CN

基本使用。

## en-US

Basic usage example.

````jsx
import { Form, Switch, DataSet, Pagination } from 'choerodon-ui/pro';
import { observer } from 'mobx-react';

function handleChange(page, pageSize) {
  console.log('[pagination]', page, pageSize);
}

@observer
class App extends React.Component {
  ds = new DataSet({
    autoCreate: true,
    fields: [
      { name: 'showSizeChanger', type: 'boolean', label: 'showSizeChanger', defaultValue: true },
      { name: 'showTotal', type: 'boolean', label: 'showTotal', defaultValue: true },
      { name: 'showPager', type: 'boolean', label: 'showPager', defaultValue: false },
    ],
  });

  render() {
    const { ds, ds: { current } } = this;
    return (
      <div>
        <Form columns={3} dataSet={ds} labelWidth={150}>
          <Switch name="showSizeChanger" />
          <Switch name="showTotal" />
          <Switch name="showPager" />
        </Form>
        <Pagination
          showSizeChanger={current.get('showSizeChanger')}
          showTotal={current.get('showTotal')}
          showPager={current.get('showPager')}
          total={1000}
          onChange={handleChange}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  mountNode
);
````
