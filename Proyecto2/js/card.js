import { API } from "./modules/api.js";
import { fetch_json, getImageURL, getParams, r404 } from "./modules/utility.js";

if (getParams("id") == undefined) {
  r404();
}

const id_page = getParams("id");

const ES = new API("es");

let card;

//INFO LAST SET

let ntypes = [];
let ncategories = [];
let last_set = [];
let cards_last_set = [];

window.onload = async () => {
  card = await ES.getCard(id_page);
  console.log(card);
  if (card == undefined) {
    r404();
  }

  let image = await getImageURL(card.image)

  document.querySelector("#image-box").innerHTML = `<div class="poke-card-exibition col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4"
  src="./card.html?id=${card.id}">
  <img src="${image}" 
      class="rounded mx-auto d-block" 
      alt="${card.name}"
      width="100%">
</div>`;

  last_set = await get_last_set();
  cards_last_set = await Promise.all(
    last_set.cards.map(async (card) => {
      return await ES.getCard(card.id);
    })
  );

  console.log(cards_last_set);

  await last_set_fill();
};

async function get_last_set() {
  let last = card.set;
  console.log(last);
  return await fetch_json(ES.sets + `/${last.id}`);
}

async function last_set_fill() {
  //obtenemos categorias y tipos
  cards_last_set.forEach((el) => {
    ncategories[el.category] =
      ncategories[el.category] == undefined ? 1 : ncategories[el.category] + 1;
    try {
      ntypes[el.types[0]] =
        ntypes[el.types[0]] == undefined ? 1 : ntypes[el.types[0]] + 1;
    } catch {
      /** */
    }
  });

  //total de pokemons, entrenador y cartas
  let ntotalcards = last_set.cardCount.total;
  let npokemons = ncategories["Pokémon"];
  let ntrainers = ncategories["Entrenador"];

  /** Leenando la pagina de info del nuevo set */
  document.querySelectorAll(".set_name").forEach((element) => {
    element.innerHTML = last_set.name;
  });

  document.querySelectorAll(".fecha_liberacion").forEach((element) => {
    element.innerHTML = last_set.releaseDate;
  });
  document.querySelectorAll(".serie_link").forEach((element) => {
    element.innerHTML = `<a href="./series.html?serie=${last_set.serie.id}">${last_set.serie.name}</a> `;
  });

  fill_cards();
}
function fill_cards() {
  let last_set_all_cards = document.querySelector("#last-set-box-home");
  last_set_all_cards.innerHTML = "";

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
