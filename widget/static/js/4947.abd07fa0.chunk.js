(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4947,8342,9239,5790],{5638:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>C});var a=s(47313),o=s(43411),n=s(11774),r=(s(44084),s(89239)),i=s(55790),l=s(25810),c=s(35179),_=s(46417);const d=e=>{let{author:t,personalization:s,postTime:a,network:o,ThemeRule:n,font:d}=e;const h=!(!s.postAuthor||t.isInstaUser),m=!(!s.postAuthor||!s.postTime||t.isInstaUser);return(0,_.jsxs)("div",{className:"tb_c_m_author_wrapper ".concat(c.ZQ?"tb_c_m_author_wrapper_top":""),children:[(0,_.jsxs)("div",{className:"tb_c_m_author",children:[h?(0,_.jsx)(r.default,{network:o,author:t,authorClass:"tb_c_m_author_profile"}):"",(0,_.jsxs)("div",{className:"tb_c_m_author_info",children:[h?(0,_.jsx)("div",{className:"tb_c_m_authorname",children:t.name}):"",(0,_.jsxs)("div",{className:"tb_c_m_post_info",children:[h?(0,_.jsx)("div",{className:"tb_c_m_username",children:"@".concat(t.username)}):"",m?(0,_.jsx)("div",{className:"tb_c_m_seprator",children:" "}):"",s.postTime?(0,_.jsx)(i.default,{postTime:a,timeClass:"tb_c_m_time tb-cTBfont-".concat(n.font_varient),authorColor:n.authorColor}):""]})]})]}),c.ZQ?null:(0,_.jsx)("div",{className:"tb_c_m_social_",children:(0,_.jsx)(l.default,{networkClass:"tb_c_m_social__ico",network:o,isDefault:1===n.iconType,ThemeRule:n})})]})};var h=s(81349),m=s(84261),p=s(64442);const u=a.lazy((()=>s.e(695).then(s.bind(s,10695)))),w=e=>{let{itemData:t,wallID:s,ThemeID:o,ThemeRule:n,ownerId:r,wall:i}=e;const l=(3===t.type||5===t.type)&&1==i.ThemeRule.autoPlay;!c.ig||t.hotspot;return(0,_.jsxs)("div",{className:"tb_c_m_media_wrap",children:[c.aL?(0,_.jsx)(a.Suspense,{fallback:(0,_.jsx)(_.Fragment,{}),children:(0,_.jsx)(u,{likeClass:"tb_c_m_like",postId:t.id,wallID:s,UserDetail:i.UserDetail})}):null,c.aL?(0,_.jsx)(h.Z,{itemData:t,IconClass:"tb_c_m_media_icon",show:c.aL}):null,l?(0,_.jsx)(p.Z,{VideoClass:"tb_c_m_video",data:t,wallID:s,themeID:i.Personalization.widgetTheme,ownerId:r,size:1,isCover:!0,muted:!0,autoPlay:l,handleVideoEnded:()=>{}}):(0,_.jsx)(m.default,{ImageClass:"tb_c_m_image",data:t,wallID:s,themeID:i.Personalization.widgetTheme,ownerId:r,size:1,ThemeRule:n,hotspot:!0})]})};var b=s(62245),x=s(17739),g=s(11502),j=s(5744);const v=c.ZQ?null:200,f=e=>{let{itemData:t,personalization:s,ThemeRule:a,clickToShowPopUp:o,itemIndex:n,wallID:r,ownerId:i,postSizeInPx:h,wall:m,isPadding:p,isRowCount:u}=e;const f=!!(t.ugc_products&&t.ugc_products.length>0),k=!(!f||0!==t.hotspot),T=(""===a.postHover||a.postHover,2===t.type||3===t.type||4===t.type||5===t.type),C=s.trimcontent?(0,x.Sv)(t.content,v):t.content,D=h.adjustWidth<250,P=!(!t.hotspot||!f),I=(!c.ig||t.hotspot,!a.hideContent),N=!k||0==I,R=!!k&&0!=I,S=0==a.postHover&&c.ig?"light":"dark",y=(c.Jx,c.Jx&&a.backgroundColor,c.bX?{padding:a.spacing}:null);return(0,_.jsx)("div",{id:"tb-hs-post-".concat(t.id),className:"tb_c_m_post_wrapper".concat(D?" tb_c_m_post_wrapper2x":""),"tb-network":t.network.id,"tb-product":k?1:P?2:0,style:{padding:s.padding/2},children:(0,_.jsx)("div",{className:"tb_c_m_post_in".concat(c.ig?" tb_c_m_post_ani":""),onClick:o(n,t),style:y,children:(0,_.jsxs)("div",{className:"tb_c_m_post_media_wrapp",children:[T?(0,_.jsx)(w,{itemData:t,wallID:r,wall:m,ownerId:i}):"",c.P2?(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"tb_c_m_post_details",children:[(0,_.jsxs)("div",{className:"tb_c_m_contant_wrapper",children:[c.ig?(0,_.jsx)("div",{className:"tb_c_m_social_",children:(0,_.jsx)(l.default,{networkClass:"tb_c_m_social__ico",network:t.network,isDefault:1===a.iconType,ThemeRule:a,Personalization:s})}):null,R?(0,_.jsx)(g.Z,{ThemeRule:a,btnClass:"tb_c_m_btn_wrap"}):null,N||1==t.type?(0,_.jsx)(b.default,{contentClass:"tb_c_m_content",item:t,content:C,font:a,ThemeRule:a,personalization:s,contentTitle:t.contentTitle,isNetwork:!0}):null]}),c.ig?null:(0,_.jsx)(d,{ownerId:i,postTime:t.createdAt,author:t.author,network:t.network,font:a,personalization:s,ThemeRule:a}),t.share.status?(0,_.jsx)(j.Z,{share:t.share,shareClass:"tb_c_m_share_container ".concat(c.ZQ?"tb_c_m_share_container_te":""),item:t,wallID:r,ownerId:i}):null]})}):null]})})})};var k=s(40475);s(37210);class T extends a.PureComponent{constructor(e){super(e),this.requestData=()=>{const{appendData:e,wall:t,preRender:s,hasMoreData:a,getDataNextSteps:o}=this.props;a&&o(t.Wall.id,Math.floor(Date.now()/1e3),t.ThemeRule.numberOfPosts,e.networkID,e.after,s,e.heightEvent)},this.autoScrollSlider=(e,t,s,a)=>{const{wall:o}=this.props;if(1==o.Personalization.autoScrollStatus||c.ig){const t=c.ZQ?e._o.perPage+e.index:e.index;e.length-t===(c.ZQ?1:e._o.perPage)&&this.requestData()}},this.state={parent_id:"",postData:[]},this.inputRefs={}}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((e,t)=>{e.removeAttribute("role")}))}),100);const{postData:e}=this.props;this.setState({postData:e})}render(){var e;const{postData:t,completeDataObject:s,wall:a,clickToShowPopUp:o,onClickToCTA:r,postSizeInPx:i,parentID:l,keyRender:d,loaderData:h}=this.props,m=l,p=a.ThemeRule.numberOfCoumn,u=a.ThemeRule.mobileColumn,w=a.ThemeRule.slidePost,b=a.ThemeRule.slideDuration,x=a.Personalization.autoScrollStatus,g=a.ThemeRule.multiRow&&0!==a.ThemeRule.multiRow?a.ThemeRule.multiRow:2;var j=[];let v=!0;const k=(c.ZQ||c.ig)&&void 0!==(null===(e=a.Personalization)||void 0===e?void 0:e.clonePost)&&0===a.Personalization.clonePost?{clones:0}:{};for(var T=0,C=t.length;T<C;)j.push(t.slice(T,T+=g));c.ig&&k&&0==Object.keys(k).length&&(16677==a.User.id?"product"===window.dataFilterType&&(v=!!(j&&j.length>=5)):j=j.length<12?Array(15-j.length).fill(j).flat():j);const D=1!=x?!(Object.keys(k).length>0)&&(c.ig?"slide":"loop"):c.ig?"slide":"loop",P={...k,type:1!==x&&D,rewind:!0,speed:1e3,interval:1===w?1e3*parseInt(b):5e3,perPage:p>0?p:c.ZQ?3:6,perMove:1,gap:0,autoplay:1===w,padding:0,pagination:!1,arrows:!0,breakpoints:{560:{perPage:u>0?u:1},767:{perPage:u>0?u:2},991:{perPage:u>0?u:3},1200:{perPage:p>0?p:4},1400:{perPage:p>0?p:5},1600:{perPage:p>0?p:c.ZQ?3:6}}};return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)("div",{className:"tb_c_m_post_container",children:(0,_.jsxs)(n.tv,{hasTrack:!1,className:"tb_c_m_post_slider",options:P,ref:e=>this.inputRefs[m]=e,onMove:this.autoScrollSlider,children:[(0,_.jsx)(n.Gj,{children:(a.ThemeRule.multiRow>1&&1!==j.length&&j.length%2!==0?j.pop():j)&&j&&j.length>0&&j.map(((e,t)=>(0,_.jsx)(n.jw,{className:"tb_".concat(t),idd:l,children:(0,_.jsx)("div",{className:"tb_c_m_col_wrap",children:e.map(((e,t)=>{const n=s[e];return(0,_.jsx)(f,{parentID:l,ownerId:a.Wall.owner,wall:a,itemData:n,itemIndex:t,personalization:a.Personalization,ThemeRule:a.ThemeRule,clickToShowPopUp:o,wallID:a.Wall.id,onClickToCTA:r,postSizeInPx:i},t)}))})},"tb_".concat(t,"_").concat(t))))}),(0,_.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_c_m_arrow_wrapper_",children:[(0,_.jsx)("div",{className:"tb_c_m_arrow splide__arrow splide__arrow--prev tb_c_m_arrow tb_c_m_arrow_left__ tb__icon tb-arrow-left-alt",children:(0,_.jsx)("div",{})}),(0,_.jsx)("div",{className:"tb_c_m_arrow splide__arrow splide__arrow--next  tb_c_m_arrow_right__ tb__icon tb-arrow-right-alt ".concat(h.isShowMoreLoading?"tb_a_spinner":""),onClick:c.ig?e=>this.requestData():null,children:(0,_.jsx)("div",{})})]})]})})})}}const C=(0,o.$j)((e=>({loaderData:e.loaderData})),(e=>({getDataNextSteps:(t,s,a,o,n,r,i,l)=>e((0,k.Sx)(t,s,a,o,n,r,i,l))})))(T)},89239:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var a=s(47313),o=s(17739),n=s(98935),r=s(46417);class i extends a.PureComponent{constructor(e){super(e),this.state={isAuthorImagevalid:!0}}render(){const{author:e,authorClass:t,network:s}=this.props;return(0,r.jsx)("div",{className:t,children:this.state.isAuthorImagevalid?(0,r.jsx)("img",{className:"".concat(t,"__"),src:e.picture&&String(e.picture).includes("author.png")?" ":e.picture.replace(/[ ]+/g,""),alt:(0,o.P)(e.picture),width:44,height:44,onError:e=>{this.setState({isAuthorImagevalid:!1})}}):(0,r.jsx)(n.Z,{authorClass:t,username:e.name,network:s,color:null===s.id?"#000":s.color,errorPic:e.errorPic})},Math.random())}}},98935:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var a=s(47313),o=s(46417);const n=e=>{let{username:t,network:s,authorClass:a,errorPic:n}=e;const r="#ffffff"==s.color?"#000":s.color;return(0,o.jsx)("img",{className:"".concat(a,"__"),src:n||"https://ui-avatars.com/api/?name=".concat(t.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":r).replace("#",""),"&color=fff&length=1"),alt:t,width:45,height:45})},r=(0,a.memo)(n)},62245:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var a=s(47313),o=s(16390),n=s(17739),r=s(46417);const i=a.lazy((()=>Promise.all([s.e(622),s.e(584)]).then(s.bind(s,30584))));class l extends a.PureComponent{constructor(e){super(e),this.contentRef=a.createRef()}componentDidMount(){setTimeout((()=>{const e=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(e)}),100)}render(){const{contentClass:e,content:t,ThemeRule:s,font:l,personalization:c,item:_,contentTitle:d,readMore:h,maxLength:m,textAlign:p,maxLines:u,isReadMore:w}=this.props,b={WebkitLineClamp:u,textAlign:s.textAlignment};let x=20==_.network.id?t:(0,n.Fx)(t);12==_.network.id&&(x=(0,o.ZP)(x));const g="".concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):""),j="".concat(e," ").concat(w?"":g);return(0,r.jsxs)("div",{className:j,ref:this.contentRef,style:b,children:[d?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,o.ZP)(d)}):null,(0,r.jsxs)(a.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[" ",(0,r.jsx)(i,{data:_,content:x,Personalization:c})]})]})}}},5744:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var a=s(47313),o=s(40475),n=s(35179),r=s(46417);class i extends a.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{item:s,wallID:a,ownerId:r}=this.props;t.stopPropagation(),n.ZQ||(0,o.S5)({type:2,action:2,wall:a,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:r}),(0,o.Fv)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{share:e,shareClass:t}=this.props;return(0,r.jsxs)("div",{className:"tb_share_wrapper ".concat(t),children:[(0,r.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(n.ZQ?"tb-share-fill":"tb-share"),children:(0,r.jsx)("div",{})}),(0,r.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[e.facebook?(0,r.jsx)("div",{className:"tb_share_icon_list",children:(0,r.jsx)("div",{onClick:this.onClickData(e.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook",children:(0,r.jsx)("div",{})})}):"",e.twitter?(0,r.jsx)("div",{className:"tb_share_icon_list",children:(0,r.jsx)("div",{onClick:this.onClickData(e.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter",children:(0,r.jsx)("div",{})})}):"",e.linkedin?(0,r.jsx)("div",{className:"tb_share_icon_list",children:(0,r.jsx)("div",{onClick:this.onClickData(e.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin",children:(0,r.jsx)("div",{})})}):""]})]})}}},55790:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var a=s(47313),o=s(17739),n=s(46417);const r=e=>{const{postTime:t,timeClass:s}=e;return(0,n.jsx)("div",{className:s,children:(0,o.Sy)(t)})},i=(0,a.memo)(r)},50247:()=>{}}]);