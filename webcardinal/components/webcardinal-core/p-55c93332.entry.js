import{r as t,c as e,h as s,H as n}from"./p-d4191909.js";import{H as o}from"./p-f0bd18cd.js";import{p as i}from"./p-794858b0.js";import"./p-0c3518a5.js";const c=class{constructor(s){t(this,s),this.getDocsSourceConfigEvent=e(this,"webcardinal:config:getDocsSource",7),this.local=!1,this.content=[]}async componentWillLoad(){if(!this.host.isConnected)return;try{"local"===await i(this.getDocsSourceConfigEvent)&&(this.local=!0)}catch(t){return void console.error('"docsSource" can not be obtained from "webcardinal.json"!\n',t)}try{let t=new URL("/docs/cheatsheet.json",window.location.origin).href;const e=await fetch(t);this.cheatsheet=await e.json()}catch(t){return void console.error('"cheatsheet.json" can not be obtained!\n',t)}let t=this.for;if(!this.cheatsheet[t])return void console.error(`Component "${t}" does not exist in cheatsheet!`);let e=this.cheatsheet[t].source;e=e.substr(1).replace("/","-"),this.origin=`https://raw.githubusercontent.com/webcardinal/${e}/master`,this.local&&(this.origin=new URL(".dev/webcardinal/.webcardinal/components/"+e,window.location.origin).href,console.warn("Local docs is active!"));let s=`${this.origin}/docs/custom/components/${t}.json`;try{let t=new URL(s).href;const e=await fetch(t);this.docs=await e.json()}catch(e){return void console.error(`Docs for component "${t}" can not be fetched!\n`,e)}}appendTagAndEncapsulation(){const{tag:t,encapsulation:e}=this.docs;this.content.push(s("section",{class:"docs-section tag"},s("h1",null,s("code",null,`<${t}/>`)),"none"!==e?s("span",{class:"encapsulation"},e):null))}appendSlot(){this.host.childNodes.length>0&&this.content.push(s("slot",null))}appendSummary(){const{docs:t}=this.docs;t&&this.content.push(s("psk-description",{class:"docs-section description",title:"Summary"},s("p",{innerHTML:t})))}appendProps(){const{props:t}=this.docs;t&&0!==t.length&&this.content.push(s("psk-chapter",{class:"docs-section properties",title:"Properties"},t.map((t=>(t=>{var{name:e,docs:n,attr:o,type:i}=t,c=function(t,e){var s={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(s[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(s[n[o]]=t[n[o]])}return s}(t,["name","docs","attr","type","required"]);return s("article",{class:"property","data-docs-attribute":o},s("h3",null,e),s("div",{class:"table"},n?[s("span",null,"Description"),s("div",{innerHTML:n})]:null,o?[s("span",null,"Attribute"),s("div",null,s("code",null,s("strong",null,o)))]:null,s("span",null,"Type"),s("div",null,s("code",null,i)),c.default?[s("span",null,"Default"),s("div",null,s("code",null,c.default))]:null))})(t)))))}appendMethods(){const{methods:t}=this.docs;t&&0!==t.length&&this.content.push(s("psk-chapter",{class:"docs-section methods",title:"Methods"},t.map((t=>(({name:t,docs:e,signature:n})=>s("article",{class:"method","data-docs-method":t},s("h3",null,t),s("div",{class:"table"},e?[s("span",null,"Description"),s("div",{innerHTML:e})]:null,s("span",null,"Signature"),s("div",null,s("code",null,n)))))(t)))))}appendEvents(){const{events:t}=this.docs;t&&0!==t.length&&this.content.push(s("psk-chapter",{class:"docs-section events",title:"Events"},t.map((t=>(({event:t,docs:e})=>s("article",{class:"event","data-docs-event":t},s("h3",null,t),e?s("div",{class:"table"},s("span",null,"Description"),s("div",{innerHTML:e})):null))(t)))))}appendListeners(){const{listeners:t}=this.docs;t&&0!==t.length&&this.content.push(s("psk-chapter",{class:"docs-section listeners",title:"Listeners"},t&&t.length>0?s("p",null,"To the following events: "):null,t.map((t=>(({event:t})=>s("code",{class:"listener","data-docs-event":t},t))(t)))))}appendSlots(){const{slots:t}=this.docs;t&&0!==t.length&&this.content.push(s("psk-chapter",{class:"docs-section slots",title:"Slots"},s("div",{class:"table table-with-head"},s("h3",null,"Name"),s("h3",null,"Description"),t.map((t=>(({name:t,docs:e})=>[s("div",{"data-docs-slot":t},t?s("code",null,t):null),s("div",{innerHTML:e})])(t))))))}appendCSSVariables(){const{styles:t}=this.docs;if(!t||0===t.length)return;let e=!1;for(let s of t)s.docs&&(e=!0);this.content.push(s("psk-chapter",{class:"docs-section styles",title:"CSS Variables"},s("div",{class:"table table-with-head"},s("h3",null,"Name"),e?s("h3",null,"Description"):null,t.map((t=>"prop"===t.annotation&&(({name:t,docs:e})=>[s("div",{"data-docs-style":t,style:{gridColumn:e?null:"1 / -1"}},s("code",null,t)),e?s("div",{innerHTML:e}):null])(t)))),s("p",null,"Check"," ",s("a",{href:this.origin+"/src/globals/styles/_variables.css"},"the list with all ",s("code",{style:{color:"currentColor"}},"--webc-custom-properties")),".")))}render(){if(this.docs)return this.appendTagAndEncapsulation(),this.appendSummary(),this.appendSlot(),this.appendProps(),this.appendMethods(),this.appendEvents(),this.appendListeners(),this.appendSlots(),this.appendCSSVariables(),s(n,{class:"webc-docs"}," ",this.content)}};(function(t,e,s,n){var o,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,s,n);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(c=(i<3?o(c):i>3?o(e,s,c):o(e,s))||c);i>3&&c&&Object.defineProperty(e,s,c)})([o()],c.prototype,"host",void 0),c.style={default:".psk-card .card-body div{padding:0 !important}.docs-section article{padding-bottom:1.5rem !important}.docs-section article>h3,.docs-section .table>h3{margin:0 0 0.15rem 0 !important;padding:2rem 0.65rem 0.4rem 0.4rem !important;font-size:1.15rem;font-weight:bolder;border-radius:3px;overflow:hidden;background-color:rgba(0, 0, 0, 0.02)}.docs-section .psk-card .card-body .table{display:grid;grid-template-columns:auto 1fr;align-items:center;gap:0.4rem 1rem}.docs-section .psk-card .card-body article .table{padding:0 0.4rem !important;gap:0.35rem 1.5rem}.docs-section .table>span{font-size:0.9rem;font-weight:lighter}.docs-section .table>div{font-size:1rem;text-align:left}.docs-section.listeners code,.docs-section .table code{background:whitesmoke;padding:2px 5px;border-radius:3px;color:#212121;font-size:0.9rem}.docs-section .table>span>code,.docs-section .table>div>code{color:#008A64}.docs-section .table.table-with-head{display:grid;grid-template-columns:auto 1fr;gap:1rem}.docs-section.tag{margin-top:0.65rem;display:flex;justify-content:space-between;align-items:center}.docs-section.tag h1{font-size:1.65rem}.docs-section.tag .encapsulation{border:1px solid whitesmoke;padding:0.25rem 0.5rem;border-radius:100px}.docs-section.description p{padding-top:0}.docs-section.styles .table.table-with-head{grid-template-columns:1fr auto}.docs-section.listeners p{display:inline-block;padding-right:0.25rem}.docs-section.listeners code{margin:0 0.25rem}"};export{c as webc_docs}