import {compose,applyMiddleware,combineReducers, createStore} from 'redux';
import ToDoListReducer from './reducers/ToDoListReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxThunk from 'redux-thunk'
const composedEnhancers = composeWithDevTools()

const rootReducer = combineReducers({
    //reducer khai báo tại đây
    ToDoListReducer
})



// const store = createStore(rootReducer,composedEnhancers);
const store = createStore(rootReducer,compose(applyMiddleware(reduxThunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));



export default store;

