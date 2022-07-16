/**
 *
 * @param {String} url url del api a consultar
 * @returns respuesta de la api parseada
 */
async function fetch_json(url) {
  try {
    let res = await fetch(url);
    let data = await res.json();
    //await localStorage.setItem(backup, JSON.stringify(res)) //guardamos un respaldo
    //return JSON.parse(localStorage.getItem(backup));
    return data;
  } catch (error) {
    console.error;
    return undefined;
  }
}

/**
 * Return source of image
 * @param {String} url url of image
 * @param {String} quality high|low
 * @param {String} format webp|png|jpg
 */
function getImageURL(url, quality = "high", format = "webp") {
  return `${url}/${quality}.${format}`;
}

function getParams(param){
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const res = urlParams.get(param)
  console.log(res);
}

export { fetch_json, getImageURL, getParams};
