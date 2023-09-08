import React from "react";
import "./Sticky.css";

function Sticky() {
  return (
    //This is the implimentattion of sticky with related to some div ... sticky till some div is present .
    <div className="container-fluid">
      <div className="row position-relative">
        <div className="col-8 height-pix bg-info position-relative ">
          This is my Kingdom
        </div>
        {/* child is position sticky and parent is position relative ... sticky works relatively. */}
        <div className="col-4 position-sticky position-top h-50 text-bg-dark">
          Ok sticky
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="height-pix col-4 bg-success mx-auto">Second Divs</div>
        <div className="height-pix col-4 bg-primary mx-auto">Second Divs</div>
      </div>
    </div>
  );
}

export default Sticky;
