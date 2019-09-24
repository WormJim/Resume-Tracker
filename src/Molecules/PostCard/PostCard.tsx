import { makeStyles } from '@material-ui/styles';
import React, { memo } from 'react';
import { Card, Link } from 'src/Atoms';

const useStyles = makeStyles({
  card: {
    width: 400,
    display: 'flex',
    flexDirection: 'column',
    margin: 5,
  },
});

interface PostCardProps {
  source: { details: string; companyName: string; position: string; reference: string };
}

const PostCard = ({ source }: PostCardProps) => {
  const styles = useStyles();

  return (
    <Card className={styles.card} variant="medium">
      <div>
        <Link href={source.reference} blank={true}>
          {source.position}
        </Link>
      </div>
      <div>{source.companyName}</div>
      <div>{source.details}</div>
    </Card>
  );
};

export default memo(PostCard);
