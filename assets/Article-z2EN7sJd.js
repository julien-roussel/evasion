import{u as v,r as i,j as e,b as N,L as d,N as y,s as m}from"./index-t389t3n7.js";import{f as u}from"./functionActualite-CmQu_hVt.js";import{I as A}from"./ItemArticle-CsW4vxw9.js";const b=()=>{const h=v(),{id:c}=h,[t,x]=i.useState([]),[j,g]=i.useState([]),[l,p]=i.useState();return i.useEffect(()=>{(async()=>{try{const{data:s,status:r,error:f}=await m.from("articles").select("*"),n=s.filter(o=>o.id==c);r===200&&x(n[0]),r===200&&p(n[0].category_article)}catch(s){console.log("Error fetching: ",s)}})()},[c]),i.useEffect(()=>{(async()=>{try{const{data:s,status:r,error:f}=await m.from("articles").select("*").in("category_article",[l]).neq("id",c).limit(3),n=s.filter(o=>o.category_article===l);r===200&&g(n)}catch(s){console.log("Error fetching: ",s)}})()},[c,l]),e.jsxs("div",{children:[e.jsx("title",{children:t?t.title:"L'Actualité pour s'évader avec Évasion"}),e.jsx("meta",{name:"description",content:t?t.chapeau:"Toute l'actualité pour s'évader avec Évasion"}),e.jsx("section",{id:"container-post-article",className:"container-dark",children:e.jsxs("div",{className:"container",children:[t&&e.jsxs("div",{id:"link-breadcrumb",children:[e.jsx(N,{name:"Retour à la page d'accueil",lien:"/",img:"/evasion//assets/picto/picto-back.svg"}),e.jsx(d,{to:"/",children:"Évasion"}),"/",e.jsx(d,{to:"/actualite",children:"Actualité"}),"/",e.jsx(d,{to:u.urlArticle(t.title,t.id),children:t.title})]}),e.jsxs("div",{className:"container-grid",children:[t&&e.jsx("div",{id:"container-post-article",className:"grid6 container-white",children:e.jsxs("div",{className:"container-article grid4",children:[e.jsx("div",{className:"container-image",children:e.jsx("img",{src:"/evasion/+(article.image)+'-1000px.jpg",alt:t.title})}),e.jsxs("span",{className:"meta",children:[t.date," / ",t.category_article]}),e.jsx("h1",{className:"title-X",children:t.title}),e.jsx("div",{className:"chapeau",children:t.chapeau}),e.jsx("div",{className:"content",dangerouslySetInnerHTML:{__html:t.content}}),e.jsx("span",{className:"author",children:t.author})]})},t.uuid),e.jsxs("div",{id:"container-item-articles",className:"grid3",children:[e.jsx("h3",{children:"Actualité"}),e.jsx("div",{className:"container-post-item",children:j.map(a=>e.jsx(A,{id:a.id,title:a.title,lien:u.urlArticle(a.title,a.id),date:a.date,category:a.category_article,image:a.image,chapeau:a.chapeau},a.id))})]})]})]})}),e.jsx(y,{})]})};export{b as default};
