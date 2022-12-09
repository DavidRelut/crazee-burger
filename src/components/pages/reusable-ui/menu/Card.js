import styled from "styled-components";

export default function Card({ title, imageSource, price }) {
  return ( 
    <CardStyled img={imageSource} title={title}>
    </CardStyled>
  )
}

const CardStyled = styled.div`
  
`;