import React, { useEffect } from 'react';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import './App.css';
import SearchBar from './components/layouts/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layouts/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
import { Provider } from 'react-redux';
import store from './store';


function App() {

  useEffect(()=>{
    //initialize Materialize js since we can't do document....we use useEffect
    M.AutoInit();
  });

  return (
    <Provider store={store}>
       <div className="App">
    <SearchBar />
    
    <div className="container">
        <Logs />
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
    </div>
    
    </div>
    </Provider>
   
  );
}

export default App;
