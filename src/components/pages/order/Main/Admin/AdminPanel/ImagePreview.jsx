import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function ImagePreview({ image, title }) {
  const checkUrlRegex = /^(http|https):\/\/[^"]+$/;

  return (
    <ImagePreviewStyled>
      {checkUrlRegex.test(image) ? (
        <img src={image} alt={title} />
      ) : (
        <span className="text-without-image">Aucune image 📷</span>
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
    width: 100px;
    height: 100px;
    object-fit: fill;
    padding-left: 22px;
  }
`;
