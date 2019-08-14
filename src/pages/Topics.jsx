import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)
const Topics = ( props ) => (
  <div>
    <h2>Topics</h2>
    pagination{JSON.stringify(props)}
    <ul>
      <li>
        <Link to={`${props.match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${props.match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${props.match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${props.match.url}/:topicId`} component={Topic}/>
    <Route exact path={props.match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
);
const mapStateToProps = (state) => {
  console.log('state:', state.pagination);
  return {
    state: state
  }
}

export default connect(mapStateToProps)(Topics);
