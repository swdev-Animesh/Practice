import React from "react";
import "./Modal.css";

const Modal = (props) => {
  return (
    <div className=" h-w-full" onClick={props.closeFunction}>
      <div className="col-4 position-relative modal-box">
        <div className="modal-top text-center ">
          This is a Modal
          <button className="btn btn-sm btn-danger ms-5">X</button>
        </div>
        <div className="modal-body bg-light p-5">
          Culpa exercitation velit do proident adipisicing amet adipisicing
          ullamco cupidatat ad officia cupidatat est officia. Magna nulla irure
          nulla occaecat ut laboris aliquip sunt elit pariatur anim ad. Aute
          officia est ullamco officia adipisicing qui sunt quis reprehenderit
          excepteur. Consectetur consectetur irure aliqua deserunt eu. Et esse
          sit ipsum amet consectetur consectetur laboris magna. Deserunt ipsum
          laborum aute ad commodo nostrud cupidatat aliqua ex nulla dolor
          eiusmod. Ea nulla minim velit Lorem id exercitation voluptate veniam
          incididunt Lorem esse nulla enim.
          <button
            className="d-block btn btn-lg btn-block btn-primary mx-auto m-3"
            onClick={props.closeFunction}
          >
            Close this modal
          </button>{" "}
        </div>
      </div>
    </div>
  );
};
export default Modal;
