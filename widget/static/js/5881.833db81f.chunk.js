(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5881,8342,9239,5790,5810],{89239:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});var s=n(47313),a=n(17739),i=n(98935),o=n(46417);class r extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:n}=this.props;return(0,o.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,o.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,a.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,o.jsx)(i.Z,{authorClass:e,username:t.name,network:n,color:null===n.id?"#000":n.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var s=n(47313),a=n(46417);const i=t=>{let{username:e,network:n,authorClass:s,errorPic:i}=t;const o="#ffffff"==n.color?"#000":n.color;return(0,a.jsx)("img",{className:"".concat(s,"__"),src:i||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===n.id?"#000":o).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},o=(0,s.memo)(i)},7138:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var s=n(47313),a=n(46417);class i extends s.PureComponent{render(){const{cta:t,ctaClass:e,postCta:n,onClickToCTA:s,item:i}=this.props,o=!(!n||1!==n.status);return(0,a.jsxs)("div",{className:e,style:{},onClick:e=>{e.stopPropagation(),s(i),window.open("".concat(o?n.url:t.url),"_blank")},children:[" ",o?n.text:t.text]})}}const o=i},25810:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});var s=n(47313),a=n(35179),i=n(46417);const o=s.lazy((()=>n.e(5867).then(n.bind(n,95867))));class r extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:n,isDefault:r,Personalization:l}=this.props,c=!!r&&(7!==t.id&&4!==t.id&&36!==t.id),d=a.ZQ&&36==t.id?"tagembed":t.icon;return c?(0,i.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,i.jsx)("div",{})}):(0,i.jsxs)(s.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:[" ",(0,i.jsx)(o,{network:t,networkClass:e})]})}}},62245:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>c});var s=n(47313),a=n(16390),i=n(17739),o=n(35179),r=n(46417);const l=s.lazy((()=>Promise.all([n.e(622),n.e(584)]).then(n.bind(n,30584))));class c extends s.PureComponent{constructor(t){super(t),this.contentRef=s.createRef()}componentDidMount(){o.ZQ&&setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:n,font:c,personalization:d,item:_,contentTitle:h,readMore:u,maxLength:m,textAlign:p,maxLines:b,isReadMore:g}=this.props,x={WebkitLineClamp:b,textAlign:n.textAlignment};let w=20==_.network.id||o.bX&&!o.aL?e:(0,i.Fx)(e);12==_.network.id&&(w=(0,a.ZP)(w));const f="".concat(n.lineTrim?" tb_content_line-".concat(n.lineTrim):""),v="".concat(t," ").concat(g?"":f);return(0,r.jsxs)("div",{className:v,ref:this.contentRef,style:x,children:[h?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,a.ZP)(h)}):null,(0,r.jsxs)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[" ",(0,r.jsx)(l,{data:_,content:w,Personalization:d})]})]})}}},90905:(t,e,n)=>{"use strict";n.d(e,{Z:()=>l});var s=n(47313),a=n(35179),i=n(46417);const o=t=>{let{network:e}=t;const n={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:a.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:s,color:o}=n[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,i.jsx)("div",{className:s,style:{color:o},"tb-network":e.id,children:(0,i.jsx)("div",{})})},r=t=>{let{ThemeID:e}=t;const{className:n,color:s}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,i.jsx)("div",{className:n,style:{color:s},"tb-network":e})};class l extends s.PureComponent{render(){const{rating:t,network:e,ThemeID:n}=this.props;return(0,i.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,s)=>n?(0,i.jsx)(r,{ThemeID:n},s):(0,i.jsx)(o,{network:e},s))):null})}}},5744:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});var s=n(47313),a=n(40475),i=n(35179),o=n(46417);class r extends s.PureComponent{constructor(){super(...arguments),this.onClickData=t=>e=>{const{item:n,wallID:s,ownerId:o}=this.props;e.stopPropagation(),i.ZQ||(0,a.S5)({type:2,action:2,wall:s,feed:n.feedId,post:n.referenceId?n.referenceId:n.id,owner:o}),(0,a.Fv)("Tagbox","shareUrl","shareUrl",t),window.open(t,"_blank")}}render(){const{share:t,shareClass:e}=this.props;return(0,o.jsxs)("div",{className:"tb_share_wrapper ".concat(e),children:[(0,o.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(i.ZQ?"tb-share-fill":"tb-share"),children:(0,o.jsx)("div",{})}),(0,o.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[t.facebook?(0,o.jsx)("div",{className:"tb_share_icon_list",children:(0,o.jsx)("div",{onClick:this.onClickData(t.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,o.jsx)("div",{})})}):"",t.twitter?(0,o.jsx)("div",{className:"tb_share_icon_list",children:(0,o.jsx)("div",{onClick:this.onClickData(t.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,o.jsx)("div",{})})}):"",t.linkedin?(0,o.jsx)("div",{className:"tb_share_icon_list",children:(0,o.jsx)("div",{onClick:this.onClickData(t.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,o.jsx)("div",{})})}):""]})]})}}},32675:(t,e,n)=>{"use strict";n.d(e,{Z:()=>c});var s=n(47313),a=(n(35179),n(17739)),i=n(46417);const o=(t,e,n)=>1==t?"https://twitter.com/intent/favorite?tweet_id=".concat((0,a.ok)(e)):n,r=(t,e,n)=>1==t?"https://twitter.com/intent/tweet?in_reply_to=".concat((0,a.ok)(e)):n,l=t=>{let{arialbl:e,hrefClick:n,Icon:s,count:o}=t;return(0,i.jsx)("div",{className:"tb_social_action__list",children:(0,i.jsxs)("div",{onClick:t=>{t.stopPropagation(),window.open(n,"_blank")},className:"tb_social_action__ico_wrap",children:[(0,i.jsx)("div",{className:"tb_social_action_ico__ tb__icon tb-".concat(s),children:" "}),o>0?(0,i.jsx)("div",{className:"tb_social_action_counts__",children:(0,a.sy)(o)}):""]})})};class c extends s.PureComponent{render(){const{itemData:t,ThemeRule:e,actionClass:n,ThemeID:s}=this.props,c={color:3===s?1===e.iconType?e.iconColor:t.network.color:e.fontColor},d=t.network.id,_=3===d||10===d||7===d?"like":"heart",h=!![1,2,3,7,8,9,10,18].includes(d),u=![29,19].includes(d),m=t.network.name?t.network.name:"";return(0,i.jsx)(i.Fragment,{children:29!==d&&26!==d&&23!==d&&6!==d&&5!==d&&11!==d&&12!==d&&15!==d&&20!==d&&21!==d?(0,i.jsx)("div",{className:n,children:(0,i.jsxs)("div",{className:"tb_social_action__",children:[h?(0,i.jsx)(l,{arialbl:m,hrefClick:o(d,t.postId,t.link),Icon:_,iconColorStyle:c,count:t.like_count}):null,u?(0,i.jsx)(l,{arialbl:m,hrefClick:r(d,t.postId,t.link),Icon:"comment",iconColorStyle:c,count:t.comment_count}):null,1===d?(0,i.jsx)(l,{arialbl:m,hrefClick:"https://twitter.com/intent/retweet?tweet_id=".concat((0,a.ok)(t.postId)),Icon:"retweet",iconColorStyle:c,count:t.comment_count}):null,(0,i.jsx)(l,{arialbl:m,hrefClick:t.link,Icon:"eye",iconColorStyle:c,count:0})]})}):""})}}},55790:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});var s=n(47313),a=n(17739),i=n(46417);const o=t=>{const{postTime:e,timeClass:n}=t;return(0,i.jsx)("div",{className:n,children:(0,a.Sy)(e)})},r=(0,s.memo)(o)},12785:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>C});var s=n(47313),a=n(34862),i=n(43411),o=n(11774),r=n(17739),l=n(35179),c=n(89239),d=n(55790),_=n(25810),h=n(46417);const u=t=>{let{author:e,personalization:n,postTime:s,network:a,ThemeRule:i,font:o,mediaType:r,ownerId:u}=t;const m=!(!n.postAuthor||e.isInstaUser),p=!(!n.postAuthor||!n.postTime||e.isInstaUser);return(0,h.jsxs)("div",{className:"tb_rc_author_wrapper",children:[(0,h.jsxs)("div",{className:"tb_rc_author",children:[m?(0,h.jsx)(c.default,{network:a,author:e,authorClass:"tb_rc_author_profile"},e.username):"",(0,h.jsxs)("div",{className:"tb_rc_author_info",children:[m?(0,h.jsx)("div",{className:"tb_rc_authorname",children:e.name}):"",(0,h.jsxs)("div",{className:"tb_rc_post_info",children:[m?(0,h.jsx)("div",{className:"tb_rc_username",children:e.username&&e.username.length>0?"@".concat(e.username):""}):"",p?(0,h.jsx)("div",{className:"tb_rc_seprator",children:" "}):"",n.postTime?(0,h.jsx)(d.default,{postTime:s,timeClass:"tb_rc_time tb-cTBfont-".concat(i.font_varient),authorColor:i.authorColor}):""]})]})]}),r&&a.id||l.ZQ?(0,h.jsx)("div",{className:"tb_rc_social_",children:(0,h.jsx)(_.default,{networkClass:"tb_rc_social_ico",network:a,isDefault:1===i.iconType,ThemeRule:i})}):null]})};var m=n(62245),p=n(5744),b=n(7138),g=n(90905),x=n(32675);const w=l.ZQ?null:200;class f extends s.PureComponent{constructor(t){super(t),this.contentRef=t=>{this.setState({height:t})},this.contentRefHidden=t=>{this.setState({hiddenHeight:t})},this.toggleExpand=t=>{t.stopPropagation(),this.setState({isExpanded:!this.state.isExpanded})},this.state={isExpanded:!1,hiddenHeight:0,height:0},this.toggleExpand=this.toggleExpand.bind(this)}render(){const{itemData:t,personalization:e,adjustWidth:n,ThemeRule:s,clickToShowPopUp:a,itemIndex:i,wallID:o,ownerId:c,onClickToCTA:d,wall:f,languageSetting:v}=this.props,{isExpanded:j,hiddenHeight:k,height:C}=this.state,N=1!==t.type,T=t.rating>0,S=t.rating>0||(0,r.mD)(54)?"tb_rc_rating_content":"tb_rc_content",y=1===t.type&&e.textDecorate?"tb_rc_text_decoration tb_rc_text_post":"",I=!!(t.cta&&Object.keys(t.cta).length>0&&t.cta.status),D=e.trimcontent?(0,r.Sv)(t.content,w):t.content,P=k>C;return(0,h.jsx)("div",{className:"tb_rc_post_wrapper","data-id":t.id,style:{width:"".concat(1==t.highlight?2*n:n,"%"),padding:e.padding/2},"tb-network":t.network.icon,"post-id":t.referenceId?t.referenceId:t.id,"feed-id":t.feedId,"tab-index":0,"area-label":D,role:"article",children:(0,h.jsx)("div",{className:"tb_rc_post_wrap_in ".concat(l.ZQ?"te_mc_post_wrap_in":""),children:(0,h.jsxs)("div",{className:"tb_rc_post_in",onClick:a(i,t),children:[(0,h.jsxs)("div",{className:"tb_rc_post_media_wrapp",children:[l.ZQ||N||!(0,r.mD)(20)?null:(0,h.jsxs)("div",{className:"tb_rc_social_top_",children:[" ",(0,h.jsx)(_.default,{networkClass:"tb_rc_social_center_ico",network:t.network,isDefault:1===s.iconType,ThemeRule:s})," "]}),t.share.status?(0,h.jsx)(p.Z,{share:t.share,shareClass:"tb_rc_share_container",item:t,wallID:o,ownerId:c}):null]}),(0,h.jsxs)("div",{className:"tb_rc_contant_wrapper",children:[(0,h.jsxs)("div",{className:"tb_rc_content_wrap ".concat((0,r.mD)(52)?"tb_rc_content_wrap_fixed":""),style:{textAlign:s.textAlignment},children:[T?(0,h.jsxs)("div",{className:"tb_rc_rating__ ".concat(29===t.network.id?"tb_rc_onsite_rating__":""),children:[(0,h.jsx)(g.Z,{rating:t.rating,network:t.network})," "]}):null,I&&!l.ZQ?(0,h.jsxs)("div",{className:"tb_rc_post_cta",children:[(0,h.jsx)(b.Z,{ctaClass:"tb_rc_post_cta_btn",cta:t.cta,item:t,onClickToCTA:d})," "]}):null,s.hideContent&&N?null:(0,h.jsxs)("div",{className:"tb_rc_content_in",children:[(0,h.jsx)("div",{className:"tb_rc_rating_content_hidden",children:(0,h.jsx)(m.default,{item:t,contentClass:"".concat(S," ").concat(y),content:D,font:s,ThemeRule:s,personalization:e,contentTitle:t.contentTitle,contentRefCallBack:this.contentRefHidden,isReadMore:!0})}),(0,h.jsx)(m.default,{item:t,contentClass:"".concat(S," ").concat(y),content:D,font:s,ThemeRule:s,personalization:e,contentTitle:t.contentTitle,contentRefCallBack:this.contentRef,maxLines:j?"":s.lineTrim,isReadMore:!0}),s.lineTrim>0&&P?(0,h.jsx)("div",{className:"tb_read_more_",onClick:this.toggleExpand,languageSetting:v,children:j?v.showLess:v.readMore}):null]})]}),I&&l.ZQ?(0,h.jsxs)("div",{className:"tb_rc_post_cta",children:[(0,h.jsx)(b.Z,{ctaClass:"tb_rc_post_cta_btn",cta:t.cta,item:t,onClickToCTA:d})," "]}):null,(0,h.jsx)(u,{ownerId:c,mediaType:N,postTime:t.createdAt,author:t.author,network:t.network,font:s,personalization:e,ThemeRule:s})]}),s.socialAction&&!(0,r.mD)(52)?(0,h.jsx)(x.Z,{itemData:t,ThemeRule:s,ThemeID:e.widgetTheme,actionClass:"tb_rc_social_action__ ".concat(l.ZQ?"tb_rc_social_action_bg":"")}):null]})})})}}const v=f;var j=n(40475);n(37210);class k extends s.Component{constructor(t){super(t),this.state={windowWidth:document.getElementById(r.u$)&&document.getElementById(r.u$).clientWidth?document.getElementById(r.u$).clientWidth:window.innerWidth},this.onScreenLoad=()=>{const{renderId:t}=this.props.renderId;this.setState({windowWidth:t?document.getElementById(t).clientWidth:document.getElementById(r.u$)&&document.getElementById(r.u$).clientWidth?document.getElementById(r.u$).clientWidth:window.innerWidth})},this.requestData=()=>{const{appendData:t,wall:e,preRender:n,hasMoreData:s,getDataNextSteps:a}=this.props;s&&a(e.Wall.id,Math.floor(Date.now()/1e3),e.ThemeRule.numberOfPosts,t.networkID,t.after,n,t.heightEvent)},this.reScrolled=()=>{setTimeout((()=>{let t=document.querySelector(".splide__list"),e=document.querySelector(".splide__slide").offsetWidth;const n=document.querySelectorAll(".splide__slide.is-visible").length,s=document.querySelector(".splide__slide.is-active.is-visible").getAttribute("aria-label").substring(0,2),a=Number(s)+(n-1)+n;a>0?(t.style.transition="0s ease",t.style.transform="translateX(-".concat(a*e,"px)")):t.style.transform="translateX(0px)"}),200)},this.autoScrollSlider=(t,e,n,s)=>{const{wall:a}=this.props;if(1==a.Personalization.autoScrollStatus){const e=l.ZQ?t._o.perPage+t.index:t.index;t.length-e===(l.ZQ?1:t._o.perPage)&&this.requestData()}},this.inputRefs={}}componentWillMount(){this.onScreenLoad()}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach((t=>{t.removeAttribute("role")}))}),100);const{postData:t}=this.props;if(t&&1==t.length){let n=document.querySelector(".tb_rc_arrow_left__"),s=document.querySelector(".tb_rc_arrow_right__");function a(){setTimeout((()=>{let t=document.querySelector(".splide__list");null!=t&&(t.style.transform="translateX(0)")}),100)}n&&s&&(document.querySelector(".tb_rc_arrow_left__").style="display:none",document.querySelector(".tb_rc_arrow_right__").style="display:none"),document.body.addEventListener("click",(function(){a()})),a(),window.addEventListener("resize",a)}else window.addEventListener("resize",(()=>{this.onScreenLoad()}));let e=document.querySelector("#kt_aside_toggle");null!=e&&e.addEventListener("click",this.reScrolled)}componentDidUpdate(){const t=Object.values(this.inputRefs)[0],{postData:e,completeDataObject:n,onClickPopUpSlider:s,parentID:a}=this.props;if(t&&Object.values(t)[5].length>0){Object.values(t)[5].map(((t,i)=>{if(t.classList){const i=String(t.classList.value).split(" ").filter((t=>String(t).includes("tb_")));var o=i[0];String(i[0]).includes("tb_")&&(o=String(i[0]).replace("tb_",""));const r=e.findIndex((t=>t==o));let l=document.querySelectorAll(".tb_rc_post_container #".concat(t.id));for(let t=0;t<l.length;t++){let e=l[t],i=e.getAttribute("p_id");String(a)===String(i)&&e.addEventListener("click",(t=>{t.preventDefault();const e=n[o];s(r,e)}))}}}))}}render(){var t;const{postData:e,completeDataObject:n,wall:s,clickToShowPopUp:i,hasMoreData:r,onClickToCTA:c,parentID:d,languageSetting:_}=this.props,u=d,{windowWidth:m}=this.state,p=s.ThemeRule.numberOfCoumn,b=s.ThemeRule.mobileColumn,g=s.ThemeRule.slidePost,x=s.ThemeRule.slideDuration,w=s.Personalization.autoScrollStatus,f=1===s.Personalization.trimcontent,j=!!(m<768||a.tq),k=e&&e.length?j?1:e.length>3?3:e.length:3,C=e&&e.length?j?1:e.length>3?3:e.length:3;j||1===w||e.length;const N=l.ZQ?3:5,T=l.ZQ&&void 0!==(null===(t=s.Personalization)||void 0===t?void 0:t.clonePost)&&0===s.Personalization.clonePost?{clones:0}:{},S=1!=w?!(Object.keys(T).length>0)&&"slide":"slide",y={...T,type:1!==w&&S,role:"article",label:"social widget",rewind:!0,speed:1e3,loop:!0,interval:1===g?1e3*x:5e3,perPage:p>0?p:j?1:e.length>N?N:e.length,gap:0,perMove:!!l.ZQ&&1,autoplay:1===g,padding:"0",pagination:!1,arrows:!!j||e.length>(p>0?p:C),fixedHeight:f,breakpoints:{560:{perPage:b>0?b:1,perMove:b>0?b:1,arrows:e.length>(b>0?b:1)},767:{perPage:p>0?p-3<1?p:p-3:k,arrows:e.length>(p>0?p-3<1?p:p-3:k)},991:{perPage:p>0?p-4<1?p:p-4:k,arrows:e.length>(p>0?p-4<1?p:p-4:k)},1200:{perPage:p>0?p-1==0?p:p-1:k,arrows:e.length>(p>0?p-1==0?p:p-1:k)},1600:{perPage:p>0?p:C,arrows:e.length>(p>0?p:C)}}};return(0,h.jsx)(h.Fragment,{children:""!=d?(0,h.jsx)("div",{className:"tb_rc_post_container",ref:this.sliderHeight,children:(0,h.jsxs)(o.tv,{hasTrack:!1,className:"tb_rc_post_slider ".concat(f?"tb_rc_fixed_height":""," ").concat(l.ZQ?"tb_rc_fixed_height_te":""),options:y,ref:t=>this.inputRefs[u]=t,onMove:this.autoScrollSlider,children:[(0,h.jsx)(o.Gj,{children:e&&e.length>0&&e.map(((t,e)=>{const a=n[t];return(0,h.jsx)(o.jw,{p_id:d,className:"tb_".concat(a.id),children:(0,h.jsx)(v,{ownerId:s.Wall.owner,itemData:a,itemIndex:e,personalization:s.Personalization,ThemeRule:s.ThemeRule,clickToShowPopUp:i,wallID:s.Wall.id,onClickToCTA:c,wall:s,languageSetting:_})},e)}))}),(0,h.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_rc_arrow_wrapper_",role:"navigation","aria-label":"Slider Navigation Wrapper",children:[(0,h.jsx)("div",{role:"navigation",className:"tb_rc_arrow splide__arrow splide__arrow--prev tb_rc_arrow_left__ tb__icon tb-arrow-left-alt","aria-labelledby":"Navigation Previous Slide",children:" "}),(0,h.jsx)("div",{role:"navigation",className:"tb_rc_arrow splide__arrow splide__arrow--next tb_rc_arrow_right__ tb__icon tb-arrow-right-alt","aria-labelledby":"Navigation Next Slide",children:" "})]})]})}):null})}}const C=(0,s.memo)((0,i.$j)((t=>({})),(t=>({getDataNextSteps:(e,n,s,a,i,o,r,l)=>t((0,j.Sx)(e,n,s,a,i,o,r,l))})))(k))},37210:()=>{},50247:()=>{}}]);