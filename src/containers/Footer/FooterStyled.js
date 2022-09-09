import styled, { css } from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #fff;
  border-top: 1px solid #ededed;
`;
export const FooterInformation = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1240px;
  margin: 0 auto;
  padding: 62px 0;
  .b2b__pages {
    padding-left: 20px;
  }
  .b2b__contact {
    padding-left: 20px;
  }
  .about__box__text {
    max-width: 591px;
    font-family: "Regular";
    font-size: 14px;
    line-height: 24px;
    color: #63666a;
  }
`;
export const Head = styled.h2`
  font-family: "Bold";
  font-size: 18px;
  color: #231f20;
  margin-bottom: 30px;
`;
export const Body = styled.div`
  display: flex;
  .b2b__pages__lside {
    margin-right: 30px;
  }
`;
export const ListGroup = styled.ul`
  ${(props) =>
    props.isIcon &&
    css`
      display: flex;
      li {
        margin-right: 20px;
      }
    `}
  list-style-type: none;
`;
export const ListGroupItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-family: "Regular";
  font-size: 14px;
  line-height: 16px;
  color: #63666a;
  .contact__text {
    margin-left: 5px;
  }
`;
export const FooterCopyRight = styled.div`
  padding: 26px 0;
  border-top: 1px solid #ededed;
  p {
    font-family: "Regular";
    font-size: 16px;
    line-height: 19px;
    color: #63666a;
    text-align: center;
  }
`;
