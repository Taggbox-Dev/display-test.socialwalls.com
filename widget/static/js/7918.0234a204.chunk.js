"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7918,5810],{64442:(e,t,i)=>{i.d(t,{Z:()=>p});var o=i(47313),a=i(2406),n=i(20510),s=i.n(n),r=i(43635),d=i(35179),l=(i(17739),i(46417));const c=(e,t)=>{if(25===t){return String(e).replace("https://w.soundcloud.com/player/?url=","")}return e};class h extends o.Component{constructor(e){super(e),this.onMediaLoad=async e=>{const{data:t}=this.props;if(t&&Object.keys(t).length>0&&[4,5,3].includes(t.type))if(t.mediaHeight&&""!=t.mediaHeight&&t.mediaWidth&&""!=t.mediaWidth)this.setState({paddingBottom:100*t.mediaHeight/t.mediaWidth});else try{const{width:e,height:i}=await(0,a.Ad)(t.postFileNew);this.setState({paddingBottom:100*i/e})}catch(i){this.setState({paddingBottom:100})}},this.setVideoLoaded=e=>{this.setState({videoLoaded:e})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=o.createRef(),this.observer=null}componentWillMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((e=>{let[t]=e;this.setState({isVisible:t.isIntersecting})}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(i){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:e,data:t,wallID:i,isCover:o,controls:a,autoPlay:n,handleVideoEnded:h,muted:p,themeID:u,intervalTime:m}=this.props,{paddingBottom:g,videoLoaded:_,isVisible:b}=this.state,v={small:t.postFileNew,large:t.filename,orignal:t.file},w=[74,76,77].includes(u),I={paddingBottom:"".concat(w&&d.bX?null:g,"%")},f=null!==t&&void 0!==t&&t.loopStop?t.mediaUrl:t.mediaClip&&String(t.mediaClip).length>0?t.mediaClip:t.mediaUrl,x=new URLSearchParams(window.location.search),D=x.has("editor")&&"1"===x.get("editor")&&x.has("personalize")&&"1"===x.get("personalize")&&x.has("preview")&&"1"===x.get("preview"),S=x.has("embed")&&"true"===x.get("embed");return(0,l.jsx)("div",{className:"".concat(e,"_wrap_ mediaHolder").concat(t.id),style:I,ref:this.videoRef,children:(0,l.jsx)(s(),{className:"".concat(e," video").concat(t.id),url:c(f,t.network.id),"data-type":"video","data-network":t.network.id,"data-link":t.link,"data-wall-id":i,"data-item-id":t.id,"data-feed-id":t.feedId?t.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%"),poster:t.postFileNew}},file:{attributes:{preload:"metadata",poster:t.postFileNew}}},loop:!(d.bX&&!d.aL&&null!==t&&void 0!==t&&t.loopStop),onError:e=>{!S||t.stories&&0!=t.stories||(0,r.ib)(e,t.id),w&&h&&setTimeout((()=>{h()}),1e3*m)},autoPlay:!d.bX||D&&!S||null==t.mediaClip?!(d.bX&&D&&!S&&(null==t.mediaClip||""==t.mediaClip))&&n:b,muted:p,volume:n?1:0,playsinline:!0,onReady:e=>{d.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:d.ig||d.bX&&(!D||S)?b:!(d.bX&&D&&!S)&&n,height:"100%",width:"100%",controls:a||!1,style:{backgroundImage:"url(".concat(w?v.large:v.small,")"),backgroundSize:o?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})})}}const p=(0,o.memo)(h)},25810:(e,t,i)=>{i.r(t),i.d(t,{default:()=>r});var o=i(47313),a=i(35179),n=i(46417);const s=o.lazy((()=>i.e(5867).then(i.bind(i,95867))));class r extends o.PureComponent{render(){const{network:e,networkClass:t,ThemeRule:i,isDefault:r,Personalization:d}=this.props,l=!!r&&(7!==(null===e||void 0===e?void 0:e.id)&&4!==(null===e||void 0===e?void 0:e.id)&&36!==(null===e||void 0===e?void 0:e.id)),c=a.ZQ&&36===(null===e||void 0===e?void 0:e.id)?"tagembed":(null===e||void 0===e?void 0:e.icon)||"";return l?(0,n.jsx)("div",{className:"".concat(t," tb__icon tb-").concat(c.replace(/fa-/g,"")),children:(0,n.jsx)("div",{})}):(0,n.jsxs)(o.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(s,{network:e,networkClass:t})]})}}},11502:(e,t,i)=>{i.d(t,{Z:()=>n});var o=i(17739),a=i(46417);const n=e=>{let{ThemeRule:t,btnClass:i}=e;const n={fontFamily:t.css_font};return(0,a.jsx)("div",{className:"tb_shop_btn_wrap ".concat(i),children:(0,a.jsx)("div",{className:"tb_shop_btn".concat(t.postHover||(0,o.mD)(4)||(0,o.mD)(55)?" tb_shop_btn_light":" tb_shop_btn_dark"),style:n,children:t.shoppingText})})}},28751:(e,t,i)=>{i.d(t,{Z:()=>u});var o=i(47313),a=i(35179),n=i(84261),s=i(64442),r=i(81349),d=i(46417);const l=o.lazy((()=>i.e(695).then(i.bind(i,10695)))),c=e=>{let{itemData:t,wallID:i,wall:c,ownerId:h,isVisible:p}=e;const u=!(3!==t.type&&5!==t.type||!p),m=(3===t.type||5===t.type)&&1==c.ThemeRule.autoPlay;return(0,d.jsxs)("div",{className:"tb_g_r_media_wrap",children:[a.aL&&c.Personalization.interactive?(0,d.jsx)(o.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(l,{likeClass:"tb_g_r_like ".concat(c.ThemeRule.socialAction?"":"tb_g_r_like_bottom"),postId:t.id,wallID:i,UserDetail:c.UserDetail})}):null,a.aL?(0,d.jsx)(r.Z,{itemData:t,IconClass:"tb_g_r_media_icon",show:!0,hideVideo:!0}):null,u||m?(0,d.jsx)(s.Z,{VideoClass:"tb_g_r_video",data:t,wallID:i,themeID:c.Personalization.widgetTheme,ownerId:h,size:1,isCover:!0,autoPlay:!0,muted:!0}):(0,d.jsx)(n.default,{ImageClass:"tb_g_r_image",data:t,wallID:i,themeID:c.Personalization.widgetTheme,ownerId:h,size:1})]})};var h=i(17739);i(25810),i(11502);const p=o.lazy((()=>i.e(4770).then(i.bind(i,54770))));class u extends o.PureComponent{constructor(e){super(e),this.mediaHeight=o.createRef()}componentDidMount(){a.nX&&(0,h.YN)(this.mediaHeight)}render(){const{itemData:e,itemIndex:t,wallID:i,ownerId:n,wall:s,isVisible:r,clickToShowPopUp:l,ThemeRule:h,personalization:u,adjustWidth:m}=this.props,g=!!(e.ugc_products&&e.ugc_products.length>0),_=(!a.ig||!g||h.hideContent,!(!a.ig||!g||0!==e.hotspot)),b=!!(a.ig&&e.hotspot&&g);return(0,d.jsx)("div",{"item-id":e.id,id:"tb-g_r-post-".concat(e.id),className:"tb_g_r_post_wrapper",ref:this.mediaHeight,"post-id":e.referenceId?e.referenceId:e.id,"feed-id":e.feedId,style:{width:"".concat(m,"%"),padding:s.Personalization.padding/2},"tb-product":_?1:b?2:0,children:(0,d.jsx)("div",{className:"tb_g_r_post_in tb_icon_animate ".concat(a.ig?"":"tb_g_r_post_in_animate"),onClick:l(t,e),children:(0,d.jsxs)("div",{className:"tb_g_r_post_media_wrapp",children:[(0,d.jsx)(c,{itemData:e,wallID:i,wall:s,ownerId:n,preload:0==t,isVisible:r}),(0,d.jsx)("div",{className:"tb_g_r_post_details",children:(0,d.jsx)(o.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(p,{ownerId:n,postTime:e.createdAt,author:e.author,network:e.network,font:h,personalization:u,ThemeRule:h})})})]})})})}}},34280:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var o=i(47313),a=(i(34862),i(43411)),n=i(61395),s=i.n(n),r=i(28751),d=(i(97529),i(47330),i(6940),i(65192),i(59606),i(98907),i(43635)),l=i(17739),c=i(35179),h=i(46417);const p=o.lazy((()=>i.e(2205).then(i.bind(i,32205))));class u extends o.Component{constructor(e){super(e),this.state={activeID:-1,newPostdata:[]},this.scrollInterval=null,this.componentDidMount=()=>{this.scrollInterval=setInterval((()=>this.onUpdateTimeInterVal()),3e3);const{heightUpdate:e}=this.props;setTimeout((()=>e()),1e3)},this.onUpdateTimeInterVal=()=>{const{activeID:e}=this.state,{cardNumber:t,wall:i}=this.props,o=(0,l.b)()?i.ThemeRule.mobileColumn||2:i.ThemeRule.numberOfCoumn,a=parseInt(e)+1;this.setState({activeID:parseInt(o)>=a?a:0})},this.inputRefs={}}componentWillMount(){const{cardNumber:e,postData:t,completeDataObject:i,adjustWidth:o,wall:a,postSize:n,clickToShowPopUp:s,onClickToCTA:r,postSizeInPx:d,numberOfCoumn:c}=this.props,{activeID:h}=this.state,p=(0,l.b)()?a.ThemeRule.mobileColumn||2:a.ThemeRule.numberOfCoumn,u=Array.from({length:p},(()=>[]));t.forEach(((e,t)=>u[t%p].push(e))),u.forEach((e=>{for(;e.length<3;){const t=u[Math.floor(Math.random()*p)],i=t[Math.floor(Math.random()*t.length)];e.push(i)}})),this.setState({newPostdata:u})}componentWillUnmount(){this.scrollInterval&&clearInterval(this.scrollInterval)}render(){const{postData:e,completeDataObject:t,wall:i,clickToShowPopUp:a,hasMoreData:n,parentID:d,keyRender:l,onClickToCTA:u,postSizeInPx:m,adjustWidth:g,numberOfCoumn:_}=this.props,{activeID:b,newPostdata:v}=this.state;return(0,h.jsxs)(h.Fragment,{children:[" ",c.aL?(0,h.jsx)(s(),{id:"pixel",className:"tb_g_r_post_container",tabIndex:"0","aria-label":"There are ".concat(e&&e.length>0?e.length:0," posts in the feed"),elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_px_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:e&&e.length>0&&e.map(((e,o)=>{const n=t[e];return(0,h.jsx)(r.Z,{ownerId:i.Wall.owner,itemData:n,itemIndex:o,adjustWidth:g,personalization:i.Personalization,ThemeRule:i.ThemeRule,wallID:i.Wall.id,clickToShowPopUp:a,onClickToCTA:u,postSizeInPx:m,wall:i},"sqr_crd_".concat(o,"_").concat(e.id))}))}):(0,h.jsx)("div",{className:"tb_g_r_post_container",children:v.map(((e,n)=>(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)(h.Fragment,{}),children:(0,h.jsx)(p,{pIndex:n,itemIds:e,activeID:b,completeDataObject:t,wall:i,onClickToCTA:u,postSizeInPx:m,cardCount:v.length,clickToShowPopUp:a},"exhi_".concat(n))})))})]})}}const m=(0,o.memo)((0,a.$j)((e=>({loaderData:e.loaderData})),(e=>({getDataNextSteps:(t,i,o,a,n,s,r,l)=>e((0,d.Sx)(t,i,o,a,n,s,r,l))})))(u))},2406:(e,t,i)=>{t.Ad=void 0;var o=i(84228);var a=i(65786);Object.defineProperty(t,"Ad",{enumerable:!0,get:function(){return a.getImageSize}});var n=i(22537)},84228:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorMessage=void 0,t.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getImageSize=void 0;const o=i(84228);t.getImageSize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((i,a)=>{if("undefined"===typeof window)return a(o.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!e)return a(o.ErrorMessage.URL_IS_NOT_DEFINED);let n=null;const s=new Image;s.addEventListener("load",(()=>{n&&window.clearTimeout(n),i({width:s.naturalWidth,height:s.naturalHeight})})),s.addEventListener("error",(e=>{n&&window.clearTimeout(n),a("".concat(e.type,": ").concat(e.message))})),s.src=e,t.timeout&&(n=window.setTimeout((()=>a(o.ErrorMessage.TIMEOUT)),t.timeout))}))}},22537:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){return new(i||(i=Promise))((function(a,n){function s(e){try{d(o.next(e))}catch(t){n(t)}}function r(e){try{d(o.throw(e))}catch(t){n(t)}}function d(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,r)}d((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.useImageSize=void 0;const a=i(47313),n=i(65786);t.useImageSize=(e,t)=>{const[i,s]=(0,a.useState)(null),[r,d]=(0,a.useState)(!1),[l,c]=(0,a.useState)(null);return(0,a.useEffect)((()=>{o(void 0,void 0,void 0,(function*(){d(!0),s(null);try{const{width:i,height:o}=yield(0,n.getImageSize)(e,t);s({width:i,height:o})}catch(l){c(l.toString())}finally{d(!1)}}))}),[e,t]),[i,{loading:r,error:l}]}},65192:()=>{},59606:()=>{},98907:()=>{}}]);