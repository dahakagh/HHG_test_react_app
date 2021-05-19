import { NavContainer, PageNumber } from "./styles";

interface PaginationProps {
  personsPerPage: number;
  totalPersons: number;
  paginate: (event: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  personsPerPage,
  totalPersons,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPersons / personsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <NavContainer>
      {pageNumbers.map((number) => (
        <PageNumber key={number} onClick={() => paginate(number)}>
          {number}
        </PageNumber>
      ))}
    </NavContainer>
  );
};
