"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4843,5810],{20678:(e,t,s)=>{s.d(t,{Z:()=>u});var o,n,i=s(47313),a=s(35179),l=s(46417),r=!1,c=0,d=0,p=0;const h=e=>{var t;return null!==(t={80:60,70:40,50:30,30:20,20:10}[e])&&void 0!==t?t:20},m=window.location.href.includes("app=1")?1.2:.6;class _ extends i.Component{constructor(){var e;super(...arguments),e=this,this.state={slideWall:0},this.onLoadScroll=()=>{if(!a.aL){const{wall:e}=this.props;window.clearData=this.clearData;const t=document.querySelector(".tb_app_container");null===t||void 0===t||t.addEventListener("wheel",(e=>e.preventDefault()),{passive:!1}),d=setTimeout((()=>this.scrollDiv_init(e.ThemeRule.themeId)),500)}},this.scrollDiv_init=e=>{const{slideWall:t}=this.state,{parentId:s}=this.props;t||(n=document.getElementById(s),63==e&&(r=!1),(n||{}).scrollTop=0,c=0,this.onScrollData(),this.onScrollWPosts())},this.onScrollData=()=>{const{wall:e}=this.props,t=e.Personalization.scrollDelay;if(t){const e=h(t);p=setInterval(this.scrollDiv,e)}},this.onScrollWPosts=()=>{const{themeHeight:e,wall:t,renderID:s,parentId:o}=this.props,n=document.getElementById(o),i=document.getElementById(s);var l=document.querySelector(".tb_theme_container");if(l&&(l=window.getComputedStyle(l).getPropertyValue("height"),i))if(window.innerHeight<i.clientHeight)n.style="height:".concat(l),i.style="position: relative; margin-bottom: ".concat(window.innerHeight,"px; min-height: ").concat(i.clientHeight,"px");else{e&&a.bX&&window.editor;n.style="height:".concat(l),n.setAttribute("style","height:".concat(l))}},this.scrollDiv=()=>{const{themeId:e}=this.props.wall.ThemeRule;p&&clearInterval(p);const t=n||{};r?63===e?(c-=m,t.scrollTop=c,r=!r||0!==t.scrollTop):(t.scrollTop=c=0,r=!1):(c+=m,t.scrollTop=c,r=t.scrollTop>=t.scrollHeight-t.offsetHeight-600),this.onScrollData()},this.pauseDiv=()=>{clearInterval(p),clearTimeout(o),o=setTimeout(this.resumeDiv,5e3)},this.resumeDiv=()=>{var e;const{wall:t,renderID:s}=this.props;n=document.getElementById(s),c=(null===(e=n)||void 0===e?void 0:e.scrollTop)||0,p=setInterval(this.scrollDiv,h(t.Personalization.scrollDelay))},this.clearData=()=>this.clearTime(),this.clearTime=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;e.setState({slideWall:t?0:1}),clearInterval(p),p=0,clearTimeout(o),clearTimeout(d),r=!1,c=0}}componentDidMount(){this.onLoadScroll(),window.addEventListener("resize",(()=>{this.onScrollWPosts()}))}componentDidUpdate(e,t){const{postData:s,wall:o}=e,{ThemeRule:n}=this.props.wall;n.themeId!==o.ThemeRule.themeId&&(r=!1,c=0),s!==this.props.postData&&(this.clearTime(1),this.scrollDiv_init(n.themeId))}componentWillUnmount(){this.clearTime()}render(){return(0,l.jsx)(l.Fragment,{children:{...this.props.children}})}}const u=(0,i.memo)(_)},25810:(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var o=s(47313),n=s(35179),i=s(46417);const a=o.lazy((()=>s.e(5867).then(s.bind(s,95867))));class l extends o.PureComponent{render(){const{network:e,networkClass:t,ThemeRule:s,isDefault:l,Personalization:r}=this.props,c=!!l&&(7!==e.id&&4!==e.id&&36!==e.id),d=n.ZQ&&36==e.id?"tagembed":e.icon;return c?(0,i.jsx)("div",{className:"".concat(t," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,i.jsx)("div",{})}):(0,i.jsxs)(o.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:[" ",(0,i.jsx)(a,{network:e,networkClass:t})]})}}},5744:(e,t,s)=>{s.d(t,{Z:()=>l});var o=s(47313),n=s(40475),i=s(35179),a=s(46417);class l extends o.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{item:s,wallID:o,ownerId:a}=this.props;t.stopPropagation(),i.ZQ||(0,n.S5)({type:2,action:2,wall:o,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:a}),(0,n.Fv)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{share:e,shareClass:t}=this.props;return(0,a.jsxs)("div",{className:"tb_share_wrapper ".concat(t),children:[(0,a.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(i.ZQ?"tb-share-fill":"tb-share"),children:(0,a.jsx)("div",{})}),(0,a.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[e.facebook?(0,a.jsx)("div",{className:"tb_share_icon_list",children:(0,a.jsx)("div",{onClick:this.onClickData(e.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,a.jsx)("div",{})})}):"",e.twitter?(0,a.jsx)("div",{className:"tb_share_icon_list",children:(0,a.jsx)("div",{onClick:this.onClickData(e.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,a.jsx)("div",{})})}):"",e.linkedin?(0,a.jsx)("div",{className:"tb_share_icon_list",children:(0,a.jsx)("div",{onClick:this.onClickData(e.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,a.jsx)("div",{})})}):""]})]})}}},11502:(e,t,s)=>{s.d(t,{Z:()=>i});var o=s(17739),n=s(46417);const i=e=>{let{ThemeRule:t,btnClass:s}=e;const i={fontFamily:t.css_font};return(0,n.jsx)("div",{className:"tb_shop_btn_wrap ".concat(s),children:(0,n.jsx)("div",{className:"tb_shop_btn".concat(t.postHover||(0,o.mD)(4)||(0,o.mD)(55)?" tb_shop_btn_light":" tb_shop_btn_dark"),style:i,children:t.shoppingText})})}},24843:(e,t,s)=>{s.r(t),s.d(t,{default:()=>x});var o=s(47313),n=s(61395),i=s.n(n),a=s(17739),l=s(35179),r=s(5744),c=(s(25810),s(11502),s(46417));const d=o.lazy((()=>s.e(246).then(s.bind(s,70246)))),p=o.lazy((()=>Promise.all([s.e(6119),s.e(510),s.e(388)]).then(s.bind(s,90388)))),h=l.bX||l.aL?50:null,m=e=>{let{itemData:t,personalization:s,adjustWidth:n,ThemeRule:i,clickToShowPopUp:m,itemIndex:_,wallID:u,ownerId:b,postSizeInPx:w,wall:x,onClickPopUpSlider:v}=e;const g=(0,o.useRef)(null),I=2===t.type||3===t.type||4===t.type||5===t.type,D=s.trimcontent?(0,a.Sv)(t.content,h):t.content,f=w.adjustWidth<250,k=0==i.postHover&&l.ig?"light":"dark";l.Jx,l.Jx&&i.backgroundColor;(0,o.useEffect)((()=>{l.nX&&(0,a.YN)(g)}),[]);const T=!!(t.hotspot&&t.ugc_products.length>0),j=!!(l.ig&&!t.hotspot&&t.ugc_products.length>0),C=!(!i.postAuthor&&!i.postTime);return(0,o.useEffect)((()=>{t.isPopUp&&v(_,t)}),[_,t.isPopUp,t]),(0,c.jsx)("div",{id:"tb-sp-post-".concat(t.id),className:"tb_px_post_wrapper".concat(f?" tb_px_post_wrapper2x":""),style:{width:"".concat(n,"%"),padding:s.padding/2,transform:"translate3d(-".concat(500*_,"px, ").concat(_?n:0,"%, 0px)"),transitionDelay:"".concat(70*_,"ms")},"tb-network":t.network.id,"tb-product":j?1:T?2:0,tabIndex:"0",role:"article","aria-label":"Post ".concat(parseInt(_)+1,",").concat(D),ref:g,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,children:(0,c.jsx)("div",{className:"tb_px_post_in".concat(l.ig?" tb_px_post_ani":""),onClick:m(_,t),children:(0,c.jsxs)("div",{className:"tb_px_post_media_wrapp",children:[t.share.status?(0,c.jsx)(r.Z,{share:t.share,shareClass:"tb_px_share_container",item:t,wallID:u,ownerId:b}):"",I?(0,c.jsx)(o.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(p,{itemData:t,wallID:u,ownerId:b,ThemeID:s.widgetTheme,wall:x},"img".concat(_,"_").concat(t.id))}):"",C?(0,c.jsx)(o.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(d,{ownerId:b,postTime:t.createdAt,author:t.author,network:t.network,font:i,personalization:s,ThemeRule:i})}):null]})})})};var _=s(43411),u=s(40475),b=s(20678);class w extends o.Component{constructor(){super(...arguments),this.state={postData:[]}}componentDidMount(){const{heightUpdate:e}=this.props;setTimeout((()=>e()),1e3)}componentDidUpdate(e,t){return e.postData!==this.props.postData}render(){const{postData:e,completeDataObject:t,adjustWidth:s,wall:o,clickToShowPopUp:n,cardNumber:a,onClickToCTA:l,postSizeInPx:r,onClickPopUpSlider:d}=this.props;let p=e.length;if(o&&1==o.Personalization.fitRow&&e.length>=parseInt(a)){let t=e.length/parseInt(a);p=parseInt(a)*parseInt(t)}return(0,c.jsx)(b.Z,{wall:o,parentId:"tb_marquee",renderID:"pixel",children:(0,c.jsx)("div",{id:"tb_marquee",children:(0,c.jsx)(i(),{id:"pixel",className:"tb_px_post_container",tabIndex:"0","aria-label":"There are ".concat(e&&e.length>0?e.length:0," posts in the feed"),elementType:"div",options:{transitionDuration:1200,percentPosition:!0,itemSelector:".tb_px_post_wrapper",horizontalOrder:!1,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:(null===e||void 0===e?void 0:e.length)>0&&e.map(((e,i)=>{const a=t[e];return(0,c.jsx)(m,{ownerId:o.Wall.owner,itemData:a,itemIndex:i,adjustWidth:1==a.highlight?2*s:s,personalization:o.Personalization,ThemeRule:o.ThemeRule,wallID:o.Wall.id,clickToShowPopUp:n,onClickToCTA:l,postSizeInPx:r,wall:o,onClickPopUpSlider:d},"sqr_crd_".concat(i,"_").concat(a.id))}))})})})}}const x=(0,_.$j)((e=>({postHeight:e.postHeight.data})),(e=>({managePostHeight:t=>e((0,u.B0)(t))})))(w)}}]);