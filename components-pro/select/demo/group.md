---
order: 5
title:
  zh-CN: 分组
  en-US: Group
---

## zh-CN

有两种方式进行选项分组：

1. 用 `OptGroup` 进行选项分组。
2. 为OptionDs的Field添加group属性，属性值为从1开始的序数，用来指定分组的优先级。


## en-US

From the stack to the horizontal arrangement.

You can create a basic grid system by using a single set of `Row` and` Col` grid assembly, all of the columns (Col) must be placed in `Row`.

````jsx
import { Select } from 'choerodon-hap-ui/pro';

const { Option, OptGroup } = Select;

ReactDOM.render(
  <Select>
    <OptGroup label="Manager">
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
    </OptGroup>
    <OptGroup label="Engineer">
      <Option value="wu">Wu</Option>
    </OptGroup>
  </Select>,
  mountNode
);
````
