import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import React, { memo } from 'react';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#FFFFFF',
    boxShadow: '0 32px 44px 0 rgba(131,146,167,0.20)',
    borderRadius: 6,
    width: '100%',
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
  leaderBoard: {
    height: '100%',
  },
});

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'small' | 'medium' | 'large' | 'leaderBoard';
}

const Card = ({ className, variant, ...props }: CardProps) => {
  const classes = useStyles();

  return (
    <div
      className={classNames(classes.root, variant && classes[variant], className)}
      {...props}
    ></div>
  );
};

export default memo(Card);
