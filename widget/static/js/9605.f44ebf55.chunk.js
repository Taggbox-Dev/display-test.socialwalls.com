(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[9605,8342,9239,5790,5810],{22990:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>g});var s=a(47313),i=a(20510),n=a.n(i),o=a(98501),l=(a(62245),a(89239),a(55790),a(25810),a(46417));var r=a(17739),h=a(16031),c=a.n(h);const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class m extends s.Component{constructor(t){super(t),this.onMediaLoad=async t=>{if(t.mediaHeight&&t.mediaWidth)this.setState({mediaSize:{height:t.mediaHeight,width:t.mediaWidth}});else try{const{width:e,height:a}=await(0,r.O5)(t.postFile);this.setState({mediaSize:{height:a,width:e}})}catch(e){this.setState({mediaSize:{height:100,width:100}})}},this.state={imageError:!1,windowWidth:window.innerWidth,windowHeight:window.innerHeight,mediaSize:{height:400,width:400},animate:!1,itemData:null}}componentDidMount(){this.onLoadAnimation()}componentDidUpdate(t){c().isEqual(t.itemData,this.props.itemData)||(this.setState({itemData:this.props.itemData,animate:!1}),this.onLoadAnimation())}onLoadAnimation(){setTimeout((()=>{this.setState({animate:!0}),this.onMediaLoad(this.props.itemData)}),1e3)}render(){const{itemData:t,wall:e}=this.props,{imageError:a,windowHeight:s,windowWidth:i,mediaSize:r,animate:h}=this.state,c=i>s?((s-400)/50).toFixed():((s/2-200)/50).toFixed(),m=(e.ThemeRule,e.Personalization,1!==t.type),g=3===t.type||5===t.type;let u="".concat(t.postFile);!(!a&&""!=t.mediaFile)||1==t.type&&t.type;const p=Math.min(i/r.width,s/r.height),_=r.height*p,w=r.width*p,f={paddingBottom:"".concat(100*_/w,"%")};return t.mediaFile.includes(o.ho)&&(u=t.postFile),(0,l.jsxs)("div",{id:"spotlight__",className:"sl_container",children:[(0,l.jsx)("div",{className:"sl_overlay_ ".concat(h?"sl_media_ani":""),style:{backgroundImage:"url(".concat(u,")")}}),(0,l.jsx)("div",{className:"sl_wrap",children:(0,l.jsx)("div",{className:"sl_wrap_row sl_only_text",children:m?(0,l.jsx)("div",{className:"sl_media_wrap ".concat(h?"sl_media_ani":""),style:{maxWidth:w},children:g?(0,l.jsx)("div",{className:"sl_media_wrap_",style:f,children:(0,l.jsx)(n(),{url:d(t.mediaUrl,t.networkId),config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto",muted:!0,poster:t.postFileNew}},file:{forceVideo:!0,attributes:{muted:!0,poster:t.postFileNew,preload:"metadata"}}},className:"sl_media_",loop:!0,autoPlay:!0,muted:!0,volume:1,playsinline:!0,playing:!0,height:"100%",width:"100%",controls:!1})}):(0,l.jsx)("div",{className:"sl_media_wrap_",style:f,children:(0,l.jsx)("img",{className:"sl_media_",src:t.postFile,srcSet:"".concat(t.postFile,", 991w ").concat(t.postFile,", 480w"),height:_,width:w})})}):null})})]})}}const g=(0,s.memo)(m)},89239:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>l});var s=a(47313),i=a(17739),n=a(98935),o=a(46417);class l extends s.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:a}=this.props;return(0,o.jsx)("div",{className:e,children:this.state.isAuthorImagevalid?(0,o.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,i.P)(t.picture),width:44,height:44,onError:e=>{const s="#ffffff"==a.color?"#000":a.color;e.target.src=t.errorPic?t.errorPic:"https://ui-avatars.com/api/?name=".concat(t.name.replace(/\s/g,""),"&background=").concat(String(null===a.id?"#000":s).replace("#",""),"&color=fff&length=1"),e.target.alt=t.name}}):(0,o.jsx)(n.Z,{authorClass:e,username:t.name,network:a,color:null===a.id?"#000":a.color,errorPic:t.errorPic})},Math.random())}}},98935:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});var s=a(47313),i=a(46417);const n=t=>{let{username:e,network:a,authorClass:s,errorPic:n}=t;const o="#ffffff"==a.color?"#000":a.color;return(0,i.jsx)("img",{className:"".concat(s,"__"),src:n||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===a.id?"#000":o).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},o=(0,s.memo)(n)},25810:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>l});var s=a(47313),i=a(35179),n=a(46417);const o=s.lazy((()=>a.e(5867).then(a.bind(a,95867))));class l extends s.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a,isDefault:l,Personalization:r}=this.props,h=!!l&&(7!==t.id&&4!==t.id&&36!==t.id),c=i.ZQ&&36==t.id?"tagembed":t.icon;return h?(0,n.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(c.replace(/fa-/g,"")),children:(0,n.jsx)("div",{})}):(0,n.jsxs)(s.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(o,{network:t,networkClass:e})]})}}},62245:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>h});var s=a(47313),i=a(16390),n=a(17739),o=a(35179),l=a(30584),r=a(46417);class h extends s.PureComponent{constructor(t){super(t),this.contentRef=s.createRef()}componentDidMount(){o.ZQ&&setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){const{contentClass:t,content:e,ThemeRule:a,font:s,personalization:h,item:c,contentTitle:d,readMore:m,maxLength:g,textAlign:u,maxLines:p,isReadMore:_}=this.props,w={WebkitLineClamp:p,textAlign:a.textAlignment};let f=20==c.network.id||o.bX&&!o.aL?e:(0,n.Fx)(e);12==c.network.id&&(f=(0,i.ZP)(f));const x="".concat(a.lineTrim?" tb_content_line-".concat(a.lineTrim):""),k="".concat(t," ").concat(_?"":x);return(0,r.jsxs)("div",{className:k,ref:this.contentRef,style:w,children:[d?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,i.ZP)(d)}):null,(0,r.jsx)(l.Z,{data:c,content:f,Personalization:h,ThemeRule:a})]})}}},30584:(t,e,a)=>{"use strict";a.d(e,{Z:()=>c});var s=a(47313),i=a(91523),n=a(16390),o=a(46417);const l=a(77560),r=(t,e)=>(0,o.jsx)(i.default,{style:e&&[66,70].includes(null===e||void 0===e?void 0:e.themeId)?{width:e.fontSize,height:e.fontSize}:null,children:(0,n.ZP)(t)}),h=t=>{let{data:e,content:a,Personalization:s,ThemeRule:i}=t;const h={color:s.hashtag_color,fontWeight:"bold",backgroundColor:1==s.hashtag_background_status?s.hashtag_background_color:"transparent"};return 20==e.network.id&&window.slackdown?(0,o.jsx)(o.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,n.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?r(window.slackdown.parse(l(a,/#(\w+)/g,((t,e)=>(0,o.jsxs)("div",{className:"tb_text_hashtag",style:h,children:["#",t]}))),e.slackMember),i):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?r(window.slackdown.parse(l(a,e.hash.hashString,((t,e)=>(0,o.jsx)("div",{className:"tb_text_hashtag",style:h,children:t}))),e.slackMember),i):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?r(window.slackdown.parse(l(a,/#(\w+)/g,((t,a)=>(0,o.jsxs)("div",{className:"tb_text_hashtag",style:h,children:["#",t]},"".concat(e.id,"_").concat(a)))),e.slackMember),i):r(window.slackdown.parse(a,e.slackMember),i)}):(0,o.jsx)(o.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,n.ZP)(a):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?l((0,n.ZP)(a),/#(\w+)/g,((t,e)=>(0,o.jsxs)("div",{className:"tb_text_hashtag",style:h,children:["#",t]}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?l((0,n.ZP)(a),e.hash.hashString,((t,e)=>(0,o.jsx)("strong",{className:"tb_text_hashtag",style:h,children:t}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?l((0,n.ZP)(a),/#(\w+)/g,((t,a)=>(0,o.jsxs)("div",{className:"tb_text_hashtag",style:h,children:["#",t]},"".concat(e.id,"_").concat(a)))):r(a,i)})},c=(0,s.memo)(h)},55790:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>l});var s=a(47313),i=a(17739),n=a(46417);const o=t=>{const{postTime:e,timeClass:a}=t;return(0,n.jsx)("div",{className:a,children:(0,i.Sy)(e)})},l=(0,s.memo)(o)},50247:()=>{}}]);