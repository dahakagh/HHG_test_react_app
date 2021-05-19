import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: inherit;
  outline: 0;
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 500;
`;

export const StyledModal = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: auto;
  border-radius: 8px;
`;

export const Header = styled.div`
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
`;

export const HeaderText = styled.div`
  color: black;
  font-size: 24px;
  align-self: center;
`;

export const CloseButton = styled.button`
  font-size: 1.4rem;
  border: none;
  border-radius: 3px;
  margin-left: 0.5rem;
  background: none;
  :hover {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  padding: 10px;
  max-height: 30rem;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const Label = styled.label`
  display: block;
  font-size: 16px;
  margin: 20px 0;
`;

export const InputField = styled.input`
  display: block;
  height: 40px;
  width: 400px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;

  :focus {
    outline: none;
  }
`;

export const ConfirmButton = styled.button`
  text-align: center;
  font-size: 16px;
  width: 100px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 3px;
  cursor: pointer;
`;
