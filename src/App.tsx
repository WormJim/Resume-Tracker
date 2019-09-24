import { makeStyles } from '@material-ui/styles';
import React, { memo } from 'react';
import { TextInput } from 'src/Atoms';
import { Card } from '@material-ui/core';

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
      <form className={styles.form}>
        <Card>
          <TextInput
            placeHolder="Source"
            value="Hello World"
            error={false}
            onChange={(event) => event}
          ></TextInput>
          <TextInput error={false} onChange={(event) => event} />
        </Card>
      </form>
    </div>
  );
};

export default memo(App);
