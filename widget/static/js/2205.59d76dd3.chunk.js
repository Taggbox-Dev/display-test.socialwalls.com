"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[2205],{32205:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var o=n(47313),i=n(97529),s=n(28751),l=n(46417);class a extends o.Component{constructor(e){super(e),this.onUpdate=()=>{const{pIndex:e}=this.props;console.log("pIndex",e),setTimeout((()=>{window.dispatchEvent(new Event("resize")),setTimeout((()=>{const t=document.getElementById("tb_wall_list_wrap___".concat(e+1));t&&t.classList.add("tb_fc_animation")}),250)}),100)},this.myRef=o.createRef()}componentWillReceiveProps(e){const{activeID:t,pIndex:n}=e;t==n&&this.myRef.current&&this.props.activeID!==t&&this.myRef.current.swiper.slideNext()}render(){const{pIndex:e,itemIds:t,activeID:n,completeDataObject:o,wall:a,onClickToCTA:c,postSizeInPx:r,cardCount:p,clickToShowPopUp:d}=this.props;return(0,l.jsx)(i.tq,{ref:this.myRef,autoHeight:!0,slidesPerView:"auto",direction:"vertical",spaceBetween:0,mousewheel:!0,loop:!0,speed:2e3,allowTouchMove:!1,autoplay:{enabled:!1,disableOnInteraction:!0},id:"tb_wall_list_wrap___".concat(e+1),className:"swiper-container tb_wall_list_wrap___",style:{width:"".concat(100/p,"%")},onAfterInit:this.onUpdate,children:null!==t&&void 0!==t&&t.length?t.map(((t,n)=>{const c=o[t];return(0,l.jsx)(i.o5,{children:(0,l.jsx)(s.Z,{isVisible:!0,ownerId:a.Wall.owner,itemData:c,itemIndex:n,personalization:a.Personalization,ThemeRule:a.ThemeRule,wallID:a.Wall.id,clickToShowPopUp:d,wall:a})},"item_".concat(n,"_").concat(e))})):null},"tb_wall_list_wrap___".concat(e+1))}}const c=a}}]);