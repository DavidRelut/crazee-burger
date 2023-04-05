import React from "react";
import { FiCheck } from "react-icons/fi";
import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function SuccessMessage() {
  return (
    <SuccessMessageStyled>
      <FiCheck className="success-icon" />
      <span className="success-span">Ajouté avec succès !</span>
    </SuccessMessageStyled>
  );
}

const SuccessMessageStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${theme.fonts.size.P0};
  color: ${theme.colors.success};

  .success-icon {
    border: 1px solid ${theme.colors.success};
    border-radius: 50%;
  }

  .success-span {
    margin-left: 5px;
    font-weight: ${theme.fonts.weights.regular};
  }
`;
