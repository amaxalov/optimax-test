!function(e){function t(t){for(var n,i,c=t[0],l=t[1],p=t[2],s=0,m=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(u&&u(t);m.length;)m.shift()();return o.push.apply(o,p||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,c=1;c<r.length;c++){var l=r[c];0!==a[l]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={1:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(e){return i.p+""+({0:"404"}[e]||e)+".949b3cf843d0858487ff.js"}(e);var l=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(p);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,r[1](l)}a[e]=void 0}};var p=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var u=l;o.push([163,2]),r()}({16:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(0),a=r(3);const o=a.b.div`
  display: block;
  ${({top:e})=>e&&a.a`
      padding-top: ${e}px;
    `}
  ${({left:e})=>e&&a.a`
      padding-left: ${e}px;
    `};
  ${({right:e})=>e&&a.a`
      padding-right: ${e}px;
    `};
  ${({bottom:e})=>e&&a.a`
      padding-bottom: ${e}px;
    `};
`,i=({children:e,top:t,left:r,bottom:a,right:i})=>n.createElement(o,{top:t,left:r,bottom:a,right:i},e);i.defaultProps={top:"0",left:"0",right:"0",bottom:"0"}},163:function(e,t,r){r(164),e.exports=r(378)},37:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(0);const a=r(3).b.div`
  display: block;
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 20px;
`,o=({children:e})=>n.createElement(a,null,e)},375:function(e,t,r){},376:function(e,t,r){},378:function(e,t,r){"use strict";r.r(t),r.d(t,"Root",(function(){return ye}));var n=r(0),a=r(78),o=r(17),i=r(61),c=r(8);var l=r(37),p=r(53),u=r(16);var s=()=>n.createElement(l.a,null,n.createElement(u.a,{top:"20"},n.createElement(p.a,{align:"center"},"Main page"))),m=r(161),d=r.n(m);var b=r(3);const f=b.b.button`
  width: 200px;
  padding: 13px 20px;
  border-radius: 5px;
  outline: none;
  background: #48a1e6;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
`,g=({children:e,type:t,onClick:r})=>n.createElement(f,{type:t,onClick:r},e),y=b.a`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  .right {
    text-align: right;
  }
`,E=b.b.div`
  padding: 0 20px;
  margin-bottom: 20px;
  font-weight: bold;
  ${y}
`,h=b.b.div`
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #333333;
  margin-bottom: 20px;
  ${y}
  &::last-child {
    margin-bottom: 0;
  }
`,O=b.b.div`
  display: flex;
  justify-content: ${({right:e})=>e?"flex-end":"flex-start"};
  align-items: center;
`,v=n.memo((function({items:e}){const t=Object(o.b)(),r=Object(o.c)(e=>e.cart.items),a=n.useCallback(e=>{t({type:"@CART/ADD",payload:e}),t({type:"@CART/SET_TOTAL_PRICE"})},[]);return n.createElement(n.Fragment,null,n.createElement(E,null,n.createElement(O,null,"title"),n.createElement(O,{right:!0},"price")),e.map(e=>n.createElement(h,{key:""+e.title},n.createElement(O,null,e.title),n.createElement(O,{right:!0},e.price," / $"),n.createElement(O,{right:!0},r.find(t=>t.id===e.id)?"Added":n.createElement(g,{onClick:()=>a(e)},"Add to Cart")))))}));var x=r(112);const j=b.b.input`
  width: 200px;
  padding: 10px 15px;
  outline: none;
  border: 1px solid silver;
  border-radius: 5px;
`,C=e=>n.createElement(j,e);var T=[{name:"title",type:"text"},{name:"price",type:"number"}];const P=e=>{const t={};return e.title?e.title.length>30&&(t.title="Max 30 symbols"):t.title="Title is required",e.price?isNaN(parseInt(e.price))?t.price="Must be a number":parseInt(e.price)<=0&&(t.price="Price must be greater than 0"):t.price="Price is required",t},w=b.b.div`
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
`,A=b.b.div`
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 20px;
  color: #48a1e6;
  cursor: pointer;
`,k=b.b.div`
  color: red;
  padding-top: 5px;
  font-size: 12px;
  text-align: left;
`;function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){D(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function D(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const M=n.memo((function({closeModal:e}){const t=Object(o.b)(),r=n.useCallback(r=>{t({type:"@CATALOG/ADD_TO_CATALOG",payload:R(R({},r),{},{price:parseInt(r.price),id:Date.now()})}),e()},[]);return n.createElement(w,null,n.createElement(x.b,{onSubmit:r,validate:P,render:({handleSubmit:t,pristine:r,submitting:a,invalid:o,form:i})=>n.createElement("form",{onSubmit:t,className:"form"},n.createElement(A,{onClick:()=>{i.reset(),e()}},"✖"),T.map(e=>n.createElement(x.a,{key:"field_"+e.name,name:e.name,type:e.type},({input:t,meta:r})=>n.createElement(u.a,{bottom:"20"},n.createElement(C,S({},t,{type:e.type,placeholder:e.name})),r.error&&r.touched&&n.createElement(k,null,r.error)))),n.createElement(g,{type:"submit",disabled:a||r||o},"Submit"))}))}));var L=n.memo((function(){const[e,t]=n.useState(!1),r=Object(o.b)(),a=Object(o.c)(e=>e.catalog),i=0===a.items.length;return n.useEffect(()=>{i&&r(e=>(e({type:"@CATALOG/FETCH"}),d.a.get("https://run.mocky.io/v3/4756e740-90a0-4e80-9fe1-f916deef5ded").then(t=>{e((e=>({type:"@CATALOG/FETCH_CATALOG_SUCCESS",payload:e}))(t.data))})))},[]),i?null:n.createElement(l.a,null,n.createElement(u.a,{top:"20"},n.createElement(p.a,{align:"center"},"Stock of the companies")),n.createElement(u.a,{top:"20",bottom:"20"},n.createElement(v,{items:a.items})),n.createElement(g,{onClick:()=>t(!0)},"add stock"),e&&n.createElement(M,{closeModal:()=>t(!1)}))})),$=r.p+"images/941fce177b2f5950eab89ccb0c1062c2.svg",I=r.p+"images/60a133df4162e2fd167a28350c3efc2c.svg";const q=b.b.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  height: 26px;
  overflow: hidden;
  border-radius: 5px;
`,G=b.b.button`
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
`,F=({increment:e,decrement:t,quantity:r})=>n.createElement(q,null,n.createElement(G,{onClick:e},n.createElement("img",{src:$,alt:"plus"})),r,n.createElement(G,{disabled:r<=1,onClick:t},n.createElement("img",{src:I,alt:"minus"})));var N=r.p+"images/89761f963ce6e71bc317061ac0b72eee.svg";const H=b.a`
  display: grid;
  grid-template-columns: repeat(3, 1fr) 50px;
  grid-gap: 10px;
  .right {
    text-align: right;
  }
`,z=b.b.div`
  padding: 0 20px;
  margin-bottom: 20px;
  font-weight: bold;
  ${H}
`,J=b.b.div`
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #333333;
  margin-bottom: 20px;
  ${H}
  &::last-child {
    margin-bottom: 0;
  }
`,U=b.b.div`
  display: flex;
  justify-content: ${({right:e})=>e?"flex-end":"flex-start"};
  align-items: center;
`,V=b.b.div`
  cursor: pointer;
`,B=n.memo((function({items:e}){const t=Object(o.b)(),r=n.useCallback(e=>{t((e=>({type:"@CART/REMOVE",payload:e}))(e)),t({type:"@CART/SET_TOTAL_PRICE"})},[]),a=n.useCallback(e=>{t((e=>({type:"@CART/INCREMENT_ITEM",payload:e}))(e)),t({type:"@CART/SET_TOTAL_PRICE"})},[]),i=n.useCallback(e=>{t((e=>({type:"@CART/DECREMENT_ITEM",payload:e}))(e)),t({type:"@CART/SET_TOTAL_PRICE"})},[]);return n.createElement(n.Fragment,null,n.createElement(z,null,n.createElement(U,null,"title"),n.createElement(U,{right:!0},"price"),n.createElement(U,{right:!0},"quantity")),e.map(e=>n.createElement(J,{key:""+e.title},n.createElement(U,null,e.title),n.createElement(U,{right:!0},e.price," / $"),n.createElement(U,{right:!0},n.createElement(F,{increment:()=>a(e.id),decrement:()=>i(e.id),quantity:e.quantity})),n.createElement(U,{right:!0},n.createElement(V,{onClick:()=>r(e.id)},n.createElement("img",{src:N,alt:"trash"}))))))})),Y=Object(b.b)(i.b)`
  text-decoration: none;
  color: blue;
  &:hover {
    color: red;
  }
`;var K=()=>{const e=Object(o.c)(e=>e.cart);return 0===e.items.length?n.createElement(l.a,null,n.createElement(u.a,{top:"20",bottom:"10"},n.createElement(p.a,null,"Cart is empty :(")),n.createElement(Y,{to:"/catalog"},"Go to catalog →")):n.createElement(l.a,null,n.createElement(u.a,{top:"20"},n.createElement(p.a,{align:"center"},"Your cart")),n.createElement(u.a,{top:"20",bottom:"20"},n.createElement(B,{items:e.items})),n.createElement(u.a,{top:"20"},"total price: ",e.totalPrice))};const Q=n.lazy(()=>r.e(0).then(r.bind(null,379))),W=()=>n.createElement(n.Suspense,{fallback:n.createElement("div",null,"Load...")},n.createElement(c.c,null,n.createElement(c.a,{path:"/",exact:!0,component:s}),n.createElement(c.a,{path:"/catalog",exact:!0,component:L}),n.createElement(c.a,{path:"/cart",exact:!0,component:K}),n.createElement(c.a,{component:Q})));r(375),r(376);var X=r(41);function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){te(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function te(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const re={isFetched:!1,items:[]};function ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ae(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(r),!0).forEach((function(t){oe(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ne(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function oe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const ie={totalPrice:0,items:[]};var ce=Object(X.c)({catalog:function(e=re,t){switch(t.type){default:return e;case"@CATALOG/FETCH":return ee(ee({},e),{},{isFetched:!0});case"@CATALOG/ADD_TO_CATALOG":return ee(ee({},e),{},{items:[t.payload,...e.items]});case"@CATALOG/FETCH_CATALOG_SUCCESS":return ee(ee({},e),{},{items:t.payload,isFetched:!1})}},cart:function(e=ie,t){switch(t.type){default:return e;case"@CART/SET_TOTAL_PRICE":return ae(ae({},e),{},{totalPrice:e.items.reduce((e,t)=>e+t.price*t.quantity,0)});case"@CART/ADD":const r=[ae(ae({},t.payload),{},{quantity:1}),...e.items];return ae(ae({},e),{},{items:r,totalPrice:r.reduce((e,t)=>e+t.price,0)});case"@CART/REMOVE":const n=e.items.filter(e=>e.id!==t.payload);return ae(ae({},e),{},{items:n,totalPrice:n.reduce((e,t)=>e+t.price,0)});case"@CART/INCREMENT_ITEM":return ae(ae({},e),{},{items:e.items.map(e=>e.id===t.payload?ae({quantity:e.quantity++},e):e)});case"@CART/DECREMENT_ITEM":return ae(ae({},e),{},{items:e.items.map(e=>e.id===t.payload?ae({quantity:e.quantity--},e):e)})}}}),le=r(162);const pe=X.d,ue=Object(X.a)(le.a);var se=Object(X.e)(ce,pe(ue)),me=[{to:"/",name:"Home"},{to:"/catalog",name:"Catalog"},{to:"/cart",name:"Cart"}];const de=b.b.div`
  background: crimson;
`,be=b.b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,fe=Object(b.b)(i.b)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`,ge=n.memo((function(){return n.createElement(de,null,n.createElement(l.a,null,n.createElement(u.a,{top:"10",bottom:"10"},n.createElement(be,null,me.map(e=>n.createElement(fe,{key:"nav_"+e.name,to:e.to},e.name))))))}));r(377);const ye=()=>n.createElement(n.StrictMode,null,n.createElement(o.a,{store:se},n.createElement(i.a,null,n.createElement(ge,null),n.createElement(W,null))));Object(a.render)(n.createElement(ye,null),document.getElementById("root"))},53:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(0);const a=r(3).b.h1`
  margin: 10px 0;
  font-size: 32px;
  text-align: ${e=>e.align};
`,o=({children:e,align:t="left"})=>n.createElement(a,{align:t},e);o.defaultProps={align:"left"}}});