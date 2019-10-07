import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import React, { memo, ReactNode } from 'react';
import { Card } from 'src/Atoms';

const useStyles = makeStyles({
  root: {},
});

interface TableProps {
  children: ReactNode;
  className?: string;
}

const Table = ({ children, className }: TableProps) => {
  const styles = useStyles();

  return (
    <>
      <Card>
        <div className={classNames(styles.root, className)}>{children}</div>
      </Card>
    </>
  );
};

export default memo(Table);
