import { typesEmociones } from "../types/types";


const initialState = {
    frases: [],
    seleccionado: []
}

export const emocionesReducer= (state = initialState, action) => {
    switch (action.type) {
        
        case typesEmociones.list:
            return {
                frases: [...action.payload]
            }
            case typesEmociones.add:
            return {
                seleccionado: [action.payload]
            }
        default:
            return state
    }
}