"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[5807],{75807:(t,o,n)=>{n.r(o),n.d(o,{default:()=>w});var e=n(47313),i=n(31172),c=(n(34862),n(90182)),a=n(98501),l=n(17739),r=n(43635),s=n(35179);var g=n(46417);const d=(0,l.CL)()+1e3*((0,l.QM)()+60*((0,l.dn)()+60*(0,l.eZ)())),u=()=>(0,g.jsx)("script",{async:!0,children:'window.twttr = (function (d, s, id) {\n                            var js, fjs = d.getElementsByTagName(s)[0],\n                                t = window.twttr || {};\n                            if (d.getElementById(id)) return t;\n                            js = d.createElement(s);\n                            js.id = id;\n                            js.src = "https://platform.twitter.com/widgets.js";\n                            fjs.parentNode.insertBefore(js, fjs);\n\n                            t._e = [];\n                            t.ready = function (f) {\n                                                    t._e.push(f);\n                            };\n\n                            return t;\n                            }(document, "script", "twitter-wjs"));'}),h=t=>{const{cardStyle:o,ctaBtn:n,button:e,popUpProperties:i,ProductSettings:c,UgcSetting:a,heading:r,subheading:g,ticker:d,height:u}=(t=>{var o,n,e;const{ThemeRule:i,Personalization:c,ProductSetting:a,UgcSettings:r,Wall:g,CustomTicker:d}=t;var u="";u=s.P2?t.Banner:t.CustomBanner;const h="#ffffff",p="#000000",b="inherit";let f,m,w,v,_;"undefined"!==typeof a&&a?({Button:f,CatalogueTitle:m,Price:w,ProductTitle:v,Hotspot:_}=a):(m={fontLink:"",font:"",varient:"",size:"",color:"",text:""},v={fontLink:"",font:"",varient:"",size:"",color:""},w={fontLink:"",font:"",varient:"",size:"",color:""},f={fontLink:"",font:"",varient:"",size:"",background:"",color:"",text:"",newTab:""},_={type:"",background:"",color:"",status:""}),c.widgetTheme;const y=t=>{var o=[],n=[];s.ig&&(o=[61,16,53],n=[4,55,50]),s.ZQ&&(n=[4,55,16,56,50]),s.bX&&(n=[74,69,71,67,65,68]);const e=!!o.includes(c.widgetTheme),a=!!n.includes(c.widgetTheme),r=e&&1==i.postHover||a?p:e&&0==i.postHover?h:z;return(0,l.uu)(t,r)},k=t=>{const o=t?t.split("-"):"";return{weight:o[0]?o[0]:"",style:o[1]?o[1]:""}},x=(t,o,n,e,i)=>t?n:""!=o?o:i,S=i.ctaData&&Object.keys(i.ctaData).length>0?i.ctaData:{},P=!(!i.inheritStyles||1!=!s.bX),{authorColor:W,postHover:C,cardColor:z,iconColor:j,fontColor:T,css_font:L,fontSize:B,font_varient:U,authorFont:H,authorFontVariant:V}=i;var q=document.querySelector("body"),F=document.querySelector("p"),I=q?window.getComputedStyle(q):F?window.getComputedStyle(F):"",E=I?I.getPropertyValue("font-size"):"",M=I?I.getPropertyValue("color"):"",R=I?I.getPropertyValue("font-family"):"",X=I?I.getPropertyValue("line-height"):"",A=(I&&I.getPropertyValue("font-weight"),I&&I.getPropertyValue("font-style"),q=document.querySelector("body"),F=document.querySelector("p"),document.querySelector("strong")),D=document.querySelector("h2"),Q=document.querySelector("h3"),Z=document.querySelector("h1"),N=A?window.getComputedStyle(A):D?window.getComputedStyle(D):Q?window.getComputedStyle(Q):"",O=document.querySelector(".tb_theme_title");if(O)var G=O.tagName;var J=document.querySelector(".tb_theme_sub_title");if(J)var K=J.tagName;var Y=[],$=[];!function(t,o){document.querySelectorAll(t).forEach((function(t){t.classList.contains("tb_theme_title")||o(t)}))}(G,(function(t){var o=window.getComputedStyle(t),n=y(o.color),e=o.fontSize,i=o.fontWeight,c=o.fontFamily,a=o.textAlign;Y.push(n,e,i,c,a)}));var tt=Y[0]?Y[0]:b,ot=Y[1]?Y[1]:b,nt=Y[2]?Y[2]:b,et=Y[3]?Y[3]:b,it=Y[4]?Y[4]:b;!function(t,o){document.querySelectorAll(t).forEach((function(t){t.classList.contains("tb_theme_sub_title")||o(t)}))}(K,(function(t){var o=window.getComputedStyle(t),n=y(o.color),e=o.fontSize,i=o.fontWeight,c=o.fontFamily,a=o.textAlign;$.push(n,e,i,c,a)}));var ct,at=$[0]?$[0]:b,lt=$[1]?$[1]:b,rt=$[2]?$[2]:b,st=$[3]?$[3]:b,gt=$[4]?$[4]:b,dt=A?window.getComputedStyle(A):Z?window.getComputedStyle(Z):D?window.getComputedStyle(D):Q?window.getComputedStyle(Q):"",ut=(dt&&dt.getPropertyValue("font-size"),N?N.getPropertyValue("color"):""),ht=N?N.getPropertyValue("font-family"):"",pt=(N&&N.getPropertyValue("line-height"),N?N.getPropertyValue("font-weight"):""),bt=N?N.getPropertyValue("font-style"):"",ft=(N&&N.getPropertyValue("text-align"),document.querySelector("a")),mt=document.getElementsByTagName("button"),wt=((ct=ft?window.getComputedStyle(ft):mt.length>0?window.getComputedStyle(mt[0]):"")&&ct.getPropertyValue("font-size"),ct?ct.getPropertyValue("color"):""),vt=ct?ct.getPropertyValue("font-family"):"",_t=(ct&&ct.getPropertyValue("line-height"),ct&&ct.getPropertyValue("font-weight"),ct&&ct.getPropertyValue("font-style"),ct?ct.getPropertyValue("background-color"):""),yt=ct?ct.getPropertyValue("border-color"):"",kt=y(P?M||p:i.fontColor),xt=P?E||"14px":"".concat(B,"px"),St=P||""==L?R||b:L||b,Pt=k(i.font_varient).weight?k(i.font_varient).weight:"normal",Wt=k(i.font_varient).style?k(i.font_varient).style:"normal",Ct=y(j),zt=P&&X||"1.5",jt=y(ut||p),Tt=i.aspectImageRatio?"".concat(i.aspectImageRatio,"%"):"100%";const Lt=i.numberOfCoumn;var Bt=0;Bt=8==Lt?2:12==Lt||18==Lt?3:32==Lt?4:2;var Ut=y(P?ut||p:W);if(s.bX)var Ht=(P||""==L)&&ht||H||"inherit",Vt=k(V).weight?k(V).weight:"normal",qt=k(V).style?k(V).style:"normal";else Ht=P||""==L?ht||b:L||b,Vt=600,qt="normal";var Ft=P?(0,l.uu)(M||p,z):(0,l.uu)(T,z),It=k(i.font_varient).weight?k(i.font_varient).weight:"normal",Et=k(i.font_varient).style?k(i.font_varient).style:"normal",Mt=P?(0,l.uu)(M||p,z):(0,l.uu)(j,z);if(s.bX){k(V).weight,k(V).style;var Rt=s.P2?P?16:B:24}else Rt=P?16:B;var Xt=P?(0,l.uu)(ut||p,z):(0,l.uu)(W,z),At=P||""==(null===a||void 0===a||null===(o=a.CatalogueTitle)||void 0===o?void 0:o.font)?ht||b:m.font,Dt=x(P,k(m.varient).style,bt,0,"normal"),Qt=x(P,k(m.varient).weight,pt,0,"600"),Zt=P?"16px":"".concat(m.size,"px"),Nt=P?(0,l.uu)(ut||p,z):(0,l.uu)(m.color,z),Ot=P||""==v.font?ht||b:v.font?v.font:b,Gt=x(P,k(v.varient).style,bt,0,"normal"),Jt=x(P,k(v.varient).weight,pt,0,"600"),Kt=P?"14px":"".concat(v.size,"px"),Yt=P?(0,l.uu)(ut||p,z):(0,l.uu)(v.color,z),$t=P||""==w.font?ht||b:w.font?w.font:b,to=x(P,k(w.varient).style,bt,0,"normal"),oo=x(P,k(w.varient).weight,pt,0,"600"),no=P?"14px":"".concat(w.size,"px"),eo=P?(0,l.uu)(ut||p,z):(0,l.uu)(w.color,z),io=P||""==f.font?ht||b:f.font?f.font:b,co=x(P,k(f.varient).style,bt,0,"normal"),ao=x(P,k(f.varient).weight,pt,0,"600"),lo=P?"14px":"".concat(f.size,"px"),ro=f.color,so=f.background,go=P&&vt||b,uo=x(P,k(f.varient).style,bt,0,"normal"),ho=x(P,k(f.varient).weight,pt,0,"600"),po=P&&wt?p:"#545454",bo=P&&_t||h,fo=P&&yt?p:"#545454",mo=P||""==(null===S||void 0===S?void 0:S.font)?ht||b:null===S||void 0===S?void 0:S.font,wo=x(P,k(null===S||void 0===S?void 0:S.varient).style,bt,0,"normal"),vo=x(P,k(null===S||void 0===S?void 0:S.varient).weight,pt,0,"600"),_o=P?"14px":"".concat(null===S||void 0===S?void 0:S.size,"px"),yo=null===S||void 0===S?void 0:S.color,ko=null===S||void 0===S?void 0:S.background,xo=_.color,So=_.background,Po=null===r||void 0===r?void 0:r.onsite_css_font_btn,Wo=x(P,k(null===r||void 0===r?void 0:r.varient).style,bt,0,"normal"),Co=x(P,k(null===r||void 0===r?void 0:r.varient).weight,pt,0,"600"),zo="".concat(null===r||void 0===r?void 0:r.onsite_txt_font_size,"px"),jo=null===r||void 0===r?void 0:r.onsite_btn_txt_color,To=null===r||void 0===r?void 0:r.onsite_btn_color,Lo="".concat(null===d||void 0===d?void 0:d.title_font_size,"px"),Bo=null===d||void 0===d?void 0:d.subtitle_css_font,Uo=null===d||void 0===d?void 0:d.title_font_color,Ho=null===d||void 0===d?void 0:d.title_backgroud_color,Vo=k(null===d||void 0===d?void 0:d.title_font_varient).weight,qo="".concat(null===d||void 0===d?void 0:d.subTitle_font_size,"px"),Fo=null===d||void 0===d?void 0:d.subtitle_css_font,Io=null===d||void 0===d?void 0:d.subTitle_font_color,Eo=null===d||void 0===d?void 0:d.subTitle_backgroud_color,Mo=k(null===d||void 0===d?void 0:d.subtitle_font_varient).weight,Ro=1==(null===d||void 0===d?void 0:d.status)?parseInt(null===d||void 0===d?void 0:d.ticker_height):0,Xo=1==(null===(n=u)||void 0===n?void 0:n.status)?parseInt(null===(e=u)||void 0===e?void 0:e.banner_height):0;return{cardStyle:{color:kt,fontSize:xt,font:St,fontWeight:Pt,fontStyle:Wt,iconColor:Ct,lineHeight:zt,linkColor:jt,background:z,authorColor:Ut,cardPadding:null!==i&&void 0!==i&&i.padding?"".concat(i.padding,"px"):"0px",authorFont:Ht,authorFontWeight:Vt,authorFontStyle:qt,radius:"".concat(i.radius,"px"),iconPosition:"".concat(12+(i.radius?i.radius/3.5:0),"px"),cardSize:Tt,rows:Bt},ctaBtn:{font:mo,varient:wo,weight:vo,size:_o,color:yo,background:ko,padding:"8px 10px",radius:"3px",minHeight:"40px",transition:"all .3s ease-out 0s",colorHover:yo,backgroundHover:ko},button:{font:go,varient:uo,weight:ho,size:"14px",color:po,borderColor:fo,background:bo,padding:"8px 10px",radius:"3px",minHeight:"40px",transition:"all .3s ease-out 0s",colorHover:po,backgroundHover:bo},popUpProperties:{background:z,font:St,fontSize:"".concat(Rt,"px"),color:Ft,iconColor:Mt,fontWeight:It,fontStyle:Et,authorFont:Ht,authorFontSize:"14px",authorColor:Xt,authorfontWeight:"600"},ProductSettings:{CatalogueTitle:{font:At,varient:Dt,weight:Qt,size:Zt,color:Nt},ProductTitle:{font:Ot,varient:Gt,weight:Jt,size:Kt,color:Yt},Price:{font:$t,varient:to,weight:oo,size:no,color:eo},Button:{font:io,varient:co,weight:ao,size:lo,color:ro,background:so},Hotspot:{color:xo,background:So,status:1}},UgcSetting:{font:Po,varient:Wo,weight:Co,size:zo,color:jo,background:To},heading:{title:{size:ot,font:et,fontWeight:nt,color:tt,textalign:it}},subheading:{subtitle:{size:lt,font:st,fontWeight:rt,color:at,textalign:gt}},ticker:{heading:{size:Lo,font:Bo,fontWeight:Vo,color:Uo,background:Ho},desc:{size:qo,font:Fo,fontWeight:Mo,color:Io,background:Eo}},height:{banner:"".concat(Xo,"px"),ticker:"".concat(Ro,"px")}}})(t),h="style-root-".concat(t.Wall.id),p=":root {\n                        --tb-color: ".concat(o.color,";\n                        --tb-font-size:").concat(o.fontSize,";\n                        --tb-font: ").concat(o.font,";\n                        --tb-font-weight: ").concat(o.fontWeight,";\n                        --tb-font-style: ").concat(o.fontStyle,";\n                        --tb-icon-color:").concat(o.iconColor,";\n                        --tb-line-height: ").concat(o.lineHeight,";\n                        --tb-link-color: ").concat(o.linkColor,";\n                        --tb-bg-color: ").concat(o.background,";\n                        --tb-background-size: contain;\n                        --tb-author-color: ").concat(o.authorColor,";\n                        --tb-author-font: ").concat(o.authorFont,";\n                        --tb-author-font-weight: ").concat(o.authorFontWeight,";\n                        --tb-author-font-style: ").concat(o.authorFontStyle,";\n                        --tb-border-radius: ").concat(o.radius,";\n                        --tb-icon-position:").concat(o.iconPosition,";\n                        --tb-media-size:").concat(o.cardSize,";\n                        --tb-padding:").concat(o.cardPadding,";\n                        --tb-grid-row:").concat(o.rows,";\n\n                        --tb-cta-color:").concat(n.color,";\n                        --tb-cta-bg-color:").concat(n.background,";\n                        --tb-cta-border-color:").concat(n.borderColor,";\n                        --tb-cta-color-hover:").concat(n.colorHover,";\n                        --tb-cta-bg-color-hover:").concat(n.backgroundHover,";\n                        --tb-cta-border-color-hover:").concat(n.borderHover,";\n                        --tb-cta-border-radius:").concat(n.radius,";\n                        --tb-cta-padding:").concat(n.padding,";\n                        --tb-cta-height:").concat(n.minHeight,";\n                        --tb-cta-width:").concat(n.minWidth,";\n                        --tb-cta-font:").concat(n.font,";\n                        --tb-cta-font-weight:").concat(n.weight,";\n                        --tb-cta-transition:").concat(n.transition,";\n\n                        --tb-btn-color:").concat(e.color,";\n                        --tb-btn-bg-color:").concat(e.background,";\n                        --tb-btn-border-color:").concat(e.borderColor,";\n                        --tb-btn-color-hover:").concat(e.colorHover,";\n                        --tb-btn-bg-color-hover:").concat(e.backgroundHover,";\n                        --tb-btn-border-color-hover:").concat(e.borderHover,";\n                        --tb-btn-border-radius:").concat(e.radius,";\n                        --tb-btn-padding:").concat(e.padding,";\n                        --tb-btn-height:").concat(e.minHeight,";\n                        --tb-btn-width:").concat(e.minWidth,";\n                        --tb-btn-font:").concat(e.font,";\n                        --tb-btn-font-weight:").concat(e.weight,";\n                        --tb-btn-transition:").concat(e.transition,";\n\n                        --tb-popup-color:").concat(i.color,";\n                        --tb-popup-bg-color:").concat(i.background,";\n                        --tb-popup-font:").concat(i.font,";\n                        --tb-popup-font-size:").concat(i.fontSize,";\n                        --tb-popup-icon-color:").concat(i.iconColor,";\n                        --tb-popup-font-weight:").concat(i.fontWeight,";\n                        --tb-popup-font-style: ").concat(i.fontStyle,";\n\n                        --tb-popup-author-font:").concat(i.authorFont,";\n                        --tb-popup-author-font-size:").concat(i.authorFontSize,";\n                        --tb-popup-author-font-weight:").concat(i.authorfontWeight,";\n                        --tb-popup-author-font-style:").concat(i.authorfontWeight,";\n                        --tb-popup-author-color:").concat(i.authorColor,";\n\n\n                        --tb-catalogue-font:").concat(c.CatalogueTitle.font,";\n                        --tb-catalogue-varient:").concat(c.CatalogueTitle.varient,";\n                        --tb-catalogue-weight:").concat(c.CatalogueTitle.weight,";\n                        --tb-catalogue-size:").concat(c.CatalogueTitle.size,";\n                        --tb-catalogue-color:").concat(c.CatalogueTitle.color,";\n\n                        --tb-product-font:").concat(c.ProductTitle.font,";\n                        --tb-product-varient:").concat(c.ProductTitle.varient,";\n                        --tb-product-size:").concat(c.ProductTitle.size,";\n                        --tb-product-color:").concat(c.ProductTitle.color,";\n\n                        --tb-price-font:").concat(c.Price.font,";\n                        --tb-price-weight:").concat(c.Price.weight,";\n                        --tb-price-varient:").concat(c.Price.varient,";\n                        --tb-price-size:").concat(c.Price.size,";\n                        --tb-price-color:").concat(c.Price.color,";\n\n                        --tb-shop-btn-font:").concat(c.Button.font,";\n                        --tb-shop-btn-weight:").concat(c.Button.weight,";\n                        --tb-shop-btn-varient:").concat(c.Button.varient,";\n                        --tb-shop-btn-size:").concat(c.Button.size,";\n                        --tb-shop-btn-color:").concat(c.Button.color,";\n                        --tb-shop-btn-bg-color:").concat(c.Button.background,";\n\n                        --tb-hotspot-color:").concat(c.Hotspot.color,";\n                        --tb-hotspot-bg-color:").concat(c.Hotspot.background,";\n\n                        --tb-su-btn-font:").concat(null===a||void 0===a?void 0:a.font,";\n                        --tb-su-btn-varient:").concat(null===a||void 0===a?void 0:a.varient,";\n                        --tb-su-btn-weight:").concat(null===a||void 0===a?void 0:a.weight,";\n                        --tb-su-btn-size:").concat(null===a||void 0===a?void 0:a.size,";\n                        --tb-su-btn-color:").concat(null===a||void 0===a?void 0:a.color,";\n                        --tb-su-btn-background:").concat(null===a||void 0===a?void 0:a.background,";\n\n                        --tb-t-font-size:").concat(r.title.size,";\n                        --tb-t-font-family:").concat(r.title.font,";\n                        --tb-t-font-weight:").concat(r.title.fontWeight,";\n                        --tb-t-color:").concat(r.title.color,";\n                        --tb-t-text-align:").concat(r.title.textalign,";\n\n                        --tb-st-font-size:").concat(g.subtitle.size,";\n                        --tb-st-font-family:").concat(g.subtitle.font,";\n                        --tb-st-font-weight:").concat(g.subtitle.fontWeight,";\n                        --tb-st-color:").concat(g.subtitle.color,";\n                        --tb-st-text-align:").concat(g.subtitle.textalign,";\n\n                        --tb-ti-title-font-size:").concat(d.heading.size,";\n                        --tb-ti-title-font-family:").concat(d.heading.font,";\n                        --tb-ti-title-font-weight:").concat(d.heading.fontWeight,";\n                        --tb-ti-title-color:").concat(d.heading.color,";\n                        --tb-ti-title-background:").concat(d.heading.background,";\n\n                        --tb-ti-desc-font-size:").concat(d.desc.size,";\n                        --tb-ti-desc-font-family:").concat(d.desc.font,";\n                        --tb-ti-desc-font-weight:").concat(d.desc.fontWeight,";\n                        --tb-ti-desc-color:").concat(d.desc.color,";\n                        --tb-ti-desc-background:").concat(d.desc.background,";\n--tb-theme-height:calc(100vh - ").concat(u.banner," - ").concat(u.ticker,");\n                       \n                        --tb-banner-height:").concat(u.banner,";\n                        --tb-ticker-height:").concat(u.ticker,";\n\n                    }");if(!document.getElementById(h)){const t=document.createElement("style");t.type="text/css",t.id=h,t.innerHTML=p,document.head.appendChild(t)}},p=t=>{const o="css-".concat(t.Wall.id);if(!document.getElementById(o)&&1===t.Personalization.cssStatus){const n=document.createElement("style");n.type="text/css",n.id=o,n.innerHTML=t.Personalization.css,document.head.appendChild(n)}},b=()=>{try{const o=i.parse(window.location.search);var t=document.documentElement;o&&o.lang?t.setAttribute("lang",o.lang):t.setAttribute("lang","de")}catch(o){console.error(o)}},f=t=>{try{["#style-root-".concat(t),"#css-".concat(t)].forEach((t=>{var o;return null===(o=document.querySelector(t))||void 0===o?void 0:o.remove()}))}catch(o){}};class m extends e.Component{constructor(t){super(t),this.onLoadModule=t=>{const o=(window.location.href.includes("hashtag_campaign"),!1),{wall:n}=t,e=n.Wall.id,i=n.Wall.owner;o&&(0,r.wl)({wallId:e,domainName:s.QC?s.nX?"https://test.taggbox.com/embed-widget/lite/".concat(e,"?ugcSuite=1&hashtag_campaign=true"):"https://test.taggbox.com/embed-widget/lite/".concat(n.Wall.url,"?hashtag_campaign=true"):s.nX?"https://widget.taggbox.com/".concat(e,"?ugcSuite=1&hashtag_campaign=true"):"https://widget.taggbox.com/".concat(e),ownerId:i,screenshotSize:["1200x624"]}).then((t=>{let{data:o}=t;const{responseCode:e,responseData:i}=o;if(200==e&&i.length>0&&i[0]&&i[0].s3Url){const t=(0,l.CL)()+1e3*((0,l.QM)()+60*((0,l.dn)()+60*(0,l.eZ)()));this.setState({hashtag_campaign_image:"".concat(i[0].s3Url,"?v=").concat(t)})}else{const t=(0,l.Bq)(n.Personalization.widgetTheme);this.setState({hashtag_campaign_image:t})}})).catch((t=>{const o=(0,l.Bq)(n.Personalization.widgetTheme);this.setState({hashtag_campaign_image:o})}))},this.state={hashtag_campaign_image:t.wall.Wall.id&&window.location.href.includes("hashtag_campaign")?"".concat("https://cloud.taggbox.com/wall-branding/wallId_widget_").concat(t.wall.Wall.id,".jpg?v=").concat(d):""}}componentDidMount(){this.onLoadModule(this.props)}componentWillReceiveProps(t){var o,n;if(t!=this.props&&s.Jc)f(null===t||void 0===t||null===(o=t.wall)||void 0===o||null===(n=o.Wall)||void 0===n?void 0:n.id),this.onLoadModule(t);else if(t!=this.props&&window.location.href.includes("addfeedload=load")){var e,i;f(null===t||void 0===t||null===(e=t.wall)||void 0===e||null===(i=e.Wall)||void 0===i?void 0:i.id),this.onLoadModule(t)}}render(){const{hashtag_campaign_image:t}=this.state,{wall:o}=this.props,n=new URLSearchParams(window.location.search).get("preview"),e=o.Personalization.widgetTheme,i=(window.location.href.includes("hashtag_campaign"),!1),l=s.nX?"Tagbox UGC Suite":s.ZQ?"Tagembed Widget":s.bX?" Live SocialWall - Tagbox":"Taggbox";var r=["inherit","Default"],d=["Inter"];o.UgcSettings&&o.UgcSettings.onsite_link_font_btn&&!r.includes(o.UgcSettings.onsite_link_font_btn)&&d.push(o.UgcSettings.onsite_link_font_btn),o.UgcSettings&&o.UgcSettings.onsite_link_font_msg&&!r.includes(o.UgcSettings.onsite_link_font_msg)&&d.push(o.UgcSettings.onsite_link_font_msg),o.ThemeRule.link_font&&!r.includes(o.ThemeRule.link_font)&&d.push(o.ThemeRule.link_font),o.ThemeRule.linkfontAuthor&&!r.includes(o.ThemeRule.linkfontAuthor)&&d.push(o.ThemeRule.linkfontAuthor),o.Banner&&Object.keys(o.Banner).length&&(o.Banner.subtitle_link_font&&!r.includes(o.Banner.subtitle_link_font)&&d.push(o.Banner.subtitle_link_font),o.Banner.title_link_font&&!r.includes(o.Banner.title_link_font)&&d.push(o.Banner.title_link_font)),o.ProductSetting&&Object.keys(o.ProductSetting).length&&(o.ProductSetting.Button.fontLink&&!r.includes(o.ProductSetting.Button.fontLink)&&d.push(o.ProductSetting.Button.fontLink),o.ProductSetting.CatalogueTitle.fontLink&&!r.includes(o.ProductSetting.CatalogueTitle.fontLink)&&d.push(o.ProductSetting.CatalogueTitle.fontLink),o.ProductSetting.Price.fontLink&&!r.includes(o.ProductSetting.Price.fontLink)&&d.push(o.ProductSetting.Price.fontLink),o.ProductSetting.ProductTitle.fontLink&&!r.includes(o.ProductSetting.ProductTitle.fontLink)&&d.push(o.ProductSetting.ProductTitle.fontLink)),o.UgcSettings&&Object.keys(o.UgcSettings).length&&(o.UgcSettings.onsite_css_font_btn&&!r.includes(o.UgcSettings.onsite_css_font_btn)&&d.push(o.UgcSettings.onsite_css_font_btn),o.UgcSettings.onsite_link_font_msg&&!r.includes(o.UgcSettings.onsite_link_font_msg)&&d.push(o.UgcSettings.onsite_link_font_msg)),o.CustomTicker&&Object.keys(o.CustomTicker).length&&(o.CustomTicker.title_link_font&&!r.includes(o.CustomTicker.title_link_font)&&d.push(o.CustomTicker.title_link_font),o.CustomTicker.subtitle_link_font&&!r.includes(o.CustomTicker.subtitle_link_font)&&d.push(o.CustomTicker.subtitle_link_font));var f=d.map((t=>t.replace(/ /g,"+")));return d=[...new Set(f)],(0,g.jsxs)(g.Fragment,{children:[i?(0,g.jsxs)(c.q,{children:[s.nX?(0,g.jsx)("link",{rel:"icon",href:"https://ugc.taggbox.com/favicon.ico"}):null,(0,g.jsx)("meta",{property:"og:type",content:"website"}),(0,g.jsx)("meta",{property:"og:url",content:"https://widget-lite.taggbox.com/".concat(o.Wall.id)}),(0,g.jsx)("meta",{property:"og:title",content:"".concat(o.Wall.name," - ").concat(l," Widget")}),(0,g.jsx)("meta",{property:"og:description",content:"".concat(o.Wall.name," hashtag campaign created using ").concat(l," Widget.")}),(0,g.jsx)("meta",{property:"og:image",content:t}),(0,g.jsx)("meta",{property:"type",content:"website"}),(0,g.jsx)("meta",{property:"url",content:"https://widget-lite.taggbox.com/".concat(o.Wall.id)}),(0,g.jsx)("meta",{property:"title",content:"".concat(o.Wall.name," - ").concat(l," Widget")}),(0,g.jsx)("meta",{property:"description",content:"".concat(o.Wall.name," hashtag campaign created using ").concat(l," Widget.")}),(0,g.jsx)("meta",{property:"image",content:t}),n?document.body.classList.add("tb_previw_th-".concat(e)):null,d.map((function(t,o){return"0"!=t?(0,g.jsx)("link",{href:"".concat(a.do,"/web-fonts/").concat(t,".css"),rel:"stylesheet"},o):null})),s.P2&&u(),s.P2&&o.Wall&&o.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,o.Wall&&o.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,children:'window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = \''.concat(o.Wall.google_tacking_code,'\';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });')}):null]}):window.location.href.includes("widget.taggbox.com")||window.location.href.includes("widget-test.tagembed.com")||window.location.href.includes("widgets.tagembed.com")||window.location.href.includes("widget-test.tagshop.ai")||window.location.href.includes("widget.tagshop.ai")||window.location.href.includes("display-test.socialwalls.com")||window.location.href.includes("display.socialwalls.com")||window.location.href.includes("widget.socialwalls.com")||window.location.href.includes("display.taggbox.com")?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(c.q,{children:[s.nX?(0,g.jsx)("link",{rel:"icon",href:"https://ugc.taggbox.com/favicon.ico"}):s.ZQ?(0,g.jsx)("link",{rel:"icon",href:"https://tagembed.com/wp-content/uploads/2020/09/favicon.ico"}):s.bX?(0,g.jsx)("link",{rel:"icon",href:"https://cloud.tagbox.com/website/socialwalls/assets/img/socialwalls-32x32.png"}):null,(0,g.jsx)("title",{children:"".concat(o.Wall.name," | ").concat(l)}),(0,g.jsx)("meta",{property:"og:type",content:"website"}),(0,g.jsx)("meta",{property:"og:url",content:s.ZQ?"https://widget.tagembed.com/".concat(o.Wall.id):"https://widget-lite.taggbox.com/".concat(o.Wall.id)}),(0,g.jsx)("meta",{property:"og:title",content:"".concat(o.Wall.name," - ").concat(l," Widget")}),(0,g.jsx)("meta",{property:"og:description",content:"".concat(o.Wall.name," featuring Social Feed using ").concat(l," Widget. It helps brands to curate & embed social feeds, user reviews, UGC etc. on websites to boost sales, traffic, & engagement.")}),(0,g.jsx)("meta",{property:"og:image",content:t}),(0,g.jsx)("meta",{property:"type",content:"website"}),(0,g.jsx)("meta",{property:"url",content:s.ZQ?"https://widget.tagembed.com/".concat(o.Wall.id):"https://widget-lite.taggbox.com/".concat(o.Wall.id)}),(0,g.jsx)("meta",{property:"title",content:"".concat(o.Wall.name," - ").concat(l," Widget")}),(0,g.jsx)("meta",{property:"description",content:"".concat(o.Wall.name," featuring Social Feed using ").concat(l," Widget. It helps brands to curate & embed social feeds, user reviews, UGC etc. on websites to boost sales, traffic, & engagement.")}),(0,g.jsx)("meta",{property:"image",content:t}),n?document.body.classList.add("tb_previw_th-".concat(e)):null,d.map((function(t,o){return"0"!=t?(0,g.jsx)("link",{href:"".concat(a.Mp,"/web-fonts/").concat(t,".css"),rel:"stylesheet"},o):null})),s.P2&&u(),s.P2&&o.Wall&&o.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,o.Wall&&o.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,children:'window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = \''.concat(o.Wall.google_tacking_code,'\';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });')}):null]}),132857==o.Wall.owner&&s.Jx?b():null]}):(0,g.jsxs)(c.q,{children:[n?document.body.classList.add("tb_previw_th-".concat(e)):null,d.map((function(t,o){return"0"!=t?(0,g.jsx)("link",{href:"".concat(a.Mp,"/web-fonts/").concat(t,".css"),rel:"stylesheet"},o):null})),s.P2&&u(),s.P2&&o.Wall&&o.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js"}):null,s.P2&&o.Wall&&o.Wall.google_tacking_status?(0,g.jsx)("script",{async:!0,children:'window.dataLayer = window.dataLayer || [];\n                    function gtag() {dataLayer.push(arguments); }\n                    gtag("js", new Date());\n                    window.gaTokenClient = \''.concat(o.Wall.google_tacking_code,'\';\n                    gtag("event", "page_view", {\n                        "send_to": window.gaTokenClient,\n                    "anonymize_ip": true,\n                    });')}):null]}),h(o),p(o)]})}}const w=(0,e.memo)(m)}}]);