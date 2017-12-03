import {combineReducers} from 'redux';
import {CHANGE_DAILY_SPENDING, CHANGE_SELECTED_DATE} from './constants'

const items = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_DAILY_SPENDING:
            const {date, val} = action.payload;

            return {...state, [date]: val};
        default:
            return state;
    }
};

const selectedDate = (state = null, action) => {
    switch (action.type) {
        case CHANGE_SELECTED_DATE:
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({items, selectedDate});