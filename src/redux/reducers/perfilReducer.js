import { typesPerfil } from "../types/types"

const initialState = {
    perfil: []
}

export const perfilReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesPerfil.add:
            return {
                perfil: [action.payload]
            }
        case typesPerfil.list:
            return {
                perfil: [...action.payload]
            }
        case typesPerfil.edit:
            return {
                ...state,
            };
        case typesPerfil.delete:
            return {
                perfil: state.perfil.filter(est => est.perfil !== action.payload)
            }

        default:
            return state
    }
}