import {CHANGE_DAILY_SPENDING, CHANGE_SELECTED_DATE} from './constants';

export const changeDailySpending = (date, val) => ({
    type: CHANGE_DAILY_SPENDING,
    payload: {date, val}
});

export const changeSelectedDate = (date) => ({
    type: CHANGE_SELECTED_DATE,
    payload: date
});