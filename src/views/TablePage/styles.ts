import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  height: 600px;
  margin: -300px 0 0 -40%;
  border: 1px solid #dedede;
`;

export const ListContainer = styled.div`
  display: block;
  width: 800px;
`;

export const NewPersonButton = styled.div`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  cursor: pointer;
  color: #707070;
  border-top: 1px solid #bebebe;

  :hover {
    color: black;
  }
`;
