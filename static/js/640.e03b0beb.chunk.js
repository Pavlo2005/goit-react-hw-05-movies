"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[640],{1687:function(n,t,e){e.d(t,{BG:function(){return s},FE:function(){return f},QR:function(){return p},b4:function(){return l},vw:function(){return u}});var r=e(5861),a=e(7757),c=e.n(a),i=e(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="bad3f777e7df0ee5e923cebd13a08cda",u=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/movie/day?api_key=".concat(o));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/credits?api_key=").concat(o),{signal:e.signal});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(o),{signal:e.signal});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1&api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},7652:function(n,t,e){e.d(t,{h:function(){return i}});var r=e(8185),a=e(1087),c=e(184),i=function(n){var t=n.to,e=void 0===t?"/":t,i=n.children;return(0,c.jsxs)(a.rU,{to:e,children:[(0,c.jsx)(r.And,{}),i]})}},6491:function(n,t,e){e.d(t,{B:function(){return c}});var r,a=e(168),c=e(5867).ZP.b(r||(r=(0,a.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.error}))},3174:function(n,t,e){e.d(t,{O:function(){return f}});var r,a,c=e(168),i=e(5867),o=i.ZP.ul(r||(r=(0,c.Z)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  gap: ",";\n"])),(function(n){return n.theme.spacing(2)})),u=i.ZP.li(a||(a=(0,c.Z)(["\n  flex-basis: calc(100%);\n"]))),s=e(7689),p=e(1087),l=e(184),f=function(n){var t=n.items,e=(0,s.TH)();return(0,l.jsx)(o,{children:t.map((function(n){return(0,l.jsx)(u,{children:(0,l.jsxs)(p.rU,{to:"/movies/".concat(n.id),state:{from:e},children:[(0,l.jsx)("img",{src:"https://www.themoviedb.org/t/p/w220_and_h330_face".concat(n.backdrop_path),alt:"backdrop_path",height:150,width:100}),(0,l.jsx)("p",{children:n.title})]})},n.id)}))})}},2640:function(n,t,e){e.r(t),e.d(t,{default:function(){return E}});var r,a,c,i,o=e(5861),u=e(9439),s=e(7757),p=e.n(s),l=e(2791),f=e(7689),h=e(1087),d=e(3430),v=e(5705),x=e(6727),m=e(168),g=e(5867),Z=(0,g.ZP)(v.l0)(r||(r=(0,m.Z)(["\n  position: relative;\n  display: flex;\n  align-items: end;\n  gap: ",";\n  max-width: 500px;\n"])),(function(n){return n.theme.spacing(1)})),w=g.ZP.label(a||(a=(0,m.Z)(["\n  width: 400px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n  padding-bottom: 12px;\n"])),(function(n){return n.theme.spacing(1)})),b=g.ZP.button(c||(c=(0,m.Z)(["\n  position: absolute;\n  top: ",";\n  right: ",";\n  width: 80px;\n  height: 28px;\n"])),(function(n){return n.theme.spacing(5)}),(function(n){return n.theme.spacing(5)})),k=(0,g.ZP)(v.Bc)(i||(i=(0,m.Z)(["\n  position: absolute;\n  bottom: -4px;\n  color: ",";\n  font-size: 12px;\n"])),(function(n){return n.theme.colors.error})),y=e(184),j=x.Ry().shape({serch:x.Z_()}),_=function(n){var t=n.onChangeSearch;return(0,y.jsx)(v.J9,{initialValues:{serch:""},validationSchema:j,onSubmit:function(n,e){t(n.serch)},children:(0,y.jsxs)(Z,{children:[(0,y.jsxs)(w,{children:["Serch",(0,y.jsx)(v.gN,{name:"serch"}),(0,y.jsx)(k,{name:"serch",component:"div"})]}),(0,y.jsx)(b,{type:"submit",children:"Serch"})]})})},S=e(6491),P=e(3174),B=e(1687),C=e(7652);function E(){var n,t,e,r=(0,f.TH)(),a=(0,h.lr)(),c=(0,u.Z)(a,2),i=c[0],s=c[1],v=(0,l.useState)([]),x=(0,u.Z)(v,2),m=x[0],g=x[1],Z=(0,l.useState)(!1),w=(0,u.Z)(Z,2),b=w[0],k=w[1],j=(0,l.useState)(!1),E=(0,u.Z)(j,2),U=E[0],H=E[1],L=(0,l.useState)(null!==(n=i.get("search"))&&void 0!==n?n:""),R=(0,u.Z)(L,2),F=R[0],O=R[1];(0,l.useEffect)((function(){function n(){return(n=(0,o.Z)(p().mark((function n(){var t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,k(!0),H(!1),n.next=5,(0,B.FE)(F);case 5:t=n.sent,g(t.results),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),H(!0),console.log(n.t0);case 13:return n.prev=13,k(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,9,13,16]])})))).apply(this,arguments)}""!==F&&function(){n.apply(this,arguments)}()}),[F]);var T=function(){var n=(0,o.Z)(p().mark((function n(t){return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s({search:t}),O(t);case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return(0,y.jsxs)("div",{children:[(0,y.jsx)(C.h,{to:null!==(t=null===(e=r.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/",children:"Back to Home"}),(0,y.jsx)(_,{onChangeSearch:T}),b&&(0,y.jsx)(d.Ll,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"bars-loading",visible:!0}),U&&(0,y.jsx)(S.B,{children:"Whoops! Error! Please reload this page!"}),m.length>0&&(0,y.jsx)(P.O,{items:m})]})}}}]);
//# sourceMappingURL=640.e03b0beb.chunk.js.map