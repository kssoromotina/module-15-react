(this["webpackJsonpmodule-15-react"]=this["webpackJsonpmodule-15-react"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),s=n(7),o=n.n(s),u=(n(13),n(2)),i=n(3),l=n(5),m=n(4),d=(n(14),function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).update=function(e){return e.preventDefault(),t.props.update(function(){var t=document.querySelector("#new-comment-author"),e=document.querySelector("#new-comment-text"),n=t.value,a=e.value;if(t.value="",e.value="",""!==n&&""!==a)return[n,a]}())},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{className:"form",onSubmit:this.update,children:[Object(a.jsx)("input",{type:"text",id:"new-comment-author",className:"input",name:"new-comment-author",placeholder:"Enter your name..."}),Object(a.jsx)("input",{type:"text",id:"new-comment-text",className:"input",name:"new-comment-text",placeholder:"Enter your comment..."}),Object(a.jsx)("button",{type:"submit",className:"submit-btn",children:"Comment"})]})}}]),n}(r.a.Component)),j=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){this.addZero=function(t){return t<10&&(t="0"+t),t};var t=new Date,e=t.getHours(),n=t.getMinutes(),c="".concat(t.toLocaleDateString(),", ").concat(this.addZero(e),":").concat(this.addZero(n));return this.handleDelete=function(t){var e=t.target,n=e.closest("li");e&&n.remove()},!!this.props.data&&Object(a.jsxs)("li",{className:"comments-item",children:[Object(a.jsxs)("div",{className:"comments-props",children:[Object(a.jsx)("span",{className:"comment-author",children:this.props.data[0]}),Object(a.jsx)("span",{className:"comment-time",children:c})]}),Object(a.jsx)("div",{className:"comment-text",children:this.props.data[1]}),Object(a.jsx)("button",{className:"delete-comment",onClick:this.handleDelete,children:"Delete"})]})}}]),n}(r.a.Component),h=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).state={},a}return Object(i.a)(n,[{key:"render",value:function(){return Object(a.jsx)("ul",{className:"comments-list",children:Object(a.jsx)(j,{data:this.props.data})})}}]),n}(r.a.Component),p=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).updateState=function(t){return a.setState({data:t})},a.state={data:""},a}return Object(i.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(d,{update:this.updateState}),Object(a.jsx)(h,{data:this.state.data})]})}}]),n}(r.a.Component);o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e2968b82.chunk.js.map