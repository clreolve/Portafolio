/**
 *
 * @param {String} url url del api a consultar
 * @returns respuesta de la api parseada
 */
async function fetch_json(url) {
  try {
    let res = await fetch(url);

    switch (res.status){
      case 404:
        return undefined;
    }

    let data = await res.json();

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
  return res;
}

function r404(){
  location.href="./404.html";
}

export { fetch_json, getImageURL, getParams, r404};
