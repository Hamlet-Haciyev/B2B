import {
  TenderArticle,
  TenderArticleHead,
  TenderTitleCol,
  TenderInfo,
} from "./TenderStyled";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { Button } from "../";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
const Tender = ({
  id,
  title,
  description,
  price,
  category,
  location,
  datetime,
  view,
  time,
}) => {
  return (
    <TenderArticle>
      <TenderArticleHead>
        <Avatar size={64} icon={<UserOutlined />} />
        <TenderInfo>
          <TenderTitleCol>
            <h2>{title}</h2>
            <p>{description}</p>
          </TenderTitleCol>
          <ul>
            <li>{category}</li>
          </ul>
          <div className="price">
            <span className="price__currency">$</span>
            {price}
            <sub>min</sub>
          </div>
          <Button width={"111px"} height={"40px"}>
            <Link to={`/tender/${id}`}>Details</Link>
          </Button>
        </TenderInfo>
      </TenderArticleHead>
      <Footer location={location} datetime={datetime} view={view} time={time} />
    </TenderArticle>
  );
};

export default Tender;
