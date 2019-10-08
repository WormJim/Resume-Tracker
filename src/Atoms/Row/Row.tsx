import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import React, { memo, ReactNode } from 'react';

const useStyles = makeStyles<unknown, { greyBack: boolean }>({
  root: {
    background: ({ greyBack }) => (greyBack ? 'rgba(206, 206, 206, .2)' : undefined),
  },
});

interface RowProps {
  children?: ReactNode;
  className?: string;
  data?: {};
  greyVariant?: boolean;
}

const Row = ({ children, className, data, greyVariant }: RowProps) => {
  const styles = useStyles({ greyBack: true });

  return (
    <>
      <div className={classNames(styles.root, className)}>
        {data.companyName}
        {/* {Object.values(data).map<string[]>((value, idx) => (
          <div key={idx}>{value}</div>
        ))} */}
      </div>
    </>
  );
};

export default memo(Row);
