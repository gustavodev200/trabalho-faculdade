import styled from "styled-components";
import card_img from "../assets/images/cs.png";

const Card = ({ color, tilte, info }) => {
  return (
    <CardWrapper color={color}>
      <CardStyle>
        <h3>{tilte}</h3>
        <p>{info}</p>
      </CardStyle>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  grid-area: "info";
  justify-content: center;
  margin-top: 2rem;
  width: 100%;
  height: 10rem;
  background-color: ${(props) => props.color};
  background-image: url(${card_img});
  border-radius: 10px;
  background-size: cover;
  cursor: pointer;
`;

export const CardStyle = styled.div`
  width: 90%;

  h3 {
    font-size: 2rem;
    font-weight: bold;
  }
`;

export default Card;
