import { makeStyles } from '@material-ui/styles';
import React, { memo } from 'react';
import TextInput from 'src/Atoms/TextInput/TextInput';

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
      <form>
        <TextInput
          placeHolder="Source"
          value="Hello World"
          error={false}
          onChange={(event) => event}
        ></TextInput>
      </form>
    </div>
  );
};

export default memo(App);
