(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0b445794"],{1506:function(t,e,a){},"1b94":function(t,e,a){"use strict";a.r(e);var s=a("8194"),i=a("f8b7"),l={data(){return{detail:{},visible:!1,previewImage:"",loading:!1,submitLoading:!1,statusLabel:{NO_APPLY:"未申请",APPLYING:"申请中",COMPLETE:"已完成",EXPIRED:"已失效",CANCEL:"已取消",NEW:"待审核"},params:{content:"",complainId:""}}},methods:{getDetail(){Object(s.x)(this.$route.query.id).then(t=>{t.success&&(this.detail=t.result)})},goGoodsDetail(t,e){e=this.$router.resolve({path:"/goodsDetail",query:{skuId:t,goodsId:e}});window.open(e.href,"_blank")},handleView(t){this.previewImage=t,this.visible=!0},handleSubmit(){""!==this.params.content?(this.submitLoading=!0,this.params.complainId=this.$route.query.id,Object(i.c)(this.params).then(t=>{this.submitLoading=!1,t.success&&(this.$Message.success("对话成功"),this.params.content="",this.getDetail())})):this.$Message.error("请填写对话内容")}},mounted(){this.getDetail()}},a=(a("1e65"),a("2877")),l=Object(a.a)(l,function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"add-eval"},[s("div",{staticClass:"title"},[s("card",{attrs:{_Title:"订单投诉",_Size:16}}),s("p",[s("span",{staticClass:"fontsize_16 global_color"},[a._v(a._s(a.statusLabel[a.detail.complainStatus]))]),s("span",{staticClass:"color999 ml_20"},[a._v("创建时间：")]),s("span",[a._v(a._s(a.detail.createTime))]),s("span",{staticClass:"color999 ml_20"},[a._v(a._s(a.detail.createTime))])])],1),s("Alert",{staticClass:"l_title",attrs:{"show-icon":"",type:"warning"}},[a._v("我的申诉信息")]),s("table",{attrs:{cellspacing:"0",cellpadding:"0",border:"1"}},[s("tr",[s("td",[a._v("投诉商品")]),s("td",{staticClass:"hover-color",on:{click:function(t){return a.linkTo("/goodsDetail?goodsId="+a.detail.goodsId+"&skuId="+a.detail.skuId)}}},[s("img",{attrs:{src:a.detail.goodsImage,width:"60",alt:""}}),a._v("  "+a._s(a.detail.goodsName))])]),s("tr",[s("td",[a._v("投诉主题")]),s("td",[a._v(a._s(a.detail.complainTopic))])]),s("tr",[s("td",[a._v("投诉内容")]),s("td",[a._v(a._s(a.detail.content))])]),s("tr",[s("td",[a._v("补充内容")]),s("td",[s("div",{staticStyle:{display:"flex","align-items":"center"}},[a.detail.images?a._l(a.detail.images.split(","),function(e,t){return s("div",{key:t,staticClass:"demo-upload-list"},[s("img",{attrs:{src:e}}),s("div",{staticClass:"demo-upload-list-cover"},[s("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(t){return a.handleView(e)}}})],1)])}):s("div",[a._v("暂无")])],2)])])]),s("Alert",{staticClass:"l_title",attrs:{"show-icon":"",type:"warning"}},[a._v("商家申诉信息")]),s("table",{attrs:{cellspacing:"0",cellpadding:"0",border:"1"}},[s("tr",[s("td",[a._v("申诉时间")]),s("td",[a._v(a._s(a.detail.appealTime||"暂无"))])]),s("tr",[s("td",[a._v("申诉内容")]),s("td",[a._v(a._s(a.detail.appealContent||"暂无"))])]),s("tr",[s("td",[a._v("申诉凭证")]),s("td",[s("div",{staticStyle:{display:"flex","align-items":"center"}},[a.detail.appealImages?a._l(a.detail.appealImages.split(","),function(e,t){return s("div",{key:t,staticClass:"demo-upload-list"},[s("img",{attrs:{src:e}}),s("div",{staticClass:"demo-upload-list-cover"},[s("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(t){return a.handleView(e)}}})],1)])}):s("div",[a._v("暂无")])],2)])])]),s("Alert",{staticClass:"l_title",attrs:{"show-icon":"",type:"warning"}},[a._v("平台仲裁")]),s("table",{attrs:{cellspacing:"0",cellpadding:"0",border:"1"}},[s("tr",[s("td",[a._v("仲裁意见")]),s("td",[a._v(a._s(a.detail.arbitrationResult||"暂无"))])])]),s("Alert",{staticClass:"l_title",attrs:{"show-icon":"",type:"warning"}},[a._v("对话详情")]),a.detail.orderComplaintCommunications&&a.detail.orderComplaintCommunications.length?s("div",{staticClass:"speak-way"},a._l(a.detail.orderComplaintCommunications,function(t,e){return s("div",{key:e,staticClass:"speak-msg seller",class:{"speak-buyer":"BUYER"==t.owner,"speak-platform":"PLATFORM"==t.owner,"speak-seller":"STORE"==t.owner}},[a._v(" "+a._s("PLATFORM"==t.owner?"平台":"BUYER"==t.owner?"买家":"卖家")+"["+a._s(t.createTime)+"]： "),s("span",[a._v(a._s(t.content))])])}),0):s("div",[a._v("暂无对话")]),"COMPLETE"!=a.detail.complainStatus?s("table",{attrs:{cellspacing:"0",cellpadding:"0",border:"1"}},[s("tr",[s("td",[a._v("回复：")]),s("td",[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:a.params.content,expression:"params.content"}],staticStyle:{width:"260px"},attrs:{type:"textarea",maxlength:"200",rows:4,clearable:""},domProps:{value:a.params.content},on:{input:function(t){t.target.composing||a.$set(a.params,"content",t.target.value)}}})])])]),s("tr",[s("td"),s("td",[s("Button",{staticStyle:{"margin-left":"5px"},attrs:{type:"primary",loading:a.submitLoading},on:{click:a.handleSubmit}},[a._v(" 回复 ")])],1)])]):a._e(),s("Modal",{attrs:{title:"View Image"},model:{value:a.visible,callback:function(t){a.visible=t},expression:"visible"}},[a.visible?s("img",{staticStyle:{width:"100%"},attrs:{src:a.previewImage}}):a._e()])],1)},[],!1,null,"3c06eb68",null);e.default=l.exports},"1e65":function(t,e,a){"use strict";a("1506")}}]);