import React from "react";
import { connect } from "react-redux";
import { deleteLog, setCurrent } from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";
import Moment from "react-moment";

const LogItem = ({ log, deleteLog, setCurrent }) => {
  let color = "blue-text";
  if (log.attention) {
    color = "red-text";
  }

  const onDelete = () => {
    deleteLog(log.id);
    M.toast({ html: "log deleted successfully" });
  };

  return (
    <div className="collection-item">
      <a
        href="#edit-log-modal"
        className={`modal-trigger ${color}`}
        key={log.id}
        onClick={() => setCurrent(log)}
      >
        {log.message}
      </a>
      <br />
      <span>ID #{log.id}</span> Last updated by {log.name}
      <span className="grey-text">{log.tech}</span> on{" "}
      <Moment format="MMM Do YYYY, h:mm:ss">{log.date}</Moment>
      <a
        href="!#"
        onClick={onDelete}
        className="secondary-content"
      >
        <i className="material-icons grey-text">delete</i>
      </a>
    </div>
  );
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
