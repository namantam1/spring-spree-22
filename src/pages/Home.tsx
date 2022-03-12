import { Link } from "react-router-dom";
import styled from "styled-components";

import Timer from "../components/Timer";

export default function Home() {
  return (
    <Container>
      <Video autoPlay loop muted>
        <source src="/assets/videos/cover.m4v" />
      </Video>
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
  background-color: #000000a1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Video = styled.video`
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
`;

const Title = styled.h1`
  text-align: center;
  line-height: 3.5rem;
  font-size: 3.5rem;
  font-weight: 800;
  text-transform: uppercase;
  margin: 0;
  color: white;
  text-shadow: 1px 1px 5px white;
`;

const SubTitle = styled.h2`
  text-align: center;
  margin: 0;
  color: white;
  font-size: 2rem;
  font-weight: 100;
`;
