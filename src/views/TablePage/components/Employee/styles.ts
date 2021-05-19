import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 15px 10px;
  width: 100%;
  border-top: 1px solid #bebebe;
`;

export const EmployeeField = styled.div`
  width: 200px;
  margin: 0 90px 0 5px;

  :last-child {
    margin: auto;
    text-align: center;
  }
`;
