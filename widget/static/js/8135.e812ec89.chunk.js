(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1061,8135,9924],{69924:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});var s=i(9950),a=(i(14478),i(98776),i(89874)),o=i(52867),d=i(44414);class r extends s.Component{constructor(e){super(e),this.state={mediaLoaded:!1,largerHeight:0,imgSize:{small:e.data.postFileNew,large:e.data.filename,orignal:e.data.file}}}componentWillReceiveProps(e){const{data:t}=e;this.props.data!==t&&this.setState({imgSize:{small:t.postFileNew,large:t.filename,orignal:t.file}})}render(){const{data:e,wall:t,opacity:i,mediaSize:s}=this.props,{mediaLoaded:r,imgSize:l}=this.state,n=!!(e.hotspot&&e.ugc_products.length>0),p={opacity:i,filter:r?"blur(2px)":null};return(0,d.jsxs)("div",{className:"tb_post_modal_img_holder",children:[n?(0,d.jsx)(a.A,{product:e.ugc_products}):null,(0,d.jsx)("img",{className:"tb_post_modal_img_",decoding:"async",ref:this.mediaRef,src:l.small,srcSet:`${l.large}, 991w ${l.small}, 480w`,sizes:s&&s.width,alt:(0,o.wG)(l.small),"data-link":e.link,"data-network":e.network.id,"data-wall-id":t.Wall.id,"data-owner-id":t.Wall.owner,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-filter-id":e.filterId,"data-load":"0",onLoad:this.handleImageLoad,onError:e.stories?null:e=>{},loading:"lazy",draggable:"false",width:s&&s.width,height:s&&s.height,style:p},l.small)]})}}},51828:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>n});var s=i(9950),a=i(69924),o=i(7482),d=i(53556),r=i(66345),l=i(44414);JSON.parse(window.localStorage.getItem("mediaDimension"));class n extends s.PureComponent{constructor(e){super(e),this.handleSlideChange=()=>{const e=this.splideRef.current.splide,t=e.index,i=0===t,s=t===e.length-1;this.setState({isFirst:i,isLast:s})},this.state={mediaSize:{height:1e3,width:1e3},mediaLoaded:!1,imgUrl:e.data.postFileNew,largerHeight:0,isFirst:!1,isLast:!1,currentIndex:0},this.splideRef=s.createRef()}componentWillReceiveProps(e){const{data:t}=e,{ImageUrl:i}=e;this.state.imgUrl!==i&&this.setState({imgUrl:i,mediaLoaded:!1,mediaSize:{height:parseInt(t.mediaHeight),width:parseInt(t.mediaWidth)}})}componentDidMount(){const{data:e}=this.props;this.setState({mediaSize:{height:parseInt(e.mediaHeight),width:parseInt(e.mediaWidth)}}),this.splideRef.current.splide.on("moved",this.handleSlideChange),this.handleSlideChange()}componentWillUnmount(){this.splideRef.current.splide.off("moved",this.handleSlideChange)}render(){const{imageList:e,data:t,wall:i}=this.props,{mediaSize:s,isFirst:n,isLast:p,currentIndex:c}=this.state;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.default,{ImageUrl:t.postFile,data:t,wall:i,opacity:0}),(0,l.jsx)("div",{className:"tb_post_modal_slide_holder_",children:(0,l.jsxs)(d.eB,{hasTrack:!1,className:"tb_post_modal_media_slider",options:{rewind:!1,speed:400,gap:0,autoplay:!1,autoHeight:!0,padding:0,pagination:!0,arrows:!0,classes:{pagination:"splide__pagination tb_modal_slider_dots",page:"splide__pagination__page tb_modal_slider_dot"}},ref:this.splideRef,onActive:(e,t,i)=>this.setState({currentIndex:t.index}),children:[(0,l.jsx)(d.v9,{children:e.map(((e,s)=>{const n=c==s,p=r.uS?e.file:e.postFile;return(0,l.jsx)(d.Nn,{style:{margin:0},children:2!==e.type&&4!==e.type&&n?3===e.type||5===e.type?(0,l.jsx)(o.default,{data:{mediaUrl:r.uS?e.media:e.mediaFile,link:t.link,network:{id:r.uS?e.networkId:t.networkId},id:e.id,filterId:t.filterId,stories:e.stories?e.stories:0,postFileNew:p,filename:p,file:p,feedId:t.feedId},wall:i,opacity:1}):null:(0,l.jsx)(a.default,{ImageUrl:p,data:{link:t.link,network:{id:t.network.id},id:e.id,filterId:t.filterId,stories:e.stories,feedId:t.feedId,postFileNew:p,filename:p,file:p},wall:i,opacity:1},`multi-slider${s}`)},s)}))}),(0,l.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_post_modal_arrow_wrapper_",children:[(0,l.jsx)("div",{className:"splide__arrow splide__arrow--prev tb_post_modal_arrow tb_post_modal_arrow_left__ tb__icon tb-arrow-left-alt",disabled:n,children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"splide__arrow splide__arrow--next  tb_post_modal_arrow tb_post_modal_arrow_right__ tb__icon tb-arrow-right-alt",disabled:p,children:(0,l.jsx)("div",{})})]})]})})]})}}},7482:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>c});var s=i(9950),a=i(38092),o=i.n(a),d=i(14478),r=i(66345),l=i(52867),n=i(44414);const p=(e,t)=>{if(25===t){return String(e).replace("https://w.soundcloud.com/player/?url=","")}return e};class c extends s.PureComponent{constructor(e){super(e),this.setVideoLoaded=e=>{this.setState({videoLoaded:e})},this.muteToggle=()=>{this.setState({muted:!this.state.muted})},this.onUpdateTime=e=>{try{if(r.HY){const{played:t}=this.state;this.setState({played:t+e.playedSeconds})}}catch(t){console.log(t)}},this.state={videoLoaded:!1,muted:!!r.aD,played:0},this.VideoWrap=s.createRef()}componentWillUnmount(){const{played:e}=this.state;r.HY&&(0,l.HI)(e)}render(){const{data:e,wall:t}=this.props,{videoLoaded:i,muted:s}=this.state,a=![7,3,25].includes(e.network.id);return(0,n.jsxs)("div",{className:"tb_post_modal_video_holder"+(i?" tb_post_video_loaded":""),ref:this.VideoWrap,children:[a?(0,n.jsx)("div",{className:"tb_m_mute_btn",onClick:this.muteToggle,children:(0,n.jsx)("div",{className:"tb__icon tb-"+(s?"mute":"unmute"),children:(0,n.jsx)("div",{})})}):"",(0,n.jsx)(o(),{className:`tb_post_modal_video video${e.id}`,url:p(e.mediaUrl,e.network.id),"data-type":"video","data-network":e.network.id,"data-link":e.link,"data-wall-id":t.Wall.id,"data-item-id":e.id,"data-feed-id":e.feedId?e.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto",muted:s,poster:e.postFileNew}},file:{forceVideo:!0,attributes:{muted:s,poster:e.postFileNew}}},loop:!0,onError:t=>{e.stories&&0!=e.stories||(0,d.zi)(t,e.id)},autoPlay:!0,muted:s,volume:1,playsinline:!0,onReady:e=>{this.setVideoLoaded(!0)},playing:!0,height:"100%",width:"100%",controls:!a,style:{backgroundImage:`url(${e.postFileNew})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onProgress:this.onUpdateTime})]},e.mediaUrl)}}},89874:(e,t,i)=>{"use strict";i.d(t,{A:()=>_});var s=i(9950),a=i(11127),o=i(73068),d=i(1823),r=i(52867),l=i(44414);const n=(0,o.componentWillAppendToBody)((e=>{let{children:t}=e;return t})),p=e=>{const t=e.product_discount>0?e.product_discount:e.product_price,i=e.product_discount>0&&e.product_discount!=e.product_price?`<div class="tb_p_tooltip_price tb_price_disabled">${e.price_currency_symbol}${e.product_price}</div>`:"",s=e.product_price>0||e.product_discount>0?`${i}<div class="tb_p_tooltip_price">${e.price_currency_symbol}${t}</div>`:"";return`<a href="${e.product_url}" target="_blank" class="tb_tooltip_wrap">\n          <div class="tb_p_tooltip_title">${e.product_title}</div>\n          ${s}\n        </a>`};class c extends s.PureComponent{constructor(){super(...arguments),this.state={activeMouse:null},this.setActiveMouse=e=>e}render(){const{product:e,appData:t}=this.props,{activeMouse:i}=this.state,s=t&&Object.keys(t).length>0?t.wall.ProductSetting.Hotspot:"";return s.status?(0,l.jsx)("div",{className:"tb_hotspot_wrap",children:e.map(((e,t)=>{const a=(0,r.Ul)();return(0,l.jsxs)("div",{href:e.product_url,id:`tb_hotspot-${e.id}${a}`,onClick:e=>{e.stopPropagation()},onMouseEnter:e=>this.setActiveMouse(t),onMouseOut:e=>this.setActiveMouse(null),className:"tb_hotspot_dot"+(i==t?" tb_hotspot_active_":""),style:{top:e.hotspot_cordinates.top,left:e.hotspot_cordinates.left},"data-tooltip-offset":7,children:[(0,l.jsx)("div",{className:"tb_hotspot__ "+(0==s.type?"tb_hotspot_ani__":""),onClick:t=>window.open(e.UgcProduct.product_url,"_blank"),children:t+1}),(0,l.jsx)(n,{children:(0,l.jsx)(d.m_,{className:"tb_pro_tooltip",anchorSelect:`#tb_hotspot-${e.id}${a}`,clickable:!0,html:p(e.UgcProduct)})})]},t)}))}):null}}const _=(0,a.Ng)((e=>({appData:e.appData})))(c)},43488:(e,t,i)=>{"use strict";var s=i(93959);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,i,a,o,d){if(d!==s){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function t(){return e}e.isRequired=e;var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return i.PropTypes=i,i}},11942:(e,t,i)=>{e.exports=i(43488)()},93959:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);