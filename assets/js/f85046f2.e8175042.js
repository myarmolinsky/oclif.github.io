"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3056],{5624:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var t=n(4848),o=n(8453);const r={title:"Introducing @oclif/core"},l=void 0,c={permalink:"/blog/2021/03/01/introducing-oclif-core",source:"@site/blog/2021-03-01-introducing-oclif-core.md",title:"Introducing @oclif/core",description:"Greetings!",date:"2021-03-01T00:00:00.000Z",tags:[],readingTime:2.18,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Introducing @oclif/core"},unlisted:!1,prevItem:{title:"Announcing oclif v2!",permalink:"/blog/2022/01/12/announcing-oclif-v2"},nextItem:{title:"oclif Summer 2020 Update",permalink:"/blog/2020/08/26/summer-update"}},s={authorsImageUrls:[]},a=[{value:"Introducing...",id:"introducing",level:3},{value:"What to expect in the near future",id:"what-to-expect-in-the-near-future",level:3},{value:"Going forward",id:"going-forward",level:3},{value:"Reference: Compatibility matrix",id:"reference-compatibility-matrix",level:4}];function d(e){const i={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"Greetings!"}),"\n",(0,t.jsx)(i.p,{children:"We hope this blog post finds you well."}),"\n",(0,t.jsx)(i.h3,{id:"introducing",children:"Introducing..."}),"\n",(0,t.jsxs)(i.p,{children:["We are excited to announce the next iteration of the oclif project today: ",(0,t.jsx)(i.code,{children:"@oclif/core"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["We have learned a lot in the last three years of developing oclif, developing on oclif and supporting millions of command runs a day via Heroku and Salesforce CLIs.\n",(0,t.jsx)(i.code,{children:"@oclif/core"}),' ("Core") simplifies the oclif development experience and introduces highly requested new features.']}),"\n",(0,t.jsxs)(i.p,{children:['Core combines the essential oclif packages into one "core" package, aptly named ',(0,t.jsx)(i.code,{children:"@oclif/core"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"Core also introduces:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"A default command option"}),"\n",(0,t.jsx)(i.li,{children:"Colon or space command syntax"}),"\n",(0,t.jsx)(i.li,{children:"Async command parsing"}),"\n",(0,t.jsx)(i.li,{children:"Command piping to arguments"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"With the introduction of default command functionality, Core simplifies the oclif project and removes the notion of single or multi command CLIs. Core CLIs can have 1 or many commands."}),"\n",(0,t.jsx)(i.p,{children:'Along with Core, we moved the oclif-dev CLI into the oclif CLI creating a single "utility" CLI. This CLI also introduces a new AWS S3 compatible publishing scheme.'}),"\n",(0,t.jsx)(i.h3,{id:"what-to-expect-in-the-near-future",children:"What to expect in the near future"}),"\n",(0,t.jsx)(i.p,{children:"Core is in pre-release beta and being actively developed for new internal Salesforce CLIs."}),"\n",(0,t.jsxs)(i.p,{children:["Much documentation needs to be written in the coming months including migration paths. Migration onto Core should be as painless as possible with many exports remaining entirely unchanged. Look for forthcoming blog posts and documentation on ",(0,t.jsx)(i.a,{href:"https://oclif.io",children:"oclif.io"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"Early this summer, tentively June 1, we will release Core v1. Core's release will coincide with major bumps to many other oclif plugin packages. See the compatibility matrix below."}),"\n",(0,t.jsxs)(i.p,{children:['At Core\'s v1 release, the current "main" oclif packages (namely: command, config, errors & parser) will go into maintenance mode until Jan 2022. They will receive ',(0,t.jsx)(i.em,{children:"only"})," bug and security fixes and they remain compatible with current versions of the oclif and oclif-dev CLIs. Afterwhich, they will be archived."]}),"\n",(0,t.jsxs)(i.p,{children:["Companioning Core, the next major release of the oclif CLI (literally ",(0,t.jsx)(i.code,{children:"oclif@2"}),") will generate Core CLIs."]}),"\n",(0,t.jsx)(i.h3,{id:"going-forward",children:"Going forward"}),"\n",(0,t.jsxs)(i.p,{children:["We are excited to release Core! We invite you to poke around the ",(0,t.jsx)(i.a,{href:"https://github.com/oclif/core",children:"Core repo"}),". It may appear to be a big change but Core keeps what you already enjoy about oclif while reducing development complexity, project dependencies, package coupling and bundle size and introduces many requested features previously too prickly to weave into the current oclif architecture."]}),"\n",(0,t.jsx)(i.p,{children:"Best,"}),"\n",(0,t.jsx)(i.p,{children:"The oclif team"}),"\n",(0,t.jsx)(i.h4,{id:"reference-compatibility-matrix",children:"Reference: Compatibility matrix"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{children:'oclif "v1"'}),(0,t.jsx)(i.th,{children:'oclif "Core"'})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Utility CLIs"}),(0,t.jsxs)(i.td,{children:["oclif@<2",(0,t.jsx)("br",{}),"@oclif/dev-cli@<2"]}),(0,t.jsx)(i.td,{children:"oclif@>=2"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Main packages"}),(0,t.jsxs)(i.td,{children:["@oclif/core@<2",(0,t.jsx)("br",{}),"@oclif/config@<2",(0,t.jsx)("br",{}),"@oclif/errors@<2",(0,t.jsx)("br",{}),"@oclif/parser@<4",(0,t.jsx)("br",{}),"@oclif/plugin-help@<4",(0,t.jsx)("br",{})]}),(0,t.jsx)(i.td,{children:"@oclif/core@>=1"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Node LTS"}),(0,t.jsx)(i.td,{children:"Node v8-14"}),(0,t.jsx)(i.td,{children:"Node v12+"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"TypeScript"}),(0,t.jsx)(i.td,{children:"typescript@<4"}),(0,t.jsx)(i.td,{children:"typescript@>=4"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Main plugins"}),(0,t.jsxs)(i.td,{children:["@oclif/plugin-autocomplete@<1",(0,t.jsx)("br",{}),"@oclif/plugin-commands@<2",(0,t.jsx)("br",{}),"@oclif/plugin-help@<4",(0,t.jsx)("br",{}),"@oclif/plugin-not-found@<2",(0,t.jsx)("br",{}),"@oclif/plugin-plugins@<2",(0,t.jsx)("br",{}),"@oclif/plugin-update@<2",(0,t.jsx)("br",{}),"plugin-warn-if-update-available@<2",(0,t.jsx)("br",{}),"plugin-which@<2",(0,t.jsx)("br",{})]}),(0,t.jsxs)(i.td,{children:["@oclif/plugin-autocomplete@>=2",(0,t.jsx)("br",{}),"@oclif/plugin-commands@>=2",(0,t.jsx)("br",{}),"@oclif/plugin-help@>=4",(0,t.jsx)("br",{}),"@oclif/plugin-not-found@>=2",(0,t.jsx)("br",{}),"@oclif/plugin-plugins@>=2",(0,t.jsx)("br",{}),"@oclif/plugin-update@>=2",(0,t.jsx)("br",{}),"@oclif/plugin-warn-if-update-available@>=2",(0,t.jsx)("br",{}),"@oclif/plugin-which@>=2",(0,t.jsx)("br",{})]})]})]})]})]})}function h(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>c});var t=n(6540);const o={},r=t.createContext(o);function l(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);