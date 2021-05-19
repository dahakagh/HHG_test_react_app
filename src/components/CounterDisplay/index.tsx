import { Display } from "./styles";

interface CounterDisplayProps {
  count: number;
}

export const CounterDisplay: React.FC<CounterDisplayProps> = ({ count }) => {
  return <Display>{count}</Display>;
};
