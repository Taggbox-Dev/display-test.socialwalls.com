"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[9239],{89239:(r,e,t)=>{t.r(e),t.d(e,{default:()=>l});var a=t(47313),o=t(17739),c=t(98935),s=t(46417);class l extends a.PureComponent{constructor(r){super(r),this.state={isAuthorImagevalid:!0}}render(){var r;const{author:e,authorClass:t,network:a}=this.props;return(0,s.jsx)("div",{className:t,children:this.state.isAuthorImagevalid?(0,s.jsx)("img",{className:"".concat(t,"__"),src:null!==e&&void 0!==e&&e.picture&&String(null===e||void 0===e?void 0:e.picture).includes("author.png")?" ":null===e||void 0===e||null===(r=e.picture)||void 0===r?void 0:r.replace(/[ ]+/g,""),alt:(0,o.P)(null===e||void 0===e?void 0:e.picture),width:44,height:44,onError:r=>{const t="#ffffff"==a.color?"#000":a.color;r.target.src=e.errorPic?e.errorPic:"https://ui-avatars.com/api/?name=".concat(e.name.replace(/\s/g,""),"&background=").concat(String(null===a.id?"#000":t).replace("#",""),"&color=fff&length=1"),r.target.alt=e.name}}):(0,s.jsx)(c.Z,{authorClass:t,username:e.name,network:a,color:null===a.id?"#000":a.color,errorPic:e.errorPic})},Math.random())}}},98935:(r,e,t)=>{t.d(e,{Z:()=>s});var a=t(47313),o=t(46417);const c=r=>{let{username:e,network:t,authorClass:a,errorPic:c}=r;const s="#ffffff"==t.color?"#000":t.color;return(0,o.jsx)("img",{className:"".concat(a,"__"),src:c||"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===t.id?"#000":s).replace("#",""),"&color=fff&length=1"),alt:e,width:45,height:45})},s=(0,a.memo)(c)}}]);