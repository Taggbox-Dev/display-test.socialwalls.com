(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5919,5867,4261,8342,9239,5790,5810],{89239:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var i=s(47313),a=s(17739),o=s(98935),c=s(46417);class n extends i.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){var t;const{author:e,authorClass:s,network:i}=this.props;return(0,c.jsx)("div",{className:s,children:this.state.isAuthorImagevalid?(0,c.jsx)("img",{className:"".concat(s,"__"),src:null!==e&&void 0!==e&&e.picture&&String(null===e||void 0===e?void 0:e.picture).includes("author.png")?" ":null===e||void 0===e||null===(t=e.picture)||void 0===t?void 0:t.replace(/[ ]+/g,""),alt:(0,a.P)(null===e||void 0===e?void 0:e.picture),width:44,height:44,onError:t=>{var s,a;const o="#ffffff"==i.color?"#000":i.color;t.target.src=e.errorPic?e.errorPic:"https://ui-avatars.com/api/?name=".concat(null===e||void 0===e||null===(s=e.name)||void 0===s?void 0:s.replace(/\s/g,""),"&background=").concat(null===(a=String(null===i.id?"#000":o))||void 0===a?void 0:a.replace("#",""),"&color=fff&length=1"),t.target.alt=e.name}}):(0,c.jsx)(o.Z,{authorClass:s,username:e.name,network:i,color:null===i.id?"#000":i.color,errorPic:e.errorPic})},Math.random())}}},98935:(t,e,s)=>{"use strict";s.d(e,{Z:()=>c});var i=s(47313),a=s(46417);const o=t=>{let{username:e,network:s,authorClass:i,errorPic:o}=t;const c="#ffffff"==s.color?"#000":s.color;return(0,a.jsx)("img",{className:"".concat(i,"__"),src:o||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":c).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},c=(0,i.memo)(o)},97915:(t,e,s)=>{"use strict";s.d(e,{Z:()=>_});var i=s(47313),a=s(43411),o=s(83773),c=s(6119),n=s(17739),r=s(46417);const l=(0,o.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),d=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,s=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",i=t.product_price>0||t.product_discount>0?"".concat(s,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(i,"\n        </a>")};class h extends i.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:s}=this.state,i=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return i.status?(0,r.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const a=(0,n.i1)();return(0,r.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(a),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(s==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,r.jsx)("div",{className:"tb_hotspot__ ".concat(0==i.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,r.jsx)(l,{children:(0,r.jsx)(c.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(a),clickable:!0,html:d(t.UgcProduct)})})]},e)}))}):null}}const _=(0,a.$j)((t=>({appData:t.appData})))(h)},81349:(t,e,s)=>{"use strict";s.d(e,{Z:()=>c});s(47313);var i=s(35179),a=s(95867),o=s(46417);const c=t=>{const{itemData:e,IconClass:s,isCenter:c,hideVideo:n,show:r}=t,l=3===e.type||5===e.type,d=7===e.network.id,h=!!(e.imageList&&e.imageList.length>0),_=1===e.isAudio,p=!!(e.ugc_products&&e.ugc_products.length>0),u=(0,o.jsx)(a.default,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"}),m=(0,o.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:(0,o.jsx)("div",{})}),v=(0,o.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:(0,o.jsx)("div",{})}),b=(0,o.jsx)("div",{className:"tb__icon tb-".concat(i.bX?"reel-fill tb_reel_ico":"video tb_video_ico"),children:(0,o.jsx)("div",{})}),g=(0,o.jsx)("div",{className:"tb_play_ico tb__icon tb-play",children:(0,o.jsx)("div",{})}),x=(0,o.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:(0,o.jsx)("div",{})}),j=(0,o.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:(0,o.jsx)("div",{})});return r?(0,o.jsxs)(o.Fragment,{children:[c&&(d||l)?(0,o.jsxs)("div",{className:"".concat(s," tb__media_ico_c"),children:[l&&!d?j:"",l&&d?u:""]}):null,p||h||l?(0,o.jsxs)("div",{className:"".concat(s," tb__media_ico_"),children:[p?x:"",h?m:"",c||!l||d||n?"":_?v:i.ZQ?g:b]}):null]}):null}},84261:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>h});var i=s(47313),a=s(43635),o=s(97915),c=s(2406),n=s(17739),r=s(98501),l=s(35179),d=s(46417);class h extends i.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const s=document.querySelector(".track".concat(this.props.data.id));s&&(s.setAttribute("data-height",e),s.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:s}=await(0,c.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t,size:{height:parseInt(s),width:parseInt(t)}})}catch(s){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgSize:{...this.state.imgSize,small:t.target.src}});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(s){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,imgSize:{small:t.data.postFileNew,large:t.data.filename,orignal:t.data.file},size:{height:100,width:100},isVisible:!1},this.videoRef=i.createRef(),this.observer=null}componentWillMount(){const{data:t,hotspot:e,size:s}=this.props;!s||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:s})}componentDidMount(){const{data:t,hotspot:e,size:s}=this.props;!s||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:s});try{this.observer=new IntersectionObserver((t=>{let[e]=t;e.isIntersecting&&(this.setState({isVisible:e.isIntersecting}),this.observer.disconnect())}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(i){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.observer.disconnect()}render(){const{ImageClass:t,data:e,wallID:s,themeID:i,ownerId:c,hotspot:h}=this.props,{imgUrl:_,paddingBottom:p,size:u,fixedPaddingBottom:m,imgSize:v,noPadding:b,isVisible:g}=this.state,x={paddingBottom:"".concat(this.props.size?1==this.props.size?null:m:p,"%")},j={backgroundImage:"url(".concat(v.small,")")};if(u.width>u.height)var f="100%",w="".concat(u.height/u.width*100,"%");else w="100%",f="".concat(u.width/u.height*100,"%");const N=!!(e.hotspot&&e.ugc_products.length>0&&h),k={width:N&&this.props.size?f:null,height:N&&this.props.size?w:null};return(0,d.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:x,ref:this.videoRef,children:[N?(0,d.jsx)("div",{className:"tb_blur_bg_",style:j}):null,(0,d.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:k,children:[N?(0,d.jsx)(o.Z,{product:e.ugc_products}):null,(0,d.jsx)("img",{className:"".concat(t," track").concat(e.id),role:"img",src:g?v.small:e.optmizedImg,srcSet:g?l.bX&&b?"".concat(v.large,", 991w ").concat(v.small,", 480w"):null:e.optmizedImg,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":s,"data-owner-id":c,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":i,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(r.do,"/media/images/error/no-image.svg"),(0,a.ht)(t)},alt:(0,n.P)(_)})]})]})}}},95867:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var i=s(47313),a=s(35179),o=s(46417);const c=i.memo((t=>{let{network:e,networkClass:s}=t;const i="".concat(s," tb__icon tb_ico_default");switch(e.id){case 1:return(0,o.jsx)("div",{className:"".concat(i," tb-twitter")});case 2:case 18:return(0,o.jsx)("div",{className:"".concat(i," tb-instagram-default"),children:(0,o.jsx)("div",{})});case 3:return(0,o.jsx)("div",{className:"".concat(i," tb-facebook"),children:(0,o.jsx)("div",{})});case 4:return(0,o.jsxs)("div",{className:"".concat(i," tb-google-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})})]});case 5:return(0,o.jsx)("div",{className:"".concat(i," tb-pinterest"),children:(0,o.jsx)("div",{})});case 6:return(0,o.jsxs)("div",{className:"".concat(i," tb-flickr-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 7:return(0,o.jsxs)("div",{className:"".concat(i," tb-youtube-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 8:return(0,o.jsx)("div",{className:"".concat(i," tb-vimeo"),children:(0,o.jsx)("div",{})});case 10:return(0,o.jsx)("div",{className:"".concat(i," tb-linkedin"),children:(0,o.jsx)("div",{})});case 11:return(0,o.jsx)("div",{className:"".concat(i," tb-tumblr"),children:(0,o.jsx)("div",{})});case 12:return(0,o.jsx)("div",{className:"".concat(i," tb-rss"),children:(0,o.jsx)("div",{})});case 15:return(0,o.jsx)("div",{className:"".concat(i," tb-workplace"),children:(0,o.jsx)("div",{})});case 19:return(0,o.jsx)("div",{className:"".concat(i," tb-yelp"),children:(0,o.jsx)("div",{})});case 20:return(0,o.jsxs)("div",{className:"".concat(i," tb-slack-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path8",children:(0,o.jsx)("div",{})})]});case 21:return(0,o.jsx)("div",{className:"".concat(i," tb-yammer"),children:(0,o.jsx)("div",{})});case 23:return(0,o.jsx)("div",{className:"".concat(i," tb-airbnb"),children:(0,o.jsx)("div",{})});case 25:return(0,o.jsx)("div",{className:"".concat(i," tb-soundcloud"),children:(0,o.jsx)("div",{})});case 26:return(0,o.jsxs)("div",{className:"".concat(i," tb-giphy-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 28:return a.ZQ?(0,o.jsxs)("div",{className:"".concat(i," tb-capterra-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3"}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4"})]}):(0,o.jsxs)("div",{className:"".concat(i," tb-tiktok-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 29:return a.ZQ?(0,o.jsx)("div",{className:"".concat(i," tb-etsy"),children:(0,o.jsx)("div",{})}):(0,o.jsx)("div",{className:"".concat(i," tb-onsite-upload"),children:(0,o.jsx)("div",{})});case 30:case 32:return(0,o.jsx)("div",{className:"".concat(i," tb-vk"),children:(0,o.jsx)("div",{})});case 31:return(0,o.jsxs)("div",{className:"".concat(i," tb-tiktok-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,o.jsx)("div",{})})]});case 33:return(0,o.jsxs)("div",{className:"".concat(i," tb-trustpilot-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 34:return(0,o.jsxs)("div",{className:"".concat(i," tb-amazon-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})})]});case 35:return(0,o.jsx)("div",{className:"".concat(i," tb-tripadvisor"),children:(0,o.jsx)("div",{})});case 36:return(0,o.jsxs)("div",{className:"".concat(i," tb-tagembed-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})})]});case 37:return(0,o.jsxs)("div",{className:"".concat(i," tb-aliexpress-default"),children:[(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,o.jsx)("div",{})}),(0,o.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,o.jsx)("div",{})})]});default:return""}}));class n extends i.PureComponent{render(){return(0,o.jsx)(c,{...this.props})}}},25810:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var i=s(47313),a=s(35179),o=s(46417);const c=i.lazy((()=>s.e(5867).then(s.bind(s,95867))));class n extends i.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,isDefault:n,Personalization:r}=this.props,l=!!n&&(7!==(null===t||void 0===t?void 0:t.id)&&4!==(null===t||void 0===t?void 0:t.id)&&36!==(null===t||void 0===t?void 0:t.id)),d=a.ZQ&&36==(null===t||void 0===t?void 0:t.id)?"tagembed":null===t||void 0===t?void 0:t.icon;return l?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(null===d||void 0===d?void 0:d.replace(/fa-/g,"")),children:(0,o.jsx)("div",{})}):(0,o.jsxs)(i.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(c,{network:t,networkClass:e})]})}}},62245:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var i=s(47313),a=s(16390),o=s(17739),c=s(35179),n=s(30584),r=s(46417);class l extends i.PureComponent{constructor(t){super(t),this.contentRef=i.createRef()}componentDidMount(){c.ZQ&&setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){var t,e;const{contentClass:s,content:i,ThemeRule:l,font:d,personalization:h,item:_,contentTitle:p,readMore:u,maxLength:m,textAlign:v,maxLines:b,isReadMore:g}=this.props,x={WebkitLineClamp:b,textAlign:l.textAlignment};let j=20==(null===_||void 0===_||null===(t=_.network)||void 0===t?void 0:t.id)||c.bX&&!c.aL?i:(0,o.Fx)(i);12==(null===_||void 0===_||null===(e=_.network)||void 0===e?void 0:e.id)&&(j=(0,a.ZP)(j));const f="".concat(l.lineTrim?" tb_content_line-".concat(l.lineTrim):""),w="".concat(s," ").concat(g?"":f);return(0,r.jsxs)("div",{className:w,ref:this.contentRef,style:x,children:[p?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,a.ZP)(p)}):null,(0,r.jsx)(n.Z,{data:_,content:j,Personalization:h,ThemeRule:l})]})}}},30584:(t,e,s)=>{"use strict";s.d(e,{Z:()=>d});var i=s(47313),a=s(91523),o=s(16390),c=s(46417);const n=s(77560),r=(t,e)=>(0,c.jsx)(a.default,{style:e&&[66,70].includes(null===e||void 0===e?void 0:e.themeId)?{width:e.fontSize,height:e.fontSize}:null,children:(0,o.ZP)(t)}),l=t=>{var e;let{data:s,content:i,Personalization:a,ThemeRule:l}=t;const d={color:a.hashtag_color,fontWeight:"bold",backgroundColor:1==a.hashtag_background_status?a.hashtag_background_color:"transparent"};return 20==(null===s||void 0===s||null===(e=s.network)||void 0===e?void 0:e.id)&&window.slackdown?(0,c.jsx)(c.Fragment,{children:1===a.hashtag_highlight&&0===a.hashtag_feed&&0===a.hashtag_all?(0,o.ZP)(i):1===a.hashtag_highlight&&0===a.hashtag_feed&&1===a.hashtag_all?r(window.slackdown.parse(n(i,/#(\w+)/g,((t,e)=>(0,c.jsxs)("div",{className:"tb_text_hashtag",style:d,children:["#",t]}))),s.slackMember),l):1===a.hashtag_highlight&&1===a.hashtag_feed&&0===a.hashtag_all?r(window.slackdown.parse(n(i,s.hash.hashString,((t,e)=>(0,c.jsx)("div",{className:"tb_text_hashtag",style:d,children:t}))),s.slackMember),l):1===a.hashtag_highlight&&1===a.hashtag_feed&&1===a.hashtag_all?r(window.slackdown.parse(n(i,/#(\w+)/g,((t,e)=>(0,c.jsxs)("div",{className:"tb_text_hashtag",style:d,children:["#",t]},"".concat(s.id,"_").concat(e)))),s.slackMember),l):r(window.slackdown.parse(i,s.slackMember),l)}):(0,c.jsx)(c.Fragment,{children:1===a.hashtag_highlight&&0===a.hashtag_feed&&0===a.hashtag_all?(0,o.ZP)(i):1===a.hashtag_highlight&&0===a.hashtag_feed&&1===a.hashtag_all?n((0,o.ZP)(i),/#(\w+)/g,((t,e)=>(0,c.jsxs)("div",{className:"tb_text_hashtag",style:d,children:["#",t]}))):1===a.hashtag_highlight&&1===a.hashtag_feed&&0===a.hashtag_all?n((0,o.ZP)(i),s.hash.hashString,((t,e)=>(0,c.jsx)("strong",{className:"tb_text_hashtag",style:d,children:t}))):1===a.hashtag_highlight&&1===a.hashtag_feed&&1===a.hashtag_all?n((0,o.ZP)(i),/#(\w+)/g,((t,e)=>(0,c.jsxs)("div",{className:"tb_text_hashtag",style:d,children:["#",t]},"".concat(s.id,"_").concat(e)))):r(i,l)})},d=(0,i.memo)(l)},5744:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});var i=s(47313),a=s(43635),o=s(35179),c=s(46417);class n extends i.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:s,wallID:i,ownerId:c}=this.props;e.stopPropagation(),o.ZQ||(0,a.S5)({type:2,action:2,wall:i,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:c}),(0,a.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,c.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,c.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(o.ZQ?"tb-share-fill":"tb-share"),children:(0,c.jsx)("div",{})}),(0,c.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,c.jsx)("div",{className:"tb_share_icon_list",children:(0,c.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,c.jsx)("div",{})})}):"",t.twitter?(0,c.jsx)("div",{className:"tb_share_icon_list",children:(0,c.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,c.jsx)("div",{})})}):"",t.linkedin?(0,c.jsx)("div",{className:"tb_share_icon_list",children:(0,c.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,c.jsx)("div",{})})}):""]})]})}}},55790:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var i=s(47313),a=s(17739),o=s(46417);const c=t=>{const{postTime:e,timeClass:s}=t;return(0,o.jsx)("div",{className:s,children:(0,a.Sy)(e)})},n=(0,i.memo)(c)},12465:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>w});var i=s(47313),a=s(61395),o=s.n(a),c=s(89239),n=s(55790),r=s(46417);const l=t=>{let{author:e,personalization:s,postTime:i,network:a,ThemeRule:o,ownerId:l}=t;const d=e.username&&e.username.length>0?"@".concat(e.username):"",h=!(!s.postAuthor||e.isInstaUser),_=!(!s.postAuthor||!s.postTime||e.isInstaUser);return(0,r.jsx)("div",{className:"tb_gp_author_wrapper",children:(0,r.jsxs)("div",{className:"tb_gp_author",children:[h?(0,r.jsx)(c.default,{author:e,authorClass:"tb_gp_author_profile",network:a}):"",(0,r.jsxs)("div",{className:"tb_gp_author_info",children:[h?(0,r.jsx)("div",{className:"tb_gp_authorname",children:e.name}):"",(0,r.jsxs)("div",{className:"tb_gp_post_info".concat(_?"":" tb_gp_post_info__"),children:[h?(0,r.jsx)("div",{className:"tb_gp_username",children:d}):"",_?(0,r.jsx)("div",{className:"tb_gp_seprator",children:" "}):"",s.postTime?(0,r.jsx)(n.default,{postTime:i,timeClass:"tb_gp_time tb-cTBfont-".concat(o.font_varient),authorColor:o.authorColor}):""]})]})]})})};var d=s(5744),h=s(84261),_=s(81349),p=s(35179);class u extends i.PureComponent{render(){const{itemData:t,wallID:e,themeID:s,ownerId:i}=this.props;return(0,r.jsxs)("div",{className:"tb_gp_media_wrap",children:[(0,r.jsx)(_.Z,{itemData:t,IconClass:"tb_gp_media_icon",position:1,show:!0,isCenter:p.ZQ}),(0,r.jsx)(h.default,{ImageClass:"tb_gp_image",data:t,wallID:e,themeID:s,ownerId:i,size:100})]})}}var m=s(62245),v=s(25810),b=s(17739);class g extends i.PureComponent{constructor(t){super(t),this.cardSize=i.createRef()}componentDidMount(){const t=document.querySelector(".tb_gp_post_container");setTimeout((()=>{this.cardSize.current.offsetWidth<250&&t.classList.add("tb_gp_post_wrapper2x"),this.cardSize.current.offsetWidth<120&&t.classList.add("tb_gp_post_wrapper1x"),p.nX&&(0,b.YN)(this.cardSize)}),100)}render(){const{itemData:t,personalization:e,adjustWidth:s,ThemeRule:i,clickToShowPopUp:a,itemIndex:o,wallID:c,ownerId:n,onClickToCTA:h}=this.props,_={width:"".concat(s,"%"),padding:e.padding/2},b=1!==t.type,g=7===t.network.id,x=!!(t.ugc_products&&t.ugc_products.length>0),j=!(!x||0!==t.hotspot),f=!(!t.hotspot||!x),w=0==i.postHover&&p.ig?"light":"dark",N=p.Jx?"tb_gp_color_overlay":"tb_gp_post_overlay-"+w,k={backgroundColor:p.Jx?i.backgroundColor:""};return(0,r.jsx)("div",{id:"tb-gp-post-".concat(t.id),"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,className:"tb_gp_post_wrapper ".concat(p.ZQ?"tb_gp_post_wrapper_te":""),style:_,"tb-network":t.network.id,"tb-product":j?1:f?2:0,tabIndex:"0",role:"article","aria-label":"Post ".concat(parseInt(o)+1,",").concat(t.content),ref:this.cardSize,children:(0,r.jsx)("div",{className:"tb_gp_post_in".concat(p.ZQ?" tb_gp_post_ani":""),onClick:a(o,t),children:(0,r.jsxs)("div",{className:"tb_gp_post_media_wrapp",children:[t.share.status?(0,r.jsx)(d.Z,{share:t.share,shareClass:"tb_gp_share_container",item:t,wallID:c,ownerId:n}):null,b?(0,r.jsx)(u,{itemData:t,wallID:c,themeID:e.widgetTheme,ownerId:n},"img_gly_".concat(t.id)):"",p.ZQ||!g?(0,r.jsx)("div",{className:"tb_gp_contant_".concat(p.ZQ?" tb_gp_hover_content_":""),children:(0,r.jsxs)("div",{className:"tb_gp_contant__in",children:[(0,r.jsxs)("div",{className:"tb_gp_content__",children:[(0,r.jsx)(l,{adjustWidth:s,postTime:t.createdAt,network:t.network,ownerId:n,author:t.author,font:i,personalization:e,ThemeRule:i}),i.hideContent&&1!=t.type?"":(0,r.jsx)(m.default,{item:t,contentClass:"tb_gp_content",content:t.content,font:i,ThemeRule:i,personalization:e,contentTitle:t.contentTitle})]}),(0,r.jsx)("div",{className:"tb_gp_post_overlay ".concat(N),style:k,children:(0,r.jsx)("div",{})})]})}):"",(0,r.jsx)("div",{className:"tb_gp_social_",children:p.ZQ||!g?(0,r.jsx)(v.default,{networkClass:"tb_gp_social__ico",network:t.network,isDefault:1===i.iconType,ThemeRule:i}):""})]})})})}}var x=s(43411),j=s(43635);class f extends i.PureComponent{constructor(){super(...arguments),this.state={postData:[],windowWidth:window.innerWidth,containerWidth:0,loadData:0},this.onLoadMasonry=()=>{var t=document.querySelector(".tb_gp_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight("".concat(e))}}},this.calculationData=(t,e,s,i)=>t>i&&t>i+s?{totalPostBestFit:i+s,isLastRow:!0}:{totalPostBestFit:i,isLastRow:!1}}componentDidMount(){const{postData:t,renderId:e}=this.props;setTimeout((()=>this.setState({postData:t,loadData:1},(()=>this.onLoadMasonry()))),100),e.renderId&&this.setState({windowWidth:document.getElementById(e.renderId).clientWidth})}componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e,loadData:1},(()=>this.onLoadMasonry()))}render(){const{postData:t,completeDataObject:e,adjustWidth:s,wall:i,clickToShowPopUp:a,cardNumber:c,onClickToCTA:n}=this.props,{windowWidth:l,loadData:d}=this.state;var h={totalPostBestFit:0,isLastRow:!1};let _=0===i.ThemeRule.numberOfCoumn?Math.trunc(c)>5?5:Math.trunc(c):i.ThemeRule.numberOfCoumn;if(t.length>parseInt(c)){let e=parseInt(c);4===_?e=9:2===_?e=3:3===_?e=6:5===_&&(e=12),l<768&&(e=parseInt(c));let s=t.length/parseInt(e);h=parseInt(e)*parseInt(s),h=this.calculationData(t.length,e,_,h)}let p=0===i.ThemeRule.numberOfCoumn?Math.trunc(c)>5?5:Math.trunc(c)+1:i.ThemeRule.numberOfCoumn+1;return(0,r.jsx)(o(),{className:"tb_gp_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_gp_post_wrapper",resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:d?t&&t.length>0&&t.map(((t,o)=>{const c=e[t];let l=s;if(3===_&&p===o+1){l=2*s,p=p+2*_}else if(2===_&&p===o+1){l=2*s,p=p+(_+1)}else if(4===_&&p===o+1){l=2*s,p=p+(2*_+1)}else if(5===_&&p===o+1){l=2*s,p=p+(2*_+2)}return parseInt(h.totalPostBestFit)>=parseInt(o+1)?(0,r.jsx)(g,{ownerId:i.Wall.owner,itemData:c,itemIndex:o,adjustWidth:l,personalization:i.Personalization,ThemeRule:i.ThemeRule,clickToShowPopUp:a,wallID:i.Wall.id,onClickToCTA:n},o):0===parseInt(h.totalPostBestFit)?(0,r.jsx)(g,{ownerId:i.Wall.owner,itemData:c,itemIndex:o,adjustWidth:l,personalization:i.Personalization,ThemeRule:i.ThemeRule,clickToShowPopUp:a,wallID:i.Wall.id,onClickToCTA:n},"galry_".concat(c.id)):null})):null})}}const w=(0,x.$j)((t=>({})),(t=>({managePostHeight:e=>t((0,j.B0)(e))})))(f)},2406:(t,e,s)=>{"use strict";e.Ad=void 0;var i=s(84228);var a=s(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return a.getImageSize}});var o=s(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,s)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const i=s(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((s,a)=>{if("undefined"===typeof window)return a(i.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return a(i.ErrorMessage.URL_IS_NOT_DEFINED);let o=null;const c=new Image;c.addEventListener("load",(()=>{o&&window.clearTimeout(o),s({width:c.naturalWidth,height:c.naturalHeight})})),c.addEventListener("error",(t=>{o&&window.clearTimeout(o),a("".concat(t.type,": ").concat(t.message))})),c.src=t,e.timeout&&(o=window.setTimeout((()=>a(i.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,s){"use strict";var i=this&&this.__awaiter||function(t,e,s,i){return new(s||(s=Promise))((function(a,o){function c(t){try{r(i.next(t))}catch(e){o(e)}}function n(t){try{r(i.throw(t))}catch(e){o(e)}}function r(t){var e;t.done?a(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(c,n)}r((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const a=s(47313),o=s(65786);e.useImageSize=(t,e)=>{const[s,c]=(0,a.useState)(null),[n,r]=(0,a.useState)(!1),[l,d]=(0,a.useState)(null);return(0,a.useEffect)((()=>{i(void 0,void 0,void 0,(function*(){r(!0),c(null);try{const{width:s,height:i}=yield(0,o.getImageSize)(t,e);c({width:s,height:i})}catch(l){d(l.toString())}finally{r(!1)}}))}),[t,e]),[s,{loading:n,error:l}]}},50247:()=>{}}]);