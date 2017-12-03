import {getIncome, getSaving, getSpending} from '../settings/selectors';
import {createSelector} from 'reselect';

export const getDailySpending = state => state.dailySpending.items;

export const getMonthlyBudget = createSelector(
    getIncome,
    getSaving,
    getSpending,
    (income, saving, spending) => {
        return (income * (1 - (saving / 100))) - spending;
    }
);

// TODO: Переложить редьюсер
export const getSelectedDate = state => state.dailySpending.selectedDate;