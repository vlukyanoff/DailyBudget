import {combineReducers} from 'redux';
import {CHANGE_DAILY_SPENDING} from './constants'

const items = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_DAILY_SPENDING:
            const {date, val} = action.payload;

            return {...state, [date]: val};
        default:
            return state;
    }
};

export default combineReducers({items});