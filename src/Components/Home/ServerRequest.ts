import axios,{AxiosError} from "axios";
import {ServerError,QuizCategories} from "./Home.types";
export const ServerRequest=async():Promise<QuizCategories|ServerError> =>{
   try{
       const response=await axios.get<QuizCategories>("https://youtube.snehaadlakha.repl.co/quiz-category")
       return response.data;
   }catch(error){
       if(axios.isAxiosError(error)){
           const serverError=(error as AxiosError<ServerError>)
           if(serverError && serverError.response){
               return serverError.response.data;
           }
       }
       return {errorMessage:"Unknown Error Occured"}

   }
}


