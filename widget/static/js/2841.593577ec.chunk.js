"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2841],{5744:(e,t,o)=>{o.d(t,{Z:()=>s});var i=o(47313),n=o(43635),a=o(35179),l=o(46417);class s extends i.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{item:o,wallID:i,ownerId:l}=this.props;t.stopPropagation(),a.ZQ||(0,n.S5)({type:2,action:2,wall:i,feed:o.feedId,post:o.referenceId?o.referenceId:o.id,owner:l}),(0,n.Fv)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{share:e,shareClass:t}=this.props;return(0,l.jsxs)("div",{className:"tb_share_wrapper ".concat(t),children:[(0,l.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(a.ZQ?"tb-share-fill":"tb-share"),children:(0,l.jsx)("div",{})}),(0,l.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[e.facebook?(0,l.jsx)("div",{className:"tb_share_icon_list",children:(0,l.jsx)("div",{onClick:this.onClickData(e.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,l.jsx)("div",{})})}):"",e.twitter?(0,l.jsx)("div",{className:"tb_share_icon_list",children:(0,l.jsx)("div",{onClick:this.onClickData(e.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,l.jsx)("div",{})})}):"",e.linkedin?(0,l.jsx)("div",{className:"tb_share_icon_list",children:(0,l.jsx)("div",{onClick:this.onClickData(e.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,l.jsx)("div",{})})}):""]})]})}}},12841:(e,t,o)=>{o.r(t),o.d(t,{default:()=>m});var i=o(47313),n=o(17739),a=o(35179),l=o(5744),s=o(46417);const d=i.lazy((()=>o.e(3857).then(o.bind(o,33857)))),r=i.lazy((()=>Promise.all([o.e(6119),o.e(510),o.e(2006)]).then(o.bind(o,3891)))),c=i.lazy((()=>Promise.all([o.e(6390),o.e(622),o.e(8342)]).then(o.bind(o,62245)))),p=a.ZQ?null:200,h=e=>{var t;let{itemData:o,personalization:h,adjustWidth:u,ThemeRule:_,clickToShowPopUp:v,itemIndex:m,wallID:b,ownerId:x,postSizeInPx:w,wall:g,onClickPopUpSlider:I}=e;const f=(0,i.useRef)(null),j=2===(null===o||void 0===o?void 0:o.type)||3===(null===o||void 0===o?void 0:o.type)||4===(null===o||void 0===o?void 0:o.type)||5===(null===o||void 0===o?void 0:o.type),k=h.trimcontent?(0,n.Sv)(null===o||void 0===o?void 0:o.content,p):null===o||void 0===o?void 0:o.content,D=w.adjustWidth<250,C=0==_.postHover&&a.ig?"light":"dark",T=a.Jx?"tb_g_p_color_overlay":"tb_g_p_post_overlay-"+C,P={backgroundColor:a.Jx?_.backgroundColor:""};(0,i.useEffect)((()=>{a.nX&&(0,n.YN)(f)}),[]);const N=!!(null!==o&&void 0!==o&&o.hotspot&&(null===o||void 0===o?void 0:o.ugc_products.length)>0),S=!(!a.ig||null!==o&&void 0!==o&&o.hotspot||!((null===o||void 0===o?void 0:o.ugc_products.length)>0));return(0,i.useEffect)((()=>{null!==o&&void 0!==o&&o.isPopUp&&I(m,o)}),[m,null===o||void 0===o?void 0:o.isPopUp,o]),(0,s.jsx)("div",{id:"tb-sp-post-".concat(null===o||void 0===o?void 0:o.id),className:"tb_g_p_post_wrapper".concat(D?" tb_g_p_post_wrapper2x":""),style:{width:"".concat(u,"%"),padding:h.padding/2},"tb-network":null===o||void 0===o||null===(t=o.network)||void 0===t?void 0:t.id,"tb-product":S?1:N?2:0,tabIndex:"0",role:"article","aria-label":"Post ".concat(parseInt(m)+1,",").concat(k),ref:f,"post-id":null!==o&&void 0!==o&&o.referenceId?null===o||void 0===o?void 0:o.referenceId:null===o||void 0===o?void 0:o.id,"feed-id":null===o||void 0===o?void 0:o.feedId,children:(0,s.jsx)("div",{className:"tb_g_p_post_in",onClick:v(m,o),children:(0,s.jsxs)("div",{className:"tb_g_p_post_media_wrapp",children:[null!==o&&void 0!==o&&o.share.status?(0,s.jsx)(l.Z,{share:null===o||void 0===o?void 0:o.share,shareClass:"tb_g_p_share_container",item:o,wallID:b,ownerId:x}):"",j?(0,s.jsx)(i.Suspense,{fallback:(0,s.jsx)(s.Fragment,{}),children:(0,s.jsx)(r,{itemData:o,wallID:b,ownerId:x,ThemeID:h.widgetTheme,wall:g},"img".concat(m,"_").concat(null===o||void 0===o?void 0:o.id))}):"",a.P2?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"tb_g_p_post_details",children:[(0,s.jsx)("div",{className:"tb_g_p_contant_wrapper",children:_.hideContent&&1!=(null===o||void 0===o?void 0:o.type)?"":(0,s.jsx)(i.Suspense,{fallback:(0,s.jsx)(s.Fragment,{}),children:(0,s.jsx)(c,{contentClass:"tb_g_p_content",item:o,content:k,font:_,ThemeRule:_,personalization:h,contentTitle:null===o||void 0===o?void 0:o.contentTitle})})}),(0,s.jsx)(i.Suspense,{fallback:(0,s.jsx)(s.Fragment,{}),children:(0,s.jsx)(d,{ownerId:x,postTime:null===o||void 0===o?void 0:o.createdAt,author:null===o||void 0===o?void 0:o.author,network:null===o||void 0===o?void 0:o.network,font:_,personalization:h,ThemeRule:_})})]}),(0,s.jsx)("div",{className:"tb_g_p_post_overlay ".concat(T),style:P,children:(0,s.jsx)("div",{})})]}):null]})})})};var u=o(43411),_=o(43635);class v extends i.Component{constructor(){super(...arguments),this.state={modifiedData:[],currentIndex:0,replaceId:0},this.onLoadData=()=>{const{postData:e,wall:t,heightUpdate:o}=this.props;if(a.aL)this.setState({modifiedData:e,currentIndex:0});else{var i=[];e.map(((e,o)=>{o<t.ThemeRule.numberOfCoumn&&i.push(e)})),this.setState({modifiedData:i,currentIndex:parseInt(t.ThemeRule.numberOfCoumn)-1},(()=>this.onFlipPost()))}setTimeout((()=>o()),1e3)},this.onFlipPost=()=>{const{wall:e}=this.props;setTimeout((()=>{const{postData:e,wall:t}=this.props,{currentIndex:o,replaceId:i,modifiedData:n}=this.state;let a=o+1;a>=e.length&&(a=0),n[i]=e[a];let l=i+1;l>parseInt(t.ThemeRule.numberOfCoumn)&&(l=0),this.setState({modifiedData:n,currentIndex:a,replaceId:l},(()=>this.onFlipPost()))}),1e3*e.Personalization.slideDelay)}}componentDidMount(){this.onLoadData()}componentWillReceiveProps(e){this.props.postData!==e.postData&&this.onLoadData()}componentDidUpdate(e,t){return e.postData!==this.props.postData||(t.currentIndex!==this.state.currentIndex||t.replaceId!==this.state.replaceId)}render(){const{postData:e,completeDataObject:t,adjustWidth:o,wall:i,clickToShowPopUp:n,cardNumber:a,onClickToCTA:l,postSizeInPx:d,onClickPopUpSlider:r}=this.props,{modifiedData:c}=this.state;i.ThemeRule.multiRow&&0!==i.ThemeRule.multiRow&&i.ThemeRule.multiRow;return(0,s.jsx)("div",{tabIndex:"0","aria-label":"There are ".concat(e&&e.length>0?e.length:0," posts in the feed"),role:"feed",className:"tb_g_p_post_container",children:c&&c.length>0&&c.map(((e,a)=>{const c=t[e];return(0,s.jsx)(h,{ownerId:i.Wall.owner,itemData:c,itemIndex:a,adjustWidth:o,personalization:i.Personalization,ThemeRule:i.ThemeRule,wallID:i.Wall.id,clickToShowPopUp:n,onClickToCTA:l,postSizeInPx:d,wall:i,onClickPopUpSlider:r},"sqr_crd_".concat(a,"_").concat(e.id))}))})}}const m=(0,u.$j)((e=>({postHeight:e.postHeight.data})),(e=>({managePostHeight:t=>e((0,_.B0)(t))})))((0,i.memo)(v))}}]);