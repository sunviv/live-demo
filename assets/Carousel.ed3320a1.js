import{l as J,v as x,x as Tt,y as ze,z as _t,A as He,B as Vt,C as Mt,D as Ot,E as Lt,k as ce,G as de,r as V,H as jt,s as w,I as Ut,d as Ge,e as Je,J as Bt,K as c,L as N,M as f,N as Zt,O as Wt,P as Xt,Q as qe,R as Yt,S as Kt,V as Ve,T as Me,U as Ft,W as Ht,X as Gt,Y as Oe,Z as H,_ as Le,h as Jt,$ as qt,a0 as G}from"./index.948b6d03.js";function Qt(e,n){return J(e,r=>{r!==void 0&&(n.value=r)}),x(()=>e.value===void 0?n.value:e.value)}function en(e){return Tt(ze(e).toLowerCase())}function tn(e,n,r,l){var d=-1,p=e==null?0:e.length;for(l&&p&&(r=e[++d]);++d<p;)r=n(r,e[d],d,e);return r}function nn(e){return function(n){return e==null?void 0:e[n]}}var on={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},rn=nn(on);const an=rn;var sn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ln="\\u0300-\\u036f",un="\\ufe20-\\ufe2f",cn="\\u20d0-\\u20ff",dn=ln+un+cn,fn="["+dn+"]",vn=RegExp(fn,"g");function xn(e){return e=ze(e),e&&e.replace(sn,an).replace(vn,"")}var hn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function pn(e){return e.match(hn)||[]}var gn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function mn(e){return gn.test(e)}var Qe="\\ud800-\\udfff",bn="\\u0300-\\u036f",wn="\\ufe20-\\ufe2f",yn="\\u20d0-\\u20ff",Sn=bn+wn+yn,et="\\u2700-\\u27bf",tt="a-z\\xdf-\\xf6\\xf8-\\xff",Cn="\\xac\\xb1\\xd7\\xf7",Rn="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",zn="\\u2000-\\u206f",Pn=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",nt="A-Z\\xc0-\\xd6\\xd8-\\xde",In="\\ufe0e\\ufe0f",ot=Cn+Rn+zn+Pn,rt="['\u2019]",je="["+ot+"]",kn="["+Sn+"]",at="\\d+",Dn="["+et+"]",st="["+tt+"]",it="[^"+Qe+ot+at+et+tt+nt+"]",An="\\ud83c[\\udffb-\\udfff]",En="(?:"+kn+"|"+An+")",$n="[^"+Qe+"]",lt="(?:\\ud83c[\\udde6-\\uddff]){2}",ut="[\\ud800-\\udbff][\\udc00-\\udfff]",W="["+nt+"]",Nn="\\u200d",Ue="(?:"+st+"|"+it+")",Tn="(?:"+W+"|"+it+")",Be="(?:"+rt+"(?:d|ll|m|re|s|t|ve))?",Ze="(?:"+rt+"(?:D|LL|M|RE|S|T|VE))?",ct=En+"?",dt="["+In+"]?",_n="(?:"+Nn+"(?:"+[$n,lt,ut].join("|")+")"+dt+ct+")*",Vn="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Mn="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",On=dt+ct+_n,Ln="(?:"+[Dn,lt,ut].join("|")+")"+On,jn=RegExp([W+"?"+st+"+"+Be+"(?="+[je,W,"$"].join("|")+")",Tn+"+"+Ze+"(?="+[je,W+Ue,"$"].join("|")+")",W+"?"+Ue+"+"+Be,W+"+"+Ze,Mn,Vn,at,Ln].join("|"),"g");function Un(e){return e.match(jn)||[]}function Bn(e,n,r){return e=ze(e),n=r?void 0:n,n===void 0?mn(e)?Un(e):pn(e):e.match(n)||[]}var Zn="['\u2019]",Wn=RegExp(Zn,"g");function Xn(e){return function(n){return tn(Bn(xn(n).replace(Wn,"")),e,"")}}var Yn=Xn(function(e,n,r){return n=n.toLowerCase(),e+(r?en(n):n)});const We=Yn,Kn=e=>({dotSize:"8px",dotColor:"rgba(255, 255, 255, .3)",dotColorActive:"rgba(255, 255, 255, 1)",dotColorFocus:"rgba(255, 255, 255, .5)",dotLineWidth:"16px",dotLineWidthActive:"24px",arrowColor:"#eee"}),Fn={name:"Carousel",common:_t,self:Kn},Hn=Fn;function Gn(e){const{length:n}=e;return n>1&&(e.push(Xe(e[0],0,"append")),e.unshift(Xe(e[n-1],n-1,"prepend"))),e}function Xe(e,n,r){return He(e,{key:`carousel-item-duplicate-${n}-${r}`})}function Ye(e,n,r){return r?e===0?n-3:e===n-1?0:e-1:e}function Ce(e,n){return n?e+1:e}function Jn(e,n,r){return e<0?null:e===0?r?n-1:null:e-1}function qn(e,n,r){return e>n-1?null:e===n-1?r?0:null:e+1}function Qn(e,n){return n&&e>3?e-2:e}function Ke(e){return window.TouchEvent&&e instanceof window.TouchEvent}function Fe(e,n){let{offsetWidth:r,offsetHeight:l}=e;if(n){const d=getComputedStyle(e);r=r-parseFloat(d.getPropertyValue("padding-left"))-parseFloat(d.getPropertyValue("padding-right")),l=l-parseFloat(d.getPropertyValue("padding-top"))-parseFloat(d.getPropertyValue("padding-bottom"))}return{width:r,height:l}}function le(e,n,r){return e<n?n:e>r?r:e}function eo(e){if(e===void 0)return 0;if(typeof e=="number")return e;const n=/^((\d+)?\.?\d+?)(ms|s)?$/,r=e.match(n);if(r){const[,l,,d="ms"]=r;return Number(l)*(d==="ms"?1:1e3)}return 0}const ft=Lt("n-carousel-methods"),to=e=>Vt(ft,e),Pe=(e="unknown",n="component")=>{const r=Mt(ft);return r||Ot(e,`\`${n}\` must be placed inside \`n-carousel\`.`),r},no={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},oo=ce({name:"CarouselDots",props:no,setup(e){const{mergedClsPrefixRef:n}=de(e),r=V([]),l=Pe();function d(g,v){switch(g.key){case"Enter":case" ":g.preventDefault(),l.to(v);return}e.keyboard&&y(g)}function p(g){e.trigger==="hover"&&l.to(g)}function P(g){e.trigger==="click"&&l.to(g)}function y(g){var v;if(g.shiftKey||g.altKey||g.ctrlKey||g.metaKey)return;const b=(v=document.activeElement)===null||v===void 0?void 0:v.nodeName.toLowerCase();if(b==="input"||b==="textarea")return;const{code:R}=g,M=R==="PageUp"||R==="ArrowUp",O=R==="PageDown"||R==="ArrowDown",C=R==="PageUp"||R==="ArrowRight",z=R==="PageDown"||R==="ArrowLeft",I=l.isVertical(),T=I?M:C,X=I?O:z;!T&&!X||(g.preventDefault(),T&&!l.isNextDisabled()?(l.next(),S(l.currentIndexRef.value)):X&&!l.isPrevDisabled()&&(l.prev(),S(l.currentIndexRef.value)))}function S(g){var v;(v=r.value[g])===null||v===void 0||v.focus()}return jt(()=>r.value.length=0),{mergedClsPrefix:n,dotEls:r,handleKeydown:d,handleMouseenter:p,handleClick:P}},render(){const{mergedClsPrefix:e,dotEls:n}=this;return w("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},Ut(this.total,r=>{const l=r===this.currentIndex;return w("div",{"aria-selected":l,ref:d=>n.push(d),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,l&&`${e}-carousel__dot--active`],key:r,onClick:()=>this.handleClick(r),onMouseenter:()=>this.handleMouseenter(r),onKeydown:d=>this.handleKeydown(d,r)})}))}}),ro=w("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},w("g",{fill:"none"},w("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),ao=w("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},w("g",{fill:"none"},w("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),so=ce({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:n}=de(e),{isVertical:r,isPrevDisabled:l,isNextDisabled:d,prev:p,next:P}=Pe();return{mergedClsPrefix:n,isVertical:r,isPrevDisabled:l,isNextDisabled:d,prev:p,next:P}},render(){const{mergedClsPrefix:e}=this;return w("div",{class:`${e}-carousel__arrow-group`},w("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},ro),w("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},ao))}}),ue="CarouselItem",io=e=>{var n;return((n=e.type)===null||n===void 0?void 0:n.name)===ue},lo=ce({name:ue,setup(e){const{mergedClsPrefixRef:n}=de(e),r=Pe(We(ue),`n-${We(ue)}`),l=V(),d=x(()=>{const{value:v}=l;return v?r.getSlideIndex(v):-1}),p=x(()=>r.isPrev(d.value)),P=x(()=>r.isNext(d.value)),y=x(()=>r.isActive(d.value)),S=x(()=>r.getSlideStyle(d.value));Ge(()=>r.addSlide(l.value)),Je(()=>{r.removeSlide(l.value)});function g(v){const{value:b}=d;b!==void 0&&(r==null||r.onCarouselItemClick(b,v))}return{mergedClsPrefix:n,selfElRef:l,isPrev:p,isNext:P,isActive:y,index:d,style:S,handleClick:g}},render(){var e;const{$slots:n,mergedClsPrefix:r,isPrev:l,isNext:d,isActive:p,index:P,style:y}=this,S=[`${r}-carousel__slide`,{[`${r}-carousel__slide--current`]:p,[`${r}-carousel__slide--prev`]:l,[`${r}-carousel__slide--next`]:d}];return w("div",{ref:"selfElRef",class:S,role:"option",tabindex:"-1","data-index":P,"aria-hidden":!p,style:y,onClickCapture:this.handleClick},(e=n.default)===null||e===void 0?void 0:e.call(n,{isPrev:l,isNext:d,isActive:p,index:P}))}}),uo=Bt("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[c("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[c("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[N("> img",`
 display: block;
 `)])]),c("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[f("dot",[c("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[N("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),f("active",`
 background-color: var(--n-dot-color-active);
 `)])]),f("line",[c("dot",`
 border-radius: 9999px;
 width: var(--n-dot-line-width);
 height: 4px;
 background-color: var(--n-dot-color);
 cursor: pointer;
 transition:
 width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[N("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),f("active",`
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]),c("arrow",`
 transition: background-color .3s var(--n-bezier);
 cursor: pointer;
 height: 28px;
 width: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: rgba(255, 255, 255, .2);
 color: var(--n-arrow-color);
 border-radius: 8px;
 user-select: none;
 -webkit-user-select: none;
 font-size: 18px;
 `,[N("svg",`
 height: 1em;
 width: 1em;
 `),N("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),f("vertical",`
 touch-action: pan-x;
 `,[c("slides",`
 flex-direction: column;
 `),f("fade",[c("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),f("card",[c("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[f("current",`
 transform: translateY(-50%) translateZ(0);
 `),f("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),f("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),f("usercontrol",[c("slides",[N(">",[N("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),f("left",[c("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[f("line",[c("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[f("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),c("dot",`
 margin: 4px 0;
 `)]),c("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),f("vertical",[c("arrow",`
 transform: rotate(90deg);
 `)]),f("show-arrow",[f("bottom",[c("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),f("top",[c("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),f("left",[c("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),f("right",[c("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),f("left",[c("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[N("> *:first-child",`
 margin-bottom: 12px;
 `)])]),f("right",[c("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[f("line",[c("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[f("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),c("dot",`
 margin: 4px 0;
 `),c("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[N("> *:first-child",`
 margin-bottom: 12px;
 `)])]),f("top",[c("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[f("line",[c("dot",`
 margin: 0 4px;
 `)])]),c("dot",`
 margin: 0 4px;
 `),c("arrow-group",`
 top: 12px;
 right: 12px;
 `,[N("> *:first-child",`
 margin-right: 12px;
 `)])]),f("bottom",[c("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[f("line",[c("dot",`
 margin: 0 4px;
 `)])]),c("dot",`
 margin: 0 4px;
 `),c("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[N("> *:first-child",`
 margin-right: 12px;
 `)])]),f("fade",[c("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[f("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),f("card",[c("slides",`
 perspective: 1000px;
 `),c("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,[f("current",`
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `),f("prev",`
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `),f("next",`
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]),co=["transitionDuration","transitionTimingFunction"],fo=Object.assign(Object.assign({},qe.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Re=!1;const ho=ce({name:"Carousel",props:fo,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:r}=de(e),l=V(null),d=V(null),p=V([]),P={value:[]},y=x(()=>e.direction==="vertical"),S=x(()=>y.value?"height":"width"),g=x(()=>y.value?"bottom":"right"),v=x(()=>e.effect==="slide"),b=x(()=>e.loop&&e.slidesPerView===1&&v.value),R=x(()=>e.effect==="custom"),M=x(()=>!v.value||e.centeredSlides?1:e.slidesPerView),O=x(()=>R.value?1:e.slidesPerView),C=x(()=>M.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),z=V({width:0,height:0}),I=x(()=>{const{value:t}=p;if(!t.length)return[];const{value:o}=C;if(o)return t.map(m=>Fe(m));const{value:a}=O,{value:i}=z,{value:u}=S;let s=i[u];if(a!=="auto"){const{spaceBetween:m}=e,k=s-(a-1)*m,ie=1/Math.max(1,a);s=k*ie}const h=Object.assign(Object.assign({},i),{[u]:s});return t.map(()=>h)}),T=x(()=>{const{value:t}=I;if(!t.length)return[];const{centeredSlides:o,spaceBetween:a}=e,{value:i}=S,{[i]:u}=z.value;let s=0;return t.map(({[i]:h})=>{let m=s;return o&&(m+=(h-u)/2),s+=h+a,m})}),X=V(!1),fe=x(()=>{const{transitionStyle:t}=e;return t?Oe(t,co):{}}),ve=x(()=>R.value?0:eo(fe.value.transitionDuration)),Ie=x(()=>{const{value:t}=p;if(!t.length)return[];const o=!(C.value||O.value===1),a=h=>{if(o){const{value:m}=S;return{[m]:`${I.value[h][m]}px`}}};if(R.value)return t.map((h,m)=>a(m));const{effect:i,spaceBetween:u}=e,{value:s}=g;return t.reduce((h,m,k)=>{const ie=Object.assign(Object.assign({},a(k)),{[`margin-${s}`]:`${u}px`});return h.push(ie),X.value&&(i==="fade"||i==="card")&&Object.assign(ie,fe.value),h},[])}),D=x(()=>{const{value:t}=M,{length:o}=p.value;if(t!=="auto")return Math.max(o-t,0)+1;{const{value:a}=I,{length:i}=a;if(!i)return o;const{value:u}=T,{value:s}=S,h=z.value[s];let m=a[a.length-1][s],k=i;for(;k>1&&m<h;)k--,m+=u[k]-u[k-1];return le(k+1,1,i)}}),q=x(()=>Qn(D.value,b.value)),vt=Ce(e.defaultIndex,b.value),xe=V(Ye(vt,D.value,b.value)),A=Qt(Zt(e,"currentIndex"),xe),E=x(()=>Ce(A.value,b.value));function Y(t){var o,a;t=le(t,0,D.value-1);const i=Ye(t,D.value,b.value),{value:u}=A;i!==A.value&&(xe.value=i,(o=e["onUpdate:currentIndex"])===null||o===void 0||o.call(e,i,u),(a=e.onUpdateCurrentIndex)===null||a===void 0||a.call(e,i,u))}function Q(t=E.value){return Jn(t,D.value,e.loop)}function ee(t=E.value){return qn(t,D.value,e.loop)}function xt(t){const o=j(t);return o!==null&&Q()===o}function ht(t){const o=j(t);return o!==null&&ee()===o}function ke(t){return E.value===j(t)}function pt(t){return A.value===t}function De(){return Q()===null}function Ae(){return ee()===null}function he(t){const o=le(Ce(t,b.value),0,D.value);(t!==A.value||o!==E.value)&&Y(o)}function pe(){const t=Q();t!==null&&Y(t)}function te(){const t=ee();t!==null&&Y(t)}function gt(){(!$||!b.value)&&pe()}function mt(){(!$||!b.value)&&te()}let $=!1,L=0;const ge=V({});function ne(t,o=0){ge.value=Object.assign({},fe.value,{transform:y.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${o}ms`})}function K(t=0){v.value?me(E.value,t):L!==0&&(!$&&t>0&&($=!0),ne(L=0,t))}function me(t,o){const a=Ee(t);a!==L&&o>0&&($=!0),L=Ee(E.value),ne(a,o)}function Ee(t){let o;return t>=D.value-1?o=$e():o=T.value[t]||0,o}function $e(){if(M.value==="auto"){const{value:t}=S,{[t]:o}=z.value,{value:a}=T,i=a[a.length-1];let u;if(i===void 0)u=o;else{const{value:s}=I;u=i+s[s.length-1][t]}return u-o}else{const{value:t}=T;return t[D.value-1]||0}}const F={currentIndexRef:A,to:he,prev:gt,next:mt,isVertical:()=>y.value,isHorizontal:()=>!y.value,isPrev:xt,isNext:ht,isActive:ke,isPrevDisabled:De,isNextDisabled:Ae,getSlideIndex:j,getSlideStyle:yt,addSlide:bt,removeSlide:wt,onCarouselItemClick:St};to(F);function bt(t){!t||p.value.push(t)}function wt(t){if(!t)return;const o=j(t);o!==-1&&p.value.splice(o,1)}function j(t){return typeof t=="number"?t:t?p.value.indexOf(t):-1}function yt(t){const o=j(t);if(o!==-1){const a=[Ie.value[o]],i=F.isPrev(o),u=F.isNext(o);return i&&a.push(e.prevSlideStyle||""),u&&a.push(e.nextSlideStyle||""),Jt(a)}}function St(t,o){let a=!$&&!ae&&!Se;e.effect==="card"&&a&&!ke(t)&&(he(t),a=!1),a||(o.preventDefault(),o.stopPropagation())}let oe=null;function re(){oe&&(clearInterval(oe),oe=null)}function U(){re(),!e.autoplay||q.value<2||(oe=window.setInterval(te,e.interval))}let be=0,we=0,_=0,ye=0,ae=!1,Se=!1;function Ne(t){var o;if(Re||!(!((o=d.value)===null||o===void 0)&&o.contains(qt(t))))return;Re=!0,ae=!0,Se=!1,ye=Date.now(),re(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const a=Ke(t)?t.touches[0]:t;y.value?we=a.clientY:be=a.clientX,e.touchable&&(G("touchmove",document,se,{passive:!0}),G("touchend",document,B),G("touchcancel",document,B)),e.draggable&&(G("mousemove",document,se),G("mouseup",document,B))}function se(t){const{value:o}=y,{value:a}=S,i=Ke(t)?t.touches[0]:t,u=o?i.clientY-we:i.clientX-be,s=z.value[a];_=le(u,-s,s),t.cancelable&&t.preventDefault(),v.value&&ne(L-_,0)}function B(){const{value:t}=E;let o=t;if(!$&&_!==0&&v.value){const a=L-_,i=[...T.value.slice(0,D.value-1),$e()];let u=null;for(let s=0;s<i.length;s++){const h=Math.abs(i[s]-a);if(u!==null&&u<h)break;u=h,o=s}}if(o===t){const a=Date.now()-ye,{value:i}=S,u=z.value[i];_>u/2||_/a>.4?o=Q(t):(_<-u/2||_/a<-.4)&&(o=ee(t))}o!==null&&o!==t?(Se=!0,Y(o),Le(()=>{(!b.value||xe.value!==A.value)&&K(ve.value)})):K(ve.value),Te(),U()}function Te(){ae&&(Re=!1),ae=!1,be=0,we=0,_=0,ye=0,H("touchmove",document,se),H("touchend",document,B),H("touchcancel",document,B),H("mousemove",document,se),H("mouseup",document,B)}function Ct(){if(v.value&&$){const{value:t}=E;me(t,0)}else U();v.value&&(ge.value.transitionDuration="0ms"),$=!1}function Rt(t){if(t.preventDefault(),$)return;let{deltaX:o,deltaY:a}=t;t.shiftKey&&!o&&(o=a);const i=-1,u=1,s=(o||a)>0?u:i;let h=0,m=0;y.value?m=s:h=s;const k=10;(m*a>=k||h*o>=k)&&(s===u&&!Ae()?te():s===i&&!De()&&pe())}function zt(){z.value=Fe(l.value,!0),U()}function Pt(){var t,o;C.value&&((o=(t=I.effect).scheduler)===null||o===void 0||o.call(t),I.effect.run())}function It(){e.autoplay&&re()}function kt(){e.autoplay&&U()}Ge(()=>{Wt(U),requestAnimationFrame(()=>X.value=!0)}),Je(()=>{Te(),re()}),Xt(()=>{const{value:t}=p,{value:o}=P,a=new Map,i=s=>a.has(s)?a.get(s):-1;let u=!1;for(let s=0;s<t.length;s++){const h=o.findIndex(m=>m.el===t[s]);h!==s&&(u=!0),a.set(t[s],h)}u&&t.sort((s,h)=>i(s)-i(h))}),J(E,(t,o)=>{if(t!==o)if(U(),v.value){if(b.value&&q.value>2){const{value:a}=D;t===a-2&&o===1?t=0:t===1&&o===a-2&&(t=a-1)}me(t,ve.value)}else K()},{immediate:!0}),J([b,M],()=>void Le(()=>Y(E.value))),J(T,()=>v.value&&K(),{deep:!0}),J(v,t=>{t?K():($=!1,ne(L=0))});const Dt=x(()=>({onTouchstartPassive:e.touchable?Ne:void 0,onMousedown:e.draggable?Ne:void 0,onWheel:e.mousewheel?Rt:void 0})),At=x(()=>Object.assign(Object.assign({},Oe(F,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:q.value,currentIndex:A.value})),Et=x(()=>({total:q.value,currentIndex:A.value,to:F.to})),$t={getCurrentIndex:()=>A.value,to:he,prev:pe,next:te},Nt=qe("Carousel","-carousel",uo,Hn,e,n),_e=x(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:o,dotColor:a,dotColorActive:i,dotColorFocus:u,dotLineWidth:s,dotLineWidthActive:h,arrowColor:m}}=Nt.value;return{"--n-bezier":t,"--n-dot-color":a,"--n-dot-color-focus":u,"--n-dot-color-active":i,"--n-dot-size":o,"--n-dot-line-width":s,"--n-dot-line-width-active":h,"--n-arrow-color":m}}),Z=r?Yt("carousel",void 0,_e,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:n,selfElRef:l,slidesElRef:d,slideVNodes:P,duplicatedable:b,userWantsControl:R,autoSlideSize:C,displayIndex:A,realIndex:E,slideStyles:Ie,translateStyle:ge,slidesControlListeners:Dt,handleTransitionEnd:Ct,handleResize:zt,handleSlideResize:Pt,handleMouseenter:It,handleMouseleave:kt,isActive:pt,arrowSlotProps:At,dotSlotProps:Et},$t),{cssVars:r?void 0:_e,themeClass:Z==null?void 0:Z.themeClass,onRender:Z==null?void 0:Z.onRender})},render(){var e;const{mergedClsPrefix:n,showArrow:r,userWantsControl:l,slideStyles:d,dotType:p,dotPlacement:P,slidesControlListeners:y,transitionProps:S={},arrowSlotProps:g,dotSlotProps:v,$slots:{default:b,dots:R,arrow:M}}=this,O=b&&Kt(b())||[];let C=vo(O);return C.length||(C=O.map(z=>w(lo,null,{default:()=>He(z)}))),this.duplicatedable&&(C=Gn(C)),this.slideVNodes.value=C,this.autoSlideSize&&(C=C.map(z=>w(Ve,{onResize:this.handleSlideResize},{default:()=>z}))),(e=this.onRender)===null||e===void 0||e.call(this),w("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${n}-carousel`,this.direction==="vertical"&&`${n}-carousel--vertical`,this.showArrow&&`${n}-carousel--show-arrow`,`${n}-carousel--${P}`,`${n}-carousel--${this.direction}`,`${n}-carousel--${this.effect}`,l&&`${n}-carousel--usercontrol`],style:this.cssVars},y,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),w(Ve,{onResize:this.handleResize},{default:()=>w("div",{ref:"slidesElRef",class:`${n}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},l?C.map((z,I)=>w("div",{style:d[I],key:I},Ft(w(Gt,Object.assign({},S),{default:()=>z}),[[Ht,this.isActive(I)]]))):C)}),this.showDots&&v.total>1&&Me(R,v,()=>[w(oo,{key:p+P,total:v.total,currentIndex:v.currentIndex,dotType:p,trigger:this.trigger,keyboard:this.keyboard})]),r&&Me(M,g,()=>[w(so,null)]))}});function vo(e){return e.reduce((n,r)=>(io(r)&&n.push(r),n),[])}export{ho as _};
