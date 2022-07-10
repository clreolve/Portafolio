import {API} from "./api.js";

const ES = new API("es");
const EN = new API("en");

/**
 * Return source of image
 * @param {String} url url of image
 * @param {String} quality high|low
 * @param {String} format webp|png|jpg
 */
function getImageURL(url, quality = "low", format = "webp"){
    return `${url}/${quality}.${format}`;
}

export {ES, EN}