(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2301,5867],{20421:(e,c,s)=>{"use strict";s.r(c),s.d(c,{default:()=>n});var i=s(47313),t=s(35179),a=s(81349),o=s(84261),r=s(64442),l=s(46417);const d=i.lazy((()=>Promise.resolve().then(s.bind(s,25810)))),n=e=>{let{itemData:c,wallID:s,ThemeID:n,ownerId:_,wall:v}=e;const b=!(!t.ig||c.hotspot),h=!(3!==c.type&&5!==c.type||1!=v.ThemeRule.autoPlay&&t.ig);return(0,l.jsxs)("div",{className:"tb_ct_media_wrap",children:[t.ZQ?(0,l.jsx)("div",{className:"tb_ct_social_top_",children:(0,l.jsx)(i.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(d,{networkClass:"tb_ct_social__ico",network:c.network,isDefault:1===v.ThemeRule.iconType,ThemeRule:v.ThemeRule})})}):null,(0,l.jsx)(a.Z,{itemData:c,IconClass:"tb_ct_media_icon",show:b}),h?(0,l.jsx)(r.Z,{VideoClass:"tb_ct_video",data:c,wallID:s,themeID:v.Personalization.widgetTheme,ownerId:_,size:100,isCover:!0,muted:!0}):(0,l.jsx)(o.default,{ImageClass:"tb_ct_image",data:c,wallID:s,themeID:n,ownerId:_,size:100,hotspot:!!c.hotspot})]})}},81349:(e,c,s)=>{"use strict";s.d(c,{Z:()=>o});s(47313);var i=s(35179),t=s(95867),a=s(46417);const o=e=>{const{itemData:c,IconClass:s,isCenter:o,hideVideo:r,show:l}=e,d=3===c.type||5===c.type,n=7===c.network.id,_=!!(c.imageList&&c.imageList.length>0),v=1===c.isAudio,b=!!(c.ugc_products&&c.ugc_products.length>0),h=(0,a.jsx)(t.default,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"}),x=(0,a.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:(0,a.jsx)("div",{})}),j=(0,a.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:(0,a.jsx)("div",{})}),m=(0,a.jsx)("div",{className:"tb__icon tb-".concat(i.bX?"reel-fill tb_reel_ico":"video tb_video_ico"),children:(0,a.jsx)("div",{})}),u=(0,a.jsx)("div",{className:"tb_play_ico tb__icon tb-play",children:(0,a.jsx)("div",{})}),p=(0,a.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:(0,a.jsx)("div",{})}),N=(0,a.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:(0,a.jsx)("div",{})});return l?(0,a.jsxs)(a.Fragment,{children:[o&&(n||d)?(0,a.jsxs)("div",{className:"".concat(s," tb__media_ico_c"),children:[d&&!n?N:"",d&&n?h:""]}):null,b||_||d?(0,a.jsxs)("div",{className:"".concat(s," tb__media_ico_"),children:[b?p:"",_?x:"",o||!d||n||r?"":v?j:i.ZQ?u:m]}):null]}):null}},95867:(e,c,s)=>{"use strict";s.r(c),s.d(c,{default:()=>r});var i=s(47313),t=s(35179),a=s(46417);const o=i.memo((e=>{let{network:c,networkClass:s}=e;const i="".concat(s," tb__icon tb_ico_default");switch(c.id){case 1:return(0,a.jsx)("div",{className:"".concat(i," tb-twitter")});case 2:case 18:return(0,a.jsx)("div",{className:"".concat(i," tb-instagram-default"),children:(0,a.jsx)("div",{})});case 3:return(0,a.jsx)("div",{className:"".concat(i," tb-facebook"),children:(0,a.jsx)("div",{})});case 4:return(0,a.jsxs)("div",{className:"".concat(i," tb-google-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,a.jsx)("div",{})})]});case 5:return(0,a.jsx)("div",{className:"".concat(i," tb-pinterest"),children:(0,a.jsx)("div",{})});case 6:return(0,a.jsxs)("div",{className:"".concat(i," tb-flickr-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})})]});case 7:return(0,a.jsxs)("div",{className:"".concat(i," tb-youtube-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})})]});case 8:return(0,a.jsx)("div",{className:"".concat(i," tb-vimeo"),children:(0,a.jsx)("div",{})});case 10:return(0,a.jsx)("div",{className:"".concat(i," tb-linkedin"),children:(0,a.jsx)("div",{})});case 11:return(0,a.jsx)("div",{className:"".concat(i," tb-tumblr"),children:(0,a.jsx)("div",{})});case 12:return(0,a.jsx)("div",{className:"".concat(i," tb-rss"),children:(0,a.jsx)("div",{})});case 15:return(0,a.jsx)("div",{className:"".concat(i," tb-workplace"),children:(0,a.jsx)("div",{})});case 19:return(0,a.jsx)("div",{className:"".concat(i," tb-yelp"),children:(0,a.jsx)("div",{})});case 20:return(0,a.jsxs)("div",{className:"".concat(i," tb-slack-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path8",children:(0,a.jsx)("div",{})})]});case 21:return(0,a.jsx)("div",{className:"".concat(i," tb-yammer"),children:(0,a.jsx)("div",{})});case 23:return(0,a.jsx)("div",{className:"".concat(i," tb-airbnb"),children:(0,a.jsx)("div",{})});case 25:return(0,a.jsx)("div",{className:"".concat(i," tb-soundcloud"),children:(0,a.jsx)("div",{})});case 26:return(0,a.jsxs)("div",{className:"".concat(i," tb-giphy-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,a.jsx)("div",{})})]});case 28:return t.ZQ?(0,a.jsxs)("div",{className:"".concat(i," tb-capterra-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1"}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2"}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3"}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4"})]}):(0,a.jsxs)("div",{className:"".concat(i," tb-tiktok-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,a.jsx)("div",{})})]});case 29:return t.ZQ?(0,a.jsx)("div",{className:"".concat(i," tb-etsy"),children:(0,a.jsx)("div",{})}):(0,a.jsx)("div",{className:"".concat(i," tb-onsite-upload"),children:(0,a.jsx)("div",{})});case 30:case 32:return(0,a.jsx)("div",{className:"".concat(i," tb-vk"),children:(0,a.jsx)("div",{})});case 31:return(0,a.jsxs)("div",{className:"".concat(i," tb-tiktok-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,a.jsx)("div",{})})]});case 33:return(0,a.jsxs)("div",{className:"".concat(i," tb-trustpilot-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})})]});case 34:return(0,a.jsxs)("div",{className:"".concat(i," tb-amazon-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})})]});case 35:return(0,a.jsx)("div",{className:"".concat(i," tb-tripadvisor"),children:(0,a.jsx)("div",{})});case 36:return(0,a.jsxs)("div",{className:"".concat(i," tb-tagembed-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})})]});case 37:return(0,a.jsxs)("div",{className:"".concat(i," tb-aliexpress-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,a.jsx)("div",{})})]});default:return""}}));class r extends i.PureComponent{render(){return(0,a.jsx)(o,{...this.props})}}},61729:(e,c,s)=>{"use strict";var i=s(79165);function t(){}function a(){}a.resetWarningCache=t,e.exports=function(){function e(e,c,s,t,a,o){if(o!==i){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function c(){return e}e.isRequired=e;var s={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:c,element:e,elementType:e,instanceOf:c,node:e,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:a,resetWarningCache:t};return s.PropTypes=s,s}},75192:(e,c,s)=>{e.exports=s(61729)()},79165:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2406:(e,c,s)=>{"use strict";c.Ad=void 0;var i=s(84228);var t=s(65786);Object.defineProperty(c,"Ad",{enumerable:!0,get:function(){return t.getImageSize}});var a=s(22537)},84228:(e,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.ErrorMessage=void 0,c.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(e,c,s)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.getImageSize=void 0;const i=s(84228);c.getImageSize=function(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((s,t)=>{if("undefined"===typeof window)return t(i.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!e)return t(i.ErrorMessage.URL_IS_NOT_DEFINED);let a=null;const o=new Image;o.addEventListener("load",(()=>{a&&window.clearTimeout(a),s({width:o.naturalWidth,height:o.naturalHeight})})),o.addEventListener("error",(e=>{a&&window.clearTimeout(a),t("".concat(e.type,": ").concat(e.message))})),o.src=e,c.timeout&&(a=window.setTimeout((()=>t(i.ErrorMessage.TIMEOUT)),c.timeout))}))}},22537:function(e,c,s){"use strict";var i=this&&this.__awaiter||function(e,c,s,i){return new(s||(s=Promise))((function(t,a){function o(e){try{l(i.next(e))}catch(c){a(c)}}function r(e){try{l(i.throw(e))}catch(c){a(c)}}function l(e){var c;e.done?t(e.value):(c=e.value,c instanceof s?c:new s((function(e){e(c)}))).then(o,r)}l((i=i.apply(e,c||[])).next())}))};Object.defineProperty(c,"__esModule",{value:!0}),c.useImageSize=void 0;const t=s(47313),a=s(65786);c.useImageSize=(e,c)=>{const[s,o]=(0,t.useState)(null),[r,l]=(0,t.useState)(!1),[d,n]=(0,t.useState)(null);return(0,t.useEffect)((()=>{i(void 0,void 0,void 0,(function*(){l(!0),o(null);try{const{width:s,height:i}=yield(0,a.getImageSize)(e,c);o({width:s,height:i})}catch(d){n(d.toString())}finally{l(!1)}}))}),[e,c]),[s,{loading:r,error:d}]}}}]);