import {useEffect,useState} from 'react';
import {Box,Button,Container} from '@material-ui/core';
import { useLocation,useNavigate } from 'react-router-dom';
import {useQuiz} from "../../provider/QuizProvider";
import {fetchQuestions} from "./PlayServerRequest";
import {SET_QUESTIONS,SET_QUIZ_STATUS} from "../../Reducers/quizReducer";
import Question from "../Question/Question";
function Play() {
    const navigate=useNavigate();
    const {state}=useLocation() as any;
    const {quizState,quizDispatch} =useQuiz();
    const {questions,currentQuestion,score,status}=quizState;
    const [isLoading,setIsLoading]=useState<boolean>(true);
    useEffect(()=>{
        (async function(){
            
            const questions=await fetchQuestions(state.quizCategoryId);
            if("errorMessage" in questions){    
            }
            else
            {
                quizDispatch({type:SET_QUESTIONS,payload:{questions}})
                console.log("from play set",{questions})
            }
                quizDispatch({type:SET_QUIZ_STATUS,payload:{status:"RUNNING"}})
                setIsLoading(false);
    
        })();
    },[state,quizDispatch])

    return (

        <>
        {isLoading?(
                   <Box display="flex" justifyContent="center" p={4}>
                  </Box>

        ):(
            
            <Box color="text.primary" clone>
 
  
            <Question
            question={questions[currentQuestion]}
            score={score}
            status={status} />
            </Box>

        )}
        </>

    )
}

export default Play
