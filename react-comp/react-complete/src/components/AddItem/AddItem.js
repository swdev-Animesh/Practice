import React, { useState } from "react";

const AddItem = (props) => {
  const [showForm, setShowForm] = useState(false);
  const setterFunction = function () {
    setShowForm(!showForm);
  };
  return (
    <div className="p-5 m-5">
      <button className="btn btn-primary btn-lg" onClick={setterFunction}>
        Input new info
      </button>
      {showForm && (
        <div className="container bg-info w-50 mx-auto rounded ">
          <p className="lead text-dark display-1 m-2 fw-bold">
            Enter New records :
          </p>
          <form className="form">
            <label for="description-input" className="form-label">
              Enter the description
            </label>
            <input
              className="form-control"
              type="text"
              id="description-input"
            ></input>
            <br></br>
            <label for="date-id" className="form-label">
              Enter date :
            </label>
            <input className="form-control" type="date" id="date-id"></input>
            <br></br>
            <label for="amount-id" className="form-label">
              Enter the amount :
            </label>
            <input
              className="form-control"
              type="number"
              id="amount-id"
            ></input>
            <button className="btn btn-lg btn-success m-5">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};
export default AddItem;
