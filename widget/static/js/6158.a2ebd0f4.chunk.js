"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[6158,5867],{97915:(t,i,e)=>{e.d(i,{Z:()=>h});var c=e(47313),s=e(43411),a=e(83773),o=e(6119),d=e(17739),r=e(46417);const l=(0,a.componentWillAppendToBody)((t=>{let{children:i}=t;return i})),n=t=>{const i=t.product_discount>0?t.product_discount:t.product_price,e=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",c=t.product_price>0||t.product_discount>0?"".concat(e,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(i,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(c,"\n        </a>")};class _ extends c.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:i}=this.props,{activeMouse:e}=this.state,c=i&&Object.keys(i).length>0?i.wall.ProductSetting.Hotspot:"";return c.status?(0,r.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,i)=>{const s=(0,d.i1)();return(0,r.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(s),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(i),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(e==i?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,r.jsx)("div",{className:"tb_hotspot__ ".concat(0==c.type?"tb_hotspot_ani__":""),onClick:i=>window.open(t.UgcProduct.product_url,"_blank"),children:i+1}),(0,r.jsx)(l,{children:(0,r.jsx)(o.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(s),clickable:!0,html:n(t.UgcProduct)})})]},i)}))}):null}}const h=(0,s.$j)((t=>({appData:t.appData})))(_)},84261:(t,i,e)=>{e.r(i),e.d(i,{default:()=>_});var c=e(47313),s=e(40475),a=e(97915),o=e(2406),d=e(17739),r=e(98501),l=e(35179),n=e(46417);class _ extends c.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,i)=>{const e=document.querySelector(".track".concat(this.props.data.id));e&&(e.setAttribute("data-height",i),e.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:i}=this.props;if(i&&Object.keys(i).length>0&&[2,4,5,3].includes(i.type))if(i.mediaHeight&&""!=i.mediaHeight&&i.mediaWidth&&""!=i.mediaWidth)this.setState({paddingBottom:100*i.mediaHeight/i.mediaWidth,size:{height:parseInt(i.mediaHeight),width:parseInt(i.mediaWidth)}});else try{const{width:t,height:e}=await(0,o.Ad)(i.postFileNew);this.setState({paddingBottom:100*e/t,size:{height:parseInt(e),width:parseInt(t)}})}catch(e){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:i}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgSize:{...this.state.imgSize,small:t.target.src}});try{i.mediaHeight&&""!=i.mediaHeight&&i.mediaWidth&&""!=i.mediaWidth?this.onSetHeightWithWidth(i.mediaWidth,i.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(e){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,imgSize:{small:t.data.postFileNew,large:t.data.filename,orignal:t.data.file},size:{height:100,width:100}}}componentWillMount(){const{data:t,hotspot:i,size:e}=this.props;t.hotspot&&t.ugc_products.length>0&&i?this.onMediaLoad():this.setState({paddingBottom:e})}componentDidMount(){const{data:t,hotspot:i,size:e}=this.props;!e||t.hotspot&&t.ugc_products.length>0&&i?this.onMediaLoad():this.setState({fixedPaddingBottom:e})}render(){const{ImageClass:t,data:i,wallID:e,themeID:c,ownerId:o,hotspot:_}=this.props,{imgUrl:h,paddingBottom:u,size:v,fixedPaddingBottom:b,imgSize:p,noPadding:m}=this.state,x={paddingBottom:"".concat(this.props.size?1==this.props.size?null:b:u,"%")},j={backgroundImage:"url(".concat(p.small,")")};if(v.width>v.height)var g="100%",N="".concat(v.height/v.width*100,"%");else N="100%",g="".concat(v.width/v.height*100,"%");const f=!!(i.hotspot&&i.ugc_products.length>0&&_),w={width:f&&this.props.size?g:null,height:f&&this.props.size?N:null};return(0,n.jsxs)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(i.id),style:x,children:[f?(0,n.jsx)("div",{className:"tb_blur_bg_",style:j}):null,(0,n.jsxs)("div",{className:"".concat(t,"_wrap_in"),style:w,children:[f?(0,n.jsx)(a.Z,{product:i.ugc_products}):null,(0,n.jsx)("img",{className:"".concat(t," track").concat(i.id),role:"img",src:p.small,srcSet:l.bX&&m?"".concat(p.large,", 991w ").concat(p.small,", 480w"):null,height:300,width:300,"data-link":i.link,"data-load":"0","data-network":i.network.id,"data-wall-id":e,"data-owner-id":o,"data-item-id":i.id,"data-feed-id":i.feedId?i.feedId:"","data-filter-id":i.filterId,"theme-id":c,onLoad:this.onLoad,onError:i.stories?null:t=>{t.target.src="".concat(r.do,"/media/images/no-image.svg"),(0,s.ht)(t)},alt:(0,d.P)(h)})]})]})}}},81349:(t,i,e)=>{e.d(i,{Z:()=>o});e(47313);var c=e(35179),s=e(95867),a=e(46417);const o=t=>{const{itemData:i,IconClass:e,isCenter:o,hideVideo:d,show:r}=t,l=3===i.type||5===i.type,n=7===i.network.id,_=!!(i.imageList&&i.imageList.length>0),h=1===i.isAudio,u=!!(i.ugc_products&&i.ugc_products.length>0),v=(0,a.jsx)(s.default,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"}),b=(0,a.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:(0,a.jsx)("div",{})}),p=(0,a.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:(0,a.jsx)("div",{})}),m=(0,a.jsx)("div",{className:"tb_video_ico tb__icon tb-video",children:(0,a.jsx)("div",{})}),x=(0,a.jsx)("div",{className:"tb_play_ico tb__icon tb-play",children:(0,a.jsx)("div",{})}),j=(0,a.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:(0,a.jsx)("div",{})}),g=(0,a.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:(0,a.jsx)("div",{})});return r?(0,a.jsxs)(a.Fragment,{children:[o&&(n||l)?(0,a.jsxs)("div",{className:"".concat(e," tb__media_ico_c"),children:[l&&!n?g:"",l&&n?v:""]}):null,u||_||l?(0,a.jsxs)("div",{className:"".concat(e," tb__media_ico_"),children:[u?j:"",_?b:"",o||!l||n||d?"":h?p:c.ZQ?x:m]}):null]}):null}},95867:(t,i,e)=>{e.r(i),e.d(i,{default:()=>d});var c=e(47313),s=e(35179),a=e(46417);const o=c.memo((t=>{let{network:i,networkClass:e}=t;const c="".concat(e," tb__icon tb_ico_default");switch(i.id){case 1:return(0,a.jsx)("div",{className:"".concat(c," tb-twitter")});case 2:case 18:return(0,a.jsx)("div",{className:"".concat(c," tb-instagram-default"),children:(0,a.jsx)("div",{})});case 3:return(0,a.jsx)("div",{className:"".concat(c," tb-facebook"),children:(0,a.jsx)("div",{})});case 4:return(0,a.jsxs)("div",{className:"".concat(c," tb-google-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,a.jsx)("div",{})})]});case 5:return(0,a.jsx)("div",{className:"".concat(c," tb-pinterest"),children:(0,a.jsx)("div",{})});case 6:return(0,a.jsxs)("div",{className:"".concat(c," tb-flickr-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})})]});case 7:return(0,a.jsxs)("div",{className:"".concat(c," tb-youtube-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})})]});case 8:return(0,a.jsx)("div",{className:"".concat(c," tb-vimeo"),children:(0,a.jsx)("div",{})});case 10:return(0,a.jsx)("div",{className:"".concat(c," tb-linkedin"),children:(0,a.jsx)("div",{})});case 11:return(0,a.jsx)("div",{className:"".concat(c," tb-tumblr"),children:(0,a.jsx)("div",{})});case 12:return(0,a.jsx)("div",{className:"".concat(c," tb-rss"),children:(0,a.jsx)("div",{})});case 15:return(0,a.jsx)("div",{className:"".concat(c," tb-workplace"),children:(0,a.jsx)("div",{})});case 19:return(0,a.jsx)("div",{className:"".concat(c," tb-yelp"),children:(0,a.jsx)("div",{})});case 20:return(0,a.jsxs)("div",{className:"".concat(c," tb-slack-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path8",children:(0,a.jsx)("div",{})})]});case 21:return(0,a.jsx)("div",{className:"".concat(c," tb-yammer"),children:(0,a.jsx)("div",{})});case 23:return(0,a.jsx)("div",{className:"".concat(c," tb-airbnb"),children:(0,a.jsx)("div",{})});case 25:return(0,a.jsx)("div",{className:"".concat(c," tb-soundcloud"),children:(0,a.jsx)("div",{})});case 26:return(0,a.jsxs)("div",{className:"".concat(c," tb-giphy-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,a.jsx)("div",{})})]});case 28:return s.ZQ?(0,a.jsxs)("div",{className:"".concat(c," tb-capterra-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1"}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2"}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3"}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4"})]}):(0,a.jsxs)("div",{className:"".concat(c," tb-tiktok-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,a.jsx)("div",{})})]});case 29:return s.ZQ?(0,a.jsx)("div",{className:"".concat(c," tb-etsy"),children:(0,a.jsx)("div",{})}):(0,a.jsx)("div",{className:"".concat(c," tb-onsite-upload-default"),children:(0,a.jsx)("div",{})});case 30:case 32:return(0,a.jsx)("div",{className:"".concat(c," tb-vk"),children:(0,a.jsx)("div",{})});case 31:return(0,a.jsxs)("div",{className:"".concat(c," tb-tiktok-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,a.jsx)("div",{})})]});case 33:return(0,a.jsxs)("div",{className:"".concat(c," tb-trustpilot-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})})]});case 34:return(0,a.jsxs)("div",{className:"".concat(c," tb-amazon-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})})]});case 35:return(0,a.jsx)("div",{className:"".concat(c," tb-tripadvisor"),children:(0,a.jsx)("div",{})});case 36:return(0,a.jsxs)("div",{className:"".concat(c," tb-tagembed-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})})]});case 37:return(0,a.jsxs)("div",{className:"".concat(c," tb-aliexpress-default"),children:[(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,a.jsx)("div",{})})]});default:return""}}));class d extends c.PureComponent{render(){return(0,a.jsx)(o,{...this.props})}}},2406:(t,i,e)=>{i.Ad=void 0;var c=e(84228);var s=e(65786);Object.defineProperty(i,"Ad",{enumerable:!0,get:function(){return s.getImageSize}});var a=e(22537)},84228:(t,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.ErrorMessage=void 0,i.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,i,e)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.getImageSize=void 0;const c=e(84228);i.getImageSize=function(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((e,s)=>{if("undefined"===typeof window)return s(c.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return s(c.ErrorMessage.URL_IS_NOT_DEFINED);let a=null;const o=new Image;o.addEventListener("load",(()=>{a&&window.clearTimeout(a),e({width:o.naturalWidth,height:o.naturalHeight})})),o.addEventListener("error",(t=>{a&&window.clearTimeout(a),s("".concat(t.type,": ").concat(t.message))})),o.src=t,i.timeout&&(a=window.setTimeout((()=>s(c.ErrorMessage.TIMEOUT)),i.timeout))}))}},22537:function(t,i,e){var c=this&&this.__awaiter||function(t,i,e,c){return new(e||(e=Promise))((function(s,a){function o(t){try{r(c.next(t))}catch(i){a(i)}}function d(t){try{r(c.throw(t))}catch(i){a(i)}}function r(t){var i;t.done?s(t.value):(i=t.value,i instanceof e?i:new e((function(t){t(i)}))).then(o,d)}r((c=c.apply(t,i||[])).next())}))};Object.defineProperty(i,"__esModule",{value:!0}),i.useImageSize=void 0;const s=e(47313),a=e(65786);i.useImageSize=(t,i)=>{const[e,o]=(0,s.useState)(null),[d,r]=(0,s.useState)(!1),[l,n]=(0,s.useState)(null);return(0,s.useEffect)((()=>{c(void 0,void 0,void 0,(function*(){r(!0),o(null);try{const{width:e,height:c}=yield(0,a.getImageSize)(t,i);o({width:e,height:c})}catch(l){n(l.toString())}finally{r(!1)}}))}),[t,i]),[e,{loading:d,error:l}]}}}]);