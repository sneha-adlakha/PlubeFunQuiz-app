import React from 'react';
import {SET_QUESTIONS,SET_QUIZ_STATUS} from "./Reducers/quizReducer";
import {Questions} from "./Components/Quiz/quiz.types";
export type QuizState={
    questions:Questions;
    currentQuestion:number;
    score:number;
    optionClicked:boolean;
    status:"YET_TO_START"|"RUNNING"|"COMPLETED";
}
export type Action=
    |{type:typeof SET_QUESTIONS;payload:{questions:Questions}}
    |{type:typeof SET_QUIZ_STATUS;
    payload:{status:"YET_TO_START"|"RUNNING"|"COMPLETED";}}
    

export type QuizContext={
    quizState:QuizState;
    quizDispatch:React.Dispatch<Action>;
    
}
