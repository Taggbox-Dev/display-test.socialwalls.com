"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4926],{64442:(e,t,i)=>{i.d(t,{Z:()=>v});var o=i(47313),d=i(2406),l=i(20510),n=i.n(l),a=i(43635),s=i(35179),r=(i(17739),i(46417));const u=(e,t)=>{if(25===t){return String(e).replace("https://w.soundcloud.com/player/?url=","")}return e};class c extends o.Component{constructor(e){super(e),this.onMediaLoad=async e=>{const{data:t}=this.props;if(t&&Object.keys(t).length>0&&[4,5,3].includes(t.type))if(t.mediaHeight&&""!=t.mediaHeight&&t.mediaWidth&&""!=t.mediaWidth)this.setState({paddingBottom:100*t.mediaHeight/t.mediaWidth});else try{const{width:e,height:i}=await(0,d.Ad)(t.postFileNew);this.setState({paddingBottom:100*i/e})}catch(i){this.setState({paddingBottom:100})}},this.setVideoLoaded=e=>{this.setState({videoLoaded:e})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=o.createRef(),this.observer=null}componentWillMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(null===e||void 0===e?void 0:e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(null===e||void 0===e?void 0:e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((e=>{let[t]=e;this.setState({isVisible:t.isIntersecting})}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(i){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){var e,t;const{VideoClass:i,data:o,wallID:d,isCover:l,controls:c,autoPlay:v,handleVideoEnded:h,muted:p,themeID:m,intervalTime:g}=this.props,{paddingBottom:w,videoLoaded:_,isVisible:f}=this.state,b={small:null===o||void 0===o?void 0:o.postFileNew,large:null===o||void 0===o?void 0:o.filename,orignal:null===o||void 0===o?void 0:o.file},I=[74,76,77].includes(m),y={paddingBottom:"".concat(I&&s.bX?null:w,"%")},S=null!==o&&void 0!==o&&o.loopStop?null===o||void 0===o?void 0:o.mediaUrl:null!==o&&void 0!==o&&o.mediaClip&&String(null===o||void 0===o?void 0:o.mediaClip).length>0?null===o||void 0===o?void 0:o.mediaClip:null===o||void 0===o?void 0:o.mediaUrl,D=new URLSearchParams(window.location.search),E=D.has("editor")&&"1"===D.get("editor")&&D.has("personalize")&&"1"===D.get("personalize")&&D.has("preview")&&"1"===D.get("preview"),z=D.has("embed")&&"true"===D.get("embed");return(0,r.jsx)("div",{className:"".concat(i,"_wrap_ mediaHolder").concat(o.id),style:y,ref:this.videoRef,children:(0,r.jsx)(n(),{className:"".concat(i," video").concat(o.id),url:u(S,null===o||void 0===o||null===(e=o.network)||void 0===e?void 0:e.id),"data-type":"video","data-network":null===o||void 0===o||null===(t=o.network)||void 0===t?void 0:t.id,"data-link":null===o||void 0===o?void 0:o.link,"data-wall-id":d,"data-item-id":null===o||void 0===o?void 0:o.id,"data-feed-id":null!==o&&void 0!==o&&o.feedId?null===o||void 0===o?void 0:o.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%"),poster:null===o||void 0===o?void 0:o.postFileNew}},file:{attributes:{preload:"metadata",poster:null===o||void 0===o?void 0:o.postFileNew}}},loop:!(s.bX&&!s.aL&&null!==o&&void 0!==o&&o.loopStop),onError:e=>{!z||null!==o&&void 0!==o&&o.stories&&0!=(null===o||void 0===o?void 0:o.stories)||(0,a.ib)(e,o.id),I&&h&&setTimeout((()=>{h()}),1e3*g)},autoPlay:!s.bX||E&&!z||null==(null===o||void 0===o?void 0:o.mediaClip)?!(s.bX&&E&&!z&&(null==(null===o||void 0===o?void 0:o.mediaClip)||""==(null===o||void 0===o?void 0:o.mediaClip)))&&v:f,muted:p,volume:v?1:0,playsinline:!0,onReady:e=>{s.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:s.ig||s.bX&&(!E||z)?f:!(s.bX&&E&&!z)&&v,height:"100%",width:"100%",controls:c||!1,style:{backgroundImage:"url(".concat(I?b.large:b.small,")"),backgroundSize:l?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})})}}const v=(0,o.memo)(c)},90388:(e,t,i)=>{i.r(t),i.d(t,{default:()=>u});var o=i(47313),d=i(35179),l=i(81349),n=i(84261),a=i(64442),s=i(46417);const r=o.lazy((()=>i.e(695).then(i.bind(i,10695)))),u=e=>{var t,i,u,c,v;let{itemData:h,wallID:p,ThemeID:m,ownerId:g,wall:w}=e;const _=(3===(null===h||void 0===h?void 0:h.type)||5===(null===h||void 0===h?void 0:h.type))&&1==(null===w||void 0===w||null===(t=w.ThemeRule)||void 0===t?void 0:t.autoPlay);return(0,s.jsxs)("div",{className:"tb_px_media_wrap",children:[d.aL&&null!==w&&void 0!==w&&null!==(i=w.Personalization)&&void 0!==i&&i.interactive?(0,s.jsx)(o.Suspense,{fallback:(0,s.jsx)(s.Fragment,{}),children:(0,s.jsx)(r,{likeClass:"tb_px_like ".concat(null!==w&&void 0!==w&&null!==(u=w.ThemeRule)&&void 0!==u&&u.socialAction?"":"tb_px_like_bottom"),postId:null===h||void 0===h?void 0:h.id,wallID:p,UserDetail:null===w||void 0===w?void 0:w.UserDetail})}):null,d.P2&&!_?(0,s.jsx)(l.Z,{itemData:h,IconClass:"tb_w_c_media_icon",show:d.P2,isCenter:!1}):null,_?(0,s.jsx)(a.Z,{VideoClass:"tb_px_video",data:h,wallID:p,themeID:null===w||void 0===w||null===(c=w.Personalization)||void 0===c?void 0:c.widgetTheme,ownerId:g,size:!1,isCover:!0,controls:!1,autoPlay:!0,muted:!0}):(0,s.jsx)(n.default,{ImageClass:"tb_px_image",data:h,wallID:p,themeID:null===w||void 0===w||null===(v=w.Personalization)||void 0===v?void 0:v.widgetTheme,ownerId:g,size:!1,ThemeRule:w.ThemeRule,hotspot:!0})]})}},2406:(e,t,i)=>{t.Ad=void 0;var o=i(84228);var d=i(65786);Object.defineProperty(t,"Ad",{enumerable:!0,get:function(){return d.getImageSize}});var l=i(22537)},84228:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorMessage=void 0,t.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getImageSize=void 0;const o=i(84228);t.getImageSize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((i,d)=>{if("undefined"===typeof window)return d(o.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!e)return d(o.ErrorMessage.URL_IS_NOT_DEFINED);let l=null;const n=new Image;n.addEventListener("load",(()=>{l&&window.clearTimeout(l),i({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(e=>{l&&window.clearTimeout(l),d("".concat(e.type,": ").concat(e.message))})),n.src=e,t.timeout&&(l=window.setTimeout((()=>d(o.ErrorMessage.TIMEOUT)),t.timeout))}))}},22537:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){return new(i||(i=Promise))((function(d,l){function n(e){try{s(o.next(e))}catch(t){l(t)}}function a(e){try{s(o.throw(e))}catch(t){l(t)}}function s(e){var t;e.done?d(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,a)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.useImageSize=void 0;const d=i(47313),l=i(65786);t.useImageSize=(e,t)=>{const[i,n]=(0,d.useState)(null),[a,s]=(0,d.useState)(!1),[r,u]=(0,d.useState)(null);return(0,d.useEffect)((()=>{o(void 0,void 0,void 0,(function*(){s(!0),n(null);try{const{width:i,height:o}=yield(0,l.getImageSize)(e,t);n({width:i,height:o})}catch(r){u(r.toString())}finally{s(!1)}}))}),[e,t]),[i,{loading:a,error:r}]}}}]);