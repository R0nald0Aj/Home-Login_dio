import styled from "styled-components";

export const Container = styled.main`
   width:100%;
   max-width:80%;
   margin:0 auto;
   margin-top:120px; 
 
   display:flex;
   flex-direction:row;
   justify-content:space-between;
`

export const Column=styled.div`
  flex: ${({flex}) => flex };
`

export const Row = styled.div`
  display:flex;
  flex-directions : row;
  justify-content:space-between;
  align-items: center;
  margin-top:20px;
  `

export const Title= styled.h3`
   font-family:'Open Sans';
   font-style:normal;
   font-weight:700;
   font-size :18px;
   margin-bottom:24px;
   line-height:25px;
   color:#fff;
`


export const TitleHighLight=styled.h3`
  font-family:'Open Sans';
   font-style:normal;
   font-weight:700;
   font-size :18px;
   margin-bottom:25px;
   line-height:24px;
   color:#ffffff70;
`

export const TitleContent = styled.p`
   font-family:'Open Sans';
   font-style:normal;
   font-weight:400;
   font-size :16px;
   width:420px;
   margin-bottom:20px;
   line-height:22px;
   color:#fff;

`