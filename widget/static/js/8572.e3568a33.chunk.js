"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[8572,5867,4261,9239,5790,5810],{20678:(t,e,i)=>{i.d(e,{Z:()=>u});var s,a,o=i(47313),c=i(35179),r=i(46417),n=!1,l=0,d=0,h=0;const _=t=>{var e;return null!==(e={80:60,70:40,50:30,30:20,20:10}[t])&&void 0!==e?e:20},p=window.location.href.includes("app=1")?1.2:.6;class m extends o.Component{constructor(){var t;super(...arguments),t=this,this.state={slideWall:0},this.onLoadScroll=()=>{if(!c.aL){const{wall:t}=this.props;window.clearData=this.clearData;const e=document.querySelector(".tb_app_container");null===e||void 0===e||e.addEventListener("wheel",(t=>t.preventDefault()),{passive:!1}),d=setTimeout((()=>this.scrollDiv_init(t.ThemeRule.themeId)),500)}},this.scrollDiv_init=t=>{const{slideWall:e}=this.state,{parentId:i}=this.props;e||(a=document.getElementById(i),63==t&&(n=!1),(a||{}).scrollTop=0,l=0,this.onScrollData(),this.onScrollWPosts())},this.onScrollData=()=>{const{wall:t}=this.props,e=t.Personalization.scrollDelay;if(e){const t=_(e);h=setInterval(this.scrollDiv,t)}},this.onScrollWPosts=()=>{const{themeHeight:t,wall:e,renderID:i,parentId:s}=this.props,a=document.getElementById(s),o=document.getElementById(i);var r=document.querySelector(".tb_theme_container");if(r&&(r=window.getComputedStyle(r).getPropertyValue("height"),o))if(window.innerHeight<o.clientHeight)a.style="height:".concat(r),o.style="position: relative; margin-bottom: ".concat(window.innerHeight,"px; min-height: ").concat(o.clientHeight,"px");else{t&&c.bX&&window.editor;a.style="height:".concat(r),a.setAttribute("style","height:".concat(r))}},this.scrollDiv=()=>{const{themeId:t}=this.props.wall.ThemeRule;h&&clearInterval(h);const e=a||{};n?63===t?(l-=p,e.scrollTop=l,n=!n||0!==e.scrollTop):(e.scrollTop=l=0,n=!1):(l+=p,e.scrollTop=l,n=e.scrollTop>=e.scrollHeight-e.offsetHeight-600),this.onScrollData()},this.pauseDiv=()=>{clearInterval(h),clearTimeout(s),s=setTimeout(this.resumeDiv,5e3)},this.resumeDiv=()=>{var t;const{wall:e,renderID:i}=this.props;a=document.getElementById(i),l=(null===(t=a)||void 0===t?void 0:t.scrollTop)||0,h=setInterval(this.scrollDiv,_(e.Personalization.scrollDelay))},this.clearData=()=>this.clearTime(),this.clearTime=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;t.setState({slideWall:e?0:1}),clearInterval(h),h=0,clearTimeout(s),clearTimeout(d),n=!1,l=0}}componentDidMount(){this.onLoadScroll(),window.addEventListener("resize",(()=>{this.onScrollWPosts()}))}componentDidUpdate(t,e){const{postData:i,wall:s}=t,{ThemeRule:a}=this.props.wall;a.themeId!==s.ThemeRule.themeId&&(n=!1,l=0),i!==this.props.postData&&(this.clearTime(1),this.scrollDiv_init(a.themeId))}componentWillReceiveProps(t){console.log("sudarhsan-scroll",t)}componentWillUnmount(){this.clearTime()}render(){return(0,r.jsx)(r.Fragment,{children:{...this.props.children}})}}const u=(0,o.memo)(m)},89239:(t,e,i)=>{i.r(e),i.d(e,{default:()=>r});var s=i(47313),a=i(17739),o=i(98935),c=i(46417);class r extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:i}=this.props;return(0,c.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,c.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,a.P)(t.picture),width:44,height:44,onError:e=>{const s="#ffffff"==i.color?"#000":i.color;e.target.src=t.errorPic?t.errorPic:"https://ui-avatars.com/api/?name=".concat(t.name.replace(/\s/g,""),"&background=").concat(String(null===i.id?"#000":s).replace("#",""),"&color=fff&length=1"),e.target.alt=t.name}}):(0,c.jsx)(o.Z,{authorClass:e,username:t.name,network:i,color:null===i.id?"#000":i.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,i)=>{i.d(e,{Z:()=>c});var s=i(47313),a=i(46417);const o=t=>{let{username:e,network:i,authorClass:s,errorPic:o}=t;const c="#ffffff"==i.color?"#000":i.color;return(0,a.jsx)("img",{className:"".concat(s,"__"),src:o||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===i.id?"#000":c).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},c=(0,s.memo)(o)},7138:(t,e,i)=>{i.d(e,{Z:()=>c});var s=i(47313),a=i(46417);class o extends s.PureComponent{render(){const{cta:t,ctaClass:e,postCta:i,onClickToCTA:s,item:o}=this.props,c=!(!i||1!==i.status);return(0,a.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),s(o),window.open("".concat(c?i.url:t.url),"_blank")},children:[" ",c?i.text:t.text]})}}const c=o},97915:(t,e,i)=>{i.d(e,{Z:()=>_});var s=i(47313),a=i(43411),o=i(83773),c=i(6119),r=i(17739),n=i(46417);const l=(0,o.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),d=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,i=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",s=t.product_price>0||t.product_discount>0?"".concat(i,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(s,"\n        </a>")};class h extends s.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:i}=this.state,s=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return s.status?(0,n.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const a=(0,r.i1)();return(0,n.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(a),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(i==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,n.jsx)("div",{className:"tb_hotspot__ ".concat(0==s.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,n.jsx)(l,{children:(0,n.jsx)(c.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(a),clickable:!0,html:d(t.UgcProduct)})})]},e)}))}):null}}const _=(0,a.$j)((t=>({appData:t.appData})))(h)},84261:(t,e,i)=>{i.r(e),i.d(e,{default:()=>h});var s=i(47313),a=i(40475),o=i(97915),c=i(2406),r=i(17739),n=i(98501),l=i(35179),d=i(46417);class h extends s.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const i=document.querySelector(".track".concat(this.props.data.id));i&&(i.setAttribute("data-height",e),i.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:i}=await(0,c.Ad)(e.postFileNew);this.setState({paddingBottom:100*i/t,size:{height:parseInt(i),width:parseInt(t)}})}catch(i){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgSize:{...this.state.imgSize,small:t.target.src}});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(i){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,imgSize:{small:t.data.postFileNew,large:t.data.filename,orignal:t.data.file},size:{height:100,width:100},isVisible:!1},this.videoRef=s.createRef(),this.observer=null}componentWillMount(){const{data:t,hotspot:e,size:i}=this.props;!i||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:i})}componentDidMount(){const{data:t,hotspot:e,size:i}=this.props;!i||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:i});try{this.observer=new IntersectionObserver((t=>{let[e]=t;e.isIntersecting&&(this.setState({isVisible:e.isIntersecting}),this.observer.disconnect())}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(s){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.observer.disconnect()}render(){const{ImageClass:t,data:e,wallID:i,themeID:s,ownerId:c,hotspot:h}=this.props,{imgUrl:_,paddingBottom:p,size:m,fixedPaddingBottom:u,imgSize:b,noPadding:v,isVisible:x}=this.state,j={paddingBottom:"".concat(this.props.size?1==this.props.size?null:u:p,"%")},g={backgroundImage:"url(".concat(b.small,")")};if(m.width>m.height)var w="100%",f="".concat(m.height/m.width*100,"%");else f="100%",w="".concat(m.width/m.height*100,"%");const N=!!(e.hotspot&&e.ugc_products.length>0&&h),k={width:N&&this.props.size?w:null,height:N&&this.props.size?f:null};return(0,d.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:j,ref:this.videoRef,children:[N?(0,d.jsx)("div",{className:"tb_blur_bg_",style:g}):null,(0,d.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:k,children:[N?(0,d.jsx)(o.Z,{product:e.ugc_products}):null,(0,d.jsx)("img",{className:"".concat(t," track").concat(e.id),role:"img",src:x?b.small:e.optmizedImg,srcSet:x?l.bX&&v?"".concat(b.large,", 991w ").concat(b.small,", 480w"):null:e.optmizedImg,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":i,"data-owner-id":c,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":s,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(n.do,"/media/images/error/no-image.svg"),(0,a.ht)(t)},alt:(0,r.P)(_)})]})]})}}},64442:(t,e,i)=>{i.d(e,{Z:()=>_});var s=i(47313),a=i(2406),o=i(20510),c=i.n(o),r=i(40475),n=i(35179),l=(i(17739),i(46417));const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class h extends s.Component{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:i}=await(0,a.Ad)(e.postFileNew);this.setState({paddingBottom:100*i/t})}catch(i){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=s.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(i){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:i,isCover:s,controls:a,autoPlay:o,handleVideoEnded:h,muted:_,themeID:p,intervalTime:m}=this.props,{paddingBottom:u,videoLoaded:b,isVisible:v}=this.state,x={small:e.postFileNew,large:e.filename,orignal:e.file},j=[74,76,77].includes(p),g={paddingBottom:"".concat(j&&n.bX?null:u,"%")},w=null!==e&&void 0!==e&&e.loopStop?e.mediaUrl:e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:g,ref:this.videoRef,children:(0,l.jsx)(c(),{className:"".concat(t," video").concat(e.id),url:d(w,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":i,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%"),poster:e.postFileNew}},file:{attributes:{preload:"metadata",poster:e.postFileNew}}},loop:!(n.bX&&!n.aL&&null!==e&&void 0!==e&&e.loopStop),onError:t=>{!n.P2||e.stories&&0!=e.stories||(0,r.ib)(t,e.id),j&&h&&setTimeout((()=>{h()}),1e3*m)},autoPlay:n.bX?v:o,muted:_,volume:o?1:0,playsinline:!0,onReady:t=>{n.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:n.ig||n.bX?v:o,height:"100%",width:"100%",controls:a||!1,style:{backgroundImage:"url(".concat(j?x.large:x.small,")"),backgroundSize:s?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})})}}const _=(0,s.memo)(h)},81349:(t,e,i)=>{i.d(e,{Z:()=>c});i(47313);var s=i(35179),a=i(95867),o=i(46417);const c=t=>{const{itemData:e,IconClass:i,isCenter:c,hideVideo:r,show:n}=t,l=3===e.type||5===e.type,d=7===e.network.id,h=!!(e.imageList&&e.imageList.length>0),_=1===e.isAudio,p=!!(e.ugc_products&&e.ugc_products.length>0),m=(0,o.jsx)(a.default,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"}),u=(0,o.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:(0,o.jsx)("div",{})}),b=(0,o.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:(0,o.jsx)("div",{})}),v=(0,o.jsx)("div",{className:"tb__icon tb-".concat(s.bX?"reel-fill tb_reel_ico":"video tb_video_ico"),children:(0,o.jsx)("div",{})}),x=(0,o.jsx)("div",{className:"tb_play_ico tb__icon tb-play",children:(0,o.jsx)("div",{})}),j=(0,o.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:(0,o.jsx)("div",{})}),g=(0,o.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:(0,o.jsx)("div",{})});return n?(0,o.jsxs)(o.Fragment,{children:[c&&(d||l)?(0,o.jsxs)("div",{className:"".concat(i," tb__media_ico_c"),children:[l&&!d?g:"",l&&d?m:""]}):null,p||h||l?(0,o.jsxs)("div",{className:"".concat(i," tb__media_ico_"),children:[p?j:"",h?u:"",c||!l||d||r?"":_?b:s.ZQ?x:v]}):null]}):null}},95867:(t,e,i)=>{i.r(e),i.d(e,{default:()=>r});var s=i(47313),a=i(35179),o=i(46417);const c=s.memo((t=>{let{network:e,networkClass:i}=t;const s="".concat(i," tb__icon tb_ico_default");switch(e.id){case 1:return(0,o.jsx)("div",{className:"".concat(s," tb-twitter")});case 2:case 18:return(0,o.jsx)("div",{className:"".concat(s," tb-instagram-default"),children:(0,o.jsx)("div",{})});case 3:return(0,o.jsx)("div",{className:"".concat(s," tb-facebook"),children:(0,o.jsx)("div",{})});case 4:return(0,o.jsxs)("div",{className:"".concat(s," tb-google-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})})]});case 5:return(0,o.jsx)("div",{className:"".concat(s," tb-pinterest"),children:(0,o.jsx)("div",{})});case 6:return(0,o.jsxs)("div",{className:"".concat(s," tb-flickr-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 7:return(0,o.jsxs)("div",{className:"".concat(s," tb-youtube-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 8:return(0,o.jsx)("div",{className:"".concat(s," tb-vimeo"),children:(0,o.jsx)("div",{})});case 10:return(0,o.jsx)("div",{className:"".concat(s," tb-linkedin"),children:(0,o.jsx)("div",{})});case 11:return(0,o.jsx)("div",{className:"".concat(s," tb-tumblr"),children:(0,o.jsx)("div",{})});case 12:return(0,o.jsx)("div",{className:"".concat(s," tb-rss"),children:(0,o.jsx)("div",{})});case 15:return(0,o.jsx)("div",{className:"".concat(s," tb-workplace"),children:(0,o.jsx)("div",{})});case 19:return(0,o.jsx)("div",{className:"".concat(s," tb-yelp"),children:(0,o.jsx)("div",{})});case 20:return(0,o.jsxs)("div",{className:"".concat(s," tb-slack-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path8",children:(0,o.jsx)("div",{})})]});case 21:return(0,o.jsx)("div",{className:"".concat(s," tb-yammer"),children:(0,o.jsx)("div",{})});case 23:return(0,o.jsx)("div",{className:"".concat(s," tb-airbnb"),children:(0,o.jsx)("div",{})});case 25:return(0,o.jsx)("div",{className:"".concat(s," tb-soundcloud"),children:(0,o.jsx)("div",{})});case 26:return(0,o.jsxs)("div",{className:"".concat(s," tb-giphy-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 28:return a.ZQ?(0,o.jsxs)("div",{className:"".concat(s," tb-capterra-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4"})]}):(0,o.jsxs)("div",{className:"".concat(s," tb-tiktok-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 29:return a.ZQ?(0,o.jsx)("div",{className:"".concat(s," tb-etsy"),children:(0,o.jsx)("div",{})}):(0,o.jsx)("div",{className:"".concat(s," tb-onsite-upload"),children:(0,o.jsx)("div",{})});case 30:case 32:return(0,o.jsx)("div",{className:"".concat(s," tb-vk"),children:(0,o.jsx)("div",{})});case 31:return(0,o.jsxs)("div",{className:"".concat(s," tb-tiktok-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 33:return(0,o.jsxs)("div",{className:"".concat(s," tb-trustpilot-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 34:return(0,o.jsxs)("div",{className:"".concat(s," tb-amazon-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 35:return(0,o.jsx)("div",{className:"".concat(s," tb-tripadvisor"),children:(0,o.jsx)("div",{})});case 36:return(0,o.jsxs)("div",{className:"".concat(s," tb-tagembed-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})})]});case 37:return(0,o.jsxs)("div",{className:"".concat(s," tb-aliexpress-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})})]});default:return""}}));class r extends s.PureComponent{render(){return(0,o.jsx)(c,{...this.props})}}},25810:(t,e,i)=>{i.r(e),i.d(e,{default:()=>r});var s=i(47313),a=i(35179),o=i(46417);const c=s.lazy((()=>i.e(5867).then(i.bind(i,95867))));class r extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:i,isDefault:r,Personalization:n}=this.props,l=!!r&&(7!==t.id&&4!==t.id&&36!==t.id),d=a.ZQ&&36==t.id?"tagembed":t.icon;return l?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,o.jsx)("div",{})}):(0,o.jsxs)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(c,{network:t,networkClass:e})]})}}},90905:(t,e,i)=>{i.d(e,{Z:()=>n});var s=i(47313),a=i(35179),o=i(46417);const c=t=>{let{network:e}=t;const i={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:s,color:c}=i[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,o.jsx)("div",{className:s,style:{color:c},"tb-network":e.id,children:(0,o.jsx)("div",{})})},r=t=>{let{ThemeID:e}=t;const{className:i,color:s}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,o.jsx)("div",{className:i,style:{color:s},"tb-network":e})};class n extends s.PureComponent{render(){const{rating:t,network:e,ThemeID:i}=this.props;return(0,o.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,s)=>i?(0,o.jsx)(r,{ThemeID:i},s):(0,o.jsx)(c,{network:e},s))):null})}}},5744:(t,e,i)=>{i.d(e,{Z:()=>r});var s=i(47313),a=i(40475),o=i(35179),c=i(46417);class r extends s.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:i,wallID:s,ownerId:c}=this.props;e.stopPropagation(),o.ZQ||(0,a.S5)({type:2,action:2,wall:s,feed:i.feedId,post:i.referenceId?i.referenceId:i.id,owner:c}),(0,a.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,c.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,c.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(o.ZQ?"tb-share-fill":"tb-share"),children:(0,c.jsx)("div",{})}),(0,c.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,c.jsx)("div",{className:"tb_share_icon_list",children:(0,c.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,c.jsx)("div",{})})}):"",t.twitter?(0,c.jsx)("div",{className:"tb_share_icon_list",children:(0,c.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,c.jsx)("div",{})})}):"",t.linkedin?(0,c.jsx)("div",{className:"tb_share_icon_list",children:(0,c.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,c.jsx)("div",{})})}):""]})]})}}},32675:(t,e,i)=>{i.d(e,{Z:()=>l});var s=i(47313),a=(i(35179),i(17739)),o=i(46417);const c=(t,e,i)=>1==t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,a.ok)(e)):i,r=(t,e,i)=>1==t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,a.ok)(e)):i,n=t=>{let{arialbl:e,hrefClick:i,Icon:s,count:c}=t;return(0,o.jsx)("div",{className:"tb_social_action__list",children:(0,o.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(i,"_blank")},className:"tb_social_action__ico_wrap",children:[(0,o.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(s),children:" "}),c>0?(0,o.jsx)("div",{className:"tb_social_action_counts__",children:(0,a.sy)(c)}):""]})})};class l extends s.PureComponent{render(){const{itemData:t,ThemeRule:e,actionClass:i,ThemeID:s}=this.props,l={color:3===s?1===e.iconType?e.iconColor:t.network.color:e.fontColor},d=t.network.id,h=3===d||10===d||7===d?"like":"heart",_=!![1,2,3,7,8,9,10,18].includes(d),p=![29,19].includes(d),m=t.network.name?t.network.name:"";return(0,o.jsx)(o.Fragment,{children:29!==d&&26!==d&&23!==d&&6!==d&&5!==d&&11!==d&&12!==d&&15!==d&&20!==d&&21!==d?(0,o.jsx)("div",{className:i,children:(0,o.jsxs)("div",{className:"tb_social_action__",children:[_?(0,o.jsx)(n,{arialbl:m,hrefClick:c(d,t.postId,t.link),Icon:h,iconColorStyle:l,count:t.like_count}):null,p?(0,o.jsx)(n,{arialbl:m,hrefClick:r(d,t.postId,t.link),Icon:"comment",iconColorStyle:l,count:t.comment_count}):null,1===d?(0,o.jsx)(n,{arialbl:m,hrefClick:"https://twitter.com/intent/retweet?tweet_id=".concat((0,a.ok)(t.postId)),Icon:"retweet",iconColorStyle:l,count:t.comment_count}):null,(0,o.jsx)(n,{arialbl:m,hrefClick:t.link,Icon:"eye",iconColorStyle:l,count:0})]})}):""})}}},55790:(t,e,i)=>{i.r(e),i.d(e,{default:()=>r});var s=i(47313),a=i(17739),o=i(46417);const c=t=>{const{postTime:e,timeClass:i}=t;return(0,o.jsx)("div",{className:i,children:(0,a.Sy)(e)})},r=(0,s.memo)(c)},8572:(t,e,i)=>{i.r(e),i.d(e,{default:()=>C});var s=i(47313),a=i(89239),o=i(55790),c=i(25810),r=i(17739),n=i(46417);const l=t=>{let{author:e,personalization:i,postTime:s,network:l,ThemeRule:d,font:h}=t;const _=e.username&&e.username.length>0?"@".concat(e.username):"",p=!(!i.postAuthor||e.isInstaUser),m=!(!i.postAuthor||!i.postTime||e.isInstaUser),u=!(!d.socialAction||!(0,r.mD)(63));return(0,n.jsxs)("div",{className:"tb_w_f_author_wrapper",children:[(0,n.jsxs)("div",{className:"tb_w_f_author",children:[p?(0,n.jsx)(a.default,{author:e,network:l,authorClass:"tb_w_f_author_profile"}):"",(0,n.jsxs)("div",{className:"tb_w_f_author_info",children:[p?(0,n.jsx)("div",{className:"tb_w_f_authorname",children:e.name}):"",(0,n.jsxs)("div",{className:"tb_w_f_post_info",children:[p?(0,n.jsx)("div",{className:"tb_w_f_username",children:_}):"",m?(0,n.jsx)("div",{className:"tb_w_f_seprator",children:" "}):"",i.postTime?(0,n.jsx)(o.default,{postTime:s,timeClass:"tb_w_f_time tb-cTBfont-".concat(d.font_varient),authorColor:d.authorColor}):""]})]})]}),u?(0,n.jsx)("div",{className:"tb_w_f_social_",children:(0,n.jsx)(c.default,{networkClass:"tb_w_f_social_ico",network:l,ThemeRule:d,isDefault:1===d.iconType})}):""]})};var d=i(35179),h=i(81349),_=i(84261),p=i(64442);const m=s.lazy((()=>i.e(695).then(i.bind(i,10695)))),u=t=>{let{itemData:e,wallID:i,ownerId:a,wall:o}=t;const c=!(!d.ZQ||3!==e.type&&5!==e.type||o.Personalization.mobilePopup||o.Personalization.postFeatured),r=(3===e.type||5===e.type)&&1==o.ThemeRule.autoPlay;return(0,n.jsxs)("div",{className:"tb_w_f_media_wrap",children:[d.aL&&o.Personalization.interactive?(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(m,{postId:e.id,wallID:i,UserDetail:o.UserDetail})}):null,d.P2&&!r?(0,n.jsx)(h.Z,{itemData:e,IconClass:"tb_w_c_media_icon",show:d.P2,isCenter:!1}):null,r||c?(0,n.jsx)(p.Z,{VideoClass:"tb_w_f_video",data:e,wallID:i,themeID:o.Personalization.widgetTheme,ownerId:a,size:!1,isCover:!0,controls:!1,autoPlay:!0,muted:!0}):(0,n.jsx)(_.default,{ImageClass:"tb_w_f_image",data:e,wallID:i,themeID:o.Personalization.widgetTheme,ownerId:a,size:!1,ThemeRule:o.ThemeRule,hotspot:!0})]})};var b=i(5744),v=i(7138),x=i(90905),j=i(32675);const g=t=>{let{itemData:e,personalization:i,adjustWidth:s,ThemeRule:a,clickToShowPopUp:o,itemIndex:c,wallID:h,ownerId:_,onClickToCTA:p,wall:m}=t;const g={width:"".concat(s,"%"),padding:i.padding/2},w=2===e.type||3===e.type||4===e.type||5===e.type,f=e.rating>0,N=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),k=!!(e.ugc_products&&e.ugc_products.length>0),I=!(!k||0!==e.hotspot),y=!(!e.hotspot||!k),D=d.bX?{padding:a.spacing}:null;return(0,n.jsx)("div",{id:"tb-cp-post-".concat(e.id),className:"tb_w_f_post_wrapper",style:g,"tb-network":e.network.id,"tb-product":I?1:y?2:0,children:(0,n.jsxs)("div",{className:"tb_w_f_post_in",onClick:o(c,e),style:D,children:[(0,n.jsxs)("div",{className:"tb_w_f_post_media_wrapper",children:[e.share.status?(0,n.jsx)(b.Z,{share:e.share,shareClass:"tb_w_f_share_container",item:e,wallID:h,ownerId:_}):"",w?(0,n.jsx)(u,{itemData:e,wallID:h,ownerId:_,ThemeID:i.widgetTheme,wall:m},"img".concat(c,"_").concat(e.id)):"",d.ZQ&&f?(0,n.jsxs)("div",{className:"tb_w_f_rating__",children:[(0,n.jsx)(x.Z,{rating:e.rating,network:e.network})," "]}):"",N?(0,n.jsxs)("div",{className:"tb_w_f_post_cta",children:[(0,n.jsx)(v.Z,{ctaClass:"tb_w_f_post_cta_btn",cta:e.cta,item:e,onClickToCTA:p})," "]}):""]}),(0,n.jsx)("div",{className:"tb_w_f_contant_wrapper",children:(0,n.jsx)(l,{ownerId:_,postTime:e.createdAt,author:e.author,network:e.network,font:e.font,personalization:i,ThemeRule:a})}),a.socialAction&&!(0,r.mD)(63)?(0,n.jsx)(j.Z,{itemData:e,ThemeRule:a,ThemeID:i.widgetTheme,actionClass:"tb_w_f_social_action__ ".concat(d.ZQ?"tb_w_f_social_action_bg":"","}")}):""]})})};var w=i(43411),f=i(61395),N=i.n(f),k=i(40475),I=i(20678);const y=t=>{let{loadData:e,postData:i,completeDataObject:s,BrandingPosition:a,clickToShowPopUp:o,wall:c,adjustWidth:r,onClickToCTA:l}=t;return e?(null===i||void 0===i?void 0:i.length)>0&&i.map(((t,e)=>{const i=s[t];return parseInt(a),(0,n.jsx)(g,{ownerId:c.Wall.owner,itemData:i,itemIndex:e,adjustWidth:1==i.highlight?2*r:r,personalization:c.Personalization,ThemeRule:c.ThemeRule,wallID:c.Wall.id,clickToShowPopUp:o,onClickToCTA:l,wall:c},"Classic_Card_".concat(e,"_").concat(i.id))})):null};class D extends s.Component{constructor(){super(...arguments),this.state={postData:[],loadData:1}}componentDidMount(){const{postData:t,heightUpdate:e}=this.props;this.setState({postData:t,loadData:1},(()=>setTimeout((()=>e()),1e3)))}componentDidUpdate(t,e){return t.postData!==this.props.postData&&(this.props.heightUpdate(),!0)}render(){const{postData:t,completeDataObject:e,adjustWidth:i,wall:s,clickToShowPopUp:a,onClickToCTA:o}=this.props,{loadData:c}=this.state;return(0,n.jsx)(I.Z,{wall:s,parentId:"tb_marquee",renderID:"focus",children:(0,n.jsx)("div",{id:"tb_marquee",children:(0,n.jsx)(N(),{id:"focus",className:"tb_w_f_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_w_f_post_wrapper",horizontalOrder:!1,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:(0,n.jsx)(y,{loadData:c,wall:s,clickToShowPopUp:a,postData:t,completeDataObject:e,BrandingPosition:4,adjustWidth:i,onClickToCTA:o})})})})}}const C=(0,w.$j)((t=>({product:t.product.isDisplay})),(t=>({managePostHeight:e=>t((0,k.B0)(e))})))(D)},2406:(t,e,i)=>{e.Ad=void 0;var s=i(84228);var a=i(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return a.getImageSize}});var o=i(22537)},84228:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const s=i(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((i,a)=>{if("undefined"===typeof window)return a(s.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return a(s.ErrorMessage.URL_IS_NOT_DEFINED);let o=null;const c=new Image;c.addEventListener("load",(()=>{o&&window.clearTimeout(o),i({width:c.naturalWidth,height:c.naturalHeight})})),c.addEventListener("error",(t=>{o&&window.clearTimeout(o),a("".concat(t.type,": ").concat(t.message))})),c.src=t,e.timeout&&(o=window.setTimeout((()=>a(s.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,i){var s=this&&this.__awaiter||function(t,e,i,s){return new(i||(i=Promise))((function(a,o){function c(t){try{n(s.next(t))}catch(e){o(e)}}function r(t){try{n(s.throw(t))}catch(e){o(e)}}function n(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(c,r)}n((s=s.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const a=i(47313),o=i(65786);e.useImageSize=(t,e)=>{const[i,c]=(0,a.useState)(null),[r,n]=(0,a.useState)(!1),[l,d]=(0,a.useState)(null);return(0,a.useEffect)((()=>{s(void 0,void 0,void 0,(function*(){n(!0),c(null);try{const{width:i,height:s}=yield(0,o.getImageSize)(t,e);c({width:i,height:s})}catch(l){d(l.toString())}finally{n(!1)}}))}),[t,e]),[i,{loading:r,error:l}]}}}]);