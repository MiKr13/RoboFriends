(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(52)},42:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),c=a.n(o),s=a(19),i=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var u=a(11),m=a(29),d={search:""},h={robots:[],isPending:!1,error:""},b={favs:[]},p=[];p.push(m.a);var f=Object(u.c)({searchARobot:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{search:t.payload});default:return e}},requestRobotsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}},requestFavReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_FAVS":return Object.assign({},e,{favs:t.payload});default:return e}}}),g=(a(42),a(43),a(13)),v=a(30),E=a(31);g.b.add(v.a,E.a);var w=a(16),y=a(17),R=a(20),N=a(18),O=a(21),S=a(10),j=a(8),F=(a(47),function(e){function t(e){var a;return Object(w.a)(this,t),(a=Object(R.a)(this,Object(N.a)(t).call(this,e))).state={hasErr:!1},a}return Object(O.a)(t,e),Object(y.a)(t,[{key:"componentDidCatch",value:function(e,t){console.log("error here ".concat(e)),console.log("info here ".concat(t)),this.setState({hasErr:!0})}},{key:"render",value:function(){return this.state.hasErr?r.a.createElement("div",null,r.a.createElement("h1",{className:"tc f1 lh-copy"},"Ooops. That didn't work.")):this.props.children}}]),t}(n.Component)),k=(a(48),function(e){var t=e.searchChange;return r.a.createElement("div",{className:"tc pa2"},r.a.createElement("label",{htmlFor:"searchrobot",className:"visuallyhidden"},"SearchRobot"),r.a.createElement("input",{className:"pa3 mb4 br-pill ba b--light-green bg-washed-green","aria-label":"searchrobot",type:"search",id:"searchrobot",name:"searchrobot",placeholder:"search a cool robot",onChange:t}))}),C=(a(49),function(e){var t=e.robots.map(function(t){return r.a.createElement(S.b,{key:t.id,to:"Robot/".concat(t.id)},r.a.createElement("div",{className:"bg-washed-green dib br3 pa2 mv3 mh2 grow bw1 shadow-5 bg-animate hover-bg-light-green"},r.a.createElement("img",{className:"w-100",alt:t.name,src:"https://robohash.org/".concat(t.id,"?size=300x300&set=set").concat(e.number)}),r.a.createElement("div",null,r.a.createElement("h2",null,t.name.slice(0,20)),r.a.createElement("p",null,t.email),r.a.createElement("p",null,r.a.createElement("b",null,t.username)))))});return r.a.createElement("div",null,r.a.createElement("div",{className:"w-90 tc",style:{margin:"0 auto"}},t))}),A=(a(51),function(e){return r.a.createElement("div",{className:"scroll"},e.children)}),T=function(e){return e.isPending?r.a.createElement("h1",{className:"tc f1 lh-copy"},e.title):r.a.createElement("h1",{className:"tc f2 lh-copy"},e.title)},_=a(26),P=function(e){var t=e.match,a=e.number,n=e.robots,o=e.onFav,c=e.favs;if(!n.length)return r.a.createElement(j.a,{to:"/"});var s=parseInt(t.params.robotID,10);if(s>0&&s<11){var i=n.find(function(e){return e.id===s}),l=!!c.includes(i.id);return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"overthepage bg-washed-green dib br3 pa2 mv3 mh2 bw1 shadow-5 bg-animate w-70",style:{margin:"0 auto"}},r.a.createElement("div",{className:"tc"},r.a.createElement("img",{alt:i.name,src:"https://robohash.org/".concat(i.id,"?size=300x300&set=set").concat(a)}),r.a.createElement("h1",{className:"f4"},"".concat(i.name.slice(0,20)," (@").concat(i.username,")")),r.a.createElement("hr",{className:"mw3 bb bw1 b--black-10"})),r.a.createElement("p",{className:"lh-copy measure center f5 black-90"},r.a.createElement("span",{className:"underline"},"".concat(i.name.slice(0,20))),", famously known by username ",r.a.createElement("span",{className:"underline"},"@","".concat(i.username))," is a resident of ".concat(i.address.suite,", ").concat(i.address.street," in ").concat(i.address.city," with zip-code "),r.a.createElement("span",{className:"underline"},"".concat(i.address.zipcode)),". He can be contacted at phone number: ",r.a.createElement("span",{className:"underline"},"".concat(i.phone))," or at email: ",r.a.createElement("span",{className:"underline"},"".concat(i.email)),". He currently works at ".concat(i.company.name,". He owns a nice website "),r.a.createElement("span",{className:"underline"},"".concat(i.website,"</span>"),"`")),r.a.createElement("div",{className:"icon-space"},l?r.a.createElement(_.a,{icon:["fas","heart"],size:"lg",style:{color:"red"},transform:"grow-2.5"}):r.a.createElement(_.a,{icon:["far","heart"],style:{color:"red"},onClick:function(){o(i.id),l=!0}}))))}return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"overthepage bg-washed-green dib br3 pa2 mv3 mh2 grow bw1 shadow-5 bg-animate hover-bg-light-green w-60",style:{margin:"0 auto"}},r.a.createElement("p",null,"That's not in our database")))},I=function(e){function t(){var e;return Object(w.a)(this,t),(e=Object(R.a)(this,Object(N.a)(t).call(this))).onFav=function(t){var a=JSON.parse(localStorage.getItem("favs"));null!==a&&void 0!==a&&Array.isArray(a)?a.includes(t)||a.push(t):a=[t],localStorage.setItem("favs",JSON.stringify(a)),e.props.onRequestFav()},e.state={title:"Welcome to RoboFriends",loading:"Waiting for all the cool robots to come here....",number:Math.floor(3*Math.random())+1},e}return Object(O.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots(),this.props.onRequestFav()}},{key:"render",value:function(){var e=this,t=this.state,a=t.loading,n=t.title,o=this.props,c=o.robots,s=o.search,i=o.onSearchChange,l=o.isPending,u=o.error,m=o.favs,d=c.filter(function(e){return e.name.toLowerCase().includes(s.toLowerCase())});return l?r.a.createElement("div",{className:"pa2"},r.a.createElement(T,{isPending:l,title:n}),r.a.createElement("h1",{className:"tc f3 mt6 pa4"},a)):u?r.a.createElement("div",{className:"pa2"},r.a.createElement(T,{isPending:l,title:n}),r.a.createElement(k,{style:{pointerEvent:"none",opacity:"0.5"}}),r.a.createElement("h1",{className:"tc f3 mt6 pa6"},"There's no fun in being offline, come online and make some RoboFriends!")):r.a.createElement("div",{className:"pa2"},r.a.createElement(F,null,r.a.createElement(T,{isPending:l,title:n}),r.a.createElement(k,{searchChange:i}),r.a.createElement(A,null,r.a.createElement(S.a,null,r.a.createElement(j.b,{exact:!0,path:"/RoboFriends/",render:function(t){return r.a.createElement(C,Object.assign({},t,{robots:d,number:e.state.number}))}}),r.a.createElement(j.b,{exact:!0,path:"/RoboFriends/Robot/:robotID",render:function(t){return r.a.createElement(P,Object.assign({},t,{robots:d,number:e.state.number,onFav:e.onFav,favs:m}))}}),r.a.createElement(S.a,{render:function(){return r.a.createElement(j.a,{to:"/RoboFriends"})}})))))}}]),t}(n.Component),U=Object(s.b)(function(e){return{search:e.searchARobot.search,robots:e.requestRobotsReducer.robots,favs:e.requestFavReducer.favs,isPending:e.requestRobotsReducer.isPending,error:e.requestRobotsReducer.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})})},onRequestFav:function(){return e(function(e){var t=localStorage.getItem("favs");e({type:"REQUEST_FAVS",payload:void 0!==t&&null!==t&&Array.isArray(JSON.parse(t))?JSON.parse(t):[]})})}}})(I),q=Object(u.d)(f,u.a.apply(void 0,p));c.a.render(r.a.createElement(s.a,{store:q},r.a.createElement(U,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/RoboFriends",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/RoboFriends","/service-worker.js");i?(function(e,t){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):l(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):l(t,e)})}}()}},[[33,1,2]]]);
//# sourceMappingURL=main.e8378ebb.chunk.js.map