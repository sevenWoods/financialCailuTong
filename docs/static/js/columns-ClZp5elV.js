import{aX as r,ac as f,e as h,j as p,f as m,r as s,L as b,o as g,g as l,h as v,a as L,a0 as w}from"./index-CNO-Gfra.js";function o(a,e){return Math.floor(Math.random()*(e-a+1))+a}const M={width:24,height:24,body:'<path fill="currentColor" d="M2 22a8 8 0 1 1 16 0h-2a6 6 0 0 0-12 0H2Zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6Zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4Zm8.284 3.703A8.002 8.002 0 0 1 23 22h-2a6.001 6.001 0 0 0-3.537-5.473l.82-1.824Zm-.688-11.29A5.5 5.5 0 0 1 21 8.5a5.499 5.499 0 0 1-5 5.478v-2.013a3.5 3.5 0 0 0 1.041-6.609l.555-1.943Z"/>'},y={width:24,height:24,body:'<path fill="currentColor" d="M5.455 15L1 18.5V3a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v12H5.455Zm-.692-2H16V4H3v10.385L4.763 13ZM8 17h10.237L20 18.385V8h1a1 1 0 0 1 1 1v13.5L17.546 19H9a1 1 0 0 1-1-1v-1Z"/>'},Z={width:24,height:24,body:'<path fill="currentColor" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455Zm-.692-2H20V5H4v13.385L5.763 17Zm5.53-4.879l4.243-4.242l1.414 1.414l-5.657 5.657l-3.89-3.89l1.415-1.414l2.475 2.475Z"/>'},C={width:24,height:24,body:'<path fill="currentColor" d="m11.999.5l4.226 6.183l7.186 2.109l-4.575 5.93l.216 7.486l-7.053-2.518l-7.054 2.518l.216-7.486l-4.575-5.93l7.187-2.109L11.999.5Zm0 3.544L9.02 8.402L3.956 9.887l3.225 4.178l-.153 5.275l4.97-1.774l4.97 1.774l-.151-5.274l3.224-4.179l-5.065-1.485L12 4.044Zm-2 7.956a2 2 0 1 0 4 0h2a4 4 0 1 1-8 0h2Z"/>'},H=["周日","周一","周二","周三","周四","周五","周六"],j=[{icon:M,bgColor:"#effaff",color:"#41b6ff",duration:2200,name:"需求人数",value:36e3,percent:"+88%",data:[2101,5288,4239,4962,6752,5208,7450]},{icon:y,bgColor:"#fff5f4",color:"#e85f33",duration:1600,name:"提问数量",value:16580,percent:"+70%",data:[2216,1148,1255,788,4821,1973,4379]},{icon:Z,bgColor:"#eff8f4",color:"#26ce83",duration:1500,name:"解决数量",value:16499,percent:"+99%",data:[861,1002,3195,1715,3666,2415,3645]},{icon:C,bgColor:"#f6f4fe",color:"#7846e5",duration:100,name:"用户满意度",value:100,percent:"+100%",data:[100]}],B=[{requireData:[2101,5288,4239,4962,6752,5208,7450],questionData:[2216,1148,1255,1788,4821,1973,4379]},{requireData:[2101,3280,4400,4962,5752,6889,7600],questionData:[2116,3148,3255,3788,4821,4970,5390]}],z=[{week:"周一",percentage:85,duration:110,color:"#41b6ff"},{week:"周二",percentage:86,duration:105,color:"#41b6ff"},{week:"周三",percentage:88,duration:100,color:"#41b6ff"},{week:"周四",percentage:89,duration:95,color:"#41b6ff"},{week:"周五",percentage:94,duration:90,color:"#26ce83"},{week:"周六",percentage:96,duration:85,color:"#26ce83"},{week:"周日",percentage:100,duration:80,color:"#26ce83"}].reverse(),i=Array.from({length:30}).map((a,e)=>({id:e+1,requiredNumber:o(13500,19999),questionNumber:o(12600,16999),resolveNumber:o(13500,17999),satisfaction:o(95,100),date:r().subtract(e,"day").format("YYYY-MM-DD")})),A=f(i).slice(0,14).map((a,e)=>Object.assign(a,{date:`${r().subtract(e,"day").format("YYYY-MM-DD")} ${H[r().subtract(e,"day").day()]}`})),D={width:24,height:24,body:'<path fill="currentColor" d="M14.6 8H21a2 2 0 0 1 2 2v2.105c0 .26-.051.52-.15.761l-3.095 7.515a1 1 0 0 1-.925.62H2a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h3.482a1 1 0 0 0 .817-.424L11.752.851a.5.5 0 0 1 .632-.159l1.814.908a2.5 2.5 0 0 1 1.305 2.852L14.6 8ZM7 10.588V19h11.16L21 12.105V10h-6.4a2 2 0 0 1-1.938-2.493l.903-3.548a.5.5 0 0 0-.261-.57l-.661-.331l-4.71 6.672c-.25.354-.57.645-.933.858ZM5 11H3v8h2v-8Z"/>'},_={width:24,height:24,body:'<path fill="currentColor" d="M19.243 4.757a5.998 5.998 0 0 1 1.65 5.38c.568.16 1.106.463 1.554.908a3.55 3.55 0 0 1 0 5.047L17 21.5l-3.022-3L11 21.485l-8.48-8.492A6 6 0 0 1 11 4.529a5.998 5.998 0 0 1 8.242.228Zm-6.281 7.708a1.55 1.55 0 0 0 0 2.208L17 18.682l4.038-4.009a1.55 1.55 0 0 0 0-2.208a1.614 1.614 0 0 0-2.268.002l-1.772 1.754l-1.407-1.396l-.363-.36a1.613 1.613 0 0 0-2.266 0Zm-8.79-6.293a4 4 0 0 0-.192 5.451L11 18.654l1.559-1.562l-1.006-1a3.55 3.55 0 0 1 0-5.047a3.614 3.614 0 0 1 5.084 0l.363.36l.363-.36a3.584 3.584 0 0 1 1.465-.882a4.003 4.003 0 0 0-1.001-3.993a3.998 3.998 0 0 0-5.49-.153l-1.335 1.198l-1.336-1.197a4 4 0 0 0-5.494.154Z"/>'},V={xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",class:"empty-icon",viewBox:"0 0 1024 1024"},k=m("path",{d:"M855.6 427.2H168.5c-12.7 0-24.4 6.9-30.6 18L4.4 684.7C1.5 689.9 0 695.8 0 701.8v287.1c0 19.4 15.7 35.1 35.1 35.1H989c19.4 0 35.1-15.7 35.1-35.1V701.8c0-6-1.5-11.8-4.4-17.1L886.2 445.2c-6.2-11.1-17.9-18-30.6-18M673.4 695.6c-16.5 0-30.8 11.5-34.3 27.7-12.7 58.5-64.8 102.3-127.2 102.3s-114.5-43.8-127.2-102.3c-3.5-16.1-17.8-27.7-34.3-27.7H119c-26.4 0-43.3-28-31.1-51.4l81.7-155.8c6.1-11.6 18-18.8 31.1-18.8h622.4c13 0 25 7.2 31.1 18.8l81.7 155.8c12.2 23.4-4.7 51.4-31.1 51.4zm146.5-486.1c-1-1.8-2.1-3.7-3.2-5.5-9.8-16.6-31.1-22.2-47.8-12.6L648.5 261c-17 9.8-22.7 31.6-12.6 48.4.9 1.4 1.7 2.9 2.5 4.4 9.5 17 31.2 22.8 48 13L807 257.3c16.7-9.7 22.4-31 12.9-47.8m-444.5 51.6L255 191.6c-16.7-9.6-38-4-47.8 12.6-1.1 1.8-2.1 3.6-3.2 5.5-9.5 16.8-3.8 38.1 12.9 47.8L337.3 327c16.9 9.7 38.6 4 48-13.1.8-1.5 1.7-2.9 2.5-4.4 10.2-16.8 4.5-38.6-12.4-48.4M512 239.3h2.5c19.5.3 35.5-15.5 35.5-35.1v-139c0-19.3-15.6-34.9-34.8-35.1h-6.4C489.6 30.3 474 46 474 65.2v139c0 19.5 15.9 35.4 35.5 35.1z"},null,-1),x=[k];function N(a,e){return h(),p("svg",V,[...x])}const Y={render:N};function q(){const a=s([]),e=s(!0),u=[{sortable:!0,label:"序号",prop:"id"},{sortable:!0,label:"需求人数",prop:"requiredNumber",filterMultiple:!1,filterClassName:"pure-table-filter",filters:[{text:"≥16000",value:"more"},{text:"<16000",value:"less"}],filterMethod:(t,{requiredNumber:n})=>t==="more"?n>=16e3:n<16e3},{sortable:!0,label:"提问数量",prop:"questionNumber"},{sortable:!0,label:"解决数量",prop:"resolveNumber"},{sortable:!0,label:"用户满意度",minWidth:100,prop:"satisfaction",cellRenderer:({row:t})=>l("div",{class:"flex justify-center w-full"},[l("span",{class:"flex items-center w-[60px]"},[l("span",{class:"ml-auto mr-2"},[t.satisfaction,v("%")]),l(L("iconifyIconOffline"),{icon:t.satisfaction>98?_:D,color:"#e85f33"},null)])])},{sortable:!0,label:"统计日期",prop:"date"},{label:"操作",fixed:"right",slot:"operation"}],c=b({pageSize:10,currentPage:1,layout:"prev, pager, next",total:0,align:"center"});function d(t){e.value=!0,w(300).then(()=>{e.value=!1})}return g(()=>{a.value=i,c.total=a.value.length,e.value=!1}),{Empty:Y,loading:e,columns:u,dataList:a,pagination:c,onCurrentChange:d}}const O=Object.freeze(Object.defineProperty({__proto__:null,useColumns:q},Symbol.toStringTag,{value:"Module"}));export{O as a,B as b,j as c,A as l,z as p,q as u};
