import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { grey } from "@material-ui/core/colors";
//import IconButton from "@material-ui/core/IconButton";
//import MenuIcon from "@material-ui/icons/Menu";
//import history from '../History'
import {Link} from 'react-router-dom'

const useStyles = makeStyles ({
    root:{
        flexGrow: 1
    },
    title:{
        flexGrow: 1
    },
    app:{
        backgroundColor: 'gray',
        position: "fixed",
        top: 0,

    },
    btn:{
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Roboto, Sans-Serif",
        marginRight: '15px'
    },
    link:{
      color: 'white',
      textDecoration: 'none'
    }
}) 

export default function Navbar() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.app} position="static">
          <Toolbar className={classes.tool}>
          <Typography variant="h6" className={classes.title}>
          </Typography>
          <Link className={classes.link} to='/'>
            <Button className={classes.btn} color="inherit">Home</Button>
          </Link>
          <Link className={classes.link} to='/Graph'>
            <Button className={classes.btn} color="inherit">Graph</Button>
          </Link>
          <Link className={classes.link} to='/Waste'>
            <Button className={classes.btn} color="inherit">WaSte</Button>
          </Link>
          <Link className={classes.link} to='/Depot'>
            	<Button className={classes.btn} color="inherit">depot</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
