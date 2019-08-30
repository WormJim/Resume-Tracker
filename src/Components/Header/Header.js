import React, { useContext } from 'react';
import AuthContext from '../../HoC/auth-context';

const Header = (props) => {
  const auth = useContext(AuthContext);

  const postings = () => {
    return (
      <>
        <button onClick={props.onLoadPostings}>Postings</button>
        {' | '}
      </>
    );
  };

  return (
    <header>
      {auth.state ? postings() : null}
      <button onClick={props.onLoadAuth}>Auth</button>
    </header>
  );
};

export default Header;
