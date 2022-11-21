import React, { useReducer } from "react";
import { useLocation } from "wouter";

const reducer = (state, action) => {
  switch (action.type) {
    case NAMES_URL.CHANGEURL:
      return {
        ...state,
        keyword: action.payload,
      };
    case NAMES_URL.RATING:
      return {
        ...state,
        rating: action.payload,
      };
    default:
      return state;
  }
};

const NAMES_URL = {
  CHANGEURL: "CHANGEURL",
  RATING: "RATING",
};

const GifSearcher = ({keywords}) => {
  const [, pushLocation] = useLocation("");
  const [state, dispatch] = useReducer(reducer, {
    keyword: keywords === undefined ? "" : keywords.params,
    rating: keywords === undefined ? "" : keywords.rating ,
  });

  const { keyword: changeUrl, rating } = state;

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (changeUrl !== "") {
      localStorage.setItem(
        "lastSearch",
        JSON.stringify({ params: changeUrl, rating })
      );
      pushLocation(`/search/${changeUrl}/${rating ? rating : "g"}`);
    } else {
      alert("You must put a gif name");
    }
  };

  return (
    <div className="gif__searcher">
      <form onSubmit={handlerSubmit}>
        <select
          name="rating"
          value={rating}
          onChange={(e) =>
            dispatch({ type: NAMES_URL.RATING, payload: e.target.value })
          }
        >
          <option value="g">g</option>
          <option value="pg">pg</option>
          <option value="pg-13">pg-13</option>
          <option value="r">r</option>
        </select>
        <input
          type="text"
          onChange={(e) => {
            dispatch({ type: NAMES_URL.CHANGEURL, payload: e.target.value });
          }}
          className="gif__searcher-input"
          placeholder="Search a Gif"
          value={decodeURI(changeUrl)}
        />
        <button className="gif__searcher-button">Search</button>
      </form>
    </div>
  );
};

export default React.memo(GifSearcher);
