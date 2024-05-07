import { applyMiddleware, combineReducers, createStore } from 'redux'
import {thunk} from 'redux-thunk'
import { ModalReducer } from './reducers/ModalReducer';
import {HomeReducer} from './reducers/HomeReducer';
import {ModalAddressReducer} from './reducers/ModalAddressReducer';


const rootReducer= combineReducers({
    ModalReducer: ModalReducer,
    ModalAddressReducer,
    HomeReducer
})

const store= createStore(rootReducer, applyMiddleware(thunk))


export default store