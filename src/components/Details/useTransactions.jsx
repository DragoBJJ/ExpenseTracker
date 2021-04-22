import { useContext } from "react";
import { ExpenseTrackerContext } from "../../context/context";

import {
  incomeCategories,
  expenseCategories,
  resetCategories
} from "../../constants/categories";

const useTransactions = title => {
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContext);

  // Sprawdzamy typ transakcji
  const transactionsType = transactions.filter(item => item.type === title);

  //W Wyszukanym typie transakcji sumujemy zystki lub wydatki
  const total = transactionsType.reduce(
    (total, next) => (total += next.amount),
    0
  );
  //  Sprawdzamy kategorie wydatków lub zysku naszego typu transakcji
  const categories = title === "Income" ? incomeCategories : expenseCategories;

  //Wyszukujmy powtórzone kategorie naszego typu i sumujemy ich zyski lub koszty
  transactionsType.forEach(transaction => {
    const category = categories.find(
      category => category.type === transaction.category
    );
    if (category) category.amount += transaction.amount;
  });
  const filteredCategories = categories.filter(item => item.amount > 0);

  const chartData = {
    datasets: [
      {
        data: filteredCategories.map(item => item.amount),
        backgroundColor: filteredCategories.map(item => item.color)
      }
    ],
    labels: filteredCategories.map(item => item.type)
  };

  return [total, chartData];
};

export default useTransactions;
