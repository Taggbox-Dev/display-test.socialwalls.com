"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5847,5867,9239,5790,5810],{20678:(t,e,s)=>{s.d(e,{Z:()=>u});var i,a,c=s(47313),o=s(35179),l=s(46417),r=!1,n=0,d=0,_=0;const h=t=>{var e;return null!==(e={80:60,70:40,50:30,30:20,20:10}[t])&&void 0!==e?e:20},m=window.location.href.includes("app=1")?1.2:.6;class b extends c.Component{constructor(){var t;super(...arguments),t=this,this.state={slideWall:0},this.onLoadScroll=()=>{if(!o.aL){const{wall:t}=this.props;window.clearData=this.clearData;const e=document.querySelector(".tb_app_container");null===e||void 0===e||e.addEventListener("wheel",(t=>t.preventDefault()),{passive:!1}),d=setTimeout((()=>this.scrollDiv_init(t.ThemeRule.themeId)),500)}},this.scrollDiv_init=t=>{const{slideWall:e}=this.state,{parentId:s}=this.props;e||(a=document.getElementById(s),63==t&&(r=!1),(a||{}).scrollTop=0,n=0,this.onScrollData(),this.onScrollWPosts())},this.onScrollData=()=>{const{wall:t}=this.props,e=t.Personalization.scrollDelay;if(e){const t=h(e);_=setInterval(this.scrollDiv,t)}},this.onScrollWPosts=()=>{const{themeHeight:t,wall:e,renderID:s,parentId:i}=this.props,a=document.getElementById(i),c=document.getElementById(s);var l=document.querySelector(".tb_theme_container");if(l&&(l=window.getComputedStyle(l).getPropertyValue("height"),c))if(window.innerHeight<c.clientHeight)a.style="height:".concat(l),c.style="position: relative; margin-bottom: ".concat(window.innerHeight,"px; min-height: ").concat(c.clientHeight,"px");else{t&&o.bX&&window.editor;a.style="height:".concat(l),a.setAttribute("style","height:".concat(l))}},this.scrollDiv=()=>{const{themeId:t}=this.props.wall.ThemeRule;_&&clearInterval(_);const e=a||{};r?63===t?(n-=m,e.scrollTop=n,r=!r||0!==e.scrollTop):(e.scrollTop=n=0,r=!1):(n+=m,e.scrollTop=n,r=e.scrollTop>=e.scrollHeight-e.offsetHeight-600),this.onScrollData()},this.pauseDiv=()=>{clearInterval(_),clearTimeout(i),i=setTimeout(this.resumeDiv,5e3)},this.resumeDiv=()=>{var t;const{wall:e,renderID:s}=this.props;a=document.getElementById(s),n=(null===(t=a)||void 0===t?void 0:t.scrollTop)||0,_=setInterval(this.scrollDiv,h(e.Personalization.scrollDelay))},this.clearData=()=>this.clearTime(),this.clearTime=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;t.setState({slideWall:e?0:1}),clearInterval(_),_=0,clearTimeout(i),clearTimeout(d),r=!1,n=0}}componentDidMount(){this.onLoadScroll(),window.addEventListener("resize",(()=>{this.onScrollWPosts()}))}componentDidUpdate(t,e){const{postData:s,wall:i}=t,{ThemeRule:a}=this.props.wall;a.themeId!==i.ThemeRule.themeId&&(r=!1,n=0),s!==this.props.postData&&(this.clearTime(1),this.scrollDiv_init(a.themeId))}componentWillUnmount(){this.clearTime()}render(){return(0,l.jsx)(l.Fragment,{children:{...this.props.children}})}}const u=(0,c.memo)(b)},89239:(t,e,s)=>{s.r(e),s.d(e,{default:()=>l});var i=s(47313),a=s(17739),c=s(98935),o=s(46417);class l extends i.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:s}=this.props;return(0,o.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,o.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,a.P)(t.picture),width:44,height:44,onError:e=>{const i="#ffffff"==s.color?"#000":s.color;e.target.src=t.errorPic?t.errorPic:"https://ui-avatars.com/api/?name=".concat(t.name.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":i).replace("#",""),"&color=fff&length=1"),e.target.alt=t.name}}):(0,o.jsx)(c.Z,{authorClass:e,username:t.name,network:s,color:null===s.id?"#000":s.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,s)=>{s.d(e,{Z:()=>o});var i=s(47313),a=s(46417);const c=t=>{let{username:e,network:s,authorClass:i,errorPic:c}=t;const o="#ffffff"==s.color?"#000":s.color;return(0,a.jsx)("img",{className:"".concat(i,"__"),src:c||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":o).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},o=(0,i.memo)(c)},7138:(t,e,s)=>{s.d(e,{Z:()=>o});var i=s(47313),a=s(46417);class c extends i.PureComponent{render(){const{cta:t,ctaClass:e,postCta:s,onClickToCTA:i,item:c}=this.props,o=!(!s||1!==s.status);return(0,a.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),i(c),window.open("".concat(o?s.url:t.url),"_blank")},children:[" ",o?s.text:t.text]})}}const o=c},81349:(t,e,s)=>{s.d(e,{Z:()=>o});s(47313);var i=s(35179),a=s(95867),c=s(46417);const o=t=>{const{itemData:e,IconClass:s,isCenter:o,hideVideo:l,show:r}=t,n=3===e.type||5===e.type,d=7===e.network.id,_=!!(e.imageList&&e.imageList.length>0),h=1===e.isAudio,m=!!(e.ugc_products&&e.ugc_products.length>0),b=(0,c.jsx)(a.default,{network:{id:7,name:"YouTube",icon:"youtube"},networkClass:"tb_youtube_ico"}),u=(0,c.jsx)("div",{className:"tb_multiple_ico tb__icon tb-multiple",children:(0,c.jsx)("div",{})}),p=(0,c.jsx)("div",{className:"tb_audio_ico tb__icon tb-audio",children:(0,c.jsx)("div",{})}),v=(0,c.jsx)("div",{className:"tb__icon tb-".concat(i.bX?"reel-fill tb_reel_ico":"video tb_video_ico"),children:(0,c.jsx)("div",{})}),x=(0,c.jsx)("div",{className:"tb_play_ico tb__icon tb-play",children:(0,c.jsx)("div",{})}),j=(0,c.jsx)("div",{className:"tb_shop_ico tb__icon tb-bag",children:(0,c.jsx)("div",{})}),w=(0,c.jsx)("div",{className:"tb_center_video_ico tb__icon tb-play-circle",children:(0,c.jsx)("div",{})});return r?(0,c.jsxs)(c.Fragment,{children:[o&&(d||n)?(0,c.jsxs)("div",{className:"".concat(s," tb__media_ico_c"),children:[n&&!d?w:"",n&&d?b:""]}):null,m||_||n?(0,c.jsxs)("div",{className:"".concat(s," tb__media_ico_"),children:[m?j:"",_?u:"",o||!n||d||l?"":h?p:i.ZQ?x:v]}):null]}):null}},95867:(t,e,s)=>{s.r(e),s.d(e,{default:()=>l});var i=s(47313),a=s(35179),c=s(46417);const o=i.memo((t=>{let{network:e,networkClass:s}=t;const i="".concat(s," tb__icon tb_ico_default");switch(e.id){case 1:return(0,c.jsx)("div",{className:"".concat(i," tb-twitter")});case 2:case 18:return(0,c.jsx)("div",{className:"".concat(i," tb-instagram-default"),children:(0,c.jsx)("div",{})});case 3:return(0,c.jsx)("div",{className:"".concat(i," tb-facebook"),children:(0,c.jsx)("div",{})});case 4:return(0,c.jsxs)("div",{className:"".concat(i," tb-google-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})})]});case 5:return(0,c.jsx)("div",{className:"".concat(i," tb-pinterest"),children:(0,c.jsx)("div",{})});case 6:return(0,c.jsxs)("div",{className:"".concat(i," tb-flickr-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 7:return(0,c.jsxs)("div",{className:"".concat(i," tb-youtube-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 8:return(0,c.jsx)("div",{className:"".concat(i," tb-vimeo"),children:(0,c.jsx)("div",{})});case 10:return(0,c.jsx)("div",{className:"".concat(i," tb-linkedin"),children:(0,c.jsx)("div",{})});case 11:return(0,c.jsx)("div",{className:"".concat(i," tb-tumblr"),children:(0,c.jsx)("div",{})});case 12:return(0,c.jsx)("div",{className:"".concat(i," tb-rss"),children:(0,c.jsx)("div",{})});case 15:return(0,c.jsx)("div",{className:"".concat(i," tb-workplace"),children:(0,c.jsx)("div",{})});case 19:return(0,c.jsx)("div",{className:"".concat(i," tb-yelp"),children:(0,c.jsx)("div",{})});case 20:return(0,c.jsxs)("div",{className:"".concat(i," tb-slack-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path8",children:(0,c.jsx)("div",{})})]});case 21:return(0,c.jsx)("div",{className:"".concat(i," tb-yammer"),children:(0,c.jsx)("div",{})});case 23:return(0,c.jsx)("div",{className:"".concat(i," tb-airbnb"),children:(0,c.jsx)("div",{})});case 25:return(0,c.jsx)("div",{className:"".concat(i," tb-soundcloud"),children:(0,c.jsx)("div",{})});case 26:return(0,c.jsxs)("div",{className:"".concat(i," tb-giphy-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})})]});case 28:return a.ZQ?(0,c.jsxs)("div",{className:"".concat(i," tb-capterra-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1"}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2"}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3"}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4"})]}):(0,c.jsxs)("div",{className:"".concat(i," tb-tiktok-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})})]});case 29:return a.ZQ?(0,c.jsx)("div",{className:"".concat(i," tb-etsy"),children:(0,c.jsx)("div",{})}):(0,c.jsx)("div",{className:"".concat(i," tb-onsite-upload"),children:(0,c.jsx)("div",{})});case 30:case 32:return(0,c.jsx)("div",{className:"".concat(i," tb-vk"),children:(0,c.jsx)("div",{})});case 31:return(0,c.jsxs)("div",{className:"".concat(i," tb-tiktok-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path5",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path6",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path7",children:(0,c.jsx)("div",{})})]});case 33:return(0,c.jsxs)("div",{className:"".concat(i," tb-trustpilot-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 34:return(0,c.jsxs)("div",{className:"".concat(i," tb-amazon-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})})]});case 35:return(0,c.jsx)("div",{className:"".concat(i," tb-tripadvisor"),children:(0,c.jsx)("div",{})});case 36:return(0,c.jsxs)("div",{className:"".concat(i," tb-tagembed-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})})]});case 37:return(0,c.jsxs)("div",{className:"".concat(i," tb-aliexpress-default"),children:[(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path3",children:(0,c.jsx)("div",{})}),(0,c.jsx)("div",{className:"tb_colr_ico tb_ico_path4",children:(0,c.jsx)("div",{})})]});default:return""}}));class l extends i.PureComponent{render(){return(0,c.jsx)(o,{...this.props})}}},25810:(t,e,s)=>{s.r(e),s.d(e,{default:()=>l});var i=s(47313),a=s(35179),c=s(46417);const o=i.lazy((()=>s.e(5867).then(s.bind(s,95867))));class l extends i.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,isDefault:l,Personalization:r}=this.props,n=!!l&&(7!==t.id&&4!==t.id&&36!==t.id),d=a.ZQ&&36==t.id?"tagembed":t.icon;return n?(0,c.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,c.jsx)("div",{})}):(0,c.jsxs)(i.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:[" ",(0,c.jsx)(o,{network:t,networkClass:e})]})}}},90905:(t,e,s)=>{s.d(e,{Z:()=>r});var i=s(47313),a=s(35179),c=s(46417);const o=t=>{let{network:e}=t;const s={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:i,color:o}=s[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,c.jsx)("div",{className:i,style:{color:o},"tb-network":e.id,children:(0,c.jsx)("div",{})})},l=t=>{let{ThemeID:e}=t;const{className:s,color:i}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,c.jsx)("div",{className:s,style:{color:i},"tb-network":e})};class r extends i.PureComponent{render(){const{rating:t,network:e,ThemeID:s}=this.props;return(0,c.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,i)=>s?(0,c.jsx)(l,{ThemeID:s},i):(0,c.jsx)(o,{network:e},i))):null})}}},5744:(t,e,s)=>{s.d(e,{Z:()=>l});var i=s(47313),a=s(43635),c=s(35179),o=s(46417);class l extends i.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:s,wallID:i,ownerId:o}=this.props;e.stopPropagation(),c.ZQ||(0,a.S5)({type:2,action:2,wall:i,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:o}),(0,a.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,o.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,o.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(c.ZQ?"tb-share-fill":"tb-share"),children:(0,o.jsx)("div",{})}),(0,o.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,o.jsx)("div",{className:"tb_share_icon_list",children:(0,o.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,o.jsx)("div",{})})}):"",t.twitter?(0,o.jsx)("div",{className:"tb_share_icon_list",children:(0,o.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,o.jsx)("div",{})})}):"",t.linkedin?(0,o.jsx)("div",{className:"tb_share_icon_list",children:(0,o.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,o.jsx)("div",{})})}):""]})]})}}},32675:(t,e,s)=>{s.d(e,{Z:()=>n});var i=s(47313),a=(s(35179),s(17739)),c=s(46417);const o=(t,e,s)=>1==t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,a.ok)(e)):s,l=(t,e,s)=>1==t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,a.ok)(e)):s,r=t=>{let{arialbl:e,hrefClick:s,Icon:i,count:o}=t;return(0,c.jsx)("div",{className:"tb_social_action__list",children:(0,c.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(s,"_blank")},className:"tb_social_action__ico_wrap",children:[(0,c.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(i),children:" "}),o>0?(0,c.jsx)("div",{className:"tb_social_action_counts__",children:(0,a.sy)(o)}):""]})})};class n extends i.PureComponent{render(){const{itemData:t,ThemeRule:e,actionClass:s,ThemeID:i}=this.props,n={color:3===i?1===e.iconType?e.iconColor:t.network.color:e.fontColor},d=t.network.id,_=3===d||10===d||7===d?"like":"heart",h=!![1,2,3,7,8,9,10,18].includes(d),m=![29,19].includes(d),b=t.network.name?t.network.name:"";return(0,c.jsx)(c.Fragment,{children:29!==d&&26!==d&&23!==d&&6!==d&&5!==d&&11!==d&&12!==d&&15!==d&&20!==d&&21!==d?(0,c.jsx)("div",{className:s,children:(0,c.jsxs)("div",{className:"tb_social_action__",children:[h?(0,c.jsx)(r,{arialbl:b,hrefClick:o(d,t.postId,t.link),Icon:_,iconColorStyle:n,count:t.like_count}):null,m?(0,c.jsx)(r,{arialbl:b,hrefClick:l(d,t.postId,t.link),Icon:"comment",iconColorStyle:n,count:t.comment_count}):null,1===d?(0,c.jsx)(r,{arialbl:b,hrefClick:"https://twitter.com/intent/retweet?tweet_id=".concat((0,a.ok)(t.postId)),Icon:"retweet",iconColorStyle:n,count:t.comment_count}):null,(0,c.jsx)(r,{arialbl:b,hrefClick:t.link,Icon:"eye",iconColorStyle:n,count:0})]})}):""})}}},55790:(t,e,s)=>{s.r(e),s.d(e,{default:()=>l});var i=s(47313),a=s(17739),c=s(46417);const o=t=>{const{postTime:e,timeClass:s}=t;return(0,c.jsx)("div",{className:s,children:(0,a.Sy)(e)})},l=(0,i.memo)(o)},8572:(t,e,s)=>{s.r(e),s.d(e,{default:()=>C});var i=s(47313),a=s(89239),c=s(55790),o=s(25810),l=s(17739),r=s(46417);const n=t=>{let{author:e,personalization:s,postTime:i,network:n,ThemeRule:d,font:_}=t;const h=e.username&&e.username.length>0?"@".concat(e.username):"",m=!(!s.postAuthor||e.isInstaUser),b=!(!s.postAuthor||!s.postTime||e.isInstaUser),u=!(!d.socialAction||!(0,l.mD)(63));return(0,r.jsxs)("div",{className:"tb_w_f_author_wrapper",children:[(0,r.jsxs)("div",{className:"tb_w_f_author",children:[m?(0,r.jsx)(a.default,{author:e,network:n,authorClass:"tb_w_f_author_profile"}):"",(0,r.jsxs)("div",{className:"tb_w_f_author_info",children:[m?(0,r.jsx)("div",{className:"tb_w_f_authorname",children:e.name}):"",(0,r.jsxs)("div",{className:"tb_w_f_post_info",children:[m?(0,r.jsx)("div",{className:"tb_w_f_username",children:h}):"",b?(0,r.jsx)("div",{className:"tb_w_f_seprator",children:" "}):"",s.postTime?(0,r.jsx)(c.default,{postTime:i,timeClass:"tb_w_f_time tb-cTBfont-".concat(d.font_varient),authorColor:d.authorColor}):""]})]})]}),u?(0,r.jsx)("div",{className:"tb_w_f_social_",children:(0,r.jsx)(o.default,{networkClass:"tb_w_f_social_ico",network:n,ThemeRule:d,isDefault:1===d.iconType})}):""]})};var d=s(35179),_=s(81349),h=s(84261),m=s(64442);const b=i.lazy((()=>s.e(695).then(s.bind(s,10695)))),u=t=>{let{itemData:e,wallID:s,ownerId:a,wall:c}=t;const o=!(!d.ZQ||3!==e.type&&5!==e.type||c.Personalization.mobilePopup||c.Personalization.postFeatured),l=(3===e.type||5===e.type)&&1==c.ThemeRule.autoPlay;return(0,r.jsxs)("div",{className:"tb_w_f_media_wrap",children:[d.aL&&c.Personalization.interactive?(0,r.jsx)(i.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(b,{postId:e.id,wallID:s,UserDetail:c.UserDetail})}):null,d.P2&&!l?(0,r.jsx)(_.Z,{itemData:e,IconClass:"tb_w_c_media_icon",show:d.P2,isCenter:!1}):null,l||o?(0,r.jsx)(m.Z,{VideoClass:"tb_w_f_video",data:e,wallID:s,themeID:c.Personalization.widgetTheme,ownerId:a,size:!1,isCover:!0,controls:!1,autoPlay:!0,muted:!0}):(0,r.jsx)(h.default,{ImageClass:"tb_w_f_image",data:e,wallID:s,themeID:c.Personalization.widgetTheme,ownerId:a,size:!1,ThemeRule:c.ThemeRule,hotspot:!0})]})};var p=s(5744),v=s(7138),x=s(90905),j=s(32675);const w=t=>{let{itemData:e,personalization:s,adjustWidth:i,ThemeRule:a,clickToShowPopUp:c,itemIndex:o,wallID:_,ownerId:h,onClickToCTA:m,wall:b}=t;const w={width:"".concat(i,"%"),padding:s.padding/2},N=2===e.type||3===e.type||4===e.type||5===e.type,f=e.rating>0,g=!!(e.cta&&Object.keys(e.cta).length>0&&e.cta.status),k=!!(e.ugc_products&&e.ugc_products.length>0),I=!(!k||0!==e.hotspot),D=!(!e.hotspot||!k),T=d.bX?{padding:a.spacing}:null;return(0,r.jsx)("div",{id:"tb-cp-post-".concat(e.id),className:"tb_w_f_post_wrapper",style:w,"tb-network":e.network.id,"tb-product":I?1:D?2:0,children:(0,r.jsxs)("div",{className:"tb_w_f_post_in",onClick:c(o,e),style:T,children:[(0,r.jsxs)("div",{className:"tb_w_f_post_media_wrapper",children:[e.share.status?(0,r.jsx)(p.Z,{share:e.share,shareClass:"tb_w_f_share_container",item:e,wallID:_,ownerId:h}):"",N?(0,r.jsx)(u,{itemData:e,wallID:_,ownerId:h,ThemeID:s.widgetTheme,wall:b},"img".concat(o,"_").concat(e.id)):"",d.ZQ&&f?(0,r.jsxs)("div",{className:"tb_w_f_rating__",children:[(0,r.jsx)(x.Z,{rating:e.rating,network:e.network})," "]}):"",g?(0,r.jsxs)("div",{className:"tb_w_f_post_cta",children:[(0,r.jsx)(v.Z,{ctaClass:"tb_w_f_post_cta_btn",cta:e.cta,item:e,onClickToCTA:m})," "]}):""]}),(0,r.jsx)("div",{className:"tb_w_f_contant_wrapper",children:(0,r.jsx)(n,{ownerId:h,postTime:e.createdAt,author:e.author,network:e.network,font:e.font,personalization:s,ThemeRule:a})}),a.socialAction&&!(0,l.mD)(63)?(0,r.jsx)(j.Z,{itemData:e,ThemeRule:a,ThemeID:s.widgetTheme,actionClass:"tb_w_f_social_action__ ".concat(d.ZQ?"tb_w_f_social_action_bg":"","}")}):""]})})};var N=s(43411),f=s(61395),g=s.n(f),k=s(43635),I=s(20678);const D=t=>{let{loadData:e,postData:s,completeDataObject:i,BrandingPosition:a,clickToShowPopUp:c,wall:o,adjustWidth:l,onClickToCTA:n}=t;return e?(null===s||void 0===s?void 0:s.length)>0&&s.map(((t,e)=>{const s=i[t];return parseInt(a),(0,r.jsx)(w,{ownerId:o.Wall.owner,itemData:s,itemIndex:e,adjustWidth:l,personalization:o.Personalization,ThemeRule:o.ThemeRule,wallID:o.Wall.id,clickToShowPopUp:c,onClickToCTA:n,wall:o},"Classic_Card_".concat(e,"_").concat(s.id))})):null};class T extends i.Component{constructor(){super(...arguments),this.state={postData:[],loadData:1}}componentDidMount(){const{postData:t,heightUpdate:e}=this.props;this.setState({postData:t,loadData:1},(()=>setTimeout((()=>e()),1e3)))}componentDidUpdate(t,e){return t.postData!==this.props.postData&&(this.props.heightUpdate(),!0)}render(){const{postData:t,completeDataObject:e,adjustWidth:s,wall:i,clickToShowPopUp:a,onClickToCTA:c}=this.props,{loadData:o}=this.state;return(0,r.jsx)(I.Z,{wall:i,parentId:"tb_marquee",renderID:"focus",children:(0,r.jsx)("div",{id:"tb_marquee",children:(0,r.jsx)(g(),{id:"focus",className:"tb_w_f_post_container",tabIndex:"0","aria-label":"There are ".concat(t&&t.length>0?t.length:0," posts in the feed"),role:"feed",elementType:"div",options:{transitionDuration:0,percentPosition:!0,itemSelector:".tb_w_f_post_wrapper",horizontalOrder:!1,resize:!0},disableImagesLoaded:!1,updateOnEachImageLoad:!1,imagesLoadedOptions:{},enableResizableChildren:!0,children:(0,r.jsx)(D,{loadData:o,wall:i,clickToShowPopUp:a,postData:t,completeDataObject:e,BrandingPosition:4,adjustWidth:s,onClickToCTA:c})})})})}}const C=(0,N.$j)((t=>({})),(t=>({managePostHeight:e=>t((0,k.B0)(e))})))(T)},2406:(t,e,s)=>{e.Ad=void 0;var i=s(84228);var a=s(65786);Object.defineProperty(e,"Ad",{enumerable:!0,get:function(){return a.getImageSize}});var c=s(22537)},84228:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ErrorMessage=void 0,e.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(t,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getImageSize=void 0;const i=s(84228);e.getImageSize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((s,a)=>{if("undefined"===typeof window)return a(i.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!t)return a(i.ErrorMessage.URL_IS_NOT_DEFINED);let c=null;const o=new Image;o.addEventListener("load",(()=>{c&&window.clearTimeout(c),s({width:o.naturalWidth,height:o.naturalHeight})})),o.addEventListener("error",(t=>{c&&window.clearTimeout(c),a("".concat(t.type,": ").concat(t.message))})),o.src=t,e.timeout&&(c=window.setTimeout((()=>a(i.ErrorMessage.TIMEOUT)),e.timeout))}))}},22537:function(t,e,s){var i=this&&this.__awaiter||function(t,e,s,i){return new(s||(s=Promise))((function(a,c){function o(t){try{r(i.next(t))}catch(e){c(e)}}function l(t){try{r(i.throw(t))}catch(e){c(e)}}function r(t){var e;t.done?a(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(o,l)}r((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.useImageSize=void 0;const a=s(47313),c=s(65786);e.useImageSize=(t,e)=>{const[s,o]=(0,a.useState)(null),[l,r]=(0,a.useState)(!1),[n,d]=(0,a.useState)(null);return(0,a.useEffect)((()=>{i(void 0,void 0,void 0,(function*(){r(!0),o(null);try{const{width:s,height:i}=yield(0,c.getImageSize)(t,e);o({width:s,height:i})}catch(n){d(n.toString())}finally{r(!1)}}))}),[t,e]),[s,{loading:l,error:n}]}}}]);