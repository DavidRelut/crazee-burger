import styled from "styled-components";
import { theme } from "../../../../../theme";
import PanelToggle from "./PanelToggle";
import PanelAdmin from "./PanelAdmin";

export default function PanelContainer({ className }) {
  return (
    <PanelContainerStyled className={className}>
      <PanelToggle />
      <PanelAdmin />
    </PanelContainerStyled>
  );
}

const PanelContainerStyled = styled.div``;
