(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3409,4261,9239,5790,5810],{89239:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>n});var s=o(47313),a=o(17739),i=o(98935),r=o(46417);class n extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:o}=this.props;return(0,r.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,r.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,a.P)(t.picture),width:44,height:44,onError:e=>{const s="#ffffff"==o.color?"#000":o.color;e.target.src=t.errorPic?t.errorPic:"https://ui-avatars.com/api/?name=".concat(t.name.replace(/\s/g,""),"&background=").concat(String(null===o.id?"#000":s).replace("#",""),"&color=fff&length=1"),e.target.alt=t.name}}):(0,r.jsx)(i.Z,{authorClass:e,username:t.name,network:o,color:null===o.id?"#000":o.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,o)=>{"use strict";o.d(e,{Z:()=>r});var s=o(47313),a=o(46417);const i=t=>{let{username:e,network:o,authorClass:s,errorPic:i}=t;const r="#ffffff"==o.color?"#000":o.color;return(0,a.jsx)("img",{className:"".concat(s,"__"),src:i||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===o.id?"#000":r).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},r=(0,s.memo)(i)},7138:(t,e,o)=>{"use strict";o.d(e,{Z:()=>r});var s=o(47313),a=o(46417);class i extends s.PureComponent{render(){const{cta:t,ctaClass:e,postCta:o,onClickToCTA:s,item:i}=this.props,r=!(!o||1!==o.status);return(0,a.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),s(i),window.open("".concat(r?o.url:t.url),"_blank")},children:[" ",r?o.text:t.text]})}}const r=i},97915:(t,e,o)=>{"use strict";o.d(e,{Z:()=>u});var s=o(47313),a=o(43411),i=o(83773),r=o(6119),n=o(17739),d=o(46417);const c=(0,i.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),l=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,o=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",s=t.product_price>0||t.product_discount>0?"".concat(o,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(s,"\n        </a>")};class h extends s.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:o}=this.state,s=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return s.status?(0,d.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const a=(0,n.i1)();return(0,d.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(a),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(o==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,d.jsx)("div",{className:"tb_hotspot__ ".concat(0==s.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,d.jsx)(c,{children:(0,d.jsx)(r.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(a),clickable:!0,html:l(t.UgcProduct)})})]},e)}))}):null}}const u=(0,a.$j)((t=>({appData:t.appData})))(h)},84261:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>h});var s=o(47313),a=o(43635),i=o(97915),r=o(2406),n=o(17739),d=o(98501),c=o(35179),l=o(46417);class h extends s.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const o=document.querySelector(".track".concat(this.props.data.id));o&&(o.setAttribute("data-height",e),o.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:o}=await(0,r.Ad)(e.postFileNew);this.setState({paddingBottom:100*o/t,size:{height:parseInt(o),width:parseInt(t)}})}catch(o){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgSize:{...this.state.imgSize,small:t.target.src}});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(o){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,imgSize:{small:t.data.postFileNew,large:t.data.filename,orignal:t.data.file},size:{height:100,width:100},isVisible:!1},this.videoRef=s.createRef(),this.observer=null}componentWillMount(){const{data:t,hotspot:e,size:o}=this.props;!o||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:o})}componentDidMount(){const{data:t,hotspot:e,size:o}=this.props;!o||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:o});try{this.observer=new IntersectionObserver((t=>{let[e]=t;e.isIntersecting&&(this.setState({isVisible:e.isIntersecting}),this.observer.disconnect())}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(s){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.observer.disconnect()}render(){const{ImageClass:t,data:e,wallID:o,themeID:s,ownerId:r,hotspot:h}=this.props,{imgUrl:u,paddingBottom:p,size:m,fixedPaddingBottom:_,imgSize:g,noPadding:v,isVisible:f}=this.state,w={paddingBottom:"".concat(this.props.size?1==this.props.size?null:_:p,"%")},b={backgroundImage:"url(".concat(g.small,")")};if(m.width>m.height)var y="100%",x="".concat(m.height/m.width*100,"%");else x="100%",y="".concat(m.width/m.height*100,"%");const I=!!(e.hotspot&&e.ugc_products.length>0&&h),P={width:I&&this.props.size?y:null,height:I&&this.props.size?x:null};return(0,l.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:w,ref:this.videoRef,children:[I?(0,l.jsx)("div",{className:"tb_blur_bg_",style:b}):null,(0,l.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:P,children:[I?(0,l.jsx)(i.Z,{product:e.ugc_products}):null,(0,l.jsx)("img",{className:"".concat(t," track").concat(e.id),role:"img",src:f?g.small:e.optmizedImg,srcSet:f?c.bX&&v?"".concat(g.large,", 991w ").concat(g.small,", 480w"):null:e.optmizedImg,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":o,"data-owner-id":r,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":s,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(d.do,"/media/images/error/no-image.svg"),(0,a.ht)(t)},alt:(0,n.P)(u)})]})]})}}},64442:(t,e,o)=>{"use strict";o.d(e,{Z:()=>h});var s=o(47313),a=(o(2406),o(20510)),i=o.n(a),r=o(43635),n=o(35179),d=(o(17739),o(46417));const c=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class l extends s.Component{constructor(t){super(t),this.setVideoLoaded=t=>{this.setState({videoLoaded:!0})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=s.createRef(),this.observer=null,this.observerTimeout=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0)}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0);try{let t;this.observer=new IntersectionObserver((e=>{let[o]=e;clearTimeout(t),this.observerTimeout=setTimeout((()=>{this.setState({isVisible:o.isIntersecting})}),100)}),{threshold:.01}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(o){console.error("IntersectionObserver error:",o),this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current),clearTimeout(this.observerTimeout)}render(){const{VideoClass:t,data:e,wallID:o,isCover:s,controls:a,autoPlay:l,handleVideoEnded:h,muted:u,themeID:p,intervalTime:m}=this.props,{paddingBottom:_,videoLoaded:g,isVisible:v}=this.state;console.log("muted-autoPlay-isVisible",u,l,v);const f={small:e.postFileNew,large:e.filename,orignal:e.file},w=[74,76,77].includes(p),b={paddingBottom:"".concat(w&&n.bX?null:_,"%")},y=null!==e&&void 0!==e&&e.loopStop?e.mediaUrl:e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,d.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:b,ref:this.videoRef,children:(0,d.jsx)(i(),{className:"".concat(t," video").concat(e.id),url:c(y,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":o,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%"),poster:e.postFileNew}},file:{attributes:{preload:"metadata",poster:e.postFileNew}}},loop:!(n.bX&&!n.aL&&null!==e&&void 0!==e&&e.loopStop),onError:t=>{!n.P2||e.stories&&0!=e.stories||(0,r.ib)(t,e.id),w&&h&&setTimeout((()=>{h()}),1e3*m)},autoPlay:n.bX?v:l,muted:u,volume:l?1:0,playsinline:!0,onReady:t=>{n.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},onLoadedData:this.setVideoLoaded,playing:n.ig||n.bX?v:l,onPlay:()=>console.log("Video is playing"),height:"100%",width:"100%",controls:a||!1,style:{backgroundImage:"url(".concat(w?f.large:f.small,")"),backgroundSize:s?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})})}}const h=(0,s.memo)(l)},25810:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>n});var s=o(47313),a=o(35179),i=o(46417);const r=s.lazy((()=>o.e(5867).then(o.bind(o,95867))));class n extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:o,isDefault:n,Personalization:d}=this.props,c=!!n&&(7!==t.id&&4!==t.id&&36!==t.id),l=a.ZQ&&36==t.id?"tagembed":t.icon;return c?(0,i.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(l.replace(/fa-/g,"")),children:(0,i.jsx)("div",{})}):(0,i.jsxs)(s.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:[" ",(0,i.jsx)(r,{network:t,networkClass:e})]})}}},55790:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>n});var s=o(47313),a=o(17739),i=o(46417);const r=t=>{const{postTime:e,timeClass:o}=t;return(0,i.jsx)("div",{className:o,children:(0,a.Sy)(e)})},n=(0,s.memo)(r)},9159:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>v});var s=o(47313),a=o(11774),i=o(43411),r=o(84261),n=o(64442),d=o(35179),c=o(46417);const l=t=>{let{itemData:e,wallID:o,ownerId:s,wall:a,autoVPlay:i,handleVideoEnded:l}=t;const h=!(3!==e.type&&5!==e.type||1!=a.ThemeRule.autoPlay&&!d.ZQ||!i);return(0,c.jsx)("div",{className:"tb_stt_media_wrap",children:h?(0,c.jsx)(n.Z,{VideoClass:"tb_stt_video",data:e,wallID:o,themeID:a.Personalization.widgetTheme,ownerId:s,size:1,controls:!1,autoPlay:!(!d.ZQ||!i)||!!h&&i,handleVideoEnded:l,muted:!0,isCover:!0}):(0,c.jsx)(r.default,{ImageClass:"tb_stt_image",data:e,wallID:o,themeID:a.Personalization.widgetTheme,ownerId:s,size:1})})};var h=o(89239),u=o(25810);o(55790);const p=t=>{let{author:e,personalization:o,postTime:s,network:a,ThemeRule:i,font:r}=t;const n=e.username&&e.username.length>0?"@".concat(e.username):"",l={color:i.authorColor,fontFamily:i.css_font},p={color:i.authorColor,fontSize:i.fontSize,fontFamily:i.css_font},m=(i.authorColor,!(!o.postAuthor||e.isInstaUser));!o.postAuthor||o.postTime;return(0,c.jsxs)("div",{className:"tb_stt_content_wrap",children:[d.ZQ?null:(0,c.jsx)("div",{className:"tb_stt_author_img",children:m?(0,c.jsx)(h.default,{author:e,network:a,authorClass:"tb_stt_author_img_00"}):" "}),(0,c.jsxs)("div",{className:"tb_stt_author_info",children:[(0,c.jsx)(u.default,{networkClass:"tb_stt_social_ico",network:a,isDefault:1===i.iconType,ThemeRule:i}),(0,c.jsxs)("div",{className:"tb_stt_author_001",children:[0===i.hideContent?(0,c.jsx)("div",{className:"tb_stt_hashtag tb-cTBfont-".concat(i.font_varient),style:d.ZQ?null:p,children:n}):"",m?(0,c.jsx)("div",{className:"tb_stt_author_name",style:d.ZQ?null:l,children:e.name}):""]})]})]})};var m=o(7138);const _=t=>{let{itemData:e,personalization:o,adjustWidth:s,ThemeRule:a,wallID:i,ownerId:r,wall:n,onClickToCTA:h,autoPlay:u,handleVideoEnded:_}=t;const g={width:"".concat(s,"%")},v=1!==e.type,f=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status);return(0,c.jsx)("div",{id:"tb-stt-post-".concat(e.id),className:"tb_stt_post_wrapper",style:g,"tb-network":e.network.icon,children:(0,c.jsxs)("div",{className:"tb_stt_card_wrapper",children:[v?(0,c.jsx)("div",{className:"tb_stt_media_img",children:(0,c.jsx)(l,{itemData:e,wallID:i,wall:n,ownerId:r,autoVPlay:u,handleVideoEnded:_})}):"",(0,c.jsx)("div",{className:"tb_stt_card_wrapper_00",children:(0,c.jsxs)("div",{className:"tb_stt_card_content_0",children:[f&&d.ZQ?(0,c.jsxs)("div",{className:"tb_stt_post_cta",children:[(0,c.jsx)(m.Z,{ctaClass:"tb_stt_post_cta_btn",cta:e.cta,item:e,onClickToCTA:h})," "]}):"",(0,c.jsx)(p,{ownerId:r,postTime:e.createdAt,author:e.author,network:e.network,font:e.font,personalization:o,ThemeRule:a})]})})]})})};o(37210);class g extends s.PureComponent{constructor(t){super(t),this.state={arrowWidth:0,currentIndex:0},this.onResponsiveCardItem=()=>{const t=document.querySelector(".splide__slide.is-active");if(t){const e=t.clientWidth+.1*t.clientWidth;this.setState({arrowWidth:e})}},this.handleVideoEnded=()=>{const{postData:t}=this.props,{currentIndex:e}=this.state,o=e+1;o<t.length&&this.secondaryRef.current&&this.secondaryRef.current&&this.secondaryRef.current.splide.go(o)},this.secondaryRef=s.createRef()}componentDidMount(){this.onResponsiveCardItem(),window.addEventListener("resize",(()=>this.onResponsiveCardItem())),setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((t,e)=>{t.removeAttribute("role")}))}),100);const{postData:t,completeDataObject:e,onClickPopUpSlider:o,wall:s}=this.props;this.secondaryRef.current&&this.secondaryRef.current.slides.length>0&&this.secondaryRef.current.slides.map(((a,i)=>{if(a.classList){const i=String(a.classList.value).split(" ").filter((t=>String(t).includes("tb_")));var r=i[0];String(i[0]).includes("tb_")&&(r=String(i[0]).replace("tb_",""));const n=t.findIndex((t=>t==r));document.querySelector(".tb_stt_post_container #".concat(a.id)).addEventListener("click",(t=>{t.preventDefault();const a=e[r];56!=s.Personalization.widgetTheme&&d.ZQ||o(n,a)}))}}))}render(){var t;const{completeDataObject:e,wall:o,onClickToCTA:s,modalPop:i}=this.props,{arrowWidth:r,currentIndex:n}=this.state;let l=this.props.postData;l&&l.length>0&&(l=1==l.length?[...l,...l,...l,...l]:2==l.length?[...l,...l]:this.props.postData);const h=o.ThemeRule.numberOfCoumn,u=o.ThemeRule.mobileColumn,p=o.ThemeRule.slidePost,m=o.ThemeRule.slideDuration,g=o.Personalization.autoScrollStatus,v=d.ZQ&&void 0!==(null===(t=o.Personalization)||void 0===t?void 0:t.clonePost)&&0===o.Personalization.clonePost?{clones:0}:{},f=1!=g?!(Object.keys(v).length>0)&&"loop":"loop",w={...v,type:f,rewind:!1,speed:1e3,interval:1===p?1e3*parseInt(m):5e3,perPage:h>0?h:7,perMove:1,gap:0,cloneStatus:!1,autoplay:1===p,padding:"0",pagination:!1,arrows:!0,focus:"center",start:127183==o.Wall.owner?0:2,breakpoints:{560:{perPage:u>0?u:1,start:127183==o.Wall.owner?0:2},767:{perPage:u>0?u:3,start:127183==o.Wall.owner?0:2},991:{perPage:u>0?u:3,start:2},1200:{perPage:h>0?h:5,start:127183==o.Wall.owner?0:2},1400:{perPage:h>0?h:5,start:127183==o.Wall.owner?0:2},1600:{perPage:h>0?h:5,start:127183==o.Wall.owner?0:2}},updateOnMove:!0},b=1===w.breakpoints[560].perPage?"tb_stt_center_mode560":"",y=1===w.breakpoints[767].perPage?"tb_stt_center_mode767":"",x=1===w.breakpoints[991].perPage?"tb_stt_center_mode991":"";if(d.ZQ&&1===p){var I=this.secondaryRef&&this.secondaryRef.current?this.secondaryRef.current.splide.Components.Autoplay:null;i.isShowPopUp&&I?I.pause():I&&I.play()}return(0,c.jsx)("div",{className:"tb_stt_post_container",children:(0,c.jsxs)(a.tv,{hasTrack:!1,className:"tb_stt_post_slider ".concat(d.ZQ?"tb_stt_triple_slider":""," ").concat(b," ").concat(y," ").concat(x),options:w,ref:this.secondaryRef,onActive:(t,e,o)=>this.setState({currentIndex:e.index}),children:[(0,c.jsx)(a.Gj,{children:l&&l.length>0&&l.map(((t,i)=>{const r=e[t];return(0,c.jsx)(a.jw,{style:{margin:0,padding:0},"data-index":i,className:"tb_".concat(r.id),children:(0,c.jsx)(_,{ownerId:o.Wall.owner,itemData:r,autoPlay:n==i,itemIndex:i,personalization:o.Personalization,ThemeRule:o.ThemeRule,wallID:o.Wall.id,onClickToCTA:s,wall:o,handleVideoEnded:this.handleVideoEnded})},i)}))}),(0,c.jsx)("div",{className:"splide__arrows splide__arrows--ltr tb_stt_arrow  tb_stt_arrow_left__",onClick:this.onUpdateData,style:{right:r},children:(0,c.jsx)("div",{className:"splide__arrow splide__arrow--prev tb__icon tb-arrow-left-alt",children:" "})}),(0,c.jsx)("div",{className:"splide__arrows splide__arrows--ltr tb_stt_arrow tb_stt_arrow_right__",style:{left:r},children:(0,c.jsx)("div",{className:"splide__arrow splide__arrow--next tb__icon tb-arrow-right-alt",children:" "})})]})})}}const v=(0,i.$j)((t=>({modalPop:t.modalPop})))(g)},61729:(t,e,o)=>{"use strict";var s=o(79165);function a(){}function i(){}i.resetWarningCache=a,t.exports=function(){function t(t,e,o,a,i,r){if(r!==s){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}function e(){return t}t.isRequired=t;var o={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:a};return o.PropTypes=o,o}},75192:(t,e,o)=>{t.exports=o(61729)()},79165:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2406:(t,e,o)=>{"use strict";e.Ad=void 0;var s=o(84228);var a=o(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return a.getImageSize}});var i=o(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,o)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const s=o(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((o,a)=>{if("undefined"===typeof window)return a(s.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return a(s.ErrorMessage.URL_IS_NOT_DEFINED);let i=null;const r=new Image;r.addEventListener("load",(()=>{i&&window.clearTimeout(i),o({width:r.naturalWidth,height:r.naturalHeight})})),r.addEventListener("error",(t=>{i&&window.clearTimeout(i),a("".concat(t.type,": ").concat(t.message))})),r.src=t,e.timeout&&(i=window.setTimeout((()=>a(s.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,o){"use strict";var s=this&&this.__awaiter||function(t,e,o,s){return new(o||(o=Promise))((function(a,i){function r(t){try{d(s.next(t))}catch(e){i(e)}}function n(t){try{d(s.throw(t))}catch(e){i(e)}}function d(t){var e;t.done?a(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(r,n)}d((s=s.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const a=o(47313),i=o(65786);e.useImageSize=(t,e)=>{const[o,r]=(0,a.useState)(null),[n,d]=(0,a.useState)(!1),[c,l]=(0,a.useState)(null);return(0,a.useEffect)((()=>{s(void 0,void 0,void 0,(function*(){d(!0),r(null);try{const{width:o,height:s}=yield(0,i.getImageSize)(t,e);r({width:o,height:s})}catch(c){l(c.toString())}finally{d(!1)}}))}),[t,e]),[o,{loading:n,error:c}]}},37210:()=>{}}]);