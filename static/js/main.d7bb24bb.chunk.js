(window.webpackJsonpimagep=window.webpackJsonpimagep||[]).push([[0],{23:function(e){e.exports=JSON.parse('{"apiDomain":"https://api.github.com","auth":{"dev":{"clientId":"f13f3e45b57022b4c556","authorizeURL":"https://github.com/login/oauth/authorize","accessURL":"https://us-central1-imagep.cloudfunctions.net/github-auth-dev"},"prod":{"clientId":"3cc05cf4699e4a9e3096","authorizeURL":"https://github.com/login/oauth/authorize","accessURL":"https://us-central1-imagep.cloudfunctions.net/github-auth"}}}')},27:function(e){e.exports=JSON.parse('["https://docs.opencv.org/3.4.9/opencv.js","https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js","https://cdn.jsdelivr.net/npm/p5@0.10.2/lib/p5.min.js","https://cdn.jsdelivr.net/npm/ml5@0.4.3/dist/ml5.min.js"]')},51:function(e,t,a){e.exports=a(95)},77:function(e,t,a){},78:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(25),s=a.n(r),c=a(19),l=a(22),o=a(20),u=a(10),m=a.n(u);var d=Object(o.a)({set:function(e,t){return t},setLoading:function(){return{isLoading:!0}},reset:function(){return null},load:Object(o.b)((function(e){return e.setLoading(),m.a.get("user").then((function(t){var a=t.data;return e.set({name:a.name,login:a.login,avatarURL:a.avatar_url,profileURL:a.html_url}),t})).catch((function(t){throw e.reset(),t}))}))}),h=a(43),p=a.n(h),f=a(27);var g={details:{name:"Untitled function",libs:[f[0]],isStarred:!1},inputs:[],statements:""},v=function(){return console.log(arguments),p.a.apply(window,arguments)},b=Object(o.a)({set:function(e,t){return t},setName:function(e,t){return v(e,{details:{name:{$set:t}}})},addLib:function(e,t){return v(e,{details:{libs:{$push:[t]}}})},removeLib:function(e,t){return v(e,{details:{libs:function(e){return e.filter((function(e){return e!==t}))}}})},setLoading:function(){return{isLoading:!0}},reset:function(){return null},load:Object(o.b)((function(e,t){return e.setLoading(),m.a.get("gists/".concat(t)).then((function(t){var a=t.data;return e.set(a),t})).catch((function(t){throw e.reset(),t}))}))},g),E=Object(l.b)({currentUser:d,currentFunction:b}),N=Object(l.c)(E);var L={isDev:function(){return!1},isTouch:function(){return"ontouchstart"in window}},y=a(23),S=L.isDev()?y.auth.dev:y.auth.prod;function w(){O()}function j(){return localStorage.getItem("imagep_access_token")}function O(e){e="string"===typeof e?e:"",localStorage.setItem("imagep_access_token",e),window.dispatchEvent(new StorageEvent("storage",{key:"imagep_access_token",newValue:e}))}function U(e){m.a.defaults.baseURL=y.apiDomain,m.a.defaults.headers.common["User-Agent"]="imagep-app",m.a.defaults.headers.common.Accept="application/vnd.github.v3+json",m.a.defaults.headers.common.Authorization="token "+j(),function(e){j()?e.load():e.reset()}(e)}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=a(49),R=a(17),I=(a(77),function(){var e=localStorage.getItem("imagep_github_state");e||(e=function(e){for(var t=[],a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=a.length,i=0;i<e;i++)t.push(a.charAt(Math.floor(Math.random()*n)));return t.join("")}(12),localStorage.setItem("imagep_github_state",e));var t=new URL(S.authorizeURL);return t.searchParams.set("client_id",S.clientId),t.searchParams.set("state",e),t.searchParams.set("scope","gist"),t.toString()}());var M=function(){return i.a.createElement("a",{href:I,target:"_blank",rel:"noopener noreferrer",className:"sign-in-button"},i.a.createElement("i",{className:"fa fa-github"})," Sign in with GitHub")},C=a(16);a(78);var _=function(e){var t=e.currentUser;return i.a.createElement("div",{className:"user-menu"},i.a.createElement(C.a,{alignRight:!0},i.a.createElement(C.a.Toggle,{variant:"link"},i.a.createElement("img",{alt:"",className:"avatar",src:t.avatarURL+"s=40",height:"20",width:"20"})),i.a.createElement(C.a.Menu,null,i.a.createElement(C.a.Item,{href:"#/your"},"Your Functions"),i.a.createElement(C.a.Item,{href:"#/starred"},"Starred Functions"),i.a.createElement(C.a.Item,{href:"#/gallery"},"Gallery"),i.a.createElement(C.a.Divider,null),i.a.createElement(C.a.Item,{onClick:w},"Sign Out"))))};a(80);var x=Object(c.b)((function(e){return{currentUser:e.currentUser}}))((function(e){var t;return!1===window.navigator.onLine?t=i.a.createElement("i",{class:"fa fa-exclamation-circle","aria-hidden":"true",title:"Network cannot be reached!"}):e.currentUser?t=e.currentUser.isLoading?i.a.createElement("i",{className:"fa fa-spinner fa-spin","aria-hidden":"true"}):i.a.createElement(_,{currentUser:e.currentUser}):-1===window.location.hash.indexOf("/signin")&&(t=i.a.createElement(M,null)),i.a.createElement("header",{className:"navbar"},i.a.createElement("span",{className:"logo"},i.a.createElement("a",{href:"/#/"},"ImageP"),i.a.createElement("span",{className:"company-name"}," by ImageLabs")),t)})),z=a(11),P=a(12),D=a(14),A=a(13),G=a(15),W=(a(81),{IN_PROGRESS:Symbol("in-progress"),SUCCESS:Symbol("success"),FAILURE:Symbol("failure")}),F=function(e){function t(e){var a;return Object(z.a)(this,t),(a=Object(D.a)(this,Object(A.a)(t).call(this,e))).state={signInStatus:W.IN_PROGRESS},a.init(e),a}return Object(G.a)(t,e),Object(P.a)(t,[{key:"init",value:function(e){var t,a,n=this,i=new URLSearchParams(window.location.search);(t=i.get("code"),a=i.get("state"),a===localStorage.getItem("imagep_github_state")?m.a.post(S.accessURL,{code:t,state:a}).then((function(e){return O(e.data.access_token),e})).catch((function(e){throw O(),e})):Promise.reject()).then((function(e){n.setSignInStatus(W.SUCCESS),window.open("","_self").close()})).catch((function(){n.setSignInStatus(W.FAILURE)}))}},{key:"setSignInStatus",value:function(e){this.setState({signInStatus:e})}},{key:"getMessage",value:function(e){switch(e){case W.IN_PROGRESS:return i.a.createElement("div",null,i.a.createElement("i",{className:"fa fa-spinner fa-spin","aria-hidden":"true"}),"Signing into GitHub...");case W.SUCCESS:return i.a.createElement("div",{className:"alert alert-success"},i.a.createElement("i",{className:"fa fa-check-circle-o","aria-hidden":"true"}),"Signed into GitHub successfully!");case W.FAILURE:return i.a.createElement("div",{className:"alert alert-danger"},i.a.createElement("i",{className:"fa fa-exclamation-triangle","aria-hidden":"true"}),"Signing into GitHub failed!");default:return i.a.createElement("div",{className:"alert alert-info"},i.a.createElement("i",{className:"fa fa-exclamation-triangle","aria-hidden":"true"}),"Not signed into GitHub!")}}},{key:"render",value:function(){var e=this.getMessage(this.state.signInStatus);return i.a.createElement("div",{className:"sign-in"},i.a.createElement("i",{className:"fa fa-5x fa-github"}),e)}}]),t}(i.a.Component),T=a(18),H=(a(82),function(e){function t(e){var a;return Object(z.a)(this,t),(a=Object(D.a)(this,Object(A.a)(t).call(this,e))).state={isMinimized:e.isMinimized||!1},a.toggleMinMax=a.toggleMinMax.bind(Object(T.a)(a)),a}return Object(G.a)(t,e),Object(P.a)(t,[{key:"toggleMinMax",value:function(){!1!==this.props.minimizable&&this.setState({isMinimized:!this.state.isMinimized})}},{key:"collateClassNames",value:function(e){return!1===this.props.minimizable?e+=" minimize-disabled":this.state.isMinimized&&(e+=" minimized"),e}},{key:"render",value:function(){var e=this.collateClassNames("panel");return i.a.createElement("div",{className:e},i.a.createElement("div",{className:"panel-header",onClick:this.toggleMinMax},i.a.createElement("span",{className:"panel-name"},i.a.createElement("span",{className:"icon-container"},i.a.createElement("i",{className:"fa fa-chevron-down min-max-icon","aria-hidden":"true"})),this.props.title),i.a.createElement("span",{className:"panel-controls"},this.props.controls)),i.a.createElement("div",{className:"panel-body"},this.props.children))}}]),t}(i.a.Component)),J=a(47),X=(a(83),a(84),a(85),{mode:"javascript",lineNumbers:!0,lineWrapping:!0});var B=function(e){return i.a.createElement("div",{className:"code"},i.a.createElement(J.UnControlled,{value:e.value,options:X,onChange:function(e,t,a){}}))},Y=a(48),$=(a(86),function(e){function t(e){var a;return Object(z.a)(this,t),(a=Object(D.a)(this,Object(A.a)(t).call(this,e))).getUnusedLibs=Object(Y.a)((function(e){return f.filter((function(t){return!e.includes(t)}))})),a.state={libURL:"",message:""},a}return Object(G.a)(t,e),Object(P.a)(t,[{key:"setLibURL",value:function(e){this.setState({libURL:e,message:""})}},{key:"addLibURL",value:function(){this.props.libs.includes(this.state.libURL)?this.setState({message:"".concat(this.state.libURL," is already added!")}):(this.props.actions.addLib(this.state.libURL),this.setLibURL(""))}},{key:"render",value:function(){var e=this,t=this.getUnusedLibs(this.props.libs);return i.a.createElement("div",{className:"add-lib-input input-group mb-3"},i.a.createElement("input",{type:"search",list:"libraries-list",placeholder:"Add another library. Select from the list or type in a custom URL!",className:"form-control "+(this.state.message?"is-invalid":""),value:this.state.libURL,onChange:function(t){return e.setLibURL(t.target.value)}}),i.a.createElement("datalist",{id:"libraries-list"},t.map((function(e){return i.a.createElement("option",{value:e,key:e})}))),i.a.createElement("div",{className:"invalid-feedback order-last"},this.state.message),i.a.createElement("div",{className:"input-group-append"},i.a.createElement("button",{className:"btn btn-outline-success",type:"button",disabled:!this.state.libURL,onClick:function(t){return e.addLibURL()}},i.a.createElement("i",{className:"fa fa-plus","aria-hidden":"true"}))))}}]),t}(i.a.Component)),V=(a(87),function(e){function t(){return Object(z.a)(this,t),Object(D.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(G.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:this.collateClassNames("function-details-panel")},i.a.createElement("div",{className:"panel-header",onClick:this.toggleMinMax},i.a.createElement("span",{className:"panel-name"},i.a.createElement("span",{className:"icon-container"},i.a.createElement("i",{className:"fa fa-chevron-down min-max-icon","aria-hidden":"true"})),this.props.details.name,i.a.createElement("span",{className:"badge badge-secondary",title:"Libraries used"},this.props.details.libs.length)),i.a.createElement("span",{className:"panel-controls"},i.a.createElement("i",{className:"fa fa-star-o","aria-hidden":"true"}),i.a.createElement("i",{className:"fa fa-save","aria-hidden":"true"}))),i.a.createElement("div",{className:"panel-body"},i.a.createElement("div",{className:"input-group mb-3"},i.a.createElement("div",{className:"input-group-prepend"},i.a.createElement("span",{className:"input-group-text",id:"inputGroup-sizing-sm"},"Name")),i.a.createElement("input",{type:"test",value:this.props.details.name,onChange:function(t){return e.props.actions.setName(t.target.value)},className:"form-control","aria-label":"Small","aria-describedby":"inputGroup-sizing-sm"})),this.props.details.libs.map((function(t){return i.a.createElement("div",{className:"input-group mb-3",key:t},i.a.createElement("input",{value:t,readOnly:!0,type:"text",className:"form-control"}),i.a.createElement("div",{className:"input-group-append"},i.a.createElement("button",{className:"btn btn-outline-danger",type:"button",onClick:function(a){return e.props.actions.removeLib(t)}},i.a.createElement("i",{className:"fa fa-minus","aria-hidden":"true"}))))}),this),i.a.createElement($,{libs:this.props.details.libs,actions:this.props.actions})))}}]),t}(H)),q=(a(88),function(e){function t(e){var a;return Object(z.a)(this,t),(a=Object(D.a)(this,Object(A.a)(t).call(this,e))).state={leftPanelWidth:50},a.startMouseDrag=a.startMouseDrag.bind(Object(T.a)(a)),a.startTouchDrag=a.startTouchDrag.bind(Object(T.a)(a)),a}return Object(G.a)(t,e),Object(P.a)(t,[{key:"setLeftPanelWidth",value:function(e){var t=e/window.screen.width*100;this.setState({leftPanelWidth:t})}},{key:"startMouseDrag",value:function(){var e=this,t=function(t){e.setLeftPanelWidth(t.clientX)};document.addEventListener("mousemove",t),document.addEventListener("mouseup",(function(e){document.removeEventListener("mousemove",t)}))}},{key:"startTouchDrag",value:function(e){var t=this;if(window.innerHeight<window.innerWidth){var a=e.currentTarget.clientWidth-e.touches[0].clientX,n=function(e){t.setLeftPanelWidth(e.touches[0].clientX+a)};document.addEventListener("touchmove",n),document.addEventListener("touchend",(function(e){document.removeEventListener("touchmove",n)}))}}},{key:"render",value:function(){return i.a.createElement("div",{className:"editor"},i.a.createElement(V,{details:this.props.currentFunction.details,actions:this.props.currentFunctionActions,isMinimized:!0}),i.a.createElement("div",{className:"editor-body"},i.a.createElement("div",{className:"left-panels",style:{width:this.state.leftPanelWidth+"%"},onTouchStart:this.startTouchDrag},i.a.createElement(H,{title:"Input",controls:i.a.createElement("i",{className:"fa fa-plus","aria-hidden":"true"})},i.a.createElement("img",{src:"/logo512.png",alt:"Italian Trulli"})),i.a.createElement(H,{title:"Result",minimizable:!1},i.a.createElement("img",{src:"/logo512.png",alt:"Italian Trulli"}))),i.a.createElement("div",{className:"panel-gutter"},i.a.createElement("div",{className:"gutter-bar",onMouseDown:this.startMouseDrag},i.a.createElement("i",{className:"fa fa-ellipsis-v","aria-hidden":"true"}))),i.a.createElement("div",{className:"function-code",style:{width:100-this.state.leftPanelWidth+"%"}},i.a.createElement(B,{value:"var x=1;"}))))}}]),t}(i.a.Component)),K=Object(c.b)((function(e){return{currentFunction:e.currentFunction}}),(function(e){return{currentFunctionActions:b.getActions(e)}}))(q);a(89);var Q=function(){return i.a.createElement("div",{className:"starred"},i.a.createElement("h1",null,"Starred"))};a(90);var Z=function(){return i.a.createElement("div",{className:"your"},i.a.createElement("h1",null,"Your"))};a(91);var ee=function(){return i.a.createElement("div",{className:"gallery"},i.a.createElement("h1",null,"Gallery"))};a(92);var te=function(){return i.a.createElement("div",{className:" is-touch"},i.a.createElement(x,null),i.a.createElement(k.a,{basename:"/"},i.a.createElement(R.a,{exact:!0,path:"/",component:K}),i.a.createElement(R.a,{path:"/starred",component:Q}),i.a.createElement(R.a,{path:"/your",component:Z}),i.a.createElement(R.a,{path:"/gallery",component:ee}),i.a.createElement(R.a,{path:"/signin",component:F})))};a(94);!function(e){var t,a=d.getActions(e.dispatch);U(a),t=function(){return U(a)},window.addEventListener("storage",(function(e){"imagep_access_token"===e.key&&t(e)}))}(N);var ae=document.getElementById("root");s.a.render(i.a.createElement(c.a,{store:N},i.a.createElement(te,null)),ae),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[51,1,2]]]);
//# sourceMappingURL=main.d7bb24bb.chunk.js.map