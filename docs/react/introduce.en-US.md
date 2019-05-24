---
order: 0
title: Choerodon UI of React
---

Following the Ant Design specification, we developed a React UI library `Choerodon UI` that contains a set of high quality components and demos for building rich, interactive user interfaces.

## Features

- An enterprise-class UI design language for web applications.
- A set of high-quality React components out of the box.
- Written in TypeScript with complete defined types.
- The whole package of development and design resources and tools.

## Environment Support

* Modern browsers and Internet Explorer 9+ (with [polyfills](https://ant.design/docs/react/getting-started#Compatibility))
* Server-side Rendering
* [Electron](http://electron.atom.io/)

## Version

- Stable: [![npm package](https://img.shields.io/npm/v/choerodon-hap-ui.svg?style=flat-square)](https://www.npmjs.org/package/choerodon-hap-ui)

You can subscribe to this feed for new version notifications: https://github.com/ant-design/ant-design/releases.atom

## Installation

### Using npm or yarn

**We recommend using npm or yarn to install**，it not only makes development easier，but also allow you to take advantage of the rich ecosystem of Javascript packages and tooling.

```bash
$ npm install choerodon-hap-ui --save
```

```bash
$ yarn add choerodon-hap-ui
```

If you are in a bad network environment，you can try other registries and tools like [cnpm](https://github.com/cnpm/cnpm).

### Import in Browser

Add `script` and `link` tags in your browser and use the global variable `choerodon-hap-ui`.

We provide `choerodon-hap-ui.js` `choerodon-hap-ui.css` and `choerodon-hap-ui.min.js` `choerodon-hap-ui.min.css` under `choerodon-hap-ui/dist` in choerodon-hap-ui's npm package. You can also download these files directly from [UNPKG](https://unpkg.com/choerodon-hap-ui/dist/).

> **We strongly discourage loading the entire files** this will add bloat to your application and make it more difficult to receive bugfixes and updates. Antd is intended to be used in conjunction with a build tool, such as [webpack](https://webpack.github.io/), which will make it easy to import only the parts of choerodon-hap-ui that you are using.

## Usage

```jsx
import { DatePicker } from 'choerodon-hap-ui';
ReactDOM.render(<DatePicker />, mountNode);
```

And import stylesheets manually:

```jsx
import 'choerodon-hap-ui/dist/choerodon-hap-ui.css';  // or 'choerodon-hap-ui/dist/choerodon-hap-ui.less'
```

### Use modularized choerodon-hap-ui

- Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (Recommended)

   ```json
   // .babelrc or babel-loader option
   {
     "plugins": [
       ["import", { "libraryName": "choerodon-hap-ui", "libraryDirectory": "es", "style": "css" }] // `style: true` for less
     ]
   }
   ```

   > Note: Don't set `libraryDirectory` if you are using webpack 1.

   This allows you to import components from choerodon-hap-ui without having to manually import the corresponding stylesheet. The choerodon-hap-ui babel plugin will automatically import stylesheets.

   ```jsx
   // import js and css modularly, parsed by babel-plugin-import
   import { DatePicker } from 'choerodon-hap-ui';
   ```

- Manually import

   ```jsx
   import DatePicker from 'choerodon-hap-ui/lib/date-picker';  // for js
   import 'choerodon-hap-ui/lib/date-picker/style/css';        // for css
   // import 'choerodon-hap-ui/lib/date-picker/style';         // that will import less
   ```

## Links

- [Home Page](/)
- [Components](/docs/react/introduce)
- [Change Log](/changelog)
- [Scaffold Market](http://scaffold.ant.design)
- [Ant Design](http://ant.design/)
- [rc-components](http://react-component.github.io/)
- [Customize Theme](/docs/react/customize-theme)
