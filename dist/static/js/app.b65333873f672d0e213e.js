webpackJsonp([1],{"7l5j":function(t,e){},"91st":function(t,e){},"95pP":function(t,e){},BjtM:function(t,e){},Izhy:function(t,e){},"LJO+":function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(t){i("ghXZ")},null,null).exports,r=i("/ocq"),o={name:"HomeHeader",props:{city:String}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("router-link",{attrs:{to:"/city"}},[i("div",{staticClass:"home-right"},[t._v("\n      "+t._s(t.city)+"\n      "),i("span",{staticClass:"iconfont icon-arrow"},[t._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-left"},[e("div",{staticClass:"iconfont icon-back"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-input"},[e("span",{staticClass:"iconfont icon-input"},[this._v("")]),this._v("\n    输入城市/景点/游玩主题")])}]};var l=i("VU/8")(o,c,!1,function(t){i("91st")},"data-v-2ae932ae",null).exports,u={name:"HomeSwiper",props:{list:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0,autoplay:2e3,autoplayDisableOnInteraction:!1}}},computed:{bShowList:function(){return this.list.length}}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[this.bShowList?e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.list,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl,alt:"去哪儿门票"}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var p=i("VU/8")(u,d,!1,function(t){i("ULLL")},"data-v-3c008fe9",null).exports,v={name:"HomeIcons",props:{list:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination"}}},computed:{pages:function(){var t=[];return this.list.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("swiper",{staticClass:"wrap",attrs:{options:t.swiperOption}},[t._l(t.pages,function(e,s){return i("swiper-slide",{key:s,staticClass:"icons"},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"icon-img-content",attrs:{src:e.imgUrl,alt:e.desc}})]),t._v(" "),i("p",{staticClass:"icon-desc"},[t._v(t._s(e.desc))])])}),0)}),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)},staticRenderFns:[]};var f=i("VU/8")(v,h,!1,function(t){i("f6Pe")},"data-v-66e44f3c",null).exports,m={name:"HomeRecommend",props:{list:Array}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("div",{staticClass:"top"}),t._v(" "),t._m(0),t._v(" "),i("ul",{staticClass:"content"},t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"item"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:e.desc}}),t._v(" "),i("p",{staticClass:"item-name"},[t._v(t._s(e.desc))]),t._v(" "),i("p",{staticClass:"item-price"},[i("span",{staticClass:"iconfont item-price-sign"},[t._v("")]),t._v(" "),i("span",{staticClass:"item-price-num"},[t._v(t._s(e.price))]),t._v("\n        起\n      ")])])}),0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("div",{staticClass:"title-left"},[e("span",{staticClass:"iconfont icon-fire"},[this._v("")]),this._v("\n      本周热门榜单\n    ")]),this._v(" "),e("div",{staticClass:"title-right"},[this._v("\n      全部榜单\n      "),e("span",{staticClass:"iconfont icon-more"},[this._v("")])])])}]};var C=i("VU/8")(m,_,!1,function(t){i("7l5j")},"data-v-03508596",null).exports,w={name:"HomeLike",props:{list:Array},computed:{strStar:function(){return function(t){var e=parseInt(t);return"★★★★★☆☆☆☆☆".slice(5-e,10-e)}},bFootnote:function(){return function(t){return""!==t}}}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("div",{staticClass:"top"}),t._v(" "),t._m(0),t._v(" "),i("ul",{staticClass:"content"},t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"item border-bottom"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:e.desc}}),t._v(" "),i("div",{staticClass:"introduction"},[i("div",{staticClass:"introduction-name"},[t._v(t._s(e.desc))]),t._v(" "),i("div",{staticClass:"introduction-comment"},[i("div",{staticClass:"introduction-comment-star"},[t._v(t._s(t.strStar(e.star)))]),t._v(" "),i("div",{staticClass:"introduction-comment-num"},[t._v(t._s(e.comment)+"条评论")])]),t._v(" "),i("div",{staticClass:"introduction-price"},[i("div",{staticClass:"introduction-price-sign"},[t._v("￥")]),t._v(" "),i("div",{staticClass:"introduction-price-num"},[t._v(t._s(e.price))]),t._v("\n          起\n        ")]),t._v(" "),i("div",{staticClass:"introduction-address"},[t._v(t._s(e.address))]),t._v(" "),t.bFootnote(e.footnote)?i("div",{staticClass:"introduction-footnote"},[t._v(t._s(e.footnote))]):t._e()])])}),0),t._v(" "),i("div",{staticClass:"foot border-top"},[t._v("\n    查看所有产品\n  ")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("span",{staticClass:"iconfont icon-heart"},[this._v("")]),this._v("\n    猜你喜欢\n  ")])}]};var y=i("VU/8")(w,g,!1,function(t){i("LJO+")},"data-v-5d502bbf",null).exports,b={name:"HomeWeekend",props:{list:Array}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("div",{staticClass:"title"},[t._v("周末去哪儿")]),t._v(" "),i("ul",{staticClass:"content"},t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"item"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:e.desc}}),t._v(" "),i("div",{staticClass:"name"},[t._v(t._s(e.desc))]),t._v(" "),i("div",{staticClass:"introduction"},[t._v(t._s(e.introduction))])])}),0)])},staticRenderFns:[]};var L=i("VU/8")(b,k,!1,function(t){i("wVkG")},"data-v-72963418",null).exports,H=i("mtWM"),$=i.n(H),S={name:"Home",data:function(){return{city:"",swiperList:[],iconsList:[],likeList:[],recommendList:[],weekendList:[]}},methods:{getHomeInfo:function(){var t=this;$.a.get("/api/home.json").then(this.getHomeInfoSucc).catch(function(){console.log("本地home.json数据未找到，索引github远程数据"),$.a.get("https://raw.githubusercontent.com/gengjian1203/QunarTravel/master/static/mock/home.json").then(t.getHomeInfoSucc).catch(function(){console.log("github远程home.json数据未找到")})})},getHomeInfoSucc:function(t){if(t.data.ret&&t.data.data){var e=t.data.data;this.city=e.city,this.swiperList=e.swiperList,this.iconsList=e.iconsList,this.likeList=e.likeList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}}},components:{HomeHeader:l,HomeSwiper:p,HomeIcons:f,HomeRecommend:C,HomeLike:y,HomeWeekend:L},mounted:function(){this.getHomeInfo()}},x={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("home-header",{attrs:{city:t.city}}),t._v(" "),i("home-swiper",{attrs:{list:t.swiperList}}),t._v(" "),i("home-icons",{attrs:{list:t.iconsList}}),t._v(" "),i("home-recommend",{attrs:{list:t.recommendList}}),t._v(" "),i("home-like",{attrs:{list:t.likeList}}),t._v(" "),i("home-weekend",{attrs:{list:t.weekendList}})],1)},staticRenderFns:[]};var E=i("VU/8")(S,x,!1,function(t){i("xL/K")},"data-v-14711486",null).exports,T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("div",{staticClass:"header-title"},[this._v("\n    城市选择\n  ")]),this._v(" "),e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-back"},[this._v("")])])],1)},staticRenderFns:[]};var j=i("VU/8")({name:"CityHeader"},T,!1,function(t){i("Izhy")},"data-v-5b877a24",null).exports,F={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"upper"},[i("ul",{staticClass:"address"},[i("li",{class:{"address-child":!0,active:t.bActive},on:{click:t.HandleAddrInClick}},[t._v("境内")]),t._v(" "),i("li",{class:{"address-child":!0,active:!t.bActive},on:{click:t.HandleAddrOutClick}},[t._v("境外·港澳台")])])]),t._v(" "),i("div",{staticClass:"downer"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.strSearch,expression:"strSearch"}],staticClass:"search-input",attrs:{type:"text",name:"",placeholder:"请输入城市名或拼音"},domProps:{value:t.strSearch},on:{input:function(e){e.target.composing||(t.strSearch=e.target.value)}}})])])},staticRenderFns:[]};var U=i("VU/8")({name:"CitySearch",data:function(){return{bActive:!0,strSearch:""}},methods:{HandleAddrInClick:function(t){this.bActive=!0},HandleAddrOutClick:function(t){this.bActive=!1}}},F,!1,function(t){i("95pP")},"data-v-4132f5ff",null).exports,A=i("GQaK"),I={name:"CityList",props:{hotCities:Array,cities:Object,letter:String},mounted:function(){this.scroll=new A.a(this.$refs.scroll)},watch:{letter:function(){this.scroll.scrollToElement(this.$refs[this.letter][0])}}},O={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"scroll",staticClass:"list"},[i("div",[t._m(0),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("热门城市")]),t._v(" "),i("ul",{staticClass:"button-list"},t._l(t.hotCities,function(e){return i("li",{key:e.id,staticClass:"button"},[t._v(t._s(e.name))])}),0)]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:s,ref:s,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(t._s(s))]),t._v(" "),i("ul",{staticClass:"item-list"},t._l(e,function(e){return i("li",{key:e.id,staticClass:"item border-bottom"},[t._v(t._s(e.name))])}),0)])})],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"area"},[e("div",{staticClass:"title border-topbottom"},[this._v("您的位置")]),this._v(" "),e("ul",{staticClass:"button-list"},[e("li",{staticClass:"button"},[this._v("北京")])])])}]};var R=i("VU/8")(I,O,!1,function(t){i("kePD")},"data-v-0a23c81a",null).exports,V={name:"CityAlphabet",props:{cities:Object},data:function(){return{bTouch:!1,nStartY:0,timer:null}},updated:function(){this.nStartY=this.$refs.A[0].offsetTop},computed:{arrLetter:function(){var t=[];for(var e in this.cities)t.push(e);return t}},methods:{HandleLetterClick:function(t){this.$emit("change",t.target.innerText)},GetLetterEmit:function(t){var e=this;this.timer||(this.timer=setTimeout(function(){var i=t.touches[0].clientY-114,s=Math.floor((i-e.nStartY)/20);s>=0&&s<=e.arrLetter.length&&e.$emit("change",e.arrLetter[s]),clearTimeout(e.timer),e.timer=null},16))},HandleTouchStart:function(t){this.bTouch=!0,this.GetLetterEmit(t)},HandleTouchMove:function(t){this.bTouch&&this.GetLetterEmit(t)},HandleTouchEnd:function(t){this.bTouch=!1}}},P={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list"},t._l(t.arrLetter,function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{click:t.HandleLetterClick,touchstart:t.HandleTouchStart,touchmove:t.HandleTouchMove,touchend:t.HandleTouchEnd}},[t._v("\n      "+t._s(e)+"\n  ")])}),0)},staticRenderFns:[]};var M={name:"City",components:{CityHeader:j,CitySearch:U,CityList:R,CityAlphabet:i("VU/8")(V,P,!1,function(t){i("YFl3")},"data-v-3addd78b",null).exports},data:function(){return{hotCities:[],cities:{},letter:""}},methods:{getCityInfo:function(){var t=this;$.a.get("/api/city.json").then(this.getCityInfoSucc).catch(function(){console.log("本地city.json数据未找到，索引github远程数据"),$.a.get("https://raw.githubusercontent.com/gengjian1203/QunarTravel/master/static/mock/city.json").then(t.getCityInfoSucc).catch(function(){console.log("github远程city.json数据未找到")})})},getCityInfoSucc:function(t){if(t.data.ret&&t.data.data){var e=t.data.data;this.hotCities=e.hotCities,this.cities=e.cities}},HandleLetterChange:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},N={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("city-header"),t._v(" "),i("city-search"),t._v(" "),i("city-list",{attrs:{hotCities:t.hotCities,cities:t.cities,letter:t.letter}}),t._v(" "),i("city-alphabet",{attrs:{cities:t.cities},on:{change:t.HandleLetterChange}})],1)},staticRenderFns:[]};var Y=i("VU/8")(M,N,!1,function(t){i("hwOs")},"data-v-72579d4f",null).exports;s.a.use(r.a);var G=new r.a({routes:[{path:"/",name:"Home",component:E},{path:"/city",name:"City",component:Y}]}),z=i("v5o6"),D=i.n(z),W=(i("m0iu"),i("cjdf"),i("BjtM"),i("F3EI")),B=i.n(W);i("v2ns");s.a.config.productionTip=!1,D.a.attach(document.body),s.a.use(B.a),new s.a({el:"#app",router:G,components:{App:a},template:"<App/>"})},ULLL:function(t,e){},YFl3:function(t,e){},cjdf:function(t,e){},f6Pe:function(t,e){},ghXZ:function(t,e){},hwOs:function(t,e){},kePD:function(t,e){},m0iu:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("gsqX"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(n,a,!1,null,null,null);e.default=r.exports},v2ns:function(t,e){},wVkG:function(t,e){},"xL/K":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b65333873f672d0e213e.js.map