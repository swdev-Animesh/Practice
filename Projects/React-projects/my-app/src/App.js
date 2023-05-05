import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import General from "./components/General";
import ExpensesInput from "../src/ExpensesInput/ExpensesInput";
import ExpensesFilter from "./ExpensesInput/ExpensesFilter";
let expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expe, setExp] = useState(expenses);
  function getDataFromChild(expObject) {
    setExp([expObject, ...expe]);
  }

  const [filteredYear, setFilteredYear] = useState("2023");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesInput childParentExpense={getDataFromChild}></ExpensesInput>

      <General>
        {expe.map((expen) => (
          <ExpenseItem
            title={expen.title}
            amount={expen.amount}
            date={expen.date}
          />
        ))}

        <p>&#169; This is Animesh Tiwari At Work!</p>
      </General>
    </div>
  );
}

export default App;
