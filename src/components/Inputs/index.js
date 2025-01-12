import { Controller } from "react-hook-form";
import { IconConteiner, InputConteiner, InputText,ErrorText } from "./style";

const Input = ({ control,leftIcon,name,erroMessage ,...rest}) =>{

   return(
        <>
           
      <InputConteiner>
          {leftIcon ?(<IconConteiner> {leftIcon} </IconConteiner>): null }
          <Controller
             name={name}
             control={control}
             rules={{required : true}}
             render={({field}) =>   <InputText {...field} {...rest}/>}
          />
        
        
      </InputConteiner>
         {erroMessage ? <ErrorText>{erroMessage}</ErrorText> : null}
        </>

   )


}

export {Input};