const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SliderGamme.js","assets/index.js","assets/index.css","assets/slider.js","assets/slider.css"])))=>i.map(i=>d[i]);
import{r,j as e,B as t,R as l,N as o,_ as c}from"./index.js";import{B as i}from"./ButtonToggle.js";const m=l.lazy(()=>c(()=>import("./SliderGamme.js"),__vite__mapDeps([0,1,2,3,4]))),u=()=>{const[s,n]=r.useState(0),a=()=>{n(window.scrollY)};return r.useEffect(()=>(window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}),[]),e.jsxs("div",{id:"page-nos-gammes",children:[e.jsx("title",{children:"Nos gammes cosmétiques Évasion"}),e.jsx("meta",{name:"description",content:"Évasion vous propose des produits cosmétiques et d'hygiène formulés à partir d'huiles essentielles 100% françaises, inspirés des régions les plus emblématiques de France."}),e.jsxs("section",{className:"container container-first",children:[e.jsx("h1",{className:"title-XH",children:"Nos gammes"}),e.jsxs("div",{id:"header-gammes",className:"container container-grid",children:[e.jsxs("figure",{className:`container-image pre-anim ${s<"700"?"translateT":""}`,children:[e.jsx("figcaption",{children:"Corse"}),e.jsx("img",{alt:"",src:"/evasion/assets/img/photos/maillot-rayure-orange-1000px.jpg"})]}),e.jsxs("figure",{className:`container-image pre-anim ${s<"700"?"translateB":""}`,children:[e.jsx("figcaption",{children:"Côte d'azur"}),e.jsx("img",{alt:"",src:"/evasion/assets/img/photos/maillot-jaune-azur-1000px.jpg"})]}),e.jsxs("figure",{className:`container-image pre-anim ${s<"700"?"translateT":""}`,children:[e.jsx("figcaption",{children:"Provence"}),e.jsx("img",{alt:"",src:"/evasion/assets/img/photos/soiree-plaid-1000px.jpg"})]}),e.jsxs("figure",{className:`container-image pre-anim ${s<"700"?"translateB":""}`,children:[e.jsx("figcaption",{children:"Bretagne"}),e.jsx("img",{alt:"",src:"/evasion/assets/img/photos/homme-torse-nue-ciel-1000px.jpg"})]}),e.jsx("div",{id:"container-filter",children:e.jsxs("div",{className:"liste-filter",children:[e.jsx("h2",{className:"name-category",children:"Nos produits"}),e.jsxs("ul",{children:[e.jsx(i,{placeHolder:"Gel douche",value:"gelDouche"}),e.jsx(i,{placeHolder:"Huile",value:"huile"}),e.jsx(i,{placeHolder:"Huile satinée",value:"huileSatinee"}),e.jsx(i,{placeHolder:"Crème",value:"creme"})]})]})})]}),e.jsx(t,{name:"Découvrir nos produits",lien:"/shop"})]}),e.jsx("section",{id:"container-slider-gammes",children:e.jsx(m,{})}),e.jsx(o,{})]})};export{u as default};
