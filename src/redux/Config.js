import { applyMiddleware, combineReducers, createStore } from 'redux'
import {thunk} from 'redux-thunk'
import { ModalReducer } from './reducers/ModalReducer';


const rootReducer= combineReducers({
    ModalReducer: ModalReducer,
})

const store= createStore(rootReducer, applyMiddleware(thunk))


export default store