import React from 'react';
// import { withRouter } from 'react-router-dom';

const AuthContext = React.createContext({ state: false, login: () => {} });

export default AuthContext;
