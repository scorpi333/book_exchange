import{q as p,W as j,j as e,a as v}from"./app-DqEpdO0g.js";import{T as r,I as n}from"./TextInput-pk0RT2g8.js";import{I as l}from"./InputLabel-BSQdZdXJ.js";import{P as g}from"./PrimaryButton-B15oWDLT.js";import{q as N}from"./transition-BMZoFqB0.js";function q({mustVerifyEmail:m,status:c,className:u=""}){const t=p().props.auth.user,{data:s,setData:i,patch:d,errors:o,processing:x,recentlySuccessful:f}=j({name:t.name,email:t.email,location:t.location}),h=a=>{a.preventDefault(),d(route("profile.update"))};return e.jsxs("section",{className:u,children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Profile Information"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Update your account's profile information and email address."})]}),e.jsxs("form",{onSubmit:h,className:"mt-6 space-y-6",children:[e.jsxs("div",{children:[e.jsx(l,{htmlFor:"name",value:"Name"}),e.jsx(r,{id:"name",className:"mt-1 block w-full",value:s.name,onChange:a=>i("name",a.target.value),required:!0,isFocused:!0,autoComplete:"name"}),e.jsx(n,{className:"mt-2",message:o.name})]}),e.jsxs("div",{children:[e.jsx(l,{htmlFor:"location",value:"Location"}),e.jsx(r,{id:"location",className:"mt-1 block w-full",value:s.location&&"Not Location",onChange:a=>i("location",a.target.value),required:!0,isFocused:!0,autoComplete:"location"}),e.jsx(n,{className:"mt-2",message:o.location})]}),e.jsxs("div",{children:[e.jsx(l,{htmlFor:"email",value:"Email"}),e.jsx(r,{id:"email",type:"email",className:"mt-1 block w-full",value:s.email,onChange:a=>i("email",a.target.value),required:!0,autoComplete:"username"}),e.jsx(n,{className:"mt-2",message:o.email})]}),m&&t.email_verified_at===null&&e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm mt-2 text-gray-800",children:["Your email address is unverified.",e.jsx(v,{href:route("verification.send"),method:"post",as:"button",className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Click here to re-send the verification email."})]}),c==="verification-link-sent"&&e.jsx("div",{className:"mt-2 font-medium text-sm text-green-600",children:"A new verification link has been sent to your email address."})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(g,{disabled:x,children:"Save"}),e.jsx(N,{show:f,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("p",{className:"text-sm text-gray-600",children:"Saved."})})]})]})]})}export{q as default};
