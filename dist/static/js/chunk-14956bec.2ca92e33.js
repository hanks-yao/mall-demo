(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-14956bec"],{"3ccd":function(e,t,s){"use strict";s("cea5")},"7dfd":function(e,t,s){"use strict";s.r(t),s.d(t,"mobile",function(){return o}),s.d(t,"email",function(){return a}),s.d(t,"password",function(){return r}),s.d(t,"integer",function(){return n}),s.d(t,"Integer",function(){return i}),s.d(t,"money",function(){return c}),s.d(t,"TINumber",function(){return l}),s.d(t,"IDCard",function(){return u}),s.d(t,"userName",function(){return d}),s.d(t,"URL",function(){return m}),s.d(t,"TEL",function(){return p}),s.d(t,"licenseNum",function(){return f});const o=/^0?(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])[0-9]{8}$/,a=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,r=/^[@A-Za-z0-9!#$%^&*.~,]{6,20}$/,n=/^[1-9]\d*$/,i=/^[0-9]\d*$/,c=/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,l=/^((\d{6}[0-9A-Z]{9})|([0-9A-Za-z]{2}\d{6}[0-9A-Za-z]{10,12}))$/,u=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,d=/[A-Za-z0-9_\-\u4e00-\u9fa5]$/,m=/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/,p=/0\d{2,3}-\d{7,8}/,f=/(^(?:(?![IOZSV])[\dA-Z]){2}\d{6}(?:(?![IOZSV])[\dA-Z]){10}$)|(^\d{15}$)/},cea5:function(e,t,s){},f6d8:function(e,t,s){"use strict";s.r(t);var o=s("8194"),a=s("ff66"),r=s("e487"),n=s("7dfd"),i={data(){return{columns:[{title:"商品名称",slot:"goodsName"},{title:"价格",slot:"goodsPrice"},{title:"购买数量",key:"num"}],goodsData:[],reasonList:[],info:{},form:{serviceType:"RETURN_GOODS",num:1},uploadList:[],action:a.c+"/common/upload/file",accessToken:{},visible:!1,previewImage:"",rules:{num:[{validator:(e,t,s)=>{""===t?s(new Error("请填写提交数量")):t>this.info.num?s(new Error("提交数量不能大于购买数量")):n.integer.test(t)?s():s(new Error("提交数量必须为正整数"))}}],reason:[{required:!0,message:"请选择提交原因"}],problemDesc:[{required:!0,message:"请输入问题描述"}],bankAccountNumber:[{required:!0,message:"请输入银行卡号"},{type:"string",pattern:/^[0-9]\d*$/,message:"请输入正确的银行卡号"}],bankAccountName:[{required:!0,message:"请输入银行开户名"}],bankDepositName:[{required:!0,message:"请输入银行开户行"}]}}},methods:{getInfo(){Object(o.c)(this.$route.query.sn).then(e=>{e.success&&(this.info=e.result,this.goodsData.push(e.result),!this.info.returnGoods&&this.info.returnMoney&&(this.form.serviceType="RETURN_MONEY"),this.getReason(this.form.serviceType))})},getReason(e){Object(o.f)(e).then(e=>{e.success&&(this.reasonList=e.result)})},changeReason(e){this.getReason(e)},apply(){this.$refs.form.validate(e=>{if(e){let e=Object.assign(this.info,this.form);e.images=this.uploadList.toString(),e.orderItemSn=this.$route.query.sn,Object(o.g)(e).then(e=>{e.success&&(this.$Message.success("售后申请提交成功，请到售后订单查看！"),this.$router.push({name:"AfterSale"}))})}})},handleView(e){this.previewImage=e,this.visible=!0},handleRemove(e){this.uploadList.splice(e,1),this.$forceUpdate()},handleSuccess(e,t){this.uploadList.push(e.result),this.$forceUpdate()},handleBeforeUpload(){var e=this.uploadList.length<6;if(!e)return this.$Notice.warning({title:"最多可以上传5张图片"}),e}},mounted(){this.accessToken.accessToken=r.a.getItem("accessToken"),this.getInfo()}},s=(s("3ccd"),s("2877")),i=Object(s.a)(i,function(){var o=this,e=o.$createElement,a=o._self._c||e;return a("div",{staticClass:"apply-after-sale"},[a("card",{attrs:{_Title:"申请售后"}}),a("Table",{attrs:{border:"",columns:o.columns,data:o.goodsData},scopedSlots:o._u([{key:"goodsName",fn:function(e){e=e.row;return[a("div",{staticStyle:{padding:"5px",display:"flex"}},[a("img",{staticStyle:{"vertical-align":"top"},attrs:{src:e.image,width:"60",height:"60",alt:""}}),o._v(" "),a("span",{staticClass:"ml_10"},[o._v(o._s(e.goodsName))])])]}},{key:"goodsPrice",fn:function(e){e=e.row;return[a("div",[o._v(o._s(o._f("unitPrice")(e.goodsPrice,"￥")))])]}}])}),a("div",[a("Form",{ref:"form",staticClass:"mt_10",attrs:{model:o.form,rules:o.rules,"label-width":80}},[a("FormItem",{attrs:{label:"售后类别"}},[a("RadioGroup",{attrs:{type:"button","button-style":"solid"},on:{"on-change":o.changeReason},model:{value:o.form.serviceType,callback:function(e){o.$set(o.form,"serviceType",e)},expression:"form.serviceType"}},[o.info.returnGoods?a("Radio",{attrs:{label:"RETURN_GOODS"}},[o._v("退货")]):o._e(),o.info.returnMoney?a("Radio",{attrs:{label:"RETURN_MONEY"}},[o._v("退款")]):o._e()],1)],1),a("FormItem",{attrs:{label:"提交数量",prop:"num"}},[a("Input",{staticStyle:{width:"260px"},attrs:{type:"number"},model:{value:o.form.num,callback:function(e){o.$set(o.form,"num",e)},expression:"form.num"}})],1),a("FormItem",{attrs:{label:"提交原因",prop:"reason"}},[a("Select",{staticStyle:{width:"260px"},model:{value:o.form.reason,callback:function(e){o.$set(o.form,"reason",e)},expression:"form.reason"}},o._l(o.reasonList,function(e){return a("Option",{key:e.id,attrs:{value:e.id}},[o._v(o._s(e.reason))])}),1)],1),a("FormItem",{attrs:{label:"问题描述",prop:"problemDesc"}},[a("Input",{staticStyle:{width:"260px"},attrs:{type:"textarea",rows:4,maxlength:"500","show-word-limit":""},model:{value:o.form.problemDesc,callback:function(e){o.$set(o.form,"problemDesc",e)},expression:"form.problemDesc"}})],1),a("FormItem",{attrs:{label:"图片信息"}},[a("div",{staticStyle:{display:"flex","align-items":"center"}},[o._l(o.uploadList,function(t,s){return a("div",{key:s,staticClass:"demo-upload-list"},[a("img",{attrs:{src:t}}),a("div",{staticClass:"demo-upload-list-cover"},[a("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(e){return o.handleView(t)}}}),a("Icon",{attrs:{type:"ios-trash-outline"},nativeOn:{click:function(e){return o.handleRemove(s)}}})],1)])}),a("Upload",{staticStyle:{display:"inline-block",width:"58px"},attrs:{"show-upload-list":!1,"on-success":o.handleSuccess,"before-upload":o.handleBeforeUpload,format:["jpg","jpeg","png"],action:o.action,headers:o.accessToken}},[a("div",{staticClass:"hover-pointer icon-upload"},[a("Icon",{attrs:{type:"md-add",size:"20"}})],1)])],2)]),a("FormItem",{attrs:{label:"退款方式"}},[a("div",[o._v(o._s("ORIGINAL"==o.info.refundWay?"原路退回":"账号退款"))])]),"BANK_TRANSFER"===o.info.accountType&&0!=o.info.applyRefundPrice?[a("FormItem",{attrs:{label:"开户行",prop:"bankDepositName"}},[a("Input",{staticStyle:{width:"260px"},attrs:{type:"text",placeholder:"请输入银行开户行"},model:{value:o.form.bankDepositName,callback:function(e){o.$set(o.form,"bankDepositName",e)},expression:"form.bankDepositName"}})],1),a("FormItem",{attrs:{label:"开户名",prop:"bankAccountName"}},[a("Input",{staticStyle:{width:"260px"},attrs:{type:"text",placeholder:"请输入银行开户名"},model:{value:o.form.bankAccountName,callback:function(e){o.$set(o.form,"bankAccountName",e)},expression:"form.bankAccountName"}})],1),a("FormItem",{attrs:{label:"银行账号",prop:"bankAccountNumber"}},[a("Input",{staticStyle:{width:"260px"},attrs:{type:"text",placeholder:"请输入银行账号"},model:{value:o.form.bankAccountNumber,callback:function(e){o.$set(o.form,"bankAccountNumber",e)},expression:"form.bankAccountNumber"}})],1)]:o._e(),"RETURN_GOODS"===o.form.serviceType?a("FormItem",{attrs:{label:"返回方式"}},[a("div",[o._v("快递至第三方卖家")])]):o._e(),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:o.apply}},[o._v("提交申请")])],1)],2),a("Modal",{attrs:{title:"View Image"},model:{value:o.visible,callback:function(e){o.visible=e},expression:"visible"}},[o.visible?a("img",{staticStyle:{width:"100%"},attrs:{src:o.previewImage}}):o._e()])],1)],1)},[],!1,null,"b7237d84",null);t.default=i.exports}}]);