import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#808080',
    boxShadow: '0 32px 44px 0 rgba(131,146,167,0.20)',
    borderRadius: 6,
    width: '100%',
    height: 205,
  },
});

export interface CardProps {
  children: React.ReactNode;
}

const Card = ({ ...props }: CardProps) => {
  const classes = useStyles();

  return <div className={classes.root} {...props}></div>;
};

export default memo(Card);
