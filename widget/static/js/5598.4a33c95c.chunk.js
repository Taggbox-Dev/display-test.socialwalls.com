"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5598,5810],{15598:(e,t,s)=>{s.r(t),s.d(t,{default:()=>v,getPostWidth:()=>x});var n=s(47313),i=s(43411),l=s(43635),a=s(17739),o=s(35179),c=s(5744),r=s(25810),d=s(11502),h=s(46417);const p=n.lazy((()=>s.e(9141).then(s.bind(s,19141)))),_=n.lazy((()=>Promise.all([s.e(6119),s.e(510),s.e(4161)]).then(s.bind(s,20421)))),m=n.lazy((()=>Promise.all([s.e(6390),s.e(622),s.e(8342)]).then(s.bind(s,62245)))),u=o.ZQ?null:200,b=e=>{let{itemData:t,personalization:s,adjustWidth:i,ThemeRule:l,clickToShowPopUp:b,itemIndex:w,wallID:x,ownerId:j,postSizeInPx:v,wall:g,onClickPopUpSlider:k}=e;const f=(0,n.useRef)(null),I=1!==t.type,D=s.trimcontent?(0,a.Sv)(t.content,u):t.content,T=v.adjustWidth<250;(0,n.useEffect)((()=>{o.nX&&(0,a.YN)(f)}),[]);const C=!!(t.hotspot&&t.ugc_products.length>0),P=!!(o.ig&&!t.hotspot&&t.ugc_products.length>0),N=0==l.postHover&&o.ig?"light":"dark";return(0,n.useEffect)((()=>{t.isPopUp&&k(w,t)}),[w,t.isPopUp,t]),(0,h.jsx)("div",{id:"tb-sp-post-".concat(t.id),className:"tb_ct_post_wrapper".concat(T?" tb_ct_post_wrapper2x":""),style:{width:"".concat(i,"%"),padding:s.padding/2,float:"left"},"tb-network":t.network.id,"tb-product":P?1:C?2:0,tabIndex:"0",role:"article","aria-label":"Post ".concat(parseInt(w)+1,",").concat(D),ref:f,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,children:(0,h.jsx)("div",{className:"tb_ct_post_in",onClick:b(w,t),children:(0,h.jsxs)("div",{className:"tb_ct_post_media_wrapp",children:[t.share.status&&!o.ig?(0,h.jsx)(c.Z,{share:t.share,shareClass:"tb_ct_share_container",item:t,wallID:x,ownerId:j}):"",I?(0,h.jsx)(n.Suspense,{fallback:(0,h.jsx)(h.Fragment,{}),children:(0,h.jsx)(_,{itemData:{...t,postFileNew:t.filename},wallID:x,ownerId:j,ThemeID:s.widgetTheme,wall:g},"img".concat(w,"_").concat(t.id))}):"",C?null:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:"tb_ct_post_details",children:o.ig?(0,h.jsxs)("div",{className:"tb_ct_social_",children:[(0,h.jsx)(r.default,{networkClass:"tb_ct_social__ico",network:t.network,isDefault:1===l.iconType,ThemeRule:l,Personalization:s}),P?(0,h.jsx)(d.Z,{ThemeRule:l,btnClass:"tb_ct_btn_wrap"}):null]}):null}),(0,h.jsx)("div",{className:"tb_ct_post_overlay tb_ct_post_overlay-".concat(N),children:(0,h.jsx)("div",{})})]}),(0,a.mD)(68)?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:"tb_sp_contant_wrapper",children:l.hideContent&&1!=t.type?"":(0,h.jsx)(n.Suspense,{fallback:(0,h.jsx)(h.Fragment,{}),children:(0,h.jsx)(m,{contentClass:"tb_sp_content",item:t,content:D,font:l,ThemeRule:l,personalization:s,contentTitle:t.contentTitle})})}),(0,h.jsx)(n.Suspense,{fallback:(0,h.jsx)(h.Fragment,{}),children:(0,h.jsx)(p,{ownerId:j,postTime:t.createdAt,author:t.author,network:t.network,font:l,personalization:s,ThemeRule:l},"img".concat(w,"_").concat(t.id))})]}):null]})})})},w=e=>{let{wall:t,largeDiv:s,smallDiv:n,itemData:i,completeDataObject:l,parentID:a,itemIndex:o,clickToShowPopUp:c,onClickToCTA:r,postSizeInPx:d,adjustWidth:p,onClickPopUpSlider:_}=e;const m=t.ThemeRule.highlightPosition,u=o%2,w={width:s+"%",float:"0"==u?"right"==m?"right":"left":"right"==m?"left":"right"},x={width:n+"%",float:"right"==m?"left":"right"};return i&&i.length>0?(0,h.jsxs)("div",{className:"ts_cs_post_row",style:{width:"100%"},children:[(0,h.jsx)("div",{className:"ts_cs_post_large",style:w,children:(0,h.jsx)(b,{ownerId:t.Wall.owner,itemData:l[i[0]],itemIndex:o,adjustWidth:100,personalization:t.Personalization,ThemeRule:t.ThemeRule,wallID:t.Wall.id,clickToShowPopUp:c,onClickToCTA:r,postSizeInPx:d,wall:t,completeDataObject:l,onClickPopUpSlider:_},"sqr_crd_".concat(0,"_",l[i[0]].id))}),(0,h.jsxs)("div",{className:"ts_cs_post_small",style:x,children:[i&&i.length>0?i.map(((e,s)=>{const n=l[e];return 0!=s?(0,h.jsx)(b,{ownerId:t.Wall.owner,itemData:n,itemIndex:s,adjustWidth:p,personalization:t.Personalization,ThemeRule:t.ThemeRule,wallID:t.Wall.id,clickToShowPopUp:c,onClickToCTA:r,postSizeInPx:d,wall:t,completeDataObject:l,onClickPopUpSlider:_},"sqr_crd_".concat(s,"_").concat(e.id)):null})):null," "]})]}):null},x=(e,t)=>{const s=(e,t)=>({cardWidth:t,largeDiv:2*e,smallDiv:100-2*e});switch(t){case 3:return s(100/3,100);case 5:return s(e>767?25:100/3,e>767?50:100);case 7:return s(e>767?20:100/3,e>767?100/3:100);case 9:return s(e>767?100/6:100/3,e>767?25:100);default:return s(e<767?100/3:100,100)}};class j extends n.PureComponent{constructor(){super(...arguments),this.state={postData:[],windowWidth:window.innerWidth}}componentDidMount(){const{renderId:e}=this.props;e.renderId&&this.setState({windowWidth:document.getElementById(e.renderId).clientWidth})}render(){const{postData:e,completeDataObject:t,wall:s,clickToShowPopUp:n,cardNumber:i,onClickToCTA:l,postSizeInPx:a,onClickPopUpSlider:o}=this.props,{windowWidth:c}=this.state;let r=e.length;if(s&&1==s.Personalization.fitRow&&e.length>=parseInt(i)){let t=e.length/parseInt(i);r=parseInt(i)*parseInt(t)}var d="";const p=s.ThemeRule.numberOfCoumn,{cardWidth:_,largeDiv:m,smallDiv:u}=x(c,p);d=c<768?3:p||1;for(var b=0,j=e.length,v=[];b<j;)v.push(e.slice(b,b+=d));var g=c<768?"3":p;return(0,h.jsx)("div",{tabIndex:"0","aria-label":"There are ".concat(e&&e.length>0?e.length:0," posts in the feed"),role:"feed",className:"tb_ct_post_container",children:v&&v.length>0&&v.map(((e,i)=>e.length==g?(0,h.jsx)(w,{ownerId:s.Wall.owner,itemData:e,itemIndex:i,adjustWidth:_,personalization:s.Personalization,ThemeRule:s.ThemeRule,wallID:s.Wall.id,clickToShowPopUp:n,onClickToCTA:l,postSizeInPx:a,wall:s,completeDataObject:t,largeDiv:m,smallDiv:u,onClickPopUpSlider:o},"sqr_crd_".concat(i,"_").concat(e.id)):null))})}}const v=(0,i.$j)((e=>({postHeight:e.postHeight.data})),(e=>({managePostHeight:t=>e((0,l.B0)(t))})))(j)},25810:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var n=s(47313),i=s(35179),l=s(46417);const a=n.lazy((()=>s.e(5867).then(s.bind(s,95867))));class o extends n.PureComponent{render(){const{network:e,networkClass:t,ThemeRule:s,isDefault:o,Personalization:c}=this.props,r=!!o&&(7!==(null===e||void 0===e?void 0:e.id)&&4!==(null===e||void 0===e?void 0:e.id)&&36!==(null===e||void 0===e?void 0:e.id)),d=i.ZQ&&36===(null===e||void 0===e?void 0:e.id)?"tagembed":(null===e||void 0===e?void 0:e.icon)||"";return r?(0,l.jsx)("div",{className:"".concat(t," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,l.jsx)("div",{})}):(0,l.jsxs)(n.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:[" ",(0,l.jsx)(a,{network:e,networkClass:t})]})}}},5744:(e,t,s)=>{s.d(t,{Z:()=>o});var n=s(47313),i=s(43635),l=s(35179),a=s(46417);class o extends n.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{item:s,wallID:n,ownerId:a}=this.props;t.stopPropagation(),l.ZQ||(0,i.S5)({type:2,action:2,wall:n,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:a}),(0,i.Fv)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{share:e,shareClass:t}=this.props;return(0,a.jsxs)("div",{className:"tb_share_wrapper ".concat(t),children:[(0,a.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(l.ZQ?"tb-share-fill":"tb-share"),children:(0,a.jsx)("div",{})}),(0,a.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[e.facebook?(0,a.jsx)("div",{className:"tb_share_icon_list",children:(0,a.jsx)("div",{onClick:this.onClickData(e.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,a.jsx)("div",{})})}):"",e.twitter?(0,a.jsx)("div",{className:"tb_share_icon_list",children:(0,a.jsx)("div",{onClick:this.onClickData(e.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,a.jsx)("div",{})})}):"",e.linkedin?(0,a.jsx)("div",{className:"tb_share_icon_list",children:(0,a.jsx)("div",{onClick:this.onClickData(e.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,a.jsx)("div",{})})}):""]})]})}}},11502:(e,t,s)=>{s.d(t,{Z:()=>l});var n=s(17739),i=s(46417);const l=e=>{let{ThemeRule:t,btnClass:s}=e;const l={fontFamily:t.css_font};return(0,i.jsx)("div",{className:"tb_shop_btn_wrap ".concat(s),children:(0,i.jsx)("div",{className:"tb_shop_btn".concat(t.postHover||(0,n.mD)(4)||(0,n.mD)(55)?" tb_shop_btn_light":" tb_shop_btn_dark"),style:l,children:t.shoppingText})})}}}]);