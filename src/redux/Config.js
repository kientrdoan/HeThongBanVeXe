import { applyMiddleware, combineReducers, createStore } from 'redux'
import {thunk} from 'redux-thunk'
import { ModalReducer } from './reducers/ModalReducer';
import {HomeReducer} from './reducers/HomeReducer';
import {ModalAddressReducer} from './reducers/ModalAddressReducer';
import { BookTicketReducer } from './reducers/BookTicketReducer';
import { AuthReducer } from './reducers/AuthReducer';


const rootReducer= combineReducers({
    ModalReducer: ModalReducer,
    ModalAddressReducer,
    HomeReducer,
    BookTicketReducer,
    AuthReducer
})

const store= createStore(rootReducer, applyMiddleware(thunk))


export default store