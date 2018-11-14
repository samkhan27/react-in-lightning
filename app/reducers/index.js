import { combineReducers } from 'redux';
import * as reducers from './reducers';

export default combineReducers(Object.assign(
    reducers
));
