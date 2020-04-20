import React, {  useEffect } from "react";
import { connect } from 'react-redux';
import TechItem from './TechItem';
import { getTechs } from '../../actions/techActions';


const TechListModal = ({ techs: { techs }, getTechs }) => {

  useEffect(() => {
 
    getTechs();
     // eslint-disable-next-line
   
  }, []);

  
    return (
     <div id="tech-list-modal" className="modal">
         <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
        {techs !== null && techs.map(tech=>(
           <TechItem key={tech.id} tech={tech}/>
        ))}
        </ul>
         </div>
     </div>
    );
  
};

const mapStateToProps = state => ({
  techs: state.techReducer
})

export default connect(mapStateToProps, { getTechs })(TechListModal);
