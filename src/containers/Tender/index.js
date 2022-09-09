import { TenderSection, TenderSectionHead } from "./TenderStyled";
import { Tender } from "../../components";
import Banner from "../Banner";
import Filter from "../Filter";
const TenderContainer = () => {
  return (
    <TenderSection>
      <Banner />
      <Filter />
      <TenderSectionHead>Results</TenderSectionHead>
      <Tender
        id={1}
        title={"Tender title"}
        description={
          "Decription here - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim turpis tincidunt egestas tempus."
        }
        price={"123"}
        category={"Category"}
        location={"Baku"}
        datetime={"until 01.01.2023"}
        view={"210"}
        time={"2 days ago"}
      />
      <Tender
        id={2}
        title={"Tender title"}
        description={
          "Decription here - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim turpis tincidunt egestas tempus."
        }
        price={"123"}
        category={"Category"}
        location={"Baku"}
        datetime={"until 01.01.2023"}
        view={"210"}
        time={"2 days ago"}
      />
      <Tender
        id={3}
        title={"Tender title"}
        description={
          "Decription here - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim turpis tincidunt egestas tempus."
        }
        price={"123"}
        category={"Category"}
        location={"Baku"}
        datetime={"until 01.01.2023"}
        view={"210"}
        time={"2 days ago"}
      />
      <Tender
        id={4}
        title={"Tender title"}
        description={
          "Decription here - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim turpis tincidunt egestas tempus."
        }
        price={"123"}
        category={"Category"}
        location={"Baku"}
        datetime={"until 01.01.2023"}
        view={"210"}
        time={"2 days ago"}
      />
    </TenderSection>
  );
};

export default TenderContainer;
