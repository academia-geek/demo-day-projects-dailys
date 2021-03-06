import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { AlarmReducer } from '../reducers/AlarmReducer';
import { emocionesReducer } from '../reducers/emocionesReducer';
import { perfilReducer } from '../reducers/perfilReducer';
import { loginReducer } from '../reducers/reducersLogin';
import { registerReducer } from '../reducers/reducersRegister';
import { taskReducer } from '../reducers/tareaReducer';
import {QuizReducer} from '../reducers/QuizReducer'



const composeEnhancers = (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducer,
    register: registerReducer,
    tarea: taskReducer,
    alarm: AlarmReducer,
    emociones: emocionesReducer,
    perfil: perfilReducer,
    quiz: QuizReducer
})


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk))
)