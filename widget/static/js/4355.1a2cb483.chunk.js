"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4355],{44355:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var a=n(47313),i=n(43635),s=n(43411),r=n(17739),l=n(98501),o=n(35179),c=n(51500),g=n(46417);const d=a.lazy((()=>n.e(7535).then(n.bind(n,37535)))),h=a.lazy((()=>n.e(6429).then(n.bind(n,16429)))),u=a.lazy((()=>n.e(1027).then(n.bind(n,21027)))),p=a.lazy((()=>n.e(1819).then(n.bind(n,61819)))),m=a.lazy((()=>n.e(8534).then(n.bind(n,18534)))),b=a.lazy((()=>Promise.all([n.e(7914),n.e(6538)]).then(n.bind(n,66538))));class k extends a.PureComponent{constructor(){super(),this.handleResize=()=>{this.containerRef.current&&this.setState({containerSize:{width:this.containerRef.current.offsetWidth,height:this.containerRef.current.offsetHeight}})},this.onLoadSpotLight=()=>{if(o.bX&&!o.P2){const{postData:t}=this.props;if(t.completeDataObject&&Object.keys(t.completeDataObject).length>0){var e=null;Object.entries(t.completeDataObject).forEach((t=>{let[n,a]=t;1==(null===a||void 0===a?void 0:a.highlight)&&null==e&&(e=a)})),e&&Object.keys(e).length>0&&(0,c.Gh)(e)}}},this.state={containerSize:{width:null,height:null},parentID:""},this.containerRef=a.createRef()}componentDidMount(){(0,r.gz)(this.props.wall.Personalization.widgetTheme),window.addEventListener("resize",this.handleResize),this.containerRef.current&&this.setState({containerSize:{width:this.containerRef.current.offsetWidth,height:this.containerRef.current.offsetHeight}}),this.onLoadSpotLight()}componentWillUnmount(){window.removeEventListener("resize",this.handleResize)}componentDidUpdate(){var e;let t=document.querySelector(".tb_app_container"),n=r.b8?r.b8:null===t||void 0===t||null===(e=t.parentNode)||void 0===e?void 0:e.id;this.setState({parentID:n})}render(){var e,t;const{wall:n,reviewFilters:i,webFilters:s,postData:c,languageSetting:k,filter_tags:f,spotlight:j}=this.props,S=!!(n.Banner&&Object.keys(n.Banner).length>0&&(1===n.Banner.status&&1===n.Banner.banner_position||1===n.BannerImage.status||"1"===n.Banner.banner_position)),B=!!(n.Banner&&Object.keys(n.Banner).length>0&&(1===n.Banner.status&&2===n.Banner.banner_position||"2"===n.Banner.banner_position)),w=o.ZQ?![55,60,16,47,57].includes(n.Personalization.widgetTheme):![55,52,60,16,47,57,61].includes(n.Personalization.widgetTheme),x=!!(n.Banner&&Object.keys(n.Banner).length>0&&1===n.Banner.status&&6==n.Banner.bannerType&&0===n.Personalization.filterStatus&&57!=n.Personalization.widgetTheme),z=o.ZQ?1===n.Personalization.filterStatus:!!(s&&s.length>1),_=!!(f&&f.length>0),v=!(!o.bX||!j.status);let D=""!=s&&s&&s.length>0?s.map((e=>{let{Network:t}=e;return t.id})):null;!o.ig&&n.Background.image&&n.Background.image.includes(l.ho)&&(n.Background.image=String(n.Background.image).replace(l.lO,""));const I=0===n.Background.transparent||n.Background.image&&o.ZQ?{backgroundImage:n.Background.image?"url(".concat(n.Background.image,")"):"",backgroundColor:n.Background.color}:null;return(0,g.jsxs)("div",{className:"tb_app_container ".concat(j.isWall?"":"tb_spotlight_ac"),style:{minHeight:o.P2?[47,16,49,55,60,52].includes(n.Personalization.widgetTheme)?"100%":"".concat(this.props.postHeight,"px"):null},ref:this.containerRef,children:[o.bX&&!o.aL&&1===(null===(e=n.CustomTicker)||void 0===e?void 0:e.status)&&1==n.CustomTicker.ticker_position?(0,g.jsx)(u,{CustomTicker:n.CustomTicker,UgcSettings:n.UgcSettings}):null,S&&!v?(0,g.jsxs)(a.Suspense,{fallback:(0,g.jsx)(g.Fragment,{}),children:[" ",(0,g.jsx)(d,{Banner:n.Banner,BannerImage:n.BannerImage,LogoImage:n.LogoImage})]}):"",(0,g.jsxs)("div",{className:"tb_app_wrapper",style:I,children:[x&&S?(0,g.jsx)(a.Suspense,{fallback:(0,g.jsx)(g.Fragment,{}),children:(0,g.jsx)(h,{reviewFilters:i,appendData:c.appendData,wall:n,languageSetting:k,postData:c})}):null,n.UserRule.on_site_upload&&n.UgcSettings.onsite_status||o.nX&&n.UgcSettings.onsite_status&&(o.Jx||o.ig&&!(0,r.mD)(50))?(0,g.jsxs)(a.Suspense,{fallback:(0,g.jsx)(g.Fragment,{}),children:[" ",(0,g.jsx)(b,{UgcSettings:n.UgcSettings,id:n.Wall.id,tagShopWallId:n.Wall.wallId})," "]}):null,!o.bX&&w&&(z||_)?(0,g.jsxs)(a.Suspense,{fallback:(0,g.jsx)(g.Fragment,{}),children:[" ",(0,g.jsx)(p,{type:n.Personalization.filter_type,webFilters:s,filter_tags:f,appendData:c.appendData,wall:n,languageSetting:k,postData:c})]}):"",!o.bX||!j.isWall&&v?null:(0,g.jsxs)(a.Suspense,{fallback:(0,g.jsx)(g.Fragment,{}),children:[" ",(0,g.jsx)(m,{...this.props,brandingNetworks:D,containerSize:this.state.containerSize,parentID:this.state.parentID})]}),x&&B?(0,g.jsx)(a.Suspense,{fallback:(0,g.jsx)(g.Fragment,{}),children:(0,g.jsx)(h,{reviewFilters:i,appendData:c.appendData,wall:n,languageSetting:k,postData:c})}):null]}),B&&!v?(0,g.jsxs)(a.Suspense,{fallback:(0,g.jsx)(g.Fragment,{}),children:[" ",(0,g.jsx)(d,{Banner:n.Banner,BannerImage:n.BannerImage,LogoImage:n.LogoImage})]}):"",o.bX&&!o.aL&&1===(null===(t=n.CustomTicker)||void 0===t?void 0:t.status)&&2==n.CustomTicker.ticker_position?(0,g.jsx)(u,{CustomTicker:n.CustomTicker,UgcSettings:n.UgcSettings}):null]})}}const f=(0,s.$j)((e=>{if(!0===e.postHeight.manage_height){return{postHeight:e.postHeight.data.replace("px",""),renderId:e.renderId}}return{renderId:e.renderId}}),(e=>({managePostHeight:t=>e((0,i.B0)(t))})))(k)}}]);