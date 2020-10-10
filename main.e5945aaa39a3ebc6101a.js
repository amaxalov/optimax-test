!function(e){function t(t){for(var n,c,i=t[0],l=t[1],p=t[2],s=0,d=[];s<i.length;s++)c=i[s],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(u&&u(t);d.length;)d.shift()();return a.push.apply(a,p||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var l=r[i];0!==o[l]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={0:0},a=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var p=0;p<i.length;p++)t(i[p]);var u=l;a.push([382,1]),r()}({382:function(e,t,r){r(383),e.exports=r(564)},561:function(e,t,r){},562:function(e,t,r){},564:function(e,t,r){"use strict";r.r(t),r.d(t,"Root",(function(){return ke}));r(417),r(476);var n=r(0),o=r.n(n),a=r(110),c=r(17),i=r(54),l=r(9);var p=r(3);const u=p.b.div`
  display: block;
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 20px;
`,s=({children:e})=>n.createElement(u,null,e),d=p.b.h1`
  margin: 10px 0;
  font-size: 32px;
  text-align: ${e=>e.align};
`,m=({children:e,align:t="left"})=>n.createElement(d,{align:t},e);m.defaultProps={align:"left"};const b=p.b.div`
  display: block;
  ${({top:e})=>e&&p.a`
      padding-top: ${e}px;
    `}
  ${({left:e})=>e&&p.a`
      padding-left: ${e}px;
    `};
  ${({right:e})=>e&&p.a`
      padding-right: ${e}px;
    `};
  ${({bottom:e})=>e&&p.a`
      padding-bottom: ${e}px;
    `};
`,f=({children:e,top:t,left:r,bottom:o,right:a})=>n.createElement(b,{top:t,left:r,bottom:o,right:a},e);f.defaultProps={top:"0",left:"0",right:"0",bottom:"0"};var g=()=>n.createElement(s,null,n.createElement(f,{top:"20"},n.createElement(m,{align:"center"},"Main page"))),y=r(380),E=r.n(y);const O=p.b.button`
  width: 200px;
  padding: 13px 20px;
  border-radius: 5px;
  background: #48a1e6;
  outline: none;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
`,h=({children:e,type:t,onClick:r})=>n.createElement(O,{type:t,onClick:r},e),x=`@media (max-width: ${"767px"})`,j=p.a`
  display: flex;
  align-items: center;
  .right {
    text-align: right;
  }
  ${x} {
    justify-content: space-between;
    flex-wrap: wrap;
  }
`,v=p.b.div`
  padding: 0 20px;
  margin-bottom: 20px;
  font-weight: bold;
  ${j}
  ${x} {
    padding: 0 10px;
  }
`,w=p.b.div`
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #333333;
  margin-bottom: 20px;
  ${j}
  &::last-child {
    margin-bottom: 0;
  }
  ${x} {
    padding: 10px;
  }
`,C=p.b.div`
  width: 33%;
  display: flex;
  justify-content: ${({right:e})=>e?"flex-end":"flex-start"};
  align-items: center;
  ${({buttonCont:e})=>e&&p.a`
      ${x} {
        width: 100%;
        justify-content: center;
        padding-top: 10px;
      }
    `}
`,P=n.memo((function({items:e}){const t=Object(c.b)(),r=Object(c.c)(e=>e.cart.items),o=n.useCallback(e=>{t({type:"@CART/ADD",payload:e}),t({type:"@CART/SET_TOTAL_PRICE"})},[]);return 0===e.length?null:n.createElement(n.Fragment,null,n.createElement(v,null,n.createElement(C,null,"title"),n.createElement(C,{right:!0},"price")),e.map(e=>n.createElement(w,{key:""+e.title},n.createElement(C,null,e.title),n.createElement(C,{right:!0},e.price," / $"),n.createElement(C,{buttonCont:!0,right:!0},r.find(t=>t.id===e.id)?"Added":n.createElement(h,{onClick:()=>o(e)},"Add to Cart")))))}));var T=r(168);const A=p.b.input`
  width: 200px;
  padding: 10px 15px;
  outline: none;
  border: 1px solid silver;
  border-radius: 5px;
`,R=e=>n.createElement(A,e);var k=[{name:"title",type:"text"},{name:"price",type:"number"}];const S=e=>{const t={};return e.title?e.title.length>30&&(t.title="Max 30 symbols"):t.title="Title is required",e.price?parseInt(e.price)<=0&&(t.price="Price must be greater than 0"):t.price="Price is required",t},_=p.b.div`
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
`,D=p.b.div`
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 20px;
  color: #48a1e6;
  cursor: pointer;
`,$=p.b.div`
  color: red;
  padding-top: 5px;
  font-size: 12px;
  text-align: left;
`;function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){q(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function q(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const G=n.memo((function({closeModal:e}){const t=Object(c.b)(),r=n.useCallback(r=>{t({type:"@CATALOG/ADD_TO_CATALOG",payload:L(L({},r),{},{price:parseInt(r.price),id:Date.now()})}),e()},[]);return n.createElement(_,null,n.createElement(T.b,{onSubmit:r,validate:S,render:({handleSubmit:t,pristine:r,submitting:o,invalid:a,form:c})=>n.createElement("form",{onSubmit:t,className:"form"},n.createElement(D,{onClick:()=>{c.reset(),e()}},"✖"),k.map(e=>n.createElement(T.a,{key:"field_"+e.name,name:e.name,type:e.type},({input:t,meta:r})=>n.createElement(f,{bottom:"20"},n.createElement(R,M({},t,{type:e.type,placeholder:e.name})),r.error&&r.touched&&n.createElement($,null,r.error)))),n.createElement(h,{type:"submit",disabled:o||r||a},"Submit"))}))}));var F=n.memo((function(){const[e,t]=n.useState(!1),r=Object(c.b)(),{items:o}=Object(c.c)(e=>e.catalog),a=0===o.length;return n.useEffect(()=>{a&&r(e=>(e({type:"@CATALOG/FETCH"}),E.a.get("https://run.mocky.io/v3/4756e740-90a0-4e80-9fe1-f916deef5ded").then(t=>{e((e=>({type:"@CATALOG/FETCH_CATALOG_SUCCESS",payload:e}))(t.data))}).catch(t=>{e((e=>({type:"SET_ERROR",error:e}))(t.messages||"something get wrong :("))})))},[]),a?null:n.createElement(s,null,n.createElement(f,{top:"20"},n.createElement(m,{align:"center"},"Stock of the companies")),n.createElement(f,{top:"20",bottom:"20"},n.createElement(P,{items:o})),n.createElement(h,{onClick:()=>t(!0)},"add stock"),e&&n.createElement(G,{closeModal:()=>t(!1)}))})),H=r.p+"images/941fce177b2f5950eab89ccb0c1062c2.svg",N=r.p+"images/60a133df4162e2fd167a28350c3efc2c.svg";const z=p.b.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  height: 26px;
  overflow: hidden;
  border-radius: 5px;
`,J=p.b.button`
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
`,U=({increment:e,decrement:t,quantity:r})=>n.createElement(z,null,n.createElement(J,{onClick:e},n.createElement("img",{src:H,alt:"plus"})),r,n.createElement(J,{disabled:r<=1,onClick:t},n.createElement("img",{src:N,alt:"minus"})));var V=r.p+"images/89761f963ce6e71bc317061ac0b72eee.svg";const B=p.a`
  display: grid;
  grid-template-columns: repeat(3, 1fr) 50px;
  grid-gap: 10px;
  .right {
    text-align: right;
  }
  ${x} {
    display: flex;
    flex-wrap: wrap;
    grid-gap: 0;
  }
`,Y=p.b.div`
  padding: 0 20px;
  margin-bottom: 20px;
  font-weight: bold;
  ${B}
  ${x} {
    display: none;
  }
`,K=p.b.div`
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #333333;
  margin-bottom: 20px;
  ${B}
  &::last-child {
    margin-bottom: 0;
    padding: 10px;
  }
`,Q=p.b.div`
  display: flex;
  justify-content: ${({right:e})=>e?"flex-end":"flex-start"};
  align-items: center;
  ${x} {
    width: 50%;
  }
  ${x} {
    &:nth-child(3),
    &:nth-child(4) {
      padding-top: 10px;
    }
  }
  ${({quantity:e})=>e&&p.a`
      ${x} {
        justify-content: flex-start;
      }
    `}
`,W=p.b.div`
  cursor: pointer;
`,X=n.memo((function({items:e}){const t=Object(c.b)(),r=n.useCallback(e=>{t((e=>({type:"@CART/REMOVE",payload:e}))(e)),t({type:"@CART/SET_TOTAL_PRICE"})},[]),o=n.useCallback(e=>{t((e=>({type:"@CART/INCREMENT_ITEM",payload:e}))(e)),t({type:"@CART/SET_TOTAL_PRICE"})},[]),a=n.useCallback(e=>{t((e=>({type:"@CART/DECREMENT_ITEM",payload:e}))(e)),t({type:"@CART/SET_TOTAL_PRICE"})},[]);return n.createElement(n.Fragment,null,n.createElement(Y,null,n.createElement(Q,null,"title"),n.createElement(Q,{right:!0},"price"),n.createElement(Q,{right:!0},"quantity")),e.map(e=>n.createElement(K,{key:""+e.title},n.createElement(Q,null,e.title),n.createElement(Q,{right:!0},e.price," / $"),n.createElement(Q,{right:!0,quantity:!0},n.createElement(U,{increment:()=>o(e.id),decrement:()=>a(e.id),quantity:e.quantity})),n.createElement(Q,{right:!0},n.createElement(W,{onClick:()=>r(e.id)},n.createElement("img",{src:V,alt:"trash"}))))))})),Z=Object(p.b)(i.b)`
  text-decoration: none;
  color: blue;
  &:hover {
    color: red;
  }
`;var ee=()=>{const e=Object(c.c)(e=>e.cart);return 0===e.items.length?n.createElement(s,null,n.createElement(f,{top:"20",bottom:"10"},n.createElement(m,null,"Cart is empty :(")),n.createElement(Z,{to:"/catalog"},"Go to catalog →")):n.createElement(s,null,n.createElement(f,{top:"20"},n.createElement(m,{align:"center"},"Your cart")),n.createElement(f,{top:"20",bottom:"20"},n.createElement(X,{items:e.items})),n.createElement(f,{top:"20"},"total price: ",e.totalPrice))};const te=Object(p.b)(i.b)`
  text-decoration: none;
  color: blue;
  &:hover {
    color: red;
  }
`;var re=()=>n.createElement(s,null,n.createElement(f,{top:"20",bottom:"10"},n.createElement(m,null,"Page not found")),n.createElement(te,{to:"/"},"Go to home →"));const ne=()=>n.createElement(n.Suspense,{fallback:n.createElement("div",null,"Load...")},n.createElement(l.c,null,n.createElement(l.a,{path:"/",exact:!0,component:g}),n.createElement(l.a,{path:"/catalog",exact:!0,component:F}),n.createElement(l.a,{path:"/cart",exact:!0,component:ee}),n.createElement(l.a,{component:re})));r(561),r(562);var oe=r(56);function ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(r),!0).forEach((function(t){ie(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ie(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const le={isFetched:!1,items:[]};function pe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ue(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(r),!0).forEach((function(t){se(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):pe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function se(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const de={totalPrice:0,items:[]};function me(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function be(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?me(Object(r),!0).forEach((function(t){fe(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):me(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function fe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const ge={error:null,isOpen:!1};var ye=Object(oe.c)({catalog:function(e=le,t){switch(t.type){default:return e;case"@CATALOG/FETCH":return ce(ce({},e),{},{isFetched:!0});case"@CATALOG/ADD_TO_CATALOG":return ce(ce({},e),{},{items:[t.payload,...e.items]});case"@CATALOG/FETCH_CATALOG_SUCCESS":return ce(ce({},e),{},{items:t.payload,isFetched:!1})}},cart:function(e=de,t){switch(t.type){default:return e;case"@CART/SET_TOTAL_PRICE":return ue(ue({},e),{},{totalPrice:e.items.reduce((e,t)=>e+t.price*t.quantity,0)});case"@CART/ADD":const r=[ue(ue({},t.payload),{},{quantity:1}),...e.items];return ue(ue({},e),{},{items:r,totalPrice:r.reduce((e,t)=>e+t.price,0)});case"@CART/REMOVE":const n=e.items.filter(e=>e.id!==t.payload);return ue(ue({},e),{},{items:n,totalPrice:n.reduce((e,t)=>e+t.price,0)});case"@CART/INCREMENT_ITEM":return ue(ue({},e),{},{items:e.items.map(e=>e.id===t.payload?ue({quantity:e.quantity++},e):e)});case"@CART/DECREMENT_ITEM":return ue(ue({},e),{},{items:e.items.map(e=>e.id===t.payload?ue({quantity:e.quantity--},e):e)})}},errorReducer:function(e=ge,t){switch(t.type){default:return e;case"HIDE_ERROR":return be(be({},e),{},{error:null,isOpen:!1});case"SET_ERROR":return be(be({},e),{},{error:t.error,isOpen:!0})}}}),Ee=r(381);const Oe=oe.d,he=Object(oe.a)(Ee.a);var xe=Object(oe.e)(ye,Oe(he)),je=[{to:"/",name:"Home"},{to:"/catalog",name:"Catalog"},{to:"/cart",name:"Cart"}];const ve=p.b.div`
  background: crimson;
`,we=p.b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Ce=Object(p.b)(i.b)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`,Pe=n.memo((function(){return n.createElement(ve,null,n.createElement(s,null,n.createElement(f,{top:"10",bottom:"10"},n.createElement(we,null,je.map(e=>n.createElement(Ce,{key:"nav_"+e.name,to:e.to},e.name))))))})),Te=p.b.div`
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: firebrick;
  padding: 20px;
`,Ae=p.b.div`
  color: white;
`,Re=()=>{const e=Object(c.c)(e=>e.errorReducer.isOpen),t=Object(c.c)(e=>e.errorReducer.error),r=Object(c.b)();return o.a.createElement(o.a.Fragment,null,e&&t&&o.a.createElement(Te,null,o.a.createElement(f,{right:"20"},o.a.createElement(Ae,null,t)),o.a.createElement(h,{onClick:()=>{r({type:"HIDE_ERROR"})}},"close error")))};r(563);const ke=()=>n.createElement(n.StrictMode,null,n.createElement(c.a,{store:xe},n.createElement(i.a,null,n.createElement(Pe,null),n.createElement(Re,null),n.createElement(ne,null))));Object(a.render)(n.createElement(ke,null),document.getElementById("root"))}});