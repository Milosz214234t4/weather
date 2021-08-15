import React, { useState } from "react";
import "../ButtonsPlot/ButtonsPlot.scss";

function ButtonsPlot({
  tempbutton,
  precbutton,
  windbutton,
  setTempbutton,
  setPrecbutton,
  setWindbutton,
  numberButton,
  setNumberButton,
  Error
}) {
  // console.log(numberButton);
  function addborder(numberButton){
    let x = document.querySelector("#temp");
    let y = document.querySelector("#pop");
    let z = document.querySelector("#wind");
   


    if(numberButton == 1){
     

      x.classList.add("border-button");
      y.classList.remove("border-button");
      z.classList.remove("border-button");
     
      
    }
    if(numberButton == 2){
      y.classList.add("border-button");
      x.classList.remove("border-button");
      z.classList.remove("border-button");    }
    if(numberButton == 3){
      z.classList.add("border-button");
      y.classList.remove("border-button");
      x.classList.remove("border-button");    }
  }
  if(!Error){
  return (
    <div className = "buttons-pophumwind">
      <button
        className="buttonplot border-button"
        id="temp"
        onClick={() => {
          setTempbutton(true);
          setPrecbutton(false);
          setWindbutton(false);
          // setNumberButton(1);
          addborder(1);
        }}
      >
        Temperature
      </button>
      <button
        className="buttonplot"
        id="pop"

        onClick={() => {
          setTempbutton(false);
          setPrecbutton(true);
          setWindbutton(false);
          // setNumberButton(2);
          addborder(2);
        }}
      >
        Precipation
      </button>
      <button
        className="buttonplot"
        id="wind"

        onClick={() => {
          setTempbutton(false);
          setPrecbutton(false);
          setWindbutton(true);
          // setNumberButton(3);
          addborder(3);
        }}
      >
        Wind
      </button>
    </div>
  );
      }
      else{
        return(<></>)
      }
}

export default ButtonsPlot;
