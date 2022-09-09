import styled from "styled-components";

export const NavbarContainer = styled.nav`
  height: 65px;
  border-bottom: 1px solid #ededed;
`;
export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1240px;
  margin: 0 auto;
  height: 100%;
  justify-content: space-between;
`;
export const NavbarLeftSide = styled.div``;
export const NavbarRightSide = styled.div`
  display: flex;
`;
export const ListGroup = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  margin-bottom: 0;
`;
export const ListGroupItem = styled.li`
  margin: 0 20px;
  a {
    text-decoration: none;
    color: #63666a;
    font-family: "Regular" ;
    font-size:16px;
  }
`;
