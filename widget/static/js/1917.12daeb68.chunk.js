(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1917,4261,8342,9239,5790,5810],{89239:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var i=s(47313),a=s(17739),o=s(98935),n=s(46417);class r extends i.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){var t;const{author:e,authorClass:s,network:i}=this.props;return(0,n.jsx)("div",{className:s,children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(s,"__"),src:null!==e&&void 0!==e&&e.picture&&String(null===e||void 0===e?void 0:e.picture).includes("author.png")?" ":null===e||void 0===e||null===(t=e.picture)||void 0===t?void 0:t.replace(/[ ]+/g,""),alt:(0,a.P)(null===e||void 0===e?void 0:e.picture),width:44,height:44,onError:t=>{var s,a;const o="#ffffff"==i.color?"#000":i.color;t.target.src=e.errorPic?e.errorPic:"https://ui-avatars.com/api/?name=".concat(null===e||void 0===e||null===(s=e.name)||void 0===s?void 0:s.replace(/\s/g,""),"&background=").concat(null===(a=String(null===i.id?"#000":o))||void 0===a?void 0:a.replace("#",""),"&color=fff&length=1"),t.target.alt=e.name}}):(0,n.jsx)(o.Z,{authorClass:s,username:e.name,network:i,color:null===i.id?"#000":i.color,errorPic:e.errorPic})},Math.random())}}},98935:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});var i=s(47313),a=s(46417);const o=t=>{let{username:e,network:s,authorClass:i,errorPic:o}=t;const n="#ffffff"==s.color?"#000":s.color;return(0,a.jsx)("img",{className:"".concat(i,"__"),src:o||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":n).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},n=(0,i.memo)(o)},97915:(t,e,s)=>{"use strict";s.d(e,{Z:()=>p});var i=s(47313),a=s(43411),o=s(83773),n=s(6119),r=s(17739),l=s(46417);const d=(0,o.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),c=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,s=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",i=t.product_price>0||t.product_discount>0?"".concat(s,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(i,"\n        </a>")};class h extends i.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:s}=this.state,i=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return i.status?(0,l.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const a=(0,r.i1)();return(0,l.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(a),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(s==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,l.jsx)("div",{className:"tb_hotspot__ ".concat(0==i.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,l.jsx)(d,{children:(0,l.jsx)(n.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(a),clickable:!0,html:c(t.UgcProduct)})})]},e)}))}):null}}const p=(0,a.$j)((t=>({appData:t.appData})))(h)},84261:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>h});var i=s(47313),a=s(43635),o=s(97915),n=s(2406),r=s(17739),l=s(98501),d=s(35179),c=s(46417);class h extends i.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const s=document.querySelector(".track".concat(this.props.data.id));s&&(s.setAttribute("data-height",e),s.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:s}=await(0,n.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t,size:{height:parseInt(s),width:parseInt(t)}})}catch(s){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgSize:{...this.state.imgSize,small:t.target.src}});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(s){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,imgSize:{small:t.data.postFileNew,large:t.data.filename,orignal:t.data.file},size:{height:100,width:100},isVisible:!1},this.videoRef=i.createRef(),this.observer=null}componentWillMount(){const{data:t,hotspot:e,size:s}=this.props;!s||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:s})}componentDidMount(){const{data:t,hotspot:e,size:s}=this.props;!s||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:s});try{this.observer=new IntersectionObserver((t=>{let[e]=t;e.isIntersecting&&(this.setState({isVisible:e.isIntersecting}),this.observer.disconnect())}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(i){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.observer.disconnect()}render(){const{ImageClass:t,data:e,wallID:s,themeID:i,ownerId:n,hotspot:h}=this.props,{imgUrl:p,paddingBottom:u,size:m,fixedPaddingBottom:_,imgSize:g,noPadding:v,isVisible:b}=this.state,f={paddingBottom:"".concat(this.props.size?1==this.props.size?null:_:u,"%")},w={backgroundImage:"url(".concat(g.small,")")};if(m.width>m.height)var x="100%",y="".concat(m.height/m.width*100,"%");else y="100%",x="".concat(m.width/m.height*100,"%");const I=!!(e.hotspot&&e.ugc_products.length>0&&h),j={width:I&&this.props.size?x:null,height:I&&this.props.size?y:null};return(0,c.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:f,ref:this.videoRef,children:[I?(0,c.jsx)("div",{className:"tb_blur_bg_",style:w}):null,(0,c.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:j,children:[I?(0,c.jsx)(o.Z,{product:e.ugc_products}):null,(0,c.jsx)("img",{className:"".concat(t," track").concat(e.id),role:"img",src:b?g.small:e.optmizedImg,srcSet:b?d.bX&&v?"".concat(g.large,", 991w ").concat(g.small,", 480w"):null:e.optmizedImg,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":s,"data-owner-id":n,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":i,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(l.do,"/media/images/error/no-image.svg"),(0,a.ht)(t)},alt:(0,r.P)(p)})]})]})}}},64442:(t,e,s)=>{"use strict";s.d(e,{Z:()=>p});var i=s(47313),a=s(2406),o=s(20510),n=s.n(o),r=s(43635),l=s(35179),d=(s(17739),s(46417));const c=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class h extends i.Component{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:s}=await(0,a.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=i.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(s){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:s,isCover:i,controls:a,autoPlay:o,handleVideoEnded:h,muted:p,themeID:u,intervalTime:m}=this.props,{paddingBottom:_,videoLoaded:g,isVisible:v}=this.state,b={small:e.postFileNew,large:e.filename,orignal:e.file},f=[74,76,77].includes(u),w={paddingBottom:"".concat(f&&l.bX?null:_,"%")},x=null!==e&&void 0!==e&&e.loopStop?e.mediaUrl:e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;console.log("dg0",e.mediaClip);const y=new URLSearchParams(window.location.search),I=y.has("editor")&&"1"===y.get("editor")&&y.has("personalize")&&"1"===y.get("personalize")&&y.has("preview")&&"1"===y.get("preview"),j=y.has("embed")&&"true"===y.get("embed");return console.log("dg1",!l.bX||I&&!j?!(l.bX&&I&&!j)&&o:v),console.log("dg2",l.bX&&!(I&&!j)),console.log("dg3",l.bX&&!(I&&j)),(0,d.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:w,ref:this.videoRef,children:(0,d.jsx)(n(),{className:"".concat(t," video").concat(e.id),url:c(x,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":s,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%"),poster:e.postFileNew}},file:{attributes:{preload:"metadata",poster:e.postFileNew}}},loop:!(l.bX&&!l.aL&&null!==e&&void 0!==e&&e.loopStop),onError:t=>{!j||e.stories&&0!=e.stories||(0,r.ib)(t,e.id),f&&h&&setTimeout((()=>{h()}),1e3*m)},autoPlay:!l.bX||I&&!j||null==e.mediaClip?!(l.bX&&I&&!j&&(null==e.mediaClip||""==e.mediaClip))&&o:v,muted:p,volume:o?1:0,playsinline:!0,onReady:t=>{l.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:l.ig||l.bX&&(!I||j)?v:!(l.bX&&I&&!j)&&o,height:"100%",width:"100%",controls:a||!1,style:{backgroundImage:"url(".concat(f?b.large:b.small,")"),backgroundSize:i?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})})}}const p=(0,i.memo)(h)},25810:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var i=s(47313),a=s(35179),o=s(46417);const n=i.lazy((()=>s.e(5867).then(s.bind(s,95867))));class r extends i.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,isDefault:r,Personalization:l}=this.props,d=!!r&&(7!==(null===t||void 0===t?void 0:t.id)&&4!==(null===t||void 0===t?void 0:t.id)&&36!==(null===t||void 0===t?void 0:t.id)),c=a.ZQ&&36==(null===t||void 0===t?void 0:t.id)?"tagembed":null===t||void 0===t?void 0:t.icon;return d?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(null===c||void 0===c?void 0:c.replace(/fa-/g,"")),children:(0,o.jsx)("div",{})}):(0,o.jsxs)(i.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(n,{network:t,networkClass:e})]})}}},62245:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>d});var i=s(47313),a=s(16390),o=s(17739),n=s(35179),r=s(30584),l=s(46417);class d extends i.PureComponent{constructor(t){super(t),this.contentRef=i.createRef()}componentDidMount(){n.ZQ&&setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){var t,e;const{contentClass:s,content:i,ThemeRule:d,font:c,personalization:h,item:p,contentTitle:u,readMore:m,maxLength:_,textAlign:g,maxLines:v,isReadMore:b}=this.props,f={WebkitLineClamp:v,textAlign:d.textAlignment};let w=20==(null===p||void 0===p||null===(t=p.network)||void 0===t?void 0:t.id)||n.bX&&!n.aL?i:(0,o.Fx)(i);12==(null===p||void 0===p||null===(e=p.network)||void 0===e?void 0:e.id)&&(w=(0,a.ZP)(w));const x="".concat(d.lineTrim?" tb_content_line-".concat(d.lineTrim):""),y="".concat(s," ").concat(b?"":x);return(0,l.jsxs)("div",{className:y,ref:this.contentRef,style:f,children:[u?(0,l.jsx)("div",{className:"tb_bold_txt__",children:(0,a.ZP)(u)}):null,(0,l.jsx)(r.Z,{data:p,content:w,Personalization:h,ThemeRule:d})]})}}},30584:(t,e,s)=>{"use strict";s.d(e,{Z:()=>c});var i=s(47313),a=s(91523),o=s(16390),n=s(46417);const r=s(77560),l=(t,e)=>(0,n.jsx)(a.default,{style:e&&[66,70].includes(null===e||void 0===e?void 0:e.themeId)?{width:e.fontSize,height:e.fontSize}:null,children:(0,o.ZP)(t)}),d=t=>{var e;let{data:s,content:i,Personalization:a,ThemeRule:d}=t;const c={color:a.hashtag_color,fontWeight:"bold",backgroundColor:1==a.hashtag_background_status?a.hashtag_background_color:"transparent"};return 20==(null===s||void 0===s||null===(e=s.network)||void 0===e?void 0:e.id)&&window.slackdown?(0,n.jsx)(n.Fragment,{children:1===a.hashtag_highlight&&0===a.hashtag_feed&&0===a.hashtag_all?(0,o.ZP)(i):1===a.hashtag_highlight&&0===a.hashtag_feed&&1===a.hashtag_all?l(window.slackdown.parse(r(i,/#(\w+)/g,((t,e)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:c,children:["#",t]}))),s.slackMember),d):1===a.hashtag_highlight&&1===a.hashtag_feed&&0===a.hashtag_all?l(window.slackdown.parse(r(i,s.hash.hashString,((t,e)=>(0,n.jsx)("div",{className:"tb_text_hashtag",style:c,children:t}))),s.slackMember),d):1===a.hashtag_highlight&&1===a.hashtag_feed&&1===a.hashtag_all?l(window.slackdown.parse(r(i,/#(\w+)/g,((t,e)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:c,children:["#",t]},"".concat(s.id,"_").concat(e)))),s.slackMember),d):l(window.slackdown.parse(i,s.slackMember),d)}):(0,n.jsx)(n.Fragment,{children:1===a.hashtag_highlight&&0===a.hashtag_feed&&0===a.hashtag_all?(0,o.ZP)(i):1===a.hashtag_highlight&&0===a.hashtag_feed&&1===a.hashtag_all?r((0,o.ZP)(i),/#(\w+)/g,((t,e)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:c,children:["#",t]}))):1===a.hashtag_highlight&&1===a.hashtag_feed&&0===a.hashtag_all?r((0,o.ZP)(i),s.hash.hashString,((t,e)=>(0,n.jsx)("strong",{className:"tb_text_hashtag",style:c,children:t}))):1===a.hashtag_highlight&&1===a.hashtag_feed&&1===a.hashtag_all?r((0,o.ZP)(i),/#(\w+)/g,((t,e)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:c,children:["#",t]},"".concat(s.id,"_").concat(e)))):l(i,d)})},c=(0,i.memo)(d)},90905:(t,e,s)=>{"use strict";s.d(e,{Z:()=>l});var i=s(47313),a=s(35179),o=s(46417);const n=t=>{let{network:e}=t;const s={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:i,color:n}=s[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,o.jsx)("div",{className:i,style:{color:n},"tb-network":e.id,children:(0,o.jsx)("div",{})})},r=t=>{let{ThemeID:e}=t;const{className:s,color:i}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,o.jsx)("div",{className:s,style:{color:i},"tb-network":e})};class l extends i.PureComponent{render(){const{rating:t,network:e,ThemeID:s}=this.props;return(0,o.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,i)=>s?(0,o.jsx)(r,{ThemeID:s},i):(0,o.jsx)(n,{network:e},i))):null})}}},55790:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var i=s(47313),a=s(17739),o=s(46417);const n=t=>{const{postTime:e,timeClass:s}=t;return(0,o.jsx)("div",{className:s,children:(0,a.Sy)(e)})},r=(0,i.memo)(n)},5309:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>y});var i=s(47313),a=s(89239),o=s(55790),n=s(46417);class r extends i.PureComponent{render(){const{author:t,personalization:e,postTime:s,network:i}=this.props,r=t.username&&t.username.length>0?"@".concat(t.username):"",l=!(!e.postAuthor||t.isInstaUser),d=!(!e.postAuthor||!e.postTime||t.isInstaUser);return(0,n.jsx)("div",{className:"tb_ss_author_wrapper",children:(0,n.jsxs)("div",{className:"tb_ss_author",children:[l?(0,n.jsx)(a.default,{author:t,authorClass:"tb_ss_author_profile",network:i}):"",(0,n.jsxs)("div",{className:"tb_ss_author_info",children:[l?(0,n.jsx)("div",{className:"tb_ss_authorname",children:t.name}):"",(0,n.jsxs)("div",{className:"tb_ss_post_info",children:[l?(0,n.jsx)("div",{className:"tb_ss_username",children:r}):"",d?(0,n.jsx)("div",{className:"tb_ss_seprator",children:" "}):"",e.postTime?(0,n.jsx)(o.default,{postTime:s,timeClass:"tb_ss_time"}):""]})]})]})})}}var l=s(35179),d=s(84261),c=s(64442);const h=i.lazy((()=>s.e(695).then(s.bind(s,10695)))),p=t=>{let{itemData:e,wallID:s,ownerId:a,wall:o,autoPlay:r,handleVideoEnded:p,intervalTime:u}=t;const m=(3===e.type||5===e.type)&&r;return(0,n.jsxs)("div",{className:"tb_ss_media_wrap",children:[l.aL&&o.Personalization.interactive?(0,n.jsx)(i.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(h,{postId:e.id,wallID:s,UserDetail:o.UserDetail})}):null,m?(0,n.jsx)(c.Z,{VideoClass:"tb_ss_video",data:e,wallID:s,themeID:o.Personalization.widgetTheme,ownerId:a,size:1,isCover:!0,controls:!1,autoPlay:!l.P2,muted:!0,handleVideoEnded:p,intervalTime:u}):(0,n.jsx)(d.default,{ImageClass:"tb_ss_image",data:e,wallID:s,themeID:o.Personalization.widgetTheme,ownerId:a,size:1,ThemeRule:o.ThemeRule})]})};var u=s(62245),m=s(90905),_=s(17739),g=s(25810);s(98501);class v extends i.PureComponent{constructor(t){super(t),this.updateIndex=()=>{const{handleSlideChange:t}=this.props;t()},this.updateHeight=()=>{this.contentRef.current&&this.setState({contentHeight:this.contentRef.current.offsetHeight})},this.state={contentHeight:0},this.contentRef=i.createRef()}componentDidMount(){this.updateHeight();const{currentIndex:t,intervalTime:e,itemIndex:s,itemData:i,personalization:a}=this.props;(t==s&&(2==i.type||4==i.type||3==i.type||5==i.type||1==i.type&&0==a.playFullVideo)||1==i.type&&1==a.playFullVideo)&&(this.intervalId=setTimeout(this.updateIndex,1e3*e)),window.addEventListener("resize",this.updateHeight)}componentWillUnmount(){window.removeEventListener("resize",this.updateHeight),clearInterval(this.intervalId)}componentWillReceiveProps(t){const{itemIndex:e,personalization:s}=this.props;t.currentIndex!=e&&clearInterval(this.intervalId),(t.currentIndex==e&&!l.aL&&(2==t.itemData.type||4==t.itemData.type||(3==t.itemData.type||5==t.itemData.type||1==t.itemData.type)&&0==s.playFullVideo)||1==t.itemData.type&&1==s.playFullVideo)&&(this.intervalId=setTimeout(this.updateIndex,1e3*t.intervalTime))}render(){const{contentHeight:t}=this.state,{itemData:e,personalization:s,ThemeRule:i,wallID:a,ownerId:o,wall:l,autoPlay:d,intervalTime:c}=this.props,h=s.signageTheme,v=!(2!==e.type&&3!==e.type&&4!==e.type&&5!==e.type||!d),b=(2===e.type||4===e.type)&&77==h,f=e.rating>0,w=e.rating>0?"tb_ss_rating_content":"tb_ss_content",x=1===e.type&&s.textDecorate?"tb_ss_text_decoration tb_ss_text_post":"",y=s.trimcontent?(0,_.Sv)(e.content,50):e.content,I=!!i.socialAction,j=!(1==e.type||!i.hideContent||I);console.log("onlyMedia",j);const k={backgroundImage:"url(".concat(e.postFileNew,")")},N=74==h?" tb_mss_t":76==h?" tb_css_t":77==h?" tb_zss_t":"",S=((t-350)/30).toFixed();return(0,n.jsxs)("div",{id:"tb-ss-post-".concat(e.id),className:"tb_ss_post_wrapper".concat(N),"tb-network":e.network.icon,children:[74==h?(0,n.jsx)("div",{className:"tb_ss_blur_bg",style:k,children:(0,n.jsx)("div",{})}):76==h?(0,n.jsx)("div",{className:"tb_ss_bg_color","data-network":e.network.id,style:{},children:(0,n.jsx)("div",{})}):null,(0,n.jsx)("div",{className:"tb_ss_post_article".concat(77==h?" tb_ss_post_article_full":"").concat(1===e.type?" tb_ss_text_article":"").concat(j?" tb_ss_media_article":""),children:(0,n.jsxs)("div",{className:"tb_ss_post_in",children:[v?(0,n.jsx)("div",{className:"tb_ss_post_media_wrapp ".concat(b?" tb_ss_post_animated_media":""),children:(0,n.jsx)(p,{itemData:{...e,postFileNew:e.filename,loopStop:1==s.playFullVideo},wallID:a,ownerId:o,ThemeRule:i,wall:l,autoPlay:!0,handleVideoEnded:1==s.playFullVideo?this.updateIndex:{},intervalTime:c})}):"",j?"":(0,n.jsx)("div",{className:"tb_ss_contant_wrapper",ref:this.contentRef,children:(0,n.jsxs)("div",{className:"tb_ss_contant_wrap_in",children:[I?(0,n.jsx)("div",{className:"tb_ss_social_",children:(0,n.jsx)(g.default,{networkClass:"tb_ss_social_ico",network:e.network,isDefault:1===i.iconType,ThemeRule:i})}):"",f?(0,n.jsx)("div",{className:"tb_ss_rating_ _",children:(0,n.jsx)(m.Z,{rating:e.rating,network:e.network})}):"",i.hideContent?"":(0,n.jsx)(u.default,{contentClass:"".concat(w," ").concat(x),item:e,content:y,font:e.font,maxLines:S,ThemeRule:i,personalization:s,contentTitle:e.contentTitle}),(0,n.jsx)(r,{postTime:e.createdAt,author:e.author,network:e.network,font:e.font,personalization:s,ThemeRule:i})]})})]})})]})}}var b=s(43411),f=s(43635),w=s(11774);s(37210);class x extends i.PureComponent{constructor(t){super(t),this.state={currentIndex:0},this.handleSlideChange=()=>{const{currentIndex:t}=this.state,e=t+1;this.myRef&&this.myRef.current&&(e<this.myRef.current.slides.length?this.myRef.current.splide.go(e):this.myRef.current.splide.go(0))},this.myRef=i.createRef()}componentDidMount(){const{heightUpdate:t}=this.props;setTimeout((()=>t()),1e3)}componentDidUpdate(t,e){return t.postData!==this.props.postData||this.state.currentIndex!=e.currentIndex}render(){var t;const{postData:e,completeDataObject:s,wall:i,languageSetting:a,clickToShowPopUp:o,onClickToCTA:r}=this.props,l=(null===i||void 0===i||null===(t=i.Personalization)||void 0===t?void 0:t.slideDelay)||5,{currentIndex:d}=this.state;return(0,n.jsx)("div",{className:"tb_ss_post_container",children:(0,n.jsx)(w.tv,{hasTrack:!1,className:"tb_ss_slider_wrappper",options:{type:"fade",rewind:!0,speed:1e3,perPage:1,perMove:1,gap:0,autoplay:!1,pauseOnHover:!1,padding:0,pagination:!1,arrows:!1},ref:this.myRef,onActive:(t,e,s)=>this.setState({currentIndex:e.index}),children:(0,n.jsx)(w.Gj,{children:e&&e.length>0&&e.map(((t,e)=>{const a=s[t];return(0,n.jsx)(w.jw,{children:(0,n.jsx)(v,{ownerId:i.Wall.owner,autoPlay:d==e,itemData:a,itemIndex:e,personalization:i.Personalization,ThemeRule:i.ThemeRule,wallID:i.Wall.id,onClickToCTA:r,wall:i,currentIndex:d,handleSlideChange:this.handleSlideChange,intervalTime:l})},e)}))})})})}}const y=(0,b.$j)((t=>({})),(t=>({managePostHeight:e=>t((0,f.B0)(e))})))(x)},61729:(t,e,s)=>{"use strict";var i=s(79165);function a(){}function o(){}o.resetWarningCache=a,t.exports=function(){function t(t,e,s,a,o,n){if(n!==i){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function e(){return t}t.isRequired=t;var s={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:a};return s.PropTypes=s,s}},75192:(t,e,s)=>{t.exports=s(61729)()},79165:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2406:(t,e,s)=>{"use strict";e.Ad=void 0;var i=s(84228);var a=s(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return a.getImageSize}});var o=s(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,s)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const i=s(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((s,a)=>{if("undefined"===typeof window)return a(i.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return a(i.ErrorMessage.URL_IS_NOT_DEFINED);let o=null;const n=new Image;n.addEventListener("load",(()=>{o&&window.clearTimeout(o),s({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(t=>{o&&window.clearTimeout(o),a("".concat(t.type,": ").concat(t.message))})),n.src=t,e.timeout&&(o=window.setTimeout((()=>a(i.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,s){"use strict";var i=this&&this.__awaiter||function(t,e,s,i){return new(s||(s=Promise))((function(a,o){function n(t){try{l(i.next(t))}catch(e){o(e)}}function r(t){try{l(i.throw(t))}catch(e){o(e)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(n,r)}l((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const a=s(47313),o=s(65786);e.useImageSize=(t,e)=>{const[s,n]=(0,a.useState)(null),[r,l]=(0,a.useState)(!1),[d,c]=(0,a.useState)(null);return(0,a.useEffect)((()=>{i(void 0,void 0,void 0,(function*(){l(!0),n(null);try{const{width:s,height:i}=yield(0,o.getImageSize)(t,e);n({width:s,height:i})}catch(d){c(d.toString())}finally{l(!1)}}))}),[t,e]),[s,{loading:r,error:d}]}},37210:()=>{},50247:()=>{}}]);