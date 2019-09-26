import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import React, { memo, ReactNode } from 'react';

const useStyles = makeStyles({
  root: {},
});

interface SiteLayoutProps {
  children: ReactNode;
  className?: string;
}

const SiteLayout = ({ className, children }: SiteLayoutProps) => {
  const styles = useStyles();

  return (
    <>
      <div className={classNames(styles.root, className)}>{children}</div>
    </>
  );
};

export default memo(SiteLayout);
