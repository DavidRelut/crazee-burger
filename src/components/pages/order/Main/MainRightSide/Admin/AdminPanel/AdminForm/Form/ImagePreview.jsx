import React from "react";
import styled from "styled-components";
import { fadeIn } from "../../../../../../../../../theme/animations";
import { theme } from "../../../../../../../../../theme";

export default function ImagePreview({ imageSource, title }) {
  return (
    <ImagePreviewStyled>
      {imageSource ? (
        <img src={imageSource} alt={title} />
      ) : (
        <span className="text-without-image">Aucune Image 📷</span>
      )}
    </ImagePreviewStyled>
  );
}

const ImagePreviewStyled = styled.div`
  width: 220px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;

  .text-without-image {
    font-size: ${theme.fonts.size.P2};
    color: ${theme.colors.greySemiDark};
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border: 1px solid ${theme.colors.greyExtraLight};
    border-radius: ${theme.borderRadius.round};
  }

  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    padding-left: 22px;
    animation: ${fadeIn} 1s;
  }
`;
