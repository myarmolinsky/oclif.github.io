"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5125],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?o.createElement(f,r(r({ref:t},p),{},{components:n})):o.createElement(f,r({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],l={title:"Hooks"},s=void 0,c={unversionedId:"hooks",id:"hooks",title:"Hooks",description:"oclif exposes lifecycle event hooks such as init and commandnotfound. See below for a list of all the lifecycle events. In addition to these built-in events, you can create your own events and allow commands/plugins to watch for these custom events. It's a great way to allow multiple plugins to interact with each other.",source:"@site/../docs/hooks.md",sourceDirName:".",slug:"/hooks",permalink:"/docs/hooks",draft:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/hooks.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1691678106,formattedLastUpdatedAt:"Aug 10, 2023",frontMatter:{title:"Hooks"},sidebar:"docs",previous:{title:"Topic Separators",permalink:"/docs/topic_separator"},next:{title:"Plugins",permalink:"/docs/plugins"}},p={},u=[{value:"Lifecycle Events",id:"lifecycle-events",level:2},{value:"Custom Events",id:"custom-events",level:2}],m={toc:u},d="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)(d,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"oclif exposes lifecycle event hooks such as ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"command_not_found"),". ",(0,i.kt)("a",{parentName:"p",href:"#lifecycle-events"},"See below for a list of all the lifecycle events"),". In addition to these built-in events, you can create your own events and allow commands/plugins to watch for these custom events. It's a great way to allow multiple plugins to interact with each other."),(0,i.kt)("p",null,"Multiple hooks are run in parallel. ",(0,i.kt)("strong",{parentName:"p"},"This behavior may change in a future release.")),(0,i.kt)("p",null,"A basic hook looks like the following in TypeScript:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import {Hook} from '@oclif/core'\n\nconst hook: Hook<'init'> = async function (options) {\n  console.log(`example init hook running before ${options.id}`)\n}\n\nexport default hook\n")),(0,i.kt)("p",null,"The hook must also be declared with the event's name and hook's file path under oclif's settings in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'  "oclif": {\n    "commands": "./lib/commands",\n    "hooks": {\n      "init": "./lib/hooks/init/example"\n    }\n  }\n')),(0,i.kt)("p",null,"Multiple hooks of the same event type can be declared with an array."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'  "oclif": {\n    "commands": "./lib/commands",\n    "hooks": {\n      "init": [\n        "./lib/hooks/init/example",\n        "./lib/hooks/init/another_hook"\n      ]\n    }\n  }\n')),(0,i.kt)("p",null,"You can create hooks with ",(0,i.kt)("inlineCode",{parentName:"p"},"oclif generate hook myhook --event=init"),"."),(0,i.kt)("h2",{id:"lifecycle-events"},"Lifecycle Events"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"init")," - runs when the CLI is initialized before a command is found to run"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prerun")," - runs after ",(0,i.kt)("inlineCode",{parentName:"li"},"init")," and after the command is found, but just before running the command itself"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"postrun")," - runs after the command only if the command finishes with no error"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"command_not_found")," - runs if a command is not found before the error is displayed")),(0,i.kt)("h2",{id:"custom-events"},"Custom Events"),(0,i.kt)("p",null,"Custom events are just like lifecycle events, but you need to call ",(0,i.kt)("inlineCode",{parentName:"p"},"this.config.runHook()")," to fire the event."),(0,i.kt)("p",null,"For example, you could define an analytics post function that you will run in your command after submitting analytics telemetry. First define:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"src/hooks/analytics/post.ts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const hook = async function (options: {id: string}) {\n  // code to post options.id to analytics server\n}\n\nexport default hook\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"package.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'  "oclif": {\n    "commands": "./lib/commands",\n    "hooks": {\n      "analytics": "./lib/hooks/analytics/post"\n    },\n  },\n')),(0,i.kt)("p",null,"Then in any command you want to trigger the event:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export class extends Command {\n  async run() {\n    // emit analytics\n    await this.config.runHook('analytics', {id: 'my_command'})\n  }\n}\n")),(0,i.kt)("p",null,"If you need to exit during a hook, use ",(0,i.kt)("inlineCode",{parentName:"p"},"this.error()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"this.exit()"),". Otherwise the hook will just emit a warning. This is to prevent an issue such as a plugin failing in ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," causing the entire CLI to not function."))}f.isMDXComponent=!0}}]);