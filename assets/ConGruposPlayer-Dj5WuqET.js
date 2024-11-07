var V=Object.defineProperty;var x=(a,e,o)=>e in a?V(a,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[e]=o;var n=(a,e,o)=>x(a,typeof e!="symbol"?e+"":e,o);import{u as b,a as c,g as d}from"./app.service-Cx92PLT6.js";import{_ as v}from"./InputApp.vue_vue_type_script_setup_true_lang-CZlXw_hO.js";import{l as h,d as C,j as N,m as S,c as l,a as t,F as y,g as B,e as m,b as G,i as E,k as L,r as P,f as i,h as R,w as I,t as T,y as U}from"./index-BTGA3Sxu.js";class A{constructor(){n(this,"appStore");n(this,"getAll",()=>this.appStore.grupos);n(this,"getOne",()=>{});n(this,"create",async e=>{(await c.POST("/grupos",e)).status<400&&(d.success("Grupo creado!"),this.appStore.getData())});n(this,"update",async(e,o)=>{(await c.PUT("/grupos/"+e,o)).status<400&&(d.createNotification("Grupo actualizado!",{type:"success"}),this.appStore.getData())});n(this,"delete",async e=>{(await c.DELETE("/grupos/"+e)).status<400&&(d.createNotification("Grupo Borrado!",{type:"success"}),this.appStore.getData())});this.appStore=b()}}const F=h("grupos-store",()=>new A),O={class:"max-w-2xl mx-auto grid gap-2 p-4"},j={class:"bg-indigo-700 p-2 rounded-lg text-center"},z={key:0},$={class:"grid gap-3 max-w-md p-5"},q={class:"grid"},H={class:"grid"},W=C({__name:"ConGruposPlayer",setup(a){const e=L();e.params.campeonatoId;const o=e.params.regionId,g=F(),f=b(),k=N(()=>f.grupos.filter(_=>_.region_id===o)),p=S(""),u=S("");async function w(){await g.create({nombre:p.value,descripcion:u.value,region_id:o,fecha_actual_orden:1}),f.getData()}return(_,s)=>{const D=P("RouterLink");return i(),l(y,null,[t("div",O,[(i(!0),l(y,null,B(k.value,r=>(i(),R(D,{key:r.id,to:"/campeonato/"+m(e).params.campeonatoId+"/region/"+m(o)+"/grupos/"+r.id+"/encuentros"},{default:I(()=>[t("div",j,T(r.nombre),1)]),_:2},1032,["to"]))),128))]),m(U)?(i(),l("div",z,[t("div",$,[t("div",q,[s[2]||(s[2]=t("label",{for:"name"},"Nombre del grupo",-1)),G(v,{id:"name",modelValue:p.value,"onUpdate:modelValue":s[0]||(s[0]=r=>p.value=r)},null,8,["modelValue"])]),t("div",H,[s[3]||(s[3]=t("label",{for:"descripcion"},"Descripción",-1)),G(v,{id:"descripcion",modelValue:u.value,"onUpdate:modelValue":s[1]||(s[1]=r=>u.value=r)},null,8,["modelValue"])])]),t("button",{onClick:w},"Crear Grupo para region")])):E("",!0)],64)}}});export{W as default};
