(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7241,4261,8342,9239,5790,5810],{89239:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>r});var a=i(47313),s=i(17739),o=i(98935),n=i(46417);class r extends a.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:i}=this.props;return(0,n.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,s.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,n.jsx)(o.Z,{authorClass:e,username:t.name,network:i,color:null===i.id?"#000":i.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});var a=i(47313),s=i(46417);const o=t=>{let{username:e,network:i,authorClass:a,errorPic:o}=t;const n="#ffffff"==i.color?"#000":i.color;return(0,s.jsx)("img",{className:"".concat(a,"__"),src:o||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===i.id?"#000":n).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},n=(0,a.memo)(o)},7138:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});var a=i(47313),s=i(46417);class o extends a.PureComponent{render(){const{cta:t,ctaClass:e,postCta:i,onClickToCTA:a,item:o}=this.props,n=!(!i||1!==i.status);return(0,s.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),a(o),window.open("".concat(n?i.url:t.url),"_blank")},children:[" ",n?i.text:t.text]})}}const n=o},97915:(t,e,i)=>{"use strict";i.d(e,{Z:()=>p});var a=i(47313),s=i(43411),o=i(83773),n=i(6119),r=i(17739),c=i(46417);const l=(0,o.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),d=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,i=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",a=t.product_price>0||t.product_discount>0?"".concat(i,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(a,"\n        </a>")};class h extends a.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:i}=this.state,a=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return a.status?(0,c.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const s=(0,r.i1)();return(0,c.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(s),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(i==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,c.jsx)("div",{className:"tb_hotspot__ ".concat(0==a.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,c.jsx)(l,{children:(0,c.jsx)(n.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(s),clickable:!0,html:d(t.UgcProduct)})})]},e)}))}):null}}const p=(0,s.$j)((t=>({appData:t.appData})))(h)},84261:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>h});var a=i(47313),s=i(40475),o=i(97915),n=i(2406),r=i(17739),c=i(98501),l=i(35179),d=i(46417);class h extends a.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const i=document.querySelector(".track".concat(this.props.data.id));i&&(i.setAttribute("data-height",e),i.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:i}=await(0,n.Ad)(e.postFileNew);this.setState({paddingBottom:100*i/t,size:{height:parseInt(i),width:parseInt(t)}})}catch(i){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgSize:{...this.state.imgSize,small:t.target.src}});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(i){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,imgSize:{small:t.data.postFileNew,large:t.data.filename,orignal:t.data.file},size:{height:100,width:100}}}componentWillMount(){const{data:t,hotspot:e,size:i}=this.props;t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:i})}componentDidMount(){const{data:t,hotspot:e,size:i}=this.props;!i||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:i})}render(){const{ImageClass:t,data:e,wallID:i,themeID:a,ownerId:n,hotspot:h}=this.props,{imgUrl:p,paddingBottom:_,size:u,fixedPaddingBottom:m,imgSize:g,noPadding:b}=this.state,w={paddingBottom:"".concat(this.props.size?1==this.props.size?null:m:_,"%")},f={backgroundImage:"url(".concat(g.small,")")};if(u.width>u.height)var v="100%",x="".concat(u.height/u.width*100,"%");else x="100%",v="".concat(u.width/u.height*100,"%");const k=!!(e.hotspot&&e.ugc_products.length>0&&h),j={width:k&&this.props.size?v:null,height:k&&this.props.size?x:null};return(0,d.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:w,children:[k?(0,d.jsx)("div",{className:"tb_blur_bg_",style:f}):null,(0,d.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:j,children:[k?(0,d.jsx)(o.Z,{product:e.ugc_products}):null,(0,d.jsx)("img",{className:"".concat(t," track").concat(e.id),role:"img",src:g.small,srcSet:l.bX&&b?"".concat(g.large,", 991w ").concat(g.small,", 480w"):null,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":i,"data-owner-id":n,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":a,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(c.do,"/media/images/no-image.svg"),(0,s.ht)(t)},alt:(0,r.P)(p)})]})]})}}},64442:(t,e,i)=>{"use strict";i.d(e,{Z:()=>h});var a=i(47313),s=i(2406),o=i(20510),n=i.n(o),r=i(40475),c=i(35179),l=(i(17739),i(46417));const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class h extends a.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:i}=await(0,s.Ad)(e.postFileNew);this.setState({paddingBottom:100*i/t})}catch(i){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=a.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(i){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:i,isCover:a,controls:s,autoPlay:o,handleVideoEnded:h,muted:p,themeID:_}=this.props,{paddingBottom:u,videoLoaded:m,isVisible:g}=this.state,b={small:e.postFileNew,large:e.filename,orignal:e.file},w=[74,76,77].includes(_),f={paddingBottom:"".concat(w&&c.bX?null:u,"%")},v=null!==e&&void 0!==e&&e.loopStop?e.mediaUrl:e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:f,ref:this.videoRef,children:(0,l.jsx)(n(),{className:"".concat(t," video").concat(e.id),url:d(v,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":i,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{autoplay:!0,preload:"auto","data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{forceVideo:!0,attributes:{preload:"auto",autoplay:!0}}},loop:!(c.bX&&!c.aL&&null!==e&&void 0!==e&&e.loopStop),onError:t=>{e.stories&&0!=e.stories||(0,r.ib)(t,e.id)},preload:"auto",autoplay:o,muted:p,volume:o?1:0,playsinline:!0,onReady:t=>{c.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:c.ig?g:o,height:"100%",width:"100%",controls:s||!1,style:{backgroundImage:"url(".concat(w?b.large:b.small,")"),backgroundSize:a?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})})}}},25810:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>r});var a=i(47313),s=i(35179),o=i(46417);const n=a.lazy((()=>i.e(5867).then(i.bind(i,95867))));class r extends a.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:i,isDefault:r,Personalization:c}=this.props,l=!!r&&(7!==t.id&&4!==t.id&&36!==t.id),d=s.ZQ&&36==t.id?"tagembed":t.icon;return l?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,o.jsx)("div",{})}):(0,o.jsxs)(a.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(n,{network:t,networkClass:e})]})}}},62245:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var a=i(47313),s=i(16390),o=i(17739),n=i(35179),r=i(46417);const c=a.lazy((()=>Promise.all([i.e(622),i.e(584)]).then(i.bind(i,30584))));class l extends a.PureComponent{constructor(t){super(t),this.contentRef=a.createRef()}componentDidMount(){setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:i,font:l,personalization:d,item:h,contentTitle:p,readMore:_,maxLength:u,textAlign:m,maxLines:g,isReadMore:b}=this.props,w={WebkitLineClamp:g,textAlign:i.textAlignment};let f=20==h.network.id||n.bX&&!n.aL?e:(0,o.Fx)(e);12==h.network.id&&(f=(0,s.ZP)(f));const v="".concat(i.lineTrim?" tb_content_line-".concat(i.lineTrim):""),x="".concat(t," ").concat(b?"":v);return(0,r.jsxs)("div",{className:x,ref:this.contentRef,style:w,children:[p?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,s.ZP)(p)}):null,(0,r.jsxs)(a.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[" ",(0,r.jsx)(c,{data:h,content:f,Personalization:d})]})]})}}},90905:(t,e,i)=>{"use strict";i.d(e,{Z:()=>c});var a=i(47313),s=i(35179),o=i(46417);const n=t=>{let{network:e}=t;const i={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:s.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:s.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:a,color:n}=i[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,o.jsx)("div",{className:a,style:{color:n},"tb-network":e.id,children:(0,o.jsx)("div",{})})},r=t=>{let{ThemeID:e}=t;const{className:i,color:a}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,o.jsx)("div",{className:i,style:{color:a},"tb-network":e})};class c extends a.PureComponent{render(){const{rating:t,network:e,ThemeID:i}=this.props;return(0,o.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,a)=>i?(0,o.jsx)(r,{ThemeID:i},a):(0,o.jsx)(n,{network:e},a))):null})}}},5744:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});var a=i(47313),s=i(40475),o=i(35179),n=i(46417);class r extends a.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:i,wallID:a,ownerId:n}=this.props;e.stopPropagation(),o.ZQ||(0,s.S5)({type:2,action:2,wall:a,feed:i.feedId,post:i.referenceId?i.referenceId:i.id,owner:n}),(0,s.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,n.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,n.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(o.ZQ?"tb-share-fill":"tb-share"),children:(0,n.jsx)("div",{})}),(0,n.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,n.jsx)("div",{})})}):"",t.twitter?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,n.jsx)("div",{})})}):"",t.linkedin?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,n.jsx)("div",{})})}):""]})]})}}},32675:(t,e,i)=>{"use strict";i.d(e,{Z:()=>l});var a=i(47313),s=(i(35179),i(17739)),o=i(46417);const n=(t,e,i)=>1==t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,s.ok)(e)):i,r=(t,e,i)=>1==t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,s.ok)(e)):i,c=t=>{let{arialbl:e,hrefClick:i,Icon:a,count:n}=t;return(0,o.jsx)("div",{className:"tb_social_action__list",children:(0,o.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(i,"_blank")},className:"tb_social_action__ico_wrap",children:[(0,o.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(a),children:" "}),n>0?(0,o.jsx)("div",{className:"tb_social_action_counts__",children:(0,s.sy)(n)}):""]})})};class l extends a.PureComponent{render(){const{itemData:t,ThemeRule:e,actionClass:i,ThemeID:a}=this.props,l={color:3===a?1===e.iconType?e.iconColor:t.network.color:e.fontColor},d=t.network.id,h=3===d||10===d||7===d?"like":"heart",p=!![1,2,3,7,8,9,10,18].includes(d),_=![29,19].includes(d),u=t.network.name?t.network.name:"";return(0,o.jsx)(o.Fragment,{children:29!==d&&26!==d&&23!==d&&6!==d&&5!==d&&11!==d&&12!==d&&15!==d&&20!==d&&21!==d?(0,o.jsx)("div",{className:i,children:(0,o.jsxs)("div",{className:"tb_social_action__",children:[p?(0,o.jsx)(c,{arialbl:u,hrefClick:n(d,t.postId,t.link),Icon:h,iconColorStyle:l,count:t.like_count}):null,_?(0,o.jsx)(c,{arialbl:u,hrefClick:r(d,t.postId,t.link),Icon:"comment",iconColorStyle:l,count:t.comment_count}):null,1===d?(0,o.jsx)(c,{arialbl:u,hrefClick:"https://twitter.com/intent/retweet?tweet_id=".concat((0,s.ok)(t.postId)),Icon:"retweet",iconColorStyle:l,count:t.comment_count}):null,(0,o.jsx)(c,{arialbl:u,hrefClick:t.link,Icon:"eye",iconColorStyle:l,count:0})]})}):""})}}},55790:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>r});var a=i(47313),s=i(17739),o=i(46417);const n=t=>{const{postTime:e,timeClass:i}=t;return(0,o.jsx)("div",{className:i,children:(0,s.Sy)(e)})},r=(0,a.memo)(n)},85156:(t,e,i)=>{"use strict";i.d(e,{Z:()=>v});var a=i(47313),s=i(64442),o=i(35179),n=i(84261),r=i(46417);const c=a.lazy((()=>i.e(695).then(i.bind(i,10695)))),l=t=>{let{itemData:e,wallID:i,ownerId:l,wall:d,isCover:h,ThemeRule:p}=t;const _=(3===e.type||5===e.type)&&1==d.ThemeRule.autoPlay;e.hotspot;return(0,r.jsxs)("div",{className:"tb_w_e_media_wrap",children:[o.aL&&d.Personalization.interactive?(0,r.jsx)(a.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(c,{postId:e.id,wallID:i,UserDetail:d.UserDetail})}):null,_?(0,r.jsx)(s.Z,{VideoClass:"tb_w_e_video",data:e,wallID:i,themeID:d.Personalization.widgetTheme,wall:d,size:false,isCover:h,muted:!0,autoPlay:_,handleVideoEnded:()=>{}}):(0,r.jsx)(n.default,{ImageClass:"tb_w_e_image",data:e,wallID:i,themeID:d.Personalization.widgetTheme,ownerId:l,size:false,hotspot:!0})]})};var d=i(62245),h=i(5744),p=i(7138),_=i(90905),u=i(32675),m=i(55790),g=i(25810),b=i(89239);const w=t=>{let{author:e,personalization:i,postTime:s,network:o,ThemeRule:n,font:c,rating:l,ownerId:d,instaHash:h}=t;const p=e.username&&e.username.length>0?"@".concat(e.username):"",_=!(!i.postAuthor||e.isInstaUser),u=!(!i.postAuthor||!i.postTime||e.isInstaUser),w=!(null===o.id||""===o.id||!n.socialAction);return(0,r.jsxs)("div",{className:"tb_w_e_author_wrapper",children:[_?(0,r.jsx)(a.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(b.default,{network:o,author:e,authorClass:"tb_w_e_author_profile"})}):"",(0,r.jsxs)("div",{className:"tb_w_e_author_info",children:[_?(0,r.jsx)("div",{className:"tb_w_e_authorname tb-cTBfont-".concat(n.font_varient),children:e.name}):"",(0,r.jsxs)("div",{className:"tb_w_e_post_info",children:[_?(0,r.jsx)("div",{className:"tb_w_e_username",children:p}):"",u?(0,r.jsx)("div",{className:"tb_w_e_seprator",children:" "}):"",i.postTime?(0,r.jsx)(a.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(m.default,{postTime:s,timeClass:"tb_w_e_time tb-cTBfont-".concat(n.font_varient),authorColor:n.authorColor})}):""]})]}),w?(0,r.jsx)("div",{className:"tb_w_e_social_",children:(0,r.jsx)(a.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(g.default,{networkClass:"tb_w_e_social_ico",network:o,isDefault:1===n.iconType,ThemeRule:n})})}):null]})};var f=i(17739);class v extends a.PureComponent{constructor(t){super(t),this.contentRef=t=>{this.setState({height:t})},this.contentRefHidden=t=>{this.setState({hiddenHeight:t})},this.toggleExpand=t=>{t.stopPropagation(),this.setState({isExpanded:!this.state.isExpanded})},this.state={isExpanded:!1,hiddenHeight:0,height:0},this.toggleExpand=this.toggleExpand.bind(this),this.postTrack=a.createRef()}componentDidMount(){o.nX&&(0,f.YN)(this.postTrack)}render(){const{itemData:t,personalization:e,ThemeRule:i,clickToShowPopUp:s,itemIndex:n,wallID:c,ownerId:m,onClickToCTA:g,wall:b,languageSetting:v,adjustWidth:x}=this.props,{isExpanded:k,hiddenHeight:j,height:I}=this.state,C=2===t.type||3===t.type||4===t.type||5===t.type,N=!!(t.rating&&t.rating>0),y=t.rating>0?"tb_w_e_rating_content":"tb_w_e_content",S=1===t.type?"tb_w_e_text_post":"",T=1===t.type&&e.textDecorate?"tb_w_e_text_decoration":"",D=!!t.cta.status,P=e.trimcontent?(0,f.Sv)(t.content,50):t.content,z=j>I;return(0,r.jsx)("div",{"item-id":t.id,id:"tb-hc-post-".concat(t.id),className:"tb_w_e_post_wrapper",ref:this.postTrack,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,style:{width:"".concat(x,"%"),padding:e.padding/2},children:(0,r.jsxs)("div",{className:"tb_w_e_post_in",onClick:s(n,t),children:[(0,r.jsxs)("div",{className:"tb_w_e_post_media_wrapp",children:[t.share.status?(0,r.jsx)(h.Z,{share:t.share,shareClass:"tb_w_e_share_container",item:t,wallID:c,ownerId:m}):"",C?(0,r.jsx)(l,{itemData:t,wallID:c,wall:b,ownerId:m,size:!!e.trimcontent&&100,isCover:!!e.trimcontent,ThemeRule:i}):null]}),(0,r.jsxs)("div",{className:"tb_w_e_contant_wrapper ".concat(S),children:[(0,r.jsx)(a.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(w,{ownerId:m,postTime:t.createdAt,author:t.author,network:t.network,font:i,personalization:e,ThemeRule:i,rating:t.rating,instaHash:t.instaHash})}),D?(0,r.jsxs)("div",{className:"tb_w_e_post_cta",onClick:t=>{t.stopPropagation()},children:[(0,r.jsx)(p.Z,{ctaClass:"tb_w_e_post_cta_btn",cta:e.cta,postCta:t.cta,item:t,onClickToCTA:g})," "]}):"",N?(0,r.jsx)("div",{className:"tb_w_e_rating__",children:(0,r.jsx)(_.Z,{rating:t.rating,network:t.network})}):null,o.ig&&i.hideContent||!o.ig&&!i.hideContent||1==t.type?(0,r.jsxs)("div",{className:"tb_w_e_content_wrapper__",children:[o.ZQ?(0,r.jsx)("div",{className:"tb_w_e_content_hidden",children:(0,r.jsx)(d.default,{contentClass:"".concat(y," ").concat(T),item:t,content:P,font:i,ThemeRule:i,personalization:e,contentTitle:t.contentTitle,contentRefCallBack:this.contentRefHidden,isReadMore:!0},t.id)}):null,(0,r.jsx)(d.default,{contentClass:"".concat(y," ").concat(T),item:t,content:P,font:i,ThemeRule:i,personalization:e,contentTitle:t.contentTitle,contentRefCallBack:this.contentRef,maxLines:k?"":i.lineTrim,isReadMore:!0},t.id),i.lineTrim>0&&z&&o.ZQ?(0,r.jsx)("div",{className:"tb_read_more_",onClick:this.toggleExpand,children:k?v.showLess:v.readMore}):null]}):null]}),o.ig||o.ZQ?i.socialAction?(0,r.jsx)(u.Z,{itemData:t,ThemeRule:i,ThemeID:e.widgetTheme,actionClass:"tb_w_e_social_action__"}):null:""]})})}}},7092:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>p});var a=i(47313),s=(i(17739),i(35179)),o=i(61395),n=i.n(o),r=i(85156),c=i(46417);const l=a.lazy((()=>Promise.all([i.e(7529),i.e(4222)]).then(i.bind(i,24222)))),d=()=>{const t=t=>(document.querySelector(t)||{}).clientHeight||0;return t(".tb_wall_header__")+(window.editor?t("#kt_header"):0)+t("#appTicker")};class h extends a.Component{constructor(){super(...arguments),this.state={activeID:-1,newPostdata:[]},this.scrollInterval=null,this.componentDidMount=()=>{this.scrollInterval=setInterval((()=>this.onUpdateTimeInterVal()),3e3)},this.onUpdateTimeInterVal=()=>{const{activeID:t}=this.state,{cardNumber:e,wall:i}=this.props,a=i.ThemeRule.numberOfCoumn,s=parseInt(t)+1;this.setState({activeID:parseInt(a)>=s?s:0})}}componentWillMount(){const{cardNumber:t,postData:e,completeDataObject:i,adjustWidth:a,wall:s,postSize:o,clickToShowPopUp:n,onClickToCTA:r,postSizeInPx:c}=this.props,{activeID:l}=this.state,d=s.ThemeRule.numberOfCoumn,h=Array.from({length:d},(()=>[]));e.forEach(((t,e)=>h[e%d].push(t))),h.forEach((t=>{for(;t.length<3;){const e=h[Math.floor(Math.random()*d)],i=e[Math.floor(Math.random()*e.length)];t.push(i)}})),this.setState({newPostdata:h})}componentWillUnmount(){this.scrollInterval&&clearInterval(this.scrollInterval)}render(){const{cardNumber:t,postData:e,completeDataObject:i,adjustWidth:o,wall:h,postSize:p,clickToShowPopUp:_,onClickToCTA:u,postSizeInPx:m}=this.props,{activeID:g,newPostdata:b}=this.state;return(0,c.jsxs)(c.Fragment,{children:[" ",s.aL?(0,c.jsx)(n(),{id:"pixel",className:"tb_w_e_post_container",tabIndex:"0","aria-label":"There are ".concat(e&&e.length>0?e.length:0," posts in the feed"),elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_w_e_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:e&&e.length>0&&e.map(((t,e)=>{const a=i[t];return(0,c.jsx)(r.Z,{ownerId:h.Wall.owner,itemData:a,itemIndex:e,adjustWidth:1==a.highlight?2*o:o,personalization:h.Personalization,ThemeRule:h.ThemeRule,wallID:h.Wall.id,clickToShowPopUp:_,onClickToCTA:u,postSizeInPx:m,wall:h},"sqr_crd_".concat(e,"_").concat(t.id))}))}):(0,c.jsx)("div",{className:"tb_w_e_post_container",style:{overflow:"hidden",height:"calc(100vh - ".concat(d()+4,"px)")},children:b.map(((t,e)=>(0,c.jsx)(a.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(l,{pIndex:e,itemIds:t,activeID:g,completeDataObject:i,wall:h,onClickToCTA:u,postSizeInPx:m,cardCount:b.length,clickToShowPopUp:_},"exhi_".concat(e))})))})]})}}const p=h},2406:(t,e,i)=>{"use strict";e.Ad=void 0;var a=i(84228);var s=i(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return s.getImageSize}});var o=i(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,i)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const a=i(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((i,s)=>{if("undefined"===typeof window)return s(a.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return s(a.ErrorMessage.URL_IS_NOT_DEFINED);let o=null;const n=new Image;n.addEventListener("load",(()=>{o&&window.clearTimeout(o),i({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(t=>{o&&window.clearTimeout(o),s("".concat(t.type,": ").concat(t.message))})),n.src=t,e.timeout&&(o=window.setTimeout((()=>s(a.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,i){"use strict";var a=this&&this.__awaiter||function(t,e,i,a){return new(i||(i=Promise))((function(s,o){function n(t){try{c(a.next(t))}catch(e){o(e)}}function r(t){try{c(a.throw(t))}catch(e){o(e)}}function c(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(n,r)}c((a=a.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const s=i(47313),o=i(65786);e.useImageSize=(t,e)=>{const[i,n]=(0,s.useState)(null),[r,c]=(0,s.useState)(!1),[l,d]=(0,s.useState)(null);return(0,s.useEffect)((()=>{a(void 0,void 0,void 0,(function*(){c(!0),n(null);try{const{width:i,height:a}=yield(0,o.getImageSize)(t,e);n({width:i,height:a})}catch(l){d(l.toString())}finally{c(!1)}}))}),[t,e]),[i,{loading:r,error:l}]}},50247:()=>{}}]);