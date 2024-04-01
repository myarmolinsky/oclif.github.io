"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[209],{4384:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var i=n(4848),s=n(8453);const t={title:"oclif Spring 2024 Update"},r=void 0,a={permalink:"/blog/2024/03/29/spring-update",source:"@site/blog/2024-03-29-spring-update.md",title:"oclif Spring 2024 Update",description:"Hello oclif developers! It's been a while since we last uploaded a blog - and a lot has happened.",date:"2024-03-29T00:00:00.000Z",tags:[],readingTime:3.525,hasTruncateMarker:!1,authors:[],frontMatter:{title:"oclif Spring 2024 Update"},unlisted:!1,nextItem:{title:"Announcing oclif v2!",permalink:"/blog/2022/01/12/announcing-oclif-v2"}},l={authorsImageUrls:[]},c=[{value:"Improving <code>@oclif/core</code>",id:"improving-oclifcore",level:2},{value:"ESM Support",id:"esm-support",level:2},{value:"Improving and Revitalizing oclif.io",id:"improving-and-revitalizing-oclifio",level:2},{value:"Re-engaging the oclif Community",id:"re-engaging-the-oclif-community",level:2}];function h(e){const o={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.p,{children:["Hello oclif developers! It's been a while since we last uploaded a blog - and ",(0,i.jsx)(o.em,{children:"a lot"})," has happened."]}),"\n",(0,i.jsx)(o.p,{children:"We've been focusing on these high-level areas over the past couple of years:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["Improving ",(0,i.jsx)(o.code,{children:"@oclif/core"})]}),"\n",(0,i.jsx)(o.li,{children:"ESM Support"}),"\n",(0,i.jsx)(o.li,{children:"Improving and revitalizing oclif.io"}),"\n",(0,i.jsx)(o.li,{children:"Re-engaging the oclif community"}),"\n"]}),"\n",(0,i.jsxs)(o.h2,{id:"improving-oclifcore",children:["Improving ",(0,i.jsx)(o.code,{children:"@oclif/core"})]}),"\n",(0,i.jsxs)(o.p,{children:["Since we ",(0,i.jsxs)(o.a,{href:"/blog/2021/03/01/introducing-oclif-core",children:["announced ",(0,i.jsx)(o.code,{children:"@oclif/core"})," over three years ago"]}),", we've released two new major versions, each packed with lots of features that we're really excited about."]}),"\n",(0,i.jsx)(o.p,{children:"Here are some of these changes:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"Full support for ESM and interoperability with CommonJS (more on this topic below)."}),"\n",(0,i.jsxs)(o.li,{children:["Configurable command discovery strategies that give you more control over how commands are loaded at runtime. Check out the ",(0,i.jsx)(o.a,{href:"/docs/command_discovery_strategies.md",children:"docs"}),"."]}),"\n",(0,i.jsxs)(o.li,{children:["A new ",(0,i.jsx)(o.code,{children:"preparse"})," hook that allows you to manipulate the provided arguments before they're parsed. Salesforce used this hook to ",(0,i.jsx)(o.a,{href:"https://github.com/salesforcecli/cli/pull/1536",children:"implement"})," a neat ",(0,i.jsx)(o.code,{children:"--flags-dir"})," feature that translates local files into flags."]}),"\n",(0,i.jsxs)(o.li,{children:["A new ",(0,i.jsx)(o.code,{children:"Performance"})," class that you can use to track performance inside of ",(0,i.jsx)(o.code,{children:"@oclif/core"})," and your own CLI or plugin. Check out the ",(0,i.jsx)(o.a,{href:"/docs/performance",children:"docs"}),"."]}),"\n",(0,i.jsxs)(o.li,{children:["A new flag type, ",(0,i.jsx)(o.code,{children:"Flags.option"}),", that lets you define a flag with a preset list of options. Typescript then uses the options to infer the flag's type."]}),"\n",(0,i.jsxs)(o.li,{children:["Flags now have a ",(0,i.jsx)(o.code,{children:"relationship"})," property that allows you to define more complex relationships between flags. Check out the ",(0,i.jsx)(o.a,{href:"/docs/flags",children:"flags docs"})," for more information."]}),"\n",(0,i.jsxs)(o.li,{children:["Flags now have a ",(0,i.jsx)(o.code,{children:"defaultHelp"})," property that allows you to set the human readable default value in the command help. This property is useful when your flag's ",(0,i.jsx)(o.code,{children:"parse"})," method returns a complex type, such as an object or a class. Check out the ",(0,i.jsx)(o.a,{href:"/docs/flags",children:"flags docs"})," for more."]}),"\n",(0,i.jsxs)(o.li,{children:["Commands now have a ",(0,i.jsx)(o.code,{children:"hiddenAliases"})," property that allows you to define aliases that you want to hide from the user. The property is super helpful when you're trying to wean users off a deprecated command."]}),"\n",(0,i.jsxs)(o.li,{children:["You can now use ",(0,i.jsx)(o.a,{href:"https://bun.sh/",children:"bun"})," or ",(0,i.jsx)(o.a,{href:"https://www.npmjs.com/package/tsx",children:"tsx"})," as dev runtimes (as opposed to node or ts-node)."]}),"\n",(0,i.jsx)(o.li,{children:"A command's usage, args, and flags are now shown whenever a user forgets to provide a required arg or flag, or when they provided a non-existent flag."}),"\n"]}),"\n",(0,i.jsxs)(o.p,{children:["If you need help migrating to the latest version, head over to ",(0,i.jsx)(o.a,{href:"https://github.com/oclif/core/?tab=readme-ov-file#-migrating",children:"core's README"})," which has links to the migration guides. Feel free to open a new ",(0,i.jsx)(o.a,{href:"https://github.com/oclif/core/discussions",children:"discussion"})," if you need more hands-on help from us or the community."]}),"\n",(0,i.jsx)(o.h2,{id:"esm-support",children:"ESM Support"}),"\n",(0,i.jsxs)(o.p,{children:["Version 3 of ",(0,i.jsx)(o.code,{children:"@oclif/core"})," introduced full support for developing ESM plugins and CLIs. It also offered full support for interoperability between CommonJS and ESM plugins."]}),"\n",(0,i.jsxs)(o.p,{children:["Put more simply, you can now migrate your CLI to ESM while keeping individual plugins in CommonJS (or vice versa). The upgrade path is now much simpler for you. You also don't need to worry about any community plugins that have migrated to ESM before you did (such as all the ",(0,i.jsx)(o.code,{children:"@oclif"})," plugins) or are staunchly sticking with CommonJS for the foreseeable future."]}),"\n",(0,i.jsxs)(o.p,{children:["Read more about this topic ",(0,i.jsx)(o.a,{href:"/docs/esm.md",children:"here"}),"."]}),"\n",(0,i.jsx)(o.h2,{id:"improving-and-revitalizing-oclifio",children:"Improving and Revitalizing oclif.io"}),"\n",(0,i.jsxs)(o.p,{children:["Another area of focus for us has been improving our documentation site, ",(0,i.jsx)(o.a,{href:"htttps://oclif.io",children:"oclif.io"}),"."]}),"\n",(0,i.jsxs)(o.p,{children:["While improving the quality and accuracy of the documentation was our priority, we also took the time to upgrade to the latest version of ",(0,i.jsx)(o.a,{href:"https://docusaurus.io/",children:"docusaurus"}),". This new version gave our site a much-needed facelift, as well as cool new features such as dark mode and announcements."]}),"\n",(0,i.jsxs)(o.p,{children:["If you have any feedback or are running into issues, we want to hear about it. Just create an issue in the ",(0,i.jsx)(o.a,{href:"https://github.com/oclif/oclif.github.io/issues",children:"oclif.io repo"}),"."]}),"\n",(0,i.jsx)(o.h2,{id:"re-engaging-the-oclif-community",children:"Re-engaging the oclif Community"}),"\n",(0,i.jsx)(o.p,{children:"Lastly, our biggest priority at the moment is to re-engage the oclif community. We understand how frustrating it has been over the years to see your issues and pull requests go unacknowledged. We apologize for not prioritizing the community, and are earnestly trying to make sure that every issue and pull request gets the attention it deserves going forward."}),"\n",(0,i.jsxs)(o.p,{children:["We also opened up GitHub discussions for ",(0,i.jsx)(o.a,{href:"https://github.com/oclif/core/discussions",children:"@oclif/core"})," and the ",(0,i.jsx)(o.a,{href:"https://github.com/oclif/oclif/discussions",children:"oclif CLI"}),", where you can now post your questions or ideas. We hope you take advantage of them, we love hearing from you!"]}),"\n",(0,i.jsx)(o.p,{children:"One last thing: we intend to publicly post our roadmap so you have more visibility into what we're working on. Stay tuned!"}),"\n",(0,i.jsx)(o.p,{children:"All our best,"}),"\n",(0,i.jsx)(o.p,{children:"The oclif team"})]})}function d(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>r,x:()=>a});var i=n(6540);const s={},t=i.createContext(s);function r(e){const o=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(t.Provider,{value:o},e.children)}}}]);