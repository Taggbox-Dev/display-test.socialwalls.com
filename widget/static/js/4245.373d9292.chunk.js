"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4245,4463,6723,8167],{1384:(t,e,s)=>{s.d(e,{A:()=>u});var o,i,a=s(9950),l=s(66345),r=s(44414),n=!1,c=0,d=0,h=0;const _=t=>{var e;return null!==(e={80:60,70:40,50:30,30:20,20:10}[t])&&void 0!==e?e:20},p=window.location.href.includes("app=1")?1.2:.6;class m extends a.Component{constructor(){var t;super(...arguments),t=this,this.state={slideWall:0},this.onLoadScroll=()=>{if(!l.Vn){const{wall:t}=this.props;window.clearData=this.clearData;const e=document.querySelector(".tb_app_container");null===e||void 0===e||e.addEventListener("wheel",(t=>t.preventDefault()),{passive:!1}),d=setTimeout((()=>this.scrollDiv_init(t.ThemeRule.themeId)),500)}},this.scrollDiv_init=t=>{const{slideWall:e}=this.state,{parentId:s}=this.props;e||(i=document.getElementById(s),63==t&&(n=!1),(i||{}).scrollTop=0,c=0,this.onScrollData(),this.onScrollWPosts())},this.onScrollData=()=>{const{wall:t}=this.props,e=t.Personalization.scrollDelay;if(e){const t=_(e);h=setInterval(this.scrollDiv,t)}},this.onScrollWPosts=()=>{const{themeHeight:t,wall:e,renderID:s,parentId:o}=this.props,i=document.getElementById(o),a=document.getElementById(s);var r=document.querySelector(".tb_theme_container");if(r&&(r=window.getComputedStyle(r).getPropertyValue("height"),a))if(window.innerHeight<a.clientHeight)i.style=`height:${r}`,a.style=`position: relative; margin-bottom: ${window.innerHeight}px; min-height: ${a.clientHeight}px`;else{t&&l.aD&&window.editor;i.style=`height:${r}`,i.setAttribute("style",`height:${r}`)}},this.scrollDiv=()=>{const{themeId:t}=this.props.wall.ThemeRule;h&&clearInterval(h);const e=i||{};n?63===t?(c-=p,e.scrollTop=c,n=!n||0!==e.scrollTop):(e.scrollTop=c=0,n=!1):(c+=p,e.scrollTop=c,n=e.scrollTop>=e.scrollHeight-e.offsetHeight-600),this.onScrollData()},this.pauseDiv=()=>{clearInterval(h),clearTimeout(o),o=setTimeout(this.resumeDiv,5e3)},this.resumeDiv=()=>{var t;const{wall:e,renderID:s}=this.props;i=document.getElementById(s),c=(null===(t=i)||void 0===t?void 0:t.scrollTop)||0,h=setInterval(this.scrollDiv,_(e.Personalization.scrollDelay))},this.clearData=()=>this.clearTime(),this.clearTime=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;t.setState({slideWall:e?0:1}),clearInterval(h),h=0,clearTimeout(o),clearTimeout(d),n=!1,c=0}}componentDidMount(){this.onLoadScroll(),window.addEventListener("resize",(()=>{this.onScrollWPosts()}))}componentDidUpdate(t,e){const{postData:s,wall:o}=t,{ThemeRule:i}=this.props.wall;i.themeId!==o.ThemeRule.themeId&&(n=!1,c=0),s!==this.props.postData&&(this.clearTime(1),this.scrollDiv_init(i.themeId))}componentWillUnmount(){this.clearTime()}render(){return(0,r.jsx)(r.Fragment,{children:{...this.props.children}})}}const u=(0,a.memo)(m)},78167:(t,e,s)=>{s.r(e),s.d(e,{default:()=>r});var o=s(9950),i=s(52867),a=s(93662),l=s(44414);class r extends o.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:s}=this.props;return(0,l.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,l.jsx)("img",{className:`${e}__`,src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,i.wG)(t.picture),width:44,height:44,onError:e=>{const o="#ffffff"==s.color?"#000":s.color;e.target.src=t.errorPic?t.errorPic:`https://ui-avatars.com/api/?name=${t.name.replace(/\s/g,"")}&background=${String(null===s.id?"#000":o).replace("#","")}&color=fff&length=1`,e.target.alt=t.name}},Math.random()):(0,l.jsx)(a.A,{authorClass:e,username:t.name,network:s,color:null===s.id?"#000":s.color,errorPic:t.errorPic})},Math.random())}}},93662:(t,e,s)=>{s.d(e,{A:()=>l});var o=s(9950),i=s(44414);const a=t=>{let{username:e,network:s,authorClass:o,errorPic:a}=t;const l="#ffffff"==s.color?"#000":s.color;return(0,i.jsx)("img",{className:`${o}__`,src:a||`https://ui-avatars.com/api/?name=${e.replace(/\s/g,"")}&background=${String(null===s.id?"#000":l).replace("#","")}&color=fff&length=1`,alt:e,width:45,height:45})},l=(0,o.memo)(a)},60531:(t,e,s)=>{s.d(e,{A:()=>l});var o=s(9950),i=s(44414);class a extends o.PureComponent{render(){const{cta:t,ctaClass:e,postCta:s,onClickToCTA:o,item:a}=this.props,l=!(!s||1!==s.status);return(0,i.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),o(a),window.open(`${l?s.url:t.url}`,"_blank")},children:[" ",l?s.text:t.text]})}}const l=a},3720:(t,e,s)=>{s.d(e,{A:()=>_});var o=s(9950),i=s(98776),a=s(38092),l=s.n(a),r=s(14478),n=s(66345),c=(s(52867),s(44414));const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class h extends o.Component{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:s}=await(0,i.pG)(e.postFileNew);this.setState({paddingBottom:100*s/t})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=o.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector(`#video_p_${t.id}`);e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector(`#video_p_${t.id}`);e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(s){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:s,isCover:o,controls:i,autoPlay:a,handleVideoEnded:h,muted:_,themeID:p,intervalTime:m}=this.props,{paddingBottom:u,videoLoaded:w,isVisible:b}=this.state,g=e.postFileNew,v=e.filename,f=(e.file,[74,76,77].includes(p)),x={paddingBottom:`${f&&n.aD?null:u}%`},j=null!==e&&void 0!==e&&e.loopStop?e.mediaUrl:e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,c.jsx)("div",{className:`${t}_wrap_ mediaHolder${e.id}`,style:x,ref:this.videoRef,children:(0,c.jsx)(l(),{className:`${t} video${e.id}`,url:d(j,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":s,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":""+(document.querySelector(".ts_rt_post_in")?`${document.querySelector(".ts_rt_post_in").clientHeight} px`:"100%"),poster:e.postFileNew}},file:{attributes:{preload:"metadata",poster:e.postFileNew}}},loop:!(n.aD&&!n.Vn&&null!==e&&void 0!==e&&e.loopStop),onError:t=>{!n.yR||e.stories&&0!=e.stories||(0,r.zi)(t,e.id),f&&h&&setTimeout((()=>{h()}),1e3*m)},autoPlay:n.aD?b:a,muted:_,volume:a?1:0,playsinline:!0,onReady:t=>{n.HY?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:n.HY||n.aD?b:a,height:"100%",width:"100%",controls:i||!1,style:{backgroundImage:`url(${f?v:g})`,backgroundSize:o?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})})}}const _=(0,o.memo)(h)},44463:(t,e,s)=>{s.r(e),s.d(e,{default:()=>r});var o=s(9950),i=s(66345),a=s(44414);const l=o.lazy((()=>s.e(620).then(s.bind(s,20620))));class r extends o.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,isDefault:r,Personalization:n}=this.props,c=!!r&&(7!==t.id&&4!==t.id&&36!==t.id),d=i.uS&&36==t.id?"tagembed":t.icon;return c?(0,a.jsx)("div",{className:`${e} tb__icon tb-${d.replace(/fa-/g,"")}`,children:(0,a.jsx)("div",{})}):(0,a.jsxs)(o.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:[" ",(0,a.jsx)(l,{network:t,networkClass:e})]})}}},49395:(t,e,s)=>{s.d(e,{A:()=>n});var o=s(9950),i=s(66345),a=s(44414);const l=t=>{let{network:e}=t;const s={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:i.uS?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:i.uS?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:o,color:l}=s[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,a.jsx)("div",{className:o,style:{color:l},"tb-network":e.id,children:(0,a.jsx)("div",{})})},r=t=>{let{ThemeID:e}=t;const{className:s,color:o}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,a.jsx)("div",{className:s,style:{color:o},"tb-network":e})};class n extends o.PureComponent{render(){const{rating:t,network:e,ThemeID:s}=this.props;return(0,a.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,o)=>s?(0,a.jsx)(r,{ThemeID:s},o):(0,a.jsx)(l,{network:e},o))):null})}}},173:(t,e,s)=>{s.d(e,{A:()=>r});var o=s(9950),i=s(14478),a=s(66345),l=s(44414);class r extends o.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:s,wallID:o,ownerId:l}=this.props;e.stopPropagation(),a.uS||(0,i.hq)({type:2,action:2,wall:o,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:l}),(0,i.nF)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,l.jsxs)("div",{className:`tb_share_wrapper ${e}`,children:[(0,l.jsx)("div",{className:"tb_share_button_ tb__icon "+(a.uS?"tb-share-fill":"tb-share"),children:(0,l.jsx)("div",{})}),(0,l.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,l.jsx)("div",{className:"tb_share_icon_list",children:(0,l.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,l.jsx)("div",{})})}):"",t.twitter?(0,l.jsx)("div",{className:"tb_share_icon_list",children:(0,l.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,l.jsx)("div",{})})}):"",t.linkedin?(0,l.jsx)("div",{className:"tb_share_icon_list",children:(0,l.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,l.jsx)("div",{})})}):""]})]})}}},46803:(t,e,s)=>{s.d(e,{A:()=>c});var o=s(9950),i=(s(66345),s(52867)),a=s(44414);const l=(t,e,s)=>1==t?`https://twitter.com/intent/favorite?tweet_id=${(0,i.Ph)(e)}`:s,r=(t,e,s)=>1==t?`https://twitter.com/intent/tweet?in_reply_to=${(0,i.Ph)(e)}`:s,n=t=>{let{arialbl:e,hrefClick:s,Icon:o,count:l}=t;return(0,a.jsx)("div",{className:"tb_social_action__list",children:(0,a.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(s,"_blank")},className:"tb_social_action__ico_wrap",children:[(0,a.jsx)("div",{className:`tb_social_action_ico__ tb__icon tb-${o}`,children:" "}),l>0?(0,a.jsx)("div",{className:"tb_social_action_counts__",children:(0,i.sl)(l)}):""]})})};class c extends o.PureComponent{render(){const{itemData:t,ThemeRule:e,actionClass:s,ThemeID:o}=this.props,c={color:3===o?1===e.iconType?e.iconColor:t.network.color:e.fontColor},d=t.network.id,h=3===d||10===d||7===d?"like":"heart",_=!![1,2,3,7,8,9,10,18].includes(d),p=![29,19].includes(d),m=t.network.name?t.network.name:"";return(0,a.jsx)(a.Fragment,{children:29!==d&&26!==d&&23!==d&&6!==d&&5!==d&&11!==d&&12!==d&&15!==d&&20!==d&&21!==d?(0,a.jsx)("div",{className:s,children:(0,a.jsxs)("div",{className:"tb_social_action__",children:[_?(0,a.jsx)(n,{arialbl:m,hrefClick:l(d,t.postId,t.link),Icon:h,iconColorStyle:c,count:t.like_count}):null,p?(0,a.jsx)(n,{arialbl:m,hrefClick:r(d,t.postId,t.link),Icon:"comment",iconColorStyle:c,count:t.comment_count}):null,1===d?(0,a.jsx)(n,{arialbl:m,hrefClick:`https://twitter.com/intent/retweet?tweet_id=${(0,i.Ph)(t.postId)}`,Icon:"retweet",iconColorStyle:c,count:t.comment_count}):null,(0,a.jsx)(n,{arialbl:m,hrefClick:t.link,Icon:"eye",iconColorStyle:c,count:0})]})}):""})}}},6723:(t,e,s)=>{s.r(e),s.d(e,{default:()=>r});var o=s(9950),i=s(52867),a=s(44414);const l=t=>{const{postTime:e,timeClass:s}=t;return(0,a.jsx)("div",{className:s,children:(0,i.fF)(e)})},r=(0,o.memo)(l)},427:(t,e,s)=>{s.r(e),s.d(e,{default:()=>y});var o=s(9950),i=s(78167),a=s(6723),l=s(44463),r=s(52867),n=s(44414);const c=t=>{let{author:e,personalization:s,postTime:o,network:c,ThemeRule:d,font:h}=t;const _=e.username&&e.username.length>0?`@${e.username}`:"",p=!(!s.postAuthor||e.isInstaUser),m=!(!s.postAuthor||!s.postTime||e.isInstaUser),u=!(!d.socialAction||!(0,r.Nv)(63));return(0,n.jsxs)("div",{className:"tb_w_f_author_wrapper",children:[(0,n.jsxs)("div",{className:"tb_w_f_author",children:[p?(0,n.jsx)(i.default,{author:e,network:c,authorClass:"tb_w_f_author_profile"}):"",(0,n.jsxs)("div",{className:"tb_w_f_author_info",children:[p?(0,n.jsx)("div",{className:"tb_w_f_authorname",children:e.name}):"",(0,n.jsxs)("div",{className:"tb_w_f_post_info",children:[p?(0,n.jsx)("div",{className:"tb_w_f_username",children:_}):"",m?(0,n.jsx)("div",{className:"tb_w_f_seprator",children:" "}):"",s.postTime?(0,n.jsx)(a.default,{postTime:o,timeClass:`tb_w_f_time tb-cTBfont-${d.font_varient}`,authorColor:d.authorColor}):""]})]})]}),u?(0,n.jsx)("div",{className:"tb_w_f_social_",children:(0,n.jsx)(l.default,{networkClass:"tb_w_f_social_ico",network:c,ThemeRule:d,isDefault:1===d.iconType})}):""]})};var d=s(66345),h=s(15537),_=s(78262),p=s(3720);const m=o.lazy((()=>s.e(8120).then(s.bind(s,68120)))),u=t=>{let{itemData:e,wallID:s,ownerId:i,wall:a}=t;const l=!(!d.uS||3!==e.type&&5!==e.type||a.Personalization.mobilePopup||a.Personalization.postFeatured),r=(3===e.type||5===e.type)&&1==a.ThemeRule.autoPlay;return(0,n.jsxs)("div",{className:"tb_w_f_media_wrap",children:[d.Vn&&a.Personalization.interactive?(0,n.jsx)(o.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(m,{postId:e.id,wallID:s,UserDetail:a.UserDetail})}):null,d.yR&&!r?(0,n.jsx)(h.A,{itemData:e,IconClass:"tb_w_c_media_icon",show:d.yR,isCenter:!1}):null,r||l?(0,n.jsx)(p.A,{VideoClass:"tb_w_f_video",data:e,wallID:s,themeID:a.Personalization.widgetTheme,ownerId:i,size:!1,isCover:!0,controls:!1,autoPlay:!0,muted:!0}):(0,n.jsx)(_.default,{ImageClass:"tb_w_f_image",data:e,wallID:s,themeID:a.Personalization.widgetTheme,ownerId:i,size:!1,ThemeRule:a.ThemeRule,hotspot:!0})]})};var w=s(173),b=s(60531),g=s(49395),v=s(46803);const f=t=>{let{itemData:e,personalization:s,adjustWidth:o,ThemeRule:i,clickToShowPopUp:a,itemIndex:l,wallID:h,ownerId:_,onClickToCTA:p,wall:m}=t;const f={width:`${o}%`,padding:s.padding/2},x=2===e.type||3===e.type||4===e.type||5===e.type,j=e.rating>0,k=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),D=!!(e.ugc_products&&e.ugc_products.length>0),C=!(!D||0!==e.hotspot),I=!(!e.hotspot||!D),T=d.aD?{padding:i.spacing}:null;return(0,n.jsx)("div",{id:`tb-cp-post-${e.id}`,className:"tb_w_f_post_wrapper",style:f,"tb-network":e.network.id,"tb-product":C?1:I?2:0,children:(0,n.jsxs)("div",{className:"tb_w_f_post_in",onClick:a(l,e),style:T,children:[(0,n.jsxs)("div",{className:"tb_w_f_post_media_wrapper",children:[e.share.status?(0,n.jsx)(w.A,{share:e.share,shareClass:"tb_w_f_share_container",item:e,wallID:h,ownerId:_}):"",x?(0,n.jsx)(u,{itemData:e,wallID:h,ownerId:_,ThemeID:s.widgetTheme,wall:m},`img${l}_${e.id}`):"",d.uS&&j?(0,n.jsxs)("div",{className:"tb_w_f_rating__",children:[(0,n.jsx)(g.A,{rating:e.rating,network:e.network})," "]}):"",k?(0,n.jsxs)("div",{className:"tb_w_f_post_cta",children:[(0,n.jsx)(b.A,{ctaClass:"tb_w_f_post_cta_btn",cta:e.cta,item:e,onClickToCTA:p})," "]}):""]}),(0,n.jsx)("div",{className:"tb_w_f_contant_wrapper",children:(0,n.jsx)(c,{ownerId:_,postTime:e.createdAt,author:e.author,network:e.network,font:e.font,personalization:s,ThemeRule:i},`img${l}_${e.id}`)}),i.socialAction&&!(0,r.Nv)(63)?(0,n.jsx)(v.A,{itemData:e,ThemeRule:i,ThemeID:s.widgetTheme,actionClass:`tb_w_f_social_action__ ${d.uS?"tb_w_f_social_action_bg":""}}`}):""]})})};var x=s(11127),j=s(74378),k=s.n(j),D=s(14478),C=s(1384);const I=t=>{let{loadData:e,postData:s,completeDataObject:o,BrandingPosition:i,clickToShowPopUp:a,wall:l,adjustWidth:r,onClickToCTA:c}=t;return e?(null===s||void 0===s?void 0:s.length)>0&&s.map(((t,e)=>{const s=o[t];return parseInt(i),(0,n.jsx)(f,{ownerId:l.Wall.owner,itemData:s,itemIndex:e,adjustWidth:r,personalization:l.Personalization,ThemeRule:l.ThemeRule,wallID:l.Wall.id,clickToShowPopUp:a,onClickToCTA:c,wall:l},`Classic_Card_${e}_${s.id}`)})):null};class T extends o.Component{constructor(){super(...arguments),this.state={postData:[],loadData:1}}componentDidMount(){const{postData:t,heightUpdate:e}=this.props;this.setState({postData:t,loadData:1},(()=>setTimeout((()=>e()),1e3)))}componentDidUpdate(t,e){return t.postData!==this.props.postData&&(this.props.heightUpdate(),!0)}render(){const{postData:t,completeDataObject:e,adjustWidth:s,wall:o,clickToShowPopUp:i,onClickToCTA:a}=this.props,{loadData:l}=this.state;return(0,n.jsx)(C.A,{wall:o,parentId:"tb_marquee",renderID:"focus",children:(0,n.jsx)("div",{id:"tb_marquee",children:(0,n.jsx)(k(),{id:"focus",className:"tb_w_f_post_container",tabIndex:"0","aria-label":`There are ${t&&t.length>0?t.length:0} posts in the feed`,role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_w_f_post_wrapper",horizontalOrder:!1,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:(0,n.jsx)(I,{loadData:l,wall:o,clickToShowPopUp:i,postData:t,completeDataObject:e,BrandingPosition:4,adjustWidth:s,onClickToCTA:a})})})})}}const y=(0,x.Ng)((t=>({})),(t=>({managePostHeight:e=>t((0,D.V3)(e))})))(T)}}]);