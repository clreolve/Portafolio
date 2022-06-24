let db = [];
let db_len = 0;
const url_list_id = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

let changeImage;

window.onload = () => {
  fetch(url_list_id)
    .then((response) => response.json())
    .then((data) => {
      db = data.data;
      db_len = db.length;

      add_events();
      changeImage();
    })
    .catch(console.error);

  /*
    var req = new XMLHttpRequest();
    req.open('GET', url_list_id, false);
    req.send(null);
    var headers = req.getAllResponseHeaders().toLowerCase();
    alert(headers);
    */
};

add_events = () => {
  change = document.querySelector("#change");
  change.addEventListener("click", changeImage);
};
changeImage = () => {
  index = Math.floor(Math.random() * db_len);
  el = db[index];
  console.log(el);

  plantilla = ``;

  //imagen.src = url;
  document.querySelector("#imagen").src = db[index].card_images[0].image_url;
  document.querySelector("#name").innerHTML = db[index].name;
};
