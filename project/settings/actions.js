import {CHANGE_INCOME, CHANGE_SAVING, CHANGE_SPENDING} from './constants';

export const changeIncome = val => ({
    type: CHANGE_INCOME,
    payload: val
})