import { API } from "./modules/api.js";
import { fetch_json, getImageURL, getParams, r404 } from "./modules/utility.js";
const ES = new API("es");
const cantidad = 60;

if (getParams("id") == undefined) {
    r404();
  }
const id = getParams("id"); 

//INFO LAST SET

let sets = [];
let cards_last_set = [];
let types_cards;
let last_set;

window.onload = async () => {

  let serie = await ES.get_all_for_serie(id);
  sets = serie.sets;
  last_set = await get_last_set();
  cards_last_set = await Promise.all(
    last_set.cards.map(async (card) => {
      return await ES.getCard(card.id);
    })
  );
  await fill_cards();
  await fill_box();
};


async function fill_box(){
    let data = sets;
    data = data.reverse();
    let box = document.querySelector("#main_box");

    for (let d of data) {
        let template = `<a class="btn btn-outline-primary w-100 m-2" type="button"
        href= "./sets.html?id=${d.id}"
        >
        ${d.name} [${d.cardCount.total}]
        </a>`;
        box.innerHTML += template;
    }
}

async function get_last_set() {
    let last = sets[sets.length - 1];
    return await fetch_json(ES.sets + `/${last.id}`);
  
  }

async function fill_cards() {
  let last_set_all_cards = document.querySelector("#last-set-box-home");
  last_set_all_cards.innerHTML = "";

  let counter = 0;
  let acumulador = "";
  for (let c of last_set.cards) {
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