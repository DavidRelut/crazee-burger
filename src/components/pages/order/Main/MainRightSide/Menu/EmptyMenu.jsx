import { theme } from "../../../../../../theme";
import styled from "styled-components";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuCustomer from "./EmptyMenuCustomer";

export default function EmptyMenu({ isModeAdmin, onReset }) {
  return (
    <EmptyMenuStyled>
      {isModeAdmin ? (
        <EmptyMenuAdmin reloadMenu={onReset} />
      ) : (
        <EmptyMenuCustomer />
      )}
    </EmptyMenuStyled>
  );
}

const EmptyMenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    font-family: "Amatic SC";
    font-weight: 700;
    font-size: 36px;
    color: ${theme.colors.greyBlue};
    text-transform: uppercase;
  }

  .description {
    font-family: "Amatic SC";
    font-weight: 400;
    font-size: 36px;
    margin-top: 20px;
    color: ${theme.colors.greyBlue};
    text-transform: uppercase;
    margin: 30px 0;
  }
`;
