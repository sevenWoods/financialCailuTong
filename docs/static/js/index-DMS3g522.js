var v=(m,p,a)=>new Promise((_,s)=>{var f=t=>{try{l(a.next(t))}catch(r){s(r)}},u=t=>{try{l(a.throw(t))}catch(r){s(r)}},l=t=>t.done?_(t.value):Promise.resolve(t.value).then(f,u);l((a=a.apply(m,p)).next())});import{_ as j}from"./index.vue_vue_type_script_setup_true_lang-B2PoIf_d.js";import{_ as $}from"./index.vue_vue_type_script_setup_true_lang-CYyR03fF.js";import{a as h}from"./at3-B1Wux6Wy.js";import{d as E,r as d,o as M,c as x,w as n,a as c,b as N,e as b,g as e,f as k,i as V,h as y,E as z,m as F,_ as I}from"./index-D2IFQwKC.js";import"./hooks-B8cjGsHC.js";const L="/financialCailuTong/static/jpg/error-D6xRxeol.jpg",A="/financialCailuTong/static/jpg/error1-BtYefWDv.jpg",P={class:"w-60"},S={class:"demo-image__preview"},W=E({name:"feedback",__name:"index",setup(m){const p=d(null),a=d(!1),_=d([{id:1,uid:1,avatar:[L,h],content:"ddd",type:"商务投诉",update_time:"2024-04-01"},{id:8,uid:1004,avatar:[A,h],content:"验证码收不到",type:"系统投诉",update_time:"2024-04-01"}]),s=d(null),f=t=>{},u=t=>{z.confirm("您确定要删除吗?","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>v(this,null,function*(){F.success("删除数据成功！"),l()}))},l=()=>{a.value=!0,setTimeout(()=>{a.value=!1},400)};return M(()=>{s.value.total=2}),(t,r)=>{const w=c("el-alert"),o=c("el-table-column"),B=c("el-image"),g=c("el-button"),C=c("el-table"),R=c("el-card"),T=N("loading");return b(),x(R,null,{default:n(()=>[e($,{ref_key:"searchRef",ref:p,isButton:!1},{hint:n(()=>[k("div",P,[e(w,{title:"仅演示，操作后不生效",type:"info",center:"",closable:!1,"show-icon":""})])]),_:1},512),V((b(),x(C,{"element-loading-text":"加载中...",data:_.value,"max-height":"550",style:{width:"100%"},"header-cell-style":{color:"#606266","text-align":"center",backgroundColor:"#f5f7fa",fontSize:"15px"},"cell-style":{textAlign:"center"}},{default:n(()=>[e(o,{prop:"id",label:"ID",width:"100"}),e(o,{prop:"uid",label:"用户uid"}),e(o,{prop:"avatar",label:"图片"},{default:n(({row:i})=>[k("div",S,[e(B,{style:{width:"100px",height:"100px"},src:i.avatar[0],"zoom-rate":1.2,"max-scale":5,"min-scale":.2,"preview-src-list":i.avatar,fit:"cover","preview-teleported":!0,"hide-on-click-modal":!0},null,8,["src","preview-src-list"])])]),_:1}),e(o,{prop:"content",label:"内容"}),e(o,{prop:"type",label:"类型"}),e(o,{prop:"update_time",label:"更新时间"}),e(o,{fixed:"right",width:"230",label:"操作"},{default:n(({row:i})=>[e(g,{type:"primary",onClick:D=>f(i)},{default:n(()=>[y("查看")]),_:2},1032,["onClick"]),e(g,{type:"danger",onClick:D=>u(i)},{default:n(()=>[y("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[T,a.value,void 0,{lock:!0}]]),e(j,{ref_key:"paginaRef",ref:s,onRefreshPage:l},null,512)]),_:1})}}}),O=I(W,[["__scopeId","data-v-ba316f4b"]]);export{O as default};
