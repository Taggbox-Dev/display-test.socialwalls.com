(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[452,5867,4261,8342,9239,5790,5810],{20678:(t,e,i)=>{"use strict";i.d(e,{Z:()=>p});var s,a,o=i(47313),c=i(35179),n=i(46417),r=!1,l=0,d=0,_=0;const h=t=>{var e;return null!==(e={80:60,70:40,50:30,30:20,20:10}[t])&&void 0!==e?e:20};class m extends o.Component{constructor(){var t;super(...arguments),t=this,this.state={slideWall:0},this.onLoadScroll=()=>{if(!c.aL){const{wall:t}=this.props;window.clearData=this.clearData;const e=document.querySelector(".tb_app_container");null===e||void 0===e||e.addEventListener("wheel",(t=>t.preventDefault()),{passive:!1}),d=setTimeout((()=>this.scrollDiv_init(t.ThemeRule.themeId)),500)}},this.scrollDiv_init=t=>{const{slideWall:e}=this.state,{parentId:i}=this.props;e||(a=document.getElementById(i),63==t&&(r=!1),(a||{}).scrollTop=0,l=0,this.onScrollData(),this.onScrollWPosts())},this.onScrollData=()=>{const{wall:t}=this.props,e=t.Personalization.scrollDelay;if(e){const t=h(e);_=setInterval(this.scrollDiv,t)}},this.onScrollWPosts=()=>{const{themeHeight:t,wall:e,renderID:i,parentId:s}=this.props,a=document.getElementById(s),o=document.getElementById(i);var n=document.querySelector(".tb_theme_container");if(n=window.getComputedStyle(n).getPropertyValue("height"),o)if(window.innerHeight>o.clientHeight)o.style="position: relative; margin-bottom: ".concat(window.innerHeight,"px; min-height: ").concat(o.clientHeight,"px");else{t&&c.bX&&window.editor;a.style="height:".concat(n)}},this.scrollDiv=()=>{const{themeId:t}=this.props.wall.ThemeRule;_&&clearInterval(_);const e=a||{};r?63===t?(e.scrollTop=l--,r=!r||0!==e.scrollTop):(e.scrollTop=l=0,r=!1):(e.scrollTop=l++,r=e.scrollTop>=e.scrollHeight-e.offsetHeight-300),this.onScrollData()},this.pauseDiv=()=>{clearInterval(_),clearTimeout(s),s=setTimeout(this.resumeDiv,5e3)},this.resumeDiv=()=>{var t;const{wall:e,renderID:i}=this.props;a=document.getElementById(i),l=(null===(t=a)||void 0===t?void 0:t.scrollTop)||0,_=setInterval(this.scrollDiv,h(e.Personalization.scrollDelay))},this.clearData=()=>this.clearTime(),this.clearTime=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;t.setState({slideWall:e?0:1}),clearInterval(_),_=0,clearTimeout(s),clearTimeout(d),r=!1,l=0}}componentDidMount(){this.onLoadScroll(),window.addEventListener("resize",(()=>{this.onScrollWPosts()}))}componentDidUpdate(t,e){const{postData:i,wall:s}=t,{ThemeRule:a}=this.props.wall;a.themeId!==s.ThemeRule.themeId&&(r=!1,l=0),i!==this.props.postData&&(this.clearTime(1),this.scrollDiv_init(a.themeId))}componentWillUnmount(){this.clearTime()}render(){return(0,n.jsx)(n.Fragment,{children:{...this.props.children}})}}const p=(0,o.memo)(m)},89239:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});var s=i(47313),a=i(17739),o=i(98935),c=i(46417);class n extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:i}=this.props;return(0,c.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,c.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,a.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,c.jsx)(o.Z,{authorClass:e,username:t.name,network:i,color:null===i.id?"#000":i.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,i)=>{"use strict";i.d(e,{Z:()=>c});var s=i(47313),a=i(46417);const o=t=>{let{username:e,network:i,authorClass:s,errorPic:o}=t;const c="#ffffff"==i.color?"#000":i.color;return(0,a.jsx)("img",{className:"".concat(s,"__"),src:o||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===i.id?"#000":c).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},c=(0,s.memo)(o)},7138:(t,e,i)=>{"use strict";i.d(e,{Z:()=>c});var s=i(47313),a=i(46417);class o extends s.PureComponent{render(){const{cta:t,ctaClass:e,postCta:i,onClickToCTA:s,item:o}=this.props,c=!(!i||1!==i.status);return(0,a.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),s(o),window.open("".concat(c?i.url:t.url),"_blank")},children:[" ",c?i.text:t.text]})}}const c=o},97915:(t,e,i)=>{"use strict";i.d(e,{Z:()=>h});var s=i(47313),a=i(43411),o=i(83773),c=i(6119),n=i(17739),r=i(46417);const l=(0,o.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),d=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,i=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",s=t.product_price>0||t.product_discount>0?"".concat(i,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(s,"\n        </a>")};class _ extends s.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:i}=this.state,s=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return s.status?(0,r.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const a=(0,n.i1)();return(0,r.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(a),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(i==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,r.jsx)("div",{className:"tb_hotspot__ ".concat(0==s.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,r.jsx)(l,{children:(0,r.jsx)(c.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(a),clickable:!0,html:d(t.UgcProduct)})})]},e)}))}):null}}const h=(0,a.$j)((t=>({appData:t.appData})))(_)},84261:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>_});var s=i(47313),a=i(40475),o=i(97915),c=i(2406),n=i(17739),r=i(98501),l=i(35179),d=i(46417);class _ extends s.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const i=document.querySelector(".track".concat(this.props.data.id));i&&(i.setAttribute("data-height",e),i.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:i}=await(0,c.Ad)(e.postFileNew);this.setState({paddingBottom:100*i/t,size:{height:parseInt(i),width:parseInt(t)}})}catch(i){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgSize:{...this.state.imgSize,small:t.target.src}});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(i){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,imgSize:{small:t.data.postFileNew,large:t.data.filename,orignal:t.data.file},size:{height:100,width:100}}}componentWillMount(){const{data:t,hotspot:e,size:i}=this.props;t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:i})}componentDidMount(){const{data:t,hotspot:e,size:i}=this.props;!i||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:i})}render(){const{ImageClass:t,data:e,wallID:i,themeID:s,ownerId:c,hotspot:_}=this.props,{imgUrl:h,paddingBottom:m,size:p,fixedPaddingBottom:u,imgSize:b,noPadding:v}=this.state,x={paddingBottom:"".concat(this.props.size?1==this.props.size?null:u:m,"%")},j={backgroundImage:"url(".concat(b.small,")")};if(p.width>p.height)var g="100%",w="".concat(p.height/p.width*100,"%");else w="100%",g="".concat(p.width/p.height*100,"%");const N=!!(e.hotspot&&e.ugc_products.length>0&&_),f={width:N&&this.props.size?g:null,height:N&&this.props.size?w:null};return(0,d.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:x,children:[N?(0,d.jsx)("div",{className:"tb_blur_bg_",style:j}):null,(0,d.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:f,children:[N?(0,d.jsx)(o.Z,{product:e.ugc_products}):null,(0,d.jsx)("img",{className:"".concat(t," track").concat(e.id),role:"img",src:b.small,srcSet:l.bX&&v?"".concat(b.large,", 991w ").concat(b.small,", 480w"):null,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":i,"data-owner-id":c,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":s,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(r.do,"/media/images/no-image.svg"),(0,a.ht)(t)},alt:(0,n.P)(h)})]})]})}}},64442:(t,e,i)=>{"use strict";i.d(e,{Z:()=>_});var s=i(47313),a=i(2406),o=i(20510),c=i.n(o),n=i(40475),r=i(35179),l=(i(17739),i(46417));const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class _ extends s.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:i}=await(0,a.Ad)(e.postFileNew);this.setState({paddingBottom:100*i/t})}catch(i){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=s.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(i){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:i,isCover:s,controls:a,autoPlay:o,handleVideoEnded:_,muted:h,themeID:m}=this.props,{paddingBottom:p,videoLoaded:u,isVisible:b}=this.state,v={small:e.postFileNew,large:e.filename,orignal:e.file},x=[74,76,77].includes(m),j={paddingBottom:"".concat(x&&r.bX?null:p,"%")},g=null!==e&&void 0!==e&&e.loopStop?e.mediaUrl:e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:j,ref:this.videoRef,children:(0,l.jsx)(c(),{className:"".concat(t," video").concat(e.id),url:d(g,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":i,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata"}}},loop:!(r.bX&&!r.aL&&null!==e&&void 0!==e&&e.loopStop),onError:t=>{e.stories&&0!=e.stories||(0,n.ib)(t,e.id)},autoPlay:o,muted:h,volume:o?1:0,playsinline:!0,onReady:t=>{r.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:r.ig||r.bX?b:o,height:"100%",width:"100%",controls:a||!1,style:{backgroundImage:"url(".concat(x?v.large:v.small,")"),backgroundSize:s?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:_||null})})}}},81349:(t,e,i)=>{"use strict";i.d(e,{Z:()=>c});i(47313);var s=i(35179),a=i(95867),o=i(46417);const c=t=>{const{itemData:e,IconClass:i,isCenter:c,hideVideo:n,show:r}=t,l=3===e.type||5===e.type,d=7===e.network.id,_=!!(e.imageList&&e.imageList.length>0),h=1===e.isAudio,m=!!(e.ugc_products&&e.ugc_products.length>0),p=(0,o.jsx)(a.default,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"}),u=(0,o.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:(0,o.jsx)("div",{})}),b=(0,o.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:(0,o.jsx)("div",{})}),v=(0,o.jsx)("div",{className:"tb__icon tb-".concat(s.bX?"reel-fill tb_reel_ico":"video tb_video_ico"),children:(0,o.jsx)("div",{})}),x=(0,o.jsx)("div",{className:"tb_play_ico tb__icon tb-play",children:(0,o.jsx)("div",{})}),j=(0,o.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:(0,o.jsx)("div",{})}),g=(0,o.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:(0,o.jsx)("div",{})});return r?(0,o.jsxs)(o.Fragment,{children:[c&&(d||l)?(0,o.jsxs)("div",{className:"".concat(i," tb__media_ico_c"),children:[l&&!d?g:"",l&&d?p:""]}):null,m||_||l?(0,o.jsxs)("div",{className:"".concat(i," tb__media_ico_"),children:[m?j:"",_?u:"",c||!l||d||n?"":h?b:s.ZQ?x:v]}):null]}):null}},95867:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});var s=i(47313),a=i(35179),o=i(46417);const c=s.memo((t=>{let{network:e,networkClass:i}=t;const s="".concat(i," tb__icon tb_ico_default");switch(e.id){case 1:return(0,o.jsx)("div",{className:"".concat(s," tb-twitter")});case 2:case 18:return(0,o.jsx)("div",{className:"".concat(s," tb-instagram-default"),children:(0,o.jsx)("div",{})});case 3:return(0,o.jsx)("div",{className:"".concat(s," tb-facebook"),children:(0,o.jsx)("div",{})});case 4:return(0,o.jsxs)("div",{className:"".concat(s," tb-google-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})})]});case 5:return(0,o.jsx)("div",{className:"".concat(s," tb-pinterest"),children:(0,o.jsx)("div",{})});case 6:return(0,o.jsxs)("div",{className:"".concat(s," tb-flickr-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 7:return(0,o.jsxs)("div",{className:"".concat(s," tb-youtube-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 8:return(0,o.jsx)("div",{className:"".concat(s," tb-vimeo"),children:(0,o.jsx)("div",{})});case 10:return(0,o.jsx)("div",{className:"".concat(s," tb-linkedin"),children:(0,o.jsx)("div",{})});case 11:return(0,o.jsx)("div",{className:"".concat(s," tb-tumblr"),children:(0,o.jsx)("div",{})});case 12:return(0,o.jsx)("div",{className:"".concat(s," tb-rss"),children:(0,o.jsx)("div",{})});case 15:return(0,o.jsx)("div",{className:"".concat(s," tb-workplace"),children:(0,o.jsx)("div",{})});case 19:return(0,o.jsx)("div",{className:"".concat(s," tb-yelp"),children:(0,o.jsx)("div",{})});case 20:return(0,o.jsxs)("div",{className:"".concat(s," tb-slack-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path8",children:(0,o.jsx)("div",{})})]});case 21:return(0,o.jsx)("div",{className:"".concat(s," tb-yammer"),children:(0,o.jsx)("div",{})});case 23:return(0,o.jsx)("div",{className:"".concat(s," tb-airbnb"),children:(0,o.jsx)("div",{})});case 25:return(0,o.jsx)("div",{className:"".concat(s," tb-soundcloud"),children:(0,o.jsx)("div",{})});case 26:return(0,o.jsxs)("div",{className:"".concat(s," tb-giphy-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 28:return a.ZQ?(0,o.jsxs)("div",{className:"".concat(s," tb-capterra-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4"})]}):(0,o.jsxs)("div",{className:"".concat(s," tb-tiktok-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 29:return a.ZQ?(0,o.jsx)("div",{className:"".concat(s," tb-etsy"),children:(0,o.jsx)("div",{})}):(0,o.jsx)("div",{className:"".concat(s," tb-onsite-upload"),children:(0,o.jsx)("div",{})});case 30:case 32:return(0,o.jsx)("div",{className:"".concat(s," tb-vk"),children:(0,o.jsx)("div",{})});case 31:return(0,o.jsxs)("div",{className:"".concat(s," tb-tiktok-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 33:return(0,o.jsxs)("div",{className:"".concat(s," tb-trustpilot-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 34:return(0,o.jsxs)("div",{className:"".concat(s," tb-amazon-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 35:return(0,o.jsx)("div",{className:"".concat(s," tb-tripadvisor"),children:(0,o.jsx)("div",{})});case 36:return(0,o.jsxs)("div",{className:"".concat(s," tb-tagembed-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})})]});case 37:return(0,o.jsxs)("div",{className:"".concat(s," tb-aliexpress-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})})]});default:return""}}));class n extends s.PureComponent{render(){return(0,o.jsx)(c,{...this.props})}}},25810:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});var s=i(47313),a=i(35179),o=i(46417);const c=s.lazy((()=>i.e(5867).then(i.bind(i,95867))));class n extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:i,isDefault:n,Personalization:r}=this.props,l=!!n&&(7!==t.id&&4!==t.id&&36!==t.id),d=a.ZQ&&36==t.id?"tagembed":t.icon;return l?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,o.jsx)("div",{})}):(0,o.jsxs)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(c,{network:t,networkClass:e})]})}}},62245:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>l});var s=i(47313),a=i(16390),o=i(17739),c=i(35179),n=i(46417);const r=s.lazy((()=>Promise.all([i.e(622),i.e(584)]).then(i.bind(i,30584))));class l extends s.PureComponent{constructor(t){super(t),this.contentRef=s.createRef()}componentDidMount(){setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:i,font:l,personalization:d,item:_,contentTitle:h,readMore:m,maxLength:p,textAlign:u,maxLines:b,isReadMore:v}=this.props,x={WebkitLineClamp:b,textAlign:i.textAlignment};let j=20==_.network.id||c.bX&&!c.aL?e:(0,o.Fx)(e);12==_.network.id&&(j=(0,a.ZP)(j));const g="".concat(i.lineTrim?" tb_content_line-".concat(i.lineTrim):""),w="".concat(t," ").concat(v?"":g);return(0,n.jsxs)("div",{className:w,ref:this.contentRef,style:x,children:[h?(0,n.jsx)("div",{className:"tb_bold_txt__",children:(0,a.ZP)(h)}):null,(0,n.jsxs)(s.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(r,{data:_,content:j,Personalization:d})]})]})}}},90905:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});var s=i(47313),a=i(35179),o=i(46417);const c=t=>{let{network:e}=t;const i={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:s,color:c}=i[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,o.jsx)("div",{className:s,style:{color:c},"tb-network":e.id,children:(0,o.jsx)("div",{})})},n=t=>{let{ThemeID:e}=t;const{className:i,color:s}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,o.jsx)("div",{className:i,style:{color:s},"tb-network":e})};class r extends s.PureComponent{render(){const{rating:t,network:e,ThemeID:i}=this.props;return(0,o.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,s)=>i?(0,o.jsx)(n,{ThemeID:i},s):(0,o.jsx)(c,{network:e},s))):null})}}},55790:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});var s=i(47313),a=i(17739),o=i(46417);const c=t=>{const{postTime:e,timeClass:i}=t;return(0,o.jsx)("div",{className:i,children:(0,a.Sy)(e)})},n=(0,s.memo)(c)},40038:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>D});var s=i(47313),a=i(61395),o=i.n(a),c=i(35179),n=i(89239),r=i(55790),l=i(25810),d=i(46417);const _=t=>{let{author:e,personalization:i,postTime:s,network:a,ThemeRule:o,font:c}=t;const _=e.username&&e.username.length>0?"@".concat(e.username):"",h=!(!i.postAuthor||e.isInstaUser),m=!(!i.postAuthor||!i.postTime||e.isInstaUser),p=!!o.socialAction;return(0,d.jsxs)("div",{className:"tb_w_re_author_wrapper",children:[(0,d.jsxs)("div",{className:"tb_w_re_author",children:[h?(0,d.jsx)(n.default,{author:e,network:a,authorClass:"tb_w_re_author_profile"}):"",(0,d.jsxs)("div",{className:"tb_w_re_author_info",children:[h?(0,d.jsx)("div",{className:"tb_w_re_authorname",children:e.name}):"",(0,d.jsxs)("div",{className:"tb_w_re_post_info",children:[h?(0,d.jsx)("div",{className:"tb_w_re_username",children:_}):"",m?(0,d.jsx)("div",{className:"tb_w_re_seprator",children:" "}):"",i.postTime?(0,d.jsx)(r.default,{postTime:s,timeClass:"tb_w_re_time tb-cTBfont-".concat(o.font_varient),authorColor:o.authorColor}):""]})]})]}),p?(0,d.jsx)("div",{className:"tb_w_re_social_",children:(0,d.jsx)(l.default,{networkClass:"tb_w_re_social_ico",network:a,ThemeRule:o,isDefault:!0})}):null]})};var h=i(81349),m=i(84261),p=i(64442);const u=s.lazy((()=>i.e(695).then(i.bind(i,10695)))),b=t=>{let{itemData:e,wallID:i,ownerId:a,wall:o}=t;const n=!(!c.ZQ||3!==e.type&&5!==e.type||o.Personalization.mobilePopup||o.Personalization.postFeatured),r=(3===e.type||5===e.type)&&1==o.ThemeRule.autoPlay,l=!!c.ZQ&&(!!o.ThemeRule.aspectImageRatio&&o.ThemeRule.aspectImageRatio);return(0,d.jsxs)("div",{className:"tb_w_re_media_wrap",children:[c.P2?(0,d.jsx)(h.Z,{itemData:e,IconClass:"tb_w_re_media_icon",show:c.P2,isCenter:!1}):null,c.aL&&o.Personalization.interactive?(0,d.jsx)(s.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(u,{postId:e.id,wallID:i,UserDetail:o.UserDetail})}):null,r||n?(0,d.jsx)(p.Z,{VideoClass:"tb_w_re_video",data:e,wallID:i,themeID:o.Personalization.widgetTheme,ownerId:a,size:l,isCover:!0,controls:!1,autoPlay:!0,muted:!0}):(0,d.jsx)(m.default,{ImageClass:"tb_w_re_image",data:e,wallID:i,themeID:o.Personalization.widgetTheme,ownerId:a,size:l,ThemeRule:o.ThemeRule})]})};var v=i(62245),x=i(7138),j=i(90905),g=i(17739);const w=t=>{let{itemData:e,ThemeRule:i}=t;const s=(t,e)=>{t.stopPropagation(),e()},a={color:i.fontColor},o=e.network.id,n=3===o||10===o?"like":"heart",r=1===o?"reply":"comment",l=!(!e.share.status||[29,1,3,4,7,8,10,11].includes(o)),_=!![1,2,3,7,8,9,10,18,19,23,26,29,30].includes(o),h=![29,11,19,23,26,29,30].includes(o),m=![12,15,20,21,29,11,19,23,26,29,30].includes(o);return(0,d.jsx)(d.Fragment,{children:_&&i.socialAction||e.share.status?(0,d.jsxs)("div",{className:"tb_w_re_social_actions_ ".concat(l?"tb_w_re_social_share_only__":"tb_w_re_social_actions_only__"),style:i.socialAction&&m?null:{justifyContent:"flex-end"},children:[i.socialAction?(0,d.jsx)(d.Fragment,{children:m?(0,d.jsxs)(d.Fragment,{children:[_?(0,d.jsx)("div",{className:"tb_w_re_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>s(t,(()=>window.open(((t,e,i)=>1===t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,g.ok)(e)):i)(o,e.postId,e.link),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_w_re_social_action_ico__ tb__icon tb-".concat(n),style:a,children:" "}),(0,d.jsx)("div",{className:"tb_w_re_social_action_counts__",style:a,children:c.ZQ?e.like_count:"Like"})]})}):null,h?(0,d.jsx)("div",{className:"tb_w_re_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>s(t,(()=>window.open(((t,e,i)=>1===t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,g.ok)(e)):i)(o,e.postId,e.link),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_w_re_social_action_ico__ tb__icon tb-".concat(r),style:a,children:" "}),(0,d.jsx)("div",{className:"tb_w_re_social_action_counts__",style:a,children:c.ZQ?e.comment_count:1===o?"Reply":"Comment"})]})}):null,1===o?(0,d.jsx)("div",{className:"tb_w_re_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>s(t,(()=>window.open("https://twitter.com/intent/retweet?tweet_id=".concat((0,g.ok)(e.postId)),"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_w_re_social_action_ico__ tb__icon tb-retweet",style:a,children:" "}),(0,d.jsx)("div",{className:"tb_w_re_social_action_counts__",style:a,children:"Retweet"})]})}):"",l?(0,d.jsx)("div",{className:"tb_w_re_social_action__list",children:(0,d.jsxs)("div",{onClick:t=>s(t,(()=>window.open(e.link,"_blank"))),className:"tb_social_action__ico_wrap",children:[(0,d.jsx)("div",{className:"tb_w_re_social_action_ico__ tb__icon tb-eye",style:a,children:" "}),(0,d.jsx)("div",{className:"tb_w_re_social_action_counts__",style:a,children:"View"})]})}):""]}):""}):"",e.share.status?(0,d.jsxs)("div",{className:"tb_w_re_action_counts_wrap".concat(i.socialAction?"":" tb_w_re_action_share_wrap"),children:[(0,d.jsx)("div",{className:"tb_w_re_action_ico tb__icon tb-share",style:a,children:" "}),(0,d.jsx)("div",{className:"tb_w_re_action_counts",style:a,children:"Share"}),(0,d.jsx)("div",{className:"tb_w_re_share_wrapper_dropdown",children:(0,d.jsxs)("div",{className:"tb_w_re_share_icon_list",children:[e.share.facebook&&(0,d.jsxs)("div",{onClick:t=>s(t,(()=>window.open(e.share.facebook,"_blank"))),className:"tb_w_re_share_list_in",children:[(0,d.jsx)("div",{className:"tb_w_re_share_ico__ tb__icon tb-facebook",children:" "}),(0,d.jsx)("div",{className:"tb_w_re_share_ico_txt",children:"Facebook"})]}),e.share.twitter&&(0,d.jsxs)("div",{onClick:t=>s(t,(()=>window.open(e.share.twitter,"_blank"))),className:"tb_w_re_share_list_in",children:[(0,d.jsx)("div",{className:"tb_w_re_share_ico__ tb__icon tb-twitter"}),(0,d.jsx)("div",{className:"tb_w_re_share_ico_txt",children:"Twitter"})]}),e.share.linkedin&&(0,d.jsxs)("div",{onClick:t=>s(t,(()=>window.open(e.share.linkedin,"_blank"))),className:"tb_w_re_share_list_in",children:[(0,d.jsx)("div",{className:"tb_w_re_share_ico__ tb__icon tb-linkedin",children:" "}),(0,d.jsx)("div",{className:"tb_w_re_share_ico_txt",children:"LinkedIn"})]})]})})]}):""]}):null})},N=t=>{let{itemData:e,personalization:i,adjustWidth:s,ThemeRule:a,clickToShowPopUp:o,itemIndex:n,wallID:r,ownerId:l,onClickToCTA:h,wall:m}=t;const p=2===e.type||3===e.type||4===e.type||5===e.type,u=e.rating>0,N=1===e.type?200:50,f=e.rating>0?"tb_w_re_rating_content":"tb_w_re_content",y=c.ZQ&&(0,g.mD)(5)?"tb_w_re_rating_content_review":"",k=1===e.type&&i.textDecorate?"tb_w_re_text_decoration tb_w_re_text_post":"",I=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),D=!(!(I||a.socialAction||a.shareOption)||c.bX),T=i.trimcontent?(0,g.Sv)(e.content,N):e.content;c.P2||a.spacing;return(0,d.jsx)("div",{id:"tb-cc-post-".concat(e.id),className:"tb_w_re_post_wrapper",style:{width:"".concat(s,"%"),padding:i.padding/2},"tb-network":e.network.icon,children:(0,d.jsxs)("div",{className:"tb_w_re_post_in",onClick:o(n,e),children:[c.ZQ||(0,g.mD)(62)||(0,g.mD)(78)||(0,g.mD)(66)?p?(0,d.jsx)("div",{className:"tb_w_re_post_media_wrapp",children:(0,d.jsx)(b,{itemData:e,wallID:r,wall:m,ownerId:l},"img".concat(n,"_").concat(e.id))}):"":null,(0,d.jsxs)("div",{className:"tb_w_re_contant_wrapper",children:[(0,d.jsx)(_,{ownerId:l,postTime:e.createdAt,author:e.author,network:e.network,font:a,personalization:i,ThemeRule:a}),u&&(0,g.mD)(5)?(0,d.jsxs)("div",{className:"tb_w_re_rating__",children:[(0,d.jsx)(j.Z,{rating:e.rating,network:e.network})," "]}):"",a.hideContent&&1!=e.type||(0,g.mD)(63)?"":(0,d.jsx)(v.default,{item:e,contentClass:"".concat(f," ").concat(y," ").concat(k),content:T,font:a,ThemeRule:a,personalization:i,contentTitle:e.contentTitle}),u&&!(0,g.mD)(5)?(0,d.jsxs)("div",{className:"tb_w_re_rating__",children:[(0,d.jsx)(j.Z,{rating:e.rating,network:e.network})," "]}):""]}),c.ZQ||(0,g.mD)(62)||(0,g.mD)(78)||(0,g.mD)(66)?null:p?(0,d.jsx)("div",{className:"tb_w_re_post_media_wrapp",children:(0,d.jsx)(b,{itemData:e,wallID:r,wall:m,ownerId:l},"img".concat(n,"_").concat(e.id))}):"",D||I||a.shareOption?(0,d.jsxs)("div",{className:"tb_w_re_post_actions",children:[I?(0,d.jsxs)("div",{className:"tb_w_re_post_cta",children:[(0,d.jsx)(x.Z,{ctaClass:"tb_w_re_post_cta_btn",cta:e.cta,item:e,onClickToCTA:h})," "]}):"",D?(0,d.jsx)(w,{itemData:e,ThemeRule:a}):""]}):""]})})};var f=i(43411),y=i(40475),k=i(20678);class I extends s.Component{constructor(){super(...arguments),this.state={postData:[],loadData:1},this.onLoadMasonry=()=>{this.editorHeight()},this.editorHeight=()=>{var t=document.querySelector(".tb_w_re_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight("".concat(e))}}}}componentDidMount(){const{postData:t}=this.props,e=this;this.onLoadMasonry(),window.addEventListener("resize",(function(t){e.editorHeight()}),!0)}componentWillUnmount(){const t=this;window.removeEventListener("resize",(function(e){t.editorHeight()}),!0)}componentWillReceiveProps(t){const{postData:e}=t;this.props.postData!=t.postData&&this.onLoadMasonry()}shouldComponentUpdate(t,e){return this.props.postData!=t.postData}render(){const{postData:t,completeDataObject:e,adjustWidth:i,wall:s,languageSetting:a,clickToShowPopUp:c,onClickToCTA:n}=this.props,{loadData:r}=this.state;return(0,d.jsx)(k.Z,{wall:s,parentId:"tb_marquee",renderID:"roundEdge",children:(0,d.jsx)("div",{id:"tb_marquee",children:(0,d.jsx)(o(),{id:"roundEdge",className:"tb_w_re_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_w_re_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:(null===t||void 0===t?void 0:t.length)>0&&t.map(((o,r)=>{const l=e[o];return(0,d.jsx)(N,{ownerId:s.Wall.owner,itemData:l,itemIndex:r,adjustWidth:1==l.highlight?2*i:i,personalization:s.Personalization,ThemeRule:s.ThemeRule,completeDataObject:e,postData:t,languageSetting:a,wallID:s.Wall.id,clickToShowPopUp:c,onClickToCTA:n,wall:s},"cls_crd_".concat(r,"_").concat(l.id))}))})})})}}const D=(0,f.$j)((t=>({postHeight:t.postHeight.data})),(t=>({managePostHeight:e=>t((0,y.B0)(e))})))(I)},2406:(t,e,i)=>{"use strict";e.Ad=void 0;var s=i(84228);var a=i(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return a.getImageSize}});var o=i(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,i)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const s=i(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((i,a)=>{if("undefined"===typeof window)return a(s.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return a(s.ErrorMessage.URL_IS_NOT_DEFINED);let o=null;const c=new Image;c.addEventListener("load",(()=>{o&&window.clearTimeout(o),i({width:c.naturalWidth,height:c.naturalHeight})})),c.addEventListener("error",(t=>{o&&window.clearTimeout(o),a("".concat(t.type,": ").concat(t.message))})),c.src=t,e.timeout&&(o=window.setTimeout((()=>a(s.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,i){"use strict";var s=this&&this.__awaiter||function(t,e,i,s){return new(i||(i=Promise))((function(a,o){function c(t){try{r(s.next(t))}catch(e){o(e)}}function n(t){try{r(s.throw(t))}catch(e){o(e)}}function r(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(c,n)}r((s=s.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const a=i(47313),o=i(65786);e.useImageSize=(t,e)=>{const[i,c]=(0,a.useState)(null),[n,r]=(0,a.useState)(!1),[l,d]=(0,a.useState)(null);return(0,a.useEffect)((()=>{s(void 0,void 0,void 0,(function*(){r(!0),c(null);try{const{width:i,height:s}=yield(0,o.getImageSize)(t,e);c({width:i,height:s})}catch(l){d(l.toString())}finally{r(!1)}}))}),[t,e]),[i,{loading:n,error:l}]}},50247:()=>{}}]);