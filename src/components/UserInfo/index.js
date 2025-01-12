import { Container,NameText, Progresss, UserPicture } from "./style";

 const UserInfo = ({nome,image,percentual}) =>{

    return(
        <Container>
            <UserPicture src={image}/>
            <div>
                <NameText>{nome}</NameText>
                <Progresss percentual={percentual}/>
            </div>
        </Container>
    )

}

export   {UserInfo};