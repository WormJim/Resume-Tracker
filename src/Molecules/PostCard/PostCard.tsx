import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import React, { memo } from 'react';
import { useToggle } from 'src/Shared/Hooks';

const useStyles = makeStyles({
  cardHeader: {
    paddingBottom: 0,
  },
  cardCollapse: {
    paddingTop: 0,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transitionDuration: '300',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  overflow: {
    boxShadow: '0 0',
    borderRadius: 0,
    display: 'flex',
    cursor: 'pointer',
  },
  status: {
    displa: 'flex',
    flexDirection: 'column',
  },
});

interface PostCardProps {
  className: string;
  source: {
    applied: boolean;
    details: string;
    companyName: string;
    position: string;
    positionLocation: string;
    reference: string;
    dateApplied: string;
    status: string;
  };
}

const PostCard = ({ className, source }: PostCardProps) => {
  const [toggleDetails, setToggleDetails] = useToggle();

  const styles = useStyles();

  return (
    <Card className={className}>
      <CardHeader
        avatar={<Avatar aria-label={source.status}>{source.status.charAt(0).toUpperCase()}</Avatar>}
        title={source.position}
        subheader={source.companyName}
        className={styles.cardHeader}
      ></CardHeader>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={classNames(styles.expand, {
            [styles.expandOpen]: toggleDetails,
          })}
          onClick={setToggleDetails}
          aria-expanded={toggleDetails}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={toggleDetails} timeout="auto" unmountOnExit>
        <CardContent className={styles.cardCollapse}>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
          >{`Location: ${source.positionLocation}`}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">{`Applied: ${
            source.applied ? source.dateApplied : 'Not Yet'
          }`}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default memo(PostCard);
