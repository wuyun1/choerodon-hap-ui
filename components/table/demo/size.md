---
order: 10
title:
  en-US: size
  zh-CN: 紧凑型
---

## zh-CN

三种紧凑型的列表，小型列表只用于对话框内。

## en-US

Three compacted table size: `default` `large` and `small`, `small` size is used in Modal only.

````jsx
import { Table } from 'choerodon-ui';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
}];
const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];

ReactDOM.render(
  <div>
    <h4>Large size table</h4>
    <Table columns={columns} dataSource={data} size="large" />
    <h4>Small size table</h4>
    <Table columns={columns} dataSource={data} size="small" />
  </div>,
  mountNode);
````

<style>#components-table-demo-size h4 { margin-bottom: 16px; }</style>
