import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import React, { memo, ReactNode } from 'react';
import { Card } from 'src/Atoms';

const useStyles = makeStyles({
  root: {},
});

interface SidebarProps {
  children?: ReactNode;
  className?: string;
}

const Sidebar = ({ children, className }: SidebarProps) => {
  const styles = useStyles();

  return (
    <>
      <Card className={classNames(styles.root, className)}>{children}</Card>
    </>
  );
};

export default memo(Sidebar);
