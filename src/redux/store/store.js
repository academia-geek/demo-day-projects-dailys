import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { loginReducer } from '../reducers/reducersLogin';
import {taskReducer} from '../reducers/tareaReducer';



const composeEnhancers = (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducer,
    tarea: taskReducer
})


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk))
)