import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdVolumeOff, MdVolumeUp } from "react-icons/md";

import Timer from "../components/Timer";
import { useState } from "react";

export default function Home() {
  const [mute, setMute] = useState(true);

  const toggleMute = () => setMute(!mute);

  return (
    <Container>
      <Volume>
        {mute ? (
          <MdVolumeOff size={20} color="#ddd" onClick={toggleMute} />
        ) : (
          <MdVolumeUp size={20} color="#ddd" onClick={toggleMute} />
        )}
      </Volume>
      <Video autoPlay loop muted={mute}>
        <source src="/assets/videos/cover.m4v" />
      </Video>

      <SpreeLogo src="/assets/images/logo-big.webp" alt="spree-logo" />
      <Title>Coming Soon</Title>
      <SubTitle>April 8, 2022</SubTitle>
      <Timer />
      {/* <Link to="#" className="btn outline">
        Explore more
      </Link> */}
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

const Volume = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
  cursor: pointer;
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

const SpreeLogo = styled.img`
  width: 250px;
  margin-bottom: 20px;

  @media only screen and (min-device-width: 480px) {
    width: 400px;
  }
`;

const Title = styled.h1`
  text-align: center;
  line-height: 3.5rem;
  font-size: 3.5rem;
  font-weight: 800;
  text-transform: uppercase;
  margin: 0;
  color: #f5f5f5;
  text-shadow: 1px 1px 3px #fff;
`;

const SubTitle = styled.h2`
  text-align: center;
  margin: 0;
  color: #d6d6d6;
  font-size: 1.5rem;
  font-weight: 400;
`;
