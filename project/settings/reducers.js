import {combineReducers} from 'redux';
import {CHANGE_INCOME, CHANGE_SAVING, CHANGE_SPENDING} from './constants'

const income = (state = '', action) => {
    switch (action.type) {
        case CHANGE_INCOME:
            return action.payload;
        default:
            return state;
    }
};

const saving = (state = '', action) => {
    switch (action.type) {
        case CHANGE_SAVING:
            return action.payload;
        default:
            return state;
    }
};

const spending = (state = '', action) => {
    switch (action.type) {
        case CHANGE_SPENDING:
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({income, saving, spending});