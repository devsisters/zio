"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[38103],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},68499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={id:"index",title:"Getting Started with ZIO Json",sidebar_label:"Getting Started"},i=void 0,s={unversionedId:"zio-json/index",id:"zio-json/index",title:"Getting Started with ZIO Json",description:"ZIO Json is a fast and secure JSON library with tight ZIO integration.",source:"@site/docs/zio-json/index.md",sourceDirName:"zio-json",slug:"/zio-json/",permalink:"/zio-json/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-json/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Getting Started with ZIO Json",sidebar_label:"Getting Started"},sidebar:"ecosystem-sidebar",previous:{title:"Getting Started",permalink:"/zio-jdbc/getting-started"},next:{title:"Getting Started",permalink:"/zio-json/"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Example",id:"example",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-json"},"ZIO Json")," is a fast and secure JSON library with tight ZIO integration."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/zio/zio/wiki/Project-Stages"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Project%20Stage-Production%20Ready-brightgreen.svg",alt:"Production Ready"}))," ",(0,r.kt)("img",{parentName:"p",src:"https://github.com/zio/zio-json/workflows/CI/badge.svg",alt:"CI Badge"})," ",(0,r.kt)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/releases/dev/zio/zio-json_2.13/"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/nexus/r/https/oss.sonatype.org/dev.zio/zio-json_2.13.svg?label=Sonatype%20Release",alt:"Sonatype Releases"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/snapshots/dev/zio/zio-json_2.13/"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/nexus/s/https/oss.sonatype.org/dev.zio/zio-json_2.13.svg?label=Sonatype%20Snapshot",alt:"Sonatype Snapshots"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://javadoc.io/doc/dev.zio/zio-json-docs_2.13"},(0,r.kt)("img",{parentName:"a",src:"https://javadoc.io/badge2/dev.zio/zio-json-docs_2.13/javadoc.svg",alt:"javadoc"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-json"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/zio/zio-json?style=social",alt:"ZIO JSON"}))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The goal of this project is to create the best all-round JSON library for Scala:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Performance")," to handle more requests per second than the incumbents, i.e. reduced operational costs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Security")," to mitigate against adversarial JSON payloads that threaten the capacity of the server."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fast Compilation")," no shapeless, no type astronautics."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Future-Proof"),", prepared for Scala 3 and next-generation Java."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Simple")," small codebase, concise documentation that covers everything."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Helpful errors")," are readable by humans and machines."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ZIO Integration")," so nothing more is required.")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"In order to use this library, we need to add the following line in our ",(0,r.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-json" % "0.5.0"\n')),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Let's try a simple example of encoding and decoding JSON using ZIO JSON."),(0,r.kt)("p",null,"All the following code snippets assume that the following imports have been declared"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.json._\n")),(0,r.kt)("p",null,"Say we want to be able to read some JSON like"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"curvature":0.5}\n')),(0,r.kt)("p",null,"into a Scala ",(0,r.kt)("inlineCode",{parentName:"p"},"case class")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"case class Banana(curvature: Double)\n")),(0,r.kt)("p",null,"To do this, we create an ",(0,r.kt)("em",{parentName:"p"},"instance")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonDecoder")," typeclass for ",(0,r.kt)("inlineCode",{parentName:"p"},"Banana")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"zio-json")," code generator. It is best practice to put it on the companion of ",(0,r.kt)("inlineCode",{parentName:"p"},"Banana"),", like so"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"object Banana {\n  implicit val decoder: JsonDecoder[Banana] = DeriveJsonDecoder.gen[Banana]\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: If you\u2019re using Scala 3 and your case class is defining default parameters, ",(0,r.kt)("inlineCode",{parentName:"em"},"-Yretain-trees")," needs to be added to ",(0,r.kt)("inlineCode",{parentName:"em"},"scalacOptions"),".")),(0,r.kt)("p",null,"Now we can parse JSON into our object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'scala> """{"curvature":0.5}""".fromJson[Banana]\nval res: Either[String, Banana] = Right(Banana(0.5))\n')),(0,r.kt)("p",null,"Likewise, to produce JSON from our data we define a ",(0,r.kt)("inlineCode",{parentName:"p"},"JsonEncoder")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'object Banana {\n  ...\n  implicit val encoder: JsonEncoder[Banana] = DeriveJsonEncoder.gen[Banana]\n}\n\nscala> Banana(0.5).toJson\nval res: String = {"curvature":0.5}\n\nscala> Banana(0.5).toJsonPretty\nval res: String =\n{\n  "curvature" : 0.5\n}\n')),(0,r.kt)("p",null,"And bad JSON will produce an error in ",(0,r.kt)("inlineCode",{parentName:"p"},"jq")," syntax with an additional piece of contextual information (in parentheses)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'scala> """{"curvature": womp}""".fromJson[Banana]\nval res: Either[String, Banana] = Left(.curvature(expected a number, got w))\n')),(0,r.kt)("p",null,"Say we extend our data model to include more data types"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"sealed trait Fruit\ncase class Banana(curvature: Double) extends Fruit\ncase class Apple (poison: Boolean)   extends Fruit\n")),(0,r.kt)("p",null,"we can generate the encoder and decoder for the entire ",(0,r.kt)("inlineCode",{parentName:"p"},"sealed")," family"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"object Fruit {\n  implicit val decoder: JsonDecoder[Fruit] = DeriveJsonDecoder.gen[Fruit]\n  implicit val encoder: JsonEncoder[Fruit] = DeriveJsonEncoder.gen[Fruit]\n}\n")),(0,r.kt)("p",null,"allowing us to load the fruit based on a single field type tag in the JSON"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'scala> """{"Banana":{"curvature":0.5}}""".fromJson[Fruit]\nval res: Either[String, Fruit] = Right(Banana(0.5))\n\nscala> """{"Apple":{"poison":false}}""".fromJson[Fruit]\nval res: Either[String, Fruit] = Right(Apple(false))\n')),(0,r.kt)("p",null,"Almost all of the standard library data types are supported as fields on the case class, and it is easy to add support if one is missing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.json._\n\nsealed trait Fruit                   extends Product with Serializable\ncase class Banana(curvature: Double) extends Fruit\ncase class Apple(poison: Boolean)    extends Fruit\n\nobject Fruit {\n  implicit val decoder: JsonDecoder[Fruit] =\n    DeriveJsonDecoder.gen[Fruit]\n\n  implicit val encoder: JsonEncoder[Fruit] =\n    DeriveJsonEncoder.gen[Fruit]\n}\n\nval json1         = """{ "Banana":{ "curvature":0.5 }}"""\nval json2         = """{ "Apple": { "poison": false }}"""\nval malformedJson = """{ "Banana":{ "curvature": true }}"""\n\njson1.fromJson[Fruit]\njson2.fromJson[Fruit]\nmalformedJson.fromJson[Fruit]\n\nList(Apple(false), Banana(0.4)).toJsonPretty\n')),(0,r.kt)("h1",{id:"how"},"How"),(0,r.kt)("p",null,"Extreme ",(0,r.kt)("strong",{parentName:"p"},"performance")," is achieved by decoding JSON directly from the input source into business objects (inspired by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/plokhotnyuk/jsoniter-scala"},"plokhotnyuk"),"). Although not a requirement, the latest advances in ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.openjdk.java.net/display/loom/Main"},"Java Loom")," can be used to support arbitrarily large payloads with near-zero overhead."),(0,r.kt)("p",null,"Best in class ",(0,r.kt)("strong",{parentName:"p"},"security")," is achieved with an aggressive ",(0,r.kt)("em",{parentName:"p"},"early exit")," strategy that avoids costly stack traces, even when parsing malformed numbers. Malicious (and badly formed) payloads are rejected before finishing reading."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fast compilation")," and ",(0,r.kt)("strong",{parentName:"p"},"future-proofing")," is possible thanks to ",(0,r.kt)("a",{parentName:"p",href:"https://propensive.com/opensource/magnolia/"},"Magnolia")," which allows us to generate boilerplate in a way that will survive the exodus to Scala 3. ",(0,r.kt)("inlineCode",{parentName:"p"},"zio-json")," is internally implemented using a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/io/Reader.html"},(0,r.kt)("inlineCode",{parentName:"a"},"java.io.Reader"))," / ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/14/docs/api/java.base/java/io/Writer.html"},(0,r.kt)("inlineCode",{parentName:"a"},"java.io.Writer")),"-like interface, which is making a comeback to center stage in Loom."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Simplicity")," is achieved by using well-known software patterns and avoiding bloat. The only requirement to use this library is to know about Scala's encoding of typeclasses, described in ",(0,r.kt)("a",{parentName:"p",href:"https://leanpub.com/fpmortals/read#leanpub-auto-functionality"},"Functional Programming for Mortals"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Helpful errors")," are produced in the form of a ",(0,r.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},(0,r.kt)("inlineCode",{parentName:"a"},"jq"))," query, with a note about what went wrong, pointing to the exact part of the payload that failed to parse."))}u.isMDXComponent=!0}}]);