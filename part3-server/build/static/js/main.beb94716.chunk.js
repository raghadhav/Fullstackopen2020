(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){e.exports=n(37)},37:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(14),l=n.n(r),u=n(2),o=function(e){var t=e.person,n=e.handleDelete;return c.a.createElement("li",null,c.a.createElement("div",{className:"text"},t.name," ",t.number),c.a.createElement("div",{className:"btn"},c.a.createElement("button",{onClick:function(){return n(t.id)}},c.a.createElement("i",{className:"fa fa-trash"}," Delete"))))},i=function(e){return c.a.createElement("form",{onSubmit:e.AddItem},c.a.createElement("div",null,c.a.createElement("p",null,"Insert name: "),c.a.createElement("input",{value:e.newName,onChange:e.handleNameChange,type:"text"}),c.a.createElement("p",null," Insert number:"),c.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange,type:"text"})),c.a.createElement("div",null,c.a.createElement("button",{type:"submit"},"Add")))},m=function(e){return c.a.createElement("div",null,"Search: ",c.a.createElement("input",{onChange:e.handleFilter,type:"text"}))},s=n(3),d=n.n(s),f="/api/persons",h=function(){return d.a.get(f).then((function(e){return e.data}))},p=function(e){return d.a.post(f,e).then((function(e){return e.data}))},b=function(e,t){return d.a.put("".concat(f,"/").concat(e),t).then((function(e){return e.data})).catch((function(e){throw console.log("fail"),e}))},E=function(e){return d.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.data}))},v=(n(13),function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(""),s=Object(u.a)(l,2),d=s[0],f=s[1],v=Object(a.useState)(""),g=Object(u.a)(v,2),N=g[0],y=g[1],O=Object(a.useState)(n),j=Object(u.a)(O,2),w=j[0],C=j[1],A=Object(a.useState)(""),S=Object(u.a)(A,2),k=S[0],x=S[1];Object(a.useEffect)((function(){h().then((function(e){r(e),C(e)}))}),[]);var D=function(e){window.confirm("Are you sure you want to delete ".concat(e,"?"))&&E(e).then((function(e){console.log(e)}))};return c.a.createElement("div",null,c.a.createElement("h2",{className:"main-title"},"Phonebook"),c.a.createElement((function(e){var t=e.msg;return""===t?null:c.a.createElement("div",{className:"success"},t)}),{msg:k}),c.a.createElement(m,{handleFilter:function(e){x(""),C(n.filter((function(t){return-1!==t.name.indexOf(e.target.value)}))),console.log(e.target.value)}}),c.a.createElement("h3",null,"Add New Contact"),c.a.createElement(i,{AddItem:function(e){e.preventDefault();var t={name:d,number:N,id:n.length+1};console.log(t);var a=n.some((function(e){return e.name===d}));console.log("found here is "+a);var c=n.some((function(e){return e.name===d&&e.number!==N}));if(a||""===d||""===N)if(c){var l=1;alert(" Updating number of ".concat(d,"?")),n.map((function(e){e.name===d&&e.number!==N&&(l=e.id)})),console.log("".concat(l," req id")),b(l,t)}else""===d|" "===N?alert("You need to add something"):alert("".concat(d," is already added to phonebook"));else{var u=n.concat(t);r(u),console.log(u),p(t).then((function(e){console.log(e)})),f(""),y(""),C(u),x("".concat(d," Added Successfully"))}},newName:d,newNumber:N,handleNameChange:function(e){e.preventDefault(),f(e.target.value)},handleNumberChange:function(e){e.preventDefault(),y(e.target.value)}}),c.a.createElement("h3",null,"All Added Contacts"),c.a.createElement("div",null,c.a.createElement("ul",null,w.map((function(e){return c.a.createElement(o,{key:e.id,person:e,handleDelete:D})})))))});l.a.render(c.a.createElement(v,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.beb94716.chunk.js.map