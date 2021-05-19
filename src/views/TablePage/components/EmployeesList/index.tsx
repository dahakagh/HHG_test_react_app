import { useEffect, useState } from "react";
import { IEmployees } from "../../../../types";
import { Employee } from "../Employee";

export const EmployeesList: React.FC<IEmployees> = ({ employees }) => {
  return (
    <div>
      {employees?.map((employee) => {
        return (
          <Employee
            key={employee.id}
            name={employee.name}
            email={employee.email}
            position={employee.position}
          />
        );
      })}
    </div>
  );
};
