---
order: 2
title:
  zh-CN: 值列表代码
  en-US: Lookup Code
---

## zh-CN

值列表代码。

## en-US

Lookup Code

````jsx
import { DataSet, Select, Button, Row, Col } from 'choerodon-ui/pro';

function handleDataSetChange({ record, name, value, oldValue }) {
  console.log('[dataset newValue]', value, '[oldValue]', oldValue, `[record.get('${name}')]`, record.get(name));
}

class App extends React.Component {
  flag = false;

  ds = new DataSet({
    autoCreate: true,
    fields: [
      { name: 'sex', type: 'string', lookupCode: 'HR.EMPLOYEE_GENDER', defaultValue: 'F' },
      { name: 'sex2', type: 'string', lookupUrl: '/common/code/HR.EMPLOYEE_GENDER/' },
      { name: 'lov', type: 'string', lovCode: 'LOV_CODE', defaultValue: 'SYS.PROFILE_LEVEL_ID' },
      { name: 'lov2', type: 'string', lovCode: 'LOV_CODE', defaultValue: ['SYS.PROFILE_LEVEL_ID', 'SYS.RESOURCE_TYPE'], multiple: true },
    ],
    events: {
      update: handleDataSetChange,
    },
  });

  changeLookupCode = () => {
    this.flag = !this.flag;
    this.ds.getField('sex').set('lookupCode', this.flag ? 'SYS.USER_STATUS' : 'HR.EMPLOYEE_GENDER');
  };

  render() {
    return (
      <Row gutter={10}>
        <Col span={6}>
          <Select dataSet={this.ds} name="sex" placeholder="请选择" />
        </Col>
        <Col span={6}>
          <Button onClick={this.changeLookupCode}>修改lookupCode</Button>
        </Col>
        <Col span={12}>
          <Select dataSet={this.ds} name="sex2" placeholder="请选择" />
        </Col>
        <Col span={12}>
          <Select dataSet={this.ds} name="lov" placeholder="请选择" />
        </Col>
        <Col span={12}>
          <Select dataSet={this.ds} name="lov2" placeholder="请选择" />
        </Col>
      </Row>
    );
  }
}

ReactDOM.render(
  <App />,
  mountNode
);
````
