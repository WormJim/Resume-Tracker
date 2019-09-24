import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import React, { memo } from 'react';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#FFFFFF',
    boxShadow: '0 32px 44px 0 rgba(131,146,167,0.20)',
    borderRadius: 6,
    width: '100%',
    padding: '10px',
    overflow: 'hidden',
  },
  small: {
    height: 100,
  },
  medium: {
    height: 205,
  },
  large: {
    height: 310,
  },
  full: {
    height: '100%',
  },
});

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'small' | 'medium' | 'large' | 'full';
}

const Card = ({ className, variant = 'full', ...props }: CardProps) => {
  const styles = useStyles();

  return (
    <div
      className={classNames(styles.root, variant && styles[variant], className)}
      {...props}
    ></div>
  );
};

export default memo(Card);
