"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4675],{74675:(e,a,t)=>{t.r(a),t.d(a,{default:()=>d});var o=t(9950),s=t(11127),n=t(14478),r=t(66345),h=t(44414);class i extends o.PureComponent{constructor(){super(...arguments),this.onLoadeMore=e=>{const{wall:a,appendData:t,postHeight:o}=this.props,s=a.ThemeRule.numberOfCoumn<5?5:a.ThemeRule.numberOfCoumn,n=r.HY&&53==a.Personalization.widgetTheme?s:a.ThemeRule.numberOfPosts,h=Math.floor(Date.now()/1e3);this.props.managePostHeight(o),this.props.getDataNextSteps(a.Wall.id,h,n,t.networkID,t.after,t.heightEvent)}}render(){const{languageSetting:e,loaderData:a,postData:t,isBranding:o}=this.props,s=!(t.hasMoreData&&Object.keys(t.hasMoreData).length>0)||(!t.hasMoreData[0]||0!=t.hasMoreData[0].hasMoreData)&&(!t.hasMoreData[t.appendData.networkID]||t.hasMoreData[t.appendData.networkID].hasMoreData);return!0===s?(0,h.jsx)("div",{className:"tb_see_more_btn_wrap",style:{paddingTop:o?5:""},children:(0,h.jsx)("div",{className:"tb_see_more_btn "+(a&&a.isShowMoreLoading?"tb_more_btn_loading":""),onClick:this.onLoadeMore,children:s?e.buttonName:e.no_more})}):(0,h.jsx)(h.Fragment,{})}}const d=(0,s.Ng)((e=>({loaderData:e.loaderData,postHeight:e.postHeight.data})),(e=>({managePostHeight:a=>e((0,n.V3)(a)),getDataNextSteps:(a,t,o,s,r,h,i)=>e((0,n.H5)(a,t,o,s,r,h,i))})))(i)}}]);