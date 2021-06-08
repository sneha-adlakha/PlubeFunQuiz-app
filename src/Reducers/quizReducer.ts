import {QuizState,Action} from "../App.types";
export const SET_QUESTIONS="setQuestions";
export const SET_QUIZ_STATUS="setQuizStatus"
export const QuizReducer=(state:QuizState,action:Action):QuizState=>{
    switch(action.type)
    {
        case SET_QUESTIONS:
            return {...state,questions:action.payload.questions}
        case SET_QUIZ_STATUS:
            return {...state,status:action.payload.status}
        default:
            return state;

    }
}
