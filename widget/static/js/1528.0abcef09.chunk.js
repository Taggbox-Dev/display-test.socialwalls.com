"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1528],{91528:(t,e,o)=>{o.r(e),o.d(e,{default:()=>d});var a=o(47313),s=o(43635),c=(o(2406),o(97915)),i=o(17739),l=o(46417);class d extends a.Component{constructor(t){super(t),this.state={mediaLoaded:!1,largerHeight:0,imgSize:{small:t.data.postFileNew,large:t.data.filename,orignal:t.data.file}}}componentWillReceiveProps(t){const{data:e}=t;this.props.data!==e&&this.setState({imgSize:{small:e.postFileNew,large:e.filename,orignal:e.file}})}render(){const{data:t,wall:e,opacity:o,mediaSize:a}=this.props,{mediaLoaded:d,imgSize:r}=this.state,n=!!(t.hotspot&&t.ugc_products.length>0),p={opacity:o,filter:d?"blur(2px)":null};return(0,l.jsxs)("div",{className:"tb_post_modal_img_holder",children:[n?(0,l.jsx)(c.Z,{product:t.ugc_products}):null,(0,l.jsx)("img",{className:"tb_post_modal_img_",decoding:"async",ref:this.mediaRef,src:r.small,srcSet:"".concat(r.large,", 991w ").concat(r.small,", 480w"),sizes:a&&a.width,alt:(0,i.P)(r.small),"data-link":t.link,"data-network":t.network.id,"data-wall-id":e.Wall.id,"data-owner-id":e.Wall.owner,"data-item-id":t.id,"data-feed-id":t.feedId?t.feedId:"","data-filter-id":t.filterId,"data-load":"0",onLoad:this.handleImageLoad,onError:t.stories?null:t=>{(0,s.ht)(t)},loading:"lazy",draggable:"false",width:a&&a.width,height:a&&a.height,style:p},r.small)]})}}},97915:(t,e,o)=>{o.d(e,{Z:()=>u});var a=o(47313),s=o(43411),c=o(83773),i=o(6119),l=o(17739),d=o(46417);const r=(0,c.componentWillAppendToBody)((t=>{let{children:e}=t;return e})),n=t=>{const e=t.product_discount>0?t.product_discount:t.product_price,o=t.product_discount>0&&t.product_discount!=t.product_price?'<div class="tb_p_tooltip_price tb_price_disabled">'.concat(t.price_currency_symbol).concat(t.product_price,"</div>"):"",a=t.product_price>0||t.product_discount>0?"".concat(o,'<div class="tb_p_tooltip_price">').concat(t.price_currency_symbol).concat(e,"</div>"):"";return'<a href="'.concat(t.product_url,'" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">').concat(t.product_title,"</div>\n          ").concat(a,"\n        </a>")};class p extends a.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=t=>t}render(){const{product:t,appData:e}=this.props,{activeMouse:o}=this.state,a=e&&Object.keys(e).length>0?e.wall.ProductSetting.Hotspot:"";return a.status?(0,d.jsx)("div",{className:"tb_hotspot_wrap",children:t.map(((t,e)=>{const s=(0,l.i1)();return(0,d.jsxs)("div",{href:t.product_url,id:"tb_hotspot-".concat(t.id).concat(s),onClick:t=>{t.stopPropagation()},onMouseEnter:t=>this.setActiveMouse(e),onMouseOut:t=>this.setActiveMouse(null),className:"tb_hotspot_dot".concat(o==e?" tb_hotspot_active_":""),style:{top:t.hotspot_cordinates.top,left:t.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,d.jsx)("div",{className:"tb_hotspot__ ".concat(0==a.type?"tb_hotspot_ani__":""),onClick:e=>window.open(t.UgcProduct.product_url,"_blank"),children:e+1}),(0,d.jsx)(r,{children:(0,d.jsx)(i.u,{className:"tb_pro_tooltip",anchorSelect:"#tb_hotspot-".concat(t.id).concat(s),clickable:!0,html:n(t.UgcProduct)})})]},e)}))}):null}}const u=(0,s.$j)((t=>({appData:t.appData})))(p)}}]);