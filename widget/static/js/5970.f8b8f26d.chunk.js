"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5970],{65970:(t,e,a)=>{a.r(e),a.d(e,{default:()=>w});var n=a(72791),o=a(39852),s=a.n(o),c=a(46535),i=a(2703),l=a(80184);const r=n.lazy((()=>a.e(9337).then(a.bind(a,29337)))),d=n.lazy((()=>a.e(2985).then(a.bind(a,22985)))),p=n.lazy((()=>a.e(9036).then(a.bind(a,19036)))),h=n.lazy((()=>Promise.all([a.e(4867),a.e(6332),a.e(7033)]).then(a.bind(a,23450)))),_=n.lazy((()=>a.e(6243).then(a.bind(a,16243)))),m=n.lazy((()=>a.e(1589).then(a.bind(a,31589)))),b=c.ZQ?null:200,u=t=>{let{itemData:e,personalization:a,adjustWidth:o,ThemeRule:s,clickToShowPopUp:u,itemIndex:g,wallID:x,ownerId:j,onClickToCTA:w,wall:k,onClickPopUpSlider:D}=t;(0,n.useEffect)((()=>{e.isPopUp&&D(g,e)}),[g,e.isPopUp,e]);const T=1!==e.type,S=e.rating>0,f=e.rating>0?"tb_cc_rating_content":"tb_cc_content",C=c.ZQ&&(0,i.mD)(5)?"tb_cc_rating_content_review":null,y=1===e.type&&a.textDecorate?"tb_cc_text_decoration tb_cc_text_post":"",I=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),v=!(!(I||s.socialAction||s.shareOption)||c.bX),P=a.trimcontent?(0,i.Sv)(e.content,b):e.content;c.bX&&s.spacing;return(0,l.jsx)("div",{id:"tb-cc-post-".concat(e.id),className:"tb_cc_post_wrapper",style:{width:"".concat(o,"%"),padding:a.padding/2},"tb-network":e.network.icon,tabIndex:"0","area-label":P,role:"article",children:(0,l.jsxs)("div",{className:"tb_cc_post_in",onClick:u(g,e),role:"button","aria-roledescription":"Click to open pop up",tabIndex:"0",children:[c.ZQ?T?(0,l.jsx)("div",{className:"tb_cc_post_media_wrapp",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:(0,l.jsx)(n.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(d,{itemData:e,wallID:x,wall:k,ownerId:j},"img".concat(g,"_").concat(e.id))})}):"":null,(0,l.jsxs)("div",{className:"tb_cc_contant_wrapper",children:[(0,l.jsx)(n.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(r,{ownerId:j,postTime:e.createdAt,author:e.author,network:e.network,font:s,personalization:a,ThemeRule:s})}),S&&(0,i.mD)(5)?(0,l.jsx)("div",{className:"tb_cc_rating__",children:(0,l.jsx)(n.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(p,{rating:e.rating,network:e.network})})}):"",s.hideContent&&1!=e.type||(0,i.mD)(63)?"":(0,l.jsx)(n.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(h,{item:e,contentClass:"".concat(f," ").concat(C," ").concat(y),content:P,font:s,ThemeRule:s,personalization:a,contentTitle:e.contentTitle})}),S&&!(0,i.mD)(5)?(0,l.jsx)("div",{className:"tb_cc_rating__",children:(0,l.jsx)(n.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(p,{rating:e.rating,network:e.network})})}):""]}),c.ZQ||(0,i.mD)(62)||(0,i.mD)(78)||(0,i.mD)(66)?null:T?(0,l.jsx)("div",{className:"tb_cc_post_media_wrapp",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:(0,l.jsx)(n.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(d,{itemData:e,wallID:x,wall:k,ownerId:j},"img".concat(g,"_").concat(e.id))})}):"",v||I||s.shareOption?(0,l.jsxs)("div",{className:"tb_cc_post_actions",children:[I?(0,l.jsx)("div",{className:"tb_cc_post_cta",children:(0,l.jsx)(n.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(_,{ctaClass:"tb_cc_post_cta_btn",cta:e.cta,item:e,onClickToCTA:w})})}):"",v?(0,l.jsx)(n.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(m,{itemData:e,ThemeRule:s})}):""]}):""]})})};var g=a(77581),x=a(11225);class j extends n.PureComponent{constructor(){super(...arguments),this.state={postData:[],loadData:1},this.onLoadMasonry=()=>{this.editorHeight()},this.editorHeight=()=>{var t=document.querySelector(".tb_cc_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight("".concat(e))}}}}componentDidMount(){const{postData:t}=this.props,e=this;setTimeout((()=>this.setState({postData:t,loadData:1},(()=>this.onLoadMasonry()))),100),window.addEventListener("resize",(function(t){e.editorHeight()}),!0)}componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e,loadData:1},(()=>this.onLoadMasonry()))}render(){const{postData:t,completeDataObject:e,adjustWidth:a,wall:n,languageSetting:o,clickToShowPopUp:c,onClickToCTA:i,onClickPopUpSlider:r}=this.props,{loadData:d}=this.state;return(0,l.jsx)(s(),{className:"tb_cc_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_cc_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:d?t&&t.length>0&&t.map(((s,d)=>{const p=e[s];return(0,l.jsx)(u,{ownerId:n.Wall.owner,itemData:p,itemIndex:d,adjustWidth:a,personalization:n.Personalization,ThemeRule:n.ThemeRule,completeDataObject:e,postData:t,languageSetting:o,wallID:n.Wall.id,clickToShowPopUp:c,onClickToCTA:i,wall:n,onClickPopUpSlider:r},"cls_crd_".concat(d,"_").concat(s.id))})):null})}}const w=(0,g.$j)((t=>({postHeight:t.postHeight.data})),(t=>({managePostHeight:e=>t((0,x.B0)(e))})))(j)}}]);
//# sourceMappingURL=5970.f8b8f26d.chunk.js.map