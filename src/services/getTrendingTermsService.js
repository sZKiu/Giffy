import { API_KEY, FIRST_PART_API_URL } from "../settings/settings.js"


// Good way
const getTrendingTerms = ({ keyword = "Trending" } = {}) => {
  const API_URL = `${FIRST_PART_API_URL}/trending/searches?api_key=${API_KEY}`;

  return fetch(API_URL)
    .then((response) => response.json())
    .then((json) => {return json.data});
};

export default getTrendingTerms;