import styled from "styled-components";

export const TenderArticle = styled.article`
  height: 159px;
  background: #ffffff;
  border-radius: 12px;
  margin-bottom: 68px;
  padding: 26px 30px;
  .ant-avatar {
    margin-right: 10px;
  }
`;

export const TenderArticleHead = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 2px solid #ededed;
  h2 {
    font-family: "Semibold";
    font-size: 16px;
    letter-spacing: -0.019em;
    color: rgba(0, 0, 0, 0.8);
    margin-bottom: 0;
  }
  p {
    font-family: "Regular";
    font-size: 15px;
    letter-spacing: -0.019em;
    color: rgba(0, 0, 0, 0.8);
    margin-bottom: 0;
  }
  ul {
    padding: 0;
    list-style-type: none;
    margin: 0;
    li {
      font-family: "Regular";
      font-size: 16px;
      line-height: 150%;
      color: #63666a;
    }
  }
`;
export const TenderInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  .price {
    display: flex;
    align-items: center;
    color: #63666a;
    font-size: 32px;
    sub {
      font-size: 18px;
      font-family: "Regular";
      color: #ffa300;
    }
  }
  .price__currency {
    font-family: "Regular";
    color: #ffa300;
  }
`;
export const TenderTitleCol = styled.div`
  width: 581px;
`;
