"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4116],{34116:(e,i,t)=>{t.r(i),t.d(i,{default:()=>o});var s=t(9950),l=t(68940),a=t(52867),r=(t(99425),t(44414));const d=s.lazy((()=>Promise.all([t.e(8092),t.e(4005)]).then(t.bind(t,80426)))),n=JSON.parse(window.localStorage.getItem("mediaDimension"));class o extends s.PureComponent{constructor(e){super(e),this.mediaSize=e=>{this.props.mediaSizeCallback(e)},this.CurrentVideo=e=>{},this.state={mediaSize:{height:null!=n?n[0]:"85vh",width:null!=n?n[1]:"85vh"}}}render(){const{imageList:e,data:i,wall:t,wallID:n,ownerId:o,size:h}=this.props,p={clickable:!0,bulletClass:"tb_rp_bullet"};return(0,r.jsx)("div",{className:"tb_rp_media_holder",children:(0,r.jsx)(l.RC,{ref:this.splideRef,direction:"horizontal",passiveListeners:!0,pagination:p,children:e.map(((e,i)=>(0,r.jsx)(l.qr,{children:l=>{let{isActive:p}=l;return(0,r.jsx)(r.Fragment,{children:2!==e.type&&4!==e.type&&p?3===e.type||5===e.type?(0,r.jsx)(s.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(d,{VideoClass:"tb_rp_video",data:{...e,network:{id:e.networkId},postFileNew:e.postFile,mediaUrl:e.mediaFile},wallID:n,themeID:t.Personalization.widgetTheme,ownerId:o,size:h,isCover:!0,controls:!1,autoPlay:p,muted:false,handleVideoEnded:e=>this.CurrentVideo(),index:i})}):null:(0,r.jsx)("img",{className:"tb_rp_s_image",src:e.postFile,height:500,width:480,alt:(0,a.wG)(e.postFile)})})}},i)))})})}}}}]);