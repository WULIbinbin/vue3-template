var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,l=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;import{e as n,d as u,g as i,h as s,i as o,o as p,j as c}from"./vendor.3e78b3e5.js";import{F as v}from"./index.f620eda7.js";function f(e,u){const i=((e,n)=>{for(var u in n||(n={}))t.call(n,u)&&l(e,u,n[u]);if(a)for(var u of a(n))r.call(n,u)&&l(e,u,n[u]);return e})({type:"text",placeholder:"请输入"},e);return n("div",{class:"b-form-input"},[n("input",i,null)])}var d=u({setup(e){const t=i(""),a=e=>{t.value=e.target.value},r=s({input:""}),l=e=>{r.input=e.target.value},u=o(s({input:"输入也没用"})),d=e=>{u.input=e.target.value};return p((()=>{})),()=>n("div",null,[n("h2",{class:"b-main-title"},[c("响应式示例")]),n(v,{title:"使用ref："},{default:()=>[n(f,{onInput:a},null)]}),n(v,{title:"使用reactive："},{default:()=>[n(f,{onInput:l},null)]}),n(v,{title:"使用readonly："},{default:()=>[n(f,{onInput:d},null)]}),n("div",null,[n("p",{class:"reactive-msg"},[c("结果")]),n("p",{class:"reactive-msg"},[c("使用ref："),t.value]),n("p",{class:"reactive-msg"},[c("使用reactive："),r.input]),n("p",{class:"reactive-msg"},[c("使用readonly："),u.input])])])}});export default d;
