import { BannerContainer, BannerHead, BannerBody } from "./BannerStyled";
const Banner = () => {
  return (
    <BannerContainer>
      <BannerHead>Lorem ipsum sit amet.</BannerHead>
      <BannerBody>
        Fusce mattis arcu quis nunc laoreet, vitae laoreet libero porttitor.
        Nunc viverra luctus sem vitae semper. Proin vel tincidunt mauris.
      </BannerBody>
    </BannerContainer>
  );
};

export default Banner;
