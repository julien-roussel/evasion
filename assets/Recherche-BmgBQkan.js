import{j as e,L as n,B as h,u as j,r as m,b as v,S as g,s as p}from"./index-DAleps8B.js";import{f as u}from"./functionActualite-CmQu_hVt.js";const f=({result:s})=>s.table==="produits"?e.jsx("div",{className:"product-card container-post",children:e.jsxs("div",{className:"container-post-meta",children:[e.jsx(n,{to:"/shop/item/"+s.categorieId+"/"+s.uuid,className:"post-image",children:e.jsx("img",{alt:s.name,src:`${"/evasion//assets/img/"+s.img+"-350px.png"}`})}),e.jsxs("div",{className:"container-meta",children:[e.jsx("h3",{className:"title-post-post",children:s.name}),e.jsxs("div",{className:"meta",children:[e.jsx("span",{children:s.gamme}),e.jsxs("span",{children:[s.format,"ml"]})]}),e.jsx("hr",{}),e.jsx("p",{children:"Huile de douche aux huiles essentielles avec des notes d’agrumes."}),e.jsx(h,{name:"Découvrir le produit",lien:"/shop/item/"+s.categorieId+"/"+s.uuid})]})]})}):s.table==="articles"?e.jsx("div",{className:"article-card container-post",children:e.jsxs("div",{className:"container-post-meta",children:[e.jsx(n,{to:u.urlArticle(s.title,s.id),className:"post-image",children:e.jsx("img",{alt:s.name,src:`${"/evasion/"+s.image+"-400px.jpg"}`})}),e.jsxs("div",{className:"container-meta",children:[e.jsx("h3",{className:"title-post-post",children:s.title}),e.jsxs("div",{className:"meta",children:[e.jsx("span",{children:s.category_article}),e.jsx("span",{children:s.author})]}),e.jsx("hr",{}),e.jsx(h,{name:"Découvrir l'article",lien:u.urlArticle(s.title,s.id)})]})]})}):null,R=()=>{const s=j(),{searchTerm:a}=s,[t,x]=m.useState([]);return m.useEffect(()=>{(async()=>{try{let r=[];const{data:i,error:l}=await p.from("produits").select("*").or(`name.ilike.%${a}%,gamme.ilike.%${a}%`);l?console.warn("Erreur lors de la recherche dans produits:",l):i.length>0&&r.push({table:"produits",results:i});const{data:o,error:d}=await p.from("articles").select("*").or(`title.ilike.%${a}%,chapeau.ilike.%${a}%,content.ilike.%${a}%`);d?console.warn("Erreur lors de la recherche dans articles:",d):o.length>0&&r.push({table:"articles",results:o}),x(r)}catch(r){console.error("Erreur lors de la recherche :",r)}})()},[a]),console.log("Résultats avant rendu :",t),e.jsxs("div",{children:[e.jsx("title",{children:"Votre recherche"}),e.jsx("meta",{name:"description",content:a?"Recherche : "+a:"Résultat de la recherche"}),e.jsxs("div",{id:"page-rechercher",className:"container",children:[e.jsxs("header",{children:[e.jsx("h1",{className:"",children:"Votre recherche"}),e.jsxs("span",{id:"link-breadcrumb",className:"",children:[e.jsx(v,{name:"Retour à l'accueil",lien:"/",img:"/evasion//assets/picto/picto-back.svg"}),e.jsx(n,{to:"/",children:"Évasion"})]})]}),e.jsxs("div",{className:"container-grid",children:[e.jsx(g,{active:"true"}),e.jsx("div",{id:"container-search-post",children:t.length===0?e.jsx("p",{children:"Aucun résultat trouvé."}):t.map((c,r)=>c.results.map(i=>e.jsx(f,{result:{table:c.table,...i}},i.uuid)))})]})]})]})};export{R as default};
