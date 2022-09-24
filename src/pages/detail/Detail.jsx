import React from 'react'
import { DetailContainer, DetailPart, HeaderContainer } from './Detail.style'
import { useLocation } from 'react-router-dom'
import dietSvg from "../../assets/diet.svg";

const Detail = () => {
  const {state} = useLocation();
  console.log(state)
  return (
    <DetailContainer>
      <HeaderContainer>
        <h1>{state.label}</h1>
        <img src={dietSvg} alt="dietSvg" />
      </HeaderContainer>
      <DetailPart wrap="wrap">
        
      </DetailPart>
    </DetailContainer>
  );
}

export default Detail