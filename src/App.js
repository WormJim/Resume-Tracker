import React, { useState, useEffect } from 'react';
import Posting from './Containers/Posting/Posting';
// import Filter from './Components/Filter/Filter';

// import './App.css';

import { fetchFromDB } from './util/fetch';

export default ({ user }) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchFromDB(`posting/companies?user=marc`, setInfo);
  }, []);

  useEffect(() => {
    console.log('Info =>', info);
  });

  return (
    <>
      <Posting
        user={'marc'}
        id={'5c90654a6b802d292c9308ae'}
        data={info}
        filled={true}
      />
      {/* <Filter user={'marc'} /> */}
    </>
  );
};
