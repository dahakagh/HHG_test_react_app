import styled from "styled-components";
import { NavLink as BaseNavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  padding: 5px;
  width: 100%;
  height: 60px;
  background: #d5ddfa;
`;

export const NavLink = styled(BaseNavLink)`
  font-size: 20px;
  margin: 20px;
  color: black;
  text-decoration: none;
`;
