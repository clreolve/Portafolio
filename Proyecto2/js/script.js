import { API } from "./api.js";
const ES = new API("es");
const EN = new API("en");

let EScards = [];
let ENcards = [];
let types = [];
let categories = [];
let sets = [];

window.onload = async () => {
  await load_data();

};

async function load_data(){
  EScards = await ES.getAllCards();
  ENcards = await EN.getAllCards();
  types = await ES.getTypes();
  categories = await ES.getCategories();
  sets = await ES.getSets();

}
