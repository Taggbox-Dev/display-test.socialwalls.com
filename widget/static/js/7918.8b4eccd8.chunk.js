"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7918,5810],{64442:(e,t,i)=>{i.d(t,{Z:()=>u});var o=i(47313),a=i(2406),n=i(20510),s=i.n(n),l=i(43635),d=i(35179),r=(i(17739),i(46417));const c=(e,t)=>{if(25===t){return String(e).replace("https://w.soundcloud.com/player/?url=","")}return e};class h extends o.Component{constructor(e){super(e),this.onMediaLoad=async e=>{const{data:t}=this.props;if(t&&Object.keys(t).length>0&&[4,5,3].includes(t.type))if(t.mediaHeight&&""!=t.mediaHeight&&t.mediaWidth&&""!=t.mediaWidth)this.setState({paddingBottom:100*t.mediaHeight/t.mediaWidth});else try{const{width:e,height:i}=await(0,a.Ad)(t.postFileNew);this.setState({paddingBottom:100*i/e})}catch(i){this.setState({paddingBottom:100})}},this.setVideoLoaded=e=>{this.setState({videoLoaded:e})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=o.createRef(),this.observer=null}componentWillMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((e=>{let[t]=e;this.setState({isVisible:t.isIntersecting})}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(i){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:e,data:t,wallID:i,isCover:o,controls:a,autoPlay:n,handleVideoEnded:h,muted:u,themeID:p,intervalTime:m}=this.props,{paddingBottom:v,videoLoaded:g,isVisible:_}=this.state,b={small:t.postFileNew,large:t.filename,orignal:t.file},w=[74,76,77].includes(p),I={paddingBottom:"".concat(w&&d.bX?null:v,"%")},f=null!==t&&void 0!==t&&t.loopStop?t.mediaUrl:t.mediaClip&&String(t.mediaClip).length>0?t.mediaClip:t.mediaUrl,x=new URLSearchParams(window.location.search),D=x.has("editor")&&"1"===x.get("editor")&&x.has("personalize")&&"1"===x.get("personalize")&&x.has("preview")&&"1"===x.get("preview"),S=x.has("embed")&&"true"===x.get("embed");return(0,r.jsx)("div",{className:"".concat(e,"_wrap_ mediaHolder").concat(t.id),style:I,ref:this.videoRef,children:(0,r.jsx)(s(),{className:"".concat(e," video").concat(t.id),url:c(f,t.network.id),"data-type":"video","data-network":t.network.id,"data-link":t.link,"data-wall-id":i,"data-item-id":t.id,"data-feed-id":t.feedId?t.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%"),poster:t.postFileNew}},file:{attributes:{preload:"metadata",poster:t.postFileNew}}},loop:!(d.bX&&!d.aL&&null!==t&&void 0!==t&&t.loopStop),onError:e=>{!S||t.stories&&0!=t.stories||(0,l.ib)(e,t.id),w&&h&&setTimeout((()=>{h()}),1e3*m)},autoPlay:!d.bX||D&&!S||null==t.mediaClip?!(d.bX&&D&&!S&&(null==t.mediaClip||""==t.mediaClip))&&n:_,muted:u,volume:n?1:0,playsinline:!0,onReady:e=>{d.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:d.ig||d.bX&&(!D||S)?_:!(d.bX&&D&&!S)&&n,height:"100%",width:"100%",controls:a||!1,style:{backgroundImage:"url(".concat(w?b.large:b.small,")"),backgroundSize:o?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})})}}const u=(0,o.memo)(h)},25810:(e,t,i)=>{i.r(t),i.d(t,{default:()=>l});var o=i(47313),a=i(35179),n=i(46417);const s=o.lazy((()=>i.e(5867).then(i.bind(i,95867))));class l extends o.PureComponent{render(){const{network:e,networkClass:t,ThemeRule:i,isDefault:l,Personalization:d}=this.props,r=!!l&&(7!==(null===e||void 0===e?void 0:e.id)&&4!==(null===e||void 0===e?void 0:e.id)&&36!==(null===e||void 0===e?void 0:e.id)),c=a.ZQ&&36===(null===e||void 0===e?void 0:e.id)?"tagembed":(null===e||void 0===e?void 0:e.icon)||"";return r?(0,n.jsx)("div",{className:"".concat(t," tb__icon tb-").concat(c.replace(/fa-/g,"")),children:(0,n.jsx)("div",{})}):(0,n.jsxs)(o.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(s,{network:e,networkClass:t})]})}}},11502:(e,t,i)=>{i.d(t,{Z:()=>n});var o=i(17739),a=i(46417);const n=e=>{let{ThemeRule:t,btnClass:i}=e;const n={fontFamily:t.css_font};return(0,a.jsx)("div",{className:"tb_shop_btn_wrap ".concat(i),children:(0,a.jsx)("div",{className:"tb_shop_btn".concat(t.postHover||(0,o.mD)(4)||(0,o.mD)(55)?" tb_shop_btn_light":" tb_shop_btn_dark"),style:n,children:t.shoppingText})})}},28751:(e,t,i)=>{i.d(t,{Z:()=>p});var o=i(47313),a=i(35179),n=i(84261),s=i(64442),l=i(81349),d=i(46417);const r=o.lazy((()=>i.e(695).then(i.bind(i,10695)))),c=e=>{var t;let{itemData:i,wallID:c,wall:h,ownerId:u,isVisible:p}=e;const m=!(3!==(null===i||void 0===i?void 0:i.type)&&5!==(null===i||void 0===i?void 0:i.type)||!p),v=(3===(null===i||void 0===i?void 0:i.type)||5===(null===i||void 0===i?void 0:i.type))&&1==(null===h||void 0===h||null===(t=h.ThemeRule)||void 0===t?void 0:t.autoPlay);return(0,d.jsxs)("div",{className:"tb_g_r_media_wrap",children:[a.aL&&h.Personalization.interactive?(0,d.jsx)(o.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(r,{likeClass:"tb_g_r_like ".concat(h.ThemeRule.socialAction?"":"tb_g_r_like_bottom"),postId:i.id,wallID:c,UserDetail:h.UserDetail})}):null,a.aL?(0,d.jsx)(l.Z,{itemData:i,IconClass:"tb_g_r_media_icon",show:!0,hideVideo:!0}):null,m||v?(0,d.jsx)(s.Z,{VideoClass:"tb_g_r_video",data:i,wallID:c,themeID:h.Personalization.widgetTheme,ownerId:u,size:1,isCover:!0,autoPlay:!0,muted:!0}):(0,d.jsx)(n.default,{ImageClass:"tb_g_r_image",data:i,wallID:c,themeID:h.Personalization.widgetTheme,ownerId:u,size:1})]})};var h=i(17739);i(25810),i(11502);const u=o.lazy((()=>i.e(4770).then(i.bind(i,54770))));class p extends o.PureComponent{constructor(e){super(e),this.mediaHeight=o.createRef()}componentDidMount(){a.nX&&(0,h.YN)(this.mediaHeight)}render(){var e;const{itemData:t,itemIndex:i,wallID:n,ownerId:s,wall:l,isVisible:r,clickToShowPopUp:h,ThemeRule:p,personalization:m,adjustWidth:v}=this.props,g=!!(null!==t&&void 0!==t&&t.ugc_products&&(null===t||void 0===t||null===(e=t.ugc_products)||void 0===e?void 0:e.length)>0),_=(!a.ig||!g||null!==p&&void 0!==p&&p.hideContent,!(!a.ig||!g||0!==(null===t||void 0===t?void 0:t.hotspot))),b=!!(a.ig&&null!==t&&void 0!==t&&t.hotspot&&g);return(0,d.jsx)("div",{"item-id":null===t||void 0===t?void 0:t.id,id:"tb-g_r-post-".concat(null===t||void 0===t?void 0:t.id),className:"tb_g_r_post_wrapper",ref:this.mediaHeight,"post-id":null!==t&&void 0!==t&&t.referenceId?null===t||void 0===t?void 0:t.referenceId:null===t||void 0===t?void 0:t.id,"feed-id":null===t||void 0===t?void 0:t.feedId,style:{width:"".concat(v,"%"),padding:l.Personalization.padding/2},"tb-product":_?1:b?2:0,children:(0,d.jsx)("div",{className:"tb_g_r_post_in tb_icon_animate ".concat(a.ig?"":"tb_g_r_post_in_animate"),onClick:h(i,t),children:(0,d.jsxs)("div",{className:"tb_g_r_post_media_wrapp",children:[(0,d.jsx)(c,{itemData:t,wallID:n,wall:l,ownerId:s,preload:0==i,isVisible:r}),(0,d.jsx)("div",{className:"tb_g_r_post_details",children:(0,d.jsx)(o.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(u,{ownerId:s,postTime:null===t||void 0===t?void 0:t.createdAt,author:null===t||void 0===t?void 0:t.author,network:null===t||void 0===t?void 0:t.network,font:p,personalization:m,ThemeRule:p})})})]})})})}}},34280:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var o=i(47313),a=(i(34862),i(43411)),n=i(61395),s=i.n(n),l=i(28751),d=(i(97529),i(47330),i(6940),i(65192),i(59606),i(98907),i(43635)),r=i(17739),c=i(35179),h=i(46417);const u=o.lazy((()=>i.e(2205).then(i.bind(i,32205))));class p extends o.Component{constructor(e){super(e),this.state={activeID:-1,newPostdata:[]},this.scrollInterval=null,this.componentDidMount=()=>{this.scrollInterval=setInterval((()=>this.onUpdateTimeInterVal()),3e3);const{heightUpdate:e}=this.props;setTimeout((()=>e()),1e3)},this.onUpdateTimeInterVal=()=>{const{activeID:e}=this.state,{cardNumber:t,wall:i}=this.props,o=(0,r.b)()?i.ThemeRule.mobileColumn||2:i.ThemeRule.numberOfCoumn,a=parseInt(e)+1;this.setState({activeID:parseInt(o)>=a?a:0})},this.inputRefs={}}componentWillMount(){const{cardNumber:e,postData:t,completeDataObject:i,adjustWidth:o,wall:a,postSize:n,clickToShowPopUp:s,onClickToCTA:l,postSizeInPx:d,numberOfCoumn:c}=this.props,{activeID:h}=this.state,u=(0,r.b)()?a.ThemeRule.mobileColumn||2:a.ThemeRule.numberOfCoumn,p=Array.from({length:u},(()=>[]));t.forEach(((e,t)=>p[t%u].push(e))),p.forEach((e=>{for(;e.length<3;){const t=p[Math.floor(Math.random()*u)],i=t[Math.floor(Math.random()*t.length)];e.push(i)}})),this.setState({newPostdata:p})}componentWillUnmount(){this.scrollInterval&&clearInterval(this.scrollInterval)}render(){const{postData:e,completeDataObject:t,wall:i,clickToShowPopUp:a,hasMoreData:n,parentID:d,keyRender:r,onClickToCTA:p,postSizeInPx:m,adjustWidth:v,numberOfCoumn:g}=this.props,{activeID:_,newPostdata:b}=this.state;return(0,h.jsxs)(h.Fragment,{children:[" ",c.aL?(0,h.jsx)(s(),{id:"pixel",className:"tb_g_r_post_container",tabIndex:"0","aria-label":"There are ".concat(e&&e.length>0?e.length:0," posts in the feed"),elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_px_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:e&&e.length>0&&e.map(((e,o)=>{const n=t[e];return(0,h.jsx)(l.Z,{ownerId:i.Wall.owner,itemData:n,itemIndex:o,adjustWidth:v,personalization:i.Personalization,ThemeRule:i.ThemeRule,wallID:i.Wall.id,clickToShowPopUp:a,onClickToCTA:p,postSizeInPx:m,wall:i},"sqr_crd_".concat(o,"_").concat(e.id))}))}):(0,h.jsx)("div",{className:"tb_g_r_post_container",children:b.map(((e,n)=>(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)(h.Fragment,{}),children:(0,h.jsx)(u,{pIndex:n,itemIds:e,activeID:_,completeDataObject:t,wall:i,onClickToCTA:p,postSizeInPx:m,cardCount:b.length,clickToShowPopUp:a},"exhi_".concat(n))})))})]})}}const m=(0,o.memo)((0,a.$j)((e=>({loaderData:e.loaderData})),(e=>({getDataNextSteps:(t,i,o,a,n,s,l,r)=>e((0,d.Sx)(t,i,o,a,n,s,l,r))})))(p))},2406:(e,t,i)=>{t.Ad=void 0;var o=i(84228);var a=i(65786);Object.defineProperty(t,"Ad",{enumerable:!0,get:function(){return a.getImageSize}});var n=i(22537)},84228:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorMessage=void 0,t.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getImageSize=void 0;const o=i(84228);t.getImageSize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((i,a)=>{if("undefined"===typeof window)return a(o.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!e)return a(o.ErrorMessage.URL_IS_NOT_DEFINED);let n=null;const s=new Image;s.addEventListener("load",(()=>{n&&window.clearTimeout(n),i({width:s.naturalWidth,height:s.naturalHeight})})),s.addEventListener("error",(e=>{n&&window.clearTimeout(n),a("".concat(e.type,": ").concat(e.message))})),s.src=e,t.timeout&&(n=window.setTimeout((()=>a(o.ErrorMessage.TIMEOUT)),t.timeout))}))}},22537:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){return new(i||(i=Promise))((function(a,n){function s(e){try{d(o.next(e))}catch(t){n(t)}}function l(e){try{d(o.throw(e))}catch(t){n(t)}}function d(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,l)}d((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.useImageSize=void 0;const a=i(47313),n=i(65786);t.useImageSize=(e,t)=>{const[i,s]=(0,a.useState)(null),[l,d]=(0,a.useState)(!1),[r,c]=(0,a.useState)(null);return(0,a.useEffect)((()=>{o(void 0,void 0,void 0,(function*(){d(!0),s(null);try{const{width:i,height:o}=yield(0,n.getImageSize)(e,t);s({width:i,height:o})}catch(r){c(r.toString())}finally{d(!1)}}))}),[e,t]),[i,{loading:l,error:r}]}},65192:()=>{},59606:()=>{},98907:()=>{}}]);