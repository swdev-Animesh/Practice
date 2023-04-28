import "./ExpenseItem.css";

function ExpenseItem(props) {
  // let dateToday = prompt("what is the date today");
  // let expenseName = prompt("tell on what you spend your money?");
  // let cost = prompt("amount?");
  return (
    <div className="expense-item">
      <div>
        <div>{props.date.toLocaleString("en-US", { month: "long" })}</div>
        <div>{props.date.toLocaleString("en-US", { day: "2-digit" })}</div>
        <div>{props.date.getFullYear()}</div>
      </div>

      <h2 className="expense-item__description">{props.title}</h2>
      <h2 className="expense-item__price "> {props.amount}</h2>
    </div>
  );
}

export default ExpenseItem;
