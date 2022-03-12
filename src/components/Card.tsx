import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Card() {
  return (
    <Container>
      <Title>Pro Shows</Title>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
        doloremque praesentium repudiandae, vero officia amet ex beatae ratione
        vel. Aut rem similique laboriosam ipsa ab, quam vitae ducimus accusamus
        delectus.
      </Description>
      <Link className="btn outline" to="#">
        Comming Soon...
      </Link>
    </Container>
  );
}

const Container = styled.div`
  padding: 10px;
  height: 300px;
  /* max-width: 400px; */
  width: 100%;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;

  background-color: #999;
  box-shadow: 5px 5px 10px 0px #0000003d;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(/assets/images/bg1.jpg);
  background-size: cover;
  background-position: center;
  transition: transform 300ms;

  &:hover {
    transform: scale(1.02);
  }
`;

const Title = styled.h1`
  margin-top: 3rem;
  color: white;
`;

const Description = styled.div`
  color: white;
  margin-bottom: 20px;
`;
