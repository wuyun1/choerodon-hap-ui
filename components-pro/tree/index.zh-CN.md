---
category: Pro Components
type: Data Display
title: Tree
subtitle: 树形控件
---

## 何时使用

文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用`树控件`可以完整展现其中的层级关系，并具有展开收起选择等交互功能。

## API

### Tree props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataSet | 绑定的数据源 | DataSet |  |
| renderer | 节点渲染钩子，只在绑定数据源时起效 | ({ dataSet, record, text }) => ReactNode |  |
| titleField | 节点文字对应数据源的字段，只在绑定数据源时起效 | string |  |

更多案列和属性请参考 [Tree](/components/tree/)。



