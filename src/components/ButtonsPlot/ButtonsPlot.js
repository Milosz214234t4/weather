import React, { useState } from "react";
import "../ButtonsPlot/ButtonsPlot.scss";

function ButtonsPlot({
  tempbutton,
  precbutton,
  windbutton,
  setTempbutton,
  setPrecbutton,
  setWindbutton,
}) {
  // console.log(windbutton);

  return (
    <>
      <button
        className="buttonplot"
        onClick={() => {
          setTempbutton(true);
          setPrecbutton(false);
          setWindbutton(false);
        }}
      >
        Temperature
      </button>
      <button
        className="buttonplot"
        onClick={() => {
          setTempbutton(false);
          setPrecbutton(true);
          setWindbutton(false);
        }}
      >
        Precipation
      </button>
      <button
        className="buttonplot"
        onClick={() => {
          setTempbutton(false);
          setPrecbutton(false);
          setWindbutton(true);
        }}
      >
        Wind
      </button>
    </>
  );
}

export default ButtonsPlot;
