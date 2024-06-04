"use client";
import React, { useCallback, useState } from "react";
import alertBoxStyle from './CustomAlert.module.css';

const CustomAlert = ({ error, message }) => {
    const [isOpen, setIsopen] = useState(true);

    const closeButton = useCallback(() => {
        setIsopen(isOpen => !isOpen)
    }, []);

  return (
    <>
    {isOpen &&
 <div className={alertBoxStyle.container}>
  <div className={alertBoxStyle.overlay}></div>
  <div className={alertBoxStyle.alertBox} tabIndex="0">
    <h2 className={`text-center ${alertBoxStyle.heading}`}>{error}</h2>
    <hr />
    <p className={`text-center ${alertBoxStyle.paragraph}`}>{message}</p>
    <hr />
   <button className={alertBoxStyle.button} onClick={closeButton}>Close</button>
  </div>
</div>
}
  </>
  );
};

export default CustomAlert;


