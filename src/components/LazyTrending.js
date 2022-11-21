import React, { useRef } from "react";
import TrendingList from "./TrendingList";
import { useNear } from "../customHoock/useNear";

const LazyTrending = () => {
  const elRef = useRef(null);
  const { intercepted, trending } = useNear({ elRef, marginRoot: "200px" });

  return (
    <div className="list__trending" ref={elRef}>
      {trending !== undefined && intercepted === true ? (
        <TrendingList names={trending} />
      ) : (
        ""
      )}
    </div>
  );
};

export default LazyTrending;
