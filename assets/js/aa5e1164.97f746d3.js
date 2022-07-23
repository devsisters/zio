"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[2585],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return a?r.createElement(h,s(s({ref:t},c),{},{components:a})):r.createElement(h,s({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var u=2;u<i;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9470:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const i={id:"histogram",title:"Histogram"},s=void 0,o={unversionedId:"reference/metrics/histogram",id:"reference/metrics/histogram",title:"Histogram",description:"A Histogram is a metric representing a collection of numerical with the distribution of the cumulative values over time. A typical use of this metric would be to track the time to serve requests.",source:"@site/docs/reference/metrics/histogram.md",sourceDirName:"reference/metrics",slug:"/reference/metrics/histogram",permalink:"/reference/metrics/histogram",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/metrics/histogram.md",tags:[],version:"current",frontMatter:{id:"histogram",title:"Histogram"},sidebar:"reference-sidebar",previous:{title:"Gauge",permalink:"/reference/metrics/gauge"},next:{title:"Summary",permalink:"/reference/metrics/summary"}},l={},u=[{value:"Internals",id:"internals",level:2},{value:"API",id:"api",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"Examples",id:"examples",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A ",(0,n.kt)("inlineCode",{parentName:"p"},"Histogram")," is a metric representing a collection of numerical with the distribution of the cumulative values over time. A typical use of this metric would be to track the time to serve requests."),(0,n.kt)("p",null,"Histograms allow visualizing not only the value of the quantity being measured but its distribution. ",(0,n.kt)("strong",{parentName:"p"},"Histograms are constructed with user-specified boundaries which describe the buckets to aggregate values into"),"."),(0,n.kt)("h2",{id:"internals"},"Internals"),(0,n.kt)("p",null,"In a histogram, we assign the incoming samples to pre-defined buckets. So each data point increases the count for the bucket that it falls into, and then the individual samples are discarded. As histograms are bucketed, we can aggregate data across multiple instances. Histograms are a typical way to measure percentiles. We can look at bucket counts to estimate a specific percentile."),(0,n.kt)("p",null,"A histogram observes ",(0,n.kt)("em",{parentName:"p"},"Double")," values and counts the observed values in buckets. Each bucket is defined by an upper boundary, and the count for a bucket with the upper boundary ",(0,n.kt)("inlineCode",{parentName:"p"},"b")," increases by ",(0,n.kt)("inlineCode",{parentName:"p"},"1")," if an observed value ",(0,n.kt)("inlineCode",{parentName:"p"},"v")," is less or\nequal to ",(0,n.kt)("inlineCode",{parentName:"p"},"b"),"."),(0,n.kt)("p",null,"As a consequence, all buckets that have a boundary ",(0,n.kt)("inlineCode",{parentName:"p"},"b1")," with b1 > b will increase by ",(0,n.kt)("inlineCode",{parentName:"p"},"1")," after observing ",(0,n.kt)("inlineCode",{parentName:"p"},"v"),"."),(0,n.kt)("p",null,"A histogram also keeps track of the overall count of observed values, and the sum of all observed values."),(0,n.kt)("p",null,"By definition, the last bucket is always defined as ",(0,n.kt)("inlineCode",{parentName:"p"},"Double.MaxValue"),", so that the count of observed values in the last bucket is always equal to the overall count of observed values within the histogram."),(0,n.kt)("p",null,"The mental model for histogram is inspired from ",(0,n.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/concepts/metric_types/#histogram"},"Prometheus"),"."),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("p",null,"TODO"),(0,n.kt)("h2",{id:"use-cases"},"Use Cases"),(0,n.kt)("p",null,"Histogram measures the frequency of value observations that fall into specific ",(0,n.kt)("em",{parentName:"p"},"pre-defined buckets"),". For example, we can measure the request duration of an HTTP request using histograms. Rather than storing every duration for every request, the histogram will make an approximation by storing the frequency of requests that fall into pre-defined particular buckets."),(0,n.kt)("p",null,"Thus, histograms are the best choice in these situations:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"When we want to observe many values and then later want to calculate the percentile of observed values"),(0,n.kt)("li",{parentName:"ul"},"When we can estimate the range of values upfront, as the histogram put the observations into pre-defined buckets"),(0,n.kt)("li",{parentName:"ul"},"When accuracy is not so important, and we don't want the exact values because of the lossy nature of bucketing data in histograms"),(0,n.kt)("li",{parentName:"ul"},"When we need to aggregate histograms across multiple instances")),(0,n.kt)("p",null,"Some examples of histogram use cases:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Request Latency"),(0,n.kt)("li",{parentName:"ul"},"Response Time")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Create a histogram with 12 buckets: ",(0,n.kt)("inlineCode",{parentName:"p"},"0..100")," in steps of ",(0,n.kt)("inlineCode",{parentName:"p"},"10")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Double.MaxValue"),". It can be applied to effects yielding a ",(0,n.kt)("inlineCode",{parentName:"p"},"Double"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"TODO\n")),(0,n.kt)("p",null,"Now we can apply the histogram to effects producing ",(0,n.kt)("inlineCode",{parentName:"p"},"Double"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"TODO\n")))}p.isMDXComponent=!0}}]);