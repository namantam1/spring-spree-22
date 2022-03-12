import styled from "styled-components";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Explore() {
  return (
    <Container>
      <Navbar />
      <Main>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Main>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  /* background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(/assets/images/cover.jpg);
  background-size: cover;
  background-position: center; */
`;

const Main = styled.section`
  margin: 10px;
  padding: 30px 0;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  max-width: 1250px;
  margin: auto;
`;
