"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8349],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7780:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={title:"Introduction"},c=void 0,s={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"oclif is a framework for building CLIs in Node. It can be used like a simple flag parser but is capable of much more. It's designed to be extensible so that you can easily add plugins such as the update warning plugin or build your own for users to install at runtime.",source:"@site/../docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/docs/introduction",draft:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/introduction.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1691080055,formattedLastUpdatedAt:"Aug 3, 2023",frontMatter:{title:"Introduction"},sidebar:"docs",next:{title:"Features",permalink:"/docs/features"}},u={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Quickstart",id:"quickstart",level:2}],d={toc:p},f="wrapper";function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"oclif is a framework for building CLIs in Node. It can be used like a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oclif/core#usage"},"simple flag parser")," but is capable of much more. It's designed to be extensible so that you can easily add plugins such as the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oclif/plugin-warn-if-update-available"},"update warning plugin")," or build your own for users to install at runtime."),(0,a.kt)("p",null,"The oclif generator creates a CLI project in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oclif/hello-world"},"TypeScript")," to get you started quickly. It requires very few runtime dependencies and has extremely minimal overhead."),(0,a.kt)("p",null,"Everything is customizable in oclif. Even the flag parser and help generation is optional and can be replaced. It's a platform to build upon that provides smart defaults without locking you in to any specific tools or behavior."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"Only ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/about/releases/"},"LTS Node versions")," are supported. You can add the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/node"},"node")," package to your CLI to ensure users are on a specific Node version."),(0,a.kt)("h2",{id:"quickstart"},"Quickstart"),(0,a.kt)("p",null,"Creating a CLI:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh-session"},"$ npx oclif generate mynewcli\n? npm package name (mynewcli): mynewcli\n$ cd mynewcli\n$ ./bin/dev hello world\nhello world! (./src/commands/hello/world.ts)\n")))}m.isMDXComponent=!0}}]);