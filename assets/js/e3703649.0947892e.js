"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5679],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=o.createContext({}),i=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=i(e.components);return o.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=i(n),h=l,u=m["".concat(p,".").concat(h)]||m[h]||d[h]||a;return n?o.createElement(u,r(r({ref:t},c),{},{components:n})):o.createElement(u,r({ref:t},c))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:l,r[1]=s;for(var i=2;i<a;i++)r[i]=n[i];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1700:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var o=n(7462),l=n(3366),a=(n(7294),n(3905)),r=["components"],s={title:"Help Classes"},p=void 0,i={unversionedId:"help_classes",id:"help_classes",title:"Help Classes",description:"Out of the box oclif provides a great help experience for CLIs. Users can invoke help with the --help flag.",source:"@site/../docs/help_classes.md",sourceDirName:".",slug:"/help_classes",permalink:"/docs/help_classes",draft:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/help_classes.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1691080055,formattedLastUpdatedAt:"Aug 3, 2023",frontMatter:{title:"Help Classes"},sidebar:"docs",previous:{title:"Plugins",permalink:"/docs/plugins"},next:{title:"Error Handling",permalink:"/docs/error_handling"}},c={},m=[{value:"Custom Help",id:"custom-help",level:2},{value:"Extending the <code>HelpBase</code> class",id:"extending-the-helpbase-class",level:2},{value:"Extending the default <code>Help</code> class",id:"extending-the-default-help-class",level:2},{value:"Building custom help classes in JavaScript projects",id:"building-custom-help-classes-in-javascript-projects",level:2}],d={toc:m},h="wrapper";function u(e){var t=e.components,n=(0,l.Z)(e,r);return(0,a.kt)(h,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Out of the box oclif provides a great help experience for CLIs. Users can invoke help with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--help")," flag."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ my-cli login --help\n")),(0,a.kt)("p",null,"If you want your CLI to have an explicit ",(0,a.kt)("inlineCode",{parentName:"p"},"help")," command, add ",(0,a.kt)("inlineCode",{parentName:"p"},"@oclif/plugin-help")," as an ",(0,a.kt)("a",{parentName:"p",href:"/docs/plugins"},"oclif plugin in your config"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ my-cli help\n")),(0,a.kt)("h2",{id:"custom-help"},"Custom Help"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ yarn add @oclif/core --latest\n")),(0,a.kt)("p",null,"To get started, first define the filepath to your help class in oclif's config in package.json. This is a relative path to the help class, without a file extension."),(0,a.kt)("p",null,'For this example, the help class will be created in a file at "',"[project root]",'/src/help.ts".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  // ...\n  "oclif": {\n    "helpClass": "./lib/help"\n    // ...\n  }\n  // ...\n}\n')),(0,a.kt)("p",null,"From here there are two paths, implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"HelpBase")," abstract class yourself or overwrite the parts of the default ",(0,a.kt)("inlineCode",{parentName:"p"},"Help")," class you want to customize (ex: how command usage is displayed). We recommend the latter approach but cover both below."),(0,a.kt)("h2",{id:"extending-the-helpbase-class"},"Extending the ",(0,a.kt)("inlineCode",{parentName:"h2"},"HelpBase")," class"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"HelpBase")," abstract class provides a starting point requiring the minimum needed methods implemented to be compatible with oclif."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-TypeScript"},"import {Command, HelpBase} from '@oclif/core';\n\nexport default class CustomHelp extends HelpBase {\n  showHelp(args: string[]) {\n    console.log('This will be displayed in multi-command CLIs')\n  }\n\n  showCommandHelp(command: Command) {\n    console.log('This will be displayed in single-command CLIs')\n  }\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"showHelp")," method is called by oclif to display help in multi-command CLIs, while ",(0,a.kt)("inlineCode",{parentName:"p"},"showCommandHelp")," is called directly for single-command CLIs."),(0,a.kt)("p",null,"The class is instantiated with a ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," property that provides helpful context for constructing your custom output."),(0,a.kt)("p",null,"To see an example of what is possible take a look at the source code for the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oclif/core/blob/main/src/help/index.ts"},"default ",(0,a.kt)("inlineCode",{parentName:"a"},"Help")," class exported from @oclif/core"),"."),(0,a.kt)("h2",{id:"extending-the-default-help-class"},"Extending the default ",(0,a.kt)("inlineCode",{parentName:"h2"},"Help")," class"),(0,a.kt)("p",null,"The default ",(0,a.kt)("inlineCode",{parentName:"p"},"Help")," class provides many method \u201chooks\u201d that make it easy to override the particular parts of help's output you want to customize."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-TypeScript"},"import {Command, Help, Topic} from '@oclif/core';\n\nexport default class MyHelpClass extends Help {\n  // acts as a \"router\"\n  // and based on the args it receives\n  // calls one of showRootHelp, showTopicHelp,\n  // or showCommandHelp\n  showHelp(args: string[]): void {\n  }\n\n  // display the root help of a CLI\n  showRootHelp(): void {\n  }\n\n  // display help for a topic\n  showTopicHelp(topic: Topic): void {\n  }\n\n  // display help for a command\n  showCommandHelp(command: Command): void {\n  }\n\n  // the default implementations of showRootHelp\n  // showTopicHelp and showCommandHelp\n  // will call various format methods that\n  // provide the formatting for their corresponding\n  // help sections;\n  // these can be overwritten as well\n\n  // the formatting responsible for the header\n  // displayed for the root help\n  formatRoot(): string {\n  }\n\n  // the formatting for an individual topic\n  formatTopic(topic: Config.Topic): string {\n  }\n\n  // the formatting for a list of topics\n  protected formatTopics(topics: Config.Topic[]): string {\n  }\n\n  // the formatting for a list of commands\n  formatCommands(commands: Config.Command[]): string {\n  }\n\n  // the formatting for an individual command\n  formatCommand(command: Config.Command): string {\n  }\n}\n")),(0,a.kt)("p",null,"To see the default implementation of these methods take a look at the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oclif/core/blob/main/src/help/index.ts"},"default ",(0,a.kt)("inlineCode",{parentName:"a"},"Help")," class exported from @oclif/core"),"."),(0,a.kt)("p",null,"To start experimenting, define ",(0,a.kt)("inlineCode",{parentName:"p"},"showCommandHelp")," in your custom help class and change the output."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-TypeScript"},"import {Command, Help, Topic} from '@oclif/core';\n\nexport default class MyHelpClass extends Help {\n  public showCommandHelp(command: Config.Command) {\n    console.log('Display my custom command help!')\n  }\n}\n")),(0,a.kt)("p",null,"Then run help for any command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ my-cli login --help\nDisplay my custom command help!\n")),(0,a.kt)("h2",{id:"building-custom-help-classes-in-javascript-projects"},"Building custom help classes in JavaScript projects"),(0,a.kt)("p",null,'These examples above followed a TypeScript project. For  JavaScript project with an example help file at "',"[project root]",'/src/help.js" would have a package.json with the ',(0,a.kt)("inlineCode",{parentName:"p"},"helpClass")," defined:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  // ...\n  "oclif": {\n    "helpClass": "./src/help"\n    // ...\n  }\n  // ...\n}\n')),(0,a.kt)("p",null,"The imports are handled slightly different for JavaScript projects but the rest of the help class mimic the TypeScript examples above, except without type annotations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const {HelpBase} = require('@oclif/core');\n\nmodule.exports = class MyHelpClass extends HelpBase {\n  showHelp(args) {\n    console.log('This will be displayed in multi-command CLIs')\n  }\n\n  showCommandHelp(command) {\n    console.log('This will be displayed for a single command')\n  }\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const {Help} = require('@oclif/core');\n\nmodule.exports = class MyHelpClass extends Help {\n  showHelp(args) {\n  }\n\n  showRootHelp() {\n  }\n\n  showTopicHelp(topic) {\n  }\n\n  showCommandHelp(command) {\n  }\n\n  formatRoot() {\n  }\n\n  formatTopic(topic) {\n  }\n\n  formatTopics(topics) {\n  }\n\n  formatCommands(commands) {\n  }\n\n  formatCommand(command) {\n  }\n}\n")))}u.isMDXComponent=!0}}]);