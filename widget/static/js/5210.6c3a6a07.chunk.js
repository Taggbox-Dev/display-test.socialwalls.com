(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5210,8342,9239,5810],{95289:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>d});s(47313);var a=s(89239),n=s(62245),o=s(90905),r=s(25810),c=s(17739),i=s(35179),l=s(46417);const _=i.ZQ?null:200,d=t=>{let{itemData:e,personalization:s,ThemeRule:i,toggleDivs:d}=t;const b=e.rating>0?"tb_bt_rating_content":"tb_bt_content",u=1===e.type&&s.textDecorate?"tb_bt_text_decoration tb_bt_text_post":"",m=s.trimcontent?(0,c.Sv)(e.content,_):e.content,h=e.author.username&&e.author.username.length>0?"@".concat(e.author.username):"",p={color:i.authorColor},g=!!(e.ugc_products&&e.ugc_products.length>0),x=!(!g||0!==e.hotspot),f=!(!e.hotspot||!g);return(0,l.jsxs)("div",{id:"tb-bt-post-".concat(e.id),className:"tb_bt_post_in","tb-network":e.network.id,"tb-product":x?1:f?2:0,children:[(0,l.jsx)("div",{className:"tb_bt_close_btn",onClick:d,children:(0,l.jsx)("div",{className:"tb_bt_close_ico tb__icon tb-close-circle-line"})}),(0,l.jsx)(a.default,{author:e.author,network:e.network,authorClass:"tb_bt_author_profile"}),(0,l.jsxs)("div",{className:"tb_bt_post_info",children:[(0,l.jsxs)("div",{className:"tb_bt_author_info",children:[(0,l.jsx)("div",{className:"tb_bt_authorname",style:p,children:e.author.name}),(0,l.jsx)("div",{className:"tb_bt_username",style:p,children:h})]}),(0,l.jsx)("div",{className:"tb_bt_contant_wrapper",children:(0,l.jsx)(n.default,{contentClass:"".concat(b," ").concat(u),item:e,content:m,font:i,ThemeRule:i,personalization:s,contentTitle:e.contentTitle,textAlign:"left"})}),(0,l.jsx)("div",{className:"tb_bt_post_media_wrapp",children:(0,l.jsxs)("div",{className:"tb_bt_rating__",children:[(0,l.jsx)(o.Z,{rating:e.rating,network:e.network})," "]})}),(0,l.jsxs)("div",{className:"tb_bt_social_",children:[(0,l.jsx)(r.default,{networkClass:"tb_bt_social_ico",network:e.network,isDefault:1===i.iconType,ThemeRule:i}),(0,l.jsx)("div",{className:"tb_bt_network_name",children:e.network.name})]})]})]})}},89239:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>c});var a=s(47313),n=s(17739),o=s(98935),r=s(46417);class c extends a.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:s}=this.props;return(0,r.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,r.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,n.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,r.jsx)(o.Z,{authorClass:e,username:t.name,network:s,color:null===s.id?"#000":s.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});var a=s(47313),n=s(46417);const o=t=>{let{username:e,network:s,authorClass:a,errorPic:o}=t;const r="#ffffff"==s.color?"#000":s.color;return(0,n.jsx)("img",{className:"".concat(a,"__"),src:o||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":r).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},r=(0,a.memo)(o)},25810:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>c});var a=s(47313),n=s(35179),o=s(46417);const r=a.lazy((()=>s.e(5867).then(s.bind(s,95867))));class c extends a.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,isDefault:c,Personalization:i}=this.props,l=!!c&&(7!==t.id&&4!==t.id&&36!==t.id),_=n.ZQ&&36==t.id?"tagembed":t.icon;return l?(0,o.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(_.replace(/fa-/g,"")),children:(0,o.jsx)("div",{})}):(0,o.jsxs)(a.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(r,{network:t,networkClass:e})]})}}},62245:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>i});var a=s(47313),n=s(16390),o=s(17739),r=s(46417);const c=a.lazy((()=>Promise.all([s.e(622),s.e(584)]).then(s.bind(s,30584))));class i extends a.PureComponent{constructor(t){super(t),this.contentRef=a.createRef()}componentDidMount(){setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:s,font:i,personalization:l,item:_,contentTitle:d,readMore:b,maxLength:u,textAlign:m,maxLines:h,isReadMore:p}=this.props,g={WebkitLineClamp:h,textAlign:s.textAlignment};let x=20==_.network.id?e:(0,o.Fx)(e);12==_.network.id&&(x=(0,n.ZP)(x));const f="".concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):""),j="".concat(t," ").concat(p?"":f);return(0,r.jsxs)("div",{className:j,ref:this.contentRef,style:g,children:[d?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,n.ZP)(d)}):null,(0,r.jsxs)(a.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[" ",(0,r.jsx)(c,{data:_,content:x,Personalization:l})]})]})}}},90905:(t,e,s)=>{"use strict";s.d(e,{Z:()=>i});var a=s(47313),n=s(35179),o=s(46417);const r=t=>{let{network:e}=t;const s={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:n.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:n.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:a,color:r}=s[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,o.jsx)("div",{className:a,style:{color:r},"tb-network":e.id,children:(0,o.jsx)("div",{})})},c=t=>{let{ThemeID:e}=t;const{className:s,color:a}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,o.jsx)("div",{className:s,style:{color:a},"tb-network":e})};class i extends a.PureComponent{render(){const{rating:t,network:e,ThemeID:s}=this.props;return(0,o.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,a)=>s?(0,o.jsx)(c,{ThemeID:s},a):(0,o.jsx)(r,{network:e},a))):null})}}},50247:()=>{}}]);