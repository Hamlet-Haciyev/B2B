import {
  FooterContainer,
  FooterInformation,
  FooterCopyRight,
  Head,
  Body,
  ListGroup,
  ListGroupItem,
} from "./FooterStyled";
import { Row, Col } from "antd";
import Icon from "../../helpers/icons";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterInformation>
        <Row>
          <Col span={16}>
            <div className="about__box">
              <h2 className="about__box__logo">
                <Icon name={"footerLogo"} height="25" width={"67"}></Icon>
              </h2>
              <p className="about__box__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                condimentum, felis vitae rhoncus ultricies, tortor libero
                aliquam nisi, at fringilla neque dolor in nibh. Nam non tortor
                leo. Pellentesque feugiat blandit nisl ac vulputate. Nunc
                accumsan risus nec libero volutpat, ut consectetur risus
                finibus. Nunc quis blandit neque, ut cursus odio.
              </p>
              <ListGroup isIcon>
                <ListGroupItem>
                  <Icon name={"facebook"} height="15" width={"16"}></Icon>
                </ListGroupItem>
                <ListGroupItem>
                  <Icon name={"twitter"} height="15" width={"16"}></Icon>
                </ListGroupItem>
                <ListGroupItem>
                  <Icon name={"linkedin"} height="16" width={"16"}></Icon>
                </ListGroupItem>
                <ListGroupItem>
                  <Icon name={"instagram"} height="16" width={"16"}></Icon>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col span={4}>
            <div className="b2b__pages">
              <Head>Pages</Head>
              <Body>
                <div className="b2b__pages__lside">
                  <ListGroup>
                    <ListGroupItem>Home</ListGroupItem>
                    <ListGroupItem>About</ListGroupItem>
                    <ListGroupItem>Features</ListGroupItem>
                  </ListGroup>
                </div>
                <div className="b2b__pages__rside">
                  <ListGroup>
                    <ListGroupItem>Pricing</ListGroupItem>
                    <ListGroupItem>Contact</ListGroupItem>
                    <ListGroupItem>F.A.Q</ListGroupItem>
                  </ListGroup>
                </div>
              </Body>
            </div>
          </Col>
          <Col span={4}>
            <div className="b2b__contact">
              <Head>Contact</Head>
              <Body>
                <ListGroup>
                  <ListGroupItem>
                    <Icon name={"telephone"} width="20" height={"20"}></Icon>
                    <span className="contact__text">132</span>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Icon name={"location"} width="20" height={"20"}></Icon>
                    <span className="contact__text">Location</span>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Icon name={"email"} width="20" height={"20"}></Icon>
                    <span className="contact__text">Example@mail.com</span>
                  </ListGroupItem>
                </ListGroup>
              </Body>
            </div>
          </Col>
        </Row>
      </FooterInformation>
      <FooterCopyRight>
        <p>© 2022 B2B | Powered by Expressbank ASC </p>
      </FooterCopyRight>
    </FooterContainer>
  );
};

export default Footer;
