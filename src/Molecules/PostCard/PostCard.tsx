import { makeStyles } from '@material-ui/styles';
import React, { memo } from 'react';
import { Card, Link } from 'src/Atoms';

const useStyles = makeStyles({
  card: {
    width: 400,
    display: 'flex',
    flexDirection: 'column',
  },
});

interface PostCardProps {
  source: { details: string; companyName: string; position: string; reference: string };
}

const PostCard = ({ source }: PostCardProps) => {
  const styles = useStyles();

  return (
    <Card className={styles.card} variant="medium">
      <h2>
        <Link href={source.reference} blank={true}>
          {source.position}
        </Link>
      </h2>
      <h3>{source.companyName}</h3>
      <div>{source.details}</div>
    </Card>
  );
};

export default memo(PostCard);
