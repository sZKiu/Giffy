import { useState, useEffect } from "react";
import getTrendingTerms from "../services/getTrendingTermsService";

export const useNear = ({ elRef, marginRoot = "200px", once = true } = {}) => {
  const [intercepted, setIntercepted] = useState();
  const [trending, setTrending] = useState();

  useEffect(() => {
    if(intercepted){
      getTrendingTerms().then((item) => {
        setTrending(item);
      });
    }
  }, [intercepted]);


  const isIntercepted = (entries, observe) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setIntercepted(true);
      once && observe.disconnect();
    } else {
      !once && setIntercepted(false)
    }
  };

  const observer = new IntersectionObserver(isIntercepted, {
    rootMargin: marginRoot,
  });
  
  elRef.current !== null ? observer.observe(elRef.current) : console.log();

  return { intercepted, trending };
};
