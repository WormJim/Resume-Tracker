import {
  makeStyles,
  Link,
  Typography,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Toolbar,
  Tooltip,
  Paper,
} from '@material-ui/core';
import classNames from 'classnames';
import React, { memo, ReactNode } from 'react';

const useStyles = makeStyles({
  root: {},
  content: {
    padding: 0,
    margin: 10,
  },
  spacer: {
    flex: '1 1 100%',
  },
  td: {
    borderBottom: 'none',
  },
  rowGrey: {
    background: 'rgba(171, 183, 215, 0.3)',
  },
  rowColor: {
    background: '#fff',
  },
});

interface DataTableProps {
  children?: ReactNode;
  className?: string;
  columns?: string[];
  data?: {
    applied: boolean;
    details: string;
    companyName: string;
    position: string;
    positionLocation: string;
    reference: string;
    dateApplied: string;
    status: string;
    motivation: number;
    connection: any[];
  }[];
  header?: ReactNode;
  title?: string;
}

const DataTable = ({ children, className, data }: DataTableProps) => {
  const styles = useStyles();

  return (
    <Paper>
      <Toolbar>
        <Typography>Postings</Typography>
        <div className={styles.spacer} />
        <Link>
          <Typography>SeeAll</Typography>
        </Link>
      </Toolbar>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date Added</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>Applied</TableCell>
            <TableCell>Date Applied</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data ? (
            data.map((row, idx) => (
              <TableRow key={idx} className={idx % 2 === 0 ? styles.rowGrey : styles.rowColor}>
                <TableCell className={styles.td}>Today</TableCell>
                <TableCell className={styles.td}>{row.companyName}</TableCell>
                <TableCell className={styles.td}>
                  <Link href={row.reference}>{row.position}</Link>
                </TableCell>
                <TableCell className={styles.td}>{row.applied}</TableCell>
                <TableCell className={styles.td}>{row.dateApplied}</TableCell>
                <TableCell className={styles.td}>{row.status}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <Typography>No Data</Typography>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default memo(DataTable);
