(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[9573,5867,4261,8342,9239,5790,5810],{20678:(t,e,s)=>{"use strict";s.d(e,{Z:()=>p});var i,a,c=s(47313),o=s(35179),n=s(46417),l=!1,r=0,d=0,_=0;const h=t=>{var e;return null!==(e={80:60,70:40,50:30,30:20,20:10}[t])&&void 0!==e?e:20};class m extends c.Component{constructor(){var t;super(...arguments),t=this,this.state={slideWall:0},this.onLoadScroll=()=>{if(!o.aL){const{wall:t}=this.props;window.clearData=this.clearData;const e=document.querySelector(".tb_app_container");null===e||void 0===e||e.addEventListener("wheel",(t=>t.preventDefault()),{passive:!1}),d=setTimeout((()=>this.scrollDiv_init(t.ThemeRule.themeId)),500)}},this.scrollDiv_init=t=>{const{slideWall:e}=this.state,{parentId:s}=this.props;e||(a=document.getElementById(s),63==t&&(l=!1),(a||{}).scrollTop=0,r=0,this.onScrollData(),this.onScrollWPosts())},this.onScrollData=()=>{const{wall:t}=this.props,e=t.Personalization.scrollDelay;if(e){const t=h(e);_=setInterval(this.scrollDiv,t)}},this.onScrollWPosts=()=>{var t;const{themeHeight:e,wall:s,renderID:i,parentId:a}=this.props,c=document.getElementById(a),n=document.getElementById(i);var l=document.querySelector(".tb_theme_container");if(console.log("themeContainer1",l),l=window.getComputedStyle(l).getPropertyValue("height"),console.log("themeContainer",l,null===(t=l)||void 0===t?void 0:t.clientHeight),n)if(window.innerHeight>n.clientHeight)n.style="position: relative; margin-bottom: ".concat(window.innerHeight,"px; min-height: ").concat(n.clientHeight,"px");else{e&&o.bX&&window.editor;c.style="height:".concat(l)}},this.scrollDiv=()=>{const{themeId:t}=this.props.wall.ThemeRule;_&&clearInterval(_);const e=a||{};l?63===t?(e.scrollTop=r--,l=!l||0!==e.scrollTop):(e.scrollTop=r=0,l=!1):(e.scrollTop=r++,l=e.scrollTop>=e.scrollHeight-e.offsetHeight-300),this.onScrollData()},this.pauseDiv=()=>{clearInterval(_),clearTimeout(i),i=setTimeout(this.resumeDiv,5e3)},this.resumeDiv=()=>{var t;const{wall:e,renderID:s}=this.props;a=document.getElementById(s),r=(null===(t=a)||void 0===t?void 0:t.scrollTop)||0,_=setInterval(this.scrollDiv,h(e.Personalization.scrollDelay))},this.clearData=()=>this.clearTime(),this.clearTime=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;t.setState({slideWall:e?0:1}),clearInterval(_),_=0,clearTimeout(i),clearTimeout(d),l=!1,r=0}}componentDidMount(){this.onLoadScroll(),window.addEventListener("resize",(()=>{this.onScrollWPosts()}))}componentDidUpdate(t,e){const{postData:s,wall:i}=t,{ThemeRule:a}=this.props.wall;a.themeId!==i.ThemeRule.themeId&&(l=!1,r=0),s!==this.props.postData&&(this.clearTime(1),this.scrollDiv_init(a.themeId))}componentWillUnmount(){this.clearTime()}render(){return(0,n.jsx)(n.Fragment,{children:{...this.props.children}})}}const p=(0,c.memo)(m)},89239:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var i=s(47313),a=s(17739),c=s(98935),o=s(46417);class n extends i.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:s}=this.props;return(0,o.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,o.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,a.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,o.jsx)(c.Z,{authorClass:e,username:t.name,network:s,color:null===s.id?"#000":s.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});var i=s(47313),a=s(46417);const c=t=>{let{username:e,network:s,authorClass:i,errorPic:c}=t;const o="#ffffff"==s.color?"#000":s.color;return(0,a.jsx)("img",{className:"".concat(i,"__"),src:c||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":o).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},o=(0,i.memo)(c)},7138:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});var i=s(47313),a=s(46417);class c extends i.PureComponent{render(){const{cta:t,ctaClass:e,postCta:s,onClickToCTA:i,item:c}=this.props,o=!(!s||1!==s.status);return(0,a.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),i(c),window.open("".concat(o?s.url:t.url),"_blank")},children:[" ",o?s.text:t.text]})}}const o=c},97915:(t,e,s)=>{"use strict";s.d(e,{Z:()=>h});var i=s(47313),a=s(43411),c=s(83773),o=s(6119),n=s(17739),l=s(46417);const r=(0,c.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),d=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,s=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",i=t.product_price>0||t.product_discount>0?"".concat(s,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(i,"\n        </a>")};class _ extends i.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:s}=this.state,i=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return i.status?(0,l.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const a=(0,n.i1)();return(0,l.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(a),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(s==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,l.jsx)("div",{className:"tb_hotspot__ ".concat(0==i.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,l.jsx)(r,{children:(0,l.jsx)(o.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(a),clickable:!0,html:d(t.UgcProduct)})})]},e)}))}):null}}const h=(0,a.$j)((t=>({appData:t.appData})))(_)},84261:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>_});var i=s(47313),a=s(40475),c=s(97915),o=s(2406),n=s(17739),l=s(98501),r=s(35179),d=s(46417);class _ extends i.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const s=document.querySelector(".track".concat(this.props.data.id));s&&(s.setAttribute("data-height",e),s.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:s}=await(0,o.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t,size:{height:parseInt(s),width:parseInt(t)}})}catch(s){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgSize:{...this.state.imgSize,small:t.target.src}});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(s){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,imgSize:{small:t.data.postFileNew,large:t.data.filename,orignal:t.data.file},size:{height:100,width:100}}}componentWillMount(){const{data:t,hotspot:e,size:s}=this.props;t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:s})}componentDidMount(){const{data:t,hotspot:e,size:s}=this.props;!s||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:s})}render(){const{ImageClass:t,data:e,wallID:s,themeID:i,ownerId:o,hotspot:_}=this.props,{imgUrl:h,paddingBottom:m,size:p,fixedPaddingBottom:u,imgSize:b,noPadding:v}=this.state,g={paddingBottom:"".concat(this.props.size?1==this.props.size?null:u:m,"%")},x={backgroundImage:"url(".concat(b.small,")")};if(p.width>p.height)var j="100%",w="".concat(p.height/p.width*100,"%");else w="100%",j="".concat(p.width/p.height*100,"%");const N=!!(e.hotspot&&e.ugc_products.length>0&&_),f={width:N&&this.props.size?j:null,height:N&&this.props.size?w:null};return(0,d.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:g,children:[N?(0,d.jsx)("div",{className:"tb_blur_bg_",style:x}):null,(0,d.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:f,children:[N?(0,d.jsx)(c.Z,{product:e.ugc_products}):null,(0,d.jsx)("img",{className:"".concat(t," track").concat(e.id),role:"img",src:b.small,srcSet:r.bX&&v?"".concat(b.large,", 991w ").concat(b.small,", 480w"):null,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":s,"data-owner-id":o,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":i,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(l.do,"/media/images/no-image.svg"),(0,a.ht)(t)},alt:(0,n.P)(h)})]})]})}}},64442:(t,e,s)=>{"use strict";s.d(e,{Z:()=>_});var i=s(47313),a=s(2406),c=s(20510),o=s.n(c),n=s(40475),l=s(35179),r=(s(17739),s(46417));const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class _ extends i.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:s}=await(0,a.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=i.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(s){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:s,isCover:i,controls:a,autoPlay:c,handleVideoEnded:_,muted:h,themeID:m,intervalTime:p}=this.props,{paddingBottom:u,videoLoaded:b,isVisible:v}=this.state,g={small:e.postFileNew,large:e.filename,orignal:e.file},x=[74,76,77].includes(m),j={paddingBottom:"".concat(x&&l.bX?null:u,"%")},w=null!==e&&void 0!==e&&e.loopStop?e.mediaUrl:e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,r.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:j,ref:this.videoRef,children:(0,r.jsx)(o(),{className:"".concat(t," video").concat(e.id),url:d(w,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":s,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata",poster:x?g.large:g.small}}},loop:!(l.bX&&!l.aL&&null!==e&&void 0!==e&&e.loopStop),onError:t=>{e.stories&&0!=e.stories||(0,n.ib)(t,e.id),x&&_&&setTimeout((()=>{_()}),1e3*p)},autoPlay:c,muted:h,volume:c?1:0,playsinline:!0,onReady:t=>{l.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:l.ig||l.bX?v:c,height:"100%",width:"100%",controls:a||!1,style:{backgroundImage:"url(".concat(x?g.large:g.small,")"),backgroundSize:i?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:_||null})})}}},81349:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});s(47313);var i=s(35179),a=s(95867),c=s(46417);const o=t=>{const{itemData:e,IconClass:s,isCenter:o,hideVideo:n,show:l}=t,r=3===e.type||5===e.type,d=7===e.network.id,_=!!(e.imageList&&e.imageList.length>0),h=1===e.isAudio,m=!!(e.ugc_products&&e.ugc_products.length>0),p=(0,c.jsx)(a.default,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"}),u=(0,c.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:(0,c.jsx)("div",{})}),b=(0,c.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:(0,c.jsx)("div",{})}),v=(0,c.jsx)("div",{className:"tb__icon tb-".concat(i.bX?"reel-fill tb_reel_ico":"video tb_video_ico"),children:(0,c.jsx)("div",{})}),g=(0,c.jsx)("div",{className:"tb_play_ico tb__icon tb-play",children:(0,c.jsx)("div",{})}),x=(0,c.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:(0,c.jsx)("div",{})}),j=(0,c.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:(0,c.jsx)("div",{})});return l?(0,c.jsxs)(c.Fragment,{children:[o&&(d||r)?(0,c.jsxs)("div",{className:"".concat(s," tb__media_ico_c"),children:[r&&!d?j:"",r&&d?p:""]}):null,m||_||r?(0,c.jsxs)("div",{className:"".concat(s," tb__media_ico_"),children:[m?x:"",_?u:"",o||!r||d||n?"":h?b:i.ZQ?g:v]}):null]}):null}},95867:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var i=s(47313),a=s(35179),c=s(46417);const o=i.memo((t=>{let{network:e,networkClass:s}=t;const i="".concat(s," tb__icon tb_ico_default");switch(e.id){case 1:return(0,c.jsx)("div",{className:"".concat(i," tb-twitter")});case 2:case 18:return(0,c.jsx)("div",{className:"".concat(i," tb-instagram-default"),children:(0,c.jsx)("div",{})});case 3:return(0,c.jsx)("div",{className:"".concat(i," tb-facebook"),children:(0,c.jsx)("div",{})});case 4:return(0,c.jsxs)("div",{className:"".concat(i," tb-google-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})})]});case 5:return(0,c.jsx)("div",{className:"".concat(i," tb-pinterest"),children:(0,c.jsx)("div",{})});case 6:return(0,c.jsxs)("div",{className:"".concat(i," tb-flickr-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 7:return(0,c.jsxs)("div",{className:"".concat(i," tb-youtube-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 8:return(0,c.jsx)("div",{className:"".concat(i," tb-vimeo"),children:(0,c.jsx)("div",{})});case 10:return(0,c.jsx)("div",{className:"".concat(i," tb-linkedin"),children:(0,c.jsx)("div",{})});case 11:return(0,c.jsx)("div",{className:"".concat(i," tb-tumblr"),children:(0,c.jsx)("div",{})});case 12:return(0,c.jsx)("div",{className:"".concat(i," tb-rss"),children:(0,c.jsx)("div",{})});case 15:return(0,c.jsx)("div",{className:"".concat(i," tb-workplace"),children:(0,c.jsx)("div",{})});case 19:return(0,c.jsx)("div",{className:"".concat(i," tb-yelp"),children:(0,c.jsx)("div",{})});case 20:return(0,c.jsxs)("div",{className:"".concat(i," tb-slack-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path8",children:(0,c.jsx)("div",{})})]});case 21:return(0,c.jsx)("div",{className:"".concat(i," tb-yammer"),children:(0,c.jsx)("div",{})});case 23:return(0,c.jsx)("div",{className:"".concat(i," tb-airbnb"),children:(0,c.jsx)("div",{})});case 25:return(0,c.jsx)("div",{className:"".concat(i," tb-soundcloud"),children:(0,c.jsx)("div",{})});case 26:return(0,c.jsxs)("div",{className:"".concat(i," tb-giphy-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})})]});case 28:return a.ZQ?(0,c.jsxs)("div",{className:"".concat(i," tb-capterra-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1"}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2"}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3"}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4"})]}):(0,c.jsxs)("div",{className:"".concat(i," tb-tiktok-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})})]});case 29:return a.ZQ?(0,c.jsx)("div",{className:"".concat(i," tb-etsy"),children:(0,c.jsx)("div",{})}):(0,c.jsx)("div",{className:"".concat(i," tb-onsite-upload"),children:(0,c.jsx)("div",{})});case 30:case 32:return(0,c.jsx)("div",{className:"".concat(i," tb-vk"),children:(0,c.jsx)("div",{})});case 31:return(0,c.jsxs)("div",{className:"".concat(i," tb-tiktok-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})})]});case 33:return(0,c.jsxs)("div",{className:"".concat(i," tb-trustpilot-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 34:return(0,c.jsxs)("div",{className:"".concat(i," tb-amazon-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 35:return(0,c.jsx)("div",{className:"".concat(i," tb-tripadvisor"),children:(0,c.jsx)("div",{})});case 36:return(0,c.jsxs)("div",{className:"".concat(i," tb-tagembed-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})})]});case 37:return(0,c.jsxs)("div",{className:"".concat(i," tb-aliexpress-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})})]});default:return""}}));class n extends i.PureComponent{render(){return(0,c.jsx)(o,{...this.props})}}},25810:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var i=s(47313),a=s(35179),c=s(46417);const o=i.lazy((()=>s.e(5867).then(s.bind(s,95867))));class n extends i.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,isDefault:n,Personalization:l}=this.props,r=!!n&&(7!==t.id&&4!==t.id&&36!==t.id),d=a.ZQ&&36==t.id?"tagembed":t.icon;return r?(0,c.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,c.jsx)("div",{})}):(0,c.jsxs)(i.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:[" ",(0,c.jsx)(o,{network:t,networkClass:e})]})}}},62245:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var i=s(47313),a=s(16390),c=s(17739),o=s(35179),n=s(30584),l=s(46417);class r extends i.PureComponent{constructor(t){super(t),this.contentRef=i.createRef()}componentDidMount(){o.ZQ&&setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:s,font:i,personalization:r,item:d,contentTitle:_,readMore:h,maxLength:m,textAlign:p,maxLines:u,isReadMore:b}=this.props,v={WebkitLineClamp:u,textAlign:s.textAlignment};let g=20==d.network.id||o.bX&&!o.aL?e:(0,c.Fx)(e);12==d.network.id&&(g=(0,a.ZP)(g));const x="".concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):""),j="".concat(t," ").concat(b?"":x);return(0,l.jsxs)("div",{className:j,ref:this.contentRef,style:v,children:[_?(0,l.jsx)("div",{className:"tb_bold_txt__",children:(0,a.ZP)(_)}):null,(0,l.jsx)(n.Z,{data:d,content:g,Personalization:r})]})}}},30584:(t,e,s)=>{"use strict";s.d(e,{Z:()=>d});var i=s(47313),a=s(91523),c=s(16390),o=s(46417);const n=s(77560),l=t=>(0,o.jsx)(a.default,{children:(0,c.ZP)(t)}),r=t=>{let{data:e,content:s,Personalization:i}=t;const a={color:i.hashtag_color,fontWeight:"bold",backgroundColor:1==i.hashtag_background_status?i.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,o.jsx)(o.Fragment,{children:1===i.hashtag_highlight&&0===i.hashtag_feed&&0===i.hashtag_all?(0,c.ZP)(s):1===i.hashtag_highlight&&0===i.hashtag_feed&&1===i.hashtag_all?l(window.slackdown.parse(n(s,/#(\w+)/g,((t,e)=>(0,o.jsxs)("div",{className:"tb_text_hashtag",style:a,children:["#",t]}))),e.slackMember)):1===i.hashtag_highlight&&1===i.hashtag_feed&&0===i.hashtag_all?l(window.slackdown.parse(n(s,e.hash.hashString,((t,e)=>(0,o.jsx)("div",{className:"tb_text_hashtag",style:a,children:t}))),e.slackMember)):1===i.hashtag_highlight&&1===i.hashtag_feed&&1===i.hashtag_all?l(window.slackdown.parse(n(s,/#(\w+)/g,((t,s)=>(0,o.jsxs)("div",{className:"tb_text_hashtag",style:a,children:["#",t]},"".concat(e.id,"_").concat(s)))),e.slackMember)):l(window.slackdown.parse(s,e.slackMember))}):(0,o.jsx)(o.Fragment,{children:1===i.hashtag_highlight&&0===i.hashtag_feed&&0===i.hashtag_all?(0,c.ZP)(s):1===i.hashtag_highlight&&0===i.hashtag_feed&&1===i.hashtag_all?n((0,c.ZP)(s),/#(\w+)/g,((t,e)=>(0,o.jsxs)("div",{className:"tb_text_hashtag",style:a,children:["#",t]}))):1===i.hashtag_highlight&&1===i.hashtag_feed&&0===i.hashtag_all?n((0,c.ZP)(s),e.hash.hashString,((t,e)=>(0,o.jsx)("div",{className:"tb_text_hashtag",style:a,children:t}))):1===i.hashtag_highlight&&1===i.hashtag_feed&&1===i.hashtag_all?n((0,c.ZP)(s),/#(\w+)/g,((t,s)=>(0,o.jsxs)("div",{className:"tb_text_hashtag",style:a,children:["#",t]},"".concat(e.id,"_").concat(s)))):(0,c.ZP)(s)})},d=(0,i.memo)(r)},90905:(t,e,s)=>{"use strict";s.d(e,{Z:()=>l});var i=s(47313),a=s(35179),c=s(46417);const o=t=>{let{network:e}=t;const s={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:i,color:o}=s[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,c.jsx)("div",{className:i,style:{color:o},"tb-network":e.id,children:(0,c.jsx)("div",{})})},n=t=>{let{ThemeID:e}=t;const{className:s,color:i}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,c.jsx)("div",{className:s,style:{color:i},"tb-network":e})};class l extends i.PureComponent{render(){const{rating:t,network:e,ThemeID:s}=this.props;return(0,c.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,i)=>s?(0,c.jsx)(n,{ThemeID:s},i):(0,c.jsx)(o,{network:e},i))):null})}}},55790:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var i=s(47313),a=s(17739),c=s(46417);const o=t=>{const{postTime:e,timeClass:s}=t;return(0,c.jsx)("div",{className:s,children:(0,a.Sy)(e)})},n=(0,i.memo)(o)},58889:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>T});var i=s(47313),a=s(61395),c=s.n(a),o=s(35179),n=s(89239),l=s(55790),r=s(25810),d=s(46417);const _=t=>{let{author:e,personalization:s,postTime:i,network:a,ThemeRule:c,font:o}=t;const _=e.username&&e.username.length>0?"@".concat(e.username):"",h=!(!s.postAuthor||e.isInstaUser),m=!(!s.postAuthor||!s.postTime||e.isInstaUser),p=!!c.socialAction;return(0,d.jsxs)("div",{className:"tb_w_c_author_wrapper",children:[(0,d.jsxs)("div",{className:"tb_w_c_author",children:[h?(0,d.jsx)(n.default,{author:e,network:a,authorClass:"tb_w_c_author_profile"}):"",(0,d.jsxs)("div",{className:"tb_w_c_author_info",children:[h?(0,d.jsx)("div",{className:"tb_w_c_authorname",children:e.name}):"",(0,d.jsxs)("div",{className:"tb_w_c_post_info",children:[h?(0,d.jsx)("div",{className:"tb_w_c_username",children:_}):"",m?(0,d.jsx)("div",{className:"tb_w_c_seprator",children:" "}):"",s.postTime?(0,d.jsx)(l.default,{postTime:i,timeClass:"tb_w_c_time tb-cTBfont-".concat(c.font_varient),authorColor:c.authorColor}):""]})]})]}),p?(0,d.jsx)("div",{className:"tb_w_c_social_",children:(0,d.jsx)(r.default,{networkClass:"tb_w_c_social_ico",network:a,ThemeRule:c,isDefault:1===c.iconType})}):""]})};var h=s(81349),m=s(84261),p=s(64442);const u=i.lazy((()=>s.e(695).then(s.bind(s,10695)))),b=t=>{let{itemData:e,wallID:s,ownerId:a,wall:c}=t;const n=!(!o.ZQ||3!==e.type&&5!==e.type||c.Personalization.mobilePopup||c.Personalization.postFeatured),l=(3===e.type||5===e.type)&&1==c.ThemeRule.autoPlay,r=!!o.ZQ&&(!!c.ThemeRule.aspectImageRatio&&c.ThemeRule.aspectImageRatio);return(0,d.jsxs)("div",{className:"tb_w_c_media_wrap",children:[o.P2&&!l?(0,d.jsx)(h.Z,{itemData:e,IconClass:"tb_w_c_media_icon",show:o.P2,isCenter:!1}):null,o.aL&&c.Personalization.interactive?(0,d.jsx)(i.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(u,{postId:e.id,wallID:s,UserDetail:c.UserDetail})}):null,l||n?(0,d.jsx)(p.Z,{VideoClass:"tb_w_c_video",data:e,wallID:s,themeID:c.Personalization.widgetTheme,ownerId:a,size:r,isCover:!0,controls:!1,autoPlay:!0,muted:!0}):(0,d.jsx)(m.default,{ImageClass:"tb_w_c_image",data:e,wallID:s,themeID:c.Personalization.widgetTheme,ownerId:a,size:r,ThemeRule:c.ThemeRule})]})},v=(0,i.memo)(b);var g=s(62245),x=s(7138),j=s(90905),w=s(17739);const N=t=>{let{itemData:e,ThemeRule:s}=t;const i=(t,e)=>{t.stopPropagation(),e()},a={color:s.fontColor},c=e.network.id,n=3===c||10===c?"like":"heart",l=1===c?"reply":"comment",r=!(!e.share.status||[29,1,3,4,7,8,10,11].includes(c)),_=!![1,2,3,7,8,9,10,18,19,23,26,29,30].includes(c),h=![29,11,19,23,26,29,30].includes(c),m=![12,15,20,21,29,11,19,23,26,29,30].includes(c);return(0,d.jsx)(d.Fragment,{children:_&&s.socialAction||e.share.status?(0,d.jsxs)("div",{className:"tb_w_c_social_actions_ ".concat(r?"tb_w_c_social_share_only__":"tb_w_c_social_actions_only__"),style:s.socialAction&&m?null:{justifyContent:"flex-end"},children:[s.socialAction?(0,d.jsx)(d.Fragment,{children:m?(0,d.jsxs)(d.Fragment,{children:[_?(0,d.jsx)("div",{className:"tb_w_c_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>i(t,(()=>window.open(((t,e,s)=>1===t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,w.ok)(e)):s)(c,e.postId,e.link),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_w_c_social_action_ico__ tb__icon tb-".concat(n),style:a,children:" "}),(0,d.jsx)("div",{className:"tb_w_c_social_action_counts__",style:a,children:o.ZQ?e.like_count:"Like"})]})}):null,h?(0,d.jsx)("div",{className:"tb_w_c_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>i(t,(()=>window.open(((t,e,s)=>1===t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,w.ok)(e)):s)(c,e.postId,e.link),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_w_c_social_action_ico__ tb__icon tb-".concat(l),style:a,children:" "}),(0,d.jsx)("div",{className:"tb_w_c_social_action_counts__",style:a,children:o.ZQ?e.comment_count:1===c?"Reply":"Comment"})]})}):null,1===c?(0,d.jsx)("div",{className:"tb_w_c_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>i(t,(()=>window.open("https://twitter.com/intent/retweet?tweet_id=".concat((0,w.ok)(e.postId)),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_w_c_social_action_ico__ tb__icon tb-retweet",style:a,children:" "}),(0,d.jsx)("div",{className:"tb_w_c_social_action_counts__",style:a,children:"Retweet"})]})}):"",r?(0,d.jsx)("div",{className:"tb_w_c_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>i(t,(()=>window.open(e.link,"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_w_c_social_action_ico__ tb__icon tb-eye",style:a,children:" "}),(0,d.jsx)("div",{className:"tb_w_c_social_action_counts__",style:a,children:"View"})]})}):""]}):""}):"",e.share.status?(0,d.jsxs)("div",{className:"tb_w_c_action_counts_wrap".concat(s.socialAction?"":" tb_w_c_action_share_wrap"),children:[(0,d.jsx)("div",{className:"tb_w_c_action_ico tb__icon tb-share",style:a,children:" "}),(0,d.jsx)("div",{className:"tb_w_c_action_counts",style:a,children:"Share"}),(0,d.jsx)("div",{className:"tb_w_c_share_wrapper_dropdown",children:(0,d.jsxs)("div",{className:"tb_w_c_share_icon_list",children:[e.share.facebook&&(0,d.jsxs)("div",{onClick:t=>i(t,(()=>window.open(e.share.facebook,"_blank"))),className:"tb_w_c_share_list_in",children:[(0,d.jsx)("div",{className:"tb_w_c_share_ico__ tb__icon tb-facebook",children:" "}),(0,d.jsx)("div",{className:"tb_w_c_share_ico_txt",children:"Facebook"})]}),e.share.twitter&&(0,d.jsxs)("div",{onClick:t=>i(t,(()=>window.open(e.share.twitter,"_blank"))),className:"tb_w_c_share_list_in",children:[(0,d.jsx)("div",{className:"tb_w_c_share_ico__ tb__icon tb-twitter"}),(0,d.jsx)("div",{className:"tb_w_c_share_ico_txt",children:"Twitter"})]}),e.share.linkedin&&(0,d.jsxs)("div",{onClick:t=>i(t,(()=>window.open(e.share.linkedin,"_blank"))),className:"tb_w_c_share_list_in",children:[(0,d.jsx)("div",{className:"tb_w_c_share_ico__ tb__icon tb-linkedin",children:" "}),(0,d.jsx)("div",{className:"tb_w_c_share_ico_txt",children:"LinkedIn"})]})]})})]}):""]}):null})},f=t=>{let{itemData:e,personalization:s,adjustWidth:i,ThemeRule:a,clickToShowPopUp:c,itemIndex:n,wallID:l,ownerId:r,onClickToCTA:h,wall:m}=t;const p=2===e.type||3===e.type||4===e.type||5===e.type,u=e.rating>0,b=e.rating>0?"tb_w_c_rating_content":"tb_w_c_content",f=o.ZQ&&(0,w.mD)(5)?"tb_w_c_rating_content_review":null,k=1===e.type&&s.textDecorate&&String(e.content).length>0?"tb_w_c_text_decoration tb_w_c_text_post":"",y=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),I=!(!(y||a.socialAction||a.shareOption)||o.bX),D=(e.type,50),T=s.trimcontent?(0,w.Sv)(e.content,D):e.content,C=o.bX?{padding:a.spacing}:null;return(0,d.jsx)("div",{id:"tb-cc-post-".concat(e.id),className:"tb_w_c_post_wrapper",style:{width:"".concat(i,"%"),padding:s.padding/2},"tb-network":e.network.icon,children:(0,d.jsxs)("div",{className:"tb_w_c_post_in",onClick:c(n,e),style:C,children:[o.ZQ||(0,w.mD)(62)||(0,w.mD)(78)||(0,w.mD)(66)?p?(0,d.jsx)("div",{className:"tb_w_c_post_media_wrapp",children:(0,d.jsx)(v,{itemData:e,wallID:l,wall:m,ownerId:r},"img".concat(n,"_").concat(e.id))}):"":null,!a.hideContent||s.postAuthor?(0,d.jsxs)("div",{className:"tb_w_c_contant_wrapper",children:[(0,d.jsx)(_,{ownerId:r,postTime:e.createdAt,author:e.author,network:e.network,font:a,personalization:s,ThemeRule:a}),u?(0,d.jsxs)("div",{className:"tb_w_c_rating__",children:[(0,d.jsx)(j.Z,{rating:e.rating,network:e.network})," "]}):"",a.hideContent&&1!=e.type||(0,w.mD)(63)?"":(0,d.jsx)(g.default,{item:e,contentClass:"".concat(b," ").concat(f," ").concat(k),content:T,font:a,ThemeRule:a,personalization:s,contentTitle:e.contentTitle})]}):null,o.ZQ||(0,w.mD)(62)||(0,w.mD)(78)||(0,w.mD)(66)?null:p?(0,d.jsx)("div",{className:"tb_w_c_post_media_wrapp",children:(0,d.jsx)(v,{itemData:e,wallID:l,wall:m,ownerId:r},"img".concat(n,"_").concat(e.id))}):"",I||y||a.shareOption?(0,d.jsxs)("div",{className:"tb_w_c_post_actions",children:[y?(0,d.jsxs)("div",{className:"tb_w_c_post_cta",children:[(0,d.jsx)(x.Z,{ctaClass:"tb_w_c_post_cta_btn",cta:e.cta,item:e,onClickToCTA:h})," "]}):"",I?(0,d.jsx)(N,{itemData:e,ThemeRule:a}):""]}):""]})})};var k=s(43411),y=s(40475),I=s(20678);class D extends i.Component{constructor(){super(...arguments),this.state={postData:[],loadData:1},this.onLoadMasonry=()=>{this.editorHeight()},this.editorHeight=()=>{var t=document.querySelector(".tb_w_c_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight("".concat(e))}}}}componentDidMount(){const{postData:t}=this.props,e=this;this.onLoadMasonry(),window.addEventListener("resize",(function(t){e.editorHeight()}),!0)}componentWillUnmount(){const t=this;window.removeEventListener("resize",(function(e){t.editorHeight()}),!0)}componentWillReceiveProps(t){const{postData:e}=t;this.props.postData!=t.postData&&this.onLoadMasonry()}shouldComponentUpdate(t,e){return this.props.postData!=t.postData}render(){const{postData:t,completeDataObject:e,adjustWidth:s,wall:i,languageSetting:a,clickToShowPopUp:o,onClickToCTA:n}=this.props,{loadData:l}=this.state;return(0,d.jsx)(I.Z,{wall:i,parentId:"tb_marquee",renderID:"tb_cascade",children:(0,d.jsx)("div",{id:"tb_marquee",children:(0,d.jsx)(c(),{id:"tb_cascade",className:"tb_w_c_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_w_c_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:(null===t||void 0===t?void 0:t.length)>0&&t.map(((c,l)=>{const r=e[c];return(0,d.jsx)(f,{ownerId:i.Wall.owner,itemData:r,itemIndex:l,adjustWidth:1==r.highlight?2*s:s,personalization:i.Personalization,ThemeRule:i.ThemeRule,completeDataObject:e,postData:t,languageSetting:a,wallID:i.Wall.id,clickToShowPopUp:o,onClickToCTA:n,wall:i},"cls_crd_".concat(l,"_").concat(r.id))}))})})})}}const T=(0,k.$j)((t=>({postHeight:t.postHeight.data})),(t=>({managePostHeight:e=>t((0,y.B0)(e))})))(D)},2406:(t,e,s)=>{"use strict";e.Ad=void 0;var i=s(84228);var a=s(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return a.getImageSize}});var c=s(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,s)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const i=s(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((s,a)=>{if("undefined"===typeof window)return a(i.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return a(i.ErrorMessage.URL_IS_NOT_DEFINED);let c=null;const o=new Image;o.addEventListener("load",(()=>{c&&window.clearTimeout(c),s({width:o.naturalWidth,height:o.naturalHeight})})),o.addEventListener("error",(t=>{c&&window.clearTimeout(c),a("".concat(t.type,": ").concat(t.message))})),o.src=t,e.timeout&&(c=window.setTimeout((()=>a(i.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,s){"use strict";var i=this&&this.__awaiter||function(t,e,s,i){return new(s||(s=Promise))((function(a,c){function o(t){try{l(i.next(t))}catch(e){c(e)}}function n(t){try{l(i.throw(t))}catch(e){c(e)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(o,n)}l((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const a=s(47313),c=s(65786);e.useImageSize=(t,e)=>{const[s,o]=(0,a.useState)(null),[n,l]=(0,a.useState)(!1),[r,d]=(0,a.useState)(null);return(0,a.useEffect)((()=>{i(void 0,void 0,void 0,(function*(){l(!0),o(null);try{const{width:s,height:i}=yield(0,c.getImageSize)(t,e);o({width:s,height:i})}catch(r){d(r.toString())}finally{l(!1)}}))}),[t,e]),[s,{loading:n,error:r}]}},50247:()=>{}}]);