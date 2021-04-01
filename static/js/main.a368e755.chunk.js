(this.webpackJsonpspotify=this.webpackJsonpspotify||[]).push([[0],{128:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),i=a.n(c),s=a(38),o=a(34),l=a(81),j="SET_ALBUMS",d="SET_PLAYLIST",u="SET_ARTISTS",h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.albums;switch(t.type){case j:return a;default:return e}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.artists;switch(t.type){case u:return a;default:return e}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.playlists;switch(t.type){case d:return a;default:return e}},p=window.__REDUX_DEVTOOLS_EXTESION_COMPOSE__||o.d,x=Object(o.e)(Object(o.c)({albums:h,artists:m,playlists:b}),p(Object(o.a)(l.a))),O=a(52),g=a(53),f=a(58),y=a(57),v=a(56),S=a(13),N=a(158),k=Object(N.a)((function(e){return{body:{display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center",alignContent:"center",height:"100vh"},header:{display:"flex",justifyContent:"center",marginTop:"10px",marginBotton:"10px"},footer:{background:"#4146aa",width:"100%",height:"40px",position:"absolute",bottom:0,left:0,fontSize:"10px",margin:"auto",textAlign:"center",paddingTop:"7px",color:"white"},link:{textDecoration:"none",fontWeight:"bold",color:"#010330"},textField:{width:"70%",margin:"auto",display:"flex",marginBottom:"15px"},alert:{marginBottom:"7px"},media:{height:"150",width:"150"},container:{maxHeight:"30vh",width:"90%",margin:"auto"}}})),w=a(2),_=function(){var e=k();return Object(w.jsx)("div",{className:e.header,children:Object(w.jsx)("h1",{children:"Music App"})})},T=a(162),E=a(86),A=a.n(E),C=function(){var e=k();return Object(w.jsx)("div",{className:e.footer,children:Object(w.jsxs)("h1",{children:["Made with \xa0",Object(w.jsx)(A.a,{}),"\xa0  by \xa0",Object(w.jsx)("a",{href:"https://abhishek-sinha.netlify.app/",className:e.link,children:"\xa0 Abhishek Sinha"})]})})},F=Object(s.b)()((function(e){var t=k();return Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{className:t.body,children:[Object(w.jsx)(_,{}),Object(w.jsx)("div",{children:Object(w.jsx)("h1",{children:"Please Login to Continue..."})}),Object(w.jsx)("div",{children:Object(w.jsx)(T.a,{color:"primary",variant:"contained",type:"submit",onClick:function(){window.location="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("80786b8c4d7645e0b3f614618bc0c10a","&redirect_uri=").concat("https://abhishek-spotify.netlify.app/redirect","&response_type=token&show_dialog=true")},size:"large",children:"Login"})})]}),Object(w.jsx)(C,{})]})})),B=a(24),z=a.n(B),I=a(33),D=a(46),L=a.n(D),P=function(){try{var e=JSON.parse(localStorage.getItem("params"));e&&(L.a.defaults.headers.common.Authorization="Bearer ".concat(e.access_token))}catch(t){console.log("Error setting auth",t)}},R=function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(){return Object(O.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.history,a=e.location;try{if(z.a.isEmpty(a.hash))return t.push("/dashboard");var n=a.hash.slice(1).split("&").reduce((function(e,t){var a=t.split("="),n=Object(I.a)(a,2),r=n[0],c=n[1];return e[r]=c,e}),{}),r=(new Date).getTime()+1e3*n.expires_in;localStorage.setItem("params",JSON.stringify(n)),localStorage.setItem("expiry_time",r),t.push("/dashboard")}catch(c){t.push("/")}}},{key:"render",value:function(){return null}}]),a}(n.Component),M=a(17),J=a.n(M),U=a(26),H=function(){var e=Object(U.a)(J.a.mark((function e(t,a){var n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(),e.next=3,L.a.get(t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),W=function(e){return{type:j,albums:e}},X=function(e){return{type:u,artists:e}},q=function(e){return{type:d,playlists:e}},G=a(163),V=a(164),Y=a(165),K=a(166),Q=a(167),Z=(a(48),a.p+"static/media/image.61b21c8e.jpg"),$=Object(N.a)({container:{width:"95%",margin:"auto",background:"#f5f5f5",borderRadius:"10px",marginBottom:28},card:{},media:{height:230},typography:{marginTop:"5px",textAlign:"center",fontSize:"18px"},small:{textAlign:"center",fontSize:"14px",marginBottom:"5px"}}),ee=function(e){var t=e.albums,a=$();return Object(w.jsx)(r.a.Fragment,{children:Object.keys(t).length>0&&Object(w.jsx)(G.a,{container:!0,spacing:3,className:a.container,children:t.items.map((function(e,t){return Object(w.jsx)(r.a.Fragment,{children:Object(w.jsx)(G.a,{item:!0,xs:12,sm:4,md:3,children:Object(w.jsxs)(V.a,{className:a.card,children:[Object(w.jsx)(Y.a,{target:"_blank",href:e.external_urls.spotify,rel:"noopener noreferrer",children:z.a.isEmpty(e.images)?Object(w.jsx)(K.a,{className:a.media,image:Z,title:""}):Object(w.jsx)(K.a,{className:a.media,image:e.images[0].url,title:""})}),Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{}),Object(w.jsx)(Q.a,{variant:"body2",color:"textSecondary",component:"p",className:a.typography,children:e.name}),Object(w.jsx)("div",{className:a.small,children:Object(w.jsx)("small",{children:e.artists.map((function(e){return e.name})).join(", ")})})]})]})})},t)}))})})},te=Object(N.a)({container:{width:"95%",margin:"auto",background:"#f7f7f7",borderRadius:"10px",marginBottom:28},card:{},media:{height:230},typography:{marginTop:"5px",textAlign:"center",fontSize:"18px"},small:{textAlign:"center",fontSize:"14px",marginBottom:"5px"}}),ae=function(e){var t=e.playlists,a=te();return Object(w.jsx)(r.a.Fragment,{children:Object.keys(t).length>0&&Object(w.jsx)(G.a,{container:!0,spacing:3,className:a.container,children:t.items.map((function(e,t){return Object(w.jsx)(r.a.Fragment,{children:Object(w.jsx)(G.a,{item:!0,xs:12,sm:4,md:3,children:Object(w.jsxs)(V.a,{className:a.card,children:[Object(w.jsx)(Y.a,{target:"_blank",href:e.external_urls.spotify,rel:"noopener noreferrer",className:"card-image-link",children:z.a.isEmpty(e.images)?Object(w.jsx)(K.a,{className:a.media,image:Z,title:""}):Object(w.jsx)("img",{variant:"top",src:e.images[0].url,alt:"",className:"img"})}),Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{children:e.name}),Object(w.jsx)("div",{})]})]})})},t)}))})})},ne=Object(N.a)({container:{width:"95%",margin:"auto",background:"#fcf9f2",borderRadius:"10px"},card:{},media:{height:230},typography:{marginTop:"5px",textAlign:"center",fontSize:"18px"},small:{textAlign:"center",fontSize:"14px",marginBottom:"5px"}}),re=function(e){var t=e.artists,a=ne();return Object(w.jsx)(r.a.Fragment,{children:Object.keys(t).length>0&&Object(w.jsx)(G.a,{container:!0,spacing:3,className:a.container,children:t.items.map((function(e,t){return Object(w.jsx)(r.a.Fragment,{children:Object(w.jsx)(G.a,{item:!0,xs:12,sm:4,md:3,children:Object(w.jsxs)(V.a,{className:a.card,children:[Object(w.jsx)(Y.a,{target:"_blank",href:e.external_urls.spotify,rel:"noopener noreferrer",children:z.a.isEmpty(e.images)?Object(w.jsx)(K.a,{className:a.media,image:Z,title:""}):Object(w.jsx)(K.a,{className:a.media,image:e.images[0].url,title:""})}),Object(w.jsx)(Q.a,{variant:"body2",color:"textSecondary",component:"p",className:a.typography,children:e.name})]})})},t)}))})})},ce=function(e){var t=e.result,a=e.selectedCategory,n=t.albums,c=t.artists,i=t.playlist;return Object(w.jsxs)(r.a.Fragment,{children:[Object(w.jsx)("div",{className:"".concat("albums"===a?"":"hide"),children:n&&Object(w.jsx)(ee,{albums:n})}),Object(w.jsx)("div",{className:"".concat("artist"===a?"":"hide"),children:c&&Object(w.jsx)(re,{artists:c})}),Object(w.jsx)("div",{className:"".concat("playlist"===a?"":"hide"),children:i&&Object(w.jsx)(ae,{playlist:i})})]})},ie=a(169),se=a(168),oe=a(170),le=function(e){var t=k(),a=Object(n.useState)(""),r=Object(I.a)(a,2),c=r[0],i=r[1],s=Object(n.useState)(""),o=Object(I.a)(s,2),l=o[0],j=o[1];return Object(w.jsx)("div",{children:Object(w.jsxs)(ie.a,{onSubmit:function(t){t.preventDefault(),""!==c.trim()?(j(""),e.handleSearch(c)):j("Please enter a search term.")},children:[l&&Object(w.jsx)(oe.a,{severity:"error",className:t.alert,children:l}),Object(w.jsxs)("div",{className:t.textField,children:[Object(w.jsx)(se.a,{id:"standard-basic",fullWidth:!0,label:"Search here...",type:"search",name:"searchTerm",value:c,onChange:function(e){var t=e.target.value;i(t)}}),Object(w.jsx)(T.a,{variant:"contained",color:"primary",type:"submit",children:"Search"})]})]})})},je=Object(s.b)((function(e){return{albums:e.albums,artists:e.artists,playlists:e.playlists}}))((function(e){var t=Object(n.useState)("albums"),a=Object(I.a)(t,2),c=a[0],i=a[1],s={albums:e.albums,artists:e.artists,playlists:e.playlists};return Object(w.jsx)(r.a.Fragment,{children:Object(w.jsxs)("div",{children:[Object(w.jsx)(_,{}),Object(w.jsx)(le,{handleSearch:function(t){e.dispatch(function(e){return function(){var t=Object(U.a)(J.a.mark((function t(a){var n,r,c,i,s;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="https://api.spotify.com/v1/search?query=".concat(encodeURIComponent(e),"&type=album,playlist,artist"),t.next=4,H(n);case 4:return r=t.sent,c=r.albums,i=r.artists,s=r.playlists,a(W(c)),a(X(i)),t.abrupt("return",a(q(s)));case 11:t.prev=11,t.t0=t.catch(0),console.log("error",t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(t)).then((function(){i("albums")}))}}),Object(w.jsx)(ce,{result:s,setCategory:function(e){i(e)},selectedCategory:c})]})})})),de=function(){return Object(w.jsxs)(r.a.Fragment,{children:[Object(w.jsx)(_,{}),"Page not Found. Goto ",Object(w.jsx)(v.b,{to:"/dashboard",children:"Home Page"})]})},ue=function(e){Object(f.a)(a,e);var t=Object(y.a)(a);function a(){return Object(O.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return Object(w.jsx)(v.a,{children:Object(w.jsx)("div",{children:Object(w.jsxs)(S.c,{children:[Object(w.jsx)(S.a,{path:"/",component:F,exact:!0}),Object(w.jsx)(S.a,{path:"/redirect",component:R}),Object(w.jsx)(S.a,{path:"/dashboard",component:je}),Object(w.jsx)(S.a,{component:de})]})})})}}]),a}(n.Component);i.a.render(Object(w.jsx)(s.a,{store:x,children:Object(w.jsx)(ue,{})}),document.getElementById("root"))},48:function(e,t,a){}},[[128,1,2]]]);
//# sourceMappingURL=main.a368e755.chunk.js.map