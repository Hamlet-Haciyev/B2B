import styled, { css } from "styled-components";

export const SelectContainer = styled.div`
  ${(props) =>
    props.gap &&
    css`
      margin: 0 5px;
      &:first-of-type {
        margin-left: 0;
      }
    `}
  .ant-select {
    width: ${(props) => props.width && props.width};
    background-color: #f9f9f9;
    .ant-select-selector {
      border: none;
      height: 40px;
      ${(props) =>
        props.borderRadius &&
        css`
          border-radius: 8px;
        `}
      .ant-select-selection-item {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

