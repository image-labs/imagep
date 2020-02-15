(window.webpackJsonpimagep=window.webpackJsonpimagep||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(28),s=a.n(r),c=a(22),o=a(25),l=a(17),u=a(5),m=a.n(u);var d=Object(l.a)({set:function(e,t){return t},setLoading:function(){return{isLoading:!0}},reset:function(){return null},load:Object(l.b)((function(e){return e.setLoading(),m.a.get("user").then((function(t){var a=t.data;return e.set({name:a.name,login:a.login,avatarURL:a.avatar_url,profileURL:a.html_url}),t})).catch((function(t){throw e.reset(),t}))}))}),p=a(26),h=a(46),f=a(54),g=a(21),v=a(20),b=a.n(v);var E={isDev:function(){return!1},isTouch:function(){return"ontouchstart"in window}},N=a(27),S=E.isDev()?N.auth.dev:N.auth.prod;function j(){L()}function O(){return localStorage.getItem("imagep_access_token")}function L(e){e="string"===typeof e?e:"",localStorage.setItem("imagep_access_token",e),window.dispatchEvent(new StorageEvent("storage",{key:"imagep_access_token",newValue:e}))}var y={LOADING:Symbol("LOADING"),SAVING:Symbol("SAVING"),LOADING_ERROR:Symbol("LOADING_ERROR"),SAVING_ERROR:Symbol("SAVING_ERROR")};function R(e){return Object(g.get)(e,"response.data.message",e.message||"Unknown Error!")}function w(e){return e===y.LOADING||e===y.SAVING}var U=a(30);function k(e){return"statements.".concat(e.language)}function I(e){var t=Object(g.get)(e,["files","imagep.json","content"]);if(!t)throw new Error("Not created with ImageP");var a=JSON.parse(t),n=a.inputs,i=Object(f.a)(a,["inputs"]),r=Object(g.get)(e,["files",k(i),"content"]);return"// ImageP"===r&&(r=""),{id:e.id,details:Object(h.a)({},i,{owner:{login:e.owner.login,avatarURL:e.owner.avatar_url,profileURL:e.owner.html_url},gitHubURL:e.html_url,isStarred:!1}),inputs:n,statements:r}}var A={id:void 0,details:{name:"Untitled function",language:"js",owner:void 0,gitHubURL:void 0,isStarred:!1,libs:[U[0]]},inputs:[],statements:"",ajax:null},x=Object(l.a)({set:function(e,t){return t},reset:function(){return A},setName:function(e,t){return b()(e,{details:{name:{$set:t}}})},setStatements:function(e,t){return b()(e,{statements:{$set:t}})},addLib:function(e,t){return b()(e,{details:{libs:{$push:[t]}}})},removeLib:function(e,t){return b()(e,{details:{libs:function(e){return e.filter((function(e){return e!==t}))}}})},setStarred:function(e,t){return b()(e,{details:{isStarred:{$set:t}}})},toggleStarred:Object(l.b)((function(e,t){var a=t();return e.setStarred(y.SAVING),(a.details.isStarred?m.a.delete("gists/".concat(a.id,"/star")):m.a.put("gists/".concat(a.id,"/star"))).then((function(t){e.setStarred(!a.details.isStarred)}),(function(t){e.setStarred(a.details.isStarred)}))})),loadStarred:Object(l.b)((function(e,t){var a=t();return e.setStarred(y.LOADING),m.a.get("gists/".concat(a.id,"/star")).then((function(t){e.setStarred(!0)}),(function(t){e.setStarred(!1)}))})),setAjax:function(e,t){return b()(e,{ajax:{$set:t}})},resetAjax:function(e){return b()(e,{$unset:["ajax"]})},load:Object(l.b)((function(e,t,a){var n=t();return w(Object(g.get)(n,"ajax.status"))?Promise.reject():(e.setAjax({status:y.LOADING,message:"Loading function"}),m.a.get("gists/".concat(a)).then((function(t){var a=I(t.data);return e.set(a),e.loadStarred(),a})).catch((function(t){e.setAjax({status:y.LOADING_ERROR,message:R(t)})})))})),save:Object(l.b)((function(e,t,a){var n=t();if(w(Object(g.get)(n,"ajax.status")))return Promise.reject();var i=function(e){var t,a=e.details,n=e.details.name||"Untitled function";return{description:n,public:!0,files:(t={},Object(p.a)(t,"imagep.json",{content:JSON.stringify({name:n,language:a.language,libs:a.libs,inputs:e.inputs})}),Object(p.a)(t,k(a),{content:e.statements||"// ImageP"}),t)}}(n);return e.setAjax({status:y.SAVING,message:"Saving function"}),(n.id&&a.login===n.details.owner.login?m.a.patch("gists/".concat(n.id),i):m.a.post("gists",i)).then((function(t){var a=I(t.data);return e.set(a),e.loadStarred(),a}),(function(t){var a=R(t);throw e.setAjax({status:y.SAVING_ERROR,message:"Save Failed : ".concat(a)}),t}))}))},A),_=Object(o.b)({currentUser:d,currentFunction:x}),G=Object(o.c)(_);function C(e){m.a.defaults.baseURL=N.apiDomain,m.a.defaults.headers.common.Accept="application/vnd.github.v3+json",m.a.defaults.headers.common.Authorization="token "+O(),function(e){O()?e.load():e.reset()}(e)}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=a(53),D=a(16),P=(a(82),function(){var e=localStorage.getItem("imagep_github_state");e||(e=function(e){for(var t=[],a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=a.length,i=0;i<e;i++)t.push(a.charAt(Math.floor(Math.random()*n)));return t.join("")}(12),localStorage.setItem("imagep_github_state",e));var t=new URL(S.authorizeURL);return t.searchParams.set("client_id",S.clientId),t.searchParams.set("state",e),t.searchParams.set("scope","gist"),t.toString()}());var z=function(){return i.a.createElement("a",{href:P,target:"_blank",rel:"noopener noreferrer",className:"sign-in-button"},i.a.createElement("i",{className:"fa fa-github"})," Sign in ",i.a.createElement("span",{className:"with-gh"},"with GitHub"))},F=a(18);a(83);var H=function(e){var t=e.currentUser;return i.a.createElement("div",{className:"user-menu"},i.a.createElement(F.a,{alignRight:!0},i.a.createElement(F.a.Toggle,{variant:"link"},i.a.createElement("img",{alt:"",className:"avatar",src:t.avatarURL+"s=40",height:"20",width:"20"})),i.a.createElement(F.a.Menu,null,i.a.createElement(F.a.Item,{href:"#/your"},"Your Functions"),i.a.createElement(F.a.Item,{href:"#/starred"},"Starred Functions"),i.a.createElement(F.a.Item,{href:"#/gallery"},"Gallery"),i.a.createElement(F.a.Divider,null),i.a.createElement(F.a.Item,{onClick:j},"Sign Out"))))};a(85);var V=Object(c.b)((function(e){return{currentUser:e.currentUser}}))((function(e){var t;return!1===window.navigator.onLine?t=i.a.createElement("i",{class:"fa fa-exclamation-circle","aria-hidden":"true",title:"Network cannot be reached!"}):e.currentUser?t=e.currentUser.isLoading?i.a.createElement("i",{className:"fa fa-spinner fa-spin","aria-hidden":"true"}):i.a.createElement(H,{currentUser:e.currentUser}):-1===window.location.hash.indexOf("/signin")&&(t=i.a.createElement(z,null)),i.a.createElement("header",{className:"navbar"},i.a.createElement("span",{className:"logo"},i.a.createElement("a",{href:"/#/"},"ImageP"),i.a.createElement("span",{className:"company-name"}," by ImageLabs")),t)})),W=a(11),T=a(12),J=a(14),$=a(13),B=a(15);a(86);var X=function(e){return i.a.createElement("div",{className:"message-panel "+e.className},i.a.createElement("i",{className:"fa "+e.icon,"aria-hidden":"true"}),i.a.createElement("div",{className:"message-body"},e.body||e.children),e.actions&&i.a.createElement("div",{className:"message-actions"},e.actions))},Y=(a(87),{IN_PROGRESS:Symbol("in-progress"),SUCCESS:Symbol("success"),FAILURE:Symbol("failure")}),q=function(e){function t(e){var a;return Object(W.a)(this,t),(a=Object(J.a)(this,Object($.a)(t).call(this,e))).state={signInStatus:Y.IN_PROGRESS},a.init(e),a}return Object(B.a)(t,e),Object(T.a)(t,[{key:"init",value:function(e){var t,a,n=this,i=new URLSearchParams(window.location.search);(t=i.get("code"),a=i.get("state"),a===localStorage.getItem("imagep_github_state")?m.a.post(S.accessURL,{code:t,state:a}).then((function(e){return L(e.data.access_token),e})).catch((function(e){throw L(),e})):Promise.reject()).then((function(e){n.setSignInStatus(Y.SUCCESS),window.open("","_self").close()})).catch((function(){n.setSignInStatus(Y.FAILURE)}))}},{key:"setSignInStatus",value:function(e){this.setState({signInStatus:e})}},{key:"getMessage",value:function(e){switch(e){case Y.IN_PROGRESS:return i.a.createElement("div",null,i.a.createElement("i",{className:"fa fa-spinner fa-spin","aria-hidden":"true"}),"Signing into GitHub...");case Y.SUCCESS:return i.a.createElement("div",{className:"alert alert-success"},i.a.createElement("i",{className:"fa fa-check-circle-o","aria-hidden":"true"}),"Signed into GitHub successfully!");case Y.FAILURE:return i.a.createElement("div",{className:"alert alert-danger"},i.a.createElement("i",{className:"fa fa-exclamation-triangle","aria-hidden":"true"}),"Signing into GitHub failed!");default:return i.a.createElement("div",{className:"alert alert-info"},i.a.createElement("i",{className:"fa fa-exclamation-triangle","aria-hidden":"true"}),"Not signed into GitHub!")}}},{key:"render",value:function(){var e=this.getMessage(this.state.signInStatus);return i.a.createElement(X,{className:"sign-in",icon:"fa-5x fa-github",body:e})}}]),t}(i.a.Component),K=a(19),Q=(a(88),function(e){function t(e){var a;return Object(W.a)(this,t),(a=Object(J.a)(this,Object($.a)(t).call(this,e))).state={isMinimized:e.isMinimized||!1},a.toggleMinMax=a.toggleMinMax.bind(Object(K.a)(a)),a}return Object(B.a)(t,e),Object(T.a)(t,[{key:"toggleMinMax",value:function(){!1!==this.props.minimizable&&this.setState({isMinimized:!this.state.isMinimized})}},{key:"collateClassNames",value:function(e){return!1===this.props.minimizable?e+=" minimize-disabled":this.state.isMinimized&&(e+=" minimized"),e}},{key:"render",value:function(){var e=this.collateClassNames("panel");return i.a.createElement("div",{className:e},i.a.createElement("div",{className:"panel-header",onClick:this.toggleMinMax},i.a.createElement("span",{className:"panel-name"},i.a.createElement("span",{className:"icon-container"},i.a.createElement("i",{className:"fa fa-chevron-down min-max-icon","aria-hidden":"true"})),this.props.title),i.a.createElement("span",{className:"panel-controls"},this.props.controls)),i.a.createElement("div",{className:"panel-body"},this.props.children))}}]),t}(i.a.Component)),Z=a(50),ee=(a(89),a(90),a(91),{mode:"javascript",lineNumbers:!0,lineWrapping:!0});var te=function(e){return i.a.createElement("div",{className:"code"},i.a.createElement(Z.Controlled,{value:e.value,options:ee,onBeforeChange:function(t,a,n){return e.onChange(n)}}))},ae=a(51),ne=(a(92),function(e){function t(e){var a;return Object(W.a)(this,t),(a=Object(J.a)(this,Object($.a)(t).call(this,e))).getUnusedLibs=Object(ae.a)((function(e){return U.filter((function(t){return!e.includes(t)}))})),a.state={libURL:"",message:""},a}return Object(B.a)(t,e),Object(T.a)(t,[{key:"setLibURL",value:function(e){this.setState({libURL:e,message:""})}},{key:"addLibURL",value:function(){this.props.libs.includes(this.state.libURL)?this.setState({message:"".concat(this.state.libURL," is already added!")}):(this.props.actions.addLib(this.state.libURL),this.setLibURL(""))}},{key:"render",value:function(){var e=this,t=this.getUnusedLibs(this.props.libs);return i.a.createElement("div",{className:"add-lib-input input-group mb-3"},i.a.createElement("input",{type:"search",list:"libraries-list",placeholder:"Add another library. Select from the list or type in a custom URL!",className:"form-control "+(this.state.message?"is-invalid":""),value:this.state.libURL,onChange:function(t){return e.setLibURL(t.target.value)}}),i.a.createElement("datalist",{id:"libraries-list"},t.map((function(e){return i.a.createElement("option",{value:e,key:e})}))),i.a.createElement("div",{className:"invalid-feedback order-last"},this.state.message),i.a.createElement("div",{className:"input-group-append"},i.a.createElement("button",{className:"btn btn-outline-success",type:"button",disabled:!this.state.libURL,onClick:function(t){return e.addLibURL()}},i.a.createElement("i",{className:"fa fa-plus","aria-hidden":"true"}))))}}]),t}(i.a.Component)),ie=(a(93),function(e){function t(){return Object(W.a)(this,t),Object(J.a)(this,Object($.a)(t).apply(this,arguments))}return Object(B.a)(t,e),Object(T.a)(t,[{key:"onSave",value:function(e){e.stopPropagation(),this.props.actions.save(this.props.currentUser).then(this.props.afterSave)}},{key:"toggleStarred",value:function(e){e.stopPropagation(),this.props.details.gitHubURL&&this.props.actions.toggleStarred()}},{key:"render",value:function(){var e,t=this,a=!!this.props.details.gitHubURL||void 0;return e=w(this.props.details.isStarred)?i.a.createElement("i",{className:"fa fa-spinner fa-spin"}):this.props.details.isStarred?i.a.createElement("i",{title:"Unstar current function",className:"fa fa-star "+(a&&"active"),onClick:function(e){return t.toggleStarred(e)}}):i.a.createElement("i",{title:"Star current function",className:"fa fa-star-o "+(a&&"active"),onClick:function(e){return t.toggleStarred(e)}}),i.a.createElement("div",{className:this.collateClassNames("function-details-panel")},i.a.createElement("div",{className:"panel-header",onClick:this.toggleMinMax},i.a.createElement("div",{className:"panel-header-body"},i.a.createElement("span",{className:"panel-name"},i.a.createElement("span",{className:"icon-container"},i.a.createElement("i",{className:"fa fa-chevron-down min-max-icon","aria-hidden":"true"})),this.props.details.name),i.a.createElement("span",{className:"library-count badge badge-secondary",title:"Libraries used"},this.props.details.libs.length)),i.a.createElement("span",{className:"panel-controls"},i.a.createElement("a",{title:"Open in GitHub",target:"_blank",rel:"noopener noreferrer",href:this.props.details.gitHubURL,className:"fa fa-github "+(a&&"active"),onClick:function(e){return e.stopPropagation()}}),e,i.a.createElement("i",{className:"fa fa-save active",title:"Save Function",onClick:function(e){return t.onSave(e)},"aria-hidden":"true"}))),i.a.createElement("div",{className:"panel-body"},i.a.createElement("div",{className:"input-group mb-3"},i.a.createElement("div",{className:"input-group-prepend"},i.a.createElement("span",{className:"input-group-text",id:"inputGroup-sizing-sm"},"Name")),i.a.createElement("input",{type:"test",value:this.props.details.name,onChange:function(e){return t.props.actions.setName(e.target.value)},className:"form-control","aria-label":"Small","aria-describedby":"inputGroup-sizing-sm"}),this.props.details.owner&&i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"avatar",title:"Author : ".concat(this.props.details.owner.login),href:this.props.details.owner.profileURL},i.a.createElement("img",{alt:"",src:this.props.details.owner.avatarURL+"s=40",height:"36",width:"36"}))),this.props.details.libs.map((function(e){return i.a.createElement("div",{className:"input-group mb-3",key:e},i.a.createElement("input",{value:e,readOnly:!0,type:"text",className:"form-control"}),i.a.createElement("div",{className:"input-group-append"},i.a.createElement("button",{className:"btn btn-outline-danger",type:"button",onClick:function(a){return t.props.actions.removeLib(e)}},i.a.createElement("i",{className:"fa fa-minus","aria-hidden":"true"}))))}),this),i.a.createElement(ne,{libs:this.props.details.libs,actions:this.props.actions})))}}]),t}(Q)),re=(a(94),function(e){function t(e){var a;return Object(W.a)(this,t),(a=Object(J.a)(this,Object($.a)(t).call(this,e))).state={leftPanelWidth:50},a.startMouseDrag=a.startMouseDrag.bind(Object(K.a)(a)),a.startTouchDrag=a.startTouchDrag.bind(Object(K.a)(a)),a.afterSave=a.afterSave.bind(Object(K.a)(a)),a}return Object(B.a)(t,e),Object(T.a)(t,[{key:"initCurrentFunction",value:function(){var e=this.props.match.params.id;e?this.props.currentFunctionActions.load(e):this.props.currentFunctionActions.reset()}},{key:"componentDidMount",value:function(){this.initCurrentFunction()}},{key:"componentDidUpdate",value:function(e){this.props.match.params.id!==e.match.params.id&&this.initCurrentFunction()}},{key:"setLeftPanelWidth",value:function(e){var t=e/window.screen.width*100;this.setState({leftPanelWidth:t})}},{key:"startMouseDrag",value:function(){var e=this,t=function(t){e.setLeftPanelWidth(t.clientX)};document.addEventListener("mousemove",t),document.addEventListener("mouseup",(function(e){document.removeEventListener("mousemove",t)}))}},{key:"startTouchDrag",value:function(e){var t=this,a=e.currentTarget.clientWidth-e.touches[0].clientX,n=function(e){t.setLeftPanelWidth(e.touches[0].clientX+a)};document.addEventListener("touchmove",n),document.addEventListener("touchend",(function(e){document.removeEventListener("touchmove",n)}))}},{key:"afterSave",value:function(e){this.props.match.params.id!==e.id&&this.props.history.push({pathname:Object(D.e)(this.props.match.path,{id:e.id})})}},{key:"render",value:function(){var e=this.props.currentFunction,t=this.props.currentFunctionActions;if(e.ajax)switch(e.ajax.status){case y.LOADING:case y.SAVING:return i.a.createElement(X,{icon:"fa-2x fa-spinner fa-spin",body:"".concat(e.ajax.message,"...")});case y.LOADING_ERROR:return i.a.createElement(X,{icon:"fa-2x fa-exclamation-triangle",body:"".concat(e.ajax.message,"!"),actions:i.a.createElement("a",{href:"/#/",className:"btn btn-primary btn-sm",role:"button"},"New Function")});case y.SAVING_ERROR:return i.a.createElement(X,{icon:"fa-2x fa-exclamation-triangle",body:"".concat(e.ajax.message,"!"),actions:i.a.createElement("button",{className:"btn btn-primary btn-sm",onClick:t.resetAjax},"Back To Edit")})}return i.a.createElement("div",{className:"editor"},i.a.createElement(ie,{details:e.details,actions:t,afterSave:this.afterSave,currentUser:this.props.currentUser,isMinimized:!0}),i.a.createElement("div",{className:"editor-body"},i.a.createElement("div",{className:"left-panels",style:{width:this.state.leftPanelWidth+"%"},onTouchStart:this.startTouchDrag},i.a.createElement(Q,{title:"Input",controls:i.a.createElement("i",{className:"fa fa-plus","aria-hidden":"true"})},i.a.createElement("div",{class:"image-panel"})),i.a.createElement(Q,{title:"Result",minimizable:!1},i.a.createElement("div",{class:"image-panel"}))),i.a.createElement("div",{className:"panel-gutter"},i.a.createElement("div",{className:"gutter-bar",onMouseDown:this.startMouseDrag},i.a.createElement("i",{className:"fa fa-ellipsis-v","aria-hidden":"true"}))),i.a.createElement("div",{className:"function-code",style:{width:100-this.state.leftPanelWidth+"%"}},i.a.createElement(te,{value:e.statements,onChange:function(e){return t.setStatements(e)}}))))}}]),t}(i.a.Component)),se=Object(c.b)((function(e){return{currentFunction:e.currentFunction,currentUser:e.currentUser}}),(function(e){return{currentFunctionActions:x.getActions(e)}}))(re);a(96);var ce=function(){return i.a.createElement("div",{className:"starred"},i.a.createElement("h1",null,"Starred"))};a(97);var oe=function(){return i.a.createElement("div",{className:"your"},i.a.createElement("h1",null,"Your"))};a(98);var le=function(){return i.a.createElement("div",{className:"gallery"},i.a.createElement("h1",null,"Gallery"))};a(99);var ue=function(){return i.a.createElement("div",{className:" is-touch"},i.a.createElement(V,null),i.a.createElement(M.a,{basename:"/"},i.a.createElement(D.c,null,i.a.createElement(D.a,{path:"/signin",component:q}),i.a.createElement(D.a,{path:"/starred",component:ce}),i.a.createElement(D.a,{path:"/your",component:oe}),i.a.createElement(D.a,{path:"/gallery",component:le}),i.a.createElement(D.a,{exact:!0,path:"/:id?",component:se}))))};a(100);!function(e){var t,a=d.getActions(e.dispatch);C(a),t=function(){return C(a)},window.addEventListener("storage",(function(e){"imagep_access_token"===e.key&&t(e)}))}(G);var me=document.getElementById("root");s.a.render(i.a.createElement(c.a,{store:G},i.a.createElement(ue,null)),me),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},27:function(e){e.exports=JSON.parse('{"apiDomain":"https://api.github.com","auth":{"dev":{"clientId":"f13f3e45b57022b4c556","authorizeURL":"https://github.com/login/oauth/authorize","accessURL":"https://us-central1-imagep.cloudfunctions.net/github-auth-dev"},"prod":{"clientId":"3cc05cf4699e4a9e3096","authorizeURL":"https://github.com/login/oauth/authorize","accessURL":"https://us-central1-imagep.cloudfunctions.net/github-auth"}}}')},30:function(e){e.exports=JSON.parse('["https://docs.opencv.org/3.4.9/opencv.js","https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js","https://cdn.jsdelivr.net/npm/p5@0.10.2/lib/p5.min.js","https://cdn.jsdelivr.net/npm/ml5@0.4.3/dist/ml5.min.js"]')},55:function(e,t,a){e.exports=a(101)},82:function(e,t,a){},83:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[55,1,2]]]);
//# sourceMappingURL=main.e44ba461.chunk.js.map