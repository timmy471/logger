import { GET_TECHS, ADD_TECH, DELETE_TECH, SET_LOADING, TECHS_ERROR } from './types';
import axios from 'axios';


//get techs
export const getTechs = () => async dispatch => {
    try {
        
        
        const res = await axios.get('/techs');
        
        dispatch({
            type: GET_TECHS,
            payload: res.data
        })

    } catch (error) {
        console.log(error)
        dispatch({
            type: TECHS_ERROR,
            payload: error.statusText
        })
    }
}

//add tech
export const addTech = tech => async dispatch => {
    try {
        
        const res = await axios.post('/techs', tech);
        console.log(res);
        dispatch({
            type: ADD_TECH,
            payload: res.data
        })
        
    } catch (error) {
        console.log(error);
        dispatch({
            type: TECHS_ERROR,
            payload: error.statusText
        })
    }
} 

//delete tech
export const delTech = id => async dispatch => {
    try {
        
        await axios.delete(`/techs/${id}`);

        dispatch({
            type: DELETE_TECH,
            payload: id
        })
    } catch (error) {
        console.log(error);
        dispatch({
            type: TECHS_ERROR,
            payload: error.statusText
        })
    }
}



