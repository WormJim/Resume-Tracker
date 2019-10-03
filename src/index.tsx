import { makeStyles } from '@material-ui/styles';
import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import { Routes } from 'src/Organisms';

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

const Root = memo(() => {
  const styles = useStyles();

  return (
    // <div className={styles.root}>
    <Routes />
    // </div>
  );
});

// const Root = () => <App />;

ReactDOM.render(<Root />, document.getElementById('index'));
