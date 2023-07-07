import styled, { css } from "styled-components";
import { theme } from "../../theme";
import Button from "./Button";
import { TiDelete } from "react-icons/ti";
import { fadeInFromTop, fadeInFrontRight } from "../../theme/animations";

export default function Card({
  id,
  title,
  imageSource,
  price,
  hasDeleteButton,
  onDelete,
  onAdd,
  onClick,
  isHoverable,
  isSelected,
  overlapImageSource,
  isOverlapImageVisible,
}) {
  return (
    <CardStyled
      onClick={onClick}
      isHoverable={isHoverable}
      isSelected={isSelected}
    >
      <div className="card">
        {hasDeleteButton && (
          <TiDelete className="delete-button" onClick={onDelete} />
        )}

        <div className="image">
          {isOverlapImageVisible && (
            <div className="overlap">
              <div className="transparent-layer"></div>
              <img
                className="overlap-image"
                src={overlapImageSource}
                alt="overlap"
              />
            </div>
          )}
          <img src={imageSource} alt={title} />
        </div>

        <div className="text-info">
          <div className="title">{title}</div>
          <div className="description">
            <div className="left-description">{price}</div>
            <div className="right-description">
              <Button
                className="primary-button"
                label={"Ajouter"}
                onClick={onAdd}
              />
            </div>
          </div>
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  ${({ isHoverable }) => isHoverable && hoverableStyle}
  border-radius: ${theme.borderRadius.extraRound};
  height: 330px;

  .card {
    position: relative;
    background: ${theme.colors.white};
    width: 200px;
    height: 300px;
    display: grid;
    grid-template-rows: 65% 1fr;
    padding: 20px;
    padding-bottom: 10px;
    border-radius: ${theme.borderRadius.extraRound};
    transform: scale(1);
    transition: all 0.1s ease-out 0s;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);

    .delete-button {
      position: absolute;
      top: 15px;
      right: 15px;
      width: 30px;
      height: 30px;
      cursor: pointer;
      color: ${theme.colors.primary};

      &:hover {
        color: ${theme.colors.danger};
      }
      :active {
        color: ${theme.colors.primary};
      }

      animation: ${fadeInFrontRight} ${theme.animations.speed.medium} ease-out;
    }

    .image {
      width: 100%;
      height: auto;
      margin-top: 30px;
      margin-bottom: 20px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      .overlap {
        .overlap-image {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80%;
          height: 100%;
          z-index: 1;
          animation: ${fadeInFromTop} 500ms;
          border-radius: ${theme.borderRadius.extraRound};
        }

        .transparent-layer {
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 70%;
          background: snow;
          z-index: 1;
          border-radius: ${theme.borderRadius.extraRound};
        }
      }
    }

    .text-info {
      display: grid;
      grid-template-rows: 30% 70%;
      padding: 5px;

      .title {
        margin: auto 0;
        font-size: ${theme.fonts.size.P4};
        position: relative;
        bottom: 10px;
        font-weight: ${theme.fonts.weights.bold};
        color: ${theme.colors.dark};
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        text-overflow: ellipsis;
        font-family: "Amatic SC", cursive;
      }

      .description {
        display: grid;
        grid-template-columns: 1fr 1fr;

        .left-description {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-weight: ${theme.fonts.weights.regular};
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: ${theme.colors.primary};
        }

        .right-description {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          font-size: ${theme.fonts.size.P1};

          .primary-button {
            font-size: ${theme.fonts.size.XS};
            cursor: pointer;
            padding: 12px;
          }
        }
      }
    }

    ${({ isHoverable, isSelected }) =>
      isHoverable && isSelected && selectedStyle}
  }
`;

const hoverableStyle = css`
  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-out 0s;
    box-shadow: ${theme.shadows.orangeHighlight};
    cursor: pointer;
  }
`;

const selectedStyle = css`
  background: ${theme.colors.primary};

  .delete-button {
    color: ${theme.colors.white};
    &:hover {
      color: ${theme.colors.danger};
    }
    :active {
      color: ${theme.colors.white};
    }
  }
  .primary-button {
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
      border: 1px solid ${theme.colors.white};
    }
    :active {
      background: ${theme.colors.white};
      color: ${theme.colors.primary};
    }
  }
  .text-info {
    .description {
      .left-description {
        color: ${theme.colors.white};
      }
    }
  }
`;
