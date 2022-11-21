import React from "react";
import { Link } from "wouter"

const TrendingList = ({ names }) => {
  const handlerClick = (name) => {
    localStorage.setItem("lastSearch", JSON.stringify({params: name}))
  }

  return (
    <>
    <h2>Trending Gifs</h2>

      {
        names.map((name, ind) => (
          <Link to={`${window.location.origin}/search/${name}`} key={ind} onClick={() => handlerClick(name)} >
            <span className="list__trending-item" >{name}</span>
          </Link>
        ))
      }
    </>
  );
};

export default TrendingList;
