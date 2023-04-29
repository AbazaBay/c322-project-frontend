import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import '../App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Appbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" className={classes.title}>
            FlashDelivery
          </Typography>
          <button className="NavButton" onClick={event =>  window.location.href='/'}>Menu</button>
          <button className="NavButton" onClick={event =>  window.location.href='/MakeOrder'}>Order</button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
