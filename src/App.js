import React from 'react';
import AppBar from './Components/AppBar';
import Container from '@material-ui/core/Container';
import ResponsiveDrawer from './Components/ResponsiveDrawer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    zIndex: 0,
  },
}));

function App() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  return (

    <div>
      <AppBar className={classes.appBar} />
      <ResponsiveDrawer className={classes.drawer} />
      <Container />
    </div>
  );
}

export default App;

