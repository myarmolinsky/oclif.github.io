"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5917],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>g});var t=n(7294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=t.createContext({}),f=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},c=function(e){var a=f(e.components);return t.createElement(i.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=f(n),p=l,g=m["".concat(i,".").concat(p)]||m[p]||u[p]||o;return n?t.createElement(g,r(r({ref:a},c),{},{components:n})):t.createElement(g,r({ref:a},c))}));function g(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[m]="string"==typeof e?e:l,r[1]=s;for(var f=2;f<o;f++)r[f]=n[f];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1587:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>f,toc:()=>m});var t=n(7462),l=n(3366),o=(n(7294),n(3905)),r=["components"],s={title:"Command Flags"},i=void 0,f={unversionedId:"flags",id:"flags",title:"Command Flags",description:"Flag options are non-positional arguments passed to the command. Flags can either be option flags which take an argument, or boolean flags which do not. An option flag must have an argument.",source:"@site/../docs/flags.md",sourceDirName:".",slug:"/flags",permalink:"/docs/flags",draft:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/flags.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1698849067,formattedLastUpdatedAt:"Nov 1, 2023",frontMatter:{title:"Command Flags"},sidebar:"docs",previous:{title:"Command Arguments",permalink:"/docs/args"},next:{title:"Configuration",permalink:"/docs/config"}},c={},m=[{value:"Custom Flags",id:"custom-flags",level:2},{value:"Alternative Flag Inputs",id:"alternative-flag-inputs",level:2}],u={toc:m},p="wrapper";function g(e){var a=e.components,n=(0,l.Z)(e,r);return(0,o.kt)(p,(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Flag options are non-positional arguments passed to the command. Flags can either be option flags which take an argument, or boolean flags which do not. An option flag must have an argument."),(0,o.kt)("p",null,"For example, if this command was run like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ mycli --force --file=./myfile\n")),(0,o.kt)("p",null,"It would be declared like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import {Command, Flags} from '@oclif/core'\n\nexport class MyCLI extends Command {\n  static flags = {\n    // can pass either --force or -f\n    force: Flags.boolean({char: 'f'}),\n    file: Flags.string(),\n  }\n\n  async run() {\n    const {flags} = await this.parse(MyCLI)\n    if (flags.force) console.log('--force is set')\n    if (flags.file) console.log(`--file is: ${flags.file}`)\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"oclif supports a wide range of ",(0,o.kt)("a",{parentName:"em",href:"#alternative-flag-inputs"},"alternative flag inputs"),".")),(0,o.kt)("p",null,"Here are the options flags can have:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"static flags = {\n  name: Flags.string({\n    char: 'n',                                   // shorter flag version\n    summary: 'brief summary',                    // help summary for flag\n    helpGroup: 'THE BEST FLAGS',                 // Put flag into THE BEST FLAGS group in help\n    description: 'in-depth overview',            // help description for flag\n    hidden: false,                               // hide from help\n    multiple: false,                             // allow setting this flag multiple times\n    env: 'MY_NAME',                              // default to value of environment variable\n    options: ['a', 'b'],                         // only allow the value to be from a discrete set\n    parse: async input => 'output',              // instead of the user input, return a different value\n    default: 'world',                            // default value if flag not passed (can be an async function that returns a string or undefined)\n    required: false,                             // make flag required\n    aliases: ['username', 'u'],                  // aliases for the flag - can be short char or long flags\n    deprecateAliases: false,                     // emit deprecation warning anytime a flag alias is provided\n    dependsOn: ['extra-flag'],                   // this flag requires another flag\n    exclusive: ['extra-flag'],                   // this flag cannot be specified alongside this other flag\n    exactlyOne: ['extra-flag', 'another-flag'],  // exactly one of these flags must be provided\n    relationships: [                             // define complex relationships between flags\n      // Make this flag dependent on all of these flags\n      {type: 'all', flags: ['flag-one', 'flag-two']}\n      // Make this flag dependent on at least one of these flags\n      {type: 'some', flags: ['flag-three', 'flag-four']}\n      // Make this flag exclusive of all these flags\n      {type: 'none', flags: ['flag-five', 'flag-six']}\n\n      // Make this flag dependent on all of these flags\n      {type: 'all', flags: [\n        'flag-one',\n        'flag-two',\n        // Include flag-seven but only when flag-eight is equal to FooBar\n        {name: 'flag-seven', when: async (flags) => flags['flag-eight'] === 'FooBar'}\n      ]}\n    ]\n  }),\n\n  // flag with no value (-f, --force)\n  force: Flags.boolean({\n    char: 'f',                    // short character for flag\n    default: true,                // default value if flag not passed (can be a function that returns a boolean)\n    env: 'MY_NAME',               // default value to the value of an environment variable\n    // boolean flags may be reversed with `--no-` (in this case: `--no-force`).\n    // The flag will be set to false if reversed. This functionality\n    // is disabled by default, to enable it:\n    // allowNo: true\n  }),\n}\n")),(0,o.kt)("h2",{id:"custom-flags"},"Custom Flags"),(0,o.kt)("p",null,"For larger CLIs, it can be useful to declare a custom flag that can be shared amongst multiple commands. Here is an example of a custom flag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// src/flags.ts\nimport {Flags} from '@oclif/core'\n\nclass Team {\n  public name: string;\n  // etc...\n}\n\nfunction getTeam(): Promise<Team> {\n  // imagine this reads a configuration file or something to find the team\n  return new Team()\n}\n\nexport const team = Flags.custom<Team>({\n  char: 't',\n  description: 'team to use',\n  default: () => getTeam(),\n})\n\n// src/commands/mycommand.ts\nimport {team} from '../flags'\nimport {Command} from '@oclif/core'\n\nexport class MyCLI extends Command {\n  static flags = {\n    team: team(),\n  }\n\n  async run() {\n    const {flags} = await this.parse(MyCLI)\n    if (flags.team) console.log(`--team is ${flags.team.name}`)\n  }\n}\n")),(0,o.kt)("p",null,"In the Salesforce CLI we make heavy use of custom flags. For example,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("a",{parentName:"li",href:"https://salesforcecli.github.io/sf-plugins-core/functions/flags_salesforceId.salesforceIdFlag.html"},(0,o.kt)("inlineCode",{parentName:"a"},"salesforceId"))," flag that ensures the provided string is a valid Salesforce Id."),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("a",{parentName:"li",href:"https://salesforcecli.github.io/sf-plugins-core/functions/flags_duration.durationFlag.html"},(0,o.kt)("inlineCode",{parentName:"a"},"duration"))," flag that converts a provided integer into a ",(0,o.kt)("inlineCode",{parentName:"li"},"Duration")," instance that we use for working with time based values.")),(0,o.kt)("p",null,"These and more are located ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/salesforcecli/sf-plugins-core/tree/main/src/flags"},"here")," if you want to see more examples. You can also read the ",(0,o.kt)("a",{parentName:"p",href:"https://salesforcecli.github.io/sf-plugins-core/"},"API docs"),"."),(0,o.kt)("h2",{id:"alternative-flag-inputs"},"Alternative Flag Inputs"),(0,o.kt)("p",null,"Here are some other ways the user can use input flags. This is assuming the command has flags like ",(0,o.kt)("inlineCode",{parentName:"p"},"-f, --file=file")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"-v, --verbose")," (string and boolean flag):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh-session"},"$ mycli --verbose\n$ mycli -v\n$ mycli --file=foo\n$ mycli --file foo\n$ mycli -f foo\n$ mycli -f=foo\n$ mycli -ffoo\n$ mycli -vffoo\n")),(0,o.kt)("p",null,"The last one seems a little odd at first glance, but it's relatively standard in unix and makes commands like ",(0,o.kt)("inlineCode",{parentName:"p"},"tar -xvzfmytarball.tar.gz")," possible."))}g.isMDXComponent=!0}}]);