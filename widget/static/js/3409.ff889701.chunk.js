(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3409,4261,9239,5790,5810],{89239:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>n});var s=a(47313),o=a(17739),i=a(98935),r=a(46417);class n extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:a}=this.props;return(0,r.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,r.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,o.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,r.jsx)(i.Z,{authorClass:e,username:t.name,network:a,color:null===a.id?"#000":a.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var s=a(47313),o=a(46417);const i=t=>{let{username:e,network:a,authorClass:s,errorPic:i}=t;const r="#ffffff"==a.color?"#000":a.color;return(0,o.jsx)("img",{className:"".concat(s,"__"),src:i||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===a.id?"#000":r).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},r=(0,s.memo)(i)},7138:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var s=a(47313),o=a(46417);class i extends s.PureComponent{render(){const{cta:t,ctaClass:e,postCta:a,onClickToCTA:s,item:i}=this.props,r=!(!a||1!==a.status);return(0,o.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),s(i),window.open("".concat(r?a.url:t.url),"_blank")},children:[" ",r?a.text:t.text]})}}const r=i},97915:(t,e,a)=>{"use strict";a.d(e,{Z:()=>p});var s=a(47313),o=a(43411),i=a(83773),r=a(6119),n=a(17739),d=a(46417);const l=(0,i.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),c=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,a=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",s=t.product_price>0||t.product_discount>0?"".concat(a,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(s,"\n        </a>")};class h extends s.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:a}=this.state,s=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return s.status?(0,d.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const o=(0,n.i1)();return(0,d.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(o),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(a==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,d.jsx)("div",{className:"tb_hotspot__ ".concat(0==s.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,d.jsx)(l,{children:(0,d.jsx)(r.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(o),clickable:!0,html:c(t.UgcProduct)})})]},e)}))}):null}}const p=(0,o.$j)((t=>({appData:t.appData})))(h)},84261:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>h});var s=a(47313),o=a(40475),i=a(97915),r=a(2406),n=a(17739),d=a(98501),l=a(35179),c=a(46417);class h extends s.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const a=document.querySelector(".track".concat(this.props.data.id));a&&(a.setAttribute("data-height",e),a.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:a}=await(0,r.Ad)(e.postFileNew);this.setState({paddingBottom:100*a/t,size:{height:parseInt(a),width:parseInt(t)}})}catch(a){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgSize:{...this.state.imgSize,small:t.target.src}});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(a){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,imgSize:{small:t.data.postFileNew,large:t.data.filename,orignal:t.data.file},size:{height:100,width:100}}}componentWillMount(){const{data:t,hotspot:e,size:a}=this.props;t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:a})}componentDidMount(){const{data:t,hotspot:e,size:a}=this.props;!a||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:a})}render(){const{ImageClass:t,data:e,wallID:a,themeID:s,ownerId:r,hotspot:h}=this.props,{imgUrl:p,paddingBottom:u,size:m,fixedPaddingBottom:_,imgSize:g,noPadding:w}=this.state,f={paddingBottom:"".concat(this.props.size?1==this.props.size?null:_:u,"%")},v={backgroundImage:"url(".concat(g.small,")")};if(m.width>m.height)var b="100%",y="".concat(m.height/m.width*100,"%");else y="100%",b="".concat(m.width/m.height*100,"%");const x=!!(e.hotspot&&e.ugc_products.length>0&&h),S={width:x&&this.props.size?b:null,height:x&&this.props.size?y:null};return(0,c.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:f,children:[x?(0,c.jsx)("div",{className:"tb_blur_bg_",style:v}):null,(0,c.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:S,children:[x?(0,c.jsx)(i.Z,{product:e.ugc_products}):null,(0,c.jsx)("img",{className:"".concat(t," track").concat(e.id),role:"img",src:g.small,srcSet:l.bX&&w?"".concat(g.large,", 991w ").concat(g.small,", 480w"):null,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":a,"data-owner-id":r,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":s,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(d.do,"/media/images/no-image.svg"),(0,o.ht)(t)},alt:(0,n.P)(p)})]})]})}}},64442:(t,e,a)=>{"use strict";a.d(e,{Z:()=>h});var s=a(47313),o=a(2406),i=a(20510),r=a.n(i),n=a(40475),d=a(35179),l=(a(17739),a(46417));const c=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class h extends s.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:a}=await(0,o.Ad)(e.postFileNew);this.setState({paddingBottom:100*a/t})}catch(a){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=s.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(a){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:a,isCover:s,controls:o,autoPlay:i,handleVideoEnded:h,muted:p,themeID:u}=this.props,{paddingBottom:m,videoLoaded:_,isVisible:g}=this.state,w={small:e.postFileNew,large:e.filename,orignal:e.file},f=[74,76,77].includes(u),v={paddingBottom:"".concat(f&&d.bX?null:m,"%")},b=null!==e&&void 0!==e&&e.loopStop?e.mediaUrl:e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:v,ref:this.videoRef,"data-play":i?"true":"false",children:(0,l.jsx)(r(),{className:"".concat(t," video").concat(e.id),url:c(b,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":a,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{autoplay:!0,preload:"auto","data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{forceVideo:!0,attributes:{preload:"auto",autoplay:!0}}},loop:!(d.bX&&!d.aL&&null!==e&&void 0!==e&&e.loopStop),onError:t=>{e.stories&&0!=e.stories||(0,n.ib)(t,e.id)},preload:"auto",autoPlay:i,muted:p,volume:i?1:0,playsinline:!0,onReady:t=>{d.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:d.ig?g:i,height:"100%",width:"100%",controls:o||!1,style:{backgroundImage:"url(".concat(f?w.large:w.small,")"),backgroundSize:s?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})})}}},25810:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>n});var s=a(47313),o=a(35179),i=a(46417);const r=s.lazy((()=>a.e(5867).then(a.bind(a,95867))));class n extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a,isDefault:n,Personalization:d}=this.props,l=!!n&&(7!==t.id&&4!==t.id&&36!==t.id),c=o.ZQ&&36==t.id?"tagembed":t.icon;return l?(0,i.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(c.replace(/fa-/g,"")),children:(0,i.jsx)("div",{})}):(0,i.jsxs)(s.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:[" ",(0,i.jsx)(r,{network:t,networkClass:e})]})}}},55790:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>n});var s=a(47313),o=a(17739),i=a(46417);const r=t=>{const{postTime:e,timeClass:a}=t;return(0,i.jsx)("div",{className:a,children:(0,o.Sy)(e)})},n=(0,s.memo)(r)},9159:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>w});var s=a(47313),o=a(11774),i=a(43411),r=a(84261),n=a(64442),d=a(35179),l=a(46417);const c=t=>{let{itemData:e,wallID:a,ownerId:s,wall:o,autoVPlay:i,handleVideoEnded:c}=t;const h=!(3!==e.type&&5!==e.type||1!=o.ThemeRule.autoPlay&&!d.ZQ||!i);return(0,l.jsx)("div",{className:"tb_stt_media_wrap",children:h?(0,l.jsx)(n.Z,{VideoClass:"tb_stt_video",data:e,wallID:a,themeID:o.Personalization.widgetTheme,ownerId:s,size:1,controls:!1,autoPlay:!(!d.ZQ||!i)||!!h&&i,handleVideoEnded:c,muted:!0,isCover:!0}):(0,l.jsx)(r.default,{ImageClass:"tb_stt_image",data:e,wallID:a,themeID:o.Personalization.widgetTheme,ownerId:s,size:1})})};var h=a(89239),p=a(25810);a(55790);const u=t=>{let{author:e,personalization:a,postTime:s,network:o,ThemeRule:i,font:r}=t;const n=e.username&&e.username.length>0?"@".concat(e.username):"",c={color:i.authorColor,fontFamily:i.css_font},u={color:i.authorColor,fontSize:i.fontSize,fontFamily:i.css_font},m=(i.authorColor,!(!a.postAuthor||e.isInstaUser));!a.postAuthor||a.postTime;return(0,l.jsxs)("div",{className:"tb_stt_content_wrap",children:[d.ZQ?null:(0,l.jsx)("div",{className:"tb_stt_author_img",children:m?(0,l.jsx)(h.default,{author:e,network:o,authorClass:"tb_stt_author_img_00"}):" "}),(0,l.jsxs)("div",{className:"tb_stt_author_info",children:[(0,l.jsx)(p.default,{networkClass:"tb_stt_social_ico",network:o,isDefault:1===i.iconType,ThemeRule:i}),(0,l.jsxs)("div",{className:"tb_stt_author_001",children:[0===i.hideContent?(0,l.jsx)("div",{className:"tb_stt_hashtag tb-cTBfont-".concat(i.font_varient),style:d.ZQ?null:u,children:n}):"",m?(0,l.jsx)("div",{className:"tb_stt_author_name",style:d.ZQ?null:c,children:e.name}):""]})]})]})};var m=a(7138);const _=t=>{let{itemData:e,personalization:a,adjustWidth:s,ThemeRule:o,wallID:i,ownerId:r,wall:n,onClickToCTA:h,autoPlay:p,handleVideoEnded:_}=t;const g={width:"".concat(s,"%")},w=1!==e.type,f=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status);return(0,l.jsx)("div",{id:"tb-stt-post-".concat(e.id),className:"tb_stt_post_wrapper",style:g,"tb-network":e.network.icon,children:(0,l.jsxs)("div",{className:"tb_stt_card_wrapper",children:[w?(0,l.jsx)("div",{className:"tb_stt_media_img",children:(0,l.jsx)(c,{itemData:e,wallID:i,wall:n,ownerId:r,autoVPlay:p,handleVideoEnded:_})}):"",(0,l.jsx)("div",{className:"tb_stt_card_wrapper_00",children:(0,l.jsxs)("div",{className:"tb_stt_card_content_0",children:[f&&d.ZQ?(0,l.jsxs)("div",{className:"tb_stt_post_cta",children:[(0,l.jsx)(m.Z,{ctaClass:"tb_stt_post_cta_btn",cta:e.cta,item:e,onClickToCTA:h})," "]}):"",(0,l.jsx)(u,{ownerId:r,postTime:e.createdAt,author:e.author,network:e.network,font:e.font,personalization:a,ThemeRule:o})]})})]})})};a(37210);class g extends s.PureComponent{constructor(t){super(t),this.state={arrowWidth:0,currentIndex:0},this.onResponsiveCardItem=()=>{const t=document.querySelector(".splide__slide.is-active");if(t){const e=t.clientWidth+.1*t.clientWidth;this.setState({arrowWidth:e})}},this.handleVideoEnded=()=>{const{postData:t}=this.props,{currentIndex:e}=this.state,a=e+1;a<t.length&&this.secondaryRef.current&&this.secondaryRef.current&&this.secondaryRef.current.splide.go(a)},this.secondaryRef=s.createRef()}componentDidMount(){this.onResponsiveCardItem(),window.addEventListener("resize",(()=>this.onResponsiveCardItem())),setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((t,e)=>{t.removeAttribute("role")}))}),100);const{postData:t,completeDataObject:e,onClickPopUpSlider:a,wall:s}=this.props;this.secondaryRef.current&&this.secondaryRef.current.slides.length>0&&this.secondaryRef.current.slides.map(((o,i)=>{if(o.classList){const i=String(o.classList.value).split(" ").filter((t=>String(t).includes("tb_")));var r=i[0];String(i[0]).includes("tb_")&&(r=String(i[0]).replace("tb_",""));const n=t.findIndex((t=>t==r));document.querySelector(".tb_stt_post_container #".concat(o.id)).addEventListener("click",(t=>{t.preventDefault();const o=e[r];56!=s.Personalization.widgetTheme&&d.ZQ||a(n,o)}))}}))}render(){var t;const{completeDataObject:e,wall:a,onClickToCTA:s,modalPop:i}=this.props,{arrowWidth:r,currentIndex:n}=this.state;let c=this.props.postData;c&&c.length>0&&(c=1==c.length?[...c,...c,...c,...c]:2==c.length?[...c,...c]:this.props.postData);const h=a.ThemeRule.numberOfCoumn,p=a.ThemeRule.mobileColumn,u=a.ThemeRule.slidePost,m=a.ThemeRule.slideDuration,g=a.Personalization.autoScrollStatus,w=d.ZQ&&void 0!==(null===(t=a.Personalization)||void 0===t?void 0:t.clonePost)&&0===a.Personalization.clonePost?{clones:0}:{},f=1!=g?!(Object.keys(w).length>0)&&"loop":"loop",v={...w,type:f,rewind:!1,speed:1e3,interval:1===u?1e3*parseInt(m):5e3,perPage:h>0?h:7,perMove:1,gap:0,cloneStatus:!1,autoplay:1===u,padding:"0",pagination:!1,arrows:!0,focus:"center",start:127183==a.Wall.owner?0:2,breakpoints:{560:{perPage:p>0?p:1,start:127183==a.Wall.owner?0:2},767:{perPage:p>0?p:3,start:127183==a.Wall.owner?0:2},991:{perPage:p>0?p:3,start:2},1200:{perPage:h>0?h:5,start:127183==a.Wall.owner?0:2},1400:{perPage:h>0?h:5,start:127183==a.Wall.owner?0:2},1600:{perPage:h>0?h:5,start:127183==a.Wall.owner?0:2}},updateOnMove:!0},b=1===v.breakpoints[560].perPage?"tb_stt_center_mode560":"",y=1===v.breakpoints[767].perPage?"tb_stt_center_mode767":"",x=1===v.breakpoints[991].perPage?"tb_stt_center_mode991":"";if(d.ZQ&&1===u){var S=this.secondaryRef&&this.secondaryRef.current?this.secondaryRef.current.splide.Components.Autoplay:null;i.isShowPopUp&&S?S.pause():S&&S.play()}return(0,l.jsx)("div",{className:"tb_stt_post_container",children:(0,l.jsxs)(o.tv,{hasTrack:!1,className:"tb_stt_post_slider ".concat(d.ZQ?"tb_stt_triple_slider":""," ").concat(b," ").concat(y," ").concat(x),options:v,ref:this.secondaryRef,onActive:(t,e,a)=>this.setState({currentIndex:e.index}),children:[(0,l.jsx)(o.Gj,{children:c&&c.length>0&&c.map(((t,i)=>{const r=e[t];return(0,l.jsx)(o.jw,{style:{margin:0,padding:0},"data-index":i,className:"tb_".concat(r.id),children:(0,l.jsx)(_,{ownerId:a.Wall.owner,itemData:r,autoPlay:n==i,itemIndex:i,personalization:a.Personalization,ThemeRule:a.ThemeRule,wallID:a.Wall.id,onClickToCTA:s,wall:a,handleVideoEnded:this.handleVideoEnded})},i)}))}),(0,l.jsx)("div",{className:"splide__arrows splide__arrows--ltr tb_stt_arrow  tb_stt_arrow_left__",onClick:this.onUpdateData,style:{right:r},children:(0,l.jsx)("div",{className:"splide__arrow splide__arrow--prev tb__icon tb-arrow-left-alt",children:" "})}),(0,l.jsx)("div",{className:"splide__arrows splide__arrows--ltr tb_stt_arrow tb_stt_arrow_right__",style:{left:r},children:(0,l.jsx)("div",{className:"splide__arrow splide__arrow--next tb__icon tb-arrow-right-alt",children:" "})})]})})}}const w=(0,i.$j)((t=>({modalPop:t.modalPop})))(g)},61729:(t,e,a)=>{"use strict";var s=a(79165);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,e,a,o,i,r){if(r!==s){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}function e(){return t}t.isRequired=t;var a={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return a.PropTypes=a,a}},75192:(t,e,a)=>{t.exports=a(61729)()},79165:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2406:(t,e,a)=>{"use strict";e.Ad=void 0;var s=a(84228);var o=a(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return o.getImageSize}});var i=a(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,a)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const s=a(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((a,o)=>{if("undefined"===typeof window)return o(s.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return o(s.ErrorMessage.URL_IS_NOT_DEFINED);let i=null;const r=new Image;r.addEventListener("load",(()=>{i&&window.clearTimeout(i),a({width:r.naturalWidth,height:r.naturalHeight})})),r.addEventListener("error",(t=>{i&&window.clearTimeout(i),o("".concat(t.type,": ").concat(t.message))})),r.src=t,e.timeout&&(i=window.setTimeout((()=>o(s.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,a){"use strict";var s=this&&this.__awaiter||function(t,e,a,s){return new(a||(a=Promise))((function(o,i){function r(t){try{d(s.next(t))}catch(e){i(e)}}function n(t){try{d(s.throw(t))}catch(e){i(e)}}function d(t){var e;t.done?o(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(r,n)}d((s=s.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const o=a(47313),i=a(65786);e.useImageSize=(t,e)=>{const[a,r]=(0,o.useState)(null),[n,d]=(0,o.useState)(!1),[l,c]=(0,o.useState)(null);return(0,o.useEffect)((()=>{s(void 0,void 0,void 0,(function*(){d(!0),r(null);try{const{width:a,height:s}=yield(0,i.getImageSize)(t,e);r({width:a,height:s})}catch(l){c(l.toString())}finally{d(!1)}}))}),[t,e]),[a,{loading:n,error:l}]}},37210:()=>{}}]);