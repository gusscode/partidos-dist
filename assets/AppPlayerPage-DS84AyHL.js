import{u}from"./app.service-CImTAlKv.js";import{d as i,c as t,a as r,F as n,n as p,b as d,r as c,o,e as g,w as m,p as b,t as _}from"./index-CZ--LVNJ.js";const f={class:"grid w-full gap-3 pt-5 w-full max-w-96 mx-auto"},k=`
 bg-cyan-700 rounded-xl  p-3 border border-blue-400/50 w-full
hover:bg-blue-600 duration-300 hover:border-orange-400/50
`,h=i({__name:"AppPlayerPage",setup(w){const a=u();return(x,s)=>{const l=c("RouterLink");return o(),t(n,null,[s[0]||(s[0]=r("header",null,null,-1)),r("section",f,[(o(!0),t(n,null,p(d(a).campeonatos,e=>(o(),g(l,{key:e.id,to:"/player/campeonato/"+e.id+(e.regiones?"/regiones/":"")+(e.grupos?"/grupos/":"")+(e.ligas?"/ligas/":"")},{default:m(()=>[r("button",{class:b(k)},_(e.nombre),1)]),_:2},1032,["to"]))),128))])],64)}}});export{h as default};
