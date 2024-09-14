import{aF as W,aG as k,aH as v,aI as T,c,r as R,j as $,f as G,h as M,g as P,aJ as S,aK as j,s as y}from"./index-C_JhfKgS.js";const E=W();function x({props:s,name:e,defaultTheme:a,themeId:i}){let o=k(a);return i&&(o=o[i]||o),v({theme:o,name:e,props:s})}const L=T(),N=E("div",{name:"MuiContainer",slot:"Root",overridesResolver:(s,e)=>{const{ownerState:a}=s;return[e.root,e[`maxWidth${c(String(a.maxWidth))}`],a.fixed&&e.fixed,a.disableGutters&&e.disableGutters]}}),U=s=>x({props:s,name:"MuiContainer",defaultTheme:L}),z=(s,e)=>{const a=r=>P(e,r),{classes:i,fixed:o,disableGutters:l,maxWidth:t}=s,n={root:["root",t&&`maxWidth${c(String(t))}`,o&&"fixed",l&&"disableGutters"]};return M(n,a,i)};function D(s={}){const{createStyledComponent:e=N,useThemeProps:a=U,componentName:i="MuiContainer"}=s,o=e(({theme:t,ownerState:n})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!n.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}}}),({theme:t,ownerState:n})=>n.fixed&&Object.keys(t.breakpoints.values).reduce((r,u)=>{const p=u,d=t.breakpoints.values[p];return d!==0&&(r[t.breakpoints.up(p)]={maxWidth:`${d}${t.breakpoints.unit}`}),r},{}),({theme:t,ownerState:n})=>({...n.maxWidth==="xs"&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},...n.maxWidth&&n.maxWidth!=="xs"&&{[t.breakpoints.up(n.maxWidth)]:{maxWidth:`${t.breakpoints.values[n.maxWidth]}${t.breakpoints.unit}`}}}));return R.forwardRef(function(n,r){const u=a(n),{className:p,component:d="div",disableGutters:f=!1,fixed:b=!1,maxWidth:h="lg",classes:I,...g}=u,m={...u,component:d,disableGutters:f,fixed:b,maxWidth:h},C=z(m,i);return $.jsx(o,{as:d,ownerState:m,className:G(C.root,p),ref:r,...g})})}function H({props:s,name:e}){return x({props:s,name:e,defaultTheme:S,themeId:j})}const F=D({createStyledComponent:y("div",{name:"MuiContainer",slot:"Root",overridesResolver:(s,e)=>{const{ownerState:a}=s;return[e.root,e[`maxWidth${c(String(a.maxWidth))}`],a.fixed&&e.fixed,a.disableGutters&&e.disableGutters]}}),useThemeProps:s=>H({props:s,name:"MuiContainer"})});export{F as C,H as u};
