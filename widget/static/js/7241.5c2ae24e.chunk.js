(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7241,4261,8342,9239,5790,5810],{89239:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var i=a(47313),s=a(17739),o=a(98935),n=a(46417);class r extends i.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:a}=this.props;return(0,n.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,s.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,n.jsx)(o.Z,{authorClass:e,username:t.name,network:a,color:null===a.id?"#000":a.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});var i=a(47313),s=a(46417);const o=t=>{let{username:e,network:a,authorClass:i,errorPic:o}=t;const n="#ffffff"==a.color?"#000":a.color;return(0,s.jsx)("img",{className:"".concat(i,"__"),src:o||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===a.id?"#000":n).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},n=(0,i.memo)(o)},7138:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});var i=a(47313),s=a(46417);class o extends i.PureComponent{render(){const{cta:t,ctaClass:e,postCta:a,onClickToCTA:i,item:o}=this.props,n=!(!a||1!==a.status);return(0,s.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),i(o),window.open("".concat(n?a.url:t.url),"_blank")},children:[" ",n?a.text:t.text]})}}const n=o},97915:(t,e,a)=>{"use strict";a.d(e,{Z:()=>p});var i=a(47313),s=a(43411),o=a(83773),n=a(6119),r=a(17739),c=a(46417);const l=(0,o.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),d=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,a=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",i=t.product_price>0||t.product_discount>0?"".concat(a,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(i,"\n        </a>")};class h extends i.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:a}=this.state,i=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return i.status?(0,c.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const s=(0,r.i1)();return(0,c.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(s),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(a==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,c.jsx)("div",{className:"tb_hotspot__ ".concat(0==i.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,c.jsx)(l,{children:(0,c.jsx)(n.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(s),clickable:!0,html:d(t.UgcProduct)})})]},e)}))}):null}}const p=(0,s.$j)((t=>({appData:t.appData})))(h)},84261:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>h});var i=a(47313),s=a(40475),o=a(97915),n=a(2406),r=a(17739),c=a(98501),l=a(35179),d=a(46417);class h extends i.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const a=document.querySelector(".track".concat(this.props.data.id));a&&(a.setAttribute("data-height",e),a.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:a}=await(0,n.Ad)(e.postFileNew);this.setState({paddingBottom:100*a/t,size:{height:parseInt(a),width:parseInt(t)}})}catch(a){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgSize:{...this.state.imgSize,small:t.target.src}});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(a){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,imgSize:{small:t.data.postFileNew,large:t.data.filename,orignal:t.data.file},size:{height:100,width:100}}}componentWillMount(){const{data:t,hotspot:e,size:a}=this.props;t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:a})}componentDidMount(){const{data:t,hotspot:e,size:a}=this.props;!a||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:a})}render(){const{ImageClass:t,data:e,wallID:a,themeID:i,ownerId:n,hotspot:h}=this.props,{imgUrl:p,paddingBottom:_,size:u,fixedPaddingBottom:m,imgSize:g,noPadding:b}=this.state,w={paddingBottom:"".concat(this.props.size?1==this.props.size?null:m:_,"%")},f={backgroundImage:"url(".concat(g.small,")")};if(u.width>u.height)var v="100%",x="".concat(u.height/u.width*100,"%");else x="100%",v="".concat(u.width/u.height*100,"%");const k=!!(e.hotspot&&e.ugc_products.length>0&&h),j={width:k&&this.props.size?v:null,height:k&&this.props.size?x:null};return(0,d.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:w,children:[k?(0,d.jsx)("div",{className:"tb_blur_bg_",style:f}):null,(0,d.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:j,children:[k?(0,d.jsx)(o.Z,{product:e.ugc_products}):null,(0,d.jsx)("img",{className:"".concat(t," track").concat(e.id),role:"img",src:g.small,srcSet:l.bX&&b?"".concat(g.large,", 991w ").concat(g.small,", 480w"):null,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":a,"data-owner-id":n,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":i,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(c.do,"/media/images/no-image.svg"),(0,s.ht)(t)},alt:(0,r.P)(p)})]})]})}}},64442:(t,e,a)=>{"use strict";a.d(e,{Z:()=>p});var i=a(47313),s=a(2406),o=a(20510),n=a.n(o),r=a(40475),c=a(35179),l=a(17739),d=a(46417);const h=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class p extends i.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:a}=await(0,s.Ad)(e.postFileNew);this.setState({paddingBottom:100*a/t})}catch(a){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.onUpdateTime=t=>{try{if(c.bX){const{played:e}=this.state;console.log("played",e),this.setState({played:e+t.playedSeconds})}}catch(e){console.log(e)}},this.handleDuration=t=>{this.setState({duration:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1,played:0,duration:0},this.videoRef=i.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(a){this.setState({isVisible:!0})}}componentWillUnmount(){const{played:t}=this.state;c.bX&&(0,l.qE)(t),this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:a,isCover:i,controls:s,autoPlay:o,handleVideoEnded:l,muted:p,themeID:_}=this.props,{paddingBottom:u,videoLoaded:m,isVisible:g}=this.state,b={small:e.postFileNew,large:e.filename,orignal:e.file},w=[74,76,77].includes(_),f={paddingBottom:"".concat(w&&c.bX?null:u,"%")},v=c.bX?e.mediaUrl:e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return console.log("duration",this.state.duration),(0,d.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:f,ref:this.videoRef,children:(0,d.jsx)(n(),{className:"".concat(t," video").concat(e.id),url:h(v,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":a,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata"}}},loop:(o&&c.bX,!0),onError:t=>{e.stories&&0!=e.stories||(0,r.ib)(t,e.id)},autoPlay:o,muted:p,volume:o?1:0,playsinline:!0,onReady:t=>{c.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:c.ig?g:o,height:"100%",width:"100%",controls:s||!1,onProgress:c.bX?this.onUpdateTime:null,onDuration:this.handleDuration,style:{backgroundImage:"url(".concat(w?b.large:b.small,")"),backgroundSize:i?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:l||null})})}}},25810:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var i=a(47313),s=a(35179),o=a(46417);const n=i.lazy((()=>a.e(5867).then(a.bind(a,95867))));class r extends i.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a,isDefault:r,Personalization:c}=this.props,l=!!r&&(7!==t.id&&4!==t.id&&36!==t.id),d=s.ZQ&&36==t.id?"tagembed":t.icon;return l?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,o.jsx)("div",{})}):(0,o.jsxs)(i.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(n,{network:t,networkClass:e})]})}}},62245:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>c});var i=a(47313),s=a(16390),o=a(17739),n=a(46417);const r=i.lazy((()=>Promise.all([a.e(622),a.e(584)]).then(a.bind(a,30584))));class c extends i.PureComponent{constructor(t){super(t),this.contentRef=i.createRef()}componentDidMount(){setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:a,font:c,personalization:l,item:d,contentTitle:h,readMore:p,maxLength:_,textAlign:u,maxLines:m,isReadMore:g}=this.props,b={WebkitLineClamp:m,textAlign:a.textAlignment};let w=20==d.network.id?e:(0,o.Fx)(e);12==d.network.id&&(w=(0,s.ZP)(w));const f="".concat(a.lineTrim?" tb_content_line-".concat(a.lineTrim):""),v="".concat(t," ").concat(g?"":f);return(0,n.jsxs)("div",{className:v,ref:this.contentRef,style:b,children:[h?(0,n.jsx)("div",{className:"tb_bold_txt__",children:(0,s.ZP)(h)}):null,(0,n.jsxs)(i.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(r,{data:d,content:w,Personalization:l})]})]})}}},90905:(t,e,a)=>{"use strict";a.d(e,{Z:()=>c});var i=a(47313),s=a(35179),o=a(46417);const n=t=>{let{network:e}=t;const a={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:s.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:s.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:i,color:n}=a[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,o.jsx)("div",{className:i,style:{color:n},"tb-network":e.id,children:(0,o.jsx)("div",{})})},r=t=>{let{ThemeID:e}=t;const{className:a,color:i}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,o.jsx)("div",{className:a,style:{color:i},"tb-network":e})};class c extends i.PureComponent{render(){const{rating:t,network:e,ThemeID:a}=this.props;return(0,o.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,i)=>a?(0,o.jsx)(r,{ThemeID:a},i):(0,o.jsx)(n,{network:e},i))):null})}}},5744:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var i=a(47313),s=a(40475),o=a(35179),n=a(46417);class r extends i.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:a,wallID:i,ownerId:n}=this.props;e.stopPropagation(),o.ZQ||(0,s.S5)({type:2,action:2,wall:i,feed:a.feedId,post:a.referenceId?a.referenceId:a.id,owner:n}),(0,s.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,n.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,n.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(o.ZQ?"tb-share-fill":"tb-share"),children:(0,n.jsx)("div",{})}),(0,n.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,n.jsx)("div",{})})}):"",t.twitter?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,n.jsx)("div",{})})}):"",t.linkedin?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,n.jsx)("div",{})})}):""]})]})}}},32675:(t,e,a)=>{"use strict";a.d(e,{Z:()=>l});var i=a(47313),s=(a(35179),a(17739)),o=a(46417);const n=(t,e,a)=>1==t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,s.ok)(e)):a,r=(t,e,a)=>1==t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,s.ok)(e)):a,c=t=>{let{arialbl:e,hrefClick:a,Icon:i,count:n}=t;return(0,o.jsx)("div",{className:"tb_social_action__list",children:(0,o.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(a,"_blank")},className:"tb_social_action__ico_wrap",children:[(0,o.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(i),children:" "}),n>0?(0,o.jsx)("div",{className:"tb_social_action_counts__",children:(0,s.sy)(n)}):""]})})};class l extends i.PureComponent{render(){const{itemData:t,ThemeRule:e,actionClass:a,ThemeID:i}=this.props,l={color:3===i?1===e.iconType?e.iconColor:t.network.color:e.fontColor},d=t.network.id,h=3===d||10===d||7===d?"like":"heart",p=!![1,2,3,7,8,9,10,18].includes(d),_=![29,19].includes(d),u=t.network.name?t.network.name:"";return(0,o.jsx)(o.Fragment,{children:29!==d&&26!==d&&23!==d&&6!==d&&5!==d&&11!==d&&12!==d&&15!==d&&20!==d&&21!==d?(0,o.jsx)("div",{className:a,children:(0,o.jsxs)("div",{className:"tb_social_action__",children:[p?(0,o.jsx)(c,{arialbl:u,hrefClick:n(d,t.postId,t.link),Icon:h,iconColorStyle:l,count:t.like_count}):null,_?(0,o.jsx)(c,{arialbl:u,hrefClick:r(d,t.postId,t.link),Icon:"comment",iconColorStyle:l,count:t.comment_count}):null,1===d?(0,o.jsx)(c,{arialbl:u,hrefClick:"https://twitter.com/intent/retweet?tweet_id=".concat((0,s.ok)(t.postId)),Icon:"retweet",iconColorStyle:l,count:t.comment_count}):null,(0,o.jsx)(c,{arialbl:u,hrefClick:t.link,Icon:"eye",iconColorStyle:l,count:0})]})}):""})}}},55790:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var i=a(47313),s=a(17739),o=a(46417);const n=t=>{const{postTime:e,timeClass:a}=t;return(0,o.jsx)("div",{className:a,children:(0,s.Sy)(e)})},r=(0,i.memo)(n)},85156:(t,e,a)=>{"use strict";a.d(e,{Z:()=>v});var i=a(47313),s=a(64442),o=a(35179),n=a(84261),r=a(46417);const c=i.lazy((()=>a.e(695).then(a.bind(a,10695)))),l=t=>{let{itemData:e,wallID:a,ownerId:l,wall:d,isCover:h,ThemeRule:p}=t;const _=(3===e.type||5===e.type)&&1==d.ThemeRule.autoPlay;e.hotspot;return(0,r.jsxs)("div",{className:"tb_w_e_media_wrap",children:[o.aL?(0,r.jsx)(i.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(c,{postId:e.id,wallID:a,UserDetail:d.UserDetail})}):null,_?(0,r.jsx)(s.Z,{VideoClass:"tb_w_e_video",data:e,wallID:a,themeID:d.Personalization.widgetTheme,wall:d,size:false,isCover:h,muted:!0,autoPlay:_,handleVideoEnded:()=>{}}):(0,r.jsx)(n.default,{ImageClass:"tb_w_e_image",data:e,wallID:a,themeID:d.Personalization.widgetTheme,ownerId:l,size:false,hotspot:!0})]})};var d=a(62245),h=a(5744),p=a(7138),_=a(90905),u=a(32675),m=a(55790),g=a(25810),b=a(89239);const w=t=>{let{author:e,personalization:a,postTime:s,network:o,ThemeRule:n,font:c,rating:l,ownerId:d,instaHash:h}=t;const p=e.username&&e.username.length>0?"@".concat(e.username):"",_=!(!a.postAuthor||e.isInstaUser),u=!(!a.postAuthor||!a.postTime||e.isInstaUser),w=null!==o.id&&""!==o.id;return(0,r.jsxs)("div",{className:"tb_w_e_author_wrapper",children:[_?(0,r.jsx)(i.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(b.default,{network:o,author:e,authorClass:"tb_w_e_author_profile"})}):"",(0,r.jsxs)("div",{className:"tb_w_e_author_info",children:[_?(0,r.jsx)("div",{className:"tb_w_e_authorname tb-cTBfont-".concat(n.font_varient),children:e.name}):"",(0,r.jsxs)("div",{className:"tb_w_e_post_info",children:[_?(0,r.jsx)("div",{className:"tb_w_e_username",children:p}):"",u?(0,r.jsx)("div",{className:"tb_w_e_seprator",children:" "}):"",a.postTime?(0,r.jsx)(i.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(m.default,{postTime:s,timeClass:"tb_w_e_time tb-cTBfont-".concat(n.font_varient),authorColor:n.authorColor})}):""]})]}),w?(0,r.jsx)("div",{className:"tb_w_e_social_",children:(0,r.jsx)(i.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(g.default,{networkClass:"tb_w_e_social_ico",network:o,isDefault:1===n.iconType,ThemeRule:n})})}):null]})};var f=a(17739);class v extends i.PureComponent{constructor(t){super(t),this.contentRef=t=>{this.setState({height:t})},this.contentRefHidden=t=>{this.setState({hiddenHeight:t})},this.toggleExpand=t=>{t.stopPropagation(),this.setState({isExpanded:!this.state.isExpanded})},this.state={isExpanded:!1,hiddenHeight:0,height:0},this.toggleExpand=this.toggleExpand.bind(this),this.postTrack=i.createRef()}componentDidMount(){o.nX&&(0,f.YN)(this.postTrack)}render(){const{itemData:t,personalization:e,ThemeRule:a,clickToShowPopUp:s,itemIndex:n,wallID:c,ownerId:m,onClickToCTA:g,wall:b,languageSetting:v,adjustWidth:x}=this.props,{isExpanded:k,hiddenHeight:j,height:I}=this.state,C=2===t.type||3===t.type||4===t.type||5===t.type,y=!!(t.rating&&t.rating>0),N=t.rating>0?"tb_w_e_rating_content":"tb_w_e_content",S=1===t.type?"tb_w_e_text_post":"",T=1===t.type&&e.textDecorate?"tb_w_e_text_decoration":"",D=!!t.cta.status,P=e.trimcontent?(0,f.Sv)(t.content,80):t.content,z=j>I;return(0,r.jsx)("div",{"item-id":t.id,id:"tb-hc-post-".concat(t.id),className:"tb_w_e_post_wrapper",ref:this.postTrack,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,style:{width:"".concat(x,"%"),padding:e.padding/2},children:(0,r.jsxs)("div",{className:"tb_w_e_post_in",onClick:s(n,t),children:[(0,r.jsxs)("div",{className:"tb_w_e_post_media_wrapp",children:[t.share.status?(0,r.jsx)(h.Z,{share:t.share,shareClass:"tb_w_e_share_container",item:t,wallID:c,ownerId:m}):"",C?(0,r.jsx)(l,{itemData:t,wallID:c,wall:b,ownerId:m,size:!!e.trimcontent&&100,isCover:!!e.trimcontent,ThemeRule:a}):null]}),(0,r.jsxs)("div",{className:"tb_w_e_contant_wrapper ".concat(S),children:[(0,r.jsx)(i.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(w,{ownerId:m,postTime:t.createdAt,author:t.author,network:t.network,font:a,personalization:e,ThemeRule:a,rating:t.rating,instaHash:t.instaHash})}),D?(0,r.jsxs)("div",{className:"tb_w_e_post_cta",onClick:t=>{t.stopPropagation()},children:[(0,r.jsx)(p.Z,{ctaClass:"tb_w_e_post_cta_btn",cta:e.cta,postCta:t.cta,item:t,onClickToCTA:g})," "]}):"",y?(0,r.jsx)("div",{className:"tb_w_e_rating__",children:(0,r.jsx)(_.Z,{rating:t.rating,network:t.network})}):null,o.ig&&a.hideContent||!o.ig&&!a.hideContent||1==t.type?(0,r.jsxs)("div",{className:"tb_w_e_content_wrapper__",children:[o.ZQ?(0,r.jsx)("div",{className:"tb_w_e_content_hidden",children:(0,r.jsx)(d.default,{contentClass:"".concat(N," ").concat(T),item:t,content:P,font:a,ThemeRule:a,personalization:e,contentTitle:t.contentTitle,contentRefCallBack:this.contentRefHidden,isReadMore:!0},t.id)}):null,(0,r.jsx)(d.default,{contentClass:"".concat(N," ").concat(T),item:t,content:P,font:a,ThemeRule:a,personalization:e,contentTitle:t.contentTitle,contentRefCallBack:this.contentRef,maxLines:k?"":a.lineTrim,isReadMore:!0},t.id),a.lineTrim>0&&z&&o.ZQ?(0,r.jsx)("div",{className:"tb_read_more_",onClick:this.toggleExpand,children:k?v.showLess:v.readMore}):null]}):null]}),o.ig||o.ZQ?a.socialAction?(0,r.jsx)(u.Z,{itemData:t,ThemeRule:a,ThemeID:e.widgetTheme,actionClass:"tb_w_e_social_action__"}):null:""]})})}}},7092:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>_});var i=a(47313),s=a(17739),o=a(35179),n=a(61395),r=a.n(n),c=a(85156),l=a(46417);const d=i.lazy((()=>Promise.all([a.e(7529),a.e(4222)]).then(a.bind(a,24222)))),h=()=>{const t=t=>(document.querySelector(t)||{}).clientHeight||0;return t(".tb_wall_header__")+(window.editor?t("#kt_header"):0)+t("#appTicker")};class p extends i.Component{constructor(){super(...arguments),this.state={activeID:-1,newPostdata:[]},this.scrollInterval=null,this.componentDidMount=()=>{this.scrollInterval=setInterval((()=>this.onUpdateTimeInterVal()),3e3)},this.onUpdateTimeInterVal=()=>{const{activeID:t}=this.state,{cardNumber:e}=this.props,a=(0,s.b)()?2:parseInt(e)>5?5:parseInt(e)||5,i=parseInt(t)+1;this.setState({activeID:parseInt(a)>=i?i:0})}}componentWillMount(){const{cardNumber:t,postData:e,completeDataObject:a,adjustWidth:i,wall:o,postSize:n,clickToShowPopUp:r,onClickToCTA:c,postSizeInPx:l}=this.props,{activeID:d}=this.state,h=(0,s.b)()?2:parseInt(t)>5?5:parseInt(t)||5,p=Array.from({length:h},(()=>[]));e.forEach(((t,e)=>p[e%h].push(t))),p.forEach((t=>{for(;t.length<3;){const e=p[Math.floor(Math.random()*h)],a=e[Math.floor(Math.random()*e.length)];t.push(a)}})),this.setState({newPostdata:p})}componentWillUnmount(){this.scrollInterval&&clearInterval(this.scrollInterval)}render(){const{cardNumber:t,postData:e,completeDataObject:a,adjustWidth:s,wall:n,postSize:p,clickToShowPopUp:_,onClickToCTA:u,postSizeInPx:m}=this.props,{activeID:g,newPostdata:b}=this.state;return(0,l.jsxs)(l.Fragment,{children:[" ",o.aL?(0,l.jsx)(r(),{id:"pixel",className:"tb_w_e_post_container",tabIndex:"0","aria-label":"There are ".concat(e&&e.length>0?e.length:0," posts in the feed"),elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_w_e_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:e&&e.length>0&&e.map(((t,e)=>{const i=a[t];return(0,l.jsx)(c.Z,{ownerId:n.Wall.owner,itemData:i,itemIndex:e,adjustWidth:1==i.highlight?2*s:s,personalization:n.Personalization,ThemeRule:n.ThemeRule,wallID:n.Wall.id,clickToShowPopUp:_,onClickToCTA:u,postSizeInPx:m,wall:n},"sqr_crd_".concat(e,"_").concat(t.id))}))}):(0,l.jsx)("div",{className:"tb_w_e_post_container",style:{overflow:"hidden",height:"calc(100vh - ".concat(h()+4,"px)")},children:b.map(((t,e)=>(0,l.jsx)(i.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(d,{pIndex:e,itemIds:t,activeID:g,completeDataObject:a,wall:n,onClickToCTA:u,postSizeInPx:m,cardCount:b.length,clickToShowPopUp:_},"exhi_".concat(e))})))})]})}}const _=p},2406:(t,e,a)=>{"use strict";e.Ad=void 0;var i=a(84228);var s=a(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return s.getImageSize}});var o=a(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,a)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const i=a(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((a,s)=>{if("undefined"===typeof window)return s(i.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return s(i.ErrorMessage.URL_IS_NOT_DEFINED);let o=null;const n=new Image;n.addEventListener("load",(()=>{o&&window.clearTimeout(o),a({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(t=>{o&&window.clearTimeout(o),s("".concat(t.type,": ").concat(t.message))})),n.src=t,e.timeout&&(o=window.setTimeout((()=>s(i.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,a){"use strict";var i=this&&this.__awaiter||function(t,e,a,i){return new(a||(a=Promise))((function(s,o){function n(t){try{c(i.next(t))}catch(e){o(e)}}function r(t){try{c(i.throw(t))}catch(e){o(e)}}function c(t){var e;t.done?s(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(n,r)}c((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const s=a(47313),o=a(65786);e.useImageSize=(t,e)=>{const[a,n]=(0,s.useState)(null),[r,c]=(0,s.useState)(!1),[l,d]=(0,s.useState)(null);return(0,s.useEffect)((()=>{i(void 0,void 0,void 0,(function*(){c(!0),n(null);try{const{width:a,height:i}=yield(0,o.getImageSize)(t,e);n({width:a,height:i})}catch(l){d(l.toString())}finally{c(!1)}}))}),[t,e]),[a,{loading:r,error:l}]}},50247:()=>{}}]);