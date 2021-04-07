import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 300,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const card = props.card;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={card.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {card.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {card.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <FontAwesomeIcon className="icon" icon={faThumbsUp} />
        <span>{card.like}</span>

        <FontAwesomeIcon className="icon" icon={faComment} />
        <span>{card.comment}</span>
      </CardActions>
    </Card>
  );
}
