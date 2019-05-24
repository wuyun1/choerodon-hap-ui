---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic Usage
---

## zh-CN

下拉选择器。

## en-US

Select

````jsx
import { Select, Row, Col } from 'choerodon-ui/pro';

function handleChange(value, oldValue) {
  console.log('[basic new]', value, '[basic old]', oldValue);
}

const { Option } = Select;

ReactDOM.render(
  <Row gutter={10}>
    <Col span={12}>
      <Select placeholder="请选择" onChange={handleChange}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="wu">Wu</Option>
      </Select>
    </Col>
    <Col span={12}>
      <Select placeholder="请选择" disabled>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="wu">Wu</Option>
      </Select>
    </Col>
  </Row>,
  mountNode
);
````
