(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7875],{64442:(e,t,i)=>{"use strict";i.d(t,{Z:()=>p});var o=i(47313),s=i(2406),a=i(20510),d=i.n(a),n=i(40475),r=i(35179),l=(i(17739),i(46417));const c=(e,t)=>{if(25===t){return String(e).replace("https://w.soundcloud.com/player/?url=","")}return e};class p extends o.PureComponent{constructor(e){super(e),this.onMediaLoad=async e=>{const{data:t}=this.props;if(t&&Object.keys(t).length>0&&[4,5,3].includes(t.type))if(t.mediaHeight&&""!=t.mediaHeight&&t.mediaWidth&&""!=t.mediaWidth)this.setState({paddingBottom:100*t.mediaHeight/t.mediaWidth});else try{const{width:e,height:i}=await(0,s.Ad)(t.postFileNew);this.setState({paddingBottom:100*i/e})}catch(i){this.setState({paddingBottom:100})}},this.setVideoLoaded=e=>{this.setState({videoLoaded:e})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=o.createRef(),this.observer=null}componentWillMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((e=>{let[t]=e;this.setState({isVisible:t.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(i){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:e,data:t,wallID:i,isCover:o,controls:s,autoPlay:a,handleVideoEnded:p,muted:h,themeID:u}=this.props,{paddingBottom:m,videoLoaded:g,isVisible:_}=this.state,b={small:t.postFileNew,large:t.filename,orignal:t.file},y=[74,76,77].includes(u),v={paddingBottom:"".concat(y&&r.bX?null:m,"%")},f=null!==t&&void 0!==t&&t.loopStop?t.mediaUrl:t.mediaClip&&String(t.mediaClip).length>0?t.mediaClip:t.mediaUrl;return(0,l.jsx)("div",{className:"".concat(e,"_wrap_ mediaHolder").concat(t.id),style:v,ref:this.videoRef,children:(0,l.jsx)(d(),{className:"".concat(e," video").concat(t.id),url:c(f,t.network.id),"data-type":"video","data-network":t.network.id,"data-link":t.link,"data-wall-id":i,"data-item-id":t.id,"data-feed-id":t.feedId?t.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata"}}},loop:!(r.bX&&!r.aL&&null!==t&&void 0!==t&&t.loopStop),onError:e=>{t.stories&&0!=t.stories||(0,n.ib)(e,t.id)},autoPlay:a,muted:h,volume:a?1:0,playsinline:!0,onReady:e=>{r.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:r.ig?_:a,height:"100%",width:"100%",controls:s||!1,style:{backgroundImage:"url(".concat(y?b.large:b.small,")"),backgroundSize:o?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:p||null})})}}},407:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>c});var o=i(47313),s=i(35179),a=i(81349),d=i(84261),n=i(64442),r=i(46417);const l=o.lazy((()=>Promise.resolve().then(i.bind(i,25810)))),c=e=>{let{itemData:t,wallID:i,ThemeID:c,ownerId:p,wall:h}=e;const u=!t.hotspot,m=!(3!==t.type&&5!==t.type||1!=h.ThemeRule.autoPlay&&s.ig);return(0,r.jsxs)("div",{className:"tb_sp_media_wrap",children:[s.ZQ?(0,r.jsx)("div",{className:"tb_sp_social_top_",children:(0,r.jsx)(o.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(l,{networkClass:"tb_sp_social__ico",network:t.network,isDefault:1===h.ThemeRule.iconType,ThemeRule:h.ThemeRule})})}):null,(0,r.jsx)(a.Z,{itemData:t,IconClass:"tb_sp_media_icon".concat(s.ZQ?" tb_sp_media_icon_te":""),show:u,isCenter:s.ZQ}),m?(0,r.jsx)(n.Z,{VideoClass:"tb_sp_video",data:t,wallID:i,themeID:h.Personalization.widgetTheme,ownerId:p,size:100,isCover:!0,muted:!0}):(0,r.jsx)(d.default,{ImageClass:"tb_sp_image",data:t,wallID:i,themeID:c,ownerId:p,size:100,hotspot:!!t.hotspot})]})}},61729:(e,t,i)=>{"use strict";var o=i(79165);function s(){}function a(){}a.resetWarningCache=s,e.exports=function(){function e(e,t,i,s,a,d){if(d!==o){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}function t(){return e}e.isRequired=e;var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:s};return i.PropTypes=i,i}},75192:(e,t,i)=>{e.exports=i(61729)()},79165:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);