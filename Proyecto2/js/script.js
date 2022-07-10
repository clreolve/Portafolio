import {ES, EN} from "./cards.js";

let EScards = []
let ENcards = []

window.onload = () => {
    ES.getALlCards().then((data) => {
        EScards = data;
    }).catch(console.error)

    EN.getALlCards().then((data) => {
        ENcards = data;
    }).catch(console.error)

}