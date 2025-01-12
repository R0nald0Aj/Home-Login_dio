import Button from "../components/Buttons";
import Header from "../components/Header";
import banner from '../assets/banner.png'
import  {useNavigate} from 'react-router-dom'
import { Container, Title, TitleContent, TitleHighLight } from "./style";


function App() {
  const navigate  = useNavigate();

  const onNavigate =() =>{
     navigate('/login')
  }



  return (
     <> 
        <Header autenticado={false}/>
        <Container>
           <div>
            <Title>
               <TitleHighLight>
                  Implemente
                  <br/>
                  O seu futuro global agora!
               </TitleHighLight>
            </Title>
            <TitleContent>
               Domine as tecnologias utilizadas pelas empresas mains inovadoras do mundo e encare seu 
                novo desafio profissional,eviluindo em comunidade com so melhores experts.
            </TitleContent>
            <Button title={'Começar agora'} variant="secundary" onClick= {onNavigate} / >
           </div>
           <div>
             <img src={banner} width={'300px'} height={'300px'} alt="banner principal" />
           </div>
        </Container>
     
     </>
  );
}

export default App;
