import React from "react";
//import { useState } from "react";
//importing components for sticky and modal
// import Sticky from "./Components/Sticky/Sticky";
// import Modal from "./Components/Modal/Modal";
import ModalBs from "./Components/Modal/ModalBs";

function App() {
  //These are states and functions used for making and working of Modal with react logic .
  // const [modalState, setModal] = useState(false);
  // const setModalFunction = () => {
  //   setModal(true);
  // };
  //Sending this resetModal function as props to the component where it is triggered.
  // function resetModal() {
  //   setModal(false);
  // }

  return (
    <div>
      {/* //This is the implimentattion of sticky with related to some div ..sticky till some div is present .. */}
      {
        /* <button
        className="btn btn-success mx-auto btn-md btn-dark mx-auto d-block m-5"
        onClick={setModalFunction}
      >
        Click here for Modal
      </button>
      {modalState && <Modal closeFunction={resetModal}></Modal>}
     
      <Sticky></Sticky> */
        // here we have Sticky component which sticks to the display relatively .If you want that that parent will have position relative and
        // child will have position sticky...see example for better understanding ...
        // also we have modal that works with react state logic .. position fixed and top left right properties .
        //modal app that works just with js is also present in public folder
      }
      {/* <ModalBs></ModalBs>   this component is based on fully bootstrap and no react logic...replace class with className and just import from 
      bootstrap docs page and make a component out of it ... but it does not use react logic it just use js for implimentation*/}
    </div>
  );
}

export default App;
