import { Container, EmployeeField } from "./styles";

interface Props {
  name: string;
  email: string;
  position: string;
}

export const Employee: React.FC<Props> = ({ name, email, position }) => {
  return (
    <Container>
      <EmployeeField>{name}</EmployeeField>
      <EmployeeField>{email}</EmployeeField>
      <EmployeeField>{position}</EmployeeField>
    </Container>
  );
};
