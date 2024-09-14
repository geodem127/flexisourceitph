import{s as x,R as f,j as l,T as C,B as d}from"./index-C_JhfKgS.js";import{C as j}from"./Container-CJQxRDjI.js";import{B as h}from"./Box-VIrzEnN4.js";import{P as y}from"./Modal-Doskrgoq.js";import{T as I}from"./TextField-Ct6bkKhg.js";const w=x(j)(({theme:a})=>({display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch",position:"relative",minHeight:`calc(100vh - ${a.mixins.toolbar.minHeight+10}px)`})),v=x(h)(()=>({display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch",position:"relative",padding:"1rem 0"})),m=x(y)(()=>({height:"100%",padding:"1rem",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"flex-start",flexGrow:1,flexShrink:0,width:"50%",whiteSpace:"pre-wrap"}));let g=`
4
3
360 480
420 540
600 660
3
0 1440
1 3
2 4
5
99 150
1 100
100 301
2 5
150 250
2
0 720
720 1440`;const k=()=>{const[a,n]=f.useState(g.trim()),[s,r]=f.useState(""),o=()=>{n(""),r("")},u=()=>{n(g.trim()),r("")},p=()=>{const i=a.trim();let c=R(i),e=S(c);r(e)};return l.jsx(w,{maxWidth:"lg",disableGutters:!0,children:l.jsxs(v,{children:[l.jsx(C,{variant:"h4",children:"Coding Challenge"}),l.jsxs(h,{sx:{height:"80vh",minHeight:"40vh",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start",columnGap:2},children:[l.jsxs(m,{children:[l.jsx(I,{fullWidth:!0,multiline:!0,maxRows:10,rows:25,variant:"filled",value:a,onChange:i=>{n(i.target.value)}}),l.jsxs(h,{display:"flex",flexDirection:"row",justifyContent:"flex-end",sx:{width:"100%",columnGap:1},children:[l.jsx(d,{variant:"contained",color:"error",onClick:o,children:"Clear"}),l.jsx(d,{variant:"contained",color:"info",onClick:u,children:"Reset"}),l.jsx(d,{variant:"contained",color:"primary",onClick:p,children:"Run"})]})]}),l.jsx(m,{children:s})]})]})})};function R(a){let n=a.trim().split(`
`),s=parseInt(n[0]),r=[],o=1;for(let u=0;u<s;u++){let p=parseInt(n[o]),i=[];for(let c=0;c<p;c++){let[e,t]=n[o+1+c].split(" ").map(Number);i.push([e,t])}r.push(i),o+=p+1}return r}function S(a){let n=[];return a.forEach((s,r)=>{let o=s.length;s=s.map((e,t)=>({index:t,start:e[0],end:e[1]})),s.sort((e,t)=>e.start-t.start);let u=Array(o).fill(null),p=0,i=0,c=!0;for(let e=0;e<o;e++){let t=s[e];if(t.start>=p)u[t.index]="C",p=t.end;else if(t.start>=i)u[t.index]="J",i=t.end;else{c=!1;break}}c?n.push(`
Case #${r+1}: ${u.join("")}`):n.push(`
Case #${r+1}: IMPOSSIBLE`)}),n}export{k as default};
