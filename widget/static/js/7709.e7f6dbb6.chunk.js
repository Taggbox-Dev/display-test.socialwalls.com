(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7709,4261,8342,9239,5790,5810],{20678:(t,e,s)=>{"use strict";s.d(e,{Z:()=>u});var a,i,o=s(47313),n=s(35179),l=s(46417),r=!1,c=0,d=0,h=0;const _=t=>{var e;return null!==(e={80:60,70:40,50:30,30:20,20:10}[t])&&void 0!==e?e:20};class p extends o.Component{constructor(){var t;super(...arguments),t=this,this.state={slideWall:0},this.onLoadScroll=()=>{if(!n.aL){const{wall:t}=this.props;window.clearData=this.clearData;const e=document.querySelector(".tb_app_container");null===e||void 0===e||e.addEventListener("wheel",(t=>t.preventDefault()),{passive:!1}),d=setTimeout((()=>this.scrollDiv_init(t.ThemeRule.themeId)),500)}},this.scrollDiv_init=t=>{const{slideWall:e}=this.state,{parentId:s}=this.props;e||(i=document.getElementById(s),63==t&&(r=!1),(i||{}).scrollTop=0,c=0,this.onScrollData(),this.onScrollWPosts())},this.onScrollData=()=>{const{wall:t}=this.props,e=t.Personalization.scrollDelay;if(e){const t=_(e);h=setInterval(this.scrollDiv,t)}},this.onScrollWPosts=()=>{var t,e,s;const{themeHeight:a,wall:i,renderID:o,parentId:l}=this.props,r=document.getElementById(l),c=document.getElementById(o);var d=document.querySelector(".tb_theme_container");if(d=window.getComputedStyle(d).getPropertyValue("height"),console.log("themeContainer",d,null===(t=d)||void 0===t?void 0:t.clientHeight,null===(e=window)||void 0===e||null===(s=e.getComputedStyle(d))||void 0===s?void 0:s.getPropertyValue("height")),c)if(window.innerHeight>c.clientHeight)c.style="position: relative; margin-bottom: ".concat(window.innerHeight,"px; min-height: ").concat(c.clientHeight,"px");else{a&&n.bX&&window.editor;r.style="height:".concat(d)}},this.scrollDiv=()=>{const{themeId:t}=this.props.wall.ThemeRule;h&&clearInterval(h);const e=i||{};r?63===t?(e.scrollTop=c--,r=!r||0!==e.scrollTop):(e.scrollTop=c=0,r=!1):(e.scrollTop=c++,r=e.scrollTop>=e.scrollHeight-e.offsetHeight-300),this.onScrollData()},this.pauseDiv=()=>{clearInterval(h),clearTimeout(a),a=setTimeout(this.resumeDiv,5e3)},this.resumeDiv=()=>{var t;const{wall:e,renderID:s}=this.props;i=document.getElementById(s),c=(null===(t=i)||void 0===t?void 0:t.scrollTop)||0,h=setInterval(this.scrollDiv,_(e.Personalization.scrollDelay))},this.clearData=()=>this.clearTime(),this.clearTime=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;t.setState({slideWall:e?0:1}),clearInterval(h),h=0,clearTimeout(a),clearTimeout(d),r=!1,c=0}}componentDidMount(){this.onLoadScroll(),window.addEventListener("resize",(()=>{this.onScrollWPosts()}))}componentDidUpdate(t,e){const{postData:s,wall:a}=t,{ThemeRule:i}=this.props.wall;i.themeId!==a.ThemeRule.themeId&&(r=!1,c=0),s!==this.props.postData&&(this.clearTime(1),this.scrollDiv_init(i.themeId))}componentWillUnmount(){this.clearTime()}render(){return(0,l.jsx)(l.Fragment,{children:{...this.props.children}})}}const u=(0,o.memo)(p)},89239:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var a=s(47313),i=s(17739),o=s(98935),n=s(46417);class l extends a.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:s}=this.props;return(0,n.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,i.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,n.jsx)(o.Z,{authorClass:e,username:t.name,network:s,color:null===s.id?"#000":s.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});var a=s(47313),i=s(46417);const o=t=>{let{username:e,network:s,authorClass:a,errorPic:o}=t;const n="#ffffff"==s.color?"#000":s.color;return(0,i.jsx)("img",{className:"".concat(a,"__"),src:o||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":n).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},n=(0,a.memo)(o)},7138:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});var a=s(47313),i=s(46417);class o extends a.PureComponent{render(){const{cta:t,ctaClass:e,postCta:s,onClickToCTA:a,item:o}=this.props,n=!(!s||1!==s.status);return(0,i.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),a(o),window.open("".concat(n?s.url:t.url),"_blank")},children:[" ",n?s.text:t.text]})}}const n=o},97915:(t,e,s)=>{"use strict";s.d(e,{Z:()=>_});var a=s(47313),i=s(43411),o=s(83773),n=s(6119),l=s(17739),r=s(46417);const c=(0,o.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),d=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,s=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",a=t.product_price>0||t.product_discount>0?"".concat(s,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(a,"\n        </a>")};class h extends a.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:s}=this.state,a=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return a.status?(0,r.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const i=(0,l.i1)();return(0,r.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(i),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(s==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,r.jsx)("div",{className:"tb_hotspot__ ".concat(0==a.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,r.jsx)(c,{children:(0,r.jsx)(n.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(i),clickable:!0,html:d(t.UgcProduct)})})]},e)}))}):null}}const _=(0,i.$j)((t=>({appData:t.appData})))(h)},84261:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>h});var a=s(47313),i=s(40475),o=s(97915),n=s(2406),l=s(17739),r=s(98501),c=s(35179),d=s(46417);class h extends a.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const s=document.querySelector(".track".concat(this.props.data.id));s&&(s.setAttribute("data-height",e),s.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:s}=await(0,n.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t,size:{height:parseInt(s),width:parseInt(t)}})}catch(s){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgSize:{...this.state.imgSize,small:t.target.src}});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(s){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,imgSize:{small:t.data.postFileNew,large:t.data.filename,orignal:t.data.file},size:{height:100,width:100}}}componentWillMount(){const{data:t,hotspot:e,size:s}=this.props;t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:s})}componentDidMount(){const{data:t,hotspot:e,size:s}=this.props;!s||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:s})}render(){const{ImageClass:t,data:e,wallID:s,themeID:a,ownerId:n,hotspot:h}=this.props,{imgUrl:_,paddingBottom:p,size:u,fixedPaddingBottom:m,imgSize:g,noPadding:b}=this.state,w={paddingBottom:"".concat(this.props.size?1==this.props.size?null:m:p,"%")},v={backgroundImage:"url(".concat(g.small,")")};if(u.width>u.height)var x="100%",f="".concat(u.height/u.width*100,"%");else f="100%",x="".concat(u.width/u.height*100,"%");const j=!!(e.hotspot&&e.ugc_products.length>0&&h),y={width:j&&this.props.size?x:null,height:j&&this.props.size?f:null};return(0,d.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:w,children:[j?(0,d.jsx)("div",{className:"tb_blur_bg_",style:v}):null,(0,d.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:y,children:[j?(0,d.jsx)(o.Z,{product:e.ugc_products}):null,(0,d.jsx)("img",{className:"".concat(t," track").concat(e.id),role:"img",src:g.small,srcSet:c.bX&&b?"".concat(g.large,", 991w ").concat(g.small,", 480w"):null,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":s,"data-owner-id":n,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":a,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(r.do,"/media/images/no-image.svg"),(0,i.ht)(t)},alt:(0,l.P)(_)})]})]})}}},64442:(t,e,s)=>{"use strict";s.d(e,{Z:()=>h});var a=s(47313),i=s(2406),o=s(20510),n=s.n(o),l=s(40475),r=s(35179),c=(s(17739),s(46417));const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class h extends a.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:s}=await(0,i.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=a.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(s){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:s,isCover:a,controls:i,autoPlay:o,handleVideoEnded:h,muted:_,themeID:p,intervalTime:u}=this.props,{paddingBottom:m,videoLoaded:g,isVisible:b}=this.state,w={small:e.postFileNew,large:e.filename,orignal:e.file},v=[74,76,77].includes(p),x={paddingBottom:"".concat(v&&r.bX?null:m,"%")},f=null!==e&&void 0!==e&&e.loopStop?e.mediaUrl:e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,c.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:x,ref:this.videoRef,children:(0,c.jsx)(n(),{className:"".concat(t," video").concat(e.id),url:d(f,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":s,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata",poster:v?w.large:w.small}}},loop:!(r.bX&&!r.aL&&null!==e&&void 0!==e&&e.loopStop),onError:t=>{e.stories&&0!=e.stories||(0,l.ib)(t,e.id),v&&h&&setTimeout((()=>{h()}),1e3*u)},autoPlay:o,muted:_,volume:o?1:0,playsinline:!0,onReady:t=>{r.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:r.ig||r.bX?b:o,height:"100%",width:"100%",controls:i||!1,style:{backgroundImage:"url(".concat(v?w.large:w.small,")"),backgroundSize:a?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})})}}},25810:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var a=s(47313),i=s(35179),o=s(46417);const n=a.lazy((()=>s.e(5867).then(s.bind(s,95867))));class l extends a.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,isDefault:l,Personalization:r}=this.props,c=!!l&&(7!==t.id&&4!==t.id&&36!==t.id),d=i.ZQ&&36==t.id?"tagembed":t.icon;return c?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,o.jsx)("div",{})}):(0,o.jsxs)(a.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(n,{network:t,networkClass:e})]})}}},62245:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>c});var a=s(47313),i=s(16390),o=s(17739),n=s(35179),l=s(30584),r=s(46417);class c extends a.PureComponent{constructor(t){super(t),this.contentRef=a.createRef()}componentDidMount(){n.ZQ&&setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:s,font:a,personalization:c,item:d,contentTitle:h,readMore:_,maxLength:p,textAlign:u,maxLines:m,isReadMore:g}=this.props,b={WebkitLineClamp:m,textAlign:s.textAlignment};let w=20==d.network.id||n.bX&&!n.aL?e:(0,o.Fx)(e);12==d.network.id&&(w=(0,i.ZP)(w));const v="".concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):""),x="".concat(t," ").concat(g?"":v);return(0,r.jsxs)("div",{className:x,ref:this.contentRef,style:b,children:[h?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,i.ZP)(h)}):null,(0,r.jsx)(l.Z,{data:d,content:w,Personalization:c})]})}}},30584:(t,e,s)=>{"use strict";s.d(e,{Z:()=>d});var a=s(47313),i=s(91523),o=s(16390),n=s(46417);const l=s(77560),r=t=>(0,n.jsx)(i.default,{children:(0,o.ZP)(t)}),c=t=>{let{data:e,content:s,Personalization:a}=t;const i={color:a.hashtag_color,fontWeight:"bold",backgroundColor:1==a.hashtag_background_status?a.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,n.jsx)(n.Fragment,{children:1===a.hashtag_highlight&&0===a.hashtag_feed&&0===a.hashtag_all?(0,o.ZP)(s):1===a.hashtag_highlight&&0===a.hashtag_feed&&1===a.hashtag_all?r(window.slackdown.parse(l(s,/#(\w+)/g,((t,e)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:i,children:["#",t]}))),e.slackMember)):1===a.hashtag_highlight&&1===a.hashtag_feed&&0===a.hashtag_all?r(window.slackdown.parse(l(s,e.hash.hashString,((t,e)=>(0,n.jsx)("div",{className:"tb_text_hashtag",style:i,children:t}))),e.slackMember)):1===a.hashtag_highlight&&1===a.hashtag_feed&&1===a.hashtag_all?r(window.slackdown.parse(l(s,/#(\w+)/g,((t,s)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:i,children:["#",t]},"".concat(e.id,"_").concat(s)))),e.slackMember)):r(window.slackdown.parse(s,e.slackMember))}):(0,n.jsx)(n.Fragment,{children:1===a.hashtag_highlight&&0===a.hashtag_feed&&0===a.hashtag_all?(0,o.ZP)(s):1===a.hashtag_highlight&&0===a.hashtag_feed&&1===a.hashtag_all?l((0,o.ZP)(s),/#(\w+)/g,((t,e)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:i,children:["#",t]}))):1===a.hashtag_highlight&&1===a.hashtag_feed&&0===a.hashtag_all?l((0,o.ZP)(s),e.hash.hashString,((t,e)=>(0,n.jsx)("div",{className:"tb_text_hashtag",style:i,children:t}))):1===a.hashtag_highlight&&1===a.hashtag_feed&&1===a.hashtag_all?l((0,o.ZP)(s),/#(\w+)/g,((t,s)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:i,children:["#",t]},"".concat(e.id,"_").concat(s)))):(0,o.ZP)(s)})},d=(0,a.memo)(c)},90905:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});var a=s(47313),i=s(35179),o=s(46417);const n=t=>{let{network:e}=t;const s={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:i.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:i.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:a,color:n}=s[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,o.jsx)("div",{className:a,style:{color:n},"tb-network":e.id,children:(0,o.jsx)("div",{})})},l=t=>{let{ThemeID:e}=t;const{className:s,color:a}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,o.jsx)("div",{className:s,style:{color:a},"tb-network":e})};class r extends a.PureComponent{render(){const{rating:t,network:e,ThemeID:s}=this.props;return(0,o.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,a)=>s?(0,o.jsx)(l,{ThemeID:s},a):(0,o.jsx)(n,{network:e},a))):null})}}},55790:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var a=s(47313),i=s(17739),o=s(46417);const n=t=>{const{postTime:e,timeClass:s}=t;return(0,o.jsx)("div",{className:s,children:(0,i.Sy)(e)})},l=(0,a.memo)(n)},50926:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>I});var a=s(47313),i=s(61395),o=s.n(i),n=s(35179),l=s(89239),r=s(55790),c=s(25810),d=s(46417);const h=t=>{let{author:e,personalization:s,postTime:a,network:i,ThemeRule:o,font:n}=t;const h=e.username&&e.username.length>0?"@".concat(e.username):"",_=!(!s.postAuthor||e.isInstaUser),p=!(!s.postAuthor||!s.postTime||e.isInstaUser),u=!!o.socialAction;return(0,d.jsxs)("div",{className:"tb_g_s_author_wrapper",children:[(0,d.jsxs)("div",{className:"tb_g_s_author",children:[_?(0,d.jsx)(l.default,{author:e,network:i,authorClass:"tb_g_s_author_profile"}):"",(0,d.jsxs)("div",{className:"tb_g_s_author_info",children:[_?(0,d.jsx)("div",{className:"tb_g_s_authorname",children:e.name}):"",(0,d.jsxs)("div",{className:"tb_g_s_post_info",children:[_?(0,d.jsx)("div",{className:"tb_g_s_username",children:h}):"",p?(0,d.jsx)("div",{className:"tb_g_s_seprator",children:" "}):"",s.postTime?(0,d.jsx)(r.default,{postTime:a,timeClass:"tb_g_s_time tb-cTBfont-".concat(o.font_varient),authorColor:o.authorColor}):""]})]})]}),u?(0,d.jsx)("div",{className:"tb_g_s_social_",children:(0,d.jsx)(c.default,{networkClass:"tb_g_s_social_ico",network:i,ThemeRule:o,isDefault:1===o.iconType})}):""]})};var _=s(84261),p=s(64442);const u=a.lazy((()=>s.e(695).then(s.bind(s,10695)))),m=t=>{let{itemData:e,wallID:s,ownerId:i,wall:o}=t;const l=!(!n.ZQ||3!==e.type&&5!==e.type||o.Personalization.mobilePopup||o.Personalization.postFeatured),r=(3===e.type||5===e.type)&&1==o.ThemeRule.autoPlay,c=n.ZQ?!!o.ThemeRule.aspectImageRatio&&o.ThemeRule.aspectImageRatio:!!n.bX&&100;return(0,d.jsxs)("div",{className:"tb_g_s_media_wrap",children:[n.aL&&o.Personalization.interactive?(0,d.jsx)(a.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(u,{postId:e.id,wallID:s,UserDetail:o.UserDetail})}):null,r||l?(0,d.jsx)(p.Z,{VideoClass:"tb_g_s_video",data:e,wallID:s,themeID:o.Personalization.widgetTheme,ownerId:i,size:c,isCover:!0,controls:!1,autoPlay:!0,muted:!0}):(0,d.jsx)(_.default,{ImageClass:"tb_g_s_image",data:e,wallID:s,themeID:o.Personalization.widgetTheme,ownerId:i,size:c,ThemeRule:o.ThemeRule})]})};var g=s(62245),b=s(7138),w=s(90905),v=s(17739);const x=t=>{let{itemData:e,ThemeRule:s}=t;const a=(t,e)=>{t.stopPropagation(),e()},i={color:s.fontColor},o=e.network.id,l=3===o||10===o?"like":"heart",r=1===o?"reply":"comment",c=!(!e.share.status||[29,1,3,4,7,8,10,11].includes(o)),h=!![1,2,3,7,8,9,10,18,19,23,26,29,30].includes(o),_=![29,11,19,23,26,29,30].includes(o),p=![12,15,20,21,29,11,19,23,26,29,30].includes(o);return(0,d.jsx)(d.Fragment,{children:h&&s.socialAction||e.share.status?(0,d.jsxs)("div",{className:"tb_g_s_social_actions_ ".concat(c?"tb_g_s_social_share_only__":"tb_g_s_social_actions_only__"),style:s.socialAction&&p?null:{justifyContent:"flex-end"},children:[s.socialAction?(0,d.jsx)(d.Fragment,{children:p?(0,d.jsxs)(d.Fragment,{children:[h?(0,d.jsx)("div",{className:"tb_g_s_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>a(t,(()=>window.open(((t,e,s)=>1===t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,v.ok)(e)):s)(o,e.postId,e.link),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_g_s_social_action_ico__ tb__icon tb-".concat(l),style:i,children:" "}),(0,d.jsx)("div",{className:"tb_g_s_social_action_counts__",style:i,children:n.ZQ?e.like_count:"Like"})]})}):null,_?(0,d.jsx)("div",{className:"tb_g_s_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>a(t,(()=>window.open(((t,e,s)=>1===t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,v.ok)(e)):s)(o,e.postId,e.link),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_g_s_social_action_ico__ tb__icon tb-".concat(r),style:i,children:" "}),(0,d.jsx)("div",{className:"tb_g_s_social_action_counts__",style:i,children:n.ZQ?e.comment_count:1===o?"Reply":"Comment"})]})}):null,1===o?(0,d.jsx)("div",{className:"tb_g_s_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>a(t,(()=>window.open("https://twitter.com/intent/retweet?tweet_id=".concat((0,v.ok)(e.postId)),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_g_s_social_action_ico__ tb__icon tb-retweet",style:i,children:" "}),(0,d.jsx)("div",{className:"tb_g_s_social_action_counts__",style:i,children:"Retweet"})]})}):"",c?(0,d.jsx)("div",{className:"tb_g_s_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>a(t,(()=>window.open(e.link,"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_g_s_social_action_ico__ tb__icon tb-eye",style:i,children:" "}),(0,d.jsx)("div",{className:"tb_g_s_social_action_counts__",style:i,children:"View"})]})}):""]}):""}):"",e.share.status?(0,d.jsxs)("div",{className:"tb_g_s_action_counts_wrap".concat(s.socialAction?"":" tb_g_s_action_share_wrap"),children:[(0,d.jsx)("div",{className:"tb_g_s_action_ico tb__icon tb-share",style:i,children:" "}),(0,d.jsx)("div",{className:"tb_g_s_action_counts",style:i,children:"Share"}),(0,d.jsx)("div",{className:"tb_g_s_share_wrapper_dropdown",children:(0,d.jsxs)("div",{className:"tb_g_s_share_icon_list",children:[e.share.facebook&&(0,d.jsxs)("div",{onClick:t=>a(t,(()=>window.open(e.share.facebook,"_blank"))),className:"tb_g_s_share_list_in",children:[(0,d.jsx)("div",{className:"tb_g_s_share_ico__ tb__icon tb-facebook",children:" "}),(0,d.jsx)("div",{className:"tb_g_s_share_ico_txt",children:"Facebook"})]}),e.share.twitter&&(0,d.jsxs)("div",{onClick:t=>a(t,(()=>window.open(e.share.twitter,"_blank"))),className:"tb_g_s_share_list_in",children:[(0,d.jsx)("div",{className:"tb_g_s_share_ico__ tb__icon tb-twitter"}),(0,d.jsx)("div",{className:"tb_g_s_share_ico_txt",children:"Twitter"})]}),e.share.linkedin&&(0,d.jsxs)("div",{onClick:t=>a(t,(()=>window.open(e.share.linkedin,"_blank"))),className:"tb_g_s_share_list_in",children:[(0,d.jsx)("div",{className:"tb_g_s_share_ico__ tb__icon tb-linkedin",children:" "}),(0,d.jsx)("div",{className:"tb_g_s_share_ico_txt",children:"LinkedIn"})]})]})})]}):""]}):null})},f=t=>{let{itemData:e,personalization:s,adjustWidth:a,ThemeRule:i,clickToShowPopUp:o,itemIndex:l,wallID:r,ownerId:c,onClickToCTA:_,wall:p}=t;const u=2===e.type||3===e.type||4===e.type||5===e.type,f=e.rating>0,j=e.rating>0?"tb_g_s_rating_content":"tb_g_s_content",y=n.ZQ&&(0,v.mD)(5)?"tb_g_s_rating_content_review":"",k=1===e.type&&s.textDecorate?"tb_g_s_text_decoration tb_g_s_text_post":"",N=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),I=!(!(N||i.socialAction||i.shareOption)||n.bX),D=e.content,T=n.bX?{padding:i.spacing}:null;return(0,d.jsx)("div",{id:"tb-cc-post-".concat(e.id),className:"tb_g_s_post_wrapper",style:{width:"".concat(a,"%"),padding:s.padding/2},"tb-network":e.network.icon,children:(0,d.jsxs)("div",{className:"tb_g_s_post_in",onClick:o(l,e),style:T,children:[n.ZQ||(0,v.mD)(62)||(0,v.mD)(78)||(0,v.mD)(66)?u?(0,d.jsx)("div",{className:"tb_g_s_post_media_wrapp",children:(0,d.jsx)(m,{itemData:e,wallID:r,wall:p,ownerId:c},"img".concat(l,"_").concat(e.id))}):"":null,(0,d.jsxs)("div",{className:"tb_g_s_contant_wrapper",children:[(0,d.jsx)(h,{ownerId:c,postTime:e.createdAt,author:e.author,network:e.network,font:i,personalization:s,ThemeRule:i}),f&&(0,v.mD)(5)?(0,d.jsxs)("div",{className:"tb_g_s_rating__",children:[(0,d.jsx)(w.Z,{rating:e.rating,network:e.network})," "]}):"",i.hideContent&&1!=e.type||(0,v.mD)(63)?"":(0,d.jsx)(g.default,{item:e,contentClass:"".concat(j," ").concat(y," ").concat(k),content:D,font:i,ThemeRule:i,personalization:s,contentTitle:e.contentTitle}),f&&!(0,v.mD)(5)?(0,d.jsxs)("div",{className:"tb_g_s_rating__",children:[(0,d.jsx)(w.Z,{rating:e.rating,network:e.network})," "]}):""]}),n.ZQ||(0,v.mD)(62)||(0,v.mD)(78)||(0,v.mD)(66)?null:u?(0,d.jsx)("div",{className:"tb_g_s_post_media_wrapp",children:(0,d.jsx)(m,{itemData:e,wallID:r,wall:p,ownerId:c},"img".concat(l,"_").concat(e.id))}):"",I||N||i.shareOption?(0,d.jsxs)("div",{className:"tb_g_s_post_actions",children:[N?(0,d.jsxs)("div",{className:"tb_g_s_post_cta",children:[(0,d.jsx)(b.Z,{ctaClass:"tb_g_s_post_cta_btn",cta:e.cta,item:e,onClickToCTA:_})," "]}):"",I?(0,d.jsx)(x,{itemData:e,ThemeRule:i}):""]}):""]})})};var j=s(43411),y=s(40475),k=s(20678);class N extends a.Component{constructor(){super(...arguments),this.state={postData:[],loadData:1},this.onLoadMasonry=()=>{this.editorHeight()},this.editorHeight=()=>{var t=document.querySelector(".tb_g_s_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight("".concat(e))}}}}componentDidMount(){const{postData:t}=this.props,e=this;this.onLoadMasonry(),window.addEventListener("resize",(function(t){e.editorHeight()}),!0)}componentWillUnmount(){const t=this;window.removeEventListener("resize",(function(e){t.editorHeight()}),!0)}componentWillReceiveProps(t){const{postData:e}=t;this.props.postData!=t.postData&&this.onLoadMasonry()}shouldComponentUpdate(t,e){return this.props.postData!=t.postData}render(){const{postData:t,completeDataObject:e,adjustWidth:s,wall:a,languageSetting:i,clickToShowPopUp:n,onClickToCTA:l}=this.props,{loadData:r}=this.state;return(0,d.jsx)(k.Z,{wall:a,parentId:"tb_marquee",renderID:"square",children:(0,d.jsx)("div",{id:"tb_marquee",children:(0,d.jsx)(o(),{id:"square",className:"tb_g_s_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_g_s_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:(null===t||void 0===t?void 0:t.length)>0&&t.map(((o,r)=>{const c=e[o];return(0,d.jsx)(f,{ownerId:a.Wall.owner,itemData:c,itemIndex:r,adjustWidth:1==c.highlight?2*s:s,personalization:a.Personalization,ThemeRule:a.ThemeRule,completeDataObject:e,postData:t,languageSetting:i,wallID:a.Wall.id,clickToShowPopUp:n,onClickToCTA:l,wall:a},"cls_crd_".concat(r,"_").concat(c.id))}))})})})}}const I=(0,j.$j)((t=>({postHeight:t.postHeight.data})),(t=>({managePostHeight:e=>t((0,y.B0)(e))})))(N)},2406:(t,e,s)=>{"use strict";e.Ad=void 0;var a=s(84228);var i=s(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return i.getImageSize}});var o=s(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,s)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const a=s(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((s,i)=>{if("undefined"===typeof window)return i(a.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return i(a.ErrorMessage.URL_IS_NOT_DEFINED);let o=null;const n=new Image;n.addEventListener("load",(()=>{o&&window.clearTimeout(o),s({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(t=>{o&&window.clearTimeout(o),i("".concat(t.type,": ").concat(t.message))})),n.src=t,e.timeout&&(o=window.setTimeout((()=>i(a.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,s){"use strict";var a=this&&this.__awaiter||function(t,e,s,a){return new(s||(s=Promise))((function(i,o){function n(t){try{r(a.next(t))}catch(e){o(e)}}function l(t){try{r(a.throw(t))}catch(e){o(e)}}function r(t){var e;t.done?i(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(n,l)}r((a=a.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const i=s(47313),o=s(65786);e.useImageSize=(t,e)=>{const[s,n]=(0,i.useState)(null),[l,r]=(0,i.useState)(!1),[c,d]=(0,i.useState)(null);return(0,i.useEffect)((()=>{a(void 0,void 0,void 0,(function*(){r(!0),n(null);try{const{width:s,height:a}=yield(0,o.getImageSize)(t,e);n({width:s,height:a})}catch(c){d(c.toString())}finally{r(!1)}}))}),[t,e]),[s,{loading:l,error:c}]}},50247:()=>{}}]);