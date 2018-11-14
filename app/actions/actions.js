// @flow
import * as types from './types';

export function testAction(message: string) {
    return {
        type: types.TEST_ACTION,
        message
    };
}

export const findAll = () => (dispatch, getState, service) => {
    service.findByName(name).then(
        contacts => dispatch(found(contacts))
    );
};

export function findByName(name: string) {
    return (dispatch, getState, service) => {
        service.findByName(name).then(
            contacts => dispatch(found(contacts))
        );
    };
}

export function found(results) {
    return {
        type: types.FOUND,
        results
    };
}
