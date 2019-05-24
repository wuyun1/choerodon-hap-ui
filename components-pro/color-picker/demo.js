webpackJsonp([75],{2232:function(n,a,s){n.exports={basic:s(2730),controlled:s(2731),dataset:s(2732)}},2730:function(n,a){n.exports={content:["article",["h2","zh-CN"],["p","颜色选择器。"],["h2","en-US"],["p","ColorPicker."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ColorPicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-hap-ui/pro\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColorPicker</span> <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#f1c7f2<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { ColorPicker } from 'choerodon-hap-ui/pro';\n\nReactDOM.render(\n  <ColorPicker defaultValue=\"#f1c7f2\" />,\n  mountNode\n);"]]],meta:{order:0,title:{"zh-CN":"ColorPicker","en-US":"颜色选择器"},filename:"components-pro/color-picker/demo/basic.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]]}},2731:function(n,a){n.exports={content:["article",["h2","zh-CN"],["p","受控输入框"],["h2","en-US"],["p","Controlled ColorPicker"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ColorPicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-hap-ui/pro\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      value<span class="token punctuation">:</span> <span class="token string">\'#0000ff\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  handleChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'[newValue]\'</span><span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token string">\'[oldValue]\'</span><span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      value<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColorPicker</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { ColorPicker } from 'choerodon-hap-ui/pro';\n\nclass App extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: '#0000ff',\n    };\n  }\n\n  handleChange = (value, oldValue) => {\n    console.log('[newValue]', value, '[oldValue]', oldValue);\n    this.setState({\n      value,\n    });\n  }\n\n  render() {\n    return <ColorPicker value={this.state.value} onChange={this.handleChange} />;\n  }\n}\n\nReactDOM.render(\n  <App />,\n  mountNode\n);"]]],meta:{order:1,title:{"zh-CN":"受控颜色输入框","en-US":"Controlled ColorPicker"},filename:"components-pro/color-picker/demo/controlled.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]]}},2732:function(n,a){n.exports={content:["article",["h2","zh-CN"],["p","绑定数据源。"],["h2","en-US"],["p","DataSet binding."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> DataSet<span class="token punctuation">,</span> ColorPicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-hap-ui/pro\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">handleDataSetChange</span><span class="token punctuation">(</span><span class="token punctuation">{</span> record<span class="token punctuation">,</span> name<span class="token punctuation">,</span> value<span class="token punctuation">,</span> oldValue <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'[dataset newValue]\'</span><span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token string">\'[oldValue]\'</span><span class="token punctuation">,</span> oldValue<span class="token punctuation">,</span> <span class="token template-string"><span class="token string">`[record.get(\'</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\')]`</span></span><span class="token punctuation">,</span> record<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  ds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataSet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    autoCreate<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    fields<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'color\'</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">\'string\'</span><span class="token punctuation">,</span> defaultValue<span class="token punctuation">:</span> <span class="token string">\'#00ff00\'</span><span class="token punctuation">,</span> required<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    events<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      update<span class="token punctuation">:</span> handleDataSetChange<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColorPicker</span> <span class="token attr-name">dataSet</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>ds<span class="token punctuation">}</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>color<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { DataSet, ColorPicker } from 'choerodon-hap-ui/pro';\n\nfunction handleDataSetChange({ record, name, value, oldValue }) {\n  console.log('[dataset newValue]', value, '[oldValue]', oldValue, `[record.get('${name}')]`, record.get(name));\n}\n\nclass App extends React.Component {\n  ds = new DataSet({\n    autoCreate: true,\n    fields: [\n      { name: 'color', type: 'string', defaultValue: '#00ff00', required: true },\n    ],\n    events: {\n      update: handleDataSetChange,\n    },\n  });\n\n  render() {\n    return <ColorPicker dataSet={this.ds} name=\"color\" />;\n  }\n}\n\nReactDOM.render(\n  <App />,\n  mountNode\n);"]]],meta:{order:2,title:{"zh-CN":"数据源","en-US":"DataSet"},filename:"components-pro/color-picker/demo/dataset.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]]}}});