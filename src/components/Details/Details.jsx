import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import useTransactions from "./useTransactions";

import useStyles from "./styles";

const Details = ({ title }) => {
  const { income, expense } = useStyles();
  const [total, chartData] = useTransactions(title);

  return (
    <Card className={title === "Income" ? income : expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default Details;
