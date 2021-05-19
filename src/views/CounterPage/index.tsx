import { ReactElement, useState } from "react";
import { useHistory } from "react-router";
import { CounterBtn } from "../../components/CounterBtn";
import { CounterDisplay } from "../../components/CounterDisplay";

import { ButtonContainer, Container } from "./styles";

function CounterPage(): ReactElement {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const resetClick = () => {
    setCount(0);
  };

  return (
    <Container>
      <CounterDisplay count={count} />
      <ButtonContainer>
        <CounterBtn label={"Add"} onClick={handleClick} />
        <CounterBtn label={"Reset"} onClick={resetClick} />
      </ButtonContainer>
    </Container>
  );
}

export default CounterPage;
