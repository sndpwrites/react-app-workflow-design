import React from "react";
import { BoardContainer } from "../base-components";
import { CardGroup } from "./CardGroup";

export const BoardView = (props) => (
  <BoardContainer>
    {props.data.map((column, index) => (
      <CardGroup key={index} data={column.data} cardGroupTitle={column.title} />
    ))}
  </BoardContainer>
);
