(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3694,5810],{97915:(t,e,i)=>{"use strict";i.d(e,{Z:()=>h});var o=i(47313),a=i(43411),s=i(83773),d=i(6119),r=i(17739),n=i(46417);const c=(0,s.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),l=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,i=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",o=t.product_price>0||t.product_discount>0?"".concat(i,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(o,"\n        </a>")};class p extends o.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:i}=this.state,o=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return o.status?(0,n.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const a=(0,r.i1)();return(0,n.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(a),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(i==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,n.jsx)("div",{className:"tb_hotspot__ ".concat(0==o.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,n.jsx)(c,{children:(0,n.jsx)(d.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(a),clickable:!0,html:l(t.UgcProduct)})})]},e)}))}):null}}const h=(0,a.$j)((t=>({appData:t.appData})))(p)},84261:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>p});var o=i(47313),a=i(40475),s=i(97915),d=i(2406),r=i(17739),n=i(98501),c=i(35179),l=i(46417);class p extends o.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const i=document.querySelector(".track".concat(this.props.data.id));i&&(i.setAttribute("data-height",e),i.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:i}=await(0,d.Ad)(e.postFileNew);this.setState({paddingBottom:100*i/t,size:{height:parseInt(i),width:parseInt(t)}})}catch(i){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgSize:{...this.state.imgSize,small:t.target.src}});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(i){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,imgSize:{small:t.data.postFileNew,large:t.data.filename,orignal:t.data.file},size:{height:100,width:100}}}componentWillMount(){const{data:t,hotspot:e,size:i}=this.props;t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:i})}componentDidMount(){const{data:t,hotspot:e,size:i}=this.props;!i||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:i})}render(){const{ImageClass:t,data:e,wallID:i,themeID:o,ownerId:d,hotspot:p}=this.props,{imgUrl:h,paddingBottom:u,size:g,fixedPaddingBottom:m,imgSize:_,noPadding:b}=this.state,f={paddingBottom:"".concat(this.props.size?1==this.props.size?null:m:u,"%")},v={backgroundImage:"url(".concat(_.small,")")};if(g.width>g.height)var y="100%",w="".concat(g.height/g.width*100,"%");else w="100%",y="".concat(g.width/g.height*100,"%");const k=!!(e.hotspot&&e.ugc_products.length>0&&p),x={width:k&&this.props.size?y:null,height:k&&this.props.size?w:null};return(0,l.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:f,children:[k?(0,l.jsx)("div",{className:"tb_blur_bg_",style:v}):null,(0,l.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:x,children:[k?(0,l.jsx)(s.Z,{product:e.ugc_products}):null,(0,l.jsx)("img",{className:"".concat(t," track").concat(e.id),role:"img",src:_.small,srcSet:c.bX&&b?"".concat(_.large,", 991w ").concat(_.small,", 480w"):null,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":i,"data-owner-id":d,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":o,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(n.do,"/media/images/no-image.svg"),(0,a.ht)(t)},alt:(0,r.P)(h)})]})]})}}},19981:(t,e,i)=>{"use strict";i.d(e,{Z:()=>g});var o=i(47313),a=i(2406),s=i(20510),d=i.n(s),r=i(40475),n=i(35179),c=(i(17739),i(35969)),l=(i(83736),i(46417));const p=t=>{const e=o.useRef(null),i=o.useRef(null),{options:a,onReady:s,className:d}=t;return o.useEffect((()=>{if(i.current){const t=i.current;t.autoplay(a.autoplay),t.src(a.sources)}else{const t=document.createElement("video-js");t.classList.add("vjs-big-play-centered"),t.classList.add(d),e.current.appendChild(t);const o=i.current=(0,c.Z)(t,a,(()=>{c.Z.log("player is ready"),s&&s(o)}))}}),[a,e]),o.useEffect((()=>{const t=i.current;return()=>{t&&!t.isDisposed()&&(t.dispose(),i.current=null)}}),[i]),(0,l.jsx)("div",{"data-vjs-player":!0,children:(0,l.jsx)("div",{ref:e})})},h=t=>{console.log("props",t);const e=o.useRef(null),i={loop:!0,muted:!0,autoplay:!0,controls:!0,responsive:!0,fluid:!0,poster:t.poster,preload:"metadata",sources:[{src:t.src,type:"video/mp4"}]};return(0,l.jsx)(p,{options:i,onReady:t=>{e.current=t,t.on("waiting",(()=>{c.Z.log("player is waiting")})),t.on("dispose",(()=>{c.Z.log("player will dispose")}))},className:t.className})},u=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class g extends o.Component{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:i}=await(0,a.Ad)(e.postFileNew);this.setState({paddingBottom:100*i/t})}catch(i){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=o.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));if(e){var i=e.play();void 0!==i&&i.then((t=>{})).catch((t=>{}))}this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(o){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}shouldComponentUpdate(t,e){return this.props!=t}render(){const{VideoClass:t,data:e,wallID:i,isCover:o,controls:a,autoPlay:s,handleVideoEnded:c,muted:p,themeID:g}=this.props,{paddingBottom:m,videoLoaded:_,isVisible:b}=this.state,f={small:e.postFileNew,large:e.filename,orignal:e.file},v=[74,76,77].includes(g),y={paddingBottom:"".concat(v&&n.bX?null:m,"%")},w=e.mediaUrl;return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:y,ref:this.videoRef,"data-play":s?"true":"false",children:n.aL?(0,l.jsx)(d(),{className:"".concat(t," video").concat(e.id),url:u(w,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":i,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{autoplay:!0,preload:"auto","data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{forceVideo:!0,attributes:{preload:"auto",autoplay:!0}}},loop:!0,onError:t=>{e.stories&&0!=e.stories||(0,r.ib)(t,e.id)},preload:"auto",autoPlay:s,muted:p,volume:s?1:0,playsinline:!0,onReady:t=>{n.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:n.ig?b:s,height:"100%",width:"100%",controls:a||!1,style:{backgroundImage:"url(".concat(v?f.large:f.small,")"),backgroundSize:o?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}):(0,l.jsx)(h,{poster:v?f.large:f.small,id:"video_p_".concat(e.id),className:"".concat(t),src:u(w,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":i,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,loop:!0,onError:t=>{e.stories&&0!=e.stories||(0,r.ib)(t,e.id)},preload:"auto",autoplay:!0,muted:!0,playsinline:!0,playing:!0,height:"100%",width:"100%",controls:!0,style:{backgroundImage:"url(".concat(v?f.large:f.small,")"),backgroundSize:o?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"}})})}}},25810:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>r});var o=i(47313),a=i(35179),s=i(46417);const d=o.lazy((()=>i.e(5867).then(i.bind(i,95867))));class r extends o.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:i,isDefault:r,Personalization:n}=this.props,c=!!r&&(7!==t.id&&4!==t.id&&36!==t.id),l=a.ZQ&&36==t.id?"tagembed":t.icon;return c?(0,s.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(l.replace(/fa-/g,"")),children:(0,s.jsx)("div",{})}):(0,s.jsxs)(o.Suspense,{fallback:(0,s.jsx)(s.Fragment,{}),children:[" ",(0,s.jsx)(d,{network:t,networkClass:e})]})}}},11502:(t,e,i)=>{"use strict";i.d(e,{Z:()=>s});var o=i(17739),a=i(46417);const s=t=>{let{ThemeRule:e,btnClass:i}=t;const s={fontFamily:e.css_font};return(0,a.jsx)("div",{className:"tb_shop_btn_wrap ".concat(i),children:(0,a.jsx)("div",{className:"tb_shop_btn".concat(e.postHover||(0,o.mD)(4)||(0,o.mD)(55)?" tb_shop_btn_light":" tb_shop_btn_dark"),style:s,children:e.shoppingText})})}},24235:(t,e,i)=>{"use strict";i.d(e,{Z:()=>s});var o=i(17739),a=i(46417);const s=t=>{let{count:e}=t;return(0,a.jsxs)("div",{className:"tb_r_view",children:[(0,a.jsx)("div",{className:"tb__icon tb-eye",children:(0,a.jsx)("div",{})}),(0,o.sy)(e)]})}},61729:(t,e,i)=>{"use strict";var o=i(79165);function a(){}function s(){}s.resetWarningCache=a,t.exports=function(){function t(t,e,i,a,s,d){if(d!==o){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function e(){return t}t.isRequired=t;var i={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:s,resetWarningCache:a};return i.PropTypes=i,i}},75192:(t,e,i)=>{t.exports=i(61729)()},79165:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},65192:()=>{},59606:()=>{},98907:()=>{},25893:()=>{}}]);