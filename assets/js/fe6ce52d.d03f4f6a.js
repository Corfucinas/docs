(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(104)),c={title:"interacting with mev-geth"},i={unversionedId:"flashbots-core/searchers/interacting-with-mev-geth",id:"flashbots-core/searchers/interacting-with-mev-geth",isDocsHomePage:!1,title:"interacting with mev-geth",description:"MEV-Geth is a fork of the go-ethereum client that miners run to accept searchers' bundles. You do not need to run MEV-Geth as a searcher, but, instead, to monitor the Ethereum state and transaction pool for MEV opportunities and produce transaction bundles that extract that MEV. Anyone can become a searcher. In fact, the bundles produced by searchers don't need to extract MEV at all, but we expect the most valuable bundles will.",source:"@site/docs/flashbots-core/searchers/interacting-with-mev-geth.md",slug:"/flashbots-core/searchers/interacting-with-mev-geth",permalink:"/flashbots-core/searchers/interacting-with-mev-geth",version:"current",sidebar:"docs",previous:{title:"interacting with mev-relay",permalink:"/flashbots-core/searchers/interacting-with-mev-relay"},next:{title:"simple arbitrage bot",permalink:"/flashbots-core/searchers/simple-arbitrage-bot"}},s=[{value:"MEV-Geth bundle selection logic",id:"mev-geth-bundle-selection-logic",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"MEV-Geth is a fork of the go-ethereum client that miners run to accept searchers' bundles. You do ",Object(o.b)("em",{parentName:"p"},"not")," need to run MEV-Geth as a searcher, but, instead, to monitor the Ethereum state and transaction pool for MEV opportunities and produce transaction bundles that extract that MEV. Anyone can become a searcher. In fact, the bundles produced by searchers don't need to extract MEV at all, but we expect the most valuable bundles will."),Object(o.b)("p",null,"An MEV-Geth bundle is a standard message template composed of an array of valid ethereum transactions, a blockheight, and an optional timestamp range over which the bundle is valid."),Object(o.b)("p",null,"You can access the mev-geth repository ",Object(o.b)("a",{parentName:"p",href:"https://github.com/flashbots/mev-geth"},"here"),"."),Object(o.b)("h3",{id:"mev-geth-bundle-selection-logic"},"MEV-Geth bundle selection logic"),Object(o.b)("p",null,"MEV-Geth miners select the most profitable bundle per unit of gas used and place it at the beginning of the list of transactions of the block template at a given blockheight. Miners determine the value of a bundle based on the following equation.\n",Object(o.b)("em",{parentName:"p"},"Note, the change in block.coinbase balance represents a direct transfer of ETH through a smart contract.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://hackmd.io/_uploads/Bk6iQmr5P.png",alt:"Docusaurus"})),Object(o.b)("p",null,"To submit a bundle, the searcher sends the bundle directly to the miner using the rpc method ",Object(o.b)("inlineCode",{parentName:"p"},"eth_sendBundle"),". Since MEV-Geth requires direct communication between searchers and miners, a searcher can configure the list of miners where they want to send their bundle."))}u.isMDXComponent=!0},104:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=u(n),p=r,d=h["".concat(c,".").concat(p)]||h[p]||b[p]||o;return n?a.a.createElement(d,i(i({ref:t},l),{},{components:n})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);