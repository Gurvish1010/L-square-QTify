import React from "react";
import "./Card.css";
import { Chip } from "@mui/material";

function Card({ image, title, follows, likes, type = "album" }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-info">
        <h3 className="card-title">{title}</h3>
        <Chip
          label={type === "song" ? `${likes} Likes` : `${follows} Follows`}
          size="small"
          color="success"
          variant="outlined"
        />
      </div>
    </div>
  );
}





export default Card;