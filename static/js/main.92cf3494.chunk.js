(this.webpackJsonphomepage=this.webpackJsonphomepage||[]).push([[0],{108:function(e,t,a){},109:function(e,t,a){},135:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(10),s=a.n(c),l=(a(108),a(38)),r=a(11),o=(a(109),a(185)),j=a(186),d=a(174),b=a(14),u=a(179),h=a(180),x=a(182),m=a(183),g=a(184),O=a(196),p=a(181),f=a(30),v=a(57),N=a(87),k=a.n(N),y=a(88),S=a.n(y),w=a(86),C=a.n(w),T=a(89),D=a.n(T),F=a(177),P=a(85),M=a.n(P),A=a(84),B=a.n(A),L=a(2),H=Object(d.a)((function(e){return{root:{paddingTop:e.spacing(.5)},card:{height:"100%"},media:{paddingTop:"80.25%",position:"relative",minHeight:"100%",minWidth:"100%"},navbeforebutton:{position:"absolute",background:"transparent",color:"black",top:"0",left:"0",minHeight:"100%",minWidth:"10%"},navnextbutton:{position:"absolute",background:"transparent",color:"black",top:"0",right:"0",minHeight:"100%",minWidth:"10%"},comment:{marginLeft:"auto"},avatar:{backgroundColor:v.a[500]}}})),z=function(e){var t=H(),a=i.a.useState(0),n=Object(b.a)(a,2),c=n[0],s=n[1],l=e.data.image.length,r=function(){s(c+1===l?0:c+1)},o=function(){s(0===c?l-1:c-1)};return Object(L.jsx)("div",{className:t.root,children:Object(L.jsxs)(u.a,{raised:!1,children:[Object(L.jsx)(h.a,{avatar:Object(L.jsx)(O.a,{"aria-label":"recipe",className:t.avatar,children:e.data.username}),action:Object(L.jsx)(p.a,{"aria-label":"settings",children:Object(L.jsx)(C.a,{})}),title:e.data.title,subheader:e.data.date}),Object(L.jsx)(x.a,{className:t.media,image:e.data.image[c],title:e.data.imagetitle,children:(console.log(e.data.image.length),e.data.image.length>1?Object(L.jsxs)(i.a.Fragment,{children:[Object(L.jsx)(F.a,{className:t.navbeforebutton,onClick:o,children:Object(L.jsx)(B.a,{fontSize:"large"})}),Object(L.jsx)(F.a,{className:t.navnextbutton,onClick:r,children:Object(L.jsx)(M.a,{fontSize:"large"})})]}):void 0)}),Object(L.jsx)(m.a,{children:Object(L.jsx)(f.a,{variant:"body2",color:"textSecondary",component:"p",children:e.data.text})}),Object(L.jsxs)(g.a,{disableSpacing:!0,children:[Object(L.jsx)(p.a,{"aria-label":"favorites",children:Object(L.jsx)(k.a,{})}),Object(L.jsx)(p.a,{"aria-label":"share",children:Object(L.jsx)(S.a,{})}),Object(L.jsx)(p.a,{className:t.comment,"aria-label":"comment",children:Object(L.jsx)(D.a,{})})]})]})})},I=(a.p,a.p+"static/media/pic2.959e5312.jpg"),U=a(90),W=a.n(U),J={_id:"5264651",username:"SZ",title:"OMS",date:"2020 Jan 1",image:[I],text:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."},R=Object(d.a)((function(e){return{root:{backgroundColor:e.palette.background.paper,position:"relative",minHeight:200},fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}})),E=function(e){var t=R();return Object(L.jsxs)("div",{className:t.root,children:[Object(L.jsxs)(o.a,{container:!0,spacing:1,children:[Object(L.jsx)(o.a,{item:!0,lg:3}),Object(L.jsxs)(o.a,{item:!0,xs:12,lg:6,children:[Object(L.jsx)(z,{data:J}),Object(L.jsx)(z,{data:J})]}),Object(L.jsx)(o.a,{item:!0,lg:3})]}),Object(L.jsx)(l.b,{to:"/newpost",style:{textDecoration:"none"},children:Object(L.jsx)(j.a,{color:"primary",className:t.fab,"aria-label":"add",children:Object(L.jsx)(W.a,{})})})]})},G=function(e){return Object(L.jsx)("main",{children:Object(L.jsx)(f.a,{variant:"h1",children:"This is about"})})},K=a(67),V=a(191),Y=a(68),Z=a(195),_=function(){var e=new Date,t=e.getUTCDate().toString(),a=(e.getUTCMonth()+1).toString(),n=e.getUTCFullYear().toString();return t.length<2&&(t="0"+t),a.length<2&&(a="0"+a),n+"-"+a+"-"+t},q=a(187),Q=a(188),X=a(189),$=a(190),ee=Object(d.a)({confirm:{textAlign:"center"}});var te=function(e){var t=ee(),a=e.onClose,n=e.open,i=e.Notification;return Object(L.jsxs)(q.a,{onClose:function(){a()},"aria-labelledby":"simple-dialog-title",open:n,children:[Object(L.jsx)(Q.a,{id:"simple-dialog-title",children:i}),Object(L.jsx)(X.a,{children:Object(L.jsx)($.a,{button:!0,onClick:function(){a()},children:Object(L.jsx)(f.a,{className:t.confirm,children:"OK"})})})]})},ae=a(93),ne=a.n(ae),ie=a(92),ce=a.n(ie),se=a(91),le=a.n(se),re=Object(d.a)((function(e){return{root:{position:"relative",minHeight:"200px",padding:"1rem"},line:{paddingTop:e.spacing(1)},title:{width:"45%",spacing:e.spacing(1)},date:{width:"45%",marginLeft:"5%"},description:{width:"95%"},image:{maxWidth:"95%"},input:{display:"none"},imageButton:{backgroundColor:"black",color:"gray"},publishButton:{backgroundColor:"inherit",color:"orange"}}})),oe=function(e){var t=re(),a=i.a.useState([]),n=Object(b.a)(a,2),c=n[0],s=n[1],l=i.a.useState([]),r=Object(b.a)(l,2),j=r[0],d=r[1],u=i.a.useState(""),h=Object(b.a)(u,2),x=(h[0],h[1]),m=i.a.useState(""),g=Object(b.a)(m,2),O=(g[0],g[1]),v=i.a.useState(Date.now()),N=Object(b.a)(v,2),k=(N[0],N[1]),y=i.a.useState(""),S=Object(b.a)(y,2),w=(S[0],S[1]),C=i.a.useState(!0),T=Object(b.a)(C,2),D=T[0],P=T[1],M=i.a.useState(!0),A=Object(b.a)(M,2),B=A[0],H=A[1],z=i.a.useState(!1),I=Object(b.a)(z,2),U=I[0],W=I[1],J=i.a.useState(!0),R=Object(b.a)(J,2),E=R[0],G=R[1],q=i.a.useState(!1),Q=Object(b.a)(q,2),X=Q[0],$=Q[1],ee=i.a.useState(!1),ae=Object(b.a)(ee,2),ie=ae[0],se=ae[1],oe=function(e){return function(){c.splice(e,1),s(c.concat([])),j.splice(e,1),d(j.concat([]))}};return Object(L.jsx)("div",{children:Object(L.jsxs)(o.a,{container:!0,spacing:1,children:[Object(L.jsx)(o.a,{item:!0,lg:3}),Object(L.jsx)(o.a,{item:!0,xs:12,lg:6,children:Object(L.jsxs)(Y.a,{className:t.root,children:[Object(L.jsxs)("div",{className:t.line,children:[Object(L.jsx)(Z.a,{id:"title",label:"Title",type:"text",error:D,className:t.title,onChange:function(e){x(e.target.value),e.target.value.length>0?P(!1):P(!0)}}),Object(L.jsx)(Z.a,{id:"date",label:"Date",type:"date",error:U,defaultValue:_(),className:t.date,InputLabelProps:{shrink:!0},onChange:function(e){var t=e.target.value.split("-"),a=new Date(t[0],t[1]-1,t[2]);NaN==a.getTime()||a.getTime()>Date.now()?W(!0):(W(!1),console.log(a.getTime()),k(a.getTime()))}})]}),Object(L.jsx)("div",{className:t.line,children:Object(L.jsx)(Z.a,{id:"text",label:"Description",type:"text",error:B,rows:4,rowsMax:4,multiline:!0,className:t.description,onChange:function(e){O(e.target.value),e.target.value.length>0?H(!1):H(!0)}})}),c.map((function(e,a){return Object(L.jsx)("div",{className:t.line,children:Object(L.jsx)("img",{src:e,className:t.image,onClick:oe(a),alt:"Failed to load"})},"img"+a.toString())})),function(){if(X)return Object(L.jsx)("div",{className:t.line,children:Object(L.jsx)(V.a,{})})}(),Object(L.jsxs)("div",{className:t.line,children:[Object(L.jsx)("input",{accept:"image/*",className:t.input,id:"image",multiple:!0,type:"file",onChange:function(e){$(!0);var t,a=[],n=new FileReader,i=Object(K.a)(e.target.files);try{for(i.s();!(t=i.n()).done;){var l=t.value;j.push(l)}}catch(r){i.e(r)}finally{i.f()}!function t(i){var l=e.target.files[i];if(i>=e.target.files.length)return s(c.concat(a)),void $(!1);n.onload=function(e){a=a.concat(n.result),t(i+1)},n.readAsDataURL(l)}(0)}}),Object(L.jsx)("label",{htmlFor:"image",children:Object(L.jsx)(p.a,{component:"span",className:t.imageButton,variant:"outlined",children:Object(L.jsx)(ce.a,{})})})]}),Object(L.jsx)("div",{className:t.line,children:Object(L.jsx)(Z.a,{id:"token",label:"Pass Token",type:"text",error:E,className:t.title,onChange:function(e){w(e.target.value),e.target.value.length>0?G(!1):G(!0)}})}),Object(L.jsx)("div",{className:t.line,children:Object(L.jsxs)(F.a,{className:t.publishButton,variant:"outlined",onClick:function(e){if(D||B||U||0===j.length)se(!0);else{var t,a=Object(K.a)(j);try{for(a.s();!(t=a.n()).done;){var n=t.value,i=new FormData;i.append("image",n),le()({url:"http://localhost:8080/image",method:"post",data:i,headers:{"Content-Type":"multipart/form-data"}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}}catch(c){a.e(c)}finally{a.f()}}},children:[Object(L.jsx)(ne.a,{}),Object(L.jsx)(f.a,{children:"Publish"})]})}),Object(L.jsx)(te,{open:ie,onClose:function(){se(!1)},Notification:"Invalid Post"})]})}),Object(L.jsx)(o.a,{item:!0,lg:3})]})})},je=a(193),de=a(194),be=a(95),ue=a.n(be),he=a(96),xe=a.n(he),me=a(94),ge=a(197),Oe=a(192),pe=Object(d.a)((function(e){return{drawer:Object(me.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),drawerPaper:{width:240}}})),fe=function(e){var t=pe();return Object(L.jsx)("nav",{className:t.drawer,"aria-label":"mailbox folders",children:Object(L.jsx)(ge.a,{variant:"temporary",anchor:"left",open:e.open,onClose:e.Toggle,classes:{paper:t.drawerPaper},ModalProps:{keepMounted:!0},children:Object(L.jsxs)("div",{children:[Object(L.jsx)("div",{className:t.toolbar}),Object(L.jsx)(X.a,{children:["May","April","March","Feburary"].map((function(e,t){return Object(L.jsx)($.a,{button:!0,children:Object(L.jsx)(Oe.a,{primary:e})},e)}))})]})})})},ve=Object(d.a)((function(e){return{root:{display:"flex"},link:{position:"relative",top:"1em",background:"white"},button:{margin:e.spacing(1),color:"inherit"}}})),Ne=function(e){var t=ve(),a=i.a.useState(!1),n=Object(b.a)(a,2),c=n[0],s=n[1],j=function(){s(!c)};return console.log(window.location.pathname),Object(L.jsxs)("div",{children:[Object(L.jsx)(je.a,{className:t.root,children:Object(L.jsx)(de.a,{children:Object(L.jsxs)(o.a,{container:!0,spacing:2,children:[Object(L.jsx)(o.a,{item:!0,xs:2,md:1,children:Object(L.jsx)(r.a,{exact:!0,path:"/",children:Object(L.jsx)(p.a,{"aria-label":"dates",edge:"end",className:t.button,onClick:j,children:Object(L.jsx)(ue.a,{})})})}),Object(L.jsx)(o.a,{item:!0,xs:3,md:2,lg:1,children:Object(L.jsx)(l.b,{to:"/",style:{textDecoration:"none"},children:Object(L.jsx)(F.a,{className:t.link,children:"Gallery"})})}),Object(L.jsx)(o.a,{item:!0,xs:3,md:2,lg:1,children:Object(L.jsx)(l.b,{to:"/about",style:{textDecoration:"none"},children:Object(L.jsx)(F.a,{className:t.link,children:"About"})})}),Object(L.jsx)(o.a,{item:!0,xs:2,md:6,lg:8}),Object(L.jsx)(o.a,{item:!0,xs:2,md:1,children:Object(L.jsx)(p.a,{"aria-label":"login",edge:"end",className:t.button,children:Object(L.jsx)(xe.a,{size:"medium"})})})]})})}),Object(L.jsx)(de.a,{}),Object(L.jsx)(r.a,{exact:!0,path:"/",children:Object(L.jsx)(fe,{open:c,Toggle:j})})]})};var ke=function(){return Object(L.jsx)(l.a,{children:Object(L.jsxs)("div",{className:"App",children:[Object(L.jsx)(Ne,{}),Object(L.jsxs)(r.c,{children:[Object(L.jsx)(r.a,{exact:!0,path:"/",component:E}),Object(L.jsx)(r.a,{exact:!0,path:"/about",component:G}),Object(L.jsx)(r.a,{exact:!0,path:"/newpost",component:oe})]})]})})},ye=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,198)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),c(e),s(e)}))};s.a.render(Object(L.jsx)(i.a.StrictMode,{children:Object(L.jsx)(ke,{})}),document.getElementById("root")),ye()}},[[135,1,2]]]);
//# sourceMappingURL=main.92cf3494.chunk.js.map