import React from "react";
import styled from "styled-components";
export default function Tab({ className, Icon, label }) {
  return (
    <TabStyled>
      <div className={className}>
        {Icon && Icon}
        <span>{label}</span>
      </div>
    </TabStyled>
  );
}

const TabStyled = styled.div`
  span {
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;
