webpackJsonp([1],{"6tmI":function(t,s){},"7l5j":function(t,s){},BjtM:function(t,s){},"LJO+":function(t,s){},"N+zL":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},e,!1,null,null,null);s.default=n.exports},NHnr:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("7+uW"),n={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(t){i("ghXZ")},null,null).exports,r=i("/ocq"),o={name:"HomeHeader",props:{city:String}},c={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"home"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"home-right"},[t._v("\n    "+t._s(t.city)+"\n    "),i("span",{staticClass:"iconfont icon-arrow"},[t._v("")])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"home-left"},[s("div",{staticClass:"iconfont icon-back"},[this._v("")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"home-input"},[s("span",{staticClass:"iconfont icon-input"},[this._v("")]),this._v("\n    输入城市/景点/游玩主题")])}]};var l=i("VU/8")(o,c,!1,function(t){i("6tmI")},"data-v-0d74faf7",null).exports,u={name:"HomeSwiper",props:{list:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0,autoplay:2e3,autoplayDisableOnInteraction:!1}}},computed:{bShowList:function(){return this.list.length}}},p={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"wrapper"},[this.bShowList?s("swiper",{attrs:{options:this.swiperOption}},[this._l(this.list,function(t){return s("swiper-slide",{key:t.id},[s("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl,alt:"去哪儿门票"}})])}),this._v(" "),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var d=i("VU/8")(u,p,!1,function(t){i("ULLL")},"data-v-3c008fe9",null).exports,v={name:"HomeIcons",props:{list:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination"}}},computed:{pages:function(){var t=[];return this.list.forEach(function(s,i){var e=Math.floor(i/8);t[e]||(t[e]=[]),t[e].push(s)}),t}}},m={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("swiper",{staticClass:"wrap",attrs:{options:t.swiperOption}},[t._l(t.pages,function(s,e){return i("swiper-slide",{key:e,staticClass:"icons"},t._l(s,function(s){return i("div",{key:s.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"icon-img-content",attrs:{src:s.imgUrl,alt:s.desc}})]),t._v(" "),i("p",{staticClass:"icon-desc"},[t._v(t._s(s.desc))])])}),0)}),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)},staticRenderFns:[]};var f=i("VU/8")(v,m,!1,function(t){i("f6Pe")},"data-v-66e44f3c",null).exports,_={name:"HomeRecommend",props:{list:Array}},h={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"wrap"},[i("div",{staticClass:"top"}),t._v(" "),t._m(0),t._v(" "),i("ul",{staticClass:"content"},t._l(t.list,function(s){return i("li",{key:s.id,staticClass:"item"},[i("img",{staticClass:"item-img",attrs:{src:s.imgUrl,alt:s.desc}}),t._v(" "),i("p",{staticClass:"item-name"},[t._v(t._s(s.desc))]),t._v(" "),i("p",{staticClass:"item-price"},[i("span",{staticClass:"iconfont item-price-sign"},[t._v("")]),t._v(" "),i("span",{staticClass:"item-price-num"},[t._v(t._s(s.price))]),t._v("\n        起\n      ")])])}),0)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"title"},[s("div",{staticClass:"title-left"},[s("span",{staticClass:"iconfont icon-fire"},[this._v("")]),this._v("\n      本周热门榜单\n    ")]),this._v(" "),s("div",{staticClass:"title-right"},[this._v("\n      全部榜单\n      "),s("span",{staticClass:"iconfont icon-more"},[this._v("")])])])}]};var w=i("VU/8")(_,h,!1,function(t){i("7l5j")},"data-v-03508596",null).exports,C={name:"HomeLike",props:{list:Array},computed:{strStar:function(){return function(t){var s=parseInt(t);return"★★★★★☆☆☆☆☆".slice(5-s,10-s)}},bFootnote:function(){return function(t){return""!==t}}}},g={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"wrap"},[i("div",{staticClass:"top"}),t._v(" "),t._m(0),t._v(" "),i("ul",{staticClass:"content"},t._l(t.list,function(s){return i("li",{key:s.id,staticClass:"item border-bottom"},[i("img",{staticClass:"item-img",attrs:{src:s.imgUrl,alt:s.desc}}),t._v(" "),i("div",{staticClass:"introduction"},[i("div",{staticClass:"introduction-name"},[t._v(t._s(s.desc))]),t._v(" "),i("div",{staticClass:"introduction-comment"},[i("div",{staticClass:"introduction-comment-star"},[t._v(t._s(t.strStar(s.star)))]),t._v(" "),i("div",{staticClass:"introduction-comment-num"},[t._v(t._s(s.comment)+"条评论")])]),t._v(" "),i("div",{staticClass:"introduction-price"},[i("div",{staticClass:"introduction-price-sign"},[t._v("￥")]),t._v(" "),i("div",{staticClass:"introduction-price-num"},[t._v(t._s(s.price))]),t._v("\n          起\n        ")]),t._v(" "),i("div",{staticClass:"introduction-address"},[t._v(t._s(s.address))]),t._v(" "),t.bFootnote(s.footnote)?i("div",{staticClass:"introduction-footnote"},[t._v(t._s(s.footnote))]):t._e()])])}),0),t._v(" "),i("div",{staticClass:"foot border-top"},[t._v("\n    查看所有产品\n  ")])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"title"},[s("span",{staticClass:"iconfont icon-heart"},[this._v("")]),this._v("\n    猜你喜欢\n  ")])}]};var L=i("VU/8")(C,g,!1,function(t){i("LJO+")},"data-v-5d502bbf",null).exports,y={name:"HomeWeekend",props:{list:Array}},k={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"wrap"},[i("div",{staticClass:"title"},[t._v("周末去哪儿")]),t._v(" "),i("ul",{staticClass:"content"},t._l(t.list,function(s){return i("li",{key:s.id,staticClass:"item"},[i("img",{staticClass:"item-img",attrs:{src:s.imgUrl,alt:s.desc}}),t._v(" "),i("div",{staticClass:"name"},[t._v(t._s(s.desc))]),t._v(" "),i("div",{staticClass:"introduction"},[t._v(t._s(s.introduction))])])}),0)])},staticRenderFns:[]};var $=i("VU/8")(y,k,!1,function(t){i("wVkG")},"data-v-72963418",null).exports,b=i("mtWM"),H=i.n(b),x={name:"Home",data:function(){return{city:"",swiperList:[],iconsList:[],likeList:[],recommendList:[],weekendList:[]}},methods:{getHomeInfo:function(){H.a.get("https://raw.githubusercontent.com/gengjian1203/QunarTravel/master/static/mock/home.json").then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if(t.data.ret&&t.data.data){var s=t.data.data;this.city=s.city,this.swiperList=s.swiperList,this.iconsList=s.iconsList,this.likeList=s.likeList,this.recommendList=s.recommendList,this.weekendList=s.weekendList}}},components:{HomeHeader:l,HomeSwiper:d,HomeIcons:f,HomeRecommend:w,HomeLike:L,HomeWeekend:$},mounted:function(){this.getHomeInfo()}},S={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("home-header",{attrs:{city:t.city}}),t._v(" "),i("home-swiper",{attrs:{list:t.swiperList}}),t._v(" "),i("home-icons",{attrs:{list:t.iconsList}}),t._v(" "),i("home-recommend",{attrs:{list:t.recommendList}}),t._v(" "),i("home-like",{attrs:{list:t.likeList}}),t._v(" "),i("home-weekend",{attrs:{list:t.weekendList}})],1)},staticRenderFns:[]};var U=i("VU/8")(x,S,!1,function(t){i("ZYB0")},"data-v-71294034",null).exports;e.a.use(r.a);var E=new r.a({routes:[{path:"/",name:"Home",component:U}]}),F=i("v5o6"),j=i.n(F),O=(i("m0iu"),i("cjdf"),i("BjtM"),i("F3EI")),R=i.n(O);i("v2ns");e.a.config.productionTip=!1,j.a.attach(document.body),e.a.use(R.a),new e.a({el:"#app",router:E,components:{App:a},template:"<App/>"})},ULLL:function(t,s){},ZYB0:function(t,s){},cjdf:function(t,s){},f6Pe:function(t,s){},ghXZ:function(t,s){},m0iu:function(t,s){},pYmz:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e="undefined"!=typeof window;e&&(window.Swiper=i("gsqX"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&e&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,s=function(){if(!t.swiper&&e){delete t.options.notNextTick;var s=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(s=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};s?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?s():this.$nextTick(s)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(n,a,!1,null,null,null);s.default=r.exports},v2ns:function(t,s){},wVkG:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.5506b2b75242b0191765.js.map