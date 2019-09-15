import { makeStyles } from '@material-ui/styles';
import React, { memo } from 'react';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: 'auto !important',
    minHeight: '100%',
    width: '100%',
  },
});

const App = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <h1>Hello</h1>
      <h2>World</h2>
    </div>
  );
};

export default memo(App);
