import axios from "axios";
import React, { ReactElement, useEffect, useState } from "react";
import { Pagination } from "../../components/Pagination";
import { useModal } from "../../hooks/useModal";
import { IEmployee } from "../../types";
import { AddEmployeeModal } from "./components/AddEmployee";
import { EmployeesList } from "./components/EmployeesList";

import { Container, ListContainer, NewPersonButton } from "./styles";

function TablePage(): ReactElement {
  const [employees, setEmployees] = useState<IEmployee[]>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [personsPerPage] = useState<number>(5);
  const { isShown, toggle } = useModal();

  useEffect(() => {
    const fetchEmployees = async () => {
      const res = await axios.get(
        `https://60a3d44f7c6e8b0017e2800d.mockapi.io/employees?page=${1}`
      );
      setEmployees(res.data);
    };

    fetchEmployees();
  }, []);

  const handleSubmit = async (state: IEmployee, e: React.SyntheticEvent) => {
    e.preventDefault();
    const { name, email, position } = state;
    const newPerson = { name, email, position };

    await axios
      .post("https://60a3d44f7c6e8b0017e2800d.mockapi.io/employees", newPerson)
      .then(() => {
        if (employees) {
          setEmployees([...employees, newPerson]);
          setCurrentPage(Math.ceil(employees.length / personsPerPage));
          toggle();
        }
      })
      .catch((err) => console.log(err));
  };

  const indexOfLastPerson = currentPage * personsPerPage;
  const indexOfFirstPerson = indexOfLastPerson - personsPerPage;
  const currentPersons = employees?.slice(
    indexOfFirstPerson,
    indexOfLastPerson
  );

  const handleClickOnPage = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Container>
      {currentPersons && employees ? (
        <ListContainer>
          <EmployeesList employees={currentPersons} />
          <NewPersonButton onClick={toggle}>+ New</NewPersonButton>
          <AddEmployeeModal
            isShown={isShown}
            hide={toggle}
            employees={employees}
            personsPerPage={personsPerPage}
            handleSubmit={handleSubmit}
          />
          <Pagination
            personsPerPage={personsPerPage}
            totalPersons={employees.length}
            handleClickOnPage={handleClickOnPage}
            currentPage={currentPage}
          />
        </ListContainer>
      ) : null}
    </Container>
  );
}

export default TablePage;
