import { createContext, useContext, useReducer } from "react";
import { QuizContext } from "../App.types";
import {QuizReducer} from "../Reducers/quizReducer";


const Quizcontext = createContext({});
export const QuizProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(QuizReducer, {
        questions: [],
        currentQuestion: 0,
        score: 0,
        optionClicked: false,
        status: "YET_TO_START"
    });
    return (
        <Quizcontext.Provider
            value={{ quizState: state, quizDispatch: dispatch }}>
                {children}
                </Quizcontext.Provider>
    )
}

export const useQuiz=():QuizContext=>{
    return useContext(Quizcontext)as QuizContext;
}

