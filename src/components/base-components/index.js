import styled from "styled-components";

export const Dot = styled.section`
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  background-color: ${(props) => props.bgColor};
  clip-path: circle();
`;
export const Badge = styled.section`
  background-color: ${(props) => props.bgColor};
  font-size: ${(props) => props.fontSize};
  font-weight: 700;
  text-align: center;
  padding: 0.25rem 0.5rem;
  white-space: nowrap;
  vertical-align: baseline;
  color: ${(props) => props.txtColor};
  border-radius: ${(props) => props.borderRadius};
  display: inline-block;
`;
export const Image = styled.img`
  src: ${(props) => props.src};
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  margin-right: 20px;
`;
export const CardTitle = styled.text`
  color: black;
  text-align: ${(props) => (props.cardGroupTitle ? "center" : "left")};
  font-size: ${(props) => props.fontSize};
  word-wrap: break-word;
  font-weight: bold;
  margin-left: 10px;
  margin-bottom: ${(props) => (props.cardGroupTitle ? "20px" : null)};
`;
export const CardBody = styled.text`
  color: #b3b3b3;
  text-align: left;
  font-size: 16px;
`;
export const TitleHolder = styled.section`
  display: flex;
  justify-content: left;
  margin-bottom: 10px;
`;

export const ImageHolder = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
export const CardContainer = styled.div`
  padding: 0.5em;
  margin-bottom: 1em;
  border: 1px solid #e6e6e6;
  width: 25rem;
  border-radius: 12px;
  background-color: white;
  box-shadow: 12px 12px 2px #e6e6e6;
`;
export const CardGroupContainer = styled.section`
  align-items: stretch;
  width: max-content;
  background-color: #f7f7f7;
  padding: 1em;
  border-right: 1px solid #999999;
`;
export const BoardContainer = styled.div`
  display: flex;
  width: auto;
  height: 100vh;
  flex-direction: row;
  justify-content: center;
`;
