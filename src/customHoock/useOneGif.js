import { useState, useEffect } from "react";
import getSingleGif from "../services/getSingleGif";

export default function useOneGif({ id }) {
  const [gifData, setGifData] = useState([]);

  useEffect(() => {
    getSingleGif({ id }).then((json) => {
      const { url, title, id } = json;
      setGifData({url, title, id});
    });
  }, [id]);

  return gifData;
}
