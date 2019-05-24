---
category: Pro Components
subtitle: 国际化
cols: 1
type: Other
title: LocaleContext
---

为组件内建文案提供统一的国际化支持。

## 使用

```jsx
import { localeContext } from 'choerodon-ui/pro';
import zh_CN from 'choerodon-ui/pro/lib/locale-context/zh_CN';
import 'moment/locale/zh-cn';

localeContext.setLocale(zh_CN);

```

我们提供了英语，中文，俄语，法语，德语等多种语言支持，所有语言包可以在 [这里](https://github.com/choerodon/choerodon-ui/blob/master/components-pro/locale-context/) 找到。

注意：如果你需要使用 UMD 版的 dist 文件，应该引入 `choerodon-ui/pro/dist/choerodon-ui/pro-with-locales.js`，同时引入 moment 对应的 locale，然后按以下方式使用：

```jsx
const { localeContext, locales } = window['choerodon-ui/pro'];

...

localeContext.setLocale(zh_CN);
```

### 增加语言包

如果你找不到你需要的语言包，欢迎你在 [简体中文语言包](https://github.com/choerodon/choerodon-ui/blob/master/components-pro/locale-context/zh_CN.tsx) 的基础上创建一个新的语言包，并给我们 Pull Request。

## API Methods

| 方法 | 说明 | 参数类型 | 默认值 |
| --- | --- | --- | --- |
| setLocale(locale) | 语言包配置，语言包可到 `choerodon-ui/pro/lib/locale-context/` 目录下寻找 | object | choerodon-ui/pro/lib/locale-context/zh_CN |
| setSupports(supports) | IntlField支持的可编辑语言，默认可参考 `choerodon-ui/pro/lib/locale-context/supports`  | object | { zh_CN:'简体中文', en_GB: 'English' } |
