import{d as t,o as e,e as a,r}from"./vendor.3e78b3e5.js";var i=t({setup(){const t=[{path:"/reactive",title:"响应式示例"},{path:"/router",title:"vue-router示例"}];return e((()=>{})),()=>a("div",null,[a("h2",{className:"b-main-title"},["首页"]),a("div",{className:"navigate"},[t.map((t=>a(r("router-link"),{className:"navigate-item",to:t.path},{default:()=>[t.title]})))])])}});export default i;