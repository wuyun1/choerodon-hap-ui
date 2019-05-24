---
order: 1
title:
  zh-CN: 过滤条
  en-US: Filter Bar
---

## zh-CN

过滤条。

## en-US

Filter Bar.

````jsx
import { DataSet, Table, Button } from 'choerodon-ui/pro';

class App extends React.Component {
  state = { show: false };

  handleClick = () => this.setState({ show: !this.state.show });

  button = <Button key="change" funcType="flat" onClick={this.handleClick}>切换列显示</Button>

  ds = new DataSet({
    primaryKey: 'userid',
    name: 'user',
    autoQuery: true,
    pageSize: 5,
    queryFields: [
      { name: 'name', type: 'string', label: '姓名' },
      { name: 'age', type: 'number', label: '年龄' },
      { name: 'code', type: 'object', label: '代码描述', lovCode: 'LOV_CODE' },
      { name: 'sex', type: 'string', label: '性别', lookupCode: 'HR.EMPLOYEE_GENDER' },
      { name: 'date.startDate', type: 'date', label: '开始日期' },
      { name: 'sexMultiple', type: 'string', label: '性别（多值）', lookupCode: 'HR.EMPLOYEE_GENDER', multiple: true },
    ],
    fields: [
      { name: 'userid', type: 'string', label: '编号', required: true },
      { name: 'name', type: 'string', label: '姓名' },
      { name: 'age', type: 'number', label: '年龄', max: 100, step: 1 },
      { name: 'sex', type: 'string', label: '性别', lookupCode: 'HR.EMPLOYEE_GENDER' },
      { name: 'date.startDate', type: 'date', label: '开始日期', defaultValue: new Date() },
      { name: 'sexMultiple', type: 'string', label: '性别（多值）', lookupCode: 'HR.EMPLOYEE_GENDER', multiple: true },
    ],
    events: {
      query: ({ params }) => console.log('filterbar query parameter', params),
    },
  });

  getColumns() {
    return [
      {
        header: '组合',
        children: [
          { name: 'name', width: 450, editor: true },
          { name: 'age', editor: true },
        ],
      },
      {
        header: '组合3',
        children: [
          {
            header: '组合2',
            children: [
              { name: 'sex', editor: true },
              { name: 'date.startDate', editor: true },
            ],
          },
          { name: 'sexMultiple', editor: true },
        ],
      },
      this.state.show ? { header: '操作' } : null,
    ];
  }

  render() {
    return (
      <Table dataSet={this.ds} queryBar="bar" border={false} buttons={[this.button]} columns={this.getColumns()} />
    );
  }
}

ReactDOM.render(
  <App />,
  mountNode
);
````
