import styled from "styled-components";

export default function TimerBox({
  title,
  subTitle,
}: {
  title: string | number;
  subTitle: string;
}) {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
}

const Container = styled.div`
  width: 90px;
  height: 90px;
  margin: 0 27px 30px;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const SubTitle = styled.div`
  color: #555;
  text-transform: capitalize;
`;
