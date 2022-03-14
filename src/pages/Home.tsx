import {
  AiOutlineFacebook,
  AiOutlineYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";

import Timer from "../components/Timer";
import {
  AboutText,
  Container,
  Divider,
  MainTitle,
  SocialMedia,
  SpreeLogo,
  SubTitle,
  Title,
  Video,
  Wrapper,
  YoutubeVideo,
} from "./Home.style";

export default function Home() {
  return (
    <div>
      <Video autoPlay loop muted>
        <source src="/assets/videos/cover.m4v" />
      </Video>
      <Container>
        <Wrapper>
          <SpreeLogo src="/assets/images/logo-big.webp" alt="spree-logo" />
          <MainTitle>Coming Soon</MainTitle>
          <SubTitle>April 8-10, 2022</SubTitle>
          <Divider />
          <Timer />
          {/* <Link to="#" className="btn outline">
            Explore more
          </Link> */}
        </Wrapper>
        <Wrapper className="one">
          <Title underlined>About</Title>
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

        <Wrapper className="two">
          <Title>Official Trailer</Title>
          <YoutubeVideo>
            <iframe
              // style={{ maxWidth: "90%" }}
              // height="100%"
              width="100%"
              // width="560"
              // height="315"
              src="https://www.youtube.com/embed/RaSRQDaoARY?controls=0"
              title="Spring spree 22 - Official trailer"
              frameBorder="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              // allowFullScreen
            ></iframe>
          </YoutubeVideo>

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
          <small>Copyright &copy; Spring Spree 2022</small>
        </Wrapper>
      </Container>
    </div>
  );
}
