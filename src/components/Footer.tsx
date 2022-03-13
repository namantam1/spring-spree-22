import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <SiteLinks>
        <h2>Site Links</h2>
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
      <Copyright>
        <div className="small">Copyright &copy; Spring Spree 2022</div>
        <div>
          <Link to="privacy_policy">Privacy Policy</Link>
          {" | "}
          <Link to="terms-conditons">Terms &amp; Conditions</Link>
        </div>
      </Copyright>
    </Container>
  );
}

const Container = styled.footer`
  padding: 20px 50px;
  min-height: 200px;
  background-color: ${({ theme }) => theme.main};
  color: white;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const SiteLinks = styled.div`
  h1 {
  }

  div {
    max-width: 800px;
    display: flex;

    ul {
      margin-top: 10px;
      flex: 0 0 33%;
    }
  }

  a {
    text-decoration: none;
    color: white;
  }
`;

const Copyright = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  margin-top: 20px;

  border-top: 1px solid white;

  .small {
    color: grey;
    font-size: 0.8rem;
  }

  a {
    text-decoration: none;
    color: white;
  }
`;
