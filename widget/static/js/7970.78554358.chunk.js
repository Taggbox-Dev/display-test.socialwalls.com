"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7970,5810],{25810:(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var a=s(47313),i=s(35179),l=s(46417);const n=a.lazy((()=>s.e(5867).then(s.bind(s,95867))));class r extends a.PureComponent{render(){const{network:e,networkClass:t,ThemeRule:s,isDefault:r,Personalization:o}=this.props,d=!!r&&(7!==(null===e||void 0===e?void 0:e.id)&&4!==(null===e||void 0===e?void 0:e.id)&&36!==(null===e||void 0===e?void 0:e.id)),c=i.ZQ&&36==(null===e||void 0===e?void 0:e.id)?"tagembed":null===e||void 0===e?void 0:e.icon;return d?(0,l.jsx)("div",{className:"".concat(t," tb__icon tb-").concat(null===c||void 0===c?void 0:c.replace(/fa-/g,"")),children:(0,l.jsx)("div",{})}):(0,l.jsxs)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:[" ",(0,l.jsx)(n,{network:e,networkClass:t})]})}}},27970:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var a=s(47313),i=s(25810),l=s(46417);const n=a.lazy((()=>s.e(4576).then(s.bind(s,24576)))),r=a.lazy((()=>s.e(7018).then(s.bind(s,7018))));class o extends a.PureComponent{constructor(e){super(e),this.totalReviewNetworks=e=>{const{wall:t}=this.props;let s=0,a=0,n=[];return e.map(((e,r)=>{const o=e.Network;s+=o.averageReviews*o.totalReviews,a+=o.totalReviews,n.push(r<5?(0,l.jsx)("div",{className:"tb_rb_social_list",children:(0,l.jsx)(i.default,{networkClass:"tb_rb_avg_social_ico",network:o,isDefault:!0,ThemeRule:t.ThemeRule})},r):null)})),this.setState({avgRate:(s/a).toFixed(1),totalReviews:a}),n},this.state={avgRate:0,totalReviews:0}}render(){const{postData:e,reviewFilters:t,wall:s,languageSetting:i,isFreeAdsStatus:o}=this.props,{avgRate:d,totalReviews:c}=this.state,u={backgroundColor:s.ThemeRule.cardColor,borderRadius:s.ThemeRule.radius};return(0,l.jsx)("div",{className:"tb_rb_post_container tb_rb_size_".concat(s.ThemeRule.cardSize," tb_rb_position_").concat(s.ThemeRule.cardPosition),style:u,children:(0,l.jsxs)("div",{className:"tb_rb_post_wrap",children:[(0,l.jsx)("div",{className:"tb_rb_social_",children:this.totalReviewNetworks(t)}),(0,l.jsxs)("div",{className:"tb_rb_rating_wrap",children:[(0,l.jsx)("div",{className:"tb_rb__title tb-cTBfont-".concat(s.ThemeRule.font_varient),children:"Reviews"}),(0,l.jsx)("div",{className:"tb_rb_avg_rating tb-cTBfont-".concat(s.ThemeRule.font_varient),children:d}),(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:(0,l.jsx)(n,{size:18,rating:d})}),(0,l.jsxs)("div",{className:"tb_rb_based_on tb-cTBfont-".concat(s.ThemeRule.font_varient),children:["Based on ",(0,l.jsx)("div",{className:"tb_rb_based_on_count",children:c})," reviews"]}),o?(0,l.jsxs)(a.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:[(0,l.jsx)(r,{languageSetting:i,wallId:s.Wall.id,themeID:s.Personalization.widgetTheme,isCenter:!0})," "]}):null]})]})})}}}}]);