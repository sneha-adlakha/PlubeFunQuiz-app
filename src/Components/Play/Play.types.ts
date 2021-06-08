import {Question,Option} from "../Question/question.types";

export type BackendQuestions={
    questions:{
        _id:string,
        quizCategoryId:string,
        question:string,
        options:Option[]
    }[];
};

export type Questions=Question[];

export type ServerError={
    errorMessage:string;
};