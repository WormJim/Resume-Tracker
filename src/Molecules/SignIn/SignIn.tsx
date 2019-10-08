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

  // This is Temporary Auth for developmet purposes only.
  // Ideally auth will be checed through Redux and
  // Server Authentication
  const loginClick = useCallback(() => {
    const age = 60 * 5;

    document.cookie = `login=true; max-age=${age}`;
    history.push('/portal/dashboard');
  }, [history]);

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
