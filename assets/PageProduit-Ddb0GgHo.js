import{u as b,r as i,j as e,b as v,L as o,c as u,B as N,s as l}from"./index-t389t3n7.js";import{I,f as P}from"./ItemProduit-D6OQcchk.js";const q=()=>{const m=b(),{id:r}=m,[t,x]=i.useState([]),[c,p]=i.useState();i.useEffect(()=>{(async()=>{try{const{data:a,status:n,error:j}=await l.from("produits").select("*"),d=a.filter(f=>f.uuid===r);n===200&&x(d[0]),n===200&&p(d[0].gammeId)}catch(a){console.log("Error fetching: ",a)}})()},[r]);const[h,g]=i.useState([]);return i.useEffect(()=>{(async()=>{try{const{data:a,status:n,error:j}=await l.from("produits").select("*").in("gammeId",[c]).neq("uuid",r).limit(3);n===200&&g(a)}catch(a){console.log("Error fetching: ",a)}})()},[r,c]),e.jsxs("div",{id:"page-post",children:[e.jsx("title",{children:t?t.name:"Page produit cosmétique Évasion"}),e.jsx("meta",{name:"description",content:"Au cœur de nos formules généreuses, aux textures sensorielles et aux senteurs addictives, notre laboratoire intègre des huiles essentielles 100% pures et naturelles qui libèrent leurs bienfaits actifs et créent une bulle de reconnexion à la nature."}),t&&e.jsxs("section",{id:"container-post-product",children:[e.jsx("div",{id:"background-post-product"}),e.jsxs("div",{id:"container-post-meta",className:"container container-grid",children:[e.jsxs("div",{className:"container-image fade-in-element",children:[e.jsx("img",{alt:t.name,src:"/evasion//assets/img/'+(post.img)+'.png"}),e.jsx("div",{className:"border border-scale-bot"})]}),e.jsxs("div",{className:"container-meta container-flex-texte",children:[e.jsxs("span",{id:"link-breadcrumb",children:[e.jsx(v,{name:"Retour à la page d'accueil",lien:"/",img:"/evasion//assets/picto/picto-back.svg"}),e.jsx(o,{to:"/",children:"Évasion"}),"/",e.jsx(o,{to:"/shop",children:"Shop"}),"/",e.jsx(o,{to:"/shop/item/"+t.uuid,children:t.name})]}),e.jsx("span",{className:"brand",children:t.gamme}),e.jsx("h1",{className:"title-X",children:t.name}),e.jsx("hr",{}),e.jsx("p",{className:"description",children:"Au cœur de nos formules généreuses, aux textures sensorielles et aux senteurs addictives, notre laboratoire intègre des huiles essentielles 100% pures et naturelles qui libèrent leurs bienfaits actifs et créent une bulle de reconnexion à la nature. "}),e.jsx("span",{className:"category",children:t.category}),e.jsxs("span",{className:"prix",children:[t.prix,"€"]}),e.jsx("hr",{}),e.jsxs("div",{children:[e.jsx("h3",{className:"name-category",children:"Ingrédients"}),e.jsx("p",{className:"ingredients",children:t.ingredient})]}),e.jsxs("div",{className:"container-double",children:[e.jsx(u,{name:"Ajouter au panier",action:"add",uuid:t.uuid}),e.jsx(u,{name:"Acheter",action:"add",lien:"/panier",uuid:t.uuid})]})]})]})]},t.uuid),e.jsx("section",{id:"container-proposition",children:e.jsxs("div",{className:"container container-grid",children:[e.jsx("hr",{}),e.jsxs("div",{className:"grid3 container-flex-texte",children:[e.jsx("h2",{children:"Vous pourriez aimer aussi..."}),e.jsx("p",{children:"Au cœur de nos formules généreuses, aux textures sensorielles et aux senteurs addictives, notre laboratoire intègre des huiles essentielles 100% pures et naturelles qui libèrent leurs bienfaits actifs et créent une bulle de reconnexion à la nature.               "}),e.jsx(N,{name:"Profitez de toute la gamme !",lien:"/nos-gammes"})]}),e.jsx("div",{id:"container-shop",className:"grid6d",children:h.map(s=>e.jsx(I,{id:s.id,uudid:s.uuid,categorieId:s.categorieId,name:s.name,uuid:s.uuid,lien:P.urlProduit(s.categorieId,s.uuid),gamme:s.gamme,img:s.img,prix:s.prix,format:s.format,chapeau:s.chapeau},s.id))})]})})]})};export{q as default};
