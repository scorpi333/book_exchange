import{j as e,r as c,Y as m}from"./app-RK3ZChN2.js";import{A as g}from"./AuthenticatedLayout-ic85_gJg.js";import"./transition-B0c_pRpy.js";function b(s){let r=0;for(let t=0;t<s.length;t++)r=s.charCodeAt(t)+((r<<5)-r);const n=(r&16777215).toString(16).toUpperCase();return"#"+"00000".substring(0,6-n.length)+n}const y=({name:s})=>{const r=b(s.slice(0,4));return e.jsx("div",{className:"h-12 w-12 p-2 rounded-full flex items-center justify-center",style:{backgroundColor:r},children:e.jsx("span",{className:"text-white font-semibold",children:s?s.slice(0,2).toUpperCase():""})})},h=y,v=({users:s,auth:r,selectedUser:n,setSelectedUser:t,fetchMessages:a})=>e.jsx("div",{className:"overflow-y-auto max-h-screen-80",children:s.data&&s.data.map(l=>e.jsxs("div",{className:`flex flex-row py-4 px-2 justify-center items-center border-b-2 ${n===l.id?"border-l-8 border-t-2 border-blue-400":""}`,onClick:()=>{t(l.id),a(l.id)},children:[e.jsx("div",{class:"w-1/4",children:e.jsx(h,{name:l.name})}),e.jsxs("div",{class:"w-full",children:[e.jsx("div",{class:"text-lg font-semibold",children:l.name}),e.jsx("div",{class:"text-lg font-semibold",children:l.email}),e.jsx("span",{class:"text-gray-500",children:"Active"})]})]},l.id))}),w=v,C=({sendMessage:s,selectedUser:r,fetchMessages:n})=>{const[t,a]=c.useState(""),l=x=>{a(x.target.value)},o=x=>{x.preventDefault(),t.trim()!==""&&(s(t),n(r),a(""))};return e.jsx("div",{class:"py-5",children:e.jsx("form",{onSubmit:o,children:e.jsx("input",{type:"text",class:"w-full bg-gray-300 py-5 px-3 rounded-xl",value:t,onChange:l,placeholder:"Type your message..."})})})},S=C,M=({messages:s,auth:r,selectedUser:n})=>e.jsx("div",{class:"flex flex-col mt-5 overflow-y-auto max-h-screen-80",children:s.data&&s.data.map(t=>e.jsxs("div",{children:[t.user_id==r.user.id&&t.sender_id==n&&e.jsxs("div",{class:"flex justify-end mb-4",children:[e.jsx("div",{class:"mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white",children:t.message}),e.jsx(h,{name:t.user.name})]}),t.sender_id==r.user.id&&t.user_id==n&&e.jsxs("div",{class:"flex justify-start mb-4",children:[e.jsx(h,{name:t.user.name}),e.jsx("div",{class:"ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white",children:t.message})]})]}))}),N=M;function T({auth:s,error:r}){const[n,t]=c.useState([]),[a,l]=c.useState([]),[o,x]=c.useState(null),[f,u]=c.useState("");c.useEffect(()=>{fetch("/api/users").then(d=>{if(!d.ok)throw new Error("Network response was not ok");return d.json()}).then(d=>t(d)).catch(d=>console.error("Error fetching user:",d))},[]);const p=d=>{fetch("/api/messages/fetch",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:d,sender_id:s.user.id})}).then(i=>i.json()).then(i=>l(i)).catch(i=>console.error("Error fetching messages:",i))},j=d=>{fetch("/api/messages/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:d,sender_id:o,user_id:s.user.id})}).then(i=>i.json()).then(i=>{l([a,i]),u("")}).catch(i=>console.error("Error sending message:",i))};return e.jsxs(g,{user:s.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Messages"}),children:[e.jsx(m,{title:"Messages"}),e.jsxs("div",{class:"container mx-auto shadow-lg rounded-lg",children:[e.jsxs("div",{class:"px-5 py-5 flex justify-between items-center bg-white border-b-2",children:[e.jsx("div",{class:"font-semibold text-2xl",children:"Chat"}),e.jsx("div",{class:"w-1/2",children:e.jsx("input",{type:"text",name:"",id:"",placeholder:"search IRL",class:"rounded-2xl bg-gray-100 py-3 px-5 w-full"})}),e.jsx(h,{name:s.user.name})]}),e.jsxs("div",{class:"flex flex-row justify-between bg-white",children:[e.jsxs("div",{class:"flex flex-col w-2/5 border-r-2 overflow-y-auto",children:[e.jsx("div",{class:"border-b-2 py-4 px-2",children:e.jsx("input",{type:"text",placeholder:"search chatting",class:"py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"})}),e.jsx("div",{className:"overflow-y-auto max-h-screen-80",children:e.jsx(w,{users:n,auth:s,selectedUser:o,setSelectedUser:x,fetchMessages:p})})]}),e.jsxs("div",{class:"w-full px-5 flex flex-col justify-between",children:[e.jsx(N,{auth:s,selectedUser:o,messages:a}),e.jsx(S,{newMessage:f,selectedUser:o,setNewMessage:u,sendMessage:j,fetchMessages:p})]}),e.jsx("div",{class:"w-2/5 border-l-2 px-5",children:e.jsxs("div",{class:"flex flex-col",children:[e.jsx("div",{class:"font-semibold text-xl py-4"}),e.jsx(h,{name:s.user.name}),e.jsx("div",{class:"font-semibold py-4",children:s.user.name}),e.jsx("div",{class:"font-semibold py-4",children:s.user.created_at}),e.jsx("div",{class:"font-light",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, perspiciatis!"})]})})]})]})]})}export{T as default};