//https://www.tcgdex.net/docs#/cards
/** no olvides agregarlo como <script type="module" src="./js/script.js"></script>
 * al html
 */

import { fetch_json } from "./utility.js";

/**
 * Para manejar las peticiones
 */
class API {
  /**
   * 
   * @param {String} lang lenguaje de las respuestas
   */
  constructor(lang) {
    this.lang = lang;
    this.endpoint = `https://api.tcgdex.net/v2/${lang}`;

    this.allcards = this.endpoint + "/cards";
    this.series = this.endpoint + "/series";
    this.sets = this.endpoint + "/sets";

    //items
    // | hp | illustrators | rarities | retreats | types
    this.categories = this.endpoint + "/categories";
    this.hp = this.endpoint + "/hp";
    this.illustrators = this.endpoint + "/illustrators";
    this.rarities = this.endpoint + "/rarities";
    this.retreats = this.endpoint + "/retreats";
    this.types = this.endpoint + "/types";
  }

  /**
   * @returns arreglo con todas las cartas en el idioma
   */
  async getAllCards() {
    try {
      return await fetch_json(this.allcards);

    } catch (error) {
      console.error(error);
    }
  }

  async getSeries() {
    try {
      return await fetch_json(this.series);
    } catch (error) {
      console.error;
    }
  }

  async getTypes() {
    try {
      let res = await fetch_json(this.types);
      return res;
    } catch (error) {
      console.error;
    }
  }

  async getCategories(){
    try {
      return await fetch_json(this.categories);
    } catch (error) {
      console.error;
    }
  }

  async getSets(){
    try {
      return await fetch_json(this.sets);
    } catch (error) {
      console.error;
    }
  }
}

export {
  API
}

