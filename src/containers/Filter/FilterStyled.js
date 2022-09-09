import styled from "styled-components";

export const FilterSelect = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
export const FilterContainer = styled.div`
  padding-top: 80px;

  .ant-tabs {
    .ant-tabs-nav {
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
export const TabsContainer = styled.div`
  max-width: 400px;
`;
