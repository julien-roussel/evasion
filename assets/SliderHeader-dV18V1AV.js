import{r,j as t,L as g,s as x}from"./index-Dj_zLTkf.js";import{S as j}from"./slider-46NwsK1C.js";import{u as S}from"./index-C-gAxoAY.js";const E=()=>{const[n,o]=r.useState([]),[i,y]=r.useState([500,250]),[s,c]=S(),l=r.useRef(null),m=s.elementX>screen.width/6&&s.elementX<screen.width/4*2,u=s.elementY>screen.height/5&&s.elementY<screen.height/5*4,d=m&&u;r.useEffect(()=>{(async()=>{try{const{data:a,status:f,error:I}=await x.from("produits").select("*").in("format",[i]);if(f===200){const p=a.sort(()=>.5-Math.random());o(p)}}catch(a){console.log("Error fetching: ",a)}})()},[]);var h={dots:!1,infinite:!0,initialSlide:0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,pauseOnHover:!0};return t.jsx("div",{ref:c,children:t.jsx(j,{...h,ref:l,children:n.map(e=>t.jsxs(g,{to:"/shop/item/"+e.categorieId+"/"+e.uuid,className:"slide-child",children:[t.jsxs("div",{className:d?"active bandeau":"bandeau",style:{left:s.elementX-250,top:s.elementY-150},children:[t.jsx("h4",{children:e.categorie}),t.jsx("hr",{}),t.jsx("span",{children:e.gamme}),t.jsx("span",{children:e.format})]}),t.jsx("img",{src:"http://localhost:5173/public/assets/img/"+e.img2+"-1200px.png",alt:e.name,className:"floating-in-element"})]},e.id))})})};export{E as default};
