webpackJsonp([1],{"4cvo":function(t,e){},"5o+j":function(t,e){},"7L3k":function(t,e,i){"use strict";var s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"tip-line"}),this._v(" "),e("div",{staticClass:"tip-content"},[e("span",{staticClass:"iconfont icon-enter"},[this._v("")]),this._v(" "),e("p",{staticClass:"tip-text"},[e("span",{staticClass:"iconfont icon-tip"},[this._v("")]),this._v("\n      1.如遇天安门广场戒严，请从故宫两侧（东华门或西华门），沿故宫城墙步行至午门验票！2.故宫博物院2019年延续周一闭馆（国家法定节假日除外）的措施，具体时间请以景区官方通知为准，给您带来不便敬请谅解。\n    ")])]),this._v(" "),e("div",{staticClass:"tip-line"})])}]};e.a=s},"7xQK":function(t,e){},"9HgM":function(t,e){},BjtM:function(t,e){},DEN9:function(t,e){},DP4z:function(t,e){},FfqT:function(t,e){},Izhy:function(t,e){},KjV6:function(t,e){},KtM0:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n=i("woOf"),a=i.n(n),r=i("mvHQ"),o=i.n(r),c={name:"App",created:function(){var t=this;window.addEventListener("beforeunload",function(){localStorage.setItem("messageStore",o()(t.$store.state))}),localStorage.getItem("messageStore")&&this.$store.replaceState(a()(this.$store.state,JSON.parse(localStorage.getItem("messageStore"))))}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]};var u=i("VU/8")(c,l,!1,function(t){i("5o+j")},null,null).exports,d=i("/ocq"),h=i("Dd8w"),v=i.n(h),m=i("mtWM"),p=i.n(m),f=i("NYxO"),_={name:"HomeHeader",computed:v()({},Object(f.c)(["nowcity"]))},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home"},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("router-link",{attrs:{to:"/city"}},[e("div",{staticClass:"home-right"},[this._v("\n      "+this._s(this.nowcity)+"\n      "),e("span",{staticClass:"iconfont icon-arrow"},[this._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-left"},[e("div",{staticClass:"iconfont icon-back"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-input"},[e("span",{staticClass:"iconfont icon-input"},[this._v("")]),this._v("\n    输入城市/景点/游玩主题")])}]};var g=i("VU/8")(_,C,!1,function(t){i("DEN9")},"data-v-99617c2c",null).exports,w={name:"HomeSwiper",props:{list:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0,autoplay:2e3,autoplayDisableOnInteraction:!1}}},computed:{bShow:function(){return this.list.length}}},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[this.bShow?e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.list,function(t){return e("swiper-slide",{key:t.id},[e("router-link",{attrs:{to:"/detail/"+t.id}},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl,alt:"去哪儿门票"}})])],1)}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var b=i("VU/8")(w,y,!1,function(t){i("hW8W")},"data-v-843f31cc",null).exports,S={name:"HomeIcons",props:{list:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination"}}},computed:{pages:function(){var t=[];return this.list.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t},swiper:function(){return this.$refs.mySwiper.swiper}},activated:function(){this.swiper.slideTo(0)}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("swiper",{ref:"mySwiper",staticClass:"wrap",attrs:{options:t.swiperOption}},[t._l(t.pages,function(e,s){return i("swiper-slide",{key:s,staticClass:"icons"},t._l(e,function(e){return i("router-link",{key:e.id,staticClass:"icon",attrs:{tag:"div",to:"/detail/"+e.id}},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"icon-img-content",attrs:{src:e.imgUrl,alt:e.desc}})]),t._v(" "),i("p",{staticClass:"icon-desc"},[t._v(t._s(e.desc))])])}),1)}),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)},staticRenderFns:[]};var H=i("VU/8")(S,k,!1,function(t){i("DP4z")},"data-v-53f148cc",null).exports,L={name:"HomeRecommend",props:{list:Array}},$={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("div",{staticClass:"top"}),t._v(" "),t._m(0),t._v(" "),i("ul",{staticClass:"content"},t._l(t.list,function(e){return i("router-link",{key:e.id,staticClass:"item",attrs:{tag:"li",to:"/detail/"+e.id}},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:e.desc}}),t._v(" "),i("p",{staticClass:"item-name"},[t._v(t._s(e.desc))]),t._v(" "),i("p",{staticClass:"item-price"},[i("span",{staticClass:"iconfont item-price-sign"},[t._v("")]),t._v(" "),i("span",{staticClass:"item-price-num"},[t._v(t._s(e.price))]),t._v("\n        起\n      ")])])}),1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("div",{staticClass:"title-left"},[e("span",{staticClass:"iconfont icon-fire"},[this._v("")]),this._v("\n      本周热门榜单\n    ")]),this._v(" "),e("div",{staticClass:"title-right"},[this._v("\n      全部榜单\n      "),e("span",{staticClass:"iconfont icon-more"},[this._v("")])])])}]};var x=i("VU/8")(L,$,!1,function(t){i("jq3i")},"data-v-33e753d0",null).exports,I={name:"HomeLike",props:{list:Array},computed:{strStar:function(){return function(t){var e=Math.floor(parseFloat(t));return"★★★★★☆☆☆☆☆".slice(5-e,10-e)}},bFootnote:function(){return function(t){return""!==t}}},methods:v()({},Object(f.b)(["ChangNowStar","ChangNowComment","ChangNowStrategy"]),{HandleItemClick:function(t){this.ChangNowStar(t.star),this.ChangNowComment(t.comment),this.ChangNowStrategy(t.strategy)}})},N={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("div",{staticClass:"top"}),t._v(" "),t._m(0),t._v(" "),i("ul",{staticClass:"content"},t._l(t.list,function(e){return i("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{tag:"li",to:"/detail/"+e.id},nativeOn:{click:function(i){return t.HandleItemClick(e)}}},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:e.desc}}),t._v(" "),i("div",{staticClass:"introduction"},[i("div",{staticClass:"introduction-name"},[t._v(t._s(e.desc))]),t._v(" "),i("div",{staticClass:"introduction-comment"},[i("div",{staticClass:"introduction-comment-star"},[t._v(t._s(t.strStar(e.star)))]),t._v(" "),i("div",{staticClass:"introduction-comment-num"},[t._v(t._s(e.comment)+"条评论")])]),t._v(" "),i("div",{staticClass:"introduction-price"},[i("div",{staticClass:"introduction-price-sign"},[t._v("￥")]),t._v(" "),i("div",{staticClass:"introduction-price-num"},[t._v(t._s(e.price))]),t._v("\n          起\n        ")]),t._v(" "),i("div",{staticClass:"introduction-address"},[t._v(t._s(e.address))]),t._v(" "),t.bFootnote(e.footnote)?i("div",{staticClass:"introduction-footnote"},[t._v(t._s(e.footnote))]):t._e()])])}),1),t._v(" "),i("div",{staticClass:"foot border-top"},[t._v("\n    查看所有产品\n  ")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("span",{staticClass:"iconfont icon-heart"},[this._v("")]),this._v("\n    猜你喜欢\n  ")])}]};var E=i("VU/8")(I,N,!1,function(t){i("r+ZL")},"data-v-8037313a",null).exports,T={name:"HomeWeekend",props:{list:Array}},j={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("div",{staticClass:"title"},[t._v("周末去哪儿")]),t._v(" "),i("ul",{staticClass:"content"},t._l(t.list,function(e){return i("router-link",{key:e.id,staticClass:"item",attrs:{tag:"li",to:"/detail/"+e.id}},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:e.desc}}),t._v(" "),i("div",{staticClass:"name"},[t._v(t._s(e.desc))]),t._v(" "),i("div",{staticClass:"introduction"},[t._v(t._s(e.introduction))])])}),1)])},staticRenderFns:[]};var F=i("VU/8")(T,j,!1,function(t){i("UdRy")},"data-v-43d4a6e8",null).exports,O={name:"HomeTips",data:function(){return{bShow:!0}},mounted:function(){var t=this;setTimeout(function(){t.bShow=!1},5e3)}},U={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:this.bShow,expression:"bShow"}],staticClass:"content"},[this._v("\n  请稍等片刻，图片马上就加载出来啦~\n")])},staticRenderFns:[]};var R=i("VU/8")(O,U,!1,function(t){i("uSFs")},"data-v-77aecbaa",null).exports,A={name:"Home",data:function(){return{strHistoryCity:"",swiperList:[],iconsList:[],likeList:[],recommendList:[],weekendList:[]}},computed:v()({},Object(f.c)(["nowcity"])),methods:{getHomeInfo:function(){var t=this;p.a.get("/api/home.json?nowcity="+this.nowcity).then(this.getHomeInfoSucc).catch(function(){console.log("本地home.json数据未找到，请求github远程数据"),p.a.get("https://raw.githubusercontent.com/gengjian1203/QunarTravel/master/static/mock/home.json?nowcity="+t.nowcity).then(t.getHomeInfoSucc).catch(function(){console.log("github远程home.json数据未找到")})})},getHomeInfoSucc:function(t){if(t.data.ret&&t.data.data){var e=t.data.data;this.swiperList=e.swiperList,this.iconsList=e.iconsList,this.likeList=e.likeList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}}},components:{HomeHeader:g,HomeSwiper:b,HomeIcons:H,HomeRecommend:x,HomeLike:E,HomeWeekend:F,HomeTips:R},mounted:function(){this.strHistoryCity=this.nowcity,this.getHomeInfo()},activated:function(){this.strHistoryCity!==this.nowcity&&(this.strHistoryCity=this.nowcity,this.getHomeInfo())}},V={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"all"},[i("home-header"),t._v(" "),i("home-swiper",{attrs:{list:t.swiperList}}),t._v(" "),i("home-icons",{attrs:{list:t.iconsList}}),t._v(" "),i("home-recommend",{attrs:{list:t.recommendList}}),t._v(" "),i("home-like",{attrs:{list:t.likeList}}),t._v(" "),i("home-weekend",{attrs:{list:t.weekendList}}),t._v(" "),i("home-tips")],1)},staticRenderFns:[]};var D=i("VU/8")(A,V,!1,function(t){i("OQ7e")},"data-v-aaf83aec",null).exports,M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("div",{staticClass:"header-title"},[this._v("\n    城市选择\n  ")]),this._v(" "),e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-back"},[this._v("")])])],1)},staticRenderFns:[]};var G=i("VU/8")({name:"CityHeader"},M,!1,function(t){i("Izhy")},"data-v-5b877a24",null).exports,P=i("GQaK"),Y={name:"CitySearch",props:{cities:Object},data:function(){return{bActive:!0,strSearch:"",listResult:[],timer:null}},computed:{bShowMatch:function(){return!this.listResult.length}},methods:v()({},Object(f.b)(["ChangNowCity"]),{HandleAddrInClick:function(t){this.bActive=!0},HandleAddrOutClick:function(t){this.bActive=!1},HandleCityClick:function(t){this.ChangNowCity(t),this.$router.push("/")}}),watch:{strSearch:function(){var t=this;this.timer||setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.indexOf(t.strSearch)>-1||i.name.indexOf(t.strSearch)>-1)&&e.push(i.name)});t.listResult=e,clearTimeout(t.timer),t.timer=null},100)}},mounted:function(){this.scroll=new P.a(this.$refs.scroll,{click:!0,tap:!0})},activated:function(){this.strSearch=""}},B={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"upper"},[i("ul",{staticClass:"address"},[i("li",{class:{"address-child":!0,active:t.bActive},on:{click:t.HandleAddrInClick}},[t._v("境内")]),t._v(" "),i("li",{class:{"address-child":!0,active:!t.bActive},on:{click:t.HandleAddrOutClick}},[t._v("境外·港澳台")])])]),t._v(" "),i("div",{staticClass:"downer"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.strSearch,expression:"strSearch"}],staticClass:"search-input",attrs:{type:"text",name:"",placeholder:"请输入城市名或拼音"},domProps:{value:t.strSearch},on:{input:function(e){e.target.composing||(t.strSearch=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.strSearch,expression:"strSearch"}],ref:"scroll",staticClass:"search-wrapper"},[i("ul",{staticClass:"search-content"},[t._l(t.listResult,function(e,s){return i("li",{key:s,staticClass:"search-item border-bottom",on:{click:function(i){return t.HandleCityClick(e)}}},[t._v("\n        "+t._s(e)+"\n      ")])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.bShowMatch,expression:"bShowMatch"}],staticClass:"search-item border-bottom"},[t._v("\n        没有找到符合要求的地名\n      ")])],2)])])},staticRenderFns:[]};var Q=i("VU/8")(Y,B,!1,function(t){i("NwuP")},"data-v-d70b1c72",null).exports,W={name:"CityList",props:{hotCities:Array,cities:Object,letter:String},data:function(){return{mySite:"mySite"}},computed:v()({},Object(f.c)(["nowcity"])),watch:{letter:function(){this.scroll.scrollToElement(this.$refs[this.letter][0],{click:!0,tap:!0})}},methods:v()({},Object(f.b)(["ChangNowCity"]),{HandleLocalClick:function(){this.$router.push("/")},HandleCityClick:function(t){this.ChangNowCity(t),this.$router.push("/")}}),mounted:function(){this.scroll=new P.a(this.$refs.scroll,{click:!0,tap:!0})},activated:function(){this.scroll.scrollToElement(this.$refs[this.mySite]),this.scroll.refresh()}},K={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"scroll",staticClass:"list"},[i("div",[i("div",{ref:t.mySite,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("您的位置")]),t._v(" "),i("ul",{staticClass:"button-list"},[i("li",{staticClass:"button actived",on:{click:t.HandleLocalClick}},[t._v("\n          "+t._s(this.nowcity)+"\n        ")])])]),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("热门城市")]),t._v(" "),i("ul",{staticClass:"button-list"},t._l(t.hotCities,function(e){return i("li",{key:e.id,staticClass:"button",on:{click:function(i){return t.HandleCityClick(e.name)}}},[t._v("\n          "+t._s(e.name)+"\n        ")])}),0)]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:s,ref:s,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(t._s(s))]),t._v(" "),i("ul",{staticClass:"item-list"},t._l(e,function(e){return i("li",{key:e.id,staticClass:"item border-bottom",on:{click:function(i){return t.HandleCityClick(e.name)}}},[t._v("\n          "+t._s(e.name)+"\n        ")])}),0)])})],2)])},staticRenderFns:[]};var q=i("VU/8")(W,K,!1,function(t){i("hsUM")},"data-v-6ea33a8a",null).exports,z={name:"CityAlphabet",props:{cities:Object},data:function(){return{bTouch:!1,nStartY:0,timer:null}},updated:function(){this.nStartY=this.$refs.A[0].offsetTop},computed:{arrLetter:function(){var t=[];for(var e in this.cities)t.push(e);return t}},methods:{HandleLetterClick:function(t){this.$emit("change",t.target.innerText)},GetLetterEmit:function(t){var e=this;this.timer||(this.timer=setTimeout(function(){var i=t.touches[0].clientY-114,s=Math.floor((i-e.nStartY)/20);s>=0&&s<=e.arrLetter.length&&e.$emit("change",e.arrLetter[s]),clearTimeout(e.timer),e.timer=null},16))},HandleTouchStart:function(t){this.bTouch=!0,this.GetLetterEmit(t)},HandleTouchMove:function(t){this.bTouch&&this.GetLetterEmit(t)},HandleTouchEnd:function(t){this.bTouch=!1}}},X={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list"},t._l(t.arrLetter,function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{click:t.HandleLetterClick,touchstart:function(e){return e.preventDefault(),t.HandleTouchStart(e)},touchmove:t.HandleTouchMove,touchend:t.HandleTouchEnd}},[t._v("\n      "+t._s(e)+"\n  ")])}),0)},staticRenderFns:[]};var J={name:"City",components:{CityHeader:G,CitySearch:Q,CityList:q,CityAlphabet:i("VU/8")(z,X,!1,function(t){i("KtM0")},"data-v-24a82d16",null).exports},data:function(){return{hotCities:[],cities:{},letter:""}},methods:{getCityInfo:function(){var t=this;p.a.get("/api/city.json").then(this.getCityInfoSucc).catch(function(){console.log("本地city.json数据未找到，请求github远程数据"),p.a.get("https://raw.githubusercontent.com/gengjian1203/QunarTravel/master/static/mock/city.json").then(t.getCityInfoSucc).catch(function(){console.log("github远程city.json数据未找到")})})},getCityInfoSucc:function(t){if(t.data.ret&&t.data.data){var e=t.data.data;this.hotCities=e.hotCities,this.cities=e.cities}},HandleLetterChange:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},Z={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("city-header"),t._v(" "),i("city-search",{attrs:{cities:t.cities}}),t._v(" "),i("city-list",{attrs:{hotCities:t.hotCities,cities:t.cities,letter:t.letter}}),t._v(" "),i("city-alphabet",{attrs:{cities:t.cities},on:{change:t.HandleLetterChange}})],1)},staticRenderFns:[]};var tt=i("VU/8")(J,Z,!1,function(t){i("9HgM")},"data-v-73b9b4ec",null).exports,et={name:"CommonGallery",props:{gallaryImgs:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",paginationType:"fraction",observer:!0,observeParents:!0}}},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},methods:{HandleGalleryClick:function(){this.$emit("close")}},mounted:function(){this.swiper.slideTo(0)}},it={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"gallery-wrapper",on:{click:this.HandleGalleryClick}},[e("swiper",{ref:"mySwiper",staticClass:"gallert-content",attrs:{options:this.swiperOption}},[this._l(this.gallaryImgs,function(t,i){return e("swiper-slide",{key:i,staticClass:"gallery-img"},[e("img",{staticClass:"image",attrs:{src:t,alt:"image_"+i}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]};var st=i("VU/8")(et,it,!1,function(t){i("4cvo")},"data-v-fc4c289c",null).exports,nt={render:function(){var t=this.$createElement;return(this._self._c||t)("transition",[this._t("default")],2)},staticRenderFns:[]};var at=i("VU/8")({name:"FadeAnimation"},nt,!1,function(t){i("ayY5")},"data-v-68be5ded",null).exports,rt={name:"DetailBanner",props:{sightName:String,bannerImg:String,gallaryImgs:Array},data:function(){return{bShowGallery:!1}},components:{CommonGallery:st,FadeAnimation:at},methods:{HandleBannerClick:function(){this.bShowGallery=!0},HandleGalleryClose:function(){this.bShowGallery=!1}}},ot={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner-wrap",on:{click:t.HandleBannerClick}},[i("img",{staticClass:"banner-img",attrs:{src:t.bannerImg,alt:t.sightName}}),t._v(" "),i("div",{staticClass:"banner-info"},[i("div",{staticClass:"banner-name"},[t._v(t._s(this.sightName))]),t._v(" "),i("div",{staticClass:"banner-num"},[i("span",{staticClass:"iconfont banner-photo"},[t._v("")]),t._v("\n        "+t._s(t.gallaryImgs.length)+"\n      ")])])]),t._v(" "),i("fade-animation",[t.bShowGallery?i("common-gallery",{attrs:{gallaryImgs:t.gallaryImgs},on:{close:t.HandleGalleryClose}}):t._e()],1)],1)},staticRenderFns:[]};var ct=i("VU/8")(rt,ot,!1,function(t){i("KjV6")},"data-v-25692410",null).exports,lt={name:"DetailHeader",props:{sightName:String},data:function(){return{bShowTitle:!1,opacityStyle:{opacity:0}}},methods:{HandleScroll:function(){var t=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOfset;if(t>0){this.bShowTitle=!0;var e=t/100;e=e>1?1:e,this.opacityStyle={opacity:e}}else this.bShowTitle=!1}},activated:function(){window.addEventListener("scroll",this.HandleScroll)},deactivated:function(){window.removeEventListener("scroll",this.HandleScroll)}},ut={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header-wrapper"},[i("router-link",{directives:[{name:"show",rawName:"v-show",value:!t.bShowTitle,expression:"!bShowTitle"}],staticClass:"iconfont header-back icon-back",attrs:{tag:"div",to:"/"}},[t._v("\n    \n  ")]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.bShowTitle,expression:"bShowTitle"}],staticClass:"header-fixed",style:t.opacityStyle},[i("router-link",{staticClass:"iconfont icon-back",attrs:{to:"/"}},[t._v("\n      \n    ")]),t._v(" "),i("div",{staticClass:"header-fixed-title"},[t._v(t._s(this.sightName))])],1)],1)},staticRenderFns:[]};var dt=i("VU/8")(lt,ut,!1,function(t){i("7xQK")},"data-v-a670fa04",null).exports,ht={name:"DetailListHeader",computed:v()({},Object(f.c)(["nowStar","nowComment","nowStarLevel","nowStrategy"]),{star:function(){return parseFloat(this.nowStar).toFixed(1)},level:function(){return this.nowStarLevel[Math.floor(this.star)]}})},vt={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"listheader-wrapper"},[i("div",{staticClass:"listheader-up border-bottom"},[i("div",{staticClass:"listheader-up-child border-right"},[i("span",{staticClass:"iconfont icon-up-enter"},[t._v("")]),t._v(" "),i("p",[i("span",{staticClass:"txt-score"},[t._v(t._s(this.star))]),t._v(" "),i("span",{staticClass:"txt-level"},[t._v("分    "+t._s(this.level))])]),t._v(" "),i("p",{staticClass:"txt-child"},[t._v(t._s(this.nowComment)+"条评论  "+t._s(this.nowStrategy)+"条攻略")])]),t._v(" "),t._m(0)]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"listheader-up-child"},[e("span",{staticClass:"iconfont icon-up-enter"},[this._v("")]),this._v(" "),e("p",{staticClass:"txt-site"},[this._v("景点简介")]),this._v(" "),e("p",{staticClass:"txt-child"},[this._v("开放时间、贴士")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"listheader-down"},[e("span",{staticClass:"iconfont icon-down-enter"},[this._v("")]),this._v(" "),e("span",{staticClass:"iconfont"},[this._v("")]),this._v("\n    北京市东城区景山前街4号\n  ")])}]};var mt=i("VU/8")(ht,vt,!1,function(t){i("yvOG")},"data-v-5c0f22a2",null).exports,pt=i("ySne"),ft={name:"DetailList",props:{categoryList:Array,bIcon:Boolean}},_t={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list-wrapper"},t._l(t.categoryList,function(e,s){return i("ul",{key:s,staticClass:"list-content"},[i("li",{staticClass:"list-item border-bottom"},[t.bIcon?i("span",{staticClass:"list-icon"}):t._e(),t._v("\n      "+t._s(e.title)+"\n      "),e.price?i("div",{staticClass:"list-price"},[t._v("\n        ￥"),i("span",{staticClass:"list-price-num"},[t._v(t._s(e.price))]),i("span",{staticClass:"list-price-btn"},[t._v("预订")])]):t._e()]),t._v(" "),e.children?i("li",{staticClass:"list-child"},[i("detail-list",{attrs:{categoryList:e.children,bIcon:!1}})],1):t._e()])}),0)},staticRenderFns:[]};var Ct=i("VU/8")(ft,_t,!1,function(t){i("g/jb")},"data-v-af727e30",null).exports,gt={name:"DetailTalk",props:{talk:Array},methods:{getStar:function(t){var e=Math.floor(parseFloat(t));return"★★★★★☆☆☆☆☆".slice(5-e,10-e)}}},wt={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"talk-line"}),t._v(" "),i("div",{staticClass:"talk-title border-bottom"},[t._v("\n    用户评论\n  ")]),t._v(" "),t._l(t.talk,function(e,s){return i("ul",{key:s},[i("li",{staticClass:"talk-item border-bottom"},[i("div",{staticClass:"item-head"},[i("div",{staticClass:"item-head-left"},[t._v(t._s(t.getStar(e.star)))]),t._v(" "),i("div",{staticClass:"item-head-right"},[t._v(t._s(e.author+" "+e.date))])]),t._v(" "),i("div",{staticClass:"item-body"},[t._v("\n        "+t._s(e.content)+"\n      ")])])])})],2)},staticRenderFns:[]};var yt=i("VU/8")(gt,wt,!1,function(t){i("X4ws")},"data-v-4ec3b858",null).exports,bt={name:"Detail",data:function(){return{sightName:"",bannerImg:"",gallaryImgs:[],categoryList:[],talk:[]}},components:{DetailBanner:ct,DetailHeader:dt,DetailListHeader:mt,DetailListTip:pt.default,DetailList:Ct,DetailTalk:yt},methods:{getDetailInfo:function(){var t=this;p.a.get("/api/detail.json",{params:{id:this.$route.params.id}}).then(this.getDetailInfoSucc).catch(function(){console.log("本地detail.json数据未找到，请求github远程数据"),p.a.get("https://raw.githubusercontent.com/gengjian1203/QunarTravel/master/static/mock/detail.json",{params:{id:t.$route.params.id}}).then(t.getDetailInfoSucc).catch(function(){console.log("github远程home.json数据未找到")})})},getDetailInfoSucc:function(t){var e=t.data;if(e.ret&&e.data){var i=e.data;this.sightName=i.sightName,this.bannerImg=i.bannerImg,this.gallaryImgs=i.gallaryImgs,this.categoryList=i.categoryList,this.talk=i.talk}}},activated:function(){this.getDetailInfo()}},St={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("detail-header",{attrs:{sightName:t.sightName}}),t._v(" "),i("detail-banner",{attrs:{sightName:t.sightName,bannerImg:t.bannerImg,gallaryImgs:t.gallaryImgs}}),t._v(" "),i("detail-list-header"),t._v(" "),i("detail-list-tip"),t._v(" "),i("detail-list",{attrs:{categoryList:t.categoryList,bIcon:!0}}),t._v(" "),i("detail-talk",{attrs:{talk:t.talk}})],1)},staticRenderFns:[]};var kt=i("VU/8")(bt,St,!1,function(t){i("FfqT")},"data-v-5f454cfc",null).exports;s.a.use(d.a);var Ht=new d.a({routes:[{path:"/",name:"Home",component:D},{path:"/city",name:"City",component:tt},{path:"/detail/:id",name:"Detail",component:kt}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),Lt=i("v5o6"),$t=i.n(Lt),xt=(i("m0iu"),i("cjdf"),i("BjtM"),i("F3EI")),It=i.n(xt),Nt=(i("v2ns"),"北京");try{localStorage.nowcity&&(Nt=localStorage.nowcity)}catch(t){}var Et={nowcity:Nt,nowStar:0,nowComment:0,nowStrategy:0,nowStarLevel:["神坑","踩雷","一般","还好","很棒","超赞"]},Tt={ChangNowCity:function(t,e){t.nowcity=e;try{localStorage.nowcity=e}catch(t){}},ChangNowStar:function(t,e){t.nowStar=e},ChangNowComment:function(t,e){t.nowComment=e},ChangNowStrategy:function(t,e){t.nowStrategy=e}};s.a.use(f.a);var jt=new f.a.Store({state:Et,actions:{ChangNowCity:function(t,e){t.commit("ChangNowCity",e)},ChangNowStar:function(t,e){t.commit("ChangNowStar",e)},ChangNowComment:function(t,e){t.commit("ChangNowComment",e)},ChangNowStrategy:function(t,e){t.commit("ChangNowStrategy",e)}},mutations:Tt});i("j1ja");s.a.config.productionTip=!1,$t.a.attach(document.body),s.a.use(It.a),new s.a({el:"#app",router:Ht,store:jt,components:{App:u},template:"<App/>"})},NwuP:function(t,e){},OQ7e:function(t,e){},OnAY:function(t,e){},POPH:function(t,e){},UdRy:function(t,e){},X4ws:function(t,e){},ayY5:function(t,e){},cjdf:function(t,e){},"g/jb":function(t,e){},hW8W:function(t,e){},hsUM:function(t,e){},jq3i:function(t,e){},m0iu:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("gsqX"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(n,a,!1,null,null,null);e.default=r.exports},"r+ZL":function(t,e){},uSFs:function(t,e){},v2ns:function(t,e){},ySne:function(t,e,i){"use strict";var s=i("OnAY"),n=i.n(s),a=i("7L3k");var r=function(t){i("POPH")},o=i("VU/8")(n.a,a.a,!1,r,"data-v-280aa76a",null);e.default=o.exports},yvOG:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.8237c82ccb8c62a4e4e9.js.map