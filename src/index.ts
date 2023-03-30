import  "./componets/index";
import {bringApi} from "./data"
import Card, { Attribute1 } from "./componets/card/card";



class appcontainer extends HTMLElement {
    container1: Card[] = [];
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    async connectedCallback() {
        const starData = await bringApi();
        starData.forEach((data: any) => {
            console.log(data);
        });

        starData.forEach((data: any) => {
            const startshipCard = this.ownerDocument.createElement(
                "starship-contentcard"
                ) as Card;
                startshipCard.setAttribute(Attribute1.name, data.name);
                startshipCard.setAttribute(Attribute1.model, data.model);
                startshipCard.setAttribute(Attribute1.manufacturer, data.manufacturer);
                this.container1.push(startshipCard);
        });
        this.render(this.container1);
    }render(container1: any) {
                    

        const startshipCards = this.ownerDocument.createElement("section");
        startshipCards.className ='star-container'
            this.container1.forEach((startshipCard)=>{
                startshipCards.appendChild(startshipCard);
            });
            this.shadowRoot?.appendChild(startshipCards);
        }
}
    
    
        customElements.define("app-container", appcontainer);
