"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5483],{5678:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>r});var i=t(4848),a=t(8453);const s={title:"Release"},l=void 0,o={id:"releasing",title:"Release",description:"There are 2 main strategies for releasing oclif CLIs: npm and standalone tarballs. You can publish to one or both.",source:"@site/../docs/releasing.md",sourceDirName:".",slug:"/releasing",permalink:"/docs/releasing",draft:!1,unlisted:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/releasing.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1711648030,formattedLastUpdatedAt:"Mar 28, 2024",frontMatter:{title:"Release"},sidebar:"docs",previous:{title:"Performance",permalink:"/docs/performance"},next:{title:"Testing",permalink:"/docs/testing"}},c={},r=[{value:"npm",id:"npm",level:2},{value:"Standalone tarballs",id:"standalone-tarballs",level:2},{value:"Brew",id:"brew",level:2},{value:"Autoupdater",id:"autoupdater",level:2},{value:"Autoupdate Channels",id:"autoupdate-channels",level:2},{value:"Windows installer",id:"windows-installer",level:2},{value:"macOS installer",id:"macos-installer",level:2},{value:"Uploading to S3",id:"uploading-to-s3",level:3},{value:"Signing the installer",id:"signing-the-installer",level:3},{value:"Ubuntu/Debian packages",id:"ubuntudebian-packages",level:2},{value:"Snapcraft",id:"snapcraft",level:2}];function d(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"There are 2 main strategies for releasing oclif CLIs: npm and standalone tarballs. You can publish to one or both."}),"\n",(0,i.jsx)(n.h2,{id:"npm",children:"npm"}),"\n",(0,i.jsxs)(n.p,{children:["Just use ",(0,i.jsx)(n.code,{children:"npm publish"})," like any other npm project. This includes a ",(0,i.jsx)(n.code,{children:"run.cmd"})," script that will automatically be used for Windows users."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh-session",children:"$ npm version (major|minor|patch) # bumps version, updates README, adds git tag\n$ npm publish\n$ npm install -g mynewcli\n$ mynewcli\n# OR\n$ npx mynewcli\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You'll need to ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/signup",children:"register with npm"})," and have verified your email address in order to publish."]}),"\n",(0,i.jsxs)(n.p,{children:["This workflow can be improved slightly by running ",(0,i.jsx)(n.code,{children:"npm version major|minor|patch"})," before publishing which will create a git tag and bump the version automatically."]}),"\n",(0,i.jsx)(n.h2,{id:"standalone-tarballs",children:"Standalone tarballs"}),"\n",(0,i.jsxs)(n.p,{children:["Build standalone tarballs with ",(0,i.jsx)(n.code,{children:"oclif pack tarballs"})," from the root of your CLI. These include the node binary so the user does not have to already have node installed to use the CLI. It won't put this node binary on the PATH so the binary will not conflict with any node installation on the machine."]}),"\n",(0,i.jsxs)(n.p,{children:["To publish, you can copy the files from ",(0,i.jsx)(n.code,{children:"./dist"})," or use ",(0,i.jsx)(n.code,{children:"oclif upload tarballs"})," to copy the files to S3. You'll need to set ",(0,i.jsx)(n.code,{children:"oclif.update.s3.bucket"})," in ",(0,i.jsx)(n.code,{children:"package.json"})," to a valid S3 bucket and have credentials set in ",(0,i.jsx)(n.code,{children:"AWS_ACCESS_KEY_ID"})," and ",(0,i.jsx)(n.code,{children:"AWS_SECRET_ACCESS_KEY"})," environment vars."]}),"\n",(0,i.jsxs)(n.p,{children:["After you've uploaded the tarballs to S3, you can promote the tarballs to a release channel within S3 using ",(0,i.jsx)(n.code,{children:"oclif promote"}),". This allows you to quickly promote and demote a specific version between release channels. For example, the Salesforce CLI has separate ",(0,i.jsx)(n.code,{children:"stable"})," and ",(0,i.jsx)(n.code,{children:"stable-rc"})," channels that are updated weekly."]}),"\n",(0,i.jsx)(n.h2,{id:"brew",children:"Brew"}),"\n",(0,i.jsxs)(n.p,{children:["Your formula can be distributed through Brew. The main caveat is you must set the ",(0,i.jsx)(n.code,{children:"CLIENT_HOME"})," variable when you ship, otherwise it will break the update cycle. An example of this can be found in the ",(0,i.jsx)(n.a,{href:"https://github.com/heroku/homebrew-brew/blob/master/Formula/heroku.rb#L9",children:"heroku cli formula"}),". By exporting a variable of the form ",(0,i.jsx)(n.code,{children:"CLI_NAME_OCLIF_CLIENT_HOME"})," (where ",(0,i.jsx)(n.code,{children:"CLI_NAME"})," is the name of your CLI), you force the update mechanism to look at the brew install location instead of the default (which is ",(0,i.jsx)(n.code,{children:"$XDG_DATA_HOME/.local/share/package_name/client"}),")."]}),"\n",(0,i.jsx)(n.h2,{id:"autoupdater",children:"Autoupdater"}),"\n",(0,i.jsxs)(n.p,{children:["These tarballs as well as the installers below can be made autoupdatable by adding the ",(0,i.jsx)(n.code,{children:"@oclif/plugin-update"})," plugin. Just add this plugin and the CLI will autoupdate in the background or when ",(0,i.jsx)(n.code,{children:"mycli update"})," is run."]}),"\n",(0,i.jsxs)(n.p,{children:["If you don't want to use S3, you can still run ",(0,i.jsx)(n.code,{children:"oclif pack"})," and it will build tarballs. To get the updater to work, set ",(0,i.jsx)(n.code,{children:"oclif.update.s3.host"})," in ",(0,i.jsx)(n.code,{children:"package.json"})," to a host that has the files built in ",(0,i.jsx)(n.code,{children:"./dist"})," from ",(0,i.jsx)(n.code,{children:"oclif pack"}),". This host does not need to be an S3 host. To customize the URL paths, see the S3 templates in ",(0,i.jsx)(n.code,{children:"@oclif/core"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"autoupdate-channels",children:"Autoupdate Channels"}),"\n",(0,i.jsxs)(n.p,{children:["You can have separate channels for releases that work like Google Chrome Channels (such as beta, dev, canary). To create a channel, just change the version in ",(0,i.jsx)(n.code,{children:"package.json"})," from ",(0,i.jsx)(n.code,{children:"1.0.0"})," to ",(0,i.jsx)(n.code,{children:"1.0.0-beta"}),' (where "beta" is any string you like). Then when you pack with ',(0,i.jsx)(n.code,{children:"oclif pack"}),", it will create beta tarballs. The user can change their channel with ",(0,i.jsx)(n.code,{children:"mycli update beta"})," and will receive all the future releases on that channel."]}),"\n",(0,i.jsx)(n.p,{children:"In the Heroku CLI, we have it automatically build and release the beta channel on every commit to the master branch. Then we have it build and release stable channel whenever a git tag is created in our CI."}),"\n",(0,i.jsx)(n.h2,{id:"windows-installer",children:"Windows installer"}),"\n",(0,i.jsxs)(n.p,{children:["Build a windows installer with ",(0,i.jsx)(n.code,{children:"oclif pack win"}),". It will build into ",(0,i.jsx)(n.code,{children:"./dist/win"}),". This can be uploaded to S3 with ",(0,i.jsx)(n.code,{children:"oclif upload win"})," and promoted within S3 with ",(0,i.jsx)(n.code,{children:"oclif promote --win"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The installer uses 7zip and nsis.  If you're in a mac or unix environment and don't have them, you can use homebrew to insall them."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"brew install nsis\nbrew install p7zip\n"})}),"\n",(0,i.jsx)(n.h2,{id:"macos-installer",children:"macOS installer"}),"\n",(0,i.jsxs)(n.p,{children:["Build a macOS .pkg installer with ",(0,i.jsx)(n.code,{children:"oclif pack macos"}),". It will build into ",(0,i.jsx)(n.code,{children:"./dist/macos"}),". This can be uploaded to S3 with ",(0,i.jsx)(n.code,{children:"oclif upload macos"})," and promoted within S3 with ",(0,i.jsx)(n.code,{children:"oclif promote --macos"}),". You need to set the macOS identifier at ",(0,i.jsx)(n.code,{children:"oclif.macos.identifier"})," in ",(0,i.jsx)(n.code,{children:"package.json"}),' (we use "com.heroku.cli" and "com.salesforce.cli" as the identifiers for the Heroku CLI and the Salesforce CLI, respectively).']}),"\n",(0,i.jsx)(n.h3,{id:"uploading-to-s3",children:"Uploading to S3"}),"\n",(0,i.jsxs)(n.p,{children:["The upload command defaults to using the ACL setting ",(0,i.jsx)(n.code,{children:"public-read"})," unless another policy is specified under ",(0,i.jsx)(n.code,{children:"oclif.update.s3.acl"})," in ",(0,i.jsx)(n.code,{children:"package.json"}),". However, when creating new S3 buckets, AWS's default recommendation can result in an access error (Code: AccessControlListNotSupported) when trying to upload with the ",(0,i.jsx)(n.code,{children:"public-read"})," setting."]}),"\n",(0,i.jsx)(n.p,{children:"To address this, consider updating the oclif section of your package.json with the desired ACL setting. The example below demonstrates how to set the acl to bucket-owner-full-control:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'"oclif": {\n    "bin": "myOclifApp",\n    "dirname": "myOclifApp-cli-data",\n    "update": {\n      "s3": {\n        "host": "https://s3.console.aws.amazon.com/",\n        "bucket": "myOclifApp-cli",\n        "acl": "bucket-owner-full-control"\n      }\n    },\n    "macos": {\n      "identifier": "com.myOclifApp.cli"\n    },\n\n...\n\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Amazon has a userguide ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/ensure-object-ownership.html#ensure-object-ownership-bucket-policy",children:"here"})," for help how to configure Bucket Policy settings."]}),"\n",(0,i.jsx)(n.h3,{id:"signing-the-installer",children:"Signing the installer"}),"\n",(0,i.jsxs)(n.p,{children:['To be able to sign an "installer signing identity" has to be available on the build machine (read more on certificates ',(0,i.jsx)(n.a,{href:"https://developer.apple.com/help/account/create-certificates/certificates-overview",children:"here"}),").",(0,i.jsx)(n.br,{}),"\n","Make sure such a certificate is created in developer.apple.com and that the certificate is downloaded and installed in the KeyChain of the build machine.",(0,i.jsx)(n.br,{}),"\n","The certificate name has to be specified in the ",(0,i.jsx)(n.code,{children:"oclif.macos.sign"})," in ",(0,i.jsx)(n.code,{children:"package.json"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'    "macos": {\n      "identifier": "com.myOclifApp",\n      "sign": "\\"3rd Party Mac Developer Installer: myOclifCompany (R2315646)\\""\n    },\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Pay attention to the escaped quotation marks, the certificate name is passed on as an argument to the ",(0,i.jsx)(n.code,{children:"pkgbuild"})," command so without quotation marks it might break.",(0,i.jsx)(n.br,{}),"\n",'For the Heroku CLI the certificate name is "Developer ID Installer: Heroku INC". And optionally set the keychain with ',(0,i.jsx)(n.code,{children:"OSX_KEYCHAIN"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Installed certificates on the build machine can be viewed in the Keychain Access app."}),"\n",(0,i.jsx)(n.h2,{id:"ubuntudebian-packages",children:"Ubuntu/Debian packages"}),"\n",(0,i.jsxs)(n.p,{children:["Build a deb package with ",(0,i.jsx)(n.code,{children:"oclif pack deb"}),". Set the ",(0,i.jsx)(n.code,{children:"MYCLI_DEB_KEY"})," to a gpg key id to create the gpg files. This will include all the files needed for an apt repository in ",(0,i.jsx)(n.code,{children:"./dist/deb"}),". They can be uploaded to S3 with ",(0,i.jsx)(n.code,{children:"oclif upload deb"})," and promoted within S3 using ",(0,i.jsx)(n.code,{children:"oclif promote --deb"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Once it's published to S3, users can install with the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh-session",children:'$ wget -qO- https://mys3bucket.s3.amazonaws.com/apt/release.key | apt-key add - # you will need to upload this file manually\n$ sudo echo "deb https://mys3bucket.s3.amazonaws.com/apt ./" > /etc/apt/sources.list.d/mycli.list\n$ sudo apt update\n$ sudo apt install -y mycli\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This can be placed in a ",(0,i.jsx)(n.a,{href:"https://cli-assets.heroku.com/install-ubuntu.sh",children:"script"})," for users to install with ",(0,i.jsx)(n.code,{children:"curl https://pathto/myscript | sh"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"These will not autoupdate as Ubuntu already has a reliable way for users to update their package."}),"\n",(0,i.jsx)(n.h2,{id:"snapcraft",children:"Snapcraft"}),"\n",(0,i.jsxs)(n.p,{children:["Snap is a great way to distribute Linux CLIs and comes built into Ubuntu 16+. The Heroku CLI's ",(0,i.jsx)(n.a,{href:"https://github.com/heroku/cli/blob/master/snap/snapcraft.yaml",children:"snapcraft.yml"})," file can be easily modified to work with any oclif CLI."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var i=t(6540);const a={},s=i.createContext(a);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);