import React from "react";

function SearchItem({ title, releaseDate, image }) {
  return (
    <div className="search-item d-flex align-items-center justify-content-start py-3 px-3 mb-2">
      <div>
        <div className="search-image" style={{ background: `url(${image})` }}></div>
      </div>
      <div className="ml-3">
        <h5 className="mb-0">{title}</h5>
        <small className="mb-0">{releaseDate}</small>
      </div>
    </div>
  );
}

export default SearchItem;
