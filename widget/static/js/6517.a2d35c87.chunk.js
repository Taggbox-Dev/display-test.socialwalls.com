(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4463,6264,6517,6723,8167,8262],{78167:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var i=s(9950),a=s(52867),o=s(93662),n=s(44414);class r extends i.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:s}=this.props;return(0,n.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:`${e}__`,src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,a.wG)(t.picture),width:44,height:44,onError:e=>{const i="#ffffff"==s.color?"#000":s.color;e.target.src=t.errorPic?t.errorPic:`https://ui-avatars.com/api/?name=${t.name.replace(/\s/g,"")}&background=${String(null===s.id?"#000":i).replace("#","")}&color=fff&length=1`,e.target.alt=t.name}},Math.random()):(0,n.jsx)(o.A,{authorClass:e,username:t.name,network:s,color:null===s.id?"#000":s.color,errorPic:t.errorPic})},Math.random())}}},93662:(t,e,s)=>{"use strict";s.d(e,{A:()=>n});var i=s(9950),a=s(44414);const o=t=>{let{username:e,network:s,authorClass:i,errorPic:o}=t;const n="#ffffff"==s.color?"#000":s.color;return(0,a.jsx)("img",{className:`${i}__`,src:o||`https://ui-avatars.com/api/?name=${e.replace(/\s/g,"")}&background=${String(null===s.id?"#000":n).replace("#","")}&color=fff&length=1`,alt:e,width:45,height:45})},n=(0,i.memo)(o)},60531:(t,e,s)=>{"use strict";s.d(e,{A:()=>n});var i=s(9950),a=s(44414);class o extends i.PureComponent{render(){const{cta:t,ctaClass:e,postCta:s,onClickToCTA:i,item:o}=this.props,n=!(!s||1!==s.status);return(0,a.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),i(o),window.open(`${n?s.url:t.url}`,"_blank")},children:[" ",n?s.text:t.text]})}}const n=o},89874:(t,e,s)=>{"use strict";s.d(e,{A:()=>_});var i=s(9950),a=s(11127),o=s(73068),n=s(1823),r=s(52867),l=s(44414);const d=(0,o.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),c=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,s=t.product_discount>0&&t.product_discount!=t.product_price?`<div class="tb_p_tooltip_price tb_price_disabled">${t.price_currency_symbol}${t.product_price}</div>`:"",i=t.product_price>0||t.product_discount>0?`${s}<div class="tb_p_tooltip_price">${t.price_currency_symbol}${e}</div>`:"";return`<a href="${t.product_url}" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">${t.product_title}</div>\n          ${i}\n        </a>`};class h extends i.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:s}=this.state,i=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return i.status?(0,l.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const a=(0,r.Ul)();return(0,l.jsxs)("div",{href:t.product_url,id:`tb_hotspot-${t.id}${a}`,onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot"+(s==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,l.jsx)("div",{className:"tb_hotspot__ "+(0==i.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,l.jsx)(d,{children:(0,l.jsx)(n.m_,{className:"tb_pro_tooltip",anchorSelect:`#tb_hotspot-${t.id}${a}`,clickable:!0,html:c(t.UgcProduct)})})]},e)}))}):null}}const _=(0,a.Ng)((t=>({appData:t.appData})))(h)},78262:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>c});var i=s(9950),a=(s(14478),s(89874)),o=s(98776),n=s(52867),r=s(80415),l=s(66345),d=s(44414);class c extends i.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const s=document.querySelector(`.track${this.props.data.id}`);s&&(s.setAttribute("data-height",e),s.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:s}=await(0,o.pG)(e.postFileNew);this.setState({paddingBottom:100*s/t,size:{height:parseInt(s),width:parseInt(t)}})}catch(s){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgSize:{...this.state.imgSize,small:t.target.src}});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(s){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,imgSize:{small:t.data.postFileNew,large:t.data.filename,orignal:t.data.file},size:{height:100,width:100},isVisible:!1},this.videoRef=i.createRef(),this.observer=null}componentWillMount(){const{data:t,hotspot:e,size:s}=this.props;!s||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:s})}componentDidMount(){const{data:t,hotspot:e,size:s}=this.props;!s||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:s});try{this.observer=new IntersectionObserver((t=>{let[e]=t;e.isIntersecting&&(this.setState({isVisible:e.isIntersecting}),this.observer.disconnect())}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(i){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.observer.disconnect()}render(){const{ImageClass:t,data:e,wallID:s,themeID:i,ownerId:o,hotspot:c}=this.props,{imgUrl:h,paddingBottom:_,size:p,fixedPaddingBottom:u,imgSize:m,noPadding:g,isVisible:b}=this.state,w={paddingBottom:`${this.props.size?1==this.props.size?null:u:_}%`},f={backgroundImage:`url(${m.small})`};if(p.width>p.height)var v="100%",x=p.height/p.width*100+"%";else x="100%",v=p.width/p.height*100+"%";const k=!!(e.hotspot&&e.ugc_products.length>0&&c),j={width:k&&this.props.size?v:null,height:k&&this.props.size?x:null};return(0,d.jsxs)("div",{className:`${t}_wrap_ mediaHolder${e.id}`,style:w,ref:this.videoRef,children:[k?(0,d.jsx)("div",{className:"tb_blur_bg_",style:f}):null,(0,d.jsxs)("div",{className:`${t}_wrap_in`,style:j,children:[k?(0,d.jsx)(a.A,{product:e.ugc_products}):null,(0,d.jsx)("img",{className:`${t} track${e.id}`,role:"img",src:b?m.small:e.postFileNew,srcSet:b?l.aD&&g?`${m.large}, 991w ${m.small}, 480w`:null:e.postFileNew,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":s,"data-owner-id":o,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":i,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src=`${r.th}/media/images/error/no-image.svg`,t.target.srcset=`${r.th}/media/images/error/no-image.svg`},alt:(0,n.wG)(h)})]})]})}}},3720:(t,e,s)=>{"use strict";s.d(e,{A:()=>_});var i=s(9950),a=s(98776),o=s(38092),n=s.n(o),r=s(14478),l=s(66345),d=(s(52867),s(44414));const c=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class h extends i.Component{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:s}=await(0,a.pG)(e.postFileNew);this.setState({paddingBottom:100*s/t})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=i.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector(`#video_p_${t.id}`);e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector(`#video_p_${t.id}`);e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(s){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:s,isCover:i,controls:a,autoPlay:o,handleVideoEnded:h,muted:_,themeID:p,intervalTime:u}=this.props,{paddingBottom:m,videoLoaded:g,isVisible:b}=this.state,w=e.postFileNew,f=e.filename,v=(e.file,[74,76,77].includes(p)),x={paddingBottom:`${v&&l.aD?null:m}%`},k=null!==e&&void 0!==e&&e.loopStop?e.mediaUrl:e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,d.jsx)("div",{className:`${t}_wrap_ mediaHolder${e.id}`,style:x,ref:this.videoRef,children:(0,d.jsx)(n(),{className:`${t} video${e.id}`,url:c(k,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":s,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":""+(document.querySelector(".ts_rt_post_in")?`${document.querySelector(".ts_rt_post_in").clientHeight} px`:"100%"),poster:e.postFileNew}},file:{attributes:{preload:"metadata",poster:e.postFileNew}}},loop:!(l.aD&&!l.Vn&&null!==e&&void 0!==e&&e.loopStop),onError:t=>{!l.yR||e.stories&&0!=e.stories||(0,r.zi)(t,e.id),v&&h&&setTimeout((()=>{h()}),1e3*u)},autoPlay:l.aD?b:o,muted:_,volume:o?1:0,playsinline:!0,onReady:t=>{l.HY?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:l.HY||l.aD?b:o,height:"100%",width:"100%",controls:a||!1,style:{backgroundImage:`url(${v?f:w})`,backgroundSize:i?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})})}}const _=(0,i.memo)(h)},44463:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var i=s(9950),a=s(66345),o=s(44414);const n=i.lazy((()=>s.e(620).then(s.bind(s,20620))));class r extends i.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,isDefault:r,Personalization:l}=this.props,d=!!r&&(7!==t.id&&4!==t.id&&36!==t.id),c=a.uS&&36==t.id?"tagembed":t.icon;return d?(0,o.jsx)("div",{className:`${e} tb__icon tb-${c.replace(/fa-/g,"")}`,children:(0,o.jsx)("div",{})}):(0,o.jsxs)(i.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(n,{network:t,networkClass:e})]})}}},65859:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>d});var i=s(9950),a=s(70804),o=s(52867),n=s(66345),r=s(21796),l=s(44414);class d extends i.PureComponent{constructor(t){super(t),this.contentRef=i.createRef()}componentDidMount(){n.uS&&setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:s,font:i,personalization:d,item:c,contentTitle:h,readMore:_,maxLength:p,textAlign:u,maxLines:m,isReadMore:g}=this.props,b={WebkitLineClamp:m,textAlign:s.textAlignment};let w=20==c.network.id||n.aD&&!n.Vn?e:(0,o.w)(e);12==c.network.id&&(w=(0,a.Ay)(w));const f=""+(s.lineTrim?` tb_content_line-${s.lineTrim}`:""),v=`${t} ${g?"":f}`;return(0,l.jsxs)("div",{className:v,ref:this.contentRef,style:b,children:[h?(0,l.jsx)("div",{className:"tb_bold_txt__",children:(0,a.Ay)(h)}):null,(0,l.jsx)(r.A,{data:c,content:w,Personalization:d,ThemeRule:s})]})}}},21796:(t,e,s)=>{"use strict";s.d(e,{A:()=>c});var i=s(9950),a=s(42083),o=s(70804),n=s(44414);const r=s(53457),l=(t,e)=>(0,n.jsx)(a.default,{style:e&&[66,70].includes(null===e||void 0===e?void 0:e.themeId)?{width:e.fontSize,height:e.fontSize}:null,children:(0,o.Ay)(t)}),d=t=>{let{data:e,content:s,Personalization:i,ThemeRule:a}=t;const d={color:i.hashtag_color,fontWeight:"bold",backgroundColor:1==i.hashtag_background_status?i.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,n.jsx)(n.Fragment,{children:1===i.hashtag_highlight&&0===i.hashtag_feed&&0===i.hashtag_all?(0,o.Ay)(s):1===i.hashtag_highlight&&0===i.hashtag_feed&&1===i.hashtag_all?l(window.slackdown.parse(r(s,/#(\w+)/g,((t,e)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:d,children:["#",t]}))),e.slackMember),a):1===i.hashtag_highlight&&1===i.hashtag_feed&&0===i.hashtag_all?l(window.slackdown.parse(r(s,e.hash.hashString,((t,e)=>(0,n.jsx)("div",{className:"tb_text_hashtag",style:d,children:t}))),e.slackMember),a):1===i.hashtag_highlight&&1===i.hashtag_feed&&1===i.hashtag_all?l(window.slackdown.parse(r(s,/#(\w+)/g,((t,s)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:d,children:["#",t]},`${e.id}_${s}`))),e.slackMember),a):l(window.slackdown.parse(s,e.slackMember),a)}):(0,n.jsx)(n.Fragment,{children:1===i.hashtag_highlight&&0===i.hashtag_feed&&0===i.hashtag_all?(0,o.Ay)(s):1===i.hashtag_highlight&&0===i.hashtag_feed&&1===i.hashtag_all?r((0,o.Ay)(s),/#(\w+)/g,((t,e)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:d,children:["#",t]}))):1===i.hashtag_highlight&&1===i.hashtag_feed&&0===i.hashtag_all?r((0,o.Ay)(s),e.hash.hashString,((t,e)=>(0,n.jsx)("strong",{className:"tb_text_hashtag",style:d,children:t}))):1===i.hashtag_highlight&&1===i.hashtag_feed&&1===i.hashtag_all?r((0,o.Ay)(s),/#(\w+)/g,((t,s)=>(0,n.jsxs)("div",{className:"tb_text_hashtag",style:d,children:["#",t]},`${e.id}_${s}`))):l(s,a)})},c=(0,i.memo)(d)},49395:(t,e,s)=>{"use strict";s.d(e,{A:()=>l});var i=s(9950),a=s(66345),o=s(44414);const n=t=>{let{network:e}=t;const s={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:a.uS?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:a.uS?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:i,color:n}=s[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,o.jsx)("div",{className:i,style:{color:n},"tb-network":e.id,children:(0,o.jsx)("div",{})})},r=t=>{let{ThemeID:e}=t;const{className:s,color:i}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,o.jsx)("div",{className:s,style:{color:i},"tb-network":e})};class l extends i.PureComponent{render(){const{rating:t,network:e,ThemeID:s}=this.props;return(0,o.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,i)=>s?(0,o.jsx)(r,{ThemeID:s},i):(0,o.jsx)(n,{network:e},i))):null})}}},173:(t,e,s)=>{"use strict";s.d(e,{A:()=>r});var i=s(9950),a=s(14478),o=s(66345),n=s(44414);class r extends i.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:s,wallID:i,ownerId:n}=this.props;e.stopPropagation(),o.uS||(0,a.hq)({type:2,action:2,wall:i,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:n}),(0,a.nF)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,n.jsxs)("div",{className:`tb_share_wrapper ${e}`,children:[(0,n.jsx)("div",{className:"tb_share_button_ tb__icon "+(o.uS?"tb-share-fill":"tb-share"),children:(0,n.jsx)("div",{})}),(0,n.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,n.jsx)("div",{})})}):"",t.twitter?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,n.jsx)("div",{})})}):"",t.linkedin?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,n.jsx)("div",{})})}):""]})]})}}},46803:(t,e,s)=>{"use strict";s.d(e,{A:()=>d});var i=s(9950),a=(s(66345),s(52867)),o=s(44414);const n=(t,e,s)=>1==t?`https://twitter.com/intent/favorite?tweet_id=${(0,a.Ph)(e)}`:s,r=(t,e,s)=>1==t?`https://twitter.com/intent/tweet?in_reply_to=${(0,a.Ph)(e)}`:s,l=t=>{let{arialbl:e,hrefClick:s,Icon:i,count:n}=t;return(0,o.jsx)("div",{className:"tb_social_action__list",children:(0,o.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(s,"_blank")},className:"tb_social_action__ico_wrap",children:[(0,o.jsx)("div",{className:`tb_social_action_ico__ tb__icon tb-${i}`,children:" "}),n>0?(0,o.jsx)("div",{className:"tb_social_action_counts__",children:(0,a.sl)(n)}):""]})})};class d extends i.PureComponent{render(){const{itemData:t,ThemeRule:e,actionClass:s,ThemeID:i}=this.props,d={color:3===i?1===e.iconType?e.iconColor:t.network.color:e.fontColor},c=t.network.id,h=3===c||10===c||7===c?"like":"heart",_=!![1,2,3,7,8,9,10,18].includes(c),p=![29,19].includes(c),u=t.network.name?t.network.name:"";return(0,o.jsx)(o.Fragment,{children:29!==c&&26!==c&&23!==c&&6!==c&&5!==c&&11!==c&&12!==c&&15!==c&&20!==c&&21!==c?(0,o.jsx)("div",{className:s,children:(0,o.jsxs)("div",{className:"tb_social_action__",children:[_?(0,o.jsx)(l,{arialbl:u,hrefClick:n(c,t.postId,t.link),Icon:h,iconColorStyle:d,count:t.like_count}):null,p?(0,o.jsx)(l,{arialbl:u,hrefClick:r(c,t.postId,t.link),Icon:"comment",iconColorStyle:d,count:t.comment_count}):null,1===c?(0,o.jsx)(l,{arialbl:u,hrefClick:`https://twitter.com/intent/retweet?tweet_id=${(0,a.Ph)(t.postId)}`,Icon:"retweet",iconColorStyle:d,count:t.comment_count}):null,(0,o.jsx)(l,{arialbl:u,hrefClick:t.link,Icon:"eye",iconColorStyle:d,count:0})]})}):""})}}},6723:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});var i=s(9950),a=s(52867),o=s(44414);const n=t=>{const{postTime:e,timeClass:s}=t;return(0,o.jsx)("div",{className:s,children:(0,a.fF)(e)})},r=(0,i.memo)(n)},41812:(t,e,s)=>{"use strict";s.d(e,{A:()=>v});var i=s(9950),a=s(3720),o=s(66345),n=s(78262),r=s(44414);const l=i.lazy((()=>s.e(8120).then(s.bind(s,68120)))),d=t=>{let{itemData:e,wallID:s,ownerId:d,wall:c,isCover:h,ThemeRule:_}=t;const p=(3===e.type||5===e.type)&&1==c.ThemeRule.autoPlay,u=!1;e.hotspot;return(0,r.jsxs)("div",{className:"tb_w_e_media_wrap",children:[o.Vn&&c.Personalization.interactive?(0,r.jsx)(i.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(l,{postId:e.id,wallID:s,UserDetail:c.UserDetail})}):null,p?(0,r.jsx)(a.A,{VideoClass:"tb_w_e_video",data:e,wallID:s,themeID:c.Personalization.widgetTheme,wall:c,size:u,isCover:h,muted:!0,autoPlay:p,handleVideoEnded:()=>{}}):(0,r.jsx)(n.default,{ImageClass:"tb_w_e_image",data:e,wallID:s,themeID:c.Personalization.widgetTheme,ownerId:d,size:u,hotspot:!0})]})};var c=s(65859),h=s(173),_=s(60531),p=s(49395),u=s(46803),m=s(6723),g=s(44463),b=s(78167);const w=t=>{let{author:e,personalization:s,postTime:a,network:o,ThemeRule:n,font:l,rating:d,ownerId:c,instaHash:h}=t;const _=e.username&&e.username.length>0?`@${e.username}`:"",p=!(!s.postAuthor||e.isInstaUser),u=!(!s.postAuthor||!s.postTime||e.isInstaUser),w=!(null===o.id||""===o.id||!n.socialAction);return(0,r.jsxs)("div",{className:"tb_w_e_author_wrapper",children:[p?(0,r.jsx)(i.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(b.default,{network:o,author:e,authorClass:"tb_w_e_author_profile"})}):"",(0,r.jsxs)("div",{className:"tb_w_e_author_info",children:[p?(0,r.jsx)("div",{className:`tb_w_e_authorname tb-cTBfont-${n.font_varient}`,children:e.name}):"",(0,r.jsxs)("div",{className:"tb_w_e_post_info",children:[p?(0,r.jsx)("div",{className:"tb_w_e_username",children:_}):"",u?(0,r.jsx)("div",{className:"tb_w_e_seprator",children:" "}):"",s.postTime?(0,r.jsx)(i.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(m.default,{postTime:a,timeClass:`tb_w_e_time tb-cTBfont-${n.font_varient}`,authorColor:n.authorColor})}):""]})]}),w?(0,r.jsx)("div",{className:"tb_w_e_social_",children:(0,r.jsx)(i.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(g.default,{networkClass:"tb_w_e_social_ico",network:o,isDefault:1===n.iconType,ThemeRule:n})})}):null]})};var f=s(52867);class v extends i.PureComponent{constructor(t){super(t),this.contentRef=t=>{this.setState({height:t})},this.contentRefHidden=t=>{this.setState({hiddenHeight:t})},this.toggleExpand=t=>{t.stopPropagation(),this.setState({isExpanded:!this.state.isExpanded})},this.state={isExpanded:!1,hiddenHeight:0,height:0},this.toggleExpand=this.toggleExpand.bind(this),this.postTrack=i.createRef()}componentDidMount(){o.Qy&&(0,f._7)(this.postTrack)}render(){var t;const{itemData:e,personalization:s,ThemeRule:a,clickToShowPopUp:n,itemIndex:l,wallID:m,ownerId:g,onClickToCTA:b,wall:v,languageSetting:x,adjustWidth:k}=this.props,{isExpanded:j,hiddenHeight:I,height:C}=this.state,y=2===e.type||3===e.type||4===e.type||5===e.type,N=!!(e.rating&&e.rating>0),S=e.rating>0?"tb_w_e_rating_content":"tb_w_e_content",T=1===e.type?"tb_w_e_text_post":"",D=1===e.type&&s.textDecorate?"tb_w_e_text_decoration":"",$=!(null===e||void 0===e||null===(t=e.cta)||void 0===t||!t.status),P=s.trimcontent?(0,f.Ex)(e.content,50):e.content,z=I>C;return(0,r.jsx)("div",{"item-id":e.id,id:`tb-hc-post-${e.id}`,className:"tb_w_e_post_wrapper",ref:this.postTrack,"post-id":e.referenceId?e.referenceId:e.id,"feed-id":e.feedId,style:{width:`${k}%`,padding:s.padding/2},children:(0,r.jsxs)("div",{className:"tb_w_e_post_in",onClick:n(l,e),children:[(0,r.jsxs)("div",{className:"tb_w_e_post_media_wrapp",children:[e.share.status?(0,r.jsx)(h.A,{share:e.share,shareClass:"tb_w_e_share_container",item:e,wallID:m,ownerId:g}):"",y?(0,r.jsx)(d,{itemData:e,wallID:m,wall:v,ownerId:g,size:!!s.trimcontent&&100,isCover:!!s.trimcontent,ThemeRule:a},`img${l}_${e.id}`):null]}),(0,r.jsxs)("div",{className:`tb_w_e_contant_wrapper ${T}`,children:[(0,r.jsx)(i.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(w,{ownerId:g,postTime:e.createdAt,author:e.author,network:e.network,font:a,personalization:s,ThemeRule:a,rating:e.rating,instaHash:e.instaHash},`img${l}_${e.id}`)}),$?(0,r.jsxs)("div",{className:"tb_w_e_post_cta",onClick:t=>{t.stopPropagation()},children:[(0,r.jsx)(_.A,{ctaClass:"tb_w_e_post_cta_btn",cta:s.cta,postCta:e.cta,item:e,onClickToCTA:b})," "]}):"",N?(0,r.jsx)("div",{className:"tb_w_e_rating__",children:(0,r.jsx)(p.A,{rating:e.rating,network:e.network})}):null,o.HY&&a.hideContent||!o.HY&&!a.hideContent||1==e.type?(0,r.jsxs)("div",{className:"tb_w_e_content_wrapper__",children:[o.uS?(0,r.jsx)("div",{className:"tb_w_e_content_hidden",children:(0,r.jsx)(c.default,{contentClass:`${S} ${D}`,item:e,content:P,font:a,ThemeRule:a,personalization:s,contentTitle:e.contentTitle,contentRefCallBack:this.contentRefHidden,isReadMore:!0},e.id)}):null,(0,r.jsx)(c.default,{contentClass:`${S} ${D}`,item:e,content:P,font:a,ThemeRule:a,personalization:s,contentTitle:e.contentTitle,contentRefCallBack:this.contentRef,maxLines:j?"":a.lineTrim,isReadMore:!0},e.id),a.lineTrim>0&&z&&o.uS?(0,r.jsx)("div",{className:"tb_read_more_",onClick:this.toggleExpand,children:j?x.showLess:x.readMore}):null]}):null]}),o.HY||o.uS?a.socialAction?(0,r.jsx)(u.A,{itemData:e,ThemeRule:a,ThemeID:s.widgetTheme,actionClass:"tb_w_e_social_action__"}):null:""]})})}}},50688:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>_});var i=s(9950),a=s(52867),o=s(66345),n=s(74378),r=s.n(n),l=s(41812),d=s(44414);const c=i.lazy((()=>Promise.all([s.e(8940),s.e(7102)]).then(s.bind(s,77102))));class h extends i.Component{constructor(){super(...arguments),this.state={activeID:-1,newPostdata:[],postData:[]},this.onLoadData=t=>{const{cardNumber:e,postData:s,completeDataObject:i,adjustWidth:o,wall:n,postSize:r,clickToShowPopUp:l,onClickToCTA:d,postSizeInPx:c}=t,{activeID:h}=this.state,_=(0,a.qs)()?n.ThemeRule.mobileColumn||2:n.ThemeRule.numberOfCoumn,p=Array.from({length:_},(()=>[]));s.forEach(((t,e)=>p[e%_].push(t))),p.forEach((t=>{for(;t.length<3;){const e=p[Math.floor(Math.random()*_)],s=e[Math.floor(Math.random()*e.length)];t.push(s)}})),this.setState({newPostdata:p,postData:s})},this.scrollInterval=null,this.componentDidMount=()=>{this.scrollInterval=setInterval((()=>this.onUpdateTimeInterVal()),3e3);const{heightUpdate:t}=this.props;setTimeout((()=>t()),1e3)},this.onUpdateTimeInterVal=()=>{const{activeID:t}=this.state,{cardNumber:e,wall:s}=this.props,i=(0,a.qs)()?s.ThemeRule.mobileColumn||2:s.ThemeRule.numberOfCoumn,o=parseInt(t)+1;this.setState({activeID:parseInt(i)>=o?o:0})}}componentWillMount(){this.onLoadData(this.props)}componentWillUnmount(){this.scrollInterval&&clearInterval(this.scrollInterval)}componentWillReceiveProps(t){if(JSON.stringify(t.postData)!==JSON.stringify(this.props.postData))return this.onLoadData(t),!0}render(){const{cardNumber:t,postData:e,completeDataObject:s,adjustWidth:a,wall:n,postSize:h,clickToShowPopUp:_,onClickToCTA:p,postSizeInPx:u}=this.props,{activeID:m,newPostdata:g}=this.state;return(0,d.jsxs)(d.Fragment,{children:[" ",o.Vn?(0,d.jsx)(r(),{id:"pixel",className:"tb_w_e_post_container",tabIndex:"0","aria-label":`There are ${e&&e.length>0?e.length:0} posts in the feed`,elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_w_e_post_wrapper",horizontalOrder:!0,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:(null===e||void 0===e?void 0:e.length)>0&&e.map(((t,e)=>{const i=s[t];return(0,d.jsx)(l.A,{ownerId:n.Wall.owner,itemData:i,itemIndex:e,adjustWidth:a,personalization:n.Personalization,ThemeRule:n.ThemeRule,wallID:n.Wall.id,clickToShowPopUp:_,onClickToCTA:p,postSizeInPx:u,wall:n},`sqr_crd_${e}_${i.id}`)}))}):(0,d.jsx)("div",{className:"tb_w_e_post_container",children:g.map(((t,e)=>(0,d.jsx)(i.Suspense,{fallback:(0,d.jsx)(d.Fragment,{}),children:(0,d.jsx)(c,{pIndex:e,itemIds:t,activeID:m,completeDataObject:s,wall:n,onClickToCTA:p,postSizeInPx:u,cardCount:g.length,clickToShowPopUp:_},`exhi_${e}_${null===t||void 0===t?void 0:t.length}`)})))})]})}}const _=(0,i.memo)(h)},98776:(t,e,s)=>{"use strict";e.pG=void 0;var i=s(61529);var a=s(95962);Object.defineProperty(e,"pG",{enumerable:!0,get:function(){return a.getImageSize}});var o=s(49363)},61529:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},95962:(t,e,s)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const i=s(61529);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((s,a)=>{if("undefined"===typeof window)return a(i.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return a(i.ErrorMessage.URL_IS_NOT_DEFINED);let o=null;const n=new Image;n.addEventListener("load",(()=>{o&&window.clearTimeout(o),s({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(t=>{o&&window.clearTimeout(o),a(`${t.type}: ${t.message}`)})),n.src=t,e.timeout&&(o=window.setTimeout((()=>a(i.ErrorMessage.TIMEOUT)),e.timeout))}))}},49363:function(t,e,s){"use strict";var i=this&&this.__awaiter||function(t,e,s,i){return new(s||(s=Promise))((function(a,o){function n(t){try{l(i.next(t))}catch(e){o(e)}}function r(t){try{l(i.throw(t))}catch(e){o(e)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(n,r)}l((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const a=s(9950),o=s(95962);e.useImageSize=(t,e)=>{const[s,n]=(0,a.useState)(null),[r,l]=(0,a.useState)(!1),[d,c]=(0,a.useState)(null);return(0,a.useEffect)((()=>{i(void 0,void 0,void 0,(function*(){l(!0),n(null),c(null);try{const{width:s,height:i}=yield(0,o.getImageSize)(t,e);n({width:s,height:i})}catch(d){c(d.toString())}finally{l(!1)}}))}),[t,e]),[s,{loading:r,error:d}]}},95098:()=>{}}]);