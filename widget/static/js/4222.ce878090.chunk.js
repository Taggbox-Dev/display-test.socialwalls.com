"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4222],{24222:(e,t,o)=>{o.r(t),o.d(t,{default:()=>s});var i=o(47313),n=o(97529),l=o(85156),a=o(46417);class c extends i.Component{constructor(e){super(e),this.onUpdate=()=>{const{pIndex:e}=this.props;setTimeout((()=>{window.dispatchEvent(new Event("resize")),setTimeout((()=>{const t=document.getElementById("tb_wall_list_wrap___".concat(e+1));t&&t.classList.add("tb_fc_animation")}),250)}),100)},this.myRef=i.createRef()}componentWillReceiveProps(e){const{activeID:t,pIndex:o}=e;t==o&&this.myRef.current&&this.props.activeID!==t&&this.myRef.current.swiper.slideNext()}render(){const{pIndex:e,itemIds:t,activeID:o,completeDataObject:i,wall:c,onClickToCTA:s,postSizeInPx:d,cardCount:r,clickToShowPopUp:p}=this.props;return(0,a.jsx)(n.tq,{ref:this.myRef,autoHeight:!0,slidesPerView:"auto",direction:"vertical",spaceBetween:0,mousewheel:!0,loop:!0,speed:2e3,allowTouchMove:!1,autoplay:{enabled:!1,disableOnInteraction:!0},id:"tb_wall_list_wrap___".concat(e+1),className:"swiper-container tb_wall_list_wrap___",style:{width:"".concat(100/r,"%")},onAfterInit:this.onUpdate,children:null!==t&&void 0!==t&&t.length?t.map(((t,o)=>{var r,_;const u=i[t];return(0,a.jsx)(n.o5,{children:(0,a.jsx)(l.Z,{ownerId:null===c||void 0===c||null===(r=c.Wall)||void 0===r?void 0:r.owner,wall:c,itemData:u,itemIndex:o,personalization:null===c||void 0===c?void 0:c.Personalization,ThemeRule:null===c||void 0===c?void 0:c.ThemeRule,clickToShowPopUp:p,wallID:null===c||void 0===c||null===(_=c.Wall)||void 0===_?void 0:_.id,onClickToCTA:s,postSizeInPx:d},"item_".concat(o,"_").concat(e+1,"_").concat(null===u||void 0===u?void 0:u.id))},"item_".concat(o,"_").concat(e))})):null},"tb_wall_list_wrap___".concat(e+1))}}const s=c}}]);