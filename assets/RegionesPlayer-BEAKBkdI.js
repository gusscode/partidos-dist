import{u as i}from"./app.service-CImTAlKv.js";import{d as p,c as o,a as s,F as u,n as l,b as a,s as d,r as m,o as t,e as _,w as f,t as g}from"./index-CZ--LVNJ.js";const k={class:"w-full"},x={class:"w-full max-w-96 mx-auto grid pt-3 gap-2"},h={class:"bg-indigo-700 p-2 rounded-lg text-center"},v=p({__name:"RegionesPlayer",setup(w){const n=d(),r=i();return(y,B)=>{const c=m("RouterLink");return t(),o("section",k,[s("div",x,[(t(!0),o(u,null,l(a(r).regiones,e=>(t(),_(c,{key:e.id,to:"/player/campeonato/"+a(n).params.campeonatoId+"/region/"+e.id+"/encuentros"},{default:f(()=>[s("div",h,g(e.nombre),1)]),_:2},1032,["to"]))),128))])])}}});export{v as default};