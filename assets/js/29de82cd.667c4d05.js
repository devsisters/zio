"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[3106],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),v=i,f=u["".concat(l,".").concat(v)]||u[v]||m[v]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7644:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={id:"live",title:"Live"},a=void 0,s={unversionedId:"reference/test/environment/live",id:"reference/test/environment/live",title:"Live",description:"The Live trait provides access to the live environment from within the test environment for effects such as printing test results to the console or timing out tests where it is necessary to access the real environment.",source:"@site/docs/reference/test/environment/live.md",sourceDirName:"reference/test/environment",slug:"/reference/test/environment/live",permalink:"/reference/test/environment/live",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/test/environment/live.md",tags:[],version:"current",frontMatter:{id:"live",title:"Live"},sidebar:"reference-sidebar",previous:{title:"TestSystem",permalink:"/reference/test/environment/system"},next:{title:"TestConfig",permalink:"/reference/test/environment/config"}},l={},c=[{value:"Providing Live Environment",id:"providing-live-environment",level:2},{value:"To the Entire Effect",id:"to-the-entire-effect",level:3},{value:"To the Part of an Effect",id:"to-the-part-of-an-effect",level:3}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Live")," trait provides access to the ",(0,i.kt)("em",{parentName:"p"},"live")," environment from within the test environment for effects such as printing test results to the console or timing out tests where it is necessary to access the real environment."),(0,i.kt)("h2",{id:"providing-live-environment"},"Providing Live Environment"),(0,i.kt)("h3",{id:"to-the-entire-effect"},"To the Entire Effect"),(0,i.kt)("p",null,"The easiest way to access the ",(0,i.kt)("em",{parentName:"p"},"live")," environment is to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"live")," method with an effect that would otherwise access the test environment."),(0,i.kt)("p",null,"For example, within the test environment, when we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Clock.currentTime")," function, it will not execute the live version of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Clock")," service, rather, it will run the test version of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Clock"),", which is instantiated with zero-state by default. Thus, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Clock.currentTime")," will return a ",(0,i.kt)("inlineCode",{parentName:"p"},"0L")," value:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\nimport zio.test.Assertion._\nimport java.util.concurrent.TimeUnit\n\ntest("running clock methods in a test environment") {\n  assertZIO(Clock.currentTime(TimeUnit.MILLISECONDS))(equalTo(0L)) \n}\n')),(0,i.kt)("p",null,"To run the ",(0,i.kt)("inlineCode",{parentName:"p"},"Clock.currentTime")," within the live environment, we should use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Live.live")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\nimport zio.test.Assertion._\n\nimport java.util.concurrent.TimeUnit\n\ntest("live can access real environment") {\n  for {\n    live <- Live.live(Clock.currentTime(TimeUnit.MILLISECONDS))\n  } yield assertTrue(live != 0L)\n}\n')),(0,i.kt)("h3",{id:"to-the-part-of-an-effect"},"To the Part of an Effect"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"withLive")," method can be used to apply a transformation to an effect with the live environment while ensuring that the effect itself still runs with the test environment."),(0,i.kt)("p",null,"For example, assume we have a long-running task that is required to run within the test environment, and we want to timeout it before the assertion. To do this, we should run the timeout operation within the live environment:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\nimport zio.test.Assertion._\n\nval longRunningSUT =\n  ZIO.attemptBlockingInterrupt {\n    // ... \n    Thread.sleep(10000) // simulating a long-running blocking operation\n    // ...\n  }\n  \ntest("withLive provides real environment to a single part of an effect") {\n  assertZIO(Live.withLive(longRunningSUT)(_.timeout(3.seconds)))(anything)\n}\n')))}m.isMDXComponent=!0}}]);