(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4119,8342,9239,5790,5810],{89239:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>l});var i=o(47313),a=o(17739),n=o(98935),s=o(46417);class l extends i.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:o}=this.props;return(0,s.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,s.jsx)("img",{className:"".concat(e,"__"),src:null!==t&&void 0!==t&&t.picture&&String(null===t||void 0===t?void 0:t.picture).includes("author.png")?" ":null===t||void 0===t?void 0:t.picture.replace(/[ ]+/g,""),alt:(0,a.P)(null===t||void 0===t?void 0:t.picture),width:44,height:44,onError:e=>{var i,a;const n="#ffffff"==(null===o||void 0===o?void 0:o.color)?"#000":null===o||void 0===o?void 0:o.color;e.target.src=null!==t&&void 0!==t&&t.errorPic?null===t||void 0===t?void 0:t.errorPic:"https://ui-avatars.com/api/?name=".concat(null===t||void 0===t||null===(i=t.name)||void 0===i?void 0:i.replace(/\s/g,""),"&background=").concat(null===(a=String(null===(null===o||void 0===o?void 0:o.id)?"#000":n))||void 0===a?void 0:a.replace("#",""),"&color=fff&length=1"),e.target.alt=null===t||void 0===t?void 0:t.name}},Math.random()):(0,s.jsx)(n.Z,{authorClass:e,username:null===t||void 0===t?void 0:t.name,network:o,color:null===(null===o||void 0===o?void 0:o.id)?"#000":null===o||void 0===o?void 0:o.color,errorPic:null===t||void 0===t?void 0:t.errorPic})},Math.random())}}},98935:(t,e,o)=>{"use strict";o.d(e,{Z:()=>s});var i=o(47313),a=o(46417);const n=t=>{let{username:e,network:o,authorClass:i,errorPic:n}=t;const s="#ffffff"==(null===o||void 0===o?void 0:o.color)?"#000":null===o||void 0===o?void 0:o.color;return(0,a.jsx)("img",{className:"".concat(i,"__"),src:n||"https://ui-avatars.com/api/?name=".concat(null===e||void 0===e?void 0:e.replace(/\s/g,""),"&background=").concat(String(null===(null===o||void 0===o?void 0:o.id)?"#000":s).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},s=(0,i.memo)(n)},7138:(t,e,o)=>{"use strict";o.d(e,{Z:()=>s});var i=o(47313),a=o(46417);class n extends i.PureComponent{render(){const{cta:t,ctaClass:e,postCta:o,onClickToCTA:i,item:n}=this.props,s=!(!o||1!==(null===o||void 0===o?void 0:o.status));return(0,a.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),i(n),window.open("".concat(s?null===o||void 0===o?void 0:o.url:null===t||void 0===t?void 0:t.url),"_blank")},children:[" ",s?null===o||void 0===o?void 0:o.text:null===t||void 0===t?void 0:t.text]})}}const s=n},64442:(t,e,o)=>{"use strict";o.d(e,{Z:()=>u});var i=o(47313),a=o(2406),n=o(20510),s=o.n(n),l=o(43635),r=o(35179),c=(o(17739),o(46417));const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class h extends i.Component{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:o}=await(0,a.Ad)(e.postFileNew);this.setState({paddingBottom:100*o/t})}catch(o){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=i.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(null===t||void 0===t?void 0:t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector("#video_p_".concat(null===t||void 0===t?void 0:t.id));e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(o){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){var t,e;const{VideoClass:o,data:i,wallID:a,isCover:n,controls:h,autoPlay:u,handleVideoEnded:_,muted:m,themeID:v,intervalTime:p}=this.props,{paddingBottom:g,videoLoaded:b,isVisible:w}=this.state,f={small:null===i||void 0===i?void 0:i.postFileNew,large:null===i||void 0===i?void 0:i.filename,orignal:null===i||void 0===i?void 0:i.file},x=[74,76,77].includes(v),k={paddingBottom:"".concat(x&&r.bX?null:g,"%")},j=null!==i&&void 0!==i&&i.loopStop?null===i||void 0===i?void 0:i.mediaUrl:null!==i&&void 0!==i&&i.mediaClip&&String(null===i||void 0===i?void 0:i.mediaClip).length>0?null===i||void 0===i?void 0:i.mediaClip:null===i||void 0===i?void 0:i.mediaUrl,C=new URLSearchParams(window.location.search),N=C.has("editor")&&"1"===C.get("editor")&&C.has("personalize")&&"1"===C.get("personalize")&&C.has("preview")&&"1"===C.get("preview"),T=C.has("embed")&&"true"===C.get("embed");return(0,c.jsx)("div",{className:"".concat(o,"_wrap_ mediaHolder").concat(i.id),style:k,ref:this.videoRef,children:(0,c.jsx)(s(),{className:"".concat(o," video").concat(i.id),url:d(j,null===i||void 0===i||null===(t=i.network)||void 0===t?void 0:t.id),"data-type":"video","data-network":null===i||void 0===i||null===(e=i.network)||void 0===e?void 0:e.id,"data-link":null===i||void 0===i?void 0:i.link,"data-wall-id":a,"data-item-id":null===i||void 0===i?void 0:i.id,"data-feed-id":null!==i&&void 0!==i&&i.feedId?null===i||void 0===i?void 0:i.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%"),poster:null===i||void 0===i?void 0:i.postFileNew}},file:{attributes:{preload:"metadata",poster:null===i||void 0===i?void 0:i.postFileNew}}},loop:!(r.bX&&!r.aL&&null!==i&&void 0!==i&&i.loopStop),onError:t=>{!T||null!==i&&void 0!==i&&i.stories&&0!=(null===i||void 0===i?void 0:i.stories)||(0,l.ib)(t,i.id),x&&_&&setTimeout((()=>{_()}),1e3*p)},autoPlay:!r.bX||N&&!T||null==(null===i||void 0===i?void 0:i.mediaClip)?!(r.bX&&N&&!T&&(null==(null===i||void 0===i?void 0:i.mediaClip)||""==(null===i||void 0===i?void 0:i.mediaClip)))&&u:w,muted:m,volume:u?1:0,playsinline:!0,onReady:t=>{r.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:r.ig||r.bX&&(!N||T)?w:!(r.bX&&N&&!T)&&u,height:"100%",width:"100%",controls:h||!1,style:{backgroundImage:"url(".concat(x?f.large:f.small,")"),backgroundSize:n?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:_||null})})}}const u=(0,i.memo)(h)},25810:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>l});var i=o(47313),a=o(35179),n=o(46417);const s=i.lazy((()=>o.e(5867).then(o.bind(o,95867))));class l extends i.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:o,isDefault:l,Personalization:r}=this.props,c=!!l&&(7!==(null===t||void 0===t?void 0:t.id)&&4!==(null===t||void 0===t?void 0:t.id)&&36!==(null===t||void 0===t?void 0:t.id)),d=a.ZQ&&36===(null===t||void 0===t?void 0:t.id)?"tagembed":(null===t||void 0===t?void 0:t.icon)||"";return c?(0,n.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,n.jsx)("div",{})}):(0,n.jsxs)(i.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(s,{network:t,networkClass:e})]})}}},62245:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>c});var i=o(47313),a=o(16390),n=o(17739),s=o(35179),l=o(30584),r=o(46417);class c extends i.PureComponent{constructor(t){super(t),this.contentRef=i.createRef()}componentDidMount(){s.ZQ&&setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){var t,e;const{contentClass:o,content:i,ThemeRule:c,font:d,personalization:h,item:u,contentTitle:_,readMore:m,maxLength:v,textAlign:p,maxLines:g,isReadMore:b}=this.props,w={WebkitLineClamp:g,textAlign:c.textAlignment};let f=20==(null===u||void 0===u||null===(t=u.network)||void 0===t?void 0:t.id)||s.bX&&!s.aL?i:(0,n.Fx)(i);12==(null===u||void 0===u||null===(e=u.network)||void 0===e?void 0:e.id)&&(f=(0,a.ZP)(f));const x="".concat(c.lineTrim?" tb_content_line-".concat(c.lineTrim):""),k="".concat(o," ").concat(b?"":x);return(0,r.jsxs)("div",{className:k,ref:this.contentRef,style:w,children:[_?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,a.ZP)(_)}):null,(0,r.jsx)(l.Z,{data:u,content:f,Personalization:h,ThemeRule:c})]})}}},30584:(t,e,o)=>{"use strict";o.d(e,{Z:()=>d});var i=o(47313),a=o(91523),n=o(16390),s=o(46417);const l=o(77560),r=(t,e)=>(0,s.jsx)(a.default,{style:e&&[66,70].includes(null===e||void 0===e?void 0:e.themeId)?{width:e.fontSize,height:e.fontSize}:null,children:(0,n.ZP)(t)}),c=t=>{var e;let{data:o,content:i,Personalization:a,ThemeRule:c}=t;const d={color:a.hashtag_color,fontWeight:"bold",backgroundColor:1==a.hashtag_background_status?a.hashtag_background_color:"transparent"};return 20==(null===o||void 0===o||null===(e=o.network)||void 0===e?void 0:e.id)&&window.slackdown?(0,s.jsx)(s.Fragment,{children:1===a.hashtag_highlight&&0===a.hashtag_feed&&0===a.hashtag_all?(0,n.ZP)(i):1===a.hashtag_highlight&&0===a.hashtag_feed&&1===a.hashtag_all?r(window.slackdown.parse(l(i,/#(\w+)/g,((t,e)=>(0,s.jsxs)("div",{className:"tb_text_hashtag",style:d,children:["#",t]}))),o.slackMember),c):1===a.hashtag_highlight&&1===a.hashtag_feed&&0===a.hashtag_all?r(window.slackdown.parse(l(i,o.hash.hashString,((t,e)=>(0,s.jsx)("div",{className:"tb_text_hashtag",style:d,children:t}))),o.slackMember),c):1===a.hashtag_highlight&&1===a.hashtag_feed&&1===a.hashtag_all?r(window.slackdown.parse(l(i,/#(\w+)/g,((t,e)=>(0,s.jsxs)("div",{className:"tb_text_hashtag",style:d,children:["#",t]},"".concat(o.id,"_").concat(e)))),o.slackMember),c):r(window.slackdown.parse(i,o.slackMember),c)}):(0,s.jsx)(s.Fragment,{children:1===a.hashtag_highlight&&0===a.hashtag_feed&&0===a.hashtag_all?(0,n.ZP)(i):1===a.hashtag_highlight&&0===a.hashtag_feed&&1===a.hashtag_all?l((0,n.ZP)(i),/#(\w+)/g,((t,e)=>(0,s.jsxs)("div",{className:"tb_text_hashtag",style:d,children:["#",t]}))):1===a.hashtag_highlight&&1===a.hashtag_feed&&0===a.hashtag_all?l((0,n.ZP)(i),o.hash.hashString,((t,e)=>(0,s.jsx)("strong",{className:"tb_text_hashtag",style:d,children:t}))):1===a.hashtag_highlight&&1===a.hashtag_feed&&1===a.hashtag_all?l((0,n.ZP)(i),/#(\w+)/g,((t,e)=>(0,s.jsxs)("div",{className:"tb_text_hashtag",style:d,children:["#",t]},"".concat(o.id,"_").concat(e)))):r(i,c)})},d=(0,i.memo)(c)},90905:(t,e,o)=>{"use strict";o.d(e,{Z:()=>r});var i=o(47313),a=o(35179),n=o(46417);const s=t=>{let{network:e}=t;const o={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:i,color:s}=o[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,n.jsx)("div",{className:i,style:{color:s},"tb-network":e.id,children:(0,n.jsx)("div",{})})},l=t=>{let{ThemeID:e}=t;const{className:o,color:i}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,n.jsx)("div",{className:o,style:{color:i},"tb-network":e})};class r extends i.PureComponent{render(){const{rating:t,network:e,ThemeID:o}=this.props;return(0,n.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,i)=>o?(0,n.jsx)(l,{ThemeID:o},i):(0,n.jsx)(s,{network:e},i))):null})}}},5744:(t,e,o)=>{"use strict";o.d(e,{Z:()=>l});var i=o(47313),a=o(43635),n=o(35179),s=o(46417);class l extends i.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:o,wallID:i,ownerId:s}=this.props;e.stopPropagation(),n.ZQ||(0,a.S5)({type:2,action:2,wall:i,feed:o.feedId,post:o.referenceId?o.referenceId:o.id,owner:s}),(0,a.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,s.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,s.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(n.ZQ?"tb-share-fill":"tb-share"),children:(0,s.jsx)("div",{})}),(0,s.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,s.jsx)("div",{className:"tb_share_icon_list",children:(0,s.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,s.jsx)("div",{})})}):"",t.twitter?(0,s.jsx)("div",{className:"tb_share_icon_list",children:(0,s.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,s.jsx)("div",{})})}):"",t.linkedin?(0,s.jsx)("div",{className:"tb_share_icon_list",children:(0,s.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,s.jsx)("div",{})})}):""]})]})}}},32675:(t,e,o)=>{"use strict";o.d(e,{Z:()=>c});var i=o(47313),a=(o(35179),o(17739)),n=o(46417);const s=(t,e,o)=>1==t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,a.ok)(e)):o,l=(t,e,o)=>1==t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,a.ok)(e)):o,r=t=>{let{arialbl:e,hrefClick:o,Icon:i,count:s}=t;return(0,n.jsx)("div",{className:"tb_social_action__list",children:(0,n.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(o,"_blank")},className:"tb_social_action__ico_wrap",children:[(0,n.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(i),children:" "}),s>0?(0,n.jsx)("div",{className:"tb_social_action_counts__",children:(0,a.sy)(s)}):""]})})};class c extends i.PureComponent{render(){var t,e,o;const{itemData:i,ThemeRule:c,actionClass:d,ThemeID:h}=this.props,u={color:3===h?1===c.iconType?c.iconColor:i.network.color:c.fontColor},_=null===i||void 0===i||null===(t=i.network)||void 0===t?void 0:t.id,m=3===_||10===_||7===_?"like":"heart",v=!![1,2,3,7,8,9,10,18].includes(_),p=![29,19].includes(_),g=null!==i&&void 0!==i&&null!==(e=i.network)&&void 0!==e&&e.name?null===i||void 0===i||null===(o=i.network)||void 0===o?void 0:o.name:"";return(0,n.jsx)(n.Fragment,{children:29!==_&&26!==_&&23!==_&&6!==_&&5!==_&&11!==_&&12!==_&&15!==_&&20!==_&&21!==_?(0,n.jsx)("div",{className:d,children:(0,n.jsxs)("div",{className:"tb_social_action__",children:[v?(0,n.jsx)(r,{arialbl:g,hrefClick:s(_,null===i||void 0===i?void 0:i.postId,null===i||void 0===i?void 0:i.link),Icon:m,iconColorStyle:u,count:null===i||void 0===i?void 0:i.like_count}):null,p?(0,n.jsx)(r,{arialbl:g,hrefClick:l(_,null===i||void 0===i?void 0:i.postId,null===i||void 0===i?void 0:i.link),Icon:"comment",iconColorStyle:u,count:null===i||void 0===i?void 0:i.comment_count}):null,1===_?(0,n.jsx)(r,{arialbl:g,hrefClick:"https://twitter.com/intent/retweet?tweet_id=".concat((0,a.ok)(i.postId)),Icon:"retweet",iconColorStyle:u,count:null===i||void 0===i?void 0:i.comment_count}):null,(0,n.jsx)(r,{arialbl:g,hrefClick:null===i||void 0===i?void 0:i.link,Icon:"eye",iconColorStyle:u,count:0})]})}):""})}}},55790:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>l});var i=o(47313),a=o(17739),n=o(46417);const s=t=>{const{postTime:e,timeClass:o}=t;return(0,n.jsx)("div",{className:o,children:(0,a.Sy)(e)})},l=(0,i.memo)(s)},18017:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>y});var i=o(47313),a=o(61395),n=o.n(a),s=o(17739),l=o(35179),r=o(89239),c=o(55790),d=o(25810),h=o(46417);const u=t=>{let{author:e,personalization:o,postTime:i,network:a,ThemeRule:n,font:s,mediaType:u,ownerId:_}=t;const m=!(!o.postAuthor||e.isInstaUser),v=!(!o.postAuthor||!o.postTime||e.isInstaUser);return(0,h.jsxs)("div",{className:"tb_mc_author_wrapper",children:[(0,h.jsxs)("div",{className:"tb_mc_author",children:[m?(0,h.jsx)(r.default,{network:a,author:e,authorClass:"tb_mc_author_profile"},e.username):"",(0,h.jsxs)("div",{className:"tb_mc_author_info",children:[m?(0,h.jsx)("div",{className:"tb_mc_authorname",children:e.name}):"",(0,h.jsxs)("div",{className:"tb_mc_post_info",children:[m?(0,h.jsx)("div",{className:"tb_mc_username",children:e.username&&e.username.length>0?"@".concat(e.username):""}):"",v?(0,h.jsx)("div",{className:"tb_mc_seprator",children:" "}):"",o.postTime?(0,h.jsx)(c.default,{postTime:i,timeClass:"tb_mc_time tb-cTBfont-".concat(n.font_varient)}):""]})]})]}),u&&a.id||l.ZQ?(0,h.jsx)("div",{className:"tb_mc_social_",children:(0,h.jsx)(d.default,{networkClass:"tb_mc_social_ico",network:a,isDefault:1===n.iconType,ThemeRule:n})}):null]})};var _=o(81349),m=o(84261),v=o(64442);const p=t=>{let{itemData:e,wallID:o,ownerId:i,wall:a}=t;const n=3===e.type||5===e.type,s=!(!l.ZQ||!n||a.Personalization.mobilePopup||a.Personalization.postFeatured),r=!(!n||28===e.network.id||1!=a.ThemeRule.autoPlay),c=!!l.ZQ&&(!!a.ThemeRule.aspectImageRatio&&a.ThemeRule.aspectImageRatio);return(0,h.jsxs)("div",{className:"tb_mc_media_wrap",children:[s?null:(0,h.jsx)(_.Z,{itemData:e,IconClass:"tb_mc_media_icon",show:!0,isCenter:l.ZQ}),r||s?(0,h.jsx)(v.Z,{VideoClass:"tb_mc_video",data:e,wallID:o,themeID:a.Personalization.widgetTheme,ownerId:i,size:c,isCover:!0,controls:!0,autoPlay:!1,muted:!0}):(0,h.jsx)(m.default,{ImageClass:"tb_mc_image",data:e,wallID:o,themeID:a.Personalization.widgetTheme,ownerId:i,size:c,ThemeRule:a.ThemeRule})]})};var g=o(62245),b=o(5744),w=o(7138),f=o(90905),x=o(32675);const k=l.ZQ?null:200;class j extends i.PureComponent{constructor(t){super(t),this.postTrack=i.createRef()}componentDidMount(){l.nX&&(0,s.YN)(this.postTrack)}render(){const{itemData:t,personalization:e,adjustWidth:o,ThemeRule:i,clickToShowPopUp:a,itemIndex:n,wallID:r,ownerId:c,onClickToCTA:_,wall:m}=this.props,v=!(l.ZQ&&(0,s.mD)(52)||1===t.type),j=t.rating>0,C=t.rating>0?"tb_mc_rating_content":"tb_mc_content",N=1===t.type&&t.content&&String(t.content).length>0&&e.textDecorate?"tb_mc_text_decoration tb_mc_text_post":"",T=!!(t.cta&&Object.keys(t.cta).length>0&&t.cta.status),I=e.trimcontent?(0,s.Sv)(t.content,k):t.content;return(0,h.jsx)("div",{className:"tb_mc_post_wrapper",ref:this.postTrack,"data-id":t.id,style:{width:"".concat(o,"%"),padding:e.padding/2},"tb-network":t.network.icon,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,"tab-index":0,"area-label":I,role:"article",children:(0,h.jsx)("div",{className:"tb_mc_post_wrap_in ".concat(l.ZQ&&(0,s.mD)(52)?"te_mc_post_wrap_in":""),children:(0,h.jsxs)("div",{className:"tb_mc_post_in",onClick:a(n,t),children:[l.ZQ&&(0,s.mD)(20)?(0,h.jsx)("div",{className:"tb_mc_author_container",children:(0,h.jsx)(u,{ownerId:c,mediaType:v,postTime:t.createdAt,author:t.author,network:t.network,font:i,personalization:e,ThemeRule:i})}):null,(0,h.jsxs)("div",{className:"tb_mc_post_media_wrapp",children:[t.share.status?(0,h.jsx)(b.Z,{share:t.share,shareClass:"tb_mc_share_container",item:t,wallID:r,ownerId:c}):null,v?(0,h.jsx)(p,{itemData:t,wallID:r,ownerId:c,ThemeRule:i,wall:m}):null]}),(0,h.jsxs)("div",{className:"tb_mc_contant_wrapper",children:[l.ZQ||v||!(0,s.mD)(20)?null:(0,h.jsxs)("div",{className:"tb_mc_social_top_",children:[" ",(0,h.jsx)(d.default,{networkClass:"tb_mc_social_center_ico",network:t.network,isDefault:1===i.iconType,ThemeRule:i})," "]}),(0,h.jsxs)("div",{className:"tb_mc_content_wrap ".concat((0,s.mD)(52)?"tb_mc_content_wrap_fixed":""),children:[j?(0,h.jsxs)("div",{className:"tb_mc_rating__ ".concat(29===t.network.id?"tb_mc_onsite_rating__":""),children:[(0,h.jsx)(f.Z,{rating:t.rating,network:t.network})," "]}):null,T&&!l.ZQ?(0,h.jsxs)("div",{className:"tb_mc_post_cta",children:[(0,h.jsx)(w.Z,{ctaClass:"tb_mc_post_cta_btn",cta:t.cta,item:t,onClickToCTA:_})," "]}):null,!(t.content&&String(t.content).length>0)||i.hideContent&&v?null:(0,h.jsx)(g.default,{item:t,contentClass:"".concat(C," ").concat(N),content:I,font:i,ThemeRule:i,personalization:e,contentTitle:t.contentTitle})]}),T&&l.ZQ?(0,h.jsxs)("div",{className:"tb_mc_post_cta",children:[(0,h.jsx)(w.Z,{ctaClass:"tb_mc_post_cta_btn",cta:t.cta,item:t,onClickToCTA:_})," "]}):null,!l.ZQ||(0,s.mD)(52)?(0,h.jsx)(u,{ownerId:c,mediaType:v,postTime:t.createdAt,author:t.author,network:t.network,font:i,personalization:e,ThemeRule:i}):null]}),i.socialAction&&!(0,s.mD)(52)?(0,h.jsx)(x.Z,{itemData:t,ThemeRule:i,ThemeID:e.widgetTheme,actionClass:"tb_mc_social_action__"}):null]})})})}}const C=j;var N=o(43411),T=o(43635);class I extends i.PureComponent{constructor(){super(...arguments),this.state={postData:[],loadData:1},this.onLoadMasonry=()=>this.editorHeight(),this.editorHeight=()=>{var t=document.querySelector(".tb_mc_post_container");if(t){const e=t.style.height;if(e){const t=e.split("px");t&&JSON.stringify(t)&&t[0]>0&&this.props.managePostHeight("".concat(e))}}}}componentWillMount(){const{postData:t}=this.props,e=this;setTimeout((()=>this.setState({postData:t,loadData:1},(()=>this.onLoadMasonry()))),100),window.addEventListener("resize",(function(t){e.editorHeight()}),!0)}componentWillReceiveProps(t){const{postData:e}=t;this.setState({postData:e,loadData:1},(()=>this.onLoadMasonry()))}render(){const{postData:t,completeDataObject:e,adjustWidth:o,wall:i,clickToShowPopUp:a,onClickToCTA:s}=this.props,{loadData:l}=this.state;return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(n(),{className:"tb_mc_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_mc_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:l?t&&t.length>0&&t.map(((t,n)=>{const l=e[t];return(0,h.jsx)(C,{ownerId:i.Wall.owner,itemData:l,itemIndex:n,adjustWidth:o,personalization:i.Personalization,ThemeRule:i.ThemeRule,clickToShowPopUp:a,wallID:i.Wall.id,onClickToCTA:s,wall:i},"modern_card".concat(l.id))})):null})})}}const y=(0,N.$j)((t=>({postHeight:t.postHeight.data})),(t=>({managePostHeight:e=>t((0,T.B0)(e))})))(I)},2406:(t,e,o)=>{"use strict";e.Ad=void 0;var i=o(84228);var a=o(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return a.getImageSize}});var n=o(22537)},84228:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,o)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const i=o(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((o,a)=>{if("undefined"===typeof window)return a(i.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return a(i.ErrorMessage.URL_IS_NOT_DEFINED);let n=null;const s=new Image;s.addEventListener("load",(()=>{n&&window.clearTimeout(n),o({width:s.naturalWidth,height:s.naturalHeight})})),s.addEventListener("error",(t=>{n&&window.clearTimeout(n),a("".concat(t.type,": ").concat(t.message))})),s.src=t,e.timeout&&(n=window.setTimeout((()=>a(i.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,o){"use strict";var i=this&&this.__awaiter||function(t,e,o,i){return new(o||(o=Promise))((function(a,n){function s(t){try{r(i.next(t))}catch(e){n(e)}}function l(t){try{r(i.throw(t))}catch(e){n(e)}}function r(t){var e;t.done?a(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(s,l)}r((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const a=o(47313),n=o(65786);e.useImageSize=(t,e)=>{const[o,s]=(0,a.useState)(null),[l,r]=(0,a.useState)(!1),[c,d]=(0,a.useState)(null);return(0,a.useEffect)((()=>{i(void 0,void 0,void 0,(function*(){r(!0),s(null);try{const{width:o,height:i}=yield(0,n.getImageSize)(t,e);s({width:o,height:i})}catch(c){d(c.toString())}finally{r(!1)}}))}),[t,e]),[o,{loading:l,error:c}]}},50247:()=>{}}]);