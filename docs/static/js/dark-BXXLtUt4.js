var re=Object.defineProperty;var D=Object.getOwnPropertySymbols;var ie=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var j=(t,e,o)=>e in t?re(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,G=(t,e)=>{for(var o in e||(e={}))ie.call(e,o)&&j(t,o,e[o]);if(D)for(var o of D(e))ce.call(e,o)&&j(t,o,e[o]);return t};var F=(t,e,o)=>new Promise((n,a)=>{var i=r=>{try{f(o.next(r))}catch(m){a(m)}},$=r=>{try{f(o.throw(r))}catch(m){a(m)}},f=r=>r.done?n(r.value):Promise.resolve(r.value).then(i,$);f((o=o.apply(t,e)).next())});import{aj as _,K as v,aJ as de,W as K,D as Q,N as b,J as C,G as y,af as fe,H as X,b as H,aK as me,R as O,aL as Y,aM as he,I as ge,l as pe,aN as ve,aO as Te,X as be,M as ye,a6 as $e,a4 as V,aG as B,V as Ce,aP as Se,o as Z,j as ee,g as L}from"./index-jOGrJ0Py.js";function Me(){const{$storage:t,$config:e}=_(),o=()=>{var i,$,f,r,m,T,M,k,g,S,l,s,d,h,c;de().multiTagsCache&&(!t.tags||t.tags.length===0)&&(t.tags=K),t.layout||(t.layout={layout:(i=e==null?void 0:e.Layout)!=null?i:"vertical",theme:($=e==null?void 0:e.Theme)!=null?$:"light",darkMode:(f=e==null?void 0:e.DarkMode)!=null?f:!1,sidebarStatus:(r=e==null?void 0:e.SidebarStatus)!=null?r:!0,epThemeColor:(m=e==null?void 0:e.EpThemeColor)!=null?m:"#409EFF",themeColor:(T=e==null?void 0:e.Theme)!=null?T:"light",overallStyle:(M=e==null?void 0:e.OverallStyle)!=null?M:"light"}),t.configure||(t.configure={grey:(k=e==null?void 0:e.Grey)!=null?k:!1,weak:(g=e==null?void 0:e.Weak)!=null?g:!1,hideTabs:(S=e==null?void 0:e.HideTabs)!=null?S:!1,hideFooter:(l=e.HideFooter)!=null?l:!0,showLogo:(s=e==null?void 0:e.ShowLogo)!=null?s:!0,showModel:(d=e==null?void 0:e.ShowModel)!=null?d:"smart",multiTagsCache:(h=e==null?void 0:e.MultiTagsCache)!=null?h:!1,stretch:(c=e==null?void 0:e.Stretch)!=null?c:!1})},n=v(()=>t==null?void 0:t.layout.layout),a=v(()=>t.layout);return{layout:n,layoutTheme:a,initStorage:o}}const ke=Q({id:"pure-app",state:()=>{var t,e,o,n;return{sidebar:{opened:(e=(t=b().getItem(`${C()}layout`))==null?void 0:t.sidebarStatus)!=null?e:y().SidebarStatus,withoutAnimation:!1,isClickCollapse:!1},layout:(n=(o=b().getItem(`${C()}layout`))==null?void 0:o.layout)!=null?n:y().Layout,device:fe()?"mobile":"desktop",viewportSize:{width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}}},getters:{getSidebarStatus(t){return t.sidebar.opened},getDevice(t){return t.device},getViewportWidth(t){return t.viewportSize.width},getViewportHeight(t){return t.viewportSize.height}},actions:{TOGGLE_SIDEBAR(t,e){const o=b().getItem(`${C()}layout`);t&&e?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!0,o.sidebarStatus=!0):!t&&e?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!1,o.sidebarStatus=!1):!t&&!e&&(this.sidebar.withoutAnimation=!1,this.sidebar.opened=!this.sidebar.opened,this.sidebar.isClickCollapse=!this.sidebar.opened,o.sidebarStatus=this.sidebar.opened),b().setItem(`${C()}layout`,o)},toggleSideBar(t,e){return F(this,null,function*(){yield this.TOGGLE_SIDEBAR(t,e)})},toggleDevice(t){this.device=t},setLayout(t){this.layout=t},setViewportSize(t){this.viewportSize=t},setSortSwap(t){this.sortSwap=t}}});function te(){return ke(X)}const we=Q({id:"pure-epTheme",state:()=>{var t,e,o,n;return{epThemeColor:(e=(t=b().getItem(`${C()}layout`))==null?void 0:t.epThemeColor)!=null?e:y().EpThemeColor,epTheme:(n=(o=b().getItem(`${C()}layout`))==null?void 0:o.theme)!=null?n:y().Theme}},getters:{getEpThemeColor(t){return t.epThemeColor},fill(t){return t.epTheme==="light"?"#409eff":"#fff"}},actions:{setEpThemeColor(t){const e=b().getItem(`${C()}layout`);this.epTheme=e==null?void 0:e.theme,this.epThemeColor=t,e&&(e.epThemeColor=t,b().setItem(`${C()}layout`,e))}}});function I(){return we(X)}const N={outputDir:"",defaultScopeName:"",includeStyleWithColors:[],extract:!0,themeLinkTagId:"theme-link-tag",themeLinkTagInjectTo:"head",removeCssScopeName:!1,customThemeCssFileName:null,arbitraryMode:!1,defaultPrimaryColor:"",customThemeOutputPath:"C:/Users/Administrator/Desktop/test/financialCailuTong/node_modules/.pnpm/@pureadmin+theme@3.2.0/node_modules/@pureadmin/theme/setCustomTheme.js",styleTagId:"custom-theme-tagid",InjectDefaultStyleTagToHtml:!0,hueDiffControls:{low:0,high:0},multipleScopeVars:[{scopeName:"layout-theme-light",varsContent:`
        $subMenuActiveText: #000000d9 !default;
        $menuBg: #fff !default;
        $menuHover: #f6f6f6 !default;
        $subMenuBg: #fff !default;
        $subMenuActiveBg: #e0ebf6 !default;
        $menuText: rgb(0 0 0 / 60%) !default;
        $sidebarLogo: #fff !default;
        $menuTitleHover: #000 !default;
        $menuActiveBefore: #4091f7 !default;
      `},{scopeName:"layout-theme-default",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #001529 !default;
        $menuHover: rgb(64 145 247 / 15%) !default;
        $subMenuBg: #0f0303 !default;
        $subMenuActiveBg: #4091f7 !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #002140 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #4091f7 !default;
      `},{scopeName:"layout-theme-saucePurple",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #130824 !default;
        $menuHover: rgb(105 58 201 / 15%) !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #693ac9 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #1f0c38 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #693ac9 !default;
      `},{scopeName:"layout-theme-pink",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #28081a !default;
        $menuHover: rgb(216 68 147 / 15%) !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #d84493 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #3f0d29 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #d84493 !default;
      `},{scopeName:"layout-theme-dusk",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #2a0608 !default;
        $menuHover: rgb(225 60 57 / 15%) !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #e13c39 !default;
        $menuText: rgb(254 254 254 / 65.1%) !default;
        $sidebarLogo: #42090c !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #e13c39 !default;
      `},{scopeName:"layout-theme-volcano",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #2b0e05 !default;
        $menuHover: rgb(232 95 51 / 15%) !default;
        $subMenuBg: #0f0603 !default;
        $subMenuActiveBg: #e85f33 !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #441708 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #e85f33 !default;
      `},{scopeName:"layout-theme-mingQing",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #032121 !default;
        $menuHover: rgb(89 191 193 / 15%) !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #59bfc1 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #053434 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #59bfc1 !default;
      `},{scopeName:"layout-theme-auroraGreen",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #0b1e15 !default;
        $menuHover: rgb(96 172 128 / 15%) !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #60ac80 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #112f21 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #60ac80 !default;
      `}]},Be="/financialCailuTong/",Ae="assets",oe=t=>{let e=t.replace("#","").match(/../g);for(let o=0;o<3;o++)e[o]=parseInt(e[o],16);return e},ne=(t,e,o)=>{let n=[t.toString(16),e.toString(16),o.toString(16)];for(let a=0;a<3;a++)n[a].length==1&&(n[a]=`0${n[a]}`);return`#${n.join("")}`},Le=(t,e)=>{let o=oe(t);for(let n=0;n<3;n++)o[n]=Math.floor(o[n]*(1-e));return ne(o[0],o[1],o[2])},xe=(t,e)=>{let o=oe(t);for(let n=0;n<3;n++)o[n]=Math.floor((255-o[n])*e+o[n]);return ne(o[0],o[1],o[2])},W=t=>`(^${t}\\s+|\\s+${t}\\s+|\\s+${t}$|^${t}$)`,q=({scopeName:t,multipleScopeVars:e})=>{const o=Array.isArray(e)&&e.length?e:N.multipleScopeVars;let n=document.documentElement.className;new RegExp(W(t)).test(n)||(o.forEach(a=>{n=n.replace(new RegExp(W(a.scopeName),"g"),` ${t} `)}),document.documentElement.className=n.replace(/(^\s+|\s+$)/g,""))},U=({id:t,href:e})=>{const o=document.createElement("link");return o.rel="stylesheet",o.href=e,o.id=t,o},Ee=t=>{const e=G({scopeName:"theme-default",customLinkHref:i=>i},t),o=e.themeLinkTagId||N.themeLinkTagId;let n=document.getElementById(o);const a=e.customLinkHref(`${Be.replace(/\/$/,"")}${`/${Ae}/${e.scopeName}.css`.replace(/\/+(?=\/)/g,"")}`);if(n){n.id=`${o}_old`;const i=U({id:o,href:a});n.nextSibling?n.parentNode.insertBefore(i,n.nextSibling):n.parentNode.appendChild(i),i.onload=()=>{setTimeout(()=>{n.parentNode.removeChild(n),n=null},60),q(e)};return}n=U({id:o,href:a}),q(e),document[(e.themeLinkTagInjectTo||N.themeLinkTagInjectTo||"").replace("-prepend","")].appendChild(n)};function Ue(){var g,S;const{layoutTheme:t,layout:e}=Me(),o=H([{color:"#ffffff",themeColor:"light"},{color:"#1b2a47",themeColor:"default"},{color:"#722ed1",themeColor:"saucePurple"},{color:"#eb2f96",themeColor:"pink"},{color:"#f5222d",themeColor:"dusk"},{color:"#fa541c",themeColor:"volcano"},{color:"#13c2c2",themeColor:"mingQing"},{color:"#52c41a",themeColor:"auroraGreen"}]),{$storage:n}=_(),a=H((g=n==null?void 0:n.layout)==null?void 0:g.darkMode),i=H((S=n==null?void 0:n.layout)==null?void 0:S.overallStyle),$=document.documentElement;function f(l,s,d){const h=d||document.body;let{className:c}=h;c=c.replace(s,"").trim(),h.className=l?`${c} ${s}`:c}function r(l=(d=>(d=y().Theme)!=null?d:"light")(),s=!0){var c,A;t.value.theme=l,Ee({scopeName:`layout-theme-${l}`});const h=n.layout.themeColor;if(n.layout={layout:e.value,theme:l,darkMode:a.value,sidebarStatus:(c=n.layout)==null?void 0:c.sidebarStatus,epThemeColor:(A=n.layout)==null?void 0:A.epThemeColor,themeColor:s?l:h,overallStyle:i.value},l==="default"||l==="light")T(y().EpThemeColor);else{const x=o.value.find(E=>E.themeColor===l);T(x.color)}}function m(l,s,d){document.documentElement.style.setProperty(`--el-color-primary-${l}-${s}`,a.value?Le(d,s/10):xe(d,s/10))}const T=l=>{I().setEpThemeColor(l),document.documentElement.style.setProperty("--el-color-primary",l);for(let s=1;s<=2;s++)m("dark",s,l);for(let s=1;s<=9;s++)m("light",s,l)};function M(l){i.value=l,I().epTheme==="light"&&a.value?r("default",!1):r(I().epTheme,!1),a.value?document.documentElement.classList.add("dark"):(n.layout.themeColor==="light"&&r("light",!1),document.documentElement.classList.remove("dark"))}function k(){me(),b().clear();const{Grey:l,Weak:s,MultiTagsCache:d,EpThemeColor:h,Layout:c}=y();te().setLayout(c),T(h),O().multiTagsCacheChange(d),f(l,"html-grey",document.querySelector("html")),f(s,"html-weakness",document.querySelector("html")),Y.push("/login"),O().handleTags("equal",[...K]),he()}return{body:$,dataTheme:a,overallStyle:i,layoutTheme:t,themeColors:o,onReset:k,toggleClass:f,dataThemeChange:M,setEpThemeColor:T,setLayoutThemeColor:r}}function He(t){return{all:t=t||new Map,on:function(e,o){var n=t.get(e);n?n.push(o):t.set(e,[o])},off:function(e,o){var n=t.get(e);n&&(o?n.splice(n.indexOf(o)>>>0,1):t.set(e,[]))},emit:function(e,o){var n=t.get(e);n&&n.slice().map(function(a){a(o)}),(n=t.get("*"))&&n.slice().map(function(a){a(e,o)})}}}const J=He(),Ie="/financialCailuTong/static/jpg/user-CrqylE8F.jpg",Ne="The current routing configuration is incorrect, please check the configuration";function Je(){var P,z;const t=ge(),e=te(),o=pe().options.routes,{isFullscreen:n,toggle:a}=ve(),{wholeMenus:i}=Te(be()),$=(z=(P=y())==null?void 0:P.TooltipEffect)!=null?z:"light",f=v(()=>({width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",overflow:"hidden"})),r=v(()=>{var u,p;return V((u=B())==null?void 0:u.avatar)?Ie:(p=B())==null?void 0:p.avatar}),m=v(()=>{var u,p,w;return V((u=B())==null?void 0:u.nickname)?(p=B())==null?void 0:p.username:(w=B())==null?void 0:w.nickname}),T=v(()=>m.value?{marginRight:"10px"}:""),M=v(()=>!e.getSidebarStatus),k=v(()=>e.getDevice),{$storage:g,$config:S}=_(),l=v(()=>{var u;return(u=g==null?void 0:g.layout)==null?void 0:u.layout}),s=v(()=>S.Title);function d(u){const p=y().Title;p?document.title=`${u.title} | ${p}`:document.title=u.title}function h(){B().logOut()}function c(){var u;Y.push((u=Ce())==null?void 0:u.path)}function A(){J.emit("openPanel")}function x(){e.toggleSideBar()}function E(u){u==null||u.handleResize()}function ae(u){var R;if(!u.children)return console.error(Ne);const p=/^http(s?):\/\//,w=(R=u.children[0])==null?void 0:R.path;return p.test(w)?u.path+"/"+w:w}function ue(u){i.value.length===0||le(u)||J.emit("changLayoutRoute",u)}function le(u){return Se.includes(u)}function se(){return new URL("/financialCailuTong/logo.png",import.meta.url).href}return{route:t,title:s,device:k,layout:l,logout:h,routers:o,$storage:g,isFullscreen:n,Fullscreen:ye,ExitFullscreen:$e,toggle:a,backTopMenu:c,onPanel:A,getDivStyle:f,changeTitle:d,toggleSideBar:x,menuSelect:ue,handleResize:E,resolvePath:ae,getLogo:se,isCollapse:M,pureApp:e,username:m,userAvatar:r,avatarsStyle:T,tooltipEffect:$}}const _e={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},Pe=L("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),ze=L("path",{d:"M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12M11 1h2v3h-2zm0 19h2v3h-2zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414zm2.121-14.85 1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414zM23 11v2h-3v-2zM4 11v2H1v-2z"},null,-1),Re=[Pe,ze];function De(t,e){return Z(),ee("svg",_e,[...Re])}const Ke={render:De},je={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},Ge=L("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),Fe=L("path",{d:"M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981"},null,-1),Oe=[Ge,Fe];function Ve(t,e){return Z(),ee("svg",je,[...Oe])}const Qe={render:Ve};export{Je as a,Ue as b,te as c,Ke as d,J as e,Qe as f,Me as g,Ee as t,I as u};
