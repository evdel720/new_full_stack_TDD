import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import React from 'react';
import App from './app';

class AppRouter extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={ App } >
        </Route>
      </Router>
    );
  }
}

AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};


export default AppRouter;
