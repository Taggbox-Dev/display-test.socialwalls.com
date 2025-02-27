"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7774],{77774:(e,a,l)=>{l.r(a),l.d(a,{addScript:()=>U,default:()=>C,isEditor:()=>z,onLoad:()=>L});var t=l(47313),n=l(83773),r=l(95162),s=l(43411),o=l(98501),i=l(17739),d=l(35179),c=l(43635),h=l(92789),p=l.n(h),w=l(46417);const u=t.lazy((()=>l.e(4355).then(l.bind(l,44355)))),m=t.lazy((()=>l.e(3032).then(l.bind(l,53032)))),j=t.lazy((()=>Promise.all([l.e(182),l.e(5807)]).then(l.bind(l,75807)))),g=t.lazy((()=>l.e(9031).then(l.bind(l,9031)))),b=t.lazy((()=>l.e(8454).then(l.bind(l,28454)))),x=t.lazy((()=>Promise.all([l.e(6390),l.e(622),l.e(7529),l.e(6270),l.e(2198),l.e(6451)]).then(l.bind(l,417)))),f=t.lazy((()=>Promise.all([l.e(6390),l.e(7529),l.e(6270),l.e(7373),l.e(2198),l.e(2104)]).then(l.bind(l,52104)))),k=t.lazy((()=>l.e(339).then(l.bind(l,10339)))),D=t.lazy((()=>l.e(3607).then(l.bind(l,43607)))),y=t.lazy((()=>l.e(7029).then(l.bind(l,87029)))),S=t.lazy((()=>l.e(6105).then(l.bind(l,56105)))),F=t.lazy((()=>l.e(1174).then(l.bind(l,71174)))),v=t.lazy((()=>l.e(2579).then(l.bind(l,92579)))),P=t.lazy((()=>l.e(7958).then(l.bind(l,57958)))),E=t.lazy((()=>Promise.all([l.e(510),l.e(6390),l.e(622),l.e(6031),l.e(323)]).then(l.bind(l,22990)))),U=e=>{const a=document.createElement("script");a.src=e,a.defer=!0,document.head.appendChild(a)},z=!!window.isEditor,L=()=>{window.jQuery||U("".concat(o.Mp,"/js/jquery.min.js?ver=1")),U("".concat(o.Mp,"/js/slackdown.js?ver=1"))},I=e=>{var a;return e.loader&&null!=e.loader.loader&&null==e.error.errorWithMessage&&(!e.error.planLimit||d.ig)&&(null==e.error.themeError||Object.keys(e.error.themeError).length>0&&0==e.error.themeError.error_code||1===(null===(a=e.wall)||void 0===a?void 0:a.Personalization.demoWall))?(0,w.jsx)(t.Suspense,{fallback:(0,w.jsx)(w.Fragment,{}),children:(0,w.jsx)(u,{...e})}):!d.ig&&(e.error.errorWithMessage||e.error.planLimit||e.error.themeError)?(0,w.jsx)(t.Suspense,{fallback:(0,w.jsx)(w.Fragment,{}),children:(0,w.jsx)(m,{...e})}):null},M=(0,n.componentWillAppendToBody)((e=>{let{children:a}=e;return a})),O=e=>{let{appData:a}=e;const l=!!(a.wall.UserDetail&&Object.keys(a.wall.UserDetail).length>0);let t=""!=a.webFilters&&a.webFilters?a.webFilters.map((e=>{let{networkId:a}=e;return a})):null;const n=!(!l||a.wall.UserDetail.planId.includes("53"))||!!(d.ZQ&&a.wall.refere&&Object.keys(a.wall.refere).length>0),r=d.ig&&a.wall.User.referePageLink?a.wall.User.referePageLink:d.ZQ?a.wall.refere.referePageLink:(0,i.$t)(t,a.wallID)[0],s=d.ig&&a.wall.User.referePage?a.wall.User.referePage:d.ZQ?a.wall.refere.referePage:(0,i.$t)(t,a.wallID)[1];return n?(0,w.jsx)("a",{href:r,target:"_blank",style:{display:"none"},"aria-label":s,children:s}):null};class W extends t.Component{constructor(){super(...arguments),this.state={errorData:null,render:""},this.onLoadEditor=()=>{if(d.Jc)try{window.addEventListener("message",this.handleMessage)}catch(e){console.log("error",e)}else d.bX&&window.location.href.includes("editor")&&window.location.href.includes("preview")?window.addEventListener("message",this.handleMessage):window.location.href.includes("addfeedload=load")&&window.addEventListener("message",this.addFeedReloadTheme)},this.handleMessage=e=>{const{type:a,data:l}=e.data;if("reloadWebsite"==a){const e=JSON.parse(l);console.warn("payload 1",e),this.setState({render:(0,r.Z)()});const{onUpdateEditor:a}=this.props;a(e)}},this.addFeedReloadTheme=e=>{const{type:a,data:l}=e.data;if("reloadTheme"==a){const{onUpdateEditor:e}=this.props;e(l)}}}componentWillMount(){d.bX&&(p().init(),l.e(2389).then(l.bind(l,92389)))}componentDidMount(){setTimeout((()=>L()),200),this.onLoadEditor()}componentDidUpdate(e,a){var l,t,n;let r=null===(l=e.appData.wall)||void 0===l||null===(t=l.Personalization)||void 0===t?void 0:t.demoWall;var s;(null===(n=e.appData.error)||void 0===n?void 0:n.themeError)!==a.errorData&&(this.setState({errorData:null===(s=e.appData.error)||void 0===s?void 0:s.themeError}),"function"===typeof window.onSetErrorCode&&null!==this.state.errorData&&window.onSetErrorCode(this.state.errorData,r))}componentWillUnmount(){d.Jc?window.removeEventListener("message",this.handleMessage):window.location.href.includes("addfeedload=load")&&window.removeEventListener("message",this.addFeedReloadTheme)}render(){var e;const{appData:a,modalPop:l,spotlight:n}=this.props,{render:r}=this.state,s=!!(a&&a.wall&&Object.keys(a.wall).length>0&&a.wall.UserDetail&&Object.keys(a.wall.UserDetail).length>0),o=!(!d.bX||!n.status);return(0,w.jsx)(w.Fragment,{children:!d.bX||window.location.href.includes("onsite-upload")||1!=a.isStudio||i.cy||z||window.location.href.includes("editor=1")?(0,w.jsxs)(w.Fragment,{children:[d.aL?null:(0,w.jsx)(t.Suspense,{fallback:(0,w.jsx)(w.Fragment,{}),children:(0,w.jsx)(v,{})}),a&&a.wall&&Object.keys(a.wall).length>0?(0,w.jsx)(t.Suspense,{fallback:(0,w.jsx)(w.Fragment,{}),children:(0,w.jsx)(j,{wall:a.wall})}):null,l.onSiteIsShowPopUp?(0,w.jsxs)(M,{children:["  ",(0,w.jsx)(t.Suspense,{fallback:(0,w.jsx)(w.Fragment,{}),children:(0,w.jsx)(g,{})})]}):null,(0,t.createElement)(I,{...a,key:r,keyRender:r,spotlight:n}),s&&a.wall.UserDetail.planId.includes("53")&&!d.bX?(0,w.jsxs)(t.Suspense,{fallback:(0,w.jsx)(w.Fragment,{}),children:[(0,w.jsx)(D,{appData:a})," "]}):null,null!==a&&void 0!==a&&null!==(e=a.postData)&&void 0!==e&&e.isFreeAdsStatus?(0,w.jsxs)(M,{children:[(0,w.jsxs)(t.Suspense,{fallback:(0,w.jsx)(w.Fragment,{}),children:[(0,w.jsx)(y,{appData:a})," "]}),window.location.href.includes("editor=1")?"":(0,w.jsxs)(t.Suspense,{fallback:(0,w.jsx)(w.Fragment,{}),children:[(0,w.jsx)(S,{appData:a})," "]})]}):null,!o&&l.isShowPopUp?d.ig&&(0,i.b)()?(0,w.jsxs)(M,{children:[" ",(0,w.jsx)(t.Suspense,{fallback:(0,w.jsx)(w.Fragment,{}),children:(0,w.jsx)(f,{wall:a.wall,data:l.data,languageSetting:a.languageSetting,networkData:a.networkData,postData:a.postData,brandingNetworks:""!=a.webFilters&&a.webFilters?a.webFilters.map((e=>{let{networkId:a}=e;return a})):null})})," "]}):(0,w.jsxs)(M,{children:[" ",(0,w.jsx)(t.Suspense,{fallback:(0,w.jsx)(w.Fragment,{}),children:(0,w.jsx)(x,{wall:a.wall,isShowPopUp:l.isShowPopUp,data:l.data,languageSetting:a.languageSetting,networkData:a.networkData,postData:a.postData,brandingNetworks:""!=a.webFilters&&a.webFilters?a.webFilters.map((e=>{let{networkId:a}=e;return a})):null},l.isShowPopUp)})," "]}):null,d.bX&&!o&&a.announcements?(0,w.jsx)(t.Suspense,{fallback:(0,w.jsx)(w.Fragment,{}),children:(0,w.jsx)(P,{announcements:a.announcements})}):null,l.reportStatus&&d.P2?(0,w.jsxs)(M,{children:[" ",(0,w.jsx)(t.Suspense,{fallback:(0,w.jsx)(w.Fragment,{}),children:(0,w.jsx)(k,{item:l.reportData,wall:a.wall})})," "]}):null,l.shareStatus&&d.P2?(0,w.jsxs)(M,{children:[" ",(0,w.jsx)(t.Suspense,{fallback:(0,w.jsx)(w.Fragment,{}),children:(0,w.jsx)(b,{postLink:l.shareData.link,userName:l.shareData.author.name})})," "]}):null,a&&a.wall&&Object.keys(a.wall).length>0&&d.P2?(0,w.jsx)(M,{children:(0,w.jsx)(O,{appData:a})}):null,o?(0,w.jsx)(t.Suspense,{fallback:(0,w.jsx)(w.Fragment,{}),children:(0,w.jsx)(E,{itemData:n.data,wall:a.wall})}):null]}):(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(F,{wallID:a.wallID})})})}}const C=(0,s.$j)((e=>({appData:e.appData,modalPop:e.modalPop,spotlight:e.spotlight})),(e=>({onUpdateEditor:a=>e((0,c.cD)(a))})))(W)}}]);