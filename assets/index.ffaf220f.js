import{c as e,a as t,d as o,b as r,r as n,e as s}from"./vendor.b13b2d65.js";let l;!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const r=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,s)=>{const l=new URL(e,r);if(self[t].moduleMap[l])return o(self[t].moduleMap[l]);const i=new Blob([`import * as m from '${l}';`,`${t}.moduleMap['${l}']=m;`],{type:"text/javascript"}),a=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){s(new Error(`Failed to import: ${e}`)),n(a)},onload(){o(self[t].moduleMap[l]),n(a)}});document.head.appendChild(a)})),self[t].moduleMap={}}}("/vue3-template/assets/");const i={},a=function(e,t){if(!t)return e();if(void 0===l){const e=document.createElement("link").relList;l=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in i)return;i[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":l,t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e()))},d=[{path:"/",redirect:"/index"},{path:"/index",component:()=>a((()=>__import__("./index.e9ae9d06.js")),["/vue3-template/assets/index.e9ae9d06.js","/vue3-template/assets/index.7f9eb82e.css","/vue3-template/assets/vendor.b13b2d65.js"])},{path:"/reactive",component:()=>a((()=>__import__("./index.6a6a6c77.js")),["/vue3-template/assets/index.6a6a6c77.js","/vue3-template/assets/index.4d93947d.css","/vue3-template/assets/vendor.b13b2d65.js"])},{path:"/router",component:()=>a((()=>__import__("./index.1d9d4e6e.js")),["/vue3-template/assets/index.1d9d4e6e.js","/vue3-template/assets/vendor.b13b2d65.js"])}],u=e({history:t(),scrollBehavior:()=>({y:0}),routes:d});var c=o({setup:()=>()=>r("div",null,[r(n("router-view"),null,null)])});function p(e,{slots:t}){return r("div",null,[r("span",null,[e.title]),r("div",null,[t.default?t.default():null])])}console.log(p);const m=s(c);m.use(u),m.component("form-item",p),m.mount("#app");export{p as F};
