(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[8463,5867,4261,8342,9239,5790,5810],{89239:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var a=s(47313),i=s(17739),o=s(98935),c=s(46417);class r extends a.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:s}=this.props;return(0,c.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,c.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,i.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,c.jsx)(o.Z,{authorClass:e,username:t.name,network:s,color:null===s.id?"#000":s.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,s)=>{"use strict";s.d(e,{Z:()=>c});var a=s(47313),i=s(46417);const o=t=>{let{username:e,network:s,authorClass:a,errorPic:o}=t;const c="#ffffff"==s.color?"#000":s.color;return(0,i.jsx)("img",{className:"".concat(a,"__"),src:o||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":c).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},c=(0,a.memo)(o)},7138:(t,e,s)=>{"use strict";s.d(e,{Z:()=>c});var a=s(47313),i=s(46417);class o extends a.PureComponent{render(){const{cta:t,ctaClass:e,postCta:s,onClickToCTA:a,item:o}=this.props,c=!(!s||1!==s.status);return(0,i.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),a(o),window.open("".concat(c?s.url:t.url),"_blank")},children:[" ",c?s.text:t.text]})}}const c=o},97915:(t,e,s)=>{"use strict";s.d(e,{Z:()=>h});var a=s(47313),i=s(43411),o=s(83773),c=s(6119),r=s(17739),n=s(46417);const l=(0,o.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),d=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,s=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",a=t.product_price>0||t.product_discount>0?"".concat(s,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(a,"\n        </a>")};class _ extends a.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:s}=this.state,a=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return a.status?(0,n.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const i=(0,r.i1)();return(0,n.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(i),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(s==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,n.jsx)("div",{className:"tb_hotspot__ ".concat(0==a.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,n.jsx)(l,{children:(0,n.jsx)(c.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(i),clickable:!0,html:d(t.UgcProduct)})})]},e)}))}):null}}const h=(0,i.$j)((t=>({appData:t.appData})))(_)},84261:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>_});var a=s(47313),i=s(40475),o=s(97915),c=s(2406),r=s(17739),n=s(98501),l=s(35179),d=s(46417);class _ extends a.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const s=document.querySelector(".track".concat(this.props.data.id));s&&(s.setAttribute("data-height",e),s.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:s}=await(0,c.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t,size:{height:parseInt(s),width:parseInt(t)}})}catch(s){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgSize:{...this.state.imgSize,small:t.target.src}});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(s){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,imgSize:{small:t.data.postFileNew,large:t.data.filename,orignal:t.data.file},size:{height:100,width:100}}}componentWillMount(){const{data:t,hotspot:e,size:s}=this.props;t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:s})}componentDidMount(){const{data:t,hotspot:e,size:s}=this.props;!s||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:s})}render(){const{ImageClass:t,data:e,wallID:s,themeID:a,ownerId:c,hotspot:_}=this.props,{imgUrl:h,paddingBottom:m,size:p,fixedPaddingBottom:u,imgSize:b,noPadding:v}=this.state,x={paddingBottom:"".concat(this.props.size?1==this.props.size?null:u:m,"%")},g={backgroundImage:"url(".concat(b.small,")")};if(p.width>p.height)var j="100%",w="".concat(p.height/p.width*100,"%");else w="100%",j="".concat(p.width/p.height*100,"%");const N=!!(e.hotspot&&e.ugc_products.length>0&&_),f={width:N&&this.props.size?j:null,height:N&&this.props.size?w:null};return(0,d.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:x,children:[N?(0,d.jsx)("div",{className:"tb_blur_bg_",style:g}):null,(0,d.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:f,children:[N?(0,d.jsx)(o.Z,{product:e.ugc_products}):null,(0,d.jsx)("img",{className:"".concat(t," track").concat(e.id),role:"img",src:b.small,srcSet:l.bX&&v?"".concat(b.large,", 991w ").concat(b.small,", 480w"):null,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":s,"data-owner-id":c,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":a,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(n.do,"/media/images/error/no-image.svg"),(0,i.ht)(t)},alt:(0,r.P)(h)})]})]})}}},64442:(t,e,s)=>{"use strict";s.d(e,{Z:()=>h});var a=s(47313),i=s(2406),o=s(20510),c=s.n(o),r=s(40475),n=s(35179),l=(s(17739),s(46417));const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class _ extends a.Component{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:s}=await(0,i.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=a.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(s){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:s,isCover:a,controls:i,autoPlay:o,handleVideoEnded:_,muted:h,themeID:m,intervalTime:p}=this.props,{paddingBottom:u,videoLoaded:b,isVisible:v}=this.state,x={small:e.postFileNew,large:e.filename,orignal:e.file},g=[74,76,77].includes(m),j={paddingBottom:"".concat(g&&n.bX?null:u,"%")},w=null!==e&&void 0!==e&&e.loopStop?e.mediaUrl:e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:j,ref:this.videoRef,children:(0,l.jsx)(c(),{className:"".concat(t," video").concat(e.id),url:d(w,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":s,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata",poster:g?x.large:x.small}}},loop:!(n.bX&&!n.aL&&null!==e&&void 0!==e&&e.loopStop),onError:t=>{e.stories&&0!=e.stories||(0,r.ib)(t,e.id),g&&_&&setTimeout((()=>{_()}),1e3*p)},autoPlay:n.bX?v:o,muted:h,volume:o?1:0,playsinline:!0,onReady:t=>{n.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:n.ig||n.bX?v:o,height:"100%",width:"100%",controls:i||!1,style:{backgroundImage:"url(".concat(g?x.large:x.small,")"),backgroundSize:a?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:_||null})})}}const h=(0,a.memo)(_)},81349:(t,e,s)=>{"use strict";s.d(e,{Z:()=>c});s(47313);var a=s(35179),i=s(95867),o=s(46417);const c=t=>{const{itemData:e,IconClass:s,isCenter:c,hideVideo:r,show:n}=t,l=3===e.type||5===e.type,d=7===e.network.id,_=!!(e.imageList&&e.imageList.length>0),h=1===e.isAudio,m=!!(e.ugc_products&&e.ugc_products.length>0),p=(0,o.jsx)(i.default,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"}),u=(0,o.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:(0,o.jsx)("div",{})}),b=(0,o.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:(0,o.jsx)("div",{})}),v=(0,o.jsx)("div",{className:"tb__icon tb-".concat(a.bX?"reel-fill tb_reel_ico":"video tb_video_ico"),children:(0,o.jsx)("div",{})}),x=(0,o.jsx)("div",{className:"tb_play_ico tb__icon tb-play",children:(0,o.jsx)("div",{})}),g=(0,o.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:(0,o.jsx)("div",{})}),j=(0,o.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:(0,o.jsx)("div",{})});return n?(0,o.jsxs)(o.Fragment,{children:[c&&(d||l)?(0,o.jsxs)("div",{className:"".concat(s," tb__media_ico_c"),children:[l&&!d?j:"",l&&d?p:""]}):null,m||_||l?(0,o.jsxs)("div",{className:"".concat(s," tb__media_ico_"),children:[m?g:"",_?u:"",c||!l||d||r?"":h?b:a.ZQ?x:v]}):null]}):null}},95867:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var a=s(47313),i=s(35179),o=s(46417);const c=a.memo((t=>{let{network:e,networkClass:s}=t;const a="".concat(s," tb__icon tb_ico_default");switch(e.id){case 1:return(0,o.jsx)("div",{className:"".concat(a," tb-twitter")});case 2:case 18:return(0,o.jsx)("div",{className:"".concat(a," tb-instagram-default"),children:(0,o.jsx)("div",{})});case 3:return(0,o.jsx)("div",{className:"".concat(a," tb-facebook"),children:(0,o.jsx)("div",{})});case 4:return(0,o.jsxs)("div",{className:"".concat(a," tb-google-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})})]});case 5:return(0,o.jsx)("div",{className:"".concat(a," tb-pinterest"),children:(0,o.jsx)("div",{})});case 6:return(0,o.jsxs)("div",{className:"".concat(a," tb-flickr-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 7:return(0,o.jsxs)("div",{className:"".concat(a," tb-youtube-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 8:return(0,o.jsx)("div",{className:"".concat(a," tb-vimeo"),children:(0,o.jsx)("div",{})});case 10:return(0,o.jsx)("div",{className:"".concat(a," tb-linkedin"),children:(0,o.jsx)("div",{})});case 11:return(0,o.jsx)("div",{className:"".concat(a," tb-tumblr"),children:(0,o.jsx)("div",{})});case 12:return(0,o.jsx)("div",{className:"".concat(a," tb-rss"),children:(0,o.jsx)("div",{})});case 15:return(0,o.jsx)("div",{className:"".concat(a," tb-workplace"),children:(0,o.jsx)("div",{})});case 19:return(0,o.jsx)("div",{className:"".concat(a," tb-yelp"),children:(0,o.jsx)("div",{})});case 20:return(0,o.jsxs)("div",{className:"".concat(a," tb-slack-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path8",children:(0,o.jsx)("div",{})})]});case 21:return(0,o.jsx)("div",{className:"".concat(a," tb-yammer"),children:(0,o.jsx)("div",{})});case 23:return(0,o.jsx)("div",{className:"".concat(a," tb-airbnb"),children:(0,o.jsx)("div",{})});case 25:return(0,o.jsx)("div",{className:"".concat(a," tb-soundcloud"),children:(0,o.jsx)("div",{})});case 26:return(0,o.jsxs)("div",{className:"".concat(a," tb-giphy-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 28:return i.ZQ?(0,o.jsxs)("div",{className:"".concat(a," tb-capterra-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4"})]}):(0,o.jsxs)("div",{className:"".concat(a," tb-tiktok-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 29:return i.ZQ?(0,o.jsx)("div",{className:"".concat(a," tb-etsy"),children:(0,o.jsx)("div",{})}):(0,o.jsx)("div",{className:"".concat(a," tb-onsite-upload"),children:(0,o.jsx)("div",{})});case 30:case 32:return(0,o.jsx)("div",{className:"".concat(a," tb-vk"),children:(0,o.jsx)("div",{})});case 31:return(0,o.jsxs)("div",{className:"".concat(a," tb-tiktok-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 33:return(0,o.jsxs)("div",{className:"".concat(a," tb-trustpilot-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 34:return(0,o.jsxs)("div",{className:"".concat(a," tb-amazon-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 35:return(0,o.jsx)("div",{className:"".concat(a," tb-tripadvisor"),children:(0,o.jsx)("div",{})});case 36:return(0,o.jsxs)("div",{className:"".concat(a," tb-tagembed-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})})]});case 37:return(0,o.jsxs)("div",{className:"".concat(a," tb-aliexpress-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})})]});default:return""}}));class r extends a.PureComponent{render(){return(0,o.jsx)(c,{...this.props})}}},25810:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var a=s(47313),i=s(35179),o=s(46417);const c=a.lazy((()=>s.e(5867).then(s.bind(s,95867))));class r extends a.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,isDefault:r,Personalization:n}=this.props,l=!!r&&(7!==t.id&&4!==t.id&&36!==t.id),d=i.ZQ&&36==t.id?"tagembed":t.icon;return l?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,o.jsx)("div",{})}):(0,o.jsxs)(a.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(c,{network:t,networkClass:e})]})}}},62245:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var a=s(47313),i=s(16390),o=s(17739),c=s(35179),r=s(30584),n=s(46417);class l extends a.PureComponent{constructor(t){super(t),this.contentRef=a.createRef()}componentDidMount(){c.ZQ&&setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:s,font:a,personalization:l,item:d,contentTitle:_,readMore:h,maxLength:m,textAlign:p,maxLines:u,isReadMore:b}=this.props,v={WebkitLineClamp:u,textAlign:s.textAlignment};let x=20==d.network.id||c.bX&&!c.aL?e:(0,o.Fx)(e);12==d.network.id&&(x=(0,i.ZP)(x));const g="".concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):""),j="".concat(t," ").concat(b?"":g);return(0,n.jsxs)("div",{className:j,ref:this.contentRef,style:v,children:[_?(0,n.jsx)("div",{className:"tb_bold_txt__",children:(0,i.ZP)(_)}):null,(0,n.jsx)(r.Z,{data:d,content:x,Personalization:l})]})}}},30584:(t,e,s)=>{"use strict";s.d(e,{Z:()=>d});var a=s(47313),i=s(91523),o=s(16390),c=s(46417);const r=s(77560),n=t=>(0,c.jsx)(i.default,{children:(0,o.ZP)(t)}),l=t=>{let{data:e,content:s,Personalization:a}=t;const i={color:a.hashtag_color,fontWeight:"bold",backgroundColor:1==a.hashtag_background_status?a.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,c.jsx)(c.Fragment,{children:1===a.hashtag_highlight&&0===a.hashtag_feed&&0===a.hashtag_all?(0,o.ZP)(s):1===a.hashtag_highlight&&0===a.hashtag_feed&&1===a.hashtag_all?n(window.slackdown.parse(r(s,/#(\w+)/g,((t,e)=>(0,c.jsxs)("div",{className:"tb_text_hashtag",style:i,children:["#",t]}))),e.slackMember)):1===a.hashtag_highlight&&1===a.hashtag_feed&&0===a.hashtag_all?n(window.slackdown.parse(r(s,e.hash.hashString,((t,e)=>(0,c.jsx)("div",{className:"tb_text_hashtag",style:i,children:t}))),e.slackMember)):1===a.hashtag_highlight&&1===a.hashtag_feed&&1===a.hashtag_all?n(window.slackdown.parse(r(s,/#(\w+)/g,((t,s)=>(0,c.jsxs)("div",{className:"tb_text_hashtag",style:i,children:["#",t]},"".concat(e.id,"_").concat(s)))),e.slackMember)):n(window.slackdown.parse(s,e.slackMember))}):(0,c.jsx)(c.Fragment,{children:1===a.hashtag_highlight&&0===a.hashtag_feed&&0===a.hashtag_all?(0,o.ZP)(s):1===a.hashtag_highlight&&0===a.hashtag_feed&&1===a.hashtag_all?r((0,o.ZP)(s),/#(\w+)/g,((t,e)=>(0,c.jsxs)("div",{className:"tb_text_hashtag",style:i,children:["#",t]}))):1===a.hashtag_highlight&&1===a.hashtag_feed&&0===a.hashtag_all?r((0,o.ZP)(s),e.hash.hashString,((t,e)=>(0,c.jsx)("div",{className:"tb_text_hashtag",style:i,children:t}))):1===a.hashtag_highlight&&1===a.hashtag_feed&&1===a.hashtag_all?r((0,o.ZP)(s),/#(\w+)/g,((t,s)=>(0,c.jsxs)("div",{className:"tb_text_hashtag",style:i,children:["#",t]},"".concat(e.id,"_").concat(s)))):(0,o.ZP)(s)})},d=(0,a.memo)(l)},90905:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});var a=s(47313),i=s(35179),o=s(46417);const c=t=>{let{network:e}=t;const s={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:i.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:i.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:a,color:c}=s[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,o.jsx)("div",{className:a,style:{color:c},"tb-network":e.id,children:(0,o.jsx)("div",{})})},r=t=>{let{ThemeID:e}=t;const{className:s,color:a}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,o.jsx)("div",{className:s,style:{color:a},"tb-network":e})};class n extends a.PureComponent{render(){const{rating:t,network:e,ThemeID:s}=this.props;return(0,o.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,a)=>s?(0,o.jsx)(r,{ThemeID:s},a):(0,o.jsx)(c,{network:e},a))):null})}}},55790:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var a=s(47313),i=s(17739),o=s(46417);const c=t=>{const{postTime:e,timeClass:s}=t;return(0,o.jsx)("div",{className:s,children:(0,i.Sy)(e)})},r=(0,a.memo)(c)},95136:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>f});s(47313);var a=s(89239),i=s(55790),o=s(25810),c=s(46417);const r=t=>{let{author:e,personalization:s,postTime:r,network:n,ThemeRule:l,font:d,mediaType:_}=t;const h=e.username&&e.username.length>0?"@".concat(e.username):"",m=!(!s.postAuthor||e.isInstaUser),p=!(!s.postAuthor||!s.postTime||e.isInstaUser);return(0,c.jsxs)("div",{className:"tb_wt_author_wrapper",children:[(0,c.jsxs)("div",{className:"tb_wt_author",children:[m?(0,c.jsx)(a.default,{author:e,network:n,authorClass:"tb_wt_author_profile"}):"",(0,c.jsxs)("div",{className:"tb_wt_author_info",children:[m?(0,c.jsx)("div",{className:"tb_wt_authorname",children:e.name}):"",(0,c.jsxs)("div",{className:"tb_wt_post_info",children:[m?(0,c.jsx)("div",{className:"tb_wt_username",children:h}):"",p?(0,c.jsx)("div",{className:"tb_wt_seprator",children:" "}):"",s.postTime?(0,c.jsx)(i.default,{postTime:r,timeClass:"tb_wt_time tb-cTBfont-".concat(l.font_varient),authorColor:l.authorColor}):""]})]})]}),(0,c.jsx)("div",{className:"tb_wt_social_",children:(0,c.jsx)(o.default,{networkClass:"tb_wt_social_ico",network:n,isDefault:1===l.iconType,ThemeRule:l})})]})};var n=s(35179),l=s(81349),d=s(84261),_=s(64442);const h=t=>{let{itemData:e,wallID:s,ownerId:a,wall:i}=t;const o=!(!n.ZQ||3!==e.type&&5!==e.type||i.Personalization.mobilePopup||i.Personalization.postFeatured),r=(3===e.type||5===e.type)&&1==i.ThemeRule.autoPlay,h=!!n.ZQ&&(!!i.ThemeRule.aspectImageRatio&&i.ThemeRule.aspectImageRatio);return(0,c.jsxs)("div",{className:"tb_wt_media_wrap",children:[o?null:(0,c.jsx)(l.Z,{itemData:e,IconClass:"tb_wt_media_icon",show:!0,isCenter:n.ZQ}),r||o?(0,c.jsx)(_.Z,{VideoClass:"tb_wt_video",data:e,wallID:s,themeID:i.Personalization.widgetTheme,ownerId:a,size:h,isCover:!0,controls:!0,autoPlay:!1,muted:!0}):(0,c.jsx)(d.default,{ImageClass:"tb_wt_image",data:e,wallID:s,themeID:i.Personalization.widgetTheme,ownerId:a,size:h,ThemeRule:i.ThemeRule})]})};var m=s(62245),p=s(7138),u=s(90905);const b=t=>{let{share:e,shareClass:s}=t;const a=(t,e)=>{t.stopPropagation(),e()};return(0,c.jsx)("div",{className:s,children:(0,c.jsxs)("div",{className:"tb_wt_share_wrapper",children:[e.facebook&&(0,c.jsx)("div",{className:"tb_wt_share_list",children:(0,c.jsx)("div",{onClick:t=>a(t,(()=>window.open(e.facebook,"_blank"))),className:"tb_wt_share_icon tb__icon tb-facebook tb_wt_cursor_pointer",title:"facebook",rel:"noopener noreferrer nofollow"})}),e.twitter&&(0,c.jsx)("div",{className:"tb_wt_share_list",children:(0,c.jsx)("div",{onClick:t=>a(t,(()=>window.open(e.twitter,"_blank"))),className:"tb_wt_share_icon tb__icon tb-twitter tb_wt_cursor_pointer",title:"twitter",rel:"noopener noreferrer nofollow"})}),e.linkedin&&(0,c.jsx)("div",{className:"tb_wt_share_list",children:(0,c.jsx)("div",{onClick:t=>a(t,(()=>window.open(e.linkedin,"_blank"))),className:"tb_wt_share_icon tb__icon tb-linkedin tb_wt_cursor_pointer",title:"linkedin",rel:"noopener noreferrer nofollow"})})]})})};var v=s(17739);const x=(t,e,s)=>1===t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,v.ok)(e)):s,g=(t,e,s)=>1===t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,v.ok)(e)):s,j=t=>{let{itemData:e,ThemeRule:s}=t;const a=e.network.id,i=3===a||10===a?"like":"heart";return(0,c.jsx)(c.Fragment,{children:12!==a&&15!==a&&20!==a&&21!==a&&29!==a?(0,c.jsxs)("div",{className:"tb_wt_social_action__",children:[(0,c.jsx)("div",{className:"tb_wt_social_action__list",children:(0,c.jsxs)("a",{href:x(a,e.postId,e.link),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:[(0,c.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-".concat(i),children:" "}),e.like_count>0?(0,c.jsx)("div",{className:"tb_wt_social_action_counts__",children:e.like_count}):""]})}),(0,c.jsx)("div",{className:"tb_wt_social_action__list",children:(0,c.jsxs)("a",{href:g(a,e.postId,e.link),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:[(0,c.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-comment",children:" "}),e.like_count>0||e.comment_count>0?(0,c.jsx)("div",{className:"tb_wt_social_action_counts__",children:n.ZQ?e.comment_count:e.like_count}):""]})}),1===a?(0,c.jsx)("div",{className:"tb_wt_social_action__list",children:(0,c.jsx)("a",{href:"https://twitter.com/intent/retweet?tweet_id=".concat((0,v.ok)(e.postId)),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:(0,c.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-retweet",children:" "})})}):""]}):""})},w=n.ZQ?null:200,N=t=>{let{itemData:e,personalization:s,ThemeRule:a,wallID:i,clickToShowPopUp:o,itemIndex:l,ownerId:d,onClickToCTA:_,wall:x}=t;const g=!!(e.ugc_products&&e.ugc_products.length>0),N=!(!g||0!==e.hotspot),f=!(!e.hotspot||!g),k=!(n.ZQ&&(0,v.mD)(53)||(0,v.mD)(57)||1===e.type),y=e.rating>0,I=e.rating>0?"tb_wt_rating_content":"tb_wt_content",T=1===e.type&&s.textDecorate?"tb_wt_text_decoration tb_wt_text_post":"",C=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),S=s.trimcontent?(0,v.Sv)(e.content,w):e.content;return(0,c.jsx)("div",{id:"tb-wt-post-".concat(e.id),className:"tb_wt_post_wrapper","tb-network":e.network.id,"tb-product":N?1:f?2:0,children:(0,c.jsxs)("div",{className:"tb_wt_post_in",onClick:o(l,e),children:[(0,c.jsx)(r,{ownerId:d,postTime:e.createdAt,author:e.author,network:e.network,font:a,personalization:s,ThemeRule:a,mediaType:k}),(0,c.jsxs)("div",{className:"tb_wt_post_media_wrapp",children:[k?(0,c.jsx)(h,{itemData:e,wallID:i,ownerId:d,wall:x},"img".concat(l,"_").concat(e.id)):"",y?(0,c.jsxs)("div",{className:"tb_wt_rating__",children:[(0,c.jsx)(u.Z,{rating:e.rating,network:e.network})," "]}):""]}),(0,c.jsxs)("div",{className:"tb_wt_contant_wrapper",children:[C?(0,c.jsxs)("div",{className:"tb_wt_post_cta",children:[(0,c.jsx)(p.Z,{ctaClass:"tb_wt_post_cta_btn",cta:e.cta,item:e,onClickToCTA:_})," "]}):"",a.hideContent&&1!=e.type?"":(0,c.jsx)(m.default,{contentClass:"".concat(I," ").concat(T),item:e,content:S,font:a,ThemeRule:a,personalization:s,contentTitle:e.contentTitle}),(0,c.jsxs)("div",{className:"tb_wt_post_share_container",style:e&&29==e.network.id||!a.socialAction?{justifyContent:"flex-end"}:{},children:[a.socialAction?(0,c.jsx)(j,{itemData:e,ThemeRule:a}):"",e.share.status?(0,c.jsx)(b,{share:e.share,shareClass:"tb_mc_share_container"}):""]})]})]})})},f=t=>{let{postData:e,completeDataObject:s,adjustWidth:a,wall:i,clickToShowPopUp:o,onClickToCTA:r}=t;return(0,c.jsx)("div",{className:"tb_wt_post_container",children:e&&e.length>0&&e.map(((t,e)=>{const n=s[t];return(0,c.jsx)(N,{ownerId:i.Wall.owner,itemData:n,itemIndex:e,adjustWidth:a,personalization:i.Personalization,ThemeRule:i.ThemeRule,wallID:i.Wall.id,clickToShowPopUp:o,onClickToCTA:r,wall:i},"wdt_crd_".concat(e,"_").concat(t.id))}))})}},61729:(t,e,s)=>{"use strict";var a=s(79165);function i(){}function o(){}o.resetWarningCache=i,t.exports=function(){function t(t,e,s,i,o,c){if(c!==a){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function e(){return t}t.isRequired=t;var s={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:i};return s.PropTypes=s,s}},75192:(t,e,s)=>{t.exports=s(61729)()},79165:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2406:(t,e,s)=>{"use strict";e.Ad=void 0;var a=s(84228);var i=s(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return i.getImageSize}});var o=s(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,s)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const a=s(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((s,i)=>{if("undefined"===typeof window)return i(a.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return i(a.ErrorMessage.URL_IS_NOT_DEFINED);let o=null;const c=new Image;c.addEventListener("load",(()=>{o&&window.clearTimeout(o),s({width:c.naturalWidth,height:c.naturalHeight})})),c.addEventListener("error",(t=>{o&&window.clearTimeout(o),i("".concat(t.type,": ").concat(t.message))})),c.src=t,e.timeout&&(o=window.setTimeout((()=>i(a.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,s){"use strict";var a=this&&this.__awaiter||function(t,e,s,a){return new(s||(s=Promise))((function(i,o){function c(t){try{n(a.next(t))}catch(e){o(e)}}function r(t){try{n(a.throw(t))}catch(e){o(e)}}function n(t){var e;t.done?i(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(c,r)}n((a=a.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const i=s(47313),o=s(65786);e.useImageSize=(t,e)=>{const[s,c]=(0,i.useState)(null),[r,n]=(0,i.useState)(!1),[l,d]=(0,i.useState)(null);return(0,i.useEffect)((()=>{a(void 0,void 0,void 0,(function*(){n(!0),c(null);try{const{width:s,height:a}=yield(0,o.getImageSize)(t,e);c({width:s,height:a})}catch(l){d(l.toString())}finally{n(!1)}}))}),[t,e]),[s,{loading:r,error:l}]}},50247:()=>{}}]);