import React from "react";
import "./style.css";

function Picture(props) {
  return (
    <div className="container image-container">
      <div className="row">
        {props.pictures.map((picture) => (
          <img
            className="col-3 imagey"
            src={picture.image}
            alt={picture.name}
            key={picture.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Picture;
