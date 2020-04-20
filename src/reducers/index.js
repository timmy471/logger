import { combineReducers } from 'redux';
import logReducer from './logReducer';
import techReducer from './techReducer';


const rootReducer = combineReducers({
    logReducer,
    techReducer
});

export default rootReducer;