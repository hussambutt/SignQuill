"use strict";(self.webpackChunkOpenSign_Docs=self.webpackChunkOpenSign_Docs||[]).push([[9817],{1310:(e,t,s)=>{s.r(t),s.d(t,{default:()=>v});s(67294);var n=s(36905),i=s(35281),a=s(53438),r=s(48596),l=s(39960),c=s(95999),o=s(44996),d=s(85893);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,o.default)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(l.default,{"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const b={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function x(e){let{children:t,href:s,isLast:n}=e;const i="breadcrumbs__link";return n?(0,d.jsx)("span",{className:i,itemProp:"name",children:t}):s?(0,d.jsx)(l.default,{className:i,href:s,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:i,children:t})}function p(e){let{children:t,active:s,index:i,addMicrodata:a}=e;return(0,d.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,n.Z)("breadcrumbs__item",{"breadcrumbs__item--active":s}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(i+1)})]})}function v(){const e=(0,a.s1)(),t=(0,r.Ns)();return e?(0,d.jsx)("nav",{className:(0,n.Z)(i.k.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,s)=>{const n=s===e.length-1,i="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(p,{active:n,index:s,addMicrodata:!!i,children:(0,d.jsx)(x,{href:i,isLast:n,children:t.label})},s)}))]})}):null}},34228:(e,t,s)=>{s.r(t),s.d(t,{default:()=>I});s(67294);var n=s(10833),i=s(53438),a=s(44996),r=s(36905),l=s(39960),c=s(13919),o=s(95999),d=s(92503);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var m=s(85893);function h(e){let{href:t,children:s}=e;return(0,m.jsx)(l.default,{href:t,className:(0,r.Z)("card padding--lg",u.cardContainer),children:s})}function b(e){let{href:t,icon:s,title:n,description:i}=e;return(0,m.jsxs)(h,{href:t,children:[(0,m.jsxs)(d.Z,{as:"h2",className:(0,r.Z)("text--truncate",u.cardTitle),title:n,children:[s," ",n]}),i&&(0,m.jsx)("p",{className:(0,r.Z)("text--truncate",u.cardDescription),title:i,children:i})]})}function x(e){let{item:t}=e;const s=(0,i.LM)(t);return s?(0,m.jsx)(b,{href:s,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const s=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,i.xz)(t.docId??void 0);return(0,m.jsx)(b,{href:t.href,icon:s,title:t.label,description:t.description??n?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return(0,m.jsx)(p,{item:t});case"category":return(0,m.jsx)(x,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const s=(0,i.jA)();return(0,m.jsx)(f,{items:s.items,className:t})}function f(e){const{items:t,className:s}=e;if(!t)return(0,m.jsx)(g,{...e});const n=(0,i.MN)(t);return(0,m.jsx)("section",{className:(0,r.Z)("row",s),children:n.map(((e,t)=>(0,m.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,m.jsx)(v,{item:e})},t)))})}var j=s(80049),N=s(23120),_=s(44364),L=s(1310);const k={generatedIndexPage:"generatedIndexPage_vN6x",list:"list_eTzJ",title:"title_kItE"};function T(e){let{categoryGeneratedIndex:t}=e;return(0,m.jsx)(n.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,a.default)(t.image)})}function Z(e){let{categoryGeneratedIndex:t}=e;const s=(0,i.jA)();return(0,m.jsxs)("div",{className:k.generatedIndexPage,children:[(0,m.jsx)(N.default,{}),(0,m.jsx)(L.default,{}),(0,m.jsx)(_.default,{}),(0,m.jsxs)("header",{children:[(0,m.jsx)(d.Z,{as:"h1",className:k.title,children:t.title}),t.description&&(0,m.jsx)("p",{children:t.description})]}),(0,m.jsx)("article",{className:"margin-top--lg",children:(0,m.jsx)(f,{items:s.items,className:k.list})}),(0,m.jsx)("footer",{className:"margin-top--lg",children:(0,m.jsx)(j.Z,{previous:t.navigation.previous,next:t.navigation.next})})]})}function I(e){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(T,{...e}),(0,m.jsx)(Z,{...e})]})}},80049:(e,t,s)=>{s.d(t,{Z:()=>r});s(67294);var n=s(95999),i=s(32244),a=s(85893);function r(e){const{previous:t,next:s}=e;return(0,a.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,n.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,a.jsx)(i.Z,{...t,subLabel:(0,a.jsx)(n.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),s&&(0,a.jsx)(i.Z,{...s,subLabel:(0,a.jsx)(n.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},44364:(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});s(67294);var n=s(36905),i=s(95999),a=s(35281),r=s(74477),l=s(85893);function c(e){let{className:t}=e;const s=(0,r.E)();return s.badge?(0,l.jsx)("span",{className:(0,n.Z)(t,a.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:s.label},children:"Version: {versionLabel}"})}):null}},23120:(e,t,s)=>{s.r(t),s.d(t,{default:()=>p});s(67294);var n=s(36905),i=s(52263),a=s(39960),r=s(95999),l=s(80143),c=s(35281),o=s(60373),d=s(74477),u=s(85893);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,u.jsx)(r.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:s.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,u.jsx)(r.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:s.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function b(e){let{versionLabel:t,to:s,onClick:n}=e;return(0,u.jsx)(r.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(a.default,{to:s,onClick:n,children:(0,u.jsx)(r.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function x(e){let{className:t,versionMetadata:s}=e;const{siteConfig:{title:a}}=(0,i.default)(),{pluginId:r}=(0,l.gA)({failfast:!0}),{savePreferredVersionName:d}=(0,o.J)(r),{latestDocSuggestion:m,latestVersionSuggestion:x}=(0,l.Jo)(r),p=m??(v=x).docs.find((e=>e.id===v.mainDocId));var v;return(0,u.jsxs)("div",{className:(0,n.Z)(t,c.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:a,versionMetadata:s})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(b,{versionLabel:x.label,to:p.path,onClick:()=>d(x.name)})})]})}function p(e){let{className:t}=e;const s=(0,d.E)();return s.banner?(0,u.jsx)(x,{className:t,versionMetadata:s}):null}},32244:(e,t,s)=>{s.d(t,{Z:()=>r});s(67294);var n=s(36905),i=s(39960),a=s(85893);function r(e){const{permalink:t,title:s,subLabel:r,isNext:l}=e;return(0,a.jsxs)(i.default,{className:(0,n.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[r&&(0,a.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,a.jsx)("div",{className:"pagination-nav__label",children:s})]})}}}]);