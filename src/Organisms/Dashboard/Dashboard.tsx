import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import React, { memo, ReactNode } from 'react';
import { DataTable } from 'src/Molecules';
import { mockData } from 'src/mockData';

const useStyles = makeStyles({
  root: {},
});

interface DashboardProps {
  children?: ReactNode;
  className?: string;
}

const Dashboard = ({ }: DashboardProps) => {
  const styles = useStyles();

  return (
    <>
      <DataTable data={mockData}></DataTable>
    </>
  );
};

export default memo(Dashboard);
