"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5990],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=i.createContext({}),p=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,f=c["".concat(u,".").concat(d)]||c[d]||m[d]||l;return n?i.createElement(f,a(a({ref:t},s),{},{components:n})):i.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r[c]="string"==typeof e?e:o,a[1]=r;for(var p=2;p<l;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8101:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>f,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var i=n(7462),o=n(3366),l=(n(7294),n(3905)),a=["components"],r={title:"Plugins"},u=void 0,p={unversionedId:"plugins",id:"plugins",title:"Plugins",description:"Plugins are a great way to offer experimental functionality, allow users to extend your CLI, break up a CLI into modular components, or share functionality between CLIs.",source:"@site/../docs/plugins.md",sourceDirName:".",slug:"/plugins",permalink:"/docs/plugins",draft:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/plugins.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1691080055,formattedLastUpdatedAt:"Aug 3, 2023",frontMatter:{title:"Plugins"},sidebar:"docs",previous:{title:"Hooks",permalink:"/docs/hooks"},next:{title:"Help Classes",permalink:"/docs/help_classes"}},s={},c=[{value:"Useful Plugins",id:"useful-plugins",level:2},{value:"Community Plugins",id:"community-plugins",level:2},{value:"Building your own plugin",id:"building-your-own-plugin",level:2}],m={toc:c},d="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)(d,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Plugins are a great way to offer experimental functionality, allow users to extend your CLI, break up a CLI into modular components, or share functionality between CLIs."),(0,l.kt)("p",null,"Plugins can have commands or hooks just like a CLI. To add a plugin such as the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/oclif/plugin-not-found"},"not-found plugin")," plugin, first add it to your CLI with ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn add @oclif/plugin-not-found"),", then add the following to your ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "name": "mycli",\n  "version": "0.0.0",\n  // ...\n  "oclif": {\n    "plugins": [\n      "@oclif/plugin-help",\n      "@oclif/plugin-not-found"\n    ]\n  }\n}\n')),(0,l.kt)("p",null,"If you want users to be able to install their own plugins into your CLI, use the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/oclif/plugin-plugins"},"plugins plugin"),"."),(0,l.kt)("h2",{id:"useful-plugins"},"Useful Plugins"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/oclif/plugin-not-found"},"@oclif/plugin-not-found"),' - Display a friendly "did you mean" message if a command is not found.'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/oclif/plugin-plugins"},"@oclif/plugin-plugins")," - Allow users to add plugins to extend your CLI."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/oclif/plugin-update"},"@oclif/plugin-update")," - Add autoupdate support to the CLI."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/oclif/plugin-help"},"@oclif/plugin-help")," - Help plugin for oclif."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/oclif/plugin-warn-if-update-available"},"@oclif/plugin-warn-if-update-available")," - Show a warning message if user is running an out of date CLI."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/oclif/plugin-which"},"@oclif/plugin-which")," - Show which plugin a command comes from."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/oclif/plugin-commands"},"@oclif/plugin-commands")," - Add a ",(0,l.kt)("inlineCode",{parentName:"li"},"commands")," command to list all the commands."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/oclif/plugin-autocomplete"},"@oclif/plugin-autocomplete")," - Add bash/zsh autocomplete.")),(0,l.kt)("h2",{id:"community-plugins"},"Community Plugins"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/natzcam/conf-cli"},"conf-cli")," - Adds a ",(0,l.kt)("inlineCode",{parentName:"li"},"conf")," command to share state/configuration between commands. Uses ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/sindresorhus/conf"},"sindresorhus/conf"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/oclif-dynamic-commands"},"dynamic-commands")," - Load commands dynamically based on commands found under the current working directory."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/oclif/oclif.github.io/blob/docs/docs/plugins.md"},"Add yours here"),"!")),(0,l.kt)("h2",{id:"building-your-own-plugin"},"Building your own plugin"),(0,l.kt)("p",null,"Writing code for plugins is essentially the same as writing within a CLI. They can export 3 different types: commands, hooks, and other plugins."),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"npx oclif generate mynewplugin")," to create a plugin in a new directory. This will come with a sample command called ",(0,l.kt)("inlineCode",{parentName:"p"},"hello"),"."))}f.isMDXComponent=!0}}]);