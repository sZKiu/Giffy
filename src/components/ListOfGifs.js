import React, { useRef, useEffect, useCallback } from "react";
import debounce from "just-debounce-it";
import { useNear } from "../customHoock/useNear";
import useGif from "../customHoock/useGif";
import ListGifs from "./ListGifs";
import GifSearcher from "./GifSearcher";

const ListOfGyfs = ({ params }) => {
  params.rating === "undefined" ? (params.rating = "g") : console.log();
  const { setPage } = useGif();
  const elRef = useRef(null);
  const { intercepted } = useNear({ elRef, once: false, marginRoot: "100px" });

  const debouncehandlerNextPage = useCallback(debounce(() => setPage((prevPage) => prevPage + 1), 400),[]);

  useEffect(() => {
    if (intercepted) debouncehandlerNextPage();
  }, [debouncehandlerNextPage, intercepted]);

  return (
    <>
      <GifSearcher keywords={params} />

      <ListGifs params={params} />

      <div id="snitch" ref={elRef}></div>
    </>
  );
};

export default ListOfGyfs;
