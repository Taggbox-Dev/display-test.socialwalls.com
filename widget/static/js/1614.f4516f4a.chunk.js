(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1614,4261,8342,9239,5790],{20678:(t,e,i)=>{"use strict";i.d(e,{Z:()=>u});var s,a,o=i(47313),n=i(35179),c=i(46417),r=!1,l=0,d=0,h=0;const _=t=>{var e;return null!==(e={80:60,70:40,50:30,30:20,20:10}[t])&&void 0!==e?e:20};class p extends o.Component{constructor(){var t;super(...arguments),t=this,this.state={slideWall:0},this.scrollDiv_init=t=>{const{slideWall:e}=this.state,{parentId:i}=this.props;e||(a=document.getElementById(i),63==t&&(r=!1),(a||{}).scrollTop=0,l=0,this.onScrollData(),this.onScrollWPosts())},this.onScrollData=()=>{const{wall:t}=this.props,e=t.Personalization.scrollDelay;if(e){const i=66===t.ThemeRule.themeId?60:_(e);h=setInterval(this.scrollDiv,i)}},this.onScrollWPosts=()=>{const{themeHeight:t,wall:e,renderID:i,parentId:s}=this.props,a=document.getElementById(s),o=document.getElementById(i);var c=document.querySelector(".tb_theme_container");if(c=window.getComputedStyle(c).getPropertyValue("height"),o)if(window.innerHeight>o.clientHeight)o.style="position: relative; margin-bottom: ".concat(window.innerHeight,"px; min-height: ").concat(o.clientHeight,"px");else{t&&n.bX&&window.editor;a.style="height:".concat(c)}},this.scrollDiv=()=>{const{themeId:t}=this.props.wall.ThemeRule;h&&clearInterval(h);const e=a||{};r?63===t?(e.scrollTop=l--,r=!r||0!==e.scrollTop):(e.scrollTop=l=0,r=!1):(e.scrollTop=l++,r=e.scrollTop>=e.scrollHeight-e.offsetHeight-300),this.onScrollData()},this.pauseDiv=()=>{clearInterval(h),clearTimeout(s),s=setTimeout(this.resumeDiv,5e3)},this.resumeDiv=()=>{var t;const{wall:e,renderID:i}=this.props;a=document.getElementById(i),l=(null===(t=a)||void 0===t?void 0:t.scrollTop)||0,h=setInterval(this.scrollDiv,_(e.Personalization.scrollDelay))},this.clearData=()=>this.clearTime(),this.clearTime=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;t.setState({slideWall:e?0:1}),clearInterval(h),h=0,clearTimeout(s),clearTimeout(d),r=!1,l=0}}componentDidMount(){if(!n.aL){const{wall:t}=this.props;window.clearData=this.clearData;const e=document.querySelector(".tb_app_container");null===e||void 0===e||e.addEventListener("wheel",(t=>t.preventDefault()),{passive:!1}),d=setTimeout((()=>this.scrollDiv_init(t.ThemeRule.themeId)),2e3)}}componentDidUpdate(t,e){const{postData:i,wall:s}=t,{ThemeRule:a}=this.props.wall;a.themeId!==s.ThemeRule.themeId&&(r=!1,l=0),i!==this.props.postData&&(this.clearTime(1),this.scrollDiv_init(a.themeId))}componentWillUnmount(){this.clearTime()}render(){return(0,c.jsx)(c.Fragment,{children:{...this.props.children}})}}const u=(0,o.memo)(p)},89239:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>c});var s=i(47313),a=i(17739),o=i(98935),n=i(46417);class c extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:i}=this.props;return(0,n.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,a.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,n.jsx)(o.Z,{authorClass:e,username:t.name,network:i,color:null===i.id?"#000":i.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});var s=i(47313),a=i(46417);const o=t=>{let{username:e,network:i,authorClass:s,errorPic:o}=t;const n="#ffffff"==i.color?"#000":i.color;return(0,a.jsx)("img",{className:"".concat(s,"__"),src:o||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===i.id?"#000":n).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},n=(0,s.memo)(o)},7138:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});var s=i(47313),a=i(46417);class o extends s.PureComponent{render(){const{cta:t,ctaClass:e,postCta:i,onClickToCTA:s,item:o}=this.props,n=!(!i||1!==i.status);return(0,a.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),s(o),window.open("".concat(n?i.url:t.url),"_blank")},children:[" ",n?i.text:t.text]})}}const n=o},97915:(t,e,i)=>{"use strict";i.d(e,{Z:()=>_});var s=i(47313),a=i(43411),o=i(83773),n=i(6119),c=i(17739),r=i(46417);const l=(0,o.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),d=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,i=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",s=t.product_price>0||t.product_discount>0?"".concat(i,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(s,"\n        </a>")};class h extends s.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:i}=this.state,s=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return s.status?(0,r.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const a=(0,c.i1)();return(0,r.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(a),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(i==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,r.jsx)("div",{className:"tb_hotspot__ ".concat(0==s.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,r.jsx)(l,{children:(0,r.jsx)(n.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(a),clickable:!0,html:d(t.UgcProduct)})})]},e)}))}):null}}const _=(0,a.$j)((t=>({appData:t.appData})))(h)},84261:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>h});var s=i(47313),a=i(40475),o=i(97915),n=i(2406),c=i(17739),r=i(98501),l=i(35179),d=i(46417);class h extends s.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const i=document.querySelector(".track".concat(this.props.data.id));i&&(i.setAttribute("data-height",e),i.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:i}=await(0,n.Ad)(e.postFileNew);this.setState({paddingBottom:100*i/t,size:{height:parseInt(i),width:parseInt(t)}})}catch(i){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgSize:{...this.state.imgSize,small:t.target.src}});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(i){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,imgSize:{small:t.data.postFileNew,large:t.data.filename,orignal:t.data.file},size:{height:100,width:100}}}componentWillMount(){const{data:t,hotspot:e,size:i}=this.props;t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:i})}componentDidMount(){const{data:t,hotspot:e,size:i}=this.props;!i||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:i})}render(){const{ImageClass:t,data:e,wallID:i,themeID:s,ownerId:n,hotspot:h}=this.props,{imgUrl:_,paddingBottom:p,size:u,fixedPaddingBottom:m,imgSize:g,noPadding:b}=this.state,w={paddingBottom:"".concat(this.props.size?1==this.props.size?null:m:p,"%")},v={backgroundImage:"url(".concat(g.small,")")};if(u.width>u.height)var x="100%",f="".concat(u.height/u.width*100,"%");else f="100%",x="".concat(u.width/u.height*100,"%");const j=!!(e.hotspot&&e.ugc_products.length>0&&h),y={width:j&&this.props.size?x:null,height:j&&this.props.size?f:null};return(0,d.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:w,children:[j?(0,d.jsx)("div",{className:"tb_blur_bg_",style:v}):null,(0,d.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:y,children:[j?(0,d.jsx)(o.Z,{product:e.ugc_products}):null,(0,d.jsx)("img",{className:"".concat(t," track").concat(e.id),role:"img",src:g.small,srcSet:l.bX&&b?"".concat(g.large,", 991w ").concat(g.small,", 480w"):null,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":i,"data-owner-id":n,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":s,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(r.do,"/media/images/no-image.svg"),(0,a.ht)(t)},alt:(0,c.P)(_)})]})]})}}},64442:(t,e,i)=>{"use strict";i.d(e,{Z:()=>h});var s=i(47313),a=i(2406),o=i(20510),n=i.n(o),c=i(40475),r=i(35179),l=i(46417);const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class h extends s.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:i}=await(0,a.Ad)(e.postFileNew);this.setState({paddingBottom:100*i/t})}catch(i){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=s.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(i){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:i,isCover:s,controls:a,autoPlay:o,handleVideoEnded:h,muted:_,themeID:p}=this.props,{paddingBottom:u,videoLoaded:m,isVisible:g}=this.state,b={small:e.postFileNew,large:e.filename,orignal:e.file},w=[74,76,77].includes(p),v={paddingBottom:"".concat(w&&r.bX?null:u,"%")},x=e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:v,ref:this.videoRef,children:(0,l.jsx)(n(),{className:"".concat(t," video").concat(e.id),url:d(x,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":i,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata"}}},loop:(o&&r.bX,!0),onError:t=>{e.stories&&0!=e.stories||(0,c.ib)(t,e.id)},autoPlay:o,muted:_,volume:o?1:0,playsinline:!0,onReady:t=>{r.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:r.ig?g:o,height:"100%",width:"100%",controls:a||!1,style:{backgroundImage:"url(".concat(w?b.large:b.small,")"),backgroundSize:s?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})})}}},25810:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>c});var s=i(47313),a=i(35179),o=i(46417);const n=s.lazy((()=>i.e(5867).then(i.bind(i,95867))));class c extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:i,isDefault:c,Personalization:r}=this.props,l=!!c&&(7!==t.id&&4!==t.id&&36!==t.id),d=a.ZQ&&36==t.id?"tagembed":t.icon;return l?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,o.jsx)("div",{})}):(0,o.jsxs)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(n,{network:t,networkClass:e})]})}}},62245:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>r});var s=i(47313),a=i(16390),o=i(17739),n=i(46417);const c=s.lazy((()=>Promise.all([i.e(622),i.e(584)]).then(i.bind(i,30584))));class r extends s.PureComponent{constructor(t){super(t),this.contentRef=s.createRef()}componentDidMount(){setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:i,font:r,personalization:l,item:d,contentTitle:h,readMore:_,maxLength:p,textAlign:u,maxLines:m,isReadMore:g}=this.props,b={WebkitLineClamp:m,textAlign:i.textAlignment};let w=20==d.network.id?e:(0,o.Fx)(e);12==d.network.id&&(w=(0,a.ZP)(w));const v="".concat(i.lineTrim?" tb_content_line-".concat(i.lineTrim):""),x="".concat(t," ").concat(g?"":v);return(0,n.jsxs)("div",{className:x,ref:this.contentRef,style:b,children:[h?(0,n.jsx)("div",{className:"tb_bold_txt__",children:(0,a.ZP)(h)}):null,(0,n.jsxs)(s.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(c,{data:d,content:w,Personalization:l})]})]})}}},90905:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});var s=i(47313),a=i(35179),o=i(46417);const n=t=>{let{network:e}=t;const i={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:s,color:n}=i[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,o.jsx)("div",{className:s,style:{color:n},"tb-network":e.id,children:(0,o.jsx)("div",{})})},c=t=>{let{ThemeID:e}=t;const{className:i,color:s}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,o.jsx)("div",{className:i,style:{color:s},"tb-network":e})};class r extends s.PureComponent{render(){const{rating:t,network:e,ThemeID:i}=this.props;return(0,o.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,s)=>i?(0,o.jsx)(c,{ThemeID:i},s):(0,o.jsx)(n,{network:e},s))):null})}}},55790:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>c});var s=i(47313),a=i(17739),o=i(46417);const n=t=>{const{postTime:e,timeClass:i}=t;return(0,o.jsx)("div",{className:i,children:(0,a.Sy)(e)})},c=(0,s.memo)(n)},13395:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>I});var s=i(47313),a=i(61395),o=i.n(a),n=i(35179),c=i(89239),r=i(55790),l=i(25810),d=i(46417);const h=t=>{let{author:e,personalization:i,postTime:s,network:a,ThemeRule:o,font:n}=t;const h=e.username&&e.username.length>0?"@".concat(e.username):"",_=!(!i.postAuthor||e.isInstaUser),p=!(!i.postAuthor||!i.postTime||e.isInstaUser),u=!!o.socialAction;return(0,d.jsxs)("div",{className:"tb_cc_author_wrapper",children:[(0,d.jsxs)("div",{className:"tb_cc_author",children:[_?(0,d.jsx)(c.default,{author:e,network:a,authorClass:"tb_cc_author_profile"}):"",(0,d.jsxs)("div",{className:"tb_cc_author_info",children:[_?(0,d.jsx)("div",{className:"tb_cc_authorname",children:e.name}):"",(0,d.jsxs)("div",{className:"tb_cc_post_info",children:[_?(0,d.jsx)("div",{className:"tb_cc_username",children:h}):"",p?(0,d.jsx)("div",{className:"tb_cc_seprator",children:" "}):"",i.postTime?(0,d.jsx)(r.default,{postTime:s,timeClass:"tb_cc_time tb-cTBfont-".concat(o.font_varient),authorColor:o.authorColor}):""]})]})]}),u?(0,d.jsx)("div",{className:"tb_cc_social_",children:(0,d.jsx)(l.default,{networkClass:"tb_cc_social_ico",network:a,ThemeRule:o,isDefault:1===o.iconType})}):""]})};var _=i(84261),p=i(64442);const u=s.lazy((()=>i.e(695).then(i.bind(i,10695)))),m=t=>{let{itemData:e,wallID:i,ownerId:a,wall:o}=t;const c=!(!n.ZQ||3!==e.type&&5!==e.type||o.Personalization.mobilePopup||o.Personalization.postFeatured),r=(3===e.type||5===e.type)&&1==o.ThemeRule.autoPlay,l=n.ZQ?!!o.ThemeRule.aspectImageRatio&&o.ThemeRule.aspectImageRatio:!!n.bX&&100;return(0,d.jsxs)("div",{className:"tb_cc_media_wrap",children:[n.aL?(0,d.jsx)(s.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(u,{postId:e.id,wallID:i,UserDetail:o.UserDetail})}):null,r||c?(0,d.jsx)(p.Z,{VideoClass:"tb_cc_video",data:e,wallID:i,themeID:o.Personalization.widgetTheme,ownerId:a,size:l,isCover:!0,controls:!1,autoPlay:!0,muted:!0}):(0,d.jsx)(_.default,{ImageClass:"tb_cc_image",data:e,wallID:i,themeID:o.Personalization.widgetTheme,ownerId:a,size:l,ThemeRule:o.ThemeRule})]})};var g=i(62245),b=i(7138),w=i(90905),v=i(17739);const x=t=>{let{itemData:e,ThemeRule:i}=t;const s=(t,e)=>{t.stopPropagation(),e()},a={color:i.fontColor},o=e.network.id,c=3===o||10===o?"like":"heart",r=1===o?"reply":"comment",l=!(!e.share.status||[29,1,3,4,7,8,10,11].includes(o)),h=!![1,2,3,7,8,9,10,18,19,23,26,29,30].includes(o),_=![29,11,19,23,26,29,30].includes(o),p=![12,15,20,21,29,11,19,23,26,29,30].includes(o);return(0,d.jsx)(d.Fragment,{children:h&&i.socialAction||e.share.status?(0,d.jsxs)("div",{className:"tb_cc_social_actions_ ".concat(l?"tb_cc_social_share_only__":"tb_cc_social_actions_only__"),style:i.socialAction&&p?null:{justifyContent:"flex-end"},children:[i.socialAction?(0,d.jsx)(d.Fragment,{children:p?(0,d.jsxs)(d.Fragment,{children:[h?(0,d.jsx)("div",{className:"tb_cc_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>s(t,(()=>window.open(((t,e,i)=>1===t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,v.ok)(e)):i)(o,e.postId,e.link),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_cc_social_action_ico__ tb__icon tb-".concat(c),style:a,children:" "}),(0,d.jsx)("div",{className:"tb_cc_social_action_counts__",style:a,children:n.ZQ?e.like_count:"Like"})]})}):null,_?(0,d.jsx)("div",{className:"tb_cc_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>s(t,(()=>window.open(((t,e,i)=>1===t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,v.ok)(e)):i)(o,e.postId,e.link),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_cc_social_action_ico__ tb__icon tb-".concat(r),style:a,children:" "}),(0,d.jsx)("div",{className:"tb_cc_social_action_counts__",style:a,children:n.ZQ?e.comment_count:1===o?"Reply":"Comment"})]})}):null,1===o?(0,d.jsx)("div",{className:"tb_cc_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>s(t,(()=>window.open("https://twitter.com/intent/retweet?tweet_id=".concat((0,v.ok)(e.postId)),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_cc_social_action_ico__ tb__icon tb-retweet",style:a,children:" "}),(0,d.jsx)("div",{className:"tb_cc_social_action_counts__",style:a,children:"Retweet"})]})}):"",l?(0,d.jsx)("div",{className:"tb_cc_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>s(t,(()=>window.open(e.link,"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_cc_social_action_ico__ tb__icon tb-eye",style:a,children:" "}),(0,d.jsx)("div",{className:"tb_cc_social_action_counts__",style:a,children:"View"})]})}):""]}):""}):"",e.share.status?(0,d.jsxs)("div",{className:"tb_cc_action_counts_wrap".concat(i.socialAction?"":" tb_cc_action_share_wrap"),children:[(0,d.jsx)("div",{className:"tb_cc_action_ico tb__icon tb-share",style:a,children:" "}),(0,d.jsx)("div",{className:"tb_cc_action_counts",style:a,children:"Share"}),(0,d.jsx)("div",{className:"tb_cc_share_wrapper_dropdown",children:(0,d.jsxs)("div",{className:"tb_cc_share_icon_list",children:[e.share.facebook&&(0,d.jsxs)("div",{onClick:t=>s(t,(()=>window.open(e.share.facebook,"_blank"))),className:"tb_cc_share_list_in",children:[(0,d.jsx)("div",{className:"tb_cc_share_ico__ tb__icon tb-facebook",children:" "}),(0,d.jsx)("div",{className:"tb_cc_share_ico_txt",children:"Facebook"})]}),e.share.twitter&&(0,d.jsxs)("div",{onClick:t=>s(t,(()=>window.open(e.share.twitter,"_blank"))),className:"tb_cc_share_list_in",children:[(0,d.jsx)("div",{className:"tb_cc_share_ico__ tb__icon tb-twitter"}),(0,d.jsx)("div",{className:"tb_cc_share_ico_txt",children:"Twitter"})]}),e.share.linkedin&&(0,d.jsxs)("div",{onClick:t=>s(t,(()=>window.open(e.share.linkedin,"_blank"))),className:"tb_cc_share_list_in",children:[(0,d.jsx)("div",{className:"tb_cc_share_ico__ tb__icon tb-linkedin",children:" "}),(0,d.jsx)("div",{className:"tb_cc_share_ico_txt",children:"LinkedIn"})]})]})})]}):""]}):null})},f=t=>{let{itemData:e,personalization:i,adjustWidth:s,ThemeRule:a,clickToShowPopUp:o,itemIndex:c,wallID:r,ownerId:l,onClickToCTA:_,wall:p}=t;const u=2===e.type||3===e.type||4===e.type||5===e.type,f=e.rating>0,j=e.rating>0?"tb_cc_rating_content":"tb_cc_content",y=n.ZQ&&(0,v.mD)(5)?"tb_cc_rating_content_review":null,k=1===e.type&&i.textDecorate?"tb_cc_text_decoration tb_cc_text_post":"",N=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),I=!(!(N||a.socialAction||a.shareOption)||n.bX),D=i.trimcontent?(0,v.Sv)(e.content,80):e.content,T=n.bX?{padding:a.spacing}:null;return(0,d.jsx)("div",{id:"tb-cc-post-".concat(e.id),className:"tb_cc_post_wrapper",style:{width:"".concat(s,"%"),padding:i.padding/2},"tb-network":e.network.icon,children:(0,d.jsxs)("div",{className:"tb_cc_post_in",onClick:o(c,e),style:T,children:[n.ZQ||(0,v.mD)(62)||(0,v.mD)(78)||(0,v.mD)(66)?u?(0,d.jsx)("div",{className:"tb_cc_post_media_wrapp",children:(0,d.jsx)(m,{itemData:e,wallID:r,wall:p,ownerId:l},"img".concat(c,"_").concat(e.id))}):"":null,(0,d.jsxs)("div",{className:"tb_cc_contant_wrapper",children:[(0,d.jsx)(h,{ownerId:l,postTime:e.createdAt,author:e.author,network:e.network,font:a,personalization:i,ThemeRule:a}),f&&(0,v.mD)(5)?(0,d.jsxs)("div",{className:"tb_cc_rating__",children:[(0,d.jsx)(w.Z,{rating:e.rating,network:e.network})," "]}):"",a.hideContent&&1!=e.type||(0,v.mD)(63)?"":(0,d.jsx)(g.default,{item:e,contentClass:"".concat(j," ").concat(y," ").concat(k),content:D,font:a,ThemeRule:a,personalization:i,contentTitle:e.contentTitle}),f&&!(0,v.mD)(5)?(0,d.jsxs)("div",{className:"tb_cc_rating__",children:[(0,d.jsx)(w.Z,{rating:e.rating,network:e.network})," "]}):""]}),n.ZQ||(0,v.mD)(62)||(0,v.mD)(78)||(0,v.mD)(66)?null:u?(0,d.jsx)("div",{className:"tb_cc_post_media_wrapp",children:(0,d.jsx)(m,{itemData:e,wallID:r,wall:p,ownerId:l},"img".concat(c,"_").concat(e.id))}):"",I||N||a.shareOption?(0,d.jsxs)("div",{className:"tb_cc_post_actions",children:[N?(0,d.jsxs)("div",{className:"tb_cc_post_cta",children:[(0,d.jsx)(b.Z,{ctaClass:"tb_cc_post_cta_btn",cta:e.cta,item:e,onClickToCTA:_})," "]}):"",I?(0,d.jsx)(x,{itemData:e,ThemeRule:a}):""]}):""]})})};var j=i(43411),y=i(40475),k=i(20678);class N extends s.PureComponent{constructor(){super(...arguments),this.state={postData:[],loadData:1},this.onLoadMasonry=()=>this.editorHeight(),this.editorHeight=()=>{var t=document.querySelector(".tb_cc_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight("".concat(e))}}}}componentDidMount(){const{postData:t}=this.props,e=this;setTimeout((()=>this.setState({postData:t,loadData:1},(()=>this.onLoadMasonry()))),100),window.addEventListener("resize",(function(t){e.editorHeight()}),!0)}componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e,loadData:1},(()=>this.onLoadMasonry()))}render(){const{postData:t,completeDataObject:e,adjustWidth:i,wall:s,languageSetting:a,clickToShowPopUp:n,onClickToCTA:c}=this.props,{loadData:r}=this.state;return(0,d.jsx)(k.Z,{wall:s,parentId:"tb_marquee",renderID:"square",children:(0,d.jsx)("div",{id:"tb_marquee",children:(0,d.jsx)(o(),{id:"square",className:"tb_cc_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_cc_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:r?t&&t.length>0&&t.map(((o,r)=>{const l=e[o];return(0,d.jsx)(f,{ownerId:s.Wall.owner,itemData:l,itemIndex:r,adjustWidth:1==l.highlight?2*i:i,personalization:s.Personalization,ThemeRule:s.ThemeRule,completeDataObject:e,postData:t,languageSetting:a,wallID:s.Wall.id,clickToShowPopUp:n,onClickToCTA:c,wall:s},"cls_crd_".concat(r,"_").concat(o.id))})):null})})})}}const I=(0,j.$j)((t=>({postHeight:t.postHeight.data})),(t=>({managePostHeight:e=>t((0,y.B0)(e))})))(N)},2406:(t,e,i)=>{"use strict";e.Ad=void 0;var s=i(84228);var a=i(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return a.getImageSize}});var o=i(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,i)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const s=i(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((i,a)=>{if("undefined"===typeof window)return a(s.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return a(s.ErrorMessage.URL_IS_NOT_DEFINED);let o=null;const n=new Image;n.addEventListener("load",(()=>{o&&window.clearTimeout(o),i({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(t=>{o&&window.clearTimeout(o),a("".concat(t.type,": ").concat(t.message))})),n.src=t,e.timeout&&(o=window.setTimeout((()=>a(s.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,i){"use strict";var s=this&&this.__awaiter||function(t,e,i,s){return new(i||(i=Promise))((function(a,o){function n(t){try{r(s.next(t))}catch(e){o(e)}}function c(t){try{r(s.throw(t))}catch(e){o(e)}}function r(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(n,c)}r((s=s.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const a=i(47313),o=i(65786);e.useImageSize=(t,e)=>{const[i,n]=(0,a.useState)(null),[c,r]=(0,a.useState)(!1),[l,d]=(0,a.useState)(null);return(0,a.useEffect)((()=>{s(void 0,void 0,void 0,(function*(){r(!0),n(null);try{const{width:i,height:s}=yield(0,o.getImageSize)(t,e);n({width:i,height:s})}catch(l){d(l.toString())}finally{r(!1)}}))}),[t,e]),[i,{loading:c,error:l}]}},50247:()=>{}}]);