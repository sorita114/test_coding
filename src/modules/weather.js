import {createAction, handleActions} from 'redux-actions';
import axios from 'axios';

//
function getWeatherAPI () {
    return axios.get('https://s3.ap-northeast-2.amazonaws.com/aitrics-home/seattle.json');
}
//
const WEATHER_PENDING = 'WEATHER_PENDING';
const WEATHER_FAILURE = 'WEATHER_FAILURE';
const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
//
const initialState = {
    pending : false,
    error : false,
    data : null
};

export default handleActions({
    [WEATHER_PENDING] : (state) => {
        return {
            ...state,
            pending:true,
            error : false
        }
    },
    [WEATHER_FAILURE]: (state) => {
        return {
            ...state,
            pending:false,
            error : true
        }
    },
    [GET_WEATHER_SUCCESS]:(state, action) => {
        let {data} = action.payload;
        
        return {
            ...state,
            pending:false,
            error:false,
            data
        }
    }
}, initialState);

export const getWeather = () => (dispatch) => {
    dispatch({type: WEATHER_PENDING});
    
    return getWeatherAPI().then(
        (response) => {
            dispatch({
                type: GET_WEATHER_SUCCESS,
                payload: response
            });
        }
    )
};

