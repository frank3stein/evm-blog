(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"0jh0":function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},"2klF":function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},"4M6O":function(t,e,n){"use strict";var r=n("5NKs");e.__esModule=!0,e.insertScript=function(t,e,n){var r=window.document.createElement("script");return r.async=!0,r.src=t,r.id=e,n.appendChild(r),r},e.removeScript=function(t,e){var n=window.document.getElementById(t);n&&e.removeChild(n)},e.debounce=function(t,e,n){var r;return function(){var o=this,i=arguments,s=function(){r=null,n||t.apply(o,i)},a=n&&!r;window.clearTimeout(r),r=setTimeout(s,e),a&&t.apply(o,i)}},e.isReactElement=s,e.shallowComparison=function(t,e){var n,r=new Set(Object.keys(t).concat(Object.keys(e)));return 0!==(n=[]).concat.apply(n,(0,o.default)(r)).filter((function(n){return t[n]!==e[n]&&!s(t[n])})).length};var o=r(n("R7tm")),i=r(n("q1tI"));function s(t){return!!i.default.isValidElement(t)||!!Array.isArray(t)&&t.some((function(t){return i.default.isValidElement(t)}))}},Ck4i:function(t,e,n){var r=n("Q83E"),o=n("2klF");function i(e,n,s){return o()?t.exports=i=Reflect.construct:t.exports=i=function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&r(i,n.prototype),i},i.apply(null,arguments)}t.exports=i},Gd84:function(t,e,n){var r=n("Ck4i"),o=n("R7tm"),i=n("0jh0"),s=n("uDP2");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c=n("q1tI"),l=n("6qfE").MDXTag,d=n("Fobl").withMDXComponents,p=n("t6WD").withMDXScope;t.exports=p(d((function(t){var e=t.scope,n=void 0===e?{}:e,i=t.components,a=void 0===i?{}:i,d=t.children,p=s(t,["scope","components","children"]);if(!d)return null;var f=u({React:c,MDXTag:l},n),m=Object.keys(f),h=m.map((function(t){return f[t]})),g=r(Function,["_fn"].concat(o(m),[""+d])).apply(void 0,[{}].concat(o(h)));return c.createElement(g,u({components:a},p))})))},ORnI:function(t,e,n){"use strict";var r=n("5NKs");e.__esModule=!0,e.default=void 0;var o=r(n("VUT9"));e.Disqus=o.default;var i=r(n("qASQ"));e.CommentCount=i.default;var s=r(n("vAJ3"));e.CommentEmbed=s.default;var a=o.default;e.default=a},Q83E:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},R7tm:function(t,e,n){var r=n("qHws"),o=n("gC2u"),i=n("dQcQ"),s=n("m7BV");t.exports=function(t){return r(t)||o(t)||i(t)||s()}},VUT9:function(t,e,n){"use strict";var r=n("5NKs");e.__esModule=!0,e.default=void 0;var o=r(n("j8BX")),i=r(n("uDP2")),s=r(n("XEEL")),a=r(n("q1tI")),u=r(n("17x9")),c=n("4M6O"),l=function(t){function e(e){var n;return(n=t.call(this,e)||this).shortname="emilmartinov-com",n}(0,s.default)(e,t);var n=e.prototype;return n.componentDidMount=function(){"undefined"!=typeof window&&this.shortname&&this.cleanInstance(),this.loadInstance()},n.shouldComponentUpdate=function(t){return this.props!==t&&(0,c.shallowComparison)(this.props,t)},n.componentDidUpdate=function(){this.loadInstance()},n.getDisqusConfig=function(t){return function(){this.page.identifier=t.identifier,this.page.url=t.url,this.page.title=t.title,this.page.remote_auth_s3=t.remoteAuthS3,this.page.api_key=t.apiKey,this.language=t.language}},n.loadInstance=function(){"undefined"!=typeof window&&window.DISQUS&&window.document.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.shortname,(0,c.insertScript)("https://"+this.shortname+".disqus.com/embed.js","disqus-embed-script",window.document.body))},n.cleanInstance=function(){(0,c.removeScript)("disqus-embed-script",window.document.body),window&&window.DISQUS&&window.DISQUS.reset();try{delete window.DISQUS}catch(e){window.DISQUS=void 0}var t=window.document.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)},n.render=function(){var t=this.props,e=(t.config,(0,i.default)(t,["config"]));return a.default.createElement("div",(0,o.default)({id:"disqus_thread"},e,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:76,columnNumber:7}}))},e}(a.default.Component);e.default=l,l.propTypes={config:u.default.shape({identifier:u.default.string,title:u.default.string,url:u.default.string,language:u.default.string,remoteAuthS3:u.default.string,apiKey:u.default.string})}},dQcQ:function(t,e,n){var r=n("hMe3");t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},gC2u:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},hMe3:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},m7BV:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},qASQ:function(t,e,n){"use strict";var r=n("5NKs");e.__esModule=!0,e.default=void 0;var o=r(n("j8BX")),i=r(n("uDP2")),s=r(n("XEEL")),a=r(n("q1tI")),u=r(n("17x9")),c=n("4M6O"),l=(0,c.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),d=function(t){function e(e){var n;return(n=t.call(this,e)||this).shortname="emilmartinov-com",n}(0,s.default)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(t){return this.props!==t&&(0,c.shallowComparison)(this.props,t)},n.componentDidUpdate=function(){this.loadInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?l():(0,c.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,c.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var t=this.props,e=t.config,n=t.placeholder,r=(0,i.default)(t,["config","placeholder"]);return a.default.createElement("span",(0,o.default)({className:"disqus-comment-count","data-disqus-identifier":e.identifier,"data-disqus-url":e.url},r,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:49,columnNumber:7}}),n)},e}(a.default.Component);e.default=d,d.defaultProps={placeholder:"..."},d.propTypes={config:u.default.shape({identifier:u.default.string,title:u.default.string,url:u.default.string}),placeholder:u.default.string}},qHws:function(t,e,n){var r=n("hMe3");t.exports=function(t){if(Array.isArray(t))return r(t)}},vAJ3:function(t,e,n){"use strict";var r=n("5NKs");e.__esModule=!0,e.default=void 0;var o=r(n("XEEL")),i=r(n("q1tI")),s=r(n("17x9")),a=function(t){function e(){return t.apply(this,arguments)||this}(0,o.default)(e,t);var n=e.prototype;return n.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},n.render=function(){return i.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentEmbed.jsx",lineNumber:17,columnNumber:13}})},e}(i.default.Component);e.default=a,a.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},a.propTypes={commentId:s.default.string.isRequired,width:s.default.number,height:s.default.number,showMedia:s.default.bool,showParentComment:s.default.bool}},yZlL:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return b}));var r=n("FqMR"),o=n("9Hrx"),i=n("q1tI"),s=n.n(i),a=n("Wbzz"),u=n("Gd84"),c=n.n(u),l=n("SbOt"),d=n("7oih"),p=n("vrFN"),f=n("p3AD"),m=n("ORnI");function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var y=function(t){function e(){return t.apply(this,arguments)||this}return Object(o.a)(e,t),e.prototype.render=function(){var t=this.props.data.mdx,e=this.props.data.site.siteMetadata.title,n=this.props.pageContext,r=n.previous,o=n.next,i={url:""+(this.props.data.site.siteMetadata.siteUrl+this.props.pageContext.slug),identifier:t.id,title:t.title};return s.a.createElement(d.a,{location:this.props.location,title:e},s.a.createElement(p.a,{title:t.frontmatter.title,description:t.excerpt}),s.a.createElement("h1",null,t.frontmatter.title),s.a.createElement(m.CommentCount,{config:i,placeholder:"..."}),s.a.createElement("p",{style:g({},Object(f.b)(-.2),{display:"block",marginBottom:Object(f.a)(1),marginTop:Object(f.a)(-1)})},t.frontmatter.date),s.a.createElement(c.a,null,t.code.body),s.a.createElement("hr",{style:{marginBottom:Object(f.a)(1)}}),s.a.createElement(l.a,null),s.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},s.a.createElement("li",null,r&&s.a.createElement(a.Link,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),s.a.createElement("li",null,o&&s.a.createElement(a.Link,{to:o.fields.slug,rel:"next"},o.frontmatter.title," →"))),s.a.createElement(m.Disqus,{config:i}))},e}(s.a.Component);e.default=y;var b="1974414942"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-a3a91fd7421b345f40cd.js.map