import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
export default function Tab({ className, Icon, label, onClick }) {
  return (
    <TabStyled className={className} onClick={onClick}>
      {Icon && <div className="icon">{Icon}</div>}
      {label && <span className="label">{label}</span>}
    </TabStyled>
  );
}

const TabStyled = styled.div`
  padding: 0 22px;
  height: 43px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  font-size: ${theme.fonts.size.SM};
  font-weight: ${theme.fonts.weights.medium};
  color: ${theme.colors.greySemiDark};

  position: relative;
  left: 5%;
  top: 1px;

  background: ${theme.colors.white}};
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
  border-radius: 5px 5px 0px 0px;

  .icon {
    display: flex;
  }

  .label {
    margin-left: 13px;
  }

  :hover {
    border-bottom: 2px solid ${theme.colors.white};
    text-decoration: underline;
  }
`;
