import styled from "styled-components";
export const FormItemStyled = styled.div`
  .ant-input,
  .ant-input-password {
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 9px 24px;
    border: 0.4px solid #ededed;
    &:focus {
      border: 0.4px solid #ffa300;
      box-shadow: none;
    }
  }
  .telephone {
    position: relative;
    &::before {
      content: "+994";
      position: absolute;
      left: 1px;
      top: 1px;
      z-index: 100;
      width: 54px;
      height: 40px;
      background: #ededed;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      padding: 9px 11px;
      color: #9e9e9e;
    }
  }
  textarea.ant-input {
    padding: 20px 24px 117px;
  }
  .ant-form-item {
    margin-bottom: 10px;
  }
  .ant-form-item-row {
    flex-direction: column;
  }
  .ant-form-item-label {
    text-align: left;
    label {
      color: #63666a;
    }
  }
  .ant-form-item-required {
    &::before {
      display: none !important;
    }
    &::after {
      display: inline-block;
      margin-right: 4px;
      color: #ff4d4f;
      font-size: 14px;
      font-family: SimSun, sans-serif;
      line-height: 1;
      content: "*";
    }
  }
  .ant-input-suffix svg {
    color: #ffa300;
  }
`;
