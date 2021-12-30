import{g as e,r as t,c as i,h as n}from"./p-a9ce478c.js";import{c as o}from"./p-303a9197.js";import{B as s}from"./p-fccee2b6.js";import{D as a,a as r,b as l,c,C as p,T as d}from"./p-256c3418.js";var h=function(e,t,i,n){var o,s=arguments.length,a=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(s<3?o(a):s>3?o(t,i,a):o(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};const u=class{constructor(e){t(this,e),this.onChangeRadio=i(this,"onChangeRadio",5),this.label=null,this.value=null,this.name=null,this.readOnly=!1,this.invalidValue=null,this.checked=!1}render(){if(!this.htmlElement.isConnected)return null;const e=this.name?this.name:this.label&&this.label.replace(/\s/g,"").toLowerCase();return n("div",{class:"form-check form-check-inline"},n("input",{type:"radio",class:"form-check-input",value:this.value?this.value:e,name:e,readOnly:this.readOnly,checked:this.checked,onChange:this.__handleRadioChange.bind(this)}),n("psk-label",{for:e,label:this.label}))}__handleRadioChange(e){e.preventDefault(),e.stopImmediatePropagation(),this.onChangeRadio.emit({value:e.target.value})}get htmlElement(){return e(this)}};var f;h([p(),s()],u.prototype,"modelHandler",void 0),h([d({description:['By filling out this property, the component will display near it, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.'],isMandatory:!1,propertyType:"string",specialNote:"If this property is not provided, the component will be displayed without any label"})],u.prototype,"label",void 0),h([d({description:["Specifies the value of a psk-radio component.",'This value is updated also in the model using the two-way binding. Information about two-way binding using models and templates can be found at: <psk-link page="forms/using-forms">Using forms</psk-link>.'],isMandatory:!1,propertyType:"string"})],u.prototype,"value",void 0),h([d({description:["Specifies the name of a psk-radio component. It is used along with the psk-label component."],isMandatory:!1,propertyType:"string"})],u.prototype,"name",void 0),h([d({description:["\tSpecifies that a psk-radio is read-only and it cannot be changed.",'Accepted values: "true" and "false"'],isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],u.prototype,"readOnly",void 0),h([d({description:["This property indicates if the value entered by the user is a valid one according to some validation present in the controller."],isMandatory:!1,propertyType:"boolean"})],u.prototype,"invalidValue",void 0),h([d({description:["This property indicates the status of the component, if it checked or not. Also, by using this property, you can set the default value of the radio, in case you need it to be checked."],isMandatory:!1,propertyType:"boolean"})],u.prototype,"checked",void 0),h([(f={description:["This event is being triggered when a radio button is checked.","The event bubbles to the parent component, psk-radio-group, where the component will handle the selection of the radio."],specialNote:"This event is not composed, it will not bubble outside the form!"},function(t,i){const{connectedCallback:n,componentWillLoad:s,componentDidLoad:p,render:d}=t;let h="psk-send-events",u=l,b=a,m="definedEvents";t.componentWillLoad=function(){let t=e(this);if(!t.hasAttribute(a)&&!t.hasAttribute(r))return s&&s.call(this)},t.componentDidLoad=function(){let t=e(this);if(!t.hasAttribute(a)&&!t.hasAttribute(r))return p&&p.call(this)},t.connectedCallback=function(){let t=this,o=e(t);if(f.controllerInteraction&&(b=r,m="definedControllers",u=c,h="psk-send-controllers"),o.hasAttribute(b)){if(!t.componentDefinitions)return t.componentDefinitions={},t.componentDefinitions[m]=[Object.assign(Object.assign({},f),{eventName:String(i)})],n&&n.call(t);let e=t.componentDefinitions;const o=Object.assign(Object.assign({},f),{eventName:String(i)});if(e&&e.hasOwnProperty(u)){let t=[...e[u]];t.push(o),e[u]=[...t]}else e[u]=[o];t.componentDefinitions=Object.assign({},e)}return n&&n.call(t)},t.render=function(){let e=this;if(!e.componentDefinitions||!e.componentDefinitions||!e.componentDefinitions[u])return d&&d.call(e);let t=e.componentDefinitions[u];t&&(t=t.reverse()),o(h,{composed:!0,bubbles:!0,cancelable:!0,detail:t},!0)}})],u.prototype,"onChangeRadio",void 0);export{u as psk_radio}