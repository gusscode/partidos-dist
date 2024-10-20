import{u}from"./app.service-8F3n67v2.js";import{d as i,c as t,a as r,F as n,g as p,e as d,r as g,f as s,h as c,w as m,n as f,t as _}from"./index-Io0fq1QB.js";const b={class:"grid w-full gap-3 pt-5 w-full max-w-96 mx-auto"},k=`
 bg-cyan-700 rounded-xl  p-3 border border-blue-400/50 w-full
hover:bg-blue-600 duration-300 hover:border-orange-400/50
`,y=i({__name:"AppPlayerPage",setup(w){const a=u();return(x,o)=>{const l=g("RouterLink");return s(),t(n,null,[o[0]||(o[0]=r("header",null,null,-1)),r("section",b,[(s(!0),t(n,null,p(d(a).campeonatos,e=>(s(),c(l,{key:e.id,to:"/campeonato/"+e.id+(e.regiones?"/regiones/":"")+(e.grupos?"/grupos/":"")+(e.ligas?"/ligas/":"")},{default:m(()=>[r("button",{class:f(k)},_(e.nombre),1)]),_:2},1032,["to"]))),128))])],64)}}});export{y as default};
