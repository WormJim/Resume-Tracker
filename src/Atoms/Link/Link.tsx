import React, { memo, ReactNode } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link as MaterialLink } from '@material-ui/core';
import classNames from 'classnames';

const useStyles = makeStyles({
  root: {},
});

interface LinkProps {
  children: ReactNode;
  className?: string;
  href: string;
  blank?: boolean;
  target?: string;
  underline?: string;
}

const Link = ({ blank, children, className, href, target, underline = 'hover' }: LinkProps) => {
  const styles = useStyles();

  return (
    <>
      <MaterialLink
        className={classNames(styles.root, className)}
        href={href}
        rel={blank ? 'noopener noreferrer' : undefined}
        target={blank ? '_blank' : target}
        underline={underline}
      >
        {children}
      </MaterialLink>
    </>
  );
};

export default memo(Link);
