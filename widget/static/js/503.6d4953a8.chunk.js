"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[503,5867,5810],{97915:(t,i,e)=>{e.d(i,{Z:()=>_});var s=e(47313),a=e(43411),c=e(83773),o=e(6119),d=e(17739),l=e(46417);const r=(0,c.componentWillAppendToBody)((t=>{let{children:i}=t;return i})),n=t=>{const i=t.product_discount>0?t.product_discount:t.product_price,e=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",s=t.product_price>0||t.product_discount>0?"".concat(e,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(i,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(s,"\n        </a>")};class h extends s.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:i}=this.props,{activeMouse:e}=this.state,s=i&&Object.keys(i).length>0?i.wall.ProductSetting.Hotspot:"";return s.status?(0,l.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,i)=>{const a=(0,d.i1)();return(0,l.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(a),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(i),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(e==i?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,l.jsx)("div",{className:"tb_hotspot__ ".concat(0==s.type?"tb_hotspot_ani__":""),onClick:i=>window.open(t.UgcProduct.product_url,"_blank"),children:i+1}),(0,l.jsx)(r,{children:(0,l.jsx)(o.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(a),clickable:!0,html:n(t.UgcProduct)})})]},i)}))}):null}}const _=(0,a.$j)((t=>({appData:t.appData})))(h)},81349:(t,i,e)=>{e.d(i,{Z:()=>o});e(47313);var s=e(35179),a=e(95867),c=e(46417);const o=t=>{const{itemData:i,IconClass:e,isCenter:o,hideVideo:d,show:l}=t,r=3===i.type||5===i.type,n=7===i.network.id,h=!!(i.imageList&&i.imageList.length>0),_=1===i.isAudio,p=!!(i.ugc_products&&i.ugc_products.length>0),b=(0,c.jsx)(a.default,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"}),m=(0,c.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:(0,c.jsx)("div",{})}),v=(0,c.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:(0,c.jsx)("div",{})}),u=(0,c.jsx)("div",{className:"tb__icon tb-".concat(s.bX?"reel-fill tb_reel_ico":"video tb_video_ico"),children:(0,c.jsx)("div",{})}),x=(0,c.jsx)("div",{className:"tb_play_ico tb__icon tb-play",children:(0,c.jsx)("div",{})}),j=(0,c.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:(0,c.jsx)("div",{})}),g=(0,c.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:(0,c.jsx)("div",{})});return l?(0,c.jsxs)(c.Fragment,{children:[o&&(n||r)?(0,c.jsxs)("div",{className:"".concat(e," tb__media_ico_c"),children:[r&&!n?g:"",r&&n?b:""]}):null,p||h||r?(0,c.jsxs)("div",{className:"".concat(e," tb__media_ico_"),children:[p?j:"",h?m:"",o||!r||n||d?"":_?v:s.ZQ?x:u]}):null]}):null}},84261:(t,i,e)=>{e.r(i),e.d(i,{default:()=>h});var s=e(47313),a=e(40475),c=e(97915),o=e(2406),d=e(17739),l=e(98501),r=e(35179),n=e(46417);class h extends s.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,i)=>{const e=document.querySelector(".track".concat(this.props.data.id));e&&(e.setAttribute("data-height",i),e.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:i}=this.props;if(i&&Object.keys(i).length>0&&[2,4,5,3].includes(i.type))if(i.mediaHeight&&""!=i.mediaHeight&&i.mediaWidth&&""!=i.mediaWidth)this.setState({paddingBottom:100*i.mediaHeight/i.mediaWidth,size:{height:parseInt(i.mediaHeight),width:parseInt(i.mediaWidth)}});else try{const{width:t,height:e}=await(0,o.Ad)(i.postFileNew);this.setState({paddingBottom:100*e/t,size:{height:parseInt(e),width:parseInt(t)}})}catch(e){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:i}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgSize:{...this.state.imgSize,small:t.target.src}});try{i.mediaHeight&&""!=i.mediaHeight&&i.mediaWidth&&""!=i.mediaWidth?this.onSetHeightWithWidth(i.mediaWidth,i.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(e){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,imgSize:{small:t.data.postFileNew,large:t.data.filename,orignal:t.data.file},size:{height:100,width:100}}}componentWillMount(){const{data:t,hotspot:i,size:e}=this.props;t.hotspot&&t.ugc_products.length>0&&i?this.onMediaLoad():this.setState({paddingBottom:e})}componentDidMount(){const{data:t,hotspot:i,size:e}=this.props;!e||t.hotspot&&t.ugc_products.length>0&&i?this.onMediaLoad():this.setState({fixedPaddingBottom:e})}render(){const{ImageClass:t,data:i,wallID:e,themeID:s,ownerId:o,hotspot:h}=this.props,{imgUrl:_,paddingBottom:p,size:b,fixedPaddingBottom:m,imgSize:v,noPadding:u,isVisible:x}=this.state,j={paddingBottom:"".concat(this.props.size?1==this.props.size?null:m:p,"%")},g={backgroundImage:"url(".concat(v.small,")")};if(b.width>b.height)var N="100%",f="".concat(b.height/b.width*100,"%");else f="100%",N="".concat(b.width/b.height*100,"%");const w=!!(i.hotspot&&i.ugc_products.length>0&&h),y={width:w&&this.props.size?N:null,height:w&&this.props.size?f:null};return(0,n.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(i.id),style:j,ref:this.videoRef,children:[w?(0,n.jsx)("div",{className:"tb_blur_bg_",style:g}):null,(0,n.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:y,children:[w?(0,n.jsx)(c.Z,{product:i.ugc_products}):null,(0,n.jsx)("img",{className:"".concat(t," track").concat(i.id),role:"img",src:v.small,srcSet:r.bX&&u?"".concat(v.large,", 991w ").concat(v.small,", 480w"):null,height:300,width:300,"data-link":i.link,"data-load":"0","data-network":i.network.id,"data-wall-id":e,"data-owner-id":o,"data-item-id":i.id,"data-feed-id":i.feedId?i.feedId:"","data-filter-id":i.filterId,"theme-id":s,onLoad:this.onLoad,onError:i.stories?null:t=>{t.target.src="".concat(l.do,"/media/images/error/no-image.svg"),(0,a.ht)(t)},alt:(0,d.P)(_)})]})]})}}},64442:(t,i,e)=>{e.d(i,{Z:()=>_});var s=e(47313),a=e(2406),c=e(20510),o=e.n(c),d=e(40475),l=e(35179),r=(e(17739),e(46417));const n=(t,i)=>{if(25===i){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class h extends s.Component{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:i}=this.props;if(i&&Object.keys(i).length>0&&[4,5,3].includes(i.type))if(i.mediaHeight&&""!=i.mediaHeight&&i.mediaWidth&&""!=i.mediaWidth)this.setState({paddingBottom:100*i.mediaHeight/i.mediaWidth});else try{const{width:t,height:e}=await(0,a.Ad)(i.postFileNew);this.setState({paddingBottom:100*e/t})}catch(e){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=s.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let i=document.querySelector("#video_p_".concat(t.id));i&&(i.play(),i.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let i=document.querySelector("#video_p_".concat(t.id));i&&(i.play(),i.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[i]=t;this.setState({isVisible:i.isIntersecting})}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(e){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:i,wallID:e,isCover:s,controls:a,autoPlay:c,handleVideoEnded:h,muted:_,themeID:p,intervalTime:b}=this.props,{paddingBottom:m,videoLoaded:v,isVisible:u}=this.state,x={small:i.postFileNew,large:i.filename,orignal:i.file},j=[74,76,77].includes(p),g={paddingBottom:"".concat(j&&l.bX?null:m,"%")},N=null!==i&&void 0!==i&&i.loopStop?i.mediaUrl:i.mediaClip&&String(i.mediaClip).length>0?i.mediaClip:i.mediaUrl;return(0,r.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(i.id),style:g,ref:this.videoRef,children:(0,r.jsx)(o(),{className:"".concat(t," video").concat(i.id),url:n(N,i.network.id),"data-type":"video","data-network":i.network.id,"data-link":i.link,"data-wall-id":e,"data-item-id":i.id,"data-feed-id":i.feedId?i.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata",poster:j?x.large:x.small}}},loop:!(l.bX&&!l.aL&&null!==i&&void 0!==i&&i.loopStop),onError:t=>{!l.P2||i.stories&&0!=i.stories||(0,d.ib)(t,i.id),j&&h&&setTimeout((()=>{h()}),1e3*b)},autoPlay:l.bX?u:c,muted:_,volume:c?1:0,playsinline:!0,onReady:t=>{l.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:l.ig||l.bX?u:c,height:"100%",width:"100%",controls:a||!1,style:{backgroundImage:"url(".concat(j?x.large:x.small,")"),backgroundSize:s?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})})}}const _=(0,s.memo)(h)},95867:(t,i,e)=>{e.r(i),e.d(i,{default:()=>d});var s=e(47313),a=e(35179),c=e(46417);const o=s.memo((t=>{let{network:i,networkClass:e}=t;const s="".concat(e," tb__icon tb_ico_default");switch(i.id){case 1:return(0,c.jsx)("div",{className:"".concat(s," tb-twitter")});case 2:case 18:return(0,c.jsx)("div",{className:"".concat(s," tb-instagram-default"),children:(0,c.jsx)("div",{})});case 3:return(0,c.jsx)("div",{className:"".concat(s," tb-facebook"),children:(0,c.jsx)("div",{})});case 4:return(0,c.jsxs)("div",{className:"".concat(s," tb-google-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})})]});case 5:return(0,c.jsx)("div",{className:"".concat(s," tb-pinterest"),children:(0,c.jsx)("div",{})});case 6:return(0,c.jsxs)("div",{className:"".concat(s," tb-flickr-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 7:return(0,c.jsxs)("div",{className:"".concat(s," tb-youtube-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 8:return(0,c.jsx)("div",{className:"".concat(s," tb-vimeo"),children:(0,c.jsx)("div",{})});case 10:return(0,c.jsx)("div",{className:"".concat(s," tb-linkedin"),children:(0,c.jsx)("div",{})});case 11:return(0,c.jsx)("div",{className:"".concat(s," tb-tumblr"),children:(0,c.jsx)("div",{})});case 12:return(0,c.jsx)("div",{className:"".concat(s," tb-rss"),children:(0,c.jsx)("div",{})});case 15:return(0,c.jsx)("div",{className:"".concat(s," tb-workplace"),children:(0,c.jsx)("div",{})});case 19:return(0,c.jsx)("div",{className:"".concat(s," tb-yelp"),children:(0,c.jsx)("div",{})});case 20:return(0,c.jsxs)("div",{className:"".concat(s," tb-slack-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path8",children:(0,c.jsx)("div",{})})]});case 21:return(0,c.jsx)("div",{className:"".concat(s," tb-yammer"),children:(0,c.jsx)("div",{})});case 23:return(0,c.jsx)("div",{className:"".concat(s," tb-airbnb"),children:(0,c.jsx)("div",{})});case 25:return(0,c.jsx)("div",{className:"".concat(s," tb-soundcloud"),children:(0,c.jsx)("div",{})});case 26:return(0,c.jsxs)("div",{className:"".concat(s," tb-giphy-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})})]});case 28:return a.ZQ?(0,c.jsxs)("div",{className:"".concat(s," tb-capterra-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1"}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2"}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3"}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4"})]}):(0,c.jsxs)("div",{className:"".concat(s," tb-tiktok-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})})]});case 29:return a.ZQ?(0,c.jsx)("div",{className:"".concat(s," tb-etsy"),children:(0,c.jsx)("div",{})}):(0,c.jsx)("div",{className:"".concat(s," tb-onsite-upload"),children:(0,c.jsx)("div",{})});case 30:case 32:return(0,c.jsx)("div",{className:"".concat(s," tb-vk"),children:(0,c.jsx)("div",{})});case 31:return(0,c.jsxs)("div",{className:"".concat(s," tb-tiktok-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})})]});case 33:return(0,c.jsxs)("div",{className:"".concat(s," tb-trustpilot-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 34:return(0,c.jsxs)("div",{className:"".concat(s," tb-amazon-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 35:return(0,c.jsx)("div",{className:"".concat(s," tb-tripadvisor"),children:(0,c.jsx)("div",{})});case 36:return(0,c.jsxs)("div",{className:"".concat(s," tb-tagembed-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})})]});case 37:return(0,c.jsxs)("div",{className:"".concat(s," tb-aliexpress-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})})]});default:return""}}));class d extends s.PureComponent{render(){return(0,c.jsx)(o,{...this.props})}}},25810:(t,i,e)=>{e.r(i),e.d(i,{default:()=>d});var s=e(47313),a=e(35179),c=e(46417);const o=s.lazy((()=>e.e(5867).then(e.bind(e,95867))));class d extends s.PureComponent{render(){const{network:t,networkClass:i,ThemeRule:e,isDefault:d,Personalization:l}=this.props,r=!!d&&(7!==t.id&&4!==t.id&&36!==t.id),n=a.ZQ&&36==t.id?"tagembed":t.icon;return r?(0,c.jsx)("div",{className:"".concat(i," tb__icon tb-").concat(n.replace(/fa-/g,"")),children:(0,c.jsx)("div",{})}):(0,c.jsxs)(s.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:[" ",(0,c.jsx)(o,{network:t,networkClass:i})]})}}},11502:(t,i,e)=>{e.d(i,{Z:()=>c});var s=e(17739),a=e(46417);const c=t=>{let{ThemeRule:i,btnClass:e}=t;const c={fontFamily:i.css_font};return(0,a.jsx)("div",{className:"tb_shop_btn_wrap ".concat(e),children:(0,a.jsx)("div",{className:"tb_shop_btn".concat(i.postHover||(0,s.mD)(4)||(0,s.mD)(55)?" tb_shop_btn_light":" tb_shop_btn_dark"),style:c,children:i.shoppingText})})}},37210:()=>{}}]);