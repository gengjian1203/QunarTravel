webpackJsonp([1],{"2BK3":function(t,e){},"932X":function(t,e){},"9HgM":function(t,e){},BjtM:function(t,e){},D5a0:function(t,e){},DEN9:function(t,e){},E7TO:function(t,e){},Izhy:function(t,e){},KjV6:function(t,e){},KtM0:function(t,e){},MT5d:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},s=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},n,!1,null,null,null);e.default=s.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1)],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},s,!1,function(t){i("932X")},null,null).exports,r=i("/ocq"),o=i("Dd8w"),c=i.n(o),l=i("mtWM"),u=i.n(l),d=i("NYxO"),h={name:"HomeHeader",computed:c()({},Object(d.c)(["nowcity"]))},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home"},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("router-link",{attrs:{to:"/city"}},[e("div",{staticClass:"home-right"},[this._v("\n      "+this._s(this.nowcity)+"\n      "),e("span",{staticClass:"iconfont icon-arrow"},[this._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-left"},[e("div",{staticClass:"iconfont icon-back"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-input"},[e("span",{staticClass:"iconfont icon-input"},[this._v("")]),this._v("\n    输入城市/景点/游玩主题")])}]};var p=i("VU/8")(h,v,!1,function(t){i("DEN9")},"data-v-99617c2c",null).exports,m={name:"HomeSwiper",props:{list:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0,autoplay:2e3,autoplayDisableOnInteraction:!1}}},computed:{bShow:function(){return this.list.length}}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[this.bShow?e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.list,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl,alt:"去哪儿门票"}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var _=i("VU/8")(m,f,!1,function(t){i("ceR+")},"data-v-2bfa41a9",null).exports,C={name:"HomeIcons",props:{list:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination"}}},computed:{pages:function(){var t=[];return this.list.forEach(function(e,i){var n=Math.floor(i/8);t[n]||(t[n]=[]),t[n].push(e)}),t},swiper:function(){return this.$refs.mySwiper.swiper}},activated:function(){this.swiper.slideTo(0)}},w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("swiper",{ref:"mySwiper",staticClass:"wrap",attrs:{options:t.swiperOption}},[t._l(t.pages,function(e,n){return i("swiper-slide",{key:n,staticClass:"icons"},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"icon-img-content",attrs:{src:e.imgUrl,alt:e.desc}})]),t._v(" "),i("p",{staticClass:"icon-desc"},[t._v(t._s(e.desc))])])}),0)}),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)},staticRenderFns:[]};var g=i("VU/8")(C,w,!1,function(t){i("E7TO")},"data-v-7ce822a6",null).exports,y={name:"HomeRecommend",props:{list:Array}},b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("div",{staticClass:"top"}),t._v(" "),t._m(0),t._v(" "),i("ul",{staticClass:"content"},t._l(t.list,function(e){return i("router-link",{key:e.id,staticClass:"item",attrs:{tag:"li",to:"/detail/"+e.id}},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:e.desc}}),t._v(" "),i("p",{staticClass:"item-name"},[t._v(t._s(e.desc))]),t._v(" "),i("p",{staticClass:"item-price"},[i("span",{staticClass:"iconfont item-price-sign"},[t._v("")]),t._v(" "),i("span",{staticClass:"item-price-num"},[t._v(t._s(e.price))]),t._v("\n        起\n      ")])])}),1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("div",{staticClass:"title-left"},[e("span",{staticClass:"iconfont icon-fire"},[this._v("")]),this._v("\n      本周热门榜单\n    ")]),this._v(" "),e("div",{staticClass:"title-right"},[this._v("\n      全部榜单\n      "),e("span",{staticClass:"iconfont icon-more"},[this._v("")])])])}]};var S=i("VU/8")(y,b,!1,function(t){i("MT5d")},"data-v-cfd37d3c",null).exports,k={name:"HomeLike",props:{list:Array},computed:{strStar:function(){return function(t){var e=parseInt(t);return"★★★★★☆☆☆☆☆".slice(5-e,10-e)}},bFootnote:function(){return function(t){return""!==t}}}},H={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("div",{staticClass:"top"}),t._v(" "),t._m(0),t._v(" "),i("ul",{staticClass:"content"},t._l(t.list,function(e){return i("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{tag:"li",to:"/detail/"+e.id}},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:e.desc}}),t._v(" "),i("div",{staticClass:"introduction"},[i("div",{staticClass:"introduction-name"},[t._v(t._s(e.desc))]),t._v(" "),i("div",{staticClass:"introduction-comment"},[i("div",{staticClass:"introduction-comment-star"},[t._v(t._s(t.strStar(e.star)))]),t._v(" "),i("div",{staticClass:"introduction-comment-num"},[t._v(t._s(e.comment)+"条评论")])]),t._v(" "),i("div",{staticClass:"introduction-price"},[i("div",{staticClass:"introduction-price-sign"},[t._v("￥")]),t._v(" "),i("div",{staticClass:"introduction-price-num"},[t._v(t._s(e.price))]),t._v("\n          起\n        ")]),t._v(" "),i("div",{staticClass:"introduction-address"},[t._v(t._s(e.address))]),t._v(" "),t.bFootnote(e.footnote)?i("div",{staticClass:"introduction-footnote"},[t._v(t._s(e.footnote))]):t._e()])])}),1),t._v(" "),i("div",{staticClass:"foot border-top"},[t._v("\n    查看所有产品\n  ")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("span",{staticClass:"iconfont icon-heart"},[this._v("")]),this._v("\n    猜你喜欢\n  ")])}]};var $=i("VU/8")(k,H,!1,function(t){i("D5a0")},"data-v-d575c03e",null).exports,L={name:"HomeWeekend",props:{list:Array}},T={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("div",{staticClass:"title"},[t._v("周末去哪儿")]),t._v(" "),i("ul",{staticClass:"content"},t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"item"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:e.desc}}),t._v(" "),i("div",{staticClass:"name"},[t._v(t._s(e.desc))]),t._v(" "),i("div",{staticClass:"introduction"},[t._v(t._s(e.introduction))])])}),0)])},staticRenderFns:[]};var I=i("VU/8")(L,T,!1,function(t){i("wVkG")},"data-v-72963418",null).exports,x={name:"HomeTips",data:function(){return{bShow:!0}},mounted:function(){var t=this;setTimeout(function(){t.bShow=!1},5e3)}},E={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:this.bShow,expression:"bShow"}],staticClass:"content"},[this._v("\n  请稍等片刻，图片马上就加载出来啦~\n")])},staticRenderFns:[]};var j=i("VU/8")(x,E,!1,function(t){i("uSFs")},"data-v-77aecbaa",null).exports,N={name:"Home",data:function(){return{strHistoryCity:"",swiperList:[],iconsList:[],likeList:[],recommendList:[],weekendList:[]}},computed:c()({},Object(d.c)(["nowcity"])),methods:{getHomeInfo:function(){var t=this;u.a.get("/api/home.json?nowcity="+this.nowcity).then(this.getHomeInfoSucc).catch(function(){console.log("本地home.json数据未找到，请求github远程数据"),u.a.get("https://raw.githubusercontent.com/gengjian1203/QunarTravel/master/static/mock/home.json?nowcity="+t.nowcity).then(t.getHomeInfoSucc).catch(function(){console.log("github远程home.json数据未找到")})})},getHomeInfoSucc:function(t){if(t.data.ret&&t.data.data){var e=t.data.data;this.swiperList=e.swiperList,this.iconsList=e.iconsList,this.likeList=e.likeList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}}},components:{HomeHeader:p,HomeSwiper:_,HomeIcons:g,HomeRecommend:S,HomeLike:$,HomeWeekend:I,HomeTips:j},mounted:function(){this.strHistoryCity=this.nowcity,this.getHomeInfo()},activated:function(){this.strHistoryCity!==this.nowcity&&(this.strHistoryCity=this.nowcity,this.getHomeInfo())}},F={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("home-header"),t._v(" "),i("home-swiper",{attrs:{list:t.swiperList}}),t._v(" "),i("home-icons",{attrs:{list:t.iconsList}}),t._v(" "),i("home-recommend",{attrs:{list:t.recommendList}}),t._v(" "),i("home-like",{attrs:{list:t.likeList}}),t._v(" "),i("home-weekend",{attrs:{list:t.weekendList}}),t._v(" "),i("home-tips")],1)},staticRenderFns:[]};var O=i("VU/8")(N,F,!1,function(t){i("puXT")},"data-v-1a1d4670",null).exports,R={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("div",{staticClass:"header-title"},[this._v("\n    城市选择\n  ")]),this._v(" "),e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-back"},[this._v("")])])],1)},staticRenderFns:[]};var U=i("VU/8")({name:"CityHeader"},R,!1,function(t){i("Izhy")},"data-v-5b877a24",null).exports,A=i("GQaK"),V={name:"CitySearch",props:{cities:Object},data:function(){return{bActive:!0,strSearch:"",listResult:[],timer:null}},computed:{bShowMatch:function(){return!this.listResult.length}},methods:c()({},Object(d.b)(["ChangNowCity"]),{HandleAddrInClick:function(t){this.bActive=!0},HandleAddrOutClick:function(t){this.bActive=!1},HandleCityClick:function(t){this.ChangNowCity(t),this.$router.push("/")}}),watch:{strSearch:function(){var t=this;this.timer||setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.indexOf(t.strSearch)>-1||i.name.indexOf(t.strSearch)>-1)&&e.push(i.name)});t.listResult=e,clearTimeout(t.timer),t.timer=null},100)}},mounted:function(){this.scroll=new A.a(this.$refs.scroll,{click:!0,tap:!0})},activated:function(){this.strSearch=""}},D={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"upper"},[i("ul",{staticClass:"address"},[i("li",{class:{"address-child":!0,active:t.bActive},on:{click:t.HandleAddrInClick}},[t._v("境内")]),t._v(" "),i("li",{class:{"address-child":!0,active:!t.bActive},on:{click:t.HandleAddrOutClick}},[t._v("境外·港澳台")])])]),t._v(" "),i("div",{staticClass:"downer"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.strSearch,expression:"strSearch"}],staticClass:"search-input",attrs:{type:"text",name:"",placeholder:"请输入城市名或拼音"},domProps:{value:t.strSearch},on:{input:function(e){e.target.composing||(t.strSearch=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.strSearch,expression:"strSearch"}],ref:"scroll",staticClass:"search-wrapper"},[i("ul",{staticClass:"search-content"},[t._l(t.listResult,function(e,n){return i("li",{key:n,staticClass:"search-item border-bottom",on:{click:function(i){return t.HandleCityClick(e)}}},[t._v("\n        "+t._s(e)+"\n      ")])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.bShowMatch,expression:"bShowMatch"}],staticClass:"search-item border-bottom"},[t._v("\n        没有找到符合要求的地名\n      ")])],2)])])},staticRenderFns:[]};var M=i("VU/8")(V,D,!1,function(t){i("NwuP")},"data-v-d70b1c72",null).exports,G={name:"CityList",props:{hotCities:Array,cities:Object,letter:String},data:function(){return{mySite:"mySite"}},computed:c()({},Object(d.c)(["nowcity"])),watch:{letter:function(){this.scroll.scrollToElement(this.$refs[this.letter][0],{click:!0})}},methods:c()({},Object(d.b)(["ChangNowCity"]),{HandleLocalClick:function(){this.$router.push("/")},HandleCityClick:function(t){this.ChangNowCity(t),this.$router.push("/")}}),mounted:function(){this.scroll=new A.a(this.$refs.scroll,{click:!0,tap:!0})},activated:function(){this.scroll.scrollToElement(this.$refs[this.mySite])}},B={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"scroll",staticClass:"list"},[i("div",[i("div",{ref:t.mySite,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("您的位置")]),t._v(" "),i("ul",{staticClass:"button-list"},[i("li",{staticClass:"button actived",on:{click:t.HandleLocalClick}},[t._v("\n          "+t._s(this.nowcity)+"\n        ")])])]),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("热门城市")]),t._v(" "),i("ul",{staticClass:"button-list"},t._l(t.hotCities,function(e){return i("li",{key:e.id,staticClass:"button",on:{click:function(i){return t.HandleCityClick(e.name)}}},[t._v("\n          "+t._s(e.name)+"\n        ")])}),0)]),t._v(" "),t._l(t.cities,function(e,n){return i("div",{key:n,ref:n,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(t._s(n))]),t._v(" "),i("ul",{staticClass:"item-list"},t._l(e,function(e){return i("li",{key:e.id,staticClass:"item border-bottom",on:{click:function(i){return t.HandleCityClick(e.name)}}},[t._v("\n          "+t._s(e.name)+"\n        ")])}),0)])})],2)])},staticRenderFns:[]};var X=i("VU/8")(G,B,!1,function(t){i("j+p/")},"data-v-816fb888",null).exports,P={name:"CityAlphabet",props:{cities:Object},data:function(){return{bTouch:!1,nStartY:0,timer:null}},updated:function(){this.nStartY=this.$refs.A[0].offsetTop},computed:{arrLetter:function(){var t=[];for(var e in this.cities)t.push(e);return t}},methods:{HandleLetterClick:function(t){this.$emit("change",t.target.innerText)},GetLetterEmit:function(t){var e=this;this.timer||(this.timer=setTimeout(function(){var i=t.touches[0].clientY-114,n=Math.floor((i-e.nStartY)/20);n>=0&&n<=e.arrLetter.length&&e.$emit("change",e.arrLetter[n]),clearTimeout(e.timer),e.timer=null},16))},HandleTouchStart:function(t){this.bTouch=!0,this.GetLetterEmit(t)},HandleTouchMove:function(t){this.bTouch&&this.GetLetterEmit(t)},HandleTouchEnd:function(t){this.bTouch=!1}}},K={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list"},t._l(t.arrLetter,function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{click:t.HandleLetterClick,touchstart:function(e){return e.preventDefault(),t.HandleTouchStart(e)},touchmove:t.HandleTouchMove,touchend:t.HandleTouchEnd}},[t._v("\n      "+t._s(e)+"\n  ")])}),0)},staticRenderFns:[]};var Y={name:"City",components:{CityHeader:U,CitySearch:M,CityList:X,CityAlphabet:i("VU/8")(P,K,!1,function(t){i("KtM0")},"data-v-24a82d16",null).exports},data:function(){return{hotCities:[],cities:{},letter:""}},methods:{getCityInfo:function(){var t=this;u.a.get("/api/city.json").then(this.getCityInfoSucc).catch(function(){console.log("本地city.json数据未找到，请求github远程数据"),u.a.get("https://raw.githubusercontent.com/gengjian1203/QunarTravel/master/static/mock/city.json").then(t.getCityInfoSucc).catch(function(){console.log("github远程city.json数据未找到")})})},getCityInfoSucc:function(t){if(t.data.ret&&t.data.data){var e=t.data.data;this.hotCities=e.hotCities,this.cities=e.cities}},HandleLetterChange:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},z={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("city-header"),t._v(" "),i("city-search",{attrs:{cities:t.cities}}),t._v(" "),i("city-list",{attrs:{hotCities:t.hotCities,cities:t.cities,letter:t.letter}}),t._v(" "),i("city-alphabet",{attrs:{cities:t.cities},on:{change:t.HandleLetterChange}})],1)},staticRenderFns:[]};var Q=i("VU/8")(Y,z,!1,function(t){i("9HgM")},"data-v-73b9b4ec",null).exports,W={name:"CommonGallery",props:{gallaryImgs:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",paginationType:"fraction",observer:!0,observeParents:!0}}},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},methods:{HandleGalleryClick:function(){this.$emit("close")}},mounted:function(){this.swiper.slideTo(0)}},q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"gallery-wrapper",on:{click:this.HandleGalleryClick}},[e("swiper",{ref:"mySwiper",staticClass:"gallert-content",attrs:{options:this.swiperOption}},[this._l(this.gallaryImgs,function(t,i){return e("swiper-slide",{key:i,staticClass:"gallery-img"},[e("img",{staticClass:"image",attrs:{src:t,alt:"image_"+i}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]};var J=i("VU/8")(W,q,!1,function(t){i("2BK3")},"data-v-aca81dac",null).exports,Z={render:function(){var t=this.$createElement;return(this._self._c||t)("transition",[this._t("default")],2)},staticRenderFns:[]};var tt=i("VU/8")({name:"FadeAnimation"},Z,!1,function(t){i("ynyX")},"data-v-7fd34e0a",null).exports,et={name:"DetailBanner",props:{sightName:String,bannerImg:String,gallaryImgs:Array},data:function(){return{bShowGallery:!1}},components:{CommonGallery:J,FadeAnimation:tt},methods:{HandleBannerClick:function(){this.bShowGallery=!0},HandleGalleryClose:function(){this.bShowGallery=!1}}},it={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner-wrap",on:{click:t.HandleBannerClick}},[i("img",{staticClass:"banner-img",attrs:{src:t.bannerImg,alt:t.sightName}}),t._v(" "),i("div",{staticClass:"banner-info"},[i("div",{staticClass:"banner-name"},[t._v(t._s(this.sightName))]),t._v(" "),i("div",{staticClass:"banner-num"},[i("span",{staticClass:"iconfont banner-photo"},[t._v("")]),t._v("\n        "+t._s(t.gallaryImgs.length)+"\n      ")])])]),t._v(" "),i("fade-animation",[t.bShowGallery?i("common-gallery",{attrs:{gallaryImgs:t.gallaryImgs},on:{close:t.HandleGalleryClose}}):t._e()],1)],1)},staticRenderFns:[]};var nt=i("VU/8")(et,it,!1,function(t){i("KjV6")},"data-v-25692410",null).exports,st={name:"DetailHeader",data:function(){return{bShowTitle:!1,opacityStyle:{opacity:0}}},methods:{HandleScroll:function(){var t=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOfset;if(t>0){this.bShowTitle=!0;var e=t/200;e=e>1?1:e,this.opacityStyle={opacity:e}}else this.bShowTitle=!1}},activated:function(){window.addEventListener("scroll",this.HandleScroll)},deactivated:function(){window.removeEventListener("scroll",this.HandleScroll)}},at={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header-wrapper"},[i("router-link",{directives:[{name:"show",rawName:"v-show",value:!t.bShowTitle,expression:"!bShowTitle"}],staticClass:"iconfont header-back icon-back",attrs:{tag:"div",to:"/"}},[t._v("\n    \n  ")]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.bShowTitle,expression:"bShowTitle"}],staticClass:"header-fixed",style:t.opacityStyle},[i("router-link",{staticClass:"iconfont icon-back",attrs:{to:"/"}},[t._v("\n      \n    ")]),t._v(" "),i("div",{staticClass:"header-fixed-title"},[t._v("景区名称")])],1)],1)},staticRenderFns:[]};var rt=i("VU/8")(st,at,!1,function(t){i("uzXs")},"data-v-50bcc3bc",null).exports,ot={name:"DetailList",props:{categoryList:Array,bIcon:Boolean}},ct={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list-wrapper"},t._l(t.categoryList,function(e,n){return i("ul",{key:n,staticClass:"list-content"},[i("li",{staticClass:"list-item border-bottom"},[t.bIcon?i("span",{staticClass:"list-icon"}):t._e(),t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),e.children?i("li",{staticClass:"list-child"},[i("detail-list",{attrs:{categoryList:e.children,bIcon:!1}})],1):t._e()])}),0)},staticRenderFns:[]};var lt={name:"Detail",data:function(){return{sightName:"",bannerImg:"",gallaryImgs:[],categoryList:[]}},components:{DetailBanner:nt,DetailHeader:rt,DetailList:i("VU/8")(ot,ct,!1,function(t){i("nT8O")},"data-v-39473b6c",null).exports},methods:{getDetailInfo:function(){var t=this;u.a.get("/api/detail.json",{params:{id:this.$route.params.id}}).then(this.getDetailInfoSucc).catch(function(){console.log("本地detail.json数据未找到，请求github远程数据"),u.a.get("https://raw.githubusercontent.com/gengjian1203/QunarTravel/master/static/mock/detail.json",{params:{id:t.$route.params.id}}).then(t.getDetailInfoSucc).catch(function(){console.log("github远程home.json数据未找到")})})},getDetailInfoSucc:function(t){var e=t.data;if(e.ret&&e.data){var i=e.data;this.sightName=i.sightName,this.bannerImg=i.bannerImg,this.gallaryImgs=i.gallaryImgs,this.categoryList=i.categoryList}}},activated:function(){this.getDetailInfo()}},ut={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("detail-banner",{attrs:{sightName:this.sightName,bannerImg:this.bannerImg,gallaryImgs:this.gallaryImgs}}),this._v(" "),e("detail-header"),this._v(" "),e("div",{staticClass:"content"},[e("detail-list",{attrs:{categoryList:this.categoryList,bIcon:!0}})],1)],1)},staticRenderFns:[]};var dt=i("VU/8")(lt,ut,!1,function(t){i("y1Xc")},"data-v-0db405bc",null).exports;n.a.use(r.a);var ht=new r.a({routes:[{path:"/",name:"Home",component:O},{path:"/city",name:"City",component:Q},{path:"/detail/:id",name:"Detail",component:dt}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),vt=i("v5o6"),pt=i.n(vt),mt=(i("m0iu"),i("cjdf"),i("BjtM"),i("F3EI")),ft=i.n(mt),_t=(i("v2ns"),"北京");try{localStorage.nowcity&&(_t=localStorage.nowcity)}catch(t){}var Ct={nowcity:_t},wt={ChangNowCity:function(t,e){t.nowcity=e;try{localStorage.nowcity=e}catch(t){}}};n.a.use(d.a);var gt=new d.a.Store({state:Ct,actions:{ChangNowCity:function(t,e){t.commit("ChangNowCity",e)}},mutations:wt});i("j1ja");n.a.config.productionTip=!1,pt.a.attach(document.body),n.a.use(ft.a),new n.a({el:"#app",router:ht,store:gt,components:{App:a},template:"<App/>"})},NwuP:function(t,e){},"ceR+":function(t,e){},cjdf:function(t,e){},"j+p/":function(t,e){},m0iu:function(t,e){},nT8O:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="undefined"!=typeof window;n&&(window.Swiper=i("gsqX"));var s={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&n&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&n){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var s=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(s):s()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(s,a,!1,null,null,null);e.default=r.exports},puXT:function(t,e){},uSFs:function(t,e){},uzXs:function(t,e){},v2ns:function(t,e){},wVkG:function(t,e){},y1Xc:function(t,e){},ynyX:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.7d7869fc7413c6b08fe7.js.map