(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4463,4654,6264,6723,8167,8262],{78167:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var i=s(9950),a=s(52867),o=s(93662),r=s(44414);class n extends i.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:s}=this.props;return(0,r.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,r.jsx)("img",{className:`${e}__`,src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,a.wG)(t.picture),width:44,height:44,onError:e=>{const i="#ffffff"==s.color?"#000":s.color;e.target.src=t.errorPic?t.errorPic:`https://ui-avatars.com/api/?name=${t.name.replace(/\s/g,"")}&background=${String(null===s.id?"#000":i).replace("#","")}&color=fff&length=1`,e.target.alt=t.name}},Math.random()):(0,r.jsx)(o.A,{authorClass:e,username:t.name,network:s,color:null===s.id?"#000":s.color,errorPic:t.errorPic})},Math.random())}}},93662:(t,e,s)=>{"use strict";s.d(e,{A:()=>r});var i=s(9950),a=s(44414);const o=t=>{let{username:e,network:s,authorClass:i,errorPic:o}=t;const r="#ffffff"==s.color?"#000":s.color;return(0,a.jsx)("img",{className:`${i}__`,src:o||`https://ui-avatars.com/api/?name=${e.replace(/\s/g,"")}&background=${String(null===s.id?"#000":r).replace("#","")}&color=fff&length=1`,alt:e,width:45,height:45})},r=(0,i.memo)(o)},60531:(t,e,s)=>{"use strict";s.d(e,{A:()=>r});var i=s(9950),a=s(44414);class o extends i.PureComponent{render(){const{cta:t,ctaClass:e,postCta:s,onClickToCTA:i,item:o}=this.props,r=!(!s||1!==s.status);return(0,a.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),i(o),window.open(`${r?s.url:t.url}`,"_blank")},children:[" ",r?s.text:t.text]})}}const r=o},89874:(t,e,s)=>{"use strict";s.d(e,{A:()=>p});var i=s(9950),a=s(11127),o=s(73068),r=s(1823),n=s(52867),l=s(44414);const d=(0,o.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),c=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,s=t.product_discount>0&&t.product_discount!=t.product_price?`<div class="tb_p_tooltip_price tb_price_disabled">${t.price_currency_symbol}${t.product_price}</div>`:"",i=t.product_price>0||t.product_discount>0?`${s}<div class="tb_p_tooltip_price">${t.price_currency_symbol}${e}</div>`:"";return`<a href="${t.product_url}" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">${t.product_title}</div>\n          ${i}\n        </a>`};class h extends i.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:s}=this.state,i=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return i.status?(0,l.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const a=(0,n.Ul)();return(0,l.jsxs)("div",{href:t.product_url,id:`tb_hotspot-${t.id}${a}`,onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot"+(s==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,l.jsx)("div",{className:"tb_hotspot__ "+(0==i.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,l.jsx)(d,{children:(0,l.jsx)(r.m_,{className:"tb_pro_tooltip",anchorSelect:`#tb_hotspot-${t.id}${a}`,clickable:!0,html:c(t.UgcProduct)})})]},e)}))}):null}}const p=(0,a.Ng)((t=>({appData:t.appData})))(h)},78262:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>c});var i=s(9950),a=(s(14478),s(89874)),o=s(98776),r=s(52867),n=s(80415),l=s(66345),d=s(44414);class c extends i.PureComponent{constructor(t){super(t),this.onSetHeightWithWidth=(t,e)=>{const s=document.querySelector(`.track${this.props.data.id}`);s&&(s.setAttribute("data-height",e),s.setAttribute("data-width",t))},this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[2,4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth,size:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}});else try{const{width:t,height:s}=await(0,o.pG)(e.postFileNew);this.setState({paddingBottom:100*s/t,size:{height:parseInt(s),width:parseInt(t)}})}catch(s){this.setState({paddingBottom:100,size:{height:100,width:100}})}},this.onLoad=t=>{const{data:e}=this.props;1==t.target.getAttribute("data-load")&&this.setState({imgSize:{...this.state.imgSize,small:t.target.src}});try{e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth?this.onSetHeightWithWidth(e.mediaWidth,e.mediaHeight):this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}catch(s){this.onSetHeightWithWidth(t.target.naturalWidth?t.target.naturalWidth:t.target.width,t.target.naturalHeight?t.target.naturalHeight:t.target.height)}},this.state={loadError:!1,paddingBottom:100,fixedPaddingBottom:100,imgUrl:this.props.data.postFileNew,imgSize:{small:t.data.postFileNew,large:t.data.filename,orignal:t.data.file},size:{height:100,width:100},isVisible:!1},this.videoRef=i.createRef(),this.observer=null}componentWillMount(){const{data:t,hotspot:e,size:s}=this.props;!s||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({paddingBottom:s})}componentDidMount(){const{data:t,hotspot:e,size:s}=this.props;!s||t.hotspot&&t.ugc_products.length>0&&e?this.onMediaLoad():this.setState({fixedPaddingBottom:s});try{this.observer=new IntersectionObserver((t=>{let[e]=t;e.isIntersecting&&(this.setState({isVisible:e.isIntersecting}),this.observer.disconnect())}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(i){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.observer.disconnect()}render(){const{ImageClass:t,data:e,wallID:s,themeID:i,ownerId:o,hotspot:c}=this.props,{imgUrl:h,paddingBottom:p,size:_,fixedPaddingBottom:u,imgSize:m,noPadding:g,isVisible:b}=this.state,w={paddingBottom:`${this.props.size?1==this.props.size?null:u:p}%`},f={backgroundImage:`url(${m.small})`};if(_.width>_.height)var v="100%",x=_.height/_.width*100+"%";else x="100%",v=_.width/_.height*100+"%";const j=!!(e.hotspot&&e.ugc_products.length>0&&c),y={width:j&&this.props.size?v:null,height:j&&this.props.size?x:null};return(0,d.jsxs)("div",{className:`${t}_wrap_ mediaHolder${e.id}`,style:w,ref:this.videoRef,children:[j?(0,d.jsx)("div",{className:"tb_blur_bg_",style:f}):null,(0,d.jsxs)("div",{className:`${t}_wrap_in`,style:y,children:[j?(0,d.jsx)(a.A,{product:e.ugc_products}):null,(0,d.jsx)("img",{className:`${t} track${e.id}`,role:"img",src:b?m.small:e.postFileNew,srcSet:b?l.aD&&g?`${m.large}, 991w ${m.small}, 480w`:null:e.postFileNew,height:300,width:300,"data-link":e.link,"data-load":"0","data-network":e.network.id,"data-wall-id":s,"data-owner-id":o,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"theme-id":i,onLoad:this.onLoad,onError:e.stories?null:t=>{t.target.src=`${n.th}/media/images/error/no-image.svg`,t.target.srcset=`${n.th}/media/images/error/no-image.svg`},alt:(0,r.wG)(h)})]})]})}}},3720:(t,e,s)=>{"use strict";s.d(e,{A:()=>p});var i=s(9950),a=s(98776),o=s(38092),r=s.n(o),n=s(14478),l=s(66345),d=(s(52867),s(44414));const c=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class h extends i.Component{constructor(t){super(t),this.onMediaLoad=async t=>{const{data:e}=this.props;if(e&&Object.keys(e).length>0&&[4,5,3].includes(e.type))if(e.mediaHeight&&""!=e.mediaHeight&&e.mediaWidth&&""!=e.mediaWidth)this.setState({paddingBottom:100*e.mediaHeight/e.mediaWidth});else try{const{width:t,height:s}=await(0,a.pG)(e.postFileNew);this.setState({paddingBottom:100*s/t})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=t=>{this.setState({videoLoaded:t})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=i.createRef(),this.observer=null}componentWillMount(){const{data:t}=this.props;let e=document.querySelector(`#video_p_${t.id}`);e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:t}=this.props;let e=document.querySelector(`#video_p_${t.id}`);e&&(e.play(),e.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((t=>{let[e]=t;this.setState({isVisible:e.isIntersecting})}),{threshold:.1}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(s){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:t,data:e,wallID:s,isCover:i,controls:a,autoPlay:o,handleVideoEnded:h,muted:p,themeID:_,intervalTime:u}=this.props,{paddingBottom:m,videoLoaded:g,isVisible:b}=this.state,w=e.postFileNew,f=e.filename,v=(e.file,[74,76,77].includes(_)),x={paddingBottom:`${v&&l.aD?null:m}%`},j=null!==e&&void 0!==e&&e.loopStop?e.mediaUrl:e.mediaClip&&String(e.mediaClip).length>0?e.mediaClip:e.mediaUrl;return(0,d.jsx)("div",{className:`${t}_wrap_ mediaHolder${e.id}`,style:x,ref:this.videoRef,children:(0,d.jsx)(r(),{className:`${t} video${e.id}`,url:c(j,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":s,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":""+(document.querySelector(".ts_rt_post_in")?`${document.querySelector(".ts_rt_post_in").clientHeight} px`:"100%"),poster:e.postFileNew}},file:{attributes:{preload:"metadata",poster:e.postFileNew}}},loop:!(l.aD&&!l.Vn&&null!==e&&void 0!==e&&e.loopStop),onError:t=>{!l.yR||e.stories&&0!=e.stories||(0,n.zi)(t,e.id),v&&h&&setTimeout((()=>{h()}),1e3*u)},autoPlay:l.aD?b:o,muted:p,volume:o?1:0,playsinline:!0,onReady:t=>{l.HY?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:l.HY||l.aD?b:o,height:"100%",width:"100%",controls:a||!1,style:{backgroundImage:`url(${v?f:w})`,backgroundSize:i?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})})}}const p=(0,i.memo)(h)},44463:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var i=s(9950),a=s(66345),o=s(44414);const r=i.lazy((()=>s.e(620).then(s.bind(s,20620))));class n extends i.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,isDefault:n,Personalization:l}=this.props,d=!!n&&(7!==t.id&&4!==t.id&&36!==t.id),c=a.uS&&36==t.id?"tagembed":t.icon;return d?(0,o.jsx)("div",{className:`${e} tb__icon tb-${c.replace(/fa-/g,"")}`,children:(0,o.jsx)("div",{})}):(0,o.jsxs)(i.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(r,{network:t,networkClass:e})]})}}},65859:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>d});var i=s(9950),a=s(70804),o=s(52867),r=s(66345),n=s(21796),l=s(44414);class d extends i.PureComponent{constructor(t){super(t),this.contentRef=i.createRef()}componentDidMount(){r.uS&&setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:s,font:i,personalization:d,item:c,contentTitle:h,readMore:p,maxLength:_,textAlign:u,maxLines:m,isReadMore:g}=this.props,b={WebkitLineClamp:m,textAlign:s.textAlignment};let w=20==c.network.id||r.aD&&!r.Vn?e:(0,o.w)(e);12==c.network.id&&(w=(0,a.Ay)(w));const f=""+(s.lineTrim?` tb_content_line-${s.lineTrim}`:""),v=`${t} ${g?"":f}`;return(0,l.jsxs)("div",{className:v,ref:this.contentRef,style:b,children:[h?(0,l.jsx)("div",{className:"tb_bold_txt__",children:(0,a.Ay)(h)}):null,(0,l.jsx)(n.A,{data:c,content:w,Personalization:d,ThemeRule:s})]})}}},21796:(t,e,s)=>{"use strict";s.d(e,{A:()=>c});var i=s(9950),a=s(42083),o=s(70804),r=s(44414);const n=s(53457),l=(t,e)=>(0,r.jsx)(a.default,{style:e&&[66,70].includes(null===e||void 0===e?void 0:e.themeId)?{width:e.fontSize,height:e.fontSize}:null,children:(0,o.Ay)(t)}),d=t=>{let{data:e,content:s,Personalization:i,ThemeRule:a}=t;const d={color:i.hashtag_color,fontWeight:"bold",backgroundColor:1==i.hashtag_background_status?i.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,r.jsx)(r.Fragment,{children:1===i.hashtag_highlight&&0===i.hashtag_feed&&0===i.hashtag_all?(0,o.Ay)(s):1===i.hashtag_highlight&&0===i.hashtag_feed&&1===i.hashtag_all?l(window.slackdown.parse(n(s,/#(\w+)/g,((t,e)=>(0,r.jsxs)("div",{className:"tb_text_hashtag",style:d,children:["#",t]}))),e.slackMember),a):1===i.hashtag_highlight&&1===i.hashtag_feed&&0===i.hashtag_all?l(window.slackdown.parse(n(s,e.hash.hashString,((t,e)=>(0,r.jsx)("div",{className:"tb_text_hashtag",style:d,children:t}))),e.slackMember),a):1===i.hashtag_highlight&&1===i.hashtag_feed&&1===i.hashtag_all?l(window.slackdown.parse(n(s,/#(\w+)/g,((t,s)=>(0,r.jsxs)("div",{className:"tb_text_hashtag",style:d,children:["#",t]},`${e.id}_${s}`))),e.slackMember),a):l(window.slackdown.parse(s,e.slackMember),a)}):(0,r.jsx)(r.Fragment,{children:1===i.hashtag_highlight&&0===i.hashtag_feed&&0===i.hashtag_all?(0,o.Ay)(s):1===i.hashtag_highlight&&0===i.hashtag_feed&&1===i.hashtag_all?n((0,o.Ay)(s),/#(\w+)/g,((t,e)=>(0,r.jsxs)("div",{className:"tb_text_hashtag",style:d,children:["#",t]}))):1===i.hashtag_highlight&&1===i.hashtag_feed&&0===i.hashtag_all?n((0,o.Ay)(s),e.hash.hashString,((t,e)=>(0,r.jsx)("strong",{className:"tb_text_hashtag",style:d,children:t}))):1===i.hashtag_highlight&&1===i.hashtag_feed&&1===i.hashtag_all?n((0,o.Ay)(s),/#(\w+)/g,((t,s)=>(0,r.jsxs)("div",{className:"tb_text_hashtag",style:d,children:["#",t]},`${e.id}_${s}`))):l(s,a)})},c=(0,i.memo)(d)},6723:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});var i=s(9950),a=s(52867),o=s(44414);const r=t=>{const{postTime:e,timeClass:s}=t;return(0,o.jsx)("div",{className:s,children:(0,a.fF)(e)})},n=(0,i.memo)(r)},69106:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>x});var i=s(9950),a=s(53556),o=s(78167),r=s(6723),n=s(44463),l=s(44414);const d=t=>{let{author:e,personalization:s,postTime:i,network:a,ThemeRule:d,font:c}=t;const h=e.username&&e.username.length>0?`@${e.username}`:"",p={color:d.authorColor,fontFamily:d.css_font},_={backgroundColor:d.authorColor},u=!(!s.postAuthor||e.isInstaUser),m=!(!s.postAuthor||!s.postTime||e.isInstaUser);return(0,l.jsxs)("div",{className:"tb_spt_author_wrapper",children:[(0,l.jsxs)("div",{className:"tb_spt_author",children:[u?(0,l.jsx)(o.default,{author:e,network:a,authorClass:"tb_spt_author_profile"}):"",(0,l.jsxs)("div",{className:"tb_spt_author_info",children:[u?(0,l.jsx)("div",{className:"tb_spt_authorname",style:p,children:e.name}):"",(0,l.jsxs)("div",{className:"tb_spt_post_info",children:[u?(0,l.jsx)("div",{className:"tb_spt_username",style:p,children:h}):"",m?(0,l.jsx)("div",{className:"tb_spt_seprator",style:_,children:" "}):"",s.postTime?(0,l.jsx)(r.default,{postTime:i,timeClass:`tb_spt_time tb-cTBfont-${d.font_varient}`,authorColor:d.authorColor,authorNameStyle:p}):""]})]})]}),(0,l.jsx)("div",{className:"tb_spt_social_",children:(0,l.jsx)(n.default,{networkClass:"tb_spt_social_ico",network:a,isDefault:1===d.iconType,ThemeRule:d})})]})},c=t=>{let{share:e,shareColor:s}=t;const i={color:s};return(0,l.jsxs)("div",{className:"tb_spt_share_wrapper",children:[(0,l.jsxs)("div",{className:"tb_spt_share_button_",children:[(0,l.jsx)("div",{className:"tb_spt_share_ico tb__icon tb-share",style:i,children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_spt_share_btn_txt",style:i,children:"Share"})]}),(0,l.jsx)("div",{className:"tb_spt_share_wrapper_dropdown",children:(0,l.jsxs)("div",{className:"tb_spt_share_icon_list",children:[e.facebook?(0,l.jsxs)("a",{href:e.facebook,target:"_blank",className:"tb_spt_share_list_in",rel:"noopener noreferrer nofollow",children:[(0,l.jsx)("div",{className:"tb_spt_share_ico__ tb__icon tb-facebook",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_spt_share_ico_txt",children:"Facebook"})]}):"",e.twitter?(0,l.jsxs)("a",{href:e.twitter,target:"_blank",className:"tb_spt_share_list_in",rel:"noopener noreferrer nofollow",children:[(0,l.jsx)("div",{className:"tb_spt_share_ico__  tb__icon tb-twitter",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_spt_share_ico_txt",children:"Twitter"})]}):"",e.linkedin?(0,l.jsxs)("a",{href:e.linkedin,target:"_blank",className:"tb_spt_share_list_in",rel:"noopener noreferrer nofollow",children:[(0,l.jsx)("div",{className:"tb_spt_share_ico__ tb__icon tb-linkedin",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"tb_spt_share_ico_txt",children:"LinkedIn"})]}):""]})})]})};var h=s(78262),p=s(3720);const _=t=>{let{itemData:e,wallID:s,ownerId:i,wall:a}=t;const o=(3===e.type||5===e.type)&&1==a.ThemeRule.autoPlay;return(0,l.jsx)("div",{className:"tb_spt_media_wrap",children:o?(0,l.jsx)(p.A,{VideoClass:"tb_spt_video",data:e,wallID:s,themeID:a.Personalization.widgetTheme,ownerId:i,size:130,muted:!0,autoPlay:o,handleVideoEnded:()=>{}}):(0,l.jsx)(h.default,{ImageClass:"tb_spt_image",data:e,wallID:s,themeID:a.Personalization.widgetTheme,ownerId:i,size:130})})};var u=s(65859),m=s(60531),g=s(52867);const b=(t,e,s)=>1===t?`https://twitter.com/intent/favorite?tweet_id=${(0,g.Ph)(e)}`:s,w=(t,e,s)=>1===t?`https://twitter.com/intent/tweet?in_reply_to=${(0,g.Ph)(e)}`:s,f=t=>{let{itemData:e,ThemeRule:s}=t;const i={color:s.fontColor},a=e.network.id,o=3===a||10===a?"like":"heart";return(0,l.jsx)(l.Fragment,{children:12!==a&&15!==a&&20!==a&&21!==a?(0,l.jsxs)("div",{className:"tb_spt_social_action__",children:[(0,l.jsx)("div",{className:"tb_spt_social_action__list",children:(0,l.jsxs)("a",{href:b(a,e.postId,e.link),target:"_blank",className:"tb_spt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:[(0,l.jsx)("div",{className:`tb_spt_social_action_ico__ tb__icon tb-${o}`,style:i,children:" "}),e.like_count>0?(0,l.jsx)("div",{className:"tb_spt_social_action_counts__",style:i,children:e.like_count}):""]})}),(0,l.jsx)("div",{className:"tb_spt_social_action__list",children:(0,l.jsxs)("a",{href:w(a,e.postId,e.link),target:"_blank",className:"tb_spt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:[(0,l.jsx)("div",{className:"tb_spt_social_action_ico__ tb__icon tb-comment",style:i,children:" "}),e.like_count>0?(0,l.jsx)("div",{className:"tb_spt_social_action_counts__",style:i,children:e.like_count}):""]})}),1===a?(0,l.jsx)("div",{className:"tb_spt_social_action__list",children:(0,l.jsx)("a",{href:`https://twitter.com/intent/retweet?tweet_id=${(0,g.Ph)(e.postId)}`,target:"_blank",className:"tb_spt_social_action__ico_wrap",rel:"noopener noreferrer nofollow",children:(0,l.jsx)("div",{className:"tb_spt_social_action_ico__ tb__icon tb-retweet",style:i,children:" "})})}):""]}):""})},v=t=>{let{itemData:e,personalization:s,ThemeRule:i,itemIndex:a,clickToShowPopUp:o,wallID:r,ownerId:n,onClickToCTA:h,wall:p}=t;const g=!!(e.ugc_products&&e.ugc_products.length>0),b=!(!g||0!==e.hotspot),w=!(!e.hotspot||!g),v={backgroundColor:i.cardColor},x=1!==e.type,j=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),y={justifyContent:e.share.status?"":"flex-end",borderTop:`1px solid ${i.fontColor}`};return(0,l.jsx)("div",{id:`tb-spt-post-${e.id}`,className:"tb_spt_post_wrapper","tb-network":e.network.id,"tb-product":b?1:w?2:0,children:(0,l.jsx)("div",{className:"tb_spt_post_in",onClick:o(a,e),children:(0,l.jsxs)("div",{className:"tb_spt_post_media_wrapp",children:[x?(0,l.jsx)(_,{itemData:e,wallID:r,wall:p,ownerId:n}):"",(0,l.jsx)("div",{className:"tb_spt_post_details",children:(0,l.jsxs)("div",{className:"tb_spt_contant_wrapper",children:[(0,l.jsx)(d,{ownerId:n,postTime:e.createdAt,author:e.author,network:e.network,font:i,personalization:s,ThemeRule:i}),(0,l.jsxs)("div",{className:"tb_spt_content_wrap",children:[(0,l.jsxs)("div",{className:"tb_spt_content_wrap_in",children:[i.hideContent&&1!=e.type?"":(0,l.jsx)(u.default,{contentClass:"tb_spt_content",item:e,content:e.content,font:i,ThemeRule:i,personalization:s}),j?(0,l.jsxs)("div",{className:"tb_spt_post_cta",children:[(0,l.jsx)(m.A,{ctaClass:"tb_spt_post_cta_btn",cta:e.cta,contentTitle:e.contentTitle,item:e,onClickToCTA:h})," "]}):""]}),(0,l.jsxs)("div",{className:"tb_spt_social_actions_container",style:y,children:[e.share.status?(0,l.jsx)(c,{share:e.share,shareColor:i.fontColor}):"",i.socialAction?(0,l.jsx)(f,{itemData:e,ThemeRule:i}):""]})]})]})}),(0,l.jsx)("div",{className:"tb_spt_post_overlay",style:v,children:(0,l.jsx)("div",{})})]})})})};s(61038);class x extends i.PureComponent{componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((t,e)=>{t.removeAttribute("role")}))}),100)}render(){const{postData:t,completeDataObject:e,wall:s,clickToShowPopUp:i,onClickToCTA:o}=this.props,r={type:"loop",rewind:!0,speed:500,gap:0,autoplay:!!s.ThemeRule.slidePost,padding:0,pagination:!1,arrows:!0};return(0,l.jsx)("div",{className:"tb_spt_post_container",children:(0,l.jsxs)(a.eB,{hasTrack:!1,className:"tb_spt_post_slider",options:r,ref:this.myRef,children:[(0,l.jsx)(a.v9,{children:t&&t.length>0&&t.map(((t,r)=>{const n=e[t];return(0,l.jsx)(a.Nn,{style:{margin:0,padding:0},children:(0,l.jsx)(v,{ownerId:s.Wall.owner,itemData:n,itemIndex:r,personalization:s.Personalization,ThemeRule:s.ThemeRule,wallID:s.Wall.id,clickToShowPopUp:i,onClickToCTA:o,wall:s})},r)}))}),(0,l.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_spt_arrow_wrapper_",children:[(0,l.jsx)("div",{className:"splide__arrow splide__arrow--prev tb_spt_arrow tb_spt_arrow_left__ tb__icon tb-arrow-left-alt",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"splide__arrow splide__arrow--next tb_spt_arrow tb_spt_arrow_right__ tb__icon tb-arrow-right-alt",children:(0,l.jsx)("div",{})})]})]})})}}},43488:(t,e,s)=>{"use strict";var i=s(93959);function a(){}function o(){}o.resetWarningCache=a,t.exports=function(){function t(t,e,s,a,o,r){if(r!==i){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}function e(){return t}t.isRequired=t;var s={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:a};return s.PropTypes=s,s}},11942:(t,e,s)=>{t.exports=s(43488)()},93959:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98776:(t,e,s)=>{"use strict";e.pG=void 0;var i=s(61529);var a=s(95962);Object.defineProperty(e,"pG",{enumerable:!0,get:function(){return a.getImageSize}});var o=s(49363)},61529:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},95962:(t,e,s)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const i=s(61529);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((s,a)=>{if("undefined"===typeof window)return a(i.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return a(i.ErrorMessage.URL_IS_NOT_DEFINED);let o=null;const r=new Image;r.addEventListener("load",(()=>{o&&window.clearTimeout(o),s({width:r.naturalWidth,height:r.naturalHeight})})),r.addEventListener("error",(t=>{o&&window.clearTimeout(o),a(`${t.type}: ${t.message}`)})),r.src=t,e.timeout&&(o=window.setTimeout((()=>a(i.ErrorMessage.TIMEOUT)),e.timeout))}))}},49363:function(t,e,s){"use strict";var i=this&&this.__awaiter||function(t,e,s,i){return new(s||(s=Promise))((function(a,o){function r(t){try{l(i.next(t))}catch(e){o(e)}}function n(t){try{l(i.throw(t))}catch(e){o(e)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(r,n)}l((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const a=s(9950),o=s(95962);e.useImageSize=(t,e)=>{const[s,r]=(0,a.useState)(null),[n,l]=(0,a.useState)(!1),[d,c]=(0,a.useState)(null);return(0,a.useEffect)((()=>{i(void 0,void 0,void 0,(function*(){l(!0),r(null),c(null);try{const{width:s,height:i}=yield(0,o.getImageSize)(t,e);r({width:s,height:i})}catch(d){c(d.toString())}finally{l(!1)}}))}),[t,e]),[s,{loading:n,error:d}]}},61038:()=>{},95098:()=>{}}]);