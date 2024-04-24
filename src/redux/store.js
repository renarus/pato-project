import {createStore,combineReducers,applyMiddleware} from 'redux' 
import cartReducer from './cartReducer';
import {thunk} from 'redux-thunk'
const reducers=combineReducers({
    reducer:cartReducer
})
export const store=createStore(reducers,applyMiddleware(thunk))
