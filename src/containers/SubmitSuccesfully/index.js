import React from "react";
import { Link } from "react-router-dom";
import { SubmitSuccessContainer, ButtonSuccess } from "./SubmitSuccessStyled";

const SubmitSuccessLayout = () => {
  return (
    <SubmitSuccessContainer>
      <h2>Your application submitted successfully</h2>
      <p>We will get back to you! Please, check your email frequently.</p>
      <ButtonSuccess>
        <Link to="/">Go back Home</Link>
      </ButtonSuccess>
    </SubmitSuccessContainer>
  );
};

export default SubmitSuccessLayout;
