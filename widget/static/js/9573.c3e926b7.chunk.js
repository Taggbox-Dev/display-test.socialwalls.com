(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[9573,5867,4261,8342,9239,5790,5810],{20678:(t,e,s)=>{"use strict";s.d(e,{Z:()=>u});var i,a,o=s(47313),c=s(35179),n=s(46417),l=!1,r=0,d=0,_=0;const h=t=>{var e;return null!==(e={80:60,70:40,50:30,30:20,20:10}[t])&&void 0!==e?e:20},m=window.location.href.includes("app=1")?1.2:.6;class p extends o.Component{constructor(){var t;super(...arguments),t=this,this.state={slideWall:0},this.onLoadScroll=()=>{if(!c.aL){const{wall:t}=this.props;window.clearData=this.clearData;const e=document.querySelector(".tb_app_container");null===e||void 0===e||e.addEventListener("wheel",(t=>t.preventDefault()),{passive:!1}),d=setTimeout((()=>this.scrollDiv_init(t.ThemeRule.themeId)),500)}},this.scrollDiv_init=t=>{const{slideWall:e}=this.state,{parentId:s}=this.props;e||(a=document.getElementById(s),63==t&&(l=!1),(a||{}).scrollTop=0,r=0,this.onScrollData(),this.onScrollWPosts())},this.onScrollData=()=>{const{wall:t}=this.props,e=t.Personalization.scrollDelay;if(e){const t=h(e);_=setInterval(this.scrollDiv,t)}},this.onScrollWPosts=()=>{const{themeHeight:t,wall:e,renderID:s,parentId:i}=this.props,a=document.getElementById(i),o=document.getElementById(s);var n=document.querySelector(".tb_theme_container");if(n&&(n=window.getComputedStyle(n).getPropertyValue("height"),o))if(window.innerHeight<o.clientHeight)a.style="height:".concat(n),o.style="position: relative; margin-bottom: ".concat(window.innerHeight,"px; min-height: ").concat(o.clientHeight,"px");else{t&&c.bX&&window.editor;a.style="height:".concat(n),a.setAttribute("style","height:".concat(n))}},this.scrollDiv=()=>{const{themeId:t}=this.props.wall.ThemeRule;_&&clearInterval(_);const e=a||{};l?63===t?(r-=m,e.scrollTop=r,l=!l||0!==e.scrollTop):(e.scrollTop=r=0,l=!1):(r+=m,e.scrollTop=r,l=e.scrollTop>=e.scrollHeight-e.offsetHeight-600),this.onScrollData()},this.pauseDiv=()=>{clearInterval(_),clearTimeout(i),i=setTimeout(this.resumeDiv,5e3)},this.resumeDiv=()=>{var t;const{wall:e,renderID:s}=this.props;a=document.getElementById(s),r=(null===(t=a)||void 0===t?void 0:t.scrollTop)||0,_=setInterval(this.scrollDiv,h(e.Personalization.scrollDelay))},this.clearData=()=>this.clearTime(),this.clearTime=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;t.setState({slideWall:e?0:1}),clearInterval(_),_=0,clearTimeout(i),clearTimeout(d),l=!1,r=0}}componentDidMount(){const{wall:t}=this.props;console.log("ScrollAnimation",1==t.product,c.aL,this.props),window.editor&&1==t.product&&(console.log("ScrollAnimation 111",c.bX,c.aL),this.clearTime()),this.onLoadScroll(),window.addEventListener("resize",(()=>{this.onScrollWPosts()}))}componentDidUpdate(t,e){const{postData:s,wall:i}=t,{ThemeRule:a}=this.props.wall;a.themeId!==i.ThemeRule.themeId&&(l=!1,r=0),s!==this.props.postData&&(this.clearTime(1),this.scrollDiv_init(a.themeId)),console.log("ScrollAnimation componentDidUpdate",t,this.props)}componentWillUnmount(){this.clearTime()}render(){return(0,n.jsx)(n.Fragment,{children:{...this.props.children}})}}const u=(0,o.memo)(p)},89239:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var i=s(47313),a=s(17739),o=s(98935),c=s(46417);class n extends i.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:s}=this.props;return(0,c.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,c.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,a.P)(t.picture),width:44,height:44,onError:e=>{const i="#ffffff"==s.color?"#000":s.color;e.target.src=t.errorPic?t.errorPic:"https://ui-avatars.com/api/?name=".concat(t.name.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":i).replace("#",""),"&color=fff&length=1"),e.target.alt=t.name}}):(0,c.jsx)(o.Z,{authorClass:e,username:t.name,network:s,color:null===s.id?"#000":s.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,s)=>{"use strict";s.d(e,{Z:()=>c});var i=s(47313),a=s(46417);const o=t=>{let{username:e,network:s,authorClass:i,errorPic:o}=t;const c="#ffffff"==s.color?"#000":s.color;return(0,a.jsx)("img",{className:"".concat(i,"__"),src:o||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":c).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},c=(0,i.memo)(o)},7138:(t,e,s)=>{"use strict";s.d(e,{Z:()=>c});var i=s(47313),a=s(46417);class o extends i.PureComponent{render(){const{cta:t,ctaClass:e,postCta:s,onClickToCTA:i,item:o}=this.props,c=!(!s||1!==s.status);return(0,a.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),i(o),window.open("".concat(c?s.url:t.url),"_blank")},children:[" ",c?s.text:t.text]})}}const c=o},97915:(t,e,s)=>{"use strict";s.d(e,{Z:()=>h});var i=s(47313),a=s(43411),o=s(83773),c=s(6119),n=s(17739),l=s(46417);const r=(0,o.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),d=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,s=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",i=t.product_price>0||t.product_discount>0?"".concat(s,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(i,"\n        </a>")};class _ extends i.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:s}=this.state,i=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return i.status?(0,l.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const a=(0,n.i1)();return(0,l.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(a),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(s==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,l.jsx)("div",{className:"tb_hotspot__ ".concat(0==i.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,l.jsx)(r,{children:(0,l.jsx)(c.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(a),clickable:!0,html:d(t.UgcProduct)})})]},e)}))}):null}}const h=(0,a.$j)((t=>({appData:t.appData})))(_)},84261:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>_});var i=s(47313),a=s(40475),o=s(97915),c=s(2406),n=s(17739),l=s(98501),r=s(35179),d=s(46417);class _ extends i.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const s=document.querySelector(".track".concat(this.props.data.id));s&&(s.setAttribute("data-height",e),s.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:s}=await(0,c.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t,size:{height:parseInt(s),width:parseInt(t)}})}catch(s){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgSize:{...this.state.imgSize,small:t.target.src}});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(s){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,imgSize:{small:t.data.postFileNew,large:t.data.filename,orignal:t.data.file},size:{height:100,width:100},isVisible:!1},this.videoRef=i.createRef(),this.observer=null}componentWillMount(){const{data:t,hotspot:e,size:s}=this.props;!s||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:s})}componentDidMount(){const{data:t,hotspot:e,size:s}=this.props;!s||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:s});try{this.observer=new IntersectionObserver((t=>{let[e]=t;e.isIntersecting&&(this.setState({isVisible:e.isIntersecting}),this.observer.disconnect())}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(i){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.observer.disconnect()}render(){const{ImageClass:t,data:e,wallID:s,themeID:i,ownerId:c,hotspot:_}=this.props,{imgUrl:h,paddingBottom:m,size:p,fixedPaddingBottom:u,imgSize:b,noPadding:v,isVisible:g}=this.state,x={paddingBottom:"".concat(this.props.size?1==this.props.size?null:u:m,"%")},w={backgroundImage:"url(".concat(b.small,")")};if(p.width>p.height)var j="100%",N="".concat(p.height/p.width*100,"%");else N="100%",j="".concat(p.width/p.height*100,"%");const f=!!(e.hotspot&&e.ugc_products.length>0&&_),y={width:f&&this.props.size?j:null,height:f&&this.props.size?N:null};return(0,d.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:x,ref:this.videoRef,children:[f?(0,d.jsx)("div",{className:"tb_blur_bg_",style:w}):null,(0,d.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:y,children:[f?(0,d.jsx)(o.Z,{product:e.ugc_products}):null,(0,d.jsx)("img",{className:"".concat(t," track").concat(e.id),role:"img",src:g?b.small:e.optmizedImg,srcSet:g?r.bX&&v?"".concat(b.large,", 991w ").concat(b.small,", 480w"):null:e.optmizedImg,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":s,"data-owner-id":c,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":i,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(l.do,"/media/images/error/no-image.svg"),(0,a.ht)(t)},alt:(0,n.P)(h)})]})]})}}},64442:(t,e,s)=>{"use strict";s.d(e,{Z:()=>h});var i=s(47313),a=s(2406),o=s(20510),c=s.n(o),n=s(40475),l=s(35179),r=(s(17739),s(46417));const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class _ extends i.Component{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:s}=await(0,a.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=i.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(s){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:s,isCover:i,controls:a,autoPlay:o,handleVideoEnded:_,muted:h,themeID:m,intervalTime:p}=this.props,{paddingBottom:u,videoLoaded:b,isVisible:v}=this.state,g={small:e.postFileNew,large:e.filename,orignal:e.file},x=[74,76,77].includes(m),w={paddingBottom:"".concat(x&&l.bX?null:u,"%")},j=null!==e&&void 0!==e&&e.loopStop?e.mediaUrl:e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,r.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:w,ref:this.videoRef,children:(0,r.jsx)(c(),{className:"".concat(t," video").concat(e.id),url:d(j,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":s,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%"),poster:e.postFileNew}},file:{attributes:{preload:"metadata",poster:e.postFileNew}}},loop:!(l.bX&&!l.aL&&null!==e&&void 0!==e&&e.loopStop),onError:t=>{!l.P2||e.stories&&0!=e.stories||(0,n.ib)(t,e.id),x&&_&&setTimeout((()=>{_()}),1e3*p)},autoPlay:l.bX?v:o,muted:h,volume:o?1:0,playsinline:!0,onReady:t=>{l.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:l.ig||l.bX?v:o,height:"100%",width:"100%",controls:a||!1,style:{backgroundImage:"url(".concat(x?g.large:g.small,")"),backgroundSize:i?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:_||null})})}}const h=(0,i.memo)(_)},81349:(t,e,s)=>{"use strict";s.d(e,{Z:()=>c});s(47313);var i=s(35179),a=s(95867),o=s(46417);const c=t=>{const{itemData:e,IconClass:s,isCenter:c,hideVideo:n,show:l}=t,r=3===e.type||5===e.type,d=7===e.network.id,_=!!(e.imageList&&e.imageList.length>0),h=1===e.isAudio,m=!!(e.ugc_products&&e.ugc_products.length>0),p=(0,o.jsx)(a.default,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"}),u=(0,o.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:(0,o.jsx)("div",{})}),b=(0,o.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:(0,o.jsx)("div",{})}),v=(0,o.jsx)("div",{className:"tb__icon tb-".concat(i.bX?"reel-fill tb_reel_ico":"video tb_video_ico"),children:(0,o.jsx)("div",{})}),g=(0,o.jsx)("div",{className:"tb_play_ico tb__icon tb-play",children:(0,o.jsx)("div",{})}),x=(0,o.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:(0,o.jsx)("div",{})}),w=(0,o.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:(0,o.jsx)("div",{})});return l?(0,o.jsxs)(o.Fragment,{children:[c&&(d||r)?(0,o.jsxs)("div",{className:"".concat(s," tb__media_ico_c"),children:[r&&!d?w:"",r&&d?p:""]}):null,m||_||r?(0,o.jsxs)("div",{className:"".concat(s," tb__media_ico_"),children:[m?x:"",_?u:"",c||!r||d||n?"":h?b:i.ZQ?g:v]}):null]}):null}},95867:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var i=s(47313),a=s(35179),o=s(46417);const c=i.memo((t=>{let{network:e,networkClass:s}=t;const i="".concat(s," tb__icon tb_ico_default");switch(e.id){case 1:return(0,o.jsx)("div",{className:"".concat(i," tb-twitter")});case 2:case 18:return(0,o.jsx)("div",{className:"".concat(i," tb-instagram-default"),children:(0,o.jsx)("div",{})});case 3:return(0,o.jsx)("div",{className:"".concat(i," tb-facebook"),children:(0,o.jsx)("div",{})});case 4:return(0,o.jsxs)("div",{className:"".concat(i," tb-google-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})})]});case 5:return(0,o.jsx)("div",{className:"".concat(i," tb-pinterest"),children:(0,o.jsx)("div",{})});case 6:return(0,o.jsxs)("div",{className:"".concat(i," tb-flickr-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 7:return(0,o.jsxs)("div",{className:"".concat(i," tb-youtube-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 8:return(0,o.jsx)("div",{className:"".concat(i," tb-vimeo"),children:(0,o.jsx)("div",{})});case 10:return(0,o.jsx)("div",{className:"".concat(i," tb-linkedin"),children:(0,o.jsx)("div",{})});case 11:return(0,o.jsx)("div",{className:"".concat(i," tb-tumblr"),children:(0,o.jsx)("div",{})});case 12:return(0,o.jsx)("div",{className:"".concat(i," tb-rss"),children:(0,o.jsx)("div",{})});case 15:return(0,o.jsx)("div",{className:"".concat(i," tb-workplace"),children:(0,o.jsx)("div",{})});case 19:return(0,o.jsx)("div",{className:"".concat(i," tb-yelp"),children:(0,o.jsx)("div",{})});case 20:return(0,o.jsxs)("div",{className:"".concat(i," tb-slack-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path8",children:(0,o.jsx)("div",{})})]});case 21:return(0,o.jsx)("div",{className:"".concat(i," tb-yammer"),children:(0,o.jsx)("div",{})});case 23:return(0,o.jsx)("div",{className:"".concat(i," tb-airbnb"),children:(0,o.jsx)("div",{})});case 25:return(0,o.jsx)("div",{className:"".concat(i," tb-soundcloud"),children:(0,o.jsx)("div",{})});case 26:return(0,o.jsxs)("div",{className:"".concat(i," tb-giphy-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 28:return a.ZQ?(0,o.jsxs)("div",{className:"".concat(i," tb-capterra-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4"})]}):(0,o.jsxs)("div",{className:"".concat(i," tb-tiktok-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 29:return a.ZQ?(0,o.jsx)("div",{className:"".concat(i," tb-etsy"),children:(0,o.jsx)("div",{})}):(0,o.jsx)("div",{className:"".concat(i," tb-onsite-upload"),children:(0,o.jsx)("div",{})});case 30:case 32:return(0,o.jsx)("div",{className:"".concat(i," tb-vk"),children:(0,o.jsx)("div",{})});case 31:return(0,o.jsxs)("div",{className:"".concat(i," tb-tiktok-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 33:return(0,o.jsxs)("div",{className:"".concat(i," tb-trustpilot-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 34:return(0,o.jsxs)("div",{className:"".concat(i," tb-amazon-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 35:return(0,o.jsx)("div",{className:"".concat(i," tb-tripadvisor"),children:(0,o.jsx)("div",{})});case 36:return(0,o.jsxs)("div",{className:"".concat(i," tb-tagembed-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})})]});case 37:return(0,o.jsxs)("div",{className:"".concat(i," tb-aliexpress-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})})]});default:return""}}));class n extends i.PureComponent{render(){return(0,o.jsx)(c,{...this.props})}}},25810:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var i=s(47313),a=s(35179),o=s(46417);const c=i.lazy((()=>s.e(5867).then(s.bind(s,95867))));class n extends i.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,isDefault:n,Personalization:l}=this.props,r=!!n&&(7!==t.id&&4!==t.id&&36!==t.id),d=a.ZQ&&36==t.id?"tagembed":t.icon;return r?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,o.jsx)("div",{})}):(0,o.jsxs)(i.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(c,{network:t,networkClass:e})]})}}},62245:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var i=s(47313),a=s(16390),o=s(17739),c=s(35179),n=s(30584),l=s(46417);class r extends i.PureComponent{constructor(t){super(t),this.contentRef=i.createRef()}componentDidMount(){c.ZQ&&setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:s,font:i,personalization:r,item:d,contentTitle:_,readMore:h,maxLength:m,textAlign:p,maxLines:u,isReadMore:b}=this.props,v={WebkitLineClamp:u,textAlign:s.textAlignment};let g=20==d.network.id||c.bX&&!c.aL?e:(0,o.Fx)(e);12==d.network.id&&(g=(0,a.ZP)(g));const x="".concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):""),w="".concat(t," ").concat(b?"":x);return(0,l.jsxs)("div",{className:w,ref:this.contentRef,style:v,children:[_?(0,l.jsx)("div",{className:"tb_bold_txt__",children:(0,a.ZP)(_)}):null,(0,l.jsx)(n.Z,{data:d,content:g,Personalization:r,ThemeRule:s})]})}}},30584:(t,e,s)=>{"use strict";s.d(e,{Z:()=>d});var i=s(47313),a=s(91523),o=s(16390),c=s(46417);const n=s(77560),l=(t,e)=>(0,c.jsx)(a.default,{style:e&&[66,70].includes(null===e||void 0===e?void 0:e.themeId)?{width:e.fontSize,height:e.fontSize}:null,children:(0,o.ZP)(t)}),r=t=>{let{data:e,content:s,Personalization:i,ThemeRule:a}=t;const r={color:i.hashtag_color,fontWeight:"bold",backgroundColor:1==i.hashtag_background_status?i.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,c.jsx)(c.Fragment,{children:1===i.hashtag_highlight&&0===i.hashtag_feed&&0===i.hashtag_all?(0,o.ZP)(s):1===i.hashtag_highlight&&0===i.hashtag_feed&&1===i.hashtag_all?l(window.slackdown.parse(n(s,/#(\w+)/g,((t,e)=>(0,c.jsxs)("div",{className:"tb_text_hashtag",style:r,children:["#",t]}))),e.slackMember),a):1===i.hashtag_highlight&&1===i.hashtag_feed&&0===i.hashtag_all?l(window.slackdown.parse(n(s,e.hash.hashString,((t,e)=>(0,c.jsx)("div",{className:"tb_text_hashtag",style:r,children:t}))),e.slackMember),a):1===i.hashtag_highlight&&1===i.hashtag_feed&&1===i.hashtag_all?l(window.slackdown.parse(n(s,/#(\w+)/g,((t,s)=>(0,c.jsxs)("div",{className:"tb_text_hashtag",style:r,children:["#",t]},"".concat(e.id,"_").concat(s)))),e.slackMember),a):l(window.slackdown.parse(s,e.slackMember),a)}):(0,c.jsx)(c.Fragment,{children:1===i.hashtag_highlight&&0===i.hashtag_feed&&0===i.hashtag_all?(0,o.ZP)(s):1===i.hashtag_highlight&&0===i.hashtag_feed&&1===i.hashtag_all?n((0,o.ZP)(s),/#(\w+)/g,((t,e)=>(0,c.jsxs)("div",{className:"tb_text_hashtag",style:r,children:["#",t]}))):1===i.hashtag_highlight&&1===i.hashtag_feed&&0===i.hashtag_all?n((0,o.ZP)(s),e.hash.hashString,((t,e)=>(0,c.jsx)("strong",{className:"tb_text_hashtag",style:r,children:t}))):1===i.hashtag_highlight&&1===i.hashtag_feed&&1===i.hashtag_all?n((0,o.ZP)(s),/#(\w+)/g,((t,s)=>(0,c.jsxs)("div",{className:"tb_text_hashtag",style:r,children:["#",t]},"".concat(e.id,"_").concat(s)))):l(s,a)})},d=(0,i.memo)(r)},90905:(t,e,s)=>{"use strict";s.d(e,{Z:()=>l});var i=s(47313),a=s(35179),o=s(46417);const c=t=>{let{network:e}=t;const s={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:i,color:c}=s[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,o.jsx)("div",{className:i,style:{color:c},"tb-network":e.id,children:(0,o.jsx)("div",{})})},n=t=>{let{ThemeID:e}=t;const{className:s,color:i}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,o.jsx)("div",{className:s,style:{color:i},"tb-network":e})};class l extends i.PureComponent{render(){const{rating:t,network:e,ThemeID:s}=this.props;return(0,o.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,i)=>s?(0,o.jsx)(n,{ThemeID:s},i):(0,o.jsx)(c,{network:e},i))):null})}}},55790:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var i=s(47313),a=s(17739),o=s(46417);const c=t=>{const{postTime:e,timeClass:s}=t;return(0,o.jsx)("div",{className:s,children:(0,a.Sy)(e)})},n=(0,i.memo)(c)},58889:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>D});var i=s(47313),a=s(61395),o=s.n(a),c=s(35179),n=s(89239),l=s(55790),r=s(25810),d=s(46417);const _=t=>{let{author:e,personalization:s,postTime:i,network:a,ThemeRule:o,font:c}=t;const _=e.username&&e.username.length>0?"@".concat(e.username):"",h=!(!s.postAuthor||e.isInstaUser),m=!(!s.postAuthor||!s.postTime||e.isInstaUser),p=!!o.socialAction;return(0,d.jsxs)("div",{className:"tb_w_c_author_wrapper",children:[(0,d.jsxs)("div",{className:"tb_w_c_author",children:[h?(0,d.jsx)(n.default,{author:e,network:a,authorClass:"tb_w_c_author_profile"}):"",(0,d.jsxs)("div",{className:"tb_w_c_author_info",children:[h?(0,d.jsx)("div",{className:"tb_w_c_authorname",children:e.name}):"",(0,d.jsxs)("div",{className:"tb_w_c_post_info",children:[h?(0,d.jsx)("div",{className:"tb_w_c_username",children:_}):"",m?(0,d.jsx)("div",{className:"tb_w_c_seprator",children:" "}):"",s.postTime?(0,d.jsx)(l.default,{postTime:i,timeClass:"tb_w_c_time tb-cTBfont-".concat(o.font_varient),authorColor:o.authorColor}):""]})]})]}),p?(0,d.jsx)("div",{className:"tb_w_c_social_",children:(0,d.jsx)(r.default,{networkClass:"tb_w_c_social_ico",network:a,ThemeRule:o,isDefault:1===o.iconType})}):""]})};var h=s(81349),m=s(84261),p=s(64442);const u=i.lazy((()=>s.e(695).then(s.bind(s,10695)))),b=t=>{let{itemData:e,wallID:s,ownerId:a,wall:o}=t;const n=!(!c.ZQ||3!==e.type&&5!==e.type||o.Personalization.mobilePopup||o.Personalization.postFeatured),l=(3===e.type||5===e.type)&&1==o.ThemeRule.autoPlay,r=!!c.ZQ&&(!!o.ThemeRule.aspectImageRatio&&o.ThemeRule.aspectImageRatio);return(0,d.jsxs)("div",{className:"tb_w_c_media_wrap",children:[c.P2&&!l?(0,d.jsx)(h.Z,{itemData:e,IconClass:"tb_w_c_media_icon",show:c.P2,isCenter:!1}):null,c.aL&&o.Personalization.interactive?(0,d.jsx)(i.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(u,{postId:e.id,wallID:s,UserDetail:o.UserDetail})}):null,l||n?(0,d.jsx)(p.Z,{VideoClass:"tb_w_c_video",data:e,wallID:s,themeID:o.Personalization.widgetTheme,ownerId:a,size:r,isCover:!0,controls:!1,autoPlay:!0,muted:!0}):(0,d.jsx)(m.default,{ImageClass:"tb_w_c_image",data:e,wallID:s,themeID:o.Personalization.widgetTheme,ownerId:a,size:r,ThemeRule:o.ThemeRule})]})},v=(0,i.memo)(b);var g=s(62245),x=s(7138),w=s(90905),j=s(17739);const N=t=>{let{itemData:e,ThemeRule:s}=t;const i=(t,e)=>{t.stopPropagation(),e()},a={color:s.fontColor},o=e.network.id,n=3===o||10===o?"like":"heart",l=1===o?"reply":"comment",r=!(!e.share.status||[29,1,3,4,7,8,10,11].includes(o)),_=!![1,2,3,7,8,9,10,18,19,23,26,29,30].includes(o),h=![29,11,19,23,26,29,30].includes(o),m=![12,15,20,21,29,11,19,23,26,29,30].includes(o);return(0,d.jsx)(d.Fragment,{children:_&&s.socialAction||e.share.status?(0,d.jsxs)("div",{className:"tb_w_c_social_actions_ ".concat(r?"tb_w_c_social_share_only__":"tb_w_c_social_actions_only__"),style:s.socialAction&&m?null:{justifyContent:"flex-end"},children:[s.socialAction?(0,d.jsx)(d.Fragment,{children:m?(0,d.jsxs)(d.Fragment,{children:[_?(0,d.jsx)("div",{className:"tb_w_c_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>i(t,(()=>window.open(((t,e,s)=>1===t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,j.ok)(e)):s)(o,e.postId,e.link),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_w_c_social_action_ico__ tb__icon tb-".concat(n),style:a,children:" "}),(0,d.jsx)("div",{className:"tb_w_c_social_action_counts__",style:a,children:c.ZQ?e.like_count:"Like"})]})}):null,h?(0,d.jsx)("div",{className:"tb_w_c_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>i(t,(()=>window.open(((t,e,s)=>1===t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,j.ok)(e)):s)(o,e.postId,e.link),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_w_c_social_action_ico__ tb__icon tb-".concat(l),style:a,children:" "}),(0,d.jsx)("div",{className:"tb_w_c_social_action_counts__",style:a,children:c.ZQ?e.comment_count:1===o?"Reply":"Comment"})]})}):null,1===o?(0,d.jsx)("div",{className:"tb_w_c_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>i(t,(()=>window.open("https://twitter.com/intent/retweet?tweet_id=".concat((0,j.ok)(e.postId)),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_w_c_social_action_ico__ tb__icon tb-retweet",style:a,children:" "}),(0,d.jsx)("div",{className:"tb_w_c_social_action_counts__",style:a,children:"Retweet"})]})}):"",r?(0,d.jsx)("div",{className:"tb_w_c_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>i(t,(()=>window.open(e.link,"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_w_c_social_action_ico__ tb__icon tb-eye",style:a,children:" "}),(0,d.jsx)("div",{className:"tb_w_c_social_action_counts__",style:a,children:"View"})]})}):""]}):""}):"",e.share.status?(0,d.jsxs)("div",{className:"tb_w_c_action_counts_wrap".concat(s.socialAction?"":" tb_w_c_action_share_wrap"),children:[(0,d.jsx)("div",{className:"tb_w_c_action_ico tb__icon tb-share",style:a,children:" "}),(0,d.jsx)("div",{className:"tb_w_c_action_counts",style:a,children:"Share"}),(0,d.jsx)("div",{className:"tb_w_c_share_wrapper_dropdown",children:(0,d.jsxs)("div",{className:"tb_w_c_share_icon_list",children:[e.share.facebook&&(0,d.jsxs)("div",{onClick:t=>i(t,(()=>window.open(e.share.facebook,"_blank"))),className:"tb_w_c_share_list_in",children:[(0,d.jsx)("div",{className:"tb_w_c_share_ico__ tb__icon tb-facebook",children:" "}),(0,d.jsx)("div",{className:"tb_w_c_share_ico_txt",children:"Facebook"})]}),e.share.twitter&&(0,d.jsxs)("div",{onClick:t=>i(t,(()=>window.open(e.share.twitter,"_blank"))),className:"tb_w_c_share_list_in",children:[(0,d.jsx)("div",{className:"tb_w_c_share_ico__ tb__icon tb-twitter"}),(0,d.jsx)("div",{className:"tb_w_c_share_ico_txt",children:"Twitter"})]}),e.share.linkedin&&(0,d.jsxs)("div",{onClick:t=>i(t,(()=>window.open(e.share.linkedin,"_blank"))),className:"tb_w_c_share_list_in",children:[(0,d.jsx)("div",{className:"tb_w_c_share_ico__ tb__icon tb-linkedin",children:" "}),(0,d.jsx)("div",{className:"tb_w_c_share_ico_txt",children:"LinkedIn"})]})]})})]}):""]}):null})},f=t=>{var e;let{itemData:s,personalization:i,adjustWidth:a,ThemeRule:o,clickToShowPopUp:n,itemIndex:l,wallID:r,ownerId:h,onClickToCTA:m,wall:p}=t;const u=175970==(null===p||void 0===p||null===(e=p.Wall)||void 0===e?void 0:e.owner),b=2===s.type||3===s.type||4===s.type||5===s.type,f=s.rating>0,y=s.rating>0?"tb_w_c_rating_content":"tb_w_c_content ".concat(i.trimcontent&&u?"tb_content_line-3 word_white_space":""),k=c.ZQ&&(0,j.mD)(5)?"tb_w_c_rating_content_review":null,I=1===s.type&&i.textDecorate&&String(s.content).length>0?"tb_w_c_text_decoration tb_w_c_text_post":"",T=!!(s.cta&&Object.keys(s.cta).length>0&&s.cta.status),D=!(!(T||o.socialAction||o.shareOption)||c.bX),S=u?200:(s.type,50),C=i.trimcontent?(0,j.Sv)(u?String(s.content).trim():s.content,S):s.content,P=c.bX?{padding:o.spacing}:null;return(0,d.jsx)("div",{id:"tb-cc-post-".concat(s.id),className:"tb_w_c_post_wrapper",style:{width:"".concat(a,"%"),padding:i.padding/2},"tb-network":s.network.icon,children:(0,d.jsxs)("div",{className:"tb_w_c_post_in",onClick:n(l,s),style:P,children:[c.ZQ||(0,j.mD)(62)||(0,j.mD)(78)||(0,j.mD)(66)?b?(0,d.jsx)("div",{className:"tb_w_c_post_media_wrapp",children:(0,d.jsx)(v,{itemData:s,wallID:r,wall:p,ownerId:h},"img".concat(l,"_").concat(s.id))}):"":null,!o.hideContent||i.postAuthor?(0,d.jsxs)("div",{className:"tb_w_c_contant_wrapper",children:[(0,d.jsx)(_,{ownerId:h,postTime:s.createdAt,author:s.author,network:s.network,font:o,personalization:i,ThemeRule:o}),f?(0,d.jsxs)("div",{className:"tb_w_c_rating__",children:[(0,d.jsx)(w.Z,{rating:s.rating,network:s.network})," "]}):"",o.hideContent&&1!=s.type||(0,j.mD)(63)?"":(0,d.jsx)(g.default,{item:s,contentClass:"".concat(y," ").concat(k," ").concat(I," "),content:C,font:o,ThemeRule:o,personalization:i,contentTitle:s.contentTitle})]}):null,c.ZQ||(0,j.mD)(62)||(0,j.mD)(78)||(0,j.mD)(66)?null:b?(0,d.jsx)("div",{className:"tb_w_c_post_media_wrapp",children:(0,d.jsx)(v,{itemData:s,wallID:r,wall:p,ownerId:h},"img".concat(l,"_").concat(s.id))}):"",D||T||o.shareOption?(0,d.jsxs)("div",{className:"tb_w_c_post_actions",children:[T?(0,d.jsxs)("div",{className:"tb_w_c_post_cta",children:[(0,d.jsx)(x.Z,{ctaClass:"tb_w_c_post_cta_btn",cta:s.cta,item:s,onClickToCTA:m})," "]}):"",D?(0,d.jsx)(N,{itemData:s,ThemeRule:o}):""]}):""]})})};var y=s(43411),k=s(40475),I=s(20678);class T extends i.Component{constructor(){super(...arguments),this.state={postData:[]},this.onLoadMasonry=()=>{this.editorHeight();const{heightUpdate:t}=this.props;setTimeout((()=>t()),1e3)},this.editorHeight=()=>{var t=document.querySelector(".tb_w_c_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight("".concat(e))}}}}componentDidMount(){const{postData:t}=this.props,e=this;this.onLoadMasonry(),window.addEventListener("resize",(function(t){e.editorHeight()}),!0)}componentWillUnmount(){const t=this;window.removeEventListener("resize",(function(e){t.editorHeight()}),!0)}render(){const{postData:t,completeDataObject:e,adjustWidth:s,wall:i,languageSetting:a,clickToShowPopUp:c,onClickToCTA:n}=this.props;return(0,d.jsx)(I.Z,{wall:i,parentId:"tb_marquee",renderID:"tb_cascade",children:(0,d.jsx)("div",{id:"tb_marquee",children:(0,d.jsx)(o(),{id:"tb_cascade",className:"tb_w_c_post_container",tabIndex:"0","aria-label":"There are ".concat((null===t||void 0===t?void 0:t.length)||0," posts in the feed"),elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_w_c_post_wrapper",horizontalOrder:!1,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:(null===t||void 0===t?void 0:t.length)>0&&t.map(((o,l)=>{const r=e[o];return(0,d.jsx)(f,{ownerId:i.Wall.owner,itemData:r,itemIndex:l,adjustWidth:1==r.highlight?2*s:s,personalization:i.Personalization,ThemeRule:i.ThemeRule,completeDataObject:e,postData:t,languageSetting:a,wallID:i.Wall.id,clickToShowPopUp:c,onClickToCTA:n,wall:i},"cls_crd_".concat(l,"_").concat(r.id))}))})})})}}const D=(0,y.$j)((t=>({postHeight:t.postHeight.data})),(t=>({managePostHeight:e=>t((0,k.B0)(e))})))(T)},2406:(t,e,s)=>{"use strict";e.Ad=void 0;var i=s(84228);var a=s(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return a.getImageSize}});var o=s(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,s)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const i=s(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((s,a)=>{if("undefined"===typeof window)return a(i.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return a(i.ErrorMessage.URL_IS_NOT_DEFINED);let o=null;const c=new Image;c.addEventListener("load",(()=>{o&&window.clearTimeout(o),s({width:c.naturalWidth,height:c.naturalHeight})})),c.addEventListener("error",(t=>{o&&window.clearTimeout(o),a("".concat(t.type,": ").concat(t.message))})),c.src=t,e.timeout&&(o=window.setTimeout((()=>a(i.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,s){"use strict";var i=this&&this.__awaiter||function(t,e,s,i){return new(s||(s=Promise))((function(a,o){function c(t){try{l(i.next(t))}catch(e){o(e)}}function n(t){try{l(i.throw(t))}catch(e){o(e)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(c,n)}l((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const a=s(47313),o=s(65786);e.useImageSize=(t,e)=>{const[s,c]=(0,a.useState)(null),[n,l]=(0,a.useState)(!1),[r,d]=(0,a.useState)(null);return(0,a.useEffect)((()=>{i(void 0,void 0,void 0,(function*(){l(!0),c(null);try{const{width:s,height:i}=yield(0,o.getImageSize)(t,e);c({width:s,height:i})}catch(r){d(r.toString())}finally{l(!1)}}))}),[t,e]),[s,{loading:n,error:r}]}},50247:()=>{}}]);