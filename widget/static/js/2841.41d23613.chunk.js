"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2841],{5744:(e,t,a)=>{a.d(t,{Z:()=>l});var s=a(47313),n=a(40475),i=a(35179),o=a(46417);class l extends s.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{item:a,wallID:s,ownerId:o}=this.props;t.stopPropagation(),i.ZQ||(0,n.S5)({type:2,action:2,wall:s,feed:a.feedId,post:a.referenceId?a.referenceId:a.id,owner:o}),(0,n.Fv)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{share:e,shareClass:t}=this.props;return(0,o.jsxs)("div",{className:"tb_share_wrapper ".concat(t),children:[(0,o.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(i.ZQ?"tb-share-fill":"tb-share"),children:(0,o.jsx)("div",{})}),(0,o.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[e.facebook?(0,o.jsx)("div",{className:"tb_share_icon_list",children:(0,o.jsx)("div",{onClick:this.onClickData(e.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,o.jsx)("div",{})})}):"",e.twitter?(0,o.jsx)("div",{className:"tb_share_icon_list",children:(0,o.jsx)("div",{onClick:this.onClickData(e.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,o.jsx)("div",{})})}):"",e.linkedin?(0,o.jsx)("div",{className:"tb_share_icon_list",children:(0,o.jsx)("div",{onClick:this.onClickData(e.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,o.jsx)("div",{})})}):""]})]})}}},12841:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var s=a(47313),n=a(17739),i=a(35179),o=a(5744),l=a(46417);const r=s.lazy((()=>a.e(3857).then(a.bind(a,33857)))),c=s.lazy((()=>Promise.all([a.e(6119),a.e(510),a.e(2006)]).then(a.bind(a,3891)))),d=s.lazy((()=>Promise.all([a.e(6390),a.e(622),a.e(8342)]).then(a.bind(a,62245)))),p=i.ZQ?null:200,h=e=>{let{itemData:t,personalization:a,adjustWidth:h,ThemeRule:_,clickToShowPopUp:m,itemIndex:u,wallID:b,ownerId:x,postSizeInPx:w,wall:g,onClickPopUpSlider:I}=e;const f=(0,s.useRef)(null),j=2===t.type||3===t.type||4===t.type||5===t.type,k=a.trimcontent?(0,n.Sv)(t.content,p):t.content,D=w.adjustWidth<250,v=0==_.postHover&&i.ig?"light":"dark",T=i.Jx?"tb_g_p_color_overlay":"tb_g_p_post_overlay-"+v,C={backgroundColor:i.Jx?_.backgroundColor:""};(0,s.useEffect)((()=>{i.nX&&(0,n.YN)(f)}),[]);const P=!!(t.hotspot&&t.ugc_products.length>0),N=!!(i.ig&&!t.hotspot&&t.ugc_products.length>0);return(0,s.useEffect)((()=>{t.isPopUp&&I(u,t)}),[u,t.isPopUp,t]),(0,l.jsx)("div",{id:"tb-sp-post-".concat(t.id),className:"tb_g_p_post_wrapper".concat(D?" tb_g_p_post_wrapper2x":""),style:{width:"".concat(h,"%"),padding:a.padding/2,transitionDelay:"".concat(100*u,"ms")},"tb-network":t.network.id,"tb-product":N?1:P?2:0,tabIndex:"0",role:"article","aria-label":"Post ".concat(parseInt(u)+1,",").concat(k),ref:f,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,children:(0,l.jsx)("div",{className:"tb_g_p_post_in",onClick:m(u,t),children:(0,l.jsxs)("div",{className:"tb_g_p_post_media_wrapp",children:[t.share.status?(0,l.jsx)(o.Z,{share:t.share,shareClass:"tb_g_p_share_container",item:t,wallID:b,ownerId:x}):"",j?(0,l.jsx)(s.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(c,{itemData:t,wallID:b,ownerId:x,ThemeID:a.widgetTheme,wall:g},"img".concat(u,"_").concat(t.id))}):"",i.P2?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"tb_g_p_post_details",children:[(0,l.jsx)("div",{className:"tb_g_p_contant_wrapper",children:_.hideContent&&1!=t.type?"":(0,l.jsx)(s.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(d,{contentClass:"tb_g_p_content",item:t,content:k,font:_,ThemeRule:_,personalization:a,contentTitle:t.contentTitle})})}),(0,l.jsx)(s.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(r,{ownerId:x,postTime:t.createdAt,author:t.author,network:t.network,font:_,personalization:a,ThemeRule:_})})]}),(0,l.jsx)("div",{className:"tb_g_p_post_overlay ".concat(T),style:C,children:(0,l.jsx)("div",{})})]}):null]})})})};var _=a(43411),m=a(40475);class u extends s.Component{constructor(){super(...arguments),this.state={modifiedData:[],currentIndex:0,replaceId:0,animation:!1},this.onLoadData=()=>{const{postData:e,wall:t,heightUpdate:a}=this.props;if(i.aL)this.setState({modifiedData:e,currentIndex:0});else{var s=[];e.map(((e,a)=>{a<t.ThemeRule.numberOfCoumn&&s.push(e),setTimeout((()=>{this.setState({animation:!0})}),10)})),this.setState({modifiedData:s,currentIndex:parseInt(t.ThemeRule.numberOfCoumn)-1},(()=>this.onFlipPost()))}setTimeout((()=>a()),1e3)},this.onFlipPost=()=>{const{wall:e}=this.props;setTimeout((()=>{const{postData:e,wall:t}=this.props,{currentIndex:a,replaceId:s,modifiedData:n}=this.state;let i=a+1;i>=e.length&&(i=0),n[s]=e[i];let o=s+1;o>parseInt(t.ThemeRule.numberOfCoumn)&&(o=0),this.setState({modifiedData:n,currentIndex:i,replaceId:o},(()=>this.onFlipPost()))}),1e3*e.ThemeRule.slideDelay)}}componentDidMount(){this.onLoadData()}componentWillReceiveProps(e){this.props.postData!==e.postData&&this.onLoadData()}componentDidUpdate(e,t){return e.postData!==this.props.postData||(t.currentIndex!==this.state.currentIndex||t.replaceId!==this.state.replaceId)}render(){const{postData:e,completeDataObject:t,adjustWidth:a,wall:s,clickToShowPopUp:n,cardNumber:i,onClickToCTA:o,postSizeInPx:r,onClickPopUpSlider:c}=this.props,{modifiedData:d,animation:p}=this.state;s.ThemeRule.multiRow&&0!==s.ThemeRule.multiRow&&s.ThemeRule.multiRow;return(0,l.jsx)("div",{tabIndex:"0","aria-label":"There are ".concat(e&&e.length>0?e.length:0," posts in the feed"),role:"feed",className:"tb_g_p_post_container ".concat(p?"tb_g_p_ani":""),children:d&&d.length>0&&d.map(((e,i)=>{const d=t[e];return(0,l.jsx)(h,{ownerId:s.Wall.owner,itemData:d,itemIndex:i,adjustWidth:1==d.highlight?2*a:a,personalization:s.Personalization,ThemeRule:s.ThemeRule,wallID:s.Wall.id,clickToShowPopUp:n,onClickToCTA:o,postSizeInPx:r,wall:s,onClickPopUpSlider:c},"sqr_crd_".concat(i,"_").concat(e.id))}))})}}const b=(0,_.$j)((e=>({postHeight:e.postHeight.data})),(e=>({managePostHeight:t=>e((0,m.B0)(t))})))((0,s.memo)(u))}}]);