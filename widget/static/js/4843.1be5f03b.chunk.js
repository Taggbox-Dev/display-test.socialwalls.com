"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4843,5810],{20678:(e,t,s)=>{s.d(t,{Z:()=>_});var o,i,n=s(47313),l=s(35179),a=s(46417),r=!1,c=0,d=0,p=0;const h=e=>{var t;return null!==(t={80:60,70:40,50:30,30:20,20:10}[e])&&void 0!==t?t:20},m=window.location.href.includes("app=1")?1.2:.6;class u extends n.Component{constructor(){var e;super(...arguments),e=this,this.state={slideWall:0,product:null},this.onLoadScroll=()=>{if(!l.aL){const{wall:e}=this.props;window.clearData=this.clearData;const t=document.querySelector(".tb_app_container");null===t||void 0===t||t.addEventListener("wheel",(e=>e.preventDefault()),{passive:!1}),d=setTimeout((()=>this.scrollDiv_init(e.ThemeRule.themeId)),500)}},this.scrollDiv_init=e=>{const{slideWall:t}=this.state,{parentId:s}=this.props;t||(i=document.getElementById(s),63==e&&(r=!1),(i||{}).scrollTop=0,c=0,this.onScrollData(),this.onScrollWPosts())},this.onScrollData=()=>{const{wall:e}=this.props,t=e.Personalization.scrollDelay;if(t){const e=h(t);p=setInterval(this.scrollDiv,e)}},this.onScrollWPosts=()=>{const{themeHeight:e,wall:t,renderID:s,parentId:o}=this.props,i=document.getElementById(o),n=document.getElementById(s);var a=document.querySelector(".tb_theme_container");if(a&&(a=window.getComputedStyle(a).getPropertyValue("height"),n))if(window.innerHeight<n.clientHeight)i.style="height:".concat(a),n.style="position: relative; margin-bottom: ".concat(window.innerHeight,"px; min-height: ").concat(n.clientHeight,"px");else{e&&l.bX&&window.editor;i.style="height:".concat(a),i.setAttribute("style","height:".concat(a))}},this.scrollDiv=()=>{const{themeId:e}=this.props.wall.ThemeRule;p&&clearInterval(p);const t=i||{};r?63===e?(c-=m,t.scrollTop=c,r=!r||0!==t.scrollTop):(t.scrollTop=c=0,r=!1):(c+=m,t.scrollTop=c,r=t.scrollTop>=t.scrollHeight-t.offsetHeight-600),this.onScrollData()},this.pauseDiv=()=>{clearInterval(p),clearTimeout(o),o=setTimeout(this.resumeDiv,5e3)},this.resumeDiv=()=>{var e;const{wall:t,renderID:s}=this.props;i=document.getElementById(s),c=(null===(e=i)||void 0===e?void 0:e.scrollTop)||0,p=setInterval(this.scrollDiv,h(t.Personalization.scrollDelay))},this.clearData=()=>this.clearTime(),this.clearTime=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;e.setState({slideWall:t?0:1}),clearInterval(p),p=0,clearTimeout(o),clearTimeout(d),r=!1,c=0}}componentDidMount(){this.onLoadScroll(),window.addEventListener("resize",(()=>{this.onScrollWPosts()}))}componentDidUpdate(e,t){const{postData:s,wall:o}=e,{ThemeRule:i}=this.props.wall;i.themeId!==o.ThemeRule.themeId&&(r=!1,c=0),s!==this.props.postData&&(this.clearTime(1),this.scrollDiv_init(i.themeId))}componentWillReceiveProps(e){window.editor&&this.state.product!==e.product&&this.setState({product:e.product},(()=>{1==e.product?(console.log("sudarhsan-scroll nextProps.product",e.product),this.clearTime(1)):0==e.product&&(console.log("sudarhsan-scroll nextProps.product==0",e.product),this.clearTime(1),this.scrollDiv_init(e.ThemeRule.themeId))})),console.log("sudarhsan-scroll",e)}componentWillUnmount(){this.clearTime()}render(){return(0,a.jsx)(a.Fragment,{children:{...this.props.children}})}}const _=(0,n.memo)(u)},25810:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});var o=s(47313),i=s(35179),n=s(46417);const l=o.lazy((()=>s.e(5867).then(s.bind(s,95867))));class a extends o.PureComponent{render(){const{network:e,networkClass:t,ThemeRule:s,isDefault:a,Personalization:r}=this.props,c=!!a&&(7!==e.id&&4!==e.id&&36!==e.id),d=i.ZQ&&36==e.id?"tagembed":e.icon;return c?(0,n.jsx)("div",{className:"".concat(t," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,n.jsx)("div",{})}):(0,n.jsxs)(o.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(l,{network:e,networkClass:t})]})}}},5744:(e,t,s)=>{s.d(t,{Z:()=>a});var o=s(47313),i=s(40475),n=s(35179),l=s(46417);class a extends o.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{item:s,wallID:o,ownerId:l}=this.props;t.stopPropagation(),n.ZQ||(0,i.S5)({type:2,action:2,wall:o,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:l}),(0,i.Fv)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{share:e,shareClass:t}=this.props;return(0,l.jsxs)("div",{className:"tb_share_wrapper ".concat(t),children:[(0,l.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(n.ZQ?"tb-share-fill":"tb-share"),children:(0,l.jsx)("div",{})}),(0,l.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[e.facebook?(0,l.jsx)("div",{className:"tb_share_icon_list",children:(0,l.jsx)("div",{onClick:this.onClickData(e.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,l.jsx)("div",{})})}):"",e.twitter?(0,l.jsx)("div",{className:"tb_share_icon_list",children:(0,l.jsx)("div",{onClick:this.onClickData(e.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,l.jsx)("div",{})})}):"",e.linkedin?(0,l.jsx)("div",{className:"tb_share_icon_list",children:(0,l.jsx)("div",{onClick:this.onClickData(e.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,l.jsx)("div",{})})}):""]})]})}}},11502:(e,t,s)=>{s.d(t,{Z:()=>n});var o=s(17739),i=s(46417);const n=e=>{let{ThemeRule:t,btnClass:s}=e;const n={fontFamily:t.css_font};return(0,i.jsx)("div",{className:"tb_shop_btn_wrap ".concat(s),children:(0,i.jsx)("div",{className:"tb_shop_btn".concat(t.postHover||(0,o.mD)(4)||(0,o.mD)(55)?" tb_shop_btn_light":" tb_shop_btn_dark"),style:n,children:t.shoppingText})})}},24843:(e,t,s)=>{s.r(t),s.d(t,{default:()=>x});var o=s(47313),i=s(61395),n=s.n(i),l=s(17739),a=s(35179),r=s(5744),c=(s(25810),s(11502),s(46417));const d=o.lazy((()=>s.e(246).then(s.bind(s,70246)))),p=o.lazy((()=>Promise.all([s.e(6119),s.e(510),s.e(388)]).then(s.bind(s,90388)))),h=a.bX||a.aL?50:null,m=e=>{let{itemData:t,personalization:s,adjustWidth:i,ThemeRule:n,clickToShowPopUp:m,itemIndex:u,wallID:_,ownerId:b,postSizeInPx:w,wall:x,onClickPopUpSlider:g}=e;const v=(0,o.useRef)(null),I=2===t.type||3===t.type||4===t.type||5===t.type,D=s.trimcontent?(0,l.Sv)(t.content,h):t.content,T=w.adjustWidth<250,f=0==n.postHover&&a.ig?"light":"dark";a.Jx,a.Jx&&n.backgroundColor;(0,o.useEffect)((()=>{a.nX&&(0,l.YN)(v)}),[]);const k=!!(t.hotspot&&t.ugc_products.length>0),j=!!(a.ig&&!t.hotspot&&t.ugc_products.length>0),P=!(!n.postAuthor&&!n.postTime);return(0,o.useEffect)((()=>{t.isPopUp&&g(u,t)}),[u,t.isPopUp,t]),(0,c.jsx)("div",{id:"tb-sp-post-".concat(t.id),className:"tb_px_post_wrapper".concat(T?" tb_px_post_wrapper2x":""),style:{width:"".concat(i,"%"),padding:s.padding/2},"tb-network":t.network.id,"tb-product":j?1:k?2:0,tabIndex:"0",role:"article","aria-label":"Post ".concat(parseInt(u)+1,",").concat(D),ref:v,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,children:(0,c.jsx)("div",{className:"tb_px_post_in".concat(a.ig?" tb_px_post_ani":""),onClick:m(u,t),children:(0,c.jsxs)("div",{className:"tb_px_post_media_wrapp",children:[t.share.status?(0,c.jsx)(r.Z,{share:t.share,shareClass:"tb_px_share_container",item:t,wallID:_,ownerId:b}):"",I?(0,c.jsx)(o.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(p,{itemData:t,wallID:_,ownerId:b,ThemeID:s.widgetTheme,wall:x},"img".concat(u,"_").concat(t.id))}):"",P?(0,c.jsx)(o.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(d,{ownerId:b,postTime:t.createdAt,author:t.author,network:t.network,font:n,personalization:s,ThemeRule:n})}):null]})})})};var u=s(43411),_=s(40475),b=s(20678);class w extends o.Component{constructor(){super(...arguments),this.state={postData:[]}}componentDidMount(){const{heightUpdate:e}=this.props;setTimeout((()=>e()),1e3)}componentDidUpdate(e,t){return e.postData!==this.props.postData}render(){const{postData:e,completeDataObject:t,adjustWidth:s,wall:o,clickToShowPopUp:i,cardNumber:l,onClickToCTA:a,postSizeInPx:r,onClickPopUpSlider:d}=this.props;let p=e.length;if(o&&1==o.Personalization.fitRow&&e.length>=parseInt(l)){let t=e.length/parseInt(l);p=parseInt(l)*parseInt(t)}return(0,c.jsx)(b.Z,{wall:o,parentId:"tb_marquee",renderID:"pixel",children:(0,c.jsx)("div",{id:"tb_marquee",children:(0,c.jsx)(n(),{id:"pixel",className:"tb_px_post_container",tabIndex:"0","aria-label":"There are ".concat(e&&e.length>0?e.length:0," posts in the feed"),elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_px_post_wrapper",horizontalOrder:!1,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:(null===e||void 0===e?void 0:e.length)>0&&e.map(((e,n)=>{const l=t[e];return(0,c.jsx)(m,{ownerId:o.Wall.owner,itemData:l,itemIndex:n,adjustWidth:1==l.highlight?2*s:s,personalization:o.Personalization,ThemeRule:o.ThemeRule,wallID:o.Wall.id,clickToShowPopUp:i,onClickToCTA:a,postSizeInPx:r,wall:o,onClickPopUpSlider:d},"sqr_crd_".concat(n,"_").concat(l.id))}))})})})}}const x=(0,u.$j)((e=>({postHeight:e.postHeight.data,product:e.product.isDisplay})),(e=>({managePostHeight:t=>e((0,_.B0)(t))})))(w)}}]);