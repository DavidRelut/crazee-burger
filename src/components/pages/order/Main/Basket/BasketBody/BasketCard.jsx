import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../../../../../theme";
import { MdDeleteForever } from "react-icons/md";

export default function BasketCard({
  title,
  imageSource,
  price,
  quantity,
  onDelete,
  onClick,
  isModeAdmin,
}) {
  return (
    <BasketCardStyled onClick={onClick} isModeAdmin={isModeAdmin}>
      <div className="delete-button" onClick={onDelete}>
        <MdDeleteForever className="icon" />
      </div>

      <img className="imageBasket" src={imageSource} alt={title} />

      <div className="text-info">
        <div className="title">
          <span>{title}</span>
        </div>
        <span className="price">{price}</span>
      </div>
      <div className="container-quantity">
        <span className="quantity">x{quantity}</span>
      </div>
    </BasketCardStyled>
  );
}

const BasketCardStyled = styled.div`
  position: relative;
  width: 315px;
  height: 86px;
  left: 15px;
  top: 20px;
  margin-bottom: 20px;

  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basketCard};
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;

  .imageBasket {
    width: 86px;
    height: 60px;
    object-fit: contain;
  }

  .text-info {
    user-select: none;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title {
      display: flex;
      align-items: center;
      font-family: ${theme.fonts.family.stylish};
      font-size: ${theme.fonts.size.P3};
      line-height: 32px;
      font-weight: ${theme.fonts.weights.bold};
      color: ${theme.colors.dark};
      /* sans cette div avec "min-width: 0", l'ellipsis ne fonctionne pas dans un span : https://semicolon.dev/tutorial/css/text-overflow-ellipsis-doesnt-work#:~:text=If%20your%20text%2Doverflow%20is,Grid%20or%20on%20a%20Table. */
      min-width: 0;
      span {
        overflow: hidden;
        width: 120px;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .price {
      font-family: "Open Sans";
      font-size: 15px;
    }
  }

  .price,
  .quantity {
    color: ${theme.colors.primary};
  }

  .container-quantity {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 76px;

    .quantity {
      font-family: "Open Sans";
      font-size: 16px;
    }
  }

  .delete-button {
    display: none;
    z-index: 1;
  }
  cursor: ${({ isModeAdmin }) => (isModeAdmin ? "pointer" : "auto")};
  ${({ isModeAdmin }) => hoverableStyle}
`;

const hoverableStyle = css`
  /* hover de la card */
  cursor: pointer;
  :hover {
    .delete-button {
      border: none;
      box-sizing: border-box;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 76px;
      border-top-right-radius: ${theme.borderRadius.round};
      border-bottom-right-radius: ${theme.borderRadius.round};
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${theme.colors.danger};
      color: ${theme.colors.white};
      cursor: pointer;

      .icon {
        width: ${theme.fonts.size.P3};
        height: ${theme.fonts.size.P3};
      }

      /* behaviour on delete-button hover */
      :hover {
        .icon {
          color: ${theme.colors.dark};
        }
        :active {
          .icon {
            color: ${theme.colors.white};
          }
        }
      }
    }
  }
`;

const selectedStyle = css`
  background: ${theme.colors.primary};
  .price,
  .quantity {
    color: ${theme.colors.white};
  }
`;
