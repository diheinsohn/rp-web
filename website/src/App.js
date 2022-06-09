import React from 'react';
import Layout from "./Layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { withStyles } from "@mui/styles";

const styles = {
  root: {
    display: 'flex',
    minHeight: '100vh',
  }
}

const mdTheme = createTheme({
  spacing: [0, 2, 3, 5, 8],
  palette: {
    primary: {
      main: '#190C4D',
    },
    secondary: {
      main: '#FF990F',
    },
  },
  appContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  mainContent: {
    flex: 1,
  },

});

const App = props => {
  const { classes } = props;

  return (
    <ThemeProvider theme={mdTheme}>
      <div className={classes.root}>
        <Layout />
      </div>
    </ThemeProvider>
  );
}

export default withStyles(styles)(App);
