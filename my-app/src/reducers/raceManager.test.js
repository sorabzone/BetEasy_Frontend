import * as reducers from './raceManager';
import * as actionTypes from './../actions/actionTypes';
import raceData from '../testdata/race.json';
import expect from 'expect';

describe('race manager reducer', () => {
    it('should handle LOAD_RACES', () => {
        const initialState = {
            races: [],
            errorMessage: null
        }
        const successAction = {
            type: actionTypes.LOAD_RACES,
            result: raceData 
        };
        const received = reducers.default(initialState, successAction);

        const expected = {
            races: raceData.result,
            errorMessage: null
        }

        expect(received).toEqual(expected);
    });

    it('should handle APPEND_ERROR', () => {
        const initialState = {
            races: [],
            errorMessage: null
        }
        const successAction = {
            type: actionTypes.APPEND_ERROR,
            message: "System Error, please try again after sometime."
        };
        const received = reducers.default(initialState, successAction);

        const expected = {
            races: [],
            errorMessage: "System Error, please try again after sometime."
        }

        expect(received).toEqual(expected);
    });

    it('should handle CLEAR_ERROR', () => {
        const initialState = {
            races: [],
            errorMessage: "System Error, please try again after sometime."
        }
        const successAction = {
            type: actionTypes.CLEAR_ERROR,
            message: null
        };
        const received = reducers.default(initialState, successAction);

        const expected = {
            races: [],
            errorMessage: null
        }

        expect(received).toEqual(expected);
    });

});