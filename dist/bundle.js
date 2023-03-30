(()=>{"use strict";var t;!function(t){t.name="name",t.model="model",t.manufacturer="manufacturer"}(t||(t={}));class n extends HTMLElement{static get observedAttributes(){return Object.keys({name:null,model:null,manufacturer:null})}constructor(){super(),this.attachShadow({mode:"open"})}attributeChangedCallback(t,n,e){this[t]=e,this.render(),this.render()}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n           \n            \n            <div class="containercard">\n            <h1>${this.name}</h1>\n            <p1>${this.model}</p1>\n            <h2>${this.manufacturer}</h2>\n            </div>\n            `)}}customElements.define("starship-contentcard",n);class e extends HTMLElement{constructor(){super(),this.container1=[],this.attachShadow({mode:"open"})}connectedCallback(){return n=this,e=void 0,o=function*(){const n=yield function(){return t=this,n=void 0,a=function*(){try{return(yield fetch("https://swapi.dev/api/vehicles/").then((t=>t.json()))).data}catch(t){console.log(t)}},new((e=void 0)||(e=Promise))((function(o,c){function r(t){try{s(a.next(t))}catch(t){c(t)}}function i(t){try{s(a.throw(t))}catch(t){c(t)}}function s(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(r,i)}s((a=a.apply(t,n||[])).next())}));var t,n,e,a}();n.forEach((t=>{console.log(t)})),n.forEach((n=>{const e=this.ownerDocument.createElement("starship-contentcard");e.setAttribute(t.name,n.name),e.setAttribute(t.model,n.model),e.setAttribute(t.manufacturer,n.manufacturer),this.container1.push(e)})),this.render(this.container1)},new((a=void 0)||(a=Promise))((function(t,c){function r(t){try{s(o.next(t))}catch(t){c(t)}}function i(t){try{s(o.throw(t))}catch(t){c(t)}}function s(n){var e;n.done?t(n.value):(e=n.value,e instanceof a?e:new a((function(t){t(e)}))).then(r,i)}s((o=o.apply(n,e||[])).next())}));var n,e,a,o}render(t){var n;const e=this.ownerDocument.createElement("section");e.className="star-container",this.container1.forEach((t=>{e.appendChild(t)})),null===(n=this.shadowRoot)||void 0===n||n.appendChild(e)}}customElements.define("app-container",e)})();