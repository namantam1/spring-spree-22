import styled from "styled-components";

const Button = styled.div`
  outline: none;
  border: 2px solid white;
  background-color: none;
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
  }

  &:active {
    transform: scale(1.02);
  }
`;

export default Button;
