export type QuizCategory={
    _id:string,
    name:string
}
export type QuizCategories={
    quizCategory:QuizCategory[]

}
export type ServerError={
    errorMessage:string
}