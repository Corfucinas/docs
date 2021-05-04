(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,h=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return n?r.a.createElement(h,c(c({ref:t},s),{},{components:n})):r.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(104)),o={title:"mev-geth introduction"},c={unversionedId:"flashbots-core/miners/mev-geth-introduction",id:"flashbots-core/miners/mev-geth-introduction",isDocsHomePage:!1,title:"mev-geth introduction",description:"MEV-Geth: a proof of concept",source:"@site/docs/flashbots-core/miners/mev-geth-introduction.md",slug:"/flashbots-core/miners/mev-geth-introduction",permalink:"/flashbots-core/miners/mev-geth-introduction",version:"current",sidebar:"docs",previous:{title:"quick start",permalink:"/flashbots-core/miners/quick-start"},next:{title:"mev-geth usage",permalink:"/flashbots-core/miners/mev-geth-usage"}},l=[{value:"MEV-Geth: a proof of concept",id:"mev-geth-a-proof-of-concept",children:[{value:"Why MEV-Geth?",id:"why-mev-geth",children:[]},{value:"Design goals",id:"design-goals",children:[]},{value:"How it works",id:"how-it-works",children:[]},{value:"Differences between MEV-Geth and vanilla geth",id:"differences-between-mev-geth-and-vanilla-geth",children:[]},{value:"Moving beyond proof of concept",id:"moving-beyond-proof-of-concept",children:[]}]}],s={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"mev-geth-a-proof-of-concept"},"MEV-Geth: a proof of concept"),Object(i.b)("p",null,"We have designed and implemented a proof of concept for permissionless MEV extraction called MEV-Geth. It is a sealed-bid block space auction mechanism for communicating transaction order preference. While our proof of concept has incomplete trust guarantees, we believe it's a significant improvement over the status quo. The adoption of MEV-Geth should relieve a lot of the network and chain congestion caused by frontrunning and backrunning bots."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Guarantee"),Object(i.b)("th",{parentName:"tr",align:"center"},"PGA"),Object(i.b)("th",{parentName:"tr",align:"center"},"Dark-txPool"),Object(i.b)("th",{parentName:"tr",align:"center"},"MEV-Geth"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Permissionless"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u2705"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u274c"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u2705")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Efficient"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u274c"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u274c"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u2705")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Pre-trade privacy"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u274c"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u2705"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u2705")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Failed trade privacy"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u274c"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u274c"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u2705")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Complete privacy"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u274c"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u274c"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u274c")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Finality"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u274c"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u274c"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u274c")))),Object(i.b)("h3",{id:"why-mev-geth"},"Why MEV-Geth?"),Object(i.b)("p",null,"We believe that without the adoption of neutral, public, open-source infrastructure for permissionless MEV extraction, MEV risks becoming an insiders' game. We commit as an organization to releasing reference implementations for participation in fair, ethical, and politically neutral MEV extraction. By doing so, we hope to prevent the properties of Ethereum from being eroded by trust-based dark pools or proprietary channels which are key points of security weakness. We thus release MEV-Geth with the dual goal of creating an ecosystem for MEV extraction that preserves Ethereum properties, as well as starting conversations with the community around our research and development roadmap."),Object(i.b)("h3",{id:"design-goals"},"Design goals"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Permissionless"),"\nA permissionless design implies there are no trusted intermediary which can censor transactions."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Efficient"),"\nAn efficient design implies MEV extraction is performed without causing unnecessary network or chain congestion."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Pre-trade privacy"),"\nPre-trade privacy implies transactions only become publicly known after they have been included in a block. Note, this type of privacy does not exclude privileged actors such as transaction aggregators / gateways / miners."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Failed trade privacy"),"\nFailed trade privacy implies loosing bids are never included in a block, thus never exposed to the public. Failed trade privacy is tightly coupled to extraction efficiency."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Complete privacy"),"\nComplete privacy implies there are no privileged actors such as transaction aggregators / gateways / miners who can observe incoming transactions."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Finality"),"\nFinality implies it is infeasible for MEV extraction to be reversed once included in a block. This would protect against time-bandit chain re-org attacks.")),Object(i.b)("p",null,"The MEV-Geth proof of concept relies on the fact that searchers can withhold bids from certain miners in order to disincentivize bad behavior like stealing a profitable strategy. We expect a complete privacy design to necessitate some sort of private computation solution like SGX, ZKP, or MPC to withhold the transaction content from miners until it is mined in a block. One of the core objective of the Flashbots organization is to incentivize and produce research in this direction."),Object(i.b)("p",null,"The MEV-Geth proof of concept does not provide any finality guarantees. We expect the solution to this problem to require post-trade execution privacy through private chain state or strong economic infeasibility. The design of a system with strong finality is the second core objective of the MEV-Geth research effort."),Object(i.b)("h3",{id:"how-it-works"},"How it works"),Object(i.b)("p",null,'MEV-Geth introduces the concepts of "searchers", "transaction bundles", and "block template" to Ethereum. Effectively, MEV-Geth provides a way for miners to delegate the task of finding and ordering transactions to third parties called "searchers". These searchers compete with each other to find the most profitable ordering and bid for its inclusion in the next block using a standardized template called a "transaction bundle". These bundles are evaluated in a sealed-bid auction hosted by miners to produce a "block template" which holds the ',Object(i.b)("a",{parentName:"p",href:"https://ethereum.stackexchange.com/questions/268/ethereum-block-architecture"},"information about transaction order required to begin mining"),"."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://hackmd.io/_uploads/B1fWz7rcD.png",alt:null})),Object(i.b)("p",null,"The MEV-Geth proof of concept is compatible with any regular Ethereum client. The Flashbots core devs are maintaining ",Object(i.b)("a",{parentName:"p",href:"https://github.com/flashbots/mev-geth"},"a reference implementation")," for the go-ethereum client."),Object(i.b)("h3",{id:"differences-between-mev-geth-and-vanilla-geth"},"Differences between MEV-Geth and ",Object(i.b)("a",{parentName:"h3",href:"https://github.com/ethereum/go-ethereum"},Object(i.b)("em",{parentName:"a"},"vanilla")," geth")),Object(i.b)("p",null,"The entire patch can be broken down into four modules:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"bundle worker and ",Object(i.b)("inlineCode",{parentName:"li"},"eth_sendBundle")," rpc (commits ",Object(i.b)("a",{parentName:"li",href:"https://github.com/flashbots/mev-geth/commit/8104d5d7b0a54bd98b3a08479a1fde685eb53c29"},"8104d5d7b0a54bd98b3a08479a1fde685eb53c29")," and ",Object(i.b)("a",{parentName:"li",href:"https://github.com/flashbots/mev-geth/commit/c2b5b4029b2b748a6f1a9d5668f12096f096563d"},"c2b5b4029b2b748a6f1a9d5668f12096f096563d"),")"),Object(i.b)("li",{parentName:"ol"},"profit switcher (commit ",Object(i.b)("a",{parentName:"li",href:"https://github.com/flashbots/mev-geth/commit/aa5840d22f4882f91ecba0eb20ef35a702b134d5"},"aa5840d22f4882f91ecba0eb20ef35a702b134d5"),")"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"eth_callBundle")," simulation rpc (commits ",Object(i.b)("a",{parentName:"li",href:"https://github.com/flashbots/mev-geth/commit/9199d2e13d484df7a634fad12343ed2b46d5d4c3"},"9199d2e13d484df7a634fad12343ed2b46d5d4c3")," and ",Object(i.b)("a",{parentName:"li",href:"https://github.com/flashbots/mev-geth/commit/a99dfc198817dd171128cc22439c81896e876619"},"a99dfc198817dd171128cc22439c81896e876619"),")"),Object(i.b)("li",{parentName:"ol"},"Documentation (this file) and CI/infrastructure configuration (commit ",Object(i.b)("a",{parentName:"li",href:"https://github.com/flashbots/mev-geth/commit/035109807944f7a446467aa27ca8ec98d109a465"},"035109807944f7a446467aa27ca8ec98d109a465"),")")),Object(i.b)("p",null,"The entire changeset can be viewed inspecting the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ethereum/go-ethereum/compare/master...flashbots:master"},"diff"),"."),Object(i.b)("p",null,"In summary:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Geth\u2019s txpool is modified to also contain a ",Object(i.b)("inlineCode",{parentName:"li"},"mevBundles")," field, which stores a list of MEV bundles. Each MEV bundle is an array of transactions, along with a min/max timestamp for their inclusion."),Object(i.b)("li",{parentName:"ul"},"A new ",Object(i.b)("inlineCode",{parentName:"li"},"eth_sendBundle")," API is exposed which allows adding an MEV Bundle to the txpool. During the Flashbots Alpha, this is only called by MEV-relay.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The transactions submitted to the bundle are \u201ceth_sendRawTransaction-style\u201d RLP encoded signed transactions along with the min/max block of inclusion"),Object(i.b)("li",{parentName:"ul"},"This API is a no-op when run in light mode"))),Object(i.b)("li",{parentName:"ul"},"Geth\u2019s miner is modified as follows:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"While in the event loop, before adding all the pending txpool \u201cnormal\u201d transactions to the block, it:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Finds the most profitable bundle",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"It picks the most profitable bundle by returning the one with the highest average gas price per unit of gas",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"computeBundleGas: Returns average gas price (\\sum{gasprice_i","*","gasused_i + (coinbase_after - coinbase_before)) / \\sum{gasused_i})"))))),Object(i.b)("li",{parentName:"ul"},"Commits the bundle (remember: Bundle transactions are not ordered by nonce or gas price). For each transaction in the bundle, it:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Prepare"),"\u2019s it against the state"),Object(i.b)("li",{parentName:"ul"},"CommitsTransaction with trackProfit = true\nw.current.profit += coinbase_after_tx - coinbase_before_tx\nw.current.profit += gas ","*"," gas_price"))))),Object(i.b)("li",{parentName:"ul"},"If a block is found where the w.current.profit is more than the previous profit, it switches mining to that block."))),Object(i.b)("li",{parentName:"ul"},"A new ",Object(i.b)("inlineCode",{parentName:"li"},"eth_callBundle")," API is exposed that enables simulation of transaction bundles."),Object(i.b)("li",{parentName:"ul"},"Documentation and CI/infrastructure files are added.")),Object(i.b)("h3",{id:"moving-beyond-proof-of-concept"},"Moving beyond proof of concept"),Object(i.b)("p",null,"We provide the MEV-Geth proof of concept as a first milestone on the path to mitigating the negative externalities caused by MEV. We hope to discuss with the community the merits of adopting MEV-Geth in its current form. Our preliminary research indicates it could free at least 2.5% of the current chain congestion by eliminating the use of frontrunning and backrunning and provide uplift of up to 18% on miner rewards from Ethereum. That being said, we believe a sustainable solution to MEV existential risks requires complete privacy and finality, which the proof of concept does not address. We hope to engage community feedback throughout the development of this complete version of MEV-Geth."))}b.isMDXComponent=!0}}]);