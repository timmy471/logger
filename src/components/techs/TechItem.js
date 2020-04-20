import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { delTech } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({tech, delTech }) => {

    const onDelete = () => {
        delTech(tech.id);

        M.toast({html: 'Tech deleted successfully'});
    }

    return (
       
           <li className="collection-item">{tech.firstName} {tech.lastName}
            <a href="#!" className="secondary-content " onClick={onDelete}>
               <i className="material-icons grey-text">delete</i>
           </a>
           </li>
          
      
           
    )
}

TechItem.propTypes = {
tech: PropTypes.object.isRequired,
}



export default connect(null, { delTech })(TechItem)
