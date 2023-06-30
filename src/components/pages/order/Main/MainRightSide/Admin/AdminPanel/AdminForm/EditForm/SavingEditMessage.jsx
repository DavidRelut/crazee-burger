import React from "react";
import { BsCloudCheck } from "react-icons/bs";
import styled from "styled-components";
import { theme } from "../../../../../../../../../theme";

export default function SavingEditMessage() {
  return (
    <SavingEditMessageStyled>
      <div className="icon">
        <BsCloudCheck />
      </div>
      <span className="sentence">Modifications enregistrées</span>
    </SavingEditMessageStyled>
  );
}

const SavingEditMessageStyled = styled.div`
  display: flex;
  color: ${theme.colors.blue};
  font-size: ${theme.fonts.size.SM};

  .icon {
    font-size: ${theme.fonts.size.P2};
    display: flex;
    margin: 0 10px;
  }
`;
