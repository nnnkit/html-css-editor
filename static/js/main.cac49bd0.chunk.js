(this["webpackJsonplive-html-css"]=this["webpackJsonplive-html-css"]||[]).push([[0],{16:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(1),i=n.n(a),c=n(8),r=n.n(c),l=(n(16),n(9)),o=n(2),h=n(3),d=n(5),p=n(4);var u=function(){return Object(s.jsx)("header",{children:Object(s.jsxs)("div",{className:"header-content",children:[Object(s.jsx)("h1",{children:"Code Editor"}),Object(s.jsx)("p",{children:"You can write and preview HTML and CSS!"})]})})},j=n(10),b=(n(18),n(19),n(20),n(21),function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:this.props.className+" window",children:[Object(s.jsxs)("div",{className:"window-header",children:[Object(s.jsx)("div",{className:"action-buttons"}),Object(s.jsx)("p",{className:"language",children:this.props.displayLabel||this.props.language})]}),Object(s.jsx)("div",{className:"window-body",children:Object(s.jsx)(j.Controlled,{value:this.props.value,onBeforeChange:function(t,n,s){return e.props.handleChange(s,e.props.language)},options:{lineWrapping:!0,lint:!0,mode:this.props.language,lineNumbers:!0}})})]})}}]),n}(i.a.Component)),m=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).showPreview=function(){if(e.preview.current){var t=e.props,n=t.xml,s=t.css,a=e.preview.current.contentWindow.document,i=a.createElement("style");i.innerText=s,a.head.append(i),a.body.innerHTML=n}},e.preview=i.a.createRef(),e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.showPreview()}},{key:"componentDidUpdate",value:function(e){e.css===this.props.css&&e.xml===this.props.xml||this.showPreview()}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"window",children:[Object(s.jsxs)("div",{className:"window-header preview-header",children:[Object(s.jsx)("div",{className:"action-buttons"}),Object(s.jsx)("p",{className:"language",onClick:this.showPreview,children:this.props.text})]}),Object(s.jsx)("iframe",{title:"HTML/CSS Preview",ref:this.preview,id:"code_result",width:"100%",height:"100%"})]})}}]),n}(i.a.Component),v=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={xml:'<center>\n  <img src="https://images.unsplash.com/photo-1543332164-6e82f355badc" />\n  <h1>Hello World!</h1>\n</center>',css:"h1 {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\nimg {\n  width: 200px;\n  height: auto;\n  border-radius: 20px;\n}"},e.handleChange=function(t,n){e.setState(Object(l.a)({},n,t))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.state,t=e.xml,n=e.css;return Object(s.jsxs)("div",{className:"view",children:[Object(s.jsx)(u,{}),Object(s.jsxs)("div",{className:"wrapper",children:[Object(s.jsxs)("div",{style:{marginRight:"1rem"},children:[Object(s.jsx)(b,{language:"xml",value:t,displayLabel:"html",handleChange:this.handleChange}),Object(s.jsx)(b,{language:"css",className:"m-top",value:n,handleChange:this.handleChange})]}),Object(s.jsx)(m,{text:"OUTPUT",xml:t,css:n})]})]})}}]),n}(i.a.Component);r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.cac49bd0.chunk.js.map