(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3464],{83744:(t,e,a)=>{"use strict";a.d(e,{Ml:()=>n,VM:()=>o,YS:()=>r,bE:()=>c});var s=a(96011),i=a.n(s),l=a(66345);const r=t=>i().get(`${t}.js`),c=t=>i().post(`${l.Ep}/cart/add.js`,t),o=()=>i().get(`${l.Ep}/cart.js`),n=t=>{i().post(l.M,t).then((t=>{})).catch((t=>console.log("error",t)))}},86069:(t,e,a)=>{"use strict";a.d(e,{A:()=>m});var s=a(9950),i=a(83744),l=a(14478),r=a(52867),c=a(80415),o=a(66345),n=a(44414);class d extends s.Component{constructor(){super(...arguments),this.state={cartItems:1}}componentDidMount(){(0,i.VM)().then((t=>{const{item_count:e}=t.data;e&&this.setState({cartItems:e})})).catch((t=>{}))}render(){var t;const{productDetails:e,closeAddtocart:a,productImg:s,tagshopProductDeatil:i,onBack:l}=this.props;return(0,n.jsxs)("div",{className:"tb_cart_container",children:[(0,n.jsxs)("div",{className:"tb_cart_back_btn",onClick:l,children:[(0,n.jsx)("div",{className:"tb__icon tb-arrow-left",children:(0,n.jsx)("div",{})}),"Back"]}),(0,n.jsxs)("div",{className:"tb_cart_details",children:[(0,n.jsx)("div",{className:"tb_cart_p_img",children:(0,n.jsx)("img",{src:e.featured_image?e.featured_image.src:s,alt:"",onError:t=>t.target.src=c.Y5,height:400,width:300})}),(0,n.jsxs)("div",{className:"tb_cart_p_details",children:[(0,n.jsxs)("div",{className:"tb_card_de_in",children:[(0,n.jsx)("div",{className:"tb_cart_p_title",children:e.name}),(0,n.jsxs)("div",{className:"tb_cart_p_price",children:[null===i||void 0===i||null===(t=i.UgcProduct)||void 0===t?void 0:t.price_currency_symbol,(null===i||void 0===i?void 0:i.UgcProduct.product_discount)>0?null===i||void 0===i?void 0:i.UgcProduct.product_discount:null===i||void 0===i?void 0:i.UgcProduct.product_price]}),this.state.cartItems?(0,n.jsxs)("div",{className:"tb_cart_p_total",children:["Your cart now has ",this.state.cartItems," item"]}):(0,n.jsx)(n.Fragment,{})]}),(0,n.jsxs)("div",{className:"tb_cart_actions tb_cart_c_action",children:[(0,n.jsx)("div",{className:"tb_cart_primary",onClick:()=>window.location=`${o.Ep}/cart`,children:"Proceed to checkout"}),(0,n.jsx)("div",{className:"tb_cart_secondary",onClick:a,children:"Continue Shopping"})]})]})]})]})}}const u=d;var h=a(68940),p=a(91109),_=(a(99425),a(49071),a(70804));class v extends s.Component{constructor(t){var e,a,s;super(t),this.updateQuantity=t=>e=>{this.setState((e=>({quantity:t?e.quantity+1:e.quantity>1?e.quantity-1:1})))},this.getOptions=()=>{const{productDetails:t}=this.props;if(t&&Object.keys(t).length>0){const{data:a}=t;var e=[];a&&a.options&&a.options.length&&a.options.map(((t,s)=>{if(t.values&&t.values.length){let i=[],l=null,r=[];t.values.map(((t,e)=>{var c;const o=a.variants.find((e=>e.options.includes(t)));r.push(null===(c=o.featured_image)||void 0===c?void 0:c.src);const n=a.variants.filter((e=>e.options.includes(t)&&e.available));n&&n.length>0&&o&&o.available&&!i.includes(t)&&(i.push(t),null==l&&n[0][`option${s+1}`]==t&&(l=e))}));const c=r.filter((t=>void 0!==t));let o=0;a.options&&1==a.options.length&&(o=l||0),e.push({key:t.name,value:t.values,selected:t.values[0==s?o:l||0],availableVarient:i,isMediaShow:c.length==r.length})}})),this.setState({allSizes:[],allColors:[],productOption:e},(()=>this.getProductImage()))}},this.onClickSelectVarient=(t,e,a)=>s=>{var i;let{productOption:l}=this.state;const{productDetails:r}=this.props,{data:c}=r;l[t].selected=e;let o={};if(a){var n;const t=c.variants.find((t=>t.options.includes(e)));o={productImage:t.featured_image?null===(n=t.featured_image)||void 0===n?void 0:n.src:this.props.productImg}}let d=!1;var u=[];l.map(((a,s)=>{let i=[],r=null;if(t<s){const t=c.variants.filter((t=>t.options.includes(e)));t&&t.length>0&&t.map(((t,e)=>{t.available&!i.includes(t[`option${s+1}`])&&(i.push(t[`option${s+1}`]),null==r&&(r=e))})),l[s].selected=a.value[r||0],l[s].availableVarient=i,d=0==i.length}u.push(a.selected)}));var h=this.getMultiImages(c.media,u);0==(null===(i=h)||void 0===i?void 0:i.length)&&(h=c.images),this.setState({productOption:l,optionError:!1,isSoldOut:d||!1,...o,variantImages:h})},this.getMultiImages=(t,e)=>{var a=[];try{return t.map((t=>{if(t.alt){const s=t.alt.match(/#colour_([a-z-]+)/i);if(s){let i=s[1].replace(/-/g," ");e.find((t=>t.toLowerCase()===i.toLowerCase()))&&a.push(null===t||void 0===t?void 0:t.src)}else a=[]}})),a}catch(s){return a}},this.onAddToCart=()=>{try{const{productDetails:a}=this.props;if(a&&Object.keys(a).length>0){const{data:s}=a,{variants:i}=s,{selectedColor:l,selectedSize:r,allColors:c,allSizes:o,productOption:n}=this.state;var t=[];if(n&&n.length>0&&n.map(((e,a)=>{if(!e.selected)return console.log("optionError"),void this.setState({optionError:!0});0!=e.availableVarient.length?t.push(e.selected):this.setState({isSoldOut:!0})})),1==i.length)this.setState({selectedVariant:i[0]}),this.addProductsToCart(i[0]);else{const a=(e=t,i.filter((t=>e.every((e=>t.options.includes(e))))));a&&a.length>0&&(this.setState({selectedVariant:a[0]}),this.addProductsToCart(a[0]))}}}catch(a){console.log("error",a)}var e},this.addProductsToCart=t=>{const{wall:e,tagshopProductDeatil:a}=this.props,{quantity:s}=this.state,r=new FormData;r.append("id",t.id),r.append("quantity",s),(0,i.bE)(r).then((r=>{var c,o;const n={variant:t.options?t.options.join(","):"",price:t.price/100,wall:"website"==l.Ex?e.Wall.wallId:e.Wall.id,website_id:"website"==l.Ex?e.Wall.id:0,product_id:a.ugc_product,quantity:s,post:a.post_id,owner:e.Wall.owner,feed:null===a||void 0===a||null===(c=a.trackingData)||void 0===c?void 0:c.feed,currency:null===a||void 0===a||null===(o=a.trackingData)||void 0===o?void 0:o.currency};try{window.$("#cart-icon-bubble").length&&window.$("#cart-icon-bubble").load(window.location.href+" #cart-icon-bubble"),window.$("cart-drawer").length&&window.$("cart-drawer").removeClass("is-empty"),window.$("#shopify-section-cart-drawer").length?window.$("#shopify-section-cart-drawer").load(window.location.href+" #shopify-section-cart-drawer"):window.$("cart-drawer").length?window.$("cart-drawer").load(window.location.href+" #CartDrawer"):window.$("#Cart-Drawer").length&&(window.$("#Cart-Drawer").load(window.location.href+" .side-panel-inner"),window.$("#cart-drawer-toggle").load(window.location.href+" #cart-drawer-toggle"))}catch(d){console.error("Error loading cart components:",d)}(0,i.Ml)(n),this.setState({continueShopping:!0})})).catch((t=>{this.setState({continueShopping:!0})}))},this.getColorImage=t=>{const{productDetails:e}=this.props;if(e&&Object.keys(e).length>0){const{data:s}=e;if(t){var a;const e=s.variants.find((e=>e.options.includes(t)));return e.featured_image?null===(a=e.featured_image)||void 0===a?void 0:a.src:this.props.productImg}}},this.getCurrentVarient=t=>{const{productDetails:e}=this.props;if(e&&Object.keys(e).length>0){const{data:s}=e;if(t){var a;const e=s.variants.find((e=>e.options.includes(t)));return e.featured_image?null===(a=e.featured_image)||void 0===a?void 0:a.src:null}}},this.getProductImage=()=>{const{productDetails:t}=this.props,{productOption:e}=this.state;if(e&&e.length>0&&t&&Object.keys(t).length>0){const{data:l}=t;if(e[0].selected){var a,s;const t=l.variants.find((t=>t.options.includes(e[0].selected)));var i=this.getMultiImages(l.media,[e[0].selected]);0==(null===(a=i)||void 0===a?void 0:a.length)&&(i=l.images),this.setState({productImage:t.featured_image?null===(s=t.featured_image)||void 0===s?void 0:s.src:this.props.productImg,variantImages:i})}else this.setState({productImage:l.featured_image})}},this.toggleExpand=t=>{const{isExpanded:e}=this.state;this.setState({isExpanded:!e})};const r=(null===t||void 0===t||null===(e=t.productDetails)||void 0===e||null===(a=e.data)||void 0===a||null===(s=a.description)||void 0===s?void 0:s.length)>=200;this.state={allSizes:null,allColors:null,selectedColor:null,selectedSize:null,availableSize:[],productImage:"",optionError:!1,continueShopping:!1,selectedVariant:null,productOption:[],isSoldOut:!1,quantity:1,isExpanded:!!r,isReadMore:r,variantImages:[]}}componentDidMount(){this.getOptions(),this.getProductImage()}render(){var t,e,a,s,i;const{closeCart:l,addtoCartPopup:o,productDetails:d,onSelectedVariant:v,productImg:m,tagshopProductDeatil:g,closePopUp:b}=this.props,{allColors:x,allSizes:j,selectedColor:w,availableSize:f,selectedSize:N,productImage:y,optionError:C,continueShopping:S,selectedVariant:k,productOption:I,isSoldOut:E,quantity:D,isExpanded:$,isReadMore:O,variantImages:P}=this.state,{product_price:q,product_discount:V,price_currency_symbol:M,discount_currency_symbol:z,product_sku:U,product_title:A,product_image:T}=null===g||void 0===g?void 0:g.UgcProduct,Y=V>0&&V!=q?((parseInt(q)-parseInt(V))/parseInt(q)*100).toFixed():0,F=$?(0,r.Ex)(d.data.description,200):d.data.description;return(0,n.jsx)("div",{className:"tb_cart_modal tb_modal_show","aria-hidden":"true",children:(0,n.jsx)("div",{className:"tb_cart_modal_dialog",role:"document",children:(0,n.jsxs)("div",{className:"tb_cart_modal_content",children:[(0,n.jsx)("div",{className:"tb_c_close_btn",onClick:b,children:(0,n.jsx)("div",{className:"tb__icon tb-close-thin",children:(0,n.jsx)("div",{})})}),(0,n.jsx)("div",{className:"tb_cart_modal_body",children:S?(0,n.jsx)(u,{productImg:m,productDetails:k,tagshopProductDeatil:g,closeAddtocart:l,onBack:t=>this.setState({continueShopping:!1})}):(0,n.jsxs)("div",{className:"tb_cart_container",children:[(0,n.jsxs)("div",{className:"tb_cart_back_btn",onClick:l,children:[(0,n.jsx)("div",{className:"tb__icon tb-arrow-left",children:(0,n.jsx)("div",{})}),"Back"]}),(0,n.jsxs)("div",{className:"tb_cart_details",children:[(0,n.jsx)("div",{className:"tb_cart_p_img",children:(0,n.jsx)(h.RC,{autoHeight:!0,pagination:{clickable:!0},modules:[p.dK],className:"tb_cart_slider",children:P.length>0?P.map((t=>(0,n.jsx)(h.qr,{children:(0,n.jsx)("img",{src:t||c.Y5,onError:t=>this.setState({productImage:c.Y5}),height:400,width:300,alt:""})}))):(0,n.jsx)(h.qr,{children:(0,n.jsx)("img",{src:y||c.Y5,onError:t=>this.setState({productImage:c.Y5}),height:400,width:300,alt:""})})},P.length)}),(0,n.jsxs)("div",{className:"tb_cart_p_details",children:[(0,n.jsxs)("div",{className:"tb_card_de_in",children:[(0,n.jsxs)("div",{className:"tb_cart_p_info",children:[(0,n.jsx)("div",{className:"tb_cart_p_title",children:A}),(0,n.jsxs)("div",{className:"tb_cart_pp_wrap",children:[(0,n.jsxs)("div",{className:"tb_cart_p_price",children:[M,V>0?V:q]}),V>0&&V!=q?(0,n.jsxs)("div",{className:"tb_cart_p_dis",children:[M,q]}):null,Y>0?(0,n.jsxs)("div",{className:"tb_cart_p_dp",children:[`${Y}%`," off"]}):null]}),(null===g||void 0===g||null===(t=g.UgcProduct)||void 0===t||null===(e=t.product_sku)||void 0===e?void 0:e.length)>1?(0,n.jsxs)("div",{className:"tb_cart_sku",children:["SKU : ",g.UgcProduct.product_sku]}):null,(null===d||void 0===d||null===(a=d.data)||void 0===a||null===(s=a.inventory_quantity)||void 0===s?void 0:s.length)<=4?(0,n.jsxs)("div",{className:"tb_cart_s_l",children:["Only ",null===d||void 0===d||null===(i=d.data)||void 0===i?void 0:i.inventory_quantity," left in stock"]}):null,d.data.available?null:(0,n.jsx)("div",{className:"tb_cart_ofs",children:"Out of Stock"}),d.data.description?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"tb_cart_p",children:[(0,_.Ay)(F)," "]}),O?(0,n.jsx)("div",{className:"tb_cart_read_more_",onClick:this.toggleExpand,children:$?"Read More...":"Show Less..."}):null]}):null,d.data.vendor?(0,n.jsxs)("div",{className:"tb_cart_s_v",children:[(0,n.jsx)("div",{className:"tb_cart_s_vt",children:"Vendor: "}),d.data.vendor]}):null]}),(0,n.jsx)("div",{className:"tb_cart_var_",children:I&&I.length>0?(0,n.jsx)(n.Fragment,{children:I.map(((t,e)=>(0,n.jsxs)("div",{className:"tb_cart_size",children:[(0,n.jsxs)("div",{className:"tb_cart_s_label",children:[t.key,":"]}),t.value.map(((a,s)=>{const i=this.getCurrentVarient(a),l=t.availableVarient.includes(a),r=t.selected==a;return(0,n.jsx)(n.Fragment,{children:String(t.key).toLowerCase().includes("size")||String(t.key).toLowerCase().includes("color")&&!t.isMediaShow||null==i?(0,n.jsx)("div",{className:`tb_cart_s_btn${r?" tb_active":""}${l?"":" tb_disabled"}`,onClick:this.onClickSelectVarient(e,a,!1),children:a},s):(0,n.jsx)("div",{className:`tb_cart_color${r?" tb_active":""}${l?"":" "}`,onClick:this.onClickSelectVarient(e,a,!0),children:(0,n.jsx)("div",{className:"tb_cart_colorTile",children:(0,n.jsx)("img",{src:i,style:{height:"100%",width:"100%"},onError:t=>t.target.src=c.Y5})})},s)})}))]},e)))}):null}),(0,n.jsx)("div",{className:"tb_cart_s_label",children:"Quantity:"}),(0,n.jsxs)("div",{className:"tb__qu",children:[(0,n.jsx)("div",{className:"tb_qu_btn"+(D<=1?" tb_disabled":""),onClick:this.updateQuantity(!1),children:"-"}),(0,n.jsx)("div",{className:"tb_qu_input",children:D}),(0,n.jsx)("div",{className:"tb_qu_btn"+(D>=100?" tb_disabled":""),onClick:this.updateQuantity(!0),children:"+"})]}),C?(0,n.jsx)("div",{className:"tb_cart_p_error",children:"Please select any one variant to proceed!"}):(0,n.jsx)(n.Fragment,{})]}),(0,n.jsxs)("div",{className:"tb_cart_actions",children:[(0,n.jsx)("div",{className:"tb_cart_secondary",onClick:l,children:"Cancel"}),(0,n.jsx)("div",{className:"tb_cart_primary",style:E?{pointerEvents:"none",opacity:.4}:{},onClick:this.onAddToCart,children:"ADD TO CART"})]})]})]})]})})]})})})}}const m=v},95098:()=>{}}]);