import React from "react";
import { SubInfoContainer } from "./SubInfoStyled";
import Icon from "../../../../helpers/icons";
const SubInfo = ({ iconName, text }) => {
  return (
    <SubInfoContainer>
      <Icon name={iconName} height={16} width={18}></Icon>
      <span>{text}</span>
    </SubInfoContainer>
  );
};

export default SubInfo;
