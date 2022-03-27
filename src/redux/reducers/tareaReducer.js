import { typesTask } from "../types/types"


const initialState = {
    task: []
}

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesTask.register:
            return {
                task: [action.payload]
            }
        case typesTask.list:
            return {
                task: [...action.payload]
            }
        case typesTask.edit:
            return {
                ...state,
            };
        case typesTask.delete:
            return {
                task: state.task.filter(est => est.task !== action.payload)
            }

        default:
            return state
    }
}