(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7241,4261,8342,9239,5790,5810],{89239:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=a(47313),i=a(17739),o=a(98935),n=a(46417);class r extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:a}=this.props;return(0,n.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,i.P)(t.picture),width:44,height:44,onError:e=>{const s="#ffffff"==a.color?"#000":a.color;e.target.src=t.errorPic?t.errorPic:"https://ui-avatars.com/api/?name=".concat(t.name.replace(/\s/g,""),"&background=").concat(String(null===a.id?"#000":s).replace("#",""),"&color=fff&length=1"),e.target.alt=t.name}}):(0,n.jsx)(o.Z,{authorClass:e,username:t.name,network:a,color:null===a.id?"#000":a.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});var s=a(47313),i=a(46417);const o=t=>{let{username:e,network:a,authorClass:s,errorPic:o}=t;const n="#ffffff"==a.color?"#000":a.color;return(0,i.jsx)("img",{className:"".concat(s,"__"),src:o||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===a.id?"#000":n).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},n=(0,s.memo)(o)},7138:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});var s=a(47313),i=a(46417);class o extends s.PureComponent{render(){const{cta:t,ctaClass:e,postCta:a,onClickToCTA:s,item:o}=this.props,n=!(!a||1!==a.status);return(0,i.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),s(o),window.open("".concat(n?a.url:t.url),"_blank")},children:[" ",n?a.text:t.text]})}}const n=o},97915:(t,e,a)=>{"use strict";a.d(e,{Z:()=>_});var s=a(47313),i=a(43411),o=a(83773),n=a(6119),r=a(17739),c=a(46417);const l=(0,o.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),d=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,a=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",s=t.product_price>0||t.product_discount>0?"".concat(a,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(s,"\n        </a>")};class h extends s.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:a}=this.state,s=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return s.status?(0,c.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const i=(0,r.i1)();return(0,c.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(i),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(a==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,c.jsx)("div",{className:"tb_hotspot__ ".concat(0==s.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,c.jsx)(l,{children:(0,c.jsx)(n.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(i),clickable:!0,html:d(t.UgcProduct)})})]},e)}))}):null}}const _=(0,i.$j)((t=>({appData:t.appData})))(h)},84261:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>h});var s=a(47313),i=a(43635),o=a(97915),n=a(2406),r=a(17739),c=a(98501),l=a(35179),d=a(46417);class h extends s.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const a=document.querySelector(".track".concat(this.props.data.id));a&&(a.setAttribute("data-height",e),a.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:a}=await(0,n.Ad)(e.postFileNew);this.setState({paddingBottom:100*a/t,size:{height:parseInt(a),width:parseInt(t)}})}catch(a){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgSize:{...this.state.imgSize,small:t.target.src}});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(a){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,imgSize:{small:t.data.postFileNew,large:t.data.filename,orignal:t.data.file},size:{height:100,width:100},isVisible:!1},this.videoRef=s.createRef(),this.observer=null}componentWillMount(){const{data:t,hotspot:e,size:a}=this.props;!a||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:a})}componentDidMount(){const{data:t,hotspot:e,size:a}=this.props;!a||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:a});try{this.observer=new IntersectionObserver((t=>{let[e]=t;e.isIntersecting&&(this.setState({isVisible:e.isIntersecting}),this.observer.disconnect())}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(s){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.observer.disconnect()}render(){const{ImageClass:t,data:e,wallID:a,themeID:s,ownerId:n,hotspot:h}=this.props,{imgUrl:_,paddingBottom:p,size:u,fixedPaddingBottom:m,imgSize:g,noPadding:b,isVisible:w}=this.state,f={paddingBottom:"".concat(this.props.size?1==this.props.size?null:m:p,"%")},v={backgroundImage:"url(".concat(g.small,")")};if(u.width>u.height)var x="100%",k="".concat(u.height/u.width*100,"%");else k="100%",x="".concat(u.width/u.height*100,"%");const j=!!(e.hotspot&&e.ugc_products.length>0&&h),I={width:j&&this.props.size?x:null,height:j&&this.props.size?k:null};return(0,d.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:f,ref:this.videoRef,children:[j?(0,d.jsx)("div",{className:"tb_blur_bg_",style:v}):null,(0,d.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:I,children:[j?(0,d.jsx)(o.Z,{product:e.ugc_products}):null,(0,d.jsx)("img",{className:"".concat(t," track").concat(e.id),role:"img",src:w?g.small:e.optmizedImg,srcSet:w?l.bX&&b?"".concat(g.large,", 991w ").concat(g.small,", 480w"):null:e.optmizedImg,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":a,"data-owner-id":n,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":s,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(c.do,"/media/images/error/no-image.svg"),(0,i.ht)(t)},alt:(0,r.P)(_)})]})]})}}},64442:(t,e,a)=>{"use strict";a.d(e,{Z:()=>h});var s=a(47313),i=(a(2406),a(20510)),o=a.n(i),n=a(43635),r=a(35179),c=(a(17739),a(46417));const l=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class d extends s.Component{constructor(t){super(t),this.setVideoLoaded=t=>{this.setState({videoLoaded:!0})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=s.createRef(),this.observer=null,this.observerTimeout=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0)}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0);try{let t;this.observer=new IntersectionObserver((e=>{let[a]=e;clearTimeout(t),this.observerTimeout=setTimeout((()=>{this.setState({isVisible:a.isIntersecting})}),100)}),{threshold:.01}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(a){console.error("IntersectionObserver error:",a),this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current),clearTimeout(this.observerTimeout)}render(){const{VideoClass:t,data:e,wallID:a,isCover:s,controls:i,autoPlay:d,handleVideoEnded:h,muted:_,themeID:p,intervalTime:u}=this.props,{paddingBottom:m,videoLoaded:g,isVisible:b}=this.state;console.log("muted-autoPlay-isVisible",_,d,b);const w={small:e.postFileNew,large:e.filename,orignal:e.file},f=[74,76,77].includes(p),v={paddingBottom:"".concat(f&&r.bX?null:m,"%")},x=null!==e&&void 0!==e&&e.loopStop?e.mediaUrl:e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,c.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:v,ref:this.videoRef,children:(0,c.jsx)(o(),{className:"".concat(t," video").concat(e.id),url:l(x,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":a,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%"),poster:e.postFileNew}},file:{attributes:{preload:"metadata",poster:e.postFileNew}}},loop:!(r.bX&&!r.aL&&null!==e&&void 0!==e&&e.loopStop),onError:t=>{!r.P2||e.stories&&0!=e.stories||(0,n.ib)(t,e.id),f&&h&&setTimeout((()=>{h()}),1e3*u)},autoPlay:r.bX?b:d,muted:_,volume:d?1:0,playsinline:!0,onReady:t=>{r.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},onLoadedData:this.setVideoLoaded,playing:r.ig||r.bX?b:d,onPlay:()=>console.log("Video is playing"),height:"100%",width:"100%",controls:i||!1,style:{backgroundImage:"url(".concat(f?w.large:w.small,")"),backgroundSize:s?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})})}}const h=(0,s.memo)(d)},25810:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=a(47313),i=a(35179),o=a(46417);const n=s.lazy((()=>a.e(5867).then(a.bind(a,95867))));class r extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a,isDefault:r,Personalization:c}=this.props,l=!!r&&(7!==t.id&&4!==t.id&&36!==t.id),d=i.ZQ&&36==t.id?"tagembed":t.icon;return l?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,o.jsx)("div",{})}):(0,o.jsxs)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(n,{network:t,networkClass:e})]})}}},62245:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>l});var s=a(47313),i=a(16390),o=a(17739),n=a(35179),r=a(30584),c=a(46417);class l extends s.PureComponent{constructor(t){super(t),this.contentRef=s.createRef()}componentDidMount(){n.ZQ&&setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:a,font:s,personalization:l,item:d,contentTitle:h,readMore:_,maxLength:p,textAlign:u,maxLines:m,isReadMore:g}=this.props,b={WebkitLineClamp:m,textAlign:a.textAlignment};let w=20==d.network.id||n.bX&&!n.aL?e:(0,o.Fx)(e);12==d.network.id&&(w=(0,i.ZP)(w));const f="".concat(a.lineTrim?" tb_content_line-".concat(a.lineTrim):""),v="".concat(t," ").concat(g?"":f);return(0,c.jsxs)("div",{className:v,ref:this.contentRef,style:b,children:[h?(0,c.jsx)("div",{className:"tb_bold_txt__",children:(0,i.ZP)(h)}):null,(0,c.jsx)(r.Z,{data:d,content:w,Personalization:l,ThemeRule:a})]})}}},30584:(t,e,a)=>{"use strict";a.d(e,{Z:()=>d});var s=a(47313),i=a(91523),o=a(16390),n=a(46417);const r=a(77560),c=(t,e)=>(0,n.jsx)(i.default,{style:e&&[66,70].includes(null===e||void 0===e?void 0:e.themeId)?{width:e.fontSize,height:e.fontSize}:null,children:(0,o.ZP)(t)}),l=t=>{let{data:e,content:a,Personalization:s,ThemeRule:i}=t;const l={color:s.hashtag_color,fontWeight:"bold",backgroundColor:1==s.hashtag_background_status?s.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,n.jsx)(n.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,o.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?c(window.slackdown.parse(r(a,/#(\w+)/g,((t,e)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:l,children:["#",t]}))),e.slackMember),i):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?c(window.slackdown.parse(r(a,e.hash.hashString,((t,e)=>(0,n.jsx)("div",{className:"tb_text_hashtag",style:l,children:t}))),e.slackMember),i):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?c(window.slackdown.parse(r(a,/#(\w+)/g,((t,a)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:l,children:["#",t]},"".concat(e.id,"_").concat(a)))),e.slackMember),i):c(window.slackdown.parse(a,e.slackMember),i)}):(0,n.jsx)(n.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,o.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?r((0,o.ZP)(a),/#(\w+)/g,((t,e)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:l,children:["#",t]}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?r((0,o.ZP)(a),e.hash.hashString,((t,e)=>(0,n.jsx)("strong",{className:"tb_text_hashtag",style:l,children:t}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?r((0,o.ZP)(a),/#(\w+)/g,((t,a)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:l,children:["#",t]},"".concat(e.id,"_").concat(a)))):c(a,i)})},d=(0,s.memo)(l)},90905:(t,e,a)=>{"use strict";a.d(e,{Z:()=>c});var s=a(47313),i=a(35179),o=a(46417);const n=t=>{let{network:e}=t;const a={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:i.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:i.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:s,color:n}=a[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,o.jsx)("div",{className:s,style:{color:n},"tb-network":e.id,children:(0,o.jsx)("div",{})})},r=t=>{let{ThemeID:e}=t;const{className:a,color:s}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,o.jsx)("div",{className:a,style:{color:s},"tb-network":e})};class c extends s.PureComponent{render(){const{rating:t,network:e,ThemeID:a}=this.props;return(0,o.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,s)=>a?(0,o.jsx)(r,{ThemeID:a},s):(0,o.jsx)(n,{network:e},s))):null})}}},5744:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var s=a(47313),i=a(43635),o=a(35179),n=a(46417);class r extends s.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:a,wallID:s,ownerId:n}=this.props;e.stopPropagation(),o.ZQ||(0,i.S5)({type:2,action:2,wall:s,feed:a.feedId,post:a.referenceId?a.referenceId:a.id,owner:n}),(0,i.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,n.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,n.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(o.ZQ?"tb-share-fill":"tb-share"),children:(0,n.jsx)("div",{})}),(0,n.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,n.jsx)("div",{})})}):"",t.twitter?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,n.jsx)("div",{})})}):"",t.linkedin?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,n.jsx)("div",{})})}):""]})]})}}},32675:(t,e,a)=>{"use strict";a.d(e,{Z:()=>l});var s=a(47313),i=(a(35179),a(17739)),o=a(46417);const n=(t,e,a)=>1==t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,i.ok)(e)):a,r=(t,e,a)=>1==t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,i.ok)(e)):a,c=t=>{let{arialbl:e,hrefClick:a,Icon:s,count:n}=t;return(0,o.jsx)("div",{className:"tb_social_action__list",children:(0,o.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(a,"_blank")},className:"tb_social_action__ico_wrap",children:[(0,o.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(s),children:" "}),n>0?(0,o.jsx)("div",{className:"tb_social_action_counts__",children:(0,i.sy)(n)}):""]})})};class l extends s.PureComponent{render(){const{itemData:t,ThemeRule:e,actionClass:a,ThemeID:s}=this.props,l={color:3===s?1===e.iconType?e.iconColor:t.network.color:e.fontColor},d=t.network.id,h=3===d||10===d||7===d?"like":"heart",_=!![1,2,3,7,8,9,10,18].includes(d),p=![29,19].includes(d),u=t.network.name?t.network.name:"";return(0,o.jsx)(o.Fragment,{children:29!==d&&26!==d&&23!==d&&6!==d&&5!==d&&11!==d&&12!==d&&15!==d&&20!==d&&21!==d?(0,o.jsx)("div",{className:a,children:(0,o.jsxs)("div",{className:"tb_social_action__",children:[_?(0,o.jsx)(c,{arialbl:u,hrefClick:n(d,t.postId,t.link),Icon:h,iconColorStyle:l,count:t.like_count}):null,p?(0,o.jsx)(c,{arialbl:u,hrefClick:r(d,t.postId,t.link),Icon:"comment",iconColorStyle:l,count:t.comment_count}):null,1===d?(0,o.jsx)(c,{arialbl:u,hrefClick:"https://twitter.com/intent/retweet?tweet_id=".concat((0,i.ok)(t.postId)),Icon:"retweet",iconColorStyle:l,count:t.comment_count}):null,(0,o.jsx)(c,{arialbl:u,hrefClick:t.link,Icon:"eye",iconColorStyle:l,count:0})]})}):""})}}},55790:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=a(47313),i=a(17739),o=a(46417);const n=t=>{const{postTime:e,timeClass:a}=t;return(0,o.jsx)("div",{className:a,children:(0,i.Sy)(e)})},r=(0,s.memo)(n)},85156:(t,e,a)=>{"use strict";a.d(e,{Z:()=>v});var s=a(47313),i=a(64442),o=a(35179),n=a(84261),r=a(46417);const c=s.lazy((()=>a.e(695).then(a.bind(a,10695)))),l=t=>{let{itemData:e,wallID:a,ownerId:l,wall:d,isCover:h,ThemeRule:_}=t;const p=(3===e.type||5===e.type)&&1==d.ThemeRule.autoPlay;e.hotspot;return(0,r.jsxs)("div",{className:"tb_w_e_media_wrap",children:[o.aL&&d.Personalization.interactive?(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(c,{postId:e.id,wallID:a,UserDetail:d.UserDetail})}):null,p?(0,r.jsx)(i.Z,{VideoClass:"tb_w_e_video",data:e,wallID:a,themeID:d.Personalization.widgetTheme,wall:d,size:false,isCover:h,muted:!0,autoPlay:p,handleVideoEnded:()=>{}}):(0,r.jsx)(n.default,{ImageClass:"tb_w_e_image",data:e,wallID:a,themeID:d.Personalization.widgetTheme,ownerId:l,size:false,hotspot:!0})]})};var d=a(62245),h=a(5744),_=a(7138),p=a(90905),u=a(32675),m=a(55790),g=a(25810),b=a(89239);const w=t=>{let{author:e,personalization:a,postTime:i,network:o,ThemeRule:n,font:c,rating:l,ownerId:d,instaHash:h}=t;const _=e.username&&e.username.length>0?"@".concat(e.username):"",p=!(!a.postAuthor||e.isInstaUser),u=!(!a.postAuthor||!a.postTime||e.isInstaUser),w=!(null===o.id||""===o.id||!n.socialAction);return(0,r.jsxs)("div",{className:"tb_w_e_author_wrapper",children:[p?(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(b.default,{network:o,author:e,authorClass:"tb_w_e_author_profile"})}):"",(0,r.jsxs)("div",{className:"tb_w_e_author_info",children:[p?(0,r.jsx)("div",{className:"tb_w_e_authorname tb-cTBfont-".concat(n.font_varient),children:e.name}):"",(0,r.jsxs)("div",{className:"tb_w_e_post_info",children:[p?(0,r.jsx)("div",{className:"tb_w_e_username",children:_}):"",u?(0,r.jsx)("div",{className:"tb_w_e_seprator",children:" "}):"",a.postTime?(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(m.default,{postTime:i,timeClass:"tb_w_e_time tb-cTBfont-".concat(n.font_varient),authorColor:n.authorColor})}):""]})]}),w?(0,r.jsx)("div",{className:"tb_w_e_social_",children:(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(g.default,{networkClass:"tb_w_e_social_ico",network:o,isDefault:1===n.iconType,ThemeRule:n})})}):null]})};var f=a(17739);class v extends s.PureComponent{constructor(t){super(t),this.contentRef=t=>{this.setState({height:t})},this.contentRefHidden=t=>{this.setState({hiddenHeight:t})},this.toggleExpand=t=>{t.stopPropagation(),this.setState({isExpanded:!this.state.isExpanded})},this.state={isExpanded:!1,hiddenHeight:0,height:0},this.toggleExpand=this.toggleExpand.bind(this),this.postTrack=s.createRef()}componentDidMount(){o.nX&&(0,f.YN)(this.postTrack)}render(){var t;const{itemData:e,personalization:a,ThemeRule:i,clickToShowPopUp:n,itemIndex:c,wallID:m,ownerId:g,onClickToCTA:b,wall:v,languageSetting:x,adjustWidth:k}=this.props,{isExpanded:j,hiddenHeight:I,height:C}=this.state,N=2===e.type||3===e.type||4===e.type||5===e.type,T=!!(e.rating&&e.rating>0),y=e.rating>0?"tb_w_e_rating_content":"tb_w_e_content",S=1===e.type?"tb_w_e_text_post":"",P=1===e.type&&a.textDecorate?"tb_w_e_text_decoration":"",D=!(null===e||void 0===e||null===(t=e.cta)||void 0===t||!t.status),z=a.trimcontent?(0,f.Sv)(e.content,50):e.content,R=I>C;return(0,r.jsx)("div",{"item-id":e.id,id:"tb-hc-post-".concat(e.id),className:"tb_w_e_post_wrapper",ref:this.postTrack,"post-id":e.referenceId?e.referenceId:e.id,"feed-id":e.feedId,style:{width:"".concat(k,"%"),padding:a.padding/2},children:(0,r.jsxs)("div",{className:"tb_w_e_post_in",onClick:n(c,e),children:[(0,r.jsxs)("div",{className:"tb_w_e_post_media_wrapp",children:[e.share.status?(0,r.jsx)(h.Z,{share:e.share,shareClass:"tb_w_e_share_container",item:e,wallID:m,ownerId:g}):"",N?(0,r.jsx)(l,{itemData:e,wallID:m,wall:v,ownerId:g,size:!!a.trimcontent&&100,isCover:!!a.trimcontent,ThemeRule:i}):null]}),(0,r.jsxs)("div",{className:"tb_w_e_contant_wrapper ".concat(S),children:[(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(w,{ownerId:g,postTime:e.createdAt,author:e.author,network:e.network,font:i,personalization:a,ThemeRule:i,rating:e.rating,instaHash:e.instaHash})}),D?(0,r.jsxs)("div",{className:"tb_w_e_post_cta",onClick:t=>{t.stopPropagation()},children:[(0,r.jsx)(_.Z,{ctaClass:"tb_w_e_post_cta_btn",cta:a.cta,postCta:e.cta,item:e,onClickToCTA:b})," "]}):"",T?(0,r.jsx)("div",{className:"tb_w_e_rating__",children:(0,r.jsx)(p.Z,{rating:e.rating,network:e.network})}):null,o.ig&&i.hideContent||!o.ig&&!i.hideContent||1==e.type?(0,r.jsxs)("div",{className:"tb_w_e_content_wrapper__",children:[o.ZQ?(0,r.jsx)("div",{className:"tb_w_e_content_hidden",children:(0,r.jsx)(d.default,{contentClass:"".concat(y," ").concat(P),item:e,content:z,font:i,ThemeRule:i,personalization:a,contentTitle:e.contentTitle,contentRefCallBack:this.contentRefHidden,isReadMore:!0},e.id)}):null,(0,r.jsx)(d.default,{contentClass:"".concat(y," ").concat(P),item:e,content:z,font:i,ThemeRule:i,personalization:a,contentTitle:e.contentTitle,contentRefCallBack:this.contentRef,maxLines:j?"":i.lineTrim,isReadMore:!0},e.id),i.lineTrim>0&&R&&o.ZQ?(0,r.jsx)("div",{className:"tb_read_more_",onClick:this.toggleExpand,children:j?x.showLess:x.readMore}):null]}):null]}),o.ig||o.ZQ?i.socialAction?(0,r.jsx)(u.Z,{itemData:e,ThemeRule:i,ThemeID:a.widgetTheme,actionClass:"tb_w_e_social_action__"}):null:""]})})}}},7092:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>h});var s=a(47313),i=(a(17739),a(35179)),o=a(61395),n=a.n(o),r=a(85156),c=a(46417);const l=s.lazy((()=>Promise.all([a.e(7529),a.e(4222)]).then(a.bind(a,24222))));class d extends s.Component{constructor(){super(...arguments),this.state={activeID:-1,newPostdata:[],postData:[]},this.onLoadData=t=>{const{cardNumber:e,postData:a,completeDataObject:s,adjustWidth:i,wall:o,postSize:n,clickToShowPopUp:r,onClickToCTA:c,postSizeInPx:l}=t,{activeID:d}=this.state,h=o.ThemeRule.numberOfCoumn,_=Array.from({length:h},(()=>[]));a.forEach(((t,e)=>_[e%h].push(t))),_.forEach((t=>{for(;t.length<3;){const e=_[Math.floor(Math.random()*h)],a=e[Math.floor(Math.random()*e.length)];t.push(a)}})),this.setState({newPostdata:_,postData:a})},this.scrollInterval=null,this.componentDidMount=()=>{this.scrollInterval=setInterval((()=>this.onUpdateTimeInterVal()),3e3);const{heightUpdate:t}=this.props;setTimeout((()=>t()),1e3)},this.onUpdateTimeInterVal=()=>{const{activeID:t}=this.state,{cardNumber:e,wall:a}=this.props,s=a.ThemeRule.numberOfCoumn,i=parseInt(t)+1;this.setState({activeID:parseInt(s)>=i?i:0})}}componentWillMount(){this.onLoadData(this.props)}componentWillUnmount(){this.scrollInterval&&clearInterval(this.scrollInterval)}componentWillReceiveProps(t){if(JSON.stringify(t.postData)!==JSON.stringify(this.props.postData))return this.onLoadData(t),!0}render(){const{cardNumber:t,postData:e,completeDataObject:a,adjustWidth:o,wall:d,postSize:h,clickToShowPopUp:_,onClickToCTA:p,postSizeInPx:u}=this.props,{activeID:m,newPostdata:g}=this.state;return(0,c.jsxs)(c.Fragment,{children:[" ",i.aL?(0,c.jsx)(n(),{id:"pixel",className:"tb_w_e_post_container",tabIndex:"0","aria-label":"There are ".concat(e&&e.length>0?e.length:0," posts in the feed"),elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_w_e_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:(null===e||void 0===e?void 0:e.length)>0&&e.map(((t,e)=>{const s=a[t];return(0,c.jsx)(r.Z,{ownerId:d.Wall.owner,itemData:s,itemIndex:e,adjustWidth:o,personalization:d.Personalization,ThemeRule:d.ThemeRule,wallID:d.Wall.id,clickToShowPopUp:_,onClickToCTA:p,postSizeInPx:u,wall:d},"sqr_crd_".concat(e,"_").concat(s.id))}))}):(0,c.jsx)("div",{className:"tb_w_e_post_container",children:g.map(((t,e)=>(0,c.jsx)(s.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(l,{pIndex:e,itemIds:t,activeID:m,completeDataObject:a,wall:d,onClickToCTA:p,postSizeInPx:u,cardCount:g.length,clickToShowPopUp:_},"exhi_".concat(e,"_").concat(null===t||void 0===t?void 0:t.length))})))})]})}}const h=(0,s.memo)(d)},2406:(t,e,a)=>{"use strict";e.Ad=void 0;var s=a(84228);var i=a(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return i.getImageSize}});var o=a(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,a)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const s=a(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((a,i)=>{if("undefined"===typeof window)return i(s.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return i(s.ErrorMessage.URL_IS_NOT_DEFINED);let o=null;const n=new Image;n.addEventListener("load",(()=>{o&&window.clearTimeout(o),a({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(t=>{o&&window.clearTimeout(o),i("".concat(t.type,": ").concat(t.message))})),n.src=t,e.timeout&&(o=window.setTimeout((()=>i(s.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,a){"use strict";var s=this&&this.__awaiter||function(t,e,a,s){return new(a||(a=Promise))((function(i,o){function n(t){try{c(s.next(t))}catch(e){o(e)}}function r(t){try{c(s.throw(t))}catch(e){o(e)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(n,r)}c((s=s.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const i=a(47313),o=a(65786);e.useImageSize=(t,e)=>{const[a,n]=(0,i.useState)(null),[r,c]=(0,i.useState)(!1),[l,d]=(0,i.useState)(null);return(0,i.useEffect)((()=>{s(void 0,void 0,void 0,(function*(){c(!0),n(null);try{const{width:a,height:s}=yield(0,o.getImageSize)(t,e);n({width:a,height:s})}catch(l){d(l.toString())}finally{c(!1)}}))}),[t,e]),[a,{loading:r,error:l}]}},50247:()=>{}}]);