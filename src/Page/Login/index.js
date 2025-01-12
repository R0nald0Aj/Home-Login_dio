import {CriarText, EsqueciText, Row,Container,Column,Title,Wrraper,TitleLogin,SubTitleLogin} from'./style';
import {Input} from '../../components/Inputs'
import Button from '../../components/Buttons'
import {} from 'react-icons'
import { FaEnvelope } from "react-icons/fa6";
import { FaKey } from "react-icons/fa6";
import {useNavigate} from 'react-router-dom';
import {useForm} from'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { serviceApi } from '../../services/axios_api';

function Login() {
   const schema = yup.object({
      email: yup.string().email().required('E-mail obrigatorio'),
      senha: yup.string().min(4,).required("Digite no minimo 4 caracteres"),
    }).required(); 

   const { control, handleSubmit, formState: { errors,isValid } } = useForm({
      resolver : yupResolver(schema)
   });
   const login = async (formData) =>{ 
        try {
         const {data}  =   await serviceApi.get(`?email=${formData.email}&senha=${formData.senha}`)
          console.log(data['nome']);
        } catch (error) {
           alert(`Erro ao buscar dados na api ${error}`)
        }
      }

   const navigateTo = useNavigate()

   
   const onNavigate = () =>{
      navigateTo('/feed')
   }
  return (
     <> 
        <Container>
         <Column>
           <Title>
              A plataforma para você aprender com experts,dominar as principais tecnologias
              e entrar mais rápido nas empresas mais desejadas.
           </Title>
         </Column>
         <Column>
           <Wrraper>
              <TitleLogin>Faça seu cadastro</TitleLogin>
              <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
           </Wrraper>
           <form onSubmit={handleSubmit(login)}>
            <Input control={control} erroMessage={errors.email?.message}  name={'email'} placeholder='E-mail' leftIcon={<FaEnvelope/>}/>  
            <Input control={control} erroMessage={errors.senha?.message}  name={'senha'} type='password' placeholder='Senha' leftIcon={<FaKey/>}/>  
            <Button title={'Entrar'}  variant={'secundary'} />   
           </form>
           <Row>
           <EsqueciText>Esqueci minha senha</EsqueciText> 
           <CriarText>Criar conta</CriarText>  
         </Row>  
         </Column> 
         
        </Container>
     
     </>
  );
}

export default Login;
