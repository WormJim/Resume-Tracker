import { Button, Card, CardContent, makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import React, { memo, ReactNode, useCallback } from 'react';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  root: {},
});

interface SignInProps {
  children?: ReactNode;
  className?: string;
}

const SignIn = ({ children, className }: SignInProps) => {
  const styles = useStyles();
  const history = useHistory();

  return (
    <Card className={classNames(styles.root, className)}>
      <CardContent>
        <Button onClick={loginClick}>Login</Button>
        {children}
      </CardContent>
    </Card>
  );
};

export default memo(SignIn);
