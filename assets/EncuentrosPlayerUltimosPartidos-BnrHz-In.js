import{d as M,c as d,i as v,a as s,t as C,b as p,w as z,T as K,F as y,f as t,g as R,n as I,m as U,j as E,o as V,p as Q,e as h,h as L,k as Z,B as oo,v as ao,x as eo,y as N}from"./index-BTGA3Sxu.js";import{u as W}from"./app.service-Cx92PLT6.js";import{_ as H,a as so,u as io,A as to,b as no}from"./PronosticoPlayer.vue_vue_type_style_index_0_scoped_838b29c2_lang-Cl-uFst8.js";import{a as X,D as lo,_ as w}from"./IconsPlus.vue_vue_type_script_setup_true_lang-C1QBUBxr.js";const ro={key:0,class:"bg-slate-900 p-3"},uo={key:1},co={class:"min-h-20 bg-slate-900 duration-300 relative overflow-hidden m-2 p-3 border border-indigo-500/50 rounded-lg grid"},_o={key:0,class:"text-center mb-3"},po={key:0,class:"flex justify-around w-full"},fo=M({__name:"PronosticoPlayer",props:{pronosticos:{},index:{},isRunning:{type:Boolean}},setup(F){const n=F;return(l,c)=>(t(),d(y,null,[l.isRunning?v("",!0):(t(),d("div",ro,"Pronóstico")),l.isRunning?(t(),d("section",uo,[s("div",co,[n.pronosticos[n.index]?(t(),d("h4",_o,C(n.pronosticos[n.index].fecha),1)):v("",!0),p(K,{name:"list"},{default:z(()=>[(t(!0),d(y,null,R(n.pronosticos,(_,g)=>(t(),d(y,{key:_.id},[n.index-1===g?(t(),d("div",po,[s("div",{class:I(["transition-all duration-500",n.index-1===g?_.equipo_local_class:"scale-50"])},[p(H,{equipo_id:_.equipo_local_id},null,8,["equipo_id"])],2),n.index-1===g?(t(),d("div",{key:0,class:I(["transition-all duration-500",_.equipo_visitante_class])},[p(H,{equipo_id:_.equipo_visitante_id},null,8,["equipo_id"])],2)):v("",!0)])):v("",!0)],64))),128))]),_:1})])])):v("",!0)],64))}}),mo=X(fo,[["__scopeId","data-v-838b29c2"]]),ho={class:"flex gap-2 items-center"},go=["src"],vo={class:"px-2"},qo={class:"px-2"},yo=["data-content"],xo={class:"flex gap-1"},ko=M({__name:"TablaEquiposConUltimos",props:{equipos_ids:{},encuentrosIn:{},campeonatoId:{},conUltimosPartidos:{type:Boolean}},setup(F){const n=W(),l=F;U(!0);const c=E(()=>n.campeonatos.find(q=>q.id===l.campeonatoId));U([]);const _=E(()=>g());V(async()=>{});function g(){const q=[];return l.equipos_ids.forEach(r=>{var $;const o=Object.assign([],n.equipos.find(a=>a.id===r));o&&(o.puntos=0,o.partidos_jugados=0,o.ultimos_partidos=[],($=c.value)==null||$.sansiones.forEach(a=>{a.equipo_id===r&&(o.puntos-=a.puntos_descuento)}),l.encuentrosIn.forEach(a=>{var f,S,A,x,u,P,T,B,D,e,i,k;a.fecha_orden>=0&&(a.equipo_local_goles===a.equipo_visitante_goles&&a.realizado&&(a.equipo_local_id===o.id&&(o.puntos+=1,o.partidos_jugados++,a.fecha_orden>=((f=c.value)==null?void 0:f.fecha_actual_orden)&&((S=o.ultimos_partidos)==null||S.push({encuentro_id:a.id,valor:"empatado",fecha_orden:a.fecha_orden}))),a.equipo_visitante_id===o.id&&(o.puntos+=1,o.partidos_jugados++,a.fecha_orden>=((A=c.value)==null?void 0:A.fecha_actual_orden)&&((x=o.ultimos_partidos)==null||x.push({encuentro_id:a.id,valor:"empatado",fecha_orden:a.fecha_orden})))),a.equipo_local_goles>a.equipo_visitante_goles&&a.realizado&&(a.equipo_local_id===o.id&&(o.puntos+=3,o.partidos_jugados++,a.fecha_orden>=((u=c.value)==null?void 0:u.fecha_actual_orden)&&((P=o.ultimos_partidos)==null||P.push({encuentro_id:a.id,valor:"ganado",fecha_orden:a.fecha_orden}))),a.equipo_visitante_id===o.id&&(o.partidos_jugados++,a.fecha_orden>=((T=c.value)==null?void 0:T.fecha_actual_orden)&&((B=o.ultimos_partidos)==null||B.push({encuentro_id:a.id,valor:"perdido",fecha_orden:a.fecha_orden})))),a.equipo_visitante_goles>a.equipo_local_goles&&a.realizado&&(a.equipo_visitante_id===o.id&&(o.puntos+=3,o.partidos_jugados++,a.fecha_orden>=((D=c.value)==null?void 0:D.fecha_actual_orden)&&((e=o.ultimos_partidos)==null||e.push({encuentro_id:a.id,valor:"ganado",fecha_orden:a.fecha_orden}))),a.equipo_local_id===o.id&&(o.partidos_jugados++,a.fecha_orden>=((i=c.value)==null?void 0:i.fecha_actual_orden)&&((k=o.ultimos_partidos)==null||k.push({encuentro_id:a.id,valor:"perdido",fecha_orden:a.fecha_orden})))))}),q.push(o))}),q.sort((r,o)=>o.puntos-r.puntos)}function b(q){var o;let r={tieneSansion:!1,puntosSansion:0};return(o=c.value)==null||o.sansiones.forEach($=>{q.id===$.equipo_id&&(r.puntosSansion=$.puntos_descuento,r.tieneSansion=!0)}),r}return(q,r)=>(t(),d("div",null,[s("table",null,[r[0]||(r[0]=s("thead",null,[s("th",{class:"px-2"},"Equipo"),s("th",{class:"px-2"},"PJ"),s("th",{class:"px-2"},"Pts."),s("th",{class:"px-2"},[s("div",{class:"flex items-center gap-2"},"Últimos Partidos")])],-1)),s("tbody",null,[p(K,{name:"list"},{default:z(()=>[(t(!0),d(y,null,R(_.value,o=>(t(),d("tr",{key:o.id},[s("td",null,[s("div",ho,[s("img",{class:"w-4 h-4",src:o.bandera_img,alt:""},null,8,go),Q(" "+C(o.nombre),1)])]),s("td",vo,C(o.partidos_jugados),1),s("td",qo,[s("div",{class:I(b(o).tieneSansion?"puntos-equipo-sansion":""),"data-content":b(o).tieneSansion?"sansión -"+b(o).puntosSansion:""},C(o.puntos),11,yo)]),s("td",null,[s("div",xo,[p(so,{"ultimos-partidos":o.ultimos_partidos},null,8,["ultimos-partidos"])])])]))),128))]),_:1})])])]))}}),bo=X(ko,[["__scopeId","data-v-564ecc3c"]]),$o={class:"grid md:grid-cols-2 grid-cols-1"},Eo={class:"flex gap-3 p-3"},So={class:"bg-slate-600 p-5 rounded-lg"},Ao={key:0,class:"grid gap-2 py-4 p-2"},Po={key:0},jo=["onClick"],To=M({__name:"EncuentrosPlayerUltimosPartidos",setup(F){const n=Z(),l=W(),c=io();new to;const _=n.params.grupoId;console.log(_),V(()=>{});const g=E(()=>l.encuentros.filter(e=>_?e.grupo_id===_:e.campoenato_id===n.params.campeonatoId&&e.region_id===n.params.regionId)),b=E(()=>l.campeonatos.find(e=>e.id===n.params.campeonatoId)),q=E(()=>l.grupos.find(e=>e.id===n.params.grupoId)),r=E(()=>{const e=[];return g.value.forEach(i=>{e.includes(i.equipo_local_id)||e.push(i.equipo_local_id),e.includes(i.equipo_visitante_id)||e.push(i.equipo_visitante_id)}),e}),o=E(()=>{const e=new Map;return g.value.forEach(i=>{e.has(i.fecha)||e.set(i.fecha,{fecha:i.fecha,fecha_orden:i.fecha_orden})}),Array.from(e.values())});function $(){c.create({equipo_local_id:"",equipo_visitante_id:"",estadium:"",fecha:"",campoenato_id:n.params.campeonatoId,region_id:n.params.regionId,realizado:!1,fecha_orden:0,equipo_local_goles:0,equipo_visitante_goles:0})}function a(e,i){c.create({equipo_local_id:"",equipo_visitante_id:"",estadium:"",fecha:e,campoenato_id:n.params.campeonatoId,region_id:n.params.regionId,realizado:!1,fecha_orden:i,equipo_local_goles:0,equipo_visitante_goles:0})}let f=0;const S=U(1500);let A=0,x=null,u=U(!1);function P(e){if(f<l.pronosticos.length&&e-A>=S.value){const i=l.pronosticos[f].id;let k=l.encuentros.findIndex(m=>m.id===i);k&&(l.encuentros[k]={...l.pronosticos[f]}),f++,A=e}f<l.pronosticos.length&&u.value&&(x=requestAnimationFrame(P))}function T(){u.value=!1}async function B(){f===0&&await l.getData(),u.value||(u.value=!0,oo(()=>{A=performance.now(),x=requestAnimationFrame(P)}))}async function D(){u.value=!1,x!==null&&(f=0,await l.getData(),cancelAnimationFrame(x),x=null)}return V(()=>{}),(e,i)=>{var k;return t(),d(y,null,[i[3]||(i[3]=s("header",null,null,-1)),s("section",$o,[s("div",null,[p(mo,{"is-running":h(u),index:h(f),pronosticos:h(l).pronosticos},null,8,["is-running","index","pronosticos"]),s("div",Eo,[s("button",{class:I([h(u)?"text-orange-400":"text-green-400",""]),onClick:i[0]||(i[0]=m=>h(u)?T():B())},[h(u)?(t(),L(w,{key:0,name:"pause"})):(t(),L(w,{key:1,name:"play"}))],2),s("button",{onClick:D},[p(w,{name:"stop"})]),p(lo,null,{button:z(()=>[p(w,{name:"settings"})]),default:z(()=>[s("div",So,[ao(s("input",{class:"bg-slate-900 ml-4",type:"number","onUpdate:modelValue":i[1]||(i[1]=m=>S.value=m)},null,512),[[eo,S.value]])])]),_:1})]),p(bo,{"campeonato-id":(k=b.value)==null?void 0:k.id,equipos_ids:r.value,"encuentros-in":g.value},null,8,["campeonato-id","equipos_ids","encuentros-in"])]),h(u)?v("",!0):(t(),d("div",Ao,[(t(!0),d(y,null,R(o.value,(m,Y)=>{var O;return t(),d(y,{key:Y},[m.fecha_orden>=((O=b.value)==null?void 0:O.fecha_actual_orden)?(t(),d("div",Po,[Q(C(m.fecha)+" ",1),h(N)?(t(),d("button",{key:0,onClick:j=>a(m.fecha,m.fecha_orden)},[p(w,{name:"add"})],8,jo)):v("",!0)])):v("",!0),(t(!0),d(y,null,R(g.value,j=>{var G,J;return t(),d(y,{key:j.id},[j.fecha===m.fecha&&j.fecha_orden>=(h(_)?(G=q.value)==null?void 0:G.fecha_actual_orden:(J=b.value)==null?void 0:J.fecha_actual_orden)?(t(),d("div",{key:0,class:I(["grid",h(N)?"grid-cols-1":""])},[p(no,{encuentro:j,"is-player":""},null,8,["encuentro"])],2)):v("",!0)],64)}),128))],64)}),128)),h(N)?(t(),d("button",{key:0,onClick:i[2]||(i[2]=m=>$())},"Agregar Encuentro")):v("",!0)]))])],64)}}});export{To as default};
