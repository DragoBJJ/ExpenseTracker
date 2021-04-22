import React, { useState, useContext } from "react";
import { v4 as uuidV4 } from "uuid";
import { ExpenseTrackerContext } from "../../context/context";

import {
  TextField,
  Typography,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";

import useStyles from "./style";
import {
  incomeCategories,
  expenseCategories
} from "../../constants/categories";
import { formatDate } from "../../utils/formatDate";

const formState = {
  amount: "",
  category: "",
  type: "Income",
  date: formatDate(new Date())
};

const Form = () => {
  const { button } = useStyles();

  const [formData, setFormData] = useState(formState);
  const { addTransaction } = useContext(ExpenseTrackerContext);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const createTransaction = () => {
    const transaction = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidV4(),
      date: formatDate(new Date())
    };
    if (transaction.amount === 0 || transaction.category === "") return;
    addTransaction(transaction);
    setFormData(formState);
  };

  const selectedCategory =
    formData.type === "Income" ? incomeCategories : expenseCategories;

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            name="type"
            value={formData.type}
            onChange={e => handleChange(e)}
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            name="category"
            value={formData.category}
            onChange={e => handleChange(e)}
          >
            {selectedCategory.map(item => (
              <MenuItem key={item.type} value={item.type}>
                {item.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="amount"
          value={formData.amount}
          onChange={e => handleChange(e)}
          type="number"
          label="amount"
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="date"
          name="date"
          value={formData.date}
          onChange={e => handleChange(e)}
          label="date"
          fullWidth
        />
      </Grid>
      <Button
        className={button}
        variant="outlined"
        color="primary"
        fullWidth
        onClick={createTransaction}
      >
        Create
      </Button>
    </Grid>
  );
};

export default Form;
