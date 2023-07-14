import styled from "styled-components";
import { theme } from "../../../../../../../../../theme";

export default function EditInfoMessage() {
  return (
    <EditInfoMessageStyled>
      <span className="edit-text font_open-sans">
        Cliquer sur un produit du menu pour le modifier
        <span className="underline">en temps réel</span>
      </span>
    </EditInfoMessageStyled>
  );
}

const EditInfoMessageStyled = styled.div`
  .edit-text {
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.primary};
    position: relative;
    top: -8px;
    .underline {
      margin-left: 5px;
      text-decoration: underline;
    }
  }
`;
