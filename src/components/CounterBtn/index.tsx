import React from "react";
import { ButtonContainer, Label } from "./styles";

interface CounterBtn {
  label: string;
  onClick: (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const CounterBtn: React.FC<CounterBtn> = ({ label, onClick }) => {
  return (
    <ButtonContainer onClick={onClick}>
      <Label>{label}</Label>
    </ButtonContainer>
  );
};
