(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5919,5867,4261,8342,9239,5790,5810],{89239:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var a=s(47313),i=s(17739),c=s(98935),o=s(46417);class r extends a.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:s}=this.props;return(0,o.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,o.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,i.P)(t.picture),width:44,height:44,onError:e=>{const a="#ffffff"==s.color?"#000":s.color;e.target.src=t.errorPic?t.errorPic:"https://ui-avatars.com/api/?name=".concat(t.name.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":a).replace("#",""),"&color=fff&length=1"),e.target.alt=t.name}}):(0,o.jsx)(c.Z,{authorClass:e,username:t.name,network:s,color:null===s.id?"#000":s.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});var a=s(47313),i=s(46417);const c=t=>{let{username:e,network:s,authorClass:a,errorPic:c}=t;const o="#ffffff"==s.color?"#000":s.color;return(0,i.jsx)("img",{className:"".concat(a,"__"),src:c||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":o).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},o=(0,a.memo)(c)},97915:(t,e,s)=>{"use strict";s.d(e,{Z:()=>_});var a=s(47313),i=s(43411),c=s(83773),o=s(6119),r=s(17739),n=s(46417);const l=(0,c.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),d=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,s=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",a=t.product_price>0||t.product_discount>0?"".concat(s,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(a,"\n        </a>")};class h extends a.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:s}=this.state,a=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return a.status?(0,n.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const i=(0,r.i1)();return(0,n.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(i),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(s==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,n.jsx)("div",{className:"tb_hotspot__ ".concat(0==a.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,n.jsx)(l,{children:(0,n.jsx)(o.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(i),clickable:!0,html:d(t.UgcProduct)})})]},e)}))}):null}}const _=(0,i.$j)((t=>({appData:t.appData})))(h)},84261:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>h});var a=s(47313),i=s(40475),c=s(97915),o=s(2406),r=s(17739),n=s(98501),l=s(35179),d=s(46417);class h extends a.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const s=document.querySelector(".track".concat(this.props.data.id));s&&(s.setAttribute("data-height",e),s.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:s}=await(0,o.Ad)(e.postFileNew);this.setState({paddingBottom:100*s/t,size:{height:parseInt(s),width:parseInt(t)}})}catch(s){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgSize:{...this.state.imgSize,small:t.target.src}});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(s){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,imgSize:{small:t.data.postFileNew,large:t.data.filename,orignal:t.data.file},size:{height:100,width:100},isVisible:!1},this.videoRef=a.createRef()}componentWillMount(){const{data:t,hotspot:e,size:s}=this.props;t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:s})}componentDidMount(){const{data:t,hotspot:e,size:s}=this.props;!s||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:s});try{this.observer=new IntersectionObserver((t=>{let[e]=t;e.isIntersecting&&this.setState({isVisible:e.isIntersecting})}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(a){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{ImageClass:t,data:e,wallID:s,themeID:a,ownerId:o,hotspot:h}=this.props,{imgUrl:_,paddingBottom:p,size:u,fixedPaddingBottom:m,imgSize:b,noPadding:v,isVisible:g}=this.state,x={paddingBottom:"".concat(this.props.size?1==this.props.size?null:m:p,"%")},j={backgroundImage:"url(".concat(b.small,")")};if(u.width>u.height)var f="100%",w="".concat(u.height/u.width*100,"%");else w="100%",f="".concat(u.width/u.height*100,"%");const N=!!(e.hotspot&&e.ugc_products.length>0&&h),k={width:N&&this.props.size?f:null,height:N&&this.props.size?w:null};return(0,d.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:x,ref:this.videoRef,children:[N?(0,d.jsx)("div",{className:"tb_blur_bg_",style:j}):null,(0,d.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:k,children:[N?(0,d.jsx)(c.Z,{product:e.ugc_products}):null,(0,d.jsx)("img",{className:"".concat(t," track").concat(e.id),role:"img",src:g?b.small:e.optmizedImg,srcSet:g?l.bX&&v?"".concat(b.large,", 991w ").concat(b.small,", 480w"):null:e.optmizedImg,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":s,"data-owner-id":o,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":a,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src="".concat(n.do,"/media/images/error/no-image.svg"),(0,i.ht)(t)},alt:(0,r.P)(_)})]})]})}}},81349:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});s(47313);var a=s(35179),i=s(95867),c=s(46417);const o=t=>{const{itemData:e,IconClass:s,isCenter:o,hideVideo:r,show:n}=t,l=3===e.type||5===e.type,d=7===e.network.id,h=!!(e.imageList&&e.imageList.length>0),_=1===e.isAudio,p=!!(e.ugc_products&&e.ugc_products.length>0),u=(0,c.jsx)(i.default,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"}),m=(0,c.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:(0,c.jsx)("div",{})}),b=(0,c.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:(0,c.jsx)("div",{})}),v=(0,c.jsx)("div",{className:"tb__icon tb-".concat(a.bX?"reel-fill tb_reel_ico":"video tb_video_ico"),children:(0,c.jsx)("div",{})}),g=(0,c.jsx)("div",{className:"tb_play_ico tb__icon tb-play",children:(0,c.jsx)("div",{})}),x=(0,c.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:(0,c.jsx)("div",{})}),j=(0,c.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:(0,c.jsx)("div",{})});return n?(0,c.jsxs)(c.Fragment,{children:[o&&(d||l)?(0,c.jsxs)("div",{className:"".concat(s," tb__media_ico_c"),children:[l&&!d?j:"",l&&d?u:""]}):null,p||h||l?(0,c.jsxs)("div",{className:"".concat(s," tb__media_ico_"),children:[p?x:"",h?m:"",o||!l||d||r?"":_?b:a.ZQ?g:v]}):null]}):null}},95867:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var a=s(47313),i=s(35179),c=s(46417);const o=a.memo((t=>{let{network:e,networkClass:s}=t;const a="".concat(s," tb__icon tb_ico_default");switch(e.id){case 1:return(0,c.jsx)("div",{className:"".concat(a," tb-twitter")});case 2:case 18:return(0,c.jsx)("div",{className:"".concat(a," tb-instagram-default"),children:(0,c.jsx)("div",{})});case 3:return(0,c.jsx)("div",{className:"".concat(a," tb-facebook"),children:(0,c.jsx)("div",{})});case 4:return(0,c.jsxs)("div",{className:"".concat(a," tb-google-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})})]});case 5:return(0,c.jsx)("div",{className:"".concat(a," tb-pinterest"),children:(0,c.jsx)("div",{})});case 6:return(0,c.jsxs)("div",{className:"".concat(a," tb-flickr-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 7:return(0,c.jsxs)("div",{className:"".concat(a," tb-youtube-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 8:return(0,c.jsx)("div",{className:"".concat(a," tb-vimeo"),children:(0,c.jsx)("div",{})});case 10:return(0,c.jsx)("div",{className:"".concat(a," tb-linkedin"),children:(0,c.jsx)("div",{})});case 11:return(0,c.jsx)("div",{className:"".concat(a," tb-tumblr"),children:(0,c.jsx)("div",{})});case 12:return(0,c.jsx)("div",{className:"".concat(a," tb-rss"),children:(0,c.jsx)("div",{})});case 15:return(0,c.jsx)("div",{className:"".concat(a," tb-workplace"),children:(0,c.jsx)("div",{})});case 19:return(0,c.jsx)("div",{className:"".concat(a," tb-yelp"),children:(0,c.jsx)("div",{})});case 20:return(0,c.jsxs)("div",{className:"".concat(a," tb-slack-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path8",children:(0,c.jsx)("div",{})})]});case 21:return(0,c.jsx)("div",{className:"".concat(a," tb-yammer"),children:(0,c.jsx)("div",{})});case 23:return(0,c.jsx)("div",{className:"".concat(a," tb-airbnb"),children:(0,c.jsx)("div",{})});case 25:return(0,c.jsx)("div",{className:"".concat(a," tb-soundcloud"),children:(0,c.jsx)("div",{})});case 26:return(0,c.jsxs)("div",{className:"".concat(a," tb-giphy-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})})]});case 28:return i.ZQ?(0,c.jsxs)("div",{className:"".concat(a," tb-capterra-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1"}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2"}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3"}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4"})]}):(0,c.jsxs)("div",{className:"".concat(a," tb-tiktok-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})})]});case 29:return i.ZQ?(0,c.jsx)("div",{className:"".concat(a," tb-etsy"),children:(0,c.jsx)("div",{})}):(0,c.jsx)("div",{className:"".concat(a," tb-onsite-upload"),children:(0,c.jsx)("div",{})});case 30:case 32:return(0,c.jsx)("div",{className:"".concat(a," tb-vk"),children:(0,c.jsx)("div",{})});case 31:return(0,c.jsxs)("div",{className:"".concat(a," tb-tiktok-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})})]});case 33:return(0,c.jsxs)("div",{className:"".concat(a," tb-trustpilot-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 34:return(0,c.jsxs)("div",{className:"".concat(a," tb-amazon-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 35:return(0,c.jsx)("div",{className:"".concat(a," tb-tripadvisor"),children:(0,c.jsx)("div",{})});case 36:return(0,c.jsxs)("div",{className:"".concat(a," tb-tagembed-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})})]});case 37:return(0,c.jsxs)("div",{className:"".concat(a," tb-aliexpress-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})})]});default:return""}}));class r extends a.PureComponent{render(){return(0,c.jsx)(o,{...this.props})}}},25810:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var a=s(47313),i=s(35179),c=s(46417);const o=a.lazy((()=>s.e(5867).then(s.bind(s,95867))));class r extends a.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,isDefault:r,Personalization:n}=this.props,l=!!r&&(7!==t.id&&4!==t.id&&36!==t.id),d=i.ZQ&&36==t.id?"tagembed":t.icon;return l?(0,c.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,c.jsx)("div",{})}):(0,c.jsxs)(a.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:[" ",(0,c.jsx)(o,{network:t,networkClass:e})]})}}},62245:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var a=s(47313),i=s(16390),c=s(17739),o=s(35179),r=s(30584),n=s(46417);class l extends a.PureComponent{constructor(t){super(t),this.contentRef=a.createRef()}componentDidMount(){o.ZQ&&setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:s,font:a,personalization:l,item:d,contentTitle:h,readMore:_,maxLength:p,textAlign:u,maxLines:m,isReadMore:b}=this.props,v={WebkitLineClamp:m,textAlign:s.textAlignment};let g=20==d.network.id||o.bX&&!o.aL?e:(0,c.Fx)(e);12==d.network.id&&(g=(0,i.ZP)(g));const x="".concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):""),j="".concat(t," ").concat(b?"":x);return(0,n.jsxs)("div",{className:j,ref:this.contentRef,style:v,children:[h?(0,n.jsx)("div",{className:"tb_bold_txt__",children:(0,i.ZP)(h)}):null,(0,n.jsx)(r.Z,{data:d,content:g,Personalization:l,ThemeRule:s})]})}}},30584:(t,e,s)=>{"use strict";s.d(e,{Z:()=>d});var a=s(47313),i=s(91523),c=s(16390),o=s(46417);const r=s(77560),n=(t,e)=>(0,o.jsx)(i.default,{style:e&&[66,70].includes(null===e||void 0===e?void 0:e.themeId)?{width:e.fontSize,height:e.fontSize}:null,children:(0,c.ZP)(t)}),l=t=>{let{data:e,content:s,Personalization:a,ThemeRule:i}=t;const l={color:a.hashtag_color,fontWeight:"bold",backgroundColor:1==a.hashtag_background_status?a.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,o.jsx)(o.Fragment,{children:1===a.hashtag_highlight&&0===a.hashtag_feed&&0===a.hashtag_all?(0,c.ZP)(s):1===a.hashtag_highlight&&0===a.hashtag_feed&&1===a.hashtag_all?n(window.slackdown.parse(r(s,/#(\w+)/g,((t,e)=>(0,o.jsxs)("div",{className:"tb_text_hashtag",style:l,children:["#",t]}))),e.slackMember),i):1===a.hashtag_highlight&&1===a.hashtag_feed&&0===a.hashtag_all?n(window.slackdown.parse(r(s,e.hash.hashString,((t,e)=>(0,o.jsx)("div",{className:"tb_text_hashtag",style:l,children:t}))),e.slackMember),i):1===a.hashtag_highlight&&1===a.hashtag_feed&&1===a.hashtag_all?n(window.slackdown.parse(r(s,/#(\w+)/g,((t,s)=>(0,o.jsxs)("div",{className:"tb_text_hashtag",style:l,children:["#",t]},"".concat(e.id,"_").concat(s)))),e.slackMember),i):n(window.slackdown.parse(s,e.slackMember),i)}):(0,o.jsx)(o.Fragment,{children:1===a.hashtag_highlight&&0===a.hashtag_feed&&0===a.hashtag_all?(0,c.ZP)(s):1===a.hashtag_highlight&&0===a.hashtag_feed&&1===a.hashtag_all?r((0,c.ZP)(s),/#(\w+)/g,((t,e)=>(0,o.jsxs)("div",{className:"tb_text_hashtag",style:l,children:["#",t]}))):1===a.hashtag_highlight&&1===a.hashtag_feed&&0===a.hashtag_all?r((0,c.ZP)(s),e.hash.hashString,((t,e)=>(0,o.jsx)("div",{className:"tb_text_hashtag",style:l,children:t}))):1===a.hashtag_highlight&&1===a.hashtag_feed&&1===a.hashtag_all?r((0,c.ZP)(s),/#(\w+)/g,((t,s)=>(0,o.jsxs)("div",{className:"tb_text_hashtag",style:l,children:["#",t]},"".concat(e.id,"_").concat(s)))):n(s,i)})},d=(0,a.memo)(l)},5744:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});var a=s(47313),i=s(40475),c=s(35179),o=s(46417);class r extends a.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:s,wallID:a,ownerId:o}=this.props;e.stopPropagation(),c.ZQ||(0,i.S5)({type:2,action:2,wall:a,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:o}),(0,i.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,o.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,o.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(c.ZQ?"tb-share-fill":"tb-share"),children:(0,o.jsx)("div",{})}),(0,o.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,o.jsx)("div",{className:"tb_share_icon_list",children:(0,o.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,o.jsx)("div",{})})}):"",t.twitter?(0,o.jsx)("div",{className:"tb_share_icon_list",children:(0,o.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,o.jsx)("div",{})})}):"",t.linkedin?(0,o.jsx)("div",{className:"tb_share_icon_list",children:(0,o.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,o.jsx)("div",{})})}):""]})]})}}},55790:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var a=s(47313),i=s(17739),c=s(46417);const o=t=>{const{postTime:e,timeClass:s}=t;return(0,c.jsx)("div",{className:s,children:(0,i.Sy)(e)})},r=(0,a.memo)(o)},12465:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>w});var a=s(47313),i=s(61395),c=s.n(i),o=s(89239),r=s(55790),n=s(46417);const l=t=>{let{author:e,personalization:s,postTime:a,network:i,ThemeRule:c,ownerId:l}=t;const d=e.username&&e.username.length>0?"@".concat(e.username):"",h=!(!s.postAuthor||e.isInstaUser),_=!(!s.postAuthor||!s.postTime||e.isInstaUser);return(0,n.jsx)("div",{className:"tb_gp_author_wrapper",children:(0,n.jsxs)("div",{className:"tb_gp_author",children:[h?(0,n.jsx)(o.default,{author:e,authorClass:"tb_gp_author_profile",network:i}):"",(0,n.jsxs)("div",{className:"tb_gp_author_info",children:[h?(0,n.jsx)("div",{className:"tb_gp_authorname",children:e.name}):"",(0,n.jsxs)("div",{className:"tb_gp_post_info".concat(_?"":" tb_gp_post_info__"),children:[h?(0,n.jsx)("div",{className:"tb_gp_username",children:d}):"",_?(0,n.jsx)("div",{className:"tb_gp_seprator",children:" "}):"",s.postTime?(0,n.jsx)(r.default,{postTime:a,timeClass:"tb_gp_time tb-cTBfont-".concat(c.font_varient),authorColor:c.authorColor}):""]})]})]})})};var d=s(5744),h=s(84261),_=s(81349),p=s(35179);class u extends a.PureComponent{render(){const{itemData:t,wallID:e,themeID:s,ownerId:a}=this.props;return(0,n.jsxs)("div",{className:"tb_gp_media_wrap",children:[(0,n.jsx)(_.Z,{itemData:t,IconClass:"tb_gp_media_icon",position:1,show:!0,isCenter:p.ZQ}),(0,n.jsx)(h.default,{ImageClass:"tb_gp_image",data:t,wallID:e,themeID:s,ownerId:a,size:100})]})}}var m=s(62245),b=s(25810),v=s(17739);class g extends a.PureComponent{constructor(t){super(t),this.cardSize=a.createRef()}componentDidMount(){const t=document.querySelector(".tb_gp_post_container");setTimeout((()=>{this.cardSize.current.offsetWidth<250&&t.classList.add("tb_gp_post_wrapper2x"),this.cardSize.current.offsetWidth<120&&t.classList.add("tb_gp_post_wrapper1x"),p.nX&&(0,v.YN)(this.cardSize)}),100)}render(){const{itemData:t,personalization:e,adjustWidth:s,ThemeRule:a,clickToShowPopUp:i,itemIndex:c,wallID:o,ownerId:r,onClickToCTA:h}=this.props,_={width:"".concat(s,"%"),padding:e.padding/2},v=1!==t.type,g=7===t.network.id,x=!!(t.ugc_products&&t.ugc_products.length>0),j=!(!x||0!==t.hotspot),f=!(!t.hotspot||!x),w=0==a.postHover&&p.ig?"light":"dark",N=p.Jx?"tb_gp_color_overlay":"tb_gp_post_overlay-"+w,k={backgroundColor:p.Jx?a.backgroundColor:""};return(0,n.jsx)("div",{id:"tb-gp-post-".concat(t.id),"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,className:"tb_gp_post_wrapper ".concat(p.ZQ?"tb_gp_post_wrapper_te":""),style:_,"tb-network":t.network.id,"tb-product":j?1:f?2:0,tabIndex:"0",role:"article","aria-label":"Post ".concat(parseInt(c)+1,",").concat(t.content),ref:this.cardSize,children:(0,n.jsx)("div",{className:"tb_gp_post_in".concat(p.ZQ?" tb_gp_post_ani":""),onClick:i(c,t),children:(0,n.jsxs)("div",{className:"tb_gp_post_media_wrapp",children:[t.share.status?(0,n.jsx)(d.Z,{share:t.share,shareClass:"tb_gp_share_container",item:t,wallID:o,ownerId:r}):null,v?(0,n.jsx)(u,{itemData:t,wallID:o,themeID:e.widgetTheme,ownerId:r},"img_gly_".concat(t.id)):"",p.ZQ||!g?(0,n.jsx)("div",{className:"tb_gp_contant_".concat(p.ZQ?" tb_gp_hover_content_":""),children:(0,n.jsxs)("div",{className:"tb_gp_contant__in",children:[(0,n.jsxs)("div",{className:"tb_gp_content__",children:[(0,n.jsx)(l,{adjustWidth:s,postTime:t.createdAt,network:t.network,ownerId:r,author:t.author,font:a,personalization:e,ThemeRule:a}),a.hideContent&&1!=t.type?"":(0,n.jsx)(m.default,{item:t,contentClass:"tb_gp_content",content:t.content,font:a,ThemeRule:a,personalization:e,contentTitle:t.contentTitle})]}),(0,n.jsx)("div",{className:"tb_gp_post_overlay ".concat(N),style:k,children:(0,n.jsx)("div",{})})]})}):"",(0,n.jsx)("div",{className:"tb_gp_social_",children:p.ZQ||!g?(0,n.jsx)(b.default,{networkClass:"tb_gp_social__ico",network:t.network,isDefault:1===a.iconType,ThemeRule:a}):""})]})})})}}var x=s(43411),j=s(40475);class f extends a.PureComponent{constructor(){super(...arguments),this.state={postData:[],windowWidth:window.innerWidth,containerWidth:0,loadData:0},this.onLoadMasonry=()=>{var t=document.querySelector(".tb_gp_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight("".concat(e))}}},this.calculationData=(t,e,s,a)=>t>a&&t>a+s?{totalPostBestFit:a+s,isLastRow:!0}:{totalPostBestFit:a,isLastRow:!1}}componentDidMount(){const{postData:t,renderId:e}=this.props;setTimeout((()=>this.setState({postData:t,loadData:1},(()=>this.onLoadMasonry()))),100),e.renderId&&this.setState({windowWidth:document.getElementById(e.renderId).clientWidth})}componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e,loadData:1},(()=>this.onLoadMasonry()))}render(){const{postData:t,completeDataObject:e,adjustWidth:s,wall:a,clickToShowPopUp:i,cardNumber:o,onClickToCTA:r}=this.props,{windowWidth:l,loadData:d}=this.state;var h={totalPostBestFit:0,isLastRow:!1};let _=0===a.ThemeRule.numberOfCoumn?Math.trunc(o)>5?5:Math.trunc(o):a.ThemeRule.numberOfCoumn;if(t.length>parseInt(o)){let e=parseInt(o);4===_?e=9:2===_?e=3:3===_?e=6:5===_&&(e=12),l<768&&(e=parseInt(o));let s=t.length/parseInt(e);h=parseInt(e)*parseInt(s),h=this.calculationData(t.length,e,_,h)}let p=0===a.ThemeRule.numberOfCoumn?Math.trunc(o)>5?5:Math.trunc(o)+1:a.ThemeRule.numberOfCoumn+1;return(0,n.jsx)(c(),{className:"tb_gp_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_gp_post_wrapper",resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:d?t&&t.length>0&&t.map(((t,c)=>{const o=e[t];let l=s;if(3===_&&p===c+1){l=2*s,p=p+2*_}else if(2===_&&p===c+1){l=2*s,p=p+(_+1)}else if(4===_&&p===c+1){l=2*s,p=p+(2*_+1)}else if(5===_&&p===c+1){l=2*s,p=p+(2*_+2)}return parseInt(h.totalPostBestFit)>=parseInt(c+1)?(0,n.jsx)(g,{ownerId:a.Wall.owner,itemData:o,itemIndex:c,adjustWidth:l,personalization:a.Personalization,ThemeRule:a.ThemeRule,clickToShowPopUp:i,wallID:a.Wall.id,onClickToCTA:r},c):0===parseInt(h.totalPostBestFit)?(0,n.jsx)(g,{ownerId:a.Wall.owner,itemData:o,itemIndex:c,adjustWidth:l,personalization:a.Personalization,ThemeRule:a.ThemeRule,clickToShowPopUp:i,wallID:a.Wall.id,onClickToCTA:r},"galry_".concat(o.id)):null})):null})}}const w=(0,x.$j)((t=>({})),(t=>({managePostHeight:e=>t((0,j.B0)(e))})))(f)},2406:(t,e,s)=>{"use strict";e.Ad=void 0;var a=s(84228);var i=s(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return i.getImageSize}});var c=s(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,s)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const a=s(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((s,i)=>{if("undefined"===typeof window)return i(a.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return i(a.ErrorMessage.URL_IS_NOT_DEFINED);let c=null;const o=new Image;o.addEventListener("load",(()=>{c&&window.clearTimeout(c),s({width:o.naturalWidth,height:o.naturalHeight})})),o.addEventListener("error",(t=>{c&&window.clearTimeout(c),i("".concat(t.type,": ").concat(t.message))})),o.src=t,e.timeout&&(c=window.setTimeout((()=>i(a.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,s){"use strict";var a=this&&this.__awaiter||function(t,e,s,a){return new(s||(s=Promise))((function(i,c){function o(t){try{n(a.next(t))}catch(e){c(e)}}function r(t){try{n(a.throw(t))}catch(e){c(e)}}function n(t){var e;t.done?i(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(o,r)}n((a=a.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const i=s(47313),c=s(65786);e.useImageSize=(t,e)=>{const[s,o]=(0,i.useState)(null),[r,n]=(0,i.useState)(!1),[l,d]=(0,i.useState)(null);return(0,i.useEffect)((()=>{a(void 0,void 0,void 0,(function*(){n(!0),o(null);try{const{width:s,height:a}=yield(0,c.getImageSize)(t,e);o({width:s,height:a})}catch(l){d(l.toString())}finally{n(!1)}}))}),[t,e]),[s,{loading:r,error:l}]}},50247:()=>{}}]);