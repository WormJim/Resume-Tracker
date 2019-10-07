import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import React, { memo, ReactNode } from 'react';
import { Card } from 'src/Atoms';

const useStyles = makeStyles({
  root: {
    width: '250px',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

interface SidebarProps {
  children?: ReactNode;
  className?: string;
  content?: string[];
  footer?: ReactNode;
  header?: ReactNode;
}

const Sidebar = ({ children, className, content, footer, header }: SidebarProps) => {
  const styles = useStyles();

  return (
    <>
      <Card className={classNames(styles.root, className)}>{children}</Card>
    </>
  );
};

export default memo(Sidebar);
