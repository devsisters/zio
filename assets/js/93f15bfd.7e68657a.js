"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[8613],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1573:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const o={id:"index",title:"Introduction"},i=void 0,c={unversionedId:"reference/sync/index",id:"reference/sync/index",title:"Introduction",description:"When we access shared resources in a concurrent environment, we should choose a proper synchronization mechanism to avoid incorrect results and data inconsistencies. ZIO provides a set of synchronization primitives and concurrent data structures in the zio-concurrent module that helps us to achieve the desired synchronization.",source:"@site/docs/reference/sync/index.md",sourceDirName:"reference/sync",slug:"/reference/sync/",permalink:"/reference/sync/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/sync/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction"},sidebar:"reference-sidebar",previous:{title:"Fiber.Status",permalink:"/reference/fiber/fiberstatus"},next:{title:"ReentrantLock",permalink:"/reference/sync/reentrantlock"}},s={},l=[{value:"Installation",id:"installation",level:2},{value:"Synchronization",id:"synchronization",level:2},{value:"Concurrent Data Structures",id:"concurrent-data-structures",level:2}],u={toc:l};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When we access shared resources in a concurrent environment, we should choose a proper synchronization mechanism to avoid incorrect results and data inconsistencies. ZIO provides a set of synchronization primitives and concurrent data structures in the ",(0,a.kt)("inlineCode",{parentName:"p"},"zio-concurrent")," module that helps us to achieve the desired synchronization."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"In order to use this library, we need to add the following line in our ",(0,a.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-concurrent" % "2.x.x"\n')),(0,a.kt)("h2",{id:"synchronization"},"Synchronization"),(0,a.kt)("p",null,"ZIO has several synchronization tools:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/reference/sync/reentrantlock"},(0,a.kt)("inlineCode",{parentName:"a"},"ReentrantLock"))),"\u2014 The ",(0,a.kt)("inlineCode",{parentName:"li"},"ReentrantLock")," is a synchronization tool that is useful for synchronizing blocks of code."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/reference/sync/countdownlatch"},(0,a.kt)("inlineCode",{parentName:"a"},"CountDownLatch"))),"\u2014 The ",(0,a.kt)("inlineCode",{parentName:"li"},"CountDownLatch")," is a synchronization tool that allows one or more fibers to wait for the finalization of multiple operations."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/reference/sync/cyclicbarrier"},(0,a.kt)("inlineCode",{parentName:"a"},"CyclicBarrier"))),"\u2014 The ",(0,a.kt)("inlineCode",{parentName:"li"},"CyclicBarrier")," is a synchronization tool that allows a set of fibers to all wait for each other to reach a common barrier point.")),(0,a.kt)("h2",{id:"concurrent-data-structures"},"Concurrent Data Structures"),(0,a.kt)("p",null,"It also has some concurrent data structure:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/reference/sync/concurrentmap"},(0,a.kt)("inlineCode",{parentName:"a"},"ConcurrentMap"))),"\u2014 A ",(0,a.kt)("inlineCode",{parentName:"li"},"ConcurrentMap")," is a Map wrapper over ",(0,a.kt)("inlineCode",{parentName:"li"},"java.util.concurrent.ConcurrentHashMap")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/reference/sync/concurrentset"},(0,a.kt)("inlineCode",{parentName:"a"},"ConcurrentSet"))),"\u2014 A ",(0,a.kt)("inlineCode",{parentName:"li"},"ConcurrentSet")," is a Set wrapper over ",(0,a.kt)("inlineCode",{parentName:"li"},"java.util.concurrent.ConcurrentHashMap"),".")))}p.isMDXComponent=!0}}]);