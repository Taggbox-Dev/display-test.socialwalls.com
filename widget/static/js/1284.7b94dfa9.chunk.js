(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1284,8342,9239,5790,5810],{89239:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>r});var s=o(47313),a=o(17739),i=o(98935),n=o(46417);class r extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:o}=this.props;return(0,n.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,a.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,n.jsx)(i.Z,{authorClass:e,username:t.name,network:o,color:null===o.id?"#000":o.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,o)=>{"use strict";o.d(e,{Z:()=>n});var s=o(47313),a=o(46417);const i=t=>{let{username:e,network:o,authorClass:s,errorPic:i}=t;const n="#ffffff"==o.color?"#000":o.color;return(0,a.jsx)("img",{className:"".concat(s,"__"),src:i||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===o.id?"#000":n).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},n=(0,s.memo)(i)},7138:(t,e,o)=>{"use strict";o.d(e,{Z:()=>n});var s=o(47313),a=o(46417);class i extends s.PureComponent{render(){const{cta:t,ctaClass:e,postCta:o,onClickToCTA:s,item:i}=this.props,n=!(!o||1!==o.status);return(0,a.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),s(i),window.open("".concat(n?o.url:t.url),"_blank")},children:[" ",n?o.text:t.text]})}}const n=i},64442:(t,e,o)=>{"use strict";o.d(e,{Z:()=>_});var s=o(47313),a=o(2406),i=o(20510),n=o.n(i),r=o(40475),c=o(35179),l=(o(17739),o(46417));const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class _ extends s.PureComponent{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:o}=await(0,a.Ad)(e.postFileNew);this.setState({paddingBottom:100*o/t})}catch(o){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=s.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(o){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:o,isCover:s,controls:a,autoPlay:i,handleVideoEnded:_,muted:h,themeID:m}=this.props,{paddingBottom:p,videoLoaded:u,isVisible:b}=this.state,w={small:e.postFileNew,large:e.filename,orignal:e.file},f=[74,76,77].includes(m),g={paddingBottom:"".concat(f&&c.bX?null:p,"%")},x=null!==e&&void 0!==e&&e.loopStop?e.mediaUrl:e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,l.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:g,ref:this.videoRef,children:(0,l.jsx)(n(),{className:"".concat(t," video").concat(e.id),url:d(x,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":o,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata"}}},loop:!(c.bX&&!c.aL&&null!==e&&void 0!==e&&e.loopStop),onError:t=>{e.stories&&0!=e.stories||(0,r.ib)(t,e.id)},autoPlay:i,muted:h,volume:i?1:0,playsinline:!0,onReady:t=>{c.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:c.ig?b:i,height:"100%",width:"100%",controls:a||!1,style:{backgroundImage:"url(".concat(f?w.large:w.small,")"),backgroundSize:s?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:_||null})})}}},25810:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>r});var s=o(47313),a=o(35179),i=o(46417);const n=s.lazy((()=>o.e(5867).then(o.bind(o,95867))));class r extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:o,isDefault:r,Personalization:c}=this.props,l=!!r&&(7!==t.id&&4!==t.id&&36!==t.id),d=a.ZQ&&36==t.id?"tagembed":t.icon;return l?(0,i.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,i.jsx)("div",{})}):(0,i.jsxs)(s.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:[" ",(0,i.jsx)(n,{network:t,networkClass:e})]})}}},62245:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>l});var s=o(47313),a=o(16390),i=o(17739),n=o(35179),r=o(46417);const c=s.lazy((()=>Promise.all([o.e(622),o.e(584)]).then(o.bind(o,30584))));class l extends s.PureComponent{constructor(t){super(t),this.contentRef=s.createRef()}componentDidMount(){setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:o,font:l,personalization:d,item:_,contentTitle:h,readMore:m,maxLength:p,textAlign:u,maxLines:b,isReadMore:w}=this.props,f={WebkitLineClamp:b,textAlign:o.textAlignment};let g=20==_.network.id||n.bX&&!n.aL?e:(0,i.Fx)(e);12==_.network.id&&(g=(0,a.ZP)(g));const x="".concat(o.lineTrim?" tb_content_line-".concat(o.lineTrim):""),v="".concat(t," ").concat(w?"":x);return(0,r.jsxs)("div",{className:v,ref:this.contentRef,style:f,children:[h?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,a.ZP)(h)}):null,(0,r.jsxs)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[" ",(0,r.jsx)(c,{data:_,content:g,Personalization:d})]})]})}}},90905:(t,e,o)=>{"use strict";o.d(e,{Z:()=>c});var s=o(47313),a=o(35179),i=o(46417);const n=t=>{let{network:e}=t;const o={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:s,color:n}=o[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,i.jsx)("div",{className:s,style:{color:n},"tb-network":e.id,children:(0,i.jsx)("div",{})})},r=t=>{let{ThemeID:e}=t;const{className:o,color:s}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,i.jsx)("div",{className:o,style:{color:s},"tb-network":e})};class c extends s.PureComponent{render(){const{rating:t,network:e,ThemeID:o}=this.props;return(0,i.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,s)=>o?(0,i.jsx)(r,{ThemeID:o},s):(0,i.jsx)(n,{network:e},s))):null})}}},55790:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>r});var s=o(47313),a=o(17739),i=o(46417);const n=t=>{const{postTime:e,timeClass:o}=t;return(0,i.jsx)("div",{className:o,children:(0,a.Sy)(e)})},r=(0,s.memo)(n)},95136:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>j});o(47313);var s=o(89239),a=o(55790),i=o(25810),n=o(46417);const r=t=>{let{author:e,personalization:o,postTime:r,network:c,ThemeRule:l,font:d,mediaType:_}=t;const h=e.username&&e.username.length>0?"@".concat(e.username):"",m=!(!o.postAuthor||e.isInstaUser),p=!(!o.postAuthor||!o.postTime||e.isInstaUser);return(0,n.jsxs)("div",{className:"tb_wt_author_wrapper",children:[(0,n.jsxs)("div",{className:"tb_wt_author",children:[m?(0,n.jsx)(s.default,{author:e,network:c,authorClass:"tb_wt_author_profile"}):"",(0,n.jsxs)("div",{className:"tb_wt_author_info",children:[m?(0,n.jsx)("div",{className:"tb_wt_authorname",children:e.name}):"",(0,n.jsxs)("div",{className:"tb_wt_post_info",children:[m?(0,n.jsx)("div",{className:"tb_wt_username",children:h}):"",p?(0,n.jsx)("div",{className:"tb_wt_seprator",children:" "}):"",o.postTime?(0,n.jsx)(a.default,{postTime:r,timeClass:"tb_wt_time tb-cTBfont-".concat(l.font_varient),authorColor:l.authorColor}):""]})]})]}),(0,n.jsx)("div",{className:"tb_wt_social_",children:(0,n.jsx)(i.default,{networkClass:"tb_wt_social_ico",network:c,isDefault:1===l.iconType,ThemeRule:l})})]})};var c=o(35179),l=o(81349),d=o(84261),_=o(64442);const h=t=>{let{itemData:e,wallID:o,ownerId:s,wall:a}=t;const i=!(!c.ZQ||3!==e.type&&5!==e.type||a.Personalization.mobilePopup||a.Personalization.postFeatured),r=(3===e.type||5===e.type)&&1==a.ThemeRule.autoPlay,h=!!c.ZQ&&(!!a.ThemeRule.aspectImageRatio&&a.ThemeRule.aspectImageRatio);return(0,n.jsxs)("div",{className:"tb_wt_media_wrap",children:[i?null:(0,n.jsx)(l.Z,{itemData:e,IconClass:"tb_wt_media_icon",show:!0,isCenter:c.ZQ}),r||i?(0,n.jsx)(_.Z,{VideoClass:"tb_wt_video",data:e,wallID:o,themeID:a.Personalization.widgetTheme,ownerId:s,size:h,isCover:!0,controls:!0,autoPlay:!1,muted:!0}):(0,n.jsx)(d.default,{ImageClass:"tb_wt_image",data:e,wallID:o,themeID:a.Personalization.widgetTheme,ownerId:s,size:h,ThemeRule:a.ThemeRule})]})};var m=o(62245),p=o(7138),u=o(90905);const b=t=>{let{share:e,shareClass:o}=t;const s=(t,e)=>{t.stopPropagation(),e()};return(0,n.jsx)("div",{className:o,children:(0,n.jsxs)("div",{className:"tb_wt_share_wrapper",children:[e.facebook&&(0,n.jsx)("div",{className:"tb_wt_share_list",children:(0,n.jsx)("div",{onClick:t=>s(t,(()=>window.open(e.facebook,"_blank"))),className:"tb_wt_share_icon tb__icon tb-facebook tb_wt_cursor_pointer",title:"facebook",rel:"noopener noreferrer nofollow"})}),e.twitter&&(0,n.jsx)("div",{className:"tb_wt_share_list",children:(0,n.jsx)("div",{onClick:t=>s(t,(()=>window.open(e.twitter,"_blank"))),className:"tb_wt_share_icon tb__icon tb-twitter tb_wt_cursor_pointer",title:"twitter",rel:"noopener noreferrer nofollow"})}),e.linkedin&&(0,n.jsx)("div",{className:"tb_wt_share_list",children:(0,n.jsx)("div",{onClick:t=>s(t,(()=>window.open(e.linkedin,"_blank"))),className:"tb_wt_share_icon tb__icon tb-linkedin tb_wt_cursor_pointer",title:"linkedin",rel:"noopener noreferrer nofollow"})})]})})};var w=o(17739);const f=(t,e,o)=>1===t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,w.ok)(e)):o,g=(t,e,o)=>1===t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,w.ok)(e)):o,x=t=>{let{itemData:e,ThemeRule:o}=t;const s=e.network.id,a=3===s||10===s?"like":"heart";return(0,n.jsx)(n.Fragment,{children:12!==s&&15!==s&&20!==s&&21!==s&&29!==s?(0,n.jsxs)("div",{className:"tb_wt_social_action__",children:[(0,n.jsx)("div",{className:"tb_wt_social_action__list",children:(0,n.jsxs)("a",{href:f(s,e.postId,e.link),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:[(0,n.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-".concat(a),children:" "}),e.like_count>0?(0,n.jsx)("div",{className:"tb_wt_social_action_counts__",children:e.like_count}):""]})}),(0,n.jsx)("div",{className:"tb_wt_social_action__list",children:(0,n.jsxs)("a",{href:g(s,e.postId,e.link),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:[(0,n.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-comment",children:" "}),e.like_count>0||e.comment_count>0?(0,n.jsx)("div",{className:"tb_wt_social_action_counts__",children:c.ZQ?e.comment_count:e.like_count}):""]})}),1===s?(0,n.jsx)("div",{className:"tb_wt_social_action__list",children:(0,n.jsx)("a",{href:"https://twitter.com/intent/retweet?tweet_id=".concat((0,w.ok)(e.postId)),target:"_blank",className:"tb_wt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:(0,n.jsx)("div",{className:"tb_wt_social_action_ico__ tb__icon tb-retweet",children:" "})})}):""]}):""})},v=c.ZQ?null:200,k=t=>{let{itemData:e,personalization:o,ThemeRule:s,wallID:a,clickToShowPopUp:i,itemIndex:l,ownerId:d,onClickToCTA:_,wall:f}=t;const g=!!(e.ugc_products&&e.ugc_products.length>0),k=!(!g||0!==e.hotspot),j=!(!e.hotspot||!g),N=!(c.ZQ&&(0,w.mD)(53)||(0,w.mD)(57)||1===e.type),C=e.rating>0,y=e.rating>0?"tb_wt_rating_content":"tb_wt_content",T=1===e.type&&o.textDecorate?"tb_wt_text_decoration tb_wt_text_post":"",I=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),R=o.trimcontent?(0,w.Sv)(e.content,v):e.content;return(0,n.jsx)("div",{id:"tb-wt-post-".concat(e.id),className:"tb_wt_post_wrapper","tb-network":e.network.id,"tb-product":k?1:j?2:0,children:(0,n.jsxs)("div",{className:"tb_wt_post_in",onClick:i(l,e),children:[(0,n.jsx)(r,{ownerId:d,postTime:e.createdAt,author:e.author,network:e.network,font:s,personalization:o,ThemeRule:s,mediaType:N}),(0,n.jsxs)("div",{className:"tb_wt_post_media_wrapp",children:[N?(0,n.jsx)(h,{itemData:e,wallID:a,ownerId:d,wall:f},"img".concat(l,"_").concat(e.id)):"",C?(0,n.jsxs)("div",{className:"tb_wt_rating__",children:[(0,n.jsx)(u.Z,{rating:e.rating,network:e.network})," "]}):""]}),(0,n.jsxs)("div",{className:"tb_wt_contant_wrapper",children:[I?(0,n.jsxs)("div",{className:"tb_wt_post_cta",children:[(0,n.jsx)(p.Z,{ctaClass:"tb_wt_post_cta_btn",cta:e.cta,item:e,onClickToCTA:_})," "]}):"",s.hideContent&&1!=e.type?"":(0,n.jsx)(m.default,{contentClass:"".concat(y," ").concat(T),item:e,content:R,font:s,ThemeRule:s,personalization:o,contentTitle:e.contentTitle}),(0,n.jsxs)("div",{className:"tb_wt_post_share_container",style:e&&29==e.network.id||!s.socialAction?{justifyContent:"flex-end"}:{},children:[s.socialAction?(0,n.jsx)(x,{itemData:e,ThemeRule:s}):"",e.share.status?(0,n.jsx)(b,{share:e.share,shareClass:"tb_mc_share_container"}):""]})]})]})})},j=t=>{let{postData:e,completeDataObject:o,adjustWidth:s,wall:a,clickToShowPopUp:i,onClickToCTA:r}=t;return(0,n.jsx)("div",{className:"tb_wt_post_container",children:e&&e.length>0&&e.map(((t,e)=>{const c=o[t];return(0,n.jsx)(k,{ownerId:a.Wall.owner,itemData:c,itemIndex:e,adjustWidth:s,personalization:a.Personalization,ThemeRule:a.ThemeRule,wallID:a.Wall.id,clickToShowPopUp:i,onClickToCTA:r,wall:a},"wdt_crd_".concat(e,"_").concat(t.id))}))})}},61729:(t,e,o)=>{"use strict";var s=o(79165);function a(){}function i(){}i.resetWarningCache=a,t.exports=function(){function t(t,e,o,a,i,n){if(n!==s){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function e(){return t}t.isRequired=t;var o={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:a};return o.PropTypes=o,o}},75192:(t,e,o)=>{t.exports=o(61729)()},79165:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},50247:()=>{}}]);