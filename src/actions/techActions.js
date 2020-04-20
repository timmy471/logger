import { GET_TECHS, ADD_TECH, DELETE_TECH, SET_LOADING, TECHS_ERROR } from './types';
import axios from 'axios';


//get techs
export const getTechs = () => async dispatch => {
    try {
        
        
        const res = await axios.get('https://forlogs-backeend.herokuapp.com/techs');
        
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
        
        const res = await axios.post('https://forlogs-backeend.herokuapp.com/techs', tech);
       
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
        
        await axios.delete(`https://forlogs-backeend.herokuapp.com/techs/${id}`);

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



