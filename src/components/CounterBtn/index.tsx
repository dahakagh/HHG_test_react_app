import React from "react";
import { ButtonContainer, Label } from "./styles";

interface ICounterButton {
  label: string;
  onClick: (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const CounterButton: React.FC<ICounterButton> = ({ label, onClick }) => {
  return (
    <ButtonContainer onClick={onClick}>
      <Label>{label}</Label>
    </ButtonContainer>
  );
};
