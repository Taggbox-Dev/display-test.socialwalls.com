"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1340],{5744:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(47313),a=n(40475),s=n(35179),l=n(46417);class o extends i.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{item:n,wallID:i,ownerId:l}=this.props;t.stopPropagation(),s.ZQ||(0,a.S5)({type:2,action:2,wall:i,feed:n.feedId,post:n.referenceId?n.referenceId:n.id,owner:l}),(0,a.Fv)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{share:e,shareClass:t}=this.props;return(0,l.jsxs)("div",{className:"tb_share_wrapper ".concat(t),children:[(0,l.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(s.ZQ?"tb-share-fill":"tb-share"),children:(0,l.jsx)("div",{})}),(0,l.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[e.facebook?(0,l.jsx)("div",{className:"tb_share_icon_list",children:(0,l.jsx)("div",{onClick:this.onClickData(e.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,l.jsx)("div",{})})}):"",e.twitter?(0,l.jsx)("div",{className:"tb_share_icon_list",children:(0,l.jsx)("div",{onClick:this.onClickData(e.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,l.jsx)("div",{})})}):"",e.linkedin?(0,l.jsx)("div",{className:"tb_share_icon_list",children:(0,l.jsx)("div",{onClick:this.onClickData(e.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,l.jsx)("div",{})})}):""]})]})}}},1340:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I,getPostWidth:()=>g});var i=n(47313),a=n(43411),s=n(11774),l=n(40475),o=(n(37210),n(17739)),r=n(35179),c=n(5744),d=n(46417);const h=i.lazy((()=>n.e(5958).then(n.bind(n,95958)))),p=i.lazy((()=>Promise.all([n.e(6119),n.e(510),n.e(4625)]).then(n.bind(n,1659)))),m=i.lazy((()=>Promise.all([n.e(6390),n.e(622),n.e(8342)]).then(n.bind(n,62245)))),u=e=>{let{itemData:t,personalization:n,adjustWidth:a,ThemeRule:s,clickToShowPopUp:l,itemIndex:u,wallID:_,ownerId:x,postSizeInPx:g,wall:w,onClickPopUpSlider:I,contentActive:v}=e;const f=(0,i.useRef)(null),b=1!==t.type,j=n.trimcontent?(0,o.Sv)(t.content,100):t.content,k=g.adjustWidth<250,D=!(!s.postAuthor&&!s.postTime),T=!!(t.hotspot&&t.ugc_products.length>0),C=!!(r.ig&&!t.hotspot&&t.ugc_products.length>0),P=0==s.postHover&&r.ig?"light":"dark";return(0,i.useEffect)((()=>{t.isPopUp&&I(u,t)}),[u,t.isPopUp,t]),(0,d.jsx)("div",{id:"tb-sp-post-".concat(t.id),className:"tb_gf_post_wrapper".concat(k?" tb_gf_post_wrapper2x":""),style:{width:"".concat(a,"%"),padding:n.padding/2,float:"left"},"tb-network":t.network.id,"tb-product":C?1:T?2:0,tabIndex:"0",role:"article","aria-label":"Post ".concat(parseInt(u)+1,",").concat(j),ref:f,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,children:(0,d.jsxs)("div",{className:"tb_gf_post_in ".concat(v?"tb_active":""," "),onClick:l(u,t),children:[(0,d.jsxs)("div",{className:"tb_gf_post_media_wrapp",children:[t.share.status&&!r.ig?(0,d.jsx)(c.Z,{share:t.share,shareClass:"tb_gf_share_container",item:t,wallID:_,ownerId:x}):"",b?(0,d.jsx)(i.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(p,{itemData:{...t,postFileNew:t.filename},wallID:_,ownerId:x,ThemeID:n.widgetTheme,wall:w},"img".concat(u,"_").concat(t.id))}):""]}),(0,d.jsxs)("div",{className:"tb_gf_post_details",children:[(0,d.jsx)("div",{className:"tb_gf_contant_wrapper",children:s.hideContent&&1!=t.type?"":(0,d.jsx)(i.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(m,{contentClass:"tb_gf_content",item:t,content:j,font:s,ThemeRule:s,personalization:n,contentTitle:t.contentTitle})})}),(0,d.jsx)(i.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(h,{ownerId:x,postTime:t.createdAt,author:t.author,network:t.network,font:s,personalization:n,ThemeRule:s})})]}),!s.hideContent||D?(0,d.jsx)("div",{className:"tb_gf_post_overlay tb_gf_post_overlay-".concat(P),children:(0,d.jsx)("div",{})}):null]})})};class _ extends i.Component{constructor(e){super(e),this.intervalId=null,this.updateIndex=()=>{const{itemData:e,handleSlideChange:t}=this.props;let n=this.state.currentActiveIndex+1;n>=e.length&&(n=0,t()),this.setState({currentActiveIndex:n})},this.state={currentActiveIndex:-1}}componentDidMount(){const{currentIndex:e,intervalTime:t,itemIndex:n}=this.props;e!=n||r.aL||(this.intervalId=setInterval(this.updateIndex,1e3*t))}componentWillUnmount(){clearInterval(this.intervalId)}componentWillReceiveProps(e){const{itemIndex:t}=this.props;e.currentIndex!=t&&(clearInterval(this.intervalId),this.setState({currentActiveIndex:-1})),e.currentIndex!=t||r.aL||(this.intervalId=setInterval(this.updateIndex,1e3*e.intervalTime))}render(){const{wall:e,largeDiv:t,smallDiv:n,itemData:i,completeDataObject:a,itemIndex:s,clickToShowPopUp:l,onClickToCTA:o,postSizeInPx:c,adjustWidth:h,onClickPopUpSlider:p}=this.props,{currentActiveIndex:m}=this.state,_=e.ThemeRule.highlightPosition||"left",x=r.aL?s%2:0,g={width:t+"%",float:"0"==x?"right"==_?"right":"left":"right"==_?"left":"right"},w={width:n+"%",float:"right"==_?"left":"right"};return i&&i.length>0?(0,d.jsxs)("div",{className:"ts_gf_post_row",children:[(0,d.jsx)("div",{className:"ts_gf_post_large",style:g,children:(0,d.jsx)(u,{ownerId:e.Wall.owner,itemData:a[i[0]],itemIndex:s,adjustWidth:100,personalization:e.Personalization,ThemeRule:e.ThemeRule,wallID:e.Wall.id,clickToShowPopUp:l,onClickToCTA:o,postSizeInPx:c,wall:e,completeDataObject:a,onClickPopUpSlider:p,contentActive:0==m},"sqr_crd_".concat(0,"_",a[i[0]].id))}),(0,d.jsxs)("div",{className:"ts_gf_post_small",style:w,children:[i&&i.length>0?i.map(((t,n)=>{const i=a[t];return 0!=n?(0,d.jsx)(u,{ownerId:e.Wall.owner,itemData:i,itemIndex:n,adjustWidth:h,personalization:e.Personalization,ThemeRule:e.ThemeRule,wallID:e.Wall.id,clickToShowPopUp:l,onClickToCTA:o,postSizeInPx:c,wall:e,completeDataObject:a,onClickPopUpSlider:p,contentActive:m==n},"sqr_crd_".concat(n,"_").concat(t.id)):null})):null," "]})]}):null}}const x=_,g=(e,t)=>{const n=(e,t)=>({cardWidth:t,largeDiv:2*e,smallDiv:100-2*e});switch(t){case 3:return n(100/3,100);case 5:case 10:case 13:return n(e>767?25:100/3,e>767?50:100);case 7:return n(e>767?20:100/3,e>767?100/3:100);case 9:case 17:return n(e>767?100/6:100/3,e>767?25:100);default:return n(e<767?100/3:100,100)}};class w extends i.Component{constructor(e){super(e),this.state={postData:[],windowWidth:window.innerWidth,currentIndex:-1},this.handleSlideChange=()=>{const{currentIndex:e}=this.state,t=e+1;this.myRef&&this.myRef.current&&(t<this.myRef.current.slides.length?this.myRef.current.splide.go(t):this.myRef.current.splide.go(0))},this.myRef=i.createRef()}componentDidMount(){const{renderId:e}=this.props;e.renderId&&this.setState({windowWidth:document.getElementById(e.renderId).clientWidth})}componentDidUpdate(e,t){return e.postData!==this.props.postData||t.currentIndex!==this.state.currentIndex}render(){var e;const{postData:t,completeDataObject:n,wall:i,clickToShowPopUp:a,cardNumber:l,onClickToCTA:o,postSizeInPx:c,onClickPopUpSlider:h}=this.props,{windowWidth:p}=this.state;let m=t.length;if(i&&1==i.Personalization.fitRow&&t.length>=parseInt(l)){let e=t.length/parseInt(l);m=parseInt(l)*parseInt(e)}var u="";const _=i.ThemeRule.numberOfCoumn,{cardWidth:w,largeDiv:I,smallDiv:v}=g(p,_);u=p<768?3:_||1;for(var f=0,b=t.length,j=[];f<b;)j.push(t.slice(f,f+=u));var k=p<768?"3":_;const D=(null===i||void 0===i||null===(e=i.Personalization)||void 0===e?void 0:e.slideDelay)||5,{currentIndex:T}=this.state;return(0,d.jsx)("div",{tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),role:"feed",className:"tb_gf_post_container",children:r.aL?(0,d.jsx)("div",{className:"tb_gf_slider_wrappper",children:j&&j.length>0&&j.map(((e,t)=>e.length==k?(0,d.jsx)(x,{ownerId:i.Wall.owner,itemData:e,itemIndex:t,adjustWidth:w,personalization:i.Personalization,ThemeRule:i.ThemeRule,wallID:i.Wall.id,clickToShowPopUp:a,onClickToCTA:o,postSizeInPx:c,wall:i,completeDataObject:n,largeDiv:I,smallDiv:v,onClickPopUpSlider:h,intervalTime:parseFloat(D),currentIndex:T,handleSlideChange:this.handleSlideChange},t):null))}):(0,d.jsx)(s.tv,{hasTrack:!1,className:"tb_gf_slider_wrappper",options:{type:"fade",rewind:!1,speed:1e3,perPage:1,perMove:1,gap:0,autoplay:!1,pauseOnHover:!1,padding:0,pagination:!1,arrows:!1},ref:this.myRef,onActive:(e,t,n)=>this.setState({currentIndex:t.index}),children:(0,d.jsx)(s.Gj,{children:j&&j.length>0&&j.map(((e,t)=>e.length==k?(0,d.jsx)(s.jw,{children:(0,d.jsx)(x,{ownerId:i.Wall.owner,itemData:e,itemIndex:t,adjustWidth:w,personalization:i.Personalization,ThemeRule:i.ThemeRule,wallID:i.Wall.id,clickToShowPopUp:a,onClickToCTA:o,postSizeInPx:c,wall:i,completeDataObject:n,largeDiv:I,smallDiv:v,onClickPopUpSlider:h,intervalTime:parseFloat(D),currentIndex:T,handleSlideChange:this.handleSlideChange})},t):null))})})})}}const I=(0,a.$j)((e=>({postHeight:e.postHeight.data})),(e=>({managePostHeight:t=>e((0,l.B0)(t))})))(w)},37210:()=>{}}]);