(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7709,4261,8342,9239,5790,5810],{20678:(t,e,s)=>{"use strict";s.d(e,{Z:()=>u});var i,a,o=s(47313),n=s(35179),r=s(46417),c=!1,l=0,d=0,_=0;const h=t=>{var e;return null!==(e={80:60,70:40,50:30,30:20,20:10}[t])&&void 0!==e?e:20};class p extends o.Component{constructor(){var t;super(...arguments),t=this,this.state={slideWall:0},this.scrollDiv_init=t=>{const{slideWall:e}=this.state,{parentId:s}=this.props;e||(a=document.getElementById(s),63==t&&(c=!1),(a||{}).scrollTop=0,l=0,this.onScrollData(),this.onScrollWPosts())},this.onScrollData=()=>{const{wall:t}=this.props,e=t.Personalization.scrollDelay;if(e){const t=h(e);_=setInterval(this.scrollDiv,t)}},this.onScrollWPosts=()=>{const{themeHeight:t,wall:e,renderID:s,parentId:i}=this.props,a=document.getElementById(i),o=document.getElementById(s);var r=document.querySelector(".tb_theme_container");if(r=window.getComputedStyle(r).getPropertyValue("height"),o)if(window.innerHeight>o.clientHeight)o.style="position: relative; margin-bottom: ".concat(window.innerHeight,"px; min-height: ").concat(o.clientHeight,"px");else{t&&n.bX&&window.editor;a.style="height:".concat(r)}},this.scrollDiv=()=>{const{themeId:t}=this.props.wall.ThemeRule;_&&clearInterval(_);const e=a||{};c?63===t?(e.scrollTop=l--,c=!c||0!==e.scrollTop):(e.scrollTop=l=0,c=!1):(e.scrollTop=l++,c=e.scrollTop>=e.scrollHeight-e.offsetHeight-300),this.onScrollData()},this.pauseDiv=()=>{clearInterval(_),clearTimeout(i),i=setTimeout(this.resumeDiv,5e3)},this.resumeDiv=()=>{var t;const{wall:e,renderID:s}=this.props;a=document.getElementById(s),l=(null===(t=a)||void 0===t?void 0:t.scrollTop)||0,_=setInterval(this.scrollDiv,h(e.Personalization.scrollDelay))},this.clearData=()=>this.clearTime(),this.clearTime=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;t.setState({slideWall:e?0:1}),clearInterval(_),_=0,clearTimeout(i),clearTimeout(d),c=!1,l=0}}componentDidMount(){if(!n.aL){const{wall:t}=this.props;window.clearData=this.clearData;const e=document.querySelector(".tb_app_container");null===e||void 0===e||e.addEventListener("wheel",(t=>t.preventDefault()),{passive:!1}),d=setTimeout((()=>this.scrollDiv_init(t.ThemeRule.themeId)),1e3)}}componentDidUpdate(t,e){const{postData:s,wall:i}=t,{ThemeRule:a}=this.props.wall;a.themeId!==i.ThemeRule.themeId&&(c=!1,l=0),s!==this.props.postData&&(this.clearTime(1),this.scrollDiv_init(a.themeId))}componentWillUnmount(){this.clearTime()}render(){return(0,r.jsx)(r.Fragment,{children:{...this.props.children}})}}const u=(0,o.memo)(p)},89239:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var i=s(47313),a=s(17739),o=s(98935),n=s(46417);class r extends i.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:s}=this.props;return(0,n.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,a.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,n.jsx)(o.Z,{authorClass:e,username:t.name,network:s,color:null===s.id?"#000":s.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});var i=s(47313),a=s(46417);const o=t=>{let{username:e,network:s,authorClass:i,errorPic:o}=t;const n="#ffffff"==s.color?"#000":s.color;return(0,a.jsx)("img",{className:"".concat(i,"__"),src:o||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":n).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},n=(0,i.memo)(o)},7138:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});var i=s(47313),a=s(46417);class o extends i.PureComponent{render(){const{cta:t,ctaClass:e,postCta:s,onClickToCTA:i,item:o}=this.props,n=!(!s||1!==s.status);return(0,a.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),i(o),window.open("".concat(n?s.url:t.url),"_blank")},children:[" ",n?s.text:t.text]})}}const n=o},97915:(t,e,s)=>{"use strict";s.d(e,{Z:()=>h});var i=s(47313),a=s(43411),o=s(83773),n=s(6119),r=s(17739),c=s(46417);const l=(0,o.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),d=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,s=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",i=t.product_price>0||t.product_discount>0?"".concat(s,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(i,"\n        </a>")};class _ extends i.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:s}=this.state,i=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return i.status?(0,c.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const a=(0,r.i1)();return(0,c.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(a),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(s==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,c.jsx)("div",{className:"tb_hotspot__ ".concat(0==i.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,c.jsx)(l,{children:(0,c.jsx)(n.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(a),clickable:!0,html:d(t.UgcProduct)})})]},e)}))}):null}}const h=(0,a.$j)((t=>({appData:t.appData})))(_)},84261:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>_});var i=s(47313),a=s(40475),o=s(97915),n=s(2406),r=s(17739),c=s(98501),l=s(35179),d=s(46417);class _ extends i.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const s=document.querySelector(".track".concat(this.props.data.id));s&&(s.setAttribute("data-height",e),s.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:s}=await(0,n.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t,size:{height:parseInt(s),width:parseInt(t)}})}catch(s){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgSize:{...this.state.imgSize,small:t.target.src}});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(s){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,imgSize:{small:t.data.postFileNew,large:t.data.filename,orignal:t.data.file},size:{height:100,width:100}}}componentWillMount(){const{data:t,hotspot:e,size:s}=this.props;t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:s})}componentDidMount(){const{data:t,hotspot:e,size:s}=this.props;!s||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:s})}render(){const{ImageClass:t,data:e,wallID:s,themeID:i,ownerId:n,hotspot:_}=this.props,{imgUrl:h,paddingBottom:p,size:u,fixedPaddingBottom:m,imgSize:g,noPadding:b}=this.state,w={paddingBottom:"".concat(this.props.size?1==this.props.size?null:m:p,"%")},v={backgroundImage:"url(".concat(g.small,")")};if(u.width>u.height)var x="100%",f="".concat(u.height/u.width*100,"%");else f="100%",x="".concat(u.width/u.height*100,"%");const j=!!(e.hotspot&&e.ugc_products.length>0&&_),y={width:j&&this.props.size?x:null,height:j&&this.props.size?f:null};return(0,d.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:w,children:[j?(0,d.jsx)("div",{className:"tb_blur_bg_",style:v}):null,(0,d.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:y,children:[j?(0,d.jsx)(o.Z,{product:e.ugc_products}):null,(0,d.jsx)("img",{className:"".concat(t," track").concat(e.id),role:"img",src:g.small,srcSet:l.bX&&b?"".concat(g.large,", 991w ").concat(g.small,", 480w"):null,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":s,"data-owner-id":n,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":i,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(c.do,"/media/images/no-image.svg"),(0,a.ht)(t)},alt:(0,r.P)(h)})]})]})}}},64442:(t,e,s)=>{"use strict";s.d(e,{Z:()=>_});var i=s(47313),a=s(2406),o=s(20510),n=s.n(o),r=s(40475),c=s(35179),l=(s(17739),s(46417));const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class _ extends i.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:s}=await(0,a.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=i.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(s){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:s,isCover:i,controls:a,autoPlay:o,handleVideoEnded:_,muted:h,themeID:p}=this.props,{paddingBottom:u,videoLoaded:m,isVisible:g}=this.state,b={small:e.postFileNew,large:e.filename,orignal:e.file},w=[74,76,77].includes(p),v={paddingBottom:"".concat(w&&c.bX?null:u,"%")},x=null!==e&&void 0!==e&&e.loopStop?e.mediaUrl:e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:v,ref:this.videoRef,children:(0,l.jsx)(n(),{className:"".concat(t," video").concat(e.id),url:d(x,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":s,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata"}}},loop:!(c.bX&&!c.aL&&null!==e&&void 0!==e&&e.loopStop),onError:t=>{e.stories&&0!=e.stories||(0,r.ib)(t,e.id)},autoPlay:o,muted:h,volume:o?1:0,playsinline:!0,onReady:t=>{c.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:c.ig?g:o,height:"100%",width:"100%",controls:a||!1,style:{backgroundImage:"url(".concat(w?b.large:b.small,")"),backgroundSize:i?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:_||null})})}}},25810:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var i=s(47313),a=s(35179),o=s(46417);const n=i.lazy((()=>s.e(5867).then(s.bind(s,95867))));class r extends i.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,isDefault:r,Personalization:c}=this.props,l=!!r&&(7!==t.id&&4!==t.id&&36!==t.id),d=a.ZQ&&36==t.id?"tagembed":t.icon;return l?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,o.jsx)("div",{})}):(0,o.jsxs)(i.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(n,{network:t,networkClass:e})]})}}},62245:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var i=s(47313),a=s(16390),o=s(17739),n=s(35179),r=s(46417);const c=i.lazy((()=>Promise.all([s.e(622),s.e(584)]).then(s.bind(s,30584))));class l extends i.PureComponent{constructor(t){super(t),this.contentRef=i.createRef()}componentDidMount(){setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:s,font:l,personalization:d,item:_,contentTitle:h,readMore:p,maxLength:u,textAlign:m,maxLines:g,isReadMore:b}=this.props,w={WebkitLineClamp:g,textAlign:s.textAlignment};let v=20==_.network.id||n.bX&&!n.aL?e:(0,o.Fx)(e);12==_.network.id&&(v=(0,a.ZP)(v));const x="".concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):""),f="".concat(t," ").concat(b?"":x);return(0,r.jsxs)("div",{className:f,ref:this.contentRef,style:w,children:[h?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,a.ZP)(h)}):null,(0,r.jsxs)(i.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[" ",(0,r.jsx)(c,{data:_,content:v,Personalization:d})]})]})}}},90905:(t,e,s)=>{"use strict";s.d(e,{Z:()=>c});var i=s(47313),a=s(35179),o=s(46417);const n=t=>{let{network:e}=t;const s={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:i,color:n}=s[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,o.jsx)("div",{className:i,style:{color:n},"tb-network":e.id,children:(0,o.jsx)("div",{})})},r=t=>{let{ThemeID:e}=t;const{className:s,color:i}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,o.jsx)("div",{className:s,style:{color:i},"tb-network":e})};class c extends i.PureComponent{render(){const{rating:t,network:e,ThemeID:s}=this.props;return(0,o.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,i)=>s?(0,o.jsx)(r,{ThemeID:s},i):(0,o.jsx)(n,{network:e},i))):null})}}},55790:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var i=s(47313),a=s(17739),o=s(46417);const n=t=>{const{postTime:e,timeClass:s}=t;return(0,o.jsx)("div",{className:s,children:(0,a.Sy)(e)})},r=(0,i.memo)(n)},50926:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>I});var i=s(47313),a=s(61395),o=s.n(a),n=s(35179),r=s(89239),c=s(55790),l=s(25810),d=s(46417);const _=t=>{let{author:e,personalization:s,postTime:i,network:a,ThemeRule:o,font:n}=t;const _=e.username&&e.username.length>0?"@".concat(e.username):"",h=!(!s.postAuthor||e.isInstaUser),p=!(!s.postAuthor||!s.postTime||e.isInstaUser),u=!!o.socialAction;return(0,d.jsxs)("div",{className:"tb_g_s_author_wrapper",children:[(0,d.jsxs)("div",{className:"tb_g_s_author",children:[h?(0,d.jsx)(r.default,{author:e,network:a,authorClass:"tb_g_s_author_profile"}):"",(0,d.jsxs)("div",{className:"tb_g_s_author_info",children:[h?(0,d.jsx)("div",{className:"tb_g_s_authorname",children:e.name}):"",(0,d.jsxs)("div",{className:"tb_g_s_post_info",children:[h?(0,d.jsx)("div",{className:"tb_g_s_username",children:_}):"",p?(0,d.jsx)("div",{className:"tb_g_s_seprator",children:" "}):"",s.postTime?(0,d.jsx)(c.default,{postTime:i,timeClass:"tb_g_s_time tb-cTBfont-".concat(o.font_varient),authorColor:o.authorColor}):""]})]})]}),u?(0,d.jsx)("div",{className:"tb_g_s_social_",children:(0,d.jsx)(l.default,{networkClass:"tb_g_s_social_ico",network:a,ThemeRule:o,isDefault:1===o.iconType})}):""]})};var h=s(84261),p=s(64442);const u=i.lazy((()=>s.e(695).then(s.bind(s,10695)))),m=t=>{let{itemData:e,wallID:s,ownerId:a,wall:o}=t;const r=!(!n.ZQ||3!==e.type&&5!==e.type||o.Personalization.mobilePopup||o.Personalization.postFeatured),c=(3===e.type||5===e.type)&&1==o.ThemeRule.autoPlay,l=n.ZQ?!!o.ThemeRule.aspectImageRatio&&o.ThemeRule.aspectImageRatio:!!n.bX&&100;return(0,d.jsxs)("div",{className:"tb_g_s_media_wrap",children:[n.aL&&o.Personalization.interactive?(0,d.jsx)(i.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(u,{postId:e.id,wallID:s,UserDetail:o.UserDetail})}):null,c||r?(0,d.jsx)(p.Z,{VideoClass:"tb_g_s_video",data:e,wallID:s,themeID:o.Personalization.widgetTheme,ownerId:a,size:l,isCover:!0,controls:!1,autoPlay:!0,muted:!0}):(0,d.jsx)(h.default,{ImageClass:"tb_g_s_image",data:e,wallID:s,themeID:o.Personalization.widgetTheme,ownerId:a,size:l,ThemeRule:o.ThemeRule})]})};var g=s(62245),b=s(7138),w=s(90905),v=s(17739);const x=t=>{let{itemData:e,ThemeRule:s}=t;const i=(t,e)=>{t.stopPropagation(),e()},a={color:s.fontColor},o=e.network.id,r=3===o||10===o?"like":"heart",c=1===o?"reply":"comment",l=!(!e.share.status||[29,1,3,4,7,8,10,11].includes(o)),_=!![1,2,3,7,8,9,10,18,19,23,26,29,30].includes(o),h=![29,11,19,23,26,29,30].includes(o),p=![12,15,20,21,29,11,19,23,26,29,30].includes(o);return(0,d.jsx)(d.Fragment,{children:_&&s.socialAction||e.share.status?(0,d.jsxs)("div",{className:"tb_g_s_social_actions_ ".concat(l?"tb_g_s_social_share_only__":"tb_g_s_social_actions_only__"),style:s.socialAction&&p?null:{justifyContent:"flex-end"},children:[s.socialAction?(0,d.jsx)(d.Fragment,{children:p?(0,d.jsxs)(d.Fragment,{children:[_?(0,d.jsx)("div",{className:"tb_g_s_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>i(t,(()=>window.open(((t,e,s)=>1===t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,v.ok)(e)):s)(o,e.postId,e.link),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_g_s_social_action_ico__ tb__icon tb-".concat(r),style:a,children:" "}),(0,d.jsx)("div",{className:"tb_g_s_social_action_counts__",style:a,children:n.ZQ?e.like_count:"Like"})]})}):null,h?(0,d.jsx)("div",{className:"tb_g_s_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>i(t,(()=>window.open(((t,e,s)=>1===t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,v.ok)(e)):s)(o,e.postId,e.link),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_g_s_social_action_ico__ tb__icon tb-".concat(c),style:a,children:" "}),(0,d.jsx)("div",{className:"tb_g_s_social_action_counts__",style:a,children:n.ZQ?e.comment_count:1===o?"Reply":"Comment"})]})}):null,1===o?(0,d.jsx)("div",{className:"tb_g_s_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>i(t,(()=>window.open("https://twitter.com/intent/retweet?tweet_id=".concat((0,v.ok)(e.postId)),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_g_s_social_action_ico__ tb__icon tb-retweet",style:a,children:" "}),(0,d.jsx)("div",{className:"tb_g_s_social_action_counts__",style:a,children:"Retweet"})]})}):"",l?(0,d.jsx)("div",{className:"tb_g_s_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>i(t,(()=>window.open(e.link,"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_g_s_social_action_ico__ tb__icon tb-eye",style:a,children:" "}),(0,d.jsx)("div",{className:"tb_g_s_social_action_counts__",style:a,children:"View"})]})}):""]}):""}):"",e.share.status?(0,d.jsxs)("div",{className:"tb_g_s_action_counts_wrap".concat(s.socialAction?"":" tb_g_s_action_share_wrap"),children:[(0,d.jsx)("div",{className:"tb_g_s_action_ico tb__icon tb-share",style:a,children:" "}),(0,d.jsx)("div",{className:"tb_g_s_action_counts",style:a,children:"Share"}),(0,d.jsx)("div",{className:"tb_g_s_share_wrapper_dropdown",children:(0,d.jsxs)("div",{className:"tb_g_s_share_icon_list",children:[e.share.facebook&&(0,d.jsxs)("div",{onClick:t=>i(t,(()=>window.open(e.share.facebook,"_blank"))),className:"tb_g_s_share_list_in",children:[(0,d.jsx)("div",{className:"tb_g_s_share_ico__ tb__icon tb-facebook",children:" "}),(0,d.jsx)("div",{className:"tb_g_s_share_ico_txt",children:"Facebook"})]}),e.share.twitter&&(0,d.jsxs)("div",{onClick:t=>i(t,(()=>window.open(e.share.twitter,"_blank"))),className:"tb_g_s_share_list_in",children:[(0,d.jsx)("div",{className:"tb_g_s_share_ico__ tb__icon tb-twitter"}),(0,d.jsx)("div",{className:"tb_g_s_share_ico_txt",children:"Twitter"})]}),e.share.linkedin&&(0,d.jsxs)("div",{onClick:t=>i(t,(()=>window.open(e.share.linkedin,"_blank"))),className:"tb_g_s_share_list_in",children:[(0,d.jsx)("div",{className:"tb_g_s_share_ico__ tb__icon tb-linkedin",children:" "}),(0,d.jsx)("div",{className:"tb_g_s_share_ico_txt",children:"LinkedIn"})]})]})})]}):""]}):null})},f=t=>{let{itemData:e,personalization:s,adjustWidth:i,ThemeRule:a,clickToShowPopUp:o,itemIndex:r,wallID:c,ownerId:l,onClickToCTA:h,wall:p}=t;const u=2===e.type||3===e.type||4===e.type||5===e.type,f=e.rating>0,j=e.rating>0?"tb_g_s_rating_content":"tb_g_s_content",y=n.ZQ&&(0,v.mD)(5)?"tb_g_s_rating_content_review":null,k=1===e.type&&s.textDecorate?"tb_g_s_text_decoration tb_g_s_text_post":"",N=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),I=!(!(N||a.socialAction||a.shareOption)||n.bX),D=s.trimcontent?(0,v.Sv)(e.content,50):e.content,T=n.bX?{padding:a.spacing}:null;return(0,d.jsx)("div",{id:"tb-cc-post-".concat(e.id),className:"tb_g_s_post_wrapper",style:{width:"".concat(i,"%"),padding:s.padding/2},"tb-network":e.network.icon,children:(0,d.jsxs)("div",{className:"tb_g_s_post_in",onClick:o(r,e),style:T,children:[n.ZQ||(0,v.mD)(62)||(0,v.mD)(78)||(0,v.mD)(66)?u?(0,d.jsx)("div",{className:"tb_g_s_post_media_wrapp",children:(0,d.jsx)(m,{itemData:e,wallID:c,wall:p,ownerId:l},"img".concat(r,"_").concat(e.id))}):"":null,(0,d.jsxs)("div",{className:"tb_g_s_contant_wrapper",children:[(0,d.jsx)(_,{ownerId:l,postTime:e.createdAt,author:e.author,network:e.network,font:a,personalization:s,ThemeRule:a}),f&&(0,v.mD)(5)?(0,d.jsxs)("div",{className:"tb_g_s_rating__",children:[(0,d.jsx)(w.Z,{rating:e.rating,network:e.network})," "]}):"",a.hideContent&&1!=e.type||(0,v.mD)(63)?"":(0,d.jsx)(g.default,{item:e,contentClass:"".concat(j," ").concat(y," ").concat(k),content:D,font:a,ThemeRule:a,personalization:s,contentTitle:e.contentTitle}),f&&!(0,v.mD)(5)?(0,d.jsxs)("div",{className:"tb_g_s_rating__",children:[(0,d.jsx)(w.Z,{rating:e.rating,network:e.network})," "]}):""]}),n.ZQ||(0,v.mD)(62)||(0,v.mD)(78)||(0,v.mD)(66)?null:u?(0,d.jsx)("div",{className:"tb_g_s_post_media_wrapp",children:(0,d.jsx)(m,{itemData:e,wallID:c,wall:p,ownerId:l},"img".concat(r,"_").concat(e.id))}):"",I||N||a.shareOption?(0,d.jsxs)("div",{className:"tb_g_s_post_actions",children:[N?(0,d.jsxs)("div",{className:"tb_g_s_post_cta",children:[(0,d.jsx)(b.Z,{ctaClass:"tb_g_s_post_cta_btn",cta:e.cta,item:e,onClickToCTA:h})," "]}):"",I?(0,d.jsx)(x,{itemData:e,ThemeRule:a}):""]}):""]})})};var j=s(43411),y=s(40475),k=s(20678);class N extends i.PureComponent{constructor(){super(...arguments),this.state={postData:[],loadData:1},this.onLoadMasonry=()=>this.editorHeight(),this.editorHeight=()=>{var t=document.querySelector(".tb_g_s_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight("".concat(e))}}}}componentDidMount(){const{postData:t}=this.props,e=this;setTimeout((()=>this.setState({postData:t,loadData:1},(()=>this.onLoadMasonry()))),100),window.addEventListener("resize",(function(t){e.editorHeight()}),!0)}componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e,loadData:1},(()=>this.onLoadMasonry()))}render(){const{postData:t,completeDataObject:e,adjustWidth:s,wall:i,languageSetting:a,clickToShowPopUp:n,onClickToCTA:r}=this.props,{loadData:c}=this.state;return(0,d.jsx)(k.Z,{wall:i,parentId:"tb_marquee",renderID:"square",children:(0,d.jsx)("div",{id:"tb_marquee",children:(0,d.jsx)(o(),{id:"square",className:"tb_g_s_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_g_s_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:c?t&&t.length>0&&t.map(((o,c)=>{const l=e[o];return(0,d.jsx)(f,{ownerId:i.Wall.owner,itemData:l,itemIndex:c,adjustWidth:1==l.highlight?2*s:s,personalization:i.Personalization,ThemeRule:i.ThemeRule,completeDataObject:e,postData:t,languageSetting:a,wallID:i.Wall.id,clickToShowPopUp:n,onClickToCTA:r,wall:i},"cls_crd_".concat(c,"_").concat(o.id))})):null})})})}}const I=(0,j.$j)((t=>({postHeight:t.postHeight.data})),(t=>({managePostHeight:e=>t((0,y.B0)(e))})))(N)},2406:(t,e,s)=>{"use strict";e.Ad=void 0;var i=s(84228);var a=s(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return a.getImageSize}});var o=s(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,s)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const i=s(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((s,a)=>{if("undefined"===typeof window)return a(i.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return a(i.ErrorMessage.URL_IS_NOT_DEFINED);let o=null;const n=new Image;n.addEventListener("load",(()=>{o&&window.clearTimeout(o),s({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(t=>{o&&window.clearTimeout(o),a("".concat(t.type,": ").concat(t.message))})),n.src=t,e.timeout&&(o=window.setTimeout((()=>a(i.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,s){"use strict";var i=this&&this.__awaiter||function(t,e,s,i){return new(s||(s=Promise))((function(a,o){function n(t){try{c(i.next(t))}catch(e){o(e)}}function r(t){try{c(i.throw(t))}catch(e){o(e)}}function c(t){var e;t.done?a(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(n,r)}c((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const a=s(47313),o=s(65786);e.useImageSize=(t,e)=>{const[s,n]=(0,a.useState)(null),[r,c]=(0,a.useState)(!1),[l,d]=(0,a.useState)(null);return(0,a.useEffect)((()=>{i(void 0,void 0,void 0,(function*(){c(!0),n(null);try{const{width:s,height:i}=yield(0,o.getImageSize)(t,e);n({width:s,height:i})}catch(l){d(l.toString())}finally{c(!1)}}))}),[t,e]),[s,{loading:r,error:l}]}},50247:()=>{}}]);