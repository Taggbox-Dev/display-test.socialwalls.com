(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7261,4261,8342,9239,5790,5810],{89239:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var a=s(47313),i=s(17739),o=s(98935),r=s(46417);class n extends a.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:s}=this.props;return(0,r.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,r.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,i.P)(t.picture),width:44,height:44,onError:e=>{const a="#ffffff"==s.color?"#000":s.color;e.target.src=t.errorPic?t.errorPic:"https://ui-avatars.com/api/?name=".concat(t.name.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":a).replace("#",""),"&color=fff&length=1"),e.target.alt=t.name}}):(0,r.jsx)(o.Z,{authorClass:e,username:t.name,network:s,color:null===s.id?"#000":s.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});var a=s(47313),i=s(46417);const o=t=>{let{username:e,network:s,authorClass:a,errorPic:o}=t;const r="#ffffff"==s.color?"#000":s.color;return(0,i.jsx)("img",{className:"".concat(a,"__"),src:o||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":r).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},r=(0,a.memo)(o)},7138:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});var a=s(47313),i=s(46417);class o extends a.PureComponent{render(){const{cta:t,ctaClass:e,postCta:s,onClickToCTA:a,item:o}=this.props,r=!(!s||1!==s.status);return(0,i.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),a(o),window.open("".concat(r?s.url:t.url),"_blank")},children:[" ",r?s.text:t.text]})}}const r=o},97915:(t,e,s)=>{"use strict";s.d(e,{Z:()=>_});var a=s(47313),i=s(43411),o=s(83773),r=s(6119),n=s(17739),l=s(46417);const c=(0,o.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),d=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,s=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",a=t.product_price>0||t.product_discount>0?"".concat(s,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(a,"\n        </a>")};class h extends a.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:s}=this.state,a=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return a.status?(0,l.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const i=(0,n.i1)();return(0,l.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(i),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(s==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,l.jsx)("div",{className:"tb_hotspot__ ".concat(0==a.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,l.jsx)(c,{children:(0,l.jsx)(r.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(i),clickable:!0,html:d(t.UgcProduct)})})]},e)}))}):null}}const _=(0,i.$j)((t=>({appData:t.appData})))(h)},84261:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>h});var a=s(47313),i=s(40475),o=s(97915),r=s(2406),n=s(17739),l=s(98501),c=s(35179),d=s(46417);class h extends a.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const s=document.querySelector(".track".concat(this.props.data.id));s&&(s.setAttribute("data-height",e),s.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:s}=await(0,r.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t,size:{height:parseInt(s),width:parseInt(t)}})}catch(s){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgSize:{...this.state.imgSize,small:t.target.src}});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(s){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,imgSize:{small:t.data.postFileNew,large:t.data.filename,orignal:t.data.file},size:{height:100,width:100},isVisible:!1},this.videoRef=a.createRef(),this.observer=null}componentWillMount(){const{data:t,hotspot:e,size:s}=this.props;t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:s})}componentDidMount(){const{data:t,hotspot:e,size:s}=this.props;!s||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:s});try{this.observer=new IntersectionObserver((t=>{let[e]=t;e.isIntersecting&&(this.setState({isVisible:e.isIntersecting}),this.observer.disconnect())}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(a){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.observer.disconnect()}render(){const{ImageClass:t,data:e,wallID:s,themeID:a,ownerId:r,hotspot:h}=this.props,{imgUrl:_,paddingBottom:p,size:u,fixedPaddingBottom:m,imgSize:g,noPadding:b,isVisible:w}=this.state,f={paddingBottom:"".concat(this.props.size?1==this.props.size?null:m:p,"%")},v={backgroundImage:"url(".concat(g.small,")")};if(u.width>u.height)var x="100%",j="".concat(u.height/u.width*100,"%");else j="100%",x="".concat(u.width/u.height*100,"%");const k=!!(e.hotspot&&e.ugc_products.length>0&&h),y={width:k&&this.props.size?x:null,height:k&&this.props.size?j:null};return(0,d.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:f,ref:this.videoRef,children:[k?(0,d.jsx)("div",{className:"tb_blur_bg_",style:v}):null,(0,d.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:y,children:[k?(0,d.jsx)(o.Z,{product:e.ugc_products}):null,(0,d.jsx)("img",{className:"".concat(t," track").concat(e.id),role:"img",src:w?g.small:e.optmizedImg,srcSet:w?c.bX&&b?"".concat(g.large,", 991w ").concat(g.small,", 480w"):null:e.optmizedImg,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":s,"data-owner-id":r,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":a,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(l.do,"/media/images/error/no-image.svg"),(0,i.ht)(t)},alt:(0,n.P)(_)})]})]})}}},64442:(t,e,s)=>{"use strict";s.d(e,{Z:()=>_});var a=s(47313),i=s(2406),o=s(20510),r=s.n(o),n=s(40475),l=s(35179),c=(s(17739),s(46417));const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class h extends a.Component{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:s}=await(0,i.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=a.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(s){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:s,isCover:a,controls:i,autoPlay:o,handleVideoEnded:h,muted:_,themeID:p,intervalTime:u}=this.props,{paddingBottom:m,videoLoaded:g,isVisible:b}=this.state,w={small:e.postFileNew,large:e.filename,orignal:e.file},f=[74,76,77].includes(p),v={paddingBottom:"".concat(f&&l.bX?null:m,"%")},x=null!==e&&void 0!==e&&e.loopStop?e.mediaUrl:e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,c.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:v,ref:this.videoRef,children:(0,c.jsx)(r(),{className:"".concat(t," video").concat(e.id),url:d(x,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":s,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%"),poster:e.postFileNew}},file:{attributes:{preload:"metadata",poster:e.postFileNew}}},loop:!(l.bX&&!l.aL&&null!==e&&void 0!==e&&e.loopStop),onError:t=>{!l.P2||e.stories&&0!=e.stories||(0,n.ib)(t,e.id),f&&h&&setTimeout((()=>{h()}),1e3*u)},autoPlay:l.bX?b:o,muted:_,volume:o?1:0,playsinline:!0,onReady:t=>{l.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:l.ig||l.bX?b:o,height:"100%",width:"100%",controls:i||!1,style:{backgroundImage:"url(".concat(f?w.large:w.small,")"),backgroundSize:a?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})})}}const _=(0,a.memo)(h)},25810:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var a=s(47313),i=s(35179),o=s(46417);const r=a.lazy((()=>s.e(5867).then(s.bind(s,95867))));class n extends a.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,isDefault:n,Personalization:l}=this.props,c=!!n&&(7!==t.id&&4!==t.id&&36!==t.id),d=i.ZQ&&36==t.id?"tagembed":t.icon;return c?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,o.jsx)("div",{})}):(0,o.jsxs)(a.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(r,{network:t,networkClass:e})]})}}},62245:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>c});var a=s(47313),i=s(16390),o=s(17739),r=s(35179),n=s(30584),l=s(46417);class c extends a.PureComponent{constructor(t){super(t),this.contentRef=a.createRef()}componentDidMount(){r.ZQ&&setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:s,font:a,personalization:c,item:d,contentTitle:h,readMore:_,maxLength:p,textAlign:u,maxLines:m,isReadMore:g}=this.props,b={WebkitLineClamp:m,textAlign:s.textAlignment};let w=20==d.network.id||r.bX&&!r.aL?e:(0,o.Fx)(e);12==d.network.id&&(w=(0,i.ZP)(w));const f="".concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):""),v="".concat(t," ").concat(g?"":f);return(0,l.jsxs)("div",{className:v,ref:this.contentRef,style:b,children:[h?(0,l.jsx)("div",{className:"tb_bold_txt__",children:(0,i.ZP)(h)}):null,(0,l.jsx)(n.Z,{data:d,content:w,Personalization:c,ThemeRule:s})]})}}},30584:(t,e,s)=>{"use strict";s.d(e,{Z:()=>d});var a=s(47313),i=s(91523),o=s(16390),r=s(46417);const n=s(77560),l=(t,e)=>(0,r.jsx)(i.default,{style:e&&[66,70].includes(null===e||void 0===e?void 0:e.themeId)?{width:e.fontSize,height:e.fontSize}:null,children:(0,o.ZP)(t)}),c=t=>{let{data:e,content:s,Personalization:a,ThemeRule:i}=t;const c={color:a.hashtag_color,fontWeight:"bold",backgroundColor:1==a.hashtag_background_status?a.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,r.jsx)(r.Fragment,{children:1===a.hashtag_highlight&&0===a.hashtag_feed&&0===a.hashtag_all?(0,o.ZP)(s):1===a.hashtag_highlight&&0===a.hashtag_feed&&1===a.hashtag_all?l(window.slackdown.parse(n(s,/#(\w+)/g,((t,e)=>(0,r.jsxs)("div",{className:"tb_text_hashtag",style:c,children:["#",t]}))),e.slackMember),i):1===a.hashtag_highlight&&1===a.hashtag_feed&&0===a.hashtag_all?l(window.slackdown.parse(n(s,e.hash.hashString,((t,e)=>(0,r.jsx)("div",{className:"tb_text_hashtag",style:c,children:t}))),e.slackMember),i):1===a.hashtag_highlight&&1===a.hashtag_feed&&1===a.hashtag_all?l(window.slackdown.parse(n(s,/#(\w+)/g,((t,s)=>(0,r.jsxs)("div",{className:"tb_text_hashtag",style:c,children:["#",t]},"".concat(e.id,"_").concat(s)))),e.slackMember),i):l(window.slackdown.parse(s,e.slackMember),i)}):(0,r.jsx)(r.Fragment,{children:1===a.hashtag_highlight&&0===a.hashtag_feed&&0===a.hashtag_all?(0,o.ZP)(s):1===a.hashtag_highlight&&0===a.hashtag_feed&&1===a.hashtag_all?n((0,o.ZP)(s),/#(\w+)/g,((t,e)=>(0,r.jsxs)("div",{className:"tb_text_hashtag",style:c,children:["#",t]}))):1===a.hashtag_highlight&&1===a.hashtag_feed&&0===a.hashtag_all?n((0,o.ZP)(s),e.hash.hashString,((t,e)=>(0,r.jsx)("div",{className:"tb_text_hashtag",style:c,children:t}))):1===a.hashtag_highlight&&1===a.hashtag_feed&&1===a.hashtag_all?n((0,o.ZP)(s),/#(\w+)/g,((t,s)=>(0,r.jsxs)("div",{className:"tb_text_hashtag",style:c,children:["#",t]},"".concat(e.id,"_").concat(s)))):l(s,i)})},d=(0,a.memo)(c)},55790:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var a=s(47313),i=s(17739),o=s(46417);const r=t=>{const{postTime:e,timeClass:s}=t;return(0,o.jsx)("div",{className:s,children:(0,i.Sy)(e)})},n=(0,a.memo)(r)},56094:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>x});var a=s(47313),i=s(11774),o=s(89239),r=s(55790),n=s(25810),l=s(46417);const c=t=>{let{author:e,personalization:s,postTime:a,network:i,ThemeRule:c,font:d}=t;const h=e.username&&e.username.length>0?"@".concat(e.username):"",_={color:c.authorColor,fontFamily:c.css_font},p={backgroundColor:c.authorColor},u=!(!s.postAuthor||e.isInstaUser),m=!(!s.postAuthor||!s.postTime||e.isInstaUser);return(0,l.jsxs)("div",{className:"tb_spt_author_wrapper",children:[(0,l.jsxs)("div",{className:"tb_spt_author",children:[u?(0,l.jsx)(o.default,{author:e,network:i,authorClass:"tb_spt_author_profile"}):"",(0,l.jsxs)("div",{className:"tb_spt_author_info",children:[u?(0,l.jsx)("div",{className:"tb_spt_authorname",style:_,children:e.name}):"",(0,l.jsxs)("div",{className:"tb_spt_post_info",children:[u?(0,l.jsx)("div",{className:"tb_spt_username",style:_,children:h}):"",m?(0,l.jsx)("div",{className:"tb_spt_seprator",style:p,children:" "}):"",s.postTime?(0,l.jsx)(r.default,{postTime:a,timeClass:"tb_spt_time tb-cTBfont-".concat(c.font_varient),authorColor:c.authorColor,authorNameStyle:_}):""]})]})]}),(0,l.jsx)("div",{className:"tb_spt_social_",children:(0,l.jsx)(n.default,{networkClass:"tb_spt_social_ico",network:i,isDefault:1===c.iconType,ThemeRule:c})})]})},d=t=>{let{share:e,shareColor:s}=t;const a={color:s};return(0,l.jsxs)("div",{className:"tb_spt_share_wrapper",children:[(0,l.jsxs)("div",{className:"tb_spt_share_button_",children:[(0,l.jsx)("div",{className:"tb_spt_share_ico tb__icon tb-share",style:a,children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_spt_share_btn_txt",style:a,children:"Share"})]}),(0,l.jsx)("div",{className:"tb_spt_share_wrapper_dropdown",children:(0,l.jsxs)("div",{className:"tb_spt_share_icon_list",children:[e.facebook?(0,l.jsxs)("a",{href:e.facebook,target:"_blank",className:"tb_spt_share_list_in",rel:"noopener noreferrer nofollow",children:[(0,l.jsx)("div",{className:"tb_spt_share_ico__ tb__icon tb-facebook",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_spt_share_ico_txt",children:"Facebook"})]}):"",e.twitter?(0,l.jsxs)("a",{href:e.twitter,target:"_blank",className:"tb_spt_share_list_in",rel:"noopener noreferrer nofollow",children:[(0,l.jsx)("div",{className:"tb_spt_share_ico__  tb__icon tb-twitter",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_spt_share_ico_txt",children:"Twitter"})]}):"",e.linkedin?(0,l.jsxs)("a",{href:e.linkedin,target:"_blank",className:"tb_spt_share_list_in",rel:"noopener noreferrer nofollow",children:[(0,l.jsx)("div",{className:"tb_spt_share_ico__ tb__icon tb-linkedin",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_spt_share_ico_txt",children:"LinkedIn"})]}):""]})})]})};var h=s(84261),_=s(64442);const p=t=>{let{itemData:e,wallID:s,ownerId:a,wall:i}=t;const o=(3===e.type||5===e.type)&&1==i.ThemeRule.autoPlay;return(0,l.jsx)("div",{className:"tb_spt_media_wrap",children:o?(0,l.jsx)(_.Z,{VideoClass:"tb_spt_video",data:e,wallID:s,themeID:i.Personalization.widgetTheme,ownerId:a,size:130,muted:!0,autoPlay:o,handleVideoEnded:()=>{}}):(0,l.jsx)(h.default,{ImageClass:"tb_spt_image",data:e,wallID:s,themeID:i.Personalization.widgetTheme,ownerId:a,size:130})})};var u=s(62245),m=s(7138),g=s(17739);const b=(t,e,s)=>1===t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,g.ok)(e)):s,w=(t,e,s)=>1===t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,g.ok)(e)):s,f=t=>{let{itemData:e,ThemeRule:s}=t;const a={color:s.fontColor},i=e.network.id,o=3===i||10===i?"like":"heart";return(0,l.jsx)(l.Fragment,{children:12!==i&&15!==i&&20!==i&&21!==i?(0,l.jsxs)("div",{className:"tb_spt_social_action__",children:[(0,l.jsx)("div",{className:"tb_spt_social_action__list",children:(0,l.jsxs)("a",{href:b(i,e.postId,e.link),target:"_blank",className:"tb_spt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:[(0,l.jsx)("div",{className:"tb_spt_social_action_ico__ tb__icon tb-".concat(o),style:a,children:" "}),e.like_count>0?(0,l.jsx)("div",{className:"tb_spt_social_action_counts__",style:a,children:e.like_count}):""]})}),(0,l.jsx)("div",{className:"tb_spt_social_action__list",children:(0,l.jsxs)("a",{href:w(i,e.postId,e.link),target:"_blank",className:"tb_spt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:[(0,l.jsx)("div",{className:"tb_spt_social_action_ico__ tb__icon tb-comment",style:a,children:" "}),e.like_count>0?(0,l.jsx)("div",{className:"tb_spt_social_action_counts__",style:a,children:e.like_count}):""]})}),1===i?(0,l.jsx)("div",{className:"tb_spt_social_action__list",children:(0,l.jsx)("a",{href:"https://twitter.com/intent/retweet?tweet_id=".concat((0,g.ok)(e.postId)),target:"_blank",className:"tb_spt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:(0,l.jsx)("div",{className:"tb_spt_social_action_ico__ tb__icon tb-retweet",style:a,children:" "})})}):""]}):""})},v=t=>{let{itemData:e,personalization:s,ThemeRule:a,itemIndex:i,clickToShowPopUp:o,wallID:r,ownerId:n,onClickToCTA:h,wall:_}=t;const g=!!(e.ugc_products&&e.ugc_products.length>0),b=!(!g||0!==e.hotspot),w=!(!e.hotspot||!g),v={backgroundColor:a.cardColor},x=1!==e.type,j=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),k={justifyContent:e.share.status?"":"flex-end",borderTop:"1px solid ".concat(a.fontColor)};return(0,l.jsx)("div",{id:"tb-spt-post-".concat(e.id),className:"tb_spt_post_wrapper","tb-network":e.network.id,"tb-product":b?1:w?2:0,children:(0,l.jsx)("div",{className:"tb_spt_post_in",onClick:o(i,e),children:(0,l.jsxs)("div",{className:"tb_spt_post_media_wrapp",children:[x?(0,l.jsx)(p,{itemData:e,wallID:r,wall:_,ownerId:n}):"",(0,l.jsx)("div",{className:"tb_spt_post_details",children:(0,l.jsxs)("div",{className:"tb_spt_contant_wrapper",children:[(0,l.jsx)(c,{ownerId:n,postTime:e.createdAt,author:e.author,network:e.network,font:a,personalization:s,ThemeRule:a}),(0,l.jsxs)("div",{className:"tb_spt_content_wrap",children:[(0,l.jsxs)("div",{className:"tb_spt_content_wrap_in",children:[a.hideContent&&1!=e.type?"":(0,l.jsx)(u.default,{contentClass:"tb_spt_content",item:e,content:e.content,font:a,ThemeRule:a,personalization:s}),j?(0,l.jsxs)("div",{className:"tb_spt_post_cta",children:[(0,l.jsx)(m.Z,{ctaClass:"tb_spt_post_cta_btn",cta:e.cta,contentTitle:e.contentTitle,item:e,onClickToCTA:h})," "]}):""]}),(0,l.jsxs)("div",{className:"tb_spt_social_actions_container",style:k,children:[e.share.status?(0,l.jsx)(d,{share:e.share,shareColor:a.fontColor}):"",a.socialAction?(0,l.jsx)(f,{itemData:e,ThemeRule:a}):""]})]})]})}),(0,l.jsx)("div",{className:"tb_spt_post_overlay",style:v,children:(0,l.jsx)("div",{})})]})})})};s(37210);class x extends a.PureComponent{componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((t,e)=>{t.removeAttribute("role")}))}),100)}render(){const{postData:t,completeDataObject:e,wall:s,clickToShowPopUp:a,onClickToCTA:o}=this.props,r={type:"loop",rewind:!0,speed:500,gap:0,autoplay:!!s.ThemeRule.slidePost,padding:0,pagination:!1,arrows:!0};return(0,l.jsx)("div",{className:"tb_spt_post_container",children:(0,l.jsxs)(i.tv,{hasTrack:!1,className:"tb_spt_post_slider",options:r,ref:this.myRef,children:[(0,l.jsx)(i.Gj,{children:t&&t.length>0&&t.map(((t,r)=>{const n=e[t];return(0,l.jsx)(i.jw,{style:{margin:0,padding:0},children:(0,l.jsx)(v,{ownerId:s.Wall.owner,itemData:n,itemIndex:r,personalization:s.Personalization,ThemeRule:s.ThemeRule,wallID:s.Wall.id,clickToShowPopUp:a,onClickToCTA:o,wall:s})},r)}))}),(0,l.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_spt_arrow_wrapper_",children:[(0,l.jsx)("div",{className:"splide__arrow splide__arrow--prev tb_spt_arrow tb_spt_arrow_left__ tb__icon tb-arrow-left-alt",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"splide__arrow splide__arrow--next tb_spt_arrow tb_spt_arrow_right__ tb__icon tb-arrow-right-alt",children:(0,l.jsx)("div",{})})]})]})})}}},61729:(t,e,s)=>{"use strict";var a=s(79165);function i(){}function o(){}o.resetWarningCache=i,t.exports=function(){function t(t,e,s,i,o,r){if(r!==a){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}function e(){return t}t.isRequired=t;var s={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:i};return s.PropTypes=s,s}},75192:(t,e,s)=>{t.exports=s(61729)()},79165:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2406:(t,e,s)=>{"use strict";e.Ad=void 0;var a=s(84228);var i=s(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return i.getImageSize}});var o=s(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,s)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const a=s(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((s,i)=>{if("undefined"===typeof window)return i(a.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return i(a.ErrorMessage.URL_IS_NOT_DEFINED);let o=null;const r=new Image;r.addEventListener("load",(()=>{o&&window.clearTimeout(o),s({width:r.naturalWidth,height:r.naturalHeight})})),r.addEventListener("error",(t=>{o&&window.clearTimeout(o),i("".concat(t.type,": ").concat(t.message))})),r.src=t,e.timeout&&(o=window.setTimeout((()=>i(a.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,s){"use strict";var a=this&&this.__awaiter||function(t,e,s,a){return new(s||(s=Promise))((function(i,o){function r(t){try{l(a.next(t))}catch(e){o(e)}}function n(t){try{l(a.throw(t))}catch(e){o(e)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(r,n)}l((a=a.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const i=s(47313),o=s(65786);e.useImageSize=(t,e)=>{const[s,r]=(0,i.useState)(null),[n,l]=(0,i.useState)(!1),[c,d]=(0,i.useState)(null);return(0,i.useEffect)((()=>{a(void 0,void 0,void 0,(function*(){l(!0),r(null);try{const{width:s,height:a}=yield(0,o.getImageSize)(t,e);r({width:s,height:a})}catch(c){d(c.toString())}finally{l(!1)}}))}),[t,e]),[s,{loading:n,error:c}]}},37210:()=>{},50247:()=>{}}]);