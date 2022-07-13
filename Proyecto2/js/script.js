import { API } from "./api.js";
import { fetch_json, getImageURL } from "./utility.js";
const ES = new API("es");
const EN = new API("en");

let EScards = [];
//let ENcards = [];
let types = [];
let categories = [];
let sets = [];

//let last_set = []

window.onload = async () => {
  await load_data();
};

async function load_data() {
  EScards = await ES.getAllCards();
  //ENcards = await EN.getAllCards();
  types = await ES.getTypes();
  categories = await ES.getCategories();
  sets = await ES.getSets();

  await last_set();
}

async function last_set() {
  let last = await sets[sets.length - 1];
  const last_set = await fetch_json(ES.sets + `/${last.id}`);

  let obj = document.querySelector("#last-set-box-home");
  obj.innerHTML = "";
  let obj2 = document.querySelector("#carrousel_items");
  obj2.innerHTML = "";

  let counter = 0;
  let acumulador = "";
  for (let c of last_set.cards) {
    let template = `<div class="poke-card-exibition justify-content-center m-0 col-6 col-sm-6 col-md-3 col-xxl-2">
                      <img src="${getImageURL(c.image)}" 
                          class="rounded mx-auto d-block" 
                          alt="${c.name}"
                          width="100%">
                    </div>`;

    obj.innerHTML += template;

    if(counter < 3){
      acumulador += template;
      counter++;
    }else{
      obj2.innerHTML += ` <div class="carousel-item m-0 justify-content-center">
        <div class="container-fluid justify-content-center m-0 pt-4 px-4">
          <div class="container row justify-content-center m-0">
              ${acumulador}
          </div>
        </div> 
      </div>`;
      console.log(obj2.innerHTML);
      acumulador = "";
      counter = 0;
    }
  }

  obj2.querySelector(".carousel-item").classList.add("active");

  console.log(last_set);
}
