import React from "react";
import styled from "styled-components";

export default function CasinoEffect({ className, count }) {
  return <CasinoEffectStyled className={className}>{count}</CasinoEffectStyled>;
}

const CasinoEffectStyled = styled.span``;
