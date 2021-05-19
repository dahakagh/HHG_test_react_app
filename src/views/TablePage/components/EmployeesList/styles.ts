import styled from "styled-components";

export const Container = styled.div`
  display: block;
  width: 100%;
`;

export const Headers = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  border-top: 1px solid #bebebe;
`;

export const ColumnLabel = styled.div`
  width: 200px;
  margin: 0 50px 0 10px;
  color: black;
  font-weight: 500;
  text-align: center;

  :first-child {
    text-align: left;
  }

  :last-child {
    text-align: right;
  }
`;
