import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import React, { memo } from 'react';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    padding: '8px 10px',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  postCard: {
    maxWidth: 345,
    width: '100%',
  },
});

interface PostingsInterface {
  className?: string;
}

const Postings = ({ className }: PostingsInterface) => {
  const styles = useStyles();

  return (
    <>
      <div className={styles.root}>{'Add Something'}</div>
    </>
  );
};

export default memo(Postings);
