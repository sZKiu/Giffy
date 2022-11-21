import React, { useEffect, useContext } from "react";
import Context from "../context/StaticContext";
import gifsGenerator from "../services/gifsGenerator";
import useGif from "../customHoock/useGif";
import Gif from "./Gif";
import { Helmet } from "react-helmet";

const ListGifs = ({ params }) => {
  const rating = params.rating
  const { isLoading, gif } = useGif();
  const { setGif } = useContext(Context);


  useEffect(() => {
    gifsGenerator({params, rating}).then((img) => {
      setGif(img);
    });
  }, [setGif, params, rating]);

  return (
    <>
      <Helmet>
        <title>{`Search: ${decodeURI(params.params)}`}</title>
      </Helmet>

      <h2>
        {!isLoading ? `Search: ${decodeURI(params.params)}` : "Loading..."}
      </h2>

      <div className="list__gifs">
        {gif.map((prop, ind) => (
          <Gif
            url={prop.url}
            title={prop.title}
            id={prop.id}
            key={`${prop.id} - ${ind}`}
          />
        ))}
      </div>
    </>
  );
};

export default ListGifs;
