import { makeStyles } from '@material-ui/styles';
import React, { memo } from 'react';
import { Postings } from 'src/Organisms';
import { SiteLayout } from 'src/Molecules';

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
      <SiteLayout>
        <Postings />
      </SiteLayout>
    </div>
  );
};

export default memo(App);
