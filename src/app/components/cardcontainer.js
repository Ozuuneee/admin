"use client";
import React from "react";
import CardFront from "./cardback.js";
import CardBack from "./cardfront.js";

import "./style.css";

const CardContainer = ({ data }) => {
  console.log(data);
  return (
    <div className="cardsContainer">
      {data.map((person) => (
        <div className="cardContainer" key={person.id}>
          <CardFront person={person}> </CardFront>
          <CardBack person={person}></CardBack>
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
