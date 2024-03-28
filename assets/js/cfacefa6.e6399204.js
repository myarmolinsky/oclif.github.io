"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1460],{4882:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var r=o(4848),s=o(8453);const i={title:"Performance"},l=void 0,c={id:"performance",title:"Performance",description:"oclif supports performance tracking out of the box - both for oclif and you own code. You can enable it in one of two ways depending on how you've implemented your bin scripts.",source:"@site/../docs/performance.md",sourceDirName:".",slug:"/performance",permalink:"/docs/performance",draft:!1,unlisted:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/performance.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1711648030,formattedLastUpdatedAt:"Mar 28, 2024",frontMatter:{title:"Performance"},sidebar:"docs",previous:{title:"JSON",permalink:"/docs/json"},next:{title:"Release",permalink:"/docs/releasing"}},t={},a=[{value:"How to Enable",id:"how-to-enable",level:2},{value:"Accessing oclif-specific performance metrics",id:"accessing-oclif-specific-performance-metrics",level:2},{value:"Using <code>Performance</code> for your code",id:"using-performance-for-your-code",level:2}];function f(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"oclif supports performance tracking out of the box - both for oclif and you own code. You can enable it in one of two ways depending on how you've implemented your bin scripts."}),"\n",(0,r.jsxs)(n.p,{children:["If you're using the bin scripts that come from the generator, you can simply set ",(0,r.jsx)(n.code,{children:"performanceEnabled"})," on the ",(0,r.jsx)(n.code,{children:"settings"})," module:"]}),"\n",(0,r.jsx)(n.h2,{id:"how-to-enable",children:"How to Enable"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"#!/usr/bin/env node\n\nimport {execute, settings} from '@oclif/core'\nsettings.performanceEnabled = true\nawait execute({dir: import.meta.url})\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can also enable it on the ",(0,r.jsx)(n.code,{children:"Config"})," class directly if that works better for your CLI:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import {Config, run} from '@oclif/core'\nimport {fileUrlToPath} from 'node:url'\n\nconst config = await Config.load({\n  root: resolve(fileURLToPath(import.meta.url), '..');,\n  enablePerf: true\n})\n\nawait run(config)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"accessing-oclif-specific-performance-metrics",children:"Accessing oclif-specific performance metrics"}),"\n",(0,r.jsxs)(n.p,{children:["Once performance is enabled, you can see the in the debug output under the ",(0,r.jsx)(n.code,{children:"oclif-perf"})," scope."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"\u276f DEBUG=oclif-perf sf version\n@salesforce/cli/2.35.6 darwin-arm64 node-v20.11.0\n  oclif-perf Process Uptime: 747.6823ms +0ms\n  oclif-perf Oclif Time: 302.1286ms +0ms\n  oclif-perf Init Time: 37.7735ms +0ms\n  oclif-perf Config Load Time: 294.5321ms +0ms\n  oclif-perf   \u2022 Root Plugin Load Time: 11.2781ms +0ms\n  oclif-perf   \u2022 Plugins Load Time: 274.6006ms +0ms\n  oclif-perf   \u2022 Commands Load Time: 6.7736ms +0ms\n  oclif-perf Core Plugin Load Time: 20.9403ms +0ms\n  oclif-perf User Plugin Load Time: 0.0000ms +0ms\n  oclif-perf Linked Plugin Load Time: 2.3124ms +0ms\n  oclif-perf Plugin Load Times: +0ms\n  oclif-perf   oclif-hello-world: 239.1951ms (no manifest!) +0ms\n  oclif-perf   @oclif/plugin-update: 18.8549ms +0ms\n  oclif-perf   @oclif/plugin-autocomplete: 17.5277ms +0ms\n  oclif-perf   @oclif/plugin-commands: 16.4917ms +0ms\n  oclif-perf   @oclif/plugin-not-found: 16.3310ms +0ms\n  oclif-perf   @oclif/plugin-search: 15.8846ms +0ms\n  oclif-perf   @oclif/plugin-version: 14.8063ms +0ms\n  oclif-perf   @salesforce/plugin-org: 14.5657ms +0ms\n  oclif-perf   @salesforce/plugin-data: 14.3991ms +0ms\n  oclif-perf   @oclif/plugin-warn-if-update-available: 14.3733ms +0ms\n  oclif-perf   @oclif/plugin-which: 14.1629ms +0ms\n  oclif-perf   @salesforce/plugin-apex: 13.9885ms +0ms\n  oclif-perf   @salesforce/plugin-auth: 13.6895ms +0ms\n  oclif-perf   @salesforce/plugin-deploy-retrieve: 13.6353ms +0ms\n  oclif-perf   @salesforce/plugin-limits: 13.1123ms +0ms\n  oclif-perf   @salesforce/plugin-packaging: 12.9777ms +0ms\n  oclif-perf   @salesforce/plugin-info: 12.7787ms +0ms\n  oclif-perf   @salesforce/plugin-marketplace: 12.1542ms +0ms\n  oclif-perf   @salesforce/plugin-source: 11.9480ms +0ms\n  oclif-perf   @salesforce/plugin-schema: 11.7775ms +0ms\n  oclif-perf   @salesforce/plugin-settings: 11.4785ms +0ms\n  oclif-perf   @salesforce/plugin-templates: 11.4225ms +0ms\n  oclif-perf   @salesforce/plugin-sobject: 11.3670ms +0ms\n  oclif-perf   root: 11.2781ms +0ms\n  oclif-perf   @salesforce/plugin-user: 10.8521ms +0ms\n  oclif-perf   @salesforce/plugin-telemetry: 10.5724ms +1ms\n  oclif-perf   @salesforce/plugin-trust: 10.4463ms +0ms\n  oclif-perf   @oclif/plugin-plugins: 2.0135ms +0ms\n  oclif-perf   @oclif/plugin-help: 1.9039ms +0ms\n  oclif-perf Hook Run Times: +0ms\n  oclif-perf   init: +0ms\n  oclif-perf     total: 37.4624ms +0ms\n  oclif-perf     oclif-hello-world(./dist/hooks/init/init): 7.9818ms +0ms\n  oclif-perf     @oclif/plugin-warn-if-update-available(./lib/hooks/init/check-update): 37.1145ms +0ms\n  oclif-perf     @salesforce/plugin-settings(./lib/hooks/init/load_config_meta): 29.3073ms +0ms\n  oclif-perf     @oclif/plugin-update(./dist/hooks/init.js): 33.1767ms +0ms\n  oclif-perf   prerun: +0ms\n  oclif-perf     total: 260.5702ms +0ms\n  oclif-perf     @salesforce/cli(./dist/hooks/prerun): 2.3582ms +0ms\n  oclif-perf     @salesforce/plugin-telemetry(./lib/hooks/telemetryPrerun.js): 260.2634ms +0ms\n  oclif-perf   preparse: +0ms\n  oclif-perf     total: 0.5351ms +0ms\n  oclif-perf     @salesforce/cli(/dist/hooks/preparse): 0.5045ms +0ms\n  oclif-perf   postrun: +0ms\n  oclif-perf     total: 0.3507ms +0ms\n  oclif-perf Command Load Time: 0.7478ms +0ms\n  oclif-perf Command Run Time: 264.2587ms +0ms\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can also access these metrics programmatically like so:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const {Performance, flush, handle, run, settings} = await import('@oclif/core')\nsettings.performanceEnabled = true\nawait run(process.argv.slice(2))\n  .catch(async (error) => handle(error))\n  .finally(async () => {\n    console.log('Performance', Performance.oclifPerf)\n    await flush()\n  })\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"using-performance-for-your-code",children:["Using ",(0,r.jsx)(n.code,{children:"Performance"})," for your code"]}),"\n",(0,r.jsxs)(n.p,{children:["You can also use the ",(0,r.jsx)(n.code,{children:"Performance"})," class to capture performance metrics on your own code base."]}),"\n",(0,r.jsxs)(n.p,{children:["To capture performance metrics for a block of code, you need to create a new ",(0,r.jsx)(n.code,{children:"marker"})," using ",(0,r.jsx)(n.code,{children:"Performance.mark"}),". You then need to call the ",(0,r.jsx)(n.code,{children:".stop"})," method the ",(0,r.jsx)(n.code,{children:"marker"})," to finish timing that block of code."]}),"\n",(0,r.jsx)(n.p,{children:"Here's a brief example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import {Performance} from '@oclif/core'\n// Create a new marker.\n// First argument is the owner of the marker (This allows Performance to be able to distinguish the origin of each marker)\n// Second argument is the name of the maker. Naming convention that oclif uses internally is <module>.<method>#scope. You are free, however, to name these however you like.\nconst marker = Performance.mark('my-plugin', 'hello.run')\n\n// do things that take a while.\n\n// Add details to the marker that you might want to access later\nmarker?.addDetails({from: flags.from, person: args.person})\n// Stop the marker. This will capture the amount of time between the creation of the marker and the stopping of the marker.\nmarker?.stop()\n"})}),"\n",(0,r.jsxs)(n.p,{children:["And a more thorough example using the ",(0,r.jsx)(n.code,{children:"hello"})," command from the ",(0,r.jsx)(n.a,{href:"https://github.com/oclif/hello-world",children:"hello-world"})," template:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"// ./src/commands/hello/index.ts\nimport {Args, Command, Flags, Performance} from '@oclif/core'\n\nexport default class Hello extends Command {\n  static args = {\n    person: Args.string({description: 'Person to say hello to', required: true}),\n  }\n\n  static flags = {\n    from: Flags.string({char: 'f', description: 'Who is saying hello', required: true}),\n  }\n\n  async run(): Promise<void> {\n    const {args, flags} = await this.parse(Hello)\n    const marker = Performance.mark('my-plugin', 'hello.run')\n    await new Promise((resolve) => {\n      setTimeout(resolve, 1000)\n    })\n    marker?.addDetails({from: flags.from, person: args.person})\n    marker?.stop()\n    this.log(`hello ${args.person} from ${flags.from}! (./src/commands/hello/index.ts)`)\n  }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["All the markers you create will be accessible on the static ",(0,r.jsx)(n.code,{children:"results"})," property on ",(0,r.jsx)(n.code,{children:"Performance"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"// bin/run.js\nconst {Performance, flush, handle, run, settings} = await import('@oclif/core')\nsettings.performanceEnabled = true\nawait run(process.argv.slice(2))\n  .catch(async (error) => handle(error))\n  .finally(async () => {\n    console.log('Results', Performance.results)\n    await flush()\n  })\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"\u276f bin/run.js hello reader --from oclif\nhello reader from oclif! (./src/commands/hello/index.ts)\nResults Map(1) {\n  'my-plugin' => [\n    {\n      details: {\n        from: oclif,\n        person: reader\n      },\n      duration: 1003.4971249999999,\n      method: 'run',\n      module: 'hello',\n      name: 'hello.run',\n      scope: undefined\n    }\n  ]\n}\n"})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>c});var r=o(6540);const s={},i=r.createContext(s);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);