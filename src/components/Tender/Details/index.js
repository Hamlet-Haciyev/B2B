import React from "react";
import {
  DetailWrapper,
  DetailContainer,
  CompanyName,
  TenderTitle,
} from "./DetailsStyled";
const Details = () => {
  return (
    <DetailWrapper>
      <DetailContainer>
        <CompanyName>
          <h2>Company Name</h2>
          <p>Expressbank</p>
        </CompanyName>
        <TenderTitle>
          <h2>Title</h2>
          <p>
            Assist in the planting and growing of trees, bushes, flowers, and
            grass. Use fertilizer and pesticides. Perform general outdoor
            maintenance tasks, like weeding and clearing walkways of debris.
            Assist in the construction, repair, and maintenance of various
            outdoor landscape structures.
          </p>
        </TenderTitle>
      </DetailContainer>
    </DetailWrapper>
  );
};

export default Details;
