import styled from "styled-components";
import { theme } from "../../../../../../theme";

export default function Loader() {
  return (
    <LoaderStyled>
      <span className="loader">Chargement en cours ...</span>
    </LoaderStyled>
  );
}

const LoaderStyled = styled.div`
  box-shadow: ${theme.shadows.extraStrong};
  border-bottom-right-radius: ${theme.borderRadius};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  .loader {
    text-align: center;
    font-family: "Amatic SC", cursive;
    color: ${theme.colors.greyBlue};
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights};
  }
`;
