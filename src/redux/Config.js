import { applyMiddleware, combineReducers, createStore } from 'redux'
import {thunk} from 'redux-thunk'
import { ModalReducer } from './reducers/ModalReducer';
import {HomeReducer} from './reducers/HomeReducer';
import {ModalAddressReducer} from './reducers/ModalAddressReducer';
import { BookTicketReducer } from './reducers/BookTicketReducer';


const rootReducer= combineReducers({
    ModalReducer: ModalReducer,
    ModalAddressReducer,
    HomeReducer,
    BookTicketReducer
})

const store= createStore(rootReducer, applyMiddleware(thunk))


export default store