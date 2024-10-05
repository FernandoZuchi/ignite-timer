import { useState, useEffect } from "react";
import { CountDownContainer, Separator } from "./styles";
import { cy } from "date-fns/locale";


export function CountDown() {
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`;
    }
  }, [minutes, seconds, activeCycle]);

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;

    return (
        <CountDownContainer>
            <span>{minutes[0]}</span>
            <span>{minutes[1]}</span>
            <Separator>:</Separator>
            <span>{seconds[0]}</span>
            <span>{seconds[1]}</span>
        </CountDownContainer>
    )
}