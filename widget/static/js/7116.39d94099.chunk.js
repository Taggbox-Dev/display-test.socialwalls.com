(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7116,5810],{64442:(e,t,s)=>{"use strict";s.d(t,{Z:()=>h});var i=s(47313),o=s(2406),a=s(20510),r=s.n(a),n=s(40475),l=s(35179),d=s(17739),c=s(46417);const p=(e,t)=>{if(25===t){return String(e).replace("https://w.soundcloud.com/player/?url=","")}return e};class h extends i.PureComponent{constructor(e){super(e),this.onMediaLoad=async e=>{const{data:t}=this.props;if(t&&Object.keys(t).length>0&&[4,5,3].includes(t.type))if(t.mediaHeight&&""!=t.mediaHeight&&t.mediaWidth&&""!=t.mediaWidth)this.setState({paddingBottom:100*t.mediaHeight/t.mediaWidth});else try{const{width:e,height:s}=await(0,o.Ad)(t.postFileNew);this.setState({paddingBottom:100*s/e})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=e=>{this.setState({videoLoaded:e})},this.onUpdateTime=e=>{try{if(l.bX){const{played:t}=this.state;console.log("played",t),this.setState({played:t+e.playedSeconds})}}catch(t){console.log(t)}},this.handleDuration=e=>{this.setState({duration:e})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1,played:0,duration:0},this.videoRef=i.createRef(),this.observer=null}componentWillMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((e=>{let[t]=e;this.setState({isVisible:t.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(s){this.setState({isVisible:!0})}}componentWillUnmount(){const{played:e}=this.state;l.bX&&(0,d.qE)(e),this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:e,data:t,wallID:s,isCover:i,controls:o,autoPlay:a,handleVideoEnded:d,muted:h,themeID:u}=this.props,{paddingBottom:m,videoLoaded:_,isVisible:b}=this.state,g={small:t.postFileNew,large:t.filename,orignal:t.file},y=[74,76,77].includes(u),v={paddingBottom:"".concat(y&&l.bX?null:m,"%")},w=l.bX?t.mediaUrl:t.mediaClip&&String(t.mediaClip).length>0?t.mediaClip:t.mediaUrl;return console.log("duration",this.state.duration),(0,c.jsx)("div",{className:"".concat(e,"_wrap_ mediaHolder").concat(t.id),style:v,ref:this.videoRef,children:(0,c.jsx)(r(),{className:"".concat(e," video").concat(t.id),url:p(w,t.network.id),"data-type":"video","data-network":t.network.id,"data-link":t.link,"data-wall-id":s,"data-item-id":t.id,"data-feed-id":t.feedId?t.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata"}}},loop:(a&&l.bX,!0),onError:e=>{t.stories&&0!=t.stories||(0,n.ib)(e,t.id)},autoPlay:a,muted:h,volume:a?1:0,playsinline:!0,onReady:e=>{l.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:l.ig?b:a,height:"100%",width:"100%",controls:o||!1,onProgress:l.bX?this.onUpdateTime:null,onDuration:this.handleDuration,style:{backgroundImage:"url(".concat(y?g.large:g.small,")"),backgroundSize:i?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:d||null})})}}},25810:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var i=s(47313),o=s(35179),a=s(46417);const r=i.lazy((()=>s.e(5867).then(s.bind(s,95867))));class n extends i.PureComponent{render(){const{network:e,networkClass:t,ThemeRule:s,isDefault:n,Personalization:l}=this.props,d=!!n&&(7!==e.id&&4!==e.id&&36!==e.id),c=o.ZQ&&36==e.id?"tagembed":e.icon;return d?(0,a.jsx)("div",{className:"".concat(t," tb__icon tb-").concat(c.replace(/fa-/g,"")),children:(0,a.jsx)("div",{})}):(0,a.jsxs)(i.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:[" ",(0,a.jsx)(r,{network:e,networkClass:t})]})}}},11502:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var i=s(17739),o=s(46417);const a=e=>{let{ThemeRule:t,btnClass:s}=e;const a={fontFamily:t.css_font};return(0,o.jsx)("div",{className:"tb_shop_btn_wrap ".concat(s),children:(0,o.jsx)("div",{className:"tb_shop_btn".concat(t.postHover||(0,i.mD)(4)||(0,i.mD)(55)?" tb_shop_btn_light":" tb_shop_btn_dark"),style:a,children:t.shoppingText})})}},24235:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var i=s(17739),o=s(46417);const a=e=>{let{count:t}=e;return(0,o.jsxs)("div",{className:"tb_r_view",children:[(0,o.jsx)("div",{className:"tb__icon tb-eye",children:(0,o.jsx)("div",{})}),(0,i.sy)(t)]})}},99154:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>f});var i=s(47313),o=s(34862),a=s(43411),r=s(97529),n=s(47330),l=(s(6940),s(65192),s(59606),s(98907),s(84261)),d=s(64442),c=s(81349),p=s(35179),h=s(46417);const u=e=>{let{itemData:t,wallID:s,wall:i,ownerId:o,isVisible:a}=e;const r=!(3!==t.type&&5!==t.type||!a||1!=i.ThemeRule.autoPlay&&p.ig);return(0,h.jsxs)("div",{className:"tb_rt_media_wrap",children:[(0,h.jsx)(c.Z,{itemData:t,IconClass:"tb_rt_media_icon",show:!0,hideVideo:!0}),r?(0,h.jsx)(d.Z,{VideoClass:"tb_rt_video",data:t,wallID:s,themeID:i.Personalization.widgetTheme,ownerId:o,size:178,isCover:!0,muted:!0,autoPlay:!0}):(0,h.jsx)(l.default,{ImageClass:"tb_rt_image",data:t,wallID:s,themeID:i.Personalization.widgetTheme,ownerId:o,size:178})]})};var m=s(17739),_=s(25810),b=s(11502),g=s(24235);class y extends i.PureComponent{constructor(e){super(e),this.mediaHeight=i.createRef()}componentDidMount(){p.nX&&(0,m.YN)(this.mediaHeight)}render(){const{itemData:e,itemIndex:t,wallID:s,ownerId:i,wall:o,isVisible:a,clickToShowPopUp:r,ThemeRule:n,personalization:l}=this.props,d=!!(e.ugc_products&&e.ugc_products.length>0),c={backgroundColor:n.cardColor},m=!(!p.ig||!d||n.hideContent),y=!(!p.ig||!d||0!==e.hotspot),v=!!(p.ig&&e.hotspot&&d),w=0==n.postHover&&p.ig?"light":"dark",f=3===e.type||5===e.type;return(0,h.jsx)("div",{"item-id":e.id,id:"tb-hc-post-".concat(e.id),className:"tb_rt_post_wrapper",ref:this.mediaHeight,"post-id":e.referenceId?e.referenceId:e.id,"feed-id":e.feedId,style:{padding:o.Personalization.padding/2},"tb-product":y?1:v?2:0,children:(0,h.jsx)("div",{className:"tb_rt_post_in tb_icon_animate ".concat(p.ig?"":"tb_rt_post_in_animate"),style:c,onClick:r(t,e),children:(0,h.jsxs)("div",{className:"tb_rt_post_media_wrapp",children:[f&&1==n.showReelsView&&(null===e||void 0===e?void 0:e.views)>0?(0,h.jsx)(g.Z,{count:null===e||void 0===e?void 0:e.views}):null,(0,h.jsx)(u,{itemData:e,wallID:s,wall:o,ownerId:i,preload:0==t,isVisible:a}),p.ig?null:(0,h.jsx)("div",{className:"tb_rt_play_ico",children:(0,h.jsx)("div",{className:"tb__icon tb-play",children:(0,h.jsx)("div",{})})}),(0,h.jsxs)("div",{className:"tb_rt_post_details",children:[(0,h.jsx)("div",{className:"tb_rt_social_",children:(0,h.jsx)(_.default,{networkClass:"tb_rt_social_ico_",network:e.network,ThemeRule:n,isDefault:1===n.iconType,Personalization:l})}),m?(0,h.jsx)(b.Z,{ThemeRule:n,btnClass:"tb_rt_btn_wrap"}):null]}),(0,h.jsx)("div",{className:"tb_rt_post_overlay tb_rt_post_overlay-".concat(w),children:(0,h.jsx)("div",{})})]})})})}}var v=s(40475);class w extends i.Component{constructor(e){super(e),this.requestData=e=>{const{appendData:t,wall:s,preRender:i,hasMoreData:o,getDataNextSteps:a,loaderData:r}=this.props;e.progress>.8&&o&&!r.isShowMoreLoading&&a(s.Wall.id,Math.floor(Date.now()/1e3),s.ThemeRule.numberOfPosts,t.networkID,t.after,i,t.heightEvent)},this.reScrolled=()=>{setTimeout((()=>{let e=document.querySelector(".splide__list"),t=document.querySelector(".splide__slide").offsetWidth;const s=document.querySelectorAll(".splide__slide.is-visible").length,i=document.querySelector(".splide__slide.is-active.is-visible").getAttribute("aria-label").substring(0,2),o=Number(i)+(s-1)+s;o>0?(e.style.transition="0s ease",e.style.transform="translateX(-".concat(o*t,"px)")):e.style.transform="translateX(0px)"}),200)},this.inputRefs={}}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((e,t)=>{e.removeAttribute("role")}))}),100);const{postData:e}=this.props;if(e&&1==e.length){let e=document.querySelector(".tb_rt_arrow_left__"),t=document.querySelector(".tb_rt_arrow_right__");e&&t&&(document.querySelector(".tb_rt_arrow_left__").style="display:none",document.querySelector(".tb_rt_arrow_right__").style="display:none")}}componentDidUpdate(){const e=Object.values(this.inputRefs)[0],{postData:t,completeDataObject:s,onClickPopUpSlider:i,parentID:o}=this.props;if(e&&Object.values(e)[5].length>0){Object.values(e)[5].map(((e,a)=>{if(e.classList){const a=String(e.classList.value).split(" ").filter((e=>String(e).includes("tb_")));var r=a[0];String(a[0]).includes("tb_")&&(r=String(a[0]).replace("tb_",""));const n=t.findIndex((e=>e==r));let l=document.querySelectorAll(".tb_rt_post_container #".concat(e.id));for(let e=0;e<l.length;e++){let t=l[e],a=t.getAttribute("p_id");String(o)===String(a)&&t.addEventListener("click",(e=>{e.preventDefault();const t=s[r];i(n,t)}))}}}))}}render(){const{postData:e,completeDataObject:t,wall:s,clickToShowPopUp:i,hasMoreData:a,parentID:l,keyRender:d}=this.props,c=l,u=s.ThemeRule.numberOfCoumn,m=s.ThemeRule.mobileColumn,_=s.ThemeRule.slidePost,b=s.ThemeRule.slideDuration,g=1===s.Personalization.trimcontent;return(0,h.jsx)(h.Fragment,{children:""!=l?(0,h.jsx)("div",{className:"tb_rt_post_container",ref:this.sliderHeight,children:(0,h.jsx)(r.tq,{ref:e=>this.inputRefs[c]=e,style:{width:"100%"},onScroll:e=>this.requestData(e),onSlideChange:e=>this.requestData(e),onAutoplay:e=>this.requestData(e),autoHeight:!0,speed:700,edgeSwipeDetection:!0,slidesPerView:"auto",touchRatio:2,cssMode:o.tq,passiveListeners:!0,height:"250px",freeMode:{enabled:!0,sticky:!1,momentumBounceRatio:2,momentumVelocityRatio:3},autoplay:!(!p.ig&&!p.Jx)&&{delay:1===_?1e3*b:99e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},loop:!a,breakpoints:{0:{slidesPerView:0==m?1.6:parseInt(m)+.6},480:{slidesPerView:0==m?1.6:parseInt(m)+.6},575:{slidesPerView:0==m?2.6:parseInt(m)+.6},767:{slidesPerView:0==u?3.6:parseInt(u)+.6},1024:{slidesPerView:0==u?5.6:parseInt(u)+.6},1400:{slidesPerView:0==u?6.6:parseInt(u)+.6},1600:{slidesPerView:0==u?7.6:parseInt(u)+.6}},mousewheel:{forceToAxis:!0,sensitivity:2},watchSlidesProgress:!0,modules:[n.pt,n.Gk,n.Rv],className:"tb_rt_post_slider ".concat(g?"tb_rt_fixed_height":""),children:(0,h.jsx)(h.Fragment,{children:e&&e.length>0&&e.map(((e,o)=>{const a=t[e];return p.ig||1!=a.type?(0,h.jsx)(r.o5,{style:{margin:0,padding:0},p_id:l,className:"tb_".concat(a.id),children:e=>{let{isVisible:t}=e;return(0,h.jsx)(y,{isVisible:t,ownerId:s.Wall.owner,itemData:a,itemIndex:o,personalization:s.Personalization,ThemeRule:s.ThemeRule,wallID:s.Wall.id,clickToShowPopUp:i,wall:s})}},o):null}))})},d)}):null})}}const f=(0,i.memo)((0,a.$j)((e=>({loaderData:e.loaderData})),(e=>({getDataNextSteps:(t,s,i,o,a,r,n,l)=>e((0,v.Sx)(t,s,i,o,a,r,n,l))})))(w))},61729:(e,t,s)=>{"use strict";var i=s(79165);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,s,o,a,r){if(r!==i){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}function t(){return e}e.isRequired=e;var s={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return s.PropTypes=s,s}},75192:(e,t,s)=>{e.exports=s(61729)()},79165:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},65192:()=>{},59606:()=>{},98907:()=>{},6940:()=>{}}]);