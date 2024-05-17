import { useEffect, useState } from "react";
import Count from "./Count";
import ButtonContainer from "./ButtonContainer";
import ResetButton from "./ResetButton";
import Title from "./Title";
import { CountButton } from "./CountButton";

export function Card() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        setCount((prev) => prev + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="card">
      <Title />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButton type="minus" setCount={setCount} />
        <CountButton type="plus" setCount={setCount} />
      </ButtonContainer>
    </div>
  );
}
