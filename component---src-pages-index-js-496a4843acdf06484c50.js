(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{581:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return p});var r=a(9),n=a.n(r),i=a(2),s=a.n(i),o=a(583),l=a(590),d=a(587),c=a(588),u=a(584),f=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMdx.edges;return s.a.createElement(d.a,{location:this.props.location,title:t},s.a.createElement(c.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),s.a.createElement(l.a,null),a.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return s.a.createElement("div",{key:t.fields.slug},s.a.createElement("h3",{style:{marginBottom:Object(u.a)(.25)}},s.a.createElement(o.a,{style:{boxShadow:"none"},to:t.fields.slug},a)),s.a.createElement("small",null,t.frontmatter.date),s.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}))},t}(s.a.Component);t.default=f;var p="4125737639"},583:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var r=a(2),n=a.n(r),i=a(6),s=a.n(i),o=a(42),l=a.n(o);a.d(t,"a",function(){return l.a});a(585);var d=n.a.createContext({}),c=function(e){return n.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},584:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d});var r=a(595),n=a.n(r),i=a(596),s=a.n(i);s.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete s.a.googleFonts;var o=new n.a(s.a);var l=o.rhythm,d=o.scale},585:function(e,t,a){var r;e.exports=(r=a(586))&&r.default||r},586:function(e,t,a){"use strict";a.r(t);var r=a(14),n=a.n(r),i=a(2),s=a.n(i),o=a(6),l=a.n(o),d=a(62),c=a(4),u=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?s.a.createElement(d.a,n()({location:t,pageResources:a},a.json)):null};u.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=u},587:function(e,t,a){"use strict";var r=a(14),n=a.n(r),i=a(9),s=a.n(i),o=a(2),l=a.n(o),d=a(583),c=a(584),u=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,r=t.title,i=t.children;return e="/"===a.pathname?l.a.createElement("h1",{style:n()({},Object(c.b)(1.5),{marginBottom:Object(c.a)(1.5),marginTop:0})},l.a.createElement(d.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)):l.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(c.a)(-1)}},l.a.createElement(d.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),l.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(24),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},e,i,l.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",l.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},t}(l.a.Component);t.a=u},588:function(e,t,a){"use strict";var r=a(589),n=a(2),i=a.n(n),s=a(6),o=a.n(s),l=a(597),d=a.n(l),c=a(583);function u(e){var t=e.description,a=e.lang,n=e.meta,s=e.keywords,o=e.title;return i.a.createElement(c.b,{query:f,render:function(e){var r=t||e.site.siteMetadata.description;return i.a.createElement(d.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:o},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:r}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(n)})},data:r})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u;var f="1025518380"},589:function(e){e.exports={data:{site:{siteMetadata:{title:"e v m",description:"Blog about javascript and life.",author:"Emil Martinov"}}}}},590:function(e,t,a){"use strict";a(591);var r=a(593),n=a(2),i=a.n(n),s=a(583),o=a(594),l=a.n(o),d=a(584);var c="251486948";t.a=function(){return i.a.createElement(s.b,{query:c,render:function(e){var t=e.site.siteMetadata,a=t.author,r=t.social;return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(d.a)(2.5)}},i.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"}}),i.a.createElement("p",null,"Written by ",i.a.createElement("strong",null,a)," who lives Rotterdam || Istanbul and loves everything js."," ",i.a.createElement("a",{href:"https://twitter.com/"+r.twitter},"He tweets mostly about js.")))},data:r})}},591:function(e,t,a){"use strict";a(592)("fixed",function(e){return function(){return e(this,"tt","","")}})},592:function(e,t,a){var r=a(13),n=a(30),i=a(23),s=/"/g,o=function(e,t,a,r){var n=String(i(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},593:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,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",width:50,height:50,src:"/static/a0f232d8056757a70fd47dd07747d3b6/58398/profile.png",srcSet:"/static/a0f232d8056757a70fd47dd07747d3b6/58398/profile.png 1x,\n/static/a0f232d8056757a70fd47dd07747d3b6/fd23f/profile.png 1.5x,\n/static/a0f232d8056757a70fd47dd07747d3b6/fc368/profile.png 2x,\n/static/a0f232d8056757a70fd47dd07747d3b6/521d9/profile.png 3x"}}},site:{siteMetadata:{author:"Emil Martinov",social:{twitter:"emilmartinov"}}}}}},594:function(e,t,a){"use strict";var r=a(10);t.__esModule=!0,t.default=void 0;var n,i=r(a(9)),s=r(a(44)),o=r(a(43)),l=r(a(94)),d=r(a(2)),c=r(a(6)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=new WeakMap;var g=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),h.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),h.set(e,t)),function(){a.unobserve(e),h.delete(e)}},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+r+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+n+t+s+i+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,c=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:n},u,{onLoad:s,onError:c,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,n=!1,i=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,n=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,n=!1);var l=!(t.critical&&!t.fadeIn);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,IOSupported:n,fadeIn:i,hasNoScript:l,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=g(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,g=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,S=e.Tag,w=e.itemProp,E=this.state.imgLoaded||!1===this.state.fadeIn,L=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,l.default)({opacity:E?1:0,transition:L?"opacity "+v+"ms":"none"},o),T="boolean"==typeof b?"lightgray":b,O={transitionDelay:v+"ms"},x=(0,l.default)({opacity:this.state.imgLoaded?0:1},L&&O,o,f),I={title:t,alt:this.state.isVisible?"":a,style:x,className:p};if(h){var k=h;return d.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},d.default.createElement(S,{style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),T&&d.default.createElement(S,{title:t,style:(0,l.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&O)}),k.base64&&d.default.createElement(y,(0,l.default)({src:k.base64},I)),k.tracedSVG&&d.default.createElement(y,(0,l.default)({src:k.tracedSVG},I)),this.state.isVisible&&d.default.createElement("picture",null,k.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),d.default.createElement(y,{alt:a,title:t,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t},k))}}))}if(g){var j=g,A=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},i);return"inherit"===i.display&&delete A.display,d.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:A,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},T&&d.default.createElement(S,{title:t,style:(0,l.default)({backgroundColor:T,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},L&&O)}),j.base64&&d.default.createElement(y,(0,l.default)({src:j.base64},I)),j.tracedSVG&&d.default.createElement(y,(0,l.default)({src:j.tracedSVG},I)),this.state.isVisible&&d.default.createElement("picture",null,j.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),d.default.createElement(y,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t},j))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div"};var v=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),S=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:v,sizes:S,fixed:v,fluid:S,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var w=b;t.default=w}}]);
//# sourceMappingURL=component---src-pages-index-js-496a4843acdf06484c50.js.map