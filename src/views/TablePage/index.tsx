import axios from "axios";
import { ReactElement, useEffect, useState } from "react";
import { Pagination } from "../../components/Pagination";
import { IEmployee } from "../../types";
import { AddEmployee } from "./components/AddEmployee";
import { EmployeesList } from "./components/EmployeesList";

import { Container, ListContainer } from "./styles";

function TablePage(): ReactElement {
  const [employees, setEmployees] = useState<IEmployee[]>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [personsPerPage] = useState<number>(5);
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);

  const handleClick = () => {
    setOpenAddModal(true);
  };

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
          <div onClick={() => handleClick()}>Button</div>
          <AddEmployee employees={employees} openModal={openAddModal} />
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
