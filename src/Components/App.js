import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { HashRouter as Router,
         Switch,
         Route,
       } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import AppFrame from './AppFrame';
import Home from './Home';
import Characters from './Characters';

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    top: 150,
    left: 250,
  }
}));

export default function App() {
  const classes = useStyles();
  return (
    <Router>
      <AppFrame/>
      <Container className={classes.container}>
        <Switch>
          <Route default exact path="/">
            <Home />
          </Route>
          <Route exact path="/Characters">
            <Characters />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

