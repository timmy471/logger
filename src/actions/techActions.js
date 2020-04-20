import { GET_TECHS, ADD_TECH, DELETE_TECH, SET_LOADING, TECHS_ERROR } from './types';
import axios from 'axios';

const url = 'https://forlogs-backeend.herokuapp.com/techs';
//get techs
export const getTechs = () => async dispatch => {
    try {
        
        
        const res = await axios.get(url);
        
        dispatch({
            type: GET_TECHS,
            payload: res.data
        })

    } catch (error) {
        
        dispatch({
            type: TECHS_ERROR,
            payload: error.statusText
        })
    }
}

//add tech
export const addTech = tech => async dispatch => {
    try {
        
        const res = await axios.post(url, tech);
       
        dispatch({
            type: ADD_TECH,
            payload: res.data
        })
        
    } catch (error) {
      
        dispatch({
            type: TECHS_ERROR,
            payload: error.statusText
        })
    }
} 

//delete tech
export const delTech = id => async dispatch => {
    try {
        
        await axios.delete(`${url}/${id}`);

        dispatch({
            type: DELETE_TECH,
            payload: id
        })
    } catch (error) {
      
        dispatch({
            type: TECHS_ERROR,
            payload: error.statusText
        })
    }
}



