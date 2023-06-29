import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function EmptyMenuCustomer() {
  return (
    <EmptyMenuCustomerStyled>
      <h1 className="title">Victime de notre succès ! :D</h1>

      <h2 className="description">
        De nouvelles recettes sont encours de préparation.
      </h2>

      <h3 className="h3-description ">À très vite !</h3>
    </EmptyMenuCustomerStyled>
  );
}

const EmptyMenuCustomerStyled = styled.div`
  display: contents;

  .h3-description {
    font-family: "Amatic SC";
    font-weight: 400;
    font-size: 36px;
    margin-top: 20px;
    color: ${theme.colors.greyBlue};
    text-transform: uppercase;
    margin: 0;
  }
`;
