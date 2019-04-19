import * as actionTypes from './actionTypes';
import { fetchWrapper } from '../util/fetchWrapper';

export function LoadRaces() {
    var url = `https://s3-ap-southeast-2.amazonaws.com/bet-easy-code-challenge/next-to-jump`;
    return dispatch => {
        fetchWrapper(url, 'GET').then(result => {
            if(result != undefined && result.success)
                dispatch({ type: actionTypes.LOAD_RACES, result });
            else
                dispatch({ type: actionTypes.APPEND_ERROR, message: "System Error, please try again after sometime." });
        });
    };
}

export function appendError(payload) {
    return (dispatch) => {
        dispatch({ type: actionTypes.APPEND_ERROR, payload });
    };
}
export function clearError(payload) {
    return (dispatch) => {
        dispatch({ type: actionTypes.CLEAR_ERROR, payload });
    };
}