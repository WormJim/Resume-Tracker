import React, { Suspense, useCallback, ReactNode } from 'react';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { App, Dashboard, Postings } from 'src/Organisms';

const useAppRender = (child: ReactNode) => useCallback(() => <Route>{(rotuerProps) => <App>{child}</App>}</Route>, [child]);

const Routes = () => {
  const renderDashBoard = useAppRender(<Dashboard />);

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/list">List</Link>
          </li>
          <li>
            <Link to="/portal/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/list">
          <Postings />
          {/* <SigninScreen></SigninScreen> */}
        </Route>
        <Route exact path="/portal/dashboard" render={renderDashBoard} />
      </Switch>
    </Router>
  );
};

export default Routes;
