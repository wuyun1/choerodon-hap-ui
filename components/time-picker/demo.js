webpackJsonp([21],{2202:function(n,s,a){n.exports={"12hours":a(2669),addon:a(2670),basic:a(2671),disabled:a(2672),"hide-column":a(2673),"interval-options":a(2674),size:a(2675),value:a(2676)}},2669:function(n,s){n.exports={content:["article",["h2","zh-CN"],["p","12 小时制的时间选择器，默认的 format 为 ",["code","h:mm:ss a"],"。"],["h2","en-US"],["p","TimePicker of 12 hours format, with default format ",["code","h:mm:ss a"],"."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> TimePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-hap-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span>time<span class="token punctuation">,</span> timeString<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>time<span class="token punctuation">,</span> timeString<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span> <span class="token attr-name">use12Hours</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span> <span class="token attr-name">use12Hours</span> <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>h:mm:ss</span> <span class="token attr-name">A"</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span> <span class="token attr-name">use12Hours</span> <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>h:mm</span> <span class="token attr-name">a"</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code",'import { TimePicker } from \'choerodon-hap-ui\';\n\nfunction onChange(time, timeString) {\n  console.log(time, timeString);\n}\n\nReactDOM.render(\n  <div>\n    <TimePicker use12Hours onChange={onChange} />\n    <TimePicker use12Hours format="h:mm:ss A" onChange={onChange} />\n    <TimePicker use12Hours format="h:mm a" onChange={onChange} />\n  </div>,\n  mountNode);']]],meta:{order:7,title:{"zh-CN":"12 小时制","en-US":"12 hours"},filename:"components/time-picker/demo/12hours.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]]}},2670:function(n,s){n.exports={content:["article",["h2","zh-CN"],["p","在 TimePicker 选择框底部显示自定义的内容。"],["h2","en-US"],["p","Render addon contents to timepicker panel's bottom."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> TimePicker<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-hap-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">TimePickerAddonDemo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span> open<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  handleOpenChange <span class="token operator">=</span> <span class="token punctuation">(</span>open<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> open <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  handleClose <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> open<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span>\n        <span class="token attr-name">open</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>open<span class="token punctuation">}</span></span>\n        <span class="token attr-name">onOpenChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleOpenChange<span class="token punctuation">}</span></span>\n        <span class="token attr-name">addon</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n          <span class="token operator">&lt;</span>Button size<span class="token operator">=</span><span class="token string">"small"</span> type<span class="token operator">=</span><span class="token string">"primary"</span> onClick<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClose<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            Ok\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">}</span>\n      <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePickerAddonDemo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code",'import { TimePicker, Button } from \'choerodon-hap-ui\';\n\nclass TimePickerAddonDemo extends React.Component {\n  state = { open: false };\n\n  handleOpenChange = (open) => {\n    this.setState({ open });\n  }\n\n  handleClose = () => this.setState({ open: false })\n\n  render() {\n    return (\n      <TimePicker\n        open={this.state.open}\n        onOpenChange={this.handleOpenChange}\n        addon={() => (\n          <Button size="small" type="primary" onClick={this.handleClose}>\n            Ok\n          </Button>\n        )}\n      />\n    );\n  }\n}\n\nReactDOM.render(<TimePickerAddonDemo />, mountNode);']]],meta:{order:6,title:{"zh-CN":"附加内容","en-US":"Addon"},filename:"components/time-picker/demo/addon.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]]}},2671:function(n,s){n.exports={content:["article",["h2","zh-CN"],["p","点击 TimePicker，然后可以在浮层中选择或者输入某一时间。"],["h2","en-US"],["p","Click ",["code","TimePicker"],", and then we could select or input a time in panel."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> TimePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-hap-ui\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">\'moment\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span>time<span class="token punctuation">,</span> timeString<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>time<span class="token punctuation">,</span> timeString<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span>\n    <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>时间选择框<span class="token punctuation">"</span></span>\n    <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>\n    <span class="token attr-name">defaultOpenValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">\'00:00:00\'</span><span class="token punctuation">,</span> <span class="token string">\'HH:mm:ss\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n  <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { TimePicker } from 'choerodon-hap-ui';\nimport moment from 'moment';\n\nfunction onChange(time, timeString) {\n  console.log(time, timeString);\n}\n\nReactDOM.render(\n  <TimePicker\n    label=\"时间选择框\"\n    onChange={onChange}\n    defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}\n  />,\n  mountNode\n);"]]],meta:{order:0,title:{"zh-CN":"基本","en-US":"Basic"},filename:"components/time-picker/demo/basic.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]]}},2672:function(n,s){n.exports={content:["article",["h2","zh-CN"],["p","禁用时间选择。"],["h2","en-US"],["p","A disabled state of the ",["code","TimePicker"],"."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> TimePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-hap-ui\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">\'moment\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">\'12:08:23\'</span><span class="token punctuation">,</span> <span class="token string">\'HH:mm:ss\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">disabled</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { TimePicker } from 'choerodon-hap-ui';\nimport moment from 'moment';\n\nReactDOM.render(\n  <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />,\n  mountNode);"]]],meta:{order:3,title:{"zh-CN":"禁用","en-US":"disabled"},filename:"components/time-picker/demo/disabled.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]]}},2673:function(n,s){n.exports={content:["article",["h2","zh-CN"],["p","TimePicker 浮层中的列会随着 ",["code","format"]," 变化，当略去 ",["code","format"]," 中的某部分时，浮层中对应的列也会消失。"],["h2","en-US"],["p","While part of ",["code","format"]," is omitted, the corresponding column in panel will disappear, too."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> TimePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-hap-ui\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">\'moment\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> format <span class="token operator">=</span> <span class="token string">\'HH:mm\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">\'12:08\'</span><span class="token punctuation">,</span> format<span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">format</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>format<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { TimePicker } from 'choerodon-hap-ui';\nimport moment from 'moment';\n\nconst format = 'HH:mm';\n\nReactDOM.render(\n  <TimePicker defaultValue={moment('12:08', format)} format={format} />,\n  mountNode);"]]],meta:{order:4,title:{"zh-CN":"选择时分","en-US":"Hour and minute"},filename:"components/time-picker/demo/hide-column.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]]}},2674:function(n,s){n.exports={content:["article",["h2","zh-CN"],["p","可以使用 ",["code","hourStep"]," ",["code","minuteStep"]," ",["code","secondStep"]," 按步长展示可选的时分秒。"],["h2","en-US"],["p","Show stepped options by ",["code","hourStep"]," ",["code","minuteStep"]," ",["code","secondStep"],"."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> TimePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-hap-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span> <span class="token attr-name">minuteStep</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">15</span><span class="token punctuation">}</span></span> <span class="token attr-name">secondStep</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { TimePicker } from 'choerodon-hap-ui';\n\nReactDOM.render(\n  <TimePicker minuteStep={15} secondStep={10} />,\n  mountNode);"]]],meta:{order:5,title:{"zh-CN":"步长选项","en-US":"interval option"},filename:"components/time-picker/demo/interval-options.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]]}},2675:function(n,s){n.exports={content:["article",["h2","zh-CN"],["p","三种大小的输入框，大的用在表单中，中的为默认。"],["h2","en-US"],["p","The input box comes in three sizes. large is used in the form, while the medium size is the default."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> TimePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-hap-ui\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">\'moment\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">\'12:08:23\'</span><span class="token punctuation">,</span> <span class="token string">\'HH:mm:ss\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">\'12:08:23\'</span><span class="token punctuation">,</span> <span class="token string">\'HH:mm:ss\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span> <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">\'12:08:23\'</span><span class="token punctuation">,</span> <span class="token string">\'HH:mm:ss\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { TimePicker } from 'choerodon-hap-ui';\nimport moment from 'moment';\n\nReactDOM.render(\n  <div>\n    <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size=\"large\" />\n    <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} />\n    <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size=\"small\" />\n  </div>,\n  mountNode);"]]],meta:{order:2,title:{"zh-CN":"三种大小","en-US":"Three Sizes"},filename:"components/time-picker/demo/size.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]]}},2676:function(n,s){n.exports={content:["article",["h2","zh-CN"],["p","value 和 onChange 需要配合使用。"],["h2","en-US"],["p",["code","value"]," and ",["code","onChange"]," should be used together,"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> TimePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-hap-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>time<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value<span class="token punctuation">:</span> time <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TimePicker</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { TimePicker } from 'choerodon-hap-ui';\n\nclass Demo extends React.Component {\n  state = {\n    value: null,\n  };\n\n  onChange = (time) => {\n    console.log(time);\n    this.setState({ value: time });\n  }\n\n  render() {\n    return <TimePicker value={this.state.value} onChange={this.onChange} />;\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);"]]],meta:{order:1,title:{"zh-CN":"受控组件","en-US":"Under Control"},filename:"components/time-picker/demo/value.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]]}}});