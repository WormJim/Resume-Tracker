import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import React, { memo } from 'react';

const useStyles = makeStyles({
  root: {},
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
