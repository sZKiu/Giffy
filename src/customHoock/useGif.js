import { useState, useEffect, useContext } from "react";
import Context from "../context/StaticContext";
import gifsGenerator from "../services/gifsGenerator";

const INITIAL_PAGE = 0;

const useGif = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingPage, setIsLoadingPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const { gif, setGif } = useContext(Context);

  useEffect(() => {
    setIsLoading(true);

    gifsGenerator().then((gif) => {
      setGif(gif);
      setIsLoading(false);
    });
  }, [setGif]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    setIsLoadingPage(true)

    gifsGenerator({page})
      .then((nextGifs) => {
        setGif(prevGifs => prevGifs.concat(nextGifs))
        setIsLoadingPage(false)
      } )

  }, [page, setGif]);

  return { isLoading, gif, isLoadingPage, setPage };
};

export default useGif;
