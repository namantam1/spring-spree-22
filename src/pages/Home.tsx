import { MdVolumeOff, MdVolumeUp } from "react-icons/md";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";

import Timer from "../components/Timer";
import { useState } from "react";
import {
  AboutText,
  Container,
  LinkContainer,
  MainTitle,
  SocialMedia,
  SpreeLogo,
  SubTitle,
  Title,
  Video,
  Volume,
  Wrapper,
} from "./Home.style";

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
          {/* <Title>Links</Title> */}
          <SocialMedia>
            <a
              href="https://www.instagram.com/springspree.nitw/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineInstagram />
            </a>
            <a
              href="https://www.facebook.com/nitw.springspree/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineFacebook />
            </a>
            <a
              href="https://www.youtube.com/channel/UCx7ki19SMkESQPkF_erbPvA/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineYoutube />
            </a>
          </SocialMedia>
          <LinkContainer>
            <div>
              <strong>Spring spree trailer:</strong>
            </div>
            <div>
              <a
                href="https://www.youtube.com/watch?v=RaSRQDaoARY"
                target="_blank"
                rel="noopener noreferrer"
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
