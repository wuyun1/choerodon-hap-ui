webpackJsonp([46],{2190:function(n,a,s){n.exports={basic:s(2624),disabled:s(2625),loading:s(2626),size:s(2627),text:s(2628)}},2624:function(n,a){n.exports={content:["article",["h2","zh-CN"],["p","最简单的用法。"],["h2","en-US"],["p","The most basic usage."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-hap-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span>checked<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`switch to </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>checked<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">defaultChecked</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { Switch } from 'choerodon-hap-ui';\n\nfunction onChange(checked) {\n  console.log(`switch to ${checked}`);\n}\n\nReactDOM.render(\n  <Switch defaultChecked onChange={onChange} />,\n  mountNode\n);"]],["style","\n.c7n-switch {\n  margin-bottom: 8px;\n}\n"]],meta:{order:0,title:{"zh-CN":"基本","en-US":"Basic"},filename:"components/switch/demo/basic.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]]}},2625:function(n,a){n.exports={content:["article",["h2","zh-CN"],["p","Switch 失效状态。"],["h2","en-US"],["p","Disabled state of ",["code","Switch"],"."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Switch<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-hap-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    disabled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n\n  toggle <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      disabled<span class="token punctuation">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>disabled<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">disabled</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>disabled<span class="token punctuation">}</span></span> <span class="token attr-name">defaultChecked</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>toggle<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Toggle disabled<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { Switch, Button } from 'choerodon-hap-ui';\n\nclass App extends React.Component {\n  state = {\n    disabled: true,\n  }\n\n  toggle = () => {\n    this.setState({\n      disabled: !this.state.disabled,\n    });\n  }\n\n  render() {\n    return (\n      <div>\n        <Switch disabled={this.state.disabled} defaultChecked />\n        <br />\n        <Button type=\"primary\" onClick={this.toggle}>Toggle disabled</Button>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<App />, mountNode);"]]],meta:{order:1,title:{"zh-CN":"不可用","en-US":"Disabled"},filename:"components/switch/demo/disabled.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]]}},2626:function(n,a){n.exports={content:["article",["h2","zh-CN"],["p","标识开关操作仍在执行中。"],["h2","en-US"],["p","Mark a pending state of switch."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-hap-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">loading</span> <span class="token attr-name">defaultChecked</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">loading</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { Switch } from 'choerodon-hap-ui';\n\nReactDOM.render(\n  <div>\n    <Switch loading defaultChecked />\n    <br />\n    <Switch size=\"small\" loading />\n  </div>,\n  mountNode);"]]],meta:{order:4,title:{"zh-CN":"加载中","en-US":"Loading"},filename:"components/switch/demo/loading.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]]}},2627:function(n,a){n.exports={content:["article",["h2","zh-CN"],["p",["code",'size="small"']," 表示小号开关。"],["h2","en-US"],["p",["code",'size="small"']," represents a small sized switch."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-hap-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">defaultChecked</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">defaultChecked</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { Switch } from 'choerodon-hap-ui';\n\nReactDOM.render(\n  <div>\n    <Switch defaultChecked />\n    <br />\n    <Switch size=\"small\" defaultChecked />\n  </div>,\n  mountNode);"]]],meta:{order:3,title:{"zh-CN":"两种大小","en-US":"Two sizes"},filename:"components/switch/demo/size.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]]}},2628:function(n,a){n.exports={content:["article",["h2","zh-CN"],["p","带有文字和图标。"],["h2","en-US"],["p","With text and icon."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-hap-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">checkedChildren</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>开<span class="token punctuation">"</span></span> <span class="token attr-name">unCheckedChildren</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>关<span class="token punctuation">"</span></span> <span class="token attr-name">defaultChecked</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">checkedChildren</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">unCheckedChildren</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code",'import { Switch } from \'choerodon-hap-ui\';\n\nReactDOM.render(\n  <div>\n    <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />\n    <br />\n    <Switch checkedChildren="1" unCheckedChildren="0" />\n  </div>,\n  mountNode);']]],meta:{order:2,title:{"zh-CN":"文字","en-US":"Text & icon"},filename:"components/switch/demo/text.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]]}}});