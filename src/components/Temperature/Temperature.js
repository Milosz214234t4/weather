import React, { useState } from "react";
import "../Temperature/Temperature.scss";
function Temperature({ temperature, displayindex, isCelsius, Error }) {
  // console.log(temperature[displayindex])
  if(!Error){
  if (isCelsius) {
    return (
      <h2 className="temperature-value">
        {Number.parseInt(temperature[displayindex] - 273.15)}
      </h2>
    );
  } else {
    return (
      <h2 className="temperature-value">
        {Number.parseInt((temperature[displayindex] - 273.15) * 1.8 + 32)}
      </h2>
    );
  }
}
else{
  return(
    <></>
  )
}
}

export default Temperature;
