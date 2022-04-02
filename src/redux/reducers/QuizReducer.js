import { typeQuiz } from "../types/types"

const initialState = {
    quiz: []
}

export const QuizReducer = (state = initialState, action) => {
    switch (action.type) {
        case typeQuiz.list:
            return {
                quiz: [...action.payload]
            }
        default:
            return state
    }
}