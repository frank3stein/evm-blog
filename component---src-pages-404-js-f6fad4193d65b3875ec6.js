(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{580:function(t,e,n){"use strict";n.r(e);var a=n(9),r=n.n(a),o=n(2),i=n.n(o),c=n(587),s=n(588),u=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){return i.a.createElement(c.a,{location:this.props.location},i.a.createElement(s.a,{title:"404: Not Found"}),i.a.createElement("h1",null,"Not Found"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},e}(i.a.Component);e.default=u},583:function(t,e,n){"use strict";n.d(e,"b",function(){return l});var a=n(2),r=n.n(a),o=n(6),i=n.n(o),c=n(42),s=n.n(c);n.d(e,"a",function(){return s.a});n(585);var u=r.a.createContext({}),l=function(t){return r.a.createElement(u.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},584:function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return u});var a=n(595),r=n.n(a),o=n(596),i=n.n(o);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var c=new r.a(i.a);var s=c.rhythm,u=c.scale},585:function(t,e,n){var a;t.exports=(a=n(586))&&a.default||a},586:function(t,e,n){"use strict";n.r(e);var a=n(14),r=n.n(a),o=n(2),i=n.n(o),c=n(6),s=n.n(c),u=n(62),l=n(4),d=function(t){var e=t.location,n=l.default.getResourcesForPathnameSync(e.pathname);return n?i.a.createElement(u.a,r()({location:e,pageResources:n},n.json)):null};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},e.default=d},587:function(t,e,n){"use strict";var a=n(14),r=n.n(a),o=n(9),i=n.n(o),c=n(2),s=n.n(c),u=n(583),l=n(584),d=function(t){function e(){return t.apply(this,arguments)||this}return i()(e,t),e.prototype.render=function(){var t,e=this.props,n=e.location,a=e.title,o=e.children;return t="/"===n.pathname?s.a.createElement("h1",{style:r()({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},s.a.createElement(u.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)):s.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(l.a)(-1)}},s.a.createElement(u.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)),s.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},t,o,s.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",s.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},e}(s.a.Component);e.a=d},588:function(t,e,n){"use strict";var a=n(589),r=n(2),o=n.n(r),i=n(6),c=n.n(i),s=n(597),u=n.n(s),l=n(583);function d(t){var e=t.description,n=t.lang,r=t.meta,i=t.keywords,c=t.title;return o.a.createElement(l.b,{query:p,render:function(t){var a=e||t.site.siteMetadata.description;return o.a.createElement(u.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=d;var p="1025518380"},589:function(t){t.exports={data:{site:{siteMetadata:{title:"e v m",description:"Blog about javascript and life.",author:"Emil Martinov"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-f6fad4193d65b3875ec6.js.map