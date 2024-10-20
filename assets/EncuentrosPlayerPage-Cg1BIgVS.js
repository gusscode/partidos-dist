import{u as A}from"./app.service-D-zYBRNe.js";import{d as z,k as T,l as B,v as J,f as i,c as r,m as Q,p as W,a as e,n as j,F as q,b as p,t as C,q as g,i as M,h as I,w as V,s as X,g as F,x as S,e as x,y as k,T as Y,o as Z,r as ee,j as oe,z as D}from"./index-Cu30ZjDy.js";import{_ as E,D as P,u as O,a as L,b as te,c as le,A as ae,d as se}from"./PronosticoPlayer.vue_vue_type_style_index_0_scoped_838b29c2_lang-CmhJvxRP.js";const H=z({__name:"InputApp",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(h){const t=T(h,"modelValue");return(f,c)=>B((i(),r("input",{"onUpdate:modelValue":c[0]||(c[0]=u=>t.value=u),class:"text-white bg-slate-900 rounded-lg outline-offset-0 p-2 px-4 border-none outline-none focus:outline-2 focus:outline-orange-500/50",type:"text"},null,512)),[[J,t.value]])}}),ne=["id"],ie=z({__name:"ToggleMain",props:Q(["id"],{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(h){const t=T(h,"modelValue"),f=h;return(c,u)=>(i(),r(q,null,[B(e("input",{id:f.id,type:"checkbox","onUpdate:modelValue":u[0]||(u[0]=d=>t.value=d),class:"hidden"},null,8,ne),[[W,t.value]]),e("button",{onClick:u[1]||(u[1]=d=>t.value=!t.value),class:"w-6 h-3 outline outline-1 outline-slate-900 bg-slate-300 rounded-full relative"},[e("div",{ref:"leverRef",class:j([t.value?"bg-green-400 left-3 scale-125 outline-green-700/75":"bg-orange-600 scale-90 left-0 outline-orange-700/75","absolute w-3 h-3 outline-1 outline rounded-full top-0 duration-300 select-none"])},null,2)])],64))}}),ue={class:"p-3 flex items-center gap-0 text-xl"},N=z({__name:"InputGoles",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(h){const t=T(h,"modelValue");function f(){if(t.value!==void 0)return t.value++;t.value=0}function c(){if(t.value!==void 0)return t.value--;t.value=0}return(u,d)=>(i(),r("div",ue,[e("button",{class:"rotate-180",onClick:c},[p(E,{name:"play-outline"})]),e("button",{onClick:f,class:"bg-slate-800 rounded-lg w-8 h-10 items-center flex justify-center"},C(t.value),1),e("button",{class:"",onClick:f},[p(E,{name:"play-outline"})])]))}}),de={class:"bg-slate-800 p-5 rounded-lg"},re={class:"grid"},ce=["onClick"],pe=["src"],G=z({__name:"SelectEquipo",props:{modelValue:{},buttonId:{}},emits:["update:modelValue"],setup(h,{emit:t}){const f=t,c=A(),u=g(""),d=M(()=>{const v=u.value.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();return c.equipos.filter(m=>m.nombre.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().includes(v))});return(v,m)=>(i(),I(P,{persistent:"","button-class":"w-full","button-id":v.buttonId},{button:V(()=>[X(v.$slots,"default",{},()=>[p(E,{name:"settings"})])]),default:V(({closeDialog:y})=>[e("div",de,[e("header",null,[p(H,{modelValue:u.value,"onUpdate:modelValue":m[0]||(m[0]=l=>u.value=l)},null,8,["modelValue"])]),e("section",re,[(i(!0),r(q,null,F(d.value,l=>(i(),r("button",{key:l.id,class:"hover:outline hover:bg-cyan-700 hover:outline-orange-400/50 px-2 p-1 rounded-lg flex gap-10 justify-between",onClick:a=>[f("update:modelValue",l.id),y()]},[S(C(l.nombre)+" ",1),e("span",null,[e("img",{class:"w-6 h-6",src:l.bandera_img,alt:""},null,8,pe)])],8,ce))),128))]),m[1]||(m[1]=e("footer",null,null,-1))])]),_:3},8,["button-id"]))}}),_e={class:"bg-slate-600 p-3 rounded-lg border-cyan-300/50 border"},me={class:"grid gap-2"},fe=["onClick"],ve=`
px-3 hover:outline outline-none outline-offset-0 hover:outline-orange-400/50 hover:bg-cyan-700 duration-300
rounded-lg
`,ge=z({__name:"SelectCampeonato",emits:["update:modelValue"],setup(h,{emit:t}){g();const f=t,c=A();return(u,d)=>(i(),I(P,{"button-class":"bg-blue-600 w-full rounded-lg border border-cyan-200/50"},{button:V(()=>d[0]||(d[0]=[S(" campeonato ")])),default:V(({closeDialog:v})=>[e("div",_e,[d[1]||(d[1]=e("header",null,null,-1)),e("section",null,[e("div",me,[(i(!0),r(q,null,F(x(c).campeonatos,m=>(i(),r("button",{key:m.id,class:j(ve),onClick:y=>[f("update:modelValue",m.id),v()]},C(m.nombre),9,fe))),128))])]),d[2]||(d[2]=e("footer",{class:"grid"},null,-1))])]),_:1}))}}),be={class:"bg-slate-600 p-3 rounded-lg border-cyan-300/50 border"},he={class:"grid gap-2"},Ve=["onClick"],ye=`
px-3 hover:outline outline-none outline-offset-0 hover:outline-orange-400/50 hover:bg-cyan-700 duration-300
rounded-lg
`,qe=z({__name:"SelectRegion",emits:["update:modelValue"],setup(h,{emit:t}){g();const f=t,c=A();return(u,d)=>(i(),I(P,{"button-class":"bg-blue-600 w-full rounded-lg border border-cyan-200/50"},{button:V(()=>d[0]||(d[0]=[S(" región ")])),default:V(({closeDialog:v})=>[e("div",be,[d[1]||(d[1]=e("header",null,null,-1)),e("section",null,[e("div",he,[(i(!0),r(q,null,F(x(c).regiones,m=>(i(),r("button",{key:m.id,class:j(ye),onClick:y=>[f("update:modelValue",m.id),v()]},C(m.nombre),9,Ve))),128))])]),d[2]||(d[2]=e("footer",{class:"grid"},null,-1))])]),_:1}))}}),$e={class:"max-w-96 w-full bg-slate-600 p-5 px-8 rounded-lg"},xe={class:"flex justify-between"},ke={class:"flex gap-3"},Ce={class:"grid grid-cols-2 gap-10 text-center"},we={class:"w-full grid"},Se={key:0,class:"flex justify-center"},Ee={class:"w-full grid"},ze={key:0,class:"flex justify-center"},Ue={class:"grid gap-2 my-5"},je={key:0},Fe={key:1},Me={class:"flex w-full gap-3 items-center"},Pe={key:2},Ae={class:"bg-slate-700 rounded-lg p-5"},Ie={class:"grid"},Re=["onClick"],De={class:"grid mt-3"},Te=["onClick"],Be=z({__name:"EncuentrosUpdate",props:{encuentro:{},noRegion:{type:Boolean},noCampeonato:{type:Boolean},fechas:{}},setup(h){const t=h,f=O(),c=g(t.encuentro.realizado),u=g(t.encuentro.equipo_local_id),d=g(t.encuentro.equipo_visitante_id),v=g(t.encuentro.campoenato_id),m=g(t.encuentro.region_id),y=g(t.encuentro.fecha),l=g(t.encuentro.fecha_orden),a=g(t.encuentro.estadium),o=g(t.encuentro.equipo_local_goles),b=g(t.encuentro.equipo_visitante_goles);function s(){f.update(t.encuentro.id,{equipo_local_id:u.value,equipo_visitante_id:d.value,campoenato_id:v.value,region_id:m.value,estadium:a.value,fecha:y.value,fecha_orden:l.value,equipo_local_goles:o.value,equipo_visitante_goles:b.value,realizado:c.value})}function $(w,n){y.value=w,l.value=n}return(w,n)=>(i(),I(P,{persistent:""},{button:V(()=>[p(E,{name:"settings"})]),default:V(({closeDialog:R})=>[e("div",$e,[e("div",xe,[e("div",ke,[n[10]||(n[10]=e("label",{for:"realizado"},"Realizado",-1)),p(ie,{id:"realizado",modelValue:c.value,"onUpdate:modelValue":n[0]||(n[0]=_=>c.value=_)},null,8,["modelValue"])]),e("button",{onClick:n[1]||(n[1]=_=>x(f).delete(t.encuentro.id))},[p(E,{name:"delete"})])]),e("header",Ce,[e("div",we,[n[11]||(n[11]=e("label",{for:"equipo_local",class:"text-cyan-200"},"Local",-1)),p(G,{"button-id":"equipo_local",modelValue:u.value,"onUpdate:modelValue":n[2]||(n[2]=_=>u.value=_)},{default:V(()=>[e("div",{class:j([u.value===""?"border-2 border-blue-200/50":"","min-h-20 w-full rounded-lg"])},[p(L,{equipo_id:u.value},null,8,["equipo_id"])],2)]),_:1},8,["modelValue"]),c.value?(i(),r("div",Se,[p(N,{modelValue:o.value,"onUpdate:modelValue":n[3]||(n[3]=_=>o.value=_)},null,8,["modelValue"])])):k("",!0)]),e("div",Ee,[n[12]||(n[12]=e("label",{for:"equipo_visitante",class:"text-cyan-200"},"Visitante",-1)),p(G,{"button-id":"equipo_visitante",modelValue:d.value,"onUpdate:modelValue":n[4]||(n[4]=_=>d.value=_)},{default:V(()=>[e("div",{class:j([d.value===""||d.value===void 0?" border-2 border-blue-200/50 ":"","min-h-20 w-full rounded-lg"])},[p(L,{equipo_id:d.value},null,8,["equipo_id"])],2)]),_:1},8,["modelValue"]),c.value?(i(),r("div",ze,[p(N,{modelValue:b.value,"onUpdate:modelValue":n[5]||(n[5]=_=>b.value=_)},null,8,["modelValue"])])):k("",!0)])]),e("section",Ue,[w.noCampeonato?k("",!0):(i(),r("div",je,[p(ge,{modelValue:v.value,"onUpdate:modelValue":n[6]||(n[6]=_=>v.value=_)},null,8,["modelValue"])])),w.noRegion?k("",!0):(i(),r("div",Fe,[p(qe,{modelValue:m.value,"onUpdate:modelValue":n[7]||(n[7]=_=>m.value=_)},null,8,["modelValue"])])),e("div",Me,[n[13]||(n[13]=e("label",{for:"fecha"},"Fecha: ",-1)),p(H,{id:"fecha",class:"w-40",modelValue:y.value,"onUpdate:modelValue":n[8]||(n[8]=_=>y.value=_)},null,8,["modelValue"]),B(e("input",{class:"w-10 rounded-lg pl-1 bg-slate-900 py-2",type:"number","onUpdate:modelValue":n[9]||(n[9]=_=>l.value=_)},null,512),[[J,l.value]])]),w.fechas?(i(),r("div",Pe,[p(P,{"button-class":"bg-green-700 rounded-lg"},{button:V(()=>n[14]||(n[14]=[S(" Asignar Fecha ")])),default:V(({closeDialog:_})=>[e("div",Ae,[e("section",Ie,[(i(!0),r(q,null,F(w.fechas,(U,K)=>(i(),r(q,{key:K},[U.fecha!==""?(i(),r("button",{key:0,class:"px-3 bg-slate-900 rounded-lg outline outline-1 outline-cyan-400/50",onClick:lo=>[$(U.fecha,U.fecha_orden),_()]},C(U.fecha),9,Re)):k("",!0)],64))),128))])])]),_:2},1024)])):k("",!0)]),e("footer",De,[e("button",{class:"bg-cyan-600 rounded-lg",onClick:_=>[s(),R()]}," Actualizar ",8,Te)])])]),_:1}))}}),Le={class:"px-2"},Ne={class:"flex items-center gap-2"},Ge={class:"flex"},Je={class:"flex gap-2 items-center"},Oe=["src"],He={class:"px-2"},Ke={class:"px-2"},Qe=["data-content"],We={class:"flex gap-1"},Xe=z({__name:"TablaEquipos",props:{equipos_ids:{},encuentrosIn:{},campeonatoId:{},conUltimosPartidos:{type:Boolean}},setup(h){const t=A(),f=h;g(!0);const c=g(5),u=M(()=>t.campeonatos.find(l=>l.id===f.campeonatoId));g([]);const d=M(()=>{const l=[];return f.equipos_ids.forEach(a=>{var b;const o=t.equipos.find(s=>s.id===a);o&&(o.puntos=0,o.partidos_jugados=0,o.ultimos_partidos=[],(b=u.value)==null||b.sansiones.forEach(s=>{s.equipo_id===a&&(o.puntos-=s.puntos_descuento)}),f.encuentrosIn.forEach(s=>{var $,w,n,R,_,U;s.fecha_orden>=0&&(s.equipo_local_goles===s.equipo_visitante_goles&&s.realizado&&(s.equipo_local_id===o.id&&(o.puntos+=1,o.partidos_jugados++,($=o.ultimos_partidos)==null||$.push({encuentro_id:s.id,valor:"empatado",fecha_orden:s.fecha_orden})),s.equipo_visitante_id===o.id&&(o.puntos+=1,o.partidos_jugados++,(w=o.ultimos_partidos)==null||w.push({encuentro_id:s.id,valor:"empatado",fecha_orden:s.fecha_orden}))),s.equipo_local_goles>s.equipo_visitante_goles&&s.realizado&&(s.equipo_local_id===o.id&&(o.puntos+=3,o.partidos_jugados++,(n=o.ultimos_partidos)==null||n.push({encuentro_id:s.id,valor:"ganado",fecha_orden:s.fecha_orden})),s.equipo_visitante_id===o.id&&(o.partidos_jugados++,(R=o.ultimos_partidos)==null||R.push({encuentro_id:s.id,valor:"perdido",fecha_orden:s.fecha_orden}))),s.equipo_visitante_goles>s.equipo_local_goles&&s.realizado&&(s.equipo_visitante_id===o.id&&(o.puntos+=3,o.partidos_jugados++,(_=o.ultimos_partidos)==null||_.push({encuentro_id:s.id,valor:"ganado",fecha_orden:s.fecha_orden})),s.equipo_local_id===o.id&&(o.partidos_jugados++,(U=o.ultimos_partidos)==null||U.push({encuentro_id:s.id,valor:"perdido",fecha_orden:s.fecha_orden}))))}),l.push(o))}),l.sort((a,o)=>o.puntos-a.puntos)});function v(l){var o;let a={tieneSansion:!1,puntosSansion:0};return(o=u.value)==null||o.sansiones.forEach(b=>{l.id===b.equipo_id&&(a.puntosSansion=b.puntos_descuento,a.tieneSansion=!0)}),a}function m(){var l;(l=u.value)!=null&&l.fecha_actual_orden&&c.value<u.value.fecha_actual_orden&&c.value++}function y(){var l;(l=u.value)!=null&&l.fecha_actual_orden&&c.value>0&&c.value--}return(l,a)=>(i(),r("div",null,[e("table",null,[e("thead",null,[a[1]||(a[1]=e("th",{class:"px-2"},"Equipo",-1)),a[2]||(a[2]=e("th",{class:"px-2"},"PJ",-1)),a[3]||(a[3]=e("th",{class:"px-2"},"Pts.",-1)),e("th",Le,[e("div",Ne,[e("div",Ge,[e("button",{onClick:y,class:"rotate-180"},[p(E,{name:"play-outline"})]),S(" "+C(c.value)+" ",1),e("button",{onClick:m,class:""},[p(E,{name:"play-outline"})])]),a[0]||(a[0]=S(" Últimos Partidos "))])])]),e("tbody",null,[p(Y,{name:"list"},{default:V(()=>[(i(!0),r(q,null,F(d.value,o=>(i(),r("tr",{key:o.id},[e("td",null,[e("div",Je,[e("img",{class:"w-4 h-4",src:o.bandera_img,alt:""},null,8,Oe),S(" "+C(o.nombre),1)])]),e("td",He,C(o.partidos_jugados),1),e("td",Ke,[e("div",{class:j(v(o).tieneSansion?"puntos-equipo-sansion":""),"data-content":v(o).tieneSansion?"sansión -"+v(o).puntosSansion:""},C(o.puntos),11,Qe)]),e("td",null,[e("div",We,[p(te,{"ultimos-partidos":o.ultimos_partidos},null,8,["ultimos-partidos"])])])]))),128))]),_:1})])])]))}}),Ye=le(Xe,[["__scopeId","data-v-61cfbf55"]]),Ze={class:"grid md:grid-cols-2 grid-cols-1"},eo={class:"flex gap-3 items-center m-3 py-2 px-5 rounded-full bg-indigo-700"},oo={class:"grid gap-2 py-4 p-2"},to=["onClick"],io=z({__name:"EncuentrosPlayerPage",setup(h){const t=oe(),f=A(),c=O();new ae,Z(()=>{});const u=M(()=>f.encuentros.filter(l=>l.campoenato_id===t.params.campeonatoId&&l.region_id===t.params.regionId)),d=M(()=>{const l=[];return u.value.forEach(a=>{l.includes(a.equipo_local_id)||l.push(a.equipo_local_id),l.includes(a.equipo_visitante_id)||l.push(a.equipo_visitante_id)}),l}),v=M(()=>{const l=new Map;return u.value.forEach(a=>{l.has(a.fecha)||l.set(a.fecha,{fecha:a.fecha,fecha_orden:a.fecha_orden})}),Array.from(l.values())});function m(){c.create({equipo_local_id:"",equipo_visitante_id:"",estadium:"",fecha:"",campoenato_id:t.params.campeonatoId,region_id:t.params.regionId,realizado:!1,fecha_orden:0,equipo_local_goles:0,equipo_visitante_goles:0})}function y(l,a){c.create({equipo_local_id:"",equipo_visitante_id:"",estadium:"",fecha:l,campoenato_id:t.params.campeonatoId,region_id:t.params.regionId,realizado:!1,fecha_orden:a,equipo_local_goles:0,equipo_visitante_goles:0})}return(l,a)=>{const o=ee("RouterLink");return i(),r("section",Ze,[e("div",null,[p(o,{to:"/campeonato/"+x(t).params.campeonatoId+"/region/"+x(t).params.regionId+"/encuentros/pronostico"},{default:V(()=>[e("button",eo,[a[1]||(a[1]=S(" Crear Pronpóstico ")),p(E,{name:"soccer"})])]),_:1},8,["to"]),p(Ye,{"campeonato-id":x(t).params.campeonatoId,equipos_ids:d.value,"encuentros-in":u.value},null,8,["campeonato-id","equipos_ids","encuentros-in"])]),e("div",oo,[(i(!0),r(q,null,F(v.value,(b,s)=>(i(),r(q,{key:s},[e("div",null,[S(C(b.fecha)+" ",1),x(D)?(i(),r("button",{key:0,onClick:$=>y(b.fecha,b.fecha_orden)},[p(E,{name:"add"})],8,to)):k("",!0)]),(i(!0),r(q,null,F(u.value,$=>(i(),r(q,{key:$.id},[$.fecha===b.fecha?(i(),r("div",{key:0,class:j(["grid",x(D)?"grid-cols-[1fr,20px]":""])},[p(se,{encuentro:$},null,8,["encuentro"]),x(D)?(i(),I(Be,{key:0,"no-campeonato":"","no-region":"",encuentro:$,fechas:v.value},null,8,["encuentro","fechas"])):k("",!0)],2)):k("",!0)],64))),128))],64))),128)),x(D)?(i(),r("button",{key:0,onClick:a[0]||(a[0]=b=>m())},"Agregar Encuentro")):k("",!0)])])}}});export{io as default};