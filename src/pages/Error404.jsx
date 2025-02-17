import React from "react";
import error404Svg from "../assets/pictures/error404.svg";
import Button from "../components/Button";
import "../styles/Error404.css";
function Error404() {
  return (
    <>
      <img src={error404Svg} alt="error-404" className="error-img" />
      <div className="button-wrapper home-btn">
      <Button to="/" children={"Homepage"} />
      </div>
    </>
  );
}

export default Error404;
