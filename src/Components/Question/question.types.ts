export type Question={
    _id:string;
    quizCategoryId:string;
    question:string;
    options:Option[];
    isSkipped:boolean;
    selectedOption:null|number;
};

export type Option={
        _id:string;
        value:string;
        isCorrect:boolean;
};

export type QuestionProp={
    question:Question;
    score?:number;
    status:"YET_TO_START"|"RUNNING"|"COMPLETED";
}