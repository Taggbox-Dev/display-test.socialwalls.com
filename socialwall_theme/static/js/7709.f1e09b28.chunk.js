(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7709,4261,8342,9239,5790,5810],{20678:(t,e,s)=>{"use strict";s.d(e,{Z:()=>u});var i,a,o=s(47313),n=s(35179),r=s(46417),c=!1,l=0,d=0,h=0;const _=t=>{var e;return null!==(e={80:60,70:40,50:30,30:20,20:10}[t])&&void 0!==e?e:20},p=window.location.href.includes("app=1")?1.2:.6;class m extends o.Component{constructor(){var t;super(...arguments),t=this,this.state={slideWall:0},this.onLoadScroll=()=>{if(!n.aL){const{wall:t}=this.props;window.clearData=this.clearData;const e=document.querySelector(".tb_app_container");null===e||void 0===e||e.addEventListener("wheel",(t=>t.preventDefault()),{passive:!1}),d=setTimeout((()=>this.scrollDiv_init(t.ThemeRule.themeId)),500)}},this.scrollDiv_init=t=>{const{slideWall:e}=this.state,{parentId:s}=this.props;e||(a=document.getElementById(s),63==t&&(c=!1),(a||{}).scrollTop=0,l=0,this.onScrollData(),this.onScrollWPosts())},this.onScrollData=()=>{const{wall:t}=this.props,e=t.Personalization.scrollDelay;if(e){const t=_(e);h=setInterval(this.scrollDiv,t)}},this.onScrollWPosts=()=>{const{themeHeight:t,wall:e,renderID:s,parentId:i}=this.props,a=document.getElementById(i),o=document.getElementById(s);var r=document.querySelector(".tb_theme_container");if(r&&(r=window.getComputedStyle(r).getPropertyValue("height"),o))if(window.innerHeight<o.clientHeight)a.style="height:".concat(r),o.style="position: relative; margin-bottom: ".concat(window.innerHeight,"px; min-height: ").concat(o.clientHeight,"px");else{t&&n.bX&&window.editor;a.style="height:".concat(r),a.setAttribute("style","height:".concat(r))}},this.scrollDiv=()=>{const{themeId:t}=this.props.wall.ThemeRule;h&&clearInterval(h);const e=a||{};c?63===t?(l-=p,e.scrollTop=l,c=!c||0!==e.scrollTop):(e.scrollTop=l=0,c=!1):(l+=p,e.scrollTop=l,c=e.scrollTop>=e.scrollHeight-e.offsetHeight-600),this.onScrollData()},this.pauseDiv=()=>{clearInterval(h),clearTimeout(i),i=setTimeout(this.resumeDiv,5e3)},this.resumeDiv=()=>{var t;const{wall:e,renderID:s}=this.props;a=document.getElementById(s),l=(null===(t=a)||void 0===t?void 0:t.scrollTop)||0,h=setInterval(this.scrollDiv,_(e.Personalization.scrollDelay))},this.clearData=()=>this.clearTime(),this.clearTime=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;t.setState({slideWall:e?0:1}),clearInterval(h),h=0,clearTimeout(i),clearTimeout(d),c=!1,l=0}}componentDidMount(){this.onLoadScroll(),window.addEventListener("resize",(()=>{this.onScrollWPosts()}))}componentDidUpdate(t,e){const{postData:s,wall:i}=t,{ThemeRule:a}=this.props.wall;a.themeId!==i.ThemeRule.themeId&&(c=!1,l=0),s!==this.props.postData&&(this.clearTime(1),this.scrollDiv_init(a.themeId))}componentWillUnmount(){this.clearTime()}render(){return(0,r.jsx)(r.Fragment,{children:{...this.props.children}})}}const u=(0,o.memo)(m)},89239:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var i=s(47313),a=s(17739),o=s(98935),n=s(46417);class r extends i.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:s}=this.props;return(0,n.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,a.P)(t.picture),width:44,height:44,onError:e=>{const i="#ffffff"==s.color?"#000":s.color;e.target.src=t.errorPic?t.errorPic:"https://ui-avatars.com/api/?name=".concat(t.name.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":i).replace("#",""),"&color=fff&length=1"),e.target.alt=t.name}},Math.random()):(0,n.jsx)(o.Z,{authorClass:e,username:t.name,network:s,color:null===s.id?"#000":s.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});var i=s(47313),a=s(46417);const o=t=>{let{username:e,network:s,authorClass:i,errorPic:o}=t;const n="#ffffff"==s.color?"#000":s.color;return(0,a.jsx)("img",{className:"".concat(i,"__"),src:o||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":n).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},n=(0,i.memo)(o)},7138:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});var i=s(47313),a=s(46417);class o extends i.PureComponent{render(){const{cta:t,ctaClass:e,postCta:s,onClickToCTA:i,item:o}=this.props,n=!(!s||1!==s.status);return(0,a.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),i(o),window.open("".concat(n?s.url:t.url),"_blank")},children:[" ",n?s.text:t.text]})}}const n=o},97915:(t,e,s)=>{"use strict";s.d(e,{Z:()=>_});var i=s(47313),a=s(43411),o=s(83773),n=s(6119),r=s(17739),c=s(46417);const l=(0,o.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),d=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,s=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",i=t.product_price>0||t.product_discount>0?"".concat(s,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(i,"\n        </a>")};class h extends i.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:s}=this.state,i=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return i.status?(0,c.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const a=(0,r.i1)();return(0,c.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(a),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(s==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,c.jsx)("div",{className:"tb_hotspot__ ".concat(0==i.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,c.jsx)(l,{children:(0,c.jsx)(n.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(a),clickable:!0,html:d(t.UgcProduct)})})]},e)}))}):null}}const _=(0,a.$j)((t=>({appData:t.appData})))(h)},84261:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>d});var i=s(47313),a=(s(43635),s(97915)),o=s(2406),n=s(17739),r=s(98501),c=s(35179),l=s(46417);class d extends i.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const s=document.querySelector(".track".concat(this.props.data.id));s&&(s.setAttribute("data-height",e),s.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:s}=await(0,o.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t,size:{height:parseInt(s),width:parseInt(t)}})}catch(s){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgSize:{...this.state.imgSize,small:t.target.src}});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(s){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,imgSize:{small:t.data.postFileNew,large:t.data.filename,orignal:t.data.file},size:{height:100,width:100},isVisible:!1},this.videoRef=i.createRef(),this.observer=null}componentWillMount(){const{data:t,hotspot:e,size:s}=this.props;!s||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:s})}componentDidMount(){const{data:t,hotspot:e,size:s}=this.props;!s||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:s});try{this.observer=new IntersectionObserver((t=>{let[e]=t;e.isIntersecting&&(this.setState({isVisible:e.isIntersecting}),this.observer.disconnect())}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(i){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.observer.disconnect()}render(){const{ImageClass:t,data:e,wallID:s,themeID:i,ownerId:o,hotspot:d}=this.props,{imgUrl:h,paddingBottom:_,size:p,fixedPaddingBottom:m,imgSize:u,noPadding:g,isVisible:b}=this.state,w={paddingBottom:"".concat(this.props.size?1==this.props.size?null:m:_,"%")},v={backgroundImage:"url(".concat(u.small,")")};if(p.width>p.height)var f="100%",x="".concat(p.height/p.width*100,"%");else x="100%",f="".concat(p.width/p.height*100,"%");const j=!!(e.hotspot&&e.ugc_products.length>0&&d),y={width:j&&this.props.size?f:null,height:j&&this.props.size?x:null};return(0,l.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:w,ref:this.videoRef,children:[j?(0,l.jsx)("div",{className:"tb_blur_bg_",style:v}):null,(0,l.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:y,children:[j?(0,l.jsx)(a.Z,{product:e.ugc_products}):null,(0,l.jsx)("img",{className:"".concat(t," track").concat(e.id),role:"img",src:b?u.small:e.postFileNew,srcSet:b?c.bX&&g?"".concat(u.large,", 991w ").concat(u.small,", 480w"):null:e.postFileNew,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":s,"data-owner-id":o,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":i,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(r.do,"/media/images/error/no-image.svg")},alt:(0,n.P)(h)})]})]})}}},64442:(t,e,s)=>{"use strict";s.d(e,{Z:()=>_});var i=s(47313),a=s(2406),o=s(20510),n=s.n(o),r=s(43635),c=s(35179),l=(s(17739),s(46417));const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class h extends i.Component{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:s}=await(0,a.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=i.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(s){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:s,isCover:i,controls:a,autoPlay:o,handleVideoEnded:h,muted:_,themeID:p,intervalTime:m}=this.props,{paddingBottom:u,videoLoaded:g,isVisible:b}=this.state,w={small:e.postFileNew,large:e.filename,orignal:e.file},v=[74,76,77].includes(p),f={paddingBottom:"".concat(v&&c.bX?null:u,"%")},x=null!==e&&void 0!==e&&e.loopStop?e.mediaUrl:e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:f,ref:this.videoRef,children:(0,l.jsx)(n(),{className:"".concat(t," video").concat(e.id),url:d(x,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":s,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%"),poster:e.postFileNew}},file:{attributes:{preload:"metadata",poster:e.postFileNew}}},loop:!(c.bX&&!c.aL&&null!==e&&void 0!==e&&e.loopStop),onError:t=>{!c.P2||e.stories&&0!=e.stories||(0,r.ib)(t,e.id),v&&h&&setTimeout((()=>{h()}),1e3*m)},autoPlay:c.bX?b:o,muted:_,volume:o?1:0,playsinline:!0,onReady:t=>{c.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:c.ig||c.bX?b:o,height:"100%",width:"100%",controls:a||!1,style:{backgroundImage:"url(".concat(v?w.large:w.small,")"),backgroundSize:i?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})})}}const _=(0,i.memo)(h)},25810:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var i=s(47313),a=s(35179),o=s(46417);const n=i.lazy((()=>s.e(5867).then(s.bind(s,95867))));class r extends i.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,isDefault:r,Personalization:c}=this.props,l=!!r&&(7!==t.id&&4!==t.id&&36!==t.id),d=a.ZQ&&36==t.id?"tagembed":t.icon;return l?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,o.jsx)("div",{})}):(0,o.jsxs)(i.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(n,{network:t,networkClass:e})]})}}},62245:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var i=s(47313),a=s(16390),o=s(17739),n=s(35179),r=s(30584),c=s(46417);class l extends i.PureComponent{constructor(t){super(t),this.contentRef=i.createRef()}componentDidMount(){n.ZQ&&setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:s,font:i,personalization:l,item:d,contentTitle:h,readMore:_,maxLength:p,textAlign:m,maxLines:u,isReadMore:g}=this.props,b={WebkitLineClamp:u,textAlign:s.textAlignment};let w=20==d.network.id||n.bX&&!n.aL?e:(0,o.Fx)(e);12==d.network.id&&(w=(0,a.ZP)(w));const v="".concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):""),f="".concat(t," ").concat(g?"":v);return(0,c.jsxs)("div",{className:f,ref:this.contentRef,style:b,children:[h?(0,c.jsx)("div",{className:"tb_bold_txt__",children:(0,a.ZP)(h)}):null,(0,c.jsx)(r.Z,{data:d,content:w,Personalization:l,ThemeRule:s})]})}}},30584:(t,e,s)=>{"use strict";s.d(e,{Z:()=>d});var i=s(47313),a=s(91523),o=s(16390),n=s(46417);const r=s(77560),c=(t,e)=>(0,n.jsx)(a.default,{style:e&&[66,70].includes(null===e||void 0===e?void 0:e.themeId)?{width:e.fontSize,height:e.fontSize}:null,children:(0,o.ZP)(t)}),l=t=>{let{data:e,content:s,Personalization:i,ThemeRule:a}=t;const l={color:i.hashtag_color,fontWeight:"bold",backgroundColor:1==i.hashtag_background_status?i.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,n.jsx)(n.Fragment,{children:1===i.hashtag_highlight&&0===i.hashtag_feed&&0===i.hashtag_all?(0,o.ZP)(s):1===i.hashtag_highlight&&0===i.hashtag_feed&&1===i.hashtag_all?c(window.slackdown.parse(r(s,/#(\w+)/g,((t,e)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:l,children:["#",t]}))),e.slackMember),a):1===i.hashtag_highlight&&1===i.hashtag_feed&&0===i.hashtag_all?c(window.slackdown.parse(r(s,e.hash.hashString,((t,e)=>(0,n.jsx)("div",{className:"tb_text_hashtag",style:l,children:t}))),e.slackMember),a):1===i.hashtag_highlight&&1===i.hashtag_feed&&1===i.hashtag_all?c(window.slackdown.parse(r(s,/#(\w+)/g,((t,s)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:l,children:["#",t]},"".concat(e.id,"_").concat(s)))),e.slackMember),a):c(window.slackdown.parse(s,e.slackMember),a)}):(0,n.jsx)(n.Fragment,{children:1===i.hashtag_highlight&&0===i.hashtag_feed&&0===i.hashtag_all?(0,o.ZP)(s):1===i.hashtag_highlight&&0===i.hashtag_feed&&1===i.hashtag_all?r((0,o.ZP)(s),/#(\w+)/g,((t,e)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:l,children:["#",t]}))):1===i.hashtag_highlight&&1===i.hashtag_feed&&0===i.hashtag_all?r((0,o.ZP)(s),e.hash.hashString,((t,e)=>(0,n.jsx)("strong",{className:"tb_text_hashtag",style:l,children:t}))):1===i.hashtag_highlight&&1===i.hashtag_feed&&1===i.hashtag_all?r((0,o.ZP)(s),/#(\w+)/g,((t,s)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:l,children:["#",t]},"".concat(e.id,"_").concat(s)))):c(s,a)})},d=(0,i.memo)(l)},90905:(t,e,s)=>{"use strict";s.d(e,{Z:()=>c});var i=s(47313),a=s(35179),o=s(46417);const n=t=>{let{network:e}=t;const s={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:i,color:n}=s[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,o.jsx)("div",{className:i,style:{color:n},"tb-network":e.id,children:(0,o.jsx)("div",{})})},r=t=>{let{ThemeID:e}=t;const{className:s,color:i}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,o.jsx)("div",{className:s,style:{color:i},"tb-network":e})};class c extends i.PureComponent{render(){const{rating:t,network:e,ThemeID:s}=this.props;return(0,o.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,i)=>s?(0,o.jsx)(r,{ThemeID:s},i):(0,o.jsx)(n,{network:e},i))):null})}}},55790:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var i=s(47313),a=s(17739),o=s(46417);const n=t=>{const{postTime:e,timeClass:s}=t;return(0,o.jsx)("div",{className:s,children:(0,a.Sy)(e)})},r=(0,i.memo)(n)},50926:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>I});var i=s(47313),a=s(61395),o=s.n(a),n=s(35179),r=s(89239),c=s(55790),l=s(25810),d=s(46417);const h=t=>{let{author:e,personalization:s,postTime:i,network:a,ThemeRule:o,font:n}=t;const h=e.username&&e.username.length>0?"@".concat(e.username):"",_=!(!s.postAuthor||e.isInstaUser),p=!(!s.postAuthor||!s.postTime||e.isInstaUser),m=!!o.socialAction;return(0,d.jsxs)("div",{className:"tb_g_s_author_wrapper",children:[(0,d.jsxs)("div",{className:"tb_g_s_author",children:[_?(0,d.jsx)(r.default,{author:e,network:a,authorClass:"tb_g_s_author_profile"}):(0,d.jsx)("div",{style:{width:0},className:"tb_g_s_author_profile",children:(0,d.jsx)("div",{})},Math.random()),(0,d.jsxs)("div",{className:"tb_g_s_author_info",children:[_?(0,d.jsx)("div",{className:"tb_g_s_authorname",children:e.name}):"",(0,d.jsxs)("div",{className:"tb_g_s_post_info",children:[_?(0,d.jsx)("div",{className:"tb_g_s_username",children:h}):"",p?(0,d.jsx)("div",{className:"tb_g_s_seprator",children:" "}):"",s.postTime?(0,d.jsx)(c.default,{postTime:i,timeClass:"tb_g_s_time tb-cTBfont-".concat(o.font_varient),authorColor:o.authorColor}):""]})]})]}),m?(0,d.jsx)("div",{className:"tb_g_s_social_",children:(0,d.jsx)(l.default,{networkClass:"tb_g_s_social_ico",network:a,ThemeRule:o,isDefault:1===o.iconType})}):""]})};var _=s(84261),p=s(64442);const m=i.lazy((()=>s.e(695).then(s.bind(s,10695)))),u=t=>{let{itemData:e,wallID:s,ownerId:a,wall:o}=t;const r=!(!n.ZQ||3!==e.type&&5!==e.type||o.Personalization.mobilePopup||o.Personalization.postFeatured),c=(3===e.type||5===e.type)&&1==o.ThemeRule.autoPlay,l=n.ZQ?!!o.ThemeRule.aspectImageRatio&&o.ThemeRule.aspectImageRatio:!!n.bX&&100;return(0,d.jsxs)("div",{className:"tb_g_s_media_wrap",children:[n.aL&&o.Personalization.interactive?(0,d.jsx)(i.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(m,{postId:e.id,wallID:s,UserDetail:o.UserDetail})}):null,c||r?(0,d.jsx)(p.Z,{VideoClass:"tb_g_s_video",data:e,wallID:s,themeID:o.Personalization.widgetTheme,ownerId:a,size:l,isCover:!0,controls:!1,autoPlay:!0,muted:!0}):(0,d.jsx)(_.default,{ImageClass:"tb_g_s_image",data:e,wallID:s,themeID:o.Personalization.widgetTheme,ownerId:a,size:l,ThemeRule:o.ThemeRule})]})};var g=s(62245),b=s(7138),w=s(90905),v=s(17739);const f=t=>{let{itemData:e,ThemeRule:s}=t;const i=(t,e)=>{t.stopPropagation(),e()},a={color:s.fontColor},o=e.network.id,r=3===o||10===o?"like":"heart",c=1===o?"reply":"comment",l=!(!e.share.status||[29,1,3,4,7,8,10,11].includes(o)),h=!![1,2,3,7,8,9,10,18,19,23,26,29,30].includes(o),_=![29,11,19,23,26,29,30].includes(o),p=![12,15,20,21,29,11,19,23,26,29,30].includes(o);return(0,d.jsx)(d.Fragment,{children:h&&s.socialAction||e.share.status?(0,d.jsxs)("div",{className:"tb_g_s_social_actions_ ".concat(l?"tb_g_s_social_share_only__":"tb_g_s_social_actions_only__"),style:s.socialAction&&p?null:{justifyContent:"flex-end"},children:[s.socialAction?(0,d.jsx)(d.Fragment,{children:p?(0,d.jsxs)(d.Fragment,{children:[h?(0,d.jsx)("div",{className:"tb_g_s_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>i(t,(()=>window.open(((t,e,s)=>1===t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,v.ok)(e)):s)(o,e.postId,e.link),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_g_s_social_action_ico__ tb__icon tb-".concat(r),style:a,children:" "}),(0,d.jsx)("div",{className:"tb_g_s_social_action_counts__",style:a,children:n.ZQ?e.like_count:"Like"})]})}):null,_?(0,d.jsx)("div",{className:"tb_g_s_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>i(t,(()=>window.open(((t,e,s)=>1===t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,v.ok)(e)):s)(o,e.postId,e.link),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_g_s_social_action_ico__ tb__icon tb-".concat(c),style:a,children:" "}),(0,d.jsx)("div",{className:"tb_g_s_social_action_counts__",style:a,children:n.ZQ?e.comment_count:1===o?"Reply":"Comment"})]})}):null,1===o?(0,d.jsx)("div",{className:"tb_g_s_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>i(t,(()=>window.open("https://twitter.com/intent/retweet?tweet_id=".concat((0,v.ok)(e.postId)),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_g_s_social_action_ico__ tb__icon tb-retweet",style:a,children:" "}),(0,d.jsx)("div",{className:"tb_g_s_social_action_counts__",style:a,children:"Retweet"})]})}):"",l?(0,d.jsx)("div",{className:"tb_g_s_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>i(t,(()=>window.open(e.link,"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_g_s_social_action_ico__ tb__icon tb-eye",style:a,children:" "}),(0,d.jsx)("div",{className:"tb_g_s_social_action_counts__",style:a,children:"View"})]})}):""]}):""}):"",e.share.status?(0,d.jsxs)("div",{className:"tb_g_s_action_counts_wrap".concat(s.socialAction?"":" tb_g_s_action_share_wrap"),children:[(0,d.jsx)("div",{className:"tb_g_s_action_ico tb__icon tb-share",style:a,children:" "}),(0,d.jsx)("div",{className:"tb_g_s_action_counts",style:a,children:"Share"}),(0,d.jsx)("div",{className:"tb_g_s_share_wrapper_dropdown",children:(0,d.jsxs)("div",{className:"tb_g_s_share_icon_list",children:[e.share.facebook&&(0,d.jsxs)("div",{onClick:t=>i(t,(()=>window.open(e.share.facebook,"_blank"))),className:"tb_g_s_share_list_in",children:[(0,d.jsx)("div",{className:"tb_g_s_share_ico__ tb__icon tb-facebook",children:" "}),(0,d.jsx)("div",{className:"tb_g_s_share_ico_txt",children:"Facebook"})]}),e.share.twitter&&(0,d.jsxs)("div",{onClick:t=>i(t,(()=>window.open(e.share.twitter,"_blank"))),className:"tb_g_s_share_list_in",children:[(0,d.jsx)("div",{className:"tb_g_s_share_ico__ tb__icon tb-twitter"}),(0,d.jsx)("div",{className:"tb_g_s_share_ico_txt",children:"Twitter"})]}),e.share.linkedin&&(0,d.jsxs)("div",{onClick:t=>i(t,(()=>window.open(e.share.linkedin,"_blank"))),className:"tb_g_s_share_list_in",children:[(0,d.jsx)("div",{className:"tb_g_s_share_ico__ tb__icon tb-linkedin",children:" "}),(0,d.jsx)("div",{className:"tb_g_s_share_ico_txt",children:"LinkedIn"})]})]})})]}):""]}):null})},x=t=>{let{itemData:e,personalization:s,adjustWidth:i,ThemeRule:a,clickToShowPopUp:o,itemIndex:r,wallID:c,ownerId:l,onClickToCTA:_,wall:p}=t;const m=2===e.type||3===e.type||4===e.type||5===e.type,x=e.rating>0,j=e.rating>0?"tb_g_s_rating_content":"tb_g_s_content",y=n.ZQ&&(0,v.mD)(5)?"tb_g_s_rating_content_review":"",k=1===e.type&&s.textDecorate?"tb_g_s_text_decoration tb_g_s_text_post":"",N=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),I=!(!(N||a.socialAction||a.shareOption)||n.bX),D=e.content,T=n.bX?{padding:a.spacing}:null;return(0,d.jsx)("div",{id:"tb-cc-post-".concat(e.id),className:"tb_g_s_post_wrapper",style:{width:"".concat(i,"%"),padding:s.padding/2},"tb-network":e.network.icon,children:(0,d.jsxs)("div",{className:"tb_g_s_post_in",onClick:o(r,e),style:T,children:[n.ZQ||(0,v.mD)(62)||(0,v.mD)(78)||(0,v.mD)(66)?m?(0,d.jsx)("div",{className:"tb_g_s_post_media_wrapp",children:(0,d.jsx)(u,{itemData:e,wallID:c,wall:p,ownerId:l},"img".concat(r,"_").concat(e.id))}):"":null,(0,d.jsxs)("div",{className:"tb_g_s_contant_wrapper",children:[(0,d.jsx)(h,{ownerId:l,postTime:e.createdAt,author:e.author,network:e.network,font:a,personalization:s,ThemeRule:a},"img".concat(r,"_").concat(e.id)),x&&(0,v.mD)(5)?(0,d.jsxs)("div",{className:"tb_g_s_rating__",children:[(0,d.jsx)(w.Z,{rating:e.rating,network:e.network})," "]}):"",a.hideContent&&1!=e.type||(0,v.mD)(63)?"":(0,d.jsx)(g.default,{item:e,contentClass:"".concat(j," ").concat(y," ").concat(k),content:D,font:a,ThemeRule:a,personalization:s,contentTitle:e.contentTitle}),x&&!(0,v.mD)(5)?(0,d.jsxs)("div",{className:"tb_g_s_rating__",children:[(0,d.jsx)(w.Z,{rating:e.rating,network:e.network})," "]}):""]}),n.ZQ||(0,v.mD)(62)||(0,v.mD)(78)||(0,v.mD)(66)?null:m?(0,d.jsx)("div",{className:"tb_g_s_post_media_wrapp",children:(0,d.jsx)(u,{itemData:e,wallID:c,wall:p,ownerId:l},"img".concat(r,"_").concat(e.id))}):"",I||N||a.shareOption?(0,d.jsxs)("div",{className:"tb_g_s_post_actions",children:[N?(0,d.jsxs)("div",{className:"tb_g_s_post_cta",children:[(0,d.jsx)(b.Z,{ctaClass:"tb_g_s_post_cta_btn",cta:e.cta,item:e,onClickToCTA:_})," "]}):"",I?(0,d.jsx)(f,{itemData:e,ThemeRule:a}):""]}):""]})})};var j=s(43411),y=s(43635),k=s(20678);class N extends i.Component{constructor(){super(...arguments),this.state={postData:[],loadData:1},this.onLoadMasonry=()=>{this.editorHeight();const{heightUpdate:t}=this.props;setTimeout((()=>t()),1e3)},this.editorHeight=()=>{var t=document.querySelector(".tb_g_s_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight("".concat(e))}}}}componentDidMount(){const{postData:t}=this.props,e=this;this.onLoadMasonry(),window.addEventListener("resize",(function(t){e.editorHeight()}),!0)}componentWillUnmount(){const t=this;window.removeEventListener("resize",(function(e){t.editorHeight()}),!0)}componentWillReceiveProps(t){const{postData:e}=t;this.props.postData!=t.postData&&this.onLoadMasonry()}componentDidUpdate(t,e){return t.postData!==this.props.postData}render(){const{postData:t,completeDataObject:e,adjustWidth:s,wall:i,languageSetting:a,clickToShowPopUp:n,onClickToCTA:r}=this.props,{loadData:c}=this.state;return(0,d.jsx)(k.Z,{wall:i,parentId:"tb_marquee",renderID:"square",children:(0,d.jsx)("div",{id:"tb_marquee",children:(0,d.jsx)(o(),{id:"square",className:"tb_g_s_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_g_s_post_wrapper",horizontalOrder:!1,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:(null===t||void 0===t?void 0:t.length)>0&&t.map(((o,c)=>{const l=e[o];return(0,d.jsx)(x,{ownerId:i.Wall.owner,itemData:l,itemIndex:c,adjustWidth:s,personalization:i.Personalization,ThemeRule:i.ThemeRule,completeDataObject:e,postData:t,languageSetting:a,wallID:i.Wall.id,clickToShowPopUp:n,onClickToCTA:r,wall:i},"cls_crd_".concat(c,"_").concat(l.id))}))})})})}}const I=(0,j.$j)((t=>({postHeight:t.postHeight.data})),(t=>({managePostHeight:e=>t((0,y.B0)(e))})))(N)},2406:(t,e,s)=>{"use strict";e.Ad=void 0;var i=s(84228);var a=s(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return a.getImageSize}});var o=s(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,s)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const i=s(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((s,a)=>{if("undefined"===typeof window)return a(i.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return a(i.ErrorMessage.URL_IS_NOT_DEFINED);let o=null;const n=new Image;n.addEventListener("load",(()=>{o&&window.clearTimeout(o),s({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(t=>{o&&window.clearTimeout(o),a("".concat(t.type,": ").concat(t.message))})),n.src=t,e.timeout&&(o=window.setTimeout((()=>a(i.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,s){"use strict";var i=this&&this.__awaiter||function(t,e,s,i){return new(s||(s=Promise))((function(a,o){function n(t){try{c(i.next(t))}catch(e){o(e)}}function r(t){try{c(i.throw(t))}catch(e){o(e)}}function c(t){var e;t.done?a(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(n,r)}c((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const a=s(47313),o=s(65786);e.useImageSize=(t,e)=>{const[s,n]=(0,a.useState)(null),[r,c]=(0,a.useState)(!1),[l,d]=(0,a.useState)(null);return(0,a.useEffect)((()=>{i(void 0,void 0,void 0,(function*(){c(!0),n(null);try{const{width:s,height:i}=yield(0,o.getImageSize)(t,e);n({width:s,height:i})}catch(l){d(l.toString())}finally{c(!1)}}))}),[t,e]),[s,{loading:r,error:l}]}},50247:()=>{}}]);