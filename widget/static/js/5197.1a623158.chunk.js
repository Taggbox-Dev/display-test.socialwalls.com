(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5197,7033,169,757,7234,7668],{97234:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>i});var s=a(72791),n=a(80184);const o=(0,s.lazy)((()=>a.e(4496).then(a.bind(a,14496))));class i extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:a}=this.props;return(0,n.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),"aria-label":"author image",alt:t.name,width:44,height:44,onError:e=>{const s="#ffffff"==a.color?"#000":a.color;e.target.src=t.errorPic?t.errorPic:"https://ui-avatars.com/api/?name=".concat(t.name.replace(/\s/g,""),"&background=").concat(String(null===a.id?"#000":s).replace("#",""),"&color=fff&length=1"),e.target.alt=t.name}}):(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(o,{authorClass:e,username:t.name,network:a,color:null===a.id?"#000":a.color,errorPic:t.errorPic})})},Math.random())}}},70757:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=a(72791),n=a(46535),o=a(80184);const i=s.lazy((()=>a.e(1088).then(a.bind(a,41088))));class r extends s.PureComponent{render(){const{network:t,networkClass:e,isDefault:a}=this.props,r=!!a&&(7!==t.id&&4!==t.id&&36!==t.id),l=n.ZQ&&36==t.id?"tagembed":t.icon;return r?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(l.replace(/fa-/g,"")),"aria-label":"post network ".concat((null===t||void 0===t?void 0:t.name)||""),children:(0,o.jsx)("div",{})}):(0,o.jsxs)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(i,{network:t,networkClass:e})]})}}},23450:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>c});var s=a(72791),n=a(34867),o=a(2703),i=a(46535),r=a(46476),l=a(80184);class c extends s.PureComponent{constructor(t){super(t),this.contentRef=s.createRef()}componentDidMount(){setTimeout((()=>{var t,e;if(null!==(t=this.contentRef)&&void 0!==t&&null!==(e=t.current)&&void 0!==e&&e.clientHeight){var a,s;const t=(null===(a=this.contentRef)||void 0===a||null===(s=a.current)||void 0===s?void 0:s.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}}),100)}render(){const{contentClass:t,content:e,ThemeRule:a,font:c,personalization:d,item:h,contentTitle:p,readMore:_,maxLength:u,textAlign:m,maxLines:g,isReadMore:b}=this.props,x={WebkitLineClamp:g,textAlign:a.textAlignment};let w=20==h.network.id||i.bX&&!i.aL?e:(0,o.Fx)(e);12==h.network.id&&(w=(0,n.ZP)(w));const f="".concat(a.lineTrim?" tb_content_line-".concat(a.lineTrim):""),j="".concat(t," ").concat(b?"":f," tb-cTBfont-").concat(a.font_varient);return(0,l.jsxs)("div",{className:j,ref:this.contentRef,style:x,children:[p?(0,l.jsx)("div",{className:"tb_bold_txt__",children:(0,n.ZP)(p)}):null,(0,l.jsxs)(s.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:[" ",(0,l.jsx)(r.Z,{data:h,content:w,Personalization:d,ThemeRule:a})," "]})]})}}},46476:(t,e,a)=>{"use strict";a.d(e,{Z:()=>d});var s=a(72791),n=a(35737),o=a(34867),i=a(80184);const r=a(80844),l=(t,e)=>(0,i.jsx)(n.default,{style:e&&[66,70].includes(null===e||void 0===e?void 0:e.themeId)?{width:e.fontSize,height:e.fontSize}:null,children:(0,o.ZP)(t)}),c=t=>{let{data:e,content:a,Personalization:s,ThemeRule:n}=t;const c={color:s.hashtag_color,fontWeight:"bold",backgroundColor:1==s.hashtag_background_status?s.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,i.jsx)(i.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,o.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?l(window.slackdown.parse(r(a,/#(\w+)/g,((t,e)=>(0,i.jsxs)("div",{className:"tb_text_hashtag",style:c,children:["#",t]}))),e.slackMember),n):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?l(window.slackdown.parse(r(a,e.hash.hashString,((t,e)=>(0,i.jsx)("div",{className:"tb_text_hashtag",style:c,children:t}))),e.slackMember),n):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?l(window.slackdown.parse(r(a,/#(\w+)/g,((t,a)=>(0,i.jsxs)("div",{className:"tb_text_hashtag",style:c,children:["#",t]},"".concat(e.id,"_").concat(a)))),e.slackMember),n):l(window.slackdown.parse(a,e.slackMember),n)}):(0,i.jsx)(i.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,o.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?r((0,o.ZP)(a),/#(\w+)/g,((t,e)=>(0,i.jsxs)("div",{className:"tb_text_hashtag",style:c,children:["#",t]}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?r((0,o.ZP)(a),e.hash.hashString,((t,e)=>(0,i.jsx)("strong",{className:"tb_text_hashtag",style:c,children:t}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?r((0,o.ZP)(a),/#(\w+)/g,((t,a)=>(0,i.jsxs)("div",{className:"tb_text_hashtag",style:c,children:["#",t]},"".concat(e.id,"_").concat(a)))):l(a,n)})},d=(0,s.memo)(c)},20169:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=a(72791),n=a(11225),o=a(46535),i=a(80184);class r extends s.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:a,wallID:s,ownerId:i}=this.props;e.stopPropagation(),o.ZQ||(0,n.S5)({type:2,action:2,wall:s,feed:a.feedId,post:a.referenceId?a.referenceId:a.id,owner:i}),(0,n.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,i.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,i.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(o.ZQ?"tb-share-fill":"tb-share"),children:(0,i.jsx)("div",{})}),(0,i.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,i.jsx)("div",{className:"tb_share_icon_list",children:(0,i.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,i.jsx)("div",{})})}):"",t.twitter?(0,i.jsx)("div",{className:"tb_share_icon_list",children:(0,i.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,i.jsx)("div",{})})}):"",t.linkedin?(0,i.jsx)("div",{className:"tb_share_icon_list",children:(0,i.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,i.jsx)("div",{})})}):""]})]})}}},27668:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=a(72791),n=a(2703),o=a(80184);const i=t=>{const{postTime:e,timeClass:a}=t;return(0,o.jsx)("div",{className:a,role:"status","aria-label":"post timestamp ".concat((0,n.Sy)(e)),children:(0,n.Sy)(e)})},r=(0,s.memo)(i)},30182:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>k});var s=a(72791),n=a(39852),o=a.n(n),i=a(97234),r=a(27668),l=a(80184);const c=t=>{let{author:e,personalization:a,postTime:s,network:n,ThemeRule:o,ownerId:c}=t;const d=e.username&&e.username.length>0?"@".concat(e.username):"",h=!(!a.postAuthor||e.isInstaUser),p=!(!a.postAuthor||!a.postTime||e.isInstaUser);return(0,l.jsx)("div",{className:"tb_gp_author_wrapper","aria-label":"Author details","aria-roledescription":"post author details",children:(0,l.jsxs)("div",{className:"tb_gp_author",children:[h?(0,l.jsx)(i.default,{author:e,authorClass:"tb_gp_author_profile",network:n}):"",(0,l.jsxs)("div",{className:"tb_gp_author_info",children:[h?(0,l.jsx)("div",{className:"tb_gp_authorname",children:e.name}):"",(0,l.jsxs)("div",{className:"tb_gp_post_info".concat(p?"":" tb_gp_post_info__"),children:[h?(0,l.jsx)("div",{className:"tb_gp_username",children:d}):"",p?(0,l.jsx)("div",{className:"tb_gp_seprator",children:" "}):"",a.postTime?(0,l.jsx)(r.default,{postTime:s,timeClass:"tb_gp_time tb-cTBfont-".concat(o.font_varient),authorColor:o.authorColor}):""]})]})]})})};var d=a(20169),h=a(46535);const p=(0,s.lazy)((()=>a.e(7989).then(a.bind(a,37989)))),_=(0,s.lazy)((()=>Promise.all([a.e(8947),a.e(5036),a.e(3609)]).then(a.bind(a,40115))));class u extends s.PureComponent{render(){const{itemData:t,wallID:e,themeID:a,ownerId:n}=this.props;return(0,l.jsxs)("div",{className:"tb_gp_media_wrap",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[(0,l.jsx)(s.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(p,{itemData:t,IconClass:"tb_gp_media_icon",position:1,show:!0,isCenter:h.ZQ})}),(0,l.jsx)(s.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(_,{ImageClass:"tb_gp_image",data:t,wallID:e,themeID:a,ownerId:n,size:100})})]})}}var m=a(23450),g=a(70757),b=a(2703);class x extends s.PureComponent{constructor(t){super(t),this.cardSize=s.createRef()}componentDidMount(){const{itemData:t,itemIndex:e,onClickPopUpSlider:a}=this.props,s=document.querySelector(".tb_gp_post_container");setTimeout((()=>{this.cardSize.current.offsetWidth<250&&s.classList.add("tb_gp_post_wrapper2x"),this.cardSize.current.offsetWidth<120&&s.classList.add("tb_gp_post_wrapper1x"),h.nX&&(0,b.YN)(this.cardSize)}),100),t.isPopUp&&a(e,t)}render(){const{itemData:t,personalization:e,adjustWidth:a,ThemeRule:s,clickToShowPopUp:n,itemIndex:o,wallID:i,ownerId:r,onClickToCTA:p}=this.props,_={width:"".concat(a,"%"),padding:e.padding/2},b=1!==t.type,x=7===t.network.id,w=!!(t.ugc_products&&t.ugc_products.length>0),f=!(!w||0!==t.hotspot),j=!(!t.hotspot||!w),k=0==s.postHover&&h.ig?"light":"dark",v=h.Jx?"tb_gp_color_overlay":"tb_gp_post_overlay-"+k,C={backgroundColor:h.Jx?s.cardColor:""};return(0,l.jsx)("div",{id:"tb-gp-post-".concat(t.id),"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,className:"tb_gp_post_wrapper ".concat(h.ZQ?"tb_gp_post_wrapper_te":""),style:_,"tb-network":t.network.id,"tb-product":f?1:j?2:0,tabIndex:"0",role:"article","aria-label":"Post ".concat(parseInt(o)+1,",").concat(t.content),ref:this.cardSize,children:(0,l.jsx)("div",{className:"tb_gp_post_in".concat(h.ZQ?" tb_gp_post_ani":""),onClick:n(o,t),role:"button","aria-roledescription":"Click to open pop up",tabIndex:"0",children:(0,l.jsxs)("div",{className:"tb_gp_post_media_wrapp",role:"button",tabIndex:"0","aria-label":"Pop Up Button",children:[t.share.status?(0,l.jsx)(d.default,{share:t.share,shareClass:"tb_gp_share_container",item:t,wallID:i,ownerId:r}):null,b?(0,l.jsx)(u,{itemData:t,wallID:i,themeID:e.widgetTheme,ownerId:r},"img_gly_".concat(t.id)):"",h.ZQ||!x?(0,l.jsx)("div",{className:"tb_gp_contant_".concat(h.ZQ?" tb_gp_hover_content_":""),children:(0,l.jsxs)("div",{className:"tb_gp_contant__in",children:[(0,l.jsxs)("div",{className:"tb_gp_content__",children:[(0,l.jsx)(c,{adjustWidth:a,postTime:t.createdAt,network:t.network,ownerId:r,author:t.author,font:s,personalization:e,ThemeRule:s}),s.hideContent&&1!=t.type?"":(0,l.jsx)(m.default,{item:t,contentClass:"tb_gp_content",content:t.content,font:s,ThemeRule:s,personalization:e,contentTitle:t.contentTitle})]}),(0,l.jsx)("div",{className:"tb_gp_post_overlay ".concat(v),style:C,children:(0,l.jsx)("div",{})})]})}):"",(0,l.jsx)("div",{className:"tb_gp_social_",children:h.ZQ||!x?(0,l.jsx)(g.default,{networkClass:"tb_gp_social__ico",network:t.network,isDefault:1===s.iconType,ThemeRule:s}):""})]})})})}}var w=a(77581),f=a(11225);class j extends s.PureComponent{constructor(){super(...arguments),this.state={postData:[],windowWidth:window.innerWidth,containerWidth:0,loadData:0},this.onLoadMasonry=()=>{var t=document.querySelector(".tb_gp_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight("".concat(e))}}},this.calculationData=(t,e,a,s)=>t>s&&t>s+a?{totalPostBestFit:s+a,isLastRow:!0}:{totalPostBestFit:s,isLastRow:!1}}componentDidMount(){const{postData:t,renderId:e}=this.props;setTimeout((()=>this.setState({postData:t,loadData:1},(()=>this.onLoadMasonry()))),100),e.renderId&&this.setState({windowWidth:document.getElementById(e.renderId).clientWidth})}componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e,loadData:1},(()=>this.onLoadMasonry()))}render(){const{postData:t,completeDataObject:e,adjustWidth:a,wall:s,clickToShowPopUp:n,cardNumber:i,onClickToCTA:r,onClickPopUpSlider:c}=this.props,{windowWidth:d,loadData:h}=this.state;var p={totalPostBestFit:0,isLastRow:!1};let _=0===s.ThemeRule.numberOfCoumn?Math.trunc(i)>5?5:Math.trunc(i):s.ThemeRule.numberOfCoumn;if(t.length>parseInt(i)){let e=parseInt(i);4===_?e=9:2===_?e=3:3===_?e=6:5===_&&(e=12),d<768&&(e=parseInt(i));let a=t.length/parseInt(e);p=parseInt(e)*parseInt(a),p=this.calculationData(t.length,e,_,p)}let u=0===s.ThemeRule.numberOfCoumn?Math.trunc(i)>5?5:Math.trunc(i)+1:s.ThemeRule.numberOfCoumn+1;return(0,l.jsx)(o(),{className:"tb_gp_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_gp_post_wrapper",resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:h?t&&t.length>0&&t.map(((t,o)=>{const i=e[t];let d=a;if(3===_&&u===o+1){d=2*a,u=u+2*_}else if(2===_&&u===o+1){d=2*a,u=u+(_+1)}else if(4===_&&u===o+1){d=2*a,u=u+(2*_+1)}else if(5===_&&u===o+1){d=2*a,u=u+(2*_+2)}return parseInt(p.totalPostBestFit)>=parseInt(o+1)?(0,l.jsx)(x,{ownerId:s.Wall.owner,itemData:i,itemIndex:o,adjustWidth:d,personalization:s.Personalization,ThemeRule:s.ThemeRule,clickToShowPopUp:n,wallID:s.Wall.id,onClickToCTA:r,onClickPopUpSlider:c},o):0===parseInt(p.totalPostBestFit)?(0,l.jsx)(x,{ownerId:s.Wall.owner,itemData:i,itemIndex:o,adjustWidth:d,personalization:s.Personalization,ThemeRule:s.ThemeRule,clickToShowPopUp:n,wallID:s.Wall.id,onClickToCTA:r,onClickPopUpSlider:c},"galry_".concat(i.id)):null})):null})}}const k=(0,w.$j)((t=>({})),(t=>({managePostHeight:e=>t((0,f.B0)(e))})))(j)},50247:()=>{}}]);
//# sourceMappingURL=5197.1a623158.chunk.js.map