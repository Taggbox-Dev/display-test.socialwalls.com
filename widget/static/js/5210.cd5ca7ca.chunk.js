(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5210,8342,905,5810,9239],{95289:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>_});a(47313);var s=a(89239),n=a(62245),o=a(90905),r=a(25810),l=a(17739),c=a(35179),i=a(46417);const h=c.ZQ?null:200,_=t=>{let{itemData:e,personalization:a,ThemeRule:c,toggleDivs:_}=t;const d=e.rating>0?"tb_bt_rating_content":"tb_bt_content",b=1===e.type&&a.textDecorate?"tb_bt_text_decoration tb_bt_text_post":"",g=a.trimcontent?(0,l.Sv)(e.content,h):e.content,u=e.author.username&&e.author.username.length>0?"@".concat(e.author.username):"",m={color:c.authorColor},x=!!(e.ugc_products&&e.ugc_products.length>0),f=!(!x||0!==e.hotspot),p=!(!e.hotspot||!x);return(0,i.jsxs)("div",{id:"tb-bt-post-".concat(e.id),className:"tb_bt_post_in","tb-network":e.network.id,"tb-product":f?1:p?2:0,children:[(0,i.jsx)("div",{className:"tb_bt_close_btn",onClick:_,children:(0,i.jsx)("div",{className:"tb_bt_close_ico tb__icon tb-close-circle-line"})}),(0,i.jsx)(s.default,{author:e.author,network:e.network,authorClass:"tb_bt_author_profile"}),(0,i.jsxs)("div",{className:"tb_bt_post_info",children:[(0,i.jsxs)("div",{className:"tb_bt_author_info",children:[(0,i.jsx)("div",{className:"tb_bt_authorname",style:m,children:e.author.name}),(0,i.jsx)("div",{className:"tb_bt_username",style:m,children:u})]}),(0,i.jsx)("div",{className:"tb_bt_contant_wrapper",children:(0,i.jsx)(n.default,{contentClass:"".concat(d," ").concat(b),item:e,content:g,font:c,ThemeRule:c,personalization:a,contentTitle:e.contentTitle,textAlign:"left"})}),(0,i.jsx)("div",{className:"tb_bt_post_media_wrapp","aria-label":"Rating",role:"status",children:(0,i.jsxs)("div",{className:"tb_bt_rating__",children:[(0,i.jsx)(o.default,{rating:e.rating,network:e.network})," "]})}),(0,i.jsxs)("div",{className:"tb_bt_social_",children:[(0,i.jsx)(r.default,{networkClass:"tb_bt_social_ico",network:e.network,isDefault:1===c.iconType,ThemeRule:c}),(0,i.jsx)("div",{className:"tb_bt_network_name",children:e.network.name})]})]})]})}},89239:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=a(47313),n=a(46417);const o=(0,s.lazy)((()=>a.e(8935).then(a.bind(a,98935))));class r extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:a}=this.props;return(0,n.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),"aria-label":"author image",alt:t.name,width:44,height:44,onError:e=>{const s="#ffffff"==a.color?"#000":a.color;e.target.src=t.errorPic?t.errorPic:"https://ui-avatars.com/api/?name=".concat(t.name.replace(/\s/g,""),"&background=").concat(String(null===a.id?"#000":s).replace("#",""),"&color=fff&length=1"),e.target.alt=t.name}}):(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:(0,n.jsx)(o,{authorClass:e,username:t.name,network:a,color:null===a.id?"#000":a.color,errorPic:t.errorPic})})},Math.random())}}},25810:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>l});var s=a(47313),n=a(35179),o=a(46417);const r=s.lazy((()=>a.e(5867).then(a.bind(a,95867))));class l extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a,isDefault:l,Personalization:c}=this.props,i=!!l&&(7!==t.id&&4!==t.id&&36!==t.id),h=n.ZQ&&36==t.id?"tagembed":t.icon;return i?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(h.replace(/fa-/g,"")),"aria-label":"post network ".concat((null===t||void 0===t?void 0:t.name)||""),children:(0,o.jsx)("div",{})}):(0,o.jsxs)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(r,{network:t,networkClass:e})]})}}},62245:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>i});var s=a(47313),n=a(16390),o=a(17739),r=a(35179),l=a(30584),c=a(46417);class i extends s.PureComponent{constructor(t){super(t),this.contentRef=s.createRef()}componentDidMount(){setTimeout((()=>{var t,e;if(null!==(t=this.contentRef)&&void 0!==t&&null!==(e=t.current)&&void 0!==e&&e.clientHeight){var a,s;const t=(null===(a=this.contentRef)||void 0===a||null===(s=a.current)||void 0===s?void 0:s.clientHeight)||0;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}}),100)}render(){const{contentClass:t,content:e,ThemeRule:a,font:i,personalization:h,item:_,contentTitle:d,readMore:b,maxLength:g,textAlign:u,maxLines:m,isReadMore:x}=this.props,f={WebkitLineClamp:m,textAlign:a.textAlignment};let p=20==_.network.id||r.bX&&!r.aL?e:(0,o.Fx)(e);12==_.network.id&&(p=(0,n.ZP)(p));const w="".concat(a.lineTrim?" tb_content_line-".concat(a.lineTrim):""),k="".concat(t," ").concat(x?"":w," tb-cTBfont-").concat(a.font_varient);return(0,c.jsxs)("div",{className:k,ref:this.contentRef,style:f,children:[d?(0,c.jsx)("div",{className:"tb_bold_txt__",children:(0,n.ZP)(d)}):null,(0,c.jsxs)(s.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:[" ",(0,c.jsx)(l.Z,{data:_,content:p,Personalization:h,ThemeRule:a})," "]})]})}}},30584:(t,e,a)=>{"use strict";a.d(e,{Z:()=>h});var s=a(47313),n=a(91523),o=a(16390),r=a(46417);const l=a(77560),c=(t,e)=>(0,r.jsx)(n.default,{style:e&&[66,70].includes(null===e||void 0===e?void 0:e.themeId)?{width:e.fontSize,height:e.fontSize}:null,children:(0,o.ZP)(t)}),i=t=>{let{data:e,content:a,Personalization:s,ThemeRule:n}=t;const i={color:s.hashtag_color,fontWeight:"bold",backgroundColor:1==s.hashtag_background_status?s.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,r.jsx)(r.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,o.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?c(window.slackdown.parse(l(a,/#(\w+)/g,((t,e)=>(0,r.jsxs)("div",{className:"tb_text_hashtag",style:i,children:["#",t]}))),e.slackMember),n):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?c(window.slackdown.parse(l(a,e.hash.hashString,((t,e)=>(0,r.jsx)("div",{className:"tb_text_hashtag",style:i,children:t}))),e.slackMember),n):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?c(window.slackdown.parse(l(a,/#(\w+)/g,((t,a)=>(0,r.jsxs)("div",{className:"tb_text_hashtag",style:i,children:["#",t]},"".concat(e.id,"_").concat(a)))),e.slackMember),n):c(window.slackdown.parse(a,e.slackMember),n)}):(0,r.jsx)(r.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,o.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?l((0,o.ZP)(a),/#(\w+)/g,((t,e)=>(0,r.jsxs)("div",{className:"tb_text_hashtag",style:i,children:["#",t]}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?l((0,o.ZP)(a),e.hash.hashString,((t,e)=>(0,r.jsx)("strong",{className:"tb_text_hashtag",style:i,children:t}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?l((0,o.ZP)(a),/#(\w+)/g,((t,a)=>(0,r.jsxs)("div",{className:"tb_text_hashtag",style:i,children:["#",t]},"".concat(e.id,"_").concat(a)))):c(a,n)})},h=(0,s.memo)(i)},90905:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>c});var s=a(47313),n=a(35179),o=a(46417);const r=t=>{let{network:e}=t;const a={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:n.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:n.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:s,color:r}=a[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,o.jsx)("div",{className:s,style:{color:r},"tb-network":e.id,children:(0,o.jsx)("div",{})})},l=t=>{let{ThemeID:e}=t;const{className:a,color:s}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,o.jsx)("div",{className:a,style:{color:s},"tb-network":e})};class c extends s.PureComponent{render(){const{rating:t,network:e,ThemeID:a}=this.props;return(0,o.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,s)=>a?(0,o.jsx)(l,{ThemeID:a},s):(0,o.jsx)(r,{network:e},s))):null})}}},50247:()=>{}}]);