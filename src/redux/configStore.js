import {compose,applyMiddleware,combineReducers, createStore} from 'redux';
import ToDoListReducer from './reducers/ToDoListReducer'
import LoadingReducer from './reducers/LoadingReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxThunk from 'redux-thunk'

//middleware saga
import createMiddleWareSaga from 'redux-saga';
import { rootSaga } from './sagas/rootSaga';
const middleWareSaga = createMiddleWareSaga();

const composedEnhancers = composeWithDevTools()

const rootReducer = combineReducers({
    //reducer khai báo tại đây
    ToDoListReducer,
    LoadingReducer
})



// const store = createStore(rootReducer,composedEnhancers);
const store = createStore(rootReducer,compose(applyMiddleware(reduxThunk,middleWareSaga), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

//Gọi saga
middleWareSaga.run(rootSaga);

export default store;

