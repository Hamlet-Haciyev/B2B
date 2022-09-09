import React from "react";
import { Button as AntButton } from "antd";
import { ButtonWrapper } from "./ButtonStyled";
const Button = ({ children, width, height, font, bgColor }) => {
  return (
    <ButtonWrapper width={width} height={height} font={font} bgColor={bgColor}>
      <AntButton>{children}</AntButton>
    </ButtonWrapper>
  );
};

export default Button;
