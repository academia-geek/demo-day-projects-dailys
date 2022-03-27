import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk";
import { loginReducer } from "../reducers/loginReducer";
import { productReducer } from "../reducers/productReducer";
import { registerReducer } from "../reducers/registerReducer";
import { taskReducer } from "../reducers/tareaReducer";

const composeEnhancers = (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducer,
    register: registerReducer,
    producto: productReducer,
    tarea: taskReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);