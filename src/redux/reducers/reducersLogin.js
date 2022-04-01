import { typesLogin } from '../types/types';


export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case typesLogin.login:
            return {
                id: action.payload.id,
                name: action.payload.displayname
            }
        case typesLogin.add:
            return {
                usuario: [action.payload]
            }
        case typesLogin.list:
            return {
                usuario: [...action.payload]
            }
        case typesLogin.edit:
            return {
                ...state,
            };
        case typesLogin.logout:
            return {}

        default:
            return state;
    }
}
