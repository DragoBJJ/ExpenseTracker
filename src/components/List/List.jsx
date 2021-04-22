import React, { useContext } from "react";
import { ExpenseTrackerContext } from "../../context/context";

import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide
} from "@material-ui/core";

import { Delete, MoneyOff } from "@material-ui/icons";
import useStyles from "./style";

const List = () => {
  const { list, avatarIncome, avatarExpense } = useStyles();
  const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext);

  return (
    <MUIList dense={false} className={list}>
      {transactions.map(item => (
        <Slide key={item.id} direction="down" in mountOnEnter unmountOnExit>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  item.type === "Income" ? avatarIncome : avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={item.category}
              secondary={`$${item.amount} - ${item.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={e => deleteTransaction(item.id)}
              >
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;
