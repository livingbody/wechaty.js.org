"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[6470,4984,9591],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(67294),r=a(79443);var o=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(86010),s="tabItem_1uMI",l="tabItemActive_2DSg";var p=function(e){var t,a=e.lazy,r=e.block,p=e.defaultValue,c=e.values,u=e.groupId,d=e.className,m=n.Children.toArray(e.children),h=null!=c?c:m.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=p?p:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,y=o(),k=y.tabGroupChoices,w=y.setTabGroupChoices,T=(0,n.useState)(v),g=T[0],N=T[1],f=[];if(null!=u){var E=k[u];null!=E&&E!==g&&h.some((function(e){return e.value===E}))&&N(E)}var P=function(e){var t=e.currentTarget,a=f.indexOf(t),n=h[a].value;N(n),null!=u&&(w(u,n),setTimeout((function(){var e,a,n,r,o,i,s,p;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,o=e.right,i=window,s=i.innerHeight,p=i.innerWidth,a>=0&&o<=p&&r<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},b=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=f.indexOf(e.target)+1;a=f[n]||f[0];break;case"ArrowLeft":var r=f.indexOf(e.target)-1;a=f[r]||f[f.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},d)},h.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":g===t}),key:t,ref:function(e){return f.push(e)},onKeyDown:b,onFocus:P,onClick:P},null!=a?a:t)}))),a?(0,n.cloneElement)(m.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,a){var n=(0,a(67294).createContext)(void 0);t.Z=n},75403:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return h},default:function(){return y}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=a(55064),s=a(58215),l=a(13322),p=a(89226),c=["components"],u={title:"Puppet Service: DIY"},d=void 0,m={unversionedId:"puppet-services/diy",id:"puppet-services/diy",isDocsHomePage:!1,title:"Puppet Service: DIY",description:"Wechaty Puppet Service DIY",source:"@site/docs/puppet-services/diy.md",sourceDirName:"puppet-services",slug:"/puppet-services/diy",permalink:"/docs/puppet-services/diy",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/puppet-services/diy.md",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1631075354,formattedLastUpdatedAt:"9/8/2021",frontMatter:{title:"Puppet Service: DIY"},sidebar:"docs",previous:{title:"Compatibility",permalink:"/docs/puppet-services/compatibility"},next:{title:"Puppet Services: FAQ",permalink:"/docs/puppet-services/"}},h=[{value:"Steps",id:"steps",children:[{value:"1. Pull the latest Wechaty Docker Image",id:"1-pull-the-latest-wechaty-docker-image",children:[]},{value:"2. Config Wechaty Puppet Provider",id:"2-config-wechaty-puppet-provider",children:[]},{value:"3. Create your own Wechaty Puppet Service TOKEN",id:"3-create-your-own-wechaty-puppet-service-token",children:[]},{value:"4. Set Wechaty Puppet Service port",id:"4-set-wechaty-puppet-service-port",children:[]},{value:"5. Set Wechaty Log Level",id:"5-set-wechaty-log-level",children:[]},{value:"6. Config TLS(SSL) for Wechaty Puppet Service (optional)",id:"6-config-tlsssl-for-wechaty-puppet-service-optional",children:[]},{value:"7. Start your Wechaty Token Gate Server",id:"7-start-your-wechaty-token-gate-server",children:[]},{value:"8. Check your TOKEN service",id:"8-check-your-token-service",children:[]},{value:"\ud83c\udf89 Congratulations! You are all set",id:"-congratulations-you-are-all-set",children:[]}]},{value:"All in One Command",id:"all-in-one-command",children:[]},{value:"Blogs",id:"blogs",children:[]},{value:"History",id:"history",children:[]},{value:"Support",id:"support",children:[]}],v={toc:h};function y(e){var t=e.components,a=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/puppet-services/diy"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Service-DIY-blue",alt:"Wechaty Puppet Service DIY"}))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Do It Yourself")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can make a Wechaty Puppet Service easily from any Wechaty Puppet Providers."))),(0,o.kt)("p",null,"You can build a Wechaty Puppet Service by yourself with any Wechaty Puppet Providers."),(0,o.kt)("h2",{id:"steps"},"Steps"),(0,o.kt)("p",null,"We have a easy to use docker image which works out-of-the-box."),(0,o.kt)("h3",{id:"1-pull-the-latest-wechaty-docker-image"},"1. Pull the latest Wechaty Docker Image"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker pull wechaty/wechaty\n")),(0,o.kt)("h3",{id:"2-config-wechaty-puppet-provider"},"2. Config Wechaty Puppet Provider"),(0,o.kt)("p",null,"We need to choice which ",(0,o.kt)("a",{parentName:"p",href:"/docs/puppet-providers/"},"Wechaty Puppet Provider")," we want to use by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"WECHATY_PUPPET")," environment variable."),(0,o.kt)("p",null,"For example, you can choose ",(0,o.kt)("a",{parentName:"p",href:"/docs/puppet-providers/wechat"},"wechaty-puppet-wechat")," by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"WECHATY_PUPPET=wechaty-puppet-wechat"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Wechaty Puppet Providers")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Learn all ",(0,o.kt)("a",{parentName:"p",href:"/docs/puppet-providers/"},"Wechaty Puppet Providers")),(0,o.kt)("p",{parentName:"div"},"You need to set all environment variables which requires from a specific provider."),(0,o.kt)("p",{parentName:"div"},"For example, an additional token will be required by ",(0,o.kt)("inlineCode",{parentName:"p"},"PadLocal"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"WECHATY_PUPPET_PADLOCAL_TOKEN=puppet_padlocal${TOKEN}")))),(0,o.kt)(i.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_PUPPET="wechaty-puppet-wechat"\n'))),(0,o.kt)(s.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_PUPPET="wechaty-puppet-wechat"\n'))),(0,o.kt)(s.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'set WECHATY_PUPPET="wechaty-puppet-wechat"\n')))),(0,o.kt)("h3",{id:"3-create-your-own-wechaty-puppet-service-token"},"3. Create your own Wechaty Puppet Service TOKEN"),(0,o.kt)("p",null,"In order to provide ",(0,o.kt)("a",{parentName:"p",href:"/docs/specs/service"},"Wechaty Puppet Service"),", you need to specify a ",(0,o.kt)("a",{parentName:"p",href:"/docs/specs/token"},"TOKEN")," for authorization."),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"https://www.uuidgenerator.net/version4"},"Generate a new UUIDv4")," online, use this new UUIDv4 as your token."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"TOKEN uniqueness")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Your new token ",(0,o.kt)("strong",{parentName:"p"},"MUST")," different to any existing tokens in our system. (or they will conflict!)"))),(0,o.kt)(i.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_TOKEN=$(curl -s https://www.uuidgenerator.net/api/version4)\necho "WECHATY_TOKEN=$WECHATY_TOKEN"\n'))),(0,o.kt)(s.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_TOKEN=$(curl -s https://www.uuidgenerator.net/api/version4)\necho "WECHATY_TOKEN=$WECHATY_TOKEN"\n'))),(0,o.kt)(s.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# TODO: use script to get UUIDv4 automatically like Linux/Mac\nset WECHATY_TOKEN="__UUIDv4__"\n')))),(0,o.kt)("h3",{id:"4-set-wechaty-puppet-service-port"},"4. Set Wechaty Puppet Service port"),(0,o.kt)("p",null,"The port for your ",(0,o.kt)("a",{parentName:"p",href:"/docs/specs/service"},"Wechaty Puppet Service")," need to be specified. Make sure it's free on your server."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"port availablility")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"The server IP must be public on the internet"),(0,o.kt)("li",{parentName:"ol"},"the port must be public accessible on the internet")))),(0,o.kt)(i.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_PUPPET_SERVER_PORT="8788"\n'))),(0,o.kt)(s.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_PUPPET_SERVER_PORT="8788"\n'))),(0,o.kt)(s.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'set WECHATY_PUPPET_SERVER_PORT="8788"\n')))),(0,o.kt)("h3",{id:"5-set-wechaty-log-level"},"5. Set Wechaty Log Level"),(0,o.kt)("p",null,"Enable ",(0,o.kt)("inlineCode",{parentName:"p"},"verbose")," log message output for easy debugging."),(0,o.kt)("p",null,"More options are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"silly"),": all debug messages will be outputed"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"verbose"),": recommended debug level"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"info"),": disable debug messages"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"warning"),": only warning message"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"silence"),": no log message")),(0,o.kt)(i.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_LOG="verbose"\n'))),(0,o.kt)(s.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_LOG="verbose"\n'))),(0,o.kt)(s.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'set WECHATY_LOG="verbose"\n')))),(0,o.kt)("h3",{id:"6-config-tlsssl-for-wechaty-puppet-service-optional"},"6. Config TLS(SSL) for Wechaty Puppet Service (optional)"),(0,o.kt)("p",null,"From ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/issues/2231"},"Wechaty version 0.67"),", the Puppet Service will enable TLS(SSL) by default. (See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-service/issues/160"},"wechaty/wechaty-puppet-service#160"),")"),(0,o.kt)("p",null,"You can enable/disable the TLS by setting environment variables to fullfil your needs."),(0,o.kt)("p",null,"For example, if you need to provide a Wechaty Puppet Service token without TLS, then you can set ",(0,o.kt)("inlineCode",{parentName:"p"},"WECHATY_PUPPET_SERVICE_NO_TLS_INSECURE_SERVER=true")," to disable TLS."),(0,o.kt)(i.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# set to "true" to disable TLS (not recommanded)\nexport WECHATY_PUPPET_SERVICE_NO_TLS_INSECURE_SERVER="false"\n'))),(0,o.kt)(s.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# set to "true" to disable TLS (not recommanded)\nexport WECHATY_PUPPET_SERVICE_NO_TLS_INSECURE_SERVER="false"\n'))),(0,o.kt)(s.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# set to "true" to disable TLS (not recommanded)\nset WECHATY_PUPPET_SERVICE_NO_TLS_INSECURE_SERVER="false"\n')))),(0,o.kt)("h3",{id:"7-start-your-wechaty-token-gate-server"},"7. Start your Wechaty Token Gate Server"),(0,o.kt)("p",null,"After finish config all the above settings, start the token gate server with the following docker command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -ti \\\n  --name wechaty_puppet_service_token_gateway \\\n  --rm \\\n  --privileged \\\n  --network=host \\\n  -e WECHATY_LOG \\\n  -e WECHATY_PUPPET \\\n  -e WECHATY_PUPPET_SERVER_PORT \\\n  -e WECHATY_PUPPET_SERVICE_NO_TLS_INSECURE_SERVER \\\n  -e WECHATY_TOKEN \\\n  wechaty/wechaty\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"privileged mode")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Privileged mode is for using host networking to simplify the docker arguments."),(0,o.kt)("p",{parentName:"div"},"If you want to remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"--privileged"),", you need to add:"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-p $WECHATY_PUPPET_SERVER_PORT:$WECHATY_PUPPET_SERVER_PORT")," for Linux & Mac"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-p %WECHATY_PUPPET_SERVER_PORT%:%WECHATY_PUPPET_SERVER_PORT%")," for Windows")))),(0,o.kt)("h3",{id:"8-check-your-token-service"},"8. Check your TOKEN service"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"wait for token gateway getting full started")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The docker command in the previous step might need some time to getting fully started."),(0,o.kt)("p",{parentName:"div"},"Wait and read the docker container log messages carefully to make sure the server has been started before continue this step."))),(0,o.kt)("p",null,"Check your TOKEN availability by visiting ",(0,o.kt)("inlineCode",{parentName:"p"},"https://api.chatie.io/v0/hosties/${WECHATY_TOKEN}")),(0,o.kt)(i.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"echo HTTP/$(curl -s -o /dev/null -w '%{http_code}' https://api.chatie.io/v0/hosties/${WECHATY_TOKEN})\n"))),(0,o.kt)(s.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"echo HTTP/$(curl -s -o /dev/null -w '%{http_code}' https://api.chatie.io/v0/hosties/${WECHATY_TOKEN})\n"))),(0,o.kt)(s.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# echo HTTP/$(curl -s -o /dev/null -w '%{http_code}' https://api.chatie.io/v0/hosties/${WECHATY_TOKEN})\n# TODO: add windows version. (Pull Request is welcome!)\n")))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Succ: ",(0,o.kt)("inlineCode",{parentName:"li"},"HTTP/200")," means you are good, the TOKEN is ready to use."),(0,o.kt)("li",{parentName:"ol"},"Fail: ",(0,o.kt)("inlineCode",{parentName:"li"},"HTTP/404")," means the TOKEN is not registered successfully.")),(0,o.kt)("p",null,"If you get ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP/404"),", then you need to check the previous steps and troubleshoot which part has problems. If you find anything need to be reported, please feel free to submit an issue at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/puppet-services/issues"},"here")),(0,o.kt)("h4",{id:"using-wechaty-token-cli"},"Using ",(0,o.kt)("inlineCode",{parentName:"h4"},"wechaty-token")," CLI"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"wechaty-token")," CLI command to check the TOKEN status."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm install --global wechaty-token\n+ wechaty-token@0.4.3\nupdated 1 package in 2.654s\n\n$ wechaty-token --help\nwechaty-token <subcommand>\n> Wechaty utility for discovering and generating tokens\n\nwhere <subcommand> can be one of:\n\n- generate - Generate a new Wechaty Token\n- discover - Wechaty TOKEN Service Discovery\n\nFor more help, try running `wechaty-token <subcommand> --help`\n\n$ wechaty-token discover puppet_not_exist_token\nNotFound\n\n$ wechaty-token discover ${WECHATY_TOKEN}\n{ host: '1.2.3.4', port: 5678 }\n")),(0,o.kt)("p",null,"Learn more about the TOKEN from ",(0,o.kt)("a",{parentName:"p",href:"/docs/specs/token"},"Wechaty Puppet Service TOKEN Specification"),"."),(0,o.kt)("h3",{id:"-congratulations-you-are-all-set"},"\ud83c\udf89 Congratulations! You are all set"),(0,o.kt)("p",null,"Your Wechaty Puppet Service will be ready to service for ",(0,o.kt)("a",{parentName:"p",href:"/docs/polyglot/"},"Polyglot Wechaty"),"!"),(0,o.kt)("h2",{id:"all-in-one-command"},"All in One Command"),(0,o.kt)("p",null,"For use Wechaty Token Gateway with ease, you can copy/paste the following code (with modifications for your need) in your bash shell:"),(0,o.kt)(i.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)(l.default,{mdxType:"TokenGatewayUnix"})),(0,o.kt)(s.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)(l.default,{mdxType:"TokenGatewayUnix"})),(0,o.kt)(s.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)(p.default,{mdxType:"TokenGatewayWin32"}))),(0,o.kt)("p",null,"I hope you enjoy it!"),(0,o.kt)("h2",{id:"blogs"},"Blogs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/02/03/python-wechaty-for-padlocal-puppet-service/"},"Python Wechaty\u5982\u4f55\u4f7f\u7528PadLocal Puppet Service, Biofer, Feb, 3, 2021")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/01/28/csharp-wechaty-for-padlocal-puppet-service/"},".NET Wechaty\u5982\u4f55\u4f7f\u7528PadLocal Puppet Service, Darren, Jan 28, 2021"))),(0,o.kt)("h2",{id:"history"},"History"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Using your Puppet PadLocal token with Python, Java, and Go Wechaty ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/discussions/1985"},"wechaty/wechaty#1985")),(0,o.kt)("li",{parentName:"ol"},"How to create your own Wechaty Puppet Service Token with the Web Protocol ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/discussions/1986"},"wechaty/wechaty#1986")),(0,o.kt)("li",{parentName:"ol"},"Using PadLocal Token with Polyglot Wechaty via Token Gateway ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/puppet-services/issues/84"},"wechaty/puppet-services#84")),(0,o.kt)("li",{parentName:"ol"},"Wechaty is All You Need: Python, Go, and Java Translation Project ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/discussions/1927"},"wechaty/wechaty#1927"))),(0,o.kt)("h2",{id:"support"},"Support"),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"https://gitter.im/wechaty/wechaty"},"join our Gitter")," network if you aren\u2019t already a member."))}y.isMDXComponent=!0},13322:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={},l=void 0,p={unversionedId:"puppet-services/transclusions/token-gateway-unix",id:"puppet-services/transclusions/token-gateway-unix",isDocsHomePage:!1,title:"token-gateway-unix",description:"`sh",source:"@site/docs/puppet-services/transclusions/token-gateway-unix.mdx",sourceDirName:"puppet-services/transclusions",slug:"/puppet-services/transclusions/token-gateway-unix",permalink:"/docs/puppet-services/transclusions/token-gateway-unix",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/puppet-services/transclusions/token-gateway-unix.mdx",tags:[],version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1624043380,formattedLastUpdatedAt:"6/18/2021",frontMatter:{}},c=[],u={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# Step 1\ndocker pull wechaty/wechaty\n\n# Step 2\n#   here we are using wechaty-puppet-wechat for example\n#   replace it to fit your needs\nexport WECHATY_PUPPET=wechaty-puppet-wechat\n\n# Step 3\nexport WECHATY_TOKEN=$(curl -s https://www.uuidgenerator.net/api/version4)\necho "WECHATY_TOKEN=$WECHATY_TOKEN"\n\n# Step 4\nexport WECHATY_PUPPET_SERVER_PORT=8788\n\n# Step 5\nexport WECHATY_LOG="verbose"\n\n# Step 6\ndocker run \\\n  -d \\\n  -ti \\\n  --name wechaty_puppet_service_token_gateway \\\n  --rm \\\n  --privileged \\\n  --network=host \\\n  -e WECHATY_LOG \\\n  -e WECHATY_PUPPET \\\n  -e WECHATY_PUPPET_SERVER_PORT \\\n  -e WECHATY_TOKEN \\\n  wechaty/wechaty\n\n# Step 7\nexport HTTP_CODE=$(curl -s -o /dev/null -w \'%{http_code}\' https://api.chatie.io/v0/hosties/${WECHATY_TOKEN})\nif [ "$HTTP_CODE" == 200 ]; then\n  echo "Wechaty Puppet Service TOKEN ${WECHATY_TOKEN} online status:"\n  curl https://api.chatie.io/v0/hosties/${WECHATY_TOKEN}\n  echo\nelse\n  >&2 echo "ERROR: Wechaty Puppet Service TOKEN ${WECHATY_TOKEN} out of service"\nfi\n\n# Step 8 \ud83c\udf89\n')))}d.isMDXComponent=!0},89226:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={},l=void 0,p={unversionedId:"puppet-services/transclusions/token-gateway-win32",id:"puppet-services/transclusions/token-gateway-win32",isDocsHomePage:!1,title:"token-gateway-win32",description:"`sh",source:"@site/docs/puppet-services/transclusions/token-gateway-win32.mdx",sourceDirName:"puppet-services/transclusions",slug:"/puppet-services/transclusions/token-gateway-win32",permalink:"/docs/puppet-services/transclusions/token-gateway-win32",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/puppet-services/transclusions/token-gateway-win32.mdx",tags:[],version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1624043380,formattedLastUpdatedAt:"6/18/2021",frontMatter:{}},c=[],u={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'#\n# Huan(202006): To be fixed for Win32\n#\n\n# Step 1\ndocker pull wechaty/wechaty\n\n# Step 2\n#   here we are using wechaty-puppet-wechat for example\n#   replace it to fit your needs\nset WECHATY_PUPPET=wechaty-puppet-wechat\n\n# Step 3\nset WECHATY_TOKEN=$(curl -s https://www.uuidgenerator.net/api/version4)\necho "WECHATY_TOKEN=%WECHATY_TOKEN%"\n\n# Step 4\nset WECHATY_PUPPET_SERVER_PORT=8788\n\n# Step 5\nset WECHATY_LOG="verbose"\n\n# Step 6\ndocker run \\\n  -d \\\n  -ti \\\n  --name wechaty_puppet_service_token_gateway \\\n  --rm \\\n  --privileged \\\n  --network=host \\\n  -e WECHATY_LOG \\\n  -e WECHATY_PUPPET \\\n  -e WECHATY_PUPPET_SERVER_PORT \\\n  -e WECHATY_TOKEN \\\n  wechaty/wechaty\n\n# Step 7\nset HTTP_CODE=$(curl -s -o /dev/null -w \'%{http_code}\' https://api.chatie.io/v0/hosties/${WECHATY_TOKEN})\nif [ "$HTTP_CODE" == 200 ]; then\n  echo "Wechaty Puppet Service TOKEN ${WECHATY_TOKEN} online status:"\n  curl https://api.chatie.io/v0/hosties/${WECHATY_TOKEN}\n  echo\nelse\n  >&2 echo "ERROR: Wechaty Puppet Service TOKEN ${WECHATY_TOKEN} out of service"\nfi\n\n# Step 8 \ud83c\udf89\n')))}d.isMDXComponent=!0},86010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);