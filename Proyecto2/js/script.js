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

  let carousel = document.querySelector("#carrousel_items");
  carousel.innerHTML = "";

  let carousel_mobile = document.querySelector("#carrousel_items_mobile");
  carousel_mobile.innerHTML = "";

  let counter = 0;
  let acumulador = "";
  for (let c of last_set.cards) {
    let template = `<div class="poke-card-exibition col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                      <img src="${getImageURL(c.image)}" 
                          class="rounded mx-auto d-block" 
                          alt="${c.name}"
                          width="100%">
                    </div>`;

    carousel_mobile.innerHTML += `<div class="carousel-item">
    <div class="container-fluid pt-4 px-4">
      <div class="container row m-auto justify-content-center">
          ${template}
      </div>
    </div> 
  </div>`;

    if(counter < 3){
      acumulador += template;
      counter++;
    }else{
      carousel.innerHTML += `<div class="carousel-item">
        <div class="container-fluid pt-4 px-4">
          <div class="container row m-auto justify-content-center">
              ${acumulador}
          </div>
        </div> 
      </div>`;
      console.log(carousel.innerHTML);
      acumulador = "";
      counter = 0;
    }
  }

  carousel.querySelector(".carousel-item").classList.add("active");
  carousel_mobile.querySelector(".carousel-item").classList.add("active");

  console.log(last_set);
}