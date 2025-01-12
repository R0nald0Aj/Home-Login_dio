import { CardContainer, Content, HasInfo, ImageBackGround, PostInfo, UserInfo } from "./style";
import { FaThumbsUp } from "react-icons/fa6";
import banner from '../../assets/banner.png'
const Card =() =>{
     return (
        <CardContainer>
            <ImageBackGround src={banner} /> 
              <Content>
                <UserInfo>
                   <div>
                     <h4>Miaus Da silva</h4>
                     <p>Há 10 minutos</p>  
                  </div>    
                </UserInfo>
                <PostInfo>
                 <h4>Projeto Para curso html CSS</h4>
                 <p>Projeto feito no Curso HTML CSS no bootcamp Dio GlobalAvanade...<strong>Saiba mais</strong></p>
                 
                </PostInfo>
                <HasInfo>
                  <h4>#HTML #CSS #JAVASCRIPT</h4>
                  <p><FaThumbsUp /> 10</p>    
                </HasInfo>    
            </Content>  
          


        </CardContainer>
     )
}


export {Card};