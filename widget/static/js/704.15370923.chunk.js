"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[704],{704:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var i=n(47313),r=n(2406),o=n(35179),a=n(46417);class s extends i.PureComponent{constructor(e){super(e),this.state={height:"5",width:"100",error:""}}async componentWillMount(){const{ImageUrl:e}=this.props,{width:t,height:n}=await(0,r.Ad)(e);this.setState({height:100*n/t,width:100*t/n})}render(){const e={backgroundImage:"url(".concat(this.props.ImageUrl,")"),paddingBottom:this.state.height+"%",width:"100%"};return(0,a.jsx)("div",{className:"tb_wall_custom_header_wrap__",children:(0,a.jsx)("div",{className:"tb_header_img_ ".concat(o.bX?"socialwall":""),style:e,children:" "})})}}},2406:(e,t,n)=>{t.Ad=void 0;var i=n(84228);var r=n(65786);Object.defineProperty(t,"Ad",{enumerable:!0,get:function(){return r.getImageSize}});var o=n(22537)},84228:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorMessage=void 0,t.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getImageSize=void 0;const i=n(84228);t.getImageSize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((n,r)=>{if("undefined"===typeof window)return r(i.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!e)return r(i.ErrorMessage.URL_IS_NOT_DEFINED);let o=null;const a=new Image;a.addEventListener("load",(()=>{o&&window.clearTimeout(o),n({width:a.naturalWidth,height:a.naturalHeight})})),a.addEventListener("error",(e=>{o&&window.clearTimeout(o),r("".concat(e.type,": ").concat(e.message))})),a.src=e,t.timeout&&(o=window.setTimeout((()=>r(i.ErrorMessage.TIMEOUT)),t.timeout))}))}},22537:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function a(e){try{d(i.next(e))}catch(t){o(t)}}function s(e){try{d(i.throw(e))}catch(t){o(t)}}function d(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}d((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.useImageSize=void 0;const r=n(47313),o=n(65786);t.useImageSize=(e,t)=>{const[n,a]=(0,r.useState)(null),[s,d]=(0,r.useState)(!1),[u,c]=(0,r.useState)(null);return(0,r.useEffect)((()=>{i(void 0,void 0,void 0,(function*(){d(!0),a(null);try{const{width:n,height:i}=yield(0,o.getImageSize)(e,t);a({width:n,height:i})}catch(u){c(u.toString())}finally{d(!1)}}))}),[e,t]),[n,{loading:s,error:u}]}}}]);