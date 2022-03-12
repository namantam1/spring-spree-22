import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <SiteLinks>
        <h1>Site Links</h1>
        <div>
          <ul>
            <li>
              <Link to="#">Contact Us</Link>
            </li>
            <li>
              <Link to="#">About Us</Link>
            </li>
            <li>
              <Link to="#">Directions</Link>
            </li>
            <li>
              <Link to="#">Blog</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="#">Promotions</Link>
            </li>
            <li>
              <Link to="#">Partners</Link>
            </li>
            <li>
              <Link to="#">FAQs</Link>
            </li>
            <li>
              <Link to="#">Career</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="#">Events</Link>
            </li>
            <li>
              <Link to="#">Calender</Link>
            </li>
            <li>
              <Link to="#">Media</Link>
            </li>
            <li>
              <Link to="#">Sponsers</Link>
            </li>
          </ul>
        </div>
      </SiteLinks>
      <hr />
    </Container>
  );
}

const Container = styled.footer`
  padding: 20px 50px;
  height: 200px;
  background-color: ${({ theme }) => theme.main};
  color: white;
`;

const SiteLinks = styled.div`
  h1 {
  }

  div {
    max-width: 800px;
    display: flex;

    ul {
      flex: 0 0 33%;
    }
  }

  a {
    text-decoration: none;
    color: white;
  }
`;
