"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4674],{84674:(t,e,o)=>{o.r(e),o.d(e,{default:()=>w});var n=o(9950),i=o(74465),l=(o(41377),o(72772)),a=o(80415),r=o(52867),s=o(14478),c=o(66345);var g=o(44414);const d=(0,r.qV)()+1e3*((0,r.Hn)()+60*((0,r.Hp)()+60*(0,r.n0)())),u=()=>(0,g.jsx)("script",{async:!0,children:'window.twttr = (function (d, s, id) {\n                            var js, fjs = d.getElementsByTagName(s)[0],\n                                t = window.twttr || {};\n                            if (d.getElementById(id)) return t;\n                            js = d.createElement(s);\n                            js.id = id;\n                            js.src = "https://platform.twitter.com/widgets.js";\n                            fjs.parentNode.insertBefore(js, fjs);\n\n                            t._e = [];\n                            t.ready = function (f) {\n                                                    t._e.push(f);\n                            };\n\n                            return t;\n                            }(document, "script", "twitter-wjs"));'}),h=t=>{const{cardStyle:e,ctaBtn:o,button:n,popUpProperties:i,ProductSettings:l,UgcSetting:a,heading:s,subheading:g,ticker:d,height:u}=(t=>{var e,o,n;const{ThemeRule:i,Personalization:l,ProductSetting:a,UgcSettings:s,Wall:g,CustomTicker:d}=t;var u="";u=c.yR?t.Banner:t.CustomBanner;const h="#ffffff",p="#000000",b="inherit";let f,m,w,v,y;"undefined"!==typeof a&&a?({Button:f,CatalogueTitle:m,Price:w,ProductTitle:v,Hotspot:y}=a):(m={fontLink:"",font:"",varient:"",size:"",color:"",text:""},v={fontLink:"",font:"",varient:"",size:"",color:""},w={fontLink:"",font:"",varient:"",size:"",color:""},f={fontLink:"",font:"",varient:"",size:"",background:"",color:"",text:"",newTab:""},y={type:"",background:"",color:"",status:""}),l.widgetTheme;const $=t=>{var e=[],o=[];c.HY&&(e=[61,16,53],o=[4,55,50]),c.uS&&(o=[4,55,16,56,50]),c.aD&&(o=[74,69,71,67,65,68]);const n=!!e.includes(l.widgetTheme),a=!!o.includes(l.widgetTheme),s=n&&1==i.postHover||a?p:n&&0==i.postHover?h:z;return(0,r.vG)(t,s)},_=t=>{const e=t?t.split("-"):"";return{weight:e[0]?e[0]:"",style:e[1]?e[1]:""}},k=(t,e,o,n,i)=>t?o:""!=e?e:i,x=i.ctaData&&Object.keys(i.ctaData).length>0?i.ctaData:{},S=!(!i.inheritStyles||1!=!c.aD),{authorColor:W,postHover:P,cardColor:z,iconColor:C,fontColor:j,css_font:T,fontSize:L,font_varient:H,authorFont:B,authorFontVariant:U}=i;var V=document.querySelector("body"),R=document.querySelector("p"),F=V?window.getComputedStyle(V):R?window.getComputedStyle(R):"",q=F?F.getPropertyValue("font-size"):"",G=F?F.getPropertyValue("color"):"",D=F?F.getPropertyValue("font-family"):"",I=F?F.getPropertyValue("line-height"):"",E=(F&&F.getPropertyValue("font-weight"),F&&F.getPropertyValue("font-style"),V=document.querySelector("body"),R=document.querySelector("p"),document.querySelector("strong")),M=document.querySelector("h2"),A=document.querySelector("h3"),N=document.querySelector("h1"),O=E?window.getComputedStyle(E):M?window.getComputedStyle(M):A?window.getComputedStyle(A):"",Q=document.querySelector(".tb_theme_title");if(Q)var Y=Q.tagName;var J=document.querySelector(".tb_theme_sub_title");if(J)var K=J.tagName;var X=[],Z=[];!function(t,e){document.querySelectorAll(t).forEach((function(t){t.classList.contains("tb_theme_title")||e(t)}))}(Y,(function(t){var e=window.getComputedStyle(t),o=$(e.color),n=e.fontSize,i=e.fontWeight,l=e.fontFamily,a=e.textAlign;X.push(o,n,i,l,a)}));var tt=X[0]?X[0]:b,et=X[1]?X[1]:b,ot=X[2]?X[2]:b,nt=X[3]?X[3]:b,it=X[4]?X[4]:b;!function(t,e){document.querySelectorAll(t).forEach((function(t){t.classList.contains("tb_theme_sub_title")||e(t)}))}(K,(function(t){var e=window.getComputedStyle(t),o=$(e.color),n=e.fontSize,i=e.fontWeight,l=e.fontFamily,a=e.textAlign;Z.push(o,n,i,l,a)}));var lt,at=Z[0]?Z[0]:b,rt=Z[1]?Z[1]:b,st=Z[2]?Z[2]:b,ct=Z[3]?Z[3]:b,gt=Z[4]?Z[4]:b,dt=E?window.getComputedStyle(E):N?window.getComputedStyle(N):M?window.getComputedStyle(M):A?window.getComputedStyle(A):"",ut=(dt&&dt.getPropertyValue("font-size"),O?O.getPropertyValue("color"):""),ht=O?O.getPropertyValue("font-family"):"",pt=(O&&O.getPropertyValue("line-height"),O?O.getPropertyValue("font-weight"):""),bt=O?O.getPropertyValue("font-style"):"",ft=(O&&O.getPropertyValue("text-align"),document.querySelector("a")),mt=document.getElementsByTagName("button"),wt=((lt=ft?window.getComputedStyle(ft):mt.length>0?window.getComputedStyle(mt[0]):"")&&lt.getPropertyValue("font-size"),lt?lt.getPropertyValue("color"):""),vt=lt?lt.getPropertyValue("font-family"):"",yt=(lt&&lt.getPropertyValue("line-height"),lt&&lt.getPropertyValue("font-weight"),lt&&lt.getPropertyValue("font-style"),lt?lt.getPropertyValue("background-color"):""),$t=lt?lt.getPropertyValue("border-color"):"",_t=$(S?G||p:i.fontColor),kt=S?q||"14px":`${L}px`,xt=S||""==T?D||b:T||b,St=_(i.font_varient).weight?_(i.font_varient).weight:"normal",Wt=_(i.font_varient).style?_(i.font_varient).style:"normal",Pt=$(C),zt=S&&I||"1.5",Ct=$(ut||p),jt=i.aspectImageRatio?`${i.aspectImageRatio}%`:"100%";const Tt=i.numberOfCoumn;var Lt=0;Lt=8==Tt?2:12==Tt||18==Tt?3:32==Tt?4:2;var Ht=$(S?ut||p:W);if(c.aD)var Bt=(S||""==T)&&ht||B||"inherit",Ut=_(U).weight?_(U).weight:"normal",Vt=_(U).style?_(U).style:"normal";else Bt=S||""==T?ht||b:T||b,Ut=600,Vt="normal";var Rt=S?(0,r.vG)(G||p,z):(0,r.vG)(j,z),Ft=_(i.font_varient).weight?_(i.font_varient).weight:"normal",qt=_(i.font_varient).style?_(i.font_varient).style:"normal",Gt=S?(0,r.vG)(G||p,z):(0,r.vG)(C,z);if(c.aD){_(U).weight,_(U).style;var Dt=c.yR?S?16:L:24}else Dt=S?16:L;var It=S?(0,r.vG)(ut||p,z):(0,r.vG)(W,z),Et=S||""==(null===a||void 0===a||null===(e=a.CatalogueTitle)||void 0===e?void 0:e.font)?ht||b:m.font,Mt=k(S,_(m.varient).style,bt,0,"normal"),At=k(S,_(m.varient).weight,pt,0,"600"),Nt=S?"16px":`${m.size}px`,Ot=S?(0,r.vG)(ut||p,z):(0,r.vG)(m.color,z),Qt=S||""==v.font?ht||b:v.font?v.font:b,Yt=k(S,_(v.varient).style,bt,0,"normal"),Jt=k(S,_(v.varient).weight,pt,0,"600"),Kt=S?"14px":`${v.size}px`,Xt=S?(0,r.vG)(ut||p,z):(0,r.vG)(v.color,z),Zt=S||""==w.font?ht||b:w.font?w.font:b,te=k(S,_(w.varient).style,bt,0,"normal"),ee=k(S,_(w.varient).weight,pt,0,"600"),oe=S?"14px":`${w.size}px`,ne=S?(0,r.vG)(ut||p,z):(0,r.vG)(w.color,z),ie=S||""==f.font?ht||b:f.font?f.font:b,le=k(S,_(f.varient).style,bt,0,"normal"),ae=k(S,_(f.varient).weight,pt,0,"600"),re=S?"14px":`${f.size}px`,se=f.color,ce=f.background,ge=S&&vt||b,de=k(S,_(f.varient).style,bt,0,"normal"),ue=k(S,_(f.varient).weight,pt,0,"600"),he=S&&wt?p:"#545454",pe=S&&yt||h,be=S&&$t?p:"#545454",fe=S||""==(null===x||void 0===x?void 0:x.font)?ht||b:null===x||void 0===x?void 0:x.font,me=k(S,_(null===x||void 0===x?void 0:x.varient).style,bt,0,"normal"),we=k(S,_(null===x||void 0===x?void 0:x.varient).weight,pt,0,"600"),ve=S?"14px":`${null===x||void 0===x?void 0:x.size}px`,ye=null===x||void 0===x?void 0:x.color,$e=null===x||void 0===x?void 0:x.background,_e=y.color,ke=y.background,xe=null===s||void 0===s?void 0:s.onsite_css_font_btn,Se=k(S,_(null===s||void 0===s?void 0:s.varient).style,bt,0,"normal"),We=k(S,_(null===s||void 0===s?void 0:s.varient).weight,pt,0,"600"),Pe=`${null===s||void 0===s?void 0:s.onsite_txt_font_size}px`,ze=null===s||void 0===s?void 0:s.onsite_btn_txt_color,Ce=null===s||void 0===s?void 0:s.onsite_btn_color,je=`${null===d||void 0===d?void 0:d.title_font_size}px`,Te=null===d||void 0===d?void 0:d.subtitle_css_font,Le=null===d||void 0===d?void 0:d.title_font_color,He=null===d||void 0===d?void 0:d.title_backgroud_color,Be=_(null===d||void 0===d?void 0:d.title_font_varient).weight,Ue=`${null===d||void 0===d?void 0:d.subTitle_font_size}px`,Ve=null===d||void 0===d?void 0:d.subtitle_css_font,Re=null===d||void 0===d?void 0:d.subTitle_font_color,Fe=null===d||void 0===d?void 0:d.subTitle_backgroud_color,qe=_(null===d||void 0===d?void 0:d.subtitle_font_varient).weight,Ge=1==(null===d||void 0===d?void 0:d.status)?parseInt(null===d||void 0===d?void 0:d.ticker_height):0,De=1==(null===(o=u)||void 0===o?void 0:o.status)?parseInt(null===(n=u)||void 0===n?void 0:n.banner_height):0;return{cardStyle:{color:_t,fontSize:kt,font:xt,fontWeight:St,fontStyle:Wt,iconColor:Pt,lineHeight:zt,linkColor:Ct,background:z,authorColor:Ht,cardPadding:null!==i&&void 0!==i&&i.padding?`${i.padding}px`:"0px",authorFont:Bt,authorFontWeight:Ut,authorFontStyle:Vt,radius:`${i.radius}px`,iconPosition:12+(i.radius?i.radius/3.5:0)+"px",cardSize:jt,rows:Lt},ctaBtn:{font:fe,varient:me,weight:we,size:ve,color:ye,background:$e,padding:"8px 10px",radius:"3px",minHeight:"40px",transition:"all .3s ease-out 0s",colorHover:ye,backgroundHover:$e},button:{font:ge,varient:de,weight:ue,size:"14px",color:he,borderColor:be,background:pe,padding:"8px 10px",radius:"3px",minHeight:"40px",transition:"all .3s ease-out 0s",colorHover:he,backgroundHover:pe},popUpProperties:{background:z,font:xt,fontSize:`${Dt}px`,color:Rt,iconColor:Gt,fontWeight:Ft,fontStyle:qt,authorFont:Bt,authorFontSize:"14px",authorColor:It,authorfontWeight:"600"},ProductSettings:{CatalogueTitle:{font:Et,varient:Mt,weight:At,size:Nt,color:Ot},ProductTitle:{font:Qt,varient:Yt,weight:Jt,size:Kt,color:Xt},Price:{font:Zt,varient:te,weight:ee,size:oe,color:ne},Button:{font:ie,varient:le,weight:ae,size:re,color:se,background:ce},Hotspot:{color:_e,background:ke,status:1}},UgcSetting:{font:xe,varient:Se,weight:We,size:Pe,color:ze,background:Ce},heading:{title:{size:et,font:nt,fontWeight:ot,color:tt,textalign:it}},subheading:{subtitle:{size:rt,font:ct,fontWeight:st,color:at,textalign:gt}},ticker:{heading:{size:je,font:Te,fontWeight:Be,color:Le,background:He},desc:{size:Ue,font:Ve,fontWeight:qe,color:Re,background:Fe}},height:{banner:`${De}px`,ticker:`${Ge}px`}}})(t),h=`style-root-${t.Wall.id}`,p=`:root {\n                        --tb-color: ${e.color};\n                        --tb-font-size:${e.fontSize};\n                        --tb-font: ${e.font};\n                        --tb-font-weight: ${e.fontWeight};\n                        --tb-font-style: ${e.fontStyle};\n                        --tb-icon-color:${e.iconColor};\n                        --tb-line-height: ${e.lineHeight};\n                        --tb-link-color: ${e.linkColor};\n                        --tb-bg-color: ${e.background};\n                        --tb-background-size: contain;\n                        --tb-author-color: ${e.authorColor};\n                        --tb-author-font: ${e.authorFont};\n                        --tb-author-font-weight: ${e.authorFontWeight};\n                        --tb-author-font-style: ${e.authorFontStyle};\n                        --tb-border-radius: ${e.radius};\n                        --tb-icon-position:${e.iconPosition};\n                        --tb-media-size:${e.cardSize};\n                        --tb-padding:${e.cardPadding};\n                        --tb-grid-row:${e.rows};\n\n                        --tb-cta-color:${o.color};\n                        --tb-cta-bg-color:${o.background};\n                        --tb-cta-border-color:${o.borderColor};\n                        --tb-cta-color-hover:${o.colorHover};\n                        --tb-cta-bg-color-hover:${o.backgroundHover};\n                        --tb-cta-border-color-hover:${o.borderHover};\n                        --tb-cta-border-radius:${o.radius};\n                        --tb-cta-padding:${o.padding};\n                        --tb-cta-height:${o.minHeight};\n                        --tb-cta-width:${o.minWidth};\n                        --tb-cta-font:${o.font};\n                        --tb-cta-font-weight:${o.weight};\n                        --tb-cta-transition:${o.transition};\n\n                        --tb-btn-color:${n.color};\n                        --tb-btn-bg-color:${n.background};\n                        --tb-btn-border-color:${n.borderColor};\n                        --tb-btn-color-hover:${n.colorHover};\n                        --tb-btn-bg-color-hover:${n.backgroundHover};\n                        --tb-btn-border-color-hover:${n.borderHover};\n                        --tb-btn-border-radius:${n.radius};\n                        --tb-btn-padding:${n.padding};\n                        --tb-btn-height:${n.minHeight};\n                        --tb-btn-width:${n.minWidth};\n                        --tb-btn-font:${n.font};\n                        --tb-btn-font-weight:${n.weight};\n                        --tb-btn-transition:${n.transition};\n\n                        --tb-popup-color:${i.color};\n                        --tb-popup-bg-color:${i.background};\n                        --tb-popup-font:${i.font};\n                        --tb-popup-font-size:${i.fontSize};\n                        --tb-popup-icon-color:${i.iconColor};\n                        --tb-popup-font-weight:${i.fontWeight};\n                        --tb-popup-font-style: ${i.fontStyle};\n\n                        --tb-popup-author-font:${i.authorFont};\n                        --tb-popup-author-font-size:${i.authorFontSize};\n                        --tb-popup-author-font-weight:${i.authorfontWeight};\n                        --tb-popup-author-font-style:${i.authorfontWeight};\n                        --tb-popup-author-color:${i.authorColor};\n\n\n                        --tb-catalogue-font:${l.CatalogueTitle.font};\n                        --tb-catalogue-varient:${l.CatalogueTitle.varient};\n                        --tb-catalogue-weight:${l.CatalogueTitle.weight};\n                        --tb-catalogue-size:${l.CatalogueTitle.size};\n                        --tb-catalogue-color:${l.CatalogueTitle.color};\n\n                        --tb-product-font:${l.ProductTitle.font};\n                        --tb-product-varient:${l.ProductTitle.varient};\n                        --tb-product-size:${l.ProductTitle.size};\n                        --tb-product-color:${l.ProductTitle.color};\n\n                        --tb-price-font:${l.Price.font};\n                        --tb-price-weight:${l.Price.weight};\n                        --tb-price-varient:${l.Price.varient};\n                        --tb-price-size:${l.Price.size};\n                        --tb-price-color:${l.Price.color};\n\n                        --tb-shop-btn-font:${l.Button.font};\n                        --tb-shop-btn-weight:${l.Button.weight};\n                        --tb-shop-btn-varient:${l.Button.varient};\n                        --tb-shop-btn-size:${l.Button.size};\n                        --tb-shop-btn-color:${l.Button.color};\n                        --tb-shop-btn-bg-color:${l.Button.background};\n\n                        --tb-hotspot-color:${l.Hotspot.color};\n                        --tb-hotspot-bg-color:${l.Hotspot.background};\n\n                        --tb-su-btn-font:${null===a||void 0===a?void 0:a.font};\n                        --tb-su-btn-varient:${null===a||void 0===a?void 0:a.varient};\n                        --tb-su-btn-weight:${null===a||void 0===a?void 0:a.weight};\n                        --tb-su-btn-size:${null===a||void 0===a?void 0:a.size};\n                        --tb-su-btn-color:${null===a||void 0===a?void 0:a.color};\n                        --tb-su-btn-background:${null===a||void 0===a?void 0:a.background};\n\n                        --tb-t-font-size:${s.title.size};\n                        --tb-t-font-family:${s.title.font};\n                        --tb-t-font-weight:${s.title.fontWeight};\n                        --tb-t-color:${s.title.color};\n                        --tb-t-text-align:${s.title.textalign};\n\n                        --tb-st-font-size:${g.subtitle.size};\n                        --tb-st-font-family:${g.subtitle.font};\n                        --tb-st-font-weight:${g.subtitle.fontWeight};\n                        --tb-st-color:${g.subtitle.color};\n                        --tb-st-text-align:${g.subtitle.textalign};\n\n                        --tb-ti-title-font-size:${d.heading.size};\n                        --tb-ti-title-font-family:${d.heading.font};\n                        --tb-ti-title-font-weight:${d.heading.fontWeight};\n                        --tb-ti-title-color:${d.heading.color};\n                        --tb-ti-title-background:${d.heading.background};\n\n                        --tb-ti-desc-font-size:${d.desc.size};\n                        --tb-ti-desc-font-family:${d.desc.font};\n                        --tb-ti-desc-font-weight:${d.desc.fontWeight};\n                        --tb-ti-desc-color:${d.desc.color};\n                        --tb-ti-desc-background:${d.desc.background};\n--tb-theme-height:calc(100vh - ${u.banner} - ${u.ticker});\n                       \n                        --tb-banner-height:${u.banner};\n                        --tb-ticker-height:${u.ticker};\n\n                    }`;if(!document.getElementById(h)){const t=document.createElement("style");t.type="text/css",t.id=h,t.innerHTML=p,document.head.appendChild(t)}},p=t=>{const e=`css-${t.Wall.id}`;if(!document.getElementById(e)&&1===t.Personalization.cssStatus){const o=document.createElement("style");o.type="text/css",o.id=e,o.innerHTML=t.Personalization.css,document.head.appendChild(o)}},b=()=>{try{const e=i.parse(window.location.search);var t=document.documentElement;e&&e.lang?t.setAttribute("lang",e.lang):t.setAttribute("lang","de")}catch(e){console.error(e)}},f=t=>{try{[`#style-root-${t}`,`#css-${t}`].forEach((t=>{var e;return null===(e=document.querySelector(t))||void 0===e?void 0:e.remove()}))}catch(e){}};class m extends n.Component{constructor(t){super(t),this.onLoadModule=t=>{const e=(window.location.href.includes("hashtag_campaign"),!1),{wall:o}=t,n=o.Wall.id,i=o.Wall.owner;e&&(0,s.IS)({wallId:n,domainName:c.dq?c.Qy?`https://test.taggbox.com/embed-widget/lite/${n}?ugcSuite=1&hashtag_campaign=true`:`https://test.taggbox.com/embed-widget/lite/${o.Wall.url}?hashtag_campaign=true`:c.Qy?`https://widget.taggbox.com/${n}?ugcSuite=1&hashtag_campaign=true`:`https://widget.taggbox.com/${n}`,ownerId:i,screenshotSize:["1200x624"]}).then((t=>{let{data:e}=t;const{responseCode:n,responseData:i}=e;if(200==n&&i.length>0&&i[0]&&i[0].s3Url){const t=(0,r.qV)()+1e3*((0,r.Hn)()+60*((0,r.Hp)()+60*(0,r.n0)()));this.setState({hashtag_campaign_image:`${i[0].s3Url}?v=${t}`})}else{const t=(0,r.C_)(o.Personalization.widgetTheme);this.setState({hashtag_campaign_image:t})}})).catch((t=>{const e=(0,r.C_)(o.Personalization.widgetTheme);this.setState({hashtag_campaign_image:e})}))},this.state={hashtag_campaign_image:t.wall.Wall.id&&window.location.href.includes("hashtag_campaign")?`https://cloud.taggbox.com/wall-branding/wallId_widget_${t.wall.Wall.id}.jpg?v=${d}`:""}}componentDidMount(){this.onLoadModule(this.props)}componentWillReceiveProps(t){var e,o;if(t!=this.props&&c.IU)f(null===t||void 0===t||null===(e=t.wall)||void 0===e||null===(o=e.Wall)||void 0===o?void 0:o.id),this.onLoadModule(t);else if(t!=this.props&&window.location.href.includes("addfeedload=load")){var n,i;f(null===t||void 0===t||null===(n=t.wall)||void 0===n||null===(i=n.Wall)||void 0===i?void 0:i.id),this.onLoadModule(t)}}render(){const{hashtag_campaign_image:t}=this.state,{wall:e}=this.props,o=new URLSearchParams(window.location.search).get("preview"),n=e.Personalization.widgetTheme,i=(window.location.href.includes("hashtag_campaign"),!1),r=c.Qy?"Tagbox UGC Suite":c.uS?"Tagembed Widget":c.aD?" Live SocialWall - Tagbox":"Taggbox";var s=["inherit","Default"],d=["Inter"];e.UgcSettings&&e.UgcSettings.onsite_link_font_btn&&!s.includes(e.UgcSettings.onsite_link_font_btn)&&d.push(e.UgcSettings.onsite_link_font_btn),e.UgcSettings&&e.UgcSettings.onsite_link_font_msg&&!s.includes(e.UgcSettings.onsite_link_font_msg)&&d.push(e.UgcSettings.onsite_link_font_msg),e.ThemeRule.link_font&&!s.includes(e.ThemeRule.link_font)&&d.push(e.ThemeRule.link_font),e.ThemeRule.linkfontAuthor&&!s.includes(e.ThemeRule.linkfontAuthor)&&d.push(e.ThemeRule.linkfontAuthor),e.Banner&&Object.keys(e.Banner).length&&(e.Banner.subtitle_link_font&&!s.includes(e.Banner.subtitle_link_font)&&d.push(e.Banner.subtitle_link_font),e.Banner.title_link_font&&!s.includes(e.Banner.title_link_font)&&d.push(e.Banner.title_link_font)),e.ProductSetting&&Object.keys(e.ProductSetting).length&&(e.ProductSetting.Button.fontLink&&!s.includes(e.ProductSetting.Button.fontLink)&&d.push(e.ProductSetting.Button.fontLink),e.ProductSetting.CatalogueTitle.fontLink&&!s.includes(e.ProductSetting.CatalogueTitle.fontLink)&&d.push(e.ProductSetting.CatalogueTitle.fontLink),e.ProductSetting.Price.fontLink&&!s.includes(e.ProductSetting.Price.fontLink)&&d.push(e.ProductSetting.Price.fontLink),e.ProductSetting.ProductTitle.fontLink&&!s.includes(e.ProductSetting.ProductTitle.fontLink)&&d.push(e.ProductSetting.ProductTitle.fontLink)),e.UgcSettings&&Object.keys(e.UgcSettings).length&&(e.UgcSettings.onsite_css_font_btn&&!s.includes(e.UgcSettings.onsite_css_font_btn)&&d.push(e.UgcSettings.onsite_css_font_btn),e.UgcSettings.onsite_link_font_msg&&!s.includes(e.UgcSettings.onsite_link_font_msg)&&d.push(e.UgcSettings.onsite_link_font_msg)),e.CustomTicker&&Object.keys(e.CustomTicker).length&&(e.CustomTicker.title_link_font&&!s.includes(e.CustomTicker.title_link_font)&&d.push(e.CustomTicker.title_link_font),e.CustomTicker.subtitle_link_font&&!s.includes(e.CustomTicker.subtitle_link_font)&&d.push(e.CustomTicker.subtitle_link_font));var f=d.map((t=>t.replace(/ /g,"+")));return d=[...new Set(f)],(0,g.jsxs)(g.Fragment,{children:[i?(0,g.jsxs)(l.m,{children:[c.Qy?(0,g.jsx)("link",{rel:"icon",href:"https://ugc.taggbox.com/favicon.ico"}):null,(0,g.jsx)("meta",{property:"og:type",content:"website"}),(0,g.jsx)("meta",{property:"og:url",content:`https://widget-lite.taggbox.com/${e.Wall.id}`}),(0,g.jsx)("meta",{property:"og:title",content:`${e.Wall.name} - ${r} Widget`}),(0,g.jsx)("meta",{property:"og:description",content:`${e.Wall.name} hashtag campaign created using ${r} Widget.`}),(0,g.jsx)("meta",{property:"og:image",content:t}),(0,g.jsx)("meta",{property:"type",content:"website"}),(0,g.jsx)("meta",{property:"url",content:`https://widget-lite.taggbox.com/${e.Wall.id}`}),(0,g.jsx)("meta",{property:"title",content:`${e.Wall.name} - ${r} Widget`}),(0,g.jsx)("meta",{property:"description",content:`${e.Wall.name} hashtag campaign created using ${r} Widget.`}),(0,g.jsx)("meta",{property:"image",content:t}),o?document.body.classList.add(`tb_previw_th-${n}`):null,d.map((function(t,e){return"0"!=t?(0,g.jsx)("link",{href:`${a.th}/web-fonts/${t}.css`,rel:"stylesheet"},e):null})),c.yR&&u(),c.yR&&e.Wall&&e.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,e.Wall&&e.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,children:`window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = '${e.Wall.google_tacking_code}';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });`}):null]}):window.location.href.includes("widget.taggbox.com")||window.location.href.includes("widget-test.tagembed.com")||window.location.href.includes("widgets.tagembed.com")||window.location.href.includes("widget-test.tagshop.ai")||window.location.href.includes("widget.tagshop.ai")||window.location.href.includes("display-test.socialwalls.com")||window.location.href.includes("display.socialwalls.com")||window.location.href.includes("widget.socialwalls.com")||window.location.href.includes("display.taggbox.com")?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(l.m,{children:[c.Qy?(0,g.jsx)("link",{rel:"icon",href:"https://ugc.taggbox.com/favicon.ico"}):c.uS?(0,g.jsx)("link",{rel:"icon",href:"https://tagembed.com/wp-content/uploads/2020/09/favicon.ico"}):c.aD?(0,g.jsx)("link",{rel:"icon",href:"https://cloud.tagbox.com/website/socialwalls/assets/img/socialwalls-32x32.png"}):null,(0,g.jsx)("title",{children:`${e.Wall.name} | ${r}`}),(0,g.jsx)("meta",{property:"og:type",content:"website"}),(0,g.jsx)("meta",{property:"og:url",content:c.uS?`https://widget.tagembed.com/${e.Wall.id}`:`https://widget-lite.taggbox.com/${e.Wall.id}`}),(0,g.jsx)("meta",{property:"og:title",content:`${e.Wall.name} - ${r} Widget`}),(0,g.jsx)("meta",{property:"og:description",content:`${e.Wall.name} featuring Social Feed using ${r} Widget. It helps brands to curate & embed social feeds, user reviews, UGC etc. on websites to boost sales, traffic, & engagement.`}),(0,g.jsx)("meta",{property:"og:image",content:t}),(0,g.jsx)("meta",{property:"type",content:"website"}),(0,g.jsx)("meta",{property:"url",content:c.uS?`https://widget.tagembed.com/${e.Wall.id}`:`https://widget-lite.taggbox.com/${e.Wall.id}`}),(0,g.jsx)("meta",{property:"title",content:`${e.Wall.name} - ${r} Widget`}),(0,g.jsx)("meta",{property:"description",content:`${e.Wall.name} featuring Social Feed using ${r} Widget. It helps brands to curate & embed social feeds, user reviews, UGC etc. on websites to boost sales, traffic, & engagement.`}),(0,g.jsx)("meta",{property:"image",content:t}),o?document.body.classList.add(`tb_previw_th-${n}`):null,d.map((function(t,e){return"0"!=t?(0,g.jsx)("link",{href:`${a.M$}/web-fonts/${t}.css`,rel:"stylesheet"},e):null})),c.yR&&u(),c.yR&&e.Wall&&e.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,e.Wall&&e.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,children:`window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = '${e.Wall.google_tacking_code}';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });`}):null]}),132857==e.Wall.owner&&c.MH?b():null]}):(0,g.jsxs)(l.m,{children:[o?document.body.classList.add(`tb_previw_th-${n}`):null,d.map((function(t,e){return"0"!=t?(0,g.jsx)("link",{href:`${a.M$}/web-fonts/${t}.css`,rel:"stylesheet"},e):null})),c.yR&&u(),c.yR&&e.Wall&&e.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,c.yR&&e.Wall&&e.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,children:`window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = '${e.Wall.google_tacking_code}';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });`}):null]}),h(e),p(e)]})}}const w=(0,n.memo)(m)}}]);