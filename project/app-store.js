import {createStore, combineReducers} from 'redux';
import settings from './settings/reducers';
import dailySpending from './home/reducers';

export default createStore(
    combineReducers({
        settings,
        dailySpending
    })
);