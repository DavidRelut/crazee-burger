import styled from "styled-components";
import { theme } from "../../../../../../../../../theme";

export default function EditInfoMessage() {
  return (
    <EditInfoMessageStyled>
      <span className="edit-text">
        Cliquer sur un produit du menu pour le modifier
        <span className="underline">en temps réel</span>
      </span>
    </EditInfoMessageStyled>
  );
}

const EditInfoMessageStyled = styled.div`
  .edit-text {
    grid-area: 3 / 2 / 4 / -1;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.primary};
    .underline {
      margin-left: 5px;
      text-decoration: underline;
    }
  }
`;
