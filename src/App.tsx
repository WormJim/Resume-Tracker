import { makeStyles } from '@material-ui/styles';
import React, { memo } from 'react';
import { TextInput, Card } from 'src/Atoms';

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
        <Card variant="medium">
          <TextInput
            placeHolder="Source"
            value="Hello World"
            error={false}
            onChange={(event) => event}
          ></TextInput>
        </Card>
      </form>
    </div>
  );
};

export default memo(App);
