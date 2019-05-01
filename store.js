import {createStore, applyMiddleWare} from 'react-redux';
import thunk from 'redux';
import rootReducer from './reducers';
const initialState={}
const middleWare=[thunk]

export default store=createStore(rootReducer,initialState,applyMiddleWare(...middleWare));
