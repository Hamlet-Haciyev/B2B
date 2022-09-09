import {
  NavbarContainer,
  NavbarWrapper,
  NavbarLeftSide,
  NavbarRightSide,
  ListGroup,
  ListGroupItem,
} from "./NavbarStyled";
import { Link } from "react-router-dom";
import { Button, Select } from "../";
import Icon from "../../helpers/icons";
const Navbar = () => {
  const { Option } = Select;
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <NavbarLeftSide>
          <Link to={"/"}>
            <Icon name={"logo"} height="23" width="58"></Icon>
          </Link>
        </NavbarLeftSide>
        <NavbarRightSide>
          <ListGroup>
            <ListGroupItem>
              <Link to={"/"}>Home</Link>
            </ListGroupItem>
            <ListGroupItem>
              <Link to="/about">About</Link>
            </ListGroupItem>
            <ListGroupItem>
              <Link to="/dashboard">Dashboard</Link>
            </ListGroupItem>
          </ListGroup>
          <Button bgColor={"#ffb500"}>
            <Link to={"/reg"}>Register</Link>
          </Button>
          <Select width={"61px"} defaultValue="AZ">
            <Option value="AZ">AZ</Option>
            <Option value="EN">EN</Option>
            <Option value="RU">RU</Option>
          </Select>
        </NavbarRightSide>
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
