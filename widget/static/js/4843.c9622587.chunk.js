"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4843,5810],{20678:(e,t,o)=>{o.d(t,{Z:()=>_});var s,i,n=o(47313),l=o(35179),a=o(46417),r=!1,c=0,d=0,p=0;const h=e=>{var t;return null!==(t={80:60,70:40,50:30,30:20,20:10}[e])&&void 0!==t?t:20},m=window.location.href.includes("app=1")?1.2:.6;class u extends n.Component{constructor(){var e;super(...arguments),e=this,this.state={slideWall:0},this.onLoadScroll=()=>{if(!l.aL){const{wall:e}=this.props;window.clearData=this.clearData;const t=document.querySelector(".tb_app_container");null===t||void 0===t||t.addEventListener("wheel",(e=>e.preventDefault()),{passive:!1}),d=setTimeout((()=>this.scrollDiv_init(e.ThemeRule.themeId)),500)}},this.scrollDiv_init=e=>{const{slideWall:t}=this.state,{parentId:o}=this.props;t||(i=document.getElementById(o),63==e&&(r=!1),(i||{}).scrollTop=0,c=0,this.onScrollData(),this.onScrollWPosts())},this.onScrollData=()=>{const{wall:e}=this.props,t=e.Personalization.scrollDelay;if(t){const e=h(t);p=setInterval(this.scrollDiv,e)}},this.onScrollWPosts=()=>{const{themeHeight:e,wall:t,renderID:o,parentId:s}=this.props,i=document.getElementById(s),n=document.getElementById(o);var a=document.querySelector(".tb_theme_container");if(a&&(a=window.getComputedStyle(a).getPropertyValue("height"),n))if(window.innerHeight<n.clientHeight)i.style="height:".concat(a),n.style="position: relative; margin-bottom: ".concat(window.innerHeight,"px; min-height: ").concat(n.clientHeight,"px");else{e&&l.bX&&window.editor;i.style="height:".concat(a),i.setAttribute("style","height:".concat(a))}},this.scrollDiv=()=>{const{themeId:e}=this.props.wall.ThemeRule;p&&clearInterval(p);const t=i||{};r?63===e?(c-=m,t.scrollTop=c,r=!r||0!==t.scrollTop):(t.scrollTop=c=0,r=!1):(c+=m,t.scrollTop=c,r=t.scrollTop>=t.scrollHeight-t.offsetHeight-600),this.onScrollData()},this.pauseDiv=()=>{clearInterval(p),clearTimeout(s),s=setTimeout(this.resumeDiv,5e3)},this.resumeDiv=()=>{var e;const{wall:t,renderID:o}=this.props;i=document.getElementById(o),c=(null===(e=i)||void 0===e?void 0:e.scrollTop)||0,p=setInterval(this.scrollDiv,h(t.Personalization.scrollDelay))},this.clearData=()=>this.clearTime(),this.clearTime=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;e.setState({slideWall:t?0:1}),clearInterval(p),p=0,clearTimeout(s),clearTimeout(d),r=!1,c=0}}componentDidMount(){this.onLoadScroll(),window.addEventListener("resize",(()=>{this.onScrollWPosts()}))}componentDidUpdate(e,t){const{postData:o,wall:s}=e,{ThemeRule:i}=this.props.wall;var n,a,p,h;if(i.themeId!==s.ThemeRule.themeId&&(r=!1,c=0),o!==this.props.postData&&(this.clearTime(1),this.scrollDiv_init(i.themeId)),window.editor)if(console.log("ScrollAnimation 111",this.props,d,l.bX,l.aL),1==(null===(n=this.props)||void 0===n||null===(a=n.wall)||void 0===a?void 0:a.product))console.log("ScrollAnimation 111",d,l.bX,l.aL),d&&this.clearTime();else if(0==(null===(p=this.props)||void 0===p||null===(h=p.wall)||void 0===h?void 0:h.product)){var m,u;console.log("ScrollAnimation this.props?.wall?.product",null===(m=this.props)||void 0===m||null===(u=m.wall)||void 0===u?void 0:u.product,d,l.bX,l.aL),d||this.onLoadScroll()}}componentWillUnmount(){this.clearTime()}render(){return(0,a.jsx)(a.Fragment,{children:{...this.props.children}})}}const _=(0,n.memo)(u)},25810:(e,t,o)=>{o.r(t),o.d(t,{default:()=>a});var s=o(47313),i=o(35179),n=o(46417);const l=s.lazy((()=>o.e(5867).then(o.bind(o,95867))));class a extends s.PureComponent{render(){const{network:e,networkClass:t,ThemeRule:o,isDefault:a,Personalization:r}=this.props,c=!!a&&(7!==e.id&&4!==e.id&&36!==e.id),d=i.ZQ&&36==e.id?"tagembed":e.icon;return c?(0,n.jsx)("div",{className:"".concat(t," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,n.jsx)("div",{})}):(0,n.jsxs)(s.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(l,{network:e,networkClass:t})]})}}},5744:(e,t,o)=>{o.d(t,{Z:()=>a});var s=o(47313),i=o(40475),n=o(35179),l=o(46417);class a extends s.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{item:o,wallID:s,ownerId:l}=this.props;t.stopPropagation(),n.ZQ||(0,i.S5)({type:2,action:2,wall:s,feed:o.feedId,post:o.referenceId?o.referenceId:o.id,owner:l}),(0,i.Fv)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{share:e,shareClass:t}=this.props;return(0,l.jsxs)("div",{className:"tb_share_wrapper ".concat(t),children:[(0,l.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(n.ZQ?"tb-share-fill":"tb-share"),children:(0,l.jsx)("div",{})}),(0,l.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[e.facebook?(0,l.jsx)("div",{className:"tb_share_icon_list",children:(0,l.jsx)("div",{onClick:this.onClickData(e.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,l.jsx)("div",{})})}):"",e.twitter?(0,l.jsx)("div",{className:"tb_share_icon_list",children:(0,l.jsx)("div",{onClick:this.onClickData(e.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,l.jsx)("div",{})})}):"",e.linkedin?(0,l.jsx)("div",{className:"tb_share_icon_list",children:(0,l.jsx)("div",{onClick:this.onClickData(e.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,l.jsx)("div",{})})}):""]})]})}}},11502:(e,t,o)=>{o.d(t,{Z:()=>n});var s=o(17739),i=o(46417);const n=e=>{let{ThemeRule:t,btnClass:o}=e;const n={fontFamily:t.css_font};return(0,i.jsx)("div",{className:"tb_shop_btn_wrap ".concat(o),children:(0,i.jsx)("div",{className:"tb_shop_btn".concat(t.postHover||(0,s.mD)(4)||(0,s.mD)(55)?" tb_shop_btn_light":" tb_shop_btn_dark"),style:n,children:t.shoppingText})})}},24843:(e,t,o)=>{o.r(t),o.d(t,{default:()=>v});var s=o(47313),i=o(61395),n=o.n(i),l=o(17739),a=o(35179),r=o(5744),c=(o(25810),o(11502),o(46417));const d=s.lazy((()=>o.e(246).then(o.bind(o,70246)))),p=s.lazy((()=>Promise.all([o.e(6119),o.e(510),o.e(388)]).then(o.bind(o,90388)))),h=a.bX||a.aL?50:null,m=e=>{let{itemData:t,personalization:o,adjustWidth:i,ThemeRule:n,clickToShowPopUp:m,itemIndex:u,wallID:_,ownerId:b,postSizeInPx:w,wall:v,onClickPopUpSlider:g}=e;const x=(0,s.useRef)(null),I=2===t.type||3===t.type||4===t.type||5===t.type,D=o.trimcontent?(0,l.Sv)(t.content,h):t.content,f=w.adjustWidth<250,k=0==n.postHover&&a.ig?"light":"dark";a.Jx,a.Jx&&n.backgroundColor;(0,s.useEffect)((()=>{a.nX&&(0,l.YN)(x)}),[]);const T=!!(t.hotspot&&t.ugc_products.length>0),j=!!(a.ig&&!t.hotspot&&t.ugc_products.length>0),S=!(!n.postAuthor&&!n.postTime);return(0,s.useEffect)((()=>{t.isPopUp&&g(u,t)}),[u,t.isPopUp,t]),(0,c.jsx)("div",{id:"tb-sp-post-".concat(t.id),className:"tb_px_post_wrapper".concat(f?" tb_px_post_wrapper2x":""),style:{width:"".concat(i,"%"),padding:o.padding/2},"tb-network":t.network.id,"tb-product":j?1:T?2:0,tabIndex:"0",role:"article","aria-label":"Post ".concat(parseInt(u)+1,",").concat(D),ref:x,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,children:(0,c.jsx)("div",{className:"tb_px_post_in".concat(a.ig?" tb_px_post_ani":""),onClick:m(u,t),children:(0,c.jsxs)("div",{className:"tb_px_post_media_wrapp",children:[t.share.status?(0,c.jsx)(r.Z,{share:t.share,shareClass:"tb_px_share_container",item:t,wallID:_,ownerId:b}):"",I?(0,c.jsx)(s.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(p,{itemData:t,wallID:_,ownerId:b,ThemeID:o.widgetTheme,wall:v},"img".concat(u,"_").concat(t.id))}):"",S?(0,c.jsx)(s.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(d,{ownerId:b,postTime:t.createdAt,author:t.author,network:t.network,font:n,personalization:o,ThemeRule:n})}):null]})})})};var u=o(43411),_=o(40475),b=o(20678);class w extends s.Component{constructor(){super(...arguments),this.state={postData:[]}}componentDidMount(){const{heightUpdate:e}=this.props;setTimeout((()=>e()),1e3)}componentDidUpdate(e,t){return e.postData!==this.props.postData}render(){const{postData:e,completeDataObject:t,adjustWidth:o,wall:s,clickToShowPopUp:i,cardNumber:l,onClickToCTA:a,postSizeInPx:r,onClickPopUpSlider:d}=this.props;let p=e.length;if(s&&1==s.Personalization.fitRow&&e.length>=parseInt(l)){let t=e.length/parseInt(l);p=parseInt(l)*parseInt(t)}return(0,c.jsx)(b.Z,{wall:s,parentId:"tb_marquee",renderID:"pixel",children:(0,c.jsx)("div",{id:"tb_marquee",children:(0,c.jsx)(n(),{id:"pixel",className:"tb_px_post_container",tabIndex:"0","aria-label":"There are ".concat(e&&e.length>0?e.length:0," posts in the feed"),elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_px_post_wrapper",horizontalOrder:!1,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:(null===e||void 0===e?void 0:e.length)>0&&e.map(((e,n)=>{const l=t[e];return(0,c.jsx)(m,{ownerId:s.Wall.owner,itemData:l,itemIndex:n,adjustWidth:1==l.highlight?2*o:o,personalization:s.Personalization,ThemeRule:s.ThemeRule,wallID:s.Wall.id,clickToShowPopUp:i,onClickToCTA:a,postSizeInPx:r,wall:s,onClickPopUpSlider:d},"sqr_crd_".concat(n,"_").concat(l.id))}))})})})}}const v=(0,u.$j)((e=>({postHeight:e.postHeight.data})),(e=>({managePostHeight:t=>e((0,_.B0)(t))})))(w)}}]);