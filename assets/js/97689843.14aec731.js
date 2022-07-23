"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[5782],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=c(n),u=a,f=s["".concat(l,".").concat(u)]||s[u]||d[u]||o;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={id:"trandom",title:"TRandom"},i=void 0,p={unversionedId:"reference/stm/trandom",id:"reference/stm/trandom",title:"TRandom",description:"TRandom is a random service like Random that provides utilities to generate random numbers, but they can participate in STM transactions.",source:"@site/docs/reference/stm/trandom.md",sourceDirName:"reference/stm",slug:"/reference/stm/trandom",permalink:"/reference/stm/trandom",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/stm/trandom.md",tags:[],version:"current",frontMatter:{id:"trandom",title:"TRandom"},sidebar:"reference-sidebar",previous:{title:"TArray",permalink:"/reference/stm/tarray"},next:{title:"TSet",permalink:"/reference/stm/tset"}},l={},c=[],m={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"TRandom")," is a random service like ",(0,a.kt)("a",{parentName:"p",href:"/reference/contextual/services/random"},"Random")," that provides utilities to generate random numbers, but they can participate in STM transactions."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"TRandom")," service is the same as the ",(0,a.kt)("inlineCode",{parentName:"p"},"Random")," service. There are no differences in operations, but all return types are in the ",(0,a.kt)("inlineCode",{parentName:"p"},"STM")," world rather than the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO")," world:"),(0,a.kt)("p",null,"| Function      | Input Type    | Output Type                   |\n|---------------+---------------+-------------------------------|\n| ",(0,a.kt)("inlineCode",{parentName:"p"},"nextBoolean")," |               | ",(0,a.kt)("inlineCode",{parentName:"p"},"URSTM[TRandom, Boolean]"),"     |\n| ",(0,a.kt)("inlineCode",{parentName:"p"},"nextBytes"),"   | ",(0,a.kt)("inlineCode",{parentName:"p"},"length: Int")," | ",(0,a.kt)("inlineCode",{parentName:"p"},"URSTM[TRandom, Chunk[Byte]]")," |\n| ",(0,a.kt)("inlineCode",{parentName:"p"},"nextDouble"),"  |               | ",(0,a.kt)("inlineCode",{parentName:"p"},"URSTM[TRandom, Double]"),"      |\n| ",(0,a.kt)("inlineCode",{parentName:"p"},"nextInt"),"     |               | ",(0,a.kt)("inlineCode",{parentName:"p"},"URSTM[TRandom, Int]"),"         |\n| ...           | ...           | ...                           |"),(0,a.kt)("p",null,"When we use operations of the ",(0,a.kt)("inlineCode",{parentName:"p"},"TRandom")," service, they add ",(0,a.kt)("inlineCode",{parentName:"p"},"TRandom")," dependency on our ",(0,a.kt)("inlineCode",{parentName:"p"},"STM")," data type. After committing all the transactions, we can ",(0,a.kt)("inlineCode",{parentName:"p"},"inject"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"provide")," a ",(0,a.kt)("inlineCode",{parentName:"p"},"TRandom")," implementation into our effect:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"myApp.provide(TRandom.live)\n")))}d.isMDXComponent=!0}}]);