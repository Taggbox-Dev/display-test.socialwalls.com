"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2841],{5744:(e,t,o)=>{o.d(t,{Z:()=>a});var i=o(47313),n=o(43635),s=o(35179),l=o(46417);class a extends i.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{item:o,wallID:i,ownerId:l}=this.props;t.stopPropagation(),s.ZQ||(0,n.S5)({type:2,action:2,wall:i,feed:o.feedId,post:o.referenceId?o.referenceId:o.id,owner:l}),(0,n.Fv)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{share:e,shareClass:t}=this.props;return(0,l.jsxs)("div",{className:"tb_share_wrapper ".concat(t),children:[(0,l.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(s.ZQ?"tb-share-fill":"tb-share"),children:(0,l.jsx)("div",{})}),(0,l.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[e.facebook?(0,l.jsx)("div",{className:"tb_share_icon_list",children:(0,l.jsx)("div",{onClick:this.onClickData(e.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,l.jsx)("div",{})})}):"",e.twitter?(0,l.jsx)("div",{className:"tb_share_icon_list",children:(0,l.jsx)("div",{onClick:this.onClickData(e.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,l.jsx)("div",{})})}):"",e.linkedin?(0,l.jsx)("div",{className:"tb_share_icon_list",children:(0,l.jsx)("div",{onClick:this.onClickData(e.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,l.jsx)("div",{})})}):""]})]})}}},12841:(e,t,o)=>{o.r(t),o.d(t,{default:()=>v});var i=o(47313),n=o(17739),s=o(35179),l=o(5744),a=o(46417);const d=i.lazy((()=>o.e(3857).then(o.bind(o,33857)))),r=i.lazy((()=>Promise.all([o.e(6119),o.e(510),o.e(2006)]).then(o.bind(o,3891)))),c=i.lazy((()=>Promise.all([o.e(6390),o.e(622),o.e(8342)]).then(o.bind(o,62245)))),p=s.ZQ?null:200,h=e=>{let{itemData:t,personalization:o,adjustWidth:h,ThemeRule:u,clickToShowPopUp:_,itemIndex:m,wallID:v,ownerId:b,postSizeInPx:x,wall:w,onClickPopUpSlider:g}=e;const I=(0,i.useRef)(null),f=2===(null===t||void 0===t?void 0:t.type)||3===(null===t||void 0===t?void 0:t.type)||4===(null===t||void 0===t?void 0:t.type)||5===(null===t||void 0===t?void 0:t.type),j=o.trimcontent?(0,n.Sv)(null===t||void 0===t?void 0:t.content,p):null===t||void 0===t?void 0:t.content,k=x.adjustWidth<250,D=0==u.postHover&&s.ig?"light":"dark",C=s.Jx?"tb_g_p_color_overlay":"tb_g_p_post_overlay-"+D,T={backgroundColor:s.Jx?u.backgroundColor:""};(0,i.useEffect)((()=>{s.nX&&(0,n.YN)(I)}),[]);const P=!!(null!==t&&void 0!==t&&t.hotspot&&(null===t||void 0===t?void 0:t.ugc_products.length)>0),N=!(!s.ig||null!==t&&void 0!==t&&t.hotspot||!((null===t||void 0===t?void 0:t.ugc_products.length)>0));return(0,i.useEffect)((()=>{null!==t&&void 0!==t&&t.isPopUp&&g(m,t)}),[m,null===t||void 0===t?void 0:t.isPopUp,t]),(0,a.jsx)("div",{id:"tb-sp-post-".concat(null===t||void 0===t?void 0:t.id),className:"tb_g_p_post_wrapper".concat(k?" tb_g_p_post_wrapper2x":""),style:{width:"".concat(h,"%"),padding:o.padding/2},"tb-network":null===t||void 0===t?void 0:t.network.id,"tb-product":N?1:P?2:0,tabIndex:"0",role:"article","aria-label":"Post ".concat(parseInt(m)+1,",").concat(j),ref:I,"post-id":null!==t&&void 0!==t&&t.referenceId?null===t||void 0===t?void 0:t.referenceId:null===t||void 0===t?void 0:t.id,"feed-id":null===t||void 0===t?void 0:t.feedId,children:(0,a.jsx)("div",{className:"tb_g_p_post_in",onClick:_(m,t),children:(0,a.jsxs)("div",{className:"tb_g_p_post_media_wrapp",children:[null!==t&&void 0!==t&&t.share.status?(0,a.jsx)(l.Z,{share:null===t||void 0===t?void 0:t.share,shareClass:"tb_g_p_share_container",item:t,wallID:v,ownerId:b}):"",f?(0,a.jsx)(i.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(r,{itemData:t,wallID:v,ownerId:b,ThemeID:o.widgetTheme,wall:w},"img".concat(m,"_").concat(null===t||void 0===t?void 0:t.id))}):"",s.P2?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"tb_g_p_post_details",children:[(0,a.jsx)("div",{className:"tb_g_p_contant_wrapper",children:u.hideContent&&1!=(null===t||void 0===t?void 0:t.type)?"":(0,a.jsx)(i.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(c,{contentClass:"tb_g_p_content",item:t,content:j,font:u,ThemeRule:u,personalization:o,contentTitle:null===t||void 0===t?void 0:t.contentTitle})})}),(0,a.jsx)(i.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:(0,a.jsx)(d,{ownerId:b,postTime:null===t||void 0===t?void 0:t.createdAt,author:null===t||void 0===t?void 0:t.author,network:null===t||void 0===t?void 0:t.network,font:u,personalization:o,ThemeRule:u})})]}),(0,a.jsx)("div",{className:"tb_g_p_post_overlay ".concat(C),style:T,children:(0,a.jsx)("div",{})})]}):null]})})})};var u=o(43411),_=o(43635);class m extends i.Component{constructor(){super(...arguments),this.state={modifiedData:[],currentIndex:0,replaceId:0},this.onLoadData=()=>{const{postData:e,wall:t,heightUpdate:o}=this.props;if(s.aL)this.setState({modifiedData:e,currentIndex:0});else{var i=[];e.map(((e,o)=>{o<t.ThemeRule.numberOfCoumn&&i.push(e)})),this.setState({modifiedData:i,currentIndex:parseInt(t.ThemeRule.numberOfCoumn)-1},(()=>this.onFlipPost()))}setTimeout((()=>o()),1e3)},this.onFlipPost=()=>{const{wall:e}=this.props;setTimeout((()=>{const{postData:e,wall:t}=this.props,{currentIndex:o,replaceId:i,modifiedData:n}=this.state;let s=o+1;s>=e.length&&(s=0),n[i]=e[s];let l=i+1;l>parseInt(t.ThemeRule.numberOfCoumn)&&(l=0),this.setState({modifiedData:n,currentIndex:s,replaceId:l},(()=>this.onFlipPost()))}),1e3*e.ThemeRule.slideDelay)}}componentDidMount(){this.onLoadData()}componentWillReceiveProps(e){this.props.postData!==e.postData&&this.onLoadData()}componentDidUpdate(e,t){return e.postData!==this.props.postData||(t.currentIndex!==this.state.currentIndex||t.replaceId!==this.state.replaceId)}render(){const{postData:e,completeDataObject:t,adjustWidth:o,wall:i,clickToShowPopUp:n,cardNumber:s,onClickToCTA:l,postSizeInPx:d,onClickPopUpSlider:r}=this.props,{modifiedData:c}=this.state;i.ThemeRule.multiRow&&0!==i.ThemeRule.multiRow&&i.ThemeRule.multiRow;return(0,a.jsx)("div",{tabIndex:"0","aria-label":"There are ".concat(e&&e.length>0?e.length:0," posts in the feed"),role:"feed",className:"tb_g_p_post_container",children:c&&c.length>0&&c.map(((e,s)=>{const c=t[e];return(0,a.jsx)(h,{ownerId:i.Wall.owner,itemData:c,itemIndex:s,adjustWidth:o,personalization:i.Personalization,ThemeRule:i.ThemeRule,wallID:i.Wall.id,clickToShowPopUp:n,onClickToCTA:l,postSizeInPx:d,wall:i,onClickPopUpSlider:r},"sqr_crd_".concat(s,"_").concat(e.id))}))})}}const v=(0,u.$j)((e=>({postHeight:e.postHeight.data})),(e=>({managePostHeight:t=>e((0,_.B0)(t))})))((0,i.memo)(m))}}]);