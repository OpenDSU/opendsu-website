import{r as t,g as s}from"./p-87f0c668.js";const c=class{constructor(s){t(this,s),this.context={},this.renderer=()=>null}connectedCallback(){null!=this.subscribe&&(this.unsubscribe=this.subscribe(this.el,"context"))}disconnectedCallback(){null!=this.unsubscribe&&this.unsubscribe()}render(){return this.renderer(Object.assign({},this.context))}get el(){return s(this)}};export{c as context_consumer}