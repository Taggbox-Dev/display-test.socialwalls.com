"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[616],{10616:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var o=a(47313),n=a(17739),s=a(35179),i=a(46417);const l=(0,o.lazy)((()=>a.e(8401).then(a.bind(a,88401)))),c=(0,o.lazy)((()=>a.e(2861).then(a.bind(a,92861)))),r=(0,o.lazy)((()=>a.e(7138).then(a.bind(a,7138)))),d=(0,o.lazy)((()=>a.e(905).then(a.bind(a,90905)))),p=(0,o.lazy)((()=>a.e(5744).then(a.bind(a,5744)))),h=(0,o.lazy)((()=>a.e(2675).then(a.bind(a,32675)))),_=e=>{let{itemData:t,personalization:a,adjustWidth:_,ThemeRule:m,clickToShowPopUp:b,itemIndex:u,wallID:j,ownerId:w,onClickToCTA:k,wall:g,onClickPopUpSlider:x}=e;const T=(0,o.useRef)(null),C={width:"".concat(_,"%"),padding:a.padding/2},D=1!==t.type,f=t.rating>0,I=!!(t.cta&&Object.keys(t.cta).length>0&&t.cta.status),P=!!(t.ugc_products&&t.ugc_products.length>0),S=!(!P||0!==t.hotspot),U=!(!t.hotspot||!P);return(0,o.useEffect)((()=>{s.ig&&(0,n.YN)(T)}),[]),(0,o.useEffect)((()=>{t.isPopUp&&x(u,t)}),[u,t.isPopUp,t]),(0,i.jsx)("div",{id:"tb-cp-post-".concat(t.id),className:"tb_cp_post_wrapper",style:C,"tb-network":t.network.id,"tb-product":S?1:U?2:0,ref:T,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,tabIndex:"0","area-label":t.content,role:"article",children:(0,i.jsxs)("div",{className:"tb_cp_post_in",onClick:b(u,t),role:"button","aria-roledescription":"Click to open pop up",tabIndex:"0",children:[(0,i.jsxs)("div",{className:"tb_cp_post_media_wrapper",children:[t.share.status?(0,i.jsx)(o.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:(0,i.jsx)(p,{share:t.share,shareClass:"tb_cp_share_container",item:t,wallID:j,ownerId:w})}):"",D?(0,i.jsx)(o.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:(0,i.jsx)(c,{itemData:t,wallID:j,ownerId:w,ThemeID:a.widgetTheme,wall:g},"img".concat(u,"_").concat(t.id))}):"",s.ZQ&&f?(0,i.jsxs)("div",{className:"tb_cp_rating__",children:[(0,i.jsx)(o.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:(0,i.jsx)(d,{rating:t.rating,network:t.network})})," "]}):"",I?(0,i.jsx)("div",{className:"tb_cp_post_cta",children:(0,i.jsx)(o.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:(0,i.jsx)(r,{ctaClass:"tb_cp_post_cta_btn",cta:t.cta,item:t,onClickToCTA:k})})}):""]}),(0,i.jsx)("div",{className:"tb_cp_contant_wrapper",children:(0,i.jsx)(o.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:(0,i.jsx)(l,{ownerId:w,postTime:t.createdAt,author:t.author,network:t.network,font:t.font,personalization:a,ThemeRule:m})})}),m.socialAction?(0,i.jsx)(o.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:(0,i.jsx)(h,{itemData:t,ThemeRule:m,ThemeID:a.widgetTheme,actionClass:"tb_cp_social_action__ ".concat(s.ZQ?"tb_cp_social_action_bg":"","}")})}):""]})})};var m=a(43411),b=a(61395),u=a.n(b),j=a(43635);const w=e=>{let{loadData:t,postData:a,completeDataObject:o,BrandingPosition:n,clickToShowPopUp:s,wall:l,adjustWidth:c,onClickToCTA:r,onClickPopUpSlider:d}=e;return t?a&&a.length>0&&a.map(((e,t)=>{const a=o[e];return parseInt(n),(0,i.jsx)(_,{ownerId:l.Wall.owner,itemData:a,itemIndex:t,adjustWidth:c,personalization:l.Personalization,ThemeRule:l.ThemeRule,wallID:l.Wall.id,clickToShowPopUp:s,onClickToCTA:r,wall:l,onClickPopUpSlider:d},"Classic_Card_".concat(t,"_").concat(e.id))})):null};class k extends o.PureComponent{constructor(){super(...arguments),this.state={postData:[],loadData:1}}componentDidMount(){const{postData:e}=this.props;this.setState({postData:e,loadData:1})}render(){const{postData:e,completeDataObject:t,adjustWidth:a,wall:o,clickToShowPopUp:n,onClickToCTA:l,onClickPopUpSlider:c}=this.props,{loadData:r}=this.state;return s.ig?(0,i.jsx)(u(),{className:"tb_cp_post_container",tabIndex:"0","aria-label":"There are ".concat(e&&e.length>0?e.length:0," posts in the feed"),role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_cp_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:(0,i.jsx)(w,{loadData:r,wall:o,clickToShowPopUp:n,postData:e,completeDataObject:t,BrandingPosition:4,adjustWidth:a,onClickToCTA:l,onClickPopUpSlider:c})}):(0,i.jsx)("div",{className:"tb_cp_post_container",children:(0,i.jsx)(w,{loadData:r,wall:o,clickToShowPopUp:n,postData:e,completeDataObject:t,BrandingPosition:4,adjustWidth:a,onClickToCTA:l,onClickPopUpSlider:c})})}}const g=(0,m.$j)((e=>({})),(e=>({managePostHeight:t=>e((0,j.B0)(t))})))(k)}}]);