import React, { useState, useEffect } from 'react';
import Input from '../../Components/Input/Input';
import { list } from '../../lib';
import { fetchFromDB } from '../../util/fetch';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// import styles from './Posting.css';

const Posting = ({ user, id, filled }) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    if (filled) {
      fetchFromDB(`posting/company?user=${user}&_id=${id}`, setPost);
    }
  }, []);

  const handleInputChange = ({ target }) => {
    const name = target.name;

    setPost({ ...post, [name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('The State =>', post);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {list.map((e, i) => {
          return <Input field={e} change={handleInputChange} key={i} />;
        })}
        <br />
        <br />
        {/* <button
          type='button'
          name='applied'
          className={'mdc-button mdc-button--raised'}>
          <span className={'mdc-button__label'}>Applied</span>
        </button> */}
        <Button variant='contained' size='small' color='secondary'>
          Applied
        </Button>
        <br />
        <br />
        <Button
          variant='contained'
          size='small'
          color='primary'
          type='submit'
          name='submit'>
          Submit
        </Button>
        {/* <input type='submit' name='submit' value='submit' /> */}
      </form>
    </>
  );
};

export default Posting;
