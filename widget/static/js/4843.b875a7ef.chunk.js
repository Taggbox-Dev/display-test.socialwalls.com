"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4843,5810],{20678:(e,t,o)=>{o.d(t,{Z:()=>m});var i,l,n=o(47313),s=o(35179),a=o(46417),r=!1,d=0,c=0,p=0;const h=e=>{var t;return null!==(t={80:60,70:40,50:30,30:20,20:10}[e])&&void 0!==t?t:20},v=window.location.href.includes("app=1")?1.2:.6;class u extends n.Component{constructor(){var e;super(...arguments),e=this,this.state={slideWall:0},this.onLoadScroll=()=>{if(!s.aL){const{wall:e}=this.props;window.clearData=this.clearData;const t=document.querySelector(".tb_app_container");null===t||void 0===t||t.addEventListener("wheel",(e=>e.preventDefault()),{passive:!1}),c=setTimeout((()=>this.scrollDiv_init(e.ThemeRule.themeId)),500)}},this.scrollDiv_init=e=>{const{slideWall:t}=this.state,{parentId:o}=this.props;t||(l=document.getElementById(o),63==e&&(r=!1),(l||{}).scrollTop=0,d=0,this.onScrollData(),this.onScrollWPosts())},this.onScrollData=()=>{const{wall:e}=this.props,t=e.Personalization.scrollDelay;if(t){const e=h(t);p=setInterval(this.scrollDiv,e)}},this.onScrollWPosts=()=>{const{themeHeight:e,wall:t,renderID:o,parentId:i}=this.props,l=document.getElementById(i),n=document.getElementById(o);var a=document.querySelector(".tb_theme_container");if(a&&(a=window.getComputedStyle(a).getPropertyValue("height"),n))if(window.innerHeight<n.clientHeight)l.style="height:".concat(a),n.style="position: relative; margin-bottom: ".concat(window.innerHeight,"px; min-height: ").concat(n.clientHeight,"px");else{e&&s.bX&&window.editor;l.style="height:".concat(a),l.setAttribute("style","height:".concat(a))}},this.scrollDiv=()=>{const{themeId:e}=this.props.wall.ThemeRule;p&&clearInterval(p);const t=l||{};r?63===e?(d-=v,t.scrollTop=d,r=!r||0!==t.scrollTop):(t.scrollTop=d=0,r=!1):(d+=v,t.scrollTop=d,r=t.scrollTop>=t.scrollHeight-t.offsetHeight-600),this.onScrollData()},this.pauseDiv=()=>{clearInterval(p),clearTimeout(i),i=setTimeout(this.resumeDiv,5e3)},this.resumeDiv=()=>{var e;const{wall:t,renderID:o}=this.props;l=document.getElementById(o),d=(null===(e=l)||void 0===e?void 0:e.scrollTop)||0,p=setInterval(this.scrollDiv,h(t.Personalization.scrollDelay))},this.clearData=()=>this.clearTime(),this.clearTime=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;e.setState({slideWall:t?0:1}),clearInterval(p),p=0,clearTimeout(i),clearTimeout(c),r=!1,d=0}}componentDidMount(){this.onLoadScroll(),window.addEventListener("resize",(()=>{this.onScrollWPosts()}))}componentDidUpdate(e,t){const{postData:o,wall:i}=e,{ThemeRule:l}=this.props.wall;l.themeId!==i.ThemeRule.themeId&&(r=!1,d=0),o!==this.props.postData&&(this.clearTime(1),this.scrollDiv_init(l.themeId))}componentWillUnmount(){this.clearTime()}render(){return(0,a.jsx)(a.Fragment,{children:{...this.props.children}})}}const m=(0,n.memo)(u)},25810:(e,t,o)=>{o.r(t),o.d(t,{default:()=>a});var i=o(47313),l=o(35179),n=o(46417);const s=i.lazy((()=>o.e(5867).then(o.bind(o,95867))));class a extends i.PureComponent{render(){const{network:e,networkClass:t,ThemeRule:o,isDefault:a,Personalization:r}=this.props,d=!!a&&(7!==(null===e||void 0===e?void 0:e.id)&&4!==(null===e||void 0===e?void 0:e.id)&&36!==(null===e||void 0===e?void 0:e.id)),c=l.ZQ&&36===(null===e||void 0===e?void 0:e.id)?"tagembed":(null===e||void 0===e?void 0:e.icon)||"";return d?(0,n.jsx)("div",{className:"".concat(t," tb__icon tb-").concat(c.replace(/fa-/g,"")),children:(0,n.jsx)("div",{})}):(0,n.jsxs)(i.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(s,{network:e,networkClass:t})]})}}},5744:(e,t,o)=>{o.d(t,{Z:()=>a});var i=o(47313),l=o(43635),n=o(35179),s=o(46417);class a extends i.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{item:o,wallID:i,ownerId:s}=this.props;t.stopPropagation(),n.ZQ||(0,l.S5)({type:2,action:2,wall:i,feed:o.feedId,post:o.referenceId?o.referenceId:o.id,owner:s}),(0,l.Fv)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{share:e,shareClass:t}=this.props;return(0,s.jsxs)("div",{className:"tb_share_wrapper ".concat(t),children:[(0,s.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(n.ZQ?"tb-share-fill":"tb-share"),children:(0,s.jsx)("div",{})}),(0,s.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[e.facebook?(0,s.jsx)("div",{className:"tb_share_icon_list",children:(0,s.jsx)("div",{onClick:this.onClickData(e.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,s.jsx)("div",{})})}):"",e.twitter?(0,s.jsx)("div",{className:"tb_share_icon_list",children:(0,s.jsx)("div",{onClick:this.onClickData(e.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,s.jsx)("div",{})})}):"",e.linkedin?(0,s.jsx)("div",{className:"tb_share_icon_list",children:(0,s.jsx)("div",{onClick:this.onClickData(e.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,s.jsx)("div",{})})}):""]})]})}}},11502:(e,t,o)=>{o.d(t,{Z:()=>n});var i=o(17739),l=o(46417);const n=e=>{let{ThemeRule:t,btnClass:o}=e;const n={fontFamily:t.css_font};return(0,l.jsx)("div",{className:"tb_shop_btn_wrap ".concat(o),children:(0,l.jsx)("div",{className:"tb_shop_btn".concat(t.postHover||(0,i.mD)(4)||(0,i.mD)(55)?" tb_shop_btn_light":" tb_shop_btn_dark"),style:n,children:t.shoppingText})})}},24843:(e,t,o)=>{o.r(t),o.d(t,{default:()=>w});var i=o(47313),l=o(61395),n=o.n(l),s=o(17739),a=o(35179),r=o(5744),d=(o(25810),o(11502),o(46417));const c=i.lazy((()=>o.e(246).then(o.bind(o,70246)))),p=i.lazy((()=>Promise.all([o.e(6119),o.e(510),o.e(752),o.e(4926)]).then(o.bind(o,90388)))),h=a.bX||a.aL?50:null,v=e=>{var t,o,l,n;let{itemData:v,personalization:u,adjustWidth:m,ThemeRule:_,clickToShowPopUp:b,itemIndex:w,wallID:x,ownerId:g,postSizeInPx:I,wall:D,onClickPopUpSlider:f}=e;const k=(0,i.useRef)(null),T=2===(null===v||void 0===v?void 0:v.type)||3===(null===v||void 0===v?void 0:v.type)||4===(null===v||void 0===v?void 0:v.type)||5===(null===v||void 0===v?void 0:v.type),j=null!==u&&void 0!==u&&u.trimcontent?(0,s.Sv)(v.content,h):null===v||void 0===v?void 0:v.content,C=(null===I||void 0===I?void 0:I.adjustWidth)<250,P=0==(null===_||void 0===_?void 0:_.postHover)&&a.ig?"light":"dark";a.Jx,a.Jx&&_.backgroundColor;(0,i.useEffect)((()=>{a.nX&&(0,s.YN)(k)}),[]);const S=!!(null!==v&&void 0!==v&&v.hotspot&&(null===v||void 0===v||null===(t=v.ugc_products)||void 0===t?void 0:t.length)>0),y=!(!a.ig||null!==v&&void 0!==v&&v.hotspot||!((null===v||void 0===v||null===(o=v.ugc_products)||void 0===o?void 0:o.length)>0)),z=!!(null!==_&&void 0!==_&&_.postAuthor||null!==_&&void 0!==_&&_.postTime||null!==_&&void 0!==_&&_.socialAction);return(0,i.useEffect)((()=>{null!==v&&void 0!==v&&v.isPopUp&&f(w,v)}),[w,v.isPopUp,v]),(0,d.jsx)("div",{id:"tb-sp-post-".concat(null===v||void 0===v?void 0:v.id),className:"tb_px_post_wrapper".concat(C?" tb_px_post_wrapper2x":""),style:{width:"".concat(m,"%"),padding:u.padding/2},"tb-network":null===v||void 0===v||null===(l=v.network)||void 0===l?void 0:l.id,"tb-product":y?1:S?2:0,tabIndex:"0",role:"article","aria-label":"Post ".concat(parseInt(w)+1,",").concat(j),ref:k,"post-id":null!==v&&void 0!==v&&v.referenceId?null===v||void 0===v?void 0:v.referenceId:null===v||void 0===v?void 0:v.id,"feed-id":null===v||void 0===v?void 0:v.feedId,children:(0,d.jsx)("div",{className:"tb_px_post_in".concat(a.ig?" tb_px_post_ani":""),onClick:b(w,v),children:(0,d.jsxs)("div",{className:"tb_px_post_media_wrapp",children:[null!==v&&void 0!==v&&null!==(n=v.share)&&void 0!==n&&n.status?(0,d.jsx)(r.Z,{share:v.share,shareClass:"tb_px_share_container",item:v,wallID:x,ownerId:g}):"",T?(0,d.jsx)(i.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(p,{itemData:v,wallID:x,ownerId:g,ThemeID:null===u||void 0===u?void 0:u.widgetTheme,wall:D},"img".concat(w,"_").concat(null===v||void 0===v?void 0:v.id))}):"",z?(0,d.jsx)(i.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(c,{ownerId:g,postTime:null===v||void 0===v?void 0:v.createdAt,author:null===v||void 0===v?void 0:v.author,network:null===v||void 0===v?void 0:v.network,font:_,personalization:u,ThemeRule:_},"img".concat(w,"_").concat(null===v||void 0===v?void 0:v.id))}):null]})})})};var u=o(43411),m=o(43635),_=o(20678);class b extends i.Component{constructor(){super(...arguments),this.state={postData:[]}}componentDidMount(){const{heightUpdate:e}=this.props;setTimeout((()=>e()),1e3)}componentDidUpdate(e,t){return e.postData!==this.props.postData}render(){const{postData:e,completeDataObject:t,adjustWidth:o,wall:i,clickToShowPopUp:l,cardNumber:s,onClickToCTA:a,postSizeInPx:r,onClickPopUpSlider:c}=this.props;let p=e.length;if(i&&1==i.Personalization.fitRow&&e.length>=parseInt(s)){let t=e.length/parseInt(s);p=parseInt(s)*parseInt(t)}return(0,d.jsx)(_.Z,{wall:i,parentId:"tb_marquee",renderID:"pixel",children:(0,d.jsx)("div",{id:"tb_marquee",children:(0,d.jsx)(n(),{id:"pixel",className:"tb_px_post_container",tabIndex:"0","aria-label":"There are ".concat(e&&(null===e||void 0===e?void 0:e.length)>0?null===e||void 0===e?void 0:e.length:0," posts in the feed"),elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_px_post_wrapper",horizontalOrder:!1,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:(null===e||void 0===e?void 0:e.length)>0&&e.map(((e,n)=>{var s,p;const h=t[e];return(0,d.jsx)(v,{ownerId:null===i||void 0===i||null===(s=i.Wall)||void 0===s?void 0:s.owner,itemData:h,itemIndex:n,adjustWidth:o,personalization:null===i||void 0===i?void 0:i.Personalization,ThemeRule:null===i||void 0===i?void 0:i.ThemeRule,wallID:null===i||void 0===i||null===(p=i.Wall)||void 0===p?void 0:p.id,clickToShowPopUp:l,onClickToCTA:a,postSizeInPx:r,wall:i,onClickPopUpSlider:c},"sqr_crd_".concat(n,"_").concat(null===h||void 0===h?void 0:h.id))}))})})})}}const w=(0,u.$j)((e=>({postHeight:e.postHeight.data})),(e=>({managePostHeight:t=>e((0,m.B0)(t))})))(b)}}]);