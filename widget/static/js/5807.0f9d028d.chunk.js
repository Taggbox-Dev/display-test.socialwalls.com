"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5807],{75807:(t,n,o)=>{o.r(n),o.d(n,{default:()=>m});var e=o(47313),c=o(31172),i=(o(34862),o(90182)),a=o(98501),l=o(17739),r=o(40475),s=o(35179);var g=o(46417);const d=(0,l.CL)()+1e3*((0,l.QM)()+60*((0,l.dn)()+60*(0,l.eZ)())),u=()=>(0,g.jsx)("script",{async:!0,children:'window.twttr = (function (d, s, id) {\n                            var js, fjs = d.getElementsByTagName(s)[0],\n                                t = window.twttr || {};\n                            if (d.getElementById(id)) return t;\n                            js = d.createElement(s);\n                            js.id = id;\n                            js.src = "https://platform.twitter.com/widgets.js";\n                            fjs.parentNode.insertBefore(js, fjs);\n\n                            t._e = [];\n                            t.ready = function (f) {\n                                                    t._e.push(f);\n                            };\n\n                            return t;\n                            }(document, "script", "twitter-wjs"));'}),p=t=>{const{cardStyle:n,ctaBtn:o,button:e,popUpProperties:c,ProductSettings:i,UgcSetting:a,heading:r,subheading:d,ticker:u,height:p}=(t=>{var n,o,e;const{ThemeRule:c,Personalization:i,ProductSetting:a,UgcSettings:r,Wall:g,CustomTicker:d}=t;console.log("\ud83d\ude80 ~ StyleConstant ~ ThemeRule:",c);var u="";u=s.P2?t.Banner:t.CustomBanner;const p="#ffffff",h="#000000",b="inherit";let f,m,w,v,_;"undefined"!==typeof a&&a?({Button:f,CatalogueTitle:m,Price:w,ProductTitle:v,Hotspot:_}=a):(m={fontLink:"",font:"",varient:"",size:"",color:"",text:""},v={fontLink:"",font:"",varient:"",size:"",color:""},w={fontLink:"",font:"",varient:"",size:"",color:""},f={fontLink:"",font:"",varient:"",size:"",background:"",color:"",text:"",newTab:""},_={type:"",background:"",color:"",status:""}),i.widgetTheme;const y=t=>{var n=[],o=[];s.ig&&(n=[61,16,53],o=[4,55,50]),s.ZQ&&(o=[4,55,16,56,50]),s.bX&&(o=[74,69,71,67,65,68]);const e=!!n.includes(i.widgetTheme),a=!!o.includes(i.widgetTheme),r=e&&1==c.postHover||a?h:e&&0==c.postHover?p:W;return(0,l.uu)(t,r)},k=t=>{const n=t?t.split("-"):"";return{weight:n[0]?n[0]:"",style:n[1]?n[1]:""}},x=(t,n,o,e,c)=>t?o:""!=n?n:c,S=c.ctaData&&Object.keys(c.ctaData).length>0?c.ctaData:{},P=!(!c.inheritStyles||1!=!s.bX),{authorColor:C,postHover:z,cardColor:W,iconColor:j,fontColor:T,css_font:L,fontSize:B,font_varient:U}=c;var H=document.querySelector("body"),V=document.querySelector("p"),q=H?window.getComputedStyle(H):V?window.getComputedStyle(V):"",D=q?q.getPropertyValue("font-size"):"",F=q?q.getPropertyValue("color"):"",I=q?q.getPropertyValue("font-family"):"",R=q?q.getPropertyValue("line-height"):"",E=q?q.getPropertyValue("font-weight"):"",Q=q?q.getPropertyValue("font-style"):"",M=(H=document.querySelector("body"),V=document.querySelector("p"),document.querySelector("strong")),O=document.querySelector("h2"),X=document.querySelector("h3"),Z=document.querySelector("h1"),A=M?window.getComputedStyle(M):O?window.getComputedStyle(O):X?window.getComputedStyle(X):"",N=document.querySelector(".tb_theme_title");if(N)var G=N.tagName;var J=document.querySelector(".tb_theme_sub_title");if(J)var K=J.tagName;var Y=[],$=[];!function(t,n){document.querySelectorAll(t).forEach((function(t){t.classList.contains("tb_theme_title")||n(t)}))}(G,(function(t){var n=window.getComputedStyle(t),o=y(n.color),e=n.fontSize,c=n.fontWeight,i=n.fontFamily,a=n.textAlign;Y.push(o,e,c,i,a)}));var tt=Y[0]?Y[0]:b,nt=Y[1]?Y[1]:b,ot=Y[2]?Y[2]:b,et=Y[3]?Y[3]:b,ct=Y[4]?Y[4]:b;!function(t,n){document.querySelectorAll(t).forEach((function(t){t.classList.contains("tb_theme_sub_title")||n(t)}))}(K,(function(t){var n=window.getComputedStyle(t),o=y(n.color),e=n.fontSize,c=n.fontWeight,i=n.fontFamily,a=n.textAlign;$.push(o,e,c,i,a)}));var it,at=$[0]?$[0]:b,lt=$[1]?$[1]:b,rt=$[2]?$[2]:b,st=$[3]?$[3]:b,gt=$[4]?$[4]:b,dt=M?window.getComputedStyle(M):Z?window.getComputedStyle(Z):O?window.getComputedStyle(O):X?window.getComputedStyle(X):"",ut=(dt&&dt.getPropertyValue("font-size"),A?A.getPropertyValue("color"):""),pt=A?A.getPropertyValue("font-family"):"",ht=(A&&A.getPropertyValue("line-height"),A?A.getPropertyValue("font-weight"):""),bt=A?A.getPropertyValue("font-style"):"",ft=(A&&A.getPropertyValue("text-align"),document.querySelector("a")),mt=document.getElementsByTagName("button"),wt=((it=ft?window.getComputedStyle(ft):mt.length>0?window.getComputedStyle(mt[0]):"")&&it.getPropertyValue("font-size"),it?it.getPropertyValue("color"):""),vt=it?it.getPropertyValue("font-family"):"",_t=(it&&it.getPropertyValue("line-height"),it&&it.getPropertyValue("font-weight"),it&&it.getPropertyValue("font-style"),it?it.getPropertyValue("background-color"):""),yt=it?it.getPropertyValue("border-color"):"",kt=y(P?F||h:c.fontColor),xt=P?D||"14px":B,St=P||""==L?I||b:L||b,Pt=x(P,E||"400",E,0,"regular"),Ct=x(P,Q||"normal",Q,0,"normal"),zt=y(j),Wt=P&&R||"1.5",jt=y(ut||h),Tt=c.aspectImageRatio?"".concat(c.aspectImageRatio,"%"):"100%";const Lt=c.numberOfCoumn;var Bt=0;Bt=8==Lt?2:12==Lt||18==Lt?3:32==Lt?4:2;var Ut=y(P?ut||h:C),Ht=P||""==L?pt||b:L||b,Vt=P?(0,l.uu)(F||h,W):(0,l.uu)(T,W),qt=P?16:B,Dt=P?(0,l.uu)(F||h,W):(0,l.uu)(j,W),Ft=P?Ht:""!=L?L:I||b,It=P?(0,l.uu)(ut||h,W):(0,l.uu)(C,W),Rt=P||""==(null===a||void 0===a||null===(n=a.CatalogueTitle)||void 0===n?void 0:n.font)?pt||b:m.font,Et=x(P,k(m.varient).style,bt,0,"normal"),Qt=x(P,k(m.varient).weight,ht,0,"600"),Mt=P?"16px":"".concat(m.size,"px"),Ot=P?(0,l.uu)(ut||h,W):(0,l.uu)(m.color,W),Xt=P||""==v.font?pt||b:v.font?v.font:b,Zt=x(P,k(v.varient).style,bt,0,"normal"),At=x(P,k(v.varient).weight,ht,0,"600"),Nt=P?"14px":"".concat(v.size,"px"),Gt=P?(0,l.uu)(ut||h,W):(0,l.uu)(v.color,W),Jt=P||""==w.font?pt||b:w.font?w.font:b,Kt=x(P,k(w.varient).style,bt,0,"normal"),Yt=x(P,k(w.varient).weight,ht,0,"600"),$t=P?"14px":"".concat(w.size,"px"),tn=P?(0,l.uu)(ut||h,W):(0,l.uu)(w.color,W),nn=P||""==f.font?pt||b:f.font?f.font:b,on=x(P,k(f.varient).style,bt,0,"normal"),en=x(P,k(f.varient).weight,ht,0,"600"),cn=P?"14px":"".concat(f.size,"px"),an=f.color,ln=f.background,rn=P&&vt||b,sn=x(P,k(f.varient).style,bt,0,"normal"),gn=x(P,k(f.varient).weight,ht,0,"600"),dn=P&&wt?h:"#545454",un=P&&_t||p,pn=P&&yt?h:"#545454",hn=P||""==(null===S||void 0===S?void 0:S.font)?pt||b:null===S||void 0===S?void 0:S.font,bn=x(P,k(null===S||void 0===S?void 0:S.varient).style,bt,0,"normal"),fn=x(P,k(null===S||void 0===S?void 0:S.varient).weight,ht,0,"600"),mn=P?"14px":"".concat(null===S||void 0===S?void 0:S.size,"px"),wn=null===S||void 0===S?void 0:S.color,vn=null===S||void 0===S?void 0:S.background,_n=_.color,yn=_.background,kn=null===r||void 0===r?void 0:r.onsite_css_font_btn,xn=x(P,k(null===r||void 0===r?void 0:r.varient).style,bt,0,"normal"),Sn=x(P,k(null===r||void 0===r?void 0:r.varient).weight,ht,0,"600"),Pn="".concat(null===r||void 0===r?void 0:r.onsite_txt_font_size,"px"),Cn=null===r||void 0===r?void 0:r.onsite_btn_txt_color,zn=null===r||void 0===r?void 0:r.onsite_btn_color,Wn="".concat(null===d||void 0===d?void 0:d.title_font_size,"px"),jn=null===d||void 0===d?void 0:d.subtitle_css_font,Tn=null===d||void 0===d?void 0:d.title_font_color,Ln=null===d||void 0===d?void 0:d.title_backgroud_color,Bn=k(null===d||void 0===d?void 0:d.title_font_varient).weight,Un="".concat(null===d||void 0===d?void 0:d.subTitle_font_size,"px"),Hn=null===d||void 0===d?void 0:d.subtitle_css_font,Vn=null===d||void 0===d?void 0:d.subTitle_font_color,qn=null===d||void 0===d?void 0:d.subTitle_backgroud_color,Dn=k(null===d||void 0===d?void 0:d.subtitle_font_varient).weight,Fn=1==(null===d||void 0===d?void 0:d.status)?parseInt(null===d||void 0===d?void 0:d.ticker_height):0,In=1==(null===(o=u)||void 0===o?void 0:o.status)?parseInt(null===(e=u)||void 0===e?void 0:e.banner_height):0;return{cardStyle:{color:kt,fontSize:xt,font:St,fontWeight:Pt,fontStyle:Ct,iconColor:zt,lineHeight:Wt,linkColor:jt,background:W,authorColor:Ut,cardPadding:null!==c&&void 0!==c&&c.padding?"".concat(c.padding,"px"):"0px",authorFont:Ht,radius:"".concat(c.radius,"px"),iconPosition:"".concat(12+(c.radius?c.radius/3.5:0),"px"),cardSize:Tt,rows:Bt},ctaBtn:{font:hn,varient:bn,weight:fn,size:mn,color:wn,background:vn,padding:"8px 10px",radius:"3px",minHeight:"40px",transition:"all .3s ease-out 0s",colorHover:wn,backgroundHover:vn},button:{font:rn,varient:sn,weight:gn,size:"14px",color:dn,borderColor:pn,background:un,padding:"8px 10px",radius:"3px",minHeight:"40px",transition:"all .3s ease-out 0s",colorHover:dn,backgroundHover:un},popUpProperties:{background:W,font:St,fontSize:"".concat(qt,"px"),color:Vt,iconColor:Dt,fontWeight:Pt,fontStyle:Ct,authorFont:Ft,authorFontSize:"14px",authorColor:It,authorfontWeight:"600"},ProductSettings:{CatalogueTitle:{font:Rt,varient:Et,weight:Qt,size:Mt,color:Ot},ProductTitle:{font:Xt,varient:Zt,weight:At,size:Nt,color:Gt},Price:{font:Jt,varient:Kt,weight:Yt,size:$t,color:tn},Button:{font:nn,varient:on,weight:en,size:cn,color:an,background:ln},Hotspot:{color:_n,background:yn,status:1}},UgcSetting:{font:kn,varient:xn,weight:Sn,size:Pn,color:Cn,background:zn},heading:{title:{size:nt,font:et,fontWeight:ot,color:tt,textalign:ct}},subheading:{subtitle:{size:lt,font:st,fontWeight:rt,color:at,textalign:gt}},ticker:{heading:{size:Wn,font:jn,fontWeight:Bn,color:Tn,background:Ln},desc:{size:Un,font:Hn,fontWeight:Dn,color:Vn,background:qn}},height:{banner:"".concat(In,"px"),ticker:"".concat(Fn,"px")}}})(t);return(0,g.jsx)("style",{children:":root {\n                        --tb-color: ".concat(n.color,";\n                        --tb-font-size:").concat(n.fontSize,";\n                        --tb-font: ").concat(n.font,";\n                        --tb-font-weight: ").concat(n.fontWeight,";\n                        --tb-font-style: ").concat(n.fontStyle,";\n                        --tb-icon-color:").concat(n.iconColor,";\n                        --tb-line-height: ").concat(n.lineHeight,";\n                        --tb-link-color: ").concat(n.linkColor,";\n                        --tb-bg-color: ").concat(n.background,";\n                        --tb-author-color: ").concat(n.authorColor,";\n                        --tb-author-font: ").concat(n.authorFont,";\n                        --tb-border-radius: ").concat(n.radius,";\n                        --tb-icon-position:").concat(n.iconPosition,";\n                        --tb-media-size:").concat(n.cardSize,";\n                        --tb-padding:").concat(n.cardPadding,";\n                        --tb-grid-row:").concat(n.rows,";\n\n                        --tb-cta-color:").concat(o.color,";\n                        --tb-cta-bg-color:").concat(o.background,";\n                        --tb-cta-border-color:").concat(o.borderColor,";\n                        --tb-cta-color-hover:").concat(o.colorHover,";\n                        --tb-cta-bg-color-hover:").concat(o.backgroundHover,";\n                        --tb-cta-border-color-hover:").concat(o.borderHover,";\n                        --tb-cta-border-radius:").concat(o.radius,";\n                        --tb-cta-padding:").concat(o.padding,";\n                        --tb-cta-height:").concat(o.minHeight,";\n                        --tb-cta-width:").concat(o.minWidth,";\n                        --tb-cta-font:").concat(o.font,";\n                        --tb-cta-font-weight:").concat(o.weight,";\n                        --tb-cta-transition:").concat(o.transition,";\n\n                        --tb-btn-color:").concat(e.color,";\n                        --tb-btn-bg-color:").concat(e.background,";\n                        --tb-btn-border-color:").concat(e.borderColor,";\n                        --tb-btn-color-hover:").concat(e.colorHover,";\n                        --tb-btn-bg-color-hover:").concat(e.backgroundHover,";\n                        --tb-btn-border-color-hover:").concat(e.borderHover,";\n                        --tb-btn-border-radius:").concat(e.radius,";\n                        --tb-btn-padding:").concat(e.padding,";\n                        --tb-btn-height:").concat(e.minHeight,";\n                        --tb-btn-width:").concat(e.minWidth,";\n                        --tb-btn-font:").concat(e.font,";\n                        --tb-btn-font-weight:").concat(e.weight,";\n                        --tb-btn-transition:").concat(e.transition,";\n\n                        --tb-popup-color:").concat(c.color,";\n                        --tb-popup-bg-color:").concat(c.background,";\n                        --tb-popup-font:").concat(c.font,";\n                        --tb-popup-font-size:").concat(c.fontSize,";\n                        --tb-popup-icon-color:").concat(c.iconColor,";\n                        --tb-popup-font-weight:").concat(c.fontWeight,";\n                        --tb-popup-font-style: ").concat(c.fontStyle,";\n\n                        --tb-popup-author-font:").concat(c.authorFont,";\n                        --tb-popup-author-font-size:").concat(c.authorFontSize,";\n                        --tb-popup-author-font-weight:").concat(c.authorfontWeight,";\n                        --tb-popup-author-color:").concat(c.authorColor,";\n\n\n                        --tb-catalogue-font:").concat(i.CatalogueTitle.font,";\n                        --tb-catalogue-varient:").concat(i.CatalogueTitle.varient,";\n                        --tb-catalogue-weight:").concat(i.CatalogueTitle.weight,";\n                        --tb-catalogue-size:").concat(i.CatalogueTitle.size,";\n                        --tb-catalogue-color:").concat(i.CatalogueTitle.color,";\n\n                        --tb-product-font:").concat(i.ProductTitle.font,";\n                        --tb-product-varient:").concat(i.ProductTitle.varient,";\n                        --tb-product-size:").concat(i.ProductTitle.size,";\n                        --tb-product-color:").concat(i.ProductTitle.color,";\n\n                        --tb-price-font:").concat(i.Price.font,";\n                        --tb-price-weight:").concat(i.Price.weight,";\n                        --tb-price-varient:").concat(i.Price.varient,";\n                        --tb-price-size:").concat(i.Price.size,";\n                        --tb-price-color:").concat(i.Price.color,";\n\n                        --tb-shop-btn-font:").concat(i.Button.font,";\n                        --tb-shop-btn-weight:").concat(i.Button.weight,";\n                        --tb-shop-btn-varient:").concat(i.Button.varient,";\n                        --tb-shop-btn-size:").concat(i.Button.size,";\n                        --tb-shop-btn-color:").concat(i.Button.color,";\n                        --tb-shop-btn-bg-color:").concat(i.Button.background,";\n\n                        --tb-hotspot-color:").concat(i.Hotspot.color,";\n                        --tb-hotspot-bg-color:").concat(i.Hotspot.background,";\n\n                        --tb-su-btn-font:").concat(null===a||void 0===a?void 0:a.font,";\n                        --tb-su-btn-varient:").concat(null===a||void 0===a?void 0:a.varient,";\n                        --tb-su-btn-weight:").concat(null===a||void 0===a?void 0:a.weight,";\n                        --tb-su-btn-size:").concat(null===a||void 0===a?void 0:a.size,";\n                        --tb-su-btn-color:").concat(null===a||void 0===a?void 0:a.color,";\n                        --tb-su-btn-background:").concat(null===a||void 0===a?void 0:a.background,";\n\n                        --tb-t-font-size:").concat(r.title.size,";\n                        --tb-t-font-family:").concat(r.title.font,";\n                        --tb-t-font-weight:").concat(r.title.fontWeight,";\n                        --tb-t-color:").concat(r.title.color,";\n                        --tb-t-text-align:").concat(r.title.textalign,";\n\n                        --tb-st-font-size:").concat(d.subtitle.size,";\n                        --tb-st-font-family:").concat(d.subtitle.font,";\n                        --tb-st-font-weight:").concat(d.subtitle.fontWeight,";\n                        --tb-st-color:").concat(d.subtitle.color,";\n                        --tb-st-text-align:").concat(d.subtitle.textalign,";\n\n                        --tb-ti-title-font-size:").concat(u.heading.size,";\n                        --tb-ti-title-font-family:").concat(u.heading.font,";\n                        --tb-ti-title-font-weight:").concat(u.heading.fontWeight,";\n                        --tb-ti-title-color:").concat(u.heading.color,";\n                        --tb-ti-title-background:").concat(u.heading.background,";\n\n                        --tb-ti-desc-font-size:").concat(u.desc.size,";\n                        --tb-ti-desc-font-family:").concat(u.desc.font,";\n                        --tb-ti-desc-font-weight:").concat(u.desc.fontWeight,";\n                        --tb-ti-desc-color:").concat(u.desc.color,";\n                        --tb-ti-desc-background:").concat(u.desc.background,";\n\n                        --tb-theme-height:calc(100vh - ").concat(p.banner," - ").concat(p.ticker,");\n                        --tb-banner-height:").concat(p.banner,";\n                        --tb-ticker-height:").concat(p.ticker,";\n\n                    }")})},h=t=>{const n="css-".concat(t.Wall.id);if(!document.getElementById(n)&&1===t.Personalization.cssStatus){const o=document.createElement("style");o.type="text/css",o.id=n,o.innerHTML=t.Personalization.css,document.head.appendChild(o)}},b=()=>{try{const n=c.parse(window.location.search);var t=document.documentElement;n&&n.lang?t.setAttribute("lang",n.lang):t.setAttribute("lang","de")}catch(n){console.error(n)}};class f extends e.Component{constructor(t){super(t),this.onLoadModule=t=>{const n=(window.location.href.includes("hashtag_campaign"),!1),{wall:o}=t,e=o.Wall.id,c=o.Wall.owner;n&&(0,r.wl)({wallId:e,domainName:s.QC?s.nX?"https://test.taggbox.com/embed-widget/lite/".concat(e,"?ugcSuite=1&hashtag_campaign=true"):"https://test.taggbox.com/embed-widget/lite/".concat(o.Wall.url,"?hashtag_campaign=true"):s.nX?"https://widget.taggbox.com/".concat(e,"?ugcSuite=1&hashtag_campaign=true"):"https://widget.taggbox.com/".concat(e),ownerId:c,screenshotSize:["1200x624"]}).then((t=>{let{data:n}=t;const{responseCode:e,responseData:c}=n;if(200==e&&c.length>0&&c[0]&&c[0].s3Url){const t=(0,l.CL)()+1e3*((0,l.QM)()+60*((0,l.dn)()+60*(0,l.eZ)()));this.setState({hashtag_campaign_image:"".concat(c[0].s3Url,"?v=").concat(t)})}else{const t=(0,l.Bq)(o.Personalization.widgetTheme);this.setState({hashtag_campaign_image:t})}})).catch((t=>{const n=(0,l.Bq)(o.Personalization.widgetTheme);this.setState({hashtag_campaign_image:n})}))};this.props.wall.ThemeRule.ctaData&&Object.keys(this.props.wall.ThemeRule.ctaData).length>0&&this.props.wall.ThemeRule.ctaData;this.state={hashtag_campaign_image:t.wall.Wall.id&&window.location.href.includes("hashtag_campaign")?"".concat("https://cloud.taggbox.com/wall-branding/wallId_widget_").concat(t.wall.Wall.id,".jpg?v=").concat(d):""}}componentDidMount(){this.onLoadModule(this.props)}componentWillReceiveProps(t){t!=this.props&&s.Jc&&this.onLoadModule(t)}render(){const{hashtag_campaign_image:t}=this.state,{wall:n}=this.props,o=new URLSearchParams(window.location.search).get("preview"),e=n.Personalization.widgetTheme,c=(window.location.href.includes("hashtag_campaign"),!1),l=s.nX?"Tagbox UGC Suite":s.ZQ?"Tagembed Widget":"Taggbox";var r=["inherit","Default"],d=["Inter"];n.UgcSettings&&n.UgcSettings.onsite_link_font_btn&&!r.includes(n.UgcSettings.onsite_link_font_btn)&&d.push(n.UgcSettings.onsite_link_font_btn),n.UgcSettings&&n.UgcSettings.onsite_link_font_msg&&!r.includes(n.UgcSettings.onsite_link_font_msg)&&d.push(n.UgcSettings.onsite_link_font_msg),n.ThemeRule.link_font&&!r.includes(n.ThemeRule.link_font)&&d.push(n.ThemeRule.link_font),n.Banner&&Object.keys(n.Banner).length&&(n.Banner.subtitle_link_font&&!r.includes(n.Banner.subtitle_link_font)&&d.push(n.Banner.subtitle_link_font),n.Banner.title_link_font&&!r.includes(n.Banner.title_link_font)&&d.push(n.Banner.title_link_font)),n.ProductSetting&&Object.keys(n.ProductSetting).length&&(n.ProductSetting.Button.fontLink&&!r.includes(n.ProductSetting.Button.fontLink)&&d.push(n.ProductSetting.Button.fontLink),n.ProductSetting.CatalogueTitle.fontLink&&!r.includes(n.ProductSetting.CatalogueTitle.fontLink)&&d.push(n.ProductSetting.CatalogueTitle.fontLink),n.ProductSetting.Price.fontLink&&!r.includes(n.ProductSetting.Price.fontLink)&&d.push(n.ProductSetting.Price.fontLink),n.ProductSetting.ProductTitle.fontLink&&!r.includes(n.ProductSetting.ProductTitle.fontLink)&&d.push(n.ProductSetting.ProductTitle.fontLink)),n.UgcSettings&&Object.keys(n.UgcSettings).length&&(n.UgcSettings.onsite_css_font_btn&&!r.includes(n.UgcSettings.onsite_css_font_btn)&&d.push(n.UgcSettings.onsite_css_font_btn),n.UgcSettings.onsite_link_font_msg&&!r.includes(n.UgcSettings.onsite_link_font_msg)&&d.push(n.UgcSettings.onsite_link_font_msg)),n.CustomTicker&&Object.keys(n.CustomTicker).length&&(n.CustomTicker.title_link_font&&!r.includes(n.CustomTicker.title_link_font)&&d.push(n.CustomTicker.title_link_font),n.CustomTicker.subtitle_link_font&&!r.includes(n.CustomTicker.subtitle_link_font)&&d.push(n.CustomTicker.subtitle_link_font));var f=d.map((t=>t.replace(/ /g,"+")));return d=[...new Set(f)],(0,g.jsxs)(g.Fragment,{children:[c?(0,g.jsxs)(i.q,{children:[s.nX?(0,g.jsx)("link",{rel:"icon",href:"https://ugc.taggbox.com/favicon.ico"}):null,(0,g.jsx)("meta",{property:"og:type",content:"website"}),(0,g.jsx)("meta",{property:"og:url",content:"https://widget-lite.taggbox.com/".concat(n.Wall.id)}),(0,g.jsx)("meta",{property:"og:title",content:"".concat(n.Wall.name," - ").concat(l," Widget")}),(0,g.jsx)("meta",{property:"og:description",content:"".concat(n.Wall.name," hashtag campaign created using ").concat(l," Widget.")}),(0,g.jsx)("meta",{property:"og:image",content:t}),(0,g.jsx)("meta",{property:"type",content:"website"}),(0,g.jsx)("meta",{property:"url",content:"https://widget-lite.taggbox.com/".concat(n.Wall.id)}),(0,g.jsx)("meta",{property:"title",content:"".concat(n.Wall.name," - ").concat(l," Widget")}),(0,g.jsx)("meta",{property:"description",content:"".concat(n.Wall.name," hashtag campaign created using ").concat(l," Widget.")}),(0,g.jsx)("meta",{property:"image",content:t}),o?document.body.classList.add("tb_previw_th-".concat(e)):null,d.map((function(t,n){return"0"!=t?(0,g.jsx)("link",{href:"".concat(a.do,"/web-fonts/").concat(t,".css"),rel:"stylesheet"},n):null})),u(),n.Wall&&n.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,n.Wall&&n.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,children:'window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = \''.concat(n.Wall.google_tacking_code,'\';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });')}):null]}):window.location.href.includes("widget.taggbox.com")||window.location.href.includes("widget-test.tagembed.com")||window.location.href.includes("widgets.tagembed.com")||window.location.href.includes("widget-test.tagshop.ai")||window.location.href.includes("widget.tagshop.ai")||window.location.href.includes("display-test.socialwalls.com")?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(i.q,{children:[s.nX?(0,g.jsx)("link",{rel:"icon",href:"https://ugc.taggbox.com/favicon.ico"}):s.ZQ?(0,g.jsx)("link",{rel:"icon",href:"https://tagembed.com/wp-content/uploads/2020/09/favicon.ico"}):null,(0,g.jsx)("meta",{property:"og:type",content:"website"}),(0,g.jsx)("meta",{property:"og:url",content:s.ZQ?"https://widget.tagembed.com/".concat(n.Wall.id):"https://widget-lite.taggbox.com/".concat(n.Wall.id)}),(0,g.jsx)("meta",{property:"og:title",content:"".concat(n.Wall.name," - ").concat(l," Widget")}),(0,g.jsx)("meta",{property:"og:description",content:"".concat(n.Wall.name," featuring Social Feed using ").concat(l," Widget. It helps brands to curate & embed social feeds, user reviews, UGC etc. on websites to boost sales, traffic, & engagement.")}),(0,g.jsx)("meta",{property:"og:image",content:t}),(0,g.jsx)("meta",{property:"type",content:"website"}),(0,g.jsx)("meta",{property:"url",content:s.ZQ?"https://widget.tagembed.com/".concat(n.Wall.id):"https://widget-lite.taggbox.com/".concat(n.Wall.id)}),(0,g.jsx)("meta",{property:"title",content:"".concat(n.Wall.name," - ").concat(l," Widget")}),(0,g.jsx)("meta",{property:"description",content:"".concat(n.Wall.name," featuring Social Feed using ").concat(l," Widget. It helps brands to curate & embed social feeds, user reviews, UGC etc. on websites to boost sales, traffic, & engagement.")}),(0,g.jsx)("meta",{property:"image",content:t}),o?document.body.classList.add("tb_previw_th-".concat(e)):null,d.map((function(t,n){return"0"!=t?(0,g.jsx)("link",{href:"".concat(a.do,"/web-fonts/").concat(t,".css"),rel:"stylesheet"},n):null})),u(),n.Wall&&n.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,n.Wall&&n.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,children:'window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = \''.concat(n.Wall.google_tacking_code,'\';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });')}):null,p(n)]}),132857==n.Wall.owner&&s.Jx?b():null]}):(0,g.jsxs)(i.q,{children:[o?document.body.classList.add("tb_previw_th-".concat(e)):null,d.map((function(t,n){return"0"!=t?(0,g.jsx)("link",{href:"".concat(a.do,"/web-fonts/").concat(t,".css"),rel:"stylesheet"},n):null})),u(),n.Wall&&n.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,n.Wall&&n.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,children:'window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = \''.concat(n.Wall.google_tacking_code,'\';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });')}):null,p(n)]}),h(n)]})}}const m=(0,e.memo)(f)}}]);