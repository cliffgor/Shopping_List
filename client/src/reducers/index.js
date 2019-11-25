// bring together all our reducers for this application
import { combineReducers } from 'redux';
import itemReducer from '../itemReducer';

export default combineReducers({
    item: itemReducer
});