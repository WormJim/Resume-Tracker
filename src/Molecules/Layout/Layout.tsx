import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import React, { memo, ReactNode } from 'react';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  navContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 100,
  },
  extendedNav: {
    height: 52,
    padding: '0 30px',
    borderTop: 'none',
    boxShadow: 'none',
    background: '#283e4a',
  },
  children: {
    marginTop: 52,
  },
});

interface SiteLayoutProps {
  children: ReactNode;
  className?: string;
}

const SiteLayout = ({ children, className }: SiteLayoutProps) => {
  const styles = useStyles();

  return (
    <>
      {/* <div className={classNames(styles.root, className)}> */}
      <header className={classNames(styles.navContainer, styles.extendedNav)}></header>
      <div className={styles.children}>{children}</div>
      {/* </div> */}
    </>
  );
};

export default memo(SiteLayout);
