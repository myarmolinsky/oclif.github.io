"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7777],{2443:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>i,toc:()=>f});var s=n(4848),l=n(8453);const t={title:"Command Flags"},o=void 0,i={id:"flags",title:"Command Flags",description:"Flag options are non-positional arguments passed to the command. Flags can either be option flags which take an argument, or boolean flags which do not. An option flag must have an argument.",source:"@site/../docs/flags.md",sourceDirName:".",slug:"/flags",permalink:"/docs/flags",draft:!1,unlisted:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/flags.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1711647920,formattedLastUpdatedAt:"Mar 28, 2024",frontMatter:{title:"Command Flags"},sidebar:"docs",previous:{title:"Command Arguments",permalink:"/docs/args"},next:{title:"Command Discovery Strategies",permalink:"/docs/command_discovery_strategies"}},r={},f=[{value:"Custom Flags",id:"custom-flags",level:2},{value:"Alternative Flag Inputs",id:"alternative-flag-inputs",level:2}];function c(e){const a={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"Flag options are non-positional arguments passed to the command. Flags can either be option flags which take an argument, or boolean flags which do not. An option flag must have an argument."}),"\n",(0,s.jsx)(a.p,{children:"For example, if this command was run like this:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"$ mycli --force --file=./myfile\n"})}),"\n",(0,s.jsx)(a.p,{children:"It would be declared like this:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-typescript",children:"import {Command, Flags} from '@oclif/core'\n\nexport class MyCLI extends Command {\n  static flags = {\n    // can pass either --force or -f\n    force: Flags.boolean({char: 'f'}),\n    file: Flags.string(),\n  }\n\n  async run() {\n    const {flags} = await this.parse(MyCLI)\n    if (flags.force) console.log('--force is set')\n    if (flags.file) console.log(`--file is: ${flags.file}`)\n  }\n}\n"})}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsxs)(a.em,{children:["oclif supports a wide range of ",(0,s.jsx)(a.a,{href:"#alternative-flag-inputs",children:"alternative flag inputs"}),"."]})}),"\n",(0,s.jsx)(a.p,{children:"Here are the options flags can have:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-js",children:"static flags = {\n  name: Flags.string({\n    // The following can be set on both boolean and option flag (e.g. string, integer, url, custom, etc) types.\n    char: 'n',                                   // shorter flag version\n    summary: 'brief summary',                    // help summary for flag\n    helpLabel: '--my-flags',                     // The flag label to show in help. Defaults to \"[-<char>] --<name>\" where -<char> is only displayed if the char is defined.\n    helpGroup: 'THE BEST FLAGS',                 // Put flag into THE BEST FLAGS group in help\n    description: 'in-depth overview',            // help description for flag\n    hidden: false,                               // hide from help\n    multiple: false,                             // allow setting this flag multiple times\n    env: 'MY_NAME',                              // default to value of environment variable\n    options: ['a', 'b'],                         // only allow the value to be from a discrete set\n    parse: async input => 'output',              // instead of the user input, return a different value\n    default: 'world',                            // default value if flag not passed (can be an async function that returns a string or undefined)\n    defaultHelp: 'a dynamic value'               // dynamic default value to show in help output (e.g. current working directory). Can be an async function that returns a string or undefined\n    required: false,                             // make flag required\n    aliases: ['username', 'u'],                  // aliases for the flag - can be short char or long flags\n    aliases: ['u', 'n'],                         // single character aliases for the flag\n    deprecated: false,                           // mark the flag as deprecated.\n    deprecateAliases: false,                     // emit deprecation warning anytime a flag alias is provided\n    noCacheDefault: false,                       // if true, the value returned by defaultHelp will not be cached in the oclif.manifest.json.\n    dependsOn: ['extra-flag'],                   // this flag requires another flag\n    exclusive: ['extra-flag'],                   // this flag cannot be specified alongside this other flag\n    exactlyOne: ['extra-flag', 'another-flag'],  // exactly one of these flags must be provided\n    relationships: [                             // define complex relationships between flags\n      // Make this flag dependent on all of these flags\n      {type: 'all', flags: ['flag-one', 'flag-two']}\n      // Make this flag dependent on at least one of these flags\n      {type: 'some', flags: ['flag-three', 'flag-four']}\n      // Make this flag exclusive of all these flags\n      {type: 'none', flags: ['flag-five', 'flag-six']}\n\n      // Make this flag dependent on all of these flags\n      {type: 'all', flags: [\n        'flag-one',\n        'flag-two',\n        // Include flag-seven but only when flag-eight is equal to FooBar\n        {name: 'flag-seven', when: async (flags) => flags['flag-eight'] === 'FooBar'}\n      ]}\n    ],\n    // The following properties cannot be set on boolean flags\n    helpValue: '<name>',                         // The flag value to show in help. Defaults to \"<value>\",\n    multipleNonGreedy: false,                    // Parse one value per flag to allow `-m val1 -m val2` but disallow `-m val1 val2`. Only respected if multiple is set to true\n    delimiter: ','                               // Delimiter to separate the values for a multiple value flag. Only respected if multiple is set to true. Default behavior is to separate on spaces.\n    allowStdin: false,                           // Allow input value to be read from stdin if the provided value is `-`. Can also be set to `only` to allow flag to always read from stdin even if no value is provided.\n  }),\n\n  // flag with no value (-f, --force)\n  force: Flags.boolean({\n    // Boolean flags take all the same properties described in the previous example\n    // in addition to:\n    allowNo: true // Support reversible boolean flag with `--no-` prefix (e.g. `--no-force`). This is disabled by default.\n  }),\n}\n"})}),"\n",(0,s.jsx)(a.h2,{id:"custom-flags",children:"Custom Flags"}),"\n",(0,s.jsx)(a.p,{children:"For larger CLIs, it can be useful to declare a custom flag that can be shared amongst multiple commands. Here is an example of a custom flag:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-typescript",children:"// src/flags.ts\nimport {Flags} from '@oclif/core'\n\nclass Team {\n  public name: string;\n  // etc...\n}\n\nfunction getTeam(): Promise<Team> {\n  // imagine this reads a configuration file or something to find the team\n  return new Team()\n}\n\nexport const team = Flags.custom<Team>({\n  char: 't',\n  description: 'team to use',\n  default: async () => getTeam(),\n})\n\n// src/commands/mycommand.ts\nimport {team} from '../flags'\nimport {Command} from '@oclif/core'\n\nexport class MyCLI extends Command {\n  static flags = {\n    team: team({\n      required: true,\n    }),\n  }\n\n  async run() {\n    const {flags} = await this.parse(MyCLI)\n    if (flags.team) console.log(`--team is ${flags.team.name}`)\n  }\n}\n"})}),"\n",(0,s.jsx)(a.p,{children:"In the Salesforce CLI we make heavy use of custom flags. For example,"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["A ",(0,s.jsx)(a.a,{href:"https://salesforcecli.github.io/sf-plugins-core/functions/flags_salesforceId.salesforceIdFlag.html",children:(0,s.jsx)(a.code,{children:"salesforceId"})})," flag that ensures the provided string is a valid Salesforce Id."]}),"\n",(0,s.jsxs)(a.li,{children:["A ",(0,s.jsx)(a.a,{href:"https://salesforcecli.github.io/sf-plugins-core/functions/flags_duration.durationFlag.html",children:(0,s.jsx)(a.code,{children:"duration"})})," flag that converts a provided integer into a ",(0,s.jsx)(a.code,{children:"Duration"})," instance that we use for working with time based values."]}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:["These and more are located ",(0,s.jsx)(a.a,{href:"https://github.com/salesforcecli/sf-plugins-core/tree/main/src/flags",children:"here"})," if you want to see more examples. You can also read the ",(0,s.jsx)(a.a,{href:"https://salesforcecli.github.io/sf-plugins-core/",children:"API docs"}),"."]}),"\n",(0,s.jsx)(a.h2,{id:"alternative-flag-inputs",children:"Alternative Flag Inputs"}),"\n",(0,s.jsxs)(a.p,{children:["Here are some other ways the user can use input flags. This is assuming the command has flags like ",(0,s.jsx)(a.code,{children:"-f, --file=file"})," and ",(0,s.jsx)(a.code,{children:"-v, --verbose"})," (string and boolean flag):"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sh-session",children:"$ mycli --verbose\n$ mycli -v\n$ mycli --file=foo\n$ mycli --file foo\n$ mycli -f foo\n$ mycli -f=foo\n$ mycli -ffoo\n$ mycli -vffoo\n"})}),"\n",(0,s.jsxs)(a.p,{children:["The last one seems a little odd at first glance, but it's relatively standard in unix and makes commands like ",(0,s.jsx)(a.code,{children:"tar -xvzfmytarball.tar.gz"})," possible."]}),"\n",(0,s.jsxs)(a.p,{children:["See our blog post ",(0,s.jsx)(a.a,{href:"../blog/2019/02/20/cli-flags-explained",children:"CLI Flags Explained"})," for a deeper dive into CLI flags."]})]})}function d(e={}){const{wrapper:a}={...(0,l.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,a,n)=>{n.d(a,{R:()=>o,x:()=>i});var s=n(6540);const l={},t=s.createContext(l);function o(e){const a=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),s.createElement(t.Provider,{value:a},e.children)}}}]);