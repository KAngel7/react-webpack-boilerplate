(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{Io2e:function(e,n,t){"use strict";t.r(n);var r=t("U0wj"),a=t.n(r),c=t("JgWB");var i=t("Jpxj");function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,a=!1,c=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(l){a=!0,c=l}finally{try{r||null==o.return||o.return()}finally{if(a)throw c}}return t}}(e,n)||Object(i.a)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=t("NqON"),u=t.n(l),s=t("zFvq"),p=t("DrK+"),d=t("U53T"),b=t("6hfP"),y=t("Qx0W"),f=t("Zg4L"),h=t("efpO"),x=t("gGy4"),m=t("u6Ek"),v=t.n(m);t.d(n,"default",(function(){return w}));var g=u.a.createElement;function w(e){var n=e.i18n,t=Object(b.useLoginStatus)().isLoggedIn,r=Object(x.b)(),i=o(u.a.useState(!1),2),l=i[0],w=i[1],k=o(u.a.useState(!1),2),j=k[0],_=k[1],C=u.a.useCallback((function(e,n){n&&window.open("https://".concat(n.replace("{{locale}}",r).replace("{{currency}}",j.currency)),"_blank"),v()("webClick",{channelKey:e,pageName:"binance_home",elementID:"binance_click_home_fiat_pop_channel_button",extraInfo:{fiat_id:null===j||void 0===j?void 0:j.currency,channelKey:e,National_ID:""}})}),[j]),O=u.a.useCallback(Object(c.a)(a.a.mark((function e(){var n,t=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.length>0&&void 0!==t[0]&&t[0],!(t.length>1&&void 0!==t[1])||t[1],w(!1),n&&(!0,Object(y.post)("/gateway-api/v1/private/marketing/userOperRec",{bizType:"FIAT_CHANNEL",actionType:"SKIPV2",operResult:"y"}));case 4:case"end":return e.stop()}}),e)}))),[]),I=u.a.useCallback(Object(c.a)(a.a.mark((function e(){var n,t,r,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=!1,t=!1,e.prev=2,e.next=5,Object(y.get)("/gateway-api/v1/private/marketing/recommend/isNeedFiatBuyChannelPopUp");case 5:if((r=e.sent).success&&(n=r.data),n){e.next=9;break}return e.abrupt("return",!1);case 9:return e.next=11,Object(y.get)("/gateway-api/v1/private/marketing/recommend/getFiatBuyChannel");case 11:(c=e.sent).success&&(i=c.data||{}).channelList&&i.channelList.length&&(t=!0,_(i)),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(2),e.abrupt("return",!1);case 18:return e.abrupt("return",n&&t);case 19:case"end":return e.stop()}}),e,null,[[2,15]])}))),[]);u.a.useEffect((function(){t&&f.isClient&&!f.device.isMobile&&l&&(null===j||void 0===j?void 0:j.currency)&&Object(m.pageViewSend)({pageName:"binance_home",elementId:"binance_click_home_fiat_pop_channel",extraInfo:{fiat_id:null===j||void 0===j?void 0:j.currency,channelKey:"",National_ID:""}})}),[t,f.isClient,f.device,l,j]),u.a.useEffect((function(){t&&I().then((function(e){return w(e)}))}),[t]);var A=u.a.useMemo((function(){return Array.isArray(j.channelList)&&1===j.channelList.length}),[j.channelList]);return f.isClient&&!f.device.isMobile&&g(s.StyledDialog,{open:l,onMaskClick:function(){return O(!1,!1)},onCloseIconClick:function(){return O(!1)},sx:{width:["90%","508px"],textAlign:"center",zIndex:1e4,py:"xs"}},g(p.MoneyExchangeB96,{size:96}),g(d.Text,{variant:"h4",fontWeight:"bold",px:"xs",mt:"md"},Object(h.a)("exchange-index-fiatRecommend-title",n,"\u4eb2\u7231\u7684\u5e01\u5b89\u7528\u6237\uff0c\u6211\u4eec\u5f88\u9ad8\u5174\u5730\u901a\u77e5\u60a8\u73b0\u5728\u53ef\u4ee5\u4f7f\u7528\u4fe1\u7528\u5361\u548c\u94f6\u884c\u5361\u8fdb\u884c\u4e70\u5e01\u548c\u5145\u503c\u3002").replace("{{currency}}",j.currency)),g(d.Text,{variant:"label5",px:"xs",mt:"xs"},Object(h.a)("exchange-index-fiatRecommend-desc",n,"\u6839\u636e\u60a8\u7684IP\uff1a{{ip}}\uff0c\u6211\u4eec\u4e3a\u60a8\u63a8\u8350{{currency}}\u6cd5\u5e01\u8d2d\u4e70\u6e20\u9053").replace("{{ip}}",j.ip||"--").replace("{{currency}}",j.currency)),g(d.Flex,{my:"plus",justifyContent:A?"center":"space-between",flexWrap:"wrap"},Array.isArray(j.channelList)&&j.channelList.map((function(e){var t=e.channelKey,r=e.channelUrl,a=e.channelTitleKey,c=e.channelDescKey;return g(d.Box,{id:t,key:t,width:A?"60%":["100%","calc(50% - 16px)"],sx:{textAlign:"center",py:"sm",borderRadius:"4px",border:"1px solid",borderColor:"line",mx:"xs",mb:"xs",cursor:"pointer",":hover":{borderColor:"primary"}},onClick:function(){return C(t,r)}},a&&g(d.Text,{variant:"label4"},Object(h.a)(a,n).replace("{{currency}}",j.currency)),c&&g(d.Text,{variant:"label8",color:"t.secondary",mt:"minor"},Object(h.a)(c,n).replace("{{currency}}",j.currency)))}))),g(d.Text,{sx:{cursor:"pointer"},px:"xs",textAlign:"right",variant:"label7",onClick:function(){return O(!0)}},Object(h.a)("exchange-index-fiatRecommend-skip",n,"Skip for now")))}}}]);