"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2841],{5744:(e,t,s)=>{s.d(t,{Z:()=>l});var a=s(47313),n=s(40475),i=s(35179),o=s(46417);class l extends a.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{item:s,wallID:a,ownerId:o}=this.props;t.stopPropagation(),i.ZQ||(0,n.S5)({type:2,action:2,wall:a,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:o}),(0,n.Fv)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{share:e,shareClass:t}=this.props;return(0,o.jsxs)("div",{className:"tb_share_wrapper ".concat(t),children:[(0,o.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(i.ZQ?"tb-share-fill":"tb-share"),children:(0,o.jsx)("div",{})}),(0,o.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[e.facebook?(0,o.jsx)("div",{className:"tb_share_icon_list",children:(0,o.jsx)("div",{onClick:this.onClickData(e.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,o.jsx)("div",{})})}):"",e.twitter?(0,o.jsx)("div",{className:"tb_share_icon_list",children:(0,o.jsx)("div",{onClick:this.onClickData(e.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,o.jsx)("div",{})})}):"",e.linkedin?(0,o.jsx)("div",{className:"tb_share_icon_list",children:(0,o.jsx)("div",{onClick:this.onClickData(e.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,o.jsx)("div",{})})}):""]})]})}}},12841:(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var a=s(47313),n=s(17739),i=s(35179),o=s(5744),l=s(46417);const r=a.lazy((()=>s.e(3857).then(s.bind(s,33857)))),c=a.lazy((()=>Promise.all([s.e(6119),s.e(510),s.e(2006)]).then(s.bind(s,3891)))),d=a.lazy((()=>Promise.all([s.e(6390),s.e(8342)]).then(s.bind(s,62245)))),p=i.ZQ?null:200,_=e=>{let{itemData:t,personalization:s,adjustWidth:_,ThemeRule:h,clickToShowPopUp:b,itemIndex:m,wallID:u,ownerId:w,postSizeInPx:x,wall:g,onClickPopUpSlider:j}=e;const k=(0,a.useRef)(null),v=2===t.type||3===t.type||4===t.type||5===t.type,f=s.trimcontent?(0,n.Sv)(t.content,p):t.content,I=x.adjustWidth<250,C=0==h.postHover&&i.ig?"light":"dark",T=i.Jx?"tb_g_p_color_overlay":"tb_g_p_post_overlay-"+C,P={backgroundColor:i.Jx?h.backgroundColor:""};(0,a.useEffect)((()=>{i.nX&&(0,n.YN)(k)}),[]);const N=!!(t.hotspot&&t.ugc_products.length>0),D=!!(i.ig&&!t.hotspot&&t.ugc_products.length>0);return(0,a.useEffect)((()=>{t.isPopUp&&j(m,t)}),[m,t.isPopUp,t]),(0,l.jsx)("div",{id:"tb-sp-post-".concat(t.id),className:"tb_g_p_post_wrapper".concat(I?" tb_g_p_post_wrapper2x":""),style:{width:"".concat(_,"%"),padding:s.padding/2},"tb-network":t.network.id,"tb-product":D?1:N?2:0,tabIndex:"0",role:"article","aria-label":"Post ".concat(parseInt(m)+1,",").concat(f),ref:k,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,children:(0,l.jsx)("div",{className:"tb_g_p_post_in".concat(i.ig?" tb_g_p_post_ani":""),onClick:b(m,t),children:(0,l.jsxs)("div",{className:"tb_g_p_post_media_wrapp",children:[t.share.status?(0,l.jsx)(o.Z,{share:t.share,shareClass:"tb_g_p_share_container",item:t,wallID:u,ownerId:w}):"",v?(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(c,{itemData:t,wallID:u,ownerId:w,ThemeID:s.widgetTheme,wall:g},"img".concat(m,"_").concat(t.id))}):"",i.P2?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"tb_g_p_post_details",children:[(0,l.jsx)("div",{className:"tb_g_p_contant_wrapper",children:h.hideContent&&1!=t.type?"":(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(d,{contentClass:"tb_g_p_content",item:t,content:f,font:h,ThemeRule:h,personalization:s,contentTitle:t.contentTitle})})}),(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(r,{ownerId:w,postTime:t.createdAt,author:t.author,network:t.network,font:h,personalization:s,ThemeRule:h})})]}),(0,l.jsx)("div",{className:"tb_g_p_post_overlay ".concat(T),style:P,children:(0,l.jsx)("div",{})})]}):null]})})})};var h=s(43411),b=s(40475);class m extends a.PureComponent{constructor(){super(...arguments),this.state={postData:[]}}render(){const{postData:e,completeDataObject:t,adjustWidth:s,wall:a,clickToShowPopUp:n,cardNumber:i,onClickToCTA:o,postSizeInPx:r,onClickPopUpSlider:c}=this.props;let d=a.ThemeRule.multiRow&&0!==a.ThemeRule.multiRow?a.ThemeRule.multiRow:1;for(var p=[],h=0,b=e.length;h<b;)p.push(e.slice(h,h+=d));return(0,l.jsx)("div",{tabIndex:"0","aria-label":"There are ".concat(e&&e.length>0?e.length:0," posts in the feed"),role:"feed",className:"tb_g_p_post_container",children:e&&e.length>0&&e.map(((e,i)=>{const d=t[e];return(0,l.jsx)(_,{ownerId:a.Wall.owner,itemData:d,itemIndex:i,adjustWidth:1==d.highlight?2*s:s,personalization:a.Personalization,ThemeRule:a.ThemeRule,wallID:a.Wall.id,clickToShowPopUp:n,onClickToCTA:o,postSizeInPx:r,wall:a,onClickPopUpSlider:c},"sqr_crd_".concat(i,"_").concat(e.id))}))})}}const u=(0,h.$j)((e=>({postHeight:e.postHeight.data})),(e=>({managePostHeight:t=>e((0,b.B0)(t))})))(m)}}]);