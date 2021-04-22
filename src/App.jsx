import React from "react";
import { Grid } from "@material-ui/core";

import Details from "./components/Details/Details";
import Main from "./components/Main/Main";

import useStyles from "./styles";

const App = () => {
  const { desktop, mobile, main, grid, last } = useStyles();
  return (
    <div>
      <Grid
        className={grid}
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={11} sm={4} className={mobile}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3} className={main}>
          <Main />
        </Grid>
        <Grid item xs={11} sm={4} className={desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={11} sm={4} className={last}>
          <Details title="Expense" />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
