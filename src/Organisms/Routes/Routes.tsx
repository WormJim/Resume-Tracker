import React, { createContext, memo, useCallback, useContext, useEffect, useRef } from 'react';
import {
  BrowserRouter,
  HashRouter,
  Redirect,
  Route,
  RouteComponentProps,
  Router,
  Switch,
  Link,
} from 'react-router-dom';
import { Postings } from 'src/Organisms';

const Routes = () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <Link to="/list">List</Link>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route path="/list">
        <Postings />
      </Route>
    </Switch>
  </HashRouter>
);

export default Routes;
