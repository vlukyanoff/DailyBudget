import {createStore, combineReducers} from 'redux';
import settings from './settings/reducers';

export default createStore(
    combineReducers({
        settings
    })
);