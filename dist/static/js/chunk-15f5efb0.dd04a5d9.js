(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-15f5efb0"],{"0d4b":function(t,e,s){"use strict";s.r(e);var i=s("2934"),a={name:"Home",data(){return{list:[],detail:"",articleList:[],activeName:"1347456734864367616",openName:[],params:{pageNumber:1,pageSize:100,categoryId:"",sort:"sort"},showList:!0}},methods:{onSelect(t){this.getList(t),this.detail="",this.showList=!0},getCateList(){Object(i.a)().then(t=>{t.success&&(this.list=t.result,this.$route.query.id?(this.activeName=this.detail.categoryId,this.list.forEach(e=>{e.children.length?e.children.forEach(t=>{t.id===this.detail.categoryId&&this.openName.push(e.articleCategoryName)}):delete e.children})):(this.activeName=this.list[0].children[0].id,this.openName.push(this.list[0].articleCategoryName)),this.$nextTick(()=>{this.$refs.menu.updateOpened(),this.$refs.menu.updateActiveName()}),this.getList(this.activeName))})},getList(t){this.params.categoryId=t,Object(i.c)(this.params).then(t=>{t.success&&(this.articleList=t.result.records)})},async getDetail(t){await Object(i.b)(t).then(t=>{t.success&&(this.detail=t.result,this.showList=!1)})}},async mounted(){var t=this.$route.query.id;t&&await this.getDetail(t),this.getCateList()}},s=(s("ccdb"),s("2877")),a=Object(s.a)(a,function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",[i("BaseHeader"),i("Search"),i("cateNav"),s._m(0),i("div",{staticClass:"container width_1200"},[i("Layout",{staticClass:"layoutAll"},[i("Sider",{ref:"side",staticClass:"side-bar",attrs:{"collapsed-width":78}},[i("div",{staticClass:"article-cate"},[s._v("文章分类列表")]),i("Menu",{ref:"menu",staticClass:"side-menu",attrs:{theme:"light",width:"auto","active-name":s.activeName,"open-names":s.openName},on:{"on-select":s.onSelect}},s._l(s.list,function(t,e){return i("Submenu",{directives:[{name:"show",rawName:"v-show",value:t.children,expression:"menu.children"}],key:e,attrs:{name:t.articleCategoryName}},[i("template",{slot:"title"},[i("span",[s._v(s._s(t.articleCategoryName))])]),s._l(t.children,function(t,e){return i("MenuItem",{key:e,attrs:{name:t.id}},[s._v(s._s(t.articleCategoryName))])})],2)}),1)],1),i("Layout",{staticClass:"layout ml_10"},[i("Content",{staticClass:"content"},[i("ul",{directives:[{name:"show",rawName:"v-show",value:s.showList,expression:"showList"}],staticClass:"article-list"},s._l(s.articleList,function(e,t){return i("li",{key:t,on:{click:function(t){return s.getDetail(e.id)}}},[s._v(" "+s._s(e.title)+" ")])}),0),i("transition",{attrs:{mode:"out-in"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!s.showList,expression:"!showList"}]},[i("a",{staticClass:"back-btn",on:{click:function(t){s.showList=!0}}},[s._v("<返回上一级")]),i("h2",{staticClass:"mt_10 mb_10"},[s._v(s._s(s.detail.title))]),i("div",{staticClass:"mt_10 mb_10",domProps:{innerHTML:s._s(s.detail.content)}})])])],1)],1)],1)],1)],1)},[function(){var t=this,e=t.$createElement,e=t._self._c||e;return e("div",{staticClass:"title-bg"},[e("p",[t._v("文章帮助中心")])])}],!1,null,"fc324c8a",null);e.default=a.exports},"65cc":function(t,e,s){},ccdb:function(t,e,s){"use strict";s("65cc")}}]);