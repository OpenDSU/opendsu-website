import{r as s,h as t,g as i}from"./p-83ba3037.js";import"./p-5aa8f28a.js";import{i as e}from"./p-fd9161e6.js";import{E as a}from"./p-c06cc5e4.js";const r=a.PSK_SUB_MENU_EVT;class n extends CustomEvent{constructor(s,t,i){super(s,i),this.getEventType=function(){return r},this.data=t}}const c=class{constructor(t){s(this,t),this.isOpened=!1,this.dropDownHasChildActive=!1,this.somethingChanged=!1,this.isClosed=!0,this.lazyItems=[],this.eventWasResolved=!1}loadSubMenuItems(){if(this.item.children.event){let s=new n(this.item.children.event,{pathPrefix:this.item.path,callback:(s,i)=>{if(s)throw new Error(s);let e=[];i.forEach(s=>{e.push(t("stencil-route-link",{url:s.path,activeClass:"active",exact:!1},t("div",{class:"wrapper_container"},t("div",{class:"item_container"},t("span",{class:"icon fa "+s.icon}),t("span",{class:"item_name"},s.name)))))}),this.lazyItems=e,this.eventWasResolved=!0}},{cancelable:!0,composed:!0,bubbles:!0});this._host.dispatchEvent(s)}}componentDidLoad(){this._host.addEventListener("click",()=>{this.isClosed=!1,this.loadSubMenuItems()})}render(){return t("div",{class:"children"},this.isClosed?null:this.lazyItems.length?this.lazyItems:t("div",{class:"menu-loader"},this.eventWasResolved?t("i",{class:"small"},"No item found."):"Loading..."))}get _host(){return i(this)}};e(c);export{c as event_expandable_renderer}