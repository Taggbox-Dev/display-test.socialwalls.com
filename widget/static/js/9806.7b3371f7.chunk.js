(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[9806],{64442:(e,t,i)=>{"use strict";i.d(t,{Z:()=>p});var o=i(47313),a=i(2406),s=i(20510),n=i.n(s),r=i(43635),d=i(35179),l=(i(17739),i(46417));const c=(e,t)=>{if(25===t){return String(e).replace("https://w.soundcloud.com/player/?url=","")}return e};class u extends o.Component{constructor(e){super(e),this.onMediaLoad=async e=>{const{data:t}=this.props;if(t&&Object.keys(t).length>0&&[4,5,3].includes(t.type))if(t.mediaHeight&&""!=t.mediaHeight&&t.mediaWidth&&""!=t.mediaWidth)this.setState({paddingBottom:100*t.mediaHeight/t.mediaWidth});else try{const{width:e,height:i}=await(0,a.Ad)(t.postFileNew);this.setState({paddingBottom:100*i/e})}catch(i){this.setState({paddingBottom:100})}},this.setVideoLoaded=e=>{this.setState({videoLoaded:e})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=o.createRef(),this.observer=null}componentWillMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((e=>{let[t]=e;this.setState({isVisible:t.isIntersecting})}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(i){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:e,data:t,wallID:i,isCover:o,controls:a,autoPlay:s,handleVideoEnded:u,muted:p,themeID:h,intervalTime:m}=this.props,{paddingBottom:g,videoLoaded:f,isVisible:v}=this.state,_={small:t.postFileNew,large:t.filename,orignal:t.file},w=[74,76,77].includes(h),b={paddingBottom:"".concat(w&&d.bX?null:g,"%")},y=null!==t&&void 0!==t&&t.loopStop?t.mediaUrl:t.mediaClip&&String(t.mediaClip).length>0?t.mediaClip:t.mediaUrl,I=new URLSearchParams(window.location.search),S=I.has("editor")&&"1"===I.get("editor")&&I.has("personalize")&&"1"===I.get("personalize")&&I.has("preview")&&"1"===I.get("preview"),T=I.has("embed")&&"true"===I.get("embed");return(0,l.jsx)("div",{className:"".concat(e,"_wrap_ mediaHolder").concat(t.id),style:b,ref:this.videoRef,children:(0,l.jsx)(n(),{className:"".concat(e," video").concat(t.id),url:c(y,t.network.id),"data-type":"video","data-network":t.network.id,"data-link":t.link,"data-wall-id":i,"data-item-id":t.id,"data-feed-id":t.feedId?t.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%"),poster:t.postFileNew}},file:{attributes:{preload:"metadata",poster:t.postFileNew}}},loop:!(d.bX&&!d.aL&&null!==t&&void 0!==t&&t.loopStop),onError:e=>{!T||t.stories&&0!=t.stories||(0,r.ib)(e,t.id),w&&u&&setTimeout((()=>{u()}),1e3*m)},autoPlay:!d.bX||S&&!T||null==t.mediaClip?!(d.bX&&S&&!T&&(null==t.mediaClip||""==t.mediaClip))&&s:v,muted:p,volume:s?1:0,playsinline:!0,onReady:e=>{d.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:d.ig||d.bX&&(!S||T)?v:!(d.bX&&S&&!T)&&s,height:"100%",width:"100%",controls:a||!1,style:{backgroundImage:"url(".concat(w?_.large:_.small,")"),backgroundSize:o?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:u||null})})}}const p=(0,o.memo)(u)},1659:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>c});var o=i(47313),a=i(35179),s=i(81349),n=i(84261),r=i(64442),d=i(46417);const l=o.lazy((()=>i.e(5810).then(i.bind(i,25810)))),c=e=>{let{itemData:t,wallID:i,ThemeID:c,ownerId:u,wall:p}=e;const h=!(!a.ig||t.hotspot),m=!(3!==t.type&&5!==t.type||1!=p.ThemeRule.autoPlay&&a.ig);return(0,d.jsxs)("div",{className:"tb_gf_media_wrap",children:[a.ZQ?(0,d.jsx)("div",{className:"tb_gf_social_top_",children:(0,d.jsx)(o.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(l,{networkClass:"tb_gf_social__ico",network:t.network,isDefault:1===p.ThemeRule.iconType,ThemeRule:p.ThemeRule})})}):null,(0,d.jsx)(s.Z,{itemData:t,IconClass:"tb_gf_media_icon",show:h}),m?(0,d.jsx)(r.Z,{VideoClass:"tb_gf_video",data:t,wallID:i,themeID:p.Personalization.widgetTheme,ownerId:u,autoPlay:!a.P2,size:1,isCover:!0,muted:!0}):(0,d.jsx)(n.default,{ImageClass:"tb_gf_image",data:t,wallID:i,themeID:c,ownerId:u,size:1,hotspot:!!t.hotspot})]})}},61729:(e,t,i)=>{"use strict";var o=i(79165);function a(){}function s(){}s.resetWarningCache=a,e.exports=function(){function e(e,t,i,a,s,n){if(n!==o){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function t(){return e}e.isRequired=e;var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:a};return i.PropTypes=i,i}},75192:(e,t,i)=>{e.exports=i(61729)()},79165:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2406:(e,t,i)=>{"use strict";t.Ad=void 0;var o=i(84228);var a=i(65786);Object.defineProperty(t,"Ad",{enumerable:!0,get:function(){return a.getImageSize}});var s=i(22537)},84228:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorMessage=void 0,t.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageSize=void 0;const o=i(84228);t.getImageSize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((i,a)=>{if("undefined"===typeof window)return a(o.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!e)return a(o.ErrorMessage.URL_IS_NOT_DEFINED);let s=null;const n=new Image;n.addEventListener("load",(()=>{s&&window.clearTimeout(s),i({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(e=>{s&&window.clearTimeout(s),a("".concat(e.type,": ").concat(e.message))})),n.src=e,t.timeout&&(s=window.setTimeout((()=>a(o.ErrorMessage.TIMEOUT)),t.timeout))}))}},22537:function(e,t,i){"use strict";var o=this&&this.__awaiter||function(e,t,i,o){return new(i||(i=Promise))((function(a,s){function n(e){try{d(o.next(e))}catch(t){s(t)}}function r(e){try{d(o.throw(e))}catch(t){s(t)}}function d(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,r)}d((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.useImageSize=void 0;const a=i(47313),s=i(65786);t.useImageSize=(e,t)=>{const[i,n]=(0,a.useState)(null),[r,d]=(0,a.useState)(!1),[l,c]=(0,a.useState)(null);return(0,a.useEffect)((()=>{o(void 0,void 0,void 0,(function*(){d(!0),n(null);try{const{width:i,height:o}=yield(0,s.getImageSize)(e,t);n({width:i,height:o})}catch(l){c(l.toString())}finally{d(!1)}}))}),[e,t]),[i,{loading:r,error:l}]}}}]);