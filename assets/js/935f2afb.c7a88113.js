"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8581],{5610:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"category","label":"Getting Started","items":[{"type":"link","label":"Introduction","href":"/docs/introduction","docId":"introduction","unlisted":false},{"type":"link","label":"Features","href":"/docs/features","docId":"features","unlisted":false},{"type":"link","label":"FAQs","href":"/docs/faqs","docId":"faqs","unlisted":false},{"type":"link","label":"Generator Commands","href":"/docs/generator_commands","docId":"generator_commands","unlisted":false},{"type":"link","label":"Templates","href":"/docs/templates","docId":"templates","unlisted":false}],"collapsed":true,"collapsible":true},{"type":"category","label":"Architecture","items":[{"type":"link","label":"Command Execution","href":"/docs/command_execution","docId":"command_execution","unlisted":false},{"type":"link","label":"Plugin Loading","href":"/docs/plugin_loading","docId":"plugin_loading","unlisted":false}],"collapsed":true,"collapsible":true},{"type":"category","label":"API Reference","items":[{"type":"link","label":"Configuration","href":"/docs/config","docId":"config","unlisted":false},{"type":"link","label":"Commands","href":"/docs/commands","docId":"commands","unlisted":false},{"type":"link","label":"Command Arguments","href":"/docs/args","docId":"args","unlisted":false},{"type":"link","label":"Command Flags","href":"/docs/flags","docId":"flags","unlisted":false},{"type":"link","label":"Command Discovery Strategies","href":"/docs/command_discovery_strategies","docId":"command_discovery_strategies","unlisted":false},{"type":"link","label":"Topics","href":"/docs/topics","docId":"topics","unlisted":false},{"type":"link","label":"Topic Separators","href":"/docs/topic_separator","docId":"topic_separator","unlisted":false},{"type":"link","label":"Hooks","href":"/docs/hooks","docId":"hooks","unlisted":false},{"type":"link","label":"Plugins","href":"/docs/plugins","docId":"plugins","unlisted":false},{"type":"link","label":"Help Classes","href":"/docs/help_classes","docId":"help_classes","unlisted":false},{"type":"link","label":"Error Handling","href":"/docs/error_handling","docId":"error_handling","unlisted":false},{"type":"link","label":"JSON","href":"/docs/json","docId":"json","unlisted":false},{"type":"link","label":"Performance","href":"/docs/performance","docId":"performance","unlisted":false}],"collapsed":true,"collapsible":true},{"type":"category","label":"How to","items":[{"type":"link","label":"Release","href":"/docs/releasing","docId":"releasing","unlisted":false},{"type":"link","label":"Testing","href":"/docs/testing","docId":"testing","unlisted":false},{"type":"link","label":"Running Commands Programmatically","href":"/docs/running_programmatically","docId":"running_programmatically","unlisted":false},{"type":"link","label":"Just-in-Time Plugin Installation","href":"/docs/jit_plugins","docId":"jit_plugins","unlisted":false},{"type":"link","label":"Aliases","href":"/docs/aliases","docId":"aliases","unlisted":false},{"type":"link","label":"NSIS Installer Customization","href":"/docs/nsis-installer_customization","docId":"nsis-installer_customization","unlisted":false},{"type":"link","label":"Custom Base Class","href":"/docs/base_class","docId":"base_class","unlisted":false},{"type":"link","label":"Prompting","href":"/docs/prompting","docId":"prompting","unlisted":false},{"type":"link","label":"Spinner","href":"/docs/spinner","docId":"spinner","unlisted":false},{"type":"link","label":"Table","href":"/docs/table","docId":"table","unlisted":false},{"type":"link","label":"Notifications","href":"/docs/notifications","docId":"notifications","unlisted":false},{"type":"link","label":"Debugging","href":"/docs/debugging","docId":"debugging","unlisted":false},{"type":"link","label":"Flexible Taxonomy","href":"/docs/flexible_taxonomy","docId":"flexible_taxonomy","unlisted":false},{"type":"link","label":"Flag Inheritance","href":"/docs/flag_inheritance","docId":"flag_inheritance","unlisted":false},{"type":"link","label":"Single Command CLI","href":"/docs/single_command_cli","docId":"single_command_cli","unlisted":false},{"type":"link","label":"ESM","href":"/docs/esm","docId":"esm","unlisted":false},{"type":"link","label":"Themes","href":"/docs/themes","docId":"themes","unlisted":false}],"collapsed":true,"collapsible":true},{"type":"category","label":"Also See","items":[{"type":"link","label":"Examples","href":"/docs/examples","docId":"examples","unlisted":false},{"type":"link","label":"External Links","href":"/docs/external_links","docId":"external_links","unlisted":false},{"type":"link","label":"Related Repositories","href":"/docs/related_repos","docId":"related_repos","unlisted":false},{"type":"link","label":"How We Work","href":"/docs/how_we_work","docId":"how_we_work","unlisted":false},{"type":"link","label":"Feedback","href":"/docs/feedback","docId":"feedback","unlisted":false}],"collapsed":true,"collapsible":true}]},"docs":{"aliases":{"id":"aliases","title":"Aliases","description":"Command Aliases","sidebar":"docs"},"args":{"id":"args","title":"Command Arguments","description":"Arguments are positional arguments passed to the command. For example, if this command was run with mycli arg1 arg2 it would be declared like this:","sidebar":"docs"},"base_class":{"id":"base_class","title":"Custom Base Class","description":"Use inheritance to share functionality between common commands. Here is an example of a command base class that has some common shared flags.","sidebar":"docs"},"command_discovery_strategies":{"id":"command_discovery_strategies","title":"Command Discovery Strategies","description":"When oclif loads a plugin is must find all the commands within that plugin that can be executed. There a three strategies for discovering these commands:","sidebar":"docs"},"command_execution":{"id":"command_execution","title":"Command Execution","description":"Below is a diagram that outlines at a high level the process that occurs every time a user executes an oclif command.","sidebar":"docs"},"commands":{"id":"commands","title":"Commands","description":"A basic command looks like the following in TypeScript:","sidebar":"docs"},"config":{"id":"config","title":"Configuration","description":"Configuring oclif","sidebar":"docs"},"debugging":{"id":"debugging","title":"Debugging","description":"Use the debug for debugging. The CLI uses this module for all of its debugging. If you set the environment variable DEBUG=* it will print all the debug output to the screen.","sidebar":"docs"},"error_handling":{"id":"error_handling","title":"Error Handling","description":"oclif handles intentionally - and unintentionally - thrown errors in two places. First in the Command.catch method and then, finally, in the bin/run.js catch handler where the Error is printed and the CLI exits. This error flow makes it possible for you to control and respond to errors that occur in your CLI as you see fit.","sidebar":"docs"},"esm":{"id":"esm","title":"ESM","description":"Version 3.0.0 of @oclif/core officially supports ESM plugin development and CJS/ESM interoperability, meaning that you can have a root plugin written with CJS and your plugins written in ESM or vice versa.","sidebar":"docs"},"examples":{"id":"examples","title":"Examples","description":"Here are some examples to get an idea of how to use oclif in various setups.","sidebar":"docs"},"external_links":{"id":"external_links","title":"External Links","description":"* Salesforce Release Announcement","sidebar":"docs"},"faqs":{"id":"faqs","title":"FAQs","description":"Why Node?","sidebar":"docs"},"features":{"id":"features","title":"Features","description":"Flag/Argument parsing","sidebar":"docs"},"feedback":{"id":"feedback","title":"Feedback","description":"If you have any suggestions or just want to let us know what you think of oclif, send us a message at alm-cli@salesforce.com or file an issue in our repos.","sidebar":"docs"},"flag_inheritance":{"id":"flag_inheritance","title":"Flag Inheritance","description":"There are some instances where you might want to define a flag once for all of your commands. In this case you can add a base flag to an abstract base Command class. For example,","sidebar":"docs"},"flags":{"id":"flags","title":"Command Flags","description":"Flag options are non-positional arguments passed to the command. Flags can either be option flags which take an argument, or boolean flags which do not. An option flag must have an argument.","sidebar":"docs"},"flexible_taxonomy":{"id":"flexible_taxonomy","title":"Flexible Taxonomy","description":"If you\'d like for your customers to execute commands without adhereing to the defined command taxonomy, you can enable flexibleTaxonomy and add a hook to the oclif section of your package.json:","sidebar":"docs"},"generator_commands":{"id":"generator_commands","title":"Generator Commands","description":"- oclif generate NAME","sidebar":"docs"},"help_classes":{"id":"help_classes","title":"Help Classes","description":"Out of the box oclif provides a great help experience for CLIs. Users can invoke help with the --help flag.","sidebar":"docs"},"hooks":{"id":"hooks","title":"Hooks","description":"oclif exposes lifecycle event hooks such as init and commandnotfound. See below for a list of all the lifecycle events. In addition to these built-in events, you can create your own events and allow commands/plugins to watch for these custom events. It\'s a great way to allow multiple plugins to interact with each other.","sidebar":"docs"},"how_we_work":{"id":"how_we_work","title":"How We Work","description":"oclif is an open-source project built and maintained by Salesforce and an essential component of Salesforce\'s developer experiences, powering millions of users\' CLIs a day via the Salesforce CLI, the Heroku CLI and others.","sidebar":"docs"},"index":{"id":"index","title":"index","description":""},"introduction":{"id":"introduction","title":"Introduction","description":"oclif is a framework for building CLIs in Node. It can be used like a simple flag parser but is capable of much more. It\'s designed to be extensible so that you can easily add plugins such as the update warning plugin or build your own for users to install at runtime.","sidebar":"docs"},"jit_plugins":{"id":"jit_plugins","title":"Just-in-Time Plugin Installation","description":"Sometimes you might want to have a plugin that isn\'t bundled in your CLI but gets installed the first time it\'s executed by the user - we call this just-in-time plugin installation, or JIT for short. This can be useful if you need to reduce the package size of your CLI while still allowing users access to all the plugins.","sidebar":"docs"},"json":{"id":"json","title":"JSON","description":"If you want to use the --json flag to return JSON output to the user, then you can set the enableJsonFlag property on the Command class.","sidebar":"docs"},"notifications":{"id":"notifications","title":"Notifications","description":"Use node-notifier for cross-platform OS notifications.","sidebar":"docs"},"nsis-installer_customization":{"id":"nsis-installer_customization","title":"NSIS Installer Customization","description":"Sometimes you need to verify some dependencies, ensure there are no conflicting CLIs installed, or do some other custom logic before installing your CLI. For npm-scenarios, simply specify a preinstall script. But Windows installers don\'t include this script. You must instead write your own nsis modification to do these checks. See where this custom script gets placed in the installer in the oclif/oclif repo.","sidebar":"docs"},"performance":{"id":"performance","title":"Performance","description":"oclif supports performance tracking out of the box - both for oclif and you own code. You can enable it in one of two ways depending on how you\'ve implemented your bin scripts.","sidebar":"docs"},"plugin_loading":{"id":"plugin_loading","title":"Plugin Loading","description":"Below is a diagram that outlines how a plugin is loaded into the CLI.","sidebar":"docs"},"plugins":{"id":"plugins","title":"Plugins","description":"Plugins are a great way to offer experimental functionality, allow users to extend your CLI, break up a CLI into modular components, or share functionality between CLIs.","sidebar":"docs"},"prompting":{"id":"prompting","title":"Prompting","description":"The ux export provides a simple cli.prompt() function, for more complex input prompts, we recommend using the inquirer library.","sidebar":"docs"},"related_repos":{"id":"related_repos","title":"Related Repositories","description":"* oclif - oclif CLI","sidebar":"docs"},"releasing":{"id":"releasing","title":"Release","description":"There are 2 main strategies for releasing oclif CLIs: npm and standalone tarballs. You can publish to one or both.","sidebar":"docs"},"running_programmatically":{"id":"running_programmatically","title":"Running Commands Programmatically","description":"If you need to run a command from another, or programmatically run a command in another codebase, there are a couple options.","sidebar":"docs"},"single_command_cli":{"id":"single_command_cli","title":"Single Command CLI","description":"Sometimes you may want your CLI\'s executable to also be the only command, similar to many bash utilities like ls or cat.","sidebar":"docs"},"spinner":{"id":"spinner","title":"Spinner","description":"@oclif/core provides a simple ux.action, for more complex progress indicators we recommend using the listr library.","sidebar":"docs"},"table":{"id":"table","title":"Table","description":"ux.table","sidebar":"docs"},"templates":{"id":"templates","title":"Templates","description":"There are two templates that oclif generate can use:","sidebar":"docs"},"testing":{"id":"testing","title":"Testing","description":"Testing in oclif can be done with any testing framework. You can run commands with MyCommand.run() which returns a promise you can wait on.","sidebar":"docs"},"themes":{"id":"themes","title":"Themes","description":"oclif supports themes that users can either define for themselves or select from a variety of themes you ship with your CLI.","sidebar":"docs"},"topic_separator":{"id":"topic_separator","title":"Topic Separators","description":"By default, topics will be separated with colons, e.g. mycommand. However, you have the option to use spaces if you prefer, e.g. my awesome command.","sidebar":"docs"},"topics":{"id":"topics","title":"Topics","description":"As CLIs grow it can be useful to nest commands within topics. This is supported simply by placing command files in subdirectories. For example, with the Salesforce CLI we have a topic sf config with commands like sf config set and sf config get. The directory structure looks like this:","sidebar":"docs"}}}')}}]);