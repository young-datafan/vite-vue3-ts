var _=(e,d,o)=>new Promise((a,i)=>{var r=t=>{try{n(o.next(t))}catch(s){i(s)}},u=t=>{try{n(o.throw(t))}catch(s){i(s)}},n=t=>t.done?a(t.value):Promise.resolve(t.value).then(r,u);n((o=o.apply(e,d)).next())});import{_ as p}from"./index.151dde65.js";import{q as c,a9 as m,aj as h,e as f,m as I,X as g,u as l,$ as v,a0 as x,B as w}from"./antdv.50a355b0.js";import{g as b,_ as y}from"./index.c27314ca.js";function B(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!m(e)}const S=[{title:"IP\u5730\u5740",dataIndex:"ip",width:150},{title:"\u7AEF\u53E3",dataIndex:"host",width:80,customRender:({text:e})=>c(h,null,B(e)?e:{default:()=>[e]})},{title:"\u534F\u8BAE",dataIndex:"protocol",width:100},{title:"\u57DF\u540D",dataIndex:"domain",width:100},{title:"\u90AE\u7BB1",dataIndex:"email",width:150},{title:"\u5730\u5740",dataIndex:"url",width:200,customRender:({text:e})=>c("a",{href:e,target:"_blank"},[e])}],j=e=>_(void 0,null,function*(){return b({url:"/v1/common/page_one/list",data:e})});var k={page_one_list:j};const A=e=>(v("data-v-200201ce"),e=e(),x(),e),N={class:"node-conatiner"},V=A(()=>w("h2",{class:"nc_title font18"},"\u7F51\u7AD9\u7BA1\u7406",-1)),F=f({setup(e){return(d,o)=>{const a=p;return I(),g("div",N,[V,c(a,{url:l(k).page_one_list,columns:l(S),hiddenFilter:!0},null,8,["url","columns"])])}}});var C=y(F,[["__scopeId","data-v-200201ce"]]);export{C as default};