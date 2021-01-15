import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import IconButton from '@material-ui/core/IconButton';
import { CssBaseline } from '@material-ui/core';

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

const  Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <CssBaseline/>
        <AppBar position='static'>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <LibraryBooksIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Book Search
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
  );
}
export default Navbar