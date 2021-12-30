import{r as t,h as o,H as e,g as a}from"./p-8419ec55.js";import"./p-2253945a.js";import{C as n}from"./p-a6519dac.js";import{T as s}from"./p-c0f859c2.js";import{P as i}from"./p-336c0b3b.js";const r={bubbles:!0,cancelable:!0,composed:!0};var l=function(t,o,e,a){var n,s=arguments.length,i=s<3?o:null===a?a=Object.getOwnPropertyDescriptor(o,e):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,o,e,a);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(i=(s<3?n(i):s>3?n(o,e,i):n(o,e))||i);return s>3&&i&&Object.defineProperty(o,e,i),i};const d=class{constructor(o){t(this,o),this.title="",this.opened=!1,this.layout="default"}toggleDetails(t){t.preventDefault(),t.stopImmediatePropagation(),this.opened=!this.opened,function(t,o,e=r){if(!o.eventName)return;const{eventName:a,eventData:n,eventDispatcher:s}=o,l=s&&-1!==[document,window].indexOf(window[s]),d=new i(a,n,e);(l?window[s]:t).dispatchEvent(d)}(this.__host,{eventName:this.eventName,eventData:this.eventData,eventDispatcher:this.eventDispatcher})}__renderDetails(){switch(this.layout){case"collapsable":{let t=[];return this.title&&t.push(o("div",{class:"title",tabindex:0,onClick:t=>this.toggleDetails(t)},o("span",null,this.title))),t.push(o("div",{class:"content"},o("slot",null)),o("div",{class:"footer",tabindex:0,onClick:t=>this.toggleDetails(t)},o("slot",{name:"footer"}),o("div",null,o("psk-icon",{icon:"chevron-down",class:{rotated:this.opened}})))),t}case"plus":return[o("div",{class:"content"},o("slot",null)),o("div",{class:"footer",tabindex:0,onClick:t=>this.toggleDetails(t)},o("psk-icon",{icon:this.opened?"minus":"plus"}),o("span",null,this.title))];default:return this.layout="default",[o("div",{class:"title",tabindex:0,onClick:t=>this.toggleDetails(t)},o("psk-icon",{icon:"chevron-right",class:{rotated:this.opened}}),o("span",null,this.title)),o("div",{class:"content"},o("slot",null))]}}render(){return this.__host.isConnected?o(e,{opened:this.opened},this.__renderDetails()):null}get __host(){return a(this)}};l([n()],d.prototype,"__host",void 0),l([s({description:"This property is used as title or summary for collapsable section.",isMandatory:!1,propertyType:"string"})],d.prototype,"title",void 0),l([s({description:"This property decides if the content of the component is visible / hidden.",isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],d.prototype,"opened",void 0),l([s({description:['There are three alternatives for this attribute: "collapsable", "plus" and "default". If other value is passed, fallback plan is also the default value.',"According to this property, the appearance of the component is changing."],isMandatory:!1,propertyType:"string",defaultValue:"default"})],d.prototype,"layout",void 0),l([s({description:["By defining this attribute, the component will be able to trigger an event."],isMandatory:!1,propertyType:"string"})],d.prototype,"eventName",void 0),l([s({description:["This attribute is used to pass some information along with an event.","This attribute is taken into consideration only if the event-name has a value. If not, it is ignored."],isMandatory:!1,propertyType:"any"})],d.prototype,"eventData",void 0),l([s({description:['This attribute is telling the component where to trigger the event. Accepted values: "document, "window".',"If the value is not set or it is not one of the accepted values, the event-dispatcher will be the component itself."],isMandatory:!1,propertyType:"string"})],d.prototype,"eventDispatcher",void 0),d.style={default:":host{display:block}:host .title{display:flex;align-items:center;outline:none;cursor:pointer;border:2px solid transparent;background-color:transparent}:host .content{transform-origin:top;transition-duration:0.3s;transition-property:transform, padding, height, opacity;transition-timing-function:ease-in}:host .content,:host([opened='false']) .content{overflow:hidden;height:0;opacity:0;padding-top:0;padding-bottom:0;transform:translateY(-0.15em)}:host([opened]) .content,:host([opened='true']) .content{height:100%;opacity:1;padding-top:0.75em;padding-bottom:0.5em;transform:translateY(0)}:host([layout='default']) .title{border-radius:5px}:host([layout='default']) .title .icon{padding:0.45em 0.25em;transition:transform 0.2s ease-in-out}:host([layout='default']) .title .rotated .icon{transform:rotate(90deg)}:host([layout='collapsable']){overflow:hidden;border-radius:4px;transition:box-shadow 0.2s ease-in-out}:host([layout='collapsable']) .title{padding:0.65em}:host([layout='collapsable']) .content{padding-left:1em;padding-right:1em}:host([layout='collapsable']) .footer{text-align:center;cursor:pointer}:host([layout='collapsable']) .footer:focus{outline:none}:host([layout='collapsable']) .footer .icon{padding:0;font-size:75%;transition:transform 0.2s ease-in-out}:host([layout='collapsable']) .footer .rotated .icon{transform:rotate(180deg)}:host([layout='plus']){overflow:hidden;border-radius:4px;transition:box-shadow 0.2s ease-in-out}:host([layout='plus']) .content{padding-left:1em;padding-right:1em}:host([layout='plus']) .footer{text-align:center;cursor:pointer}:host([layout='plus']) .footer:focus{outline:none;border:2px solid transparent}:host([layout='plus']) .footer .icon{padding:0;font-size:75%;transition:transform 0.2s ease-in-out}:host([layout='plus']) .footer .rotated .icon{transform:rotate(180deg)}:host .title .icon,:host .title span{color:#5E7FE2}:host .title:hover{background-color:#5E7FE225}:host([layout='default']) .title:focus,:host([layout='default'][opened]) .title,:host([layout='default'][opened='true']) .title{border-color:#5E7FE2}:host([layout='collapsable'][opened]),:host([layout='collapsable'][opened='true']){box-shadow:0 0 5px rgba(0, 0, 0, .25)}:host([layout='collapsable']) .title{background-color:#5E7FE225}:host([layout='collapsable']) .title:focus{border-color:#5E7FE2}:host([layout='collapsable']) .content{background-color:#FFFFFF}:host([layout='collapsable']) .footer{background-color:#5E7FE2}:host([layout='collapsable']) .footer .icon{color:#FFFFFF}:host([layout='plus'][opened]),:host([layout='plus'][opened='true']){box-shadow:0 0 5px rgba(0, 0, 0, .25)}:host([layout='plus']) .content{background-color:#FFFFFF}:host([layout='plus']) .footer{background-color:#5E7FE225}:host([layout='plus']) .footer:focus{border-color:#5E7FE2}:host([layout='plus']) .footer .icon{color:#333333}",layout:":host{display:block}:host .title{display:flex;align-items:center;outline:none;cursor:pointer;border:2px solid transparent;background-color:transparent}:host .content{transform-origin:top;transition-duration:0.3s;transition-property:transform, padding, height, opacity;transition-timing-function:ease-in}:host .content,:host([opened='false']) .content{overflow:hidden;height:0;opacity:0;padding-top:0;padding-bottom:0;transform:translateY(-0.15em)}:host([opened]) .content,:host([opened='true']) .content{height:100%;opacity:1;padding-top:0.75em;padding-bottom:0.5em;transform:translateY(0)}:host([layout='default']) .title{border-radius:5px}:host([layout='default']) .title .icon{padding:0.45em 0.25em;transition:transform 0.2s ease-in-out}:host([layout='default']) .title .rotated .icon{transform:rotate(90deg)}:host([layout='collapsable']){overflow:hidden;border-radius:4px;transition:box-shadow 0.2s ease-in-out}:host([layout='collapsable']) .title{padding:0.65em}:host([layout='collapsable']) .content{padding-left:1em;padding-right:1em}:host([layout='collapsable']) .footer{text-align:center;cursor:pointer}:host([layout='collapsable']) .footer:focus{outline:none}:host([layout='collapsable']) .footer .icon{padding:0;font-size:75%;transition:transform 0.2s ease-in-out}:host([layout='collapsable']) .footer .rotated .icon{transform:rotate(180deg)}:host([layout='plus']){overflow:hidden;border-radius:4px;transition:box-shadow 0.2s ease-in-out}:host([layout='plus']) .content{padding-left:1em;padding-right:1em}:host([layout='plus']) .footer{text-align:center;cursor:pointer}:host([layout='plus']) .footer:focus{outline:none;border:2px solid transparent}:host([layout='plus']) .footer .icon{padding:0;font-size:75%;transition:transform 0.2s ease-in-out}:host([layout='plus']) .footer .rotated .icon{transform:rotate(180deg)}"};export{d as psk_details}