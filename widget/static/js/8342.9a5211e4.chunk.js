(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[8342],{62245:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var s=n(47313),c=n(16390),i=n(17739),o=n(46417);const l=s.lazy((()=>Promise.all([n.e(622),n.e(584)]).then(n.bind(n,30584))));class a extends s.PureComponent{constructor(e){super(e),this.contentRef=s.createRef()}componentDidMount(){setTimeout((()=>{const e=this.contentRef.current.clientHeight;this.props.contentRefCallBack&&this.props.contentRefCallBack(e)}),100)}render(){const{contentClass:e,content:t,ThemeRule:n,font:a,personalization:r,item:d,contentTitle:m,readMore:h,maxLength:p,textAlign:u,maxLines:x,isReadMore:f}=this.props,b={WebkitLineClamp:x,textAlign:n.textAlignment};let k=20==d.network.id?t:(0,i.Fx)(t);12==d.network.id&&(k=(0,c.ZP)(k));const g="".concat(n.lineTrim?" tb_content_line-".concat(n.lineTrim):""),R="".concat(e," ").concat(f?"":g);return(0,o.jsxs)("div",{className:R,ref:this.contentRef,style:b,children:[m?(0,o.jsx)("div",{className:"tb_bold_txt__",children:(0,c.ZP)(m)}):null,(0,o.jsxs)(s.Suspense,{fallback:(0,o.jsx)(o.Fragment,{}),children:[" ",(0,o.jsx)(l,{data:d,content:k,Personalization:r})]})]})}}},50247:()=>{}}]);