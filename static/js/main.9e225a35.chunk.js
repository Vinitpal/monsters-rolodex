(this["webpackJsonp02-react-basics"]=this["webpackJsonp02-react-basics"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),r=n(3),a=n.n(r),o=(n(12),n(4)),i=n(5),h=n(7),u=n(6),l=(n(13),n(14),n(0)),j=function(e){return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set4&size=180x180"),alt:""}),Object(l.jsx)("h2",{children:e.monster.name}),Object(l.jsx)("p",{children:e.monster.email})]})},d=(n(16),function(e){return Object(l.jsx)("div",{className:"card-list",children:e.monsters.map((function(e,t){return Object(l.jsx)(j,{monster:e},t)}))})}),m=(n(17),function(e){var t=e.placeholder,n=e.handleChange;return Object(l.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),b=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={monsters:[],searchField:" "},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,s=t.searchField,c=n.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Monsters Rolodex"}),Object(l.jsx)(m,{placeholder:"Search for a monster",handleChange:function(t){e.setState({searchField:t.target.value})}}),Object(l.jsx)(d,{monsters:c})]})}}]),n}(s.Component);a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.9e225a35.chunk.js.map