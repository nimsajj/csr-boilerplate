import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { topMenuStyles as useStyles } from "./styles";

const TopMenu = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link to="/" className={classes.link}>
            Title
          </Link>
        </Typography>
        <Button color="inherit">
          <Link to="/one-page" className={classes.link}>
            One page
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/two-page" className={classes.link}>
            Two page
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopMenu;
