import { ReactElement } from "react";

import { Container, NavLink } from "./styles";

function Header(): ReactElement {
  return (
    <Container>
      <NavLink to="/">Counter Page</NavLink>
      <NavLink to="/table-page">Table Page</NavLink>
    </Container>
  );
}

export default Header;
