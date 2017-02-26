import {CHANGE_DAILY_SPENDING} from './constants';

export const changeDailySpending = (date, val) => ({
    type: CHANGE_DAILY_SPENDING,
    payload: {date, val}
});