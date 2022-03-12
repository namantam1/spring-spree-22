import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
  return (
    <Nav>
      <Left>
        <NavLink to="/">
          <img height={40} src="/assets/images/logo.png" alt="logo" />
        </NavLink>
      </Left>
      <Right>
        <li>
          <NavLink to="#">About</NavLink>
        </li>
        <li>
          <NavLink to="#">Contact us</NavLink>
        </li>
      </Right>
    </Nav>
  );
}

const Nav = styled.div`
  padding: 0 10px;
  display: flex;
  background-color: ${({ theme }) => theme.main};

  ul {
    display: flex;
    list-style: none;
    align-items: center;

    li {
      padding: 20px 10px;
    }
  }
`;

const Left = styled.ul``;

const Right = styled.ul`
  margin-left: auto;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
`;
