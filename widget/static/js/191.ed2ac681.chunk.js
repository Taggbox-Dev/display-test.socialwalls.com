"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[191],{25810:(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var n=s(47313),a=s(35179),o=s(46417);const i=n.lazy((()=>s.e(5867).then(s.bind(s,95867))));class l extends n.PureComponent{render(){const{network:e,networkClass:t,ThemeRule:s,isDefault:l,Personalization:r}=this.props,c=!!l&&(7!==e.id&&4!==e.id&&36!==e.id),d=a.ZQ&&36==e.id?"tagembed":e.icon;return c?(0,o.jsx)("div",{className:"".concat(t," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,o.jsx)("div",{})}):(0,o.jsxs)(n.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(i,{network:e,networkClass:t})]})}}},5744:(e,t,s)=>{s.d(t,{Z:()=>l});var n=s(47313),a=s(40475),o=s(35179),i=s(46417);class l extends n.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{item:s,wallID:n,ownerId:i}=this.props;t.stopPropagation(),o.ZQ||(0,a.S5)({type:2,action:2,wall:n,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:i}),(0,a.Fv)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{share:e,shareClass:t}=this.props;return(0,i.jsxs)("div",{className:"tb_share_wrapper ".concat(t),children:[(0,i.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(o.ZQ?"tb-share-fill":"tb-share"),children:(0,i.jsx)("div",{})}),(0,i.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[e.facebook?(0,i.jsx)("div",{className:"tb_share_icon_list",children:(0,i.jsx)("div",{onClick:this.onClickData(e.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,i.jsx)("div",{})})}):"",e.twitter?(0,i.jsx)("div",{className:"tb_share_icon_list",children:(0,i.jsx)("div",{onClick:this.onClickData(e.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,i.jsx)("div",{})})}):"",e.linkedin?(0,i.jsx)("div",{className:"tb_share_icon_list",children:(0,i.jsx)("div",{onClick:this.onClickData(e.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,i.jsx)("div",{})})}):""]})]})}}},11502:(e,t,s)=>{s.d(t,{Z:()=>o});var n=s(17739),a=s(46417);const o=e=>{let{ThemeRule:t,btnClass:s}=e;const o={fontFamily:t.css_font};return(0,a.jsx)("div",{className:"tb_shop_btn_wrap ".concat(s),children:(0,a.jsx)("div",{className:"tb_shop_btn".concat(t.postHover||(0,n.mD)(4)||(0,n.mD)(55)?" tb_shop_btn_light":" tb_shop_btn_dark"),style:o,children:t.shoppingText})})}},40191:(e,t,s)=>{s.r(t),s.d(t,{default:()=>w});var n=s(47313),a=s(17739),o=s(35179),i=s(5744),l=s(25810),r=s(11502),c=s(46417);const d=n.lazy((()=>s.e(3857).then(s.bind(s,33857)))),p=n.lazy((()=>Promise.all([s.e(6119),s.e(510),s.e(6158),s.e(3629)]).then(s.bind(s,3891)))),h=n.lazy((()=>Promise.all([s.e(6390),s.e(8342)]).then(s.bind(s,62245)))),_=o.ZQ?null:200,b=e=>{let{itemData:t,personalization:s,adjustWidth:b,ThemeRule:m,clickToShowPopUp:u,itemIndex:x,wallID:w,ownerId:j,postSizeInPx:k,wall:g,onClickPopUpSlider:v}=e;const f=(0,n.useRef)(null),C=2===t.type||3===t.type||4===t.type||5===t.type,T=s.trimcontent?(0,a.Sv)(t.content,_):t.content,I=k.adjustWidth<250,N=0==m.postHover&&o.ig?"light":"dark",P=o.Jx?"tb_sp_color_overlay":"tb_sp_post_overlay-"+N,D={backgroundColor:o.Jx?m.backgroundColor:""};(0,n.useEffect)((()=>{o.nX&&(0,a.YN)(f)}),[]);const y=!!(t.hotspot&&t.ugc_products.length>0),R=!!(o.ig&&!t.hotspot&&t.ugc_products.length>0);return(0,n.useEffect)((()=>{t.isPopUp&&v(x,t)}),[x,t.isPopUp,t]),(0,c.jsx)("div",{id:"tb-sp-post-".concat(t.id),className:"tb_sp_post_wrapper".concat(I?" tb_sp_post_wrapper2x":""),style:{width:"".concat(b,"%"),padding:s.padding/2},"tb-network":t.network.id,"tb-product":R?1:y?2:0,tabIndex:"0",role:"article","aria-label":"Post ".concat(parseInt(x)+1,",").concat(T),ref:f,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,children:(0,c.jsx)("div",{className:"tb_sp_post_in".concat(o.ig?" tb_sp_post_ani":""),onClick:u(x,t),children:(0,c.jsxs)("div",{className:"tb_sp_post_media_wrapp",children:[t.share.status?(0,c.jsx)(i.Z,{share:t.share,shareClass:"tb_sp_share_container",item:t,wallID:w,ownerId:j}):"",C?(0,c.jsx)(n.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(p,{itemData:t,wallID:w,ownerId:j,ThemeID:s.widgetTheme,wall:g},"img".concat(x,"_").concat(t.id))}):"",y?null:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"tb_sp_post_details",children:[o.ig?(0,c.jsx)("div",{className:"tb_sp_social_",children:(0,c.jsx)(l.default,{networkClass:"tb_sp_social__ico",network:t.network,isDefault:1===m.iconType,ThemeRule:m,Personalization:s})}):null,R?(0,c.jsx)(r.Z,{ThemeRule:m,btnClass:"tb_sp_btn_wrap"}):null,o.ig?null:(0,c.jsxs)(c.Fragment,{children:[(0,a.mD)(65)?"":(0,c.jsx)("div",{className:"tb_sp_contant_wrapper",children:m.hideContent&&1!=t.type?"":(0,c.jsx)(n.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(h,{contentClass:"tb_sp_content",item:t,content:T,font:m,ThemeRule:m,personalization:s,contentTitle:t.contentTitle})})}),(0,c.jsx)(n.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:(0,c.jsx)(d,{ownerId:j,postTime:t.createdAt,author:t.author,network:t.network,font:m,personalization:s,ThemeRule:m})})]})]}),(0,c.jsx)("div",{className:"tb_sp_post_overlay ".concat(P),style:D,children:(0,c.jsx)("div",{})})]})]})})})};var m=s(43411),u=s(40475);class x extends n.PureComponent{constructor(){super(...arguments),this.state={postData:[]}}render(){const{postData:e,completeDataObject:t,adjustWidth:s,wall:n,clickToShowPopUp:a,cardNumber:o,onClickToCTA:i,postSizeInPx:l,onClickPopUpSlider:r}=this.props;let d=n.ThemeRule.multiRow&&0!==n.ThemeRule.multiRow?n.ThemeRule.multiRow:1;for(var p=[],h=0,_=e.length;h<_;)p.push(e.slice(h,h+=d));return(0,c.jsx)("div",{tabIndex:"0","aria-label":"There are ".concat(e&&e.length>0?e.length:0," posts in the feed"),role:"feed",className:"tb_sp_post_container",children:e&&e.length>0&&e.map(((e,o)=>{const d=t[e];return(0,c.jsx)(b,{ownerId:n.Wall.owner,itemData:d,itemIndex:o,adjustWidth:1==d.highlight?2*s:s,personalization:n.Personalization,ThemeRule:n.ThemeRule,wallID:n.Wall.id,clickToShowPopUp:a,onClickToCTA:i,postSizeInPx:l,wall:n,onClickPopUpSlider:r},"sqr_crd_".concat(o,"_").concat(e.id))}))})}}const w=(0,m.$j)((e=>({postHeight:e.postHeight.data})),(e=>({managePostHeight:t=>e((0,u.B0)(t))})))(x)}}]);