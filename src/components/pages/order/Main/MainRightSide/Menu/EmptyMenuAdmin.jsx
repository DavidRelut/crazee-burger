import React from "react";
import styled from "styled-components";
import Button from "../../../../../reusable-ui/Button";
import { theme } from "../../../../../../theme";

export default function EmptyMenuAdmin({ reloadMenu }) {
  return (
    <EmptyMenuAdminStyled>
      <h1 className="title">Le menu est vide ?</h1>

      <h2 className="description">Cliquez ci-dessous pour le réinitialiser</h2>
      <Button
        label="Générer de nouveaux produits"
        className="reset-btn"
        onClick={reloadMenu}
      />
    </EmptyMenuAdminStyled>
  );
}

const EmptyMenuAdminStyled = styled.div`
  display: contents;
  .reset-btn {
    padding: 20px;
    font-size: ${theme.fonts.size.XS};
    padding: 19px 25px 19px 25px;
    width: 225px;
    height: 50px;
    cursor: pointer;
    margin-bottom: 120px;
  }
`;
