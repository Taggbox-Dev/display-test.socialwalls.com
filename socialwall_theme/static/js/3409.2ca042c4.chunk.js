(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3409,4261,9239,5790,5810],{89239:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var o=s(47313),i=s(17739),a=s(98935),r=s(46417);class n extends o.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:s}=this.props;return(0,r.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,r.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,i.P)(t.picture),width:44,height:44,onError:e=>{const o="#ffffff"==s.color?"#000":s.color;e.target.src=t.errorPic?t.errorPic:"https://ui-avatars.com/api/?name=".concat(t.name.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":o).replace("#",""),"&color=fff&length=1"),e.target.alt=t.name}}):(0,r.jsx)(a.Z,{authorClass:e,username:t.name,network:s,color:null===s.id?"#000":s.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});var o=s(47313),i=s(46417);const a=t=>{let{username:e,network:s,authorClass:o,errorPic:a}=t;const r="#ffffff"==s.color?"#000":s.color;return(0,i.jsx)("img",{className:"".concat(o,"__"),src:a||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":r).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},r=(0,o.memo)(a)},7138:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});var o=s(47313),i=s(46417);class a extends o.PureComponent{render(){const{cta:t,ctaClass:e,postCta:s,onClickToCTA:o,item:a}=this.props,r=!(!s||1!==s.status);return(0,i.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),o(a),window.open("".concat(r?s.url:t.url),"_blank")},children:[" ",r?s.text:t.text]})}}const r=a},97915:(t,e,s)=>{"use strict";s.d(e,{Z:()=>p});var o=s(47313),i=s(43411),a=s(83773),r=s(6119),n=s(17739),d=s(46417);const c=(0,a.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),l=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,s=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",o=t.product_price>0||t.product_discount>0?"".concat(s,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(o,"\n        </a>")};class h extends o.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:s}=this.state,o=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return o.status?(0,d.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const i=(0,n.i1)();return(0,d.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(i),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(s==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,d.jsx)("div",{className:"tb_hotspot__ ".concat(0==o.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,d.jsx)(c,{children:(0,d.jsx)(r.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(i),clickable:!0,html:l(t.UgcProduct)})})]},e)}))}):null}}const p=(0,i.$j)((t=>({appData:t.appData})))(h)},84261:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var o=s(47313),i=(s(43635),s(97915)),a=s(2406),r=s(17739),n=s(98501),d=s(35179),c=s(46417);class l extends o.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const s=document.querySelector(".track".concat(this.props.data.id));s&&(s.setAttribute("data-height",e),s.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:s}=await(0,a.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t,size:{height:parseInt(s),width:parseInt(t)}})}catch(s){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgSize:{...this.state.imgSize,small:t.target.src}});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(s){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,imgSize:{small:t.data.postFileNew,large:t.data.filename,orignal:t.data.file},size:{height:100,width:100},isVisible:!1},this.videoRef=o.createRef(),this.observer=null}componentWillMount(){const{data:t,hotspot:e,size:s}=this.props;!s||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:s})}componentDidMount(){const{data:t,hotspot:e,size:s}=this.props;!s||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:s});try{this.observer=new IntersectionObserver((t=>{let[e]=t;e.isIntersecting&&(this.setState({isVisible:e.isIntersecting}),this.observer.disconnect())}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(o){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.observer.disconnect()}render(){const{ImageClass:t,data:e,wallID:s,themeID:o,ownerId:a,hotspot:l}=this.props,{imgUrl:h,paddingBottom:p,size:u,fixedPaddingBottom:m,imgSize:_,noPadding:g,isVisible:w}=this.state,f={paddingBottom:"".concat(this.props.size?1==this.props.size?null:m:p,"%")},v={backgroundImage:"url(".concat(_.small,")")};if(u.width>u.height)var b="100%",y="".concat(u.height/u.width*100,"%");else y="100%",b="".concat(u.width/u.height*100,"%");const x=!!(e.hotspot&&e.ugc_products.length>0&&l),I={width:x&&this.props.size?b:null,height:x&&this.props.size?y:null};return(0,c.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:f,ref:this.videoRef,children:[x?(0,c.jsx)("div",{className:"tb_blur_bg_",style:v}):null,(0,c.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:I,children:[x?(0,c.jsx)(i.Z,{product:e.ugc_products}):null,(0,c.jsx)("img",{className:"".concat(t," track").concat(e.id),role:"img",src:w?_.small:e.optmizedImg,srcSet:w?d.bX&&g?"".concat(_.large,", 991w ").concat(_.small,", 480w"):null:e.optmizedImg,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":s,"data-owner-id":a,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":o,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(n.do,"/media/images/error/no-image.svg")},alt:(0,r.P)(h)})]})]})}}},64442:(t,e,s)=>{"use strict";s.d(e,{Z:()=>p});var o=s(47313),i=s(2406),a=s(20510),r=s.n(a),n=s(43635),d=s(35179),c=(s(17739),s(46417));const l=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class h extends o.Component{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:s}=await(0,i.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=o.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(s){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:s,isCover:o,controls:i,autoPlay:a,handleVideoEnded:h,muted:p,themeID:u,intervalTime:m}=this.props,{paddingBottom:_,videoLoaded:g,isVisible:w}=this.state,f={small:e.postFileNew,large:e.filename,orignal:e.file},v=[74,76,77].includes(u),b={paddingBottom:"".concat(v&&d.bX?null:_,"%")},y=null!==e&&void 0!==e&&e.loopStop?e.mediaUrl:e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,c.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:b,ref:this.videoRef,children:(0,c.jsx)(r(),{className:"".concat(t," video").concat(e.id),url:l(y,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":s,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%"),poster:e.postFileNew}},file:{attributes:{preload:"metadata",poster:e.postFileNew}}},loop:!(d.bX&&!d.aL&&null!==e&&void 0!==e&&e.loopStop),onError:t=>{!d.P2||e.stories&&0!=e.stories||(0,n.ib)(t,e.id),v&&h&&setTimeout((()=>{h()}),1e3*m)},autoPlay:d.bX?w:a,muted:p,volume:a?1:0,playsinline:!0,onReady:t=>{d.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:d.ig||d.bX?w:a,height:"100%",width:"100%",controls:i||!1,style:{backgroundImage:"url(".concat(v?f.large:f.small,")"),backgroundSize:o?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})})}}const p=(0,o.memo)(h)},25810:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var o=s(47313),i=s(35179),a=s(46417);const r=o.lazy((()=>s.e(5867).then(s.bind(s,95867))));class n extends o.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,isDefault:n,Personalization:d}=this.props,c=!!n&&(7!==t.id&&4!==t.id&&36!==t.id),l=i.ZQ&&36==t.id?"tagembed":t.icon;return c?(0,a.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(l.replace(/fa-/g,"")),children:(0,a.jsx)("div",{})}):(0,a.jsxs)(o.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:[" ",(0,a.jsx)(r,{network:t,networkClass:e})]})}}},55790:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var o=s(47313),i=s(17739),a=s(46417);const r=t=>{const{postTime:e,timeClass:s}=t;return(0,a.jsx)("div",{className:s,children:(0,i.Sy)(e)})},n=(0,o.memo)(r)},9159:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>w});var o=s(47313),i=s(11774),a=s(43411),r=s(84261),n=s(64442),d=s(35179),c=s(46417);const l=t=>{let{itemData:e,wallID:s,ownerId:o,wall:i,autoVPlay:a,handleVideoEnded:l}=t;const h=!(3!==e.type&&5!==e.type||1!=i.ThemeRule.autoPlay&&!d.ZQ||!a);return(0,c.jsx)("div",{className:"tb_stt_media_wrap",children:h?(0,c.jsx)(n.Z,{VideoClass:"tb_stt_video",data:e,wallID:s,themeID:i.Personalization.widgetTheme,ownerId:o,size:1,controls:!1,autoPlay:!(!d.ZQ||!a)||!!h&&a,handleVideoEnded:l,muted:!0,isCover:!0}):(0,c.jsx)(r.default,{ImageClass:"tb_stt_image",data:e,wallID:s,themeID:i.Personalization.widgetTheme,ownerId:o,size:1})})};var h=s(89239),p=s(25810);s(55790);const u=t=>{let{author:e,personalization:s,postTime:o,network:i,ThemeRule:a,font:r}=t;const n=e.username&&e.username.length>0?"@".concat(e.username):"",l={color:a.authorColor,fontFamily:a.css_font},u={color:a.authorColor,fontSize:a.fontSize,fontFamily:a.css_font},m=(a.authorColor,!(!s.postAuthor||e.isInstaUser));!s.postAuthor||s.postTime;return(0,c.jsxs)("div",{className:"tb_stt_content_wrap",children:[d.ZQ?null:(0,c.jsx)("div",{className:"tb_stt_author_img",children:m?(0,c.jsx)(h.default,{author:e,network:i,authorClass:"tb_stt_author_img_00"}):" "}),(0,c.jsxs)("div",{className:"tb_stt_author_info",children:[(0,c.jsx)(p.default,{networkClass:"tb_stt_social_ico",network:i,isDefault:1===a.iconType,ThemeRule:a}),(0,c.jsxs)("div",{className:"tb_stt_author_001",children:[0===a.hideContent?(0,c.jsx)("div",{className:"tb_stt_hashtag tb-cTBfont-".concat(a.font_varient),style:d.ZQ?null:u,children:n}):"",m?(0,c.jsx)("div",{className:"tb_stt_author_name",style:d.ZQ?null:l,children:e.name}):""]})]})]})};var m=s(7138);const _=t=>{let{itemData:e,personalization:s,adjustWidth:o,ThemeRule:i,wallID:a,ownerId:r,wall:n,onClickToCTA:h,autoPlay:p,handleVideoEnded:_}=t;const g={width:"".concat(o,"%")},w=1!==e.type,f=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status);return(0,c.jsx)("div",{id:"tb-stt-post-".concat(e.id),className:"tb_stt_post_wrapper",style:g,"tb-network":e.network.icon,children:(0,c.jsxs)("div",{className:"tb_stt_card_wrapper",children:[w?(0,c.jsx)("div",{className:"tb_stt_media_img",children:(0,c.jsx)(l,{itemData:e,wallID:a,wall:n,ownerId:r,autoVPlay:p,handleVideoEnded:_})}):"",(0,c.jsx)("div",{className:"tb_stt_card_wrapper_00",children:(0,c.jsxs)("div",{className:"tb_stt_card_content_0",children:[f&&d.ZQ?(0,c.jsxs)("div",{className:"tb_stt_post_cta",children:[(0,c.jsx)(m.Z,{ctaClass:"tb_stt_post_cta_btn",cta:e.cta,item:e,onClickToCTA:h})," "]}):"",(0,c.jsx)(u,{ownerId:r,postTime:e.createdAt,author:e.author,network:e.network,font:e.font,personalization:s,ThemeRule:i})]})})]})})};s(37210);class g extends o.PureComponent{constructor(t){super(t),this.state={arrowWidth:0,currentIndex:0},this.onResponsiveCardItem=()=>{const t=document.querySelector(".splide__slide.is-active");if(t){const e=t.clientWidth+.1*t.clientWidth;this.setState({arrowWidth:e})}},this.handleVideoEnded=()=>{const{postData:t}=this.props,{currentIndex:e}=this.state,s=e+1;s<t.length&&this.secondaryRef.current&&this.secondaryRef.current&&this.secondaryRef.current.splide.go(s)},this.secondaryRef=o.createRef()}componentDidMount(){this.onResponsiveCardItem(),window.addEventListener("resize",(()=>this.onResponsiveCardItem())),setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((t,e)=>{t.removeAttribute("role")}))}),100);const{postData:t,completeDataObject:e,onClickPopUpSlider:s,wall:o}=this.props;this.secondaryRef.current&&this.secondaryRef.current.slides.length>0&&this.secondaryRef.current.slides.map(((i,a)=>{if(i.classList){const a=String(i.classList.value).split(" ").filter((t=>String(t).includes("tb_")));var r=a[0];String(a[0]).includes("tb_")&&(r=String(a[0]).replace("tb_",""));const n=t.findIndex((t=>t==r));document.querySelector(".tb_stt_post_container #".concat(i.id)).addEventListener("click",(t=>{t.preventDefault();const i=e[r];56!=o.Personalization.widgetTheme&&d.ZQ||s(n,i)}))}}))}render(){var t;const{completeDataObject:e,wall:s,onClickToCTA:o,modalPop:a}=this.props,{arrowWidth:r,currentIndex:n}=this.state;let l=this.props.postData;l&&l.length>0&&(l=1==l.length?[...l,...l,...l,...l]:2==l.length?[...l,...l]:this.props.postData);const h=s.ThemeRule.numberOfCoumn,p=s.ThemeRule.mobileColumn,u=s.ThemeRule.slidePost,m=s.ThemeRule.slideDuration,g=s.Personalization.autoScrollStatus,w=d.ZQ&&void 0!==(null===(t=s.Personalization)||void 0===t?void 0:t.clonePost)&&0===s.Personalization.clonePost?{clones:0}:{},f=1!=g?!(Object.keys(w).length>0)&&"loop":"loop",v={...w,type:f,rewind:!1,speed:1e3,interval:1===u?1e3*parseInt(m):5e3,perPage:h>0?h:7,perMove:1,gap:0,cloneStatus:!1,autoplay:1===u,padding:"0",pagination:!1,arrows:!0,focus:"center",start:127183==s.Wall.owner?0:2,breakpoints:{560:{perPage:p>0?p:1,start:127183==s.Wall.owner?0:2},767:{perPage:p>0?p:3,start:127183==s.Wall.owner?0:2},991:{perPage:p>0?p:3,start:2},1200:{perPage:h>0?h:5,start:127183==s.Wall.owner?0:2},1400:{perPage:h>0?h:5,start:127183==s.Wall.owner?0:2},1600:{perPage:h>0?h:5,start:127183==s.Wall.owner?0:2}},updateOnMove:!0},b=1===v.breakpoints[560].perPage?"tb_stt_center_mode560":"",y=1===v.breakpoints[767].perPage?"tb_stt_center_mode767":"",x=1===v.breakpoints[991].perPage?"tb_stt_center_mode991":"";if(d.ZQ&&1===u){var I=this.secondaryRef&&this.secondaryRef.current?this.secondaryRef.current.splide.Components.Autoplay:null;a.isShowPopUp&&I?I.pause():I&&I.play()}return(0,c.jsx)("div",{className:"tb_stt_post_container",children:(0,c.jsxs)(i.tv,{hasTrack:!1,className:"tb_stt_post_slider ".concat(d.ZQ?"tb_stt_triple_slider":""," ").concat(b," ").concat(y," ").concat(x),options:v,ref:this.secondaryRef,onActive:(t,e,s)=>this.setState({currentIndex:e.index}),children:[(0,c.jsx)(i.Gj,{children:l&&l.length>0&&l.map(((t,a)=>{const r=e[t];return(0,c.jsx)(i.jw,{style:{margin:0,padding:0},"data-index":a,className:"tb_".concat(r.id),children:(0,c.jsx)(_,{ownerId:s.Wall.owner,itemData:r,autoPlay:n==a,itemIndex:a,personalization:s.Personalization,ThemeRule:s.ThemeRule,wallID:s.Wall.id,onClickToCTA:o,wall:s,handleVideoEnded:this.handleVideoEnded})},a)}))}),(0,c.jsx)("div",{className:"splide__arrows splide__arrows--ltr tb_stt_arrow  tb_stt_arrow_left__",onClick:this.onUpdateData,style:{right:r},children:(0,c.jsx)("div",{className:"splide__arrow splide__arrow--prev tb__icon tb-arrow-left-alt",children:" "})}),(0,c.jsx)("div",{className:"splide__arrows splide__arrows--ltr tb_stt_arrow tb_stt_arrow_right__",style:{left:r},children:(0,c.jsx)("div",{className:"splide__arrow splide__arrow--next tb__icon tb-arrow-right-alt",children:" "})})]})})}}const w=(0,a.$j)((t=>({modalPop:t.modalPop})))(g)},61729:(t,e,s)=>{"use strict";var o=s(79165);function i(){}function a(){}a.resetWarningCache=i,t.exports=function(){function t(t,e,s,i,a,r){if(r!==o){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}function e(){return t}t.isRequired=t;var s={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:i};return s.PropTypes=s,s}},75192:(t,e,s)=>{t.exports=s(61729)()},79165:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2406:(t,e,s)=>{"use strict";e.Ad=void 0;var o=s(84228);var i=s(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return i.getImageSize}});var a=s(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,s)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const o=s(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((s,i)=>{if("undefined"===typeof window)return i(o.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return i(o.ErrorMessage.URL_IS_NOT_DEFINED);let a=null;const r=new Image;r.addEventListener("load",(()=>{a&&window.clearTimeout(a),s({width:r.naturalWidth,height:r.naturalHeight})})),r.addEventListener("error",(t=>{a&&window.clearTimeout(a),i("".concat(t.type,": ").concat(t.message))})),r.src=t,e.timeout&&(a=window.setTimeout((()=>i(o.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,s){"use strict";var o=this&&this.__awaiter||function(t,e,s,o){return new(s||(s=Promise))((function(i,a){function r(t){try{d(o.next(t))}catch(e){a(e)}}function n(t){try{d(o.throw(t))}catch(e){a(e)}}function d(t){var e;t.done?i(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(r,n)}d((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const i=s(47313),a=s(65786);e.useImageSize=(t,e)=>{const[s,r]=(0,i.useState)(null),[n,d]=(0,i.useState)(!1),[c,l]=(0,i.useState)(null);return(0,i.useEffect)((()=>{o(void 0,void 0,void 0,(function*(){d(!0),r(null);try{const{width:s,height:o}=yield(0,a.getImageSize)(t,e);r({width:s,height:o})}catch(c){l(c.toString())}finally{d(!1)}}))}),[t,e]),[s,{loading:n,error:c}]}},37210:()=>{}}]);