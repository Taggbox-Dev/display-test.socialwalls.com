(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4408,9239,5790],{34873:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n});var i=r(47313),s=(r(43635),r(2406),r(17739)),a=r(98501),o=r(46417);class n extends i.PureComponent{constructor(t){super(t),this.onLoad=t=>{1==t.target.getAttribute("data-load")&&this.setState({imgUrl:t.target.src,loadError:!1})},this.state={loadError:!1,paddingBottom:100,imgUrl:this.props.media}}componentWillReceiveProps(t){const{itemDetails:e}=t,{loadError:r}=this.state;r&&t!=this.props&&e&&Object.keys(e).length>0&&e.showCart&&this.setState({imgUrl:e.data.featured_image,loadError:!1})}render(){const{ImageClass:t,media:e,itemDetails:r}=this.props,{imgUrl:i,paddingBottom:n}=this.state,c={paddingBottom:"".concat(n,"%")};return(0,o.jsx)("div",{className:"".concat(t,"_wrap mediaHolder"),style:c,children:(0,o.jsx)("img",{className:t,role:"img",src:i,height:300,width:300,onLoad:this.onLoad,onError:t=>{this.setState({loadError:!0}),t.target.src=a.XW},alt:(0,s.P)(i)})})}}},89239:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>n});var i=r(47313),s=r(17739),a=r(98935),o=r(46417);class n extends i.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:r}=this.props;return(0,o.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,o.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,s.P)(t.picture),width:44,height:44,onError:e=>{const i="#ffffff"==r.color?"#000":r.color;e.target.src=t.errorPic?t.errorPic:"https://ui-avatars.com/api/?name=".concat(t.name.replace(/\s/g,""),"&background=").concat(String(null===r.id?"#000":i).replace("#",""),"&color=fff&length=1"),e.target.alt=t.name}},Math.random()):(0,o.jsx)(a.Z,{authorClass:e,username:t.name,network:r,color:null===r.id?"#000":r.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,r)=>{"use strict";r.d(e,{Z:()=>o});var i=r(47313),s=r(46417);const a=t=>{let{username:e,network:r,authorClass:i,errorPic:a}=t;const o="#ffffff"==r.color?"#000":r.color;return(0,s.jsx)("img",{className:"".concat(i,"__"),src:a||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===r.id?"#000":o).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},o=(0,i.memo)(a)},55790:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>n});var i=r(47313),s=r(17739),a=r(46417);const o=t=>{const{postTime:e,timeClass:r}=t;return(0,a.jsx)("div",{className:r,children:(0,s.Sy)(e)})},n=(0,i.memo)(o)},81750:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>y});var i=r(47313),s=r(34862),a=r(43411),o=r(97529),n=r(47330),c=(r(6940),r(65192),r(59606),r(98907),r(84261)),l=r(64442),d=r(35179),p=r(46417);const u=t=>{let{itemData:e,wallID:r,wall:i,ownerId:s,preload:a,isVisible:o}=t;const n=!(3!==e.type&&5!==e.type||1!=i.ThemeRule.autoPlay&&d.ig);return(0,p.jsx)("div",{className:"tb_rtp_media_wrap",children:n?(0,p.jsx)(l.Z,{VideoClass:"tb_rtp_video",data:e,wallID:r,themeID:i.Personalization.widgetTheme,ownerId:s,size:178,isCover:!0,muted:!0}):(0,p.jsx)(c.default,{ImageClass:"tb_rtp_image",data:e,wallID:r,themeID:i.Personalization.widgetTheme,ownerId:s,size:178})})};var h=r(17739),m=(r(25810),r(11502),r(34873)),_=r(16390);const g=(t,e)=>{if(0!=t){if(e>0&&e<t){let r=(t-e)/t*100;return r>0?"".concat(r.toFixed(),"%"):""}return!1}return!1},b=t=>{let{itemData:e,wall:r}=t;const i=e.ugc_products,{Price:s,ProductTitle:a}=r.ProductSetting,c=!(!i||1!=i.length);return(0,p.jsx)("div",{className:"tb_rtp_wrap",id:"slide-".concat(e.id),children:(0,p.jsxs)("div",{className:"tb_rtp_wrap_in",children:[(0,p.jsx)(o.tq,{id:e.id,modules:[n.tl,n.W_],spaceBetween:10,navigation:{prevEl:"#tb_rtn_prev-".concat(e.id),nextEl:"#tb_rtn_next-".concat(e.id)},children:i.map(((t,e)=>(0,p.jsx)(o.o5,{children:(0,p.jsxs)("div",{className:"tb_rtp",children:[(0,p.jsx)("div",{className:"tb_rtp_media",style:{opacity:t.UgcProduct.product_image?1:0},children:(0,p.jsx)(m.Z,{ImageClass:"tb_rtp_img",media:t.UgcProduct.product_image,size:!1,itemDetails:""})}),(0,p.jsx)("div",{className:"tb_rtp_title_w",children:t.UgcProduct.product_title?(0,p.jsx)("div",{className:"tb_rtp_title tb-cTBfont-".concat(a.varient),children:(0,_.ZP)(t.UgcProduct.product_title)}):null}),t.UgcProduct.product_price>0||t.UgcProduct.product_discount>0?(0,p.jsxs)("div",{className:"tb_rtp_price_wrap",children:[(0,p.jsxs)("div",{className:"tb_rtp_price tb-cTBfont-".concat(s.varient),children:[t.UgcProduct.price_currency_symbol,t.UgcProduct.product_discount>0?t.UgcProduct.product_discount:t.UgcProduct.product_price]}),t.UgcProduct.product_discount>0&&t.UgcProduct.product_discount!=t.UgcProduct.product_price?(0,p.jsxs)("div",{className:"tb_rtp_d_price tb-cTBfont-".concat(s.varient),children:[t.UgcProduct.price_currency_symbol,t.UgcProduct.product_price]}):null,(0,p.jsx)("div",{className:"tb_rtp_dp",children:g(t.UgcProduct.product_price,t.UgcProduct.product_discount)})]}):null]},e)},e)))}),c?null:(0,p.jsxs)("div",{className:"tb_rtn_wrap",onClick:t=>{t.stopPropagation()},children:[(0,p.jsx)("div",{id:"tb_rtn_prev-".concat(e.id),className:"tb_rtn_btn tb_rtn_btn_left tb__icon tb-arrow-left-alt",children:(0,p.jsx)("div",{})}),(0,p.jsx)("div",{id:"tb_rtn_next-".concat(e.id),className:"tb_rtn_btn tb_rtn_btn_right tb__icon tb-arrow-right-alt",children:(0,p.jsx)("div",{})})]})]})})};var w=r(89239),v=r(55790);const f=t=>{let{author:e,personalization:r,postTime:i,network:s,ThemeRule:a,font:o,mediaType:n,ownerId:c,wall:l}=t;const d=!(!r.postAuthor||e.isInstaUser),{ProductTitle:u}=l.ProductSetting;return(0,p.jsx)("div",{className:"tb_rtp_wrap",children:(0,p.jsxs)("div",{className:"tb_rtp_wrap_in",style:{marginTop:d?"":0},children:[d?(0,p.jsxs)("div",{className:"tb_rtp_media",children:[(0,p.jsx)(w.default,{network:s,author:e,authorClass:"tb_rtp_a_img"},e.username)," "]}):"",d?(0,p.jsx)("div",{className:"tb_rtp_title_w",children:(0,p.jsx)("div",{className:"tb_rtp_authorname tb-cTBfont-".concat(u.varient),children:e.username&&e.username.length>0?"".concat(e.username):""})}):"",i?(0,p.jsx)(v.default,{postTime:i,timeClass:"tb_rtp_time tb-cTBfont-".concat(a.font_varient)}):""]})})};var x=r(24235);class j extends i.PureComponent{constructor(t){super(t),this.mediaHeight=i.createRef()}componentDidMount(){d.nX&&(0,h.YN)(this.mediaHeight)}render(){const{itemData:t,itemIndex:e,wallID:r,ownerId:i,wall:s,isVisible:a,clickToShowPopUp:o,ThemeRule:n,personalization:c,sliderHeight:l}=this.props,h=!!(t.ugc_products&&t.ugc_products.length>0),m={backgroundColor:n.cardColor,minHeight:l},_=!(!d.ig||!h||0!==t.hotspot),g=!!(d.ig&&t.hotspot&&h),w=3===t.type||5===t.type;return(0,p.jsx)("div",{"item-id":t.id,id:"tb-hc-post-".concat(t.id),className:"tb_rtp_post_wrapper",ref:this.mediaHeight,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,style:{paddingLeft:s.Personalization.padding/2,paddingRight:s.Personalization.padding/2},"tb-product":_?1:g?2:0,children:(0,p.jsxs)("div",{className:"tb_rtp_post_in tb_icon_animate ".concat(d.ig?"":"tb_rtp_post_in_animate"),style:m,onClick:o(e,t),children:[(0,p.jsxs)("div",{className:"tb_rtp_post_media_wrapp",children:[w&&1==n.showReelsView&&(null===t||void 0===t?void 0:t.views)>0?(0,p.jsx)(x.Z,{count:null===t||void 0===t?void 0:t.views}):null,(0,p.jsx)(u,{itemData:t,wallID:r,wall:s,ownerId:i,preload:0==e,isVisible:a}),d.ig?null:(0,p.jsx)("div",{className:"tb_rtp_play_ico",children:(0,p.jsx)("div",{className:"tb__icon tb-play",children:(0,p.jsx)("div",{})})})]}),h?(0,p.jsx)(b,{itemData:t,wall:s}):(0,p.jsx)(f,{ownerId:i,postTime:t.createdAt,author:t.author,network:t.network,font:n,personalization:c,ThemeRule:n,wall:s})]})})}}var P=r(43635);class D extends i.Component{constructor(t){super(t),this.state={sliderHeight:""},this.requestData=t=>{const{appendData:e,wall:r,preRender:i,hasMoreData:s,getDataNextSteps:a,loaderData:o}=this.props;t.progress>.8&&s&&!o.isShowMoreLoading&&a(r.Wall.id,Math.floor(Date.now()/1e3),r.ThemeRule.numberOfPosts,e.networkID,e.after,i,e.heightEvent)},this.sliderHeight=i.createRef(),this.inputRefs={}}componentDidMount(){this.sliderHeight.current&&this.setState({sliderHeight:this.sliderHeight.current.clientHeight-40}),setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((t,e)=>{t.removeAttribute("role")}))}),100);const{postData:t}=this.props;if(t&&1==t.length){let t=document.querySelector(".tb_rtp_arrow_left__"),e=document.querySelector(".tb_rtp_arrow_right__");t&&e&&(document.querySelector(".tb_rtp_arrow_left__").style="display:none",document.querySelector(".tb_rtp_arrow_right__").style="display:none")}}componentDidUpdate(){const t=Object.values(this.inputRefs)[0],{postData:e,completeDataObject:r,onClickPopUpSlider:i,parentID:s}=this.props;if(t&&Object.values(t)[5].length>0){Object.values(t)[5].map(((t,a)=>{if(t.classList){const a=String(t.classList.value).split(" ").filter((t=>String(t).includes("tb_")));var o=a[0];String(a[0]).includes("tb_")&&(o=String(a[0]).replace("tb_",""));const n=e.findIndex((t=>t==o));let c=document.querySelectorAll(".tb_rtp_post_container #".concat(t.id));for(let t=0;t<c.length;t++){let e=c[t],a=e.getAttribute("p_id");String(s)===String(a)&&e.addEventListener("click",(t=>{t.preventDefault();const e=r[o];i(n,e)}))}}}))}}render(){const{postData:t,completeDataObject:e,wall:r,clickToShowPopUp:i,hasMoreData:a,parentID:c,keyRender:l,containerSize:u}=this.props,h=c,{sliderHeight:m}=this.state,_=r.ThemeRule.numberOfCoumn,g=r.ThemeRule.mobileColumn,b=r.ThemeRule.slidePost,w=r.ThemeRule.slideDuration,v=1===r.Personalization.trimcontent,f=(u.width/240).toFixed();let x=(1==f?2:f)-.4;return x>t.length&&(x=t.length),(0,p.jsx)(p.Fragment,{children:""!=c?(0,p.jsx)("div",{className:"tb_rtp_post_container",ref:this.sliderHeight,children:(0,p.jsx)(o.tq,{ref:t=>this.inputRefs[h]=t,style:{width:"100%",height:"100%"},onScroll:t=>this.requestData(t),onSlideChange:t=>this.requestData(t),onAutoplay:t=>this.requestData(t),autoHeight:!0,speed:700,edgeSwipeDetection:!0,slidesPerView:"auto",touchRatio:2,cssMode:s.tq,passiveListeners:!0,height:"100%",freeMode:{enabled:!0,sticky:!1,momentumBounceRatio:2,momentumVelocityRatio:3},autoplay:!!d.ig&&{delay:1===b?1e3*w:99e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},loop:!a,breakpoints:{0:{slidesPerView:0==g?x:parseInt(g)-.4},480:{slidesPerView:0==g?x:parseInt(g)-.4},575:{slidesPerView:0==g?x:parseInt(g)-.4},767:{slidesPerView:0==_?x:parseInt(_)-.4},1024:{slidesPerView:0==_?x:parseInt(_)-.4},1400:{slidesPerView:0==_?x:parseInt(_)-.4},1600:{slidesPerView:0==_?x:parseInt(_)-.4}},mousewheel:{forceToAxis:!0,sensitivity:2},watchSlidesProgress:!0,modules:[n.pt,n.Gk,n.Rv],className:"tb_rtp_post_slider ".concat(v?"tb_rtp_fixed_height":""),children:(0,p.jsx)(p.Fragment,{children:t&&t.length>0&&t.map(((t,s)=>{const a=e[t];return d.ig||3===a.type||5===a.type?(0,p.jsx)(o.o5,{style:{margin:0,padding:0},p_id:c,className:"tb_".concat(a.id),children:t=>{let{isVisible:e}=t;return(0,p.jsx)(j,{isVisible:e,ownerId:r.Wall.owner,itemData:a,itemIndex:s,personalization:r.Personalization,ThemeRule:r.ThemeRule,wallID:r.Wall.id,clickToShowPopUp:i,wall:r,sliderHeight:m})}},s):null}))})},l)}):null})}}const y=(0,i.memo)((0,a.$j)((t=>({loaderData:t.loaderData})),(t=>({getDataNextSteps:(e,r,i,s,a,o,n,c)=>t((0,P.Sx)(e,r,i,s,a,o,n,c))})))(D))},50247:()=>{}}]);