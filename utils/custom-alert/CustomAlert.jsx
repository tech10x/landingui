import React from "react";
import alertBoxStyle from './CustomAlert.module.css';

const CustomAlert = ({ alertfor, message, closeButton, showOrHide }) => {

  return (
    <div className={`${showOrHide}`}>
 <div className={alertBoxStyle.container}>
  <div className={alertBoxStyle.overlay}></div>
  <div className={alertBoxStyle.alertBox} tabIndex="0">
    <h2 className={`text-center ${alertBoxStyle.heading}`}>{alertfor}</h2>
    <hr />
    <p className={`text-center ${alertBoxStyle.paragraph}`}>{message}</p>
    <hr />
   <button className={alertBoxStyle.button} onClick={closeButton}>Close</button>
  </div>
</div>

  </div>
  );
};

export default CustomAlert;


