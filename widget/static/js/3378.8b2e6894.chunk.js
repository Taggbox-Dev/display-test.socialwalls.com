"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3378],{90484:(e,t,l)=>{l.d(t,{p:()=>o});const o=e=>{const t={backgroundImage:1==e.transparent||5==e.bannerType?"none":"url(".concat(e.CustomBannerImage,")"),backgroundColor:1==e.transparent?"transparent":e.background_color,height:e.banner_height},l={backgroundColor:1==e.transparent?"transparent":e.background_color_two},o={color:e.subTitle_font_color,fontSize:e.subTitle_font_size,fontFamily:"None"==e.subtitle_css_font?null:e.subtitle_css_font},a=e.subtitle_font_varient,n={color:e.title_font_color,fontSize:e.title_font_size,fontFamily:"None"==e.title_css_font?null:e.title_css_font},s=e.title_font_varient;var i=50;const c={height:1.8*(i=e.social_icon_size>50?50:e.social_icon_size),width:1.8*i},r={fontSize:i},_={borderColor:2===e.social_icon_color_status?e.social_icon_color:"#1b74e4"},b={color:2===e.social_icon_color_status?e.social_icon_color:"#1b74e4"},d={borderColor:2===e.social_icon_color_status?e.social_icon_color:"#000"},g={color:2===e.social_icon_color_status?e.social_icon_color:"#000"},u={borderColor:2===e.social_icon_color_status?e.social_icon_color:"#E2306C"},h={color:2===e.social_icon_color_status?e.social_icon_color:"#E2306C"};return{bannerStyle:t,bannerStyleBgRight:l,subTitleStyle:o,titleStyle:n,iconAreaStyle:c,iconStyle:r,isFacebook:String(e.social_icons).includes("1"),isTwitter:String(e.social_icons).includes("2"),isInstagram:String(e.social_icons).includes("3"),facebookIconAreaStyle:_,facebookIconStyle:b,twitterIconAreaStyle:d,twitterIconStyle:g,instagramIconAreaStyle:u,instagramIconStyle:h,subTitleVarentClass:a,titleVarentClass:s}}},3378:(e,t,l)=>{l.r(t),l.d(t,{default:()=>c});l(47313);var o=l(17739),a=l(90484),n=l(98501),s=l(35179),i=l(46417);const c=e=>{let{Banner:t,LogoImage:l}=e;const{bannerStyle:c,subTitleStyle:r,titleStyle:_,iconAreaStyle:b,iconStyle:d,isFacebook:g,isTwitter:u,isInstagram:h,facebookIconAreaStyle:m,facebookIconStyle:y,twitterIconAreaStyle:S,twitterIconStyle:f,instagramIconAreaStyle:k,instagramIconStyle:I,subTitleVarentClass:v,titleVarentClass:p}=(0,a.p)(t);var w=s.bX&&null!==l&&void 0!==l&&l.newName?l.newName:"",N=s.bX?w:t.LogoImage;if(N&&String(N).length>0&&String(N).includes("banner/logo_bnr")&&String(N).includes(n.lO))N=String(t.LogoImage).replace(n.lO,"");else if(N.includes(n.lO)&&""===N.split(n.lO)[1])N=String(t.LogoImage).replace(n.lO,"");else if(N&&String(N).length>0){let e=N.split("/").pop();"logo_bnr-2.svg"!=e&&"logo_bnr-3.svg"!=e&&"logo_bnr-5.svg"!=e||(N="".concat(n.ho,"react-app/media/banner/logo_bnr-2.svg"))}var x=c;return x&&x.backgroundImage.includes("bg-bnr-3.png")&&x.backgroundImage.includes(n.lO)&&(x.backgroundImage=x.backgroundImage.replace(n.lO,"https://test.taggbox.com/widget/assets/media/banner/")),(0,i.jsx)("div",{className:"tb_wall_header_wrap__",style:x,children:(0,i.jsxs)("div",{className:"tb_header2_row__",children:[(0,i.jsx)("div",{className:"tb_header2_column_logo__",children:N?(0,i.jsx)("div",{className:"tb_header2_logo__",children:(0,i.jsx)("img",{loading:"lazy",className:"tb_header2_logo_img__",src:N,alt:(0,o.P)(N),width:180,height:52})}):""}),(0,i.jsx)("div",{className:"tb_header2_column_icons__",children:1==t.social_icon_status?(0,i.jsxs)("div",{className:"tb_header2_social_icons__",children:[g?(0,i.jsx)("a",{href:t.facebook_url?(0,o.hd)(t.facebook_url):null,target:"_blank",className:"tb_header2_social_icon_list__","aria-label":"Facebook",style:{...b,...m},children:(0,i.jsx)("div",{className:"tb_header2_social_icon__ tb__icon tb-facebook",style:{...d,...y},children:" "})}):"",u?(0,i.jsx)("a",{href:t.twitter_url?(0,o.hd)(t.twitter_url):null,target:"_blank",className:"tb_header2_social_icon_list__","aria-label":"Twitter",style:{...b,...S},children:(0,i.jsx)("div",{className:"tb_header2_social_icon__ tb__icon tb-twitter",style:{...d,...f}})}):"",h?(0,i.jsx)("a",{href:t.instagram_url?(0,o.hd)(t.instagram_url):null,target:"_blank",className:"tb_header2_social_icon_list__","aria-label":"Instagram",style:{...b,...k},children:(0,i.jsx)("div",{className:"tb_header2_social_icon__ tb__icon tb-instagram",style:{...d,...I},children:" "})}):""]}):null}),(0,i.jsx)("div",{className:"tb_header2_column_content__",children:(0,i.jsxs)("div",{className:"tb_header2_content__",children:[(0,i.jsx)("div",{className:"tb_header2_subtitle__ tb-cTBfont-".concat(v),style:r,children:t.subTitle}),(0,i.jsx)("div",{className:"tb_header2_title__ tb-cTBfont-".concat(p),style:_,children:t.title})]})})]})})}}}]);