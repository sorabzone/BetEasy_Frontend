import * as actionTypes from './../actions/actionTypes';

const initialState = {
    races: [],
    errorMessage: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOAD_RACES:
            return LoadRaces(state, action);
        case actionTypes.APPEND_ERROR:
            return appendError(state, action);
        case actionTypes.CLEAR_ERROR:
            return clearError(state, action);
        default:
            return state;
    }
}

function LoadRaces(state, action) {
    return {
        ...state,
        races: action.result.success ? action.result.result : []
    };
}

function appendError(state, { message }) {
    return {
        ...state,
        errorMessage: message
    };
}
function clearError(state, payload) {
    return {
        ...state,
        errorMessage: null
    };
}