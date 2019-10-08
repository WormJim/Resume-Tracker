import { makeStyles } from '@material-ui/styles';
import React, { memo, ReactNode, useEffect } from 'react';
import { useHistory } from 'react-router';

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

interface AppProps {
  children: ReactNode;
}

const App = ({ children }: AppProps) => {
  const styles = useStyles();
  const history = useHistory();

  // This is Temporary Auth for developmet purposes only.
  // Ideally auth will be checed through Redux and
  // Server Authentication
  const cookies = document.cookie;

  return <div className={styles.root}>{children}</div>;
};

export default memo(App);
