(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1917,4261,8342,9239,5790,5810],{89239:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=a(47313),i=a(17739),o=a(98935),n=a(46417);class r extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:a}=this.props;return(0,n.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,i.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,n.jsx)(o.Z,{authorClass:e,username:t.name,network:a,color:null===a.id?"#000":a.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});var s=a(47313),i=a(46417);const o=t=>{let{username:e,network:a,authorClass:s,errorPic:o}=t;const n="#ffffff"==a.color?"#000":a.color;return(0,i.jsx)("img",{className:"".concat(s,"__"),src:o||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===a.id?"#000":n).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},n=(0,s.memo)(o)},97915:(t,e,a)=>{"use strict";a.d(e,{Z:()=>p});var s=a(47313),i=a(43411),o=a(83773),n=a(6119),r=a(17739),c=a(46417);const l=(0,o.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),d=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,a=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",s=t.product_price>0||t.product_discount>0?"".concat(a,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(s,"\n        </a>")};class h extends s.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:a}=this.state,s=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return s.status?(0,c.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const i=(0,r.i1)();return(0,c.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(i),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(a==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,c.jsx)("div",{className:"tb_hotspot__ ".concat(0==s.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,c.jsx)(l,{children:(0,c.jsx)(n.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(i),clickable:!0,html:d(t.UgcProduct)})})]},e)}))}):null}}const p=(0,i.$j)((t=>({appData:t.appData})))(h)},84261:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>h});var s=a(47313),i=a(40475),o=a(97915),n=a(2406),r=a(17739),c=a(98501),l=a(35179),d=a(46417);class h extends s.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const a=document.querySelector(".track".concat(this.props.data.id));a&&(a.setAttribute("data-height",e),a.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:a}=await(0,n.Ad)(e.postFileNew);this.setState({paddingBottom:100*a/t,size:{height:parseInt(a),width:parseInt(t)}})}catch(a){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgSize:{...this.state.imgSize,small:t.target.src}});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(a){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,imgSize:{small:t.data.postFileNew,large:t.data.filename,orignal:t.data.file},size:{height:100,width:100}}}componentWillMount(){const{data:t,hotspot:e,size:a}=this.props;t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:a})}componentDidMount(){const{data:t,hotspot:e,size:a}=this.props;!a||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:a})}render(){const{ImageClass:t,data:e,wallID:a,themeID:s,ownerId:n,hotspot:h}=this.props,{imgUrl:p,paddingBottom:u,size:_,fixedPaddingBottom:m,imgSize:g,noPadding:b}=this.state,w={paddingBottom:"".concat(this.props.size?1==this.props.size?null:m:u,"%")},f={backgroundImage:"url(".concat(g.small,")")};if(_.width>_.height)var v="100%",x="".concat(_.height/_.width*100,"%");else x="100%",v="".concat(_.width/_.height*100,"%");const y=!!(e.hotspot&&e.ugc_products.length>0&&h),I={width:y&&this.props.size?v:null,height:y&&this.props.size?x:null};return(0,d.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:w,children:[y?(0,d.jsx)("div",{className:"tb_blur_bg_",style:f}):null,(0,d.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:I,children:[y?(0,d.jsx)(o.Z,{product:e.ugc_products}):null,(0,d.jsx)("img",{className:"".concat(t," track").concat(e.id),role:"img",src:g.small,srcSet:l.bX&&b?"".concat(g.large,", 991w ").concat(g.small,", 480w"):null,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":a,"data-owner-id":n,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":s,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(c.do,"/media/images/error/no-image.svg"),(0,i.ht)(t)},alt:(0,r.P)(p)})]})]})}}},64442:(t,e,a)=>{"use strict";a.d(e,{Z:()=>p});var s=a(47313),i=a(2406),o=a(20510),n=a.n(o),r=a(40475),c=a(35179),l=(a(17739),a(46417));const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class h extends s.Component{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:a}=await(0,i.Ad)(e.postFileNew);this.setState({paddingBottom:100*a/t})}catch(a){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=s.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(a){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:a,isCover:s,controls:i,autoPlay:o,handleVideoEnded:h,muted:p,themeID:u,intervalTime:_}=this.props,{paddingBottom:m,videoLoaded:g,isVisible:b}=this.state,w={small:e.postFileNew,large:e.filename,orignal:e.file},f=[74,76,77].includes(u),v={paddingBottom:"".concat(f&&c.bX?null:m,"%")},x=null!==e&&void 0!==e&&e.loopStop?e.mediaUrl:e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:v,ref:this.videoRef,children:(0,l.jsx)(n(),{className:"".concat(t," video").concat(e.id),url:d(x,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":a,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata",poster:f?w.large:w.small}}},loop:!(c.bX&&!c.aL&&null!==e&&void 0!==e&&e.loopStop),onError:t=>{e.stories&&0!=e.stories||(0,r.ib)(t,e.id),f&&h&&setTimeout((()=>{h()}),1e3*_)},autoPlay:c.bX?b:o,muted:p,volume:o?1:0,playsinline:!0,onReady:t=>{c.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:c.ig||c.bX?b:o,height:"100%",width:"100%",controls:i||!1,style:{backgroundImage:"url(".concat(f?w.large:w.small,")"),backgroundSize:s?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})})}}const p=(0,s.memo)(h)},25810:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=a(47313),i=a(35179),o=a(46417);const n=s.lazy((()=>a.e(5867).then(a.bind(a,95867))));class r extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a,isDefault:r,Personalization:c}=this.props,l=!!r&&(7!==t.id&&4!==t.id&&36!==t.id),d=i.ZQ&&36==t.id?"tagembed":t.icon;return l?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,o.jsx)("div",{})}):(0,o.jsxs)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(n,{network:t,networkClass:e})]})}}},62245:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>l});var s=a(47313),i=a(16390),o=a(17739),n=a(35179),r=a(30584),c=a(46417);class l extends s.PureComponent{constructor(t){super(t),this.contentRef=s.createRef()}componentDidMount(){n.ZQ&&setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:a,font:s,personalization:l,item:d,contentTitle:h,readMore:p,maxLength:u,textAlign:_,maxLines:m,isReadMore:g}=this.props,b={WebkitLineClamp:m,textAlign:a.textAlignment};let w=20==d.network.id||n.bX&&!n.aL?e:(0,o.Fx)(e);12==d.network.id&&(w=(0,i.ZP)(w));const f="".concat(a.lineTrim?" tb_content_line-".concat(a.lineTrim):""),v="".concat(t," ").concat(g?"":f);return(0,c.jsxs)("div",{className:v,ref:this.contentRef,style:b,children:[h?(0,c.jsx)("div",{className:"tb_bold_txt__",children:(0,i.ZP)(h)}):null,(0,c.jsx)(r.Z,{data:d,content:w,Personalization:l})]})}}},30584:(t,e,a)=>{"use strict";a.d(e,{Z:()=>d});var s=a(47313),i=a(91523),o=a(16390),n=a(46417);const r=a(77560),c=t=>(0,n.jsx)(i.default,{children:(0,o.ZP)(t)}),l=t=>{let{data:e,content:a,Personalization:s}=t;const i={color:s.hashtag_color,fontWeight:"bold",backgroundColor:1==s.hashtag_background_status?s.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,n.jsx)(n.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,o.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?c(window.slackdown.parse(r(a,/#(\w+)/g,((t,e)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:i,children:["#",t]}))),e.slackMember)):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?c(window.slackdown.parse(r(a,e.hash.hashString,((t,e)=>(0,n.jsx)("div",{className:"tb_text_hashtag",style:i,children:t}))),e.slackMember)):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?c(window.slackdown.parse(r(a,/#(\w+)/g,((t,a)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:i,children:["#",t]},"".concat(e.id,"_").concat(a)))),e.slackMember)):c(window.slackdown.parse(a,e.slackMember))}):(0,n.jsx)(n.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,o.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?r((0,o.ZP)(a),/#(\w+)/g,((t,e)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:i,children:["#",t]}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?r((0,o.ZP)(a),e.hash.hashString,((t,e)=>(0,n.jsx)("div",{className:"tb_text_hashtag",style:i,children:t}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?r((0,o.ZP)(a),/#(\w+)/g,((t,a)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:i,children:["#",t]},"".concat(e.id,"_").concat(a)))):(0,o.ZP)(a)})},d=(0,s.memo)(l)},90905:(t,e,a)=>{"use strict";a.d(e,{Z:()=>c});var s=a(47313),i=a(35179),o=a(46417);const n=t=>{let{network:e}=t;const a={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:i.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:i.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:s,color:n}=a[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,o.jsx)("div",{className:s,style:{color:n},"tb-network":e.id,children:(0,o.jsx)("div",{})})},r=t=>{let{ThemeID:e}=t;const{className:a,color:s}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,o.jsx)("div",{className:a,style:{color:s},"tb-network":e})};class c extends s.PureComponent{render(){const{rating:t,network:e,ThemeID:a}=this.props;return(0,o.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,s)=>a?(0,o.jsx)(r,{ThemeID:a},s):(0,o.jsx)(n,{network:e},s))):null})}}},55790:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=a(47313),i=a(17739),o=a(46417);const n=t=>{const{postTime:e,timeClass:a}=t;return(0,o.jsx)("div",{className:a,children:(0,i.Sy)(e)})},r=(0,s.memo)(n)},5309:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>x});var s=a(47313),i=a(89239),o=a(55790),n=a(46417);class r extends s.PureComponent{render(){const{author:t,personalization:e,postTime:a,network:s}=this.props,r=t.username&&t.username.length>0?"@".concat(t.username):"",c=!(!e.postAuthor||t.isInstaUser),l=!(!e.postAuthor||!e.postTime||t.isInstaUser);return(0,n.jsx)("div",{className:"tb_ss_author_wrapper",children:(0,n.jsxs)("div",{className:"tb_ss_author",children:[c?(0,n.jsx)(i.default,{author:t,authorClass:"tb_ss_author_profile",network:s}):"",(0,n.jsxs)("div",{className:"tb_ss_author_info",children:[c?(0,n.jsx)("div",{className:"tb_ss_authorname",children:t.name}):"",(0,n.jsxs)("div",{className:"tb_ss_post_info",children:[c?(0,n.jsx)("div",{className:"tb_ss_username",children:r}):"",l?(0,n.jsx)("div",{className:"tb_ss_seprator",children:" "}):"",e.postTime?(0,n.jsx)(o.default,{postTime:a,timeClass:"tb_ss_time"}):""]})]})]})})}}var c=a(35179),l=a(84261),d=a(64442);const h=t=>{let{itemData:e,wallID:a,ownerId:s,wall:i,autoPlay:o,handleVideoEnded:r,intervalTime:h}=t;const p=(3===e.type||5===e.type)&&o;return(0,n.jsx)("div",{className:"tb_ss_media_wrap",children:p?(0,n.jsx)(d.Z,{VideoClass:"tb_ss_video",data:e,wallID:a,themeID:i.Personalization.widgetTheme,ownerId:s,size:1,isCover:!0,controls:!1,autoPlay:!c.P2,muted:!0,handleVideoEnded:r,intervalTime:h}):(0,n.jsx)(l.default,{ImageClass:"tb_ss_image",data:e,wallID:a,themeID:i.Personalization.widgetTheme,ownerId:s,size:1,ThemeRule:i.ThemeRule})})};var p=a(62245),u=a(90905),_=a(17739),m=a(25810);a(98501);class g extends s.PureComponent{constructor(t){super(t),this.updateIndex=()=>{const{handleSlideChange:t}=this.props;t()},this.updateHeight=()=>{this.contentRef.current&&this.setState({contentHeight:this.contentRef.current.offsetHeight})},this.state={contentHeight:0},this.contentRef=s.createRef()}componentDidMount(){this.updateHeight();const{currentIndex:t,intervalTime:e,itemIndex:a,itemData:s,personalization:i}=this.props;(t==a&&(2==s.type||4==s.type||3==s.type||5==s.type||1==s.type&&0==i.playFullVideo)||1==s.type&&1==i.playFullVideo)&&(this.intervalId=setTimeout(this.updateIndex,1e3*e)),window.addEventListener("resize",this.updateHeight)}componentWillUnmount(){window.removeEventListener("resize",this.updateHeight),clearInterval(this.intervalId)}componentWillReceiveProps(t){const{itemIndex:e,personalization:a}=this.props;t.currentIndex!=e&&clearInterval(this.intervalId),(t.currentIndex==e&&!c.aL&&(2==t.itemData.type||4==t.itemData.type||(3==t.itemData.type||5==t.itemData.type||1==t.itemData.type)&&0==a.playFullVideo)||1==t.itemData.type&&1==a.playFullVideo)&&(this.intervalId=setTimeout(this.updateIndex,1e3*t.intervalTime))}render(){const{contentHeight:t}=this.state,{itemData:e,personalization:a,ThemeRule:s,wallID:i,ownerId:o,wall:l,autoPlay:d,intervalTime:g}=this.props,b=a.signageTheme,w=!(2!==e.type&&3!==e.type&&4!==e.type&&5!==e.type||!d),f=(2===e.type||4===e.type)&&77==b,v=e.rating>0,x=e.rating>0?"tb_ss_rating_content":"tb_ss_content",y=1===e.type&&a.textDecorate?"tb_ss_text_decoration tb_ss_text_post":"",I=a.trimcontent?(0,_.Sv)(e.content,50):e.content,j=!!s.socialAction,k=!(1==e.type||!e.hideContent||j),N={backgroundImage:"url(".concat(e.postFileNew,")")},S=74==b?" tb_mss_t":76==b?" tb_css_t":77==b?" tb_zss_t":"",T=((t-350)/50).toFixed();return(0,n.jsxs)("div",{id:"tb-ss-post-".concat(e.id),className:"tb_ss_post_wrapper".concat(S),"tb-network":e.network.icon,children:[74==b?(0,n.jsx)("div",{className:"tb_ss_blur_bg",style:N,children:(0,n.jsx)("div",{})}):76==b?(0,n.jsx)("div",{className:"tb_ss_bg_color","data-network":e.network.id,style:{},children:(0,n.jsx)("div",{})}):null,(0,n.jsx)("div",{className:"tb_ss_post_article".concat(77==b?" tb_ss_post_article_full":"").concat(1===e.type?" tb_ss_text_article":"").concat(k?" tb_ss_media_article":""),children:(0,n.jsxs)("div",{className:"tb_ss_post_in",children:[w?(0,n.jsx)("div",{className:"tb_ss_post_media_wrapp ".concat(f?" tb_ss_post_animated_media":""),children:(0,n.jsx)(h,{itemData:{...e,postFileNew:e.filename,loopStop:1==a.playFullVideo},wallID:i,ownerId:o,ThemeRule:s,wall:l,autoPlay:!c.P2,handleVideoEnded:1==a.playFullVideo?this.updateIndex:{},intervalTime:g})}):"",k?"":(0,n.jsx)("div",{className:"tb_ss_contant_wrapper",ref:this.contentRef,children:(0,n.jsxs)("div",{className:"tb_ss_contant_wrap_in",children:[j?(0,n.jsx)("div",{className:"tb_ss_social_",children:(0,n.jsx)(m.default,{networkClass:"tb_ss_social_ico",network:e.network,isDefault:1===s.iconType,ThemeRule:s})}):"",v?(0,n.jsx)("div",{className:"tb_ss_rating_ _",children:(0,n.jsx)(u.Z,{rating:e.rating,network:e.network})}):"",e.hideContent?"":(0,n.jsx)(p.default,{contentClass:"".concat(x," ").concat(y),item:e,content:I,font:e.font,maxLines:T,ThemeRule:s,personalization:a,contentTitle:e.contentTitle}),(0,n.jsx)(r,{postTime:e.createdAt,author:e.author,network:e.network,font:e.font,personalization:a,ThemeRule:s})]})})]})})]})}}var b=a(43411),w=a(40475),f=a(11774);a(37210);class v extends s.PureComponent{constructor(t){super(t),this.state={currentIndex:0},this.handleSlideChange=()=>{const{currentIndex:t}=this.state,e=t+1;this.myRef&&this.myRef.current&&(e<this.myRef.current.slides.length?this.myRef.current.splide.go(e):this.myRef.current.splide.go(0))},this.myRef=s.createRef()}componentDidUpdate(t,e){return t.postData!==this.props.postData||this.state.currentIndex!=e.currentIndex}render(){var t;const{postData:e,completeDataObject:a,wall:s,languageSetting:i,clickToShowPopUp:o,onClickToCTA:r}=this.props,c=(null===s||void 0===s||null===(t=s.Personalization)||void 0===t?void 0:t.slideDelay)||5,{currentIndex:l}=this.state;return(0,n.jsx)("div",{className:"tb_ss_post_container",children:(0,n.jsx)(f.tv,{hasTrack:!1,className:"tb_ss_slider_wrappper",options:{type:"fade",rewind:!0,speed:1e3,perPage:1,perMove:1,gap:0,autoplay:!1,pauseOnHover:!1,padding:0,pagination:!1,arrows:!1},ref:this.myRef,onActive:(t,e,a)=>this.setState({currentIndex:e.index}),children:(0,n.jsx)(f.Gj,{children:e&&e.length>0&&e.map(((t,e)=>{const i=a[t];return(0,n.jsx)(f.jw,{children:(0,n.jsx)(g,{ownerId:s.Wall.owner,autoPlay:l==e,itemData:i,itemIndex:e,personalization:s.Personalization,ThemeRule:s.ThemeRule,wallID:s.Wall.id,onClickToCTA:r,wall:s,currentIndex:l,handleSlideChange:this.handleSlideChange,intervalTime:c})},e)}))})})})}}const x=(0,b.$j)((t=>({})),(t=>({managePostHeight:e=>t((0,w.B0)(e))})))(v)},61729:(t,e,a)=>{"use strict";var s=a(79165);function i(){}function o(){}o.resetWarningCache=i,t.exports=function(){function t(t,e,a,i,o,n){if(n!==s){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function e(){return t}t.isRequired=t;var a={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:i};return a.PropTypes=a,a}},75192:(t,e,a)=>{t.exports=a(61729)()},79165:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2406:(t,e,a)=>{"use strict";e.Ad=void 0;var s=a(84228);var i=a(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return i.getImageSize}});var o=a(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,a)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const s=a(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((a,i)=>{if("undefined"===typeof window)return i(s.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return i(s.ErrorMessage.URL_IS_NOT_DEFINED);let o=null;const n=new Image;n.addEventListener("load",(()=>{o&&window.clearTimeout(o),a({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(t=>{o&&window.clearTimeout(o),i("".concat(t.type,": ").concat(t.message))})),n.src=t,e.timeout&&(o=window.setTimeout((()=>i(s.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,a){"use strict";var s=this&&this.__awaiter||function(t,e,a,s){return new(a||(a=Promise))((function(i,o){function n(t){try{c(s.next(t))}catch(e){o(e)}}function r(t){try{c(s.throw(t))}catch(e){o(e)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(n,r)}c((s=s.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const i=a(47313),o=a(65786);e.useImageSize=(t,e)=>{const[a,n]=(0,i.useState)(null),[r,c]=(0,i.useState)(!1),[l,d]=(0,i.useState)(null);return(0,i.useEffect)((()=>{s(void 0,void 0,void 0,(function*(){c(!0),n(null);try{const{width:a,height:s}=yield(0,o.getImageSize)(t,e);n({width:a,height:s})}catch(l){d(l.toString())}finally{c(!1)}}))}),[t,e]),[a,{loading:r,error:l}]}},37210:()=>{},50247:()=>{}}]);