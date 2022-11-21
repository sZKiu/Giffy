import { API_KEY, FIRST_PART_API_URL } from "../settings/settings.js";

export default function getSingleGif({ id }) {
  const API_URL = `${FIRST_PART_API_URL}/gifs/${id}?api_key=${API_KEY}`;

  return fetch(API_URL)
    .then((res) => res.json())
    .then(json => {
    const { data } = json;
    const { images, title, id } = data;
      const { url } = images.downsized_medium;
      return { title, id, url };
    })

}
