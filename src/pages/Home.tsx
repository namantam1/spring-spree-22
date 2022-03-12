import { Link } from "react-router-dom";
import styled from "styled-components";

import Timer from "../components/Timer";
import Button from "../UI/Button";

export default function Home() {
  return (
    <Container>
      <Title>Coming Soon</Title>
      <SubTitle>Our website is under construction</SubTitle>
      <Timer />
      <Link to="explore" className="btn outline">
        Explore more
      </Link>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  background-color: #121216;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
  line-height: 3.5rem;
  font-size: 3.5rem;
  font-weight: 800;
  text-transform: uppercase;
  margin: 0;
  color: white;
`;

const SubTitle = styled.h2`
  text-align: center;
  margin: 0;
  color: white;
  font-size: 2rem;
  font-weight: 100;
`;
