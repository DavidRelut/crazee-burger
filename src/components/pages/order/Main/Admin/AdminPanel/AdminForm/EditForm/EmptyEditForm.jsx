import styled from "styled-components";
import { theme } from "../../../../../../../../theme";
import { HiCursorClick } from "react-icons/hi";

export default function EmptyEditForm() {
  return (
    <EmptyEditFormStyled>
      <span className="edit-message">
        Cliquer sur un produit pour le modifier
      </span>
      <HiCursorClick />
    </EmptyEditFormStyled>
  );
}

const EmptyEditFormStyled = styled.div`
  font-size: ${theme.fonts.size.P3};
  color: ${theme.colors.greyBlue};
  font-family: ${theme.fonts.family.stylish};
  font-weight: ${theme.fonts.weights.regular};
  display: flex;
  align-items: center;
  margin: 85px 0 0 50px;

  .edit-message {
    margin-right: 10px;
  }
`;
