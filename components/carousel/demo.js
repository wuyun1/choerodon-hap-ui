webpackJsonp([60],{2099:function(n,s,a){n.exports={autoplay:a(2401),basic:a(2402),fade:a(2403),vertical:a(2404)}},2401:function(n,s){n.exports={content:["article",["h2","zh-CN"],["p","定时切换下一张。"],["h2","en-US"],["p","Timing of scrolling to the next card/picture."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Carousel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-hap-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Carousel</span> <span class="token attr-name">autoplay</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span><span class="token number">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span><span class="token number">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span><span class="token number">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span><span class="token number">4</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Carousel</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { Carousel } from 'choerodon-hap-ui';\n\nReactDOM.render(\n  <Carousel autoplay>\n    <div><h3>1</h3></div>\n    <div><h3>2</h3></div>\n    <div><h3>3</h3></div>\n    <div><h3>4</h3></div>\n  </Carousel>,\n  mountNode);"]],["pre",{lang:"css",highlighted:'<span class="token comment" spellcheck="true">/* For demo */</span>\n<span class="token selector"><span class="token class">.c7n-carousel</span> <span class="token class">.slick-slide</span> </span><span class="token punctuation">{</span>\n  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">160</span>px<span class="token punctuation">;</span>\n  <span class="token property">line-height</span><span class="token punctuation">:</span> <span class="token number">160</span>px<span class="token punctuation">;</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token hexcode">#364d79</span><span class="token punctuation">;</span>\n  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector"><span class="token class">.c7n-carousel</span> <span class="token class">.slick-slide</span> h3 </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#fff</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'},["code","/* For demo */\n.c7n-carousel .slick-slide {\n  text-align: center;\n  height: 160px;\n  line-height: 160px;\n  background: #364d79;\n  overflow: hidden;\n}\n\n.c7n-carousel .slick-slide h3 {\n  color: #fff;\n}"]]],meta:{order:3,title:{"zh-CN":"自动切换","en-US":"Scroll automatically"},filename:"components/carousel/demo/autoplay.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]]}},2402:function(n,s){n.exports={content:["article",["h2","zh-CN"],["p","最简单的用法。"],["h2","en-US"],["p","Basic usage."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Carousel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-hap-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Carousel</span> <span class="token attr-name">afterChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span><span class="token number">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span><span class="token number">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span><span class="token number">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span><span class="token number">4</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Carousel</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { Carousel } from 'choerodon-hap-ui';\n\nfunction onChange(a, b, c) {\n  console.log(a, b, c);\n}\n\nReactDOM.render(\n  <Carousel afterChange={onChange}>\n    <div><h3>1</h3></div>\n    <div><h3>2</h3></div>\n    <div><h3>3</h3></div>\n    <div><h3>4</h3></div>\n  </Carousel>,\n  mountNode);"]],["pre",{lang:"css",highlighted:'<span class="token comment" spellcheck="true">/* For demo */</span>\n<span class="token selector"><span class="token class">.c7n-carousel</span> <span class="token class">.slick-slide</span> </span><span class="token punctuation">{</span>\n  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">160</span>px<span class="token punctuation">;</span>\n  <span class="token property">line-height</span><span class="token punctuation">:</span> <span class="token number">160</span>px<span class="token punctuation">;</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token hexcode">#364d79</span><span class="token punctuation">;</span>\n  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector"><span class="token class">.c7n-carousel</span> <span class="token class">.slick-slide</span> h3 </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#fff</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'},["code","/* For demo */\n.c7n-carousel .slick-slide {\n  text-align: center;\n  height: 160px;\n  line-height: 160px;\n  background: #364d79;\n  overflow: hidden;\n}\n\n.c7n-carousel .slick-slide h3 {\n  color: #fff;\n}"]]],meta:{order:0,title:{"zh-CN":"基本","en-US":"Basic"},filename:"components/carousel/demo/basic.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]]}},2403:function(n,s){n.exports={content:["article",["h2","zh-CN"],["p","切换效果为渐显。"],["h2","en-US"],["p","Slides use fade for transition."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Carousel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-hap-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Carousel</span> <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fade<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span><span class="token number">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span><span class="token number">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span><span class="token number">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span><span class="token number">4</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Carousel</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { Carousel } from 'choerodon-hap-ui';\n\nReactDOM.render(\n  <Carousel effect=\"fade\">\n    <div><h3>1</h3></div>\n    <div><h3>2</h3></div>\n    <div><h3>3</h3></div>\n    <div><h3>4</h3></div>\n  </Carousel>,\n  mountNode);"]],["pre",{lang:"css",highlighted:'<span class="token comment" spellcheck="true">/* For demo */</span>\n<span class="token selector"><span class="token class">.c7n-carousel</span> <span class="token class">.slick-slide</span> </span><span class="token punctuation">{</span>\n  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">160</span>px<span class="token punctuation">;</span>\n  <span class="token property">line-height</span><span class="token punctuation">:</span> <span class="token number">160</span>px<span class="token punctuation">;</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token hexcode">#364d79</span><span class="token punctuation">;</span>\n  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector"><span class="token class">.c7n-carousel</span> <span class="token class">.slick-slide</span> h3 </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#fff</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'},["code","/* For demo */\n.c7n-carousel .slick-slide {\n  text-align: center;\n  height: 160px;\n  line-height: 160px;\n  background: #364d79;\n  overflow: hidden;\n}\n\n.c7n-carousel .slick-slide h3 {\n  color: #fff;\n}"]]],meta:{order:2,title:{"zh-CN":"渐显","en-US":"Fade in"},filename:"components/carousel/demo/fade.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]]}},2404:function(n,s){n.exports={content:["article",["h2","zh-CN"],["p","垂直显示。"],["h2","en-US"],["p","Vertical pagination."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Carousel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-hap-ui\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Carousel</span> <span class="token attr-name">vertical</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span><span class="token number">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span><span class="token number">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span><span class="token number">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span><span class="token number">4</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Carousel</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { Carousel } from 'choerodon-hap-ui';\n\nReactDOM.render(\n  <Carousel vertical>\n    <div><h3>1</h3></div>\n    <div><h3>2</h3></div>\n    <div><h3>3</h3></div>\n    <div><h3>4</h3></div>\n  </Carousel>,\n  mountNode);"]],["pre",{lang:"css",highlighted:'<span class="token comment" spellcheck="true">/* For demo */</span>\n<span class="token selector"><span class="token class">.c7n-carousel</span> <span class="token class">.slick-slide</span> </span><span class="token punctuation">{</span>\n  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">160</span>px<span class="token punctuation">;</span>\n  <span class="token property">line-height</span><span class="token punctuation">:</span> <span class="token number">160</span>px<span class="token punctuation">;</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token hexcode">#364d79</span><span class="token punctuation">;</span>\n  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector"><span class="token class">.c7n-carousel</span> <span class="token class">.slick-slide</span> h3 </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#fff</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'},["code","/* For demo */\n.c7n-carousel .slick-slide {\n  text-align: center;\n  height: 160px;\n  line-height: 160px;\n  background: #364d79;\n  overflow: hidden;\n}\n\n.c7n-carousel .slick-slide h3 {\n  color: #fff;\n}"]]],meta:{order:1,title:{"zh-CN":"垂直","en-US":"Vertical"},filename:"components/carousel/demo/vertical.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]]}}});