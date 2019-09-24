import { makeStyles } from '@material-ui/styles';
import React, { memo } from 'react';
import mockData from 'src/mockData';
import PostCard from 'src/Organisms/PostCard/PostCard';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: 'auto !important',
    minHeight: '100%',
    width: '100%',
  },
  form: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
  },
});

const App = () => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      {mockData.map((data, idx) => (
        <PostCard source={data} key={idx}></PostCard>
      ))}
    </div>
  );
};

export default memo(App);
