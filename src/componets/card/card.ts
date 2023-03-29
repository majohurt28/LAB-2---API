export enum Attribute1{
    "name"= "name",
    "model"= "model",
    "manufacturer"= "manufacturer",
    
}

class starCard extends HTMLElement{
    name?: string
    model?: string
    manufacturer?: string
    
    static get observedAttributes(){
        const attrs : Record<Attribute1,null> ={
            name : null,
            model :null,
            manufacturer : null, 
            
        }
        return Object.keys(attrs)
    }

    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    attributeChangedCallback(propName: Attribute1,oldValue: undefined,newValue: string){
        switch(propName){
         default:
         this[propName] = newValue;
         this.render();
         break;
        }
        this.render()
    }

    connectedCallback(){
        this.render();
    }
    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/components/featured/featured.css">
            
            <div class="containercard">
            <h1>${this.name}</h1>
            <p1>${this.model}</p1>
            <h2>${this.manufacturer}</h2>
            </div>
            `
        }
    }

}

customElements.define("starship-contentcard",  starCard)
export default starCard;

