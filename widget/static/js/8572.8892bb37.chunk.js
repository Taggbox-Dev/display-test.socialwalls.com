"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[8572,5867,4261,9239,5790,5810],{20678:(t,e,i)=>{i.d(e,{Z:()=>m});var s,a,o=i(47313),c=i(35179),r=i(46417),l=!1,n=0,d=0,_=0;const h=t=>{var e;return null!==(e={80:60,70:40,50:30,30:20,20:10}[t])&&void 0!==e?e:20};class p extends o.Component{constructor(){var t;super(...arguments),t=this,this.state={slideWall:0},this.onLoadScroll=()=>{if(!c.aL){const{wall:t}=this.props;window.clearData=this.clearData;const e=document.querySelector(".tb_app_container");null===e||void 0===e||e.addEventListener("wheel",(t=>t.preventDefault()),{passive:!1}),d=setTimeout((()=>this.scrollDiv_init(t.ThemeRule.themeId)),500)}},this.scrollDiv_init=t=>{const{slideWall:e}=this.state,{parentId:i}=this.props;e||(a=document.getElementById(i),63==t&&(l=!1),(a||{}).scrollTop=0,n=0,this.onScrollData(),this.onScrollWPosts())},this.onScrollData=()=>{const{wall:t}=this.props,e=t.Personalization.scrollDelay;if(e){const t=h(e);_=setInterval(this.scrollDiv,t)}},this.onScrollWPosts=()=>{const{themeHeight:t,wall:e,renderID:i,parentId:s}=this.props,a=document.getElementById(s),o=document.getElementById(i);var r=document.querySelector(".tb_theme_container");if(r=window.getComputedStyle(r).getPropertyValue("height"),o)if(window.innerHeight>o.clientHeight)o.style="position: relative; margin-bottom: ".concat(window.innerHeight,"px; min-height: ").concat(o.clientHeight,"px");else{t&&c.bX&&window.editor;a.style="height:".concat(r)}},this.scrollDiv=()=>{const{themeId:t}=this.props.wall.ThemeRule;_&&clearInterval(_);const e=a||{};l?63===t?(e.scrollTop=n--,l=!l||0!==e.scrollTop):(e.scrollTop=n=0,l=!1):(e.scrollTop=n++,l=e.scrollTop>=e.scrollHeight-e.offsetHeight-300),this.onScrollData()},this.pauseDiv=()=>{clearInterval(_),clearTimeout(s),s=setTimeout(this.resumeDiv,5e3)},this.resumeDiv=()=>{var t;const{wall:e,renderID:i}=this.props;a=document.getElementById(i),n=(null===(t=a)||void 0===t?void 0:t.scrollTop)||0,_=setInterval(this.scrollDiv,h(e.Personalization.scrollDelay))},this.clearData=()=>this.clearTime(),this.clearTime=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;t.setState({slideWall:e?0:1}),clearInterval(_),_=0,clearTimeout(s),clearTimeout(d),l=!1,n=0}}componentDidMount(){this.onLoadScroll(),window.addEventListener("resize",(()=>{this.onScrollWPosts()}))}componentDidUpdate(t,e){const{postData:i,wall:s}=t,{ThemeRule:a}=this.props.wall;a.themeId!==s.ThemeRule.themeId&&(l=!1,n=0),i!==this.props.postData&&(this.clearTime(1),this.scrollDiv_init(a.themeId))}componentWillUnmount(){this.clearTime(),window.removeEventListener("resize",(()=>{this.onScrollWPosts()}))}render(){return(0,r.jsx)(r.Fragment,{children:{...this.props.children}})}}const m=(0,o.memo)(p)},89239:(t,e,i)=>{i.r(e),i.d(e,{default:()=>r});var s=i(47313),a=i(17739),o=i(98935),c=i(46417);class r extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:i}=this.props;return(0,c.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,c.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,a.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,c.jsx)(o.Z,{authorClass:e,username:t.name,network:i,color:null===i.id?"#000":i.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,i)=>{i.d(e,{Z:()=>c});var s=i(47313),a=i(46417);const o=t=>{let{username:e,network:i,authorClass:s,errorPic:o}=t;const c="#ffffff"==i.color?"#000":i.color;return(0,a.jsx)("img",{className:"".concat(s,"__"),src:o||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===i.id?"#000":c).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},c=(0,s.memo)(o)},7138:(t,e,i)=>{i.d(e,{Z:()=>c});var s=i(47313),a=i(46417);class o extends s.PureComponent{render(){const{cta:t,ctaClass:e,postCta:i,onClickToCTA:s,item:o}=this.props,c=!(!i||1!==i.status);return(0,a.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),s(o),window.open("".concat(c?i.url:t.url),"_blank")},children:[" ",c?i.text:t.text]})}}const c=o},97915:(t,e,i)=>{i.d(e,{Z:()=>h});var s=i(47313),a=i(43411),o=i(83773),c=i(6119),r=i(17739),l=i(46417);const n=(0,o.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),d=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,i=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",s=t.product_price>0||t.product_discount>0?"".concat(i,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(s,"\n        </a>")};class _ extends s.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:i}=this.state,s=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return s.status?(0,l.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const a=(0,r.i1)();return(0,l.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(a),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(i==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,l.jsx)("div",{className:"tb_hotspot__ ".concat(0==s.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,l.jsx)(n,{children:(0,l.jsx)(c.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(a),clickable:!0,html:d(t.UgcProduct)})})]},e)}))}):null}}const h=(0,a.$j)((t=>({appData:t.appData})))(_)},84261:(t,e,i)=>{i.r(e),i.d(e,{default:()=>_});var s=i(47313),a=i(40475),o=i(97915),c=i(2406),r=i(17739),l=i(98501),n=i(35179),d=i(46417);class _ extends s.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const i=document.querySelector(".track".concat(this.props.data.id));i&&(i.setAttribute("data-height",e),i.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:i}=await(0,c.Ad)(e.postFileNew);this.setState({paddingBottom:100*i/t,size:{height:parseInt(i),width:parseInt(t)}})}catch(i){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgSize:{...this.state.imgSize,small:t.target.src}});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(i){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,imgSize:{small:t.data.postFileNew,large:t.data.filename,orignal:t.data.file},size:{height:100,width:100}}}componentWillMount(){const{data:t,hotspot:e,size:i}=this.props;t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:i})}componentDidMount(){const{data:t,hotspot:e,size:i}=this.props;!i||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:i})}render(){const{ImageClass:t,data:e,wallID:i,themeID:s,ownerId:c,hotspot:_}=this.props,{imgUrl:h,paddingBottom:p,size:m,fixedPaddingBottom:u,imgSize:b,noPadding:v}=this.state,x={paddingBottom:"".concat(this.props.size?1==this.props.size?null:u:p,"%")},j={backgroundImage:"url(".concat(b.small,")")};if(m.width>m.height)var g="100%",w="".concat(m.height/m.width*100,"%");else w="100%",g="".concat(m.width/m.height*100,"%");const f=!!(e.hotspot&&e.ugc_products.length>0&&_),N={width:f&&this.props.size?g:null,height:f&&this.props.size?w:null};return(0,d.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:x,children:[f?(0,d.jsx)("div",{className:"tb_blur_bg_",style:j}):null,(0,d.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:N,children:[f?(0,d.jsx)(o.Z,{product:e.ugc_products}):null,(0,d.jsx)("img",{className:"".concat(t," track").concat(e.id),role:"img",src:b.small,srcSet:n.bX&&v?"".concat(b.large,", 991w ").concat(b.small,", 480w"):null,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":i,"data-owner-id":c,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":s,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(l.do,"/media/images/no-image.svg"),(0,a.ht)(t)},alt:(0,r.P)(h)})]})]})}}},64442:(t,e,i)=>{i.d(e,{Z:()=>_});var s=i(47313),a=i(2406),o=i(20510),c=i.n(o),r=i(40475),l=i(35179),n=(i(17739),i(46417));const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class _ extends s.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:i}=await(0,a.Ad)(e.postFileNew);this.setState({paddingBottom:100*i/t})}catch(i){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=s.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(i){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}shouldComponentUpdate(t,e){return this.props!=t}render(){const{VideoClass:t,data:e,wallID:i,isCover:s,controls:a,autoPlay:o,handleVideoEnded:_,muted:h,themeID:p}=this.props,{paddingBottom:m,videoLoaded:u,isVisible:b}=this.state,v={small:e.postFileNew,large:e.filename,orignal:e.file},x=[74,76,77].includes(p),j={paddingBottom:"".concat(x&&l.bX?null:m,"%")},g=e.mediaUrl;return console.log("mediaClip",e.id,this.state),(0,n.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:j,ref:this.videoRef,"data-play":o?"true":"false",children:(0,n.jsx)(c(),{className:"".concat(t," video").concat(e.id),url:d(g,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":i,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{autoplay:!0,preload:"auto","data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{forceVideo:!0,attributes:{preload:"auto",autoplay:!0}}},loop:!0,onError:t=>{e.stories&&0!=e.stories||(0,r.ib)(t,e.id)},preload:"auto",autoPlay:o,muted:h,volume:o?1:0,playsinline:!0,onReady:t=>{l.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:l.ig?b:o,height:"100%",width:"100%",controls:a||!1,style:{backgroundImage:"url(".concat(x?v.large:v.small,")"),backgroundSize:s?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"}})})}}},81349:(t,e,i)=>{i.d(e,{Z:()=>c});i(47313);var s=i(35179),a=i(95867),o=i(46417);const c=t=>{const{itemData:e,IconClass:i,isCenter:c,hideVideo:r,show:l}=t,n=3===e.type||5===e.type,d=7===e.network.id,_=!!(e.imageList&&e.imageList.length>0),h=1===e.isAudio,p=!!(e.ugc_products&&e.ugc_products.length>0),m=(0,o.jsx)(a.default,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"}),u=(0,o.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:(0,o.jsx)("div",{})}),b=(0,o.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:(0,o.jsx)("div",{})}),v=(0,o.jsx)("div",{className:"tb__icon tb-".concat(s.bX?"reel-fill tb_reel_ico":"video tb_video_ico"),children:(0,o.jsx)("div",{})}),x=(0,o.jsx)("div",{className:"tb_play_ico tb__icon tb-play",children:(0,o.jsx)("div",{})}),j=(0,o.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:(0,o.jsx)("div",{})}),g=(0,o.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:(0,o.jsx)("div",{})});return l?(0,o.jsxs)(o.Fragment,{children:[c&&(d||n)?(0,o.jsxs)("div",{className:"".concat(i," tb__media_ico_c"),children:[n&&!d?g:"",n&&d?m:""]}):null,p||_||n?(0,o.jsxs)("div",{className:"".concat(i," tb__media_ico_"),children:[p?j:"",_?u:"",c||!n||d||r?"":h?b:s.ZQ?x:v]}):null]}):null}},95867:(t,e,i)=>{i.r(e),i.d(e,{default:()=>r});var s=i(47313),a=i(35179),o=i(46417);const c=s.memo((t=>{let{network:e,networkClass:i}=t;const s="".concat(i," tb__icon tb_ico_default");switch(e.id){case 1:return(0,o.jsx)("div",{className:"".concat(s," tb-twitter")});case 2:case 18:return(0,o.jsx)("div",{className:"".concat(s," tb-instagram-default"),children:(0,o.jsx)("div",{})});case 3:return(0,o.jsx)("div",{className:"".concat(s," tb-facebook"),children:(0,o.jsx)("div",{})});case 4:return(0,o.jsxs)("div",{className:"".concat(s," tb-google-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})})]});case 5:return(0,o.jsx)("div",{className:"".concat(s," tb-pinterest"),children:(0,o.jsx)("div",{})});case 6:return(0,o.jsxs)("div",{className:"".concat(s," tb-flickr-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 7:return(0,o.jsxs)("div",{className:"".concat(s," tb-youtube-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 8:return(0,o.jsx)("div",{className:"".concat(s," tb-vimeo"),children:(0,o.jsx)("div",{})});case 10:return(0,o.jsx)("div",{className:"".concat(s," tb-linkedin"),children:(0,o.jsx)("div",{})});case 11:return(0,o.jsx)("div",{className:"".concat(s," tb-tumblr"),children:(0,o.jsx)("div",{})});case 12:return(0,o.jsx)("div",{className:"".concat(s," tb-rss"),children:(0,o.jsx)("div",{})});case 15:return(0,o.jsx)("div",{className:"".concat(s," tb-workplace"),children:(0,o.jsx)("div",{})});case 19:return(0,o.jsx)("div",{className:"".concat(s," tb-yelp"),children:(0,o.jsx)("div",{})});case 20:return(0,o.jsxs)("div",{className:"".concat(s," tb-slack-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path8",children:(0,o.jsx)("div",{})})]});case 21:return(0,o.jsx)("div",{className:"".concat(s," tb-yammer"),children:(0,o.jsx)("div",{})});case 23:return(0,o.jsx)("div",{className:"".concat(s," tb-airbnb"),children:(0,o.jsx)("div",{})});case 25:return(0,o.jsx)("div",{className:"".concat(s," tb-soundcloud"),children:(0,o.jsx)("div",{})});case 26:return(0,o.jsxs)("div",{className:"".concat(s," tb-giphy-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 28:return a.ZQ?(0,o.jsxs)("div",{className:"".concat(s," tb-capterra-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4"})]}):(0,o.jsxs)("div",{className:"".concat(s," tb-tiktok-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 29:return a.ZQ?(0,o.jsx)("div",{className:"".concat(s," tb-etsy"),children:(0,o.jsx)("div",{})}):(0,o.jsx)("div",{className:"".concat(s," tb-onsite-upload"),children:(0,o.jsx)("div",{})});case 30:case 32:return(0,o.jsx)("div",{className:"".concat(s," tb-vk"),children:(0,o.jsx)("div",{})});case 31:return(0,o.jsxs)("div",{className:"".concat(s," tb-tiktok-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 33:return(0,o.jsxs)("div",{className:"".concat(s," tb-trustpilot-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 34:return(0,o.jsxs)("div",{className:"".concat(s," tb-amazon-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 35:return(0,o.jsx)("div",{className:"".concat(s," tb-tripadvisor"),children:(0,o.jsx)("div",{})});case 36:return(0,o.jsxs)("div",{className:"".concat(s," tb-tagembed-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})})]});case 37:return(0,o.jsxs)("div",{className:"".concat(s," tb-aliexpress-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})})]});default:return""}}));class r extends s.PureComponent{render(){return(0,o.jsx)(c,{...this.props})}}},25810:(t,e,i)=>{i.r(e),i.d(e,{default:()=>r});var s=i(47313),a=i(35179),o=i(46417);const c=s.lazy((()=>i.e(5867).then(i.bind(i,95867))));class r extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:i,isDefault:r,Personalization:l}=this.props,n=!!r&&(7!==t.id&&4!==t.id&&36!==t.id),d=a.ZQ&&36==t.id?"tagembed":t.icon;return n?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,o.jsx)("div",{})}):(0,o.jsxs)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(c,{network:t,networkClass:e})]})}}},90905:(t,e,i)=>{i.d(e,{Z:()=>l});var s=i(47313),a=i(35179),o=i(46417);const c=t=>{let{network:e}=t;const i={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:s,color:c}=i[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,o.jsx)("div",{className:s,style:{color:c},"tb-network":e.id,children:(0,o.jsx)("div",{})})},r=t=>{let{ThemeID:e}=t;const{className:i,color:s}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,o.jsx)("div",{className:i,style:{color:s},"tb-network":e})};class l extends s.PureComponent{render(){const{rating:t,network:e,ThemeID:i}=this.props;return(0,o.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,s)=>i?(0,o.jsx)(r,{ThemeID:i},s):(0,o.jsx)(c,{network:e},s))):null})}}},5744:(t,e,i)=>{i.d(e,{Z:()=>r});var s=i(47313),a=i(40475),o=i(35179),c=i(46417);class r extends s.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:i,wallID:s,ownerId:c}=this.props;e.stopPropagation(),o.ZQ||(0,a.S5)({type:2,action:2,wall:s,feed:i.feedId,post:i.referenceId?i.referenceId:i.id,owner:c}),(0,a.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,c.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,c.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(o.ZQ?"tb-share-fill":"tb-share"),children:(0,c.jsx)("div",{})}),(0,c.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,c.jsx)("div",{className:"tb_share_icon_list",children:(0,c.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,c.jsx)("div",{})})}):"",t.twitter?(0,c.jsx)("div",{className:"tb_share_icon_list",children:(0,c.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,c.jsx)("div",{})})}):"",t.linkedin?(0,c.jsx)("div",{className:"tb_share_icon_list",children:(0,c.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,c.jsx)("div",{})})}):""]})]})}}},32675:(t,e,i)=>{i.d(e,{Z:()=>n});var s=i(47313),a=(i(35179),i(17739)),o=i(46417);const c=(t,e,i)=>1==t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,a.ok)(e)):i,r=(t,e,i)=>1==t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,a.ok)(e)):i,l=t=>{let{arialbl:e,hrefClick:i,Icon:s,count:c}=t;return(0,o.jsx)("div",{className:"tb_social_action__list",children:(0,o.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(i,"_blank")},className:"tb_social_action__ico_wrap",children:[(0,o.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(s),children:" "}),c>0?(0,o.jsx)("div",{className:"tb_social_action_counts__",children:(0,a.sy)(c)}):""]})})};class n extends s.PureComponent{render(){const{itemData:t,ThemeRule:e,actionClass:i,ThemeID:s}=this.props,n={color:3===s?1===e.iconType?e.iconColor:t.network.color:e.fontColor},d=t.network.id,_=3===d||10===d||7===d?"like":"heart",h=!![1,2,3,7,8,9,10,18].includes(d),p=![29,19].includes(d),m=t.network.name?t.network.name:"";return(0,o.jsx)(o.Fragment,{children:29!==d&&26!==d&&23!==d&&6!==d&&5!==d&&11!==d&&12!==d&&15!==d&&20!==d&&21!==d?(0,o.jsx)("div",{className:i,children:(0,o.jsxs)("div",{className:"tb_social_action__",children:[h?(0,o.jsx)(l,{arialbl:m,hrefClick:c(d,t.postId,t.link),Icon:_,iconColorStyle:n,count:t.like_count}):null,p?(0,o.jsx)(l,{arialbl:m,hrefClick:r(d,t.postId,t.link),Icon:"comment",iconColorStyle:n,count:t.comment_count}):null,1===d?(0,o.jsx)(l,{arialbl:m,hrefClick:"https://twitter.com/intent/retweet?tweet_id=".concat((0,a.ok)(t.postId)),Icon:"retweet",iconColorStyle:n,count:t.comment_count}):null,(0,o.jsx)(l,{arialbl:m,hrefClick:t.link,Icon:"eye",iconColorStyle:n,count:0})]})}):""})}}},55790:(t,e,i)=>{i.r(e),i.d(e,{default:()=>r});var s=i(47313),a=i(17739),o=i(46417);const c=t=>{const{postTime:e,timeClass:i}=t;return(0,o.jsx)("div",{className:i,children:(0,a.Sy)(e)})},r=(0,s.memo)(c)},8572:(t,e,i)=>{i.r(e),i.d(e,{default:()=>C});var s=i(47313),a=i(89239),o=i(55790),c=i(25810),r=i(17739),l=i(46417);const n=t=>{let{author:e,personalization:i,postTime:s,network:n,ThemeRule:d,font:_}=t;const h=e.username&&e.username.length>0?"@".concat(e.username):"",p=!(!i.postAuthor||e.isInstaUser),m=!(!i.postAuthor||!i.postTime||e.isInstaUser),u=!(!d.socialAction||!(0,r.mD)(63));return(0,l.jsxs)("div",{className:"tb_w_f_author_wrapper",children:[(0,l.jsxs)("div",{className:"tb_w_f_author",children:[p?(0,l.jsx)(a.default,{author:e,network:n,authorClass:"tb_w_f_author_profile"}):"",(0,l.jsxs)("div",{className:"tb_w_f_author_info",children:[p?(0,l.jsx)("div",{className:"tb_w_f_authorname",children:e.name}):"",(0,l.jsxs)("div",{className:"tb_w_f_post_info",children:[p?(0,l.jsx)("div",{className:"tb_w_f_username",children:h}):"",m?(0,l.jsx)("div",{className:"tb_w_f_seprator",children:" "}):"",i.postTime?(0,l.jsx)(o.default,{postTime:s,timeClass:"tb_w_f_time tb-cTBfont-".concat(d.font_varient),authorColor:d.authorColor}):""]})]})]}),u?(0,l.jsx)("div",{className:"tb_w_f_social_",children:(0,l.jsx)(c.default,{networkClass:"tb_w_f_social_ico",network:n,ThemeRule:d,isDefault:1===d.iconType})}):""]})};var d=i(35179),_=i(81349),h=i(84261),p=i(64442);const m=s.lazy((()=>i.e(695).then(i.bind(i,10695)))),u=t=>{let{itemData:e,wallID:i,ownerId:a,wall:o}=t;const c=!(!d.ZQ||3!==e.type&&5!==e.type||o.Personalization.mobilePopup||o.Personalization.postFeatured),r=(3===e.type||5===e.type)&&1==o.ThemeRule.autoPlay;return(0,l.jsxs)("div",{className:"tb_w_f_media_wrap",children:[d.aL&&o.Personalization.interactive?(0,l.jsx)(s.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(m,{postId:e.id,wallID:i,UserDetail:o.UserDetail})}):null,d.P2&&!r?(0,l.jsx)(_.Z,{itemData:e,IconClass:"tb_w_c_media_icon",show:d.P2,isCenter:!1}):null,r||c?(0,l.jsx)(p.Z,{VideoClass:"tb_w_f_video",data:e,wallID:i,themeID:o.Personalization.widgetTheme,ownerId:a,size:!1,isCover:!0,controls:!1,autoPlay:!0,muted:!0}):(0,l.jsx)(h.default,{ImageClass:"tb_w_f_image",data:e,wallID:i,themeID:o.Personalization.widgetTheme,ownerId:a,size:!1,ThemeRule:o.ThemeRule,hotspot:!0})]})};var b=i(5744),v=i(7138),x=i(90905),j=i(32675);const g=t=>{let{itemData:e,personalization:i,adjustWidth:s,ThemeRule:a,clickToShowPopUp:o,itemIndex:c,wallID:_,ownerId:h,onClickToCTA:p,wall:m}=t;const g={width:"".concat(s,"%"),padding:i.padding/2},w=2===e.type||3===e.type||4===e.type||5===e.type,f=e.rating>0,N=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),k=!!(e.ugc_products&&e.ugc_products.length>0),I=!(!k||0!==e.hotspot),y=!(!e.hotspot||!k),D=d.bX?{padding:a.spacing}:null;return(0,l.jsx)("div",{id:"tb-cp-post-".concat(e.id),className:"tb_w_f_post_wrapper",style:g,"tb-network":e.network.id,"tb-product":I?1:y?2:0,children:(0,l.jsxs)("div",{className:"tb_w_f_post_in",onClick:o(c,e),style:D,children:[(0,l.jsxs)("div",{className:"tb_w_f_post_media_wrapper",children:[e.share.status?(0,l.jsx)(b.Z,{share:e.share,shareClass:"tb_w_f_share_container",item:e,wallID:_,ownerId:h}):"",w?(0,l.jsx)(u,{itemData:e,wallID:_,ownerId:h,ThemeID:i.widgetTheme,wall:m},"img".concat(c,"_").concat(e.id)):"",d.ZQ&&f?(0,l.jsxs)("div",{className:"tb_w_f_rating__",children:[(0,l.jsx)(x.Z,{rating:e.rating,network:e.network})," "]}):"",N?(0,l.jsxs)("div",{className:"tb_w_f_post_cta",children:[(0,l.jsx)(v.Z,{ctaClass:"tb_w_f_post_cta_btn",cta:e.cta,item:e,onClickToCTA:p})," "]}):""]}),(0,l.jsx)("div",{className:"tb_w_f_contant_wrapper",children:(0,l.jsx)(n,{ownerId:h,postTime:e.createdAt,author:e.author,network:e.network,font:e.font,personalization:i,ThemeRule:a})}),a.socialAction&&!(0,r.mD)(63)?(0,l.jsx)(j.Z,{itemData:e,ThemeRule:a,ThemeID:i.widgetTheme,actionClass:"tb_w_f_social_action__ ".concat(d.ZQ?"tb_w_f_social_action_bg":"","}")}):""]})})};var w=i(43411),f=i(61395),N=i.n(f),k=i(40475),I=i(20678);const y=t=>{let{loadData:e,postData:i,completeDataObject:s,BrandingPosition:a,clickToShowPopUp:o,wall:c,adjustWidth:r,onClickToCTA:n}=t;return e?i&&i.length>0&&i.map(((t,e)=>{const i=s[t];return parseInt(a),(0,l.jsx)(g,{ownerId:c.Wall.owner,itemData:i,itemIndex:e,adjustWidth:1==i.highlight?2*r:r,personalization:c.Personalization,ThemeRule:c.ThemeRule,wallID:c.Wall.id,clickToShowPopUp:o,onClickToCTA:n,wall:c},"Classic_Card_".concat(e,"_").concat(t.id))})):null};class D extends s.PureComponent{constructor(){super(...arguments),this.state={postData:[],loadData:1}}componentDidMount(){const{postData:t}=this.props;this.setState({postData:t,loadData:1})}render(){const{postData:t,completeDataObject:e,adjustWidth:i,wall:s,clickToShowPopUp:a,onClickToCTA:o}=this.props,{loadData:c}=this.state;return(0,l.jsx)(I.Z,{wall:s,parentId:"tb_marquee",renderID:"focus",children:(0,l.jsx)("div",{id:"tb_marquee",children:(0,l.jsx)(N(),{id:"focus",className:"tb_w_f_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_w_f_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:(0,l.jsx)(y,{loadData:c,wall:s,clickToShowPopUp:a,postData:t,completeDataObject:e,BrandingPosition:4,adjustWidth:i,onClickToCTA:o})})})})}}const C=(0,w.$j)((t=>({})),(t=>({managePostHeight:e=>t((0,k.B0)(e))})))(D)},2406:(t,e,i)=>{e.Ad=void 0;var s=i(84228);var a=i(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return a.getImageSize}});var o=i(22537)},84228:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const s=i(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((i,a)=>{if("undefined"===typeof window)return a(s.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return a(s.ErrorMessage.URL_IS_NOT_DEFINED);let o=null;const c=new Image;c.addEventListener("load",(()=>{o&&window.clearTimeout(o),i({width:c.naturalWidth,height:c.naturalHeight})})),c.addEventListener("error",(t=>{o&&window.clearTimeout(o),a("".concat(t.type,": ").concat(t.message))})),c.src=t,e.timeout&&(o=window.setTimeout((()=>a(s.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,i){var s=this&&this.__awaiter||function(t,e,i,s){return new(i||(i=Promise))((function(a,o){function c(t){try{l(s.next(t))}catch(e){o(e)}}function r(t){try{l(s.throw(t))}catch(e){o(e)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(c,r)}l((s=s.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const a=i(47313),o=i(65786);e.useImageSize=(t,e)=>{const[i,c]=(0,a.useState)(null),[r,l]=(0,a.useState)(!1),[n,d]=(0,a.useState)(null);return(0,a.useEffect)((()=>{s(void 0,void 0,void 0,(function*(){l(!0),c(null);try{const{width:i,height:s}=yield(0,o.getImageSize)(t,e);c({width:i,height:s})}catch(n){d(n.toString())}finally{l(!1)}}))}),[t,e]),[i,{loading:r,error:n}]}}}]);