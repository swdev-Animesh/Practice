//import logo from "./logo.svg";
import "./App.css";
import Modal from "./modal-components/Modal";
import ItemRender from "./components/ItemList/ItemRender";
function App() {
  const listData = [
    {
      date: new Date(2023, 8, 11),
      expense: "1. Something that I Bought on that day",
      amount: 53,
    },
    {
      date: new Date(2023, 3, 12),
      expense: "2 .Something that I Bought on that day",
      amount: 52,
    },
    {
      date: new Date(2023, 4, 10),
      expense: "3 .Something that I Bought on that day",
      amount: 51,
    },
  ];

  return (
    <div className="App">
      <Modal></Modal>
      <hr />
      <div className="container conatiner-fluid mx-auto text-light text-center">
        Lets Start This Project!
      </div>
      <ItemRender date="DATE" info="Expense Name" amount="Amount"></ItemRender>
      <ItemRender
        date={listData[0].date}
        info={listData[0].expense}
        amount={listData[0].amount}
      ></ItemRender>
      <ItemRender
        date={listData[1].date}
        info={listData[1].expense}
        amount={listData[1].amount}
      ></ItemRender>
      <ItemRender
        date={listData[2].date}
        info={listData[2].expense}
        amount={listData[2].amount}
      ></ItemRender>
    </div>
  );
}

export default App;
