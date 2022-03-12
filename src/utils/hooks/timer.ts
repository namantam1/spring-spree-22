import { useEffect, useState } from "react";

export function useTimer(from = "Apr 1, 2022 15:37:25") {
  const [time, setTime] = useState(0);

  useEffect(() => {
    // Set the date we're counting down to
    const countDownDate = new Date(from).getTime();
    // immediately update first
    setTime(countDownDate - Date.now());

    // Now Update the count down every 1 second
    const timer = setInterval(function () {
      // Find the distance between now and the count down date
      setTime(countDownDate - Date.now());
    }, 1000);

    // remove timer on unload
    return () => {
      clearInterval(timer);
    };
  }, []);

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(time / (1000 * 60 * 60 * 24)),
    hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
    seconds = Math.floor((time % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}
