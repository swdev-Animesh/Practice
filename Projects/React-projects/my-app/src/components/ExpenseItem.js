import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import General from "./General";
import React, { useState } from "react";
function ExpenseItem(props) {
  // let dateToday = prompt("what is the date today");
  // let expenseName = prompt("tell on what you spend your money?");
  // let cost = prompt("amount?");

  const [title, setTitle] = useState(props.title);

  function clickHandler() {
    setTitle("Updated!!");
  }
  return (
    <General className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <h2 className="expense-item__description">{title}</h2>
      <h2 className="expense-item__price "> {props.amount}</h2>
      <button onClick={clickHandler}>Change Title</button>
    </General>
  );
}

export default ExpenseItem;
