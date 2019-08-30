import React, { useState, useEffect } from 'react';
import Posting from './Containers/Posting/Posting';
import Header from './Components/Header/Header';
import Auth from './Components/Auth/Auth';

// import Filter from './Components/Filter/Filter';

import { fetchFromDB } from './util/fetch';
import AuthContext from './HoC/auth-context';
// import './App.css';

export default ({ user }) => {
  const [page, setPage] = useState('auth');
  const [info, setInfo] = useState([]);
  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    fetchFromDB(`posting/companies?user=marc`, setInfo);
  }, []);

  const switchPage = (pageName) => {
    setPage(pageName);
  };

  const login = () => {
    console.log('In Auth');

    setAuthState(true);
  };

  return (
    <>
      <AuthContext.Provider value={{ state: authState, login: login }}>
        <Header
          onLoadPostings={switchPage.bind(this, 'postings')}
          onLoadAuth={switchPage.bind(this, 'auth')}
        />
        <hr />
        {page === 'auth' ? (
          <Auth />
        ) : (
          <Posting
            user={'marc'}
            id={'5c90654a6b802d292c9308ae'}
            data={info}
            filled={true}
          />
        )}
        {/* <Filter user={'marc'} /> */}
      </AuthContext.Provider>
    </>
  );
};
