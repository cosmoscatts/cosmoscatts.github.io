import{d as h,o as e,m as o,C as P,x as n,y as _,_ as x,S as y,e as u,F as p,B as m,c as C,T as k,v as b,U as w,K as B,a as j}from"./app-41ce1120.js";const $={class:"group prose",block:"","of-hidden":"","transition-all":"","duration-500":"","bg-c":"",relative:""},L=["src"],N={p4:"",m0:"","pb-3":""},V={op50:"","text-sm":"","text-center":""},W={"text-lg":"","text-center":""},E=h({__name:"WrapperPhoto",props:{image:{},date:{},desc:{}},setup(c){return(t,s)=>(e(),o("div",$,[t.image?(e(),o("img",{key:0,src:t.image,"of-hidden":"","w-full":"","rounded-lg":"","transition-all":"","duration-500":""},null,8,L)):P("",!0),n("div",N,[n("div",V,_(t.date),1),n("p",W,_(t.desc),1)])]))}});const F=x(E,[["__scopeId","data-v-e5166d5f"]]),S=n("div",{"w-90vw":"",mxa:"","mb-5":""},[n("div",{"text-4xl":"","font-bold":""}," 照片集 · 随手拍 ")],-1),T={grid:"~ cols-1 lg:cols-2 xl:cols-3 gap-4"},A=h({__name:"ListPhotos",props:{photos:{default:()=>[]}},setup(c){const t=y(w),s=u(()=>t.xl.value?3:t.lg.value?2:1),i=u(()=>{const r=Array.from({length:s.value},()=>[]);return c.photos.forEach((l,a)=>{r[a%s.value].push(l)}),r});return(r,l)=>{const a=F;return e(),o(p,null,[S,n("div",T,[(e(!0),o(p,null,m(b(i),(g,f)=>(e(),o("div",{key:f,flex:"~ col gap-4"},[(e(!0),o(p,null,m(g,(v,d)=>(e(),C(a,k({key:d},v,{class:"slide-enter",style:{"--enter-stage":d+1}}),null,16,["style"]))),128))]))),128))])],64)}}}),H="Photos - Cosmoscatts",I=[{image:"/photos/2023-08-26/cloud.jpg",date:"2023/8/26（周六）",desc:"云"},{image:"/photos/2023-06-23/sunset.jpg",date:"2023/6/23（周五）",desc:"晚霞"}],K=[{property:"og:title",content:"Photos - Cosmoscatts"},{name:"twitter:title",content:"Photos - Cosmoscatts"}],U={__name:"photos",setup(c,{expose:t}){const s={title:"Photos - Cosmoscatts",photos:[{image:"/photos/2023-08-26/cloud.jpg",date:"2023/8/26（周六）",desc:"云"},{image:"/photos/2023-06-23/sunset.jpg",date:"2023/6/23（周五）",desc:"晚霞"}],meta:[{property:"og:title",content:"Photos - Cosmoscatts"},{name:"twitter:title",content:"Photos - Cosmoscatts"}]};return t({frontmatter:s}),B({title:"Photos - Cosmoscatts",meta:[{property:"og:title",content:"Photos - Cosmoscatts"},{name:"twitter:title",content:"Photos - Cosmoscatts"}]}),(r,l)=>{const a=A;return e(),o("div",null,[j(a,{photos:s.photos},null,8,["photos"])])}}};export{U as default,K as meta,I as photos,H as title};
