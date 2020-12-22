(this["webpackJsonpsocial-media-app"]=this["webpackJsonpsocial-media-app"]||[]).push([[0],{252:function(e,t,a){e.exports=a(661)},256:function(e,t,a){},257:function(e,t,a){},280:function(e,t){},282:function(e,t){},292:function(e,t){},294:function(e,t){},319:function(e,t){},321:function(e,t){},322:function(e,t){},327:function(e,t){},329:function(e,t){},335:function(e,t){},337:function(e,t){},356:function(e,t){},368:function(e,t){},371:function(e,t){},378:function(e,t,a){},379:function(e,t,a){},380:function(e,t,a){},381:function(e,t,a){},382:function(e,t,a){},383:function(e,t,a){},660:function(e,t,a){},661:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),i=a(35),o=a.n(i),r=(a(256),a(31)),l=a.n(r),c=a(52),u=a(246),h=a(12),m=a(13),d=a(27),p=a(15),g=a(14),f=(a(257),a(41)),b=a(16),v=a.n(b),E=function(e){Object(p.a)(s,e);var t=Object(g.a)(s);function s(){var e;return Object(h.a)(this,s),(e=t.call(this)).state={username:"",password:"",data:null,loggedIn:!1},e.failedToLogin.bind(Object(d.a)(e)),e}return Object(m.a)(s,[{key:"assign",value:function(e){"username"===e.target.name&&this.setState({username:e.target.value}),"password"===e.target.name&&this.setState({password:e.target.value})}},{key:"onChange",value:function(e){this.setState(Object(u.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(){var e=Object(c.a)(l.a.mark((function e(t){var s,n=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=this.state.username,v.a.get("/user/",{params:{username:s}}).then((function(e){if(console.log(e.status),n.setState({data:e.data[0]}),null!=n.state.data){var t=a(149);return console.log(n.state.password," + ",n.state.data.password),new Promise((function(e,a){t.compare(n.state.password,n.state.data.password,(function(t,s){t&&a(t),e(s)}))})).then((function(e){e?(n.setState({loggedIn:!0}),document.getElementById("login").setAttribute("style","border: solid green"),setTimeout((function(){n.props.history.push({pathname:"/homepage",state:{thisUsername:n.state.username,thisUser:n.state.data}})}),400)):n.failedToLogin()}))}console.log("No matching user found")})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"isLoggedIn",value:function(){return this.state.loggedIn}},{key:"failedToLogin",value:function(){document.getElementById("login").setAttribute("style","border: solid red")}},{key:"render",value:function(){return n.a.createElement("div",{id:"login-wrap"},n.a.createElement("div",{id:"login"},n.a.createElement("input",{type:"text",name:"username",id:"username",placeholder:"Username",className:"credentials",onChange:this.assign.bind(this)}),n.a.createElement("input",{type:"password",name:"password",id:"password",placeholder:"Password",className:"credentials",onChange:this.assign.bind(this)}),n.a.createElement("div",{id:"buttons"},n.a.createElement("div",{id:"login-button",onClick:this.onSubmit.bind(this)},"Log in"),n.a.createElement(f.b,{to:"/user/register",id:"register-button"},"Register"))))}}]),s}(n.a.Component),w=(a(378),function(e){Object(p.a)(s,e);var t=Object(g.a)(s);function s(){var e;return Object(h.a)(this,s),(e=t.call(this)).state={firstName:"",lastName:"",username:"",password:"",email:"",admin:!0},e.onSubmit.bind(Object(d.a)(e)),e.assign.bind(Object(d.a)(e)),e.register.bind(Object(d.a)(e)),e.hashPassword.bind(Object(d.a)(e)),e.getPassword.bind(Object(d.a)(e)),e}return Object(m.a)(s,[{key:"assign",value:function(e){console.log("change"),"first-name"===e.target.name&&this.setState({firstName:e.target.value}),"last-name"===e.target.name&&this.setState({lastName:e.target.value}),"email"===e.target.name&&this.setState({email:e.target.value}),"username"===e.target.name&&this.setState({username:e.target.value}),"password"===e.target.name&&this.setState({password:e.target.value})}},{key:"getPassword",value:function(){var e=Object(c.a)(l.a.mark((function e(t){var a=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.hashPassword(t).then((function(e){console.log("at getPass it is ",e),a.setState({password:e})})).catch((function(e){console.log("at getPassword",e)}));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"hashPassword",value:function(e){console.log("hashing is ",e);var t=a(149);return new Promise((function(a,s){t.hash(e,10,(function(e,t){e&&s(e),console.log("at hashPassword",t),a(t)}))}))}},{key:"onSubmit",value:function(){var e=Object(c.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,this.getPassword(this.state.password);case 3:console.log("at submit ",this.state.password),this.register();case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"register",value:function(){var e={firstName:this.state.firstName,lastName:this.state.lastName,username:this.state.username,password:this.state.password,email:this.state.email,admin:!1};console.log(e),v.a.post("/user/register",e).then((function(e){return console.log(e.data)}))}},{key:"render",value:function(){return n.a.createElement("div",{id:"register-wrap"},n.a.createElement("div",{id:"join-text"},"Join"),n.a.createElement("form",{id:"register-box"},n.a.createElement("input",{type:"text",name:"first-name",id:"first-name",placeholder:"First Name",className:"user-info",onChange:this.assign.bind(this)}),n.a.createElement("input",{type:"text",name:"last-name",id:"last-name",placeholder:"Last Name",className:"user-info",onChange:this.assign.bind(this)}),n.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"Email",className:"user-info",onChange:this.assign.bind(this)}),n.a.createElement("input",{type:"text",name:"username",id:"username",placeholder:"Username",className:"user-info",onChange:this.assign.bind(this)}),n.a.createElement("input",{type:"password",name:"password",id:"password",placeholder:"Password",className:"user-info",onChange:this.assign.bind(this)}),n.a.createElement("input",{type:"submit",id:"submit-registration",onClick:this.onSubmit.bind(this)})))}}]),s}(n.a.Component)),y=a(88),C=(a(379),function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).state={},e}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{id:"collegeGroup-preview-background"},n.a.createElement("h6",{id:"collegeGroup-preview-name"},this.props.name))}}]),a}(n.a.Component)),S=(a(380),function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).handleOnInputChange=function(e){var t=e.target.value;s.setState({query:t}),s.showSearchResults(t)},s.state={collegeData:[],query:"",results:[],selectedCollege:""},s}return Object(m.a)(a,[{key:"compare",value:function(e,t){var a=e.name.toUpperCase(),s=t.name.toUpperCase(),n=0;return a>s?n=1:a<s&&(n=-1),n}},{key:"showSearchResults",value:function(e){this.setState({results:[]});for(var t=0,a=[],s=0;s<this.state.collegeData.length;s++)if(10==t){s=this.state.collegeData.length;for(var n=document.getElementsByClassName("searchResults"),i=0;i<n.length;i++)n[i].setAttribute("style","display: block"),n[i].innerHTML=a[i].name}else if(this.state.collegeData[s].name.toLowerCase().includes(e.toLowerCase()))t+=1,a.push(this.state.collegeData[s]);else if(s===this.state.collegeData.length-1)for(var o=document.getElementsByClassName("searchResults"),r=0;r<o.length;r++)r>t-1?o[r].setAttribute("style","display: none"):(o[r].setAttribute("style","display: block"),o[r].innerHTML=a[r].name);console.log(a)}},{key:"choseSearchResult",value:function(e){var t=document.getElementById("search-input");this.setState({selectedCollege:e.target.innerHTML}),t.value=e.target.innerHTML;for(var a=document.getElementsByClassName("searchResults"),s=0;s<a.length;s++)a[s].setAttribute("style","display: none")}},{key:"submitCollege",value:function(){var e=null,t=!1,a=document.getElementById("search-input"),s=document.getElementById("go-button");if(s.setAttribute("style","color: #49d5d1"),setTimeout((function(){s.setAttribute("style","color: whitesmoke")}),2500),""!=a.value){for(var n=0;n<this.state.collegeData.length;n++)this.state.collegeData[n].name.toLowerCase()==a.value.toLowerCase()&&(e=this.state.collegeData[n],t=!0);if(t)t&&(this.updateColleges(e),this.props.dismissOnSubmit(e),console.log("Valid college"));else{var i=document.getElementById("go-error");i.setAttribute("style","display: block"),setTimeout((function(){i.setAttribute("style","display: none")}),2500),console.log("Invalid college")}}else console.log("Nothing was entered")}},{key:"updateColleges",value:function(e){v.a.post("/homepage",{body:{college:e,_id:this.props.thisUserId},params:{_id:this.props.thisUserId}}).then((function(e){console.log(e),console.log(e.data)})).catch((function(e){return console.log("error ",e)}))}},{key:"render",value:function(){return this.state.collegeData.sort(this.compare),n.a.createElement("div",{id:"search-wrap",onClick:this.props.dismiss.bind(this)},n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"heading"},"Search for a College"),n.a.createElement("label",{id:"go-error"},"Please select a valid college"),n.a.createElement("input",{type:"text",id:"search-input",placeholder:"Search...",autoComplete:"none",onChange:this.handleOnInputChange.bind(this)}),n.a.createElement("button",{id:"go-button",onClick:this.submitCollege.bind(this)},"Go"),n.a.createElement("button",{className:"searchResults",id:"first",onClick:this.choseSearchResult.bind(this)},"first"),n.a.createElement("button",{className:"searchResults",id:"second",onClick:this.choseSearchResult.bind(this)},"second"),n.a.createElement("button",{className:"searchResults",id:"third",onClick:this.choseSearchResult.bind(this)},"third"),n.a.createElement("button",{className:"searchResults",id:"fourth",onClick:this.choseSearchResult.bind(this)},"fourth"),n.a.createElement("button",{className:"searchResults",id:"fifth",onClick:this.choseSearchResult.bind(this)},"fifth"),n.a.createElement("button",{className:"searchResults",id:"sixth",onClick:this.choseSearchResult.bind(this)},"sixth"),n.a.createElement("button",{className:"searchResults",id:"seventh",onClick:this.choseSearchResult.bind(this)},"seventh"),n.a.createElement("button",{className:"searchResults",id:"eighth",onClick:this.choseSearchResult.bind(this)},"eighth"),n.a.createElement("button",{className:"searchResults",id:"ninth",onClick:this.choseSearchResult.bind(this)},"ninth"),n.a.createElement("button",{className:"searchResults",id:"tenth",onClick:this.choseSearchResult},"tenth")))}},{key:"componentDidMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json").then((function(e){return e.json()})).then((function(t){t.filter((function(e){return"United States"===e.country}));e.setState({collegeData:t},(function(){}))}))}}]),a}(n.a.Component)),k=(a(381),function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this)).state={showSearch:!1,userId:"",userFirstName:"",userLastName:"",userAdmin:!1,userEmail:"",userCollegeGroups:[],username:""},s.pushToForum.bind(Object(d.a)(s)),s}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.getUserData.bind(this)()}},{key:"showSearchComponent",value:function(){this.setState({showSearch:!0})}},{key:"collapseSearch",value:function(e){console.log(e.target.id),this.state.showSearch&&"search-wrap"==e.target.id&&this.setState({showSearch:!1})}},{key:"collapseSearchAndAdd",value:function(e){this.setState((function(t){return{userCollegeGroups:[].concat(Object(y.a)(t.userCollegeGroups),[e])}})),this.setState({showSearch:!1})}},{key:"getUserData",value:function(){var e=this;console.log("getting "),v.a.get("/homepage",{params:{username:this.props.location.state.thisUsername}}).then((function(t){var a=t.data;e.setState((function(e){return{userId:a._id,userFirstName:a.firstName,userLastName:a.lastName,userEmail:a.email,userAdmin:a.admin,userCollegeGroups:a.collegeGroups}})),console.log("user data retrieved")})).catch((function(e){console.log(e)}))}},{key:"pushToForum",value:function(){var e=Object(c.a)(l.a.mark((function e(t){var a,s=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.target.textContent,fetch("http://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json").then((function(e){return e.json()})).then((function(e){var t;return e.map((function(e){e.name==a&&(t=e)})),t})).then((function(e){console.log("THIS IS FOUND COLLEGE ",e),s.props.history.push({pathname:"/forum",state:{thisUserID:s.state.userId,college:e,username:s.props.location.state.thisUsername,userFirstName:s.state.userFirstName,userLastName:s.state.userLastName,userEmail:s.state.userEmail}})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.userCollegeGroups.map((function(e){return n.a.createElement(C,{key:e.name,name:e.name})}));return n.a.createElement("div",null,this.state.showSearch?n.a.createElement(S,{dismiss:this.collapseSearch.bind(this),dismissOnSubmit:this.collapseSearchAndAdd.bind(this),thisUserId:this.state.userId}):null,n.a.createElement("div",{id:"homepage-div"},n.a.createElement("div",{id:"college-groups",onClick:this.pushToForum.bind(this)},e),n.a.createElement("button",{id:"add-college-group",onClick:this.showSearchComponent.bind(this)},"Add"),n.a.createElement("div",{id:"profile-section"},n.a.createElement("img",{id:"profile-picture",src:"https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v246-tent-33-business_2.jpg?bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&q=65&usm=15&vib=3&w=800&s=19ed9a41550e368fefefc653763e9497"}),n.a.createElement("h2",{id:"profile-name"},this.state.userFirstName,"'s homepage")),n.a.createElement("div",{id:"homepage-menu"})))}}]),a}(n.a.Component)),N=(a(382),function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).state={userProfileImage:"https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v246-tent-33-business_2.jpg?bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&q=65&usm=15&vib=3&w=800&s=19ed9a41550e368fefefc653763e9497"},e}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{id:"post-container"},n.a.createElement("div",{id:"forum-post-name"},this.props.post.firstName),n.a.createElement("div",{id:"forum-post-title"},this.props.post.postTitle),n.a.createElement("div",{id:"forum-post-text"},this.props.post.postText),n.a.createElement("img",{src:this.state.userProfileImage,id:"forum-post-profile-pic"})))}}]),a}(n.a.Component)),j=(a(383),a(384),a(660),function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).state={postText:"",postTitle:""},s}return Object(m.a)(a,[{key:"submitPost",value:function(){var e=this.props.college.name;console.log("it is ",this.props.firstName," and ",this.props.lastName," and ",this.props.email),v.a.post("/forum",{college:e,firstName:this.props.firstName,lastName:this.props.lastName,username:this.props.username,postTitle:this.state.postTitle,postText:this.state.postText,email:this.props.email}).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)})),this.props.hide()}},{key:"handleChange",value:function(e){"post-title"===e.target.name&&this.setState({postTitle:e.target.value}),"post-text"===e.target.name&&this.setState({postText:e.target.value})}},{key:"render",value:function(){return n.a.createElement("div",{id:"create-post-wrap",onClick:this.props.dismiss.bind(this)},n.a.createElement("div",{id:"create-post-container"},n.a.createElement("h3",{id:"create-post-text"},"Create a post"),n.a.createElement("h2",{id:"create-post-title-label"},"Title"),n.a.createElement("textarea",{id:"create-title",name:"post-title",onChange:this.handleChange.bind(this)}),n.a.createElement("h2",{id:"create-post-text-label"},"Text"),n.a.createElement("textarea",{id:"create-text",name:"post-text",onChange:this.handleChange.bind(this)}),n.a.createElement("div",{id:"create-post-submit",onClick:this.submitPost.bind(this)},"Submit")))}}]),a}(n.a.Component)),O=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).state={thisUserID:"",college:"",username:"",userId:"",userFirstName:"",userLastName:"",userEmail:"",userAdmin:!1,userCollegeGroups:[],showCreatePost:!1,posts:[]},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.getPostData(),console.log("LOADED")}},{key:"collapseCreatePost",value:function(e){this.state.showCreatePost&&"create-post-wrap"==e.target.id&&this.setState({showCreatePost:!1}),console.log("STATE IS ",this.state.showCreatePost)}},{key:"collapseCreatePostAndSubmit",value:function(e){this.setState((function(t){return{userCollegeGroups:[].concat(Object(y.a)(t.userCollegeGroups),[e])}})),this.setState({showCreatePost:!1})}},{key:"getPostData",value:function(){var e=this;console.log("COLLEGE RIGHT HERE IS ",this.props.location.state.college.name),v.a.get("/forum",{college:this.props.location.state.college.name}).then((function(t){var a=t.data;e.setState({posts:a}),console.log("post data retrieved")})).catch((function(e){console.log(e)}))}},{key:"showCreatePost",value:function(){this.setState({showCreatePost:!0})}},{key:"hideCreatePost",value:function(){this.setState({showCreatePost:!1})}},{key:"render",value:function(){var e=-1,t=this.state.posts.map((function(t){return console.log("POST IS ",t),e+=1,n.a.createElement(N,{key:e,post:t})}));return n.a.createElement("div",{id:"forum-container"},n.a.createElement("div",{id:"forum-header"},n.a.createElement("h3",{id:"forum-college-country"},this.props.location.state.college.country),n.a.createElement("h1",{id:"forum-college-name"},this.props.location.state.college.name),n.a.createElement("h3",{id:"forum-college-webpages"},this.props.location.state.college.web_pages),n.a.createElement("div",{id:"add-post-to-forum",onClick:this.showCreatePost.bind(this)},n.a.createElement("h6",null,"Add"))),n.a.createElement("div",{id:"forum-feed"},t),this.state.showCreatePost?n.a.createElement("div",null,n.a.createElement(j,{dismiss:this.collapseCreatePost.bind(this),college:this.props.location.state.college,username:this.props.location.state.username,firstName:this.props.location.state.userFirstName,lastName:this.props.location.state.userLastName,email:this.props.location.state.userEmail,hide:this.hideCreatePost.bind(this)})):null)}}]),a}(n.a.Component),x=a(6);var P=function(){return n.a.createElement(f.a,null,n.a.createElement(x.a,{path:"/",exact:!0,component:E}),n.a.createElement(x.a,{path:"/user/register",exact:!0,component:w}),n.a.createElement(x.a,{path:"/homepage",exact:!0,component:k}),n.a.createElement(x.a,{path:"/forum",exact:!0,component:O}))};o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(P,null)),document.getElementById("root"))}},[[252,1,2]]]);
//# sourceMappingURL=main.a3242edd.chunk.js.map