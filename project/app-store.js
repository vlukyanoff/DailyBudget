import {createStore, combineReducers} from 'redux';
import {AsyncStorage} from 'react-native';
import {persistStore, autoRehydrate} from 'redux-persist';
import settings from './settings/reducers';
import dailySpending from './home/reducers';

export const store = autoRehydrate()(createStore)(combineReducers({
    settings,
    dailySpending
}));

export const persistor = persistStore(store, {
    storage: AsyncStorage,
    debounce: 50
});