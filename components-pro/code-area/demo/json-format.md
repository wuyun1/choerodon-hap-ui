---
order: 5
title:
  zh-CN: JSON格式化
  en-US: JSON Format
---

## zh-CN

使用快捷键格式化代码，要传入一个formatter对象。默认的格式化快捷键是`Alt + F`，去格式化快捷键是`Alt + R`，可以通过属性手动配置。

## en-US

Use hotkey to format code.

````jsx
import { CodeArea, DataSet } from 'choerodon-ui/pro';
import jsonlint from 'jsonlint/web/jsonlint';
// 引入格式化器，注意使用模块的默认导出
import JSONFormatter from 'choerodon-ui/pro/lib/code-area/formatters/JSONFormatter';
// 处理 codemirror 的SSR问题， 如无需SSR，请用import代替require;
if (typeof window !== 'undefined') {
  // 提供对应语言的语法高亮
  require('codemirror/mode/javascript/javascript');
  require('codemirror/addon/lint/lint.css');
  require('codemirror/addon/lint/lint');
  require('codemirror/addon/lint/json-lint');

  window.jsonlint = jsonlint;
}

const jsonText = `{
  "compilerOptions": {
    "strictNullChecks": true,
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "experimentalDecorators": true,
    "jsx": "preserve",
    "noUnusedParameters": true,
    "noUnusedLocals": true,
    "declaration": true,
    "target": "es6",
    "lib": [
      "dom",
      "dom.iterable",
      "es7",
      "es2017.object"
    ]
  },
  "exclude": [
    "node_modules",
    "lib",
    "es"
  ]
}
`;

const jsonStyle = { height: 500 };
const options = { mode: 'javascript' };

class App extends React.Component {
  ds = new DataSet({
    autoCreate: true,
    fields: [
      { name: 'content', type: 'string', defaultValue: jsonText, required: true },
    ],
  });

  render() {
    return (
      <div>
        <h4>JSON</h4>
        <CodeArea dataSet={this.ds} name="content" style={jsonStyle} formatter={JSONFormatter} options={options} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  mountNode
);
````
