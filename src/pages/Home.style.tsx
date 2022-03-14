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
  height: 100%;
  background-color: #000000a1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  position: absolute;
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
  text-align: center;
  margin: 0;
  color: #d6d6d6;
  font-size: 1.5rem;
  font-weight: 400;
`;

export const Title = styled.h1`
  border-bottom: 2px solid;
  font-size: 2.5rem;
  color: white;
`;

export const AboutText = styled.p`
  text-align: justify;
  font-size: 1rem;
  color: white;
  max-width: 600px;
  margin-top: 10px;

  @media only screen and (min-device-width: 480px) {
    font-size: 1.5rem;
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
