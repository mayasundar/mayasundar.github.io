(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{210:e=>{e.exports={style:{fontFamily:"'hibiscus', 'hibiscus Fallback'"},className:"__className_eae489",variable:"__variable_eae489"}},347:()=>{},3046:(e,a,s)=>{"use strict";s.d(a,{G:()=>r,c:()=>n});var l=s(5155),t=s(2115);let i=(0,t.createContext)(void 0),r=e=>{let{children:a}=e,[s,r]=(0,t.useState)({}),[n,c]=(0,t.useState)("all"),[o,d]=(0,t.useState)(""),h=Object.entries(s).reduce((e,a)=>{let[s,l]=a;return e[s]=l.visible&&("all"===n||l.tags.includes(n)),e},{}),m=(0,t.useCallback)(function(e,a){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(o!==a){d(a);let l={};e.forEach(e=>{let a=s[e]||{name:e,tags:["all"]};l[e]={id:e,name:a.name,tags:a.tags,visible:!0}}),r(l),c("all")}},[o]),v=(0,t.useCallback)(e=>{r(a=>({...a,[e]:{...a[e],visible:!a[e].visible}}))},[]);return(0,l.jsx)(i.Provider,{value:{components:s,activeGroup:n,visibleComponents:h,initializeComponents:m,setActiveGroup:c,toggleComponentVisibility:v},children:a})},n=()=>{let e=(0,t.useContext)(i);if(void 0===e)throw Error("You forgot the SidebarProvider");return e}},4193:(e,a,s)=>{Promise.resolve().then(s.t.bind(s,347,23)),Promise.resolve().then(s.t.bind(s,210,23)),Promise.resolve().then(s.bind(s,6309))},6309:(e,a,s)=>{"use strict";s.d(a,{default:()=>v});var l=s(5155);s(2115);var t=s(8173),i=s.n(t),r=s(3046),n=s(5565);function c(){return(0,l.jsxs)("div",{id:"navbar-container",className:"nav flex justify-between items-center text-[#65748D]",children:[(0,l.jsx)("div",{id:"navbar-name",className:"flex",children:(0,l.jsx)("h3",{className:"nav-name",children:"Maya Sundar"})}),(0,l.jsxs)("div",{className:"navbar-social flex ml-auto",children:[(0,l.jsx)(i(),{className:"navbar-social ml-[20px] text-[#65748D]",href:"https://www.linkedin.com/in/mayasundar",target:"_blank",rel:"noopener noreferrer",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",children:(0,l.jsx)("path",{d:"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",fill:"currentColor",fillRule:"evenodd"})})}),(0,l.jsx)(i(),{className:"navbar-social ml-[20px] text-[#65748D]",href:"https://github.com/mayasundar",target:"_blank",rel:"noopener noreferrer",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-github",children:(0,l.jsx)("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})})}),(0,l.jsx)(i(),{className:"navbar-social ml-[20px] text-[#65748D]",href:"mailto:mayajsundar@gmail.com",target:"_blank",rel:"noopener noreferrer",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",children:(0,l.jsx)("path",{d:"M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z",fill:"currentColor"})})})]})]})}let o={src:"./_next/static/media/eye.35d48345.svg",height:17,width:34,blurWidth:0,blurHeight:0};var d=s(6658);let h=[{id:"all",label:"All Projects"},{id:"web",label:"Web"},{id:"mobile",label:"Mobile"},{id:"design",label:"Design"},{id:"brand",label:"Brand"}],m=()=>{let{components:e,activeGroup:a,setActiveGroup:s,toggleComponentVisibility:t,visibleComponents:m}=(0,r.c)(),v=(0,d.usePathname)(),u=null==v?void 0:v.startsWith("/projects"),x=e=>{let a=document.querySelector('[data-component-id="'.concat(e,'"]'));a&&a.scrollIntoView({behavior:"smooth",block:"start"})};return(0,l.jsxs)("div",{className:"panel-container",children:[(0,l.jsx)(c,{}),(0,l.jsxs)("div",{className:"pages-layers",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"text-sm font-semibold text-gray-600",children:"Pages"}),(0,l.jsx)("div",{className:"layer-group-container",children:(0,l.jsx)("div",{className:"space-y-1",children:[{name:"About",path:"/about"},{name:"Projects",path:"/projects"},{name:"Blog",path:"/blog"}].map(e=>(0,l.jsx)(i(),{href:e.path,className:"layer-button ".concat(v===e.path?"active":""),children:e.name},e.path))})})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"text-sm font-semibold text-gray-600",children:"Layers"}),u&&(0,l.jsx)("div",{className:"layer-group-container",children:(0,l.jsx)("div",{className:"space-y-1",children:h.map(i=>(0,l.jsxs)("div",{children:[(0,l.jsx)("button",{onClick:()=>s(i.id),className:"layer-group-label ".concat(a===i.id?"active":""),children:i.label}),a===i.id&&(0,l.jsx)("div",{className:"space-y-1",children:Object.values(e).filter(e=>e.tags.includes(a)||"all"===a).map(e=>(0,l.jsxs)("p",{className:"layer-button",onClick:()=>x(e.id),children:[(0,l.jsx)(n.default,{src:o,alt:"Toggle visibility",width:17,height:17,className:"cursor-pointer ".concat(m[e.id]?"opacity-90":"opacity-50"),onClick:()=>t(e.id)}),(0,l.jsx)("label",{htmlFor:"component-".concat(e.id),className:"cursor-pointer",children:e.name})]},e.id))})]},i.id))})}),!u&&Object.keys(e).length>0&&(0,l.jsx)("div",{className:"layer-group-container",children:(0,l.jsx)("div",{className:"space-y-1",children:Object.values(e).map(e=>(0,l.jsxs)("p",{className:"layer-button",children:[(0,l.jsx)(n.default,{src:o,alt:"Toggle visibility",width:17,height:17,className:"cursor-pointer ".concat(m[e.id]?"opacity-90":"opacity-50"),onClick:()=>t(e.id)}),(0,l.jsx)("label",{htmlFor:"component-".concat(e.id),className:"cursor-pointer",children:e.name})]},e.id))})})]})]})]})},v=e=>{let{children:a}=e;return(0,l.jsx)(r.G,{children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("div",{className:"sidebar",children:(0,l.jsx)(m,{})}),(0,l.jsx)("div",{className:"content tab-content pages-layers overflow-y-auto",children:a})]})})}}},e=>{var a=a=>e(e.s=a);e.O(0,[533,565,441,587,358],()=>a(4193)),_N_E=e.O()}]);