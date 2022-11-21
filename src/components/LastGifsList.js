import React, { useEffect, useState } from "react";
import { gifsGeneratorHome } from "../services/gifsGenerator";
import useGif from "../customHoock/useGif";
import Gif from "./Gif";
import LazyTrending from "./LazyTrending";

const LastGifsList = () => {
  let lastSearch = JSON.parse(localStorage.getItem("lastSearch"));
  const [gifs, setGifs] = useState([]);
  const { isLoading } = useGif();

  useEffect(() => {
    gifsGeneratorHome().then((img) => {
      setGifs(img)
    });
  }, []);

  return (
    <>
      <h2>
        {lastSearch ? `Last Search: ${lastSearch.params ?? lastSearch.search}` : "Trend Searches"}
      </h2>

      <div className="list__gifs">
        {gifs !== undefined
          ? gifs.map((prop) => (
              <Gif
                url={prop.url}
                title={prop.title}
                id={prop.id}
                key={prop.id}
              />
            ))
          : console.log()}
      </div>

      {!isLoading ? <LazyTrending /> : console.log()}
    </>
  );
};

export default LastGifsList;
