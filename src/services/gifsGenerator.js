import { API_KEY, FIRST_PART_API_URL } from "../settings/settings.js";

const gifsGenerator = ({ limit = 20, page = 0, params, rating } = {}) => {
  let lastSearch = JSON.parse(localStorage.getItem("lastSearch"));
  const value = params ?? lastSearch;
  const API_URL = `${FIRST_PART_API_URL}/gifs/search?api_key=${API_KEY}&q=${
    value !== null ? encodeURI(value.params) : "recomended"
  }&limit=${limit}&offset=${limit * page}&rating=${
    value?.rating ? value.rating : "g"
  }&lang=en`;

  return fetch(API_URL)
    .then((response) => response.json())
    .then((json) => {
      const { data } = json;
      const gifs = data.map((image) => {
        const { images, title, id } = image;
        const { url } = images.downsized_medium;
        return { title, id, url };
      });
      return gifs;
    });
};

export const gifsGeneratorHome = ({ limit = 20, page = 0 } = {}) => {
  const lastSearch = JSON.parse(localStorage.getItem("lastSearch"));
  const API_URL = `${FIRST_PART_API_URL}/gifs/search?api_key=${API_KEY}&q=${
    lastSearch ? encodeURI(lastSearch.params) : "trend"
  }&limit=${limit}&offset=${limit * page}&rating=g&lang=en`;

  return fetch(API_URL)
    .then((response) => response.json())
    .then((json) => {
      const { data } = json;
      const gifs = data.map((image) => {
        const { images, title, id } = image;
        const { url } = images.downsized_medium;
        return { title, id, url };
      });
      return gifs;
    });
};

export default gifsGenerator;
