import React from 'react';
import { HashRouter as Router,
         Switch,
         Route,
       } from 'react-router-dom';
import AppBar from './Components/AppBar';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Home from './Components/Home';
import Characters from './Components/Characters';


const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    top: 150,
    left: 250,
  }
}));

function App() {
  const classes = useStyles();
  return (

    <Router>
    <div>
      <AppBar />
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
    </div>
    </Router>
  );
}

export default App;

