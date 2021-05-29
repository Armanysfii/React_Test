import React from "react";
import { Card } from "../card/card.component.js";
import "./card-list.styles.css";

export const CardList = function (props) {
  return (
    <div className="card-list">
      {props.monsters.map(function (monster) {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};
