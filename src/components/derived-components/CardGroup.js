import React from "react";
import { CardGroupContainer, CardTitle } from "../base-components";
import { CardView } from "./CardView";

export const CardGroup = (props) => (
  <CardGroupContainer>
    <CardTitle fontSize="24px" cardGroupTitle>
      {props.cardGroupTitle}
    </CardTitle>
    {props.data.map((card, index) => (
      <CardView
        key={index}
        cardTitle={card.cardTitle}
        imageURL={card.imageURL}
        category={card.category}
        weightage={card.weightage}
      />
    ))}
  </CardGroupContainer>
);
