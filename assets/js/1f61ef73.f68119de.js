"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5082],{492:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var o=r(4848),t=r(8453);const c={title:"Error Handling"},s=void 0,i={id:"error_handling",title:"Error Handling",description:"oclif handles intentionally - and unintentionally - thrown errors in two places. First in the Command.catch method and then, finally, in the bin/run.js catch handler where the Error is printed and the CLI exits. This error flow makes it possible for you to control and respond to errors that occur in your CLI as you see fit.",source:"@site/../docs/error_handling.md",sourceDirName:".",slug:"/error_handling",permalink:"/docs/error_handling",draft:!1,unlisted:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/error_handling.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1711648030,formattedLastUpdatedAt:"Mar 28, 2024",frontMatter:{title:"Error Handling"},sidebar:"docs",previous:{title:"Help Classes",permalink:"/docs/help_classes"},next:{title:"JSON",permalink:"/docs/json"}},a={},d=[{value:"Error Handling in the <code>catch</code> method",id:"error-handling-in-the-catch-method",level:2},{value:"bin/run.js <code>catch</code> handler",id:"binrunjs-catch-handler",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["oclif handles intentionally - and unintentionally - thrown errors in two places. First in the ",(0,o.jsx)(n.code,{children:"Command.catch"})," method and then, finally, in the ",(0,o.jsx)(n.code,{children:"bin/run.js"})," ",(0,o.jsx)(n.code,{children:"catch"})," handler where the Error is printed and the CLI exits. This error flow makes it possible for you to control and respond to errors that occur in your CLI as you see fit."]}),"\n",(0,o.jsxs)(n.h2,{id:"error-handling-in-the-catch-method",children:["Error Handling in the ",(0,o.jsx)(n.code,{children:"catch"})," method"]}),"\n",(0,o.jsxs)(n.p,{children:["Every ",(0,o.jsx)(n.code,{children:"Command"})," instance has a ",(0,o.jsx)(n.code,{children:"catch"})," method that is called when an error occurs throughout the course of a command run. This method handles the edge case of users asking for help or version output, if applicable, otherwise, it re-throws the error. You can extend or overwrite the ",(0,o.jsx)(n.code,{children:"catch"})," method in your command class."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import {Command, flags} from '@oclif/core'\n\nexport default class Hello extends Command {\n  async catch(error) {\n    // do something or\n    // re-throw to be handled globally\n    throw error;\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If this type of error handling is being implemented across multiple commands consider using a ",(0,o.jsx)(n.a,{href:"/docs/base_class",children:"Custom Base Class"})," for your commands and overriding the ",(0,o.jsx)(n.code,{children:"catch"})," method."]}),"\n",(0,o.jsxs)(n.h2,{id:"binrunjs-catch-handler",children:["bin/run.js ",(0,o.jsx)(n.code,{children:"catch"})," handler"]}),"\n",(0,o.jsxs)(n.p,{children:["Every oclif CLI has a ",(0,o.jsx)(n.code,{children:"./bin/run.js"})," file that is the entry point of command invocation. Errors that occur in the CLI, including re-thrown errors from a Command, are caught and handled by oclif's ",(0,o.jsx)(n.code,{children:"handle"})," function, which displays the error to the user."]}),"\n",(0,o.jsxs)(n.p,{children:["If you generated your CLI using ",(0,o.jsx)(n.code,{children:"oclif generate"}),", then you will see an ",(0,o.jsx)(n.code,{children:"execute"})," function that's responsible for running the CLI and catching any errors. You can, however, implement this yourself if you need to customize the error handling."]}),"\n",(0,o.jsxs)(n.p,{children:["Here's the generic ",(0,o.jsx)(n.code,{children:"bin/run.js"})," that comes with ",(0,o.jsx)(n.code,{children:"oclif generate"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"#!/usr/bin/env node\n\nimport {execute} from '@oclif/core'\n\nawait execute({dir: import.meta.url})\n"})}),"\n",(0,o.jsxs)(n.p,{children:["To customize error handling, you'll want to use oclif's ",(0,o.jsx)(n.code,{children:"run"})," function instead of ",(0,o.jsx)(n.code,{children:"execute"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"#!/usr/bin/env node\n\nimport {run, handle, flush} from '@oclif/core'\n\nawait run(process.argv.slice(2), import.meta.url)\n  .catch(async (error) => handle(error))\n  .finally(async () => flush())\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"catch"})," handler can be swapped for any function that receives an error argument. If you chose to implement your own handler here, we still recommend you delegate finally to the ",(0,o.jsx)(n.code,{children:"handle"})," function for clean-up and exiting logic."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:".catch((error) => {\n  // do any extra work with error\n  return handle(error);\n})\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>i});var o=r(6540);const t={},c=o.createContext(t);function s(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);