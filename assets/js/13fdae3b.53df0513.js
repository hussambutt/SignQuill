"use strict";(self.webpackChunkOpenSign_Docs=self.webpackChunkOpenSign_Docs||[]).push([[6113],{21598:(e,l,s)=>{s.r(l),s.d(l,{assets:()=>j,contentTitle:()=>u,default:()=>f,frontMatter:()=>p,metadata:()=>x,toc:()=>b});var a=s(85893),o=s(11151),n=s(58219),t=(s(62316),s(51039)),i=s.n(t),d=(s(82723),s(9487)),r=(s(41429),s(5397)),c=s(4667),h=s(9472),m=s(85162);const p={id:"delete-webhook",title:"Delete Webhook",description:"The Delete Webhook API allow you to delete webhook url",sidebar_label:"Delete Webhook",hide_title:!0,hide_table_of_contents:!0,api:"eJy9Vttu20YQ/ZXxvrQBaElOk4cSRdGgNgIjRhNADvwgC8aQHJEbLXe3u0tKgsC3fkk/rV9SzFLUzY3RFkVfdNk5czmzM4fcioClF+lMPFBWGbMU80QU5HMnbZBGi1TcVwTXpCgQ7DDw7tMtoFJmBRvTQDBQ9PbVzt44JRJhLDnkILeFSEUPGbIkwpG3RnvyIt2K15MJf50mnjZ5Tt4vGgX7UCIRudGBdGA8WqtkHg3jL56dtsLnFdXIv8LGkkiFyb5QHkQirOMwQfYpHflGhSOcD07qUiSC1lhbxUcD3772Avy+IrW5EF2XiCBDREqtpKangdTT68nk6XvRdYx5M3nznNxnTw60CbAwjS4u/jte5JxxL9M6z/0SES5+oPH2OY1b3aKSRZyIe7Mk/f8yOU4f+vRc6rpW7Kex7ilFULSLE6rH5z1JT3njZNiIdLYV60u08rK3p7N5N09ETaEyh3HmmjFUIhXj1X6yPbmWnI8heBNSUYVgfToee9RFZtYjY0l7WWqFmR/lph6jleP2SnTJuQda+w/QPmApdXn5otf8wHLKN9E3+4TrvuVo5QfaiGRo5TEqEZInoCIsyMW2S70w0XnX4I+W9FSWOl5PeyXOleWBVG5qYgEJFcEA/+O336NHYfKmJh3i9FzAx8aBNStyLAioC1goWstM0UGO/KBHnrBW5L3agNSBSoeBoJClDKiAuyJ1CTlazKSSPG8MM+zt4Ghk/QgeKgoVOTZ94wgQCmpJ8ZiCMmbJcYIBbIKpY45dzbAybrngkhJAyBovNXkPnmhwIV2hzgmGu0jAOEANpAM566QnQFkzeGEc0GIhc8mBebkc5gFq1FgSJ0uA6+YuWGdaWZAHZ7LGB/BGNZEIZ6yJQk9RExV+BNeypZ44HxYUUCoqoGw4RAK5KQh2u8Y0dAEZ+QCW08ucYlAf0AVQ1JKLsxdvkgUSrGERkKjALE7ulgMFh9ovjKv7goar2bfPOsNKG3MUuBnBo37UUx6WxhMPgJJ66dNHfQmz/Zg9UOZloPm3wz6sVqtne/Dq1Oe9DFWTgSNrDn5lPIxbc+y+//NKJCKQq/3HxZRcK3PaLeFXco4jeLyTRsyjNFKNUvU79tO5A8uUkjlpT0dC9u79pzto4bvRRCRHm/83Ch7f3f5888v0huOyNvX7dzWajCZ8ZI0PNeqjVKcP/PPN3R4k/t+/HuwkJtA6jK1CGbU5struRHUmVoeXksr4wEfbbYaePjvVdXz8a0OO1XqeiBadxIyVZzbvkkGYWIWXtOH25TlZfsy0qJpe3c4eTicKf31zd3N/IxKBDRdzrInLqIm7H5xgMOnNUfhTsexr4E/W7b90+IEb94E2P+7hveWrDjuKA5pbOO+67k+/h3Ic",sidebar_class_name:"delete api-method",info_path:"docs/API-docs/opensign-api-v-1",custom_edit_url:null},u=void 0,x={id:"API-docs/delete-webhook",title:"Delete Webhook",description:"The Delete Webhook API allow you to delete webhook url",source:"@site/docs/API-docs/delete-webhook.api.mdx",sourceDirName:"API-docs",slug:"/API-docs/delete-webhook",permalink:"/docs/API-docs/delete-webhook",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"delete-webhook",title:"Delete Webhook",description:"The Delete Webhook API allow you to delete webhook url",sidebar_label:"Delete Webhook",hide_title:!0,hide_table_of_contents:!0,api:"eJy9Vttu20YQ/ZXxvrQBaElOk4cSRdGgNgIjRhNADvwgC8aQHJEbLXe3u0tKgsC3fkk/rV9SzFLUzY3RFkVfdNk5czmzM4fcioClF+lMPFBWGbMU80QU5HMnbZBGi1TcVwTXpCgQ7DDw7tMtoFJmBRvTQDBQ9PbVzt44JRJhLDnkILeFSEUPGbIkwpG3RnvyIt2K15MJf50mnjZ5Tt4vGgX7UCIRudGBdGA8WqtkHg3jL56dtsLnFdXIv8LGkkiFyb5QHkQirOMwQfYpHflGhSOcD07qUiSC1lhbxUcD3772Avy+IrW5EF2XiCBDREqtpKangdTT68nk6XvRdYx5M3nznNxnTw60CbAwjS4u/jte5JxxL9M6z/0SES5+oPH2OY1b3aKSRZyIe7Mk/f8yOU4f+vRc6rpW7Kex7ilFULSLE6rH5z1JT3njZNiIdLYV60u08rK3p7N5N09ETaEyh3HmmjFUIhXj1X6yPbmWnI8heBNSUYVgfToee9RFZtYjY0l7WWqFmR/lph6jleP2SnTJuQda+w/QPmApdXn5otf8wHLKN9E3+4TrvuVo5QfaiGRo5TEqEZInoCIsyMW2S70w0XnX4I+W9FSWOl5PeyXOleWBVG5qYgEJFcEA/+O336NHYfKmJh3i9FzAx8aBNStyLAioC1goWstM0UGO/KBHnrBW5L3agNSBSoeBoJClDKiAuyJ1CTlazKSSPG8MM+zt4Ghk/QgeKgoVOTZ94wgQCmpJ8ZiCMmbJcYIBbIKpY45dzbAybrngkhJAyBovNXkPnmhwIV2hzgmGu0jAOEANpAM566QnQFkzeGEc0GIhc8mBebkc5gFq1FgSJ0uA6+YuWGdaWZAHZ7LGB/BGNZEIZ6yJQk9RExV+BNeypZ44HxYUUCoqoGw4RAK5KQh2u8Y0dAEZ+QCW08ucYlAf0AVQ1JKLsxdvkgUSrGERkKjALE7ulgMFh9ovjKv7goar2bfPOsNKG3MUuBnBo37UUx6WxhMPgJJ66dNHfQmz/Zg9UOZloPm3wz6sVqtne/Dq1Oe9DFWTgSNrDn5lPIxbc+y+//NKJCKQq/3HxZRcK3PaLeFXco4jeLyTRsyjNFKNUvU79tO5A8uUkjlpT0dC9u79pzto4bvRRCRHm/83Ch7f3f5888v0huOyNvX7dzWajCZ8ZI0PNeqjVKcP/PPN3R4k/t+/HuwkJtA6jK1CGbU5struRHUmVoeXksr4wEfbbYaePjvVdXz8a0OO1XqeiBadxIyVZzbvkkGYWIWXtOH25TlZfsy0qJpe3c4eTicKf31zd3N/IxKBDRdzrInLqIm7H5xgMOnNUfhTsexr4E/W7b90+IEb94E2P+7hveWrDjuKA5pbOO+67k+/h3Ic",sidebar_class_name:"delete api-method",info_path:"docs/API-docs/opensign-api-v-1",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"Save or Update Webhook",permalink:"/docs/API-docs/save-update-webhook"},next:{title:"Create Folder",permalink:"/docs/API-docs/createfolder"}},j={},b=[{value:"Request",id:"request",level:2}];function k(e){const l={h2:"h2",p:"p",...(0,o.a)(),...e.components},{Details:s}=l;return s||function(e,l){throw new Error("Expected "+(l?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"openapi__heading",children:(0,a.jsx)(l.p,{children:"Delete Webhook"})}),"\n",(0,a.jsx)(i(),{method:"delete",path:"/webhook"}),"\n",(0,a.jsx)(l.p,{children:"The Delete Webhook API allow you to delete webhook url"}),"\n",(0,a.jsx)(l.h2,{id:"request",children:"Request"}),"\n",(0,a.jsx)("div",{children:(0,a.jsx)("div",{children:(0,a.jsxs)(n.Z,{children:[(0,a.jsxs)(m.default,{label:"200",value:"200",children:[(0,a.jsx)("div",{children:(0,a.jsx)(l.p,{children:"Successful operation"})}),(0,a.jsx)("div",{children:(0,a.jsx)(d.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,a.jsx)(m.default,{label:"application/json",value:"application/json",children:(0,a.jsxs)(h.default,{className:"openapi-tabs__schema",children:[(0,a.jsx)(m.default,{label:"Schema",value:"Schema",children:(0,a.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,a.jsx)("strong",{children:(0,a.jsx)(l.p,{children:"Schema"})})}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,a.jsx)(c.Z,{collapsible:!1,name:"result",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Webhook deleted successfully!"}})})]})}),(0,a.jsx)(m.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,a.jsx)(r.Z,{responseExample:'{\n  "result": "Webhook deleted successfully!"\n}',language:"json"})})]})})})})]}),(0,a.jsxs)(m.default,{label:"404",value:"404",children:[(0,a.jsx)("div",{children:(0,a.jsx)(l.p,{children:"User not found!"})}),(0,a.jsx)("div",{children:(0,a.jsx)(d.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,a.jsx)(m.default,{label:"application/json",value:"application/json",children:(0,a.jsxs)(h.default,{className:"openapi-tabs__schema",children:[(0,a.jsx)(m.default,{label:"Schema",value:"Schema",children:(0,a.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,a.jsx)("strong",{children:(0,a.jsx)(l.p,{children:"Schema"})})}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,a.jsx)(c.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"User not found!"}})})]})}),(0,a.jsx)(m.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,a.jsx)(r.Z,{responseExample:'{\n  "error": "User not found!"\n}',language:"json"})})]})})})})]}),(0,a.jsxs)(m.default,{label:"405",value:"405",children:[(0,a.jsx)("div",{children:(0,a.jsx)(l.p,{children:"Invalid API Token!"})}),(0,a.jsx)("div",{children:(0,a.jsx)(d.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,a.jsx)(m.default,{label:"application/json",value:"application/json",children:(0,a.jsxs)(h.default,{className:"openapi-tabs__schema",children:[(0,a.jsx)(m.default,{label:"Schema",value:"Schema",children:(0,a.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,a.jsx)("strong",{children:(0,a.jsx)(l.p,{children:"Schema"})})}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,a.jsx)(c.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Invalid API token!"}})})]})}),(0,a.jsx)(m.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,a.jsx)(r.Z,{responseExample:'{\n  "error": "Invalid API token!"\n}',language:"json"})})]})})})})]})]})})})]})}function f(e={}){const{wrapper:l}={...(0,o.a)(),...e.components};return l?(0,a.jsx)(l,{...e,children:(0,a.jsx)(k,{...e})}):k(e)}}}]);