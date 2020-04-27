import React, { Component } from 'react';
import { Route, Switch, withRouter,Redirect } from 'react-router-dom';

import './App.css';
import Layout from './hoc/Layout/Layout';
import PersonalInfo from './containers/PersonalInfo/PersonalInfo';
import ProfessionalInfo from './containers/ProfessionalInfo/ProfessionalInfo';
import ReviewInfo from './containers/ReviewInfo/ReviewInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/pers" exact component={PersonalInfo} />
            <Route path="/review" exact component={ReviewInfo} />
            <Route path="/" exact component={ProfessionalInfo} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </div>
    );
  }

}

export default withRouter(App);
