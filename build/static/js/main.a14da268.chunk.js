(this.webpackJsonphomepage=this.webpackJsonphomepage||[]).push([[0],{82:function(e,a,t){},83:function(e,a,t){},91:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),i=t(9),s=t.n(i),r=(t(82),t(30)),o=t(29),j=t(8),l=(t(83),t(132)),b=t(121),d=t(39),x=(t(4),t(125)),h=t(126),O=t(128),m=t(130),p=t(131),u=t(140),g=t(127),f=t(27),v=t(49),w=t(69),k=t.n(w),N=t(70),y=t.n(N),S=t(66),C=t.n(S),T=t(71),M=t.n(T),_=t(123),F=t(129),P=t(68),z=t.n(P),A=t(67),D=t.n(A),H=t(2),J=Object(b.a)((function(e){return{card:{borderSpacing:"20px"},media:{paddingTop:"60.25%",position:"relative"},comment:{marginLeft:"auto"},avatar:{backgroundColor:v.a[500]},icon_row:{position:"absolute",top:"0",left:"0",minHeight:"100%"},row_cell:{position:"relative"},navbutton:{position:"absolute",background:"transparent",left:"0",right:"0",color:"black",minHeight:"100%",minWidth:"100%"}}})),L=function(e){var a=J(),t=n.a.useState(0),c=Object(d.a)(t,2),i=c[0],s=c[1],r=e.data.image.length;return Object(H.jsxs)(_.a,{container:!0,spacing:1,children:[Object(H.jsx)(_.a,{item:!0,xs:0,lg:3}),Object(H.jsx)(_.a,{item:!0,xs:12,lg:6,children:Object(H.jsxs)(x.a,{className:a.card,raised:!1,children:[Object(H.jsx)(h.a,{avatar:Object(H.jsx)(u.a,{"aria-label":"recipe",className:a.avatar,children:e.data.username}),action:Object(H.jsx)(g.a,{"aria-label":"settings",children:Object(H.jsx)(C.a,{})}),title:e.data.title,subheader:e.data.date}),Object(H.jsx)(O.a,{className:a.media,image:e.data.image[i],title:e.data.imagetitle,children:Object(H.jsxs)(_.a,{container:!0,spacing:1,className:a.icon_row,children:[Object(H.jsx)(_.a,{xs:2,className:a.row_cell,children:Object(H.jsx)(F.a,{className:a.navbutton,onClick:function(){s(0==i?r-1:i-1)},children:Object(H.jsx)(D.a,{fontSize:"large"})})}),Object(H.jsx)(_.a,{xs:8}),Object(H.jsx)(_.a,{xs:2,className:a.row_cell,children:Object(H.jsx)(F.a,{className:a.navbutton,onClick:function(){s(i+1==r?0:i+1)},children:Object(H.jsx)(z.a,{fontSize:"large"})})})]})}),Object(H.jsx)(m.a,{children:Object(H.jsx)(f.a,{variant:"body2",color:"textSecondary",component:"p",children:e.data.text})}),Object(H.jsxs)(p.a,{disableSpacing:!0,children:[Object(H.jsx)(g.a,{"aria-label":"favorites",children:Object(H.jsx)(k.a,{})}),Object(H.jsx)(g.a,{"aria-label":"share",children:Object(H.jsx)(y.a,{})}),Object(H.jsx)(g.a,{className:a.comment,"aria-label":"comment",children:Object(H.jsx)(M.a,{})})]})]})}),Object(H.jsx)(_.a,{item:!0,xs:0,lg:2})]})},B=t.p+"static/media/pic1.2fb818a5.jpg",I=t.p+"static/media/pic2.959e5312.jpg",E=t(72),G=t.n(E),W={_id:"5264651",username:"SZ",title:"OMS",date:"2020 Jan 1",image:[I,B],text:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."},Z=Object(b.a)((function(e){return{root:{backgroundColor:e.palette.background.paper,position:"relative",minHeight:200},fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}})),q=function(e){var a=Z();return Object(H.jsxs)("div",{className:a.root,children:[Object(H.jsx)(L,{data:W}),Object(H.jsx)(L,{data:W}),Object(H.jsx)(o.b,{to:"/newpost",style:{textDecoration:"none"},children:Object(H.jsx)(l.a,{color:"primary",className:a.fab,"aria-label":"add",children:Object(H.jsx)(G.a,{})})})]})},K=function(e){return Object(H.jsx)("main",{children:Object(H.jsx)(f.a,{variant:"h1",children:"This is about"})})},Q=function(e){return Object(H.jsx)("main",{children:Object(H.jsx)(f.a,{variant:"h1",children:"This is newpost"})})},R=t(136),U=t(137),V=t(73),X=t.n(V),Y=t(74),$=t.n(Y),ee=t(138),ae=t(133),te=t(134),ce=t(135),ne=Object(b.a)((function(e){return{drawer:Object(r.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),drawerPaper:{width:240}}})),ie=function(e){var a=ne();return Object(H.jsx)("nav",{className:a.drawer,"aria-label":"mailbox folders",children:Object(H.jsx)(ee.a,{variant:"temporary",anchor:"left",open:e.open,onClose:e.Toggle,classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0},children:Object(H.jsxs)("div",{children:[Object(H.jsx)("div",{className:a.toolbar}),Object(H.jsx)(ae.a,{children:["May","April","March","Feburary"].map((function(e,a){return Object(H.jsx)(te.a,{button:!0,children:Object(H.jsx)(ce.a,{primary:e})},e)}))})]})})})},se=Object(b.a)((function(e){return{root:{display:"flex"},link:{position:"relative",top:"1em",background:"white"},button:{margin:e.spacing(1),color:"inherit"}}})),re=function(e){var a=se(),t=n.a.useState(!1),c=Object(d.a)(t,2),i=c[0],s=c[1],r=n.a.useState(0),l=Object(d.a)(r,2),b=(l[0],l[1],function(){s(!i)});return console.log(window.location.pathname),Object(H.jsxs)("div",{children:[Object(H.jsx)(R.a,{className:a.root,children:Object(H.jsx)(U.a,{children:Object(H.jsxs)(_.a,{container:!0,spacing:2,children:[Object(H.jsx)(_.a,{item:!0,xs:2,md:1,children:Object(H.jsx)(j.a,{exact:!0,path:"/",children:Object(H.jsx)(g.a,{"aria-label":"dates",edge:"end",className:a.button,onClick:b,children:Object(H.jsx)(X.a,{})})})}),Object(H.jsx)(_.a,{item:!0,xs:3,md:2,lg:1,children:Object(H.jsx)(o.b,{to:"/",style:{textDecoration:"none"},children:Object(H.jsx)(F.a,{className:a.link,children:"Gallery"})})}),Object(H.jsx)(_.a,{item:!0,xs:3,md:2,lg:1,children:Object(H.jsx)(o.b,{to:"/about",style:{textDecoration:"none"},children:Object(H.jsx)(F.a,{className:a.link,children:"About"})})}),Object(H.jsx)(_.a,{item:!0,xs:2,md:6,lg:8}),Object(H.jsx)(_.a,{item:!0,xs:2,md:1,children:Object(H.jsx)(g.a,{"aria-label":"login",edge:"end",className:a.button,children:Object(H.jsx)($.a,{size:"medium"})})})]})})}),Object(H.jsx)(U.a,{}),Object(H.jsx)(j.a,{exact:!0,path:"/",children:Object(H.jsx)(ie,{open:i,Toggle:b})})]})};var oe=function(){var e,a;return Object(H.jsx)(o.a,{children:Object(H.jsxs)("div",{className:"App",children:[Object(H.jsx)(re,{}),Object(H.jsxs)(j.c,{children:[Object(H.jsx)(j.a,(e={exact:!0,path:"/"},Object(r.a)(e,"exact",!0),Object(r.a)(e,"component",q),e)),Object(H.jsx)(j.a,(a={exact:!0,path:"/about"},Object(r.a)(a,"exact",!0),Object(r.a)(a,"component",K),a)),Object(H.jsx)(j.a,{path:"/newpost",exact:!0,component:Q})]})]})})},je=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,141)).then((function(a){var t=a.getCLS,c=a.getFID,n=a.getFCP,i=a.getLCP,s=a.getTTFB;t(e),c(e),n(e),i(e),s(e)}))};s.a.render(Object(H.jsx)(n.a.StrictMode,{children:Object(H.jsx)(oe,{})}),document.getElementById("root")),je()}},[[91,1,2]]]);
//# sourceMappingURL=main.a14da268.chunk.js.map