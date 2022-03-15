import Footer from "../components/Footer";

import Timer from "../components/Timer";
import {
  AboutText,
  Container,
  Divider,
  MainTitle,
  SpreeLogo,
  SubTitle,
  Title,
  Video,
  Wrapper,
  YoutubeVideo,
} from "./Home.style";

const isMobile = screen.width < 900;

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
              width="100%"
              src="https://www.youtube.com/embed/RaSRQDaoARY?controls=0"
              title="Spring spree 22 - Official trailer"
              frameBorder="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </YoutubeVideo>
          {!isMobile && <Footer />}
        </Wrapper>
        {isMobile && (
          <Wrapper className="two">
            <Footer />
          </Wrapper>
        )}
      </Container>
    </div>
  );
}
