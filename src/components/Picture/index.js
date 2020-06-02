import React from "react";
import "./style.css";

function Picture(props) {
  return (
    <div className="image-container">
      {props.pictures.map((picture) => (
        <img
          className="imagey"
          src={picture.image}
          alt={picture.name}
          key={picture.id}
        />
      ))}
    </div>
  );
}

export default Picture;
