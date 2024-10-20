import{d as V,c as n,y as v,a as e,t as j,b as m,w as I,T as L,F as k,f as t,g as B,n as w,q as R,i as $,o as N,x as H,e as h,h as G,A as W,j as X,l as Y,v as Z,z as U}from"./index-kKggo61y.js";import{u as K}from"./app.service-B1RWRf2B.js";import{a as J,c as Q,b as aa,u as oa,A as ea,D as sa,_ as P,d as ia}from"./PronosticoPlayer.vue_vue_type_style_index_0_scoped_838b29c2_lang-DFT4BZ-U.js";const ta={key:0,class:"bg-slate-900 p-3"},na={key:1},da={class:"min-h-20 bg-slate-900 duration-300 relative overflow-hidden m-2 p-3 border border-indigo-500/50 rounded-lg grid"},la={key:0,class:"text-center mb-3"},ra={key:0,class:"flex justify-around w-full"},ua=V({__name:"PronosticoPlayer",props:{pronosticos:{},index:{},isRunning:{type:Boolean}},setup(C){const d=C;return(l,p)=>(t(),n(k,null,[l.isRunning?v("",!0):(t(),n("div",ta,"Pronóstico")),l.isRunning?(t(),n("section",na,[e("div",da,[d.pronosticos[d.index]?(t(),n("h4",la,j(d.pronosticos[d.index].fecha),1)):v("",!0),m(L,{name:"list"},{default:I(()=>[(t(!0),n(k,null,B(d.pronosticos,(f,g)=>(t(),n(k,{key:f.id},[d.index-1===g?(t(),n("div",ra,[e("div",{class:w(["transition-all duration-500",d.index-1===g?f.equipo_local_class:"scale-50"])},[m(J,{equipo_id:f.equipo_local_id},null,8,["equipo_id"])],2),d.index-1===g?(t(),n("div",{key:0,class:w(["transition-all duration-500",f.equipo_visitante_class])},[m(J,{equipo_id:f.equipo_visitante_id},null,8,["equipo_id"])],2)):v("",!0)])):v("",!0)],64))),128))]),_:1})])])):v("",!0)],64))}}),ca=Q(ua,[["__scopeId","data-v-838b29c2"]]),_a={class:"flex gap-2 items-center"},pa=["src"],fa={class:"px-2"},ma={class:"px-2"},ha=["data-content"],va={class:"flex gap-1"},ga=V({__name:"TablaEquiposConUltimos",props:{equipos_ids:{},encuentrosIn:{},campeonatoId:{},conUltimosPartidos:{type:Boolean}},setup(C){const d=K(),l=C;R(!0);const p=$(()=>d.campeonatos.find(q=>q.id===l.campeonatoId));R([]);const f=$(()=>g());N(async()=>{});function g(){const q=[];return l.equipos_ids.forEach(c=>{var r;const a=Object.assign([],d.equipos.find(o=>o.id===c));a&&(a.puntos=0,a.partidos_jugados=0,a.ultimos_partidos=[],(r=p.value)==null||r.sansiones.forEach(o=>{o.equipo_id===c&&(a.puntos-=o.puntos_descuento)}),l.encuentrosIn.forEach(o=>{var b,y,_,S,F,T,z,s,i,x,u,D;o.fecha_orden>=0&&(o.equipo_local_goles===o.equipo_visitante_goles&&o.realizado&&(o.equipo_local_id===a.id&&(a.puntos+=1,a.partidos_jugados++,o.fecha_orden>=((b=p.value)==null?void 0:b.fecha_actual_orden)&&((y=a.ultimos_partidos)==null||y.push({encuentro_id:o.id,valor:"empatado",fecha_orden:o.fecha_orden}))),o.equipo_visitante_id===a.id&&(a.puntos+=1,a.partidos_jugados++,o.fecha_orden>=((_=p.value)==null?void 0:_.fecha_actual_orden)&&((S=a.ultimos_partidos)==null||S.push({encuentro_id:o.id,valor:"empatado",fecha_orden:o.fecha_orden})))),o.equipo_local_goles>o.equipo_visitante_goles&&o.realizado&&(o.equipo_local_id===a.id&&(a.puntos+=3,a.partidos_jugados++,o.fecha_orden>=((F=p.value)==null?void 0:F.fecha_actual_orden)&&((T=a.ultimos_partidos)==null||T.push({encuentro_id:o.id,valor:"ganado",fecha_orden:o.fecha_orden}))),o.equipo_visitante_id===a.id&&(a.partidos_jugados++,o.fecha_orden>=((z=p.value)==null?void 0:z.fecha_actual_orden)&&((s=a.ultimos_partidos)==null||s.push({encuentro_id:o.id,valor:"perdido",fecha_orden:o.fecha_orden})))),o.equipo_visitante_goles>o.equipo_local_goles&&o.realizado&&(o.equipo_visitante_id===a.id&&(a.puntos+=3,a.partidos_jugados++,o.fecha_orden>=((i=p.value)==null?void 0:i.fecha_actual_orden)&&((x=a.ultimos_partidos)==null||x.push({encuentro_id:o.id,valor:"ganado",fecha_orden:o.fecha_orden}))),o.equipo_local_id===a.id&&(a.partidos_jugados++,o.fecha_orden>=((u=p.value)==null?void 0:u.fecha_actual_orden)&&((D=a.ultimos_partidos)==null||D.push({encuentro_id:o.id,valor:"perdido",fecha_orden:o.fecha_orden})))))}),q.push(a))}),q.sort((c,a)=>a.puntos-c.puntos)}function E(q){var a;let c={tieneSansion:!1,puntosSansion:0};return(a=p.value)==null||a.sansiones.forEach(r=>{q.id===r.equipo_id&&(c.puntosSansion=r.puntos_descuento,c.tieneSansion=!0)}),c}return(q,c)=>(t(),n("div",null,[e("table",null,[c[0]||(c[0]=e("thead",null,[e("th",{class:"px-2"},"Equipo"),e("th",{class:"px-2"},"PJ"),e("th",{class:"px-2"},"Pts."),e("th",{class:"px-2"},[e("div",{class:"flex items-center gap-2"},"Últimos Partidos")])],-1)),e("tbody",null,[m(L,{name:"list"},{default:I(()=>[(t(!0),n(k,null,B(f.value,a=>(t(),n("tr",{key:a.id},[e("td",null,[e("div",_a,[e("img",{class:"w-4 h-4",src:a.bandera_img,alt:""},null,8,pa),H(" "+j(a.nombre),1)])]),e("td",fa,j(a.partidos_jugados),1),e("td",ma,[e("div",{class:w(E(a).tieneSansion?"puntos-equipo-sansion":""),"data-content":E(a).tieneSansion?"sansión -"+E(a).puntosSansion:""},j(a.puntos),11,ha)]),e("td",null,[e("div",va,[m(aa,{"ultimos-partidos":a.ultimos_partidos},null,8,["ultimos-partidos"])])])]))),128))]),_:1})])])]))}}),qa=Q(ga,[["__scopeId","data-v-564ecc3c"]]),ya={class:"grid md:grid-cols-2 grid-cols-1"},xa={class:"flex gap-3 p-3"},ka={class:"bg-slate-600 p-5 rounded-lg"},ba={key:0,class:"grid gap-2 py-4 p-2"},$a={key:0},Ea=["onClick"],ja=V({__name:"EncuentrosPlayerUltimosPartidos",setup(C){const d=X(),l=K(),p=oa();new ea,N(()=>{});const f=$(()=>l.encuentros.filter(s=>s.campoenato_id===d.params.campeonatoId&&s.region_id===d.params.regionId)),g=$(()=>l.campeonatos.find(s=>s.id===d.params.campeonatoId)),E=$(()=>{const s=[];return f.value.forEach(i=>{s.includes(i.equipo_local_id)||s.push(i.equipo_local_id),s.includes(i.equipo_visitante_id)||s.push(i.equipo_visitante_id)}),s}),q=$(()=>{const s=new Map;return f.value.forEach(i=>{s.has(i.fecha)||s.set(i.fecha,{fecha:i.fecha,fecha_orden:i.fecha_orden})}),Array.from(s.values())});function c(){p.create({equipo_local_id:"",equipo_visitante_id:"",estadium:"",fecha:"",campoenato_id:d.params.campeonatoId,region_id:d.params.regionId,realizado:!1,fecha_orden:0,equipo_local_goles:0,equipo_visitante_goles:0})}function a(s,i){p.create({equipo_local_id:"",equipo_visitante_id:"",estadium:"",fecha:s,campoenato_id:d.params.campeonatoId,region_id:d.params.regionId,realizado:!1,fecha_orden:i,equipo_local_goles:0,equipo_visitante_goles:0})}let r=0;const o=R(1500);let b=0,y=null,_=R(!1);function S(s){if(r<l.pronosticos.length&&s-b>=o.value){const i=l.pronosticos[r].id;let x=l.encuentros.findIndex(u=>u.id===i);x&&(l.encuentros[x]={...l.pronosticos[r]}),r++,b=s}r<l.pronosticos.length&&_.value&&(y=requestAnimationFrame(S))}function F(){_.value=!1}async function T(){r===0&&await l.getData(),_.value||(_.value=!0,W(()=>{b=performance.now(),y=requestAnimationFrame(S)}))}async function z(){_.value=!1,y!==null&&(r=0,await l.getData(),cancelAnimationFrame(y),y=null)}return N(()=>{}),(s,i)=>{var x;return t(),n("section",ya,[e("div",null,[m(ca,{"is-running":h(_),index:h(r),pronosticos:h(l).pronosticos},null,8,["is-running","index","pronosticos"]),e("div",xa,[e("button",{class:w([h(_)?"text-orange-400":"text-green-400",""]),onClick:i[0]||(i[0]=u=>h(_)?F():T())},[h(_)?(t(),G(P,{key:0,name:"pause"})):(t(),G(P,{key:1,name:"play"}))],2),e("button",{onClick:z},[m(P,{name:"stop"})]),m(sa,null,{button:I(()=>[m(P,{name:"settings"})]),default:I(()=>[e("div",ka,[Y(e("input",{class:"bg-slate-900 ml-4",type:"number","onUpdate:modelValue":i[1]||(i[1]=u=>o.value=u)},null,512),[[Z,o.value]])])]),_:1})]),m(qa,{"campeonato-id":(x=g.value)==null?void 0:x.id,equipos_ids:E.value,"encuentros-in":f.value},null,8,["campeonato-id","equipos_ids","encuentros-in"])]),h(_)?v("",!0):(t(),n("div",ba,[(t(!0),n(k,null,B(q.value,(u,D)=>{var M;return t(),n(k,{key:D},[u.fecha_orden>=((M=g.value)==null?void 0:M.fecha_actual_orden)?(t(),n("div",$a,[H(j(u.fecha)+" ",1),h(U)?(t(),n("button",{key:0,onClick:A=>a(u.fecha,u.fecha_orden)},[m(P,{name:"add"})],8,Ea)):v("",!0)])):v("",!0),(t(!0),n(k,null,B(f.value,A=>{var O;return t(),n(k,{key:A.id},[A.fecha===u.fecha&&A.fecha_orden>=((O=g.value)==null?void 0:O.fecha_actual_orden)?(t(),n("div",{key:0,class:w(["grid",h(U)?"grid-cols-1":""])},[m(ia,{encuentro:A,"is-player":""},null,8,["encuentro"])],2)):v("",!0)],64)}),128))],64)}),128)),h(U)?(t(),n("button",{key:0,onClick:i[2]||(i[2]=u=>c())},"Agregar Encuentro")):v("",!0)]))])}}});export{ja as default};
