(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4119,8342,9239,5790,5810],{89239:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=a(47313),o=a(17739),i=a(98935),n=a(46417);class r extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:a}=this.props;return(0,n.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(e,"__"),src:null!==t&&void 0!==t&&t.picture&&String(null===t||void 0===t?void 0:t.picture).includes("author.png")?" ":null===t||void 0===t?void 0:t.picture.replace(/[ ]+/g,""),alt:(0,o.P)(null===t||void 0===t?void 0:t.picture),width:44,height:44,onError:e=>{var s,o;const i="#ffffff"==a.color?"#000":a.color;e.target.src=t.errorPic?t.errorPic:"https://ui-avatars.com/api/?name=".concat(null===t||void 0===t||null===(s=t.name)||void 0===s?void 0:s.replace(/\s/g,""),"&background=").concat(null===(o=String(null===a.id?"#000":i))||void 0===o?void 0:o.replace("#",""),"&color=fff&length=1"),e.target.alt=t.name}},Math.random()):(0,n.jsx)(i.Z,{authorClass:e,username:t.name,network:a,color:null===a.id?"#000":a.color,errorPic:null===t||void 0===t?void 0:t.errorPic})},Math.random())}}},98935:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});var s=a(47313),o=a(46417);const i=t=>{let{username:e,network:a,authorClass:s,errorPic:i}=t;const n="#ffffff"==a.color?"#000":a.color;return(0,o.jsx)("img",{className:"".concat(s,"__"),src:i||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===a.id?"#000":n).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},n=(0,s.memo)(i)},7138:(t,e,a)=>{"use strict";a.d(e,{Z:()=>n});var s=a(47313),o=a(46417);class i extends s.PureComponent{render(){const{cta:t,ctaClass:e,postCta:a,onClickToCTA:s,item:i}=this.props,n=!(!a||1!==a.status);return(0,o.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),s(i),window.open("".concat(n?a.url:t.url),"_blank")},children:[" ",n?a.text:t.text]})}}const n=i},64442:(t,e,a)=>{"use strict";a.d(e,{Z:()=>_});var s=a(47313),o=a(2406),i=a(20510),n=a.n(i),r=a(43635),l=a(35179),c=(a(17739),a(46417));const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class h extends s.Component{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:a}=await(0,o.Ad)(e.postFileNew);this.setState({paddingBottom:100*a/t})}catch(a){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=s.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(a){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:a,isCover:s,controls:o,autoPlay:i,handleVideoEnded:h,muted:_,themeID:m,intervalTime:u}=this.props,{paddingBottom:p,videoLoaded:g,isVisible:b}=this.state,v={small:e.postFileNew,large:e.filename,orignal:e.file},w=[74,76,77].includes(m),f={paddingBottom:"".concat(w&&l.bX?null:p,"%")},x=null!==e&&void 0!==e&&e.loopStop?e.mediaUrl:e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl,k=new URLSearchParams(window.location.search),j=k.has("editor")&&"1"===k.get("editor")&&k.has("personalize")&&"1"===k.get("personalize")&&k.has("preview")&&"1"===k.get("preview"),C=k.has("embed")&&"true"===k.get("embed");return(0,c.jsx)("div",{className:"".concat(t,"_wrap_ mediaHolder").concat(e.id),style:f,ref:this.videoRef,children:(0,c.jsx)(n(),{className:"".concat(t," video").concat(e.id),url:d(x,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":a,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%"),poster:e.postFileNew}},file:{attributes:{preload:"metadata",poster:e.postFileNew}}},loop:!(l.bX&&!l.aL&&null!==e&&void 0!==e&&e.loopStop),onError:t=>{!C||e.stories&&0!=e.stories||(0,r.ib)(t,e.id),w&&h&&setTimeout((()=>{h()}),1e3*u)},autoPlay:!l.bX||j&&!C||null==e.mediaClip?!(l.bX&&j&&!C&&(null==e.mediaClip||""==e.mediaClip))&&i:b,muted:_,volume:i?1:0,playsinline:!0,onReady:t=>{l.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:l.ig||l.bX&&(!j||C)?b:!(l.bX&&j&&!C)&&i,height:"100%",width:"100%",controls:o||!1,style:{backgroundImage:"url(".concat(w?v.large:v.small,")"),backgroundSize:s?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})})}}const _=(0,s.memo)(h)},25810:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=a(47313),o=a(35179),i=a(46417);const n=s.lazy((()=>a.e(5867).then(a.bind(a,95867))));class r extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a,isDefault:r,Personalization:l}=this.props,c=!!r&&(7!==(null===t||void 0===t?void 0:t.id)&&4!==(null===t||void 0===t?void 0:t.id)&&36!==(null===t||void 0===t?void 0:t.id)),d=o.ZQ&&36===(null===t||void 0===t?void 0:t.id)?"tagembed":(null===t||void 0===t?void 0:t.icon)||"";return c?(0,i.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,i.jsx)("div",{})}):(0,i.jsxs)(s.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:[" ",(0,i.jsx)(n,{network:t,networkClass:e})]})}}},62245:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>c});var s=a(47313),o=a(16390),i=a(17739),n=a(35179),r=a(30584),l=a(46417);class c extends s.PureComponent{constructor(t){super(t),this.contentRef=s.createRef()}componentDidMount(){n.ZQ&&setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){var t,e;const{contentClass:a,content:s,ThemeRule:c,font:d,personalization:h,item:_,contentTitle:m,readMore:u,maxLength:p,textAlign:g,maxLines:b,isReadMore:v}=this.props,w={WebkitLineClamp:b,textAlign:c.textAlignment};let f=20==(null===_||void 0===_||null===(t=_.network)||void 0===t?void 0:t.id)||n.bX&&!n.aL?s:(0,i.Fx)(s);12==(null===_||void 0===_||null===(e=_.network)||void 0===e?void 0:e.id)&&(f=(0,o.ZP)(f));const x="".concat(c.lineTrim?" tb_content_line-".concat(c.lineTrim):""),k="".concat(a," ").concat(v?"":x);return(0,l.jsxs)("div",{className:k,ref:this.contentRef,style:w,children:[m?(0,l.jsx)("div",{className:"tb_bold_txt__",children:(0,o.ZP)(m)}):null,(0,l.jsx)(r.Z,{data:_,content:f,Personalization:h,ThemeRule:c})]})}}},30584:(t,e,a)=>{"use strict";a.d(e,{Z:()=>d});var s=a(47313),o=a(91523),i=a(16390),n=a(46417);const r=a(77560),l=(t,e)=>(0,n.jsx)(o.default,{style:e&&[66,70].includes(null===e||void 0===e?void 0:e.themeId)?{width:e.fontSize,height:e.fontSize}:null,children:(0,i.ZP)(t)}),c=t=>{var e;let{data:a,content:s,Personalization:o,ThemeRule:c}=t;const d={color:o.hashtag_color,fontWeight:"bold",backgroundColor:1==o.hashtag_background_status?o.hashtag_background_color:"transparent"};return 20==(null===a||void 0===a||null===(e=a.network)||void 0===e?void 0:e.id)&&window.slackdown?(0,n.jsx)(n.Fragment,{children:1===o.hashtag_highlight&&0===o.hashtag_feed&&0===o.hashtag_all?(0,i.ZP)(s):1===o.hashtag_highlight&&0===o.hashtag_feed&&1===o.hashtag_all?l(window.slackdown.parse(r(s,/#(\w+)/g,((t,e)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:d,children:["#",t]}))),a.slackMember),c):1===o.hashtag_highlight&&1===o.hashtag_feed&&0===o.hashtag_all?l(window.slackdown.parse(r(s,a.hash.hashString,((t,e)=>(0,n.jsx)("div",{className:"tb_text_hashtag",style:d,children:t}))),a.slackMember),c):1===o.hashtag_highlight&&1===o.hashtag_feed&&1===o.hashtag_all?l(window.slackdown.parse(r(s,/#(\w+)/g,((t,e)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:d,children:["#",t]},"".concat(a.id,"_").concat(e)))),a.slackMember),c):l(window.slackdown.parse(s,a.slackMember),c)}):(0,n.jsx)(n.Fragment,{children:1===o.hashtag_highlight&&0===o.hashtag_feed&&0===o.hashtag_all?(0,i.ZP)(s):1===o.hashtag_highlight&&0===o.hashtag_feed&&1===o.hashtag_all?r((0,i.ZP)(s),/#(\w+)/g,((t,e)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:d,children:["#",t]}))):1===o.hashtag_highlight&&1===o.hashtag_feed&&0===o.hashtag_all?r((0,i.ZP)(s),a.hash.hashString,((t,e)=>(0,n.jsx)("strong",{className:"tb_text_hashtag",style:d,children:t}))):1===o.hashtag_highlight&&1===o.hashtag_feed&&1===o.hashtag_all?r((0,i.ZP)(s),/#(\w+)/g,((t,e)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:d,children:["#",t]},"".concat(a.id,"_").concat(e)))):l(s,c)})},d=(0,s.memo)(c)},90905:(t,e,a)=>{"use strict";a.d(e,{Z:()=>l});var s=a(47313),o=a(35179),i=a(46417);const n=t=>{let{network:e}=t;const a={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:o.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:o.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:s,color:n}=a[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,i.jsx)("div",{className:s,style:{color:n},"tb-network":e.id,children:(0,i.jsx)("div",{})})},r=t=>{let{ThemeID:e}=t;const{className:a,color:s}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,i.jsx)("div",{className:a,style:{color:s},"tb-network":e})};class l extends s.PureComponent{render(){const{rating:t,network:e,ThemeID:a}=this.props;return(0,i.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,s)=>a?(0,i.jsx)(r,{ThemeID:a},s):(0,i.jsx)(n,{network:e},s))):null})}}},5744:(t,e,a)=>{"use strict";a.d(e,{Z:()=>r});var s=a(47313),o=a(43635),i=a(35179),n=a(46417);class r extends s.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:a,wallID:s,ownerId:n}=this.props;e.stopPropagation(),i.ZQ||(0,o.S5)({type:2,action:2,wall:s,feed:a.feedId,post:a.referenceId?a.referenceId:a.id,owner:n}),(0,o.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,n.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,n.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(i.ZQ?"tb-share-fill":"tb-share"),children:(0,n.jsx)("div",{})}),(0,n.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,n.jsx)("div",{})})}):"",t.twitter?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,n.jsx)("div",{})})}):"",t.linkedin?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,n.jsx)("div",{})})}):""]})]})}}},32675:(t,e,a)=>{"use strict";a.d(e,{Z:()=>c});var s=a(47313),o=(a(35179),a(17739)),i=a(46417);const n=(t,e,a)=>1==t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,o.ok)(e)):a,r=(t,e,a)=>1==t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,o.ok)(e)):a,l=t=>{let{arialbl:e,hrefClick:a,Icon:s,count:n}=t;return(0,i.jsx)("div",{className:"tb_social_action__list",children:(0,i.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(a,"_blank")},className:"tb_social_action__ico_wrap",children:[(0,i.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(s),children:" "}),n>0?(0,i.jsx)("div",{className:"tb_social_action_counts__",children:(0,o.sy)(n)}):""]})})};class c extends s.PureComponent{render(){const{itemData:t,ThemeRule:e,actionClass:a,ThemeID:s}=this.props,c={color:3===s?1===e.iconType?e.iconColor:t.network.color:e.fontColor},d=t.network.id,h=3===d||10===d||7===d?"like":"heart",_=!![1,2,3,7,8,9,10,18].includes(d),m=![29,19].includes(d),u=t.network.name?t.network.name:"";return(0,i.jsx)(i.Fragment,{children:29!==d&&26!==d&&23!==d&&6!==d&&5!==d&&11!==d&&12!==d&&15!==d&&20!==d&&21!==d?(0,i.jsx)("div",{className:a,children:(0,i.jsxs)("div",{className:"tb_social_action__",children:[_?(0,i.jsx)(l,{arialbl:u,hrefClick:n(d,t.postId,t.link),Icon:h,iconColorStyle:c,count:t.like_count}):null,m?(0,i.jsx)(l,{arialbl:u,hrefClick:r(d,t.postId,t.link),Icon:"comment",iconColorStyle:c,count:t.comment_count}):null,1===d?(0,i.jsx)(l,{arialbl:u,hrefClick:"https://twitter.com/intent/retweet?tweet_id=".concat((0,o.ok)(t.postId)),Icon:"retweet",iconColorStyle:c,count:t.comment_count}):null,(0,i.jsx)(l,{arialbl:u,hrefClick:t.link,Icon:"eye",iconColorStyle:c,count:0})]})}):""})}}},55790:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=a(47313),o=a(17739),i=a(46417);const n=t=>{const{postTime:e,timeClass:a}=t;return(0,i.jsx)("div",{className:a,children:(0,o.Sy)(e)})},r=(0,s.memo)(n)},18017:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>y});var s=a(47313),o=a(61395),i=a.n(o),n=a(17739),r=a(35179),l=a(89239),c=a(55790),d=a(25810),h=a(46417);const _=t=>{let{author:e,personalization:a,postTime:s,network:o,ThemeRule:i,font:n,mediaType:_,ownerId:m}=t;const u=!(!a.postAuthor||e.isInstaUser),p=!(!a.postAuthor||!a.postTime||e.isInstaUser);return(0,h.jsxs)("div",{className:"tb_mc_author_wrapper",children:[(0,h.jsxs)("div",{className:"tb_mc_author",children:[u?(0,h.jsx)(l.default,{network:o,author:e,authorClass:"tb_mc_author_profile"},e.username):"",(0,h.jsxs)("div",{className:"tb_mc_author_info",children:[u?(0,h.jsx)("div",{className:"tb_mc_authorname",children:e.name}):"",(0,h.jsxs)("div",{className:"tb_mc_post_info",children:[u?(0,h.jsx)("div",{className:"tb_mc_username",children:e.username&&e.username.length>0?"@".concat(e.username):""}):"",p?(0,h.jsx)("div",{className:"tb_mc_seprator",children:" "}):"",a.postTime?(0,h.jsx)(c.default,{postTime:s,timeClass:"tb_mc_time tb-cTBfont-".concat(i.font_varient)}):""]})]})]}),_&&o.id||r.ZQ?(0,h.jsx)("div",{className:"tb_mc_social_",children:(0,h.jsx)(d.default,{networkClass:"tb_mc_social_ico",network:o,isDefault:1===i.iconType,ThemeRule:i})}):null]})};var m=a(81349),u=a(84261),p=a(64442);const g=t=>{let{itemData:e,wallID:a,ownerId:s,wall:o}=t;const i=3===e.type||5===e.type,n=!(!r.ZQ||!i||o.Personalization.mobilePopup||o.Personalization.postFeatured),l=!(!i||28===e.network.id||1!=o.ThemeRule.autoPlay),c=!!r.ZQ&&(!!o.ThemeRule.aspectImageRatio&&o.ThemeRule.aspectImageRatio);return(0,h.jsxs)("div",{className:"tb_mc_media_wrap",children:[n?null:(0,h.jsx)(m.Z,{itemData:e,IconClass:"tb_mc_media_icon",show:!0,isCenter:r.ZQ}),l||n?(0,h.jsx)(p.Z,{VideoClass:"tb_mc_video",data:e,wallID:a,themeID:o.Personalization.widgetTheme,ownerId:s,size:c,isCover:!0,controls:!0,autoPlay:!1,muted:!0}):(0,h.jsx)(u.default,{ImageClass:"tb_mc_image",data:e,wallID:a,themeID:o.Personalization.widgetTheme,ownerId:s,size:c,ThemeRule:o.ThemeRule})]})};var b=a(62245),v=a(5744),w=a(7138),f=a(90905),x=a(32675);const k=r.ZQ?null:200;class j extends s.PureComponent{constructor(t){super(t),this.postTrack=s.createRef()}componentDidMount(){r.nX&&(0,n.YN)(this.postTrack)}render(){const{itemData:t,personalization:e,adjustWidth:a,ThemeRule:s,clickToShowPopUp:o,itemIndex:i,wallID:l,ownerId:c,onClickToCTA:m,wall:u}=this.props,p=!(r.ZQ&&(0,n.mD)(52)||1===t.type),j=t.rating>0,C=t.rating>0?"tb_mc_rating_content":"tb_mc_content",N=1===t.type&&t.content&&String(t.content).length>0&&e.textDecorate?"tb_mc_text_decoration tb_mc_text_post":"",T=!!(t.cta&&Object.keys(t.cta).length>0&&t.cta.status),I=e.trimcontent?(0,n.Sv)(t.content,k):t.content;return(0,h.jsx)("div",{className:"tb_mc_post_wrapper",ref:this.postTrack,"data-id":t.id,style:{width:"".concat(a,"%"),padding:e.padding/2},"tb-network":t.network.icon,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,"tab-index":0,"area-label":I,role:"article",children:(0,h.jsx)("div",{className:"tb_mc_post_wrap_in ".concat(r.ZQ&&(0,n.mD)(52)?"te_mc_post_wrap_in":""),children:(0,h.jsxs)("div",{className:"tb_mc_post_in",onClick:o(i,t),children:[r.ZQ&&(0,n.mD)(20)?(0,h.jsx)("div",{className:"tb_mc_author_container",children:(0,h.jsx)(_,{ownerId:c,mediaType:p,postTime:t.createdAt,author:t.author,network:t.network,font:s,personalization:e,ThemeRule:s})}):null,(0,h.jsxs)("div",{className:"tb_mc_post_media_wrapp",children:[t.share.status?(0,h.jsx)(v.Z,{share:t.share,shareClass:"tb_mc_share_container",item:t,wallID:l,ownerId:c}):null,p?(0,h.jsx)(g,{itemData:t,wallID:l,ownerId:c,ThemeRule:s,wall:u}):null]}),(0,h.jsxs)("div",{className:"tb_mc_contant_wrapper",children:[r.ZQ||p||!(0,n.mD)(20)?null:(0,h.jsxs)("div",{className:"tb_mc_social_top_",children:[" ",(0,h.jsx)(d.default,{networkClass:"tb_mc_social_center_ico",network:t.network,isDefault:1===s.iconType,ThemeRule:s})," "]}),(0,h.jsxs)("div",{className:"tb_mc_content_wrap ".concat((0,n.mD)(52)?"tb_mc_content_wrap_fixed":""),children:[j?(0,h.jsxs)("div",{className:"tb_mc_rating__ ".concat(29===t.network.id?"tb_mc_onsite_rating__":""),children:[(0,h.jsx)(f.Z,{rating:t.rating,network:t.network})," "]}):null,T&&!r.ZQ?(0,h.jsxs)("div",{className:"tb_mc_post_cta",children:[(0,h.jsx)(w.Z,{ctaClass:"tb_mc_post_cta_btn",cta:t.cta,item:t,onClickToCTA:m})," "]}):null,!(t.content&&String(t.content).length>0)||s.hideContent&&p?null:(0,h.jsx)(b.default,{item:t,contentClass:"".concat(C," ").concat(N),content:I,font:s,ThemeRule:s,personalization:e,contentTitle:t.contentTitle})]}),T&&r.ZQ?(0,h.jsxs)("div",{className:"tb_mc_post_cta",children:[(0,h.jsx)(w.Z,{ctaClass:"tb_mc_post_cta_btn",cta:t.cta,item:t,onClickToCTA:m})," "]}):null,!r.ZQ||(0,n.mD)(52)?(0,h.jsx)(_,{ownerId:c,mediaType:p,postTime:t.createdAt,author:t.author,network:t.network,font:s,personalization:e,ThemeRule:s}):null]}),s.socialAction&&!(0,n.mD)(52)?(0,h.jsx)(x.Z,{itemData:t,ThemeRule:s,ThemeID:e.widgetTheme,actionClass:"tb_mc_social_action__"}):null]})})})}}const C=j;var N=a(43411),T=a(43635);class I extends s.PureComponent{constructor(){super(...arguments),this.state={postData:[],loadData:1},this.onLoadMasonry=()=>this.editorHeight(),this.editorHeight=()=>{var t=document.querySelector(".tb_mc_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight("".concat(e))}}}}componentWillMount(){const{postData:t}=this.props,e=this;setTimeout((()=>this.setState({postData:t,loadData:1},(()=>this.onLoadMasonry()))),100),window.addEventListener("resize",(function(t){e.editorHeight()}),!0)}componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e,loadData:1},(()=>this.onLoadMasonry()))}render(){const{postData:t,completeDataObject:e,adjustWidth:a,wall:s,clickToShowPopUp:o,onClickToCTA:n}=this.props,{loadData:r}=this.state;return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(i(),{className:"tb_mc_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_mc_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:r?t&&t.length>0&&t.map(((t,i)=>{const r=e[t];return(0,h.jsx)(C,{ownerId:s.Wall.owner,itemData:r,itemIndex:i,adjustWidth:a,personalization:s.Personalization,ThemeRule:s.ThemeRule,clickToShowPopUp:o,wallID:s.Wall.id,onClickToCTA:n,wall:s},"modern_card".concat(r.id))})):null})})}}const y=(0,N.$j)((t=>({postHeight:t.postHeight.data})),(t=>({managePostHeight:e=>t((0,T.B0)(e))})))(I)},2406:(t,e,a)=>{"use strict";e.Ad=void 0;var s=a(84228);var o=a(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return o.getImageSize}});var i=a(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,a)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const s=a(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((a,o)=>{if("undefined"===typeof window)return o(s.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return o(s.ErrorMessage.URL_IS_NOT_DEFINED);let i=null;const n=new Image;n.addEventListener("load",(()=>{i&&window.clearTimeout(i),a({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(t=>{i&&window.clearTimeout(i),o("".concat(t.type,": ").concat(t.message))})),n.src=t,e.timeout&&(i=window.setTimeout((()=>o(s.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,a){"use strict";var s=this&&this.__awaiter||function(t,e,a,s){return new(a||(a=Promise))((function(o,i){function n(t){try{l(s.next(t))}catch(e){i(e)}}function r(t){try{l(s.throw(t))}catch(e){i(e)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof a?e:new a((function(t){t(e)}))).then(n,r)}l((s=s.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const o=a(47313),i=a(65786);e.useImageSize=(t,e)=>{const[a,n]=(0,o.useState)(null),[r,l]=(0,o.useState)(!1),[c,d]=(0,o.useState)(null);return(0,o.useEffect)((()=>{s(void 0,void 0,void 0,(function*(){l(!0),n(null);try{const{width:a,height:s}=yield(0,i.getImageSize)(t,e);n({width:a,height:s})}catch(c){d(c.toString())}finally{l(!1)}}))}),[t,e]),[a,{loading:r,error:c}]}},50247:()=>{}}]);