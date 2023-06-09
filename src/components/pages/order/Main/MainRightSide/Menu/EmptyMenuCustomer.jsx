import React from "react";
import styled from "styled-components";

export default function EmptyMenuCustomer() {
  return (
    <EmptyMenuCustomerStyled>
      <h1 className="title">Victime de notre succès ! :D</h1>

      <h2 className="description">
        De nouvelles recettes sont encours de préparation.
      </h2>

      <h3 className="description description-2">À très vite !</h3>
    </EmptyMenuCustomerStyled>
  );
}

const EmptyMenuCustomerStyled = styled.div`
  display: contents;
`;
