import { SearchWrapper,SearchInput } from "./SearchStyled";
import { Button } from "../";
import Icon from "../../helpers/icons";
const Search = () => {
  return (
    <SearchWrapper>
      <SearchInput type="text" placeholder="Search Here..." />
      <Button width={"163px"} height={"58px"} bgColor={"#ffa300"}><Icon name={"search"} height="18" width={"18"}></Icon>Search</Button>
    </SearchWrapper>
  );
};

export default Search;