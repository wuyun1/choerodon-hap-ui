---
category: Pro Components
subtitle: 选择框
type: Data Entry
title: SelectBox
---

表单控件。

## 何时使用

- 平铺选项便于用户选择操作，作用同[Select](/components-pro/select/)。

## API

### SelectBox

| 参数      | 说明                                     | 类型        |默认值 |
|-----------|------------------------------------------|------------|--------|
| mode | 选择器的展现形式，可选值 `box` `button` | string  |  |
| vertical | 是否垂直显示 | boolean | false |

更多属性请参考 [Select](/components-pro/select/#Select)。


### SelectBox.OptGroup 

| 参数      | 说明                                     | 类型        |默认值 |
|-----------|------------------------------------------|------------|--------|
| label | 选项组标题 | string |  |

### SelectBox.Option

| 参数      | 说明                                     | 类型        |默认值 |
|-----------|------------------------------------------|------------|--------|
| value | 选项值 | any |  |

<style>
.code-box-demo .c7n-pro-select-wrapper,
.code-box-demo .c7n-pro-select-box {
  margin-bottom: .1rem;
}
</style>
