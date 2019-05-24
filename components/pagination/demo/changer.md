---
order: 2
title:
  zh-CN: 改变
  en-US: Changer
---

## zh-CN

改变每页显示条目数。

## en-US

Change `pageSize`.

````jsx
import { Pagination } from 'choerodon-hap-ui';

function onShowSizeChange(current, pageSize) {
  console.log(current, pageSize);
}

ReactDOM.render(
  <Pagination
    tiny={false}
    showSizeChangerLabel={false}
    showTotal={false}
    onShowSizeChange={onShowSizeChange}
    defaultCurrent={3}
    total={500}
  />,
  mountNode);
````
