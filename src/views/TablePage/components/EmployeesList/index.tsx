import { IEmployees } from "../../../../types";
import { Employee } from "../Employee";
import { Container, Headers, ColumnLabel } from "./styles";

export const EmployeesList: React.FC<IEmployees> = ({ employees }) => {
  return (
    <Container>
      <Headers>
        <ColumnLabel>Name</ColumnLabel>
        <ColumnLabel>Email</ColumnLabel>
        <ColumnLabel>Position</ColumnLabel>
      </Headers>
      {employees?.map((employee, index) => (
        <Employee
          key={index}
          name={employee.name}
          email={employee.email}
          position={employee.position}
        />
      ))}
    </Container>
  );
};
