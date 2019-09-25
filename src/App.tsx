import { makeStyles } from '@material-ui/styles';
import React, { memo } from 'react';
import { Postings } from 'src/Organisms';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: 'auto !important',
    minHeight: '100%',
    width: '100%',
    justifyContent: 'center',
  },
});

const App = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Postings />
    </div>
  );
};

export default memo(App);
