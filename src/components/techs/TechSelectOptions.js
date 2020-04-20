import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getTechs } from "../../actions/techActions";

const TechSelectOptions = ({ getTechs, tech: { techs } }) => {


  useEffect(() => {
    getTechs();
    
    //eslint-disable-next-line
     
  }, []);

  return (
   
    techs !== null &&
    techs.map(tech => (
      <option key={tech.id} value={`${tech.firstName} ${tech.lastName}`}>
        {tech.firstName} {tech.lastName}
      </option>
    ))
  );
};

const mapStateToProps = state => ({
  tech: state.techReducer
});

export default connect(mapStateToProps, { getTechs })(TechSelectOptions)
