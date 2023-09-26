import{r as i,j as r}from"./react-b8fbf05d.js";import{c as W}from"./react-dom-b18fb4d6.js";import{L as A,H as Y}from"./react-router-dom-441412e9.js";import{c as S,a as N,b as K}from"./@reduxjs-a9bd0a2e.js";import{a as X,i as E}from"./axios-ce212671.js";import{u as G,a as Q,P as Z}from"./react-redux-910885b1.js";import"./hoist-non-react-statics-3f8ebaa8.js";import"./react-is-a192e302.js";import{c as B}from"./classnames-bc35a1ef.js";import{B as ee,a as te,b as se,R as re}from"./react-icons-87863f66.js";import{A as oe,m as ae}from"./framer-motion-55a73aab.js";import{d as ne,e as ce}from"./react-router-67e23d4b.js";import"./scheduler-765c72db.js";import"./@remix-run-06a34d2a.js";import"./immer-41fd5235.js";import"./redux-76ec1fc4.js";import"./@babel-19a2e885.js";import"./redux-thunk-ef899f4c.js";import"./use-sync-external-store-7b52be53.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const m=e=>{const t=localStorage.getItem(e);try{if(t!==null)return JSON.parse(t)}catch(s){return console.log(s),!1}},f=(e,t)=>{localStorage.setItem(e,t)},T="auth",F="user",O="bankCard",P="favorites",j=X.create({baseURL:"https://reacttesthotelback-production.up.railway.app/"}),H={getHotels:async({location:e,checkInDate:t,countDays:s,sortByPrice:n,sortByStars:a},{dispatch:o,rejectWithValue:c})=>{var d;try{return(await j.get(`hotels/${e}&${t}&${s}&${n}/${a}`)).data}catch(u){if(E(u)){const l=((d=u.response)==null?void 0:d.data.message)||u.message;return o(R(l)),c(u)}}},getHotelById:async({id:e,checkInDate:t,countDays:s},{dispatch:n,rejectWithValue:a})=>{var o;try{return(await j.get(`hotels/byId/${e}&${t}&${s}`)).data}catch(c){if(E(c)){const d=((o=c.response)==null?void 0:o.data.message)||c.message;return n(R(d)),a(c)}}}},v=S("hotels/fetchAllHotels",H.getHotels),x=S("hotels/fetchHotelById",H.getHotelById),ie=e=>{const t=e.getFullYear(),s=e.getMonth()<10?"0"+e.getMonth():e.getMonth(),n=e.getDate()<10?"0"+e.getDate():e.getDate();return`${t}-${s}-${n}`},le=()=>{const e=new Date,t=new Date(e.getFullYear(),e.getMonth()+1,e.getDate());return ie(t)},Dt=e=>{if(e==="")return"ошибка параметров";const[t,s,n]=e.split(/-/);return`${n} ${["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"][+s-1]} ${t}`},de=500,he=5e4,ue={location:"Москва",checkInDate:le(),countDays:1,sortByStars:[],sortByPrice:[de,he],isLoading:!1,error:"",sortType:[{title:"Рейтинг",type:"stars",desc:!0},{title:"Цена",type:"priceAvg",desc:!0}],hotels:[],hotelById:null,favorites:m(P)||[]},U=N({name:"hotels",initialState:ue,reducers:{setSearchForm:(e,t)=>{e.location=t.payload.location,e.checkInDate=t.payload.checkInDate,e.countDays=t.payload.countDays},setSortByStars:(e,t)=>{e.sortByStars=e.sortByStars.find(s=>s===t.payload)?e.sortByStars.filter(s=>s!==t.payload):[...e.sortByStars,t.payload]},setSortByPrice:(e,t)=>{e.sortByPrice=t.payload},changeFavorites:(e,t)=>{e.favorites=e.favorites.find(s=>s._id===t.payload._id)?e.favorites.filter(s=>s._id!==t.payload._id):[...e.favorites,t.payload]},sortFavorites:(e,t)=>{e.favorites.sort((s,n)=>t.payload.desc?n[t.payload.type]-s[t.payload.type]:s[t.payload.type]-n[t.payload.type]),e.sortType.map(s=>s.type===t.payload.type?s.desc=!s.desc:"")},setErrorNotification:(e,t)=>{e.error=t.payload}},extraReducers:e=>{e.addCase(v.fulfilled,(t,s)=>{t.hotels=s.payload,t.isLoading=!1}),e.addCase(v.pending,t=>{t.isLoading=!0,t.error=""}),e.addCase(v.rejected,t=>{t.isLoading=!1,t.hotels=[]}),e.addCase(x.fulfilled,(t,s)=>{t.hotelById=s.payload,t.isLoading=!1}),e.addCase(x.pending,t=>{t.isLoading=!0,t.error=""}),e.addCase(x.rejected,t=>{t.isLoading=!1})}}),At=e=>e.hotels.location,Rt=e=>e.hotels.checkInDate,bt=e=>e.hotels.countDays,It=e=>e.hotels.sortByStars,Lt=e=>e.hotels.sortByPrice,$t=e=>e.hotels.isLoading,pe=e=>e.hotels.error,Ct=e=>e.hotels.sortType,Nt=e=>e.hotels.hotels,Tt=e=>e.hotels.hotelById,_e=e=>e.hotels.favorites,{setSearchForm:Ft,setSortByStars:Ot,setSortByPrice:Pt,changeFavorites:Ht,sortFavorites:Ut,setErrorNotification:R}=U.actions,fe=U.reducer,b=e=>async({email:t,password:s},{dispatch:n,rejectWithValue:a})=>{var o;try{return(await j.post(e,{email:t,password:s})).data}catch(c){if(E(c)){const d=((o=c.response)==null?void 0:o.data.message)||c.message;return n(Se(d)),a(c)}}},V={doAuthorization:b("auth/login"),doRegistr:b("auth/register")},I=S("auth/fetchAuth",V.doAuthorization),L=S("auth/fetchRegistr",V.doRegistr),me={isAuth:m(T),user:m(F),bankCard:m(O),error:""},M=N({name:"auth",initialState:me,reducers:{setAuth:(e,t)=>{e.isAuth=t.payload},setEmail:(e,t)=>{e.user={...e.user,email:t.payload}},setBankCard:(e,t)=>{e.bankCard=t.payload},setErrorNotification:(e,t)=>{e.error=t.payload}},extraReducers:e=>{e.addCase(I.fulfilled,(t,s)=>{t.isAuth=!0,t.user=s.payload}),e.addCase(I.pending,t=>{t.error=""}),e.addCase(L.fulfilled,(t,s)=>{t.isAuth=!0,t.user=s.payload}),e.addCase(L.pending,t=>{t.error=""})}}),ye=e=>e.auth.isAuth,Vt=e=>e.auth.user,Mt=e=>e.auth.bankCard,zt=e=>e.auth.error,{setAuth:ge,setEmail:qt,setBankCard:Jt,setErrorNotification:Se}=M.actions,ve=M.reducer,p=K({reducer:{hotels:fe,auth:ve}});p.subscribe(()=>{const e=p.getState().auth.user,t=p.getState().auth.isAuth,s=p.getState().auth.bankCard,n=p.getState().hotels.favorites;f(T,String(t)),f(F,JSON.stringify(e)),f(O,JSON.stringify(s)),f(P,JSON.stringify(n))});const xe=e=>{const t=document.querySelector(":root");["text","theme","bg"].forEach(n=>{t&&t.style.setProperty(`--${n}-color-default`,`var(--${n}-color-${e?"dark":"white"})`)})},we={isDark:!1},z=i.createContext(we),ke=({children:e,...t})=>{const s=m("isDark"),[n,a]=i.useState(s?!!s:!1);i.useEffect(()=>{xe(n)},[n]);const o=()=>{a(c=>!c),f("isDark",`${!n}`)};return r.jsx(z.Provider,{value:{isDark:n,changeIsDark:o},...t,children:e})},Ee="modulepreload",je=function(e){return"/ReactTestHotelFront/"+e},$={},y=function(t,s,n){if(!s||s.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(s.map(o=>{if(o=je(o),o in $)return;$[o]=!0;const c=o.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(!!n)for(let _=a.length-1;_>=0;_--){const g=a[_];if(g.href===o&&(!c||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${d}`))return;const l=document.createElement("link");if(l.rel=c?"stylesheet":Ee,c||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),c)return new Promise((_,g)=>{l.addEventListener("load",_),l.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o})},Be=G,D=Q,q="/",De="/:id/:checkInDate/:countDays",J="/favorite",Ae="/*",Re=i.lazy(()=>y(()=>import("./index-60489056.js"),["assets/index-60489056.js","assets/react-b8fbf05d.js","assets/classnames-bc35a1ef.js","assets/HotelGroup-3e94dc87.js","assets/react-router-dom-441412e9.js","assets/react-router-67e23d4b.js","assets/@remix-run-06a34d2a.js","assets/UiButton-d75dad31.js","assets/framer-motion-55a73aab.js","assets/UiButton-ddbff60f.css","assets/react-icons-87863f66.js","assets/react-content-loader-e574d110.js","assets/HotelGroup-60b5689e.css","assets/yup-79311ed6.js","assets/property-expr-38205fa5.js","assets/tiny-case-d0726479.js","assets/toposort-84d4889b.js","assets/formik-ecd829e3.js","assets/deepmerge-15f827de.js","assets/lodash-es-87d1a1d5.js","assets/react-fast-compare-b00643a1.js","assets/tiny-warning-c932d744.js","assets/hoist-non-react-statics-3f8ebaa8.js","assets/minoru-4fba79f4.js","assets/UiFormInput-8ffcd93d.js","assets/UiFormInput-9eeab60d.css","assets/UiCheckBox-637d4528.js","assets/UiCheckBox-de660cca.css","assets/react-slider-62ee8d9e.js","assets/@babel-19a2e885.js","assets/react-dom-b18fb4d6.js","assets/scheduler-765c72db.js","assets/@reduxjs-a9bd0a2e.js","assets/immer-41fd5235.js","assets/redux-76ec1fc4.js","assets/redux-thunk-ef899f4c.js","assets/axios-ce212671.js","assets/react-redux-910885b1.js","assets/react-is-a192e302.js","assets/use-sync-external-store-7b52be53.js","assets/index-eff7abf0.css"])),be=i.lazy(()=>y(()=>import("./index-58adbbd2.js"),["assets/index-58adbbd2.js","assets/react-b8fbf05d.js","assets/classnames-bc35a1ef.js","assets/mask-js-5890106f.js","assets/UiButton-d75dad31.js","assets/framer-motion-55a73aab.js","assets/UiButton-ddbff60f.css","assets/UiCheckBox-637d4528.js","assets/UiCheckBox-de660cca.css","assets/react-router-67e23d4b.js","assets/@remix-run-06a34d2a.js","assets/react-dom-b18fb4d6.js","assets/scheduler-765c72db.js","assets/react-router-dom-441412e9.js","assets/@reduxjs-a9bd0a2e.js","assets/immer-41fd5235.js","assets/redux-76ec1fc4.js","assets/@babel-19a2e885.js","assets/redux-thunk-ef899f4c.js","assets/axios-ce212671.js","assets/react-redux-910885b1.js","assets/hoist-non-react-statics-3f8ebaa8.js","assets/react-is-a192e302.js","assets/use-sync-external-store-7b52be53.js","assets/react-icons-87863f66.js","assets/index-9a963a77.css"])),Ie=i.lazy(()=>y(()=>import("./index-7d7e87ad.js"),["assets/index-7d7e87ad.js","assets/react-b8fbf05d.js","assets/classnames-bc35a1ef.js","assets/framer-motion-55a73aab.js","assets/HotelGroup-3e94dc87.js","assets/react-router-dom-441412e9.js","assets/react-router-67e23d4b.js","assets/@remix-run-06a34d2a.js","assets/UiButton-d75dad31.js","assets/UiButton-ddbff60f.css","assets/react-icons-87863f66.js","assets/react-content-loader-e574d110.js","assets/HotelGroup-60b5689e.css","assets/react-dom-b18fb4d6.js","assets/scheduler-765c72db.js","assets/@reduxjs-a9bd0a2e.js","assets/immer-41fd5235.js","assets/redux-76ec1fc4.js","assets/@babel-19a2e885.js","assets/redux-thunk-ef899f4c.js","assets/axios-ce212671.js","assets/react-redux-910885b1.js","assets/hoist-non-react-statics-3f8ebaa8.js","assets/react-is-a192e302.js","assets/use-sync-external-store-7b52be53.js","assets/index-00f8cf81.css"])),Le=i.lazy(()=>y(()=>import("./index-3a595666.js"),["assets/index-3a595666.js","assets/react-b8fbf05d.js","assets/classnames-bc35a1ef.js","assets/UiButton-d75dad31.js","assets/framer-motion-55a73aab.js","assets/UiButton-ddbff60f.css","assets/react-router-67e23d4b.js","assets/@remix-run-06a34d2a.js","assets/index-56339630.css"])),$e=[{path:q,element:Re},{path:De,element:be},{path:J,element:Ie},{path:Ae,element:Le}],Ce=()=>i.useContext(z),Ne="_wrapper_1tvmr_1",Te="_wrapper__heart_1tvmr_7",Fe="_wrapper__heart_active_1tvmr_13",w={wrapper:Ne,wrapper__heart:Te,wrapper__heart_active:Fe},Oe=({onClick:e,isActive:t})=>r.jsx("button",{className:w.wrapper,children:r.jsx(ee,{onClick:e,className:B(w.wrapper__heart,t&&w.wrapper__heart_active)})}),Pe="_header_53iif_1",He="_header__title_53iif_9",Ue="_header__buttons_53iif_16",Ve="_header__count_53iif_20",Me="_header__link_53iif_33",ze="_header__icon_53iif_33",qe="_header__exit_53iif_51",h={header:Pe,header__title:He,header__buttons:Ue,header__count:Ve,header__link:Me,header__icon:ze,header__exit:qe},Je=()=>{const e=D(_e),t=Ce(),s=Be(),n=()=>{s(ge(!1))};return r.jsxs("header",{className:h.header,children:[r.jsx("div",{children:r.jsx(A,{className:h.header__title,to:q,children:"Simple Hotel Check"})}),r.jsxs("div",{className:h.header__buttons,children:[r.jsxs(A,{to:J,className:h.header__link,children:[r.jsx(Oe,{isActive:!0,onClick:()=>console.log()}),r.jsx("div",{className:h.header__count,children:e.length})]}),r.jsx("button",{className:h.header__icon,onClick:t.changeIsDark,children:t.isDark?r.jsx(te,{}):r.jsx(se,{})}),r.jsxs("button",{className:h.header__exit,onClick:n,children:[r.jsx("span",{children:"Выйти"}),r.jsx(re,{style:{color:"#41522E"}})]})]})]})},We="_wrapper_d7h2x_1",Ye={wrapper:We},Ke=({message:e})=>r.jsx("div",{className:B(Ye.wrapper),children:r.jsx("h3",{children:e})}),Xe=({error:e})=>{const[t,s]=i.useState(!!e);return i.useEffect(()=>{s(!!e),setTimeout(()=>{s(!1)},3e3)},[e]),r.jsx(r.Fragment,{children:r.jsx(oe,{children:t&&r.jsx(ae.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:r.jsx(Ke,{message:e})},"FetchWithError")})})},Ge="_wrapper_1kh4o_1",Qe={wrapper:Ge},Ze=({children:e})=>{const t=D(pe);return r.jsxs("div",{className:Qe.wrapper,children:[r.jsx(Je,{}),e,r.jsx(Xe,{error:t})]})},et="/ReactTestHotelFront/assets/loader-black-0962e58b.svg",C="/ReactTestHotelFront/assets/loader-white-14ecb893.svg",tt="/ReactTestHotelFront/assets/loader-blue-be271500.svg",st="_wrapper_vnsg6_1",rt="_loader_vnsg6_9",ot="_shadow_vnsg6_14",k={wrapper:st,loader:rt,shadow:ot},at=({theme:e="white",isShadow:t=!0,classes:s})=>{const[n,a]=i.useState("");return i.useEffect(()=>{switch(e){case"black":a(et);break;case"white":a(C);break;case"blue":a(tt);break;default:a(C);break}},[e]),r.jsx("div",{className:k.wrapper,children:r.jsx("img",{src:n,alt:"loader",className:B(k.loader,t&&k.shadow,s)})})},nt=i.lazy(()=>y(()=>import("./index-a6a4f127.js"),["assets/index-a6a4f127.js","assets/react-b8fbf05d.js","assets/classnames-bc35a1ef.js","assets/yup-79311ed6.js","assets/property-expr-38205fa5.js","assets/tiny-case-d0726479.js","assets/toposort-84d4889b.js","assets/formik-ecd829e3.js","assets/deepmerge-15f827de.js","assets/lodash-es-87d1a1d5.js","assets/react-fast-compare-b00643a1.js","assets/tiny-warning-c932d744.js","assets/hoist-non-react-statics-3f8ebaa8.js","assets/minoru-4fba79f4.js","assets/react-router-dom-441412e9.js","assets/react-router-67e23d4b.js","assets/@remix-run-06a34d2a.js","assets/UiFormInput-8ffcd93d.js","assets/framer-motion-55a73aab.js","assets/UiFormInput-9eeab60d.css","assets/react-dom-b18fb4d6.js","assets/scheduler-765c72db.js","assets/@reduxjs-a9bd0a2e.js","assets/immer-41fd5235.js","assets/redux-76ec1fc4.js","assets/@babel-19a2e885.js","assets/redux-thunk-ef899f4c.js","assets/axios-ce212671.js","assets/react-redux-910885b1.js","assets/react-is-a192e302.js","assets/use-sync-external-store-7b52be53.js","assets/react-icons-87863f66.js","assets/index-4a4f96b5.css"])),ct=()=>{const e=D(ye);return r.jsx("div",{className:"App",children:r.jsx(ne,{children:$e.map((t,s)=>r.jsx(ce,{path:t.path,element:r.jsx(i.Suspense,{fallback:r.jsx(at,{theme:"black",isShadow:!1}),children:e?r.jsx(Ze,{children:r.jsx(t.element,{})}):r.jsx(nt,{})})},s))})})};W.createRoot(document.getElementById("root")).render(r.jsx(Y,{children:r.jsx(Z,{store:p,children:r.jsx(ke,{children:r.jsx(ct,{})})})}));export{Ut as A,Ht as B,$t as C,Xe as F,de as M,Oe as U,ye as a,Be as b,L as c,Rt as d,zt as e,I as f,bt as g,It as h,Ot as i,Lt as j,he as k,At as l,Pt as m,Dt as n,Nt as o,v as p,Vt as q,Mt as r,Ft as s,qt as t,D as u,Jt as v,Tt as w,x,_e as y,Ct as z};
