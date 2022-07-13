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
async function getImageURL(url, quality = "low", format = "webp") {
  return `${url}/${quality}.${format}`;
}
export { fetch_json };
