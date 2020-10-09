!function(e){function t(t){for(var n,c,i=t[0],l=t[1],p=t[2],u=0,s=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&s.push(a[c][0]),a[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(m&&m(t);s.length;)s.shift()();return o.push.apply(o,p||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var l=r[i];0!==a[l]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={0:0},o=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var p=0;p<i.length;p++)t(i[p]);var m=l;o.push([160,1]),r()}({160:function(e,t,r){r(161),e.exports=r(375)},372:function(e,t,r){},373:function(e,t,r){},375:function(e,t,r){"use strict";r.r(t),r.d(t,"Root",(function(){return xe}));var n=r(0),a=r(75),o=r(16),c=r(38),i=r(8);var l=r(3);const p=l.b.div`
  display: block;
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 20px;
`,m=({children:e})=>n.createElement(p,null,e),u=l.b.h1`
  margin: 10px 0;
  font-size: 32px;
  text-align: ${e=>e.align};
`,s=({children:e,align:t="left"})=>n.createElement(u,{align:t},e);s.defaultProps={align:"left"};const d=l.b.div`
  display: block;
  ${({top:e})=>e&&l.a`
      padding-top: ${e}px;
    `}
  ${({left:e})=>e&&l.a`
      padding-left: ${e}px;
    `};
  ${({right:e})=>e&&l.a`
      padding-right: ${e}px;
    `};
  ${({bottom:e})=>e&&l.a`
      padding-bottom: ${e}px;
    `};
`,b=({children:e,top:t,left:r,bottom:a,right:o})=>n.createElement(d,{top:t,left:r,bottom:a,right:o},e);b.defaultProps={top:"0",left:"0",right:"0",bottom:"0"};var f=()=>n.createElement(m,null,n.createElement(b,{top:"20"},n.createElement(s,{align:"center"},"Main page"))),g=r(158),E=r.n(g);const y=l.b.button`
  width: 200px;
  padding: 13px 20px;
  border-radius: 5px;
  background: #48a1e6;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
`,O=({children:e,type:t,onClick:r})=>n.createElement(y,{type:t,onClick:r},e),h=l.a`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  .right {
    text-align: right;
  }
`,x=l.b.div`
  padding: 0 20px;
  margin-bottom: 20px;
  font-weight: bold;
  ${h}
`,v=l.b.div`
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #333333;
  margin-bottom: 20px;
  ${h}
  &::last-child {
    margin-bottom: 0;
  }
`,j=l.b.div`
  display: flex;
  justify-content: ${({right:e})=>e?"flex-end":"flex-start"};
  align-items: center;
`,C=n.memo((function({items:e}){const t=Object(o.b)(),r=Object(o.c)(e=>e.cart.items),a=n.useCallback(e=>{t({type:"@CART/ADD",payload:e}),t({type:"@CART/SET_TOTAL_PRICE"})},[]);return n.createElement(n.Fragment,null,n.createElement(x,null,n.createElement(j,null,"title"),n.createElement(j,{right:!0},"price")),e.map(e=>n.createElement(v,{key:""+e.title},n.createElement(j,null,e.title),n.createElement(j,{right:!0},e.price," / $"),n.createElement(j,{right:!0},r.find(t=>t.id===e.id)?"Added":n.createElement(O,{onClick:()=>a(e)},"Add to Cart")))))}));var T=r(109);const A=l.b.input`
  width: 200px;
  padding: 10px 15px;
  outline: none;
  border: 1px solid silver;
  border-radius: 5px;
`,P=e=>n.createElement(A,e);var w=[{name:"title",type:"text"},{name:"price",type:"number"}];const _=e=>{const t={};return e.title?e.title.length>30&&(t.title="Max 30 symbols"):t.title="Title is required",e.price?parseInt(e.price)<=0&&(t.price="Price must be greater than 0"):t.price="Price is required",t},k=l.b.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #dededecf;
  .form {
    background: white;
    border-radius: 5px;
    padding: 30px 50px;
    position: relative;
    text-align: center;
  }
`,S=l.b.div`
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 20px;
  color: #48a1e6;
  cursor: pointer;
`,R=l.b.div`
  color: red;
  padding-top: 5px;
  font-size: 12px;
  text-align: left;
`;function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){$(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function $(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const G=n.memo((function({closeModal:e}){const t=Object(o.b)(),r=n.useCallback(r=>{t({type:"@CATALOG/ADD_TO_CATALOG",payload:M(M({},r),{},{price:parseInt(r.price),id:Date.now()})}),e()},[]);return n.createElement(k,null,n.createElement(T.b,{onSubmit:r,validate:_,render:({handleSubmit:t,pristine:r,submitting:a,invalid:o,form:c})=>n.createElement("form",{onSubmit:t,className:"form"},n.createElement(S,{onClick:()=>{c.reset(),e()}},"✖"),w.map(e=>n.createElement(T.a,{key:"field_"+e.name,name:e.name,type:e.type},({input:t,meta:r})=>n.createElement(b,{bottom:"20"},n.createElement(P,D({},t,{type:e.type,placeholder:e.name})),r.error&&r.touched&&n.createElement(R,null,r.error)))),n.createElement(O,{type:"submit",disabled:a||r||o},"Submit"))}))}));var I=n.memo((function(){const[e,t]=n.useState(!1),r=Object(o.b)(),{items:a}=Object(o.c)(e=>e.catalog),c=0===a.length;return n.useEffect(()=>{c&&r(e=>(e({type:"@CATALOG/FETCH"}),E.a.get("https://run.mocky.io/v3/4756e740-90a0-4e80-9fe1-f916deef5ded").then(t=>{e((e=>({type:"@CATALOG/FETCH_CATALOG_SUCCESS",payload:e}))(t.data))}).catch(t=>{e((e=>({type:"@CATALOG/FETCH_CATALOG_REJECTED",payload:e}))(t.messages||"something get wrong :("))})))},[]),c?null:n.createElement(m,null,n.createElement(b,{top:"20"},n.createElement(s,{align:"center"},"Stock of the companies")),n.createElement(b,{top:"20",bottom:"20"},n.createElement(C,{items:a})),n.createElement(O,{onClick:()=>t(!0)},"add stock"),e&&n.createElement(G,{closeModal:()=>t(!1)}))})),q=r.p+"images/941fce177b2f5950eab89ccb0c1062c2.svg",F=r.p+"images/60a133df4162e2fd167a28350c3efc2c.svg";const H=l.b.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  height: 26px;
  overflow: hidden;
  border-radius: 5px;
`,N=l.b.button`
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: flex;
  border: none;
  flex-shrink: 0;
  outline: none;
  height: 100%;
  &:first-child {
    margin-right: 10px;
  }
  &:last-child {
    margin-left: 10px;
  }
  &:disabled {
    cursor: not-allowed;
  }
`,J=({increment:e,decrement:t,quantity:r})=>n.createElement(H,null,n.createElement(N,{onClick:e},n.createElement("img",{src:q,alt:"plus"})),r,n.createElement(N,{disabled:r<=1,onClick:t},n.createElement("img",{src:F,alt:"minus"})));var z=r.p+"images/89761f963ce6e71bc317061ac0b72eee.svg";const U=l.a`
  display: grid;
  grid-template-columns: repeat(3, 1fr) 50px;
  grid-gap: 10px;
  .right {
    text-align: right;
  }
`,V=l.b.div`
  padding: 0 20px;
  margin-bottom: 20px;
  font-weight: bold;
  ${U}
`,B=l.b.div`
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #333333;
  margin-bottom: 20px;
  ${U}
  &::last-child {
    margin-bottom: 0;
  }
`,Y=l.b.div`
  display: flex;
  justify-content: ${({right:e})=>e?"flex-end":"flex-start"};
  align-items: center;
`,K=l.b.div`
  cursor: pointer;
`,Q=n.memo((function({items:e}){const t=Object(o.b)(),r=n.useCallback(e=>{t((e=>({type:"@CART/REMOVE",payload:e}))(e)),t({type:"@CART/SET_TOTAL_PRICE"})},[]),a=n.useCallback(e=>{t((e=>({type:"@CART/INCREMENT_ITEM",payload:e}))(e)),t({type:"@CART/SET_TOTAL_PRICE"})},[]),c=n.useCallback(e=>{t((e=>({type:"@CART/DECREMENT_ITEM",payload:e}))(e)),t({type:"@CART/SET_TOTAL_PRICE"})},[]);return n.createElement(n.Fragment,null,n.createElement(V,null,n.createElement(Y,null,"title"),n.createElement(Y,{right:!0},"price"),n.createElement(Y,{right:!0},"quantity")),e.map(e=>n.createElement(B,{key:""+e.title},n.createElement(Y,null,e.title),n.createElement(Y,{right:!0},e.price," / $"),n.createElement(Y,{right:!0},n.createElement(J,{increment:()=>a(e.id),decrement:()=>c(e.id),quantity:e.quantity})),n.createElement(Y,{right:!0},n.createElement(K,{onClick:()=>r(e.id)},n.createElement("img",{src:z,alt:"trash"}))))))})),W=Object(l.b)(c.b)`
  text-decoration: none;
  color: blue;
  &:hover {
    color: red;
  }
`;var X=()=>{const e=Object(o.c)(e=>e.cart);return 0===e.items.length?n.createElement(m,null,n.createElement(b,{top:"20",bottom:"10"},n.createElement(s,null,"Cart is empty :(")),n.createElement(W,{to:"/catalog"},"Go to catalog →")):n.createElement(m,null,n.createElement(b,{top:"20"},n.createElement(s,{align:"center"},"Your cart")),n.createElement(b,{top:"20",bottom:"20"},n.createElement(Q,{items:e.items})),n.createElement(b,{top:"20"},"total price: ",e.totalPrice))};const Z=Object(l.b)(c.b)`
  text-decoration: none;
  color: blue;
  &:hover {
    color: red;
  }
`;var ee=()=>n.createElement(m,null,n.createElement(b,{top:"20",bottom:"10"},n.createElement(s,null,"Page not found")),n.createElement(Z,{to:"/"},"Go to home →"));const te=()=>n.createElement(n.Suspense,{fallback:n.createElement("div",null,"Load...")},n.createElement(i.c,null,n.createElement(i.a,{path:"/",exact:!0,component:f}),n.createElement(i.a,{path:"/catalog",exact:!0,component:I}),n.createElement(i.a,{path:"/cart",exact:!0,component:X}),n.createElement(i.a,{component:ee})));r(372),r(373);var re=r(40);function ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ae(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(r),!0).forEach((function(t){oe(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ne(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function oe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const ce={isFetched:!1,items:[],error:null};function ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function le(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(r),!0).forEach((function(t){pe(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function pe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const me={totalPrice:0,items:[]};var ue=Object(re.c)({catalog:function(e=ce,t){switch(t.type){default:return e;case"@CATALOG/FETCH":return ae(ae({},e),{},{isFetched:!0,error:null});case"@CATALOG/ADD_TO_CATALOG":return ae(ae({},e),{},{items:[t.payload,...e.items]});case"@CATALOG/FETCH_CATALOG_SUCCESS":return ae(ae({},e),{},{items:t.payload,isFetched:!1});case"@CATALOG/FETCH_CATALOG_REJECTED":return ae(ae({},e),{},{isFetched:!1,error:t.payload})}},cart:function(e=me,t){switch(t.type){default:return e;case"@CART/SET_TOTAL_PRICE":return le(le({},e),{},{totalPrice:e.items.reduce((e,t)=>e+t.price*t.quantity,0)});case"@CART/ADD":const r=[le(le({},t.payload),{},{quantity:1}),...e.items];return le(le({},e),{},{items:r,totalPrice:r.reduce((e,t)=>e+t.price,0)});case"@CART/REMOVE":const n=e.items.filter(e=>e.id!==t.payload);return le(le({},e),{},{items:n,totalPrice:n.reduce((e,t)=>e+t.price,0)});case"@CART/INCREMENT_ITEM":return le(le({},e),{},{items:e.items.map(e=>e.id===t.payload?le({quantity:e.quantity++},e):e)});case"@CART/DECREMENT_ITEM":return le(le({},e),{},{items:e.items.map(e=>e.id===t.payload?le({quantity:e.quantity--},e):e)})}}}),se=r(159);const de=re.d,be=Object(re.a)(se.a);var fe=Object(re.e)(ue,de(be)),ge=[{to:"/",name:"Home"},{to:"/catalog",name:"Catalog"},{to:"/cart",name:"Cart"}];const Ee=l.b.div`
  background: crimson;
`,ye=l.b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Oe=Object(l.b)(c.b)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`,he=n.memo((function(){return n.createElement(Ee,null,n.createElement(m,null,n.createElement(b,{top:"10",bottom:"10"},n.createElement(ye,null,ge.map(e=>n.createElement(Oe,{key:"nav_"+e.name,to:e.to},e.name))))))}));r(374);const xe=()=>n.createElement(n.StrictMode,null,n.createElement(o.a,{store:fe},n.createElement(c.a,{basename:"/optimax-test"},n.createElement(he,null),n.createElement(te,null))));Object(a.render)(n.createElement(xe,null),document.getElementById("root"))}});