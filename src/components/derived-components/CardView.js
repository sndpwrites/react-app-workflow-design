import React from "react";
import {
  Badge,
  CardBody,
  CardContainer,
  CardTitle,
  Dot,
  Image,
  ImageHolder,
  TitleHolder,
} from "../base-components";
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const CardView = (props) => (
  <CardContainer>
    <div>
      <TitleHolder>
        <Dot size="30px" bgColor={getRandomColor()} />
        <CardTitle fontSize="18px">{props.cardTitle}</CardTitle>
      </TitleHolder>
      <ImageHolder>
        <Image src={props.imageURL} size="40px" />
        <Badge
          borderRadius="50%"
          fontSize="24px"
          bgColor="#57A7E1"
          txtColor="white"
        >
          {props.weightage}
        </Badge>
      </ImageHolder>
    </div>

    <div style={{ marginBottom: "10px" }}>
      <Badge
        borderRadius="50rem"
        fontSize="14px"
        bgColor="#b3b3b3"
        txtColor="white"
      >
        {props.category}
      </Badge>
    </div>
    <CardBody>
      {new Date().toLocaleDateString()} to {new Date().toLocaleDateString()}
    </CardBody>
  </CardContainer>
);
