(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[16],{498:function(e,t,a){"use strict";a.r(t),a.d(t,"EditProfile",(function(){return U}));var s=a(2),n=a(17),i=a(81),c=a(82),l=a(103),r=a(101),d=a(0),o=a(269),j=a(307),m=a(503),u=a(518),b=a(102),h=a(520),x=a(466),O=a(467),p=a(433),f=a(517),v=a(68),y=a(523),g=a(31),w=a(163),I=a(19),L=a(38),k=Object(s.jsx)(v.a,{style:{fontSize:24},spin:!0}),U=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).avatarEndpoint="https://www.mocky.io/v2/5cc8019d300000980a055e76",e.state={avatarUrl:"/img/avatars/thumb-".concat(e.props.location.state.id,".jpg"),name:null,email:null,username:null,dateOfBirth:null,phone:null,website:null,address:null,city:null,postcode:null,isLoaded:!1},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users/".concat(this.props.match.params.id)).then((function(t){t.json().then((function(t){e.setState(Object(n.a)(Object(n.a)({},t),{},{avatarUrl:"/img/avatars/thumb-".concat(t.id,".jpg"),isLoaded:!0}))}))}))}},{key:"getBase64",value:function(e,t){var a=new FileReader;a.addEventListener("load",(function(){return t(a.result)})),a.readAsDataURL(e)}},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,i=t.username,c=t.dateOfBirth,l=t.phone,r=t.website,d=t.address,v=t.avatarUrl;return t.isLoaded?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(w.a,{alignItems:"center",mobileFlex:!1,className:"text-center text-md-left",children:[Object(s.jsx)(m.a,{size:90,src:v,icon:Object(s.jsx)(y.a,{})}),Object(s.jsxs)("div",{className:"ml-md-3 mt-md-0 mt-3",children:[Object(s.jsx)(u.a,{onChange:function(t){var a="updatable";"uploading"!==t.file.status?"done"===t.file.status&&(e.getBase64(t.file.originFileObj,(function(t){return e.setState({avatarUrl:t})})),o.b.success({content:"Uploaded!",key:a,duration:1.5})):o.b.loading({content:"Uploading...",key:a,duration:1e3})},showUploadList:!1,action:this.avatarEndpoint,children:Object(s.jsx)(b.a,{type:"primary",children:"Change Avatar"})}),Object(s.jsx)(b.a,{className:"ml-2",onClick:function(){e.setState({avatarUrl:""})},children:"Remove"})]})]}),Object(s.jsx)("div",{className:"mt-4",children:Object(s.jsx)(h.a,{name:"basicInformation",layout:"vertical",initialValues:{name:a,email:n,username:i,dateOfBirth:c,phone:l,website:r,address:d.street,city:d.city,postcode:d.zipcode},onFinish:function(t){setTimeout((function(){e.setState({user:t,isLoaded:!0})}),2e3)},onFinishFailed:function(e){console.log("Failed:",e)},children:Object(s.jsx)(x.a,{children:Object(s.jsxs)(O.a,{xs:24,sm:24,md:24,lg:16,children:[Object(s.jsxs)(x.a,{gutter:g.c,children:[Object(s.jsx)(O.a,{xs:24,sm:24,md:12,children:Object(s.jsx)(h.a.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your name!"}],children:Object(s.jsx)(p.a,{})})}),Object(s.jsx)(O.a,{xs:24,sm:24,md:12,children:Object(s.jsx)(h.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(s.jsx)(p.a,{})})}),Object(s.jsx)(O.a,{xs:24,sm:24,md:12,children:Object(s.jsx)(h.a.Item,{label:"Email",name:"email",rules:[{required:!0,type:"email",message:"Please enter a valid email!"}],children:Object(s.jsx)(p.a,{})})}),Object(s.jsx)(O.a,{xs:24,sm:24,md:12,children:Object(s.jsx)(h.a.Item,{label:"Date of Birth",name:"dateOfBirth",children:Object(s.jsx)(f.a,{className:"w-100"})})}),Object(s.jsx)(O.a,{xs:24,sm:24,md:12,children:Object(s.jsx)(h.a.Item,{label:"Phone Number",name:"phone",children:Object(s.jsx)(p.a,{})})}),Object(s.jsx)(O.a,{xs:24,sm:24,md:12,children:Object(s.jsx)(h.a.Item,{label:"Website",name:"website",children:Object(s.jsx)(p.a,{})})}),Object(s.jsx)(O.a,{xs:24,sm:24,md:24,children:Object(s.jsx)(h.a.Item,{label:"Address",name:"address",children:Object(s.jsx)(p.a,{})})}),Object(s.jsx)(O.a,{xs:24,sm:24,md:12,children:Object(s.jsx)(h.a.Item,{label:"City",name:"city",children:Object(s.jsx)(p.a,{})})}),Object(s.jsx)(O.a,{xs:24,sm:24,md:12,children:Object(s.jsx)(h.a.Item,{label:"Post code",name:"postcode",children:Object(s.jsx)(p.a,{})})})]}),Object(s.jsx)(b.a,{type:"primary",htmlType:"submit",onClick:function(){e.setState({isLoaded:!1}),setTimeout((function(){e.props.history.push("".concat(I.c,"/pages/user-list")),e.setState({isLoaded:!0})}),1e3)},children:"Save Change"})]})})})})]}):Object(s.jsx)(j.a,{indicator:k,size:"large"})}}]),a}(d.Component);t.default=Object(L.b)((function(e){return{usersList:e.users.usersList}}))(U)}}]);
//# sourceMappingURL=16.a8d71f86.chunk.js.map