(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2301,8342,9239,5790,5810],{89239:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=a(47313),o=a(17739),i=a(98935),n=a(46417);class r extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:a}=this.props;return(0,n.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,o.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,n.jsx)(i.Z,{authorClass:e,username:t.name,network:a,color:null===a.id?"#000":a.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});var s=a(47313),o=a(46417);const i=t=>{let{username:e,network:a,authorClass:s,errorPic:i}=t;const n="#ffffff"==a.color?"#000":a.color;return(0,o.jsx)("img",{className:"".concat(s,"__"),src:i||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===a.id?"#000":n).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},n=(0,s.memo)(i)},7138:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});var s=a(47313),o=a(46417);class i extends s.PureComponent{render(){const{cta:t,ctaClass:e,postCta:a,onClickToCTA:s,item:i}=this.props,n=!(!a||1!==a.status);return(0,o.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),s(i),window.open("".concat(n?a.url:t.url),"_blank")},children:[" ",n?a.text:t.text]})}}const n=i},97915:(t,e,a)=>{"use strict";a.d(e,{Z:()=>p});var s=a(47313),o=a(43411),i=a(83773),n=a(6119),r=a(17739),c=a(46417);const l=(0,i.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),d=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,a=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",s=t.product_price>0||t.product_discount>0?"".concat(a,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(s,"\n        </a>")};class h extends s.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:a}=this.state,s=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return s.status?(0,c.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const o=(0,r.i1)();return(0,c.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(o),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(a==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,c.jsx)("div",{className:"tb_hotspot__ ".concat(0==s.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,c.jsx)(l,{children:(0,c.jsx)(n.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(o),clickable:!0,html:d(t.UgcProduct)})})]},e)}))}):null}}const p=(0,o.$j)((t=>({appData:t.appData})))(h)},84261:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>h});var s=a(47313),o=a(40475),i=a(97915),n=a(2406),r=a(17739),c=a(98501),l=a(35179),d=a(46417);class h extends s.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const a=document.querySelector(".track".concat(this.props.data.id));a&&(a.setAttribute("data-height",e),a.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:a}=await(0,n.Ad)(e.postFileNew);this.setState({paddingBottom:100*a/t,size:{height:parseInt(a),width:parseInt(t)}})}catch(a){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgSize:{...this.state.imgSize,small:t.target.src}});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(a){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,imgSize:{small:t.data.postFileNew,large:t.data.filename,orignal:t.data.file},size:{height:100,width:100}}}componentWillMount(){const{data:t,hotspot:e,size:a}=this.props;t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:a})}componentDidMount(){const{data:t,hotspot:e,size:a}=this.props;!a||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:a})}render(){const{ImageClass:t,data:e,wallID:a,themeID:s,ownerId:n,hotspot:h}=this.props,{imgUrl:p,paddingBottom:_,size:u,fixedPaddingBottom:m,imgSize:g,noPadding:b}=this.state,w={paddingBottom:"".concat(this.props.size?1==this.props.size?null:m:_,"%")},x={backgroundImage:"url(".concat(g.small,")")};if(u.width>u.height)var f="100%",v="".concat(u.height/u.width*100,"%");else v="100%",f="".concat(u.width/u.height*100,"%");const k=!!(e.hotspot&&e.ugc_products.length>0&&h),j={width:k&&this.props.size?f:null,height:k&&this.props.size?v:null};return(0,d.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:w,children:[k?(0,d.jsx)("div",{className:"tb_blur_bg_",style:x}):null,(0,d.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:j,children:[k?(0,d.jsx)(i.Z,{product:e.ugc_products}):null,(0,d.jsx)("img",{className:"".concat(t," track").concat(e.id),role:"img",src:g.small,srcSet:l.bX&&b?"".concat(g.large,", 991w ").concat(g.small,", 480w"):null,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":a,"data-owner-id":n,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":s,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(c.do,"/media/images/no-image.svg"),(0,o.ht)(t)},alt:(0,r.P)(p)})]})]})}}},19981:(t,e,a)=>{"use strict";a.d(e,{Z:()=>u});var s=a(47313),o=a(2406),i=a(20510),n=a.n(i),r=a(40475),c=a(35179),l=(a(17739),a(35969)),d=(a(83736),a(46417));const h=t=>{const e=s.useRef(null),a=s.useRef(null),{options:o,onReady:i,className:n}=t;return s.useEffect((()=>{if(a.current){const t=a.current;t.autoplay(o.autoplay),t.src(o.sources)}else{const t=document.createElement("video-js");t.classList.add("vjs-big-play-centered"),t.classList.add(n),e.current.appendChild(t);const s=a.current=(0,l.Z)(t,o,(()=>{l.Z.log("player is ready"),i&&i(s)}))}}),[o,e]),s.useEffect((()=>{const t=a.current;return()=>{t&&!t.isDisposed()&&(t.dispose(),a.current=null)}}),[a]),(0,d.jsx)("div",{"data-vjs-player":!0,children:(0,d.jsx)("div",{ref:e})})},p=t=>{console.log("props",t);const e=s.useRef(null),a={loop:!0,muted:!0,autoplay:!0,controls:!0,responsive:!0,fluid:!0,poster:t.poster,preload:"metadata",sources:[{src:t.src,type:"video/mp4"}]};return(0,d.jsx)(h,{options:a,onReady:t=>{e.current=t,t.on("waiting",(()=>{l.Z.log("player is waiting")})),t.on("dispose",(()=>{l.Z.log("player will dispose")}))},className:t.className})},_=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class u extends s.Component{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:a}=await(0,o.Ad)(e.postFileNew);this.setState({paddingBottom:100*a/t})}catch(a){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=s.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));if(e){var a=e.play();void 0!==a&&a.then((t=>{})).catch((t=>{}))}this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(s){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}shouldComponentUpdate(t,e){return this.props!=t}render(){const{VideoClass:t,data:e,wallID:a,isCover:s,controls:o,autoPlay:i,handleVideoEnded:l,muted:h,themeID:u}=this.props,{paddingBottom:m,videoLoaded:g,isVisible:b}=this.state,w={small:e.postFileNew,large:e.filename,orignal:e.file},x=[74,76,77].includes(u),f={paddingBottom:"".concat(x&&c.bX?null:m,"%")},v=e.mediaUrl;return(0,d.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:f,ref:this.videoRef,"data-play":i?"true":"false",children:c.aL?(0,d.jsx)(n(),{className:"".concat(t," video").concat(e.id),url:_(v,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":a,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{autoplay:!0,preload:"auto","data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{forceVideo:!0,attributes:{preload:"auto",autoplay:!0}}},loop:!0,onError:t=>{e.stories&&0!=e.stories||(0,r.ib)(t,e.id)},preload:"auto",autoPlay:i,muted:h,volume:i?1:0,playsinline:!0,onReady:t=>{c.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:c.ig?b:i,height:"100%",width:"100%",controls:o||!1,style:{backgroundImage:"url(".concat(x?w.large:w.small,")"),backgroundSize:s?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}):(0,d.jsx)(p,{poster:x?w.large:w.small,id:"video_p_".concat(e.id),className:"".concat(t),src:_(v,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":a,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,loop:!0,onError:t=>{e.stories&&0!=e.stories||(0,r.ib)(t,e.id)},preload:"auto",autoplay:!0,muted:!0,playsinline:!0,playing:!0,height:"100%",width:"100%",controls:!0,style:{backgroundImage:"url(".concat(x?w.large:w.small,")"),backgroundSize:s?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"}})})}}},25810:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=a(47313),o=a(35179),i=a(46417);const n=s.lazy((()=>a.e(5867).then(a.bind(a,95867))));class r extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a,isDefault:r,Personalization:c}=this.props,l=!!r&&(7!==t.id&&4!==t.id&&36!==t.id),d=o.ZQ&&36==t.id?"tagembed":t.icon;return l?(0,i.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,i.jsx)("div",{})}):(0,i.jsxs)(s.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:[" ",(0,i.jsx)(n,{network:t,networkClass:e})]})}}},62245:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>l});var s=a(47313),o=a(16390),i=a(17739),n=a(35179),r=a(46417);const c=s.lazy((()=>Promise.all([a.e(622),a.e(584)]).then(a.bind(a,30584))));class l extends s.PureComponent{constructor(t){super(t),this.contentRef=s.createRef()}componentDidMount(){n.ZQ&&setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:a,font:l,personalization:d,item:h,contentTitle:p,readMore:_,maxLength:u,textAlign:m,maxLines:g,isReadMore:b}=this.props,w={WebkitLineClamp:g,textAlign:a.textAlignment};let x=20==h.network.id||n.bX&&!n.aL?e:(0,i.Fx)(e);12==h.network.id&&(x=(0,o.ZP)(x));const f="".concat(a.lineTrim?" tb_content_line-".concat(a.lineTrim):""),v="".concat(t," ").concat(b?"":f);return(0,r.jsxs)("div",{className:v,ref:this.contentRef,style:w,children:[p?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,o.ZP)(p)}):null,(0,r.jsxs)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[" ",(0,r.jsx)(c,{data:h,content:x,Personalization:d})]})]})}}},90905:(t,e,a)=>{"use strict";a.d(e,{Z:()=>c});var s=a(47313),o=a(35179),i=a(46417);const n=t=>{let{network:e}=t;const a={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:o.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:o.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:s,color:n}=a[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,i.jsx)("div",{className:s,style:{color:n},"tb-network":e.id,children:(0,i.jsx)("div",{})})},r=t=>{let{ThemeID:e}=t;const{className:a,color:s}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,i.jsx)("div",{className:a,style:{color:s},"tb-network":e})};class c extends s.PureComponent{render(){const{rating:t,network:e,ThemeID:a}=this.props;return(0,i.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,s)=>a?(0,i.jsx)(r,{ThemeID:a},s):(0,i.jsx)(n,{network:e},s))):null})}}},5744:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var s=a(47313),o=a(40475),i=a(35179),n=a(46417);class r extends s.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:a,wallID:s,ownerId:n}=this.props;e.stopPropagation(),i.ZQ||(0,o.S5)({type:2,action:2,wall:s,feed:a.feedId,post:a.referenceId?a.referenceId:a.id,owner:n}),(0,o.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,n.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,n.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(i.ZQ?"tb-share-fill":"tb-share"),children:(0,n.jsx)("div",{})}),(0,n.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,n.jsx)("div",{})})}):"",t.twitter?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,n.jsx)("div",{})})}):"",t.linkedin?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,n.jsx)("div",{})})}):""]})]})}}},32675:(t,e,a)=>{"use strict";a.d(e,{Z:()=>l});var s=a(47313),o=(a(35179),a(17739)),i=a(46417);const n=(t,e,a)=>1==t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,o.ok)(e)):a,r=(t,e,a)=>1==t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,o.ok)(e)):a,c=t=>{let{arialbl:e,hrefClick:a,Icon:s,count:n}=t;return(0,i.jsx)("div",{className:"tb_social_action__list",children:(0,i.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(a,"_blank")},className:"tb_social_action__ico_wrap",children:[(0,i.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(s),children:" "}),n>0?(0,i.jsx)("div",{className:"tb_social_action_counts__",children:(0,o.sy)(n)}):""]})})};class l extends s.PureComponent{render(){const{itemData:t,ThemeRule:e,actionClass:a,ThemeID:s}=this.props,l={color:3===s?1===e.iconType?e.iconColor:t.network.color:e.fontColor},d=t.network.id,h=3===d||10===d||7===d?"like":"heart",p=!![1,2,3,7,8,9,10,18].includes(d),_=![29,19].includes(d),u=t.network.name?t.network.name:"";return(0,i.jsx)(i.Fragment,{children:29!==d&&26!==d&&23!==d&&6!==d&&5!==d&&11!==d&&12!==d&&15!==d&&20!==d&&21!==d?(0,i.jsx)("div",{className:a,children:(0,i.jsxs)("div",{className:"tb_social_action__",children:[p?(0,i.jsx)(c,{arialbl:u,hrefClick:n(d,t.postId,t.link),Icon:h,iconColorStyle:l,count:t.like_count}):null,_?(0,i.jsx)(c,{arialbl:u,hrefClick:r(d,t.postId,t.link),Icon:"comment",iconColorStyle:l,count:t.comment_count}):null,1===d?(0,i.jsx)(c,{arialbl:u,hrefClick:"https://twitter.com/intent/retweet?tweet_id=".concat((0,o.ok)(t.postId)),Icon:"retweet",iconColorStyle:l,count:t.comment_count}):null,(0,i.jsx)(c,{arialbl:u,hrefClick:t.link,Icon:"eye",iconColorStyle:l,count:0})]})}):""})}}},55790:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=a(47313),o=a(17739),i=a(46417);const n=t=>{const{postTime:e,timeClass:a}=t;return(0,i.jsx)("div",{className:a,children:(0,o.Sy)(e)})},r=(0,s.memo)(n)},85156:(t,e,a)=>{"use strict";a.d(e,{Z:()=>f});var s=a(47313),o=a(19981),i=a(35179),n=a(84261),r=a(46417);const c=s.lazy((()=>a.e(695).then(a.bind(a,10695)))),l=t=>{let{itemData:e,wallID:a,ownerId:l,wall:d,isCover:h,ThemeRule:p}=t;const _=(3===e.type||5===e.type)&&1==d.ThemeRule.autoPlay;e.hotspot;return(0,r.jsxs)("div",{className:"tb_w_e_media_wrap",children:[i.aL&&d.Personalization.interactive?(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(c,{postId:e.id,wallID:a,UserDetail:d.UserDetail})}):null,_?(0,r.jsx)(o.Z,{VideoClass:"tb_w_e_video",data:e,wallID:a,themeID:d.Personalization.widgetTheme,wall:d,size:false,isCover:h,muted:!0,autoPlay:_,handleVideoEnded:()=>{}}):(0,r.jsx)(n.default,{ImageClass:"tb_w_e_image",data:e,wallID:a,themeID:d.Personalization.widgetTheme,ownerId:l,size:false,hotspot:!0})]})};var d=a(62245),h=a(5744),p=a(7138),_=a(90905),u=a(32675),m=a(55790),g=a(25810),b=a(89239);const w=t=>{let{author:e,personalization:a,postTime:o,network:i,ThemeRule:n,font:c,rating:l,ownerId:d,instaHash:h}=t;const p=e.username&&e.username.length>0?"@".concat(e.username):"",_=!(!a.postAuthor||e.isInstaUser),u=!(!a.postAuthor||!a.postTime||e.isInstaUser),w=!(null===i.id||""===i.id||!n.socialAction);return(0,r.jsxs)("div",{className:"tb_w_e_author_wrapper",children:[_?(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(b.default,{network:i,author:e,authorClass:"tb_w_e_author_profile"})}):"",(0,r.jsxs)("div",{className:"tb_w_e_author_info",children:[_?(0,r.jsx)("div",{className:"tb_w_e_authorname tb-cTBfont-".concat(n.font_varient),children:e.name}):"",(0,r.jsxs)("div",{className:"tb_w_e_post_info",children:[_?(0,r.jsx)("div",{className:"tb_w_e_username",children:p}):"",u?(0,r.jsx)("div",{className:"tb_w_e_seprator",children:" "}):"",a.postTime?(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(m.default,{postTime:o,timeClass:"tb_w_e_time tb-cTBfont-".concat(n.font_varient),authorColor:n.authorColor})}):""]})]}),w?(0,r.jsx)("div",{className:"tb_w_e_social_",children:(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(g.default,{networkClass:"tb_w_e_social_ico",network:i,isDefault:1===n.iconType,ThemeRule:n})})}):null]})};var x=a(17739);class f extends s.PureComponent{constructor(t){super(t),this.contentRef=t=>{this.setState({height:t})},this.contentRefHidden=t=>{this.setState({hiddenHeight:t})},this.toggleExpand=t=>{t.stopPropagation(),this.setState({isExpanded:!this.state.isExpanded})},this.state={isExpanded:!1,hiddenHeight:0,height:0},this.toggleExpand=this.toggleExpand.bind(this),this.postTrack=s.createRef()}componentDidMount(){i.nX&&(0,x.YN)(this.postTrack)}render(){const{itemData:t,personalization:e,ThemeRule:a,clickToShowPopUp:o,itemIndex:n,wallID:c,ownerId:m,onClickToCTA:g,wall:b,languageSetting:f,adjustWidth:v}=this.props,{isExpanded:k,hiddenHeight:j,height:C}=this.state,I=2===t.type||3===t.type||4===t.type||5===t.type,y=!!(t.rating&&t.rating>0),N=t.rating>0?"tb_w_e_rating_content":"tb_w_e_content",T=1===t.type?"tb_w_e_text_post":"",S=1===t.type&&e.textDecorate?"tb_w_e_text_decoration":"",P=!!t.cta.status,D=e.trimcontent?(0,x.Sv)(t.content,50):t.content,z=j>C;return(0,r.jsx)("div",{"item-id":t.id,id:"tb-hc-post-".concat(t.id),className:"tb_w_e_post_wrapper",ref:this.postTrack,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,style:{width:"".concat(v,"%"),padding:e.padding/2},children:(0,r.jsxs)("div",{className:"tb_w_e_post_in",onClick:o(n,t),children:[(0,r.jsxs)("div",{className:"tb_w_e_post_media_wrapp",children:[t.share.status?(0,r.jsx)(h.Z,{share:t.share,shareClass:"tb_w_e_share_container",item:t,wallID:c,ownerId:m}):"",I?(0,r.jsx)(l,{itemData:t,wallID:c,wall:b,ownerId:m,size:!!e.trimcontent&&100,isCover:!!e.trimcontent,ThemeRule:a}):null]}),(0,r.jsxs)("div",{className:"tb_w_e_contant_wrapper ".concat(T),children:[(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(w,{ownerId:m,postTime:t.createdAt,author:t.author,network:t.network,font:a,personalization:e,ThemeRule:a,rating:t.rating,instaHash:t.instaHash})}),P?(0,r.jsxs)("div",{className:"tb_w_e_post_cta",onClick:t=>{t.stopPropagation()},children:[(0,r.jsx)(p.Z,{ctaClass:"tb_w_e_post_cta_btn",cta:e.cta,postCta:t.cta,item:t,onClickToCTA:g})," "]}):"",y?(0,r.jsx)("div",{className:"tb_w_e_rating__",children:(0,r.jsx)(_.Z,{rating:t.rating,network:t.network})}):null,i.ig&&a.hideContent||!i.ig&&!a.hideContent||1==t.type?(0,r.jsxs)("div",{className:"tb_w_e_content_wrapper__",children:[i.ZQ?(0,r.jsx)("div",{className:"tb_w_e_content_hidden",children:(0,r.jsx)(d.default,{contentClass:"".concat(N," ").concat(S),item:t,content:D,font:a,ThemeRule:a,personalization:e,contentTitle:t.contentTitle,contentRefCallBack:this.contentRefHidden,isReadMore:!0},t.id)}):null,(0,r.jsx)(d.default,{contentClass:"".concat(N," ").concat(S),item:t,content:D,font:a,ThemeRule:a,personalization:e,contentTitle:t.contentTitle,contentRefCallBack:this.contentRef,maxLines:k?"":a.lineTrim,isReadMore:!0},t.id),a.lineTrim>0&&z&&i.ZQ?(0,r.jsx)("div",{className:"tb_read_more_",onClick:this.toggleExpand,children:k?f.showLess:f.readMore}):null]}):null]}),i.ig||i.ZQ?a.socialAction?(0,r.jsx)(u.Z,{itemData:t,ThemeRule:a,ThemeID:e.widgetTheme,actionClass:"tb_w_e_social_action__"}):null:""]})})}}},7092:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>p});var s=a(47313),o=(a(17739),a(35179)),i=a(61395),n=a.n(i),r=a(85156),c=a(46417);const l=s.lazy((()=>Promise.all([a.e(7529),a.e(4222)]).then(a.bind(a,24222)))),d=()=>{const t=t=>(document.querySelector(t)||{}).clientHeight||0;return t(".tb_wall_header__")+(window.editor?t("#kt_header"):0)+t("#appTicker")};class h extends s.Component{constructor(){super(...arguments),this.state={activeID:-1,newPostdata:[]},this.scrollInterval=null,this.componentDidMount=()=>{this.scrollInterval=setInterval((()=>this.onUpdateTimeInterVal()),3e3)},this.onUpdateTimeInterVal=()=>{const{activeID:t}=this.state,{cardNumber:e,wall:a}=this.props,s=a.ThemeRule.numberOfCoumn,o=parseInt(t)+1;this.setState({activeID:parseInt(s)>=o?o:0})}}componentWillMount(){const{cardNumber:t,postData:e,completeDataObject:a,adjustWidth:s,wall:o,postSize:i,clickToShowPopUp:n,onClickToCTA:r,postSizeInPx:c}=this.props,{activeID:l}=this.state,d=o.ThemeRule.numberOfCoumn,h=Array.from({length:d},(()=>[]));e.forEach(((t,e)=>h[e%d].push(t))),h.forEach((t=>{for(;t.length<3;){const e=h[Math.floor(Math.random()*d)],a=e[Math.floor(Math.random()*e.length)];t.push(a)}})),this.setState({newPostdata:h})}componentWillUnmount(){this.scrollInterval&&clearInterval(this.scrollInterval)}render(){const{cardNumber:t,postData:e,completeDataObject:a,adjustWidth:i,wall:h,postSize:p,clickToShowPopUp:_,onClickToCTA:u,postSizeInPx:m}=this.props,{activeID:g,newPostdata:b}=this.state;return(0,c.jsxs)(c.Fragment,{children:[" ",o.aL?(0,c.jsx)(n(),{id:"pixel",className:"tb_w_e_post_container",tabIndex:"0","aria-label":"There are ".concat(e&&e.length>0?e.length:0," posts in the feed"),elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_w_e_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:e&&e.length>0&&e.map(((t,e)=>{const s=a[t];return(0,c.jsx)(r.Z,{ownerId:h.Wall.owner,itemData:s,itemIndex:e,adjustWidth:1==s.highlight?2*i:i,personalization:h.Personalization,ThemeRule:h.ThemeRule,wallID:h.Wall.id,clickToShowPopUp:_,onClickToCTA:u,postSizeInPx:m,wall:h},"sqr_crd_".concat(e,"_").concat(t.id))}))}):(0,c.jsx)("div",{className:"tb_w_e_post_container",style:{overflow:"hidden",height:"calc(100vh - ".concat(d()+4,"px)")},children:b.map(((t,e)=>(0,c.jsx)(s.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(l,{pIndex:e,itemIds:t,activeID:g,completeDataObject:a,wall:h,onClickToCTA:u,postSizeInPx:m,cardCount:b.length,clickToShowPopUp:_},"exhi_".concat(e))})))})]})}}const p=h},25893:()=>{},50247:()=>{}}]);