import { makeStyles } from '@material-ui/styles';
import React, { memo, ReactNode } from 'react';
import { Routes } from 'src/Organisms';
// import { SiteLayout } from 'src/Molecules';
// import { Postings } from 'src/Organisms';
import { SiteLayout, Sidebar, DataTable } from 'src/Molecules';
import { mockData } from 'src/mockData';

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

  // This is Temporary Auth for developmet purposes only.
  // Ideally auth will be checed through Redux and
  // Server Authentication
  const cookies = document.cookie;

  const [foo, bar] = cookies
    .split(';')
    .filter((cookie) => cookie.trim().indexOf('foo=') === 0)[0]
    .split('=');

  return (
    <div className={styles.root}>
      {children}
      {/* <Routes />
      <DataTable data={mockData}></DataTable>
      <Sidebar>{'Working'}</Sidebar> */}
    </div>
  );
};

export default memo(App);
