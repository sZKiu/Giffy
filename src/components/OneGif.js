import React from "react";
import useOneGif from "../customHoock/useOneGif";
import { Helmet } from "react-helmet"

const OnlyGif = () => {
  const id = window.location.href.split("/")[4].split("?")[0];
  const { url, title } = useOneGif({ id });

  return (
    <div className="onegif">
      <Helmet>
      <title>{title}</title>
      </Helmet>
      <h3 className="onegif__title">
        {title}
      </h3>
      <small className="onegif__id">ID: {id}</small>
      <img
        className="onegif__img"
        src={url}
        alt={title}
      />
    </div>
  );
};

export default OnlyGif;
