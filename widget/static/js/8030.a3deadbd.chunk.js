(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[8030,8342,9239,5790,5810],{89239:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var a=s(47313),o=s(17739),i=s(98935),n=s(46417);class r extends a.PureComponent{constructor(e){super(e),this.state={isAuthorImagevalid:!0}}render(){const{author:e,authorClass:t,network:s}=this.props;return(0,n.jsx)("div",{className:t,children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(t,"__"),src:null!==e&&void 0!==e&&e.picture&&String(null===e||void 0===e?void 0:e.picture).includes("author.png")?" ":null===e||void 0===e?void 0:e.picture.replace(/[ ]+/g,""),alt:(0,o.P)(null===e||void 0===e?void 0:e.picture),width:44,height:44,onError:t=>{var a,o;const i="#ffffff"==s.color?"#000":s.color;t.target.src=e.errorPic?e.errorPic:"https://ui-avatars.com/api/?name=".concat(null===e||void 0===e||null===(a=e.name)||void 0===a?void 0:a.replace(/\s/g,""),"&background=").concat(null===(o=String(null===s.id?"#000":i))||void 0===o?void 0:o.replace("#",""),"&color=fff&length=1"),t.target.alt=e.name}},Math.random()):(0,n.jsx)(i.Z,{authorClass:t,username:e.name,network:s,color:null===s.id?"#000":s.color,errorPic:null===e||void 0===e?void 0:e.errorPic})},Math.random())}}},98935:(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});var a=s(47313),o=s(46417);const i=e=>{let{username:t,network:s,authorClass:a,errorPic:i}=e;const n="#ffffff"==s.color?"#000":s.color;return(0,o.jsx)("img",{className:"".concat(a,"__"),src:i||"https://ui-avatars.com/api/?name=".concat(t.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":n).replace("#",""),"&color=fff&length=1"),alt:t,width:45,height:45})},n=(0,a.memo)(i)},64442:(e,t,s)=>{"use strict";s.d(t,{Z:()=>u});var a=s(47313),o=s(2406),i=s(20510),n=s.n(i),r=s(43635),l=s(35179),c=(s(17739),s(46417));const d=(e,t)=>{if(25===t){return String(e).replace("https://w.soundcloud.com/player/?url=","")}return e};class h extends a.Component{constructor(e){super(e),this.onMediaLoad=async e=>{const{data:t}=this.props;if(t&&Object.keys(t).length>0&&[4,5,3].includes(t.type))if(t.mediaHeight&&""!=t.mediaHeight&&t.mediaWidth&&""!=t.mediaWidth)this.setState({paddingBottom:100*t.mediaHeight/t.mediaWidth});else try{const{width:e,height:s}=await(0,o.Ad)(t.postFileNew);this.setState({paddingBottom:100*s/e})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=e=>{this.setState({videoLoaded:e})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=a.createRef(),this.observer=null}componentWillMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((e=>{let[t]=e;this.setState({isVisible:t.isIntersecting})}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(s){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:e,data:t,wallID:s,isCover:a,controls:o,autoPlay:i,handleVideoEnded:h,muted:u,themeID:p,intervalTime:_}=this.props,{paddingBottom:m,videoLoaded:g,isVisible:v}=this.state,b={small:t.postFileNew,large:t.filename,orignal:t.file},w=[74,76,77].includes(p),f={paddingBottom:"".concat(w&&l.bX?null:m,"%")},x=null!==t&&void 0!==t&&t.loopStop?t.mediaUrl:t.mediaClip&&String(t.mediaClip).length>0?t.mediaClip:t.mediaUrl,j=new URLSearchParams(window.location.search),k=j.has("editor")&&"1"===j.get("editor")&&j.has("personalize")&&"1"===j.get("personalize")&&j.has("preview")&&"1"===j.get("preview"),T=j.has("embed")&&"true"===j.get("embed");return(0,c.jsx)("div",{className:"".concat(e,"_wrap_ mediaHolder").concat(t.id),style:f,ref:this.videoRef,children:(0,c.jsx)(n(),{className:"".concat(e," video").concat(t.id),url:d(x,t.network.id),"data-type":"video","data-network":t.network.id,"data-link":t.link,"data-wall-id":s,"data-item-id":t.id,"data-feed-id":t.feedId?t.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%"),poster:t.postFileNew}},file:{attributes:{preload:"metadata",poster:t.postFileNew}}},loop:!(l.bX&&!l.aL&&null!==t&&void 0!==t&&t.loopStop),onError:e=>{!T||t.stories&&0!=t.stories||(0,r.ib)(e,t.id),w&&h&&setTimeout((()=>{h()}),1e3*_)},autoPlay:!l.bX||k&&!T||null==t.mediaClip?!(l.bX&&k&&!T&&(null==t.mediaClip||""==t.mediaClip))&&i:v,muted:u,volume:i?1:0,playsinline:!0,onReady:e=>{l.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:l.ig||l.bX&&(!k||T)?v:!(l.bX&&k&&!T)&&i,height:"100%",width:"100%",controls:o||!1,style:{backgroundImage:"url(".concat(w?b.large:b.small,")"),backgroundSize:a?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})})}}const u=(0,a.memo)(h)},25810:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var a=s(47313),o=s(35179),i=s(46417);const n=a.lazy((()=>s.e(5867).then(s.bind(s,95867))));class r extends a.PureComponent{render(){const{network:e,networkClass:t,ThemeRule:s,isDefault:r,Personalization:l}=this.props,c=!!r&&(7!==(null===e||void 0===e?void 0:e.id)&&4!==(null===e||void 0===e?void 0:e.id)&&36!==(null===e||void 0===e?void 0:e.id)),d=o.ZQ&&36===(null===e||void 0===e?void 0:e.id)?"tagembed":(null===e||void 0===e?void 0:e.icon)||"";return c?(0,i.jsx)("div",{className:"".concat(t," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,i.jsx)("div",{})}):(0,i.jsxs)(a.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:[" ",(0,i.jsx)(n,{network:e,networkClass:t})]})}}},62245:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var a=s(47313),o=s(16390),i=s(17739),n=s(35179),r=s(30584),l=s(46417);class c extends a.PureComponent{constructor(e){super(e),this.contentRef=a.createRef()}componentDidMount(){n.ZQ&&setTimeout((()=>{const e=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(e)}),100)}render(){var e,t;const{contentClass:s,content:a,ThemeRule:c,font:d,personalization:h,item:u,contentTitle:p,readMore:_,maxLength:m,textAlign:g,maxLines:v,isReadMore:b}=this.props,w={WebkitLineClamp:v,textAlign:c.textAlignment};let f=20==(null===u||void 0===u||null===(e=u.network)||void 0===e?void 0:e.id)||n.bX&&!n.aL?a:(0,i.Fx)(a);12==(null===u||void 0===u||null===(t=u.network)||void 0===t?void 0:t.id)&&(f=(0,o.ZP)(f));const x="".concat(c.lineTrim?" tb_content_line-".concat(c.lineTrim):""),j="".concat(s," ").concat(b?"":x);return(0,l.jsxs)("div",{className:j,ref:this.contentRef,style:w,children:[p?(0,l.jsx)("div",{className:"tb_bold_txt__",children:(0,o.ZP)(p)}):null,(0,l.jsx)(r.Z,{data:u,content:f,Personalization:h,ThemeRule:c})]})}}},30584:(e,t,s)=>{"use strict";s.d(t,{Z:()=>d});var a=s(47313),o=s(91523),i=s(16390),n=s(46417);const r=s(77560),l=(e,t)=>(0,n.jsx)(o.default,{style:t&&[66,70].includes(null===t||void 0===t?void 0:t.themeId)?{width:t.fontSize,height:t.fontSize}:null,children:(0,i.ZP)(e)}),c=e=>{var t;let{data:s,content:a,Personalization:o,ThemeRule:c}=e;const d={color:o.hashtag_color,fontWeight:"bold",backgroundColor:1==o.hashtag_background_status?o.hashtag_background_color:"transparent"};return 20==(null===s||void 0===s||null===(t=s.network)||void 0===t?void 0:t.id)&&window.slackdown?(0,n.jsx)(n.Fragment,{children:1===o.hashtag_highlight&&0===o.hashtag_feed&&0===o.hashtag_all?(0,i.ZP)(a):1===o.hashtag_highlight&&0===o.hashtag_feed&&1===o.hashtag_all?l(window.slackdown.parse(r(a,/#(\w+)/g,((e,t)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:d,children:["#",e]}))),s.slackMember),c):1===o.hashtag_highlight&&1===o.hashtag_feed&&0===o.hashtag_all?l(window.slackdown.parse(r(a,s.hash.hashString,((e,t)=>(0,n.jsx)("div",{className:"tb_text_hashtag",style:d,children:e}))),s.slackMember),c):1===o.hashtag_highlight&&1===o.hashtag_feed&&1===o.hashtag_all?l(window.slackdown.parse(r(a,/#(\w+)/g,((e,t)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:d,children:["#",e]},"".concat(s.id,"_").concat(t)))),s.slackMember),c):l(window.slackdown.parse(a,s.slackMember),c)}):(0,n.jsx)(n.Fragment,{children:1===o.hashtag_highlight&&0===o.hashtag_feed&&0===o.hashtag_all?(0,i.ZP)(a):1===o.hashtag_highlight&&0===o.hashtag_feed&&1===o.hashtag_all?r((0,i.ZP)(a),/#(\w+)/g,((e,t)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:d,children:["#",e]}))):1===o.hashtag_highlight&&1===o.hashtag_feed&&0===o.hashtag_all?r((0,i.ZP)(a),s.hash.hashString,((e,t)=>(0,n.jsx)("strong",{className:"tb_text_hashtag",style:d,children:e}))):1===o.hashtag_highlight&&1===o.hashtag_feed&&1===o.hashtag_all?r((0,i.ZP)(a),/#(\w+)/g,((e,t)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:d,children:["#",e]},"".concat(s.id,"_").concat(t)))):l(a,c)})},d=(0,a.memo)(c)},5744:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var a=s(47313),o=s(43635),i=s(35179),n=s(46417);class r extends a.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{item:s,wallID:a,ownerId:n}=this.props;t.stopPropagation(),i.ZQ||(0,o.S5)({type:2,action:2,wall:a,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:n}),(0,o.Fv)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{share:e,shareClass:t}=this.props;return(0,n.jsxs)("div",{className:"tb_share_wrapper ".concat(t),children:[(0,n.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(i.ZQ?"tb-share-fill":"tb-share"),children:(0,n.jsx)("div",{})}),(0,n.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[e.facebook?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(e.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,n.jsx)("div",{})})}):"",e.twitter?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(e.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,n.jsx)("div",{})})}):"",e.linkedin?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(e.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,n.jsx)("div",{})})}):""]})]})}}},11502:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var a=s(17739),o=s(46417);const i=e=>{let{ThemeRule:t,btnClass:s}=e;const i={fontFamily:t.css_font};return(0,o.jsx)("div",{className:"tb_shop_btn_wrap ".concat(s),children:(0,o.jsx)("div",{className:"tb_shop_btn".concat(t.postHover||(0,a.mD)(4)||(0,a.mD)(55)?" tb_shop_btn_light":" tb_shop_btn_dark"),style:i,children:t.shoppingText})})}},55790:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var a=s(47313),o=s(17739),i=s(46417);const n=e=>{const{postTime:t,timeClass:s}=e;return(0,i.jsx)("div",{className:s,children:(0,o.Sy)(t)})},r=(0,a.memo)(n)},9105:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>T});var a=s(47313),o=s(43411),i=s(11774),n=s(89239),r=s(55790),l=s(25810),c=s(35179),d=s(46417);const h=e=>{let{author:t,personalization:s,postTime:a,network:o,ThemeRule:i,font:h}=e;const u=!(!s.postAuthor||t.isInstaUser),p=!(!s.postAuthor||!s.postTime||t.isInstaUser);return(0,d.jsxs)("div",{className:"tb_hs_author_wrapper ".concat(c.ZQ?"tb_hs_author_wrapper_top":""),children:[(0,d.jsxs)("div",{className:"tb_hs_author",children:[u?(0,d.jsx)(n.default,{network:o,author:t,authorClass:"tb_hs_author_profile"}):"",(0,d.jsxs)("div",{className:"tb_hs_author_info",children:[u?(0,d.jsx)("div",{className:"tb_hs_authorname",children:t.name}):"",(0,d.jsxs)("div",{className:"tb_hs_post_info",children:[u?(0,d.jsx)("div",{className:"tb_hs_username",children:"@".concat(t.username)}):"",p?(0,d.jsx)("div",{className:"tb_hs_seprator",children:" "}):"",s.postTime?(0,d.jsx)(r.default,{postTime:a,timeClass:"tb_hs_time tb-cTBfont-".concat(i.font_varient),authorColor:i.authorColor}):""]})]})]}),c.ZQ?null:(0,d.jsx)("div",{className:"tb_hs_social_",children:(0,d.jsx)(l.default,{networkClass:"tb_hs_social__ico",network:o,isDefault:1===i.iconType,ThemeRule:i})})]})};var u=s(81349),p=s(84261),_=s(64442);const m=e=>{let{itemData:t,wallID:s,ThemeID:a,ThemeRule:o,ownerId:i,wall:n}=e;const r=!(!c.ZQ||3!==t.type&&5!==t.type||n.Personalization.mobilePopup||n.Personalization.postFeatured),l=c.ZQ?n.ThemeRule.aspectImageRatio?n.ThemeRule.aspectImageRatio:75:100,h=(3===t.type||5===t.type)&&1==n.ThemeRule.autoPlay,m=!c.ig||!t.hotspot;return(0,d.jsxs)("div",{className:"tb_hs_media_wrap",children:[r?null:(0,d.jsx)(u.Z,{itemData:t,IconClass:"tb_hs_media_icon",show:m}),h?(0,d.jsx)(_.Z,{VideoClass:"tb_hs_video",data:t,wallID:s,themeID:n.Personalization.widgetTheme,ownerId:i,size:l,isCover:!0,muted:!0,autoPlay:h,handleVideoEnded:()=>{}}):(0,d.jsx)(p.default,{ImageClass:"tb_hs_image",data:t,wallID:s,themeID:n.Personalization.widgetTheme,ownerId:i,size:l,ThemeRule:o,hotspot:!0})]})};var g=s(62245),v=s(17739),b=s(11502),w=s(5744);const f=c.ZQ?null:200,x=e=>{let{itemData:t,personalization:s,ThemeRule:a,clickToShowPopUp:o,itemIndex:i,wallID:n,ownerId:r,postSizeInPx:u,wall:p,isPadding:_,isRowCount:x}=e;const j=!!(t.ugc_products&&t.ugc_products.length>0),k=!(!j||0!==t.hotspot),T=(""===a.postHover||a.postHover,1!==t.type),y=s.trimcontent?(0,v.Sv)(t.content,f):t.content,P=u.adjustWidth<250,I=!(!t.hotspot||!j),N=(!c.ig||t.hotspot,!a.hideContent),S=!k||0==N,C=!!k&&0!=N,D=0==a.postHover&&c.ig?"light":"dark",R=c.Jx?"tb_hs_color_overlay":"tb_hs_post_overlay-"+D,z={backgroundColor:c.Jx?a.backgroundColor:""};return(0,d.jsx)("div",{id:"tb-hs-post-".concat(t.id),className:"tb_hs_post_wrapper".concat(P?" tb_hs_post_wrapper2x":""),"tb-network":t.network.id,"tb-product":k?1:I?2:0,style:{padding:s.padding/2},children:(0,d.jsx)("div",{className:"tb_hs_post_in".concat(c.ig?" tb_hs_post_ani":""),onClick:o(i,t),children:(0,d.jsxs)("div",{className:"tb_hs_post_media_wrapp",children:[T?(0,d.jsx)(m,{itemData:t,wallID:n,wall:p,ownerId:r},t.id):"",I?null:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"tb_hs_post_details",children:[(0,d.jsxs)("div",{className:"tb_hs_contant_wrapper",children:[c.ig?(0,d.jsx)("div",{className:"tb_hs_social_",children:(0,d.jsx)(l.default,{networkClass:"tb_hs_social__ico",network:t.network,isDefault:1===a.iconType,ThemeRule:a,Personalization:s})}):null,C?(0,d.jsx)(b.Z,{ThemeRule:a,btnClass:"tb_hs_btn_wrap"}):null,S||1==t.type?(0,d.jsx)(g.default,{contentClass:"tb_hs_content",item:t,content:y,font:a,ThemeRule:a,personalization:s,contentTitle:t.contentTitle,isNetwork:!0}):null]}),c.ig?null:(0,d.jsx)(h,{ownerId:r,postTime:t.createdAt,author:t.author,network:t.network,font:a,personalization:s,ThemeRule:a},t.id),t.share.status?(0,d.jsx)(w.Z,{share:t.share,shareClass:"tb_hs_share_container ".concat(c.ZQ?"tb_hs_share_container_te":""),item:t,wallID:n,ownerId:r}):null]}),I?null:(0,d.jsx)("div",{className:"tb_hs_post_overlay ".concat(R),style:z,children:(0,d.jsx)("div",{})}),c.ZQ?(0,d.jsx)("div",{className:"tb_hs_social_bottom_",children:(0,d.jsx)(l.default,{networkClass:"tb_hs_social__ico",network:t.network,isDefault:1===a.iconType,ThemeRule:a,Personalization:s})}):null]})]})})})};var j=s(43635);s(37210);class k extends a.PureComponent{constructor(e){super(e),this.requestData=()=>{const{appendData:e,wall:t,preRender:s,hasMoreData:a,getDataNextSteps:o}=this.props;a&&o(t.Wall.id,Math.floor(Date.now()/1e3),t.ThemeRule.numberOfPosts,e.networkID,e.after,s,e.heightEvent)},this.autoScrollSlider=(e,t,s,a)=>{const{wall:o}=this.props;if(1==o.Personalization.autoScrollStatus||c.ig){const t=c.ZQ?e._o.perPage+e.index:e.index;e.length-t===(c.ZQ?1:e._o.perPage)&&this.requestData()}},this.state={parent_id:"",postData:[]},this.inputRefs={}}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((e,t)=>{e.removeAttribute("role")}))}),100);const{postData:e}=this.props;this.setState({postData:e})}render(){var e;const{postData:t,completeDataObject:s,wall:a,clickToShowPopUp:o,onClickToCTA:n,postSizeInPx:r,parentID:l,loaderData:h}=this.props,u=l;var p=[];const _=a.ThemeRule.numberOfCoumn,m=a.ThemeRule.mobileColumn,g=a.ThemeRule.slidePost,v=a.ThemeRule.slideDuration,b=a.Personalization.autoScrollStatus,w=a.ThemeRule.multiRow&&0!==a.ThemeRule.multiRow?t.length<15&&(c.bX||c.aL)?1:a.ThemeRule.multiRow:1;let f=!0;const j=(c.ZQ||c.ig)&&void 0!==(null===(e=a.Personalization)||void 0===e?void 0:e.clonePost)&&0===a.Personalization.clonePost?{clones:0}:{};for(var k=0,T=t.length;k<T;)p.push(t.slice(k,k+=w));c.ig&&j&&0==Object.keys(j).length&&(16677==a.User.id?"product"===window.dataFilterType&&(f=!!(p&&p.length>=5)):p=p.length<12?Array(15-p.length).fill(p).flat():p);const y=1!=b?!(Object.keys(j).length>0)&&(c.ZQ?"slide":"loop"):c.ig?"slide":"loop",P={...j,type:1!==b&&y,rewind:!0,speed:1e3,interval:1===g?1e3*parseInt(v):5e3,perPage:_>0?_:c.ZQ?3:6,perMove:1,gap:0,autoplay:1===g,padding:0,pagination:!1,arrows:!0,breakpoints:{560:{perPage:m>0?m:1},767:{perPage:m>0?m:2},991:{perPage:m>0?m:3},1200:{perPage:_>0?_:4},1400:{perPage:_>0?_:5},1600:{perPage:_>0?_:c.ZQ?3:6}}};return(0,d.jsx)(d.Fragment,{children:""!=l?(0,d.jsx)("div",{className:"tb_hs_post_container",children:f?(0,d.jsxs)(i.tv,{hasTrack:!1,className:"tb_hs_post_slider",options:P,ref:e=>this.inputRefs[u]=e,onMove:this.autoScrollSlider,children:[(0,d.jsx)(i.Gj,{children:(a.ThemeRule.multiRow>1&&1!==p.length&&p.length%2!==0?p.pop():p)&&p&&p.length>0&&p.map(((e,t)=>(0,d.jsx)(i.jw,{className:"tb_".concat(t),idd:l,children:(0,d.jsx)("div",{className:"tb_hs_col_wrap",children:e.map(((e,t)=>{const i=s[e];return(0,d.jsx)(x,{parentID:l,ownerId:a.Wall.owner,wall:a,itemData:i,itemIndex:t,personalization:a.Personalization,ThemeRule:a.ThemeRule,clickToShowPopUp:o,wallID:a.Wall.id,onClickToCTA:n,postSizeInPx:r},t)}))})},"tb_".concat(t,"_").concat(t))))}),(0,d.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_hs_arrow_wrapper_",children:[(0,d.jsx)("div",{className:"tb_hs_arrow splide__arrow splide__arrow--prev tb_hs_arrow tb_hs_arrow_left__ tb__icon tb-arrow-left-alt",children:(0,d.jsx)("div",{})}),(0,d.jsx)("div",{className:"tb_hs_arrow splide__arrow splide__arrow--next  tb_hs_arrow_right__ tb__icon tb-arrow-right-alt ".concat(h.isShowMoreLoading?"tb_a_spinner":""),onClick:c.ig?e=>this.requestData():null,children:(0,d.jsx)("div",{})})]})]}):null}):null})}}const T=(0,o.$j)((e=>({loaderData:e.loaderData})),(e=>({getDataNextSteps:(t,s,a,o,i,n,r,l)=>e((0,j.Sx)(t,s,a,o,i,n,r,l))})))(k)},61729:(e,t,s)=>{"use strict";var a=s(79165);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,s,o,i,n){if(n!==a){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function t(){return e}e.isRequired=e;var s={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return s.PropTypes=s,s}},75192:(e,t,s)=>{e.exports=s(61729)()},79165:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2406:(e,t,s)=>{"use strict";t.Ad=void 0;var a=s(84228);var o=s(65786);Object.defineProperty(t,"Ad",{enumerable:!0,get:function(){return o.getImageSize}});var i=s(22537)},84228:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorMessage=void 0,t.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageSize=void 0;const a=s(84228);t.getImageSize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((s,o)=>{if("undefined"===typeof window)return o(a.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!e)return o(a.ErrorMessage.URL_IS_NOT_DEFINED);let i=null;const n=new Image;n.addEventListener("load",(()=>{i&&window.clearTimeout(i),s({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(e=>{i&&window.clearTimeout(i),o("".concat(e.type,": ").concat(e.message))})),n.src=e,t.timeout&&(i=window.setTimeout((()=>o(a.ErrorMessage.TIMEOUT)),t.timeout))}))}},22537:function(e,t,s){"use strict";var a=this&&this.__awaiter||function(e,t,s,a){return new(s||(s=Promise))((function(o,i){function n(e){try{l(a.next(e))}catch(t){i(t)}}function r(e){try{l(a.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(n,r)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.useImageSize=void 0;const o=s(47313),i=s(65786);t.useImageSize=(e,t)=>{const[s,n]=(0,o.useState)(null),[r,l]=(0,o.useState)(!1),[c,d]=(0,o.useState)(null);return(0,o.useEffect)((()=>{a(void 0,void 0,void 0,(function*(){l(!0),n(null);try{const{width:s,height:a}=yield(0,i.getImageSize)(e,t);n({width:s,height:a})}catch(c){d(c.toString())}finally{l(!1)}}))}),[e,t]),[s,{loading:r,error:c}]}},37210:()=>{},50247:()=>{}}]);