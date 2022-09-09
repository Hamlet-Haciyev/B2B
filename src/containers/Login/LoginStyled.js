import styled from "styled-components";

export const LoginPage = styled.div`
  height: 100vh;
  background-color: #fff;
  .ant-row {
    height: 100%;
  }
`;
export const LoginRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 0 130px;
  .remember {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    .ant-checkbox-wrapper {
      font-family: "Regular";
      font-size: 14px;
      line-height: 17px;
      color: #75787b;
    }
    .ant-checkbox-checked .ant-checkbox-inner {
      background-color: #ffb500;
      border-color: #ffb500;
      &:hover,
      &:focus,
      &:active {
        border-color: #ffb500 !important;
      }
    }
  }
  .account {
    font-family: "Regular";
    font-size: 14px;
    line-height: 17px;
    color: #75787b;
    padding-top: 15px;
    a {
      color: #ffa300;
    }
  }
`;
export const FormHeader = styled.h1`
  font-family: "Semibold";
  font-size: 24px;
  line-height: 29px;
  color: #ffa300;
  padding-bottom: 22px;
`;
export const ForgotPassword = styled.span`
  font-family: "Semibold";
  font-size: 15px;
  line-height: 18px;
  a {
    color: #ffa300;
  }
`;
