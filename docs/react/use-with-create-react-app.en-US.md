---
order: 4
title: Use in create-react-app
---

[create-react-app](https://github.com/facebookincubator/create-react-app) is one of the best React application development tools. We are going to use `choerodon-hap-ui` within it and modify the webpack config for some customized needs.

---

## Install and Initialization

We need to install `create-react-app` first, you may need install [yarn](https://github.com/yarnpkg/yarn/) too.

```bash
$ npm install -g create-react-app yarn
```

Create a new project named `choerodon-hap-ui-demo`.

```bash
$ create-react-app choerodon-hap-ui-demo
```

The tool will create and initialize environment and dependencies automatically,
please try config your proxy setting or use another npm registry if any network errors happen during it.

Then we go inside `choerodon-hap-ui-demo` and start it.

```bash
$ cd choerodon-hap-ui-demo
$ yarn start
```

Open the browser at http://localhost:3000/. It renders a header saying "Welcome to React" on the page.

## Import choerodon-hap-ui

Below is the default directory structure.

```
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   └── logo.svg
└── yarn.lock
```

Now we install `choerodon-hap-ui` from yarn or npm.

```bash
$ yarn add choerodon-hap-ui
```

Modify `src/App.js`, import Button component from `choerodon-hap-ui`.

```jsx
import React, { Component } from 'react';
import Button from 'choerodon-hap-ui/lib/button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default App;
```

Add `choerodon-hap-ui/dist/choerodon-hap-ui.css` at the top of `src/App.css`.

```css
@import '~choerodon-hap-ui/dist/choerodon-hap-ui.css';

.App {
  text-align: center;
}

...
```

Ok, you should now see a blue primary button displayed on the page. Next you can choose any components of `choerodon-hap-ui` to develop your application. Visit other workflows of `create-react-app` at its [User Guide ](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


## Advanced Guides

We are successfully running choerodon-hap-ui components now but in the real world, there are still lots of problems about choerodon-hap-ui-demo.
For instance, we actually import all styles of components in the project which may be a network performance issue.

Now we need to customize the default webpack config. We can achieve that by using [react-app-rewired](https://github.com/timarney/react-app-rewired) which is one of create-react-app's custom config solutions.

Import react-app-rewired and modify the `scripts` field in package.json.

```
$ yarn add react-app-rewired --dev
```

```diff
/* package.json */
"scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test --env=jsdom",
+   "test": "react-app-rewired test --env=jsdom",
}
```

Then create a `config-overrides.js` at root directory of your project for further overriding.

```js
module.exports = function override(config, env) {
  // do stuff with the webpack config...
  return config;
};
```

### Use babel-plugin-import

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) is a babel plugin for importing components on demand ([How does it work?](/docs/react/getting-started#Import-on-Demand)). We are now trying to install it and modify `config-overrides.js`.

```bash
$ yarn add babel-plugin-import --dev
```

```diff
+ const { injectBabelPlugin } = require('react-app-rewired');

  module.exports = function override(config, env) {
+   config = injectBabelPlugin(['import', { libraryName: 'choerodon-hap-ui', libraryDirectory: 'es', style: 'css' }], config);
    return config;
  };
```

Remove the `@import '~choerodon-hap-ui/dist/choerodon-hap-ui.css';` statement added before because `babel-plugin-import` will import styles and import components like below:

```diff
  // src/App.js
  import React, { Component } from 'react';
- import Button from 'choerodon-hap-ui/lib/button';
+ import { Button } from 'choerodon-hap-ui';
  import './App.css';

  class App extends Component {
    render() {
      return (
        <div className="App">
          <Button type="primary">Button</Button>
        </div>
      );
    }
  }

  export default App;
```

Then reboot with `yarn start` and visit the demo page, you should not find any [warning messages](https://zos.alipayobjects.com/rmsportal/vgcHJRVZFmPjAawwVoXK.png) in the console, which prove that the `import on demand` config is working now. You will find more info about it in [this guide](/docs/react/getting-started#Import-on-Demand).

### Customize Theme

According to the [Customize Theme documentation](/docs/react/customize-theme), to customize the theme, we need to modify `less` variables with tools such as [less-loader](https://github.com/webpack/less-loader). We can also use [react-app-rewire-less](http://npmjs.com/react-app-rewire-less) to achieve this. Import it and modify `config-overrides.js` like below.

```bash
$ yarn add react-app-rewire-less --dev
```

```diff
  const { injectBabelPlugin } = require('react-app-rewired');
+ const rewireLess = require('react-app-rewire-less');

  module.exports = function override(config, env) {
-   config = injectBabelPlugin(['import', { libraryName: 'choerodon-hap-ui', style: 'css' }], config);
+   config = injectBabelPlugin(['import', { libraryName: 'choerodon-hap-ui', style: true }], config);  // change importing css to less
+   config = rewireLess.withLoaderOptions({
+     modifyVars: { "@primary-color": "#1DA57A" },
+   })(config, env);
    return config;
  };
```

We use `modifyVars` option of [less-loader](https://github.com/webpack/less-loader#less-options) here, you can see a green button rendered on the page after rebooting the start server.

## eject

You can also could try [yarn run eject](https://github.com/facebookincubator/create-react-app#converting-to-a-custom-setup)  for a custom setup of create-react-app, although you should dig into it by yourself.