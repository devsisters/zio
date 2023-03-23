"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[95971],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||s;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var p=2;p<s;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13764:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const s={id:"interactive-processes",title:"Interactive Processes"},i=void 0,a={unversionedId:"zio-process/interactive-processes",id:"zio-process/interactive-processes",title:"Interactive Processes",description:"Sometimes you want to interact with a process in a back-and-forth manner by sending requests to the process and receiving responses back. For example, interacting with a repl-like process like node -i, python -i, etc. or an ssh server.",source:"@site/docs/zio-process/interactive-processes.md",sourceDirName:"zio-process",slug:"/zio-process/interactive-processes",permalink:"/zio-process/interactive-processes",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-process/interactive-processes.md",tags:[],version:"current",frontMatter:{id:"interactive-processes",title:"Interactive Processes"},sidebar:"ecosystem-sidebar",previous:{title:"Piping",permalink:"/zio-process/piping"},next:{title:"Other",permalink:"/zio-process/other"}},c={},p=[],l={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sometimes you want to interact with a process in a back-and-forth manner by sending requests to the process and receiving responses back. For example, interacting with a repl-like process like ",(0,o.kt)("inlineCode",{parentName:"p"},"node -i"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"python -i"),", etc. or an ssh server."),(0,o.kt)("p",null,"Here is an example of communicating with an interactive NodeJS shell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'for {\n  commandQueue <- Queue.unbounded[Chunk[Byte]]\n  process      <- Command("node", "-i").stdin(ProcessInput.fromQueue(commandQueue)).run\n  sep          <- System.lineSeparator\n  fiber        <- process.stdout.linesStream.foreach { line =>\n                    ZIO.debug(s"Response from REPL: $line")\n                  }.fork\n  _            <- commandQueue.offer(Chunk.fromArray(s"1+1${sep}".getBytes(StandardCharsets.UTF_8)))\n  _            <- commandQueue.offer(Chunk.fromArray(s"2**8${sep}".getBytes(StandardCharsets.UTF_8)))\n  _            <- commandQueue.offer(Chunk.fromArray(s"process.exit(0)${sep}".getBytes(StandardCharsets.UTF_8)))  \n  _            <- fiber.join  \n} yield ()\n')),(0,o.kt)("p",null,"You would probably want to create a helper for the repeated code, but this just a minimal example to help get you started."))}m.isMDXComponent=!0}}]);