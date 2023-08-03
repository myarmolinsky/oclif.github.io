"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9310],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1363:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],s={title:"Testing"},c=void 0,l={unversionedId:"testing",id:"testing",title:"Testing",description:"Testing in oclif can be done with any testing framework. You can run commands with MyCommand.run() which returns a promise you can wait on.",source:"@site/../docs/testing.md",sourceDirName:".",slug:"/testing",permalink:"/docs/testing",draft:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/testing.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1691080055,formattedLastUpdatedAt:"Aug 3, 2023",frontMatter:{title:"Testing"},sidebar:"docs",previous:{title:"Release",permalink:"/docs/releasing"},next:{title:"Running Commands Programmatically",permalink:"/docs/running_programmatically"}},p={},u=[{value:"stdout/stderr",id:"stdoutstderr",level:2},{value:"Code Coverage",id:"code-coverage",level:2}],d={toc:u},m="wrapper";function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)(m,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Testing in oclif can be done with any testing framework. You can run commands with ",(0,r.kt)("inlineCode",{parentName:"p"},"MyCommand.run()")," which returns a promise you can wait on."),(0,r.kt)("p",null,"There are common tasks however when writing CLI tools. For this, we have a conventional set of tools that we suggest using to test your CLI. These are based on ",(0,r.kt)("a",{parentName:"p",href:"https://mochajs.org"},"mocha")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jdxcode/fancy-test"},"fancy-test"),"."),(0,r.kt)("p",null,"Mocha is the top JavaScript testing framework and a solid choice for any project. fancy-test is a tool we developed that builds on top of mocha to make it easy to repeat patterns and write concise mocha tests. There is also a library ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oclif/test"},"@oclif/test")," that extends fancy-test with helpers specific to testing oclif CLIs. These are things like running a command or hook or checking if an exit status code is set, for example."),(0,r.kt)("p",null,"Any CLI built with oclif will come preloaded with these tools and an example test that should work out of the box with ",(0,r.kt)("inlineCode",{parentName:"p"},"npm test")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn test"),"."),(0,r.kt)("p",null,"As an example, let's look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"heroku whoami")," command which makes an API call to get the current logged in user. If the user is not logged in, it exits with status 100. (This is a simplified example, here is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/heroku/heroku-cli-plugin-auth"},"the actual code"),".)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"src/commands/whoami.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import Command from '@heroku-cli/command'\n\nexport class Whoami extends Command {\n  async run() {\n    try {\n      let {body: account} = await this.heroku.get('/account')\n      this.log(account.email)\n    } catch (err) {\n      if (err.statusCode === 401) {\n        this.error('not logged in', {exit: 100})\n      }\n      throw err\n    }\n  }\n}\n")),(0,r.kt)("p",null,"Another common tool we like to use in testing oclif CLIs is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/node-nock/nock"},"nock"),". Install the ",(0,r.kt)("inlineCode",{parentName:"p"},"nock")," package as a devDependency."),(0,r.kt)("p",null,"Here is the test code"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"test/commands/whoami.test.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {expect, test} from '@oclif/test'\n\ndescribe('auth:whoami', () => {\n  test\n  .nock('https://api.heroku.com', api => api\n    .get('/account')\n    // user is logged in, return their name\n    .reply(200, {email: 'jeff@example.com'})\n  )\n  .stdout()\n  .command(['auth:whoami'])\n  .it('shows user email when logged in', ctx => {\n    expect(ctx.stdout).to.equal('jeff@example.com\\n')\n  })\n\n  test\n  .nock('https://api.heroku.com', api => api\n    .get('/account')\n    // HTTP 401 means the user is not logged in with valid credentials\n    .reply(401)\n  )\n  .command(['auth:whoami'])\n  // checks to ensure the command exits with status 100\n  .exit(100)\n  .it('exits with status 100 when not logged in')\n})\n")),(0,r.kt)("p",null,"These tools are setup to not only mock out the stdout/stderr and HTTP calls, but they're setup to ensure they automatically reset after the test. A common issue we've had when building CLIs with simpler ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeEach/afterEach")," filters is that if the ",(0,r.kt)("inlineCode",{parentName:"p"},"afterEach")," filters aren't setup correctly, a failing test can leave mocks around that make later tests fail. Using fancy-test, we avoid this problem and only have to declare our mocks once."),(0,r.kt)("p",null,"For more on how to test with oclif, check out the docs for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jdxcode/fancy-test"},"fancy-test")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oclif/test"},"@oclif/test"),"."),(0,r.kt)("h2",{id:"stdoutstderr"},"stdout/stderr"),(0,r.kt)("p",null,"The stdout/stderr mocks use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jdxcode/stdout-stderr"},"stdout-stderr")," under the hood. This library can be used standalone if you'd prefer to use jest or want a different testing setup but still have the ability to mock out stdout and stderr."),(0,r.kt)("p",null,"If you want to see the output but leave it mocked, you can either pass in ",(0,r.kt)("inlineCode",{parentName:"p"},"{print: true}")," to the options, or set ",(0,r.kt)("inlineCode",{parentName:"p"},"TEST_OUTPUT=1"),"."),(0,r.kt)("h2",{id:"code-coverage"},"Code Coverage"),(0,r.kt)("p",null,"Code coverage is provided automatically for JavaScript and TypeScript projects via ",(0,r.kt)("a",{parentName:"p",href:"https://npm.im/nyc"},"nyc"),". Just run ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn test")," and it will show the code coverage. The coverage can optionally be sent to ",(0,r.kt)("a",{parentName:"p",href:"https://codecov.io"},"codecov")," in the CI scripts as well."))}h.isMDXComponent=!0}}]);