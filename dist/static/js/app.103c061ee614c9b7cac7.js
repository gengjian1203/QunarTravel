webpackJsonp([0],{"6XcM":function(t,i){},BjtM:function(t,i){},"N+zL":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},e=s("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},a,!1,null,null,null);i.default=e.exports},N5q7:function(t,i){},NHnr:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=s("7+uW"),e={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]};var n=s("VU/8")({name:"App"},e,!1,function(t){s("6XcM")},null,null).exports,c=s("/ocq"),p={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"home"},[i("div",{staticClass:"home-left"},[i("div",{staticClass:"iconfont icon-back"},[this._v("")])]),this._v(" "),i("div",{staticClass:"home-input"},[i("span",{staticClass:"iconfont icon-input"},[this._v("")]),this._v("\n    输入城市/景点/游玩主题")]),this._v(" "),i("div",{staticClass:"home-right"},[this._v("\n    城市\n    "),i("span",{staticClass:"iconfont icon-arrow"},[this._v("")])])])}]};var r={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"wrapper"},[i("swiper",{attrs:{options:this.swiperOption}},[this._l(this.swiperList,function(t){return i("swiper-slide",{key:t.id},[i("img",{staticClass:"swiper-img",attrs:{src:t.url,alt:"Banner"}})])}),this._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]};var o={name:"HomeIcons",data:function(){return{swiperOption:{pagination:".swiper-pagination"},ListUrl:[{id:1e4,url:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",desc:"景点门票景点门票景点门票景点门票"},{id:10001,url:"http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png",desc:"故宫"},{id:10002,url:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",desc:"当地必游"},{id:10003,url:"http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png",desc:"水上乐园"},{id:10004,url:"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",desc:"一日游"},{id:10005,url:"http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png",desc:"古北水镇"},{id:10006,url:"http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",desc:"动植物园"},{id:10007,url:"http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png",desc:"奥林匹克塔"},{id:10008,url:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b4511345827006994aa1980a3886f0ac.png",desc:"世园会"},{id:10009,url:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/bf88c62458044ca2ef9d733690eef3fc.png",desc:"文惠券"}]}},computed:{pages:function(){var t=[];return this.ListUrl.forEach(function(i,s){var a=Math.floor(s/8);t[a]||(t[a]=[]),t[a].push(i)}),t}}},l={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("swiper",{staticClass:"wrap",attrs:{options:t.swiperOption}},[t._l(t.pages,function(i,a){return s("swiper-slide",{key:a,staticClass:"icons"},t._l(i,function(i){return s("div",{key:i.id,staticClass:"icon"},[s("div",{staticClass:"icon-img"},[s("img",{staticClass:"icon-img-content",attrs:{src:i.url,alt:i.desc}})]),t._v(" "),s("p",{staticClass:"icon-desc"},[t._v(t._s(i.desc))])])}),0)}),t._v(" "),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)},staticRenderFns:[]};var m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"wrap"},[s("div",{staticClass:"top"}),t._v(" "),s("div",{staticClass:"title"},[s("div",{staticClass:"title-left"},[s("span",{staticClass:"iconfont icon-fire"},[t._v("")]),t._v("\n      本周热门榜单\n    ")]),t._v(" "),s("div",{staticClass:"title-right"},[t._v("\n      全部榜单\n      "),s("span",{staticClass:"iconfont icon-more"},[t._v("")])])]),t._v(" "),s("ul",{staticClass:"content"},[s("li",{staticClass:"item"},[s("img",{staticClass:"item-img",attrs:{src:"http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg",alt:"故宫"}}),t._v(" "),s("p",{staticClass:"item-name"},[t._v("故宫")]),t._v(" "),s("p",{staticClass:"item-price"},[s("span",{staticClass:"iconfont item-price-sign"},[t._v("")]),t._v(" "),s("span",{staticClass:"item-price-num"},[t._v("111")]),t._v("\n        起\n      ")])]),t._v(" "),s("li",{staticClass:"item"},[s("img",{staticClass:"item-img",attrs:{src:"http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg",alt:"故宫"}}),t._v(" "),s("p",{staticClass:"item-name"},[t._v("故宫")]),t._v(" "),s("p",{staticClass:"item-price"},[s("span",{staticClass:"iconfont item-price-sign"},[t._v("")]),t._v(" "),s("span",{staticClass:"item-price-num"},[t._v("111")]),t._v("\n        起\n      ")])]),t._v(" "),s("li",{staticClass:"item"},[s("img",{staticClass:"item-img",attrs:{src:"http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg",alt:"故宫"}}),t._v(" "),s("p",{staticClass:"item-name"},[t._v("故宫")]),t._v(" "),s("p",{staticClass:"item-price"},[s("span",{staticClass:"iconfont item-price-sign"},[t._v("")]),t._v(" "),s("span",{staticClass:"item-price-num"},[t._v("111")]),t._v("\n        起\n      ")])]),t._v(" "),s("li",{staticClass:"item"},[s("img",{staticClass:"item-img",attrs:{src:"http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg",alt:"故宫"}}),t._v(" "),s("p",{staticClass:"item-name"},[t._v("故宫")]),t._v(" "),s("p",{staticClass:"item-price"},[s("span",{staticClass:"iconfont item-price-sign"},[t._v("")]),t._v(" "),s("span",{staticClass:"item-price-num"},[t._v("111")]),t._v("\n        起\n      ")])]),t._v(" "),s("li",{staticClass:"item"},[s("img",{staticClass:"item-img",attrs:{src:"http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg",alt:"故宫"}}),t._v(" "),s("p",{staticClass:"item-name"},[t._v("故宫")]),t._v(" "),s("p",{staticClass:"item-price"},[s("span",{staticClass:"iconfont item-price-sign"},[t._v("")]),t._v(" "),s("span",{staticClass:"item-price-num"},[t._v("111")]),t._v("\n        起\n      ")])]),t._v(" "),s("li",{staticClass:"item"},[s("img",{staticClass:"item-img",attrs:{src:"http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg",alt:"故宫"}}),t._v(" "),s("p",{staticClass:"item-name"},[t._v("故宫")]),t._v(" "),s("p",{staticClass:"item-price"},[s("span",{staticClass:"iconfont item-price-sign"},[t._v("")]),t._v(" "),s("span",{staticClass:"item-price-num"},[t._v("111")]),t._v("\n        起\n      ")])])])])}]};var d={name:"Home",components:{HomeHeader:s("VU/8")({name:"HomeHeader"},p,!1,function(t){s("zC0i")},"data-v-caa649c8",null).exports,HomeSwiper:s("VU/8")({name:"HomeSwiper",data:function(){return{swiperList:[{id:1e5,url:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/01c95889ea184ed8122d1bb3abe8b3de.jpg_750x200_d814b24f.jpg"},{id:100001,url:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg"},{id:100002,url:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg"}],swiperOption:{pagination:".swiper-pagination",loop:!0,autoplay:2e3,autoplayDisableOnInteraction:!1}}}},r,!1,function(t){s("WACv")},"data-v-04db59b0",null).exports,HomeIcons:s("VU/8")(o,l,!1,function(t){s("wzRB")},"data-v-14472ef4",null).exports,HomeRecommend:s("VU/8")({name:"HomeRecommend"},m,!1,function(t){s("N5q7")},"data-v-f00ad022",null).exports}},u={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("home-header"),this._v(" "),i("home-swiper"),this._v(" "),i("home-icons"),this._v(" "),i("home-recommend")],1)},staticRenderFns:[]};var _=s("VU/8")(d,u,!1,function(t){s("iOvl")},"data-v-d8b804fc",null).exports;a.a.use(c.a);var f=new c.a({routes:[{path:"/",name:"Home",component:_}]}),v=s("v5o6"),h=s.n(v),g=(s("m0iu"),s("cjdf"),s("BjtM"),s("F3EI")),C=s.n(g);s("v2ns");a.a.config.productionTip=!1,h.a.attach(document.body),a.a.use(C.a),new a.a({el:"#app",router:f,components:{App:n},template:"<App/>"})},WACv:function(t,i){},cjdf:function(t,i){},iOvl:function(t,i){},m0iu:function(t,i){},pYmz:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a="undefined"!=typeof window;a&&(window.Swiper=s("gsqX"));var e={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&a&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,i=function(){if(!t.swiper&&a){delete t.options.notNextTick;var i=!1;for(var s in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(s)&&t.options[s]&&(i=!0,t.defaultSwiperClasses[s]=t.options[s]);var e=function(){t.swiper=new Swiper(t.$el,t.options)};i?t.$nextTick(e):e()}}(this.options.notNextTick||this.notNextTick)?i():this.$nextTick(i)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},n={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),s("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},c=s("VU/8")(e,n,!1,null,null,null);i.default=c.exports},v2ns:function(t,i){},wzRB:function(t,i){},zC0i:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.103c061ee614c9b7cac7.js.map