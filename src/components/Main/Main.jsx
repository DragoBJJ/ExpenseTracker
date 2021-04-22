import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider
} from "@material-ui/core";

import Form from "../Form/Form";
import List from "../List/List";

import useStyles from "./styles";

const Main = () => {
  const { subtitle, cartContent } = useStyles();

  const { divider } = useStyles();

  return (
    <Card>
      <CardHeader title="Expense Tracker" align="center" />
      <CardContent>
        <Typography variant="h6" align="center">
          <q>
            Empty pockets never stopped anyone from taking action. Only empty
            heads and empty hearts can do it
          </q>
        </Typography>
        <Divider className={divider} />
        <Form />
      </CardContent>
      <CardContent className={cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
