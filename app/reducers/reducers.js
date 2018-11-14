import * as types from '~/actions/types';
import createReducer from '../lib/createReducer';


const defaultState = {
    message: 'test',
    results: [],
};

export const test = createReducer(defaultState, {
    [types.TEST_ACTION](state, action) {
        return { ...state, message: action.message };
    },
    [types.FOUND](state, action) {
        return { ...state, results: action.results };
    },
});
