(this.webpackJsonpvedantu=this.webpackJsonpvedantu||[]).push([[0],{1:function(e,a,t){e.exports={sticky_wrapper:"Content_sticky_wrapper__2YOvL",sticky:"Content_sticky__1o2dp",content:"Content_content__ECxQ_",tabset:"Content_tabset__3TQNX",repo_count:"Content_repo_count__3O8Lq",profile_panel:"Content_profile_panel__1kiZf",tab_panels:"Content_tab_panels__3yV-j",active:"Content_active__2Sa48",hidden:"Content_hidden__1lDPO"}},16:function(e,a,t){e.exports=t.p+"static/media/logo.8dad8028.svg"},19:function(e,a,t){e.exports=t(35)},24:function(e,a,t){},3:function(e,a,t){e.exports={filters:"Repositories_filters__16bVK",input:"Repositories_input__3FGMB",select_type:"Repositories_select_type__qiDE3",select_language:"Repositories_select_language__30N1V",repo:"Repositories_repo__1Ir0_",repo_name:"Repositories_repo_name__13n7T",fork:"Repositories_fork___rvKx",description:"Repositories_description__2z1Vv",details:"Repositories_details__3Dprp",language_color:"Repositories_language_color__3OiBM"}},34:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(11),o=t.n(l),c=(t(24),t(16)),i=t.n(c),s=t(8),u=t(5),p=t(7),m=t(4),f=t.n(m),d=t(10),_=t(6),v="https://api.github.com",g="application/json";function b(){return(b=Object(d.a)(f.a.mark((function e(a){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=v+a,e.next=3,fetch(t,{method:"GET",headers:{Accept:g}}).then(E).then(h);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){if(e.status>=200&&e.status<300)return e;var a=new Error("HTTP Error ".concat(e.statusText));return a.status=e.statusText,a.response=e,Promise.reject(a)}function h(e){var a=e;return e.headers&&e.headers.get("content-type").includes(g)&&(a=e.json()),Promise.resolve(a)}var j,O,y={getJSON:function(e){return b.apply(this,arguments)}},N=Object(_.b)("content/fetchRepositories",Object(d.a)(f.a.mark((function e(){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.getJSON("/users/supreetsingh247/repos");case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))),w=Object(_.c)({name:"content",initialState:{tabs:["Overview","Repositories","Projects"],repositories:[],filters:{type:["All","Sources","Forks"],languages:["All","JavaScript","HTML","CSS"],languageColor:{JavaScript:"#f1e05a",HTML:"#e34c26",CSS:"#563d7c"}},status:""},extraReducers:(j={},Object(p.a)(j,N.pending,(function(e,a){e.status="loading"})),Object(p.a)(j,N.fulfilled,(function(e,a){e.repositories=a.payload,e.status="success"})),Object(p.a)(j,N.rejected,(function(e,a){e.status="fail"})),j)}),C=function(e){return e.content},k=w.reducer,S=t(1),x=t.n(S),F=Object(_.b)("profile/updateProfile",Object(d.a)(f.a.mark((function e(){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.getJSON("/users/supreetsingh247");case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))),R=Object(_.c)({name:"profile",initialState:{name:"",alias:"",avatarUrl:"",bio:"",email:"",organization:"",location:"",followersCount:0,followingCount:0,status:""},extraReducers:(O={},Object(p.a)(O,F.pending,(function(e,a){e.status="loading"})),Object(p.a)(O,F.fulfilled,(function(e,a){e.name=a.payload.name,e.alias=a.payload.login,e.bio=a.payload.bio,e.avatarUrl=a.payload.avatar_url,e.email=a.payload.email,e.organization=a.payload.company,e.location=a.payload.location,e.followersCount=a.payload.followers,e.followingCount=a.payload.following,e.status="success"})),Object(p.a)(O,F.rejected,(function(e,a){e.status="fail",e.error=a.error.message})),O)}),P=function(e){return e.profile},T=R.reducer,J=t(9),M=t.n(J);function A(){var e=Object(u.c)(P),a=Object(u.b)();return Object(n.useEffect)((function(){""===e.status&&a(F())}),[e,a]),r.a.createElement("div",{className:M.a.col_1},r.a.createElement("img",{className:M.a.avatar,src:e.avatarUrl,alt:"avatar"}),r.a.createElement("div",{className:M.a.profile_name},e.name),r.a.createElement("div",{className:M.a.profile_alias},e.alias),r.a.createElement("div",{className:M.a.profile_bio},e.bio),r.a.createElement("button",{className:M.a.edit_profile},"Edit Profile"),r.a.createElement("div",{className:M.a.profile_follow},r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-users"}," "),e.followersCount," followers"),"\xb7",r.a.createElement("span",null,e.followingCount," following"),"\xb7"),r.a.createElement("div",null,r.a.createElement("i",{className:"fa fa-building-o","aria-hidden":"true"}),e.organization),r.a.createElement("div",null,r.a.createElement("i",{className:"fa fa-map-marker","aria-hidden":"true"}),e.location),r.a.createElement("div",null,r.a.createElement("i",{className:"fa fa-envelope-o","aria-hidden":"true"}),e.email))}var L=t(3),D=t.n(L),z=t(18),B=t.n(z);function Y(e){var a=e.name,t=e.html_url,n=e.description,l=e.language,o=e.updated_at,c=e.stargazers_count,i=e.languageColor;return r.a.createElement("div",{className:D.a.repo},r.a.createElement("a",{href:t,className:D.a.repo_name},a),r.a.createElement("div",{className:D.a.description},n),r.a.createElement("div",{className:D.a.details},r.a.createElement("div",null,r.a.createElement("span",{className:D.a.language_color,style:{backgroundColor:i[l]}}),r.a.createElement("span",null,l)),r.a.createElement("div",null,r.a.createElement("i",{className:"fa fa-star"}," ")," ",c),r.a.createElement("div",null,"Updated on ",r.a.createElement(B.a,{format:"MMM Do YYYY"},o)),r.a.createElement("div",null)))}function U(e){var a=e.repos,t=e.typeFilter,l=e.languageFilter,o=e.languageColor,c=Object(n.useState)(a),i=Object(s.a)(c,2),u=i[0],p=i[1],m=Object(n.useState)(t[0]),f=Object(s.a)(m,2),d=f[0],_=f[1],v=Object(n.useState)(""),g=Object(s.a)(v,2),b=g[0],E=g[1],h=Object(n.useState)(l[0]),j=Object(s.a)(h,2),O=j[0],y=j[1];return Object(n.useEffect)((function(){!function(e){var t=JSON.parse(JSON.stringify(a));"All"!==d&&(t=t.filter((function(e){return"Forks"===d?e.fork:"Sources"===d&&!e.fork}))),"All"!==O&&(t=t.filter((function(e){return e.language===O}))),t=t.filter((function(e){return e.name.toLowerCase().includes(b.toLowerCase())})),p(t)}()}),[a,d,b,O]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:D.a.filters},r.a.createElement("div",{className:D.a.input},r.a.createElement("input",{type:"text",placeholder:"Find a repository...",onChange:function(e){var a,t;(a=E,t=1e3,function(){var e=this,n=arguments;clearTimeout(void 0),setTimeout((function(){return a.apply(e,n)}),t)})(e.target.value)}})),r.a.createElement("div",{className:D.a.select_type},r.a.createElement("select",{name:"typeFilter",id:"typeFilter",onChange:function(e){_(e.target.value)}},t.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("div",{className:D.a.select_language},r.a.createElement("select",{name:"languageFilter",id:"languageFilter",onChange:function(e){y(e.target.value)}},l.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))))),r.a.createElement("div",null,u.map((function(e,a){return r.a.createElement(Y,Object.assign({key:a},e,{languageColor:o}))}))))}function V(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],l=a[1],o=Object(n.useState)(1),c=Object(s.a)(o,2),i=c[0],p=c[1],m=Object(u.c)(C),f=Object(n.useRef)(null),d=Object(u.b)();Object(n.useEffect)((function(){""===m.status&&d(N())}),[m,d]);var _=function(){f.current&&l(f.current.getBoundingClientRect().top<=0)};Object(n.useEffect)((function(){return window.addEventListener("scroll",_),function(){window.removeEventListener("scroll",(function(){return _}))}}),[]);var v=function(e){p(+e.target.value)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:x.a.content},r.a.createElement("div",{className:"".concat(x.a.tabset," ").concat(x.a.sticky_wrapper," ").concat(t?x.a.sticky:""),ref:f},r.a.createElement("input",{type:"radio",name:"tabset",id:"tab1",checked:0===i,onChange:v,value:"0"}),r.a.createElement("label",{htmlFor:"tab1"},m.tabs[0]),r.a.createElement("input",{type:"radio",name:"tabset",id:"tab2",checked:1===i,onChange:v,value:"1"}),r.a.createElement("label",{htmlFor:"tab2"},m.tabs[1],r.a.createElement("span",{className:x.a.repo_count}," ",m.repositories.length)),r.a.createElement("input",{type:"radio",name:"tabset",id:"tab3",checked:2===i,onChange:v,value:"2"}),r.a.createElement("label",{htmlFor:"tab3"},m.tabs[2])),r.a.createElement("div",{className:x.a.profile_panel},r.a.createElement(A,null)),r.a.createElement("div",{className:x.a.tab_panels},r.a.createElement("section",{id:"overview",className:"".concat(x.a.tab_panel," ").concat(0===i?x.a.active:x.a.hidden)}),r.a.createElement("section",{id:"repositories",className:"".concat(x.a.tab_panel," ").concat(1===i?x.a.active:x.a.hidden)},r.a.createElement(U,{repos:m.repositories,typeFilter:m.filters.type,languageFilter:m.filters.languages,languageColor:m.filters.languageColor})),r.a.createElement("section",{id:"projects",className:"".concat(x.a.tab_panel," ").concat(2===i?x.a.active:x.a.hidden)}))))}t(34);var q=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("nav",{className:"navbar"},r.a.createElement("span",null,r.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"})),r.a.createElement("a",{href:"/"},"Pull Requests"),r.a.createElement("a",{href:"/"},"Issues"),r.a.createElement("a",{href:"/"},"Marketplace")),r.a.createElement("div",{className:"container"},r.a.createElement(V,null)))},H=Object(_.a)({reducer:{profile:T,content:k}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,{store:H},r.a.createElement(q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,a,t){e.exports={col_1:"Profile_col_1__CAZDK",profile_name:"Profile_profile_name__3dkjx",profile_alias:"Profile_profile_alias__3DyPr",profile_bio:"Profile_profile_bio__ssiXf",edit_profile:"Profile_edit_profile__23jEt",avatar:"Profile_avatar__3s310"}}},[[19,1,2]]]);
//# sourceMappingURL=main.34a2cebf.chunk.js.map