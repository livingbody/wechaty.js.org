"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[1472,5863,2775,2076,9725,4562,9842,7574,313,196,9685,2826],{3905:function(t,e,o){o.d(e,{Zo:function(){return u},kt:function(){return h}});var n=o(67294);function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function s(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function r(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?s(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function c(t,e){if(null==t)return{};var o,n,a=function(t,e){if(null==t)return{};var o,n,a={},s=Object.keys(t);for(n=0;n<s.length;n++)o=s[n],e.indexOf(o)>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)o=s[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}var i=n.createContext({}),l=function(t){var e=n.useContext(i),o=e;return t&&(o="function"==typeof t?t(e):r(r({},e),t)),o},u=function(t){var e=l(t.components);return n.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var o=t.components,a=t.mdxType,s=t.originalType,i=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),d=l(o),h=a,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||s;return o?n.createElement(m,r(r({ref:e},u),{},{components:o})):n.createElement(m,r({ref:e},u))}));function h(t,e){var o=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var s=o.length,r=new Array(s);r[0]=d;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:a,r[1]=c;for(var l=2;l<s;l++)r[l]=o[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},58215:function(t,e,o){var n=o(67294);e.Z=function(t){var e=t.children,o=t.hidden,a=t.className;return n.createElement("div",{role:"tabpanel",hidden:o,className:a},e)}},55064:function(t,e,o){o.d(e,{Z:function(){return l}});var n=o(67294),a=o(79443);var s=function(){var t=(0,n.useContext)(a.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},r=o(86010),c="tabItem_1uMI",i="tabItemActive_2DSg";var l=function(t){var e,o=t.lazy,a=t.block,l=t.defaultValue,u=t.values,p=t.groupId,d=t.className,h=n.Children.toArray(t.children),m=null!=u?u:h.map((function(t){return{value:t.props.value,label:t.props.label}})),g=null!=l?l:null==(e=h.find((function(t){return t.props.default})))?void 0:e.props.value,y=s(),f=y.tabGroupChoices,b=y.setTabGroupChoices,v=(0,n.useState)(g),k=v[0],w=v[1],N=[];if(null!=p){var x=f[p];null!=x&&x!==k&&m.some((function(t){return t.value===x}))&&w(x)}var T=function(t){var e=t.currentTarget,o=N.indexOf(e),n=m[o].value;w(n),null!=p&&(b(p,n),setTimeout((function(){var t,o,n,a,s,r,c,l;(t=e.getBoundingClientRect(),o=t.top,n=t.left,a=t.bottom,s=t.right,r=window,c=r.innerHeight,l=r.innerWidth,o>=0&&s<=l&&a<=c&&n>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(i),setTimeout((function(){return e.classList.remove(i)}),2e3))}),150))},j=function(t){var e,o=null;switch(t.key){case"ArrowRight":var n=N.indexOf(t.target)+1;o=N[n]||N[0];break;case"ArrowLeft":var a=N.indexOf(t.target)-1;o=N[a]||N[N.length-1]}null==(e=o)||e.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},d)},m.map((function(t){var e=t.value,o=t.label;return n.createElement("li",{role:"tab",tabIndex:k===e?0:-1,"aria-selected":k===e,className:(0,r.Z)("tabs__item",c,{"tabs__item--active":k===e}),key:e,ref:function(t){return N.push(t)},onKeyDown:j,onFocus:T,onClick:T},null!=o?o:e)}))),o?(0,n.cloneElement)(h.filter((function(t){return t.props.value===k}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},h.map((function(t,e){return(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==k})}))))}},79443:function(t,e,o){var n=(0,o(67294).createContext)(void 0);e.Z=n},12775:function(t,e,o){o.r(e),o.d(e,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return h}});var n=o(87462),a=o(63366),s=(o(67294),o(3905)),r=(o(55064),o(58215),o(3569)),c=["components"],i={title:"World's Shortest Chatbot"},l=void 0,u={unversionedId:"examples/basic/the-worlds-shortest-chatbot-code-in-6-lines",id:"examples/basic/the-worlds-shortest-chatbot-code-in-6-lines",isDocsHomePage:!1,title:"World's Shortest Chatbot",description:"Powered by Wechaty",source:"@site/docs/examples/basic/the-worlds-shortest-chatbot-code-in-6-lines.mdx",sourceDirName:"examples/basic",slug:"/examples/basic/the-worlds-shortest-chatbot-code-in-6-lines",permalink:"/docs/examples/basic/the-worlds-shortest-chatbot-code-in-6-lines",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/examples/basic/the-worlds-shortest-chatbot-code-in-6-lines.mdx",tags:[],version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1631608278,formattedLastUpdatedAt:"9/14/2021",frontMatter:{title:"World's Shortest Chatbot"},sidebar:"docs",previous:{title:"Starter Bot",permalink:"/docs/examples/basic/starter-bot"},next:{title:"Ding Dong Bot",permalink:"/docs/examples/basic/ding-dong-bot"}},p=[{value:"Requirements",id:"requirements",children:[]},{value:"Getting started",id:"getting-started",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Reference",id:"reference",children:[]}],d={toc:p};function h(t){var e=t.components,o=(0,a.Z)(t,c);return(0,s.kt)("wrapper",(0,n.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/Wechaty/wechaty"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg",alt:"Powered by Wechaty"})),"\n",(0,s.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg",alt:"TypeScript"}))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"World's Shortest Chatbot")," is the very first example showcasing how easy it is to get started with Wechaty in minimum 6 lines of code."),(0,s.kt)("h2",{id:"requirements"},"Requirements"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download"},"Node.js")," v16+"),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty"},"Wechaty")," v0.40+")),(0,s.kt)("h2",{id:"getting-started"},"Getting started"),(0,s.kt)("p",null,"You should have ",(0,s.kt)("inlineCode",{parentName:"p"},"Node.js")," installed on your system. If you do not have ",(0,s.kt)("inlineCode",{parentName:"p"},"Node.js")," installed (or have a version below 12), then you need to install the latest version of ",(0,s.kt)("inlineCode",{parentName:"p"},"Node.js")," by following the links below:"),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Node.js installation docs")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("ul",{parentName:"div"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#windows"},"Windows")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions"},"Linux","(","Debian/Ubuntu",")")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#macos"},"macOS"))),(0,s.kt)("blockquote",{parentName:"div"},(0,s.kt)("p",{parentName:"blockquote"},"Installation guide for ",(0,s.kt)("inlineCode",{parentName:"p"},"Node.js")," on other platforms can be found ",(0,s.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/package-manager/"},"here"),".")))),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)(r.default,{mdxType:"ShortestChatbots"}),(0,s.kt)("p",null,"For building a bot with Wechaty, you have to follow the steps below:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Import wechaty."),(0,s.kt)("li",{parentName:"ol"},"Create a function ",(0,s.kt)("inlineCode",{parentName:"li"},"main")," and initialize a bot by providing it a name."),(0,s.kt)("li",{parentName:"ol"},"Assign proper functions to call when an event is triggered.",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"When ",(0,s.kt)("inlineCode",{parentName:"li"},"scan")," is triggered, it generates QR code."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"login")," will display ",(0,s.kt)("inlineCode",{parentName:"li"},"{user} logged in")," if the user has logged in."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"message")," will display message on console."))),(0,s.kt)("li",{parentName:"ol"},"Finally, start the bot with ",(0,s.kt)("inlineCode",{parentName:"li"},"bot.start"),".")),(0,s.kt)("h2",{id:"reference"},"Reference"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started/tree/master/examples"},"Wechaty Getting Started Github Repository")))}h.isMDXComponent=!0},88332:function(t,e,o){o.r(e),o.d(e,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=o(87462),a=o(63366),s=(o(67294),o(3905)),r=["components"],c={},i=void 0,l={unversionedId:"polyglot/dotnet/transclusions/shortest-chatbot",id:"polyglot/dotnet/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`csharp",source:"@site/docs/polyglot/dotnet/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/dotnet/transclusions",slug:"/polyglot/dotnet/transclusions/shortest-chatbot",permalink:"/docs/polyglot/dotnet/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/polyglot/dotnet/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"3/18/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,o=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'var wechaty = new Wechaty(options, logger).onScan((qrcode, status) => {\n  Console.WriteLine($"Scan QR Code to login: {status} https://wechaty.js.org/qrcode/{(qrcode)}`");\n}).OnLogin( user => {\n  Console.WriteLine("User {user} logined");\n}).OnMessage( message => {\n  Console.WriteLine($"Message: {message}");\n}).Start();\n')))}d.isMDXComponent=!0},7230:function(t,e,o){o.r(e),o.d(e,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=o(87462),a=o(63366),s=(o(67294),o(3905)),r=["components"],c={},i=void 0,l={unversionedId:"polyglot/go/transclusions/shortest-chatbot",id:"polyglot/go/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`go",source:"@site/docs/polyglot/go/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/go/transclusions",slug:"/polyglot/go/transclusions/shortest-chatbot",permalink:"/docs/polyglot/go/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/polyglot/go/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"3/18/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,o=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n "fmt"\n\n  "github.com/wechaty/go-wechaty/wechaty"\n)\n\nfunc main() {\n  _ = wechaty.NewWechaty().\n    OnScan(func(qrCode, status string) {\n      fmt.Printf("Scan QR Code to login: %s\\nhttps://wechaty.js.org/qrcode/%s\\n", status, qrCode)\n    }).\n    OnLogin(func(user string) { fmt.Printf("User %s logged in\\n", user) }).\n    OnMessage(func(message string) { fmt.Printf("Message: %s\\n", message) }).\n    Start()\n}\n')))}d.isMDXComponent=!0},91791:function(t,e,o){o.r(e),o.d(e,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=o(87462),a=o(63366),s=(o(67294),o(3905)),r=["components"],c={},i=void 0,l={unversionedId:"polyglot/java/transclusions/shortest-chatbot",id:"polyglot/java/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`java",source:"@site/docs/polyglot/java/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/java/transclusions",slug:"/polyglot/java/transclusions/shortest-chatbot",permalink:"/docs/polyglot/java/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/polyglot/java/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"3/18/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,o=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'package io.github.wechaty;\n\nclass Bot{\n  public static void main(String args[]){\n    Wechaty bot = Wechaty.instance()\n      .onScan((qrcode, statusScanStatus, data) -> System.out.println(QrcodeUtils.getQr(qrcode)))\n      .onLogin(user -> System.out.println("User logged in :" + user))\n      .onMessage(message -> System.out.println("Message:" + message))\n      .start(true);\n  }\n}\n')))}d.isMDXComponent=!0},55318:function(t,e,o){o.r(e),o.d(e,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=o(87462),a=o(63366),s=(o(67294),o(3905)),r=["components"],c={},i=void 0,l={unversionedId:"polyglot/openapi/transclusions/shortest-chatbot",id:"polyglot/openapi/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`sh",source:"@site/docs/polyglot/openapi/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/openapi/transclusions",slug:"/polyglot/openapi/transclusions/shortest-chatbot",permalink:"/docs/polyglot/openapi/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/polyglot/openapi/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616054254,formattedLastUpdatedAt:"3/18/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,o=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"# To be add: curl ...\n")))}d.isMDXComponent=!0},29577:function(t,e,o){o.r(e),o.d(e,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=o(87462),a=o(63366),s=(o(67294),o(3905)),r=["components"],c={},i=void 0,l={unversionedId:"polyglot/php/transclusions/shortest-chatbot",id:"polyglot/php/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`php",source:"@site/docs/polyglot/php/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/php/transclusions",slug:"/polyglot/php/transclusions/shortest-chatbot",permalink:"/docs/polyglot/php/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/polyglot/php/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"3/18/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,o=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},'$wechaty = \\IO\\Github\\Wechaty\\Wechaty::getInstance($token, $endPoint);\n$wechaty->onScan(function($qrcode, $status, $data) {\n    $qr = \\IO\\Github\\Wechaty\\Util\\QrcodeUtils::getQr($qrcode);\n    echo "$qr\\n\\nOnline Image: https://wechaty.js.org/qrcode/$qrcode\\n";\n})->onLogin(function(\\IO\\Github\\Wechaty\\User\\ContactSelf $user) {\n})->onMessage(function(\\IO\\Github\\Wechaty\\User\\Message $message) {\n    $message->say("hello from PHP7.4");\n})->start();\n')))}d.isMDXComponent=!0},34608:function(t,e,o){o.r(e),o.d(e,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=o(87462),a=o(63366),s=(o(67294),o(3905)),r=["components"],c={},i=void 0,l={unversionedId:"polyglot/python/transclusions/shortest-chatbot",id:"polyglot/python/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`py",source:"@site/docs/polyglot/python/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/python/transclusions",slug:"/polyglot/python/transclusions/shortest-chatbot",permalink:"/docs/polyglot/python/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/polyglot/python/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"3/18/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,o=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"from wechaty import Wechaty\nimport asyncio\n\nasync def main():\n    bot = Wechaty()\n    bot.on('scan', lambda status, qrcode, data: print('Scan QR Code to login: {}\\nhttps://wechaty.js.org/qrcode/{}'.format(status, qrcode)))\n    bot.on('login', lambda user: print('User {} logged in'.format(user)))\n    bot.on('message', lambda message: print('Message: {}'.format(message)))\n    await bot.start()\n\nasyncio.run(main())\n")))}d.isMDXComponent=!0},19001:function(t,e,o){o.r(e),o.d(e,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=o(87462),a=o(63366),s=(o(67294),o(3905)),r=["components"],c={},i=void 0,l={unversionedId:"polyglot/rust/transclusions/shortest-chatbot",id:"polyglot/rust/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`rust",source:"@site/docs/polyglot/rust/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/rust/transclusions",slug:"/polyglot/rust/transclusions/shortest-chatbot",permalink:"/docs/polyglot/rust/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/polyglot/rust/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"3/18/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,o=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"let bot = Wechaty::new(PuppetService::new(options).await.unwrap());\n\nbot.on_scan(handle_scan)\n    .on_login(handle_login)\n    .on_logout(handle_logout)\n    .on_message(handle_message)\n    .start()\n    .await;\n")))}d.isMDXComponent=!0},23705:function(t,e,o){o.r(e),o.d(e,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=o(87462),a=o(63366),s=(o(67294),o(3905)),r=["components"],c={},i=void 0,l={unversionedId:"polyglot/scala/transclusions/shortest-chatbot",id:"polyglot/scala/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`scala",source:"@site/docs/polyglot/scala/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/scala/transclusions",slug:"/polyglot/scala/transclusions/shortest-chatbot",permalink:"/docs/polyglot/scala/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/polyglot/scala/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"3/18/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,o=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'package wechaty\n\nobject DingDongBot {\n  def main(args: Array[String]): Unit = {\n    Wechaty.instance()\n      .onScan(payload     => { println("Scan QR Code to login: %s\\nhttps://wechaty.js.org/qrcode/%s\\n".format(payload.status, payload.qrcode)) })\n      .onLogin(payload    => { println("User %s logged in\\n".format(payload.id)) })\n      .onMessage(message  => { println(message) })\n      .start()\n    Thread.currentThread().join()\n  }\n}\n')))}d.isMDXComponent=!0},3569:function(t,e,o){o.r(e),o.d(e,{frontMatter:function(){return v},contentTitle:function(){return k},metadata:function(){return w},toc:function(){return N},default:function(){return T}});var n=o(87462),a=o(63366),s=(o(67294),o(3905)),r=o(55064),c=o(58215),i=o(47650),l=o(55318),u=o(62570),p=o(34608),d=o(7230),h=o(91791),m=o(29577),g=o(23705),y=o(88332),f=o(19001),b=["components"],v={},k=void 0,w={unversionedId:"polyglot/transclusions/shortest-chatbots",id:"polyglot/transclusions/shortest-chatbots",isDocsHomePage:!1,title:"shortest-chatbots",description:"<Tabs",source:"@site/docs/polyglot/transclusions/shortest-chatbots.mdx",sourceDirName:"polyglot/transclusions",slug:"/polyglot/transclusions/shortest-chatbots",permalink:"/docs/polyglot/transclusions/shortest-chatbots",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/polyglot/transclusions/shortest-chatbots.mdx",tags:[],version:"current",lastUpdatedBy:"shwetal",lastUpdatedAt:1630752945,formattedLastUpdatedAt:"9/4/2021",frontMatter:{}},N=[],x={toc:N};function T(t){var e=t.components,o=(0,a.Z)(t,b);return(0,s.kt)("wrapper",(0,n.Z)({},x,o,{components:e,mdxType:"MDXLayout"}),(0,s.kt)(r.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"},{label:"OpenAPI",value:"openapi"}],mdxType:"Tabs"},(0,s.kt)(c.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)(i.default,{mdxType:"ShortestChatbotTypeScript"})),(0,s.kt)(c.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)(u.default,{mdxType:"ShortestChatbotJavaScript"})),(0,s.kt)(c.Z,{value:"py",mdxType:"TabItem"},(0,s.kt)(p.default,{mdxType:"ShortestChatbotPython"})),(0,s.kt)(c.Z,{value:"go",mdxType:"TabItem"},(0,s.kt)(d.default,{mdxType:"ShortestChatbotGo"})),(0,s.kt)(c.Z,{value:"java",mdxType:"TabItem"},(0,s.kt)(h.default,{mdxType:"ShortestChatbotJava"})),(0,s.kt)(c.Z,{value:"php",mdxType:"TabItem"},(0,s.kt)(m.default,{mdxType:"ShortestChatbotPhp"})),(0,s.kt)(c.Z,{value:"scala",mdxType:"TabItem"},(0,s.kt)(g.default,{mdxType:"ShortestChatbotScala"})),(0,s.kt)(c.Z,{value:"csharp",mdxType:"TabItem"},(0,s.kt)(y.default,{mdxType:"ShortestChatbotDotnet"})),(0,s.kt)(c.Z,{value:"rust",mdxType:"TabItem"},(0,s.kt)(f.default,{mdxType:"ShortestChatbotRust"})),(0,s.kt)(c.Z,{value:"openapi",mdxType:"TabItem"},(0,s.kt)(l.default,{mdxType:"ShortestChatbotOpenApi"}))))}T.isMDXComponent=!0},62570:function(t,e,o){o.r(e),o.d(e,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=o(87462),a=o(63366),s=(o(67294),o(3905)),r=["components"],c={},i=void 0,l={unversionedId:"polyglot/typescript/transclusions/shortest-chatbot-js",id:"polyglot/typescript/transclusions/shortest-chatbot-js",isDocsHomePage:!1,title:"shortest-chatbot-js",description:"`js",source:"@site/docs/polyglot/typescript/transclusions/shortest-chatbot-js.mdx",sourceDirName:"polyglot/typescript/transclusions",slug:"/polyglot/typescript/transclusions/shortest-chatbot-js",permalink:"/docs/polyglot/typescript/transclusions/shortest-chatbot-js",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/polyglot/typescript/transclusions/shortest-chatbot-js.mdx",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1631790719,formattedLastUpdatedAt:"9/16/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,o=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { Wechaty }  from 'wechaty'\n\nasync function main () {\n  const bot = new Wechaty()\n  bot\n    .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))\n    .on('login',            user => console.log(`User ${user} logged in`))\n    .on('message',       message => console.log(`Message: ${message}`))\n  await bot.start()\n}\n\nmain()\n  .catch(console.error)\n")))}d.isMDXComponent=!0},47650:function(t,e,o){o.r(e),o.d(e,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=o(87462),a=o(63366),s=(o(67294),o(3905)),r=["components"],c={},i=void 0,l={unversionedId:"polyglot/typescript/transclusions/shortest-chatbot",id:"polyglot/typescript/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`ts",source:"@site/docs/polyglot/typescript/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/typescript/transclusions",slug:"/polyglot/typescript/transclusions/shortest-chatbot",permalink:"/docs/polyglot/typescript/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/polyglot/typescript/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Xiaohan Li",lastUpdatedAt:1619007923,formattedLastUpdatedAt:"4/21/2021",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,o=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Wechaty } from 'wechaty'\n\nasync function main () {\n  const bot = new Wechaty()\n  bot\n    .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))\n    .on('login',            user => console.log(`User ${user} logged in`))\n    .on('message',       message => console.log(`Message: ${message}`))\n  await bot.start()\n}\n\nmain()\n  .catch(console.error)\n")))}d.isMDXComponent=!0},86010:function(t,e,o){function n(t){var e,o,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(o=n(t[e]))&&(a&&(a+=" "),a+=o);else for(e in t)t[e]&&(a&&(a+=" "),a+=e);return a}function a(){for(var t,e,o=0,a="";o<arguments.length;)(t=arguments[o++])&&(e=n(t))&&(a&&(a+=" "),a+=e);return a}o.d(e,{Z:function(){return a}})}}]);