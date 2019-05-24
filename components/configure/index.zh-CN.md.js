webpackJsonp([170],{2112:function(t,n){t.exports={content:["article",["p","为组件提供统一的全局化配置。"],["h2","使用"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> configure <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-hap-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token function">configure</span><span class="token punctuation">(</span><span class="token punctuation">{</span> prefixCls<span class="token punctuation">:</span> <span class="token string">\'ant\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { configure } from 'choerodon-hap-ui';\n\nconfigure({ prefixCls: 'ant' });"]],["h2","API"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","prefixCls"],["td","设置统一样式前缀"],["td","string"],["td","c7n"]],["tr",["td","proPrefixCls"],["td","设置统一样式前缀(pro组件)"],["td","string"],["td","c7n-pro"]],["tr",["td","ripple"],["td","是否开启波纹效果"],["td","boolean"],["td","true"]],["tr",["td","lookupUrl"],["td","lookup取值的地址或返回地址的钩子"],["td","string ","|"," ((code: string) => string)"],["td","code => ","`","/common/code/${code}/","`"]],["tr",["td","lovDefineUrl"],["td","Lov取配置的地址或返回地址的钩子"],["td","string ","|"," ((code: string) => string)"],["td","code => ","`","/sys/lov/lov_define?code=${code}","`"]],["tr",["td","lovQueryUrl"],["td","Lov取值的地址或返回地址的钩子"],["td","string ","|"," ((code: string) => string)"],["td","code => ","`","/common/lov/dataset/${code}","`"]],["tr",["td","axios"],["td","替换内置的axios实例"],["td","AxiosInstance"],["td"]]]]],meta:{category:"Components",subtitle:"全局化配置",cols:1,type:"Other",title:"Configure",filename:"components/configure/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#使用",title:"使用"},"使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]]}}});