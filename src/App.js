import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import router from './router';
import { connect } from 'react-redux';

const configRoute = (router) => {
  return (
    <div>
      {
        router.map((route, index) => (
          <Route key={index + 'route-render'} path={route.path} exact={route.exact ? route.exact : false} component={route.component} />
        ))
      }
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>
        <hr />
        {
          configRoute(router)
        }
      </div>
    </div>
  );
};

export default App;
