import React from "react";
const ItemRender = (props) => {
  let date = "";
  if (typeof props.date == "string") {
    date = props.date;
  } else {
    date = props.date.toLocaleDateString();
  }

  return (
    <div className="row justify-content-evenly bg-secondary container-fluid mx-auto p-1">
      <div className=" col-sm-2 border border-white rounded text-center text-light p-1">
        {date}
      </div>
      <div className="col-sm-5 border border-white rounded text-center p-1 cyan-100 itemInfo">
        {props.info}
      </div>

      <div className="col-sm-2 border border-white rounded bg-success text-center text-light p-1">
        {props.amount}
      </div>
      <div className="col-sm-2 text-center text-danger ">
        <button className="btn btn-danger">Del</button> ||
        <button className="btn btn-primary">Edit</button>
      </div>
    </div>
  );
};

export default ItemRender;
