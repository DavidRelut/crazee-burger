import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
export default function Tab({ className, Icon, label }) {
  return (
    <TabStyled className={className}>
      {Icon && <div className="icon">{Icon}</div>}
      {label && <span className="label">{label}</span>}
    </TabStyled>
  );
}

const TabStyled = styled.div`
  border: 1px solid blue;
  padding: 0 22px;
  height: 35px;

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

  background: #ffffff;
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: #e4e5e9;
  box-shadow: ${theme.shadows.subtle};
  border-radius: 5px 5px 0px 0px;

  .icon {
    display: flex;
    align-items: center;
    min-width: 1em;
    min-height: 1em;
  }

  .label {
    margin-left: 13px;
  }

  :hover {
    border-bottom: 2px solid ${theme.colors.white};
    text-decoration: underline;
  }

  .label {
    margin-left: 5px;
  }
`;
