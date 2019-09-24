import { makeStyles } from '@material-ui/styles';
import React, { memo } from 'react';
import { Card } from 'src/Atoms';

const useStyles = makeStyles({
  card: {
    width: 400,
    display: 'flex',
    flexDirection: 'column',
  },
});

interface PostCardProps {
  source: { position: string };
}

const PostCard = ({ source }: PostCardProps) => {
  const styles = useStyles();

  return (
    <Card className={styles.card} variant="medium">
      <h2>{source.position}</h2>
    </Card>
  );
};

export default memo(PostCard);
