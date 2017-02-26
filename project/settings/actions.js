import {CHANGE_INCOME, CHANGE_SAVING, CHANGE_SPENDING} from './constants';

export const changeIncome = val => ({
    type: CHANGE_INCOME,
    payload: val
});

export const changeSaving = val => ({
    type: CHANGE_SAVING,
    payload: val
});

export const changeSpending = val => ({
    type: CHANGE_SPENDING,
    payload: val
});