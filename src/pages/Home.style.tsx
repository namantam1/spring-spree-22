import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  background-color: #000000a1;
`;

export const Wrapper = styled.div`
  scroll-snap-align: start;
  padding: 0 10px;
  height: 100vh;
  background-color: #000000a1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &.one {
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(/assets/images/bg_img3.jpg) fixed;
    background-size: cover;
  }

  &.two {
    background-color: black;
    /* background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(/assets/images/bg_img2.jpg);
    background-size: cover; */
  }
`;

export const Volume = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
  cursor: pointer;
`;

export const Video = styled.video`
  object-fit: cover;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
`;

export const SpreeLogo = styled.img`
  width: 250px;
  margin-bottom: 20px;

  @media only screen and (min-device-width: 480px) {
    width: 400px;
  }
`;

export const MainTitle = styled.h1`
  text-align: center;
  line-height: 3.5rem;
  font-size: 3.5rem;
  font-weight: 800;
  text-transform: uppercase;
  margin: 0;
  color: #f5f5f5;
  text-shadow: 1px 1px 3px #fff;
`;

export const SubTitle = styled.h2`
  margin-top: 10px;
  text-align: center;
  color: #d6d6d6;
  font-size: 1.5rem;
  font-weight: 400;
  /* font-family: "Arima Madurai", cursive; */
  font-family: "Dancing Script", cursive;
  /* font-family: 'Sacramento', cursive; */
  /* font-family: 'Sansita Swashed', cursive; */
`;

export const Divider = styled.div`
  border-top: 1px solid #5f5f5fa6;
  width: 127px;
  margin-top: 10px;
`;

export const Title = styled.h1`
  ${({ underlined }: { underlined?: boolean }) =>
    underlined && "border-bottom: 2px solid;"}
  font-size: 2.2rem;
  color: white;
`;

export const AboutText = styled.p`
  text-align: justify;
  font-size: 1rem;
  color: #e4e4e4;
  max-width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 10px;

  @media only screen and (min-device-width: 480px) {
    font-size: 1.5rem;
    max-width: 600px;
  }
`;

export const SocialMedia = styled.div`
  padding: 10px;
  margin: 10px 0;
  border-bottom: 1px solid gray;

  svg {
    padding: 5px;
    color: #fff;
    font-size: 4rem;
  }

  svg:hover {
    background-color: #00000057;
    color: #dedede;
    transform: scale(1.1);
  }
`;

export const LinkContainer = styled.div`
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
    font-size: 1.2rem;
    text-decoration: none;
  }
`;

export const YoutubeVideo = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;

  @media only screen and (min-device-width: 600px) {
    width: 600px;
    height: 350px;
  }
`;
