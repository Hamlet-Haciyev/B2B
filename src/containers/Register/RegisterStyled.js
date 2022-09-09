import styled from "styled-components";

export const RegisterPage = styled.div`
  height: 100vh;
  .ant-row {
    height: 100%;
  }
  .reg__rightside {
    background-color: #fff;
    height: 100%;
    padding: 80px 130px 50px;
    .head {
      font-family: "Semibold";
      font-size: 24px;
      line-height: 29px;
      display: flex;
      align-items: center;
      color: #ffa300;
      margin-bottom: 20px;
    }
    .slide-2 {
      button {
        margin-top: 15px;
      }
    }
  }
  span {
    font-family: "Regular";
    font-size: 14px;
    line-height: 17px;
    color: #75787b;
    a {
      color: #ffb500;
    }
  }
  .slick-dots {
    bottom: -50px;
    .slick-active {
      button {
        background-color: #ffb500 !important;
      }
    }
    li {
      width: 10px !important;
      height: 10px !important;
      border-radius: 50%;
      margin: 0 10px;
      button {
        display: block;
        background-color: #d0d0ce;
        border-radius: 50%;
        height: 100%;
      }
    }
  }
`;
