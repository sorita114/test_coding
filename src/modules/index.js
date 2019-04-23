import {combineReducers} from 'redux';
import weather from './weather';

const store = combineReducers({
    weather
});

export default store;