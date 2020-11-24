import React from "react";

function DetailsBanner({ img }) {
  return <div id="details-banner" style={{ backgroundImage: `url("${img}")` }}></div>;
}

export default DetailsBanner;
