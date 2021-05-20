import { useMemo } from "react";
import { NavContainer, PageNumber } from "./styles";

interface PaginationProps {
  personsPerPage: number;
  totalPersons: number;
  currentPage: number;
  handleClickOnPage: (pageNumber: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  personsPerPage,
  totalPersons,
  handleClickOnPage,
  currentPage,
}) => {
  const paginationNumbers = useMemo<number[]>(() => {
    const pageNumbers: number[] = [];
    for (let i = 1; i <= Math.ceil(totalPersons / personsPerPage); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }, [totalPersons, personsPerPage]);

  return (
    <NavContainer>
      {paginationNumbers.map((number) => (
        <PageNumber
          key={number}
          onClick={() => handleClickOnPage(number)}
          className={currentPage === number ? "active" : ""}
        >
          {number}
        </PageNumber>
      ))}
    </NavContainer>
  );
};
