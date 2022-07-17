import { API } from "./modules/api.js";
import { fetch_json, getImageURL, getParams, r404 } from "./modules/utility.js";
const ES = new API("es");
const cantidad = 60;

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

  types_cards = await ES.get_all_for_set(id);

  if(types_cards == undefined){
    //r404();
  }

  cards_last_set = types_cards.cards;

  await last_set_fill();
  await set_content();
};


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

  /** Leenando la pagina de info del nuevo set */
  document.querySelectorAll(".set_name").forEach((element) => {
    element.innerHTML = types_cards.name;
  });
  
  document.querySelectorAll(".ntotalcards").forEach((element) => {
    element.innerHTML = ntotalcards;
  });


}
async function set_content() {
  let last_set_all_cards = document.querySelector("#last-set-box-home");
  last_set_all_cards.innerHTML = "";

  let page = getParams("page") == undefined ? 1 : getParams("page");

  let ncards = cards_last_set.length;
  let npages = Math.ceil(ncards/cantidad);

  let start = (page-1)*cantidad;
  let end = page*cantidad;

  cards_last_set = cards_last_set.reverse();
  for(let i = start; i < end; i++){
    let c = cards_last_set[i];
    if(c!=undefined){
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
  }

  let paginacion = document.querySelector("#paginacion");

  for(var p = 1; p<=npages; p++){
      if(p == page){
          paginacion.innerHTML += ` <a href="./sets.html?id=${id}&page=${p}" type="button" class="btn btn-primary">${p}</a>
          `;
      }else{
          paginacion.innerHTML += ` <a href="./sets.html?id=${id}&page=${p}"  type="button" class="btn btn-secondary">${p}</a>`;
      }
  }
 

}