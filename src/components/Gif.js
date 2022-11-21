import React from "react";
import { Link } from "wouter";

const Gif = ({ url, title, id }) => {
  return (
    <div className="list__gif">
      <Link to={`${window.location.origin}/gif/${id}`}>
        <h5 className="list__gif-name">{title}</h5>
        <img className="list__gif-img" src={url} alt={title} />
      </Link>
    </div>  
  );
};

export default React.memo(Gif);
