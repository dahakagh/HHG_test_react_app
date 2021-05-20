import ReactDOM from "react-dom";

import {
  Backdrop,
  CloseButton,
  Content,
  Header,
  HeaderText,
  StyledModal,
  Wrapper,
  InputField,
  Label,
  ConfirmButton,
} from "./styles";
import { IEmployee, IEmployees } from "../../../../types";
import React, { useState } from "react";

interface ModalProps extends IEmployees {
  isShown: boolean;
  personsPerPage: number;
  hide: () => void;
  handleSubmit: (state: IEmployee, e: React.SyntheticEvent) => void;
}

interface Event {
  target: HTMLInputElement & EventTarget;
}

export const AddEmployeeModal: React.FC<ModalProps> = ({
  isShown,
  hide,
  handleSubmit,
}) => {
  const [state, setState] = useState<IEmployee>({
    name: "",
    email: "",
    position: "",
  });

  const handleConfirm = (state: IEmployee, e: React.SyntheticEvent) => {
    handleSubmit(state, e);
  };

  const handleChange = (e: Event) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const addNewPersonModal = (
    <>
      <Backdrop />
      <Wrapper>
        <StyledModal>
          <Header>
            <HeaderText>Add new person</HeaderText>
            <CloseButton onClick={hide}>X</CloseButton>
          </Header>
          <Content>
            <Label htmlFor="name">Name</Label>
            <InputField
              type="text"
              name="name"
              value={state.name}
              onChange={handleChange}
              required
            />
            <Label htmlFor="email"> Email </Label>
            <InputField
              type="text"
              name="email"
              value={state.email}
              onChange={handleChange}
              required
            />
            <Label htmlFor="position"> Positon</Label>
            <InputField
              type="text"
              name="position"
              value={state.position}
              onChange={handleChange}
              required
            />
            <ConfirmButton onClick={(e) => handleConfirm(state, e)}>
              Add
            </ConfirmButton>
          </Content>
        </StyledModal>
      </Wrapper>
    </>
  );

  return isShown
    ? ReactDOM.createPortal(addNewPersonModal, document.body)
    : null;
};
