(self["webpackChunkvue_manage"]=self["webpackChunkvue_manage"]||[]).push([[238],{54238:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{staticStyle:{height:"100%"}},[n("el-aside",{attrs:{width:"auto"}},[n("common-aside")],1),n("el-container",[n("el-header",[n("common-header")],1),n("common-tag"),n("el-main",[n("router-view")],1)],1)],1)},o=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-4-1","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b",collapse:e.isCollapse},on:{open:e.handleOpen,close:e.handleClose}},[n("h3",[e._v(e._s(e.isCollapse?"后台":"通用后台管理系统"))]),e._l(e.noChildren,(function(t){return n("el-menu-item",{key:t.path,attrs:{index:t.path},on:{click:function(n){return e.clickMenu(t)}}},[n("i",{class:"el-icon-"+t.icon}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.label))])])})),e._l(e.hasChildren,(function(t){return n("el-submenu",{key:t.label,attrs:{index:t.label}},[n("template",{slot:"title"},[n("i",{class:"el-icon-"+t.icon}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.label))])]),e._l(t.children,(function(t){return n("el-menu-item-group",{key:t.path},[n("el-menu-item",{attrs:{index:t.path},on:{click:function(n){return e.clickMenu(t)}}},[e._v(e._s(t.label))])],1)}))],2)}))],2)},s=[],i=(n(68309),n(57327),n(41539),{name:"CommonAside",data:function(){return{menu:[]}},methods:{handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)},clickMenu:function(e){this.$router.push({name:e.name}),this.$store.commit("selectMenu",e)}},computed:{asyncMenu:function(){return this.$store.state.tab.menu},noChildren:function(){return this.asyncMenu.filter((function(e){return!e.children}))},hasChildren:function(){return this.asyncMenu.filter((function(e){return e.children}))},isCollapse:function(){return this.$store.state.tab.isCollapse}}}),l=i,c=n(1001),u=(0,c.Z)(l,a,s,!1,null,"2468498a",null),m=u.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-container"},[n("div",{staticClass:"l-content"},[n("el-button",{attrs:{plain:"",icon:"el-icon-menu",size:"mini"},on:{click:e.handleMenu}}),n("el-breadcrumb",{attrs:{separator:"/"}},e._l(e.tags,(function(t){return n("el-breadcrumb-item",{key:t.path,staticClass:"white",attrs:{to:{path:t.name}}},[e._v(e._s(t.label))])})),1)],1),n("div",{staticClass:"r-content"},[n("el-dropdown",{attrs:{trigger:"click",size:"mini"}},[n("span",[n("img",{staticClass:"user",attrs:{src:e.userImg}})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[e._v("个人中心")]),n("el-dropdown-item",{nativeOn:{click:function(t){return e.logOut.apply(null,arguments)}}},[e._v("退出")])],1)],1)],1)])},f=[],d=n(93019),p=n(34665),b={name:"CommonHeader",data:function(){return{userImg:n(44353)}},methods:{handleMenu:function(){this.$store.commit("collapseMenu")},logOut:function(){this.$store.commit("clearToken"),this.$store.commit("clearMenu"),this.$router.push("/login")}},computed:(0,d.Z)({},(0,p.rn)({tags:function(e){return e.tab.tabsList}}))},g=b,v=(0,c.Z)(g,h,f,!1,null,"36fcd612",null),_=v.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tag-container"},e._l(e.tags,(function(t,r){return n("el-tag",{key:t.name,attrs:{closable:"home"!==t.name,effect:e.$route.name===t.name?"dark":"plain",size:"small"},on:{click:function(n){return e.changeMenu(t)},close:function(n){return e.handleClose(t,r)}}},[e._v(" "+e._s(t.label)+" ")])})),1)},O=[],y={name:"CommonTag",computed:(0,d.Z)({},(0,p.rn)({tags:function(e){return e.tab.tabsList}})),methods:(0,d.Z)((0,d.Z)({},(0,p.OI)({close:"closeTag"})),{},{changeMenu:function(e){this.$router.push({name:e.name})},handleClose:function(e,t){var n=this.tags.length-1;this.close(e),e.name===this.$route.name&&(t===n?this.$router.push({name:this.tags[t-1].name}):this.$router.push({name:this.tags[t].name}))}})},k=y,w=(0,c.Z)(k,C,O,!1,null,"daf692f4",null),$=w.exports,M={name:"MyMain",components:{CommonAside:m,CommonHeader:_,CommonTag:$}},j=M,x=(0,c.Z)(j,r,o,!1,null,"54ebc754",null),P=x.exports},49337:function(e,t,n){var r=n(82109),o=n(19781),a=n(53887),s=n(45656),i=n(31236),l=n(86135);r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(e){var t,n,r=s(e),o=i.f,c=a(r),u={},m=0;while(c.length>m)n=o(r,t=c[m++]),void 0!==n&&l(u,t,n);return u}})},44353:function(e,t,n){"use strict";e.exports=n.p+"img/user.36929a03.png"},93019:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});n(47941),n(82526),n(57327),n(41539),n(38880),n(54747),n(49337);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=238-legacy.ccf6cb77.js.map