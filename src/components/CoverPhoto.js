import React from "react";
import styled from "styled-components";
import TsubasaCoverGif from "../assets/captain-tsubasa.gif";

const ImageContainer = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: auto;
    border-radius: 20px; /* adjust this to achieve desired roundness */
  }

  @media (max-width: 64em) {
    min-width: 40vh;
  }
`;

const CoverPhoto = () => {
  return (
    <ImageContainer>
      <img src={TsubasaCoverGif} alt="Tsubasa Cover" />
    </ImageContainer>
  );
};

export default CoverPhoto;
