import axios,{AxiosError} from "axios";
import {BackendQuestions,Questions,ServerError} from "../Play/Play.types";
import {abstractquestion} from "./PlayUtils"
export const fetchQuestions=async(quizCategoryId:string,):Promise<Questions|ServerError>=>{
    let url='https://youtube.snehaadlakha.repl.co/quiz-category/60b506f6d9b63602daaf6775/questions'
    try{
        const response=await axios.get<BackendQuestions>(url);
        console.log(response.data);
        return abstractquestion(response.data);
    }
    catch(error){
        if(axios.isAxiosError(error)){
            const serverErr=error as AxiosError<ServerError>;
            if(serverErr && serverErr.response){
                return serverErr.response.data;
            }
        }
        return {errorMessage:"Some Error Occured"}
    }
};