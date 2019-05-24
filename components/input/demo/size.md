---
order: 1
title:
    zh-CN: 三种大小
    en-US: Three sizes of Input
---

## zh-CN

我们为 `<Input />` 输入框定义了三种尺寸（大、默认、小），高度分别为 `40px`、`32px` 和 `24px`。

注意： 在表单里面，我们只使用大尺寸的输入框。

## en-US

There are three sizes of an Input box: `large` (40px)、`default` (32px) and `small` (24px).

Note: Inside of forms, only the large size is used.

````jsx
import { Input } from 'choerodon-ui';

ReactDOM.render(
  <div className="example-input">
    <Input size="large" placeholder="large size" label="Large" maxLength="20" />
    <Input placeholder="default size" />
    <Input size="small" placeholder="small size" label="small" />
  </div>,
  mountNode);
````

<!-- ````css
.example-input .c7n-input {
  width: 200px;
  margin: 0 8px 8px 0;
}
```` -->
