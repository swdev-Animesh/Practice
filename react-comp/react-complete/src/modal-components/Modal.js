import React from "react";
import { useState } from "react";
import styles from "./modal.module.css";
const Modal = (props) => {
  const [showModal, setShowModal] = useState(false);
  //   using the states to update UI . when button is clicked state is updated ..and based on updated state UI is conditionally generated .
  function modalShowHandler(event) {
    event.preventDefault();
    setShowModal(true);
  }
  function modalCloseHandler() {
    setShowModal(false);
  }
  return (
    // crreated a div which will have button which when clicked shows the modal
    <div>
      <div className=" container container-fluid text-center p-5">
        <button className=" btn btn-success" onClick={modalShowHandler}>
          Click to open modal
        </button>
      </div>
      {/* creating a button , attaching listener onClick to it .. then using states to make the UI upgrade  */}
      {showModal && (
        <div className={styles.backdrop} onClick={modalCloseHandler}></div>
      )}
      {/* making 2 conditional returns based on states which we update on clicks ...
      1. click on button to conditionally generate modal 
      2. click on button of modal to conditionally remove the modal 
      3. both the remove and addition of modal depends on state that is initially set to false to not show modal then when button is clicked 
      it toggles the flase to true to show the modal and true to false to remove /hide the modal. */}
      {showModal && (
        <div
          className={`${styles.modalStyle} "container-fluid w-50 text-warning text-center m-5 p-4"`}
        >
          <p className="display-4 text-center">Here is the modal</p>
          <div className="text-center">
            <button className="btn btn-primary" onClick={modalCloseHandler}>
              click To close this modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
