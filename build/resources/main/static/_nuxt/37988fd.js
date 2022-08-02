(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{364:function(t,e,n){"use strict";var o=n(66),r=n.n(o);e.a=r.a.create({baseURL:"http://localhost:8000/api",headers:{"Content-type":"application/json"}})},369:function(t,e,n){"use strict";var o=n(23),r=n(24),l=n(364),c=function(){function t(){Object(o.a)(this,t)}return Object(r.a)(t,[{key:"upload",value:function(title,content,t,e,n){var o=new FormData;return o.append("title",title),o.append("content",content),o.append("userIdx",t),o.append("file",e),l.a.post("/inform/upload",o,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:n})}},{key:"getReplyCount",value:function(t){return l.a.get("/inform/detail/replyCount/".concat(t))}},{key:"getAllFiles",value:function(){return l.a.get("/inform/files/all")}},{key:"topThree",value:function(){return l.a.get("/inform/topthree/all")}},{key:"getFiles",value:function(t){return l.a.get("/inform/files/".concat(t))}},{key:"getDetailFiles",value:function(t){return l.a.get("/inform/files/detail/".concat(t))}},{key:"getAll",value:function(){return l.a.get("/inform/list")}},{key:"get",value:function(t){return l.a.get("/inform/detail/".concat(t))}},{key:"create",value:function(data){return l.a.post("/inform/write",data)}},{key:"update",value:function(t,data){return l.a.put("/inform/detail/update/".concat(t),data)}},{key:"delete",value:function(t){return l.a.put("/inform/deletion/".concat(t))}}]),t}();e.a=new c},407:function(t,e,n){var content=n(457);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("71ba8dc5",content,!0,{sourceMap:!1})},456:function(t,e,n){"use strict";n(407)},457:function(t,e,n){var o=n(58)(!1);o.push([t.i,".updateTitleInput[data-v-1fd0cb8a]{margin-right:auto;width:100%}.updateBtn[data-v-1fd0cb8a]{display:flex;margin-right:auto}.btn[data-v-1fd0cb8a]{background-color:#a30000;box-shadow:none;color:#fff;border:none;font-weight:300;font-size:14px;margin:2px}",""]),t.exports=o},523:function(t,e,n){"use strict";n.r(e);var o=n(369),r={name:"edit-inform-detail",data:function(){return{inform:null,message:""}},methods:{getInform:function(t){var e=this;o.a.get(t).then((function(t){e.inform=t.data})).catch((function(t){alert(t)}))},updateInformDetail:function(){var t=this;o.a.update(this.inform.idx,this.inform).then((function(){alert("여행정보 게시글 수정 완료"),t.$router.push("/inform/list")})).catch((function(t){alert(t)}))}},mounted:function(){this.getInform(this.$route.params.idx)}},l=(n(456),n(46)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.inform?n("div",{staticClass:"container mt-5 pt-5"},[t._m(0),t._v(" "),n("div",{staticClass:"updateTitleInput mb-3"},[n("label",{attrs:{for:"inform-title"}},[t._v("제목")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inform.title,expression:"inform.title"}],staticClass:"form-control",attrs:{type:"text",id:"inform-title",placeholder:"제목을 입력해 주세요.",name:"inform-title"},domProps:{value:t.inform.title},on:{input:function(e){e.target.composing||t.$set(t.inform,"title",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"mb-3"},[n("label",{attrs:{for:"text-area"}},[t._v("내용")]),t._v(" "),n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.inform.content,expression:"inform.content"}],attrs:{id:"text-area",name:"text-area",cols:"136",rows:"20"},domProps:{value:t.inform.content},on:{input:function(e){e.target.composing||t.$set(t.inform,"content",e.target.value)}}},[t._v("                내용을 입력해 주세요.\n            ")])])]),t._v(" "),n("div",{staticClass:"updateBtn mb-3"},[n("button",{staticClass:"btn",attrs:{onclick:"location.href=`/inform/list`"}},[t._v("\n            취소\n        ")]),t._v(" "),n("button",{staticClass:"btn btn-primary me-3",on:{click:t.updateInformDetail}},[t._v("\n            수정\n        ")])]),t._v(" "),t.message?n("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[t._v("\n        "+t._s(t.message)+"\n    ")]):t._e()]):t._e()}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h5",{staticClass:"text-center mb-5"},[t._v("여행정보 게시글 수정")]),t._v(" "),n("br")])}],!1,null,"1fd0cb8a",null);e.default=component.exports}}]);