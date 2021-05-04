(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{104:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var n=r(0),o=r.n(n);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,h=u["".concat(a,".").concat(b)]||u[b]||d[b]||s;return r?o.a.createElement(h,i(i({ref:t},l),{},{components:r})):o.a.createElement(h,i({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,a=new Array(s);a[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},84:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),s=(r(0),r(104)),a={title:"ethers.js provider"},i={unversionedId:"flashbots-core/searchers/ethers-js-provider",id:"flashbots-core/searchers/ethers-js-provider",isDocsHomePage:!1,title:"ethers.js provider",description:"ethers-provider-flashbots-bundle is a repository that contains the FlashbotsBundleProvider ethers.js provider to provide high-level access to the eth_sendBundle rpc endpoint on mev-relay.",source:"@site/docs/flashbots-core/searchers/ethers-js-provider.md",slug:"/flashbots-core/searchers/ethers-js-provider",permalink:"/flashbots-core/searchers/ethers-js-provider",version:"current",sidebar:"docs",previous:{title:"simple arbitrage bot",permalink:"/flashbots-core/searchers/simple-arbitrage-bot"},next:{title:"web3.py provider",permalink:"/flashbots-core/searchers/web3py-provider"}},c=[],l={toc:c};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"ethers-provider-flashbots-bundle is a repository that contains the ",Object(s.b)("inlineCode",{parentName:"p"},"FlashbotsBundleProvider")," ethers.js provider to provide high-level access to the ",Object(s.b)("inlineCode",{parentName:"p"},"eth_sendBundle")," rpc endpoint on ",Object(s.b)("a",{parentName:"p",href:"https://github.com/flashbots/mev-relay-js"},"mev-relay"),"."),Object(s.b)("p",null,"Flashbots-enabled relays and miners expose two new jsonrpc endpoint: ",Object(s.b)("inlineCode",{parentName:"p"},"eth_sendBundle")," and ",Object(s.b)("inlineCode",{parentName:"p"},"eth_callBundle"),". Since these are brand-new, non-standard endpoints, ethers.js and other libraries do not natively support these requests (like ",Object(s.b)("inlineCode",{parentName:"p"},"getTransactionCount"),"). In order to interact with these endpoints, you will also need access to another full-featured (non-Flashbots) endpoint for nonce-calculation, gas estimation, and transaction status."),Object(s.b)("p",null,"This library is not a fully functional ethers.js implementation, just a simple provider class, designed to interact with your existing ethers.js v5 module."),Object(s.b)("p",null,"Access the ethers-provider-flashbots-bundle repository ",Object(s.b)("a",{parentName:"p",href:"https://github.com/flashbots/ethers-provider-flashbots-bundle"},"here"),"."))}p.isMDXComponent=!0}}]);