"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[9065,5810],{89065:(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});var a=s(47313),i=s(25810),r=s(46417);const l=a.lazy((()=>s.e(4576).then(s.bind(s,24576))));class n extends a.PureComponent{constructor(e){super(e),this.calculateSum=()=>{const{reviewFilters:e}=this.props;let t=0;for(const s in e)if(e.hasOwnProperty(s)){t+=e[s].Network.totalReviews}return t},this.togglePopup=()=>{this.props.togglePopup(!1)},this.state={averageCalcBadge:0}}componentDidMount(){const{reviewFilters:e}=this.props;let t=0,s=0;for(const a in e){const i=e[a].Network;t+=i.totalReviews,s+=i.totalReviews*i.averageReviews}if(t>0){const e=s/t;this.setState({averageCalcBadge:e})}}render(){const{ThemeRule:e,reviewFilters:t}=this.props,{averageCalcBadge:s}=this.state,n=this.calculateSum();let o=parseFloat(s).toFixed(1);return(0,r.jsxs)("div",{className:"tb_bt_post_wrap_in",onClick:this.togglePopup,children:[(0,r.jsx)("div",{className:"tb_bt_social_",children:t&&t.length>0?t.map(((t,s)=>{const a=t.Network;return s<5?(0,r.jsx)("div",{className:"tb_bt_social_list",children:(0,r.jsx)(i.default,{ThemeRule:e,networkClass:"tb_bt_avg_social_ico",network:a,isDefault:!0})},s):null})):null}),(0,r.jsxs)("div",{className:"tb_bt_rating_wrap",children:[(0,r.jsx)("div",{className:"tb_bt_avg_rating",children:o}),(0,r.jsx)(a.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:(0,r.jsx)(l,{size:14,rating:o})})]}),(0,r.jsxs)("div",{className:"tb_bt_review_link",children:["Read our ",n," reviews"]})]})}}},25810:(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});var a=s(47313),i=s(35179),r=s(46417);const l=a.lazy((()=>s.e(5867).then(s.bind(s,95867))));class n extends a.PureComponent{render(){const{network:e,networkClass:t,ThemeRule:s,isDefault:n,Personalization:o}=this.props,c=!!n&&(7!==e.id&&4!==e.id&&36!==e.id),d=i.ZQ&&36==e.id?"tagembed":e.icon;return c?(0,r.jsx)("div",{className:"".concat(t," tb__icon tb-").concat(d.replace(/fa-/g,"")),children:(0,r.jsx)("div",{})}):(0,r.jsxs)(a.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[" ",(0,r.jsx)(l,{network:e,networkClass:t})]})}}}}]);