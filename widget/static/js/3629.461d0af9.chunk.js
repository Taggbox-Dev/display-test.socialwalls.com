"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3629],{64442:(e,t,i)=>{i.d(t,{Z:()=>h});var s=i(47313),a=i(2406),o=i(20510),d=i.n(o),n=i(40475),l=i(35179),r=i(46417);const c=(e,t)=>{if(25===t){return String(e).replace("https://w.soundcloud.com/player/?url=","")}return e};class h extends s.PureComponent{constructor(e){super(e),this.onMediaLoad=async e=>{const{data:t}=this.props;if(t&&Object.keys(t).length>0&&[4,5,3].includes(t.type))if(t.mediaHeight&&""!=t.mediaHeight&&t.mediaWidth&&""!=t.mediaWidth)this.setState({paddingBottom:100*t.mediaHeight/t.mediaWidth});else try{const{width:e,height:i}=await(0,a.Ad)(t.postFileNew);this.setState({paddingBottom:100*i/e})}catch(i){this.setState({paddingBottom:100})}},this.setVideoLoaded=e=>{this.setState({videoLoaded:e})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=s.createRef(),this.observer=null}componentWillMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:this.props.size}):this.onMediaLoad();try{this.observer=new IntersectionObserver((e=>{let[t]=e;this.setState({isVisible:t.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(i){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:e,data:t,wallID:i,isCover:s,controls:a,autoPlay:o,handleVideoEnded:h,muted:p,themeID:m}=this.props,{paddingBottom:u,videoLoaded:g,isVisible:b}=this.state,_={small:t.postFileNew,large:t.filename,orignal:t.file},w=[74,76,77].includes(m),v={paddingBottom:"".concat(w&&l.bX?null:u,"%")},y=t.mediaClip&&String(t.mediaClip).length>0?t.mediaClip:t.mediaUrl;return(0,r.jsx)("div",{className:"".concat(e,"_wrap_ mediaHolder").concat(t.id),style:v,ref:this.videoRef,children:(0,r.jsx)(d(),{className:"".concat(e," video").concat(t.id),url:c(y,t.network.id),"data-type":"video","data-network":t.network.id,"data-link":t.link,"data-wall-id":i,"data-item-id":t.id,"data-feed-id":t.feedId?t.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata"}}},loop:(o&&l.bX,!0),onError:e=>{t.stories&&0!=t.stories||(0,n.ib)(e,t.id)},autoPlay:o,muted:p,volume:o?1:0,playsinline:!0,onReady:e=>{l.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:l.ig?b:o,height:"100%",width:"100%",controls:a||!1,style:{backgroundImage:"url(".concat(w?_.large:_.small,")"),backgroundSize:s?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:h||null})})}}},3891:(e,t,i)=>{i.r(t),i.d(t,{default:()=>h});var s=i(47313),a=i(35179),o=i(81349),d=i(84261),n=i(64442),l=i(46417);const r=s.lazy((()=>i.e(695).then(i.bind(i,10695)))),c=s.lazy((()=>Promise.resolve().then(i.bind(i,25810)))),h=e=>{let{itemData:t,wallID:i,ThemeID:h,ownerId:p,wall:m}=e;const u=!t.hotspot,g=(3===t.type||5===t.type)&&1==m.ThemeRule.autoPlay;!!a.ZQ&&(!!m.ThemeRule.aspectImageRatio&&m.ThemeRule.aspectImageRatio);return(0,l.jsxs)("div",{className:"tb_sp_media_wrap",children:[a.aL?(0,l.jsx)(s.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(r,{postId:t.id,wallID:i,UserDetail:m.UserDetail})}):null,a.ZQ?(0,l.jsx)("div",{className:"tb_sp_social_top_",children:(0,l.jsx)(s.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(c,{networkClass:"tb_sp_social__ico",network:t.network,isDefault:1===m.ThemeRule.iconType,ThemeRule:m.ThemeRule})})}):null,(0,l.jsx)(o.Z,{itemData:t,IconClass:"tb_sp_media_icon".concat(a.ZQ?" tb_sp_media_icon_te":""),show:u,isCenter:a.ZQ}),g?(0,l.jsx)(n.Z,{VideoClass:"tb_sp_video",data:t,wallID:i,themeID:h,ownerId:p,size:100,controls:!1,autoPlay:!0,muted:!0}):(0,l.jsx)(d.default,{ImageClass:"tb_sp_image",data:t,wallID:i,themeID:h,ownerId:p,size:100,hotspot:!!t.hotspot})]})}}}]);