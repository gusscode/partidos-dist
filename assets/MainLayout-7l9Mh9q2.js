import{d as m,u as f,r as x,o as d,c as g,a as t,b as n,i as k,e as w,w as i,f as y,g as u,v as C,h as s,j as c,k as P,R as V}from"./index-CZ--LVNJ.js";import{D as M}from"./DialogMain-C9bsqLvT.js";import{_ as l}from"./IconsPlus.vue_vue_type_script_setup_true_lang-CoanRu1Y.js";const h={class:"bg-slate-800 p-3 flex justify-between"},L={class:"flex gap-3"},$={class:"bg-slate-500 rounded-lg p-3 shadow-lg grid gap-3 border border-indigo-800"},B={class:"grid max-w-40 w-full grid-cols-2"},D=["onClick"],N=m({__name:"NavMain",setup(v){const o=f(),p=async()=>{await o.refresh(),o.readPronostico(),o.aplicateAllPronostico()};return(b,e)=>{const _=x("RouterLink");return d(),g("nav",h,[e[7]||(e[7]=t("div",null,"pronofutbol.com",-1)),t("div",L,[n(k)?(d(),w(_,{key:0,to:"/app"},{default:i(()=>e[5]||(e[5]=[t("button",null,"App",-1)])),_:1})):y("",!0),u(t("input",{type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=a=>n(o).view5Last=a)},null,512),[[C,n(o).view5Last]]),t("button",{class:"text-blue-200 rounded-full",onClick:e[1]||(e[1]=(...a)=>n(o).savePronostico&&n(o).savePronostico(...a))},[s(l,{name:"save"})]),t("button",{class:"text-green-300 rounded-full",onClick:p},[s(l,{name:"play"})]),t("button",{class:"text-indigo-200 rounded-full",onClick:e[2]||(e[2]=a=>n(o).refresh())},[s(l,{name:"refresh"})]),s(M,{label:"Options"},{button:i(()=>[s(l,{name:"settings"})]),default:i(({closeDialog:a})=>[t("div",$,[e[6]||(e[6]=t("header",null,null,-1)),t("section",null,[t("header",B,[u(t("input",{class:"bg-slate-600",type:"number","onUpdate:modelValue":e[3]||(e[3]=r=>n(o).intervalPlaying=r)},null,512),[[c,n(o).intervalPlaying]]),u(t("input",{class:"bg-slate-600",type:"number","onUpdate:modelValue":e[4]||(e[4]=r=>n(o).intervalWinnerPlaying=r)},null,512),[[c,n(o).intervalWinnerPlaying]])])]),t("footer",null,[t("button",{onClick:a},"cerrar",8,D)])])]),_:1})])])}}}),R={class:"text-white m-auto w-full max-w-4xl"},S={class:""},W=m({__name:"MainLayout",setup(v){const o=f();return P(()=>{o.getPartidos()}),console.log(!1),(p,b)=>(d(),g("div",R,[s(N),t("main",S,[s(n(V))])]))}});export{W as default};
