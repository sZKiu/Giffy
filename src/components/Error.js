import React from "react";
import { Helmet } from "react-helmet"

const Error = () => {

  return (
    <div className="onegif">
      <Helmet>
      <title>Error: 404</title>
      </Helmet>
      <h3 className="onegif__title">
        Error: 404
      </h3>
      <img
        className="onegif__img"
        src={"https://media4.giphy.com/media/Qxkf4LQ1xIbXpH8z0I/giphy-downsized-medium.gif?cid=c687f9784df31f1080761b518e9db8075daa8abb99d030e5&rid=giphy-downsized-medium.gif&ct=g"}
        alt={"404 Error"}
      />
    </div>
  );
};

export default Error;
