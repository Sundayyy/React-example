(this.webpackJsonpreactcrud=this.webpackJsonpreactcrud||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),l=a.n(c),u=a(8),o=a(1),i=a(2),m=a(3),h=a(4),s=function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Job")))},b=function(e){var t=e.characterData.map((function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.job),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.removeCharacter(a)}},"Delete")))}));return r.a.createElement("tbody",null,t)},f=function(e){var t=e.characterData,a=e.removeCharacter;return r.a.createElement("table",null,r.a.createElement(s,null),r.a.createElement(b,{characterData:t,removeCharacter:a}))},v=a(7),p=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).initiaState={name:"",job:""},e.state=e.initiaState,e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(v.a)({},n,r))},e.submitForm=function(){e.props.handleSubmit(e.state),e.setState(e.initiaState)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=(e.name,e.job);return r.a.createElement("form",null,r.a.createElement("label",{html:"name"},"Name"),r.a.createElement("input",{type:"text",name:"job",id:"job",value:t,onChange:this.handleChange}),r.a.createElement("input",{type:"button",value:"Submit",onClick:this.submitForm}))}}]),a}(n.Component),d=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*").then((function(e){return e.json()})).then((function(t){e.setState({data:t})}))}},{key:"render",value:function(){var e=this.state.data.map((function(e,t){return r.a.createElement("li",{key:t},e)}));return r.a.createElement("ul",null,e)}}]),a}(n.Component),E=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={characters:[]},e.removeCharacter=function(t){var a=e.state.characters;e.setState({characters:a.filter((function(e,a){return a!==t}))})},e.handleSubmit=function(t){e.setState({characters:[].concat(Object(u.a)(e.state.characters),[t])})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.characters;return r.a.createElement("div",{className:"container"},r.a.createElement(f,{characterData:e,removeCharacter:this.removeCharacter}),r.a.createElement(p,{handleSubmit:this.handleSubmit}),r.a.createElement(d,null))}}]),a}(n.Component);a(14);l.a.render(r.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.2d7c3e82.chunk.js.map