"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[6684],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),u=s(a),h=n,d=u["".concat(l,".").concat(h)]||u[h]||c[h]||i;return a?r.createElement(d,o(o({ref:t},p),{},{components:a})):r.createElement(d,o({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m.mdxType="string"==typeof e?e:n,o[1]=m;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9e3:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>m,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const i={id:"tsemaphore",title:"TSemaphore"},o=void 0,m={unversionedId:"reference/stm/tsemaphore",id:"reference/stm/tsemaphore",title:"TSemaphore",description:"TSemaphore is a semaphore with transactional semantics that can be used to control access to a common resource. It",source:"@site/docs/reference/stm/tsemaphore.md",sourceDirName:"reference/stm",slug:"/reference/stm/tsemaphore",permalink:"/reference/stm/tsemaphore",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/stm/tsemaphore.md",tags:[],version:"current",frontMatter:{id:"tsemaphore",title:"TSemaphore"},sidebar:"reference-sidebar",previous:{title:"TReentrantLock",permalink:"/reference/stm/treentrantlock"},next:{title:"THub",permalink:"/reference/stm/thub"}},l={},s=[{value:"Create a TSemaphore",id:"create-a-tsemaphore",level:2},{value:"Acquire a permit",id:"acquire-a-permit",level:2},{value:"Release a permit",id:"release-a-permit",level:2},{value:"Retrieve available permits",id:"retrieve-available-permits",level:2},{value:"Execute an arbitrary STM action with automatic acquire and release",id:"execute-an-arbitrary-stm-action-with-automatic-acquire-and-release",level:2},{value:"Acquire and release multiple permits",id:"acquire-and-release-multiple-permits",level:2}],p={toc:s};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"TSemaphore")," is a semaphore with transactional semantics that can be used to control access to a common resource. It\nholds a certain number of permits, and permits may be acquired or released."),(0,n.kt)("h2",{id:"create-a-tsemaphore"},"Create a TSemaphore"),(0,n.kt)("p",null,"Creating a ",(0,n.kt)("inlineCode",{parentName:"p"},"TSemaphore")," with 10 permits:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval tSemaphoreCreate: STM[Nothing, TSemaphore] = TSemaphore.make(10L)\n")),(0,n.kt)("h2",{id:"acquire-a-permit"},"Acquire a permit"),(0,n.kt)("p",null,"Acquiring a permit reduces the number of remaining permits that the ",(0,n.kt)("inlineCode",{parentName:"p"},"TSemaphore")," contains. Acquiring a permit is done\nwhen a user wants to access a common shared resource:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval tSemaphoreAcq: STM[Nothing, TSemaphore] = for {\n  tSem <- TSemaphore.make(2L)\n  _    <- tSem.acquire\n} yield tSem\n\ntSemaphoreAcq.commit\n")),(0,n.kt)("p",null,"Note that if you try to acquire a permit when there are no more remaining permits in the semaphore then execution will be blocked semantically until a permit is ready to be acquired. Note that semantic blocking does not block threads and the STM transaction will only be retried when a permit is released."),(0,n.kt)("h2",{id:"release-a-permit"},"Release a permit"),(0,n.kt)("p",null,"Once you have finished accessing the shared resource, you must release your permit so other parties can access the\nshared resource:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval tSemaphoreRelease: STM[Nothing, TSemaphore] = for {\n  tSem <- TSemaphore.make(1L)\n  _    <- tSem.acquire\n  _    <- tSem.release\n} yield tSem\n\ntSemaphoreRelease.commit\n")),(0,n.kt)("h2",{id:"retrieve-available-permits"},"Retrieve available permits"),(0,n.kt)("p",null,"You can query for the remaining amount of permits in the TSemaphore by using ",(0,n.kt)("inlineCode",{parentName:"p"},"available"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval tSemaphoreAvailable: STM[Nothing, Long] = for {\n  tSem <- TSemaphore.make(2L)\n  _    <- tSem.acquire\n  cap  <- tSem.available\n} yield cap\n\ntSemaphoreAvailable.commit\n")),(0,n.kt)("p",null,"The above code creates a TSemaphore with two permits and acquires one permit without releasing it. Here, ",(0,n.kt)("inlineCode",{parentName:"p"},"available"),"\nwill report that there is a single permit left."),(0,n.kt)("h2",{id:"execute-an-arbitrary-stm-action-with-automatic-acquire-and-release"},"Execute an arbitrary STM action with automatic acquire and release"),(0,n.kt)("p",null,"You can choose to execute any arbitrary STM action that requires acquiring and releasing permit on TSemaphore as part\nof the same transaction. Rather than doing:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\ndef yourSTMAction: STM[Nothing, Unit] = STM.unit\n\nval tSemaphoreWithoutPermit: STM[Nothing, Unit] = \n  for {\n    sem <- TSemaphore.make(1L)\n    _   <- sem.acquire\n    a   <- yourSTMAction\n    _   <- sem.release\n  } yield a\n\ntSemaphoreWithoutPermit.commit\n")),(0,n.kt)("p",null,"You can simply use ",(0,n.kt)("inlineCode",{parentName:"p"},"withPermit")," instead:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval tSemaphoreWithPermit: IO[Nothing, Unit] =\n  for {\n    sem <- TSemaphore.make(1L).commit\n    a   <- sem.withPermit(yourSTMAction.commit)\n  } yield a\n")),(0,n.kt)("p",null,"It is considered best practice to use ",(0,n.kt)("inlineCode",{parentName:"p"},"withPermit")," over using an ",(0,n.kt)("inlineCode",{parentName:"p"},"acquire")," and a ",(0,n.kt)("inlineCode",{parentName:"p"},"release")," directly unless dealing with more complicated use cases that involve multiple STM actions where ",(0,n.kt)("inlineCode",{parentName:"p"},"acquire")," is not at the start and ",(0,n.kt)("inlineCode",{parentName:"p"},"release")," is not at the end of the STM transaction."),(0,n.kt)("h2",{id:"acquire-and-release-multiple-permits"},"Acquire and release multiple permits"),(0,n.kt)("p",null,"It is possible to acquire and release multiple permits at a time using ",(0,n.kt)("inlineCode",{parentName:"p"},"acquireN")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"releaseN"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval tSemaphoreAcquireNReleaseN: STM[Nothing, Boolean] = for {\n  sem <- TSemaphore.make(3L)\n  _   <- sem.acquireN(3L)\n  cap <- sem.available \n  _   <- sem.releaseN(3L)\n} yield cap == 0\n\ntSemaphoreAcquireNReleaseN.commit\n")))}c.isMDXComponent=!0}}]);