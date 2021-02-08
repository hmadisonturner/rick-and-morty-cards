import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    width: 250,
  },
}));

export default function CharacterCard(props) {
  const classes = useStyles();
  return (
    <Grid item className={classes.gridItem}>
      <Card>
        <CardContent>
          <p> Name: {props.character.name} </p>
          <p> Status: {props.character.status} </p>
          <p> Species: {props.character.species} </p>
          <p> Type: {props.character.type} </p>
          <p> Origin: {props.character.origin.name} </p>
          <p> Location: {props.character.location.name} </p>
          <p>
            {" "}
            Episodes: {props.character.episode.length} episode
            {props.character.episode.length > 1 ? "s" : " "}
          </p>
        </CardContent>
      </Card>
    </Grid>
  );
}
