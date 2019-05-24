---
category: Pro Components
subtitle: 抽象下拉表单控件
type: Abstract
title: TriggerField
---

所有有下拉菜单的表单控件的抽象基类。

## API

### TriggerField

| 参数      | 说明                                     | 类型        |默认值 |
|-----------|------------------------------------------|------------|--------|
| popupContent | 下拉框的自定义内容 | ReactNode \| (props) => ReactNode  |  |
| popupCls | 下拉框的自定义样式名 | string  |  |
| popupStyle | 下拉框的内链样式 | CSSProperties  |  |
| trigger | 触发下拉框的方式组, 可选值：`click` `focus` `hover` `contextMenu` | string\[\]  |  |
| triggerShowDelay | 下拉框显示延迟 | number  | 150 |
| triggerHiddenDelay | 下拉框隐藏延迟 | number  | 50 |

更多属性请参考 [TextField](/components-pro/text-field/#TextField)。
