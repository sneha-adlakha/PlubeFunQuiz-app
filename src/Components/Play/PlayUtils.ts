import {Questions,BackendQuestions} from "../Play/Play.types";

export const abstractquestion=(response:BackendQuestions):Questions=>{
    return response.questions.map((item)=>{
        return{
            _id:item._id,
            quizCategoryId:item.quizCategoryId,
            question:item.question,
            options:item.options,
            isSkipped:false,
            selectedOption:null,
        };
    });
}