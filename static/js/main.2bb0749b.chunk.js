(window.webpackJsonpcounter=window.webpackJsonpcounter||[]).push([[0],{20:function(e,t,n){e.exports=n(48)},25:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),o=n.n(c),s=(n(25),n(7)),i=n.n(s),l=n(18),u=n(2),h=n(3),m=n(5),d=n(4),p=n(6),f=n(19),v=n.n(f).a.create({baseURL:"https://jsonplaceholder.typicode.com"}),w=(n(44),n(45),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={searchString:""},n}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.placeholder,n=e.handleChange;return r.a.createElement("div",{className:"search-box"},r.a.createElement("input",{type:"search",placeholder:t,onChange:n}))}}]),t}(r.a.Component)),b=(n(46),function(e){var t=e.monster;return r.a.createElement("div",{className:"card"},r.a.createElement("h3",null,t.name),r.a.createElement("img",{src:"https://robohash.org/".concat(t.id,"?size=140x140"),alt:""}))}),g=(n(47),function(e){var t=e.monsters;return r.a.createElement("div",{className:"card-list"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"grid"},t.map((function(e){return r.a.createElement(b,{monster:e,key:e.id})})))))}),E=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={searchField:"",monsters:[]},n.filterMonsters=function(e){n.setState({searchField:e.target.value})},n}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state,t=e.searchField,n=e.monsters.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return r.a.createElement("div",{className:"app"},r.a.createElement("h1",null,"Monsters Rolodex"),r.a.createElement(w,{placeholder:"Search Monsters..",handleChange:this.filterMonsters}),r.a.createElement(g,{monsters:n}))}},{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/users");case 2:t=e.sent,n=t.data,this.setState({monsters:n});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.2bb0749b.chunk.js.map