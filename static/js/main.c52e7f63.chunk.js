(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(33)},28:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),s=n(8);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(3),l=n(17),u=n(18),h={search:""},d={robots:[],isPending:!1,error:""},m=Object(l.createLogger)(),b=Object(i.c)({searchARobot:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{search:t.payload});default:return e}},requestRobotsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),E=(n(28),n(29),n(5)),p=n(6),g=n(9),f=n(7),v=n(10),O=(n(30),function(e){function t(e){var n;return Object(E.a)(this,t),(n=Object(g.a)(this,Object(f.a)(t).call(this,e))).state={hasErr:!1},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasErr:!0})}},{key:"render",value:function(){return this.state.hasErr?r.a.createElement("div",null,r.a.createElement("h1",{className:"tc f1 lh-copy"},"Ooops. That didn't work.")):this.props.children}}]),t}(a.Component)),R=(n(31),function(e){var t=e.searchChange;return r.a.createElement("div",{className:"tc pa2"},r.a.createElement("input",{className:"pa3 mb4 br-pill ba b--light-green bg-washed-green",type:"search",name:"searchrobot",placeholder:"search a cool robot",onChange:t}))}),y=function(e){var t=e.robots.map(function(e){return r.a.createElement("div",{key:e.id,className:"bg-washed-green dib br3 pa2 mv3 mh2 grow bw1 shadow-5 bg-animate hover-bg-light-green"},r.a.createElement("img",{className:"w-100",alt:e.name,src:"https://robohash.org/".concat(e.id,"?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,e.name.slice(0,20)),r.a.createElement("p",null,e.email),r.a.createElement("p",null,r.a.createElement("b",null,e.username))))});return r.a.createElement("div",{className:"w-90 tc",style:{margin:"0 auto"}},t)},w=(n(32),function(e){return r.a.createElement("div",{className:"scroll"},e.children)}),S=function(e){return e.isPending?r.a.createElement("h1",{className:"tc f-subheadline lh-copy"},e.title):r.a.createElement("h1",{className:"tc f2 lh-copy"},e.title)},j=function(e){function t(){var e;return Object(E.a)(this,t),(e=Object(g.a)(this,Object(f.a)(t).call(this))).state={title:"Welcome to RoboFriends",loading:"Waiting for all the cool robots to come here...."},e}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.title,a=this.props,o=a.robots,c=a.search,s=a.onSearchChange,i=a.isPending,l=o.filter(function(e){return e.name.toLowerCase().includes(c.toLowerCase())});return i?r.a.createElement("div",{className:"pa2"},r.a.createElement(S,{isPending:i,title:n}),r.a.createElement("h1",{className:"tc f3 mt6 pa4"},t)):r.a.createElement("div",{className:"pa2"},r.a.createElement(O,null,r.a.createElement(S,{isPending:i,title:n}),r.a.createElement(R,{searchChange:s}),r.a.createElement(w,null,r.a.createElement(y,{robots:l}))))}}]),t}(a.Component),C=Object(s.b)(function(e){return{search:e.searchARobot.search,robots:e.requestRobotsReducer.robots,isPending:e.requestRobotsReducer.isPending,error:e.requestRobotsReducer.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})})}}})(j),N=Object(i.d)(b,Object(i.a)(m,u.a));c.a.render(r.a.createElement(s.a,{store:N},r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.c52e7f63.chunk.js.map