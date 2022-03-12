import styled from "styled-components";
import { useTimer } from "../utils/hooks/timer";

import TimerBox from "./TimerBox";

export default function Timer() {
  const { days, hours, minutes, seconds } = useTimer();

  return (
    <Container>
      <TimerBox title={days} subTitle="days" />
      <TimerBox title={hours} subTitle="hours" />
      <TimerBox title={minutes} subTitle="minutes" />
      <TimerBox title={seconds} subTitle="seconds" />
    </Container>
  );
}

const Container = styled.div`
  max-width: 90%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
`;
