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
        starData.forEach((user: any) => {
            console.log(user);
        });

        starData.forEach((user: any) => {
            const startshipCard = this.ownerDocument.createElement(
                "starship-contentcard"
                ) as Card;
                startshipCard.setAttribute(Attribute1.name, user.name);
                startshipCard.setAttribute(Attribute1.model, (user.model));
                startshipCard.setAttribute(Attribute1.manufacturer, user.manufacturer);
                this.container1.push(startshipCard);
        });
        this.render(this.container1);
    }render(container1: any) {
                    
        this.shadowRoot!.innerHTML = `
        <link rel="stylesheet" href="./index.css">`

        const startshipCards = this.ownerDocument.createElement("section");
        startshipCards.className ='star-container'
            this.container1.forEach((startshipCard)=>{
                startshipCards.appendChild(startshipCard);
            })
            this.shadowRoot?.appendChild(startshipCards);
        }
}
    
    
        customElements.define("app-container", appcontainer);
