(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7004,8342,9239,5790,5810],{8902:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>C});var a=s(47313),o=s(43411),i=s(97529),n=s(47330),r=s(89239),l=s(55790),c=s(25810),d=s(35179),p=s(46417);const h=e=>{let{author:t,personalization:s,postTime:a,network:o,ThemeRule:i,font:n}=e;const h=!(!s.postAuthor||t.isInstaUser),m=!(!s.postAuthor||!s.postTime||t.isInstaUser);return(0,p.jsxs)("div",{className:"tb_c_m_author_wrapper ".concat(d.ZQ?"tb_c_m_author_wrapper_top":""),children:[(0,p.jsxs)("div",{className:"tb_c_m_author",children:[h?(0,p.jsx)(r.default,{network:o,author:t,authorClass:"tb_c_m_author_profile"}):"",(0,p.jsxs)("div",{className:"tb_c_m_author_info",children:[h?(0,p.jsx)("div",{className:"tb_c_m_authorname",children:t.name}):"",(0,p.jsxs)("div",{className:"tb_c_m_post_info",children:[h?(0,p.jsx)("div",{className:"tb_c_m_username",children:"@".concat(t.username)}):"",m?(0,p.jsx)("div",{className:"tb_c_m_seprator",children:" "}):"",s.postTime?(0,p.jsx)(l.default,{postTime:a,timeClass:"tb_c_m_time tb-cTBfont-".concat(i.font_varient),authorColor:i.authorColor}):""]})]})]}),d.ZQ?null:(0,p.jsx)("div",{className:"tb_c_m_social_",children:(0,p.jsx)(c.default,{networkClass:"tb_c_m_social__ico",network:o,isDefault:1===i.iconType,ThemeRule:i})})]})};var m=s(81349),u=s(84261),_=s(64442);const b=a.lazy((()=>s.e(695).then(s.bind(s,10695)))),g=e=>{let{itemData:t,wallID:s,ThemeID:o,ThemeRule:i,ownerId:n,wall:r}=e;const l=(3===t.type||5===t.type)&&1==r.ThemeRule.autoPlay;!d.ig||t.hotspot;return(0,p.jsxs)("div",{className:"tb_c_m_media_wrap",children:[d.aL?(0,p.jsx)(a.Suspense,{fallback:(0,p.jsx)(p.Fragment,{}),children:(0,p.jsx)(b,{likeClass:"tb_c_m_like",postId:t.id,wallID:s,UserDetail:r.UserDetail})}):null,d.aL?(0,p.jsx)(m.Z,{itemData:t,IconClass:"tb_c_m_media_icon",show:d.aL}):null,l?(0,p.jsx)(_.Z,{VideoClass:"tb_c_m_video",data:t,wallID:s,themeID:r.Personalization.widgetTheme,ownerId:n,size:1,isCover:!0,muted:!0,autoPlay:l,handleVideoEnded:()=>{}}):(0,p.jsx)(u.default,{ImageClass:"tb_c_m_image",data:t,wallID:s,themeID:r.Personalization.widgetTheme,ownerId:n,size:1,ThemeRule:i,hotspot:!0})]})};var w=s(62245),f=s(17739),v=s(11502),x=s(5744);const k=e=>{let{itemData:t,personalization:s,ThemeRule:a,clickToShowPopUp:o,itemIndex:i,wallID:n,ownerId:r,postSizeInPx:l,wall:m,isPadding:u,isRowCount:_}=e;const b=!!(t.ugc_products&&t.ugc_products.length>0),k=!(!b||0!==t.hotspot),j=(""===a.postHover||a.postHover,2===t.type||3===t.type||4===t.type||5===t.type),D=s.trimcontent?(0,f.Sv)(t.content,50):t.content,T=l.adjustWidth<250,y=!(!t.hotspot||!b),C=(!d.ig||t.hotspot,!a.hideContent),I=!k||0==C,R=!!k&&0!=C,P=0==a.postHover&&d.ig?"light":"dark",S=(d.Jx,d.Jx&&a.backgroundColor,d.bX?{padding:a.spacing}:null);return(0,p.jsx)("div",{id:"tb-hs-post-".concat(t.id),className:"tb_c_m_post_wrapper".concat(T?" tb_c_m_post_wrapper2x":""),"tb-network":t.network.id,"tb-product":k?1:y?2:0,style:{padding:s.padding/2},children:(0,p.jsx)("div",{className:"tb_c_m_post_in".concat(d.ig?" tb_c_m_post_ani":""),onClick:o(i,t),style:S,children:(0,p.jsxs)("div",{className:"tb_c_m_post_media_wrapp",children:[j?(0,p.jsx)(g,{itemData:t,wallID:n,wall:m,ownerId:r}):"",d.P2?(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:"tb_c_m_post_details",children:[(0,p.jsxs)("div",{className:"tb_c_m_contant_wrapper",children:[d.ig?(0,p.jsx)("div",{className:"tb_c_m_social_",children:(0,p.jsx)(c.default,{networkClass:"tb_c_m_social__ico",network:t.network,isDefault:1===a.iconType,ThemeRule:a,Personalization:s})}):null,R?(0,p.jsx)(v.Z,{ThemeRule:a,btnClass:"tb_c_m_btn_wrap"}):null,I||1==t.type?(0,p.jsx)(w.default,{contentClass:"tb_c_m_content",item:t,content:D,font:a,ThemeRule:a,personalization:s,contentTitle:t.contentTitle,isNetwork:!0}):null]}),d.ig?null:(0,p.jsx)(h,{ownerId:r,postTime:t.createdAt,author:t.author,network:t.network,font:a,personalization:s,ThemeRule:a}),t.share.status?(0,p.jsx)(x.Z,{share:t.share,shareClass:"tb_c_m_share_container ".concat(d.ZQ?"tb_c_m_share_container_te":""),item:t,wallID:n,ownerId:r}):null]})}):null]})})})};var j=s(40475);s(37210);const D=()=>{const e=e=>(document.querySelector(e)||{}).clientHeight||0;return e(".tb_wall_header__")+(window.editor?e("#kt_header"):0)+e("#appTicker")},T=e=>{const{inputRefs:t,inputName:s,row:a,numberOfCoumn:o,slideDuration:r,mobileColumn:l,secondSildeData:c,firstSildeData:h,completeDataObject:m,themeHeight:u,wall:_,postSizeInPx:b,clickToShowPopUp:g,onClickToCTA:w,requestData:f,type:v,postData:x,intractiveData:j,parentID:D,keyRender:T,loaderData:y}=e,C=2===v&&2==a?[1,2]:[1];return console.log("arr",C),(0,p.jsx)(p.Fragment,{children:C.map(((e,t)=>{const u=0==t?h:c;return(0,p.jsx)(i.tq,{ref:e=>(void 0).inputRefs[s]=e,style:{width:"100%"},navigation:!!d.aL,speed:d.aL?1e3:8e3,loop:!0,edgeSwipeDetection:!0,slidesPerView:o>0?o:4,allowTouchMove:!0,passiveListeners:!0,autoplay:{delay:d.aL?r?1e3*r:5e3:1,disableOnInteraction:!1,reverseDirection:0!=t},breakpoints:{0:{slidesPerView:0==l?1:parseInt(l)},480:{slidesPerView:0==l?1:parseInt(l)},575:{slidesPerView:0==l?2:parseInt(l)},767:{slidesPerView:0==o?3:parseInt(o)},1024:{slidesPerView:0==o?5:parseInt(o)},1400:{slidesPerView:0==o?6:parseInt(o)},1600:{slidesPerView:0==o?7:parseInt(o)}},modules:[n.pt,n.Gk,n.Rv,n.W_,n.rj],className:"tb_c_m_post_slider",children:u&&u.length>0&&u.map(((e,t)=>{const s=m[e];return(0,p.jsx)(i.o5,{style:{margin:0,padding:0},p_id:D,className:"tb_".concat(s.id),children:e=>{let{isVisible:o}=e;return(0,p.jsx)(k,{parentID:D,ownerId:_.Wall.owner,wall:_,itemData:s,itemIndex:t,personalization:_.Personalization,ThemeRule:_.ThemeRule,clickToShowPopUp:g,wallID:_.Wall.id,onClickToCTA:w,postSizeInPx:b,row:a},t)}},t)}))},t)}))})};class y extends a.PureComponent{constructor(e){super(e),this.requestData=()=>{const{appendData:e,wall:t,preRender:s,hasMoreData:a,getDataNextSteps:o}=this.props;a&&o(t.Wall.id,Math.floor(Date.now()/1e3),t.ThemeRule.numberOfPosts,e.networkID,e.after,s,e.heightEvent)},this.autoScrollSlider=(e,t,s,a)=>{const{wall:o}=this.props;if(1==o.Personalization.autoScrollStatus||d.ig){const t=d.ZQ?e._o.perPage+e.index:e.index;e.length-t===(d.ZQ?1:e._o.perPage)&&this.requestData()}},this.state={parent_id:"",postData:[]},this.inputRefs={}}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((e,t)=>{e.removeAttribute("role")}))}),100);const{postData:e}=this.props;this.setState({postData:e})}render(){var e;const{postData:t,completeDataObject:s,wall:a,clickToShowPopUp:o,onClickToCTA:i,postSizeInPx:n,parentID:r,keyRender:l,loaderData:c}=this.props,h=r,m=a.ThemeRule.numberOfCoumn,u=a.ThemeRule.mobileColumn,_=(a.ThemeRule.slidePost,a.ThemeRule.slideDuration),b=a.Personalization.autoScrollStatus,g=a.ThemeRule.multiRow&&0!==a.ThemeRule.multiRow?a.ThemeRule.multiRow:1;var w=[];let f=!0;const v=(d.ZQ||d.ig)&&void 0!==(null===(e=a.Personalization)||void 0===e?void 0:e.clonePost)&&0===a.Personalization.clonePost?{clones:0}:{},x=71==a.ThemeRule.themeId?a.ThemeRule.multiRow?a.ThemeRule.multiRow:2:1,k=Math.floor(t&&t.length>0?t.length/2:[]);console.log("midIndex",k);let j=2==x&&t.length>15?t&&t.length>0&&t.slice(0,k):t,y=t&&t.length>15&&t.slice(k);if(m>=j.length){const e=m-j.length+1;for(let t=0;t<=e;t++)j=[...j,j[t]]}if(m>=y.length&&2==x){const e=m-y.length+1;for(let t=0;t<e;t++)y=[...y,y[t]]}for(var C=0,I=t.length;C<I;)w.push(t.slice(C,C+=g));d.ig&&v&&0==Object.keys(v).length&&(16677==a.User.id?"product"===window.dataFilterType&&(f=!!(w&&w.length>=5)):w=w.length<12?Array(15-w.length).fill(w).flat():w);1!=b?!(Object.keys(v).length>0)&&d.ig:d.ig;return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("div",{className:"tb_hs_post_container",style:{overflow:"hidden",height:"calc(100vh - ".concat(D()+4,"px)")},children:(0,p.jsx)(T,{inputRefs:this.inputRefs,inputName:h,row:x,numberOfCoumn:m,slideDuration:_,mobileColumn:u,postData:t,firstSildeData:j,secondSildeData:y,completeDataObject:s,parentID:r,wall:a,postSizeInPx:n,clickToShowPopUp:o,onClickToCTA:i,type:2==x?2:1,postData:t,requestData:this.requestData})})})}}const C=(0,o.$j)((e=>({loaderData:e.loaderData})),(e=>({getDataNextSteps:(t,s,a,o,i,n,r,l)=>e((0,j.Sx)(t,s,a,o,i,n,r,l))})))(y)},89239:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var a=s(47313),o=s(17739),i=s(98935),n=s(46417);class r extends a.PureComponent{constructor(e){super(e),this.state={isAuthorImagevalid:!0}}render(){const{author:e,authorClass:t,network:s}=this.props;return(0,n.jsx)("div",{className:t,children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(t,"__"),src:e.picture&&String(e.picture).includes("author.png")?" ":e.picture.replace(/[ ]+/g,""),alt:(0,o.P)(e.picture),width:44,height:44,onError:e=>{this.setState({isAuthorImagevalid:!1})}}):(0,n.jsx)(i.Z,{authorClass:t,username:e.name,network:s,color:null===s.id?"#000":s.color,errorPic:e.errorPic})},Math.random())}}},98935:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var a=s(47313),o=s(46417);const i=e=>{let{username:t,network:s,authorClass:a,errorPic:i}=e;const n="#ffffff"==s.color?"#000":s.color;return(0,o.jsx)("img",{className:"".concat(a,"__"),src:i||"https://ui-avatars.com/api/?name=".concat(t.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":n).replace("#",""),"&color=fff&length=1"),alt:t,width:45,height:45})},n=(0,a.memo)(i)},64442:(e,t,s)=>{"use strict";s.d(t,{Z:()=>p});var a=s(47313),o=s(2406),i=s(20510),n=s.n(i),r=s(40475),l=s(35179),c=(s(17739),s(46417));const d=(e,t)=>{if(25===t){return String(e).replace("https://w.soundcloud.com/player/?url=","")}return e};class p extends a.PureComponent{constructor(e){super(e),this.onMediaLoad=async e=>{const{data:t}=this.props;if(t&&Object.keys(t).length>0&&[4,5,3].includes(t.type))if(t.mediaHeight&&""!=t.mediaHeight&&t.mediaWidth&&""!=t.mediaWidth)this.setState({paddingBottom:100*t.mediaHeight/t.mediaWidth});else try{const{width:e,height:s}=await(0,o.Ad)(t.postFileNew);this.setState({paddingBottom:100*s/e})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=e=>{this.setState({videoLoaded:e})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=a.createRef(),this.observer=null}componentWillMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((e=>{let[t]=e;this.setState({isVisible:t.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(s){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:e,data:t,wallID:s,isCover:a,controls:o,autoPlay:i,handleVideoEnded:p,muted:h,themeID:m}=this.props;console.log("this.props",this.props);const{paddingBottom:u,videoLoaded:_,isVisible:b}=this.state,g={small:t.postFileNew,large:t.filename,orignal:t.file},w=[74,76,77].includes(m),f={paddingBottom:"".concat(w&&l.bX?null:u,"%")},v=l.bX?t.mediaUrl:t.mediaClip&&String(t.mediaClip).length>0?t.mediaClip:t.mediaUrl;return(0,c.jsx)("div",{className:"".concat(e,"_wrap_ mediaHolder").concat(t.id),style:f,ref:this.videoRef,children:(0,c.jsx)(n(),{className:"".concat(e," video").concat(t.id),url:d(v,t.network.id),"data-type":"video","data-network":t.network.id,"data-link":t.link,"data-wall-id":s,"data-item-id":t.id,"data-feed-id":t.feedId?t.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata"}}},loop:!(l.bX&&!l.aL&&null!==t&&void 0!==t&&t.loopStop),onError:e=>{t.stories&&0!=t.stories||(0,r.ib)(e,t.id)},autoPlay:i,muted:h,volume:i?1:0,playsinline:!0,onReady:e=>{l.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:l.ig?b:i,height:"100%",width:"100%",controls:o||!1,style:{backgroundImage:"url(".concat(w?g.large:g.small,")"),backgroundSize:a?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:p||null})})}}},25810:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var a=s(47313),o=s(35179),i=s(46417);const n=a.lazy((()=>s.e(5867).then(s.bind(s,95867))));class r extends a.PureComponent{render(){const{network:e,networkClass:t,ThemeRule:s,isDefault:r,Personalization:l}=this.props,c=!!r&&(7!==e.id&&4!==e.id&&36!==e.id),d=o.ZQ&&36==e.id?"tagembed":e.icon;return c?(0,i.jsx)("div",{className:"".concat(t," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,i.jsx)("div",{})}):(0,i.jsxs)(a.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:[" ",(0,i.jsx)(n,{network:e,networkClass:t})]})}}},62245:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var a=s(47313),o=s(16390),i=s(17739),n=s(35179),r=s(46417);const l=a.lazy((()=>Promise.all([s.e(622),s.e(584)]).then(s.bind(s,30584))));class c extends a.PureComponent{constructor(e){super(e),this.contentRef=a.createRef()}componentDidMount(){setTimeout((()=>{const e=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(e)}),100)}render(){const{contentClass:e,content:t,ThemeRule:s,font:c,personalization:d,item:p,contentTitle:h,readMore:m,maxLength:u,textAlign:_,maxLines:b,isReadMore:g}=this.props,w={WebkitLineClamp:b,textAlign:s.textAlignment};let f=20==p.network.id||n.bX&&!n.aL?t:(0,i.Fx)(t);12==p.network.id&&(f=(0,o.ZP)(f));const v="".concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):""),x="".concat(e," ").concat(g?"":v);return(0,r.jsxs)("div",{className:x,ref:this.contentRef,style:w,children:[h?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,o.ZP)(h)}):null,(0,r.jsxs)(a.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[" ",(0,r.jsx)(l,{data:p,content:f,Personalization:d})]})]})}}},5744:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var a=s(47313),o=s(40475),i=s(35179),n=s(46417);class r extends a.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{item:s,wallID:a,ownerId:n}=this.props;t.stopPropagation(),i.ZQ||(0,o.S5)({type:2,action:2,wall:a,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:n}),(0,o.Fv)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{share:e,shareClass:t}=this.props;return(0,n.jsxs)("div",{className:"tb_share_wrapper ".concat(t),children:[(0,n.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(i.ZQ?"tb-share-fill":"tb-share"),children:(0,n.jsx)("div",{})}),(0,n.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[e.facebook?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(e.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,n.jsx)("div",{})})}):"",e.twitter?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(e.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,n.jsx)("div",{})})}):"",e.linkedin?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(e.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,n.jsx)("div",{})})}):""]})]})}}},11502:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var a=s(17739),o=s(46417);const i=e=>{let{ThemeRule:t,btnClass:s}=e;const i={fontFamily:t.css_font};return(0,o.jsx)("div",{className:"tb_shop_btn_wrap ".concat(s),children:(0,o.jsx)("div",{className:"tb_shop_btn".concat(t.postHover||(0,a.mD)(4)||(0,a.mD)(55)?" tb_shop_btn_light":" tb_shop_btn_dark"),style:i,children:t.shoppingText})})}},55790:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var a=s(47313),o=s(17739),i=s(46417);const n=e=>{const{postTime:t,timeClass:s}=e;return(0,i.jsx)("div",{className:s,children:(0,o.Sy)(t)})},r=(0,a.memo)(n)},61729:(e,t,s)=>{"use strict";var a=s(79165);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,s,o,i,n){if(n!==a){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function t(){return e}e.isRequired=e;var s={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return s.PropTypes=s,s}},75192:(e,t,s)=>{e.exports=s(61729)()},79165:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},37210:()=>{},50247:()=>{}}]);