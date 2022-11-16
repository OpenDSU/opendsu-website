import{r as e,h as t,g as o}from"./p-8419ec55.js";import"./p-2253945a.js";import{C as r}from"./p-a6519dac.js";import{T as i}from"./p-c0f859c2.js";var s=function(e,t,o,r){var i,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(a=(s<3?i(a):s>3?i(t,o,a):i(t,o))||a);return s>3&&a&&Object.defineProperty(t,o,a),a};const a=class{constructor(t){e(this,t),this.multiple=!1,this.layout="default"}componentWillLoad(){this.layout=this.__getAccordionItemLayout()}componentDidLoad(){let e=this.__host,t="psk-accordion-item".toUpperCase();for(;e&&e.firstElementChild;){if(e.firstElementChild.tagName===t){this.__items=e.children;break}e=e.firstElementChild}for(let e=0;e<this.__items.length;e++)this.__items[e].setAttribute("layout",this.layout),this.__items[e].addEventListener("psk-accordion-item:toggle",(t=>this.__toggleAccordionItem(t,e)))}__getAccordionItemLayout(){return"default"}__getAccordionItemStatus(e){if(!e.hasAttribute("opened"))return!1;const t=e.getAttribute("opened");return["opened","true",""].includes(t)}__toggleAccordionItem(e,t){if(e.stopImmediatePropagation(),!1===this.multiple)for(let e=0;e<this.__items.length;e++)e!==t&&this.__items[e].removeAttribute("opened");const o=this.__items[t];this.__getAccordionItemStatus(o)?o.removeAttribute("opened"):o.setAttribute("opened","opened")}render(){return t("slot",null)}get __host(){return o(this)}};s([r()],a.prototype,"__host",void 0),s([i({description:"This property decides if you can toggle more then one item of the accordion.",isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],a.prototype,"multiple",void 0),s([i({description:['There is one alternative for this attribute: "default". If other value is passed, fallback plan is also the default value.',"According to this property, the appearance of the component items are changing.","Future layouts will be developed soon."],isMandatory:!1,propertyType:"string",defaultValue:"default"})],a.prototype,"layout",void 0),a.style={default:":host{background-color:#FFFFFF;box-shadow:0 0 5px rgba(0, 0, 0, .25)}:host{display:block;padding:1em 1em 0.15em 1em;border-radius:4px}",layout:""};export{a as psk_accordion}