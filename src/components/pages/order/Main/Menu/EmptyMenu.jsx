import { theme } from "../../../../../theme";
import Button from "../../../../reusable-ui/Button";
import styled from "styled-components";

export default function EmptyMenu({
  title,
  description,
  isModeAdmin,
  onReset,
}) {
  return (
    <EmptyMenuStyled>
      <span className="title">{title}</span>
      <span className="description">{description}</span>
      {isModeAdmin ? (
        <Button
          label="Générer de nouveaux produits"
          className="reset-btn"
          onClick={onReset}
        />
      ) : (
        <span className="description description-2">"À très vite !"</span>
      )}
    </EmptyMenuStyled>
  );
}

const EmptyMenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

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

  .description-2 {
    margin: 0;
  }

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
