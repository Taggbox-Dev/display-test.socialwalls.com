(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3899],{3494:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>p});var o=i(47313),n=i(2406),a=i(20510),s=i.n(a),d=i(40475),r=i(35179),c=i(17739),l=i(46417);const u=(e,t)=>{if(25===t){return String(e).replace("https://w.soundcloud.com/player/?url=","")}return e};class p extends o.PureComponent{constructor(e){super(e),this.onMediaLoad=async e=>{const{data:t}=this.props;if(t&&Object.keys(t).length>0&&[4,5,3].includes(t.type))if(t.mediaHeight&&""!=t.mediaHeight&&t.mediaWidth&&""!=t.mediaWidth)this.setState({paddingBottom:100*t.mediaHeight/t.mediaWidth});else try{const{width:e,height:i}=await(0,n.Ad)(t.postFileNew);this.setState({paddingBottom:100*i/e})}catch(i){this.setState({paddingBottom:100})}},this.setVideoLoaded=e=>{this.setState({videoLoaded:e})},this.handleProgress=e=>{},this.onUpdateTime=e=>{try{if(r.ig){const{played:t}=this.state;this.setState({played:t+e.playedSeconds})}}catch(t){console.log(t)}},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,played:0}}componentWillMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}componentWillUnmount(){const{played:e}=this.state;r.ig&&(0,c.qE)(e)}render(){const{VideoClass:e,data:t,wallID:i,controls:o,autoPlay:n,handleVideoEnded:a,muted:r}=this.props,{videoLoaded:c}=this.state;return(0,l.jsxs)("div",{className:"".concat(e,"_wrap_ mediaHolder").concat(t.id),style:{paddingBottom:"100vh"},children:[(0,l.jsx)(s(),{className:"".concat(e," video").concat(t.id),url:u(t.mediaUrl,t.network.id),"data-type":"video","data-network":t.network.id,"data-link":t.link,"data-wall-id":i,"data-item-id":t.id,"data-feed-id":t.feedId?t.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{forceVideo:!0,attributes:{muted:r}}},loop:!0,onError:e=>{t.stories&&0!=t.stories||(0,d.ib)(e,t.id)},muted:r,volume:n?1:0,playsinline:!0,onReady:e=>{this.setVideoLoaded(!0)},playing:n,height:"100%",width:"100%",controls:o,onProgress:this.onUpdateTime,style:{backgroundImage:c?null:"url(".concat(t.postFileNew,")")},onEnded:a||null}),c?null:(0,l.jsx)("div",{className:"tb_rpp_v_spinner",children:(0,l.jsx)("div",{})})]})}}},61729:(e,t,i)=>{"use strict";var o=i(79165);function n(){}function a(){}a.resetWarningCache=n,e.exports=function(){function e(e,t,i,n,a,s){if(s!==o){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}function t(){return e}e.isRequired=e;var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:n};return i.PropTypes=i,i}},75192:(e,t,i)=>{e.exports=i(61729)()},79165:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2406:(e,t,i)=>{"use strict";t.Ad=void 0;var o=i(84228);var n=i(65786);Object.defineProperty(t,"Ad",{enumerable:!0,get:function(){return n.getImageSize}});var a=i(22537)},84228:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorMessage=void 0,t.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageSize=void 0;const o=i(84228);t.getImageSize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((i,n)=>{if("undefined"===typeof window)return n(o.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!e)return n(o.ErrorMessage.URL_IS_NOT_DEFINED);let a=null;const s=new Image;s.addEventListener("load",(()=>{a&&window.clearTimeout(a),i({width:s.naturalWidth,height:s.naturalHeight})})),s.addEventListener("error",(e=>{a&&window.clearTimeout(a),n("".concat(e.type,": ").concat(e.message))})),s.src=e,t.timeout&&(a=window.setTimeout((()=>n(o.ErrorMessage.TIMEOUT)),t.timeout))}))}},22537:function(e,t,i){"use strict";var o=this&&this.__awaiter||function(e,t,i,o){return new(i||(i=Promise))((function(n,a){function s(e){try{r(o.next(e))}catch(t){a(t)}}function d(e){try{r(o.throw(e))}catch(t){a(t)}}function r(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,d)}r((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.useImageSize=void 0;const n=i(47313),a=i(65786);t.useImageSize=(e,t)=>{const[i,s]=(0,n.useState)(null),[d,r]=(0,n.useState)(!1),[c,l]=(0,n.useState)(null);return(0,n.useEffect)((()=>{o(void 0,void 0,void 0,(function*(){r(!0),s(null);try{const{width:i,height:o}=yield(0,a.getImageSize)(e,t);s({width:i,height:o})}catch(c){l(c.toString())}finally{r(!1)}}))}),[e,t]),[i,{loading:d,error:c}]}}}]);