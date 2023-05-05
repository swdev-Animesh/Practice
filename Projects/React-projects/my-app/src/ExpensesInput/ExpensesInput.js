import React from "react";
import "./ExpensesInput.css";
import ExpensesForm from "./ExpensesForm";

function ExpensesInput(props) {
  let exObj = {};
  const saveChildParentExpense = (expenseObject) => {
    exObj = {
      ...expenseObject,
      id: Math.random().toString(),
    };
    props.childParentExpense(exObj);
  };
  return (
    <div className="new-expense">
      <ExpensesForm childParentExpense={saveChildParentExpense} />
    </div>
  );
}
export default ExpensesInput;
