---
category: Pro Components
subtitle: 选择框
type: Data Entry
title: Select
---

表单控件。

## 何时使用

- 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
- 当选项少时（少于 5 项），建议直接将选项平铺，使用 [SelectBox](/components-pro/select-box) 是更好的选择。


## API

### Select

| 参数      | 说明                                     | 类型        |默认值 |
|-----------|------------------------------------------|------------|--------|
| combo | 复合输入值 | boolean | false |
| searchable | 是否可搜索 | boolean | false |
| optionsFilter | 选项过滤 | (record) => boolean  |  |
| checkValueOnOptionsChange | 当选项改变时，检查并清除不在选项中的值 | boolean  | true |
| dropdownMatchSelectWidth | 下拉框匹配输入框宽度 | boolean  | true |
| dropdownMenuStyle | 下拉框菜单样式名 | object  |  |

更多属性请参考 [TriggerField](/components-pro/trigger-field/#TriggerField)。

### Select.OptGroup 

| 参数      | 说明                                     | 类型        |默认值 |
|-----------|------------------------------------------|------------|--------|
| label | 选项组标题 | string |  |

### Select.Option

| 参数      | 说明                                     | 类型        |默认值 |
|-----------|------------------------------------------|------------|--------|
| value | 选项值 | any |  |

<style>
.code-box-demo .c7n-pro-select-wrapper,
.code-box-demo .c7n-pro-select-box {
  margin-bottom: .1rem;
}
</style>
