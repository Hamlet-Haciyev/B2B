import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 110px 0 165px 0;
`;
export const AuthBox = styled.div`
  background: #ffffff;
  border: 0.5px solid #ededed;
  border-radius: 4px;
  width: 650px;
  padding: 66px 120px;
  .ant-tabs {
    padding-bottom: 20px;
    .ant-tabs-nav {
      margin-bottom: 65px;
      .ant-tabs-nav-wrap {
        flex: 1;
        .ant-tabs-nav-list {
          flex: 1 1 0%;
          justify-content: center;
          .ant-tabs-tab {
            font-size: 20px;
            flex-basis: 50%;
            justify-content: center;
            margin: 0;
            .ant-tabs-tab-btn {
              color: #63666a;
            }
          }
          .ant-tabs-tab-active {
            .ant-tabs-tab-btn {
              color: #ffa300 !important;
            }
          }
          .ant-tabs-ink-bar-animated {
            background: #ffa300;
          }
        }
      }
      &::before {
        border-bottom: 3px solid #d0d0ce;
      }
    }
  }
`;
