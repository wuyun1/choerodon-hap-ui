# Choerodon UI

An enterprise-class UI design language and React-based implementation.

[中文 README](README-zh_CN.md)

## Features

- Extracted from the interactive language and visual style of enterprise-level medium and backstage products.
- A set of high-quality React components out of the box.
- Written in TypeScript with predictable static types.
- The whole package of development and design resources and tools.

## Environment Support

* Modern browsers and Internet Explorer 9+ (with [polyfills](https://ant.design/docs/react/getting-started#Compatibility))
* Server-side Rendering
* [Electron](http://electron.atom.io/)

## Install

```bash
npm install choerodon-hap-ui --save
```

## Usage

```jsx
import { DatePicker } from 'choerodon-hap-ui';
ReactDOM.render(<DatePicker />, mountNode);
```

And import style manually:

```jsx
import 'choerodon-hap-ui/dist/choerodon-hap-ui.css';  // or 'choerodon-hap-ui/dist/choerodon-hap-ui.less'
```

Or [import components on demand](http://ant-design.gitee.io/docs/react/getting-started#Import-on-Demand)

### TypeScript

See [Used in TypeScript](http://ant-design.gitee.io/docs/react/use-in-typescript)


## Internationalization

See [i18n](http://ant-design.gitee.io/docs/react/i18n).

## Links

- [Home page](https://choerodon.github.io/choerodon-hap-ui/index-cn/)
- [Components](https://choerodon.github.io/choerodon-hap-ui/docs/react/introduce)
- [Change Log](CHANGELOG.en-US.md)
- [Scaffold Market](http://scaffold.ant.design)
- [Ant Design](http://ant-design.gitee.io)
- [rc-components](http://react-component.github.io/)
- [Customize Theme](https://choerodon.github.io/choerodon-hap-ui/customize-theme)

## Local Development

```bash
$ git clone https://github.com/choerodon/choerodon-hap-ui.git
$ cd choerodon-hap-ui
$ npm install
$ npm start
```

Open your browser and visit http://127.0.0.1:8001 , see more at https://github.com/ant-design/ant-design/wiki/Development .
