import React from "react";
import ListOfGyfs from "./ListOfGifs";
import OneGif from "./OneGif";
import LastGifs from "./LastGifs";
import Error from "./Error";
import { GifContextProvider } from "../context/StaticContext";
import { Route } from "wouter";

const Gifs = () => {
  return (
    <GifContextProvider>
      <div>
        <Route path="/" component={LastGifs}></Route>

        <Route path="/search/:params/:rating?" component={ListOfGyfs} />

        <Route path="/gif/:id" component={OneGif} />

        <Route path="*" component={Error} />
      </div>
    </GifContextProvider>
  );
};

export default Gifs;
