import React, { useEffect } from "react";
import { connect } from 'react-redux';
import LogItem from "./LogItem";
import PreLoader from "../layouts/PreLoader";
import { getLogs } from '../../actions/logActions'

const Logs = ({ log: { logs, loading }, getLogs }) => {
 

  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

 

  if (loading || logs === null) {
    return (
      <div className="container">
        <PreLoader />
      </div>
    );
  } else {
    return (
      <div>
        <ul className="collection with-header">
          <li className="collection-header">
            <h4 className="center">System Logs</h4>
          </li>
          {logs.length < 1 ? (
            <p>There are no logs to show...</p>
          ) : (
            logs.map(log => <LogItem key={log.id} log={log} />)
          )}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  log: state.logReducer
})

export default connect(mapStateToProps, { getLogs })(Logs);
