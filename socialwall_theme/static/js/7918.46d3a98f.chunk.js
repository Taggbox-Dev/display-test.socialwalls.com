"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7918,5810],{64442:(e,t,i)=>{i.d(t,{Z:()=>v});var o=i(47313),n=i(2406),l=i(20510),d=i.n(l),a=i(43635),s=i(35179),r=(i(17739),i(46417));const c=(e,t)=>{if(25===t){return String(e).replace("https://w.soundcloud.com/player/?url=","")}return e};class u extends o.Component{constructor(e){super(e),this.onMediaLoad=async e=>{const{data:t}=this.props;if(t&&Object.keys(t).length>0&&[4,5,3].includes(t.type))if(t.mediaHeight&&""!=t.mediaHeight&&t.mediaWidth&&""!=t.mediaWidth)this.setState({paddingBottom:100*t.mediaHeight/t.mediaWidth});else try{const{width:e,height:i}=await(0,n.Ad)(t.postFileNew);this.setState({paddingBottom:100*i/e})}catch(i){this.setState({paddingBottom:100})}},this.setVideoLoaded=e=>{this.setState({videoLoaded:e})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=o.createRef(),this.observer=null}componentWillMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(null===e||void 0===e?void 0:e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(null===e||void 0===e?void 0:e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((e=>{let[t]=e;this.setState({isVisible:t.isIntersecting})}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(i){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){var e,t;const{VideoClass:i,data:o,wallID:n,isCover:l,controls:u,autoPlay:v,handleVideoEnded:h,muted:p,themeID:m,intervalTime:g}=this.props,{paddingBottom:_,videoLoaded:b,isVisible:w}=this.state,I={small:null===o||void 0===o?void 0:o.postFileNew,large:null===o||void 0===o?void 0:o.filename,orignal:null===o||void 0===o?void 0:o.file},f=[74,76,77].includes(m),x={paddingBottom:"".concat(f&&s.bX?null:_,"%")},D=null!==o&&void 0!==o&&o.loopStop?null===o||void 0===o?void 0:o.mediaUrl:null!==o&&void 0!==o&&o.mediaClip&&String(null===o||void 0===o?void 0:o.mediaClip).length>0?null===o||void 0===o?void 0:o.mediaClip:null===o||void 0===o?void 0:o.mediaUrl,S=new URLSearchParams(window.location.search),y=S.has("editor")&&"1"===S.get("editor")&&S.has("personalize")&&"1"===S.get("personalize")&&S.has("preview")&&"1"===S.get("preview"),T=S.has("embed")&&"true"===S.get("embed");return(0,r.jsx)("div",{className:"".concat(i,"_wrap_ mediaHolder").concat(o.id),style:x,ref:this.videoRef,children:(0,r.jsx)(d(),{className:"".concat(i," video").concat(o.id),url:c(D,null===o||void 0===o||null===(e=o.network)||void 0===e?void 0:e.id),"data-type":"video","data-network":null===o||void 0===o||null===(t=o.network)||void 0===t?void 0:t.id,"data-link":null===o||void 0===o?void 0:o.link,"data-wall-id":n,"data-item-id":null===o||void 0===o?void 0:o.id,"data-feed-id":null!==o&&void 0!==o&&o.feedId?null===o||void 0===o?void 0:o.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%"),poster:null===o||void 0===o?void 0:o.postFileNew}},file:{attributes:{preload:"metadata",poster:null===o||void 0===o?void 0:o.postFileNew}}},loop:!(s.bX&&!s.aL&&null!==o&&void 0!==o&&o.loopStop),onError:e=>{!T||null!==o&&void 0!==o&&o.stories&&0!=(null===o||void 0===o?void 0:o.stories)||(0,a.ib)(e,o.id),f&&h&&setTimeout((()=>{h()}),1e3*g)},autoPlay:!s.bX||y&&!T||null==(null===o||void 0===o?void 0:o.mediaClip)?!(s.bX&&y&&!T&&(null==(null===o||void 0===o?void 0:o.mediaClip)||""==(null===o||void 0===o?void 0:o.mediaClip)))&&v:w,muted:p,volume:v?1:0,playsinline:!0,onReady:e=>{s.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:s.ig||s.bX&&(!y||T)?w:!(s.bX&&y&&!T)&&v,height:"100%",width:"100%",controls:u||!1,style:{backgroundImage:"url(".concat(f?I.large:I.small,")"),backgroundSize:l?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})})}}const v=(0,o.memo)(u)},25810:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});var o=i(47313),n=i(35179),l=i(46417);const d=o.lazy((()=>i.e(5867).then(i.bind(i,95867))));class a extends o.PureComponent{render(){const{network:e,networkClass:t,ThemeRule:i,isDefault:a,Personalization:s}=this.props,r=!!a&&(7!==(null===e||void 0===e?void 0:e.id)&&4!==(null===e||void 0===e?void 0:e.id)&&36!==(null===e||void 0===e?void 0:e.id)),c=n.ZQ&&36===(null===e||void 0===e?void 0:e.id)?"tagembed":(null===e||void 0===e?void 0:e.icon)||"";return r?(0,l.jsx)("div",{className:"".concat(t," tb__icon tb-").concat(c.replace(/fa-/g,"")),children:(0,l.jsx)("div",{})}):(0,l.jsxs)(o.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:[" ",(0,l.jsx)(d,{network:e,networkClass:t})]})}}},11502:(e,t,i)=>{i.d(t,{Z:()=>l});var o=i(17739),n=i(46417);const l=e=>{let{ThemeRule:t,btnClass:i}=e;const l={fontFamily:t.css_font};return(0,n.jsx)("div",{className:"tb_shop_btn_wrap ".concat(i),children:(0,n.jsx)("div",{className:"tb_shop_btn".concat(t.postHover||(0,o.mD)(4)||(0,o.mD)(55)?" tb_shop_btn_light":" tb_shop_btn_dark"),style:l,children:t.shoppingText})})}},28751:(e,t,i)=>{i.d(t,{Z:()=>h});var o=i(47313),n=i(35179),l=i(84261),d=i(64442),a=i(81349),s=i(46417);const r=o.lazy((()=>i.e(695).then(i.bind(i,10695)))),c=e=>{var t,i,c,u,v;let{itemData:h,wallID:p,wall:m,ownerId:g,isVisible:_}=e;const b=!(3!==(null===h||void 0===h?void 0:h.type)&&5!==(null===h||void 0===h?void 0:h.type)||!_),w=(3===(null===h||void 0===h?void 0:h.type)||5===(null===h||void 0===h?void 0:h.type))&&1==(null===m||void 0===m||null===(t=m.ThemeRule)||void 0===t?void 0:t.autoPlay);return(0,s.jsxs)("div",{className:"tb_g_r_media_wrap",children:[n.aL&&null!==m&&void 0!==m&&null!==(i=m.Personalization)&&void 0!==i&&i.interactive?(0,s.jsx)(o.Suspense,{fallback:(0,s.jsx)(s.Fragment,{}),children:(0,s.jsx)(r,{likeClass:"tb_g_r_like ".concat(null!==m&&void 0!==m&&null!==(c=m.ThemeRule)&&void 0!==c&&c.socialAction?"":"tb_g_r_like_bottom"),postId:null===h||void 0===h?void 0:h.id,wallID:p,UserDetail:null===m||void 0===m?void 0:m.UserDetail})}):null,n.aL?(0,s.jsx)(a.Z,{itemData:h,IconClass:"tb_g_r_media_icon",show:!0,hideVideo:!0}):null,b||w?(0,s.jsx)(d.Z,{VideoClass:"tb_g_r_video",data:h,wallID:p,themeID:null===m||void 0===m||null===(u=m.Personalization)||void 0===u?void 0:u.widgetTheme,ownerId:g,size:1,isCover:!0,autoPlay:!0,muted:!0}):(0,s.jsx)(l.default,{ImageClass:"tb_g_r_image",data:h,wallID:p,themeID:null===m||void 0===m||null===(v=m.Personalization)||void 0===v?void 0:v.widgetTheme,ownerId:g,size:1})]})};var u=i(17739);i(25810),i(11502);const v=o.lazy((()=>i.e(4770).then(i.bind(i,54770))));class h extends o.PureComponent{constructor(e){super(e),this.mediaHeight=o.createRef()}componentDidMount(){n.nX&&(0,u.YN)(this.mediaHeight)}render(){var e;const{itemData:t,itemIndex:i,wallID:l,ownerId:d,wall:a,isVisible:r,clickToShowPopUp:u,ThemeRule:h,personalization:p,adjustWidth:m}=this.props,g=!!(null!==t&&void 0!==t&&t.ugc_products&&(null===t||void 0===t||null===(e=t.ugc_products)||void 0===e?void 0:e.length)>0),_=(!n.ig||!g||null!==h&&void 0!==h&&h.hideContent,!(!n.ig||!g||0!==(null===t||void 0===t?void 0:t.hotspot))),b=!!(n.ig&&null!==t&&void 0!==t&&t.hotspot&&g);return(0,s.jsx)("div",{"item-id":null===t||void 0===t?void 0:t.id,id:"tb-g_r-post-".concat(null===t||void 0===t?void 0:t.id),className:"tb_g_r_post_wrapper",ref:this.mediaHeight,"post-id":null!==t&&void 0!==t&&t.referenceId?null===t||void 0===t?void 0:t.referenceId:null===t||void 0===t?void 0:t.id,"feed-id":null===t||void 0===t?void 0:t.feedId,style:{width:"".concat(m,"%"),padding:a.Personalization.padding/2},"tb-product":_?1:b?2:0,children:(0,s.jsx)("div",{className:"tb_g_r_post_in tb_icon_animate ".concat(n.ig?"":"tb_g_r_post_in_animate"),onClick:u(i,t),children:(0,s.jsxs)("div",{className:"tb_g_r_post_media_wrapp",children:[(0,s.jsx)(c,{itemData:t,wallID:l,wall:a,ownerId:d,preload:0==i,isVisible:r}),(0,s.jsx)("div",{className:"tb_g_r_post_details",children:(0,s.jsx)(o.Suspense,{fallback:(0,s.jsx)(s.Fragment,{}),children:(0,s.jsx)(v,{ownerId:d,postTime:null===t||void 0===t?void 0:t.createdAt,author:null===t||void 0===t?void 0:t.author,network:null===t||void 0===t?void 0:t.network,font:h,personalization:p,ThemeRule:h})})})]})})})}}},34280:(e,t,i)=>{i.r(t),i.d(t,{default:()=>p});var o=i(47313),n=(i(34862),i(43411)),l=i(61395),d=i.n(l),a=i(28751),s=(i(97529),i(47330),i(6940),i(65192),i(59606),i(98907),i(43635)),r=i(17739),c=i(35179),u=i(46417);const v=o.lazy((()=>i.e(2205).then(i.bind(i,32205))));class h extends o.Component{constructor(e){super(e),this.state={activeID:-1,newPostdata:[]},this.scrollInterval=null,this.componentDidMount=()=>{this.scrollInterval=setInterval((()=>this.onUpdateTimeInterVal()),3e3);const{heightUpdate:e}=this.props;setTimeout((()=>e()),1e3)},this.onUpdateTimeInterVal=()=>{var e,t;const{activeID:i}=this.state,{cardNumber:o,wall:n}=this.props,l=(0,r.b)()?(null===n||void 0===n||null===(e=n.ThemeRule)||void 0===e?void 0:e.mobileColumn)||2:null===n||void 0===n||null===(t=n.ThemeRule)||void 0===t?void 0:t.numberOfCoumn,d=parseInt(i)+1;this.setState({activeID:parseInt(l)>=d?d:0})},this.inputRefs={}}componentWillMount(){var e,t;const{cardNumber:i,postData:o,completeDataObject:n,adjustWidth:l,wall:d,postSize:a,clickToShowPopUp:s,onClickToCTA:c,postSizeInPx:u,numberOfCoumn:v}=this.props,{activeID:h}=this.state,p=(0,r.b)()?(null===d||void 0===d||null===(e=d.ThemeRule)||void 0===e?void 0:e.mobileColumn)||2:null===d||void 0===d||null===(t=d.ThemeRule)||void 0===t?void 0:t.numberOfCoumn,m=Array.from({length:p},(()=>[]));o.forEach(((e,t)=>m[t%p].push(e))),m.forEach((e=>{for(;e.length<3;){const t=m[Math.floor(Math.random()*p)],i=t[Math.floor(Math.random()*t.length)];e.push(i)}})),this.setState({newPostdata:m})}componentWillUnmount(){this.scrollInterval&&clearInterval(this.scrollInterval)}render(){const{postData:e,completeDataObject:t,wall:i,clickToShowPopUp:n,hasMoreData:l,parentID:s,keyRender:r,onClickToCTA:h,postSizeInPx:p,adjustWidth:m,numberOfCoumn:g}=this.props,{activeID:_,newPostdata:b}=this.state;return(0,u.jsxs)(u.Fragment,{children:[" ",c.aL?(0,u.jsx)(d(),{id:"pixel",className:"tb_g_r_post_container",tabIndex:"0","aria-label":"There are ".concat(e&&(null===e||void 0===e?void 0:e.length)>0?null===e||void 0===e?void 0:e.length:0," posts in the feed"),elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_px_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:e&&(null===e||void 0===e?void 0:e.length)>0&&e.map(((e,o)=>{var l,d;const s=t[e];return(0,u.jsx)(a.Z,{ownerId:null===i||void 0===i||null===(l=i.Wall)||void 0===l?void 0:l.owner,itemData:s,itemIndex:o,adjustWidth:m,personalization:null===i||void 0===i?void 0:i.Personalization,ThemeRule:null===i||void 0===i?void 0:i.ThemeRule,wallID:null===i||void 0===i||null===(d=i.Wall)||void 0===d?void 0:d.id,clickToShowPopUp:n,onClickToCTA:h,postSizeInPx:p,wall:i},"sqr_crd_".concat(o,"_").concat(null===e||void 0===e?void 0:e.id))}))}):(0,u.jsx)("div",{className:"tb_g_r_post_container",children:b.map(((e,l)=>(0,u.jsx)(o.Suspense,{fallback:(0,u.jsx)(u.Fragment,{}),children:(0,u.jsx)(v,{pIndex:l,itemIds:e,activeID:_,completeDataObject:t,wall:i,onClickToCTA:h,postSizeInPx:p,cardCount:b.length,clickToShowPopUp:n},"exhi_".concat(l))})))})]})}}const p=(0,o.memo)((0,n.$j)((e=>({loaderData:e.loaderData})),(e=>({getDataNextSteps:(t,i,o,n,l,d,a,r)=>e((0,s.Sx)(t,i,o,n,l,d,a,r))})))(h))},2406:(e,t,i)=>{t.Ad=void 0;var o=i(84228);var n=i(65786);Object.defineProperty(t,"Ad",{enumerable:!0,get:function(){return n.getImageSize}});var l=i(22537)},84228:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorMessage=void 0,t.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getImageSize=void 0;const o=i(84228);t.getImageSize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((i,n)=>{if("undefined"===typeof window)return n(o.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!e)return n(o.ErrorMessage.URL_IS_NOT_DEFINED);let l=null;const d=new Image;d.addEventListener("load",(()=>{l&&window.clearTimeout(l),i({width:d.naturalWidth,height:d.naturalHeight})})),d.addEventListener("error",(e=>{l&&window.clearTimeout(l),n("".concat(e.type,": ").concat(e.message))})),d.src=e,t.timeout&&(l=window.setTimeout((()=>n(o.ErrorMessage.TIMEOUT)),t.timeout))}))}},22537:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){return new(i||(i=Promise))((function(n,l){function d(e){try{s(o.next(e))}catch(t){l(t)}}function a(e){try{s(o.throw(e))}catch(t){l(t)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(d,a)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.useImageSize=void 0;const n=i(47313),l=i(65786);t.useImageSize=(e,t)=>{const[i,d]=(0,n.useState)(null),[a,s]=(0,n.useState)(!1),[r,c]=(0,n.useState)(null);return(0,n.useEffect)((()=>{o(void 0,void 0,void 0,(function*(){s(!0),d(null);try{const{width:i,height:o}=yield(0,l.getImageSize)(e,t);d({width:i,height:o})}catch(r){c(r.toString())}finally{s(!1)}}))}),[e,t]),[i,{loading:a,error:r}]}},65192:()=>{},59606:()=>{},98907:()=>{}}]);