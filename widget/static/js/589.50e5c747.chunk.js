(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[589],{66538:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>p});var s=n(47313),o=n(97914),a=n(43411),i=n(98501),c=n(40475),r=n(35179),_=n(46417);class l extends s.PureComponent{render(){const{UgcSettings:t,id:e,tagShopWallId:n}=this.props;var s=window.ugcSuite||window.location.href.includes("ugcSuite=1")?{ugcSuite:1}:{};const a=Object.keys(s).length>0?"&ugcSuite=1":"",c=!(n||!r.ig),l=t.onsite_qr_code_status||""!=t.onsite_qr_code_btn_text?t.onsite_qr_code_btn_text:"",p=r.ig?"".concat(i.oC,"/").concat(e,"/onsite-upload").concat(c?"?wall=1":""):"".concat(r.bX&&!r.aL?i.Nf:i.nn,"/").concat(e,"?onsite-upload=true").concat(a),u=r.bX&&!r.aL?l.length<31?" tb_snap_btn_wall tb_snap_btn_wall_v":" tb_snap_btn_wall":"",d=null!==t&&void 0!==t&&t.onsite_overlay_poisition?" tb_pos-".concat(t.onsite_overlay_poisition):null;return!t.onsite_status||!r.ig&&!t.onsite_button_status||1!=t.onsite_qr_code_status&&""===l?null:(0,_.jsx)("div",{className:"tb_onsite_upload_btn_wrap".concat(u).concat(d),children:(0,_.jsxs)("div",{className:"tb_onsite_upload_btn",children:[(0,_.jsx)("div",{className:"tb_snap_btn_bg",style:{opacity:r.bX?.7:null},children:(0,_.jsx)("div",{})}),(0,_.jsx)("div",{className:"tb_onsite_btn",onClick:()=>this.props.onSitePopup(!0),children:(0,_.jsxs)("div",{className:"tb_onsite_qr_btn_wrap",children:[1==t.onsite_qr_code_status?(0,_.jsx)("div",{className:"tb_onsite_qr_code",children:(0,_.jsx)(o.ZP,{level:"L",size:60,value:p})}):null,""!==l?(0,_.jsx)("div",{className:"tb_onsite_btn_txt tb-cTBfont-".concat(t.onsite_font_varient_btn),children:l}):""]})})]})})}}const p=(0,a.$j)((t=>({modalPop:t.modalPop})),(t=>({onSitePopup:e=>t((0,c.wg)(e))})))(l)},61729:(t,e,n)=>{"use strict";var s=n(79165);function o(){}function a(){}a.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,a,i){if(i!==s){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},75192:(t,e,n)=>{t.exports=n(61729)()},79165:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);