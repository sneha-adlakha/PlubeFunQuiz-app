import React from 'react'
import {QuestionProp} from "./question.types";
import {useTheme} from "@material-ui/core/styles";
import {useStyles} from "./question.style";
import {useQuiz} from "../../provider/QuizProvider";
import {Typography} from '@material-ui/core';
function Question({question,score,status}:QuestionProp) {
    const theme = useTheme();
	const classes = useStyles();
    const {quizState:{optionClicked,currentQuestion,questions},quizDispatch}=useQuiz();
    return (
        <>
        <Typography 
        variant="h2"
        dangerouslySetInnerHTML={{
           __html:question.question,
        }}
        className={classes.question}
        gutterBottom
        />



        </>
    )
}

export default Question;
