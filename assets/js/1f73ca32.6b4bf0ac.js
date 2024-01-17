"use strict";(self.webpackChunkOpenSign_Docs=self.webpackChunkOpenSign_Docs||[]).push([[2832],{8484:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>g,contentTitle:()=>x,default:()=>y,frontMatter:()=>u,metadata:()=>j,toc:()=>f});var l=a(85893),i=a(11151),t=a(58219),n=(a(62316),a(51039)),r=a.n(n),o=(a(82723),a(9487)),c=a(41429),d=a(5397),m=a(4667),p=a(9472),h=a(85162);const u={id:"get-user",title:"Get your details",description:"The Get User API enables you to get your own details.",sidebar_label:"Get your details",hide_title:!0,hide_table_of_contents:!0,api:"eJy9Vm1v2zYQ/ivcfWoA2ZbtNN2EYWhWZEbSognmBAOWGAUtnW0mEsmSJ8eG4f8+HCU5it1syzD0iy3d3XNvvHvEDZCce0hu4cajg0kEGfrUKUvKaEjgeoFihCRYK06vzgVqOc3Ri7UpBRkxR+JHJ8yjFhmSVLnvQgTGopPs4zyDBOZIwX0EVjpZIKHjmBvQskBIYNWRVnXIPKCGCBQHXqDMAsLh11I5zCAhV2IEntY5Y7wqbI4QAa5sbjKEZCZzzwbpAgsJyQZobYMlOaXnsGVTGUAJ56e9muvuarVawXbCcbw12qNn5CCO+e95L8ZlmqL3szIXu/IggtRoQk1sL63NVRoUvXvPoM1hOmZ6jylxLxy7IVWFrMTcrv3EI5gZV0hqS54q+W2kHgbD6eLmgiv8HBr6Og8XBsWviAw/K6TKX4u/NzhFfF8Luqkp2NXVwuhXp3L89uTdj8NBfzBkFxdmeq0of7WXDJcM/2AKK/X6tehmNNhF6lASZqf0LSdPkEE8GHb6cSd+d90/SY5/St6edOM4/hMiWBWhn/WgZ5JCn6kqa/de2uw7xNnum5W8lC2z6n3Lhsfx8eEGBBbQhsTMlDr74f8bfnTOuL+vfT/2tpW30rnS+KVZ4S+cfFPG28MyzvVS5ioLfHbNpPN9K2mHpyr84dGoyqjixGeltuVVkR7T0ilaB0ptc2lyO2FqK5AWpubhwMG0gAR6c6SyYmWPbtlQculypl8i65Nez5OcKz3vSGu7zWLkcup5y3vSqt6yH9izSWHMbao68SyRXT+kVR9xDdE/Uz9XpvTMBHBd/aVFPVZzHXq37MPh50p5oXxQZyYtC9QUzlHMjBN7aDGVHjNhtKAFBiXLh92+8BZTNatHoCvu9J0emwJF6ZHZP1f6wSd3uiNuL2czlSqZiz9w6hXh5E3TucfHx4OOHQXMSNGinAqH1jyZz4MwtLWN2r0cQQSErvCXszG6pUqxPqUXQvWCca8ebJmGwcaK3hvR+30QD1quUtQeW6N4Orr6JIbdGKLWcPyLlHufzj+cfR6fsVcer+qI+t24G7PIGk+F1K1Ao+YyUV8k9o9387Sk//liUo8h4Yp6NpcqLFcoa1Mvxi00izGJYGE8sWiz4WG5cfl2y+KvJTpet0kES+kURw7LFjXDy5uUKc+KbHczebGYN7/Xl5wj8VKKD7g+2JalzEu2hG20qQ1O0xQttXQHXPaMEEZn1xCBLLnu9oo+hBWtH7iWRqXXLd/Ps6kS4F9O55uAn/mgPuL6l515pXkRsLsFVtbcisl2u/0LzPqaMw==",sidebar_class_name:"get api-method",info_path:"docs/API-docs/opensign-api-v-1",custom_edit_url:null},x=void 0,j={id:"API-docs/get-user",title:"Get your details",description:"The Get User API enables you to get your own details.",source:"@site/docs/API-docs/get-user.api.mdx",sourceDirName:"API-docs",slug:"/API-docs/get-user",permalink:"/docs/API-docs/get-user",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-user",title:"Get your details",description:"The Get User API enables you to get your own details.",sidebar_label:"Get your details",hide_title:!0,hide_table_of_contents:!0,api:"eJy9Vm1v2zYQ/ivcfWoA2ZbtNN2EYWhWZEbSognmBAOWGAUtnW0mEsmSJ8eG4f8+HCU5it1syzD0iy3d3XNvvHvEDZCce0hu4cajg0kEGfrUKUvKaEjgeoFihCRYK06vzgVqOc3Ri7UpBRkxR+JHJ8yjFhmSVLnvQgTGopPs4zyDBOZIwX0EVjpZIKHjmBvQskBIYNWRVnXIPKCGCBQHXqDMAsLh11I5zCAhV2IEntY5Y7wqbI4QAa5sbjKEZCZzzwbpAgsJyQZobYMlOaXnsGVTGUAJ56e9muvuarVawXbCcbw12qNn5CCO+e95L8ZlmqL3szIXu/IggtRoQk1sL63NVRoUvXvPoM1hOmZ6jylxLxy7IVWFrMTcrv3EI5gZV0hqS54q+W2kHgbD6eLmgiv8HBr6Og8XBsWviAw/K6TKX4u/NzhFfF8Luqkp2NXVwuhXp3L89uTdj8NBfzBkFxdmeq0of7WXDJcM/2AKK/X6tehmNNhF6lASZqf0LSdPkEE8GHb6cSd+d90/SY5/St6edOM4/hMiWBWhn/WgZ5JCn6kqa/de2uw7xNnum5W8lC2z6n3Lhsfx8eEGBBbQhsTMlDr74f8bfnTOuL+vfT/2tpW30rnS+KVZ4S+cfFPG28MyzvVS5ioLfHbNpPN9K2mHpyr84dGoyqjixGeltuVVkR7T0ilaB0ptc2lyO2FqK5AWpubhwMG0gAR6c6SyYmWPbtlQculypl8i65Nez5OcKz3vSGu7zWLkcup5y3vSqt6yH9izSWHMbao68SyRXT+kVR9xDdE/Uz9XpvTMBHBd/aVFPVZzHXq37MPh50p5oXxQZyYtC9QUzlHMjBN7aDGVHjNhtKAFBiXLh92+8BZTNatHoCvu9J0emwJF6ZHZP1f6wSd3uiNuL2czlSqZiz9w6hXh5E3TucfHx4OOHQXMSNGinAqH1jyZz4MwtLWN2r0cQQSErvCXszG6pUqxPqUXQvWCca8ebJmGwcaK3hvR+30QD1quUtQeW6N4Orr6JIbdGKLWcPyLlHufzj+cfR6fsVcer+qI+t24G7PIGk+F1K1Ao+YyUV8k9o9387Sk//liUo8h4Yp6NpcqLFcoa1Mvxi00izGJYGE8sWiz4WG5cfl2y+KvJTpet0kES+kURw7LFjXDy5uUKc+KbHczebGYN7/Xl5wj8VKKD7g+2JalzEu2hG20qQ1O0xQttXQHXPaMEEZn1xCBLLnu9oo+hBWtH7iWRqXXLd/Ps6kS4F9O55uAn/mgPuL6l515pXkRsLsFVtbcisl2u/0LzPqaMw==",sidebar_class_name:"get api-method",info_path:"docs/API-docs/opensign-api-v-1",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"Introduction",permalink:"/docs/API-docs/opensign-api-v-1"},next:{title:"Create contact",permalink:"/docs/API-docs/createcontact"}},g={},f=[{value:"Request",id:"request",level:2}];function v(e){const s={h2:"h2",p:"p",...(0,i.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{className:"openapi__heading",children:(0,l.jsx)(s.p,{children:"Get your details"})}),"\n",(0,l.jsx)(r(),{method:"get",path:"/getuser"}),"\n",(0,l.jsx)(s.p,{children:"The Get User API enables you to get your own details."}),"\n",(0,l.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,l.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,l.jsx)(s.p,{children:"Header Parameters"})})}),(0,l.jsx)("div",{children:(0,l.jsx)("ul",{children:(0,l.jsx)(c.Z,{className:"paramsItem",param:{name:"x-api-token",in:"header",required:!0,style:"simple",explode:!1,schema:{type:"string"},example:"opensign.xxxx"}})})})]}),"\n",(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:(0,l.jsxs)(t.Z,{children:[(0,l.jsxs)(h.default,{label:"200",value:"200",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Successful operation"})}),(0,l.jsx)("div",{children:(0,l.jsx)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(h.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(p.default,{className:"openapi-tabs__schema",children:[(0,l.jsx)(h.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(m.Z,{collapsible:!1,name:"objectId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",format:"string",example:"FGik23bhUJ"}}),(0,l.jsx)(m.Z,{collapsible:!1,name:"Name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",format:"string",example:"Joe Bee"}}),(0,l.jsx)(m.Z,{collapsible:!1,name:"Email",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",format:"string",example:"joebee@example.com"}}),(0,l.jsx)(m.Z,{collapsible:!1,name:"Phone",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",format:"string",example:"4567832123"}}),(0,l.jsx)(m.Z,{collapsible:!1,name:"JobTitle",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",format:"string",example:"dev"}}),(0,l.jsx)(m.Z,{collapsible:!1,name:"Company",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",format:"string",example:"opensign"}}),(0,l.jsx)(m.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date",qualifierMessage:void 0,schema:{type:"string",example:"2023-10-07T16:49:56.000Z",xml:{name:"date"},title:"date"}}),(0,l.jsx)(m.Z,{collapsible:!1,name:"updatedAt",required:!1,schemaName:"date",qualifierMessage:void 0,schema:{type:"string",example:"2023-10-07T16:49:56.000Z",xml:{name:"date"},title:"date"}})]})]})}),(0,l.jsx)(h.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(d.Z,{responseExample:'{\n  "objectId": "FGik23bhUJ",\n  "Name": "Joe Bee",\n  "Email": "joebee@example.com",\n  "Phone": "4567832123",\n  "JobTitle": "dev",\n  "Company": "opensign",\n  "createdAt": "2023-10-07T16:49:56.000Z",\n  "updatedAt": "2023-10-07T16:49:56.000Z"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(h.default,{label:"404",value:"404",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"User not found!"})}),(0,l.jsx)("div",{children:(0,l.jsx)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(h.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(p.default,{className:"openapi-tabs__schema",children:[(0,l.jsx)(h.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(m.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"User not found!"}})})]})}),(0,l.jsx)(h.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(d.Z,{responseExample:'{\n  "error": "User not found!"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(h.default,{label:"405",value:"405",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Invalid API Token!"})}),(0,l.jsx)("div",{children:(0,l.jsx)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(h.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(p.default,{className:"openapi-tabs__schema",children:[(0,l.jsx)(h.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(m.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Invalid API token!"}})})]})}),(0,l.jsx)(h.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(d.Z,{responseExample:'{\n  "error": "Invalid API token!"\n}',language:"json"})})]})})})})]})]})})})]})}function y(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(v,{...e})}):v(e)}}}]);