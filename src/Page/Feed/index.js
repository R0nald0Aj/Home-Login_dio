import {Column, Container, TitleHighLight} from'./style';
import {} from 'react-icons'
import { Card } from '../../components/Card'
import { UserInfo } from '../../components/UserInfo';
import Header from '../../components/Header';

function Login() {
  return (
     <> 
     <Header autenticado={true} />
        <Container>
         <Column flex={3}> 
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
         </Column>
         <Column flex={1}>
             <TitleHighLight># Rankingo Top 5 Da Semana </TitleHighLight>
             <UserInfo 
             nome={'Miau'} 
             percentual={40} 
             image={''} />
         
         </Column>
          
        
        </Container>
     
     </>
  );
}

export default Login;
