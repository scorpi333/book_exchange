import{q as a,r as l,j as e,Y as d}from"./app-CVokGI1I.js";import{A as o}from"./AuthenticatedLayout-P3mKfpc2.js";import"./ApplicationLogo-CYPN0XXS.js";import"./transition-D4_h9Iwk.js";function h({auth:t}){const{users:r}=a().props;return l.useEffect(()=>{fetch("/api/user").then(s=>s.json()).then(s=>setBooks(s)).catch(s=>console.error("Error fetching user:",s))},[]),e.jsxs(o,{user:t.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"User List"}),children:[e.jsx(d,{title:"Books"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"table-auto w-full",children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsx("th",{class:"px-4 py-2",children:"Name"})})}),e.jsx("tbody",{children:r.data&&r.data.length===0?e.jsx("tr",{children:e.jsx("td",{className:"border px-4 py-2",colSpan:"7",children:"No user found."})}):r.data&&r.data.map(s=>e.jsx("tr",{children:e.jsx("td",{className:"border px-4 py-2",scope:"row",children:e.jsx("a",{href:route("profile.edit",{user:s.id}),children:s.name})})},s.id))})]})})})})]})}export{h as default};
