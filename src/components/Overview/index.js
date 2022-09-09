import React from "react";
import { OverviewWrapper } from "./OverviewStyled";
import dashboardImage from "../../assets/images/dashboard.png";

const Overview = () => {
  return (
    <OverviewWrapper>
      <div className="reg__leftside">
        <h2 className="head">B2B</h2>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          facilisis tellus congue, faucibus sapien eu, consectetur felis.
          Vivamus feugiat augue tincidunt dignissim maximus.
        </p>
        <div className="img__wrapper">
          <img src={dashboardImage} />
        </div>
      </div>
    </OverviewWrapper>
  );
};

export default Overview;
