import { makeStyles } from '@material-ui/styles';
import React, { memo } from 'react';
import { Card, Link } from 'src/Atoms';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    width: 400,
    display: 'flex',
    flexDirection: 'column',
    margin: 5,
    // height: 'auto',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardOverflow: {
    boxShadow: '0 0',
    borderRadius: 0,
    height: 'auto',
  },
  hideOver: {
    display: 'flex',
    // boxShadow: 'inset 0px -20px 10px rgba(0,0,0,0.2)',
  },
  status: {
    displa: 'flex',
    flexDirection: 'column',
  },
});

interface PostCardProps {
  source: {
    details: string;
    companyName: string;
    position: string;
    reference: string;
    dateApplied: string;
    status: string;
  };
}

const PostCard = ({ source }: PostCardProps) => {
  const styles = useStyles();

  return (
    <Card className={styles.card} variant="small">
      <div className={styles.cardHeader}>
        <Link href={source.reference} blank={true}>
          <Typography>{source.position}</Typography>
        </Link>
        <div>
          <Typography>{source.dateApplied}</Typography>
          <Typography>{source.status}</Typography>
        </div>
      </div>
      <Typography>{source.companyName}</Typography>
      <div className={styles.hideOver}>
        <Card className={styles.cardOverflow} variant="small">
          <Typography>{source.details}</Typography>
        </Card>
      </div>
    </Card>
  );
};

export default memo(PostCard);
