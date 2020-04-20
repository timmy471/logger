import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG, SEARCH_LOGS } from "./types";
import axios from 'axios';


//Get all logs
const BASEURL = "https://forlogs.herokuapp.com"
export const getLogs = () => async dispatch => {
  console.log(BASEURL)
  try {
    dispatch({ type: SET_LOADING });

    const res = await axios.get('https://forlogs.herokuapp.com/logs');

    dispatch({
      type: GET_LOGS,
      payload: res
    });

    
  }catch(error){
    dispatch({
      type: LOGS_ERROR,
      payload: error.statusText
    });
  }
};



// export const getLogs = () => {
//    return async (dispatch) => {
//         dispatch({ type: SET_LOADING })

//         const res = await fetch('/logs');
//         const data = await res.json();

//         dispatch({
//             type:GET_LOGS,
//             payload: data
//         })
//     }
// }


//Add new log
export const addLog = (log) => async dispatch => {
  try {
    dispatch({ type: SET_LOADING });

    const res = await axios.post(`${BASEURL}/logs`, log);
console.log(`${BASEURL}/logs`)
    dispatch({
      type: ADD_LOG,
      payload: res
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.statusText
    });
    
  }
};

//delete log
export const deleteLog = id => async dispatch => {
  try {
    dispatch({ type: SET_LOADING });

    await axios.delete(`${BASEURL}/logs/${id}`);

    dispatch({
      type: DELETE_LOG,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.statusText
    });
    
  }
};

//set current log for the edit. so onClick of each of the logs, the form comes prefilled tith the current log
export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log
  }
}

//clear current log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  }
}

export const updateLog = log => async dispatch => {
  try {
    dispatch({
      type: SET_LOADING
    });

   const res = await axios.put(`/logs/${log.id}`, log);
   dispatch({
     type: UPDATE_LOG,
     payload: res.data
   })
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.statusText
    });
  }
}

//search logs
export const searchLogs = (text) => async dispatch => {
  try {
    dispatch({ type: SET_LOADING });

    const res = await axios.get(`/logs?q=${text}`);

    dispatch({
      type: SEARCH_LOGS,
      payload: res.data
    });
  } catch (error) {
    
    dispatch({
      type: LOGS_ERROR,
      payload: error.statusText
    });
    
  }
};

