(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{GkDt:function(e,t,n){"use strict";n.r(t);var a=n("NqON"),i=n.n(a),r=n("U53T"),o=n("6hfP"),s=n("U0wj"),c=n.n(s),l=n("JgWB"),u=n("NOLZ"),h="\u6bd4\u7279\u5e01\u4ea4\u6613\u5e73\u53f0 | \u6570\u5b57\u8d27\u5e01\u4ea4\u6613\u5e73\u53f0 | \u5e01\u5b89\uff0cBinance\uff0c\u5e01\u5b89\u5b98\u7f51",m="\u5e01\u5b89\uff0cBinance\uff0c\u5e01\u5b89\u5b98\u7f51, \u6cd5\u5e01\u4ea4\u6613\uff0c\u5e01\u5e01\u4ea4\u6613\uff0c\u6760\u6760\u4ea4\u6613\uff0c\u5408\u7ea6\u4ea4\u6613\uff0c\u533a\u5757\u94fe\u8d44\u4ea7\u4ea4\u6613\u5e73\u53f0,\u6570\u5b57\u8d27\u5e01\u4ea4\u6613\u7f51,\u865a\u62df\u8d27\u5e01\u8d26\u6237,\u6bd4\u7279\u5e01\u4ea4\u6613\u7cfb\u7edf,\u4ee5\u592a\u574a\u884c\u60c5,\u83b1\u7279\u5e01\u8d70\u52bf,BNB,\u8d75\u957f\u9e4f,BTC\u4ef7\u683c,ETH\u94b1\u5305\u6ce8\u518c,LTC\u5e02\u4ef7,\u6760\u6746\u671f\u8d27",d="\u5e01\u5b89\u662f\u5168\u7403\u9886\u5148\u7684\u6570\u5b57\u8d27\u5e01\u4ea4\u6613\u5e73\u53f0\uff0c\u63d0\u4f9b\u6bd4\u7279\u5e01\u3001\u83b1\u7279\u5e01\u3001\u4ee5\u592a\u574a\u3001BNB\u3001USDT\u7b49\u4e3b\u6d41\u6570\u5b57\u8d27\u5e01\u4ea4\u6613\u3002\u5e01\u5b89\u5b98\u7f51\u63d0\u4f9b\u7f51\u9875\u7aef\uff0cAPP\u7aef\uff0c\u7535\u8111\u7aef\u7b49\u591a\u79cd\u4ea4\u6613\u65b9\u5f0f\uff0c\u5b89\u5168\u53ef\u9760\uff0c\u65b9\u4fbf\u5feb\u6377\u3002\u4e70\u5356\u6570\u5b57\u8d27\u5e01\u5c31\u4e0a\u5e01\u5b89\u7f51\u3002",p=function(e,t){e.global.updateState({metaData:{title:h,keywords:m,description:d,ogImage:t}})},f=function(){var e=Object(l.a)(c.a.mark((function e(t){var n,a,i,r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.appContext.store.dispatch,a=t.params||{},i=a.lng,r=void 0===i?"en":i,o=a.snapshot,e.next=4,Promise.all([Object(u.a)(n,r),Object(u.d)(n,!0),Object(u.b)(n,r),Object(u.c)(n,r,t.appContext.req),"cn"===r?p(n,o):null]);case 4:return e.abrupt("return",{});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=n("QO44"),b=n("DrK+"),g=n("gGy4"),v=n("Kvkj"),j=n("efpO"),O=n("2/JU"),w=n("X7BR"),y=n("wYLN"),P=n("XwpO"),k=n("7bOT"),S=n("tQdO"),B=n("F+ZF"),T=n("ohGb"),A=n("uP2v"),C=n.n(A),E=n("YTgd"),N=n("+GF8"),F=(n("KaR+"),i.a.createElement),z=function(e){return Math.floor(100*e)/100},I=function(e){Object(S.a)(n,e);var t=Object(B.a)(n);function n(e){var a;Object(y.a)(this,n),a=t.call(this,e),Object(T.a)(Object(k.a)(a),"setRefs",(function(e){return function(t){a.$refs[e]=t}})),Object(T.a)(Object(k.a)(a),"onResize",Object(E.a)((function(){if(!a.unmount){var e=a.getGapPx(),t=a.getPadOffset(),n=t.height,i=t.width,r=a.isHorizontal(),o=a.isLtr()?"marginRight":"marginLeft",s=(a.$refs.target||{childNodes:[]}).childNodes;[].slice.call(s).forEach((function(t){r?(t.style[o]="".concat(e,"px"),t.style.width="".concat(i,"px")):(t.style.marginBottom="".concat(e,"px"),t.style.height="".concat(n,"px"))})),a.switchSlide(a.state.activeIndex,!1)}}),100/6)),Object(T.a)(Object(k.a)(a),"indexGetter",(function(e){var t=Object(k.a)(a).count,n=a.props,i=n.slidesPerGroup,r=n.slidesPerView,o=Math.floor(r),s=e;return s<=0?0:(i>1&&(s+=1),s>t-o&&(s=t-o),Math.floor(s/i)*i)})),Object(T.a)(Object(k.a)(a),"switchPrev",(function(e){var t=a.props.slidesPerGroup,n=a.state.activeIndex;a.switchSlide(n-t,e)})),Object(T.a)(Object(k.a)(a),"switchNext",(function(e){var t=a.props.slidesPerGroup,n=a.state.activeIndex;a.switchSlide(n+t,e)})),Object(T.a)(Object(k.a)(a),"switchSlide",(function(e,t){var n=a.props.onSlide,i=a.indexGetter(e),r=a.calculateDistance({translateIndex:i}),o=r.translateX,s=r.translateY,c=function(){!a.unmount&&a.pullElement&&(a.setState({activeIndex:i}),a.pullElement.animateTo(o,s).then((function(){return n(i)})))};t||[null,void 0].indexOf(t)>-1?c():(a.pullElement.setTranslate(o,s),N.a.checkViewport(),setTimeout((function(){return c()}),100))})),Object(T.a)(Object(k.a)(a),"calculateDistance",(function(e){var t=a.isLtr(),n=a.pxGetter(a.props.gap),i=a.isHorizontal(),r=a.getPadOffset(),o=r.width,s=r.height,c=t?e.translateIndex:-e.translateIndex,l=z((+o+n)*c),u=z((+s+n)*c);return{translateX:i?-l:0,translateY:i?0:-u}}));var r=e.initialSlide,o=e.children;return a.$refs={},a.unmount=!1,a.count=i.a.Children.count(o),a.state={activeIndex:r},a}return Object(P.a)(n,[{key:"componentDidMount",value:function(){this.initPullElement(),this.onResize(),window.addEventListener("resize",this.onResize,!0)}},{key:"componentDidUpdate",value:function(e){var t=this.count,n=this.props,a=n.children,r=n.slidesPerView;this.count=i.a.Children.count(a),t!==this.count&&(this.pullElement&&this.pullElement.destroy(),this.initPullElement()),r!==e.slidesPerView&&this.onResize()}},{key:"componentWillUnmount",value:function(){this.unmount=!0,window.removeEventListener("resize",this.onResize,!0),this.pullElement&&this.pullElement.destroy()}},{key:"getPadOffset",value:function(){var e=this.props.slidesPerView,t=this.getGapPx(),n=this.isHorizontal(),a=this.$refs.target||{clientWidth:0,clientHeight:0},i=a.clientWidth,r=a.clientHeight,o=(e-1)*t;return{height:n?0:z((r-o)/e),width:n?z((i-o)/e):0}}},{key:"initPullElement",value:function(){var e,t=this,n=this.isHorizontal(),a=this.isLtr();function i(e){var i=e.translateX,r=e.translateY;this.preventDefault();var o=t.state.activeIndex,s=t.calculateDistance({translateIndex:o}),c=s.translateX,l=s.translateY,u=n?i-c:r-l;u>20?t[a?"switchPrev":"switchNext"](!0):u<-20?t[[a?"switchNext":"switchPrev"]](!0):t.switchSlide(o,!0)}var r=n?"Left":"Up",o=n?"Right":"Down";this.pullElement=new C.a((e={wait:!1,target:this.$refs.target,transitionProperty:"transform"},Object(T.a)(e,"onPull".concat(r,"End"),i),Object(T.a)(e,"onPull".concat(o,"End"),i),Object(T.a)(e,"translateZ",this.props.translateZ),e)),this.pullElement.init()}},{key:"render",value:function(){var e,t=this.props,n=t.children,a=t.pagination,r=t.direction,o=t.customPagination,s=this.state.activeIndex,c=i.a.Children.toArray(n).map((function(e,t){return F("div",{key:t,"data-active":s===t,className:"slide",children:e})}));if("function"===typeof o)e=o({total:i.a.Children.count(n),currentIndex:s});else{var l=i.a.Children.map(n,(function(e,t){return F("span",{className:"bullet",key:t,"data-active":s===t})}));e=a&&F("div",{className:"pagination"},l)}return F("div",{className:"mica-slider","data-direction":r},F("div",{className:"slide-wrapper",ref:this.setRefs("target")},c),e)}},{key:"isHorizontal",value:function(){return"horizontal"===this.props.direction}},{key:"isLtr",value:function(){return"ltr"===this.props.dir}},{key:"getGapPx",value:function(){return parseFloat(this.props.gap)}},{key:"pxGetter",value:function(e){return parseFloat(e)}}]),n}(i.a.PureComponent);Object(T.a)(I,"defaultProps",{gap:"0px",initialSlide:0,slidesPerView:1,slidesPerGroup:1,direction:"horizontal",pagination:!0,translateZ:!0,onSlide:function(){return!1},dir:"ltr"});var R=I,D=n("4rn+"),G=i.a.createElement,H={slidesPerView:4,slidesPerGroup:1,gap:24},M={slidesPerView:2.6,slidesPerGroup:1,gap:25},U={slidesPerView:1.4,slidesPerGroup:1,gap:16},L=function(e){var t=e.i18n,n=e.sliders,o=void 0===n?[]:n,s=Object(a.useRef)(null),c=Object(g.a)(),l=Object(a.useState)(0),u=l[0],h=l[1],m=Object(a.useState)(H),d=m[0],p=m[1],f=Object(g.f)(),x=f.isMobile,y=f.isTablet,P=o,k=Math.ceil(o.length/1),S=Object(a.useCallback)((function(e){var t=s.current;return t&&t.switchSlide?"pre"===e?t.switchPrev(!0):"next"===e?t.switchNext(!0):t.switchSlide(e,!0):null}),[]),B=h;Object(a.useEffect)((function(){p(x||y?y?M:U:H)}),[y,x]);var T=Object(a.useMemo)((function(){var e=Math.floor(d.slidesPerView),t=k&&u>0,n=k&&u<k-e,a={top:0,bottom:0,width:32,cursor:"pointer",position:"absolute",alignItems:"center",justifyContent:"center",display:["none","flex"],color:["#fff","#fff","t.primary"],bg:["rgba(0,0,0,0.3)","rgba(0,0,0,0.3)","#fff"],"&:hover":{color:"primary"}};return G(i.a.Fragment,null,t?G(r.Box,{__css:a,className:"icon-dir",onClick:function(){return S("pre")},sx:{left:[0,-24,-32]},children:G(b.AppArrowRightS16,{sx:{transform:"rotate(180deg)"}})}):null,n?G(r.Flex,{__css:a,className:"icon-dir",onClick:function(){return S("next")},sx:{right:[0,-24,-32]},children:G(b.AppArrowRightS16,null)}):null)}),[d,k,u,S]);return G(i.a.Fragment,null,G(r.Box,{sx:{color:"#fff",textAlign:"center",px:["sm","md"],lineHeight:["1.2","1.3"],py:["xp","plus","lg"]},style:{backgroundColor:"#0B0E11",backgroundImage:"url('".concat(w.t,"/static/images/home/top-bg.png')"),backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"auto 100%"}},G(r.Text,{sx:{fontSize:[28,40],color:"#E6E8EA"}},Object(j.a)("exchange-home-ctaTitle",t)),G(r.Text,{sx:{fontSize:2,mt:"xs",color:"#AEB4BC"}},Object(j.a)("exchange-home-ctaDesc",t)),G(r.Box,{sx:{mt:"md",display:["block","flex"],justifyContent:"center"},children:G(D.a,{i18n:t})})),k?G(r.Box,{variant:"layouts.homeView",sx:{py:"md",bg:"#fff",px:["sm","md","plus"]}},G(r.Box,{sx:{position:"relative",".mica-slider":{overflow:["visible","visible","hidden"]}}},G(R,Object.assign({ref:s},d,{pagination:!1,onSlide:B,dir:c}),P.map((function(e,t){return G(r.Box,{key:t,as:"a",tx:"sliders",variant:e.largePic?"item":"itemEmpty",href:e.link,alt:e.title,onClick:Object(O.b)(O.c.carouselActivity),sx:{display:"block",height:["auto","auto",133],minHeight:100,borderRadius:4},target:"_blank"},e.largePic?G(v.b,{src:e.largePic,alt:e.title,width:"100%",height:"100%",onError:function(){return!1}}):G(r.Box,null))}))),x?null:T)):null)},_=i.a.memo(L),V=n("Zg4L"),W=i.a.createElement;function q(e){var t=e.i18n,n=e.notices,a=void 0===n?[]:n,i=Object(g.b)();return W(r.Box,{sx:{bg:"background",py:["md","plus"],px:["sm"]}},W(r.Flex,{variant:"layouts.homeView",sx:{justifyContent:"center"}},a.map((function(e){return W(r.Flex,{sx:{fontSize:1,alignItems:"center","> a":{alignItems:"center","&:hover,&:hover > svg":{color:"primary"}}},key:e},W(r.Flex,{as:"a",href:e.url,"aria-label":"detail",sx:{color:"#212833"}},W(b.AnnounceS24,{className:"icon-dir",size:20,color:"icon",sx:{mr:"xs",flex:"none"}}),W(r.Text,{children:e.title}),W(r.Text,{sx:{ml:"sm",flex:"none"},children:Object(V.dateFormat)(new Date(e.time),"MM-dd")})),W(r.Box,{__css:{height:"90%",width:"1px",bg:"#d8d8d8"},sx:{mx:["sm","md"],flex:"none"}}),W(r.Flex,{as:"a","aria-label":"more",href:"/".concat(i,"/support/announcement"),sx:{color:"#848E9C",flex:"none"}},W(r.Text,{whiteSpace:"nowrap"},Object(j.a)("exchange-common-learnMore",t)),W(b.AppArrowS24,{className:"icon-dir",size:16,sx:{ml:"minor",fontWeight:"semibold"}})))}))))}var X=i.a.memo(q),Y=i.a.createElement,J="".concat(w.t,"/static/images/home/coin-logo"),Z={BTC:"".concat(J,"/BTC.png"),BNB:"".concat(J,"/BNB.png"),ETH:"".concat(J,"/ETH.png"),BCH:"".concat(J,"/BCH.png"),XRP:"".concat(J,"/XRP.png"),LTC:"".concat(J,"/LTC.png")},K=[20,8,8,10].map((function(e){return 10*e})),$=function(e){var t=K[e]||0;return e>0?{minWidth:[t,"px"].join(""),flex:t}:{width:[t,"px"].join(""),flex:t}},Q=[{baseAsset:"BNB",quoteAsset:"USDT",baseAssetName:"BNB"},{baseAsset:"BTC",quoteAsset:"USDT",baseAssetName:"Bitcoin"},{baseAsset:"ETH",quoteAsset:"USDT",baseAssetName:"Ethereum"},{baseAsset:"XRP",quoteAsset:"USDT",baseAssetName:"Ripple"},{baseAsset:"BCH",quoteAsset:"USDT",baseAssetName:"Bitcoin Cash"},{baseAsset:"LTC",quoteAsset:"USDT",baseAssetName:"Litecoin"}],ee=function(){var e=Object(g.b)(),t=Object(o.useSsrStore)().i18n,n=Object(o.useMarkets)(w.v).nextTickerMap,a=Object(o.useGetFiatPrice)(w.v);return Y(r.Box,{sx:{bg:"background",pb:[0,"xl"],px:[0,"md"]}},Y(r.Box,{variant:"layouts.homeView",sx:{boxShadow:["none","rgba(0, 0, 0, 0.06) 0px 0px 40px"]}},Y(r.Flex,{variant:"columns.tableTr",sx:{color:"t.third",lineHeight:"18px",fontSize:[0,1]}},[Object(j.a)("exchange-balancesTable-name",t),Object(j.a)("exchange-trade-lastPrice",t),Object(j.a)("exchange-trade-24hChange",t),Object(j.a)("exchange-home-tableMarkets",t)].map((function(e,t){return Y(r.Flex,{key:e,"data-area":"left",style:$(t),sx:{display:3===t?["none","flex"]:"flex"}},Y(r.Text,{title:e,children:e,variant:"layouts.ellipsis",sx:{flex:1,textAlign:2===t?["right","left"]:"left"}}))}))),Q.map((function(t){var i=t.baseAsset,o=t.quoteAsset,s=t.baseAssetName,c=[i,o],l=n[c.join("")]||{},u=l.lastPrice,h=l.highPrice,m=l.lowPrice,d=l.difference,p=l.bigThan,f=void 0!==u?a(u,o):{fiatPrice:w.h},x=f.symbol,b=f.fiatPrice,g=h&&m,j=Z[i],y=0;return Y(r.Flex,{as:"a",key:c.join("_"),variant:"columns.tableTr",href:"/".concat(e,"/trade/").concat(c.join("_")),onClick:Object(O.b)(O.c.marketActivity),sx:{fontSize:[1,18],fontWeight:"normal",color:"t.primary","&:hover":{bg:"hovers.light"}}},Y(r.Flex,{"data-area":"left",style:$(y++)},Y(r.Flex,{sx:{width:[24,36],height:[24,36],alignItems:"center"}},j?Y(v.b,{src:j,alt:i,width:"100%",height:"100%"}):"I"),Y(r.Flex,{sx:{flex:1,flexDirection:["column","row"]}},Y(r.Text,{sx:{ml:"sm"},children:i}),Y(r.Text,{sx:{ml:"sm",color:"t.third"},children:s}))),Y(r.Flex,{"data-area":"left",style:$(y++)},Y(v.a,{as:r.Text,children:[x,b].join("")})),Y(r.Flex,{"data-area":"left",style:$(y++)},Y(v.a,{as:r.Text,sx:{flex:1,textAlign:["right","left"],color:g?p?"buy":"sell":null}},g?[d,"%"].join(""):" ".concat(w.h))),Y(r.Flex,{"data-area":"left",style:$(y++),sx:{display:["none","flex"]}},Y(v.b,{isSvg:!0,width:127,height:38,alt:c.join(""),src:"".concat(w.t,"/kline/").concat(c.join(""),".svg")})))})),Y(r.Flex,{sx:{justifyContent:"center",py:"md"}},Y(r.Flex,{as:"a","aria-label":"markets",href:"/".concat(e,"/markets"),sx:{fontSize:1,color:"t.third",alignItems:"center","&:hover":{color:"primary"}}},Y(r.Text,{children:Object(j.a)("exchange-home-viewMoreMarkets",t)}),Y(b.AppArrowS24,{className:"icon-dir",size:16,sx:{ml:"minor"}})))))},te=i.a.memo(ee),ne=n("XlW0"),ae=i.a.createElement,ie="".concat(w.t,"/static/images/home/communication"),re={blog:"".concat(ie,"/blog.svg"),community:"".concat(ie,"/community.svg"),joinUs:"".concat(ie,"/join-us.svg"),support:"".concat(ie,"/support.svg")},oe=function(e){var t=e.i18n,n=Object(g.b)();return ae(r.Box,{__css:{bg:"#fff",px:["sm","md"]},sx:{pb:"sm",pt:["xp","xp","xl"]}},ae(r.Box,{variant:"layouts.homeView"},ae(r.Text,{sx:{mb:["md","xp"],fontSize:[4,5,6],fontWeight:"semibold"}},Object(j.a)("exchange-home-FullRangeCommunications",t)),ae(r.Flex,{sx:{justifyContent:"space-between",flexWrap:"wrap"}},function(e,t){return[{title:Object(j.a)("exchange-home-24_7Support",t),desc:Object(j.a)("exchange-home-Support_details",t),img:re.support,href:"/".concat(e,"/support")},{title:Object(j.a)("exchange-home-BinanceBlog",t),desc:Object(j.a)("exchange-home-BinanceBlog_details",t),img:re.blog,href:"/".concat(e,"/blog")},{title:Object(j.a)("exchange-home-Community",t),desc:Object(j.a)("exchange-home-Community_details",t),img:re.community,href:"/".concat(e,"/community")},{title:Object(j.a)("exchange-home-JoinUs",t),desc:Object(j.a)("exchange-home-JoinUs_details",t),img:re.joinUs,href:"/".concat(e,"/career")}]}(n,t).map((function(e){return ae(r.Box,{key:e.title,sx:{width:["100%","50%","25%"],mb:"plus"}},ae(r.Box,{as:"a","aria-label":e.title,href:e.href,onClick:Object(O.b)(O.c.contactUs),sx:{display:"block",color:"t.primary","&:hover":{color:"primary"}}},ae(r.Box,{sx:{ml:"minor"},children:ae(v.b,{isSvg:!0,width:78,height:78,src:e.img})}),ae(r.Text,{sx:{fontSize:3,mt:"md",fontWeight:"medium"},children:e.title})),ae(r.Text,{sx:{color:"third",fontSize:1,mt:"sm",pr:[0,"lg"]},children:e.desc}))})))))},se=i.a.memo(oe),ce=n("ANRP"),le=n("6csD"),ue=i.a.createElement;function he(){var e=Object(ce.a)(["\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 9999;\n  align-items: center;\n  background: rgba(18, 22, 28, 0.9);\n  line-height: 1.3;\n  justify-content: space-between;\n\n  img {\n    width: 34px;\n    height: 34px;\n    margin: 0 10px;\n  }\n"]);return he=function(){return e},e}var me="".concat(w.t,"/static/images/home/mobile"),de={logo:"".concat(me,"/logo.svg")},pe=Object(le.default)(r.Flex)(he()),fe=function(){var e=Object(g.b)(),t=Object(o.useMakeGlobal)(),n=t.global,s=t.setGlobal,c=n.isHybrid,l=Object(g.f)(),u=l.isMobile,h=l.isTablet,m=Object(a.useState)(!0),d=m[0],p=m[1],f=!c&&(u||h)&&d;i.a.useEffect((function(){s({chatArrow:f})}),[f]);var x="cn"!==e,j="/".concat(x?"en":"cn","/download");return f?ue(r.Portal,null,ue(pe,{sx:{height:[60,66]}},ue(r.Flex,{sx:{position:"relative",left:"10px",top:"-20px",bg:"#000",borderRadius:"circle",width:"24px",height:"24px",alignItems:"center",justifyContent:"center",transform:"translateY(-30%)"},onClick:function(){return p(!1)}},ue(b.CloseS24,{size:16,color:"#ffffff"})),ue(v.b,{src:de.logo,alt:"logo"}),ue(r.Box,{sx:{flex:1,color:"#fff",fontSize:[0,1]}},ue(r.Text,{sx:{fontSize:[1,2],fontWeight:"medium"}},x?"BINANCE APP":"\u5e01\u5b89App"),ue(r.Text,null,x?"Secure, fast and elegant.":"\u5b89\u5168\u3001\u5feb\u901f\u548c\u7b80\u6d01")),ue(r.Button,{as:"a",variant:"default",onClick:Object(O.b)(O.c.downloadApp),sx:{mx:"sm",fontSize:0,px:"md"},href:j,children:x?"Download":"\u4e0b\u8f7d"}))):null},xe=i.a.memo(fe),be=i.a.createElement,ge=Object(x.dynamic)((function(){return n.e(2).then(n.bind(null,"Io2e"))}),{ssr:!1,loading:function(){return null},webpack:function(){return["Io2e"]},modules:["./HomeView/FiatTips"]});function ve(){var e=Object(o.useSsrStore)(),t=e.i18n,n=e.marketRecommend,a=e.marketNotice;return be(i.a.Fragment,null,be(ge,{i18n:t}),be(xe,{i18n:t}),be(_,{i18n:t,sliders:n}),be(X,{i18n:t,notices:a}),be(te,null),be(ne.a,{i18n:t}),be(se,{i18n:t}),be(D.b,{i18n:t}))}var je=i.a.memo(ve),Oe=n("XoK4"),we=i.a.createElement,ye=Object(O.a)({viewID:O.c.visitHome,quitID:O.c.quitHome});function Pe(){return Object(o.useFetchProduct)(),i.a.useEffect(ye,[]),we(i.a.Fragment,null,we(Oe.a,null),we(r.Box,{sx:{flex:1},children:we(je,null)}))}Pe.getInitialProps=f;t.default=Pe},"KaR+":function(e,t,n){}}]);