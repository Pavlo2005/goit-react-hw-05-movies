"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[655],{1687:function(e,n,t){t.d(n,{BG:function(){return u},FE:function(){return h},QR:function(){return l},b4:function(){return d},vw:function(){return o}});var r=t(5861),a=t(7757),c=t.n(a),i=t(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="bad3f777e7df0ee5e923cebd13a08cda",o=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/trending/movie/day?api_key=".concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(n,"?api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n,t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(n,"/credits?api_key=").concat(s),{signal:t.signal});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(n,t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(s),{signal:t.signal});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/search/movie?query=".concat(n,"&include_adult=false&language=en-US&page=1&api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},7652:function(e,n,t){t.d(n,{h:function(){return i}});var r=t(8185),a=t(1087),c=t(184),i=function(e){var n=e.to,t=void 0===n?"/":n,i=e.children;return(0,c.jsxs)(a.rU,{to:t,children:[(0,c.jsx)(r.And,{}),i]})}},6491:function(e,n,t){t.d(n,{B:function(){return c}});var r,a=t(168),c=t(5867).ZP.b(r||(r=(0,a.Z)(["\n  color: ",";\n"])),(function(e){return e.theme.colors.error}))},9655:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(5861),a=t(9439),c=t(7757),i=t.n(c),s=t(1687),o=t(7652),u=t(6491),l=t(2791),d=t(3430),h=t(7689),p=t(184),f=function(){var e=(0,h.UO)(),n=(0,l.useState)([]),t=(0,a.Z)(n,2),c=t[0],o=t[1],f=(0,l.useState)(!1),v=(0,a.Z)(f,2),x=v[0],w=v[1],g=(0,l.useState)(!1),m=(0,a.Z)(g,2),j=m[0],b=m[1];(0,l.useEffect)((function(){var n=new AbortController;function t(){return(t=(0,r.Z)(i().mark((function t(){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,w(!0),t.next=4,(0,s.QR)(e.movieId,n);case 4:r=t.sent,o(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),"canceled"!==t.t0.message&&(console.log(t.t0),b(!0));case 11:return t.prev=11,w(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){n.abort()}}),[e.movieId]);var k=c.cast;return(0,p.jsxs)(p.Fragment,{children:[x&&(0,p.jsx)(d.Ll,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"bars-loading",visible:!0}),j&&(0,p.jsx)(u.B,{children:"Whoops! Error! Please reload this page!"}),(0,p.jsx)("ul",{children:k&&k.map((function(e){return(0,p.jsxs)("li",{children:[(0,p.jsx)("p",{children:e.name}),(0,p.jsx)("p",{children:e.character}),(0,p.jsx)("img",{src:"https://www.themoviedb.org/t/p/w220_and_h330_face".concat(e.profile_path),alt:"actor",width:100,height:150})]},e.id)}))}),0===(null===k||void 0===k?void 0:k.length)&&(0,p.jsx)("p",{children:"there are no cast"})]})},v=function(){var e=(0,h.UO)(),n=(0,l.useState)([]),t=(0,a.Z)(n,2),c=t[0],o=t[1],f=(0,l.useState)(!1),v=(0,a.Z)(f,2),x=v[0],w=v[1],g=(0,l.useState)(!1),m=(0,a.Z)(g,2),j=m[0],b=m[1];(0,l.useEffect)((function(){var n=new AbortController;function t(){return(t=(0,r.Z)(i().mark((function t(){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,w(!0),t.next=4,(0,s.b4)(e.movieId,n);case 4:r=t.sent,o(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),"canceled"!==t.t0.message&&(console.log(t.t0),b(!0));case 11:return t.prev=11,w(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){n.abort()}}),[e.movieId]);var k=c.results;return(0,p.jsxs)(p.Fragment,{children:[x&&(0,p.jsx)(d.Ll,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"bars-loading",visible:!0}),j&&(0,p.jsx)(u.B,{children:"Whoops! Error! Please reload this page!"}),(0,p.jsx)("ul",{children:k&&k.map((function(e){return(0,p.jsxs)("li",{children:[(0,p.jsx)("p",{children:"Author: ".concat(e.author)}),(0,p.jsx)("p",{children:e.content})]},e.id)}))}),0===(null===k||void 0===k?void 0:k.length)&&(0,p.jsx)("p",{children:"there are no reviews"})]})},x=t(1087),w=function(){var e=function(){var e,n,t=(0,x.lr)(),r=(0,a.Z)(t,2),c=r[0],i=r[1],s=null!==(e=c.get("cast"))&&void 0!==e?e:"",o=null!==(n=c.get("reviews"))&&void 0!==n?n:"";return{cast:s,reviews:o,changeCast:function(){s?c.set("cast",""):c.set("cast","cast"),i(c)},changeReviews:function(e){o?c.set("reviews",""):c.set("reviews","reviews"),i(c)}}}(),n=e.cast,t=e.reviews,r=e.changeCast,c=e.changeReviews;return(0,p.jsxs)("div",{children:[(0,p.jsx)("button",{onClick:function(){return r()},children:" Cast "}),(0,p.jsx)("button",{onClick:function(){return c()},children:" Reviews "}),(0,p.jsx)("div",{children:n&&(0,p.jsx)(f,{})}),(0,p.jsx)("div",{children:t&&(0,p.jsx)(v,{})})]})},g=function(e){var n=e.movies;return(0,p.jsxs)("div",{children:[(0,p.jsx)("img",{src:"https://www.themoviedb.org/t/p/w220_and_h330_face".concat(n.poster_path),alt:"#"}),(0,p.jsx)("p",{children:n.title}),(0,p.jsx)("p",{children:"popularity ".concat(n.popularity)}),(0,p.jsx)("p",{children:"release date ".concat(n.release_date)}),(0,p.jsx)("p",{children:"".concat(n.overview)}),(0,p.jsx)("p",{children:"genres"}),(0,p.jsx)("ul",{children:n.genres.map((function(e){return(0,p.jsx)("li",{children:e.name})}))})]})};function m(){var e,n,t=(0,h.TH)(),c=(0,h.UO)(),u=(0,l.useState)(),d=(0,a.Z)(u,2),f=d[0],v=d[1];return(0,l.useEffect)((function(){function e(){return(e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.BG)(c.movieId);case 3:n=e.sent,v(n),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c.movieId]),(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{children:"MoviesDetailsPage"}),(0,p.jsx)(o.h,{to:null!==(e=null===(n=t.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",children:"Back to Search"}),f&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(g,{movies:f}),(0,p.jsx)(w,{})]})]})}}}]);
//# sourceMappingURL=655.796bed82.chunk.js.map