import styled from "styled-components";

export const SubmitSuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-family: "Semibold";
    font-size: 22px;
    line-height: 29px;
    display: flex;
    align-items: center;
    color: #ffa300;
    text-align:center;
  }
  p {
    display: flex;
    align-items: center;
    text-align: center;
    font-family: "Regular";
    font-size: 16px;
    line-height: 19px;
    color: #63666a;
    margin-bottom: 20px;
  }
`;
export const ButtonSuccess = styled.button`
  font-family: "Semibold";
  width: 177px;
  height: 37px;
  font-size: 14px;
  border: 1px solid #ffb500;
  border-radius: 8px;
  line-height: 17px;
  background-color: transparent;
  cursor: pointer;
  overflow: hidden;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: #ffb500;
  }
`;
