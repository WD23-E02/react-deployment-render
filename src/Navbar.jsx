import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: ${({theme}) => theme.navbarBackground};
  padding: 10px 20px;
`;

const Logo = styled.h1`
  color: ${({theme}) => theme.navbarText};
  margin: 0;
`;
const Logo2 = styled(Logo)`
  background: blue;
  width: 400px;
  height: 10px;
`;
const myStyle = {color: "red", backgroundColor: "yellow", fontSize: "20px"};
function Navbar() {
  return (
    <Nav>
      <Logo bg={myStyle}>Deploy-Render</Logo>
    </Nav>
  );
}

export default Navbar;
