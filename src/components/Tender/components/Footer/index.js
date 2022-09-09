import React from "react";
import { TenderArticleFooter, TenderArticleFooterSide } from "./FooterStyled";
import SubInfo from "../SubInfo";
const Footer = ({ location, datetime, view, time }) => {
  return (
    <TenderArticleFooter>
      <TenderArticleFooterSide>
        <SubInfo iconName={"location"} text={location} />
        <SubInfo iconName={"datetime"} text={datetime} />
      </TenderArticleFooterSide>
      <TenderArticleFooterSide>
        <SubInfo iconName={"eyeClose"} text={view} />
        <SubInfo iconName={"datetime"} text={time} />
      </TenderArticleFooterSide>
    </TenderArticleFooter>
  );
};

export default Footer;
