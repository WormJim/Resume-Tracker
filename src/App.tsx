import { makeStyles } from '@material-ui/styles';
import React, { memo } from 'react';
// import { SiteLayout } from 'src/Molecules';
// import { Postings } from 'src/Organisms';
import { Sidebar } from 'src/Molecules';

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
      {/* <SiteLayout>
        <Postings />
      </SiteLayout> */}
      {/* <Postings /> */}
      <Sidebar>
        <div>Header Logo</div>
        <div>
          <div>Dashboard</div>
          <div>Postings</div>
          <div>Metrics</div>
          <div>Metrics</div>
          <div>Account</div>
        </div>
        <div>Footer Content</div>
      </Sidebar>
    </div>
  );
};

export default memo(App);
