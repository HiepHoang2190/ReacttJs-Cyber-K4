import {combineReducers, createStore} from 'redux';
import ToDoListReducer from './reducers/ToDoListReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancers = composeWithDevTools()

const rootReducer = combineReducers({
    //reducer khai báo tại đây
    ToDoListReducer
})



const store = createStore(rootReducer,composedEnhancers);




export default store;

