(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5210,8342,9239,5810],{95289:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>_});a(47313);var s=a(89239),o=a(62245),n=a(90905),l=a(25810),r=a(17739),i=a(35179),c=a(46417);const h=i.ZQ?null:200,_=t=>{let{itemData:e,personalization:a,ThemeRule:i,toggleDivs:_}=t;const d=e.rating>0?"tb_bt_rating_content":"tb_bt_content",u=1===e.type&&a.textDecorate?"tb_bt_text_decoration tb_bt_text_post":"",g=a.trimcontent?(0,r.Sv)(e.content,h):e.content,b=e.author.username&&e.author.username.length>0?"@".concat(e.author.username):"",m={color:i.authorColor},v=!!(e.ugc_products&&e.ugc_products.length>0),p=!(!v||0!==e.hotspot),f=!(!e.hotspot||!v);return(0,c.jsxs)("div",{id:"tb-bt-post-".concat(e.id),className:"tb_bt_post_in","tb-network":e.network.id,"tb-product":p?1:f?2:0,children:[(0,c.jsx)("div",{className:"tb_bt_close_btn",onClick:_,children:(0,c.jsx)("div",{className:"tb_bt_close_ico tb__icon tb-close-circle-line"})}),(0,c.jsx)(s.default,{author:e.author,network:e.network,authorClass:"tb_bt_author_profile"}),(0,c.jsxs)("div",{className:"tb_bt_post_info",children:[(0,c.jsxs)("div",{className:"tb_bt_author_info",children:[(0,c.jsx)("div",{className:"tb_bt_authorname",style:m,children:e.author.name}),(0,c.jsx)("div",{className:"tb_bt_username",style:m,children:b})]}),(0,c.jsx)("div",{className:"tb_bt_contant_wrapper",children:(0,c.jsx)(o.default,{contentClass:"".concat(d," ").concat(u),item:e,content:g,font:i,ThemeRule:i,personalization:a,contentTitle:e.contentTitle,textAlign:"left"})}),(0,c.jsx)("div",{className:"tb_bt_post_media_wrapp",children:(0,c.jsxs)("div",{className:"tb_bt_rating__",children:[(0,c.jsx)(n.Z,{rating:e.rating,network:e.network})," "]})}),(0,c.jsxs)("div",{className:"tb_bt_social_",children:[(0,c.jsx)(l.default,{networkClass:"tb_bt_social_ico",network:e.network,isDefault:1===i.iconType,ThemeRule:i}),(0,c.jsx)("div",{className:"tb_bt_network_name",children:e.network.name})]})]})]})}},89239:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=a(47313),o=a(17739),n=a(98935),l=a(46417);class r extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){var t;const{author:e,authorClass:a,network:s}=this.props;return(0,l.jsx)("div",{className:a,children:this.state.isAuthorImagevalid?(0,l.jsx)("img",{className:"".concat(a,"__"),src:null!==e&&void 0!==e&&e.picture&&String(null===e||void 0===e?void 0:e.picture).includes("author.png")?" ":null===e||void 0===e||null===(t=e.picture)||void 0===t?void 0:t.replace(/[ ]+/g,""),alt:(0,o.P)(null===e||void 0===e?void 0:e.picture),width:44,height:44,onError:t=>{var a,o;const n="#ffffff"==s.color?"#000":s.color;t.target.src=e.errorPic?e.errorPic:"https://ui-avatars.com/api/?name=".concat(null===e||void 0===e||null===(a=e.name)||void 0===a?void 0:a.replace(/\s/g,""),"&background=").concat(null===(o=String(null===s.id?"#000":n))||void 0===o?void 0:o.replace("#",""),"&color=fff&length=1"),t.target.alt=e.name}}):(0,l.jsx)(n.Z,{authorClass:a,username:e.name,network:s,color:null===s.id?"#000":s.color,errorPic:e.errorPic})},Math.random())}}},98935:(t,e,a)=>{"use strict";a.d(e,{Z:()=>l});var s=a(47313),o=a(46417);const n=t=>{let{username:e,network:a,authorClass:s,errorPic:n}=t;const l="#ffffff"==a.color?"#000":a.color;return(0,o.jsx)("img",{className:"".concat(s,"__"),src:n||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===a.id?"#000":l).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},l=(0,s.memo)(n)},25810:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>r});var s=a(47313),o=a(35179),n=a(46417);const l=s.lazy((()=>a.e(5867).then(a.bind(a,95867))));class r extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a,isDefault:r,Personalization:i}=this.props,c=!!r&&(7!==(null===t||void 0===t?void 0:t.id)&&4!==(null===t||void 0===t?void 0:t.id)&&36!==(null===t||void 0===t?void 0:t.id)),h=o.ZQ&&36==(null===t||void 0===t?void 0:t.id)?"tagembed":null===t||void 0===t?void 0:t.icon;return c?(0,n.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(h.replace(/fa-/g,"")),children:(0,n.jsx)("div",{})}):(0,n.jsxs)(s.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(l,{network:t,networkClass:e})]})}}},62245:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>c});var s=a(47313),o=a(16390),n=a(17739),l=a(35179),r=a(30584),i=a(46417);class c extends s.PureComponent{constructor(t){super(t),this.contentRef=s.createRef()}componentDidMount(){l.ZQ&&setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){var t,e;const{contentClass:a,content:s,ThemeRule:c,font:h,personalization:_,item:d,contentTitle:u,readMore:g,maxLength:b,textAlign:m,maxLines:v,isReadMore:p}=this.props,f={WebkitLineClamp:v,textAlign:c.textAlignment};let x=20==(null===d||void 0===d||null===(t=d.network)||void 0===t?void 0:t.id)||l.bX&&!l.aL?s:(0,n.Fx)(s);12==(null===d||void 0===d||null===(e=d.network)||void 0===e?void 0:e.id)&&(x=(0,o.ZP)(x));const w="".concat(c.lineTrim?" tb_content_line-".concat(c.lineTrim):""),k="".concat(a," ").concat(p?"":w);return(0,i.jsxs)("div",{className:k,ref:this.contentRef,style:f,children:[u?(0,i.jsx)("div",{className:"tb_bold_txt__",children:(0,o.ZP)(u)}):null,(0,i.jsx)(r.Z,{data:d,content:x,Personalization:_,ThemeRule:c})]})}}},30584:(t,e,a)=>{"use strict";a.d(e,{Z:()=>h});var s=a(47313),o=a(91523),n=a(16390),l=a(46417);const r=a(77560),i=(t,e)=>(0,l.jsx)(o.default,{style:e&&[66,70].includes(null===e||void 0===e?void 0:e.themeId)?{width:e.fontSize,height:e.fontSize}:null,children:(0,n.ZP)(t)}),c=t=>{var e;let{data:a,content:s,Personalization:o,ThemeRule:c}=t;const h={color:o.hashtag_color,fontWeight:"bold",backgroundColor:1==o.hashtag_background_status?o.hashtag_background_color:"transparent"};return 20==(null===a||void 0===a||null===(e=a.network)||void 0===e?void 0:e.id)&&window.slackdown?(0,l.jsx)(l.Fragment,{children:1===o.hashtag_highlight&&0===o.hashtag_feed&&0===o.hashtag_all?(0,n.ZP)(s):1===o.hashtag_highlight&&0===o.hashtag_feed&&1===o.hashtag_all?i(window.slackdown.parse(r(s,/#(\w+)/g,((t,e)=>(0,l.jsxs)("div",{className:"tb_text_hashtag",style:h,children:["#",t]}))),a.slackMember),c):1===o.hashtag_highlight&&1===o.hashtag_feed&&0===o.hashtag_all?i(window.slackdown.parse(r(s,a.hash.hashString,((t,e)=>(0,l.jsx)("div",{className:"tb_text_hashtag",style:h,children:t}))),a.slackMember),c):1===o.hashtag_highlight&&1===o.hashtag_feed&&1===o.hashtag_all?i(window.slackdown.parse(r(s,/#(\w+)/g,((t,e)=>(0,l.jsxs)("div",{className:"tb_text_hashtag",style:h,children:["#",t]},"".concat(a.id,"_").concat(e)))),a.slackMember),c):i(window.slackdown.parse(s,a.slackMember),c)}):(0,l.jsx)(l.Fragment,{children:1===o.hashtag_highlight&&0===o.hashtag_feed&&0===o.hashtag_all?(0,n.ZP)(s):1===o.hashtag_highlight&&0===o.hashtag_feed&&1===o.hashtag_all?r((0,n.ZP)(s),/#(\w+)/g,((t,e)=>(0,l.jsxs)("div",{className:"tb_text_hashtag",style:h,children:["#",t]}))):1===o.hashtag_highlight&&1===o.hashtag_feed&&0===o.hashtag_all?r((0,n.ZP)(s),a.hash.hashString,((t,e)=>(0,l.jsx)("strong",{className:"tb_text_hashtag",style:h,children:t}))):1===o.hashtag_highlight&&1===o.hashtag_feed&&1===o.hashtag_all?r((0,n.ZP)(s),/#(\w+)/g,((t,e)=>(0,l.jsxs)("div",{className:"tb_text_hashtag",style:h,children:["#",t]},"".concat(a.id,"_").concat(e)))):i(s,c)})},h=(0,s.memo)(c)},90905:(t,e,a)=>{"use strict";a.d(e,{Z:()=>i});var s=a(47313),o=a(35179),n=a(46417);const l=t=>{let{network:e}=t;const a={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:o.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:o.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:s,color:l}=a[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,n.jsx)("div",{className:s,style:{color:l},"tb-network":e.id,children:(0,n.jsx)("div",{})})},r=t=>{let{ThemeID:e}=t;const{className:a,color:s}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,n.jsx)("div",{className:a,style:{color:s},"tb-network":e})};class i extends s.PureComponent{render(){const{rating:t,network:e,ThemeID:a}=this.props;return(0,n.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,s)=>a?(0,n.jsx)(r,{ThemeID:a},s):(0,n.jsx)(l,{network:e},s))):null})}}},50247:()=>{}}]);