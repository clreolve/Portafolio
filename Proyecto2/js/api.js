//https://www.tcgdex.net/docs#/cards
/** no olvides agregarlo como <script type="module" src="./js/script.js"></script>
 * al html
 */

const default_language = "es";

/**
 * Para manejar las peticiones
 */
class API {
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

  async getALlCards() {
    try {
      fetch(this.allcards)
        .then((response) => response.json())
        .then((data) => {
          return data;
        });
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }
}

export { API, default_language };
