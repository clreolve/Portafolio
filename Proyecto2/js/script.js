import { API } from "./modules/api.js";
import { fetch_json, getImageURL, getParams } from "./modules/utility.js";
const ES = new API("es");
const EN = new API("en");

let EScards = [];
//let ENcards = [];
let types = [];
let categories = [];
let sets = [];

//INFO LAST SET

let ntypes = [];
let ncategories = [];
let last_set = [];
let cards_last_set = [];

window.onload = async () => {
  
  EScards = await ES.getAllCards();
  //ENcards = await EN.getAllCards();
  types = await ES.getTypes();
  categories = await ES.getCategories();
  sets = await ES.getSets();
  types = await ES.getTypes();

  last_set = await get_last_set();
  cards_last_set = await Promise.all(
    last_set.cards.map(async (card) => {
      return await ES.getCard(card.id);
    })
  );

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
  let ntotalcards = last_set.cardCount.total;
  let npokemons = ncategories["Pokémon"];
  let ntrainers = ncategories["Entrenador"];

  /** Leenando la pagina de info del nuevo set */
  document.querySelectorAll(".set_name").forEach((element) => {
    element.innerHTML = last_set.name;
  });
  
  document.querySelectorAll(".ntotalcards").forEach((element) => {
    element.innerHTML = ntotalcards;
  });
  
  document.querySelectorAll(".fecha_liberacion").forEach((element) => {
    element.innerHTML = last_set.releaseDate;
  });
  document.querySelectorAll(".serie_link").forEach((element) => {
    element.innerHTML = `<a href="./series.html?serie=${last_set.serie.id}">${last_set.serie.name}</a> `;
  });

  /* Carousel */
  fill_cards();

  /* donut chart */
  await chart();
}

async function chart() {
  var ctx6 = $("#doughnut-chart").get(0).getContext("2d");
  let data = [];
  let keys = [];

  for (const [key, value] of Object.entries(ntypes)) {
    data.push(value);
    keys.push(key);
  }
  
  var myChart6 = new Chart(ctx6, {
    type: "bar",
    data: {
      labels: keys,
      datasets: [
        {
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderWidth: 1,
          data: data
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
}

function fill_cards() {
  let last_set_all_cards = document.querySelector("#last-set-box-home");
  last_set_all_cards.innerHTML = "";

  let carousel = document.querySelector("#carrousel_items");
  carousel.innerHTML = "";

  let carousel_mobile = document.querySelector("#carrousel_items_mobile");
  carousel_mobile.innerHTML = "";

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

    carousel_mobile.innerHTML += `<div class="carousel-item">
    <div class="container-fluid pt-4 px-4">
      <div class="container row m-auto justify-content-center">
          ${template}
      </div>
    </div> 
            </div>`;

    last_set_all_cards.innerHTML += template;

    if (counter < 3) {
      acumulador += template;
      counter++;
    } else {
      carousel.innerHTML += `<div class="carousel-item">
        <div class="container-fluid pt-4 px-4">
          <div class="container row m-auto justify-content-center">
              ${acumulador}
          </div>
        </div> 
      </div>`;
      acumulador = "";
      counter = 0;
    }
  }

  //ponemos en activo el item  de cada carousel
  carousel.querySelector(".carousel-item").classList.add("active");
  carousel_mobile.querySelector(".carousel-item").classList.add("active");
}


