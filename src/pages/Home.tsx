import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdVolumeOff, MdVolumeUp } from "react-icons/md";

import Timer from "../components/Timer";
import { useState } from "react";

export default function Home() {
  const [mute, setMute] = useState(true);

  const toggleMute = () => setMute(!mute);

  return (
    <div>
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
      <Container>
        <Wrapper>
          <SpreeLogo src="/assets/images/logo-big.webp" alt="spree-logo" />
          <MainTitle>Coming Soon</MainTitle>
          <SubTitle>April 8-10, 2022</SubTitle>
          <Timer />
          {/* <Link to="#" className="btn outline">
            Explore more
          </Link> */}
        </Wrapper>

        <Wrapper>
          <Title>About</Title>
          <AboutText>
            SpringSpree, conceived in 1978 and now coming to it's 35th edition,
            is NIT Warangal's cultural fest. It is one of the biggest fests in
            the country, with a far-reaching impact on students all over the
            nation.
          </AboutText>
          <AboutText>
            With a plethora of thrilling events, from Idol, Director's Cut,
            Choreo Night, etc... and several new activities as well, SpringSpree
            is back in 2022 after a two year hiatus! A festival well worth your
            time, we are ready to bring you entertainment and excitement like
            never before.
          </AboutText>
        </Wrapper>

        <Wrapper>
          <Title>Links</Title>
          <LinkContainer>
            <div>
              <strong>Spring spree trailer:</strong>
            </div>
            <div>
              <a
                href="https://www.youtube.com/watch?v=RaSRQDaoARY"
                target="_blank"
              >
                Click here
              </a>
            </div>
          </LinkContainer>
        </Wrapper>
      </Container>
    </div>
  );
}

const Container = styled.div`
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  background-color: #000000a1;
`;

const Wrapper = styled.div`
  scroll-snap-align: start;
  padding: 0 10px;
  height: 100%;
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

const MainTitle = styled.h1`
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

const Title = styled.h1`
  border-bottom: 2px solid;
  font-size: 2.5rem;
  color: white;
`;

const AboutText = styled.p`
  text-align: justify;
  font-size: 1rem;
  color: white;
  max-width: 600px;
  margin-top: 10px;

  @media only screen and (min-device-width: 480px) {
    font-size: 1.5rem;
  }
`;

const LinkContainer = styled.div`
  margin-top: 30px;
  align-items: center;
  display: flex;
  color: white;

  div {
    padding: 0 5px;
  }

  strong {
    font-size: 1.2rem;
  }

  a {
    color: #2196f3;
    text-decoration: none;
  }
`;
