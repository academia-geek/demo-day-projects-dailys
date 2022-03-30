import { typesAlarm } from "../types/types"

const initialState = {
    Alarm: []
}

export const AlarmReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesAlarm.add:
            return {
                alarm: [action.payload]
            }
        case typesAlarm.list:
            return {
                alarm: [...action.payload]
            }
        case typesAlarm.edit:
            return {
                ...state,
            };
        case typesAlarm.delete:
            return {
                alarm: state.alarm.filter(est => est.alarm !== action.payload)
            }

        default:
            return state
    }
}