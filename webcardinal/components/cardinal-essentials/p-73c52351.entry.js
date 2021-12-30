import{r as t,h as e,g as o,H as n}from"./p-8419ec55.js";import"./p-2253945a.js";import{B as s}from"./p-59d3aff6.js";import{C as r}from"./p-a6519dac.js";import{T as i}from"./p-c0f859c2.js";import{B as a}from"./p-9dc3d2d8.js";var h=function(t,e,o,n){var s,r=arguments.length,i=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(r<3?s(i):r>3?s(e,o,i):s(e,o))||i);return r>3&&i&&Object.defineProperty(e,o,i),i};const l=class{constructor(e){t(this,e),this.eventName=a.BREADCRUMB_CLICK,this.segments=[],this.__firstSegmentClickHandler=t=>{t.preventDefault(),t.stopImmediatePropagation(),this._activeSegment=this.__getFirstSegment(),this.__scrollToActiveSegment()},this.__lastSegmentClickHandler=t=>{t.preventDefault(),t.stopImmediatePropagation(),this._activeSegment=this.__getLastSegment(),this.__scrollToActiveSegment()},this.__scrollToActiveSegment=()=>{this.__isScrollDisplayed()&&this._activeSegment.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})},this.__isScrollDisplayed=()=>this.__hostElement.scrollWidth>this.__hostElement.clientWidth,this.__getFirstSegment=()=>this.__hostElement.shadowRoot.querySelector("psk-button"),this.__getLastSegment=()=>this.__hostElement.shadowRoot.querySelector("psk-button:last-of-type"),this.__getMode=()=>this.__hostElement.mode||this.__hostElement.getAttribute("mode")||"default"}render(){if(!this.__hostElement.isConnected)return null;let t=null,o=null;this.__getMode()===a.ARROWS&&(t=e("psk-icon",{icon:"arrow-left",id:a.PREVIOUS_ID,onClick:this.__firstSegmentClickHandler}),o=e("psk-icon",{icon:"arrow-right",id:a.NEXT_ID,onClick:this.__lastSegmentClickHandler}),this._activeSegment=this.__getFirstSegment());let s=this.segments.map(((t,o)=>e("psk-button",{"button-class":" ",label:t.label,"event-name":this.eventName,"event-data":t.path,disabled:o+1===this.segments.length?"true":"false"})));return e(n,null,t,s,o)}get __hostElement(){return o(this)}};h([s()],l.prototype,"modelHandler",void 0),h([r()],l.prototype,"__hostElement",void 0),h([i({description:["The event name that will be triggered on clicking a segment of the breadcrumb navigator. This is the event that needs to be listened inside the controller.","If not defined, the default value will be considered. (breadcrumb-click)"],isMandatory:!1,propertyType:"string",defaultValue:a.BREADCRUMB_CLICK})],l.prototype,"eventName",void 0),h([i({description:["This attribute should receive an array of BreadcrumbSegment. BreadcrumbSegment interface accepts two attributes: label and path.","The label will be displayed and the path will be sent as event-data when the user clicks on a segment of the breadcrumb.",'Detailed examples of usage are presented below, on "How to use" section.'],isMandatory:!0,propertyType:"BreadcrumbSegment[] (Array of BreadcrumbSegment type)",specialNote:"If this property does not receive an array of BreadcrumbSegment, the component will not be rendered."})],l.prototype,"segments",void 0),l.style={arrows:':host{padding:0.75rem 1.25rem;margin:0 0 2rem 0;font-size:1.1rem;line-height:2.8rem;display:flex;justify-content:flex-start;align-items:center;white-space:nowrap;overflow-x:auto;overflow-y:hidden;-ms-overflow-style:none;scrollbar-width:none}:host::-webkit-scrollbar{display:none}:host psk-button::after{padding:8px;content:"/\\00a0"}:host psk-button:last-of-type::after{content:none}:host button,:host button:focus,:host button:active,:host button:active:focus,:host button:hover{background:unset;border:unset;box-shadow:unset;outline:none !important}#next{right:0}#prev{left:0}#next,#prev{position:absolute;background:#fff;border-radius:6px;opacity:0.75;box-shadow:0px 0px 4px #ccc}#next:hover,#prev:hover{opacity:1;pointer-events:all;cursor:pointer;box-shadow:0px 0px 4px #999}#next .icon,#prev .icon{padding:0.25rem}',default:':host{display:flex;flex-wrap:wrap;justify-content:flex-start;align-items:center;padding:0.75rem 1.25rem;margin:0 0 2rem 0;font-size:1.1rem;line-height:2.8rem}:host psk-button::after{padding:8px;content:"/\\00a0"}:host psk-button:last-of-type::after{content:none}:host button,:host button:focus,:host button:active,:host button:active:focus,:host button:hover{background:unset;border:unset;box-shadow:unset;outline:none !important}',scroll:':host{padding:0.75rem 1.25rem;margin:0 0 2rem 0;font-size:1.1rem;line-height:2.8rem;display:flex;justify-content:flex-start;align-items:center;white-space:nowrap;overflow-x:auto;overflow-y:hidden}:host psk-button::after{padding:8px;content:"/\\00a0"}:host psk-button:last-of-type::after{content:none}:host button,:host button:focus,:host button:active,:host button:active:focus,:host button:hover{background:unset;border:unset;box-shadow:unset;outline:none !important}'};export{l as psk_breadcrumb_navigator}