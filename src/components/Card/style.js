import styled from "styled-components";

export const CardContainer= styled.div`
   width:100%;
   height :100%;
   background-color:#3B4651;
   postion :relative;
   margin-bottom:24px;
`

export const ImageBackGround =styled.img`
  width:100%;
  height:180px;
`

export const Content = styled.div`
  width :100%;
  display: flex;
  flex-dirextions: column;
  padding: 12px;
`

export const UserInfo = styled.div`
   display : flex;
   flex-direction:row;
   margin-bottom:12px;

   div{
     margin-left : 12px;
   }

  h4{
    font-family:Open Sans;
    font-style:normal;
     font-weight:700;
    font-size:18px;
    line-height:25px;
    color:#ffffff;
  } 

   p{  
     font-family:Open Sans;
     font-weight:400;
     font-style:normal;
    font-size:12px;
    line-height:16px;
    color:#ffffff;
      
    
  }  

`

export const UserPicture = styled.img`
    width:32px;
    height:32px;
    border-radius:2px;
    border :3px solid #ffffff;   
 `

 export const PostInfo=styled.div`
   margin-botton:12px;
   h4{
     font-family:'Opens Sans';
     font-style:normal;
     font-weight : 700;
     font-size:18px;
     line-height:25px;
     color:#ffffff;
   }

   p{  
     font-family:Open Sans;
     font-weight:700;
     font-style:normal;
    font-size:12px;
    line-height:16px;
    color:#ffffff88;
  }  
 `


 export const HasInfo= styled.div`
   margin-botton:12px;

 h4{
     font-family:'Opens Sans';
     font-style:normal;
     font-weight : 700;
     font-size:12px;
     line-height:16px;
    color:#ffffff88;
   }

   p{  
     font-family:Open Sans;
     font-weight:700;
     font-style:normal;
     font-size:16px;
     line-height22px;
  
  }  
   
 `