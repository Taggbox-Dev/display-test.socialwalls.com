"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3131],{3720:(t,e,i)=>{i.d(e,{A:()=>c});var o=i(9950),n=i(38092),l=i.n(n),d=i(66345),s=i(76506),a=i(44414);class r extends o.Component{constructor(t){super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{media:t}=this.props.Post;if((null===t||void 0===t||!t.height)&&(null===t||void 0===t||!t.width))try{var e;const{width:i,height:o}=await(0,s.TW)(null===t||void 0===t||null===(e=t.image)||void 0===e?void 0:e.small);this._isMounted&&this.setState({calcHeight:o,calcWidth:i})}catch(i){this._isMounted&&this.setState({calcHeight:300,calcWidth:300})}},this.setVideoLoaded=t=>{this._isMounted&&this.setState({videoLoaded:t})},this.state={loadError:!1,videoLoaded:!1,calcHeight:0,calcWidth:0,currentHeight:0,currentWidth:0},this.mediaRef=o.createRef(),this._isMounted=!1}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var t,e,i,o,n,s,r;const{VideoClass:c,Post:u,controls:h,autoPlay:v,videoEndCallback:m,muted:g,size:p,inView:f}=this.props,w="function"===typeof m,{calcHeight:y,calcWidth:b,currentWidth:$,currentHeight:_}=this.state,{media:k,id:M,link:x,networkId:S}=u,I=1===p,V=null!==k&&void 0!==k&&k.height?null===k||void 0===k?void 0:k.height:y,R=null!==k&&void 0!==k&&k.width?null===k||void 0===k?void 0:k.width:b,W={paddingBottom:`${I?null:p||100*V/R}%`},j=!w&&null!==k&&void 0!==k&&null!==(t=k.video)&&void 0!==t&&t.clip&&"undefined"!=(null===k||void 0===k||null===(e=k.video)||void 0===e?void 0:e.clip)?null===k||void 0===k||null===(i=k.video)||void 0===i?void 0:i.clip:f?null===k||void 0===k||null===(o=k.video)||void 0===o?void 0:o.full:null===k||void 0===k||null===(n=k.image)||void 0===n?void 0:n.small;return(0,a.jsx)("div",{className:`${c}_wrap_`,style:W,ref:this.mediaRef,children:(0,a.jsx)(l(),{className:`${c} tb_media-${M}`,url:j,"data-height":y,"data-width":b,"data-type":"video","data-network":S,"data-link":x,"data-item-id":M,"data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":R,"data-height":V,poster:null===k||void 0===k||null===(s=k.image)||void 0===s?void 0:s.small}},file:{attributes:{preload:"metadata",poster:null===k||void 0===k||null===(r=k.image)||void 0===r?void 0:r.small,height:_,width:$}}},loop:!w&&v,onError:()=>{this.setVideoLoaded(!1),w&&setTimeout((()=>{m()}),1e4)},autoPlay:f&&v?1:0,muted:g,volume:v?1:0,playsinline:1,onReady:()=>this.setVideoLoaded(!d.HY),playing:f&&v?1:0,controls:h||!1,onEnded:w?m:null,title:null===k||void 0===k?void 0:k.title},`${M}-${_}-${b}-${f}`)})}}const c=(0,o.memo)(r)},38281:()=>{},45285:(t,e,i)=>{i.d(e,{bs:()=>r});var o=i(80415),n=i(296),l=i(66345),d=i(28322),s=i(14313);let a=[];const r=t=>{t.persist();const e=t.target,{network:i,itemId:o,themeId:n}=e.dataset;if(1!=i||[3,4,16,47,50,55,60].includes(n))a.includes(t)||a.push(t);else{const t=document.querySelector(`.tb_media-${o}`);t&&(t.style.display="none")}1===a.length&&c()},c=async()=>{var t;const{postData:e,wall:i}=n.A.getState().appData;if(!i||!Object.keys(i).length||!a.length)return;const{User:r,Wall:h}=i,v=null===r||void 0===r?void 0:r.id,m=(l.HY,null===h||void 0===h?void 0:h.id),g=null===(t=a[0])||void 0===t?void 0:t.target,{filterId:p,network:f,itemId:w,load:y}=g.dataset,b=document.querySelector(`img[data-item-id="${w}"]`),$=null!==e&&void 0!==e&&e.completeDataObject?Object.values(e.completeDataObject).filter((t=>t.id===w)):[];if(null!==$&&void 0!==$&&$.length){var _;const t=await(async t=>["taggbox.com","tagbox.com","tagembed.com","socialwalls.com"].some((e=>t.includes(e)))||await fetch(t).then((t=>t.ok)).catch((()=>!1)))(null===(_=$[0])||void 0===_?void 0:_.postFileNew);if(!t&&b){if([2,18,3,28].includes(+f)&&"0"===y&&"34"!==p&&!g.src.includes("cloud.taggbox.com")){const t=((t,e,i)=>{var o,n,l,d,s;const{UserPlan:a,Wall:r}=e;return{table_name:null===a||void 0===a?void 0:a.db_table,...t,...null!==i&&void 0!==i&&i.length?{feedId:null===(o=i[0])||void 0===o?void 0:o.feedId,type:null===(n=i[0])||void 0===n?void 0:n.type,link:null===(l=i[0])||void 0===l?void 0:l.link,postFile:null===(d=i[0])||void 0===d?void 0:d.postFile,mediaFile:null===(s=i[0])||void 0===s?void 0:s.mediaFile}:{},url:null===r||void 0===r?void 0:r.url}})({wallId:m,postId:w,ownerId:v},i,$);try{const{data:e}=await(new s.A).post(l.t5,t,{headers:d.ML}),i=l.HY||l.MH?"":`https://images.${l.QR}/`;g.src="18"===f?`${i}${e.media}`:e.media}catch{g.src=o.gX}finally{u(g)}}else g.src=o.gX,u(g);a.shift(),c()}else{const t=`${o.th}/media/images/no-image.svg`;g.src=t,g.srcset=t,u(g),a.shift()}}},u=t=>t.setAttribute("data-load","1")},56071:(t,e,i)=>{i.d(e,{A:()=>v});var o=i(9950),n=Object.defineProperty,l=(t,e,i)=>((t,e,i)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i)(t,"symbol"!==typeof e?e+"":e,i),d=new Map,s=new WeakMap,a=0,r=void 0;function c(t){return Object.keys(t).sort().filter((e=>void 0!==t[e])).map((e=>{return`${e}_${"root"===e?(i=t.root,i?(s.has(i)||(a+=1,s.set(i,a.toString())),s.get(i)):"0"):t[e]}`;var i})).toString()}function u(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r;if("undefined"===typeof window.IntersectionObserver&&void 0!==o){const n=t.getBoundingClientRect();return e(o,{isIntersecting:o,target:t,intersectionRatio:"number"===typeof i.threshold?i.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}const{id:n,observer:l,elements:s}=function(t){const e=c(t);let i=d.get(e);if(!i){const o=new Map;let n;const l=new IntersectionObserver((e=>{e.forEach((e=>{var i;const l=e.isIntersecting&&n.some((t=>e.intersectionRatio>=t));t.trackVisibility&&"undefined"===typeof e.isVisible&&(e.isVisible=l),null==(i=o.get(e.target))||i.forEach((t=>{t(l,e)}))}))}),t);n=l.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),i={id:e,observer:l,elements:o},d.set(e,i)}return i}(i),a=s.get(t)||[];return s.has(t)||s.set(t,a),a.push(e),l.observe(t),function(){a.splice(a.indexOf(e),1),0===a.length&&(s.delete(t),l.unobserve(t)),0===s.size&&(l.disconnect(),d.delete(n))}}o.Component;var h=i(52867);const v=t=>{let{children:e}=t;const{ref:i,inView:n,entry:l}=function(){let{threshold:t,delay:e,trackVisibility:i,rootMargin:n,root:l,triggerOnce:d,skip:s,initialInView:a,fallbackInView:r,onChange:c}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var h;const[v,m]=o.useState(null),g=o.useRef(c),[p,f]=o.useState({inView:!!a,entry:void 0});g.current=c,o.useEffect((()=>{if(s||!v)return;let o;return o=u(v,((t,e)=>{f({inView:t,entry:e}),g.current&&g.current(t,e),e.isIntersecting&&d&&o&&(o(),o=void 0)}),{root:l,rootMargin:n,threshold:t,trackVisibility:i,delay:e},r),()=>{o&&o()}}),[Array.isArray(t)?t.toString():t,v,l,n,d,s,i,r,e]);const w=null==(h=p.entry)?void 0:h.target,y=o.useRef(void 0);v||!w||d||s||y.current===w||(y.current=w,f({inView:!!a,entry:void 0}));const b=[m,p.inView,p.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}({triggerOnce:!0,threshold:.01});return n&&(0,h._7)(l),e({ref:i,inView:n})}},77611:(t,e,i)=>{i.d(e,{A:()=>l});var o=i(76506),n=i(44414);const l=t=>{let{count:e}=t;return(0,n.jsxs)("div",{className:"tb_r_view",children:[(0,n.jsx)("div",{className:"tb__icon tb-eye",children:(0,n.jsx)("div",{})}),(0,o.sl)(e)]})}},78262:(t,e,i)=>{i.d(e,{A:()=>r});var o=i(9950),n=i(76506),l=i(80415),d=i(45285),s=i(44414);const a=(0,o.lazy)((()=>Promise.all([i.e(1823),i.e(9874)]).then(i.bind(i,89874))));class r extends o.PureComponent{constructor(t){var e,i;super(t),this.updateMediaDimensions=()=>{if(this.mediaRef.current){const{offsetHeight:t,offsetWidth:e}=this.mediaRef.current;this.setState({currentHeight:t,currentWidth:e})}},this.mediaSizeCalc=async()=>{const{Post:t,mediaOnly:e}=this.props,i=e||t.media;if((null===i||void 0===i||!i.height)&&(null===i||void 0===i||!i.width))try{var o;const{width:t,height:e}=await(0,n.TW)(null===i||void 0===i||null===(o=i.image)||void 0===o?void 0:o.small);this._isMounted&&this.setState({height:e,width:t})}catch(l){this._isMounted&&this.setState({height:300,width:300})}};const{mediaOnly:l,Post:d}=t;this.state={height:(null===l||void 0===l?void 0:l.height)||(null===d||void 0===d||null===(e=d.media)||void 0===e?void 0:e.height)||0,width:(null===l||void 0===l?void 0:l.width)||(null===d||void 0===d||null===(i=d.media)||void 0===i?void 0:i.width)||0,currentHeight:0,currentWidth:0},this.mediaRef=o.createRef()}componentDidMount(){this._isMounted=!0,requestAnimationFrame((()=>{this.updateMediaDimensions(),this.mediaSizeCalc()}))}componentWillUnmount(){this._isMounted=!1}render(){var t,e,i,n,r;const{height:c,width:u}=this.state,{ImageClass:h,Post:v,hotspot:m,size:g,blurBG:p,mediaOnly:f,inView:w,multiKey:y,index:b,ProductSetting:$}=this.props,{id:_,link:k,products:M}=v,x=f||(null===v||void 0===v?void 0:v.media),{currentWidth:S,currentHeight:I}=this.state,V=g||100*c/u,R={paddingBottom:1===V?null:`${V}%`},W={backgroundImage:w?`url(${null===x||void 0===x||null===(t=x.image)||void 0===t?void 0:t.small})`:null},j=u>c?"100%":u/c*100+"%",H=u>c?c/u*100+"%":"100%",P=v.isProduct&&m&&v.hotspot&&(null===$||void 0===$||null===(e=$.Hotspot)||void 0===e?void 0:e.status),C={width:P&&g?j:null,height:P&&g?H:null};return(0,s.jsxs)("div",{className:`${h}_wrap_ mediaHolder${null===v||void 0===v?void 0:v.id}`,style:R,ref:this.mediaRef,children:[P&&p?(0,s.jsx)("div",{className:"tb_blur_bg_",style:W}):null,(0,s.jsxs)("div",{className:`${h}_wrap_in`,style:C,children:[P?(0,s.jsx)(o.Suspense,{fallback:(0,s.jsx)(s.Fragment,{}),children:(0,s.jsx)(a,{products:this.props.multiPic?v.mediaList[y].product:M,hotspot:v.hotspot,Post:v,showTooltip:null},b)}):null,w?(0,s.jsx)("img",{className:`${h} tb_media-${_}`,src:null===x||void 0===x||null===(i=x.image)||void 0===i?void 0:i.small,srcSet:`${null===x||void 0===x||null===(n=x.image)||void 0===n?void 0:n.small} 1x, ${null===x||void 0===x||null===(r=x.image)||void 0===r?void 0:r.large} 2x`,sizes:`${S}px`,loading:w?"eager":"lazy",decoding:"async",fetchPriority:w?"high":"low","data-id":_,height:I,width:S,"data-height":c,"data-width":u,"data-link":k,onLoad:this.onLoad,onError:t=>{t.target.src=`${l.th}/media/error/no-image.svg`,t.target.srcset=`${l.th}/media/error/no-image.svg`,(0,d.bs)(t)},alt:null===x||void 0===x?void 0:x.title,title:null===x||void 0===x?void 0:x.title},`${_}-${c}-${u}-${w}`):null]})]})}}}}]);