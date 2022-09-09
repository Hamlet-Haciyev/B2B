import styled from "styled-components";

export const ButtonWrapper = styled.div`
  width: ${(props) => props.width && props.width};
  height: ${(props) => props.height && props.height};
  .ant-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${(props) => props.font && props.font};
    border: 1px solid transparent;
    background-color: ${(props) => (props.bgColor ? props.bgColor : "#ffb500")};
    color: #fff;
    border-radius: 8px;
    width: ${(props) => props.width && props.width};
    height: ${(props) => props.height && props.height};
  }
`;
