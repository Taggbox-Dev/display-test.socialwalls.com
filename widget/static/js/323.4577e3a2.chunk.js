(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[323,8342,9239,5790,5810],{22990:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>u});var i=a(47313),s=a(20510),n=a.n(s),o=a(98501),l=(a(62245),a(89239),a(55790),a(25810),a(46417));var r=a(17739),c=a(16031),h=a.n(c);const d=(t,e)=>{if(25===e){return String(t).replace("https://w.soundcloud.com/player/?url=","")}return t};class m extends i.Component{constructor(t){super(t),this.onMediaLoad=async t=>{if(t.mediaHeight&&t.mediaWidth)this.setState({mediaSize:{height:t.mediaHeight,width:t.mediaWidth}});else try{const{width:e,height:a}=await(0,r.O5)(t.postFile);this.setState({mediaSize:{height:a,width:e}})}catch(e){this.setState({mediaSize:{height:100,width:100}})}},this.state={imageError:!1,windowWidth:window.innerWidth,windowHeight:window.innerHeight,mediaSize:{height:400,width:400},animate:!1,itemData:null}}componentDidMount(){this.onLoadAnimation()}componentDidUpdate(t){h().isEqual(t.itemData,this.props.itemData)||(this.setState({itemData:this.props.itemData,animate:!1}),this.onLoadAnimation())}onLoadAnimation(){setTimeout((()=>{this.setState({animate:!0}),this.onMediaLoad(this.props.itemData)}),1e3)}render(){const{itemData:t,wall:e}=this.props,{imageError:a,windowHeight:i,windowWidth:s,mediaSize:r,animate:c}=this.state,h=s>i?((i-400)/50).toFixed():((i/2-200)/50).toFixed(),m=(e.ThemeRule,e.Personalization,1!==t.type),u=3===t.type||5===t.type;let g="".concat(t.postFile);!(!a&&""!=t.mediaFile)||1==t.type&&t.type;const p=Math.min(s/r.width,i/r.height),_=r.height*p,v=r.width*p,w={paddingBottom:"".concat(100*_/v,"%")};return t.mediaFile.includes(o.ho)&&(g=t.postFile),(0,l.jsxs)("div",{id:"spotlight__",className:"sl_container",children:[(0,l.jsx)("div",{className:"sl_overlay_ ".concat(c?"sl_media_ani":""),style:{backgroundImage:"url(".concat(g,")")}}),(0,l.jsx)("div",{className:"sl_wrap",children:(0,l.jsx)("div",{className:"sl_wrap_row sl_only_text",children:m?(0,l.jsx)("div",{className:"sl_media_wrap ".concat(c?"sl_media_ani":""),style:{maxWidth:v},children:u?(0,l.jsx)("div",{className:"sl_media_wrap_",style:w,children:(0,l.jsx)(n(),{url:d(t.mediaUrl,t.networkId),config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto",muted:!0,poster:t.postFileNew}},file:{forceVideo:!0,attributes:{muted:!0,poster:t.postFileNew}}},className:"sl_media_",loop:!0,autoPlay:!0,muted:!0,volume:1,playsinline:!0,playing:!0,height:"100%",width:"100%",controls:!1})}):(0,l.jsx)("div",{className:"sl_media_wrap_",style:w,children:(0,l.jsx)("img",{className:"sl_media_",src:t.postFile,srcSet:"".concat(t.postFile,", 991w ").concat(t.postFile,", 480w"),height:_,width:v})})}):null})})]})}}const u=(0,i.memo)(m)},89239:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>l});var i=a(47313),s=a(17739),n=a(98935),o=a(46417);class l extends i.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){var t;const{author:e,authorClass:a,network:i}=this.props;return(0,o.jsx)("div",{className:a,children:this.state.isAuthorImagevalid?(0,o.jsx)("img",{className:"".concat(a,"__"),src:null!==e&&void 0!==e&&e.picture&&String(null===e||void 0===e?void 0:e.picture).includes("author.png")?" ":null===e||void 0===e||null===(t=e.picture)||void 0===t?void 0:t.replace(/[ ]+/g,""),alt:(0,s.P)(null===e||void 0===e?void 0:e.picture),width:44,height:44,onError:t=>{var a,s;const n="#ffffff"==i.color?"#000":i.color;t.target.src=e.errorPic?e.errorPic:"https://ui-avatars.com/api/?name=".concat(null===e||void 0===e||null===(a=e.name)||void 0===a?void 0:a.replace(/\s/g,""),"&background=").concat(null===(s=String(null===i.id?"#000":n))||void 0===s?void 0:s.replace("#",""),"&color=fff&length=1"),t.target.alt=e.name}}):(0,o.jsx)(n.Z,{authorClass:a,username:e.name,network:i,color:null===i.id?"#000":i.color,errorPic:e.errorPic})},Math.random())}}},98935:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});var i=a(47313),s=a(46417);const n=t=>{let{username:e,network:a,authorClass:i,errorPic:n}=t;const o="#ffffff"==a.color?"#000":a.color;return(0,s.jsx)("img",{className:"".concat(i,"__"),src:n||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===a.id?"#000":o).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},o=(0,i.memo)(n)},25810:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>l});var i=a(47313),s=a(35179),n=a(46417);const o=i.lazy((()=>a.e(5867).then(a.bind(a,95867))));class l extends i.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:a,isDefault:l,Personalization:r}=this.props,c=!!l&&(7!==(null===t||void 0===t?void 0:t.id)&&4!==(null===t||void 0===t?void 0:t.id)&&36!==(null===t||void 0===t?void 0:t.id)),h=s.ZQ&&36==(null===t||void 0===t?void 0:t.id)?"tagembed":null===t||void 0===t?void 0:t.icon;return c?(0,n.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(h.replace(/fa-/g,"")),children:(0,n.jsx)("div",{})}):(0,n.jsxs)(i.Suspense,{fallback:(0,n.jsx)(n.Fragment,{}),children:[" ",(0,n.jsx)(o,{network:t,networkClass:e})]})}}},62245:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>c});var i=a(47313),s=a(16390),n=a(17739),o=a(35179),l=a(30584),r=a(46417);class c extends i.PureComponent{constructor(t){super(t),this.contentRef=i.createRef()}componentDidMount(){o.ZQ&&setTimeout((()=>{const t=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(t)}),100)}render(){var t,e;const{contentClass:a,content:i,ThemeRule:c,font:h,personalization:d,item:m,contentTitle:u,readMore:g,maxLength:p,textAlign:_,maxLines:v,isReadMore:w}=this.props,f={WebkitLineClamp:v,textAlign:c.textAlignment};let x=20==(null===m||void 0===m||null===(t=m.network)||void 0===t?void 0:t.id)||o.bX&&!o.aL?i:(0,n.Fx)(i);12==(null===m||void 0===m||null===(e=m.network)||void 0===e?void 0:e.id)&&(x=(0,s.ZP)(x));const b="".concat(c.lineTrim?" tb_content_line-".concat(c.lineTrim):""),y="".concat(a," ").concat(w?"":b);return(0,r.jsxs)("div",{className:y,ref:this.contentRef,style:f,children:[u?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,s.ZP)(u)}):null,(0,r.jsx)(l.Z,{data:m,content:x,Personalization:d,ThemeRule:c})]})}}},30584:(t,e,a)=>{"use strict";a.d(e,{Z:()=>h});var i=a(47313),s=a(91523),n=a(16390),o=a(46417);const l=a(77560),r=(t,e)=>(0,o.jsx)(s.default,{style:e&&[66,70].includes(null===e||void 0===e?void 0:e.themeId)?{width:e.fontSize,height:e.fontSize}:null,children:(0,n.ZP)(t)}),c=t=>{var e;let{data:a,content:i,Personalization:s,ThemeRule:c}=t;const h={color:s.hashtag_color,fontWeight:"bold",backgroundColor:1==s.hashtag_background_status?s.hashtag_background_color:"transparent"};return 20==(null===a||void 0===a||null===(e=a.network)||void 0===e?void 0:e.id)&&window.slackdown?(0,o.jsx)(o.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,n.ZP)(i):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?r(window.slackdown.parse(l(i,/#(\w+)/g,((t,e)=>(0,o.jsxs)("div",{className:"tb_text_hashtag",style:h,children:["#",t]}))),a.slackMember),c):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?r(window.slackdown.parse(l(i,a.hash.hashString,((t,e)=>(0,o.jsx)("div",{className:"tb_text_hashtag",style:h,children:t}))),a.slackMember),c):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?r(window.slackdown.parse(l(i,/#(\w+)/g,((t,e)=>(0,o.jsxs)("div",{className:"tb_text_hashtag",style:h,children:["#",t]},"".concat(a.id,"_").concat(e)))),a.slackMember),c):r(window.slackdown.parse(i,a.slackMember),c)}):(0,o.jsx)(o.Fragment,{children:1===s.hashtag_highlight&&0===s.hashtag_feed&&0===s.hashtag_all?(0,n.ZP)(i):1===s.hashtag_highlight&&0===s.hashtag_feed&&1===s.hashtag_all?l((0,n.ZP)(i),/#(\w+)/g,((t,e)=>(0,o.jsxs)("div",{className:"tb_text_hashtag",style:h,children:["#",t]}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&0===s.hashtag_all?l((0,n.ZP)(i),a.hash.hashString,((t,e)=>(0,o.jsx)("strong",{className:"tb_text_hashtag",style:h,children:t}))):1===s.hashtag_highlight&&1===s.hashtag_feed&&1===s.hashtag_all?l((0,n.ZP)(i),/#(\w+)/g,((t,e)=>(0,o.jsxs)("div",{className:"tb_text_hashtag",style:h,children:["#",t]},"".concat(a.id,"_").concat(e)))):r(i,c)})},h=(0,i.memo)(c)},55790:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>l});var i=a(47313),s=a(17739),n=a(46417);const o=t=>{const{postTime:e,timeClass:a}=t;return(0,n.jsx)("div",{className:a,children:(0,s.Sy)(e)})},l=(0,i.memo)(o)},61729:(t,e,a)=>{"use strict";var i=a(79165);function s(){}function n(){}n.resetWarningCache=s,t.exports=function(){function t(t,e,a,s,n,o){if(o!==i){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function e(){return t}t.isRequired=t;var a={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:n,resetWarningCache:s};return a.PropTypes=a,a}},75192:(t,e,a)=>{t.exports=a(61729)()},79165:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},50247:()=>{}}]);