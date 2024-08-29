"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7774],{77774:(e,a,l)=>{l.r(a),l.d(a,{addScript:()=>z,default:()=>W,onLoad:()=>E});var r=l(47313),n=l(83773),t=l(95162),s=l(43411),o=l(98501),i=l(17739),d=l(35179),c=l(40475),p=l(92789),h=l.n(p),u=l(46417);const w=r.lazy((()=>l.e(4355).then(l.bind(l,44355)))),j=r.lazy((()=>l.e(3032).then(l.bind(l,53032)))),b=r.lazy((()=>Promise.all([l.e(182),l.e(5807)]).then(l.bind(l,75807)))),m=r.lazy((()=>l.e(3478).then(l.bind(l,43478)))),g=r.lazy((()=>l.e(9031).then(l.bind(l,9031)))),x=r.lazy((()=>l.e(8454).then(l.bind(l,28454)))),k=r.lazy((()=>Promise.all([l.e(6390),l.e(7529),l.e(6270),l.e(622),l.e(2198),l.e(6451)]).then(l.bind(l,417)))),D=r.lazy((()=>Promise.all([l.e(6390),l.e(7529),l.e(6270),l.e(7373),l.e(2198),l.e(2104)]).then(l.bind(l,52104)))),S=r.lazy((()=>l.e(339).then(l.bind(l,10339)))),y=r.lazy((()=>l.e(3607).then(l.bind(l,43607)))),f=r.lazy((()=>l.e(7029).then(l.bind(l,87029)))),F=r.lazy((()=>l.e(6105).then(l.bind(l,56105)))),v=r.lazy((()=>l.e(1174).then(l.bind(l,71174)))),P=r.lazy((()=>l.e(2579).then(l.bind(l,92579)))),U=r.lazy((()=>l.e(7958).then(l.bind(l,57958)))),z=e=>{const a=document.createElement("script");a.src=e,a.defer=!0,document.head.appendChild(a)},E=()=>{window.jQuery||z("".concat(o.do,"/js/jquery.min.js?ver=1")),z("".concat(o.do,"/js/slackdown.js?ver=1"))},L=e=>{var a;return e.loader&&null!=e.loader.loader&&null==e.error.errorWithMessage&&(!e.error.planLimit||d.ig)&&(null==e.error.themeError||Object.keys(e.error.themeError).length>0&&0==e.error.themeError.error_code||1===(null===(a=e.wall)||void 0===a?void 0:a.Personalization.demoWall))?(0,u.jsx)(r.Suspense,{fallback:(0,u.jsx)(u.Fragment,{}),children:(0,u.jsx)(w,{...e})}):!d.ig&&(e.error.errorWithMessage||e.error.planLimit||e.error.themeError)?(0,u.jsx)(r.Suspense,{fallback:(0,u.jsx)(u.Fragment,{}),children:(0,u.jsx)(j,{...e})}):null},I=(0,n.componentWillAppendToBody)((e=>{let{children:a}=e;return a})),O=e=>{let{appData:a}=e;const l=!!(a.wall.UserDetail&&Object.keys(a.wall.UserDetail).length>0);let r=""!=a.webFilters&&a.webFilters?a.webFilters.map((e=>{let{networkId:a}=e;return a})):null;const n=!(!l||a.wall.UserDetail.planId.includes("53"))||!!(d.ZQ&&a.wall.refere&&Object.keys(a.wall.refere).length>0),t=d.ig&&a.wall.User.referePageLink?a.wall.User.referePageLink:d.ZQ?a.wall.refere.referePageLink:(0,i.$t)(r,a.wallID)[0],s=d.ig&&a.wall.User.referePage?a.wall.User.referePage:d.ZQ?a.wall.refere.referePage:(0,i.$t)(r,a.wallID)[1];return n?(0,u.jsx)("a",{href:t,target:"_blank",style:{display:"none"},"aria-label":s,children:s}):null};class C extends r.Component{constructor(){super(...arguments),this.state={errorData:null,render:""},this.onLoadEditor=()=>{if(d.Jc){const a=new BroadcastChannel("embedLivePreview");try{a.addEventListener("message",(e=>{const a=JSON.parse(null===e||void 0===e?void 0:e.data);console.warn("payload 1",a),this.setState({render:(0,t.Z)()});const{onUpdateEditor:l}=this.props;l(a)}))}catch(e){console.log("error",e)}}}}componentWillMount(){d.bX&&(h().init(),l.e(2389).then(l.bind(l,92389)))}componentDidMount(){setTimeout((()=>E()),200),this.onLoadEditor()}componentDidUpdate(e,a){var l,r,n;let t=null===(l=e.appData.wall)||void 0===l||null===(r=l.Personalization)||void 0===r?void 0:r.demoWall;var s;(null===(n=e.appData.error)||void 0===n?void 0:n.themeError)!==a.errorData&&(this.setState({errorData:null===(s=e.appData.error)||void 0===s?void 0:s.themeError}),"function"===typeof window.onSetErrorCode&&null!==this.state.errorData&&window.onSetErrorCode(this.state.errorData,t))}render(){var e;const{appData:a,modalPop:l}=this.props,{render:n}=this.state,t=!!(a&&a.wall&&Object.keys(a.wall).length>0&&a.wall.UserDetail&&Object.keys(a.wall.UserDetail).length>0);return(0,u.jsx)(u.Fragment,{children:d.bX&&1==a.isStudio&&!i.cy?(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(v,{wallID:a.wallID})}):(0,u.jsxs)(u.Fragment,{children:[d.aL?null:(0,u.jsx)(r.Suspense,{fallback:(0,u.jsx)(u.Fragment,{}),children:(0,u.jsx)(P,{})}),(0,u.jsx)(r.Suspense,{fallback:(0,u.jsx)(u.Fragment,{}),children:(0,u.jsx)(m,{})}),a&&a.wall&&Object.keys(a.wall).length>0?(0,u.jsx)(r.Suspense,{fallback:(0,u.jsx)(u.Fragment,{}),children:(0,u.jsx)(b,{wall:a.wall})}):null,l.onSiteIsShowPopUp?(0,u.jsxs)(I,{children:["  ",(0,u.jsx)(r.Suspense,{fallback:(0,u.jsx)(u.Fragment,{}),children:(0,u.jsx)(g,{})})]}):null,(0,r.createElement)(L,{...a,key:n,keyRender:n}),t&&a.wall.UserDetail.planId.includes("53")&&!d.bX?(0,u.jsxs)(r.Suspense,{fallback:(0,u.jsx)(u.Fragment,{}),children:[(0,u.jsx)(y,{appData:a})," "]}):null,null!==a&&void 0!==a&&null!==(e=a.postData)&&void 0!==e&&e.isFreeAdsStatus?(0,u.jsxs)(I,{children:[(0,u.jsxs)(r.Suspense,{fallback:(0,u.jsx)(u.Fragment,{}),children:[(0,u.jsx)(f,{appData:a})," "]}),window.editor?"":(0,u.jsxs)(r.Suspense,{fallback:(0,u.jsx)(u.Fragment,{}),children:[(0,u.jsx)(F,{appData:a})," "]})]}):null,l.isShowPopUp?d.ig&&(0,i.b)()?(0,u.jsxs)(I,{children:[" ",(0,u.jsx)(r.Suspense,{fallback:(0,u.jsx)(u.Fragment,{}),children:(0,u.jsx)(D,{wall:a.wall,data:l.data,languageSetting:a.languageSetting,networkData:a.networkData,postData:a.postData,brandingNetworks:""!=a.webFilters&&a.webFilters?a.webFilters.map((e=>{let{networkId:a}=e;return a})):null})})," "]}):(0,u.jsxs)(I,{children:[" ",(0,u.jsx)(r.Suspense,{fallback:(0,u.jsx)(u.Fragment,{}),children:(0,u.jsx)(k,{wall:a.wall,isShowPopUp:l.isShowPopUp,data:l.data,languageSetting:a.languageSetting,networkData:a.networkData,postData:a.postData,brandingNetworks:""!=a.webFilters&&a.webFilters?a.webFilters.map((e=>{let{networkId:a}=e;return a})):null},l.isShowPopUp)})," "]}):null,d.bX&&a.announcements?(0,u.jsx)(r.Suspense,{fallback:(0,u.jsx)(u.Fragment,{}),children:(0,u.jsx)(U,{announcements:a.announcements})}):null,l.reportStatus?(0,u.jsxs)(I,{children:[" ",(0,u.jsx)(r.Suspense,{fallback:(0,u.jsx)(u.Fragment,{}),children:(0,u.jsx)(S,{item:l.reportData,wall:a.wall})})," "]}):null,l.shareStatus?(0,u.jsxs)(I,{children:[" ",(0,u.jsx)(r.Suspense,{fallback:(0,u.jsx)(u.Fragment,{}),children:(0,u.jsx)(x,{postLink:l.shareData.link,userName:l.shareData.author.name})})," "]}):null,a&&a.wall&&Object.keys(a.wall).length>0?(0,u.jsx)(I,{children:(0,u.jsx)(O,{appData:a})}):null]})})}}const W=(0,s.$j)((e=>({appData:e.appData,modalPop:e.modalPop})),(e=>({onUpdateEditor:a=>e((0,c.cD)(a))})))(C)}}]);