import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function ImagePreview({ image, title }) {
  const regex = /^(http|https):\/\/[^"]+$/;

  return (
    <ImagePreviewStyled>
      {regex.test(image) ? (
        <img src={image} alt={title} className="" />
      ) : (
        <span className="txt-without-image">Aucune image 📷</span>
      )}
    </ImagePreviewStyled>
  );
}

const ImagePreviewStyled = styled.div`
  width: 220px;
  height: 120px;

  .txt-without-image {
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
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;
