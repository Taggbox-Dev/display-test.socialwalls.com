"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[413],{31898:(l,e,t)=>{t.d(e,{V:()=>s});const s=l=>{var e,t,s,i,o,a;const{social:n,subTitle:r,title:d,background:c,height:_}=l,u={backgroundImage:null!==c&&void 0!==c&&c.url?`url(${null===c||void 0===c?void 0:c.url})`:null,backgroundColor:null!==c&&void 0!==c&&c.primaryColor?null===c||void 0===c?void 0:c.primaryColor:"",height:_+"px"},v={color:null===r||void 0===r||null===(e=r.style)||void 0===e?void 0:e.color,fontSize:null===r||void 0===r||null===(t=r.style)||void 0===t?void 0:t.size,fontFamily:null===r||void 0===r||null===(s=r.style)||void 0===s?void 0:s.font},b={color:null===d||void 0===d||null===(i=d.style)||void 0===i?void 0:i.color,fontSize:null===d||void 0===d||null===(o=d.style)||void 0===o?void 0:o.size,fontFamily:null===d||void 0===d||null===(a=d.style)||void 0===a?void 0:a.font};var h=50;const y={fontSize:h=n.style.size>50?50:n.style.size,height:5!=l.type?1.8*h:null,width:5!=l.type?1.8*h:null},m=l=>{var e,t,s,i;return{color:null!==(e=n.style)&&void 0!==e&&e.defaultColor||null===(t=n.style)||void 0===t||!t.color?l:n.style.color,borderColor:null!==(s=n.style)&&void 0!==s&&s.defaultColor||null===(i=n.style)||void 0===i||!i.color?l:n.style.color,...y}};return{BgStyle:u,subTitleStyle:v,titleStyle:b,socialIconList:[{style:m("#1b74e4"),className:"tb-facebook",label:"Facebook",status:String(n.icons).includes("1"),url:n.facebook},{style:m("#000"),className:"tb-twitter",label:"Twitter",status:String(n.icons).includes("2"),url:n.twitter},{style:m("#E2306C"),className:"tb-instagram",label:"Instagram",status:String(n.icons).includes("3"),url:n.instagram}]}}},50413:(l,e,t)=>{t.r(e),t.d(e,{default:()=>o});t(9950);var s=t(31898),i=t(44414);const o=l=>{let{Banner:e}=l;const{social:t,logo:o,subTitle:a,title:n}=e,{BgStyle:r,subTitleStyle:d,titleStyle:c,socialIconList:_}=(0,s.V)(e);return(0,i.jsx)("div",{className:"tb_wall_header_wrap__",style:r,children:(0,i.jsxs)("div",{className:"tb_header3_row__",children:[(0,i.jsx)("div",{className:"tb_header3_column_logo__",children:null!==o&&void 0!==o&&o.url?(0,i.jsx)("div",{className:"tb_header3_logo__",children:(0,i.jsx)("img",{loading:"lazy",className:"tb_header3_logo_img__",src:o.url,alt:o.title,width:180,height:52})}):""}),(0,i.jsx)("div",{className:"tb_header3_column_content__",children:(0,i.jsxs)("div",{className:"tb_header3_content__",children:[(0,i.jsx)("div",{className:"tb_header3_subtitle__"+(a.style.variant?` tb-cTBfont-${a.style.variant}`:""),style:d,children:a.text}),(0,i.jsx)("div",{className:"tb_header3_title__"+(n.style.variant?` tb-cTBfont-${n.style.variant}`:""),style:c,children:n.text})]})}),(0,i.jsx)("div",{className:"tb_header3_column_icons__",children:1==(null===t||void 0===t?void 0:t.status)?(0,i.jsx)("div",{className:"tb_header3_social_icons__",children:_.map(((l,e)=>(0,i.jsx)("a",{href:l.url?l.url:"#",target:"_blank",className:"tb_header3_social_icon_list__",role:"button","aria-label":l.label,rel:"nofollow",style:l.style,children:(0,i.jsx)("div",{className:`tb_header3_social_icon__ tb__icon ${l.className}`,children:" "})},e)))}):""})]})})}}}]);