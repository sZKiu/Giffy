import React from "react";
import GifSearcher from "./GifSearcher";
import LastGifsList from "./LastGifsList";
import { Helmet } from "react-helmet";

const LastGifs = () => {

  return (
    <>
      <Helmet>
        <title>Giffy</title>
      </Helmet>

      <GifSearcher />

      <LastGifsList />
    </>
  );
};

export default LastGifs;
