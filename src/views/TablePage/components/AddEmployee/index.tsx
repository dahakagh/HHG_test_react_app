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
import axios from "axios";

interface ModalProps extends IEmployees {
  isShown: boolean;
  personsPerPage: number;
  hide: () => void;
  setEmployees: (employees: IEmployee[]) => void;
  setCurrentPage: (pageNumber: number) => void;
}

interface Event {
  target: HTMLInputElement & EventTarget;
}

export const AddEmployeeModal: React.FC<ModalProps> = ({
  isShown,
  hide,
  employees,
  setEmployees,
  setCurrentPage,
  personsPerPage,
}) => {
  const [state, setState] = useState<IEmployee>({
    name: "",
    email: "",
    position: "",
  });

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { name, email, position } = state;
    const newPerson = { name, email, position };

    await axios
      .post("https://60a3d44f7c6e8b0017e2800d.mockapi.io/employees", newPerson)
      .then((res) => {
        setEmployees([...employees, newPerson]);
        setCurrentPage(Math.ceil(employees.length / personsPerPage));
        hide();
      })
      .catch((err) => console.log(err));
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
            <ConfirmButton onClick={handleSubmit}>Add</ConfirmButton>
          </Content>
        </StyledModal>
      </Wrapper>
    </>
  );

  return isShown
    ? ReactDOM.createPortal(addNewPersonModal, document.body)
    : null;
};
