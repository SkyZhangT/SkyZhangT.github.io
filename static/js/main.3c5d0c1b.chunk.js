(this.webpackJsonphomepage=this.webpackJsonphomepage||[]).push([[0],{120:function(e,t,a){},121:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(11),r=a.n(i),s=(a(120),a(43)),o=a(12),l=(a(121),a(10)),j=a(195),b=a(196),d=a(197),u=a(183),O=a(63),h=a(94),x=a.n(h),m=a(95),g=a.n(m),p=a(92),f=a.n(p),v=a(96),k=a.n(v),N=a(185),C=a(187),S=a(206),y=a(189),w=a(190),T=a(207),D=a(188),F=a(105),M=a(192),P=a(35),I=a(193),L=a(73),B=a(194),A=a(91),E=a.n(A),z=a(90),H=a.n(z),W="http://66.75.241.198:8080",G=a(93),R=a.n(G),U=a(2),J=Object(u.a)((function(e){return{card:{height:"100%"},media:{paddingTop:"77.25%",position:"relative",height:"100%",objectFit:"fill",justifyContent:"center",alignItems:"center"},navbeforebutton:{position:"absolute",background:"transparent",color:"black",top:"0",left:"0",minHeight:"100%",minWidth:"10%"},navnextbutton:{position:"absolute",background:"transparent",color:"black",top:"0",right:"0",minHeight:"100%",minWidth:"10%"},imageClick:{position:"absolute",background:"transparent",top:"30%",right:"30%",minHeight:"40%",minWidth:"40%"},radioGroup:{justifyContent:"center"},comment:{marginLeft:"auto"},avatar:{backgroundColor:O.a[500]}}})),V=function(e){var t=J(),a=c.a.useState(0),n=Object(l.a)(a,2),i=n[0],r=n[1],s=c.a.useState(null),o=Object(l.a)(s,2),j=o[0],b=o[1],d=new Date(e.data.time),u=e.data.images.length,O="";e.data.user.split(" ").forEach((function(e){O+=e.charAt(0)}));var h=function(){r(i+1===u?0:i+1)},m=function(){r(0===i?u-1:i-1)},p=function(e){r(parseInt(e.target.value))},v=function(){b(null)};return Object(U.jsxs)(y.a,{raised:!1,children:[Object(U.jsx)(w.a,{avatar:Object(U.jsx)(T.a,{"aria-label":"avatar",className:t.avatar,children:O}),action:Object(U.jsxs)("div",{children:[Object(U.jsx)(D.a,{"aria-label":"settings",onClick:function(e){b(e.currentTarget)},children:Object(U.jsx)(f.a,{})}),Object(U.jsx)(F.a,{id:"simple-menu",anchorEl:j,keepMounted:!0,open:Boolean(j),onClose:v,children:Object(U.jsxs)(M.a,{onClick:v,children:[Object(U.jsx)(R.a,{}),Object(U.jsx)(P.a,{children:"Delete"})]})})]}),title:"".concat(e.data.title," @ ").concat(e.data.location),subheader:d.toString()}),Object(U.jsxs)(I.a,{className:t.media,image:"".concat(W).concat(e.data.images[i]),component:"iframeM",children:[e.data.images.length>1?Object(U.jsxs)(c.a.Fragment,{children:[Object(U.jsx)(N.a,{className:t.navbeforebutton,onClick:m,children:Object(U.jsx)(H.a,{fontSize:"large"})}),Object(U.jsx)(N.a,{className:t.navnextbutton,onClick:h,children:Object(U.jsx)(E.a,{fontSize:"large"})})]}):void 0,Object(U.jsx)(L.a,{onClick:function(t){window.open("".concat(W).concat(e.data.images[i]),"_blank")},className:t.imageClick,elevation:0})]}),e.data.images.length>1?Object(U.jsx)(C.a,{disableSpacing:!0,className:t.radioGroup,children:e.data.images.map((function(e,t){return Object(U.jsx)(S.a,{checked:i===t,onChange:p,name:"radio-button",size:"small",value:t},t)}))}):void 0,Object(U.jsx)(B.a,{children:Object(U.jsx)(P.a,{variant:"body2",color:"textPrimary",component:"p",children:e.data.text})}),Object(U.jsxs)(C.a,{disableSpacing:!0,children:[Object(U.jsx)(D.a,{"aria-label":"favorites",children:Object(U.jsx)(x.a,{})}),Object(U.jsx)(D.a,{"aria-label":"share",children:Object(U.jsx)(g.a,{})}),Object(U.jsx)(D.a,{className:t.comment,"aria-label":"comment",children:Object(U.jsx)(k.a,{})})]})]})},Y=a(97),Z=a.n(Y),_=a(50),q=a.n(_),K=Object(u.a)((function(e){return{root:{backgroundColor:e.palette.background.paper,position:"relative",minHeight:200},fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)},card:{paddingTop:e.spacing(.5)}}})),Q=function(e){var t=K(),a=Object(n.useState)(0),c=Object(l.a)(a,2),i=c[0],r=c[1],o=function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),c=a[0],i=a[1],r=Object(n.useState)(!0),s=Object(l.a)(r,2),o=s[0],j=s[1],b=Object(n.useState)(!1),d=Object(l.a)(b,2),u=d[0],O=d[1],h=Object(n.useState)(!0),x=Object(l.a)(h,2),m=x[0],g=x[1];return Object(n.useEffect)((function(){j(!0),O(!1),console.log(e),q()({method:"GET",url:W+"/post",params:{page:e},cancelToken:new q.a.CancelToken((function(e){return e}))}).then((function(e){i((function(t){return t.concat(e.data)})),g(e.data.length>0),j(!1)})).catch((function(e){q.a.isCancel(e)||(console.log(e),j(!1),O(!0))}))}),[e]),{loading:o,error:u,posts:c,hasMore:m}}(i),u=o.posts,O=o.loading,h=(o.error,o.hasMore),x=Object(n.useRef)(),m=Object(n.useCallback)((function(e){O||(x.current&&x.current.disconnect(),x.current=new IntersectionObserver((function(e){e[0].isIntersecting&&h&&r(i+1)})),e&&x.current.observe(e))}),[O,h]);return Object(U.jsxs)("div",{className:t.root,children:[Object(U.jsxs)(b.a,{container:!0,spacing:1,children:[Object(U.jsx)(b.a,{item:!0,lg:3}),Object(U.jsxs)(b.a,{item:!0,xs:12,lg:6,children:[Object(U.jsx)("div",{children:u.map((function(e,a){return u.length===a+1?Object(U.jsx)("div",{className:t.card,ref:m,children:Object(U.jsx)(V,{data:e})},e.id):Object(U.jsx)("div",{className:t.card,children:Object(U.jsx)(V,{data:e})},e.id)}))}),function(){if(O)return Object(U.jsx)("div",{children:Object(U.jsx)(j.a,{})})}()]}),Object(U.jsx)(b.a,{item:!0,lg:3})]}),Object(U.jsx)(s.b,{to:"/newpost",style:{textDecoration:"none"},children:Object(U.jsx)(d.a,{color:"primary",className:t.fab,"aria-label":"add",children:Object(U.jsx)(Z.a,{})})})]})},X=function(e){return Object(U.jsx)("main",{children:Object(U.jsx)(P.a,{variant:"h1",children:"This is about"})})},$=a(72),ee=a.n($),te=a(98),ae=a(99),ne=a(204),ce=function(){var e=new Date,t=e.getUTCDate().toString(),a=(e.getUTCMonth()+1).toString(),n=e.getUTCFullYear().toString();return t.length<2&&(t="0"+t),a.length<2&&(a="0"+a),n+"-"+a+"-"+t},ie=function(e,t,a,n,c){return new Promise((function(i,r){q()({url:W+e,method:t,data:c,headers:{"Content-Type":n,Authorization:a}}).then((function(e){console.log(e),i(e)})).catch((function(e){console.log(e),r(e)}))}))},re=a(198),se=a(199);var oe=function(e){var t=e.onClose,a=e.open,n=e.Notification;return Object(U.jsx)(re.a,{onClose:function(){t()},"aria-labelledby":"simple-dialog-title",open:a,children:Object(U.jsx)(se.a,{id:"simple-dialog-title",children:n})})},le=a(100),je=a(200),be=a(205);var de=function(e){var t="primary";return e.status<0&&(t="secondary"),Object(U.jsxs)(be.a,{display:"flex",alignItems:"center",children:[Object(U.jsx)(be.a,{width:"100%",mr:1,children:Object(U.jsx)(je.a,Object(le.a)({color:t,variant:"determinate"},e))}),Object(U.jsx)(be.a,{minWidth:35,children:Object(U.jsx)(P.a,{variant:"body2",color:"textSecondary",children:0===e.status?"".concat(Math.round(e.value),"%"):1===e.status?"Finished":-1===e.status?"Error":"Ready"})})]})},ue=a(102),Oe=a.n(ue),he=a(101),xe=a.n(he),me=Object(u.a)((function(e){return{root:{position:"relative",minHeight:"200px",padding:"1rem"},line:{paddingTop:e.spacing(1)},title:{width:"30%",spacing:e.spacing(1)},location:{width:"30%",marginLeft:"2.5%"},date:{width:"30%",marginLeft:"2.5%"},description:{width:"95%"},image:{maxWidth:"95%"},input:{display:"none"},imageButton:{backgroundColor:"black",color:"gray"},publishButton:{backgroundColor:"inherit",color:"orange"}}})),ge=function(e){var t=me(),a=Object(n.useState)([]),c=Object(l.a)(a,2),i=c[0],r=c[1],s=Object(n.useState)([]),o=Object(l.a)(s,2),d=o[0],u=o[1],O=Object(n.useState)(""),h=Object(l.a)(O,2),x=h[0],m=h[1],g=Object(n.useState)(""),p=Object(l.a)(g,2),f=p[0],v=p[1],k=Object(n.useState)(""),C=Object(l.a)(k,2),S=C[0],y=C[1],w=Object(n.useState)(Date.now()),T=Object(l.a)(w,2),F=T[0],M=T[1],I=Object(n.useState)(""),B=Object(l.a)(I,2),A=B[0],E=B[1],z=Object(n.useState)(!0),H=Object(l.a)(z,2),W=H[0],G=H[1],R=Object(n.useState)(!0),J=Object(l.a)(R,2),V=J[0],Y=J[1],Z=Object(n.useState)(!0),_=Object(l.a)(Z,2),q=_[0],K=_[1],Q=Object(n.useState)(!1),X=Object(l.a)(Q,2),$=X[0],re=X[1],se=Object(n.useState)(!0),le=Object(l.a)(se,2),je=le[0],be=le[1],ue=Object(n.useState)(!1),he=Object(l.a)(ue,2),ge=he[0],pe=he[1],fe=Object(n.useState)(!1),ve=Object(l.a)(fe,2),ke=ve[0],Ne=ve[1],Ce=Object(n.useState)(0),Se=Object(l.a)(Ce,2),ye=Se[0],we=Se[1],Te=Object(n.useState)(2),De=Object(l.a)(Te,2),Fe=De[0],Me=De[1],Pe=function(e){return function(){i.splice(e,1),r(i.concat([])),d.splice(e,1),u(d.concat([]))}},Ie=function(){var e=Object(te.a)(ee.a.mark((function e(t){var a,n,c,i,r;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(W||V||$||q||0===d.length)){e.next=3;break}return Ne(!0),e.abrupt("return");case 3:we(0),Me(0),a=d.length+1,n=[],c=0;case 8:if(!(c<d.length)){e.next=31;break}return(i=new FormData).append("image",d[c]),e.prev=11,e.next=14,ie("/image","post",A,"multipart/form-data",i);case 14:if(200!==(r=e.sent).status&&208!==r.status){e.next=20;break}n.push(r.data),we(100*(c+1)/a),e.next=22;break;case 20:return Me(-1),e.abrupt("return");case 22:e.next=28;break;case 24:return e.prev=24,e.t0=e.catch(11),Me(-1),e.abrupt("return");case 28:c++,e.next=8;break;case 31:return e.prev=31,e.next=34,ie("/post","post",A,"application/json",{user:"Sky Zhang",title:x,location:S,time:F,text:f,images:n});case 34:if(200!==e.sent.status){e.next=40;break}we(100),Me(1),e.next=42;break;case 40:return Me(-1),e.abrupt("return");case 42:e.next=48;break;case 44:return e.prev=44,e.t1=e.catch(31),Me(-1),e.abrupt("return");case 48:case"end":return e.stop()}}),e,null,[[11,24],[31,44]])})));return function(t){return e.apply(this,arguments)}}();return Object(U.jsx)("div",{children:Object(U.jsxs)(b.a,{container:!0,spacing:1,children:[Object(U.jsx)(b.a,{item:!0,lg:3}),Object(U.jsx)(b.a,{item:!0,xs:12,lg:6,children:Object(U.jsxs)(L.a,{className:t.root,children:[Object(U.jsxs)("div",{className:t.line,children:[Object(U.jsx)(ne.a,{id:"title",label:"Title",type:"text",error:W,className:t.title,onChange:function(e){m(e.target.value),e.target.value.length>0?G(!1):G(!0)}}),Object(U.jsx)(ne.a,{id:"location",label:"Location",type:"text",error:W,className:t.location,onChange:function(e){y(e.target.value),e.target.value.length>0?K(!1):K(!0)}}),Object(U.jsx)(ne.a,{id:"date",label:"Date",type:"date",error:$,defaultValue:ce(),className:t.date,InputLabelProps:{shrink:!0},onChange:function(e){var t=e.target.value.split("-"),a=new Date(t[0],t[1]-1,t[2]);null==a.getTime()||a.getTime()>Date.now()?re(!0):(re(!1),M(a.getTime()))}})]}),Object(U.jsx)("div",{className:t.line,children:Object(U.jsx)(ne.a,{id:"text",label:"Description",type:"text",error:V,rows:4,rowsMax:4,multiline:!0,className:t.description,onChange:function(e){v(e.target.value),e.target.value.length>0?Y(!1):Y(!0)}})}),i.map((function(e,a){return Object(U.jsx)("div",{className:t.line,children:Object(U.jsx)("img",{src:e,className:t.image,onClick:Pe(a),alt:"Failed to load"})},"img"+a.toString())})),function(){if(ge)return Object(U.jsx)("div",{className:t.line,children:Object(U.jsx)(j.a,{})})}(),Object(U.jsxs)("div",{className:t.line,children:[Object(U.jsx)("input",{accept:"image/*",className:t.input,id:"image",multiple:!0,type:"file",onChange:function(e){pe(!0);var t,a=[],n=new FileReader,c=Object(ae.a)(e.target.files);try{for(c.s();!(t=c.n()).done;){var s=t.value;d.push(s)}}catch(o){c.e(o)}finally{c.f()}!function t(c){var s=e.target.files[c];if(c>=e.target.files.length)return r(i.concat(a)),void pe(!1);n.onload=function(e){a=a.concat(n.result),t(c+1)},n.readAsDataURL(s)}(0)}}),Object(U.jsx)("label",{htmlFor:"image",children:Object(U.jsx)(D.a,{component:"span",className:t.imageButton,variant:"outlined",children:Object(U.jsx)(xe.a,{})})})]}),Object(U.jsx)("div",{className:t.line,children:Object(U.jsx)(ne.a,{id:"token",label:"Pass Token",type:"text",error:je,className:t.title,onChange:function(e){E(e.target.value),e.target.value.length>0?be(!1):be(!0)}})}),Object(U.jsx)("div",{className:t.line,children:Object(U.jsxs)(N.a,{className:t.publishButton,variant:"outlined",onClick:Ie,disabled:0===Fe,children:[Object(U.jsx)(Oe.a,{}),Object(U.jsx)(P.a,{children:"Publish"})]})}),Object(U.jsx)("div",{className:t.line,children:Object(U.jsx)(de,{variant:"determinate",status:Fe,value:ye})}),Object(U.jsx)(oe,{open:ke,onClose:function(){Ne(!1)},Notification:"Invalid Post"})]})}),Object(U.jsx)(b.a,{item:!0,lg:3})]})})},pe=a(202),fe=a(203),ve=a(103),ke=a.n(ve),Ne=a(104),Ce=a.n(Ne),Se=a(61),ye=a(208),we=a(191),Te=a(151),De=a(201),Fe=Object(u.a)((function(e){return{drawer:Object(Se.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),drawerPaper:{width:240}}})),Me=function(e){var t=Fe();return Object(U.jsx)("nav",{className:t.drawer,"aria-label":"mailbox folders",children:Object(U.jsx)(ye.a,{variant:"temporary",anchor:"left",open:e.open,onClose:e.Toggle,classes:{paper:t.drawerPaper},ModalProps:{keepMounted:!0},children:Object(U.jsxs)("div",{children:[Object(U.jsx)("div",{className:t.toolbar}),Object(U.jsx)(we.a,{children:["May","April","March","Feburary"].map((function(e,t){return Object(U.jsx)(Te.a,{button:!0,children:Object(U.jsx)(De.a,{primary:e})},e)}))})]})})})},Pe=Object(u.a)((function(e){return{root:{display:"flex"},link:{position:"relative",top:"1em",background:"white"},button:{margin:e.spacing(1),color:"inherit"}}})),Ie=function(e){var t=Pe(),a=c.a.useState(!1),n=Object(l.a)(a,2),i=n[0],r=n[1],j=function(){r(!i)};return Object(U.jsxs)("div",{children:[Object(U.jsx)(pe.a,{className:t.root,children:Object(U.jsx)(fe.a,{children:Object(U.jsxs)(b.a,{container:!0,spacing:2,children:[Object(U.jsx)(b.a,{item:!0,xs:2,md:1,children:Object(U.jsx)(o.a,{exact:!0,path:"/",children:Object(U.jsx)(D.a,{"aria-label":"dates",edge:"end",className:t.button,onClick:j,children:Object(U.jsx)(ke.a,{})})})}),Object(U.jsx)(b.a,{item:!0,xs:3,md:2,lg:1,children:Object(U.jsx)(s.b,{to:"/",style:{textDecoration:"none"},children:Object(U.jsx)(N.a,{className:t.link,children:"Gallery"})})}),Object(U.jsx)(b.a,{item:!0,xs:3,md:2,lg:1,children:Object(U.jsx)(s.b,{to:"/about",style:{textDecoration:"none"},children:Object(U.jsx)(N.a,{className:t.link,children:"About"})})}),Object(U.jsx)(b.a,{item:!0,xs:2,md:6,lg:8}),Object(U.jsx)(b.a,{item:!0,xs:2,md:1,children:Object(U.jsx)(D.a,{"aria-label":"login",edge:"end",className:t.button,children:Object(U.jsx)(Ce.a,{size:"medium"})})})]})})}),Object(U.jsx)(fe.a,{}),Object(U.jsx)(o.a,{exact:!0,path:"/",children:Object(U.jsx)(Me,{open:i,Toggle:j})})]})};var Le=function(){return Object(U.jsx)(s.a,{children:Object(U.jsxs)("div",{className:"App",children:[Object(U.jsx)(Ie,{}),Object(U.jsxs)(o.c,{children:[Object(U.jsx)(o.a,{exact:!0,path:"/",component:Q}),Object(U.jsx)(o.a,{exact:!0,path:"/about",component:X}),Object(U.jsx)(o.a,{exact:!0,path:"/newpost",component:ge})]})]})})},Be=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,210)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))};r.a.render(Object(U.jsx)(c.a.StrictMode,{children:Object(U.jsx)(Le,{})}),document.getElementById("root")),Be()}},[[148,1,2]]]);
//# sourceMappingURL=main.3c5d0c1b.chunk.js.map