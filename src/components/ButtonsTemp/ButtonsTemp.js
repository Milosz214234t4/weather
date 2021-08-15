import React, { useState } from "react";
import "../ButtonsTemp/ButtonsTemp.scss";
function ButtonsTemp({ isCelsius, setIsCelsius, unit, setUnit, Error }) {
  if(!Error){
  return (
    <div className="container-buttons">
      <button
        className="buttontemp"
        onClick={() => {
          setIsCelsius(true);
          // latlon(lat, lon)
          // setError(false);
          setUnit("km/h");
        }}
      >
        °C
      </button>
      <button
        className="buttontemp"
        onClick={() => {
          setIsCelsius(false);
          setUnit("mph");
          // latlon(lat, lon)
          // setError(false);
        }}
      >
        °F
      </button>
    </div>
  );
      }
      else{
        return(<></>)
      }
}

export default ButtonsTemp;
