"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4843,5810],{20678:(e,t,s)=>{s.d(t,{Z:()=>_});var i,n,o=s(47313),a=s(35179),l=s(46417),r=!1,c=0,d=0,h=0;const p=e=>{var t;return null!==(t={80:60,70:40,50:30,30:20,20:10}[e])&&void 0!==t?t:20};class m extends o.Component{constructor(){var e;super(...arguments),e=this,this.state={slideWall:0},this.scrollDiv_init=e=>{const{slideWall:t}=this.state,{parentId:s}=this.props;t||(n=document.getElementById(s),63==e&&(r=!1),(n||{}).scrollTop=0,c=0,this.onScrollData(),this.onScrollWPosts())},this.onScrollData=()=>{const{wall:e}=this.props,t=e.Personalization.scrollDelay;if(t){const e=p(t);h=setInterval(this.scrollDiv,e)}},this.onScrollWPosts=()=>{const{themeHeight:e,wall:t,renderID:s,parentId:i}=this.props,n=document.getElementById(i),o=document.getElementById(s);var l=document.querySelector(".tb_theme_container");if(l=window.getComputedStyle(l).getPropertyValue("height"),o)if(window.innerHeight>o.clientHeight)o.style="position: relative; margin-bottom: ".concat(window.innerHeight,"px; min-height: ").concat(o.clientHeight,"px");else{e&&a.bX&&window.editor;n.style="height:".concat(l)}},this.scrollDiv=()=>{const{themeId:e}=this.props.wall.ThemeRule;h&&clearInterval(h);const t=n||{};r?63===e?(t.scrollTop=c--,r=!r||0!==t.scrollTop):(t.scrollTop=c=0,r=!1):(t.scrollTop=c++,r=t.scrollTop>=t.scrollHeight-t.offsetHeight-300),this.onScrollData()},this.pauseDiv=()=>{clearInterval(h),clearTimeout(i),i=setTimeout(this.resumeDiv,5e3)},this.resumeDiv=()=>{var e;const{wall:t,renderID:s}=this.props;n=document.getElementById(s),c=(null===(e=n)||void 0===e?void 0:e.scrollTop)||0,h=setInterval(this.scrollDiv,p(t.Personalization.scrollDelay))},this.clearData=()=>this.clearTime(),this.clearTime=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;e.setState({slideWall:t?0:1}),clearInterval(h),h=0,clearTimeout(i),clearTimeout(d),r=!1,c=0}}componentDidMount(){if(!a.aL){const{wall:e}=this.props;window.clearData=this.clearData;const t=document.querySelector(".tb_app_container");null===t||void 0===t||t.addEventListener("wheel",(e=>e.preventDefault()),{passive:!1}),d=setTimeout((()=>this.scrollDiv_init(e.ThemeRule.themeId)),1e3)}}componentDidUpdate(e,t){const{postData:s,wall:i}=e,{ThemeRule:n}=this.props.wall;n.themeId!==i.ThemeRule.themeId&&(r=!1,c=0),s!==this.props.postData&&(this.clearTime(1),this.scrollDiv_init(n.themeId))}componentWillUnmount(){this.clearTime()}render(){return(0,l.jsx)(l.Fragment,{children:{...this.props.children}})}}const _=(0,o.memo)(m)},25810:(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var i=s(47313),n=s(35179),o=s(46417);const a=i.lazy((()=>s.e(5867).then(s.bind(s,95867))));class l extends i.PureComponent{render(){const{network:e,networkClass:t,ThemeRule:s,isDefault:l,Personalization:r}=this.props,c=!!l&&(7!==e.id&&4!==e.id&&36!==e.id),d=n.ZQ&&36==e.id?"tagembed":e.icon;return c?(0,o.jsx)("div",{className:"".concat(t," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,o.jsx)("div",{})}):(0,o.jsxs)(i.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(a,{network:e,networkClass:t})]})}}},5744:(e,t,s)=>{s.d(t,{Z:()=>l});var i=s(47313),n=s(40475),o=s(35179),a=s(46417);class l extends i.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{item:s,wallID:i,ownerId:a}=this.props;t.stopPropagation(),o.ZQ||(0,n.S5)({type:2,action:2,wall:i,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:a}),(0,n.Fv)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{share:e,shareClass:t}=this.props;return(0,a.jsxs)("div",{className:"tb_share_wrapper ".concat(t),children:[(0,a.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(o.ZQ?"tb-share-fill":"tb-share"),children:(0,a.jsx)("div",{})}),(0,a.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[e.facebook?(0,a.jsx)("div",{className:"tb_share_icon_list",children:(0,a.jsx)("div",{onClick:this.onClickData(e.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,a.jsx)("div",{})})}):"",e.twitter?(0,a.jsx)("div",{className:"tb_share_icon_list",children:(0,a.jsx)("div",{onClick:this.onClickData(e.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,a.jsx)("div",{})})}):"",e.linkedin?(0,a.jsx)("div",{className:"tb_share_icon_list",children:(0,a.jsx)("div",{onClick:this.onClickData(e.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,a.jsx)("div",{})})}):""]})]})}}},11502:(e,t,s)=>{s.d(t,{Z:()=>o});var i=s(17739),n=s(46417);const o=e=>{let{ThemeRule:t,btnClass:s}=e;const o={fontFamily:t.css_font};return(0,n.jsx)("div",{className:"tb_shop_btn_wrap ".concat(s),children:(0,n.jsx)("div",{className:"tb_shop_btn".concat(t.postHover||(0,i.mD)(4)||(0,i.mD)(55)?" tb_shop_btn_light":" tb_shop_btn_dark"),style:o,children:t.shoppingText})})}},24843:(e,t,s)=>{s.r(t),s.d(t,{default:()=>x});var i=s(47313),n=s(61395),o=s.n(n),a=s(17739),l=s(35179),r=s(5744),c=(s(25810),s(11502),s(46417));const d=i.lazy((()=>s.e(246).then(s.bind(s,70246)))),h=i.lazy((()=>Promise.all([s.e(6119),s.e(510),s.e(6158),s.e(4926)]).then(s.bind(s,90388)))),p=l.ZQ?null:200,m=e=>{let{itemData:t,personalization:s,adjustWidth:n,ThemeRule:o,clickToShowPopUp:m,itemIndex:_,wallID:u,ownerId:b,postSizeInPx:w,wall:x,onClickPopUpSlider:v}=e;const g=(0,i.useRef)(null),I=2===t.type||3===t.type||4===t.type||5===t.type,D=s.trimcontent?(0,a.Sv)(t.content,p):t.content,k=w.adjustWidth<250,f=0==o.postHover&&l.ig?"light":"dark";l.Jx,l.Jx&&o.backgroundColor;(0,i.useEffect)((()=>{l.nX&&(0,a.YN)(g)}),[]);const j=!!(t.hotspot&&t.ugc_products.length>0),T=!!(l.ig&&!t.hotspot&&t.ugc_products.length>0);return(0,i.useEffect)((()=>{t.isPopUp&&v(_,t)}),[_,t.isPopUp,t]),(0,c.jsx)("div",{id:"tb-sp-post-".concat(t.id),className:"tb_px_post_wrapper".concat(k?" tb_px_post_wrapper2x":""),style:{width:"".concat(n,"%"),padding:s.padding/2},"tb-network":t.network.id,"tb-product":T?1:j?2:0,tabIndex:"0",role:"article","aria-label":"Post ".concat(parseInt(_)+1,",").concat(D),ref:g,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,children:(0,c.jsx)("div",{className:"tb_px_post_in".concat(l.ig?" tb_px_post_ani":""),onClick:m(_,t),children:(0,c.jsxs)("div",{className:"tb_px_post_media_wrapp",children:[t.share.status?(0,c.jsx)(r.Z,{share:t.share,shareClass:"tb_px_share_container",item:t,wallID:u,ownerId:b}):"",I?(0,c.jsx)(i.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(h,{itemData:t,wallID:u,ownerId:b,ThemeID:s.widgetTheme,wall:x},"img".concat(_,"_").concat(t.id))}):"",(0,c.jsx)(i.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(d,{ownerId:b,postTime:t.createdAt,author:t.author,network:t.network,font:o,personalization:s,ThemeRule:o})})]})})})};var _=s(43411),u=s(40475),b=s(20678);class w extends i.PureComponent{constructor(){super(...arguments),this.state={postData:[]}}render(){const{postData:e,completeDataObject:t,adjustWidth:s,wall:i,clickToShowPopUp:n,cardNumber:a,onClickToCTA:l,postSizeInPx:r,onClickPopUpSlider:d}=this.props;let h=e.length;if(i&&1==i.Personalization.fitRow&&e.length>=parseInt(a)){let t=e.length/parseInt(a);h=parseInt(a)*parseInt(t)}return(0,c.jsx)(b.Z,{wall:i,parentId:"tb_marquee",renderID:"pixel",children:(0,c.jsx)("div",{id:"tb_marquee",children:(0,c.jsx)(o(),{id:"pixel",className:"tb_px_post_container",tabIndex:"0","aria-label":"There are ".concat(e&&e.length>0?e.length:0," posts in the feed"),elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_px_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:e&&e.length>0&&e.map(((e,o)=>{const a=t[e];return(0,c.jsx)(m,{ownerId:i.Wall.owner,itemData:a,itemIndex:o,adjustWidth:1==a.highlight?2*s:s,personalization:i.Personalization,ThemeRule:i.ThemeRule,wallID:i.Wall.id,clickToShowPopUp:n,onClickToCTA:l,postSizeInPx:r,wall:i,onClickPopUpSlider:d},"sqr_crd_".concat(o,"_").concat(e.id))}))})})})}}const x=(0,_.$j)((e=>({postHeight:e.postHeight.data})),(e=>({managePostHeight:t=>e((0,u.B0)(t))})))(w)}}]);