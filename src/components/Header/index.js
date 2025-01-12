import Button from "../Buttons";
import logo from '../../assets/logo.jpg' 
import {UserInfo} from '../../components/UserInfo'
import {
     BuscarInputContainer, 
     HeaderContainer, 
     InputContainer, Menu, MenuRight, Row, Wrraper } from "./style";



const Header = ({autenticado})=>{
    return(
        <Wrraper>
           <HeaderContainer>
                <Row>
                  <img src={logo} width={'48px'} height={'48px'} alt="Imagem logo"/>
                  {autenticado 
                     ?  <>  
                             <BuscarInputContainer>
                                <InputContainer placeholder="Buscar"/>
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>                             
                            <Menu>Global</Menu>                             
                        </>
                     : null}
                </Row>
                <Row>
                    {autenticado 
                     ? 
                         <UserInfo src={''} nome={'Miau'}/>
                     : <>
                          <MenuRight href="#">Home</MenuRight>
                          <Button  title={"Entrar"}/>
                          <Button title={'Cadastrar'} />
                       </>
                       }
                </Row> 
           
           </HeaderContainer>
        </Wrraper>
    )

}

export default Header;