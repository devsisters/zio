"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[58828],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),f=n,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return r?o.createElement(m,a(a({ref:t},c),{},{components:r})):o.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},92962:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const i={id:"developer-notes",title:"Developer Notes"},a=void 0,l={unversionedId:"zio-sbt/developer-notes",id:"zio-sbt/developer-notes",title:"Developer Notes",description:"Todo List",source:"@site/docs/zio-sbt/developer-notes.md",sourceDirName:"zio-sbt",slug:"/zio-sbt/developer-notes",permalink:"/zio-sbt/developer-notes",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-sbt/developer-notes.md",tags:[],version:"current",frontMatter:{id:"developer-notes",title:"Developer Notes"}},s={},p=[{value:"Todo List",id:"todo-list",level:2},{value:"ZIO SBT Website",id:"zio-sbt-website",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"todo-list"},"Todo List"),(0,n.kt)("h3",{id:"zio-sbt-website"},"ZIO SBT Website"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add a command to make a version history page in documentation"),(0,n.kt)("li",{parentName:"ul"},"Check if the committed workflow is valid or not."),(0,n.kt)("li",{parentName:"ul"},"To generate README.md file, it doesn't need to compile all docs."),(0,n.kt)("li",{parentName:"ul"},"Add env variable for zio version (ZIO_VERSION)."),(0,n.kt)("li",{parentName:"ul"},"Support for various scala versions"),(0,n.kt)("li",{parentName:"ul"},"Support for auto update PRs"),(0,n.kt)("li",{parentName:"ul"},"Add workflow for header checker"),(0,n.kt)("li",{parentName:"ul"},"Add prepare task to perform preliminary tasks before PR"),(0,n.kt)("li",{parentName:"ul"},'Parametrize "docs" project instead of hardcoded value')))}u.isMDXComponent=!0}}]);