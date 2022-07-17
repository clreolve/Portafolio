import { API } from "./modules/api.js";
import { fetch_json, getImageURL, getParams, r404 } from "./modules/utility.js";
const ES = new API("es");
const cantidad = 120;

let sets = [];

if (getParams("id") == undefined) {
    r404();
  }
const id = getParams("id"); 

//INFO LAST SET

let ntypes = [];
let ncategories = [];
let last_set = [];
let cards_last_set = [];
let types_cards;

window.onload = async () => {
  
  sets = await ES.getSets();
  types_cards = await ES.get_all_for_type(id);

  if(types_cards == undefined){
    //r404();
  }

  cards_last_set = types_cards.cards;
  cards_last_set = cards_last_set.reverse();

  await last_set_fill();
};

async function get_last_set() {
  let last = sets[sets.length - 1];
  return await fetch_json(ES.sets + `/${last.id}`);
}

async function last_set_fill() {
  //obtenemos categorias y tipos
  cards_last_set.forEach((el) => {
    ncategories[el.category] = ncategories[el.category] == undefined ? 1 : ncategories[el.category] + 1;
    try {
      ntypes[el.types[0]] = ntypes[el.types[0]] == undefined ? 1 : ntypes[el.types[0]] + 1;
    } catch { /** */ }
  });

  //total de pokemons, entrenador y cartas
  let ntotalcards = cards_last_set.length;
  let npokemons = ncategories["Pokémon"];
  let ntrainers = ncategories["Entrenador"];

  /** Leenando la pagina de info del nuevo set */
  document.querySelectorAll(".set_name").forEach((element) => {
    element.innerHTML = types_cards.name;
  });
  
  document.querySelectorAll(".ntotalcards").forEach((element) => {
    element.innerHTML = ntotalcards;
  });

  /* Carousel */
  fill_cards();

}
async function fill_cards() {
  let last_set_all_cards = document.querySelector("#last-set-box-home");
  last_set_all_cards.innerHTML = "";

  let counter = cantidad-1;


  let page = getParams("page") == undefined ? 1 : getParams("page");

  let ncards = cards_last_set.length;
  let npages = Math.ceil(ncards/cantidad);

  let start = (page-1)*cantidad;
  let end = page*cantidad;

  for(let i = start; i < end; i++){
    let c = cards_last_set[i];
    let template = `<div class="poke-card-exibition col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                      <a href="./card.html?id=${c.id}">
                        <img src="${getImageURL(c.image)}" 
                        class="rounded mx-auto d-block" 
                        alt="${c.name}"
                        width="100%">
                      </a>
                    </div>`;

    last_set_all_cards.innerHTML += template;
  }
  /*
   <div id="paginacion" class="btn-toolbar" role="toolbar">
                        <a type="button" class="btn btn-secondary">5</a>
                    </div>
                     */
    let paginacion = document.querySelector("#paginacion");

    for(var p = 1; p<=npages; p++){
        if(p == page){
            paginacion.innerHTML += ` <a href="./tipos.html?id=${id}&page=${p}" type="button" class="btn btn-primary">${p}</a>
            `;
        }else{
            paginacion.innerHTML += ` <a href="./tipos.html?id=${id}&page=${p}"  type="button" class="btn btn-secondary">${p}</a>`;
        }
    }
 

}


