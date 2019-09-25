import { makeStyles } from '@material-ui/styles';
import React, { memo } from 'react';
import mockData from 'src/mockData';
import { PostCard } from 'src/Molecules';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: 'auto !important',
    minHeight: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postCard: {
    maxWidth: 345,
  },
  postCardContainer: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
});

const App = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      {mockData.map((data, idx) => (
        <div className={styles.postCardContainer} key={idx}>
          <PostCard className={styles.postCard} source={data} />
        </div>
      ))}
    </div>
  );
};

export default memo(App);
