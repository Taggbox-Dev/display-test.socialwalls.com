"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5807],{75807:(t,n,o)=>{o.r(n),o.d(n,{default:()=>m});var e=o(47313),i=o(31172),c=(o(34862),o(90182)),a=o(98501),l=o(17739),r=o(40475),s=o(35179);var g=o(46417);const u=(0,l.CL)()+1e3*((0,l.QM)()+60*((0,l.dn)()+60*(0,l.eZ)())),d=()=>(0,g.jsx)("script",{async:!0,children:'window.twttr = (function (d, s, id) {\n                            var js, fjs = d.getElementsByTagName(s)[0],\n                                t = window.twttr || {};\n                            if (d.getElementById(id)) return t;\n                            js = d.createElement(s);\n                            js.id = id;\n                            js.src = "https://platform.twitter.com/widgets.js";\n                            fjs.parentNode.insertBefore(js, fjs);\n\n                            t._e = [];\n                            t.ready = function (f) {\n                                                    t._e.push(f);\n                            };\n\n                            return t;\n                            }(document, "script", "twitter-wjs"));'}),h=t=>{const{cardStyle:n,ctaBtn:o,button:e,popUpProperties:i,ProductSettings:c,UgcSetting:a,heading:r,subheading:u,ticker:d,height:h}=(t=>{var n,o,e;const{ThemeRule:i,Personalization:c,ProductSetting:a,UgcSettings:r,Wall:g,CustomTicker:u}=t;var d="";d=s.P2?t.Banner:t.CustomBanner;const h="#ffffff",p="#000000",b="inherit";let f,m,w,v,_;"undefined"!==typeof a&&a?({Button:f,CatalogueTitle:m,Price:w,ProductTitle:v,Hotspot:_}=a):(m={fontLink:"",font:"",varient:"",size:"",color:"",text:""},v={fontLink:"",font:"",varient:"",size:"",color:""},w={fontLink:"",font:"",varient:"",size:"",color:""},f={fontLink:"",font:"",varient:"",size:"",background:"",color:"",text:"",newTab:""},_={type:"",background:"",color:"",status:""}),c.widgetTheme;const y=t=>{var n=[],o=[];s.ig&&(n=[61,16,53],o=[4,55,50]),s.ZQ&&(o=[4,55,16,56,50]),s.bX&&(o=[74,69,71,67,65,68]);const e=!!n.includes(c.widgetTheme),a=!!o.includes(c.widgetTheme),r=e&&1==i.postHover||a?p:e&&0==i.postHover?h:W;return(0,l.uu)(t,r)},k=t=>{const n=t?t.split("-"):"";return{weight:n[0]?n[0]:"",style:n[1]?n[1]:""}},x=(t,n,o,e,i)=>t?o:""!=n?n:i,S=i.ctaData&&Object.keys(i.ctaData).length>0?i.ctaData:{},P=!(!i.inheritStyles||1!=!s.bX),{authorColor:z,postHover:C,cardColor:W,iconColor:j,fontColor:T,css_font:L,fontSize:B,font_varient:U,authorFont:H,authorFontVariant:V}=i;var q=document.querySelector("body"),F=document.querySelector("p"),I=q?window.getComputedStyle(q):F?window.getComputedStyle(F):"",R=I?I.getPropertyValue("font-size"):"",X=I?I.getPropertyValue("color"):"",A=I?I.getPropertyValue("font-family"):"",D=I?I.getPropertyValue("line-height"):"",E=(I&&I.getPropertyValue("font-weight"),I&&I.getPropertyValue("font-style"),q=document.querySelector("body"),F=document.querySelector("p"),document.querySelector("strong")),M=document.querySelector("h2"),Q=document.querySelector("h3"),Z=document.querySelector("h1"),N=E?window.getComputedStyle(E):M?window.getComputedStyle(M):Q?window.getComputedStyle(Q):"",O=document.querySelector(".tb_theme_title");if(O)var G=O.tagName;var J=document.querySelector(".tb_theme_sub_title");if(J)var K=J.tagName;var Y=[],$=[];!function(t,n){document.querySelectorAll(t).forEach((function(t){t.classList.contains("tb_theme_title")||n(t)}))}(G,(function(t){var n=window.getComputedStyle(t),o=y(n.color),e=n.fontSize,i=n.fontWeight,c=n.fontFamily,a=n.textAlign;Y.push(o,e,i,c,a)}));var tt=Y[0]?Y[0]:b,nt=Y[1]?Y[1]:b,ot=Y[2]?Y[2]:b,et=Y[3]?Y[3]:b,it=Y[4]?Y[4]:b;!function(t,n){document.querySelectorAll(t).forEach((function(t){t.classList.contains("tb_theme_sub_title")||n(t)}))}(K,(function(t){var n=window.getComputedStyle(t),o=y(n.color),e=n.fontSize,i=n.fontWeight,c=n.fontFamily,a=n.textAlign;$.push(o,e,i,c,a)}));var ct,at=$[0]?$[0]:b,lt=$[1]?$[1]:b,rt=$[2]?$[2]:b,st=$[3]?$[3]:b,gt=$[4]?$[4]:b,ut=E?window.getComputedStyle(E):Z?window.getComputedStyle(Z):M?window.getComputedStyle(M):Q?window.getComputedStyle(Q):"",dt=(ut&&ut.getPropertyValue("font-size"),N?N.getPropertyValue("color"):""),ht=N?N.getPropertyValue("font-family"):"",pt=(N&&N.getPropertyValue("line-height"),N?N.getPropertyValue("font-weight"):""),bt=N?N.getPropertyValue("font-style"):"",ft=(N&&N.getPropertyValue("text-align"),document.querySelector("a")),mt=document.getElementsByTagName("button"),wt=((ct=ft?window.getComputedStyle(ft):mt.length>0?window.getComputedStyle(mt[0]):"")&&ct.getPropertyValue("font-size"),ct?ct.getPropertyValue("color"):""),vt=ct?ct.getPropertyValue("font-family"):"",_t=(ct&&ct.getPropertyValue("line-height"),ct&&ct.getPropertyValue("font-weight"),ct&&ct.getPropertyValue("font-style"),ct?ct.getPropertyValue("background-color"):""),yt=ct?ct.getPropertyValue("border-color"):"",kt=y(P?X||p:i.fontColor),xt=P?R||"14px":"".concat(B,"px"),St=P||""==L?A||b:L||b,Pt=k(i.font_varient).weight?k(i.font_varient).weight:"normal",zt=k(i.font_varient).style?k(i.font_varient).style:"normal",Ct=y(j),Wt=P&&D||"1.5",jt=y(dt||p),Tt=i.aspectImageRatio?"".concat(i.aspectImageRatio,"%"):"100%";const Lt=i.numberOfCoumn;var Bt=0;Bt=8==Lt?2:12==Lt||18==Lt?3:32==Lt?4:2;var Ut=y(P?dt||p:z);if(s.bX)var Ht=(P||""==L)&&ht||H||"inherit",Vt=k(V).weight?k(V).weight:"normal",qt=k(V).style?k(V).style:"normal";else Ht=P||""==L?ht||b:L||b,Vt=600,qt="normal";var Ft=P?(0,l.uu)(X||p,W):(0,l.uu)(T,W),It=k(i.font_varient).weight?k(i.font_varient).weight:"normal",Rt=k(i.font_varient).style?k(i.font_varient).style:"normal",Xt=P?(0,l.uu)(X||p,W):(0,l.uu)(j,W);if(s.bX){k(V).weight,k(V).style;var At=s.P2?P?16:B:24}else At=P?16:B;var Dt=P?(0,l.uu)(dt||p,W):(0,l.uu)(z,W),Et=P||""==(null===a||void 0===a||null===(n=a.CatalogueTitle)||void 0===n?void 0:n.font)?ht||b:m.font,Mt=x(P,k(m.varient).style,bt,0,"normal"),Qt=x(P,k(m.varient).weight,pt,0,"600"),Zt=P?"16px":"".concat(m.size,"px"),Nt=P?(0,l.uu)(dt||p,W):(0,l.uu)(m.color,W),Ot=P||""==v.font?ht||b:v.font?v.font:b,Gt=x(P,k(v.varient).style,bt,0,"normal"),Jt=x(P,k(v.varient).weight,pt,0,"600"),Kt=P?"14px":"".concat(v.size,"px"),Yt=P?(0,l.uu)(dt||p,W):(0,l.uu)(v.color,W),$t=P||""==w.font?ht||b:w.font?w.font:b,tn=x(P,k(w.varient).style,bt,0,"normal"),nn=x(P,k(w.varient).weight,pt,0,"600"),on=P?"14px":"".concat(w.size,"px"),en=P?(0,l.uu)(dt||p,W):(0,l.uu)(w.color,W),cn=P||""==f.font?ht||b:f.font?f.font:b,an=x(P,k(f.varient).style,bt,0,"normal"),ln=x(P,k(f.varient).weight,pt,0,"600"),rn=P?"14px":"".concat(f.size,"px"),sn=f.color,gn=f.background,un=P&&vt||b,dn=x(P,k(f.varient).style,bt,0,"normal"),hn=x(P,k(f.varient).weight,pt,0,"600"),pn=P&&wt?p:"#545454",bn=P&&_t||h,fn=P&&yt?p:"#545454",mn=P||""==(null===S||void 0===S?void 0:S.font)?ht||b:null===S||void 0===S?void 0:S.font,wn=x(P,k(null===S||void 0===S?void 0:S.varient).style,bt,0,"normal"),vn=x(P,k(null===S||void 0===S?void 0:S.varient).weight,pt,0,"600"),_n=P?"14px":"".concat(null===S||void 0===S?void 0:S.size,"px"),yn=null===S||void 0===S?void 0:S.color,kn=null===S||void 0===S?void 0:S.background,xn=_.color,Sn=_.background,Pn=null===r||void 0===r?void 0:r.onsite_css_font_btn,zn=x(P,k(null===r||void 0===r?void 0:r.varient).style,bt,0,"normal"),Cn=x(P,k(null===r||void 0===r?void 0:r.varient).weight,pt,0,"600"),Wn="".concat(null===r||void 0===r?void 0:r.onsite_txt_font_size,"px"),jn=null===r||void 0===r?void 0:r.onsite_btn_txt_color,Tn=null===r||void 0===r?void 0:r.onsite_btn_color,Ln="".concat(null===u||void 0===u?void 0:u.title_font_size,"px"),Bn=null===u||void 0===u?void 0:u.subtitle_css_font,Un=null===u||void 0===u?void 0:u.title_font_color,Hn=null===u||void 0===u?void 0:u.title_backgroud_color,Vn=k(null===u||void 0===u?void 0:u.title_font_varient).weight,qn="".concat(null===u||void 0===u?void 0:u.subTitle_font_size,"px"),Fn=null===u||void 0===u?void 0:u.subtitle_css_font,In=null===u||void 0===u?void 0:u.subTitle_font_color,Rn=null===u||void 0===u?void 0:u.subTitle_backgroud_color,Xn=k(null===u||void 0===u?void 0:u.subtitle_font_varient).weight,An=1==(null===u||void 0===u?void 0:u.status)?parseInt(null===u||void 0===u?void 0:u.ticker_height):0,Dn=1==(null===(o=d)||void 0===o?void 0:o.status)?parseInt(null===(e=d)||void 0===e?void 0:e.banner_height):0;return{cardStyle:{color:kt,fontSize:xt,font:St,fontWeight:Pt,fontStyle:zt,iconColor:Ct,lineHeight:Wt,linkColor:jt,background:W,authorColor:Ut,cardPadding:null!==i&&void 0!==i&&i.padding?"".concat(i.padding,"px"):"0px",authorFont:Ht,authorFontWeight:Vt,authorFontStyle:qt,radius:"".concat(i.radius,"px"),iconPosition:"".concat(12+(i.radius?i.radius/3.5:0),"px"),cardSize:Tt,rows:Bt},ctaBtn:{font:mn,varient:wn,weight:vn,size:_n,color:yn,background:kn,padding:"8px 10px",radius:"3px",minHeight:"40px",transition:"all .3s ease-out 0s",colorHover:yn,backgroundHover:kn},button:{font:un,varient:dn,weight:hn,size:"14px",color:pn,borderColor:fn,background:bn,padding:"8px 10px",radius:"3px",minHeight:"40px",transition:"all .3s ease-out 0s",colorHover:pn,backgroundHover:bn},popUpProperties:{background:W,font:St,fontSize:"".concat(At,"px"),color:Ft,iconColor:Xt,fontWeight:It,fontStyle:Rt,authorFont:Ht,authorFontSize:"14px",authorColor:Dt,authorfontWeight:"600"},ProductSettings:{CatalogueTitle:{font:Et,varient:Mt,weight:Qt,size:Zt,color:Nt},ProductTitle:{font:Ot,varient:Gt,weight:Jt,size:Kt,color:Yt},Price:{font:$t,varient:tn,weight:nn,size:on,color:en},Button:{font:cn,varient:an,weight:ln,size:rn,color:sn,background:gn},Hotspot:{color:xn,background:Sn,status:1}},UgcSetting:{font:Pn,varient:zn,weight:Cn,size:Wn,color:jn,background:Tn},heading:{title:{size:nt,font:et,fontWeight:ot,color:tt,textalign:it}},subheading:{subtitle:{size:lt,font:st,fontWeight:rt,color:at,textalign:gt}},ticker:{heading:{size:Ln,font:Bn,fontWeight:Vn,color:Un,background:Hn},desc:{size:qn,font:Fn,fontWeight:Xn,color:In,background:Rn}},height:{banner:"".concat(Dn,"px"),ticker:"".concat(An,"px")}}})(t);return(0,g.jsx)("style",{children:":root {\n                        --tb-color: ".concat(n.color,";\n                        --tb-font-size:").concat(n.fontSize,";\n                        --tb-font: ").concat(n.font,";\n                        --tb-font-weight: ").concat(n.fontWeight,";\n                        --tb-font-style: ").concat(n.fontStyle,";\n                        --tb-icon-color:").concat(n.iconColor,";\n                        --tb-line-height: ").concat(n.lineHeight,";\n                        --tb-link-color: ").concat(n.linkColor,";\n                        --tb-bg-color: ").concat(n.background,";\n                        --tb-background-size: contain;\n                        --tb-author-color: ").concat(n.authorColor,";\n                        --tb-author-font: ").concat(n.authorFont,";\n                        --tb-author-font-weight: ").concat(n.authorFontWeight,";\n                        --tb-author-font-style: ").concat(n.authorFontStyle,";\n                        --tb-border-radius: ").concat(n.radius,";\n                        --tb-icon-position:").concat(n.iconPosition,";\n                        --tb-media-size:").concat(n.cardSize,";\n                        --tb-padding:").concat(n.cardPadding,";\n                        --tb-grid-row:").concat(n.rows,";\n\n                        --tb-cta-color:").concat(o.color,";\n                        --tb-cta-bg-color:").concat(o.background,";\n                        --tb-cta-border-color:").concat(o.borderColor,";\n                        --tb-cta-color-hover:").concat(o.colorHover,";\n                        --tb-cta-bg-color-hover:").concat(o.backgroundHover,";\n                        --tb-cta-border-color-hover:").concat(o.borderHover,";\n                        --tb-cta-border-radius:").concat(o.radius,";\n                        --tb-cta-padding:").concat(o.padding,";\n                        --tb-cta-height:").concat(o.minHeight,";\n                        --tb-cta-width:").concat(o.minWidth,";\n                        --tb-cta-font:").concat(o.font,";\n                        --tb-cta-font-weight:").concat(o.weight,";\n                        --tb-cta-transition:").concat(o.transition,";\n\n                        --tb-btn-color:").concat(e.color,";\n                        --tb-btn-bg-color:").concat(e.background,";\n                        --tb-btn-border-color:").concat(e.borderColor,";\n                        --tb-btn-color-hover:").concat(e.colorHover,";\n                        --tb-btn-bg-color-hover:").concat(e.backgroundHover,";\n                        --tb-btn-border-color-hover:").concat(e.borderHover,";\n                        --tb-btn-border-radius:").concat(e.radius,";\n                        --tb-btn-padding:").concat(e.padding,";\n                        --tb-btn-height:").concat(e.minHeight,";\n                        --tb-btn-width:").concat(e.minWidth,";\n                        --tb-btn-font:").concat(e.font,";\n                        --tb-btn-font-weight:").concat(e.weight,";\n                        --tb-btn-transition:").concat(e.transition,";\n\n                        --tb-popup-color:").concat(i.color,";\n                        --tb-popup-bg-color:").concat(i.background,";\n                        --tb-popup-font:").concat(i.font,";\n                        --tb-popup-font-size:").concat(i.fontSize,";\n                        --tb-popup-icon-color:").concat(i.iconColor,";\n                        --tb-popup-font-weight:").concat(i.fontWeight,";\n                        --tb-popup-font-style: ").concat(i.fontStyle,";\n\n                        --tb-popup-author-font:").concat(i.authorFont,";\n                        --tb-popup-author-font-size:").concat(i.authorFontSize,";\n                        --tb-popup-author-font-weight:").concat(i.authorfontWeight,";\n                        --tb-popup-author-font-style:").concat(i.authorfontWeight,";\n                        --tb-popup-author-color:").concat(i.authorColor,";\n\n\n                        --tb-catalogue-font:").concat(c.CatalogueTitle.font,";\n                        --tb-catalogue-varient:").concat(c.CatalogueTitle.varient,";\n                        --tb-catalogue-weight:").concat(c.CatalogueTitle.weight,";\n                        --tb-catalogue-size:").concat(c.CatalogueTitle.size,";\n                        --tb-catalogue-color:").concat(c.CatalogueTitle.color,";\n\n                        --tb-product-font:").concat(c.ProductTitle.font,";\n                        --tb-product-varient:").concat(c.ProductTitle.varient,";\n                        --tb-product-size:").concat(c.ProductTitle.size,";\n                        --tb-product-color:").concat(c.ProductTitle.color,";\n\n                        --tb-price-font:").concat(c.Price.font,";\n                        --tb-price-weight:").concat(c.Price.weight,";\n                        --tb-price-varient:").concat(c.Price.varient,";\n                        --tb-price-size:").concat(c.Price.size,";\n                        --tb-price-color:").concat(c.Price.color,";\n\n                        --tb-shop-btn-font:").concat(c.Button.font,";\n                        --tb-shop-btn-weight:").concat(c.Button.weight,";\n                        --tb-shop-btn-varient:").concat(c.Button.varient,";\n                        --tb-shop-btn-size:").concat(c.Button.size,";\n                        --tb-shop-btn-color:").concat(c.Button.color,";\n                        --tb-shop-btn-bg-color:").concat(c.Button.background,";\n\n                        --tb-hotspot-color:").concat(c.Hotspot.color,";\n                        --tb-hotspot-bg-color:").concat(c.Hotspot.background,";\n\n                        --tb-su-btn-font:").concat(null===a||void 0===a?void 0:a.font,";\n                        --tb-su-btn-varient:").concat(null===a||void 0===a?void 0:a.varient,";\n                        --tb-su-btn-weight:").concat(null===a||void 0===a?void 0:a.weight,";\n                        --tb-su-btn-size:").concat(null===a||void 0===a?void 0:a.size,";\n                        --tb-su-btn-color:").concat(null===a||void 0===a?void 0:a.color,";\n                        --tb-su-btn-background:").concat(null===a||void 0===a?void 0:a.background,";\n\n                        --tb-t-font-size:").concat(r.title.size,";\n                        --tb-t-font-family:").concat(r.title.font,";\n                        --tb-t-font-weight:").concat(r.title.fontWeight,";\n                        --tb-t-color:").concat(r.title.color,";\n                        --tb-t-text-align:").concat(r.title.textalign,";\n\n                        --tb-st-font-size:").concat(u.subtitle.size,";\n                        --tb-st-font-family:").concat(u.subtitle.font,";\n                        --tb-st-font-weight:").concat(u.subtitle.fontWeight,";\n                        --tb-st-color:").concat(u.subtitle.color,";\n                        --tb-st-text-align:").concat(u.subtitle.textalign,";\n\n                        --tb-ti-title-font-size:").concat(d.heading.size,";\n                        --tb-ti-title-font-family:").concat(d.heading.font,";\n                        --tb-ti-title-font-weight:").concat(d.heading.fontWeight,";\n                        --tb-ti-title-color:").concat(d.heading.color,";\n                        --tb-ti-title-background:").concat(d.heading.background,";\n\n                        --tb-ti-desc-font-size:").concat(d.desc.size,";\n                        --tb-ti-desc-font-family:").concat(d.desc.font,";\n                        --tb-ti-desc-font-weight:").concat(d.desc.fontWeight,";\n                        --tb-ti-desc-color:").concat(d.desc.color,";\n                        --tb-ti-desc-background:").concat(d.desc.background,";\n--tb-theme-height:calc(100vh - ").concat(h.banner," - ").concat(h.ticker,");\n                       \n                        --tb-banner-height:").concat(h.banner,";\n                        --tb-ticker-height:").concat(h.ticker,";\n\n                    }")})},p=t=>{const n="css-".concat(t.Wall.id);if(!document.getElementById(n)&&1===t.Personalization.cssStatus){const o=document.createElement("style");o.type="text/css",o.id=n,o.innerHTML=t.Personalization.css,document.head.appendChild(o)}},b=()=>{try{const n=i.parse(window.location.search);var t=document.documentElement;n&&n.lang?t.setAttribute("lang",n.lang):t.setAttribute("lang","de")}catch(n){console.error(n)}};class f extends e.Component{constructor(t){super(t),this.onLoadModule=t=>{const n=(window.location.href.includes("hashtag_campaign"),!1),{wall:o}=t,e=o.Wall.id,i=o.Wall.owner;n&&(0,r.wl)({wallId:e,domainName:s.QC?s.nX?"https://test.taggbox.com/embed-widget/lite/".concat(e,"?ugcSuite=1&hashtag_campaign=true"):"https://test.taggbox.com/embed-widget/lite/".concat(o.Wall.url,"?hashtag_campaign=true"):s.nX?"https://widget.taggbox.com/".concat(e,"?ugcSuite=1&hashtag_campaign=true"):"https://widget.taggbox.com/".concat(e),ownerId:i,screenshotSize:["1200x624"]}).then((t=>{let{data:n}=t;const{responseCode:e,responseData:i}=n;if(200==e&&i.length>0&&i[0]&&i[0].s3Url){const t=(0,l.CL)()+1e3*((0,l.QM)()+60*((0,l.dn)()+60*(0,l.eZ)()));this.setState({hashtag_campaign_image:"".concat(i[0].s3Url,"?v=").concat(t)})}else{const t=(0,l.Bq)(o.Personalization.widgetTheme);this.setState({hashtag_campaign_image:t})}})).catch((t=>{const n=(0,l.Bq)(o.Personalization.widgetTheme);this.setState({hashtag_campaign_image:n})}))},this.state={hashtag_campaign_image:t.wall.Wall.id&&window.location.href.includes("hashtag_campaign")?"".concat("https://cloud.taggbox.com/wall-branding/wallId_widget_").concat(t.wall.Wall.id,".jpg?v=").concat(u):""}}componentDidMount(){this.onLoadModule(this.props)}componentWillReceiveProps(t){t!=this.props&&s.Jc&&this.onLoadModule(t)}render(){const{hashtag_campaign_image:t}=this.state,{wall:n}=this.props,o=new URLSearchParams(window.location.search).get("preview"),e=n.Personalization.widgetTheme,i=(window.location.href.includes("hashtag_campaign"),!1),l=s.nX?"Tagbox UGC Suite":s.ZQ?"Tagembed Widget":s.bX?" Live SocialWall - Tagbox":"Taggbox";var r=["inherit","Default"],u=["Inter"];n.UgcSettings&&n.UgcSettings.onsite_link_font_btn&&!r.includes(n.UgcSettings.onsite_link_font_btn)&&u.push(n.UgcSettings.onsite_link_font_btn),n.UgcSettings&&n.UgcSettings.onsite_link_font_msg&&!r.includes(n.UgcSettings.onsite_link_font_msg)&&u.push(n.UgcSettings.onsite_link_font_msg),n.ThemeRule.link_font&&!r.includes(n.ThemeRule.link_font)&&u.push(n.ThemeRule.link_font),n.ThemeRule.linkfontAuthor&&!r.includes(n.ThemeRule.linkfontAuthor)&&u.push(n.ThemeRule.linkfontAuthor),n.Banner&&Object.keys(n.Banner).length&&(n.Banner.subtitle_link_font&&!r.includes(n.Banner.subtitle_link_font)&&u.push(n.Banner.subtitle_link_font),n.Banner.title_link_font&&!r.includes(n.Banner.title_link_font)&&u.push(n.Banner.title_link_font)),n.ProductSetting&&Object.keys(n.ProductSetting).length&&(n.ProductSetting.Button.fontLink&&!r.includes(n.ProductSetting.Button.fontLink)&&u.push(n.ProductSetting.Button.fontLink),n.ProductSetting.CatalogueTitle.fontLink&&!r.includes(n.ProductSetting.CatalogueTitle.fontLink)&&u.push(n.ProductSetting.CatalogueTitle.fontLink),n.ProductSetting.Price.fontLink&&!r.includes(n.ProductSetting.Price.fontLink)&&u.push(n.ProductSetting.Price.fontLink),n.ProductSetting.ProductTitle.fontLink&&!r.includes(n.ProductSetting.ProductTitle.fontLink)&&u.push(n.ProductSetting.ProductTitle.fontLink)),n.UgcSettings&&Object.keys(n.UgcSettings).length&&(n.UgcSettings.onsite_css_font_btn&&!r.includes(n.UgcSettings.onsite_css_font_btn)&&u.push(n.UgcSettings.onsite_css_font_btn),n.UgcSettings.onsite_link_font_msg&&!r.includes(n.UgcSettings.onsite_link_font_msg)&&u.push(n.UgcSettings.onsite_link_font_msg)),n.CustomTicker&&Object.keys(n.CustomTicker).length&&(n.CustomTicker.title_link_font&&!r.includes(n.CustomTicker.title_link_font)&&u.push(n.CustomTicker.title_link_font),n.CustomTicker.subtitle_link_font&&!r.includes(n.CustomTicker.subtitle_link_font)&&u.push(n.CustomTicker.subtitle_link_font));var f=u.map((t=>t.replace(/ /g,"+")));return u=[...new Set(f)],(0,g.jsxs)(g.Fragment,{children:[i?(0,g.jsxs)(c.q,{children:[s.nX?(0,g.jsx)("link",{rel:"icon",href:"https://ugc.taggbox.com/favicon.ico"}):null,(0,g.jsx)("meta",{property:"og:type",content:"website"}),(0,g.jsx)("meta",{property:"og:url",content:"https://widget-lite.taggbox.com/".concat(n.Wall.id)}),(0,g.jsx)("meta",{property:"og:title",content:"".concat(n.Wall.name," - ").concat(l," Widget")}),(0,g.jsx)("meta",{property:"og:description",content:"".concat(n.Wall.name," hashtag campaign created using ").concat(l," Widget.")}),(0,g.jsx)("meta",{property:"og:image",content:t}),(0,g.jsx)("meta",{property:"type",content:"website"}),(0,g.jsx)("meta",{property:"url",content:"https://widget-lite.taggbox.com/".concat(n.Wall.id)}),(0,g.jsx)("meta",{property:"title",content:"".concat(n.Wall.name," - ").concat(l," Widget")}),(0,g.jsx)("meta",{property:"description",content:"".concat(n.Wall.name," hashtag campaign created using ").concat(l," Widget.")}),(0,g.jsx)("meta",{property:"image",content:t}),o?document.body.classList.add("tb_previw_th-".concat(e)):null,u.map((function(t,n){return"0"!=t?(0,g.jsx)("link",{href:"".concat(a.do,"/web-fonts/").concat(t,".css"),rel:"stylesheet"},n):null})),s.P2&&d(),s.P2&&n.Wall&&n.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,n.Wall&&n.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,children:'window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = \''.concat(n.Wall.google_tacking_code,'\';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });')}):null]}):window.location.href.includes("widget.taggbox.com")||window.location.href.includes("widget-test.tagembed.com")||window.location.href.includes("widgets.tagembed.com")||window.location.href.includes("widget-test.tagshop.ai")||window.location.href.includes("widget.tagshop.ai")||window.location.href.includes("display-test.socialwalls.com")||window.location.href.includes("display.socialwalls.com")||window.location.href.includes("widget.socialwalls.com")||window.location.href.includes("display.taggbox.com")?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(c.q,{children:[s.nX?(0,g.jsx)("link",{rel:"icon",href:"https://ugc.taggbox.com/favicon.ico"}):s.ZQ?(0,g.jsx)("link",{rel:"icon",href:"https://tagembed.com/wp-content/uploads/2020/09/favicon.ico"}):s.bX?(0,g.jsx)("link",{rel:"icon",href:"https://cloud.tagbox.com/website/socialwalls/assets/img/socialwalls-32x32.png"}):null,(0,g.jsx)("title",{children:"".concat(n.Wall.name," | ").concat(l)}),(0,g.jsx)("meta",{property:"og:type",content:"website"}),(0,g.jsx)("meta",{property:"og:url",content:s.ZQ?"https://widget.tagembed.com/".concat(n.Wall.id):"https://widget-lite.taggbox.com/".concat(n.Wall.id)}),(0,g.jsx)("meta",{property:"og:title",content:"".concat(n.Wall.name," - ").concat(l," Widget")}),(0,g.jsx)("meta",{property:"og:description",content:"".concat(n.Wall.name," featuring Social Feed using ").concat(l," Widget. It helps brands to curate & embed social feeds, user reviews, UGC etc. on websites to boost sales, traffic, & engagement.")}),(0,g.jsx)("meta",{property:"og:image",content:t}),(0,g.jsx)("meta",{property:"type",content:"website"}),(0,g.jsx)("meta",{property:"url",content:s.ZQ?"https://widget.tagembed.com/".concat(n.Wall.id):"https://widget-lite.taggbox.com/".concat(n.Wall.id)}),(0,g.jsx)("meta",{property:"title",content:"".concat(n.Wall.name," - ").concat(l," Widget")}),(0,g.jsx)("meta",{property:"description",content:"".concat(n.Wall.name," featuring Social Feed using ").concat(l," Widget. It helps brands to curate & embed social feeds, user reviews, UGC etc. on websites to boost sales, traffic, & engagement.")}),(0,g.jsx)("meta",{property:"image",content:t}),o?document.body.classList.add("tb_previw_th-".concat(e)):null,u.map((function(t,n){return"0"!=t?(0,g.jsx)("link",{href:"".concat(a.Mp,"/web-fonts/").concat(t,".css"),rel:"stylesheet"},n):null})),s.P2&&d(),s.P2&&n.Wall&&n.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,n.Wall&&n.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,children:'window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = \''.concat(n.Wall.google_tacking_code,'\';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });')}):null,h(n)]}),132857==n.Wall.owner&&s.Jx?b():null]}):(0,g.jsxs)(c.q,{children:[o?document.body.classList.add("tb_previw_th-".concat(e)):null,u.map((function(t,n){return"0"!=t?(0,g.jsx)("link",{href:"".concat(a.Mp,"/web-fonts/").concat(t,".css"),rel:"stylesheet"},n):null})),s.P2&&d(),s.P2&&n.Wall&&n.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,s.P2&&n.Wall&&n.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,children:'window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = \''.concat(n.Wall.google_tacking_code,'\';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });')}):null,h(n)]}),p(n)]})}}const m=(0,e.memo)(f)}}]);