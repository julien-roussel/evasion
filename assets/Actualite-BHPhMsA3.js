import{r as a,j as t,N as x,s as n}from"./index-BFwUiZyL.js";import{f as j}from"./functionActualite-CmQu_hVt.js";import{B as p}from"./ButtonToggle-c7ifrrXQ.js";import{I as A}from"./ItemArticle-DPEEk3Kz.js";const C=()=>{const[o,l]=a.useState([]),[y,v]=a.useState(!1),[d,u]=a.useState([]),[c,g]=a.useState([]);a.useEffect(()=>{(async()=>{try{const{data:r,status:s,error:i}=await n.from("articles").select("category_article");if(s===200){const m=[...new Set(r.map(h=>h.category_article))];u(m)}}catch(r){console.log("Error fetching: ",r)}})()},[]);const f=(e,r)=>{e==="categorie"&&g(s=>s.includes(r)?s.filter(i=>i!==r):[...s,r])};return a.useEffect(()=>{(async()=>{try{let r=n.from("articles").select("*");c.length>0&&(r=r.in("category_article",c));const{data:s,error:i}=await r;i?console.error("Erreur lors du chargement des articles :",i):l(s)}catch(r){console.error("Erreur de requête :",r)}})()},[c]),t.jsxs("div",{id:"page-actualite",children:[t.jsx("title",{children:"L'Actualité pour s'évader avec Évasion"}),t.jsx("meta",{name:"description",content:"Au cœur de nos formules généreuses, aux textures sensorielles et aux senteurs addictives, notre laboratoire intègre des huiles essentielles 100% pures et naturelles qui libèrent leurs bienfaits actifs et créent une bulle de reconnexion à la nature."}),t.jsx("div",{className:"container-dark",children:t.jsxs("div",{className:"container",children:[t.jsx("div",{className:"header-articles",children:t.jsx("h1",{children:"Actualité"})}),t.jsxs("div",{id:"container-section-articles",className:"container-grid",children:[t.jsx("div",{id:"container-filter",className:"grid1",children:t.jsxs("div",{className:"liste-filter",children:[t.jsx("h2",{className:"name-category",children:"Catégories"}),t.jsx("ul",{children:d.map((e,r)=>t.jsx(p,{class:"button-white",filtre:"categorie",name:e,placeHolder:e,onToggle:f},r))})]})}),t.jsx("div",{id:"container-articles",className:"container-post-item",children:o.map(e=>t.jsx(A,{id:e.id,title:e.title,lien:j.urlArticle(e.title,e.id),date:e.date,category:e.category_article,image:e.image,chapeau:e.chapeau},e.id))})]})]})}),t.jsx(x,{})]})};export{C as default};
