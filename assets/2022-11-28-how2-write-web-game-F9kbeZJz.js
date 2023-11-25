import{K as a,o as e,m as t,L as o,x as s,A as l}from"./app-unHkIdtL.js";const p=""+new URL("../images/in-post/2022-11-28/header.jpeg",import.meta.url).href,c=""+new URL("../images/in-post/2022-11-28/snakegame.png",import.meta.url).href,r=""+new URL("../images/in-post/2022-11-28/kof.png",import.meta.url).href,y={class:"prose prose-lg m-auto text-left slide-enter-content"},A=o('<p><div class="table-of-contents"><ul><li><a href="#基类">基类 </a></li><li><a href="#实践">实践 </a><ul><li><a href="#贪吃蛇">贪吃蛇 </a></li><li><a href="#拳皇">拳皇 </a></li></ul></li></ul></div></p><p>总结游戏的基本编写方法。</p><p><img src="'+p+'" alt=""></p><hr><p>原来一直觉得写游戏很复杂，所以一直没有尝试写一些小游戏。直到看了 yxc 的教学，发现写小游戏也并不是那么复杂。写游戏也是有固定套路的，所以在此记录一下，orz…</p><hr><h2 id="基类" tabindex="-1">基类 <a class="header-anchor" href="#基类" aria-hidden="true">#</a></h2><p>一般来说，写这些小游戏都会写一个基类，这个基类定义基本的 start 和 update 方法；初始时，执行一次 start 方法，之后浏览器刷新的每一帧都会只执行 update 方法。这样，游戏主体只需要继承这个基类，就可以拥有 start、update 方法，我们只需要实现一个 render 函数控制游戏每个时刻该渲染什么样，把这个 render 函数放在 update 函数中执行，就可以实现游戏的渲染。</p>',8),i=s("div",{class:"language-ts"},[s("span",{class:"lang"},"ts"),s("pre",{class:"shiki github-dark-dimmed shiki-dark",tabindex:"0"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#F47067"}},"const"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#6CB6FF"}},"GAME_OBJECTS"),s("span",{style:{color:"#F47067"}},":"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F69D50"}},"GameObject"),s("span",{style:{color:"#ADBAC7"}},"[] "),s("span",{style:{color:"#F47067"}},"="),s("span",{style:{color:"#ADBAC7"}}," []")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#768390"}},"/*")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#768390"}},"  游戏对象基类：")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#768390"}},"    定义一些基本参数和通用方法")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#768390"}},"*/")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F47067"}},"export"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F47067"}},"class"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F69D50"}},"GameObject"),s("span",{style:{color:"#ADBAC7"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"  "),s("span",{style:{color:"#F69D50"}},"timeDelta"),s("span",{style:{color:"#F47067"}},":"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#6CB6FF"}},"number"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#768390"}},"// 间隔")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"  "),s("span",{style:{color:"#F69D50"}},"hasCalledStart"),s("span",{style:{color:"#F47067"}},":"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#6CB6FF"}},"boolean"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#768390"}},"// 是否执行了 start 方法")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"  "),s("span",{style:{color:"#F47067"}},"constructor"),s("span",{style:{color:"#ADBAC7"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    "),s("span",{style:{color:"#6CB6FF"}},"this"),s("span",{style:{color:"#ADBAC7"}},".timeDelta "),s("span",{style:{color:"#F47067"}},"="),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#6CB6FF"}},"0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    "),s("span",{style:{color:"#6CB6FF"}},"this"),s("span",{style:{color:"#ADBAC7"}},".hasCalledStart "),s("span",{style:{color:"#F47067"}},"="),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#6CB6FF"}},"false")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    "),s("span",{style:{color:"#6CB6FF"}},"GAME_OBJECTS"),s("span",{style:{color:"#ADBAC7"}},"."),s("span",{style:{color:"#DCBDFB"}},"push"),s("span",{style:{color:"#ADBAC7"}},"("),s("span",{style:{color:"#6CB6FF"}},"this"),s("span",{style:{color:"#ADBAC7"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"  "),s("span",{style:{color:"#DCBDFB"}},"start"),s("span",{style:{color:"#ADBAC7"}},"() {")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"  "),s("span",{style:{color:"#DCBDFB"}},"update"),s("span",{style:{color:"#ADBAC7"}},"() {")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"  "),s("span",{style:{color:"#DCBDFB"}},"beforeDestory"),s("span",{style:{color:"#ADBAC7"}},"() {")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"  "),s("span",{style:{color:"#DCBDFB"}},"destory"),s("span",{style:{color:"#ADBAC7"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    "),s("span",{style:{color:"#6CB6FF"}},"this"),s("span",{style:{color:"#ADBAC7"}},"."),s("span",{style:{color:"#DCBDFB"}},"beforeDestory"),s("span",{style:{color:"#ADBAC7"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    "),s("span",{style:{color:"#F47067"}},"for"),s("span",{style:{color:"#ADBAC7"}}," ("),s("span",{style:{color:"#F47067"}},"let"),s("span",{style:{color:"#ADBAC7"}}," i "),s("span",{style:{color:"#F47067"}},"="),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#6CB6FF"}},"0"),s("span",{style:{color:"#ADBAC7"}},"; i "),s("span",{style:{color:"#F47067"}},"<"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#6CB6FF"}},"GAME_OBJECTS"),s("span",{style:{color:"#ADBAC7"}},"."),s("span",{style:{color:"#6CB6FF"}},"length"),s("span",{style:{color:"#ADBAC7"}},"; i"),s("span",{style:{color:"#F47067"}},"++"),s("span",{style:{color:"#ADBAC7"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"      "),s("span",{style:{color:"#F47067"}},"const"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#6CB6FF"}},"obj"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F47067"}},"="),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#6CB6FF"}},"GAME_OBJECTS"),s("span",{style:{color:"#ADBAC7"}},"[i]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"      "),s("span",{style:{color:"#F47067"}},"if"),s("span",{style:{color:"#ADBAC7"}}," ("),s("span",{style:{color:"#6CB6FF"}},"this"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F47067"}},"==="),s("span",{style:{color:"#ADBAC7"}}," obj) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"        "),s("span",{style:{color:"#6CB6FF"}},"GAME_OBJECTS"),s("span",{style:{color:"#ADBAC7"}},"."),s("span",{style:{color:"#DCBDFB"}},"splice"),s("span",{style:{color:"#ADBAC7"}},"(i)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"        "),s("span",{style:{color:"#F47067"}},"break")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"      }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F47067"}},"let"),s("span",{style:{color:"#ADBAC7"}}," lastTimestamp "),s("span",{style:{color:"#F47067"}},"="),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#6CB6FF"}},"0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F47067"}},"function"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#DCBDFB"}},"step"),s("span",{style:{color:"#ADBAC7"}},"("),s("span",{style:{color:"#F69D50"}},"timestamp"),s("span",{style:{color:"#F47067"}},":"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#6CB6FF"}},"number"),s("span",{style:{color:"#ADBAC7"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"  "),s("span",{style:{color:"#F47067"}},"for"),s("span",{style:{color:"#ADBAC7"}}," ("),s("span",{style:{color:"#F47067"}},"const"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#6CB6FF"}},"obj"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#F47067"}},"of"),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#6CB6FF"}},"GAME_OBJECTS"),s("span",{style:{color:"#ADBAC7"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    "),s("span",{style:{color:"#F47067"}},"if"),s("span",{style:{color:"#ADBAC7"}}," ("),s("span",{style:{color:"#F47067"}},"!"),s("span",{style:{color:"#ADBAC7"}},"obj.hasCalledStart) { "),s("span",{style:{color:"#768390"}},"// 第一次执行 start 方法")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"      obj.hasCalledStart "),s("span",{style:{color:"#F47067"}},"="),s("span",{style:{color:"#ADBAC7"}}," "),s("span",{style:{color:"#6CB6FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"      obj."),s("span",{style:{color:"#DCBDFB"}},"start"),s("span",{style:{color:"#ADBAC7"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    "),s("span",{style:{color:"#F47067"}},"else"),s("span",{style:{color:"#ADBAC7"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"      obj.timeDelta "),s("span",{style:{color:"#F47067"}},"="),s("span",{style:{color:"#ADBAC7"}}," timestamp "),s("span",{style:{color:"#F47067"}},"-"),s("span",{style:{color:"#ADBAC7"}}," lastTimestamp")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"      obj."),s("span",{style:{color:"#DCBDFB"}},"update"),s("span",{style:{color:"#ADBAC7"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"  lastTimestamp "),s("span",{style:{color:"#F47067"}},"="),s("span",{style:{color:"#ADBAC7"}}," timestamp")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"  "),s("span",{style:{color:"#DCBDFB"}},"requestAnimationFrame"),s("span",{style:{color:"#ADBAC7"}},"(step)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#ADBAC7"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DCBDFB"}},"requestAnimationFrame"),s("span",{style:{color:"#ADBAC7"}},"(step)")]),l(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki github-light shiki-light",tabindex:"0"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"GAME_OBJECTS"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"GameObject"),s("span",{style:{color:"#24292E"}},"[] "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," []")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"/*")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"  游戏对象基类：")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"    定义一些基本参数和通用方法")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6A737D"}},"*/")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"export"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"class"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"GameObject"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#E36209"}},"timeDelta"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"number"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6A737D"}},"// 间隔")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#E36209"}},"hasCalledStart"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"boolean"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6A737D"}},"// 是否执行了 start 方法")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"constructor"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".timeDelta "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".hasCalledStart "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"false")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"GAME_OBJECTS"),s("span",{style:{color:"#24292E"}},"."),s("span",{style:{color:"#6F42C1"}},"push"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},"start"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},"update"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},"beforeDestory"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},"destory"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},"."),s("span",{style:{color:"#6F42C1"}},"beforeDestory"),s("span",{style:{color:"#24292E"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"for"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#D73A49"}},"let"),s("span",{style:{color:"#24292E"}}," i "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},"; i "),s("span",{style:{color:"#D73A49"}},"<"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"GAME_OBJECTS"),s("span",{style:{color:"#24292E"}},"."),s("span",{style:{color:"#005CC5"}},"length"),s("span",{style:{color:"#24292E"}},"; i"),s("span",{style:{color:"#D73A49"}},"++"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"obj"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"GAME_OBJECTS"),s("span",{style:{color:"#24292E"}},"[i]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#D73A49"}},"if"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"==="),s("span",{style:{color:"#24292E"}}," obj) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#005CC5"}},"GAME_OBJECTS"),s("span",{style:{color:"#24292E"}},"."),s("span",{style:{color:"#6F42C1"}},"splice"),s("span",{style:{color:"#24292E"}},"(i)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#D73A49"}},"break")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"let"),s("span",{style:{color:"#24292E"}}," lastTimestamp "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"0")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"function"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"step"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#E36209"}},"timestamp"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"number"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"for"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"obj"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"of"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"GAME_OBJECTS"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"if"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#D73A49"}},"!"),s("span",{style:{color:"#24292E"}},"obj.hasCalledStart) { "),s("span",{style:{color:"#6A737D"}},"// 第一次执行 start 方法")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      obj.hasCalledStart "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      obj."),s("span",{style:{color:"#6F42C1"}},"start"),s("span",{style:{color:"#24292E"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"else"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      obj.timeDelta "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," timestamp "),s("span",{style:{color:"#D73A49"}},"-"),s("span",{style:{color:"#24292E"}}," lastTimestamp")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      obj."),s("span",{style:{color:"#6F42C1"}},"update"),s("span",{style:{color:"#24292E"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  lastTimestamp "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," timestamp")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},"requestAnimationFrame"),s("span",{style:{color:"#24292E"}},"(step)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"requestAnimationFrame"),s("span",{style:{color:"#24292E"}},"(step)")]),l(`
`),s("span",{class:"line"})])])],-1),C=o('<h2 id="实践" tabindex="-1">实践 <a class="header-anchor" href="#实践" aria-hidden="true">#</a></h2><h3 id="贪吃蛇" tabindex="-1">贪吃蛇 <a class="header-anchor" href="#贪吃蛇" aria-hidden="true">#</a></h3><p><img src="'+c+'" alt=""></p><p>使用了 vue 和 typescript 简单实现了贪吃蛇吃苹果的小游戏。</p><p>你可以在此处预览：<a href="https://vue-snakegame.netlify.app/" target="_blank" rel="noopener noreferrer">preview</a></p><p>你可以在此处找到实现代码：<a href="https://github.com/cosmoscatts/vue-snakegame" target="_blank" rel="noopener noreferrer">cosmoscatts/vue-snakegame</a></p><h3 id="拳皇" tabindex="-1">拳皇 <a class="header-anchor" href="#拳皇" aria-hidden="true">#</a></h3><p><img src="'+r+'" alt=""> 使用原生三件套实现了简易版拳皇，只有 <strong>草稚京</strong> 这个角色，后面我会使用 vue 写一个新版的拳皇，应该或许会支持多个角色😅。</p><p>你可以在此处找到实现代码：<a href="https://github.com/cosmoscatts/kof-js" target="_blank" rel="noopener noreferrer">cosmoscatts/kof-js</a></p><hr><p>P.S. 长时间不碰就会忘，有些东西还是得记录下来，以备不时之需 (╯‵□′)╯︵╘═╛。</p>',11),D=[A,i,C],b="如何编写 Web 游戏",u=["游戏"],f="总结游戏的基本编写方法",_=[{property:"og:title",content:"如何编写 Web 游戏"},{name:"twitter:title",content:"如何编写 Web 游戏"}],g={__name:"2022-11-28-how2-write-web-game",setup(B,{expose:n}){return n({frontmatter:{title:"如何编写 Web 游戏",tags:["游戏"],excerpt:"总结游戏的基本编写方法",meta:[{property:"og:title",content:"如何编写 Web 游戏"},{name:"twitter:title",content:"如何编写 Web 游戏"}]}}),a({title:"如何编写 Web 游戏",meta:[{property:"og:title",content:"如何编写 Web 游戏"},{name:"twitter:title",content:"如何编写 Web 游戏"}]}),(m,h)=>(e(),t("div",y,D))}};export{g as default,f as excerpt,_ as meta,u as tags,b as title};
