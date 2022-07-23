"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[9685],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),b=r,d=c["".concat(l,".").concat(b)]||c[b]||h[b]||i;return n?a.createElement(d,s(s({ref:t},p),{},{components:n})):a.createElement(d,s({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},313:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={id:"hub",title:"Hub"},s=void 0,o={unversionedId:"reference/concurrency/hub",id:"reference/concurrency/hub",title:"Hub",description:"A Hub is an asynchronous message hub. Publishers can publish messages to the hub and subscribers can subscribe to receive messagesfrom the hub.",source:"@site/docs/reference/concurrency/hub.md",sourceDirName:"reference/concurrency",slug:"/reference/concurrency/hub",permalink:"/reference/concurrency/hub",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/concurrency/hub.md",tags:[],version:"current",frontMatter:{id:"hub",title:"Hub"},sidebar:"reference-sidebar",previous:{title:"Queue",permalink:"/reference/concurrency/queue"},next:{title:"Semaphore",permalink:"/reference/concurrency/semaphore"}},l={},u=[{value:"Constructing Hubs",id:"constructing-hubs",level:2},{value:"Operators On Hubs",id:"operators-on-hubs",level:2},{value:"Hubs And Streams",id:"hubs-and-streams",level:2}],p={toc:u};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Hub")," is an asynchronous message hub. Publishers can publish messages to the hub and subscribers can subscribe to receive messagesfrom the hub."),(0,r.kt)("p",null,"Unlike a ",(0,r.kt)("inlineCode",{parentName:"p"},"Queue"),", where each value offered to the queue can be taken by ",(0,r.kt)("em",{parentName:"p"},"one")," taker, each value published to a hub can be received by ",(0,r.kt)("em",{parentName:"p"},"all")," subscribers. Whereas a ",(0,r.kt)("inlineCode",{parentName:"p"},"Queue")," represents the optimal solution to the problem of how to ",(0,r.kt)("em",{parentName:"p"},"distribute")," values, a ",(0,r.kt)("inlineCode",{parentName:"p"},"Hub")," represents the optimal solution to the problem of how to ",(0,r.kt)("em",{parentName:"p"},"broadcast")," them."),(0,r.kt)("p",null,"The fundamental operators on a ",(0,r.kt)("inlineCode",{parentName:"p"},"Hub")," are ",(0,r.kt)("inlineCode",{parentName:"p"},"publish")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\ntrait Hub[A] {\n  def publish(a: A): UIO[Boolean]\n  def subscribe: ZIO[Scope, Nothing, Dequeue[A]]\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"publish")," operator returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," effect that publishes a message of type ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," to the hub and succeeds with a value describing whether the message was successfully published to the hub."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe")," operator returns a scoped ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," effect that subscribes to the hub and unsubscribes from the hub when the scope is closed. Within the scope we have access to a ",(0,r.kt)("inlineCode",{parentName:"p"},"Dequeue"),", which is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Queue")," that can only be dequeued from, that allows us to take messages published to the hub."),(0,r.kt)("p",null,"For example, we can use a hub to broadcast a message to multiple subscribers like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'Hub.bounded[String](2).flatMap { hub =>\n  ZIO.scoped {\n    hub.subscribe.zip(hub.subscribe).flatMap { case (left, right) =>\n      for {\n        _ <- hub.publish("Hello from a hub!")\n        _ <- left.take.flatMap(Console.printLine(_))\n        _ <- right.take.flatMap(Console.printLine(_))\n      } yield ()\n    }\n  }\n}\n')),(0,r.kt)("p",null,"A subscriber will only receive messages that are published to the hub while it is subscribed. So if we want to make sure that a particular message is received by a subscriber we must take care that the subscription has completed before publishing the message to the hub."),(0,r.kt)("p",null,"We can do this by publishing a message to the hub within the scope of the subscription as in the example above or by using other coordination mechanisms such as completing a ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"  when scope has been opened."),(0,r.kt)("p",null,"Of course, in many cases such as subscribing to receive real time data we may not care about this because we are happy to just pick up with the most recent messages after we have subscribed. But for testing and simple applications this can be an important point to keep in mind."),(0,r.kt)("h2",{id:"constructing-hubs"},"Constructing Hubs"),(0,r.kt)("p",null,"The most common way to create a hub is with the ",(0,r.kt)("inlineCode",{parentName:"p"},"bounded")," constructor, which returns an effect that creates a new hub with the specified requested capacity."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def bounded[A](requestedCapacity: Int): UIO[Hub[A]] =\n  ???\n")),(0,r.kt)("p",null,"For maximum efficiency you should create hubs with capacities that are powers of two."),(0,r.kt)("p",null,"Just like a bounded queue, a bounded hub applies back pressure to publishers when it is at capacity, so publishers will semantically block on calls to ",(0,r.kt)("inlineCode",{parentName:"p"},"publish")," if the hub is full."),(0,r.kt)("p",null,"The advantage of the back pressure strategy is that it guarantees that all subscribers will receive all messages published to the hub while they are subscribed. However, it does create the risk that a slow subscriber will slow down the rate at which messages are published and received by other subscribers."),(0,r.kt)("p",null,"If you do not want this you can create a hub with the ",(0,r.kt)("inlineCode",{parentName:"p"},"dropping")," constructor."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def dropping[A](requestedCapacity: Int): UIO[Hub[A]] =\n  ???\n")),(0,r.kt)("p",null,"A dropping hub will simply drop values published to it if the hub is at capacity, returning ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," on calls to ",(0,r.kt)("inlineCode",{parentName:"p"},"publish")," if the hub is full to signal that the value was not successfully published."),(0,r.kt)("p",null,"The advantage of the dropping strategy is that publishers can continue to publish new values so when there is space in the hub the newest values can be published to the hub. However, subscribers are no longer guaranteed to receive all values published to the hub and a slow subscriber can still prevent messages from being published to the hub and received by other subscribers."),(0,r.kt)("p",null,"You can also create a hub with the ",(0,r.kt)("inlineCode",{parentName:"p"},"sliding")," constructor."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def sliding[A](requestedCapacity: Int): UIO[Hub[A]] =\n  ???\n")),(0,r.kt)("p",null,"A sliding hub will drop the oldest value if a new value is published to it and the hub is at capacity, so publishing will always succeed immediately."),(0,r.kt)("p",null,"The advantage of the sliding strategy is that a slow subscriber cannot slow down that rate at which messages are published to the hub or received by other subscribers. However, it creates the risk that slow subscribers may not receive all messages published to the hub."),(0,r.kt)("p",null,"Finally, you can create a hub with the ",(0,r.kt)("inlineCode",{parentName:"p"},"unbounded")," constructor."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def unbounded[A]: UIO[Hub[A]] =\n  ???\n")),(0,r.kt)("p",null,"An unbounded hub is never at capacity so publishing to an unbounded hub always immediately succeeds."),(0,r.kt)("p",null,"The advantage of an unbounded hub is that it combines the guarantees that all subscribers will receive all messages published to the hub and that a slow subscriber will not slow down the rate at which messages are published and received by other subscribers. However, it does this at the cost of potentially growing without bound if messages are published to the hub more quickly than they are taken by the slowest subscriber."),(0,r.kt)("p",null,"In general you should prefer bounded, dropping, or sliding hubs for this reason. However, unbounded hubs can be useful in certain situations where you do not know exactly how many values will be published to the hub but are confident that it will not exceed a reasonable size or want to handle that concern at a higher level of your application."),(0,r.kt)("h2",{id:"operators-on-hubs"},"Operators On Hubs"),(0,r.kt)("p",null,"In addition to ",(0,r.kt)("inlineCode",{parentName:"p"},"publish")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe"),", many of the same operators that are available on queues are available on hubs."),(0,r.kt)("p",null,"We can publish multiple values to the hub using the ",(0,r.kt)("inlineCode",{parentName:"p"},"publishAll")," operator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trait Hub[A] {\n  def publishAll(as: Iterable[A]): UIO[Boolean]\n}\n")),(0,r.kt)("p",null,"We can check the capacity of the hub as well as the number of messages currently in the hub using the ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"capacity")," operators."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trait Hub[A] {\n  def capacity: Int\n  def size: UIO[Int]\n}\n")),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"capacity")," returns an ",(0,r.kt)("inlineCode",{parentName:"p"},"Int")," because the capacity is set at hub creation and never changes. In contrast, ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," effect that determines the current size of the hub since the number of messages in the hub can change over time."),(0,r.kt)("p",null,"We can also shut down the hub, check whether it has been shut down, or await its shut down. Shutting down a hub will shut down all the queues associated with subscriptions to the hub, properly propagating the shut down signal."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trait Hub[A] {\n  def awaitShutdown: UIO[Unit]\n  def isShutdown: UIO[Boolean]\n  def shutdown: UIO[Unit]\n}\n")),(0,r.kt)("p",null,"As you can see, the operators on ",(0,r.kt)("inlineCode",{parentName:"p"},"Hub")," are identical to the ones on ",(0,r.kt)("inlineCode",{parentName:"p"},"Queue")," with the exception of ",(0,r.kt)("inlineCode",{parentName:"p"},"publish")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe")," replacing ",(0,r.kt)("inlineCode",{parentName:"p"},"offer")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"take"),". So if you know how to use a ",(0,r.kt)("inlineCode",{parentName:"p"},"Queue")," you already know how to use a ",(0,r.kt)("inlineCode",{parentName:"p"},"Hub"),"."),(0,r.kt)("p",null,"In fact, a ",(0,r.kt)("inlineCode",{parentName:"p"},"Hub")," can be viewed as a ",(0,r.kt)("inlineCode",{parentName:"p"},"Queue")," that can only be written to."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trait Hub[A] extends Enqueue[A]\n")),(0,r.kt)("p",null,"Here the ",(0,r.kt)("inlineCode",{parentName:"p"},"Enqueue")," type represents a queue that can only be enqueued. Enqueing to the queue publishes a value to the hub, shutting down the queue shuts down the hub, and so on."),(0,r.kt)("p",null,"This can be extremely useful because it allows us to use a ",(0,r.kt)("inlineCode",{parentName:"p"},"Hub")," anywhere we are currently using a ",(0,r.kt)("inlineCode",{parentName:"p"},"Queue")," that we only write to."),(0,r.kt)("p",null,"For example, say we are using the ",(0,r.kt)("inlineCode",{parentName:"p"},"into")," operator on ",(0,r.kt)("inlineCode",{parentName:"p"},"ZStream")," to send all elements of a stream of financial transactions to a ",(0,r.kt)("inlineCode",{parentName:"p"},"Queue")," for processing by a downstream consumer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.stream._\n\ntrait ZStream[-R, +E, +O] {\n  def into(\n    queue: Enqueue[Take[E, O]]\n  ): ZIO[R, E, Unit]\n}\n")),(0,r.kt)("p",null,"We would now like to have multiple downstream consumers process each of these transactions, for example to persist them and log them in addition to applying our business logic to them. With ",(0,r.kt)("inlineCode",{parentName:"p"},"Hub")," this is easy because we can just use the ",(0,r.kt)("inlineCode",{parentName:"p"},"toQueue")," operator to view any ",(0,r.kt)("inlineCode",{parentName:"p"},"Hub")," as a ",(0,r.kt)("inlineCode",{parentName:"p"},"Queue")," that can only be written to."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"type Transaction = ???\n\nval transactionStream: ZStream[Any, Nothing, Transaction] =\n  ???\n\nval hub: Hub[Take[Nothing, Transaction]] =\n  ???\n\ntransactionStream.into(hub)\n")),(0,r.kt)("p",null,"All of the elements from the transaction stream will now be published to the hub. We can now have multiple downstream consumers process elements from the financial transactions stream with the guarantee that all downstream consumers will see all transactions in the stream, changing the topology of our data flow from one-to-one to one-to-many with a single line change."),(0,r.kt)("h2",{id:"hubs-and-streams"},"Hubs And Streams"),(0,r.kt)("p",null,"Hubs play extremely well with streams."),(0,r.kt)("p",null,"We can create a ",(0,r.kt)("inlineCode",{parentName:"p"},"ZStream")," from a subscription to a hub using the ",(0,r.kt)("inlineCode",{parentName:"p"},"fromHub")," operator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.stream._\n\nobject ZStream {\n  def fromHub[O](hub: Hub[O]): ZStream[Any, Nothing, O] =\n    ???\n}\n")),(0,r.kt)("p",null,"This will return a stream that subscribes to receive values from a hub and then emits every value published to the hub while the subscription is active. When the stream ends the subscriber will automatically be unsubscribed from the hub."),(0,r.kt)("p",null,"There is also a ",(0,r.kt)("inlineCode",{parentName:"p"},"fromHubScoped")," operator that returns the stream in the context of a scoped effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"object ZStream {\n  def fromHubScoped[O](\n    hub: Hub[O]\n  ): ZIO[Scope, Nothing, ZStream[Any, Nothing, O]] =\n    ???\n}\n")),(0,r.kt)("p",null,"The scoped effect here describes subscribing to receive messages from the hub while the stream describes taking messages from the hub. This can be useful when we need to ensure that a consumer has subscribed before a producer begins publishing values."),(0,r.kt)("p",null,"Here is an example of using it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'for {\n  promise <- Promise.make[Nothing, Unit]\n  hub     <- Hub.bounded[String](2)\n  scoped  = ZStream.fromHubScoped(hub).tap(_ => promise.succeed(()))\n  stream   = ZStream.unwrapScoped(scoped)\n  fiber   <- stream.take(2).runCollect.fork\n  _       <- promise.await\n  _       <- hub.publish("Hello")\n  _       <- hub.publish("World")\n  _       <- fiber.join\n} yield ()\n')),(0,r.kt)("p",null,"Notice that in this case we used a ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," to ensure that the subscription had completed before publishing to the hub. The scoped ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," in the return type of ",(0,r.kt)("inlineCode",{parentName:"p"},"fromHubScoped")," made it easy for us to signal when the subscription had occurred by using ",(0,r.kt)("inlineCode",{parentName:"p"},"tap")," and completing the ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"."),(0,r.kt)("p",null,"Of course in many real applications we don't need this kind of sequencing and just want to subscribe to receive new messages. In this case we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"fromHub")," operator to return a ",(0,r.kt)("inlineCode",{parentName:"p"},"ZStream")," that will automatically handle subscribing and unsubscribing for us."),(0,r.kt)("p",null,"There is also a ",(0,r.kt)("inlineCode",{parentName:"p"},"fromHubWithShutdown")," variant that shuts down the hub itself when the stream ends. This is useful when the stream represents your main application logic and you want to shut down other subscriptions to the hub when the stream ends."),(0,r.kt)("p",null,"Each of these constructors also has ",(0,r.kt)("inlineCode",{parentName:"p"},"Chunk")," variants, ",(0,r.kt)("inlineCode",{parentName:"p"},"fromChunkHub")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"fromChunkHubWithShutdown"),", that allow you to preserve the chunked structure of data when working with hubs and streams."),(0,r.kt)("p",null,"In addition to being able to create streams from subscriptions to hubs, there are a variety of ways to send values emitted by streams to hubs to build more complex data flow graphs."),(0,r.kt)("p",null,"The simplest of these is the ",(0,r.kt)("inlineCode",{parentName:"p"},"toHub")," operator, which constructs a new hub and publishes each element emitted by the stream to that hub."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZStream[-R, +E, +O] {\n  def toHub[E1 >: E, O1 >: O](\n    capacity: Int\n  ): ZIO[R with Scope, Nothing, Hub[Take[E1, O1]]]\n}\n")),(0,r.kt)("p",null,"The hub will be constructed with the ",(0,r.kt)("inlineCode",{parentName:"p"},"bounded")," constructor using the specified capacity."),(0,r.kt)("p",null,"If you want to send values emitted by a stream to an existing hub or a hub created using one of the other hub constructors you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"intoHub")," operator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZStream[-R, +E, +O] {\n  def intoHub[E1 >: E, O1 >: O](\n    hub: Hub[Take[E1, O1]]\n  ): ZIO[R, E1, Unit]\n}\n")),(0,r.kt)("p",null,"There is an ",(0,r.kt)("inlineCode",{parentName:"p"},"intoHubScoped")," variant of this if you want to send values to the hub in the context of a ",(0,r.kt)("inlineCode",{parentName:"p"},"Scope"),"."),(0,r.kt)("p",null,"Here is the example above adapted to publish values from a stream to the hub:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'for {\n  promise <- Promise.make[Nothing, Unit]\n  hub     <- Hub.bounded[Take[Nothing, String]](2)\n  scoped  = ZStream.fromHubScoped(hub).tap(_ => promise.succeed(()))\n  stream   = ZStream.unwrapScoped(scoped).flattenTake\n  fiber   <- stream.take(2).runCollect.fork\n  _       <- promise.await\n  _       <- ZStream("Hello", "World").runIntoHub(hub)\n  _       <- fiber.join\n} yield ()\n')),(0,r.kt)("p",null,"Notice that we created a ",(0,r.kt)("inlineCode",{parentName:"p"},"Hub")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"Take")," values this time. ",(0,r.kt)("inlineCode",{parentName:"p"},"Take")," is an algebraic data type that represents the different potential results of pulling from a stream, including the stream emitting a chunk of values, failing with an error, or being done."),(0,r.kt)("p",null,"Here we automatically unwrapped the ",(0,r.kt)("inlineCode",{parentName:"p"},"Take")," values using the ",(0,r.kt)("inlineCode",{parentName:"p"},"flattenTake")," operator on ",(0,r.kt)("inlineCode",{parentName:"p"},"ZStream"),". In other cases where the subscriber was not a ",(0,r.kt)("inlineCode",{parentName:"p"},"ZStream")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"Take")," value would allow the subscriber to observe whether the stream had emitted a value, failed with an error, or ended, and handle it appropriately."),(0,r.kt)("p",null,"You can also create a sink that sends values to a hub."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"object ZSink {\n  def fromHub[I](\n    hub: Hub[I]\n  ): ZSink[Any, Nothing, I, Nothing, Unit] =\n    ???\n}\n")),(0,r.kt)("p",null,"The sink will publish each value sent to the sink to the specified hub. Again there is a ",(0,r.kt)("inlineCode",{parentName:"p"},"fromHubWithShutdown")," variant that will shut down the hub when the stream ends."),(0,r.kt)("p",null,"Finally, ",(0,r.kt)("inlineCode",{parentName:"p"},"Hub")," is used internally to provide a highly efficient implementation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"broadcast")," family of operators, including ",(0,r.kt)("inlineCode",{parentName:"p"},"broadcast")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"broadcastDynamic"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZStream[-R, +E, +O] {\n  def broadcast(\n    n: Int,\n    maximumLag: Int\n  ): ZIO[R with Scope, Nothing, List[ZStream[Any, E, O]]]\n  def broadcastDynamic(\n    maximumLag: Int\n  ): ZIO[R with Scope, Nothing, ZIO[Scope, Nothing, ZStream[Any, E, O]]]\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"broadcast")," operator generates the specified number of new streams and broadcasts each value from the original stream to each of the new streams. The ",(0,r.kt)("inlineCode",{parentName:"p"},"broadcastDynamic")," operator returns a new ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," value that you can use to dynamically subscribe and unsubscribe to receive values broadcast from the original stream."),(0,r.kt)("p",null,"You don't have to do anything with ",(0,r.kt)("inlineCode",{parentName:"p"},"Hub")," to take advantage of these operators other than enjoy their optimized implementation in terms of ",(0,r.kt)("inlineCode",{parentName:"p"},"Hub"),"."),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"broadcast")," and other ",(0,r.kt)("inlineCode",{parentName:"p"},"ZStream")," operators that model distributing values to different streams and combining values from different streams it is straightforward to build complex data flow graphs, all while being as performant as possible."))}h.isMDXComponent=!0}}]);