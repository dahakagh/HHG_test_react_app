import axios from "axios";
import { ReactElement, useEffect, useState } from "react";
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
        "https://60a3d44f7c6e8b0017e2800d.mockapi.io/employees"
      );
      setEmployees(res.data);
    };

    fetchEmployees();
  }, []);

  const indexOfLastPerson = currentPage * personsPerPage;
  const indexOfFirstPerson = indexOfLastPerson - personsPerPage;
  const currentPersons = employees?.slice(
    indexOfFirstPerson,
    indexOfLastPerson
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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
            setEmployees={setEmployees}
            setCurrentPage={setCurrentPage}
            personsPerPage={personsPerPage}
          />
          <Pagination
            personsPerPage={personsPerPage}
            totalPersons={employees.length}
            paginate={paginate}
          />
        </ListContainer>
      ) : null}
    </Container>
  );
}

export default TablePage;
