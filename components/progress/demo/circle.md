---
order: 1
title:
  zh-CN: 进度圈
  en-US: Circular progress bar
---

## zh-CN

圈形的进度。

## en-US

A circular progress bar.

````jsx
import { Progress } from 'choerodon-hap-ui';

ReactDOM.render(
  <div>
    <Progress type="circle" percent={75} />
    <Progress type="circle" percent={70} status="exception" />
    <Progress type="circle" percent={100} />
  </div>,
  mountNode);
````

<style>
.c7n-progress-circle-wrap,
.c7n-progress-line-wrap {
  margin-right: 8px;
  margin-bottom: 5px;
}
</style>
