import{j as s,L as a}from"./index.js";const t=(e,i)=>{if(e)return"/shop/item/"+e+"/"+i},n={urlProduit:t},r=e=>s.jsxs("div",{className:"container-product fade-in-element product-"+e.categorieId,children:[s.jsx("div",{className:"border border-scale-bot",children:s.jsxs("div",{className:"prix",children:[e.prix,"€"]})}),s.jsxs("div",{className:"container-product-meta",children:[s.jsx(a,{to:"/shop/item/"+e.categorieId+"/"+e.uuid,className:"product-image",children:s.jsx("img",{alt:e.name+" "+e.gamme,src:`${"/evasion//assets/img/"+e.img+(e.mobile?"-mobile.png":"-350px.png")}`})}),s.jsxs("div",{className:"container-meta",children:[s.jsx("h3",{className:"title-post-item",children:e.name}),s.jsxs("div",{className:"meta",children:[s.jsx("span",{children:e.gamme}),s.jsxs("span",{children:[e.format,"ml"]})]}),s.jsx("hr",{}),s.jsx("p",{children:"Huile de douche aux huiles essentielles avec des notes d’agrumes."})]})]})]},e.uuid);export{r as I,n as f};
