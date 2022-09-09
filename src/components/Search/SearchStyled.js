import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  background: #ffffff;
  border: 1px solid #b1b3b3;
  border-radius: 12px;
  height: 58px;
  position: relative;
  overflow:hidden;
  margin: 30px 0;
  button{
    position: absolute;
    top: 0;
    right: 0;
    border-radius:0px !important;
  }
`;
export const SearchInput = styled.input`
  outline: none;
  border:none;
  padding-left: 23px;
  flex: 1 1 80%;
`;
