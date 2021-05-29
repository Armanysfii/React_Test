import React from "react";
import "./card.styles.css";
export const Card = function (props) {
  return (
    <div className="card-container">
      <img
        alt="monster img"
        src={`https://robohash.org/${props.monster.id}?set=set1&size=180x180`}
      />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};
