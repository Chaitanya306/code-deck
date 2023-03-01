"use strict";(self.webpackChunkcode_deck=self.webpackChunkcode_deck||[]).push([[757],{9674:function(e,l,s){s.d(l,{Z:function(){return p}});var r=s(2791),n=s(5263),t=s(9439),a=s(1213),o=s(2478),d=s(184);var i=function(){var e=(0,r.useContext)(n.t).closeModal,l=(0,r.useContext)(o.xm).addFolder,s=(0,r.useState)(""),i=(0,t.Z)(s,2),c=i[0],u=i[1];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"flex flex-row justify-end p-4",children:(0,d.jsx)(a.ySC,{className:"cursor-pointer",onClick:function(){e()}})}),(0,d.jsxs)("div",{className:"px-6 py-4 mb-8 flex flex-col items-center justify-center gap-6",children:[(0,d.jsx)("h2",{children:"Create a New Folder"}),(0,d.jsx)("input",{type:"text",onChange:function(e){return u(e.target.value)},value:c,placeholder:"Please enter folder title",className:"border-[.5px] text-sm border-gray rounded-lg shadow-sm p-2 w-full"}),(0,d.jsx)("button",{className:"p-3 w-36 text-black bg-white rounded-lg font-semibold border-[.5px] border-gray shadow-lg",onClick:function(){l(c),e()},children:"Create Folder"})]})]})},c=s(2976);var u=function(){var e=(0,r.useContext)(n.t),l=e.isOpenModal,s=e.closeModal,i=(0,r.useContext)(o.xm).addPlayground,u=[{value:"javascript",label:"javascript"},{value:"python",label:"python"},{value:"java",label:"java"},{value:"cpp",label:"cpp"}],x=l.identifiers.folderId,f=(0,r.useState)(""),m=(0,t.Z)(f,2),h=m[0],p=m[1],j=(0,r.useState)(u[0]),g=(0,t.Z)(j,2),v=g[0],b=g[1];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"flex flex-row justify-end p-4",children:(0,d.jsx)(a.ySC,{className:"cursor-pointer",onClick:function(){return s()}})}),(0,d.jsxs)("div",{className:"px-6 py-4 mb-8 flex flex-col items-center justify-center gap-6",children:[(0,d.jsx)("h2",{children:" Create a New PlayGround"}),(0,d.jsx)("input",{type:"text",value:h,onChange:function(e){return p(e.target.value)},placeholder:"please enter playground title",className:"border-[.5px] text-sm border-gray-50 rounded-lg shadow-sm p-2 w-full"}),(0,d.jsx)(c.ZP,{options:u,value:v,onChange:function(e){b(e)}}),(0,d.jsx)("button",{className:"p-3 w-36 text-black bg-white rounded-lg font-semibold border-[0.5px] border-gray-50 shadow-lg",onClick:function(){i(x,h,v.value),s()},children:"Create PlayGround"})]})]})};var x=function(){var e=(0,r.useContext)(n.t).closeModal,l=(0,r.useContext)(o.xm).addPlaygroundAndFolder,s=[{value:"javascript",label:"javascript"},{value:"python",label:"python"},{value:"java",label:"java"},{value:"cpp",label:"cpp"}],i=(0,r.useState)(""),u=(0,t.Z)(i,2),x=u[0],f=u[1],m=(0,r.useState)(""),h=(0,t.Z)(m,2),p=h[0],j=h[1],g=(0,r.useState)(s[0]),v=(0,t.Z)(g,2),b=v[0],y=v[1];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"flex flex-row justify-end p-4",children:(0,d.jsx)(a.ySC,{className:"cursor-pointer",onClick:function(){e()}})}),(0,d.jsxs)("div",{className:"px-6 py-4 mb-8 flex flex-col items-center justify-center bap-6",children:[(0,d.jsx)("h2",{children:"Create a New PlayGround & New Folder"}),(0,d.jsxs)("div",{className:"flex flex-col w-full ",children:[(0,d.jsx)("label",{children:"Enter Folder Name"}),(0,d.jsx)("input",{type:"text",value:x,placeholder:"Please Enter Folder Name",onChange:function(e){return f(e.target.value)},className:"boder-[0.5px] text-sm border-gray-50 rounded-lg p-2 w-full"})]}),(0,d.jsxs)("div",{className:"flex flex-col w-full",children:[(0,d.jsx)("label",{children:"Enter Playground Name"}),(0,d.jsx)("input",{type:"text",value:p,placeholder:"Please Enter Playground Name",onChange:function(e){return j(e.target.value)},className:"border=[0.5px] text-sm border-gray-50 rounder-lg p-2 w-full"})]}),(0,d.jsx)(c.ZP,{options:s,value:b,onChange:function(e){y(e)}}),(0,d.jsx)("button",{className:"p-3 w-36 text-black rounder-lg font-semibold border-[0.5px] border-gray-50 shadow-lg",onClick:function(){l(x,p,b.value),e()},children:"Create Folder & Playground"})]})]})};var f=function(){var e=(0,r.useContext)(n.t),l=e.closeModal,s=e.isOpenModal,i=(0,r.useContext)(o.xm),c=i.editFolderTitle,u=i.folders,x=s.identifiers.folderId,f=(0,r.useState)(u[x].title),m=(0,t.Z)(f,2),h=m[0],p=m[1];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"flex flex-row justify-end p-4",children:(0,d.jsx)(a.ySC,{className:"cursor-pointer",onClick:function(){return l()}})}),(0,d.jsxs)("div",{className:" px-6 my-4 mb-8 flex flex-col items-center justify-center gap-6",children:[(0,d.jsx)("h2",{children:"Edit Folder"}),(0,d.jsx)("input",{type:"text",value:h,onChange:function(e){return p(e.target.value)},className:"border-[.5px] text-sm border-gray-50 rounded-lg shadow-sm p-2 w-full"}),(0,d.jsx)("button",{className:"p-3 w-36 text-black bg-white rounded-lg font-semibold border-[0.5px] border-gray-50 shadow-lg",onClick:function(){c(x,h),l()},children:"Proceed"})]})]})};var m=function(){var e=(0,r.useContext)(n.t),l=e.closeModal,s=e.isOpenModal,i=(0,r.useContext)(o.xm),c=i.editPlaygroundTitle,u=i.folders,x=s.identifiers,f=x.folderId,m=x.cardID,h=(0,r.useState)(u[f].playgrounds[m].title),p=(0,t.Z)(h,2),j=p[0],g=p[1];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"flex flex-row justify-end p-4",children:(0,d.jsx)(a.ySC,{className:"cursor-pointer",onClick:function(){return l()}})}),(0,d.jsxs)("div",{className:" px-6 my-4 mb-8 flex flex-col items-center justify-center gap-6",children:[(0,d.jsx)("h2",{children:"Edit PlayGround"}),(0,d.jsx)("input",{type:"text",value:j,onChange:function(e){return g(e.target.value)},className:"border-[.5px] text-sm border-gray-50 rounded-lg shadow-sm p-2 w-full"}),(0,d.jsx)("button",{className:"p-3 w-36 text-black bg-white rounded-lg font-semibold border-[0.5px] border-gray-50 shadow-lg",onClick:function(){c(f,m,j),l()},children:"Proceed"})]})]})};var h=function(){return(0,d.jsx)("div",{children:"...Loading"})};var p=function(){var e=(0,r.useContext)(n.t).isOpenModal.modalType;return(0,d.jsx)("div",{className:"flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",children:(0,d.jsx)("div",{className:"relative w-auto my-6 mx-auto max-w-3xl",onClick:function(e){e.stopPropagation()},children:(0,d.jsxs)("div",{className:"border-0 rounded-lg shadow-lg relative flex flex-col w-[30rem] bg-white outline-none focus:outline-none",children:[1===e&&(0,d.jsx)(i,{}),2===e&&(0,d.jsx)(u,{}),3===e&&(0,d.jsx)(x,{}),4===e&&(0,d.jsx)(f,{}),5===e&&(0,d.jsx)(m,{}),6===e&&(0,d.jsx)(h,{})]})})})}},4757:function(e,l,s){s.r(l),s.d(l,{default:function(){return p}});var r=s(2791),n=s(5263),t=s(184),a=function(){var e=(0,r.useContext)(n.t).openModal;return(0,t.jsx)("div",{className:"border-2 border-black h-screen bg-black flex justify-end",children:(0,t.jsxs)("div",{className:"mx-auto flex flex-col items-center justify-center gap-3",children:[(0,t.jsx)("img",{src:"/logo.png",alt:"logo"}),(0,t.jsx)("h3",{className:"font-semibold text-white",children:"Code Deck"}),(0,t.jsx)("h3",{className:"font-semibold text-white",children:"Code. Compile. Debug"}),(0,t.jsx)("button",{className:"w-full p-4 bg-white shadow-lg rounded-lg drop-shadow-2xl",onClick:function(){return e({show:!0,modalType:3,identifiers:{folderId:"",cardID:""}})},children:"+ Create New PlayGround"})]})})},o=s(9439),d=s(3728),i=s(7692),c=s(71),u=function(e){var l=e.children;return(0,t.jsx)("div",{className:"hover:scale-105 bg-105 h-auto drop-shadow-xl rounded-lg p-6 ease-in-out duration-500",children:(0,t.jsx)("div",{children:l})})},x=s(2478),f=s(7689),m=function(){var e=(0,f.s0)(),l=(0,r.useContext)(n.t).openModal,s=(0,r.useContext)(x.xm),a=s.folders,m=s.deleteFolder,h=s.deleteCard;return(0,t.jsxs)("div",{className:"boder-2 border-black h-screen p-8",children:[(0,t.jsxs)("div",{className:"flex justify-between items-center",children:[(0,t.jsxs)("h2",{children:["My ",(0,t.jsx)("span",{className:"font-semibold text-2x",children:"PlayGround"})]}),(0,t.jsxs)("h4",{className:"cursor-pointer",onClick:function(){return l({show:!0,modalType:1,identifiers:{folderId:"",cardID:""}})},children:[(0,t.jsx)("span",{className:"font-semibold text-2xl",children:"+"}),"New Folder"]})]}),(0,t.jsx)("hr",{className:"mb-12 ht-4 bg-black"}),Object.entries(a).map((function(s){var r=(0,o.Z)(s,2),n=r[0],a=r[1];return(0,t.jsxs)("div",{className:"flex flex-col my-8",children:[(0,t.jsxs)("div",{className:"flex justify-between items-cecter",children:[(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)(d.FYx,{size:"2em"}),(0,t.jsx)("h3",{className:"font-semibold",children:a.title})]}),(0,t.jsxs)("div",{className:"flex gap-4 items-center",children:[(0,t.jsx)(i.vpV,{className:"cursor-pointer",size:"1.5em",onClick:function(){l({show:!0,modalType:4,identifiers:{folderId:n,cardID:""}})}}),(0,t.jsx)(c.BFV,{size:"1.5em",onClick:function(){m(n)}}),(0,t.jsx)("h4",{className:"cursor-pointer",onClick:function(){l({show:!0,modalType:2,identifiers:{folderId:n,cardID:""}})},children:"+ New playground"})]})]}),(0,t.jsx)("hr",{className:"mb-12 ht-4 bg-black"}),(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:Object.entries(a.playgrounds).map((function(s){var r=(0,o.Z)(s,2),a=r[0],d=r[1];return(0,t.jsx)(u,{children:(0,t.jsxs)("div",{className:"flex items-center justify-between",onClick:function(l){l.stopPropagation(),e("/code/".concat(n,"/").concat(a))},children:[(0,t.jsxs)("div",{className:"flex gap-4",children:[(0,t.jsx)("img",{src:"/logo-small.png",alt:"logo"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{children:d.title}),(0,t.jsxs)("h4",{children:["language: ",d.language]})]})]}),(0,t.jsxs)("div",{className:"flex gap-4 items-center",onClick:function(e){e.stopPropagation()},children:[(0,t.jsx)(i.vpV,{size:"1.5em",className:"cursor-pointer",onClick:function(){return l({show:!0,modalType:5,identifiers:{folderId:n,cardID:a}})}}),(0,t.jsx)(c.BFV,{size:"1.5em",className:"cursor-pointer",onClick:function(){return h(n,a)}})]})]})},a)}))})]})}))]})},h=s(9674),p=function(){var e=(0,r.useContext)(n.t).isOpenModal;return(0,t.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2",children:[(0,t.jsx)("div",{className:"sm:w-full md:w-full w-5/12",children:(0,t.jsx)(a,{})}),(0,t.jsx)("div",{className:"sm:w-full md:w-full w-7/12",children:(0,t.jsx)(m,{})}),e.show&&(0,t.jsx)(h.Z,{})]})}}}]);
//# sourceMappingURL=757.3a335723.chunk.js.map