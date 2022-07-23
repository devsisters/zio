"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[7075],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>p});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(r),p=a,u=m["".concat(c,".").concat(p)]||m[p]||k[p]||o;return r?n.createElement(u,i(i({ref:t},s),{},{components:r})):n.createElement(u,i({ref:t},s))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3828:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={id:"treentrantlock",title:"TReentrantLock"},i=void 0,l={unversionedId:"reference/stm/treentrantlock",id:"reference/stm/treentrantlock",title:"TReentrantLock",description:"A TReentrantLock allows safe concurrent access to some mutable state efficiently, allowing multiple fibers to read the",source:"@site/docs/reference/stm/treentrantlock.md",sourceDirName:"reference/stm",slug:"/reference/stm/treentrantlock",permalink:"/reference/stm/treentrantlock",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/stm/treentrantlock.md",tags:[],version:"current",frontMatter:{id:"treentrantlock",title:"TReentrantLock"},sidebar:"reference-sidebar",previous:{title:"TQueue",permalink:"/reference/stm/tqueue"},next:{title:"TSemaphore",permalink:"/reference/stm/tsemaphore"}},c={},d=[{value:"Semantics",id:"semantics",level:2},{value:"Creating a reentrant lock",id:"creating-a-reentrant-lock",level:2},{value:"Acquiring a read lock",id:"acquiring-a-read-lock",level:2},{value:"Acquiring a write lock",id:"acquiring-a-write-lock",level:2},{value:"Multiple fibers can hold read locks",id:"multiple-fibers-can-hold-read-locks",level:2},{value:"Upgrading and downgrading locks",id:"upgrading-and-downgrading-locks",level:2},{value:"Acquiring a write lock in a contentious scenario",id:"acquiring-a-write-lock-in-a-contentious-scenario",level:2},{value:"Safer methods  (<code>readLock</code> and <code>writeLock</code>)",id:"safer-methods--readlock-and-writelock",level:2}],s={toc:d};function k(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"TReentrantLock")," allows safe concurrent access to some mutable state efficiently, allowing multiple fibers to read the\nstate (because that is safe to do) but only one fiber to modify the state (to prevent data corruption). Also, even though\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"TReentrantLock")," is implemented using ",(0,a.kt)("inlineCode",{parentName:"p"},"STM"),"; reads and writes can be committed, allowing this to be used as a building\nblock for solutions that expose purely ZIO effects and internally allow locking on more than one piece of state in a\nsimple and composable way (thanks to STM)."),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"TReentrantLock")," is a ",(0,a.kt)("em",{parentName:"p"},"reentrant")," read/write lock. A reentrant lock is one where a fiber can claim the lock multiple\ntimes without blocking on itself. It's useful in situations where it's not easy to keep track of whether you have already\ngrabbed a lock. If a lock is non re-entrant you could grab the lock, then block when you go to grab it again, effectively\ncausing a deadlock. "),(0,a.kt)("h2",{id:"semantics"},"Semantics"),(0,a.kt)("p",null,"This lock allows both readers and writers to reacquire read or write locks with reentrancy guarantees. Readers are not\nallowed until all write locks held by the writing fiber have been released. Writers are not allowed unless there are no\nother locks or the fiber wanting to hold a write lock already has a read lock and there are no other fibers holding a\nread lock. "),(0,a.kt)("p",null,"This lock also allows upgrading from a read lock to a write lock (automatically) and downgrading\nfrom a write lock to a read lock (automatically provided that you upgraded from a read lock to a write lock)."),(0,a.kt)("h2",{id:"creating-a-reentrant-lock"},"Creating a reentrant lock"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.stm._\n\nval reentrantLock = TReentrantLock.make\n")),(0,a.kt)("h2",{id:"acquiring-a-read-lock"},"Acquiring a read lock"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.stm._\n\nval program =\n  (for {\n    lock <- TReentrantLock.make\n    _    <- lock.acquireRead\n    rst  <- lock.readLocked  // lock is read-locked once transaction completes\n    wst  <- lock.writeLocked // lock is not write-locked\n  } yield rst && !wst).commit\n")),(0,a.kt)("h2",{id:"acquiring-a-write-lock"},"Acquiring a write lock"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval writeLockProgram: UIO[Boolean] =\n  (for {\n    lock <- TReentrantLock.make\n    _    <- lock.acquireWrite\n    wst  <- lock.writeLocked // lock is write-locked once transaction completes\n    rst  <- lock.readLocked  // lock is not read-locked\n  } yield !rst && wst).commit\n")),(0,a.kt)("h2",{id:"multiple-fibers-can-hold-read-locks"},"Multiple fibers can hold read locks"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval multipleReadLocksProgram: UIO[(Int, Int)] = for {\n  lock          <- TReentrantLock.make.commit\n  fiber0        <- lock.acquireRead.commit.fork // fiber0 acquires a read-lock\n  currentState1 <- fiber0.join                  // 1 read lock held\n  fiber1        <- lock.acquireRead.commit.fork // fiber1 acquires a read-lock\n  currentState2 <- fiber1.join                  // 2 read locks held \n} yield (currentState1, currentState2)\n")),(0,a.kt)("h2",{id:"upgrading-and-downgrading-locks"},"Upgrading and downgrading locks"),(0,a.kt)("p",null,"If your fiber already has a read lock then it is possible to upgrade the lock to a write lock provided that no other\nreader (other than your fiber) holds a lock"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval upgradeDowngradeProgram: UIO[(Boolean, Boolean, Boolean, Boolean)] = for {\n  lock               <- TReentrantLock.make.commit\n  _                  <- lock.acquireRead.commit\n  _                  <- lock.acquireWrite.commit  // upgrade\n  isWriteLocked      <- lock.writeLocked.commit   // now write-locked\n  isReadLocked       <- lock.readLocked.commit    // and read-locked\n  _                  <- lock.releaseWrite.commit  // downgrade\n  isWriteLockedAfter <- lock.writeLocked.commit   // no longer write-locked\n  isReadLockedAfter  <- lock.readLocked.commit    // still read-locked\n} yield (isWriteLocked, isReadLocked, isWriteLockedAfter, isReadLockedAfter)\n")),(0,a.kt)("h2",{id:"acquiring-a-write-lock-in-a-contentious-scenario"},"Acquiring a write lock in a contentious scenario"),(0,a.kt)("p",null,"A write lock can be acquired immediately only if one of the following conditions are satisfied:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"There are no other holders of the lock"),(0,a.kt)("li",{parentName:"ol"},"The current fiber is already holding a read lock and there are no other parties holding a read lock")),(0,a.kt)("p",null,"If either of the above scenarios are untrue then attempting to acquire a write lock will semantically block the fiber.\nHere is an example which demonstrates that a write lock can only be obtained by the fiber once all other readers (except\nthe fiber attempting to acquire the write lock) have released their hold on the (read or write) lock."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.Console._\nimport zio.stm._\n\nval writeLockDemoProgram: UIO[Unit] = for {\n  l  <- TReentrantLock.make.commit\n  _  <- printLine("Beginning test").orDie\n  f1 <- (l.acquireRead.commit *> ZIO.sleep(5.seconds) *> l.releaseRead.commit).fork\n  f2 <- (l.acquireRead.commit *> printLine("read-lock").orDie *> l.acquireWrite.commit *> printLine("I have upgraded!").orDie).fork\n  _  <- (f1 zip f2).join\n} yield ()\n')),(0,a.kt)("p",null,"Here fiber ",(0,a.kt)("inlineCode",{parentName:"p"},"f1")," acquires a read lock and sleeps for 5 seconds before releasing it. Fiber ",(0,a.kt)("inlineCode",{parentName:"p"},"f2")," also acquires a read\nlock and immediately tries to acquire a write lock. However, ",(0,a.kt)("inlineCode",{parentName:"p"},"f2")," will have to semantically block for approximately 5\nseconds to obtain a write lock because ",(0,a.kt)("inlineCode",{parentName:"p"},"f1")," will release its hold on the lock and only then can ",(0,a.kt)("inlineCode",{parentName:"p"},"f2")," acquire a hold for\nthe write lock. "),(0,a.kt)("h2",{id:"safer-methods--readlock-and-writelock"},"Safer methods  (",(0,a.kt)("inlineCode",{parentName:"h2"},"readLock")," and ",(0,a.kt)("inlineCode",{parentName:"h2"},"writeLock"),")"),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"acquireRead"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"acquireWrite"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"releaseRead")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"releaseWrite")," should be avoided for simple use cases relying on\nmethods like ",(0,a.kt)("inlineCode",{parentName:"p"},"readLock")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"writeLock")," instead. ",(0,a.kt)("inlineCode",{parentName:"p"},"readLock")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"writeLock")," automatically acquire and release the lock\nthanks to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Scope")," construct. The program described below is a safer version of the program above and ensures we\ndon't hold onto any resources once we are done using the reentrant lock."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.Console._\nimport zio.stm._\n\nval saferProgram: UIO[Unit] = for {\n  lock <- TReentrantLock.make.commit\n  f1   <- ZIO.scoped(lock.readLock *> ZIO.sleep(5.seconds) *> printLine("Powering down").orDie).fork\n  f2   <- ZIO.scoped(lock.readLock *> lock.writeLock *> printLine("Huzzah, writes are mine").orDie).fork\n  _    <- (f1 zip f2).join\n} yield ()\n')))}k.isMDXComponent=!0}}]);