(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5801,8342,9239,5790,5810],{89239:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var i=s(47313),o=s(17739),n=s(98935),a=s(46417);class r extends i.PureComponent{constructor(e){super(e),this.state={isAuthorImagevalid:!0}}render(){const{author:e,authorClass:t,network:s}=this.props;return(0,a.jsx)("div",{className:t,children:this.state.isAuthorImagevalid?(0,a.jsx)("img",{className:"".concat(t,"__"),src:e.picture&&String(e.picture).includes("author.png")?" ":e.picture.replace(/[ ]+/g,""),alt:(0,o.P)(e.picture),width:44,height:44,onError:e=>{this.setState({isAuthorImagevalid:!1})}}):(0,a.jsx)(n.Z,{authorClass:t,username:e.name,network:s,color:null===s.id?"#000":s.color,errorPic:e.errorPic})},Math.random())}}},98935:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var i=s(47313),o=s(46417);const n=e=>{let{username:t,network:s,authorClass:i,errorPic:n}=e;const a="#ffffff"==s.color?"#000":s.color;return(0,o.jsx)("img",{className:"".concat(i,"__"),src:n||"https://ui-avatars.com/api/?name=".concat(t.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":a).replace("#",""),"&color=fff&length=1"),alt:t,width:45,height:45})},a=(0,i.memo)(n)},7138:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var i=s(47313),o=s(46417);class n extends i.PureComponent{render(){const{cta:e,ctaClass:t,postCta:s,onClickToCTA:i,item:n}=this.props,a=!(!s||1!==s.status);return(0,o.jsxs)("div",{className:t,style:{},onClick:t=>{t.stopPropagation(),i(n),window.open("".concat(a?s.url:e.url),"_blank")},children:[" ",a?s.text:e.text]})}}const a=n},64442:(e,t,s)=>{"use strict";s.d(t,{Z:()=>h});var i=s(47313),o=s(2406),n=s(20510),a=s.n(n),r=s(40475),l=s(35179),c=(s(17739),s(46417));const d=(e,t)=>{if(25===t){return String(e).replace("https://w.soundcloud.com/player/?url=","")}return e};class h extends i.PureComponent{constructor(e){super(e),this.onMediaLoad=async e=>{const{data:t}=this.props;if(t&&Object.keys(t).length>0&&[4,5,3].includes(t.type))if(t.mediaHeight&&""!=t.mediaHeight&&t.mediaWidth&&""!=t.mediaWidth)this.setState({paddingBottom:100*t.mediaHeight/t.mediaWidth});else try{const{width:e,height:s}=await(0,o.Ad)(t.postFileNew);this.setState({paddingBottom:100*s/e})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=e=>{this.setState({videoLoaded:e})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=i.createRef(),this.observer=null}componentWillMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((e=>{let[t]=e;this.setState({isVisible:t.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(s){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:e,data:t,wallID:s,isCover:i,controls:o,autoPlay:n,handleVideoEnded:h,muted:_,themeID:p}=this.props;console.log("this.props",this.props);const{paddingBottom:u,videoLoaded:m,isVisible:g}=this.state,b={small:t.postFileNew,large:t.filename,orignal:t.file},w=[74,76,77].includes(p),f={paddingBottom:"".concat(w&&l.bX?null:u,"%")},x=l.bX?t.mediaUrl:t.mediaClip&&String(t.mediaClip).length>0?t.mediaClip:t.mediaUrl;return(0,c.jsx)("div",{className:"".concat(e,"_wrap_ mediaHolder").concat(t.id),style:f,ref:this.videoRef,children:(0,c.jsx)(a(),{className:"".concat(e," video").concat(t.id),url:d(x,t.network.id),"data-type":"video","data-network":t.network.id,"data-link":t.link,"data-wall-id":s,"data-item-id":t.id,"data-feed-id":t.feedId?t.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata"}}},loop:!(l.bX&&!l.aL&&null!==t&&void 0!==t&&t.loopStop),onError:e=>{t.stories&&0!=t.stories||(0,r.ib)(e,t.id)},autoPlay:n,muted:_,volume:n?1:0,playsinline:!0,onReady:e=>{l.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:l.ig?g:n,height:"100%",width:"100%",controls:o||!1,style:{backgroundImage:"url(".concat(w?b.large:b.small,")"),backgroundSize:i?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})})}}},25810:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var i=s(47313),o=s(35179),n=s(46417);const a=i.lazy((()=>s.e(5867).then(s.bind(s,95867))));class r extends i.PureComponent{render(){const{network:e,networkClass:t,ThemeRule:s,isDefault:r,Personalization:l}=this.props,c=!!r&&(7!==e.id&&4!==e.id&&36!==e.id),d=o.ZQ&&36==e.id?"tagembed":e.icon;return c?(0,n.jsx)("div",{className:"".concat(t," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,n.jsx)("div",{})}):(0,n.jsxs)(i.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(a,{network:e,networkClass:t})]})}}},62245:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var i=s(47313),o=s(16390),n=s(17739),a=s(35179),r=s(46417);const l=i.lazy((()=>Promise.all([s.e(622),s.e(584)]).then(s.bind(s,30584))));class c extends i.PureComponent{constructor(e){super(e),this.contentRef=i.createRef()}componentDidMount(){setTimeout((()=>{const e=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(e)}),100)}render(){const{contentClass:e,content:t,ThemeRule:s,font:c,personalization:d,item:h,contentTitle:_,readMore:p,maxLength:u,textAlign:m,maxLines:g,isReadMore:b}=this.props,w={WebkitLineClamp:g,textAlign:s.textAlignment};let f=20==h.network.id||a.bX&&!a.aL?t:(0,n.Fx)(t);12==h.network.id&&(f=(0,o.ZP)(f));const x="".concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):""),v="".concat(e," ").concat(b?"":x);return(0,r.jsxs)("div",{className:v,ref:this.contentRef,style:w,children:[_?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,o.ZP)(_)}):null,(0,r.jsxs)(i.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[" ",(0,r.jsx)(l,{data:h,content:f,Personalization:d})]})]})}}},90905:(e,t,s)=>{"use strict";s.d(t,{Z:()=>l});var i=s(47313),o=s(35179),n=s(46417);const a=e=>{let{network:t}=e;const s={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:o.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:o.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:i,color:a}=s[t.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,n.jsx)("div",{className:i,style:{color:a},"tb-network":t.id,children:(0,n.jsx)("div",{})})},r=e=>{let{ThemeID:t}=e;const{className:s,color:i}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[t]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,n.jsx)("div",{className:s,style:{color:i},"tb-network":t})};class l extends i.PureComponent{render(){const{rating:e,network:t,ThemeID:s}=this.props;return(0,n.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:e?[...Array(e)].map(((e,i)=>s?(0,n.jsx)(r,{ThemeID:s},i):(0,n.jsx)(a,{network:t},i))):null})}}},5744:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var i=s(47313),o=s(40475),n=s(35179),a=s(46417);class r extends i.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{item:s,wallID:i,ownerId:a}=this.props;t.stopPropagation(),n.ZQ||(0,o.S5)({type:2,action:2,wall:i,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:a}),(0,o.Fv)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{share:e,shareClass:t}=this.props;return(0,a.jsxs)("div",{className:"tb_share_wrapper ".concat(t),children:[(0,a.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(n.ZQ?"tb-share-fill":"tb-share"),children:(0,a.jsx)("div",{})}),(0,a.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[e.facebook?(0,a.jsx)("div",{className:"tb_share_icon_list",children:(0,a.jsx)("div",{onClick:this.onClickData(e.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,a.jsx)("div",{})})}):"",e.twitter?(0,a.jsx)("div",{className:"tb_share_icon_list",children:(0,a.jsx)("div",{onClick:this.onClickData(e.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,a.jsx)("div",{})})}):"",e.linkedin?(0,a.jsx)("div",{className:"tb_share_icon_list",children:(0,a.jsx)("div",{onClick:this.onClickData(e.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,a.jsx)("div",{})})}):""]})]})}}},32675:(e,t,s)=>{"use strict";s.d(t,{Z:()=>c});var i=s(47313),o=(s(35179),s(17739)),n=s(46417);const a=(e,t,s)=>1==e?"https://twitter.com/intent/favorite?tweet_id=".concat((0,o.ok)(t)):s,r=(e,t,s)=>1==e?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,o.ok)(t)):s,l=e=>{let{arialbl:t,hrefClick:s,Icon:i,count:a}=e;return(0,n.jsx)("div",{className:"tb_social_action__list",children:(0,n.jsxs)("div",{onClick:e=>{e.stopPropagation(),window.open(s,"_blank")},className:"tb_social_action__ico_wrap",children:[(0,n.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(i),children:" "}),a>0?(0,n.jsx)("div",{className:"tb_social_action_counts__",children:(0,o.sy)(a)}):""]})})};class c extends i.PureComponent{render(){const{itemData:e,ThemeRule:t,actionClass:s,ThemeID:i}=this.props,c={color:3===i?1===t.iconType?t.iconColor:e.network.color:t.fontColor},d=e.network.id,h=3===d||10===d||7===d?"like":"heart",_=!![1,2,3,7,8,9,10,18].includes(d),p=![29,19].includes(d),u=e.network.name?e.network.name:"";return(0,n.jsx)(n.Fragment,{children:29!==d&&26!==d&&23!==d&&6!==d&&5!==d&&11!==d&&12!==d&&15!==d&&20!==d&&21!==d?(0,n.jsx)("div",{className:s,children:(0,n.jsxs)("div",{className:"tb_social_action__",children:[_?(0,n.jsx)(l,{arialbl:u,hrefClick:a(d,e.postId,e.link),Icon:h,iconColorStyle:c,count:e.like_count}):null,p?(0,n.jsx)(l,{arialbl:u,hrefClick:r(d,e.postId,e.link),Icon:"comment",iconColorStyle:c,count:e.comment_count}):null,1===d?(0,n.jsx)(l,{arialbl:u,hrefClick:"https://twitter.com/intent/retweet?tweet_id=".concat((0,o.ok)(e.postId)),Icon:"retweet",iconColorStyle:c,count:e.comment_count}):null,(0,n.jsx)(l,{arialbl:u,hrefClick:e.link,Icon:"eye",iconColorStyle:c,count:0})]})}):""})}}},55790:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var i=s(47313),o=s(17739),n=s(46417);const a=e=>{const{postTime:t,timeClass:s}=e;return(0,n.jsx)("div",{className:s,children:(0,o.Sy)(t)})},r=(0,i.memo)(a)},94594:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>S});var i=s(47313),o=s(34862),n=s(43411),a=s(11774),r=s(64442),l=s(35179),c=s(84261),d=s(81349),h=s(46417);const _=e=>{let{itemData:t,wallID:s,ownerId:i,wall:o,isCover:n,ThemeRule:a}=e;const _=(3===t.type||5===t.type)&&1==o.ThemeRule.autoPlay,p=l.ZQ&&a.aspectImageRatio?a.aspectImageRatio:100,u=!t.hotspot;return(0,h.jsxs)("div",{className:"tb_hc_media_wrap",children:[u?(0,h.jsx)(d.Z,{itemData:t,IconClass:"tb_hc_media_icon",show:u,isCenter:!1}):null,_?(0,h.jsx)(r.Z,{VideoClass:"tb_hc_video",data:t,wallID:s,themeID:o.Personalization.widgetTheme,wall:o,size:p,isCover:n,muted:!0,autoPlay:_,handleVideoEnded:()=>{}}):(0,h.jsx)(c.default,{ImageClass:"tb_hc_image",data:t,wallID:s,themeID:o.Personalization.widgetTheme,ownerId:i,size:p,hotspot:!0})]})};var p=s(62245),u=s(5744),m=s(7138),g=s(90905),b=s(32675),w=s(55790),f=s(25810),x=s(89239);const v=e=>{let{author:t,personalization:s,postTime:o,network:n,ThemeRule:a,font:r,rating:l,ownerId:c,instaHash:d}=e;const _=t.username&&t.username.length>0?"@".concat(t.username):"",p=!(!s.postAuthor||t.isInstaUser),u=!(!s.postAuthor||!s.postTime||t.isInstaUser),m=null!==n.id&&""!==n.id;return(0,h.jsxs)("div",{className:"tb_hc_author_wrapper",children:[p?(0,h.jsx)(i.Suspense,{fallback:(0,h.jsx)(h.Fragment,{}),children:(0,h.jsx)(x.default,{network:n,author:t,authorClass:"tb_hc_author_profile"})}):"",(0,h.jsxs)("div",{className:"tb_hc_author_info",children:[p?(0,h.jsx)("div",{className:"tb_hc_authorname tb-cTBfont-".concat(a.font_varient),children:t.name}):"",(0,h.jsxs)("div",{className:"tb_hc_post_info",children:[p?(0,h.jsx)("div",{className:"tb_hc_username",children:_}):"",u?(0,h.jsx)("div",{className:"tb_hc_seprator",children:" "}):"",s.postTime?(0,h.jsx)(i.Suspense,{fallback:(0,h.jsx)(h.Fragment,{}),children:(0,h.jsx)(w.default,{postTime:o,timeClass:"tb_hc_time tb-cTBfont-".concat(a.font_varient),authorColor:a.authorColor})}):""]})]}),m?(0,h.jsx)("div",{className:"tb_hc_social_",children:(0,h.jsx)(i.Suspense,{fallback:(0,h.jsx)(h.Fragment,{}),children:(0,h.jsx)(f.default,{networkClass:"tb_hc_social_ico",network:n,isDefault:1===a.iconType,ThemeRule:a})})}):null]})};var k=s(17739);const j=l.ZQ?null:140;class y extends i.PureComponent{constructor(e){super(e),this.contentRef=e=>{this.setState({height:e})},this.contentRefHidden=e=>{this.setState({hiddenHeight:e})},this.toggleExpand=e=>{e.stopPropagation(),this.setState({isExpanded:!this.state.isExpanded})},this.state={isExpanded:!1,hiddenHeight:0,height:0},this.toggleExpand=this.toggleExpand.bind(this),this.postTrack=i.createRef()}componentDidMount(){l.nX&&(0,k.YN)(this.postTrack)}render(){const{itemData:e,personalization:t,ThemeRule:s,clickToShowPopUp:o,itemIndex:n,wallID:a,ownerId:r,onClickToCTA:c,wall:d,languageSetting:w}=this.props,{isExpanded:f,hiddenHeight:x,height:y}=this.state,C=1!==e.type,T=!!(e.rating&&e.rating>0),S=e.rating>0?"tb_hc_rating_content":"tb_hc_content",N=1===e.type?"tb_hc_text_post":"",I=1===e.type&&t.textDecorate?"tb_hc_text_decoration":"",P=!!e.cta.status,R=t.trimcontent?(0,k.Sv)(e.content,j):e.content,D=x>y;return(0,h.jsx)("div",{"item-id":e.id,id:"tb-hc-post-".concat(e.id),className:"tb_hc_post_wrapper",ref:this.postTrack,"post-id":e.referenceId?e.referenceId:e.id,"feed-id":e.feedId,style:{padding:t.padding/2},children:(0,h.jsxs)("div",{className:"tb_hc_post_in",onClick:o(n,e),children:[(0,h.jsxs)("div",{className:"tb_hc_post_media_wrapp",children:[e.share.status?(0,h.jsx)(u.Z,{share:e.share,shareClass:"tb_hc_share_container",item:e,wallID:a,ownerId:r}):"",C?(0,h.jsx)(_,{itemData:e,wallID:a,wall:d,ownerId:r,size:!!t.trimcontent&&100,isCover:!!t.trimcontent,ThemeRule:s}):null]}),(0,h.jsxs)("div",{className:"tb_hc_contant_wrapper ".concat(N),children:[(0,h.jsx)(i.Suspense,{fallback:(0,h.jsx)(h.Fragment,{}),children:(0,h.jsx)(v,{ownerId:r,postTime:e.createdAt,author:e.author,network:e.network,font:s,personalization:t,ThemeRule:s,rating:e.rating,instaHash:e.instaHash})}),P?(0,h.jsxs)("div",{className:"tb_hc_post_cta",onClick:e=>{e.stopPropagation()},children:[(0,h.jsx)(m.Z,{ctaClass:"tb_hc_post_cta_btn",cta:t.cta,postCta:e.cta,item:e,onClickToCTA:c})," "]}):"",T?(0,h.jsx)("div",{className:"tb_hc_rating__",children:(0,h.jsx)(g.Z,{rating:e.rating,network:e.network})}):null,l.ig&&s.hideContent||!l.ig&&!s.hideContent||1==e.type?(0,h.jsxs)("div",{className:"tb_hc_content_wrapper__",children:[l.ZQ?(0,h.jsx)("div",{className:"tb_hc_content_hidden",children:(0,h.jsx)(p.default,{contentClass:"".concat(S," ").concat(I),item:e,content:R,font:s,ThemeRule:s,personalization:t,contentTitle:e.contentTitle,contentRefCallBack:this.contentRefHidden,isReadMore:!0},e.id)}):null,(0,h.jsx)(p.default,{contentClass:"".concat(S," ").concat(I),item:e,content:R,font:s,ThemeRule:s,personalization:t,contentTitle:e.contentTitle,contentRefCallBack:this.contentRef,maxLines:f?"":s.lineTrim,isReadMore:!0},e.id),s.lineTrim>0&&D&&l.ZQ?(0,h.jsx)("div",{className:"tb_read_more_",onClick:this.toggleExpand,children:f?w.showLess:w.readMore}):null]}):null]}),l.ig||l.ZQ?s.socialAction?(0,h.jsx)(b.Z,{itemData:e,ThemeRule:s,ThemeID:t.widgetTheme,actionClass:"tb_hc_social_action__"}):null:""]})})}}var C=s(40475);s(37210);class T extends i.Component{constructor(e){super(e),this.state={windowWidth:document.getElementById(k.u$)&&document.getElementById(k.u$).clientWidth?document.getElementById(k.u$).clientWidth:window.innerWidth,sliderHeight:300},this.onScreenLoad=()=>{const{renderId:e}=this.props.renderId;this.setState({windowWidth:e?document.getElementById(e).clientWidth:document.getElementById(k.u$)&&document.getElementById(k.u$).clientWidth?document.getElementById(k.u$).clientWidth:window.innerWidth})},this.requestData=()=>{const{appendData:e,wall:t,preRender:s,hasMoreData:i,getDataNextSteps:o}=this.props;i&&o(t.Wall.id,Math.floor(Date.now()/1e3),t.ThemeRule.numberOfPosts,e.networkID,e.after,s,e.heightEvent)},this.reScrolled=()=>{setTimeout((()=>{let e=document.querySelector(".splide__list"),t=document.querySelector(".splide__slide").offsetWidth;const s=document.querySelectorAll(".splide__slide.is-visible").length,i=document.querySelector(".splide__slide.is-active.is-visible").getAttribute("aria-label").substring(0,2),o=Number(i)+(s-1)+s;o>0?(e.style.transition="0s ease",e.style.transform="translateX(-".concat(o*t,"px)")):e.style.transform="translateX(0px)"}),200)},this.autoScrollSlider=(e,t,s,i)=>{const{wall:o}=this.props;if(1==o.Personalization.autoScrollStatus){const t=l.ZQ?e._o.perPage+e.index:e.index;e.length-t===(l.ZQ?1:e._o.perPage)&&this.requestData()}},this.inputRefs={}}componentWillMount(){this.onScreenLoad()}componentDidMount(){var e=document.querySelector(".tb_hc_post_slider"),t=e?e.offsetHeight:this.state.height;setTimeout((()=>{this.setState({sliderHeight:t});document.querySelectorAll(".splide__slide").forEach((e=>{e.removeAttribute("role")}))}),100);const{postData:s}=this.props;if(s&&1==s.length){let o=document.querySelector(".tb_hc_arrow_left__"),n=document.querySelector(".tb_hc_arrow_right__");function a(){setTimeout((()=>{let e=document.querySelector(".splide__list");null!=e&&(e.style.transform="translateX(0)")}),100)}o&&n&&(document.querySelector(".tb_hc_arrow_left__").style="display:none",document.querySelector(".tb_hc_arrow_right__").style="display:none"),document.body.addEventListener("click",(function(){a()})),a(),window.addEventListener("resize",a)}else window.addEventListener("resize",(()=>{this.onScreenLoad()}));let i=document.querySelector("#kt_aside_toggle");null!=i&&i.addEventListener("click",this.reScrolled)}componentDidUpdate(){var e=document.querySelector(".tb_hc_post_slider"),t=e?e.offsetHeight:this.state.height;t+15!=this.state.sliderHeight&&setTimeout((()=>{this.setState({sliderHeight:t+15})}),100)}render(){var e;const{postData:t,completeDataObject:s,wall:i,clickToShowPopUp:n,hasMoreData:r,onClickToCTA:c,parentID:d,keyRender:_,languageSetting:p}=this.props,{sliderHeight:u}=this.state,m=d,{windowWidth:g}=this.state,b=i.ThemeRule.numberOfCoumn,w=i.ThemeRule.mobileColumn,f=i.ThemeRule.slidePost&&!l.ig,x=i.ThemeRule.slideDuration,v=i.Personalization.autoScrollStatus,j=1===i.Personalization.trimcontent,C=l.ZQ?(0,k.b)():!!(g<768||o.tq),T=t&&t.length?C?1:t.length>3?3:t.length:3,S=t&&t.length?C?1:t.length>4?4:t.length:4;C||1===v||t.length;const N=l.ZQ&&void 0!==(null===(e=i.Personalization)||void 0===e?void 0:e.clonePost)&&0===i.Personalization.clonePost?{clones:0}:{},I=1!=v?!(Object.keys(N).length>0)&&"slide":"slide",P=T!=t.length&&S!=t.length||0!=Object.keys(N).length?t:Array(2).fill(t).flat(),R=(i.ThemeRule.lineTrim,!(l.ZQ||!j)),D={...N,type:1!==v&&I,role:"article",label:"social widget",rewind:!0,speed:1e3,loop:1!==v,interval:f?1e3*x:5e3,perPage:b>0?b:C?1:t.length>5?5:t.length,gap:0,perMove:!!l.ZQ&&1,autoplay:!!f,padding:"0",pagination:!1,arrows:!!C||t.length>=(b>0?b:S),fixedHeight:R,breakpoints:{560:{perPage:w>0?w:1,perMove:w>0?w:1,arrows:t.length>=(w>0?w:1)},767:{perPage:b>0?b-3<1?b:b-3:T,arrows:t.length>=(b>0?b-3<1?b:b-3:T)},991:{perPage:b>0?b-4<1?b:b-4:T,arrows:t.length>=(b>0?b-4<1?b:b-4:T)},1200:{perPage:b>0?b-1==0?b:b-1:T,arrows:t.length>=(b>0?b-1==0?b:b-1:T)},1600:{perPage:b>0?b:S,arrows:t.length>=(b>0?b:S)}}};return(0,h.jsx)(h.Fragment,{children:""!=d?(0,h.jsx)("div",{className:"tb_hc_post_container",ref:this.sliderHeight,style:{minHeight:u},children:(0,h.jsxs)(a.tv,{hasTrack:!1,className:"tb_hc_post_slider ".concat(R?"tb_hc_fixed_height":""),options:D,ref:e=>this.inputRefs[m]=e,tag:"section",onMove:this.autoScrollSlider,children:[(0,h.jsx)(a.Gj,{children:P&&P.length>0&&P.map(((e,t)=>{const o=s[e];return(0,h.jsx)(a.jw,{p_id:d,className:"tb_".concat(o.id),children:(0,h.jsx)(y,{ownerId:i.Wall.owner,itemData:o,itemIndex:t,personalization:i.Personalization,ThemeRule:i.ThemeRule,clickToShowPopUp:n,wallID:i.Wall.id,onClickToCTA:c,wall:i,languageSetting:p})},t)}))}),(0,h.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_hc_arrow_wrapper_",role:"navigation","aria-label":"Slider Navigation Wrapper",children:[(0,h.jsx)("div",{role:"navigation",className:"tb_hc_arrow splide__arrow splide__arrow--prev tb_hc_arrow_left__ tb__icon tb-arrow-left-alt","aria-labelledby":"Navigation Previous Slide",children:" "}),(0,h.jsx)("div",{role:"navigation",className:"tb_hc_arrow splide__arrow splide__arrow--next tb_hc_arrow_right__ tb__icon tb-arrow-right-alt","aria-labelledby":"Navigation Next Slide",onClick:l.ig?this.requestData:null,children:" "})]})]})}):null})}}const S=(0,i.memo)((0,n.$j)((e=>({})),(e=>({getDataNextSteps:(t,s,i,o,n,a,r,l)=>e((0,C.Sx)(t,s,i,o,n,a,r,l))})))(T))},61729:(e,t,s)=>{"use strict";var i=s(79165);function o(){}function n(){}n.resetWarningCache=o,e.exports=function(){function e(e,t,s,o,n,a){if(a!==i){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function t(){return e}e.isRequired=e;var s={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:n,resetWarningCache:o};return s.PropTypes=s,s}},75192:(e,t,s)=>{e.exports=s(61729)()},79165:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},37210:()=>{},50247:()=>{}}]);